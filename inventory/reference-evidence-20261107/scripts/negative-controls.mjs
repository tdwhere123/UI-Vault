import { readFileSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';
const root = resolve(import.meta.dirname, '../../..');
const original = JSON.parse(readFileSync(resolve(root, 'inventory/collection.json')));
const scratch = mkdtempSync(resolve(tmpdir(), 'reference-negative-'));
const cases = [
  ['reference snapshot', c => { c.snapshotPath = 'archive/fake'; }, 'snapshotPath'],
  ['reference fake commit', c => { c.upstreamCommit = 'a'.repeat(40); }, 'upstreamCommit'],
  ['reference missing public URL', c => { delete c.publicUrl; }, 'publicUrl'],
  ['reference missing layout', c => { delete c.visualNotes.layout; }, 'layout'],
  ['reference fake files', c => { c.files = [{path:'fake.ts', size:0, sha256:'0'.repeat(64)}]; }, 'files'],
  ['reference fake dependencies', c => { c.dependencies = {react:'19.0.0'}; }, 'dependencies'],
];
for (const [name, mutate, field] of cases) {
  const catalog = structuredClone(original);
  mutate(catalog.components.find(c => c.assetKind === 'reference'));
  const path = resolve(scratch, name.replaceAll(' ', '-')+'.json');
  writeFileSync(path, JSON.stringify(catalog));
  const result = spawnSync('node', [resolve(root, 'inventory/scripts/verify-collection.mjs'), path], {encoding:'utf8', cwd:root});
  console.log(`CASE ${name} exit=${result.status}\n${result.stdout}${result.stderr}`);
  assert.notEqual(result.status, 0);
  assert.ok(result.stderr.includes('Invalid catalog:') && result.stderr.includes(field), `Expected schema rejection for ${field}`);
  console.log(`PASS rejected ${name}: shared schema identifies ${field}`);
}
