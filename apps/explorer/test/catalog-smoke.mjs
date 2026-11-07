import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createLocalExplorer } from '../local-explorer.mjs';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const bytes = await readFile(new URL('../../../catalog.json', import.meta.url));
const catalog = JSON.parse(bytes);
const server = createLocalExplorer({ root });
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
try {
  const response = await fetch(`${base}/api/catalog`);
  assert.equal(response.status, 200);
  const projected = await response.json();
  assert.deepEqual(projected.components.map(({ availability, restoreStatus, ...record }) => record), catalog.components);
  assert.ok(projected.components.every(record => record.restoreStatus === 'not_checked'));
  assert.deepEqual(projected.sources, catalog.sources);
  console.log(`catalog sha256 ${createHash('sha256').update(bytes).digest('hex')}`);
  let sources = 0; let files = 0; let references = 0;
  for (const component of catalog.components) {
    if (component.assetKind === 'reference') {
      const result = await fetch(`${base}/api/source?${new URLSearchParams({ id: component.id, path: 'index.tsx' })}`);
      assert.equal(result.status, 422, component.id);
      assert.equal(projected.components.find(item => item.id === component.id).availability, 'reference');
      references++; console.log(`PASS ${component.id} source access rejected`);
      continue;
    }
    if (component.license.status !== 'allowed') continue;
    let checked = 0;
    for (const file of component.files) {
      const result = await fetch(`${base}/api/source?${new URLSearchParams({ id: component.id, path: file.path })}`);
      assert.equal(result.status, 200, `${component.id}/${file.path}`);
      const { text } = await result.json();
      // Hash comparison is independent of the server's reader; all current sources are UTF-8 text.
      assert.equal(createHash('sha256').update(text).digest('hex'), file.sha256, `${component.id}/${file.path}`);
      checked++; files++;
    }
    sources++;
    console.log(`PASS ${component.id} ${checked} text files HTTP/hash verified`);
  }
  assert.ok(sources > 0, 'No source snapshots were actually checked');
  console.log(`PASS ${sources} source snapshots, ${files} files; ${references} references rejected; ${catalog.sources.length} registered origins; no upstream execution`);
} finally { await new Promise(resolve => server.close(resolve)); }
