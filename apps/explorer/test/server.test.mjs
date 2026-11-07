import { test } from 'node:test';
import { request } from 'node:http';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createExplorer } from '../server.mjs';

// Synthetic test data only; these entries are never a deliverable snapshot.
function sample() {
  const component = { assetKind: 'source', id: 'sample:button', sourceId: 'sample', name: 'Button', category: 'button', tags: ['keyboard'],
    upstreamUrl: 'https://example.invalid/button', upstreamCommit: 'a'.repeat(40),
    license: { status: 'allowed', evidencePath: 'archive/sample/LICENSE', noticePaths: [] },
    snapshotPath: 'archive/sample/button', files: [{ path: 'button.tsx', sha256: 'b'.repeat(64), size: 10 }],
    dependencies: { react: '19.0.0' }, limitations: ['Test fixture, not real upstream'] };
  return { sources: [{ id: 'sample', name: 'Sample', upstreamUrl: 'https://example.invalid/', upstreamCommit: 'a'.repeat(40) }],
    components: [component, { ...component, id: 'sample:unknown', name: 'Unknown', license: { status: 'unknown', evidencePath: null, noticePaths: [] }, snapshotPath: null, files: [] }] };
}
async function setup(t, readSource) {
  const root = await mkdtemp(join(tmpdir(), 'vault-explorer-'));
  const catalogPath = join(root, 'catalog.json');
  await writeFile(catalogPath, JSON.stringify(sample()));
  const server = createExplorer({ catalogPath, readSource });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(root, { recursive: true }); });
  return { url: `http://127.0.0.1:${server.address().port}`, catalogPath };
}
test('real HTTP lists shared catalog and delegates category and tag search', async t => {
  const { url } = await setup(t);
  const catalog = await (await fetch(`${url}/api/catalog`)).json();
  assert.equal(catalog.components.length, 2);
  assert.equal(catalog.components[1].snapshotPath, null);
  const results = await (await fetch(`${url}/api/components?query=keyboard&category=button&sourceId=sample`)).json();
  assert.equal(results.length, 2);
  assert.deepEqual(await (await fetch(`${url}/api/components?query=missing`)).json(), []);
});
test('missing or invalid catalog fails explicitly and recovers without a server restart', async t => {
  const { url, catalogPath } = await setup(t);
  await writeFile(catalogPath, '{invalid');
  assert.equal((await fetch(`${url}/api/catalog`)).status, 422);
  await rm(catalogPath);
  assert.equal((await fetch(`${url}/api/catalog`)).status, 422);
  await writeFile(catalogPath, JSON.stringify(sample()));
  assert.equal((await fetch(`${url}/api/catalog`)).status, 200);
});
test('source API calls verified reader with exact catalog selection and returns inert JSON text', async t => {
  let observed;
  const text = '<script>throw new Error("must not run")</script>';
  const { url } = await setup(t, async (catalog, id, path) => { observed = { catalog, id, path }; return text; });
  const response = await fetch(`${url}/api/source?id=sample%3Abutton&path=button.tsx`);
  assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8');
  assert.equal((await response.json()).text, text);
  assert.equal(observed.id, 'sample:button'); assert.equal(observed.path, 'button.tsx');
  assert.equal(observed.catalog.components[0].license.status, 'allowed');
});
test('source failures do not leak raw local filesystem errors or return success', async t => {
  const { url } = await setup(t, async () => { throw new Error('/private/path/secret'); });
  const response = await fetch(`${url}/api/source?id=x&path=..%2Fsecret`);
  assert.equal(response.status, 422); assert.doesNotMatch(await response.text(), /private|secret/);
});
test('read-only boundary rejects writes, foreign hosts, foreign and malformed origins', async t => {
  const { url } = await setup(t);
  assert.equal((await fetch(`${url}/api/catalog`, { method: 'POST' })).status, 405);
  for (const headers of [{ host: 'foreign.example' }, { origin: 'http://foreign.example' }, { origin: 'not-a-url' }]) {
    const status = await new Promise((resolve, reject) => {
      const call = request(`${url}/api/catalog`, { headers }, response => { response.resume(); resolve(response.statusCode); });
      call.on('error', reject); call.end();
    });
    assert.equal(status, 403, JSON.stringify(headers));
  }
  assert.equal((await fetch(`${url}/api/catalog`)).status, 200);
});
test('only fixed application assets are served with no third-party execution policy', async t => {
  const { url } = await setup(t);
  const response = await fetch(url);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-security-policy'), /default-src 'none'/);
  assert.match(response.headers.get('content-security-policy'), /script-src 'self'/);
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  for (const path of ['/catalog.json', '/archive/sample/button.tsx', '/server.mjs', '/package.json']) {
    assert.equal((await fetch(`${url}${path}`)).status, 404);
  }
});
test('HTTP composes recorded facets via core and projects availability without claiming restoration', async t => {
  const { url, catalogPath } = await setup(t);
  const data = sample();
  data.components[0].techStack = { frameworks: ['React'], languages: ['TypeScript'], styling: [] };
  data.components[1].techStack = { frameworks: null, languages: [], styling: null };
  await writeFile(catalogPath, JSON.stringify(data));
  const query = new URLSearchParams({ sourceId: 'sample', category: 'button', tag: 'keyboard', dependency: 'react',
    framework: JSON.stringify('React'), language: JSON.stringify('TypeScript'), assetKind: 'source', licenseStatus: 'allowed', availability: 'source_snapshot' });
  const matches = await (await fetch(`${url}/api/components?${query}`)).json();
  assert.equal(matches.length, 1);
  assert.equal(matches[0].id, 'sample:button');
  assert.equal(matches[0].availability, 'source_snapshot'); assert.equal(matches[0].restoreStatus, 'not_checked');
  const unknown = await (await fetch(`${url}/api/components?framework=null`)).json();
  assert.deepEqual(unknown.map(item => item.id), ['sample:unknown']);
  const emptyIsNotUnknown = await (await fetch(`${url}/api/components?language=null`)).json();
  assert.deepEqual(emptyIsNotUnknown, []);
  assert.equal((await fetch(`${url}/api/components?availability=restored`)).status, 422);
  assert.equal((await fetch(`${url}/api/components?framework=invalid-json`)).status, 422);
  assert.equal((await fetch(`${url}/api/components?framework=null&framework=%22React%22`)).status, 422);
  assert.equal((await fetch(`${url}/api/components?unsupported=value`)).status, 422);
  const projected = await (await fetch(`${url}/api/catalog`)).json();
  assert.equal(projected.components[1].availability, 'registration_only');
  assert.equal(projected.components[1].restoreStatus, 'not_checked');
});
