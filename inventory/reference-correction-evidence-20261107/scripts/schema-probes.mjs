import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {validateCatalog} from '../../../dist/packages/core/src/catalog.js';
const args=process.argv.slice(2);
if (args.length !== 2 || args[0] !== '--mapping') throw new Error('MISSING_REFERENCE_MAPPING: use --mapping PATH; input is external and must not be synthesized from catalog');
const mappingPath=args[1];
const catalog=JSON.parse(readFileSync(new URL('../../collection.json',import.meta.url)));
validateCatalog(catalog);
let mappingBytes;
try { mappingBytes=readFileSync(mappingPath); } catch (error) { throw new Error('MISSING_REFERENCE_MAPPING: explicitly supplied input is not readable', {cause:error}); }
const mapping=JSON.parse(mappingBytes);
for (const reference of mapping.components) assert.deepEqual(catalog.components.find(c=>c.id===reference.id),reference);
for (const origin of mapping.sources) assert.deepEqual(catalog.sources.find(s=>s.id===origin.id),origin);
console.log('PASS current schema mapping: all 6 references + 2 origins equal supplied mapping');
assert.equal(catalog.components.filter(c=>c.assetKind==='reference').length,6);
console.log('PASS current collection schema: 20 sources + 6 references');
for (const [name, mutate, field] of [
 ['fake snapshot',c=>c.snapshotPath='archive/fake','snapshotPath'],
 ['fake component commit',c=>c.upstreamCommit='a'.repeat(40),'upstreamCommit'],
 ['missing publicUrl',c=>delete c.publicUrl,'publicUrl'],
 ['missing layout',c=>delete c.visualNotes.layout,'layout'],
 ['fake files',c=>c.files=[{path:'fake.ts',size:0,sha256:'0'.repeat(64)}],'files'],
 ['fake dependencies',c=>c.dependencies={react:'19.0.0'},'dependencies']
]) {
 const changed=structuredClone(catalog); mutate(changed.components.find(c=>c.assetKind==='reference'));
 assert.throws(()=>validateCatalog(changed),error=>{
  assert.match(error.message,/Invalid catalog:/); assert.ok(error.message.includes(field));
  console.log(`EXPECTED REJECTION ${name}: ${error.message}`);return true;
 });
 console.log(`PASS rejected ${name}: schema identifies ${field}`);
}
