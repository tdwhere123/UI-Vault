import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, writeFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createLocalExplorer } from '../local-explorer.mjs';

// Synthetic snapshots exercise real disk and HTTP boundaries, not upstream UI count.
async function setup(t) {
  const root = await mkdtemp(join(tmpdir(), 'explorer-snapshot-'));
  const snapshot = 'archive/sample/button';
  const payloads = { 'button.tsx': Buffer.from('<script>mustNotRun()</script>'), LICENSE: Buffer.from('Synthetic test permission'), 'binary.bin': Buffer.from([0, 255]) };
  await mkdir(join(root, snapshot), { recursive: true });
  for (const [path, bytes] of Object.entries(payloads)) await writeFile(join(root, snapshot, path), bytes);
  const component = { assetKind: 'source', id: 'sample:button', sourceId: 'sample', name: 'Button', category: 'button', tags: [],
    upstreamUrl: 'https://example.invalid/button', upstreamCommit: 'a'.repeat(40),
    license: { status: 'allowed', evidencePath: `${snapshot}/LICENSE`, noticePaths: [] }, snapshotPath: snapshot,
    files: Object.entries(payloads).map(([path, bytes]) => ({ path, size: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') })), dependencies: {}, limitations: ['Synthetic fixture'] };
  const reference = { ...component, id: 'sample:reference', assetKind: 'reference', upstreamCommit: null, snapshotPath: null, files: [],
    publicUrl: 'https://example.invalid/demo', isInference: true, interactionFlow: ['open'], visualNotes: { layout: 'row', colors: 'gray', typography: 'sans', motion: 'none' }, useCases: ['test'], implementationNotes: 'Inferred' };
  const catalog = { sources: [{ id: 'sample', name: 'Sample', upstreamUrl: 'https://example.invalid/', upstreamCommit: 'a'.repeat(40) }], components: [component, reference,
    { ...component, id: 'sample:unknown', license: { status: 'unknown', evidencePath: null, noticePaths: [] }, snapshotPath: null, files: [] }] };
  await writeFile(join(root, 'catalog.json'), JSON.stringify(catalog));
  const server = createLocalExplorer({ root });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(root, { recursive: true }); });
  const url = `http://127.0.0.1:${server.address().port}`;
  return { root, snapshot, payloads, url, source: (id = 'sample:button', path = 'button.tsx') => fetch(`${url}/api/source?${new URLSearchParams({ id, path })}`) };
}
test('local reader serves verified text, rejects binary and registration/reference source access without writing', async t => {
  const { source, root, url } = await setup(t);
  const before = await readdir(root, { recursive: true });
  assert.deepEqual(await (await source()).json(), { text: '<script>mustNotRun()</script>' });
  assert.equal((await source('sample:button', 'binary.bin')).status, 422);
  assert.equal((await source('sample:reference')).status, 422);
  assert.equal((await source('sample:unknown')).status, 422);
  assert.equal((await source('sample:button', '../LICENSE')).status, 422);
  const references = await (await fetch(`${url}/api/components?query=Inferred`)).json();
  assert.equal(references[0].assetKind, 'reference');
  assert.deepEqual(await readdir(root, { recursive: true }), before);
});
test('HTTP reader rejects a tampered sibling and recovers after exact bytes are restored', async t => {
  const { root, snapshot, payloads, source } = await setup(t);
  await writeFile(join(root, snapshot, 'LICENSE'), 'tampered');
  assert.equal((await source()).status, 422);
  await writeFile(join(root, snapshot, 'LICENSE'), payloads.LICENSE);
  assert.equal((await source()).status, 200);
  await writeFile(join(root, snapshot, 'extra.txt'), 'undeclared');
  assert.equal((await source()).status, 422);
});
