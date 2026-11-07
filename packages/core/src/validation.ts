import { Ajv } from 'ajv';
import { MetadataSchema, SourcesSchema, InventorySchema, rightNames, type Metadata, type Source,
  type LicenseEvidence } from './schema.js';
import { validateRights, validateEvidenceRefs } from './rights-policy.js';
import { validateFileMapping } from './file-mapping.js';
import { componentId, snapshotId, archiveDirectory, manifestDigest, assertRelativePath } from './identity.js';

const ajv = new Ajv({ allErrors: true, strict: true });
const metadataValidator = ajv.compile<Metadata>(MetadataSchema);
const inventoryValidator = ajv.compile(InventorySchema);
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
    if (['pro_only', 'restricted', 'license_unknown'].includes(entry.status) && !entry.restrictions.length) throw new Error('Status requires explicit scoped restrictions');
    if (entry.status === 'license_unknown' && !entry.restrictions.some(r => r.state === 'unknown')) throw new Error('Unknown license status requires an unknown restriction');
    for (const restriction of entry.restrictions) {
      const scope = restriction.scope;
      if (scope.kind === 'source' || scope.componentId !== entry.componentId) throw new Error('Restriction scope mismatch');
      if (scope.kind === 'snapshot' || scope.kind === 'file') {
        const snap = data.snapshots.find(s => s.componentId === scope.componentId && s.snapshotId === scope.snapshotId);
        if (!snap || (scope.kind === 'file' && !snap.files.some(f => f.path === scope.path))) throw new Error('Orphan restriction scope');
      }
      if (restriction.state === 'denied' && !restriction.evidenceRefs.length) throw new Error('Denied restriction requires evidence');
      validateEvidenceRefs(restriction.evidenceRefs, scope, entry.sourceId, evidence, restriction.rights);
    }
  }
  for (const snap of data.snapshots) {
    const entry = entries.get(snap.componentId);
    if (!entry || snap.snapshotId !== snapshotId(snap.upstream)) throw new Error('Snapshot identity mismatch');
    validateInstant(snap.fetchedAt);
    if (snap.preview.localPath !== null) assertRelativePath(snap.preview.localPath);
    if (snap.preview.lastCheckedAt !== null) validateInstant(snap.preview.lastCheckedAt);
    if (snap.preview.status === 'preview_ready' && (snap.preview.lastCheckedAt === null || (snap.preview.localPath === null && snap.preview.upstreamUrl === null))) throw new Error('Ready preview requires checked demo location');
    if (['preview_unavailable', 'needs_adapter', 'unsafe_to_run'].includes(snap.preview.status) && snap.preview.reason === null) throw new Error('Preview limitation requires reason');
    if (snap.archive.path !== archiveDirectory(entry.sourceId, entry.componentId, snap.snapshotId)) throw new Error('Unsafe archive directory');
    const scope = { kind: 'snapshot', componentId: snap.componentId, snapshotId: snap.snapshotId } as const;
    validateRights(snap.rights, scope, entry.sourceId, evidence);
    validateFileMapping(snap.files);
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


export function assembleMetadata(sources: unknown, inventory: unknown): Metadata {
  if (!inventoryValidator(inventory)) throw new Error(ajv.errorsText(inventoryValidator.errors));
  return validateMetadata({ ...(inventory as object), sources });
}
