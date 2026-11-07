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

test('conditional permission retains legal allowed and distinguishes unknown, unsatisfied and proved fulfillment', async () => {
  await vault(async root => {
    const data = fresh(); const conditionId = addObligation(data);
    const unknown = await authorize(data, root);
    assert.equal(unknown.legal, 'allowed'); assert.equal(unknown.readiness, 'unknown');
    assert.ok(unknown.fulfillment.every((f: any) => f.state === 'unknown'));
    const proofPath = 'fulfilled-notice.txt'; await writeFile(join(root, proofPath), 'Attribution retained for fixture test');
    const proof = { path: proofPath, sha256: core.sha256('Attribution retained for fixture test') };
    const scopes = [data.entries[0], data.snapshots[0], ...data.snapshots[0].files].map(object => object.rights[right].scope);
    const receipts = scopes.map(scope => ({ conditionId, scope, state: 'satisfied', proof }));
    assert.equal((await authorize(data, root, { fulfillments: receipts })).readiness, 'ready');
    receipts[0]!.state = 'unsatisfied';
    const unmet = await authorize(data, root, { fulfillments: receipts });
    assert.equal(unmet.legal, 'allowed'); assert.equal(unmet.readiness, 'blocked');
    receipts[0]!.state = 'satisfied'; receipts[0]!.proof = null as any;
    assert.equal((await authorize(data, root, { fulfillments: receipts })).readiness, 'unknown');
    receipts[0]!.proof = proof; await writeFile(join(root, proofPath), 'corrupted receipt');
    assert.equal((await authorize(data, root, { fulfillments: receipts })).readiness, 'blocked');
  });
});

test('obligation scope, evidence right applicability and exact condition references cannot be bypassed', async () => {
  const data = fresh(); addObligation(data);
  data.snapshots[0].rights[right].conditionRefs = [];
  assert.throws(() => core.validateMetadata(data), /conditions omitted/);
  const mismatched = fresh(); mismatched.snapshots[0].rights[right].scope = { kind: 'source', sourceId: 'fixture' };
  assert.throws(() => core.validateMetadata(mismatched), /scope mismatch/);
  const wrongRight = fresh(); wrongRight.licenseEvidence[0].applicableRights = ['can_archive_source'];
  assert.throws(() => core.validateMetadata(wrongRight), /requested right/);
  await vault(async root => {
    const conditional = fresh(); const conditionId = addObligation(conditional);
    const result = await authorize(conditional, root, { fulfillments: [{ conditionId,
      scope: { kind: 'entry', componentId: 'unrelated:entry' }, state: 'satisfied', proof: null }] });
    assert.equal(result.readiness, 'blocked'); assert.match(result.reasons.join(), /outside requested condition scope/);
  });
});

test('commercial-only restrictions do not ban lawful private archiving or silently permit commercial use', async () => {
  await vault(async root => {
    for (const state of ['denied', 'unknown']) {
      const data = fresh(); data.entries[0].status = state === 'unknown' ? 'license_unknown' : 'restricted';
      data.entries[0].restrictions = [{ scope: { kind: 'file', componentId: data.entries[0].componentId,
        snapshotId: data.snapshots[0].snapshotId, path: 'button.ts' }, rights: [right], state,
        reason: 'Fictional commercial-only restriction', evidenceRefs: ['fixture-permission'] }];
      const commercial = await authorize(data, root);
      assert.equal(commercial.legal, state); assert.notEqual(commercial.readiness, 'ready');
      const archive = await core.authorize(data, data.entries[0].componentId, data.snapshots[0].snapshotId,
        'can_archive_source', { vaultRoot: root, fulfillments: [] });
      assert.equal(archive.legal, 'allowed'); assert.equal(archive.readiness, 'ready');
    }
  });
});

test('right-specific conditions do not impose unrelated use obligations on private archival permission', async () => {
  await vault(async root => {
    const data = fresh(); const evidence = structuredClone(data.licenseEvidence[0]);
    evidence.evidenceId = 'fictional-commercial-review'; evidence.applicableRights = [right];
    evidence.obligations = ['Retain commercial-use attribution']; data.licenseEvidence.push(evidence);
    const ref = core.conditionId(evidence.evidenceId, evidence.obligations[0]);
    for (const object of [data.entries[0], data.snapshots[0], ...data.snapshots[0].files]) {
      object.rights[right].evidenceRefs = [evidence.evidenceId]; object.rights[right].conditionRefs = [ref];
    }
    assert.equal((await authorize(data, root)).readiness, 'unknown');
    assert.equal((await core.authorize(data, data.entries[0].componentId, data.snapshots[0].snapshotId,
      'can_archive_source', { vaultRoot: root, fulfillments: [] })).readiness, 'ready');
  });
});

test('preview availability is independent from archive, offline restoration and offline runtime', () => {
  const data = fresh(); data.snapshots[0].preview = { status: 'preview_ready', localPath: null,
    upstreamUrl: 'https://example.invalid/online-demo', lastCheckedAt: '2026-11-07T00:00:00Z', reason: null };
  data.snapshots[0].offline_runtime_complete = false;
  assert.doesNotThrow(() => core.validateMetadata(data));
  for (const status of ['not_built','preview_unavailable','needs_adapter','unsafe_to_run']) {
    data.snapshots[0].preview = { status, localPath: null, upstreamUrl: null, lastCheckedAt: null,
      reason: status === 'not_built' ? null : 'Fictional limitation' };
    assert.doesNotThrow(() => core.validateMetadata(data));
  }
  data.snapshots[0].preview.status = 'preview_ready';
  assert.throws(() => core.validateMetadata(data), /Ready preview/);
});

test('catalog projection is order-independent, reflects core restrictions and never asserts operation readiness', () => {
  const data = fresh(); data.entries[0].status = 'restricted'; data.entries[0].restrictions = [{
    scope: { kind: 'entry', componentId: data.entries[0].componentId }, rights: [right], state: 'denied',
    reason: 'fictional restriction', evidenceRefs: ['fixture-permission'] }];
  const catalog = core.projectCatalog(data);
  const row = catalog.entries[0].snapshots[0];
  assert.equal(row.rights[right].legal, 'denied'); assert.equal(row.readiness, 'not_checked');
  data.sources.reverse(); data.entries.reverse(); data.snapshots.reverse();
  assert.deepEqual(core.projectCatalog(data), catalog);
});

test('evidence verifier binds scope and vault root, rejecting missing, tampered, traversal and linked roots', async () => {
  await vault(async root => {
    const data = fresh(); await core.verifyLicenseEvidence(data, root);
    const wrongScope = fresh(); wrongScope.licenseEvidence[0].scope = { kind: 'file', componentId: data.entries[0].componentId,
      snapshotId: data.snapshots[0].snapshotId, path: 'button.ts' };
    await assert.rejects(core.verifyLicenseEvidence(wrongScope, root), /scope/);
    const traversal = fresh(); traversal.licenseEvidence[0].textPath = '../LICENSE.txt';
    await assert.rejects(core.verifyLicenseEvidence(traversal, root));
    await writeFile(join(root, data.licenseEvidence[0].textPath), 'changed');
    await assert.rejects(core.verifyLicenseEvidence(data, root), /hash mismatch/);
    await rm(join(root, data.licenseEvidence[0].textPath));
    await assert.rejects(core.verifyLicenseEvidence(data, root), /ENOENT/);
    const alias = join(root, '..', 'license-root-alias-' + root.split('/').at(-1));
    try { await symlink(root, alias, 'dir'); await assert.rejects(core.verifyLicenseEvidence(data, alias), /Symlink/); }
    finally { await rm(alias); }
  });
});

test('minimal index rebuilds byte-identically from authoritative records and rejects a second source inventory', async () => {
  const { execFileSync } = await import('node:child_process');
  const run = (args: string[]) => execFileSync(process.execPath, ['dist/packages/cli/src/main.js', 'index', ...args], { encoding: 'utf8' });
  const first = run([]); assert.equal(run([]), first);
  const empty = JSON.parse(first); assert.equal(empty.sources.length, 12); assert.deepEqual(empty.entries, []);
  const fictional = JSON.parse(run(['fixtures/metadata.json']));
  assert.equal(fictional.fixture, true); assert.equal(fictional.entries.length, 1);
  assert.equal(fictional.entries[0].snapshots[0].readiness, 'not_checked');
  const inventory = JSON.parse(await readFile('inventory/metadata.json', 'utf8'));
  assert.throws(() => core.assembleMetadata([], { ...inventory, sources: [] }), /additional properties/);
});


test('conditional catalog projection is independent of manifest enumeration order', () => {
  const data = fresh(); addObligation(data);
  const expected = core.projectCatalog(data);
  data.snapshots[0].files.reverse();
  assert.deepEqual(core.projectCatalog(data), expected);
});
