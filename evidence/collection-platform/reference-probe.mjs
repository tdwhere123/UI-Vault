import assert from 'node:assert/strict';
import { readFile, mkdtemp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { validateCatalog } from '../../packages/core/dist/index.js';
import { verifyComponent, restoreComponent } from '../../packages/restore/dist/index.js';
const root = fileURLToPath(new URL('../../', import.meta.url));
const catalog = validateCatalog(JSON.parse(await readFile(join(root, 'catalog.json'), 'utf8')));
const references = catalog.components.filter(item => item.assetKind === 'reference');
assert.equal(references.length, 6);
const destination = await mkdtemp(join(tmpdir(), 'vault-reference-denials-'));
let rejections = 0;
for (const reference of references) {
  for (const alter of [item => item.upstreamCommit = 'a'.repeat(40), item => item.snapshotPath = 'archive/fake',
    item => item.dependencies = { react: '19.0.0' }, item => item.files = [{ path: 'fake.ts', sha256: 'b'.repeat(64), size: 1 }]]) {
    const copy = structuredClone(catalog);
    alter(copy.components.find(item => item.id === reference.id));
    assert.throws(() => validateCatalog(copy));
    rejections++;
  }
  const options = { catalog, componentId: reference.id, archiveRoot: root, destination: join(destination, reference.id.replaceAll(':', '-')) };
  await assert.rejects(verifyComponent(options), /Reference records cannot be restored as source/);
  await assert.rejects(restoreComponent(options), /Reference records cannot be restored as source/);
  console.log(`PASS ${reference.id}: 4 schema negatives + verify/materialize denied; actual metadata only`);
}
console.log(`PASS actual ${references.length} references; ${rejections} independently executed schema negatives; 12 operation denials; no source snapshot or license truth claim`);
