import { Ajv } from 'ajv';
import { MetadataSchema, SourcesSchema, rightNames, type Metadata, type Source, type Rights,
  type Scope, type LicenseEvidence, type RightName } from './schema.js';
import { componentId, snapshotId, archiveDirectory, manifestDigest, assertRelativePath } from './identity.js';

const ajv = new Ajv({ allErrors: true, strict: true });
const metadataValidator = ajv.compile<Metadata>(MetadataSchema);
const sourcesValidator = ajv.compile<Source[]>(SourcesSchema);

function unique<T>(items: readonly T[], key: (v: T) => string): Map<string, T> {
  const result = new Map<string, T>();
  for (const item of items) {
    const id = key(item);
    if (result.has(id)) throw new Error(`Duplicate identity: ${id}`);
    result.set(id, item);
  }
  return result;
}

function covers(evidence: Scope, target: Scope, sourceId: string): boolean {
  if (evidence.kind === 'source') return evidence.sourceId === sourceId;
  if (target.kind === 'source' || evidence.componentId !== target.componentId) return false;
  if (evidence.kind === 'entry') return true;
  if (target.kind === 'entry' || evidence.snapshotId !== target.snapshotId) return false;
  return evidence.kind === 'snapshot' || (target.kind === 'file' && evidence.path === target.path);
}

function validateRights(rights: Rights, scope: Scope, sourceId: string, evidence: Map<string, LicenseEvidence>): void {
  for (const name of rightNames) {
    const decision = rights[name];
    if (decision.state !== 'unknown' && !decision.evidenceRefs.length) throw new Error(`Missing evidence: ${name}`);
    for (const id of decision.evidenceRefs) {
      const record = evidence.get(id);
      if (!record || !covers(record.scope, scope, sourceId)) throw new Error(`Missing or out-of-scope evidence: ${id}`);
      if ((scope.kind === 'snapshot' || scope.kind === 'file') && record.upstreamVersion !== scope.snapshotId) throw new Error('Evidence version mismatch');
    }
  }
}

function validateInstant(value: string): void {
  const normalized = value.includes('.') ? value : value.replace('Z', '.000Z');
  if (!Number.isFinite(Date.parse(value)) || new Date(value).toISOString() !== normalized) throw new Error('Invalid calendar instant');
}

function validateSource(source: Source, evidence: Map<string, LicenseEvidence>): void {
  assertRelativePath(source.sourceId);
  if (source.checkStatus === 'not_live_verified' && source.lastCheckedAt !== null) throw new Error('Unverified source has check time');
  if (source.checkStatus !== 'not_live_verified' && source.lastCheckedAt === null) throw new Error('Missing source check time');
  if (source.lastCheckedAt !== null) validateInstant(source.lastCheckedAt);
  validateRights(source.rights, { kind: 'source', sourceId: source.sourceId }, source.sourceId, evidence);
}

export function validateSources(input: unknown): Source[] {
  if (!sourcesValidator(input)) throw new Error(ajv.errorsText(sourcesValidator.errors));
  unique(input, source => source.sourceId);
  for (const source of input) validateSource(source, new Map());
  return input;
}

function validateEvidence(data: Metadata): Map<string, LicenseEvidence> {
  const evidence = unique(data.licenseEvidence, item => item.evidenceId);
  for (const record of evidence.values()) {
    assertRelativePath(record.textPath);
    for (const notice of record.notices) assertRelativePath(notice);
    validateInstant(record.retrievedAt);
    const scope = record.scope;
    if (scope.kind === 'source') {
      if (!data.sources.some(s => s.sourceId === scope.sourceId)) throw new Error('Orphan source evidence');
    } else {
      if (!data.entries.some(e => e.componentId === scope.componentId)) throw new Error('Orphan entry evidence');
      if (scope.kind === 'snapshot' || scope.kind === 'file') {
        const snap = data.snapshots.find(s => s.componentId === scope.componentId && s.snapshotId === scope.snapshotId);
        if (!snap || (scope.kind === 'file' && !snap.files.some(f => f.path === scope.path))) throw new Error('Orphan snapshot/file evidence');
        if (record.upstreamVersion !== scope.snapshotId) throw new Error('Evidence version mismatch');
      }
    }
  }
  return evidence;
}

export function validateMetadata(input: unknown): Metadata {
  if (!metadataValidator(input)) throw new Error(ajv.errorsText(metadataValidator.errors));
  const data = input;
  const sources = unique(data.sources, item => item.sourceId);
  const entries = unique(data.entries, item => item.componentId);
  unique(data.snapshots, item => JSON.stringify([item.componentId, item.snapshotId]));
  const evidence = validateEvidence(data);
  for (const source of data.sources) validateSource(source, evidence);
  for (const entry of data.entries) {
    if (!sources.has(entry.sourceId) || entry.componentId !== componentId(entry.sourceId, entry.upstreamSlug)) throw new Error('Entry identity mismatch');
    validateRights(entry.rights, { kind: 'entry', componentId: entry.componentId }, entry.sourceId, evidence);
  }
  for (const snap of data.snapshots) {
    const entry = entries.get(snap.componentId);
    if (!entry || snap.snapshotId !== snapshotId(snap.upstream)) throw new Error('Snapshot identity mismatch');
    validateInstant(snap.fetchedAt);
    if (snap.archive.path !== archiveDirectory(entry.sourceId, entry.componentId, snap.snapshotId)) throw new Error('Unsafe archive directory');
    const scope = { kind: 'snapshot', componentId: snap.componentId, snapshotId: snap.snapshotId } as const;
    validateRights(snap.rights, scope, entry.sourceId, evidence);
    const paths = unique(snap.files, file => file.path);
    for (const file of snap.files) {
      assertRelativePath(file.path);
      assertRelativePath(file.originalPath);
      validateRights(file.rights, { ...scope, kind: 'file', path: file.path }, entry.sourceId, evidence);
      for (const ref of file.internalReferences) if (!paths.has(ref)) throw new Error('Missing internal file reference');
    }
    for (const dep of snap.dependencies) {
      if (dep.kind === 'internal' || dep.kind === 'asset') {
        assertRelativePath(dep.path);
        if (!paths.has(dep.path)) throw new Error('Missing dependency file');
      }
      if (dep.kind === 'npm') snapshotId(dep);
    }
    if (snap.archive.sha256 !== manifestDigest(snap.files)) throw new Error('Manifest digest mismatch');
    const complete = snap.archive.status === 'archived_complete';
    if (snap.archive.status === 'not_archived' && snap.files.length) throw new Error('Unarchived snapshot contains files');
    if (complete && (!snap.files.length || snap.archive.offlineRestorable !== true ||
        snap.dependencies.some(d => d.kind === 'unresolved'))) throw new Error('Incomplete archive cannot be complete');
    if (snap.archive.offlineRestorable === true && !complete) throw new Error('Restore claim requires complete archive');
    if (snap.offline_runtime_complete === true && (!complete || snap.dependencies.some(d => d.kind === 'remote' || d.kind === 'unresolved'))) throw new Error('Incomplete offline runtime');
    if (snap.files.length && ![entry.rights, snap.rights, ...snap.files.map(f => f.rights)]
      .every(r => r.can_archive_source.state === 'allowed')) throw new Error('Archiving lacks permission');
    if (complete) {
      const refs = [entry.rights, snap.rights, ...snap.files.map(f => f.rights)]
        .flatMap(r => rightNames.flatMap(name => r[name].evidenceRefs));
      for (const ref of refs) {
        const record = evidence.get(ref)!;
        if (!snap.files.some(f => f.type === 'license' && f.sha256 === record.sha256)) throw new Error('Missing preserved license text');
        for (const notice of record.notices) {
          if (!snap.files.some(f => f.type === 'notice' && f.originalPath === notice)) throw new Error('Missing preserved NOTICE');
        }
      }
    }
  }
  return data;
}

// Validate the full graph before any use decision; a detached decision is never an authorization token.
export function authorize(input: unknown, component: string, snapshot: string, right: RightName): boolean {
  const data = validateMetadata(input);
  if (data.fixture) return false;
  const entry = data.entries.find(e => e.componentId === component);
  const snap = data.snapshots.find(s => s.componentId === component && s.snapshotId === snapshot);
  if (!entry || !snap || snap.archive.status !== 'archived_complete') return false;
  return [entry.rights, snap.rights, ...snap.files.map(f => f.rights)].every(r => r[right].state === 'allowed');
}
