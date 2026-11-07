import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, cp, writeFile, unlink, symlink, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Ajv } from 'ajv';
import { MetadataSchema, SourceSchema, EntrySchema, SnapshotSchema, FileSchema, DependencySchema,
  LicenseEvidenceSchema, RightsSchema, validateMetadata, validateSources, authorize, componentId,
  snapshotId, archiveDirectory, manifestDigest, sha256, assertRelativePath, verifySnapshotFiles,
  type Metadata } from '../packages/core/src/index.js';

const fixture = JSON.parse(await readFile('fixtures/metadata.json', 'utf8')) as Metadata;
const seeds: unknown = JSON.parse(await readFile('config/sources.json', 'utf8'));
const copy = (): Metadata => structuredClone(fixture);
const first = (data: Metadata) => data.snapshots[0]!;
const commercial = 'can_use_commercially' as const;
const candidate = () => { const data = copy(); data.fixture = false; return data; };
const permitted = (data: Metadata) => authorize(data, first(data).componentId, first(data).snapshotId, commercial);

async function onDisk(run: (root: string, data: Metadata) => Promise<void>): Promise<void> {
  const temp = await mkdtemp(join(tmpdir(), 'ui-vault-contract-'));
  const root = join(temp, 'snapshot');
  try { await cp('fixtures/content', root, { recursive: true }); await run(root, copy()); }
  finally { await rm(temp, { recursive: true, force: true }); }
}

const verify = (root: string, data: Metadata) => verifySnapshotFiles(data, first(data).componentId, first(data).snapshotId, root);

test('all public machine schemas compile and infer the same runtime contract', () => {
  const ajv = new Ajv({ strict: true });
  for (const schema of [MetadataSchema, SourceSchema, EntrySchema, SnapshotSchema, FileSchema,
    DependencySchema, LicenseEvidenceSchema, RightsSchema]) assert.equal(typeof ajv.compile(schema), 'function');
  assert.equal(ajv.compile(MetadataSchema)(fixture), true);
  assert.equal(validateMetadata(copy()).fixture, true);
});

test('exactly twelve unique unverified source seeds keep all rights unknown and Watermelon dual entrances', () => {
  const sources = validateSources(seeds);
  assert.deepEqual(sources.map(s => s.sourceId).sort(), ['shadcn','watermelon','beui','arcui','boardui','affectui','bencho','agent-elements','assistant-ui','libraries-dev','leibox','kobra'].sort());
  assert.equal(sources.length, 12);
  for (const source of sources) {
    assert.equal(source.lastCheckedAt, null);
    assert.equal(source.checkStatus, 'not_live_verified');
    for (const decision of Object.values(source.rights)) assert.deepEqual(decision, { state: 'unknown', evidenceRefs: [] });
  }
  assert.deepEqual(sources.find(s => s.sourceId === 'watermelon')!.entrypoints.map(e => e.url), [
    'https://github.com/WatermelonCorp/watermelon-platform', 'https://github.com/WatermelonCorp/watermellon-registry']);
});

test('strict validation rejects missing fields, extra fields, coercion and legacy right aliases', () => {
  const data: any = copy();
  data.entries[0].unexpected = true; assert.throws(() => validateMetadata(data));
  delete data.entries[0].unexpected;
  data.entries[0].rights[commercial].state = true; assert.throws(() => validateMetadata(data));
  data.entries[0].rights[commercial].state = 'unknown';
  data.entries[0].rights.commercialUseAllowed = true; assert.throws(() => validateMetadata(data));
  delete data.entries[0].rights.commercialUseAllowed;
  delete data.entries[0].upstreamName; assert.throws(() => validateMetadata(data));
});

test('unknown never grants permission even though the string itself is truthy', () => {
  const data = candidate();
  assert.equal(permitted(data), true);
  first(data).rights[commercial] = { state: 'unknown', evidenceRefs: [] };
  assert.equal(permitted(data), false);
  first(data).rights[commercial] = { state: 'denied', evidenceRefs: ['fixture-permission'] };
  assert.equal(permitted(data), false);
});

test('one file exception blocks commercial use independently from permitted source archiving', () => {
  const data = candidate();
  first(data).files[0]!.rights[commercial] = { state: 'unknown', evidenceRefs: [] };
  assert.equal(permitted(data), false);
  assert.equal(first(validateMetadata(data)).archive.status, 'archived_complete');
});

test('fictional records can validate but can never authorize a real action', () => {
  assert.equal(permitted(copy()), false);
});

test('allowed and denied require evidence and dangling evidence references are rejected', () => {
  for (const state of ['allowed', 'denied'] as const) {
    const data = copy(); first(data).rights[commercial] = { state, evidenceRefs: [] };
    assert.throws(() => validateMetadata(data), /Missing evidence/);
  }
  const data = copy(); data.licenseEvidence = [];
  assert.throws(() => validateMetadata(data), /evidence/);
});

test('evidence cannot authorize outside its entry, snapshot or file scope', () => {
  const data = copy();
  data.licenseEvidence[0]!.scope = { kind: 'file', componentId: first(data).componentId, snapshotId: first(data).snapshotId, path: 'button.ts' };
  assert.throws(() => validateMetadata(data), /out-of-scope/);
  data.licenseEvidence[0]!.scope = { kind: 'snapshot', componentId: first(data).componentId, snapshotId: 'git:' + '2'.repeat(40) };
  assert.throws(() => validateMetadata(data), /Orphan/);
});

test('stable component identity is version independent and namespaces never collide', () => {
  assert.equal(componentId('agent-elements', 'tools/button'), 'agent-elements:tools/button');
  assert.notEqual(componentId('agent-elements', 'button'), componentId('bencho', 'button'));
  assert.equal(snapshotId({ kind: 'git', commit: 'a'.repeat(40) }), 'git:' + 'a'.repeat(40));
  assert.notEqual(snapshotId({ kind: 'git', commit: 'a'.repeat(40) }), snapshotId({ kind: 'git', commit: 'b'.repeat(40) }));
  for (const commit of ['main', 'abcdef', 'A'.repeat(40)]) assert.throws(() => snapshotId({ kind: 'git', commit }));
});

test('npm identity pins package, exact version and canonical integrity; registry pins content', () => {
  const integrity = 'sha256-' + Buffer.alloc(32).toString('base64');
  assert.equal(snapshotId({ kind: 'npm', name: '@fixture/button', version: '1.2.3', integrity }), `npm:@fixture/button@1.2.3+${integrity}`);
  for (const version of ['latest', '^1.0.0', '1.0', '01.2.3', '1.0.0-01']) assert.throws(() => snapshotId({ kind: 'npm', name: 'x', version, integrity }));
  assert.throws(() => snapshotId({ kind: 'npm', name: 'x', version: '1.0.0', integrity: 'sha256-nope' }));
  assert.equal(snapshotId({ kind: 'registry', sha256: 'b'.repeat(64) }), 'registry:sha256:' + 'b'.repeat(64));
});

test('component/snapshot mismatches and duplicate or orphan records fail', () => {
  const data = copy(); first(data).snapshotId = 'git:' + 'a'.repeat(40);
  assert.throws(() => validateMetadata(data), /identity mismatch/);
  const duplicate = copy(); duplicate.entries.push(duplicate.entries[0]!);
  assert.throws(() => validateMetadata(duplicate), /Duplicate/);
  const orphan = copy(); orphan.sources = []; assert.throws(() => validateMetadata(orphan), /Orphan|identity/);
});

test('all path surfaces reject traversal, absolute, drive, backslash, empty and reserved forms', () => {
  for (const path of ['../x', 'x/../a', '/tmp/x', 'C:/x', String.raw`\\server\x`, 'a\\b', '.', 'a/./b', 'a//b', 'a/', '', 'a/%2e%2e/b', 'a\n', 'CON', 'a.']) {
    assert.throws(() => assertRelativePath(path), Error, path);
  }
  assert.doesNotThrow(() => assertRelativePath('src/button.tsx'));
  const data = copy(); first(data).files[0]!.originalPath = '../escape';
  assert.throws(() => validateMetadata(data));
});

test('safe directory encoding is deterministic and never inserts raw colon/slash IDs', () => {
  const path = archiveDirectory('fixture', first(fixture).componentId, first(fixture).snapshotId);
  assert.equal(path, first(fixture).archive.path);
  assert.match(path, /^archive\/components\/fixture\/c-[a-f0-9]{64}\/s-[a-f0-9]{64}$/);
  assert.notEqual(path, archiveDirectory('fixture', first(fixture).componentId, 'git:'+'2'.repeat(40)));
});

test('SHA256 and sorted manifest tuple serialization follow independent fixed vectors', () => {
  assert.equal(sha256('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  const a = { path: 'a', size: 0, sha256: 'a'.repeat(64) };
  const b = { path: 'b', size: 1, sha256: 'b'.repeat(64) };
  assert.equal(manifestDigest([b, a]), sha256(`[["a",0,"${'a'.repeat(64)}"],["b",1,"${'b'.repeat(64)}"]]`));
  assert.throws(() => manifestDigest([a, a]), /duplicate/);
  const data = copy(); first(data).archive.sha256 = '0'.repeat(64); assert.throws(() => validateMetadata(data), /digest/);
});

test('archive, restore and runtime claims are separate and invalid transitions fail', () => {
  assert.equal(first(validateMetadata(copy())).offline_runtime_complete, false);
  const data = copy(); first(data).archive.offlineRestorable = null;
  assert.throws(() => validateMetadata(data), /Incomplete/);
  first(data).archive.offlineRestorable = true;
  first(data).dependencies.push({ kind: 'remote', url: 'https://example.invalid/api', reason: 'online service' });
  assert.doesNotThrow(() => validateMetadata(data));
  first(data).offline_runtime_complete = true; assert.throws(() => validateMetadata(data), /runtime/);
});

test('unresolved or missing internal dependency blocks a complete snapshot', () => {
  const data = copy(); first(data).dependencies.push({ kind: 'unresolved', specifier: 'dynamic', reason: 'not resolved' });
  assert.throws(() => validateMetadata(data), /Incomplete/);
  first(data).dependencies = [{ kind: 'internal', path: 'missing.ts' }];
  assert.throws(() => validateMetadata(data), /Missing dependency/);
});

test('unknown archive rights reject even a partial file collection', () => {
  const data = copy(); first(data).archive.status = 'archived_partial'; first(data).archive.offlineRestorable = null;
  first(data).rights.can_archive_source = { state: 'unknown', evidenceRefs: [] };
  assert.throws(() => validateMetadata(data), /permission/);
});

test('real filesystem fixture succeeds with exact manifest membership and bytes', async () => {
  await onDisk(async (root, data) => { await verify(root, data); });
});

test('real filesystem rejects missing and orphan files in both membership directions', async () => {
  await onDisk(async (root, data) => {
    await writeFile(join(root, 'orphan.ts'), 'orphan'); await assert.rejects(verify(root, data), /orphan/);
    await unlink(join(root, 'orphan.ts')); await unlink(join(root, 'button.ts'));
    await assert.rejects(verify(root, data), /missing/);
  });
});

test('real filesystem rejects changed content and changed size', async () => {
  await onDisk(async (root, data) => {
    const bytes = await readFile(join(root, 'button.ts')); bytes[0] = 0;
    await writeFile(join(root, 'button.ts'), bytes); await assert.rejects(verify(root, data), /hash\/size/);
    await writeFile(join(root, 'button.ts'), 'short'); await assert.rejects(verify(root, data), /hash\/size/);
  });
});

test('real filesystem rejects file and directory symlink escapes, including inward symlinks', async () => {
  await onDisk(async (root, data) => {
    await unlink(join(root, 'button.ts')); await symlink('/etc/passwd', join(root, 'button.ts'));
    await assert.rejects(verify(root, data), /Symlink/);
    await unlink(join(root, 'button.ts')); await symlink(join(root, 'LICENSE.txt'), join(root, 'button.ts'));
    await assert.rejects(verify(root, data), /Symlink/);
    await unlink(join(root, 'button.ts')); await symlink('/tmp', join(root, 'escape'), 'dir');
    await assert.rejects(verify(root, data), /Symlink/);
  });
});

test('real filesystem rejects symlink root and symlink ancestor root', async () => {
  await onDisk(async (root, data) => {
    const alias = join(root, '..', 'alias'); await symlink(root, alias, 'dir');
    await assert.rejects(verify(alias, data), /Symlink/);
    await mkdir(join(root, 'nested')); await assert.rejects(verify(join(alias, 'nested'), data), /Symlink/);
  });
});


test('complete snapshots preserve the exact license text and all declared NOTICE files', () => {
  const data = copy();
  first(data).files.find(f => f.type === 'license')!.type = 'metadata';
  assert.throws(() => validateMetadata(data), /preserved license/);
  const notice = copy(); notice.licenseEvidence[0]!.notices = ['NOTICE'];
  assert.throws(() => validateMetadata(notice), /preserved NOTICE/);
});

test('calendar-invalid instants and false source check timestamps are rejected', () => {
  const data = copy(); first(data).fetchedAt = '2026-02-31T00:00:00Z';
  assert.throws(() => validateMetadata(data), /calendar/);
  const sourceData = structuredClone(seeds) as any[];
  sourceData[0].lastCheckedAt = '2026-11-07T00:00:00Z';
  assert.throws(() => validateSources(sourceData), /Unverified/);
});


test('broad source evidence cannot silently authorize a different snapshot version', () => {
  const data = copy(); data.licenseEvidence[0]!.upstreamVersion = 'git:' + '2'.repeat(40);
  assert.throws(() => validateMetadata(data), /Evidence version mismatch/);
});
