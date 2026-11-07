import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, cp, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as contract from '../packages/core/src/index.js';

// The bridge observes the old boolean API and the replacement structured result for the same regression.
const core: any = contract;
const fixture = JSON.parse(await readFile('fixtures/metadata.json', 'utf8'));
const fresh = (): any => { const data = structuredClone(fixture); data.fixture = false; return data; };
const ready = (value: any) => typeof value === 'boolean' ? value : value.legal === 'allowed' && value.readiness === 'ready';
const right = 'can_use_commercially';
async function vault(run: (root: string) => Promise<void>): Promise<void> {
  const root = await mkdtemp(join(tmpdir(), 'ui-vault-permission-'));
  try {
    await mkdir(join(root, 'fixtures'), { recursive: true });
    await cp('fixtures/content', join(root, 'fixtures/content'), { recursive: true });
    const snapshot = fixture.snapshots[0];
    await mkdir(join(root, snapshot.archive.path), { recursive: true });
    await cp('fixtures/content', join(root, snapshot.archive.path), { recursive: true });
    await run(root);
  } finally { await rm(root, { recursive: true, force: true }); }
}
const authorize = (data: any, root: string, context: any = {}) => core.authorize(data,
  data.entries[0].componentId, data.snapshots[0].snapshotId, right, { vaultRoot: root, fulfillments: [], ...context });
function addObligation(data: any): string {
  const text = 'Retain attribution for the requested operation';
  const ev = data.licenseEvidence[0]; ev.obligations.push(text);
  const ref = core.sha256(`obligation\0${ev.evidenceId}\0${text}`);
  for (const object of [data.entries[0], data.snapshots[0], ...data.snapshots[0].files]) {
    for (const decision of Object.values(object.rights) as any[]) {
      if (decision.conditionRefs) decision.conditionRefs.push(ref);
    }
  }
  return ref;
}

test('unfulfilled license obligations cannot become ready merely because legal permission is allowed', async () => {
  await vault(async root => {
    const data = fresh(); assert.equal(ready(await authorize(data, root)), true);
    addObligation(data);
    assert.equal(ready(await authorize(data, root)), false);
  });
});

test('restricted status without explicit scoped restrictions cannot silently allow collection export', async () => {
  await vault(async root => {
    for (const status of ['pro_only', 'restricted', 'license_unknown']) {
      const data = fresh(); data.entries[0].status = status;
      let allowed = false;
      try { allowed = ready(await core.authorize(data, data.entries[0].componentId, data.snapshots[0].snapshotId,
        'can_redistribute_component_collection', { vaultRoot: root, fulfillments: [] })); } catch { /* Invalid contradictory records are also fail-closed. */ }
      assert.equal(allowed, false, status);
    }
  });
});

test('duplicate original paths cannot be declared offline restorable', () => {
  const data = fresh(); data.snapshots[0].files[1].originalPath = data.snapshots[0].files[0].originalPath;
  assert.throws(() => core.validateMetadata(data), /mapping|original|Duplicate/i);
});

test('stored and restored file paths reject file-directory prefix collisions', () => {
  for (const field of ['path', 'originalPath']) {
    const data = fresh(); data.snapshots[0].files[1][field] = data.snapshots[0].files[0][field] + '/child';
    data.snapshots[0].archive.sha256 = core.manifestDigest(data.snapshots[0].files);
    assert.throws(() => core.validateMetadata(data), /mapping|prefix|directory/i);
  }
});

test('real license evidence missing or changed at vault-root path prevents authorization', async () => {
  await vault(async root => {
    const data = fresh(); assert.equal(ready(await authorize(data, root)), true);
    await writeFile(join(root, data.licenseEvidence[0].textPath), 'tampered legal text');
    assert.equal(ready(await authorize(data, root)), false);
    await rm(join(root, data.licenseEvidence[0].textPath));
    assert.equal(ready(await authorize(data, root)), false);
  });
});

test('real evidence symlink escape cannot authorize even when target bytes match the license', async () => {
  await vault(async root => {
    const data = fresh(); const path = join(root, data.licenseEvidence[0].textPath);
    await rm(path); await symlink(join(process.cwd(), data.licenseEvidence[0].textPath), path);
    assert.equal(ready(await authorize(data, root)), false);
  });
});

test('contract includes a separate preview axis and deterministic catalog projection', () => {
  assert.equal(typeof core.projectCatalog, 'function', 'NEW_CONTRACT_API missing, not a compile failure');
  const data = fresh();
  assert.ok(data.snapshots[0].preview, 'NEW_CONTRACT_FIELD missing');
  const first = core.projectCatalog(data);
  assert.deepEqual(core.projectCatalog(data), first);
});
