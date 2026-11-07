import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../../../', import.meta.url));
const cli = resolve(repository, 'dist/packages/cli/src/main.js');
const invoke = (cwd, ...args) => spawnSync(process.execPath, [cli, ...args], { cwd, encoding: 'utf8' });
// This fixture demonstrates the CLI contract only, not a collected component.
const sample = () => ({ sources: [{ id:'synthetic', name:'Synthetic', upstreamUrl:'https://example.invalid', upstreamCommit:'a'.repeat(40) }], components: [{ assetKind:'source',id:'synthetic:button',sourceId:'synthetic',name:'Synthetic button',category:'button',tags:['synthetic'],upstreamUrl:'https://example.invalid/button',upstreamCommit:'a'.repeat(40),license:{status:'unknown',evidencePath:null,noticePaths:[]},snapshotPath:null,files:[],dependencies:{},limitations:['Synthetic registration, no source collected'] }] });

test('CLI indexes, validates, searches, lists and prints schema in a real temporary cwd', async () => {
 const cwd=await mkdtemp(join(tmpdir(),'ui-vault-cli-'));
 await mkdir(join(cwd,'inventory'));await writeFile(join(cwd,'inventory/collection.json'),JSON.stringify(sample()));
 const indexed=invoke(cwd,'index');assert.equal(indexed.status,0,indexed.stderr);assert.match(indexed.stdout,/1 source components; 0 references/);
 const bytes=await readFile(join(cwd,'catalog.json'),'utf8');assert.equal(JSON.parse(bytes).components[0].id,'synthetic:button');
 const validated=invoke(cwd,'validate');assert.equal(validated.status,0,validated.stderr);assert.match(validated.stdout,/filesystem and license review are separate/);
 const searched=invoke(cwd,'search','SYNTHETIC');assert.equal(searched.status,0,searched.stderr);assert.equal(JSON.parse(searched.stdout).length,1);
 const missing=invoke(cwd,'search','absent');assert.equal(missing.status,0);assert.deepEqual(JSON.parse(missing.stdout),[]);
 const listed=invoke(cwd,'list');assert.equal(listed.status,0);assert.equal(JSON.parse(listed.stdout).length,1);
 const schema=invoke(cwd,'schema');assert.equal(schema.status,0,schema.stderr);assert.equal(JSON.parse(schema.stdout).properties.components.type,'array');
 for(const content of ['{broken', JSON.stringify({sources:[],components:[{}]})]) {
  await writeFile(join(cwd,'inventory/collection.json'),content);
  const failed=invoke(cwd,'index');assert.notEqual(failed.status,0);assert.equal(await readFile(join(cwd,'catalog.json'),'utf8'),bytes);
 }
 for(const args of [['index','missing.json'],['unknown'],['schema','extra'],['search','one','two']]) {
  assert.notEqual(invoke(cwd,...args).status,0);assert.equal(await readFile(join(cwd,'catalog.json'),'utf8'),bytes);
 }
});

test('public package exports only collection APIs and blocks every packaged deep path', async () => {
 const cwd=resolve(repository,'packages/core');
 const probe=spawnSync(process.execPath,['--input-type=module','-e',`
  import assert from 'node:assert/strict';
  import { readdir } from 'node:fs/promises';
  import * as core from '@ui-vault/core';
  assert.deepEqual(Object.keys(core).sort(),['CatalogQuerySchema','validateCatalogQuery','getComponentAvailability','CatalogSchema','assertCatalogPath','buildCatalog','getSourceComponents','searchCatalog','validateCatalog'].sort());
  for(const name of ['authorize','checkFulfillments','AuthorizationContext','AuthorizationContextSchema']) assert.equal(name in core,false);
  const fabricatedProof={conditionId:'permission',proofs:[{path:'package.json',sha256:'a'.repeat(64)}]};
  assert.throws(()=>core.authorize({},fabricatedProof),TypeError);
  const files=await readdir('src');
  for(const path of ['authorization','catalog','package.json',...files.map(file=>'src/'+file),...files.map(file=>'dist/'+file.replace(/\\.ts$/,'.js'))]) {
   await assert.rejects(import('@ui-vault/core/'+path),{code:'ERR_PACKAGE_PATH_NOT_EXPORTED'});
  }
  console.log('public package exports and '+(files.length*2+3)+' deep paths checked; old proof has no public authorization entry');
 `],{cwd,encoding:'utf8'});
 assert.equal(probe.status,0,probe.stderr);console.log(probe.stdout.trim());
 const declaration=await readFile(join(cwd,'dist/index.d.ts'),'utf8');
 assert.doesNotMatch(declaration,/authoriz|Fulfillment|Context/);
 assert.match(declaration,/getSourceComponents/);
});

test('CLI inspect and materialize use the actual restoration service and never execute source', async()=>{
 const cwd=await mkdtemp(join(tmpdir(),'ui-vault-materialize-'));
 const catalog=sample(), component=catalog.components[0];
 component.license={status:'allowed',evidencePath:'archive/synthetic/LICENSE',noticePaths:[]};
 component.snapshotPath='archive/synthetic';
 const payloads={'LICENSE':'Synthetic test permission text; not a real collected license','index.js':"throw new Error('SOURCE MUST NOT EXECUTE')"};
 component.files=Object.entries(payloads).map(([path,bytes])=>({path,sha256:createHash('sha256').update(bytes).digest('hex'),size:Buffer.byteLength(bytes)}));
 await mkdir(join(cwd,'inventory'));await mkdir(join(cwd,'archive/synthetic'),{recursive:true});
 for(const [path,bytes] of Object.entries(payloads)) await writeFile(join(cwd,'archive/synthetic',path),bytes);
 await writeFile(join(cwd,'inventory/collection.json'),JSON.stringify(catalog));
 assert.equal(invoke(cwd,'index').status,0);
 const inspected=invoke(cwd,'inspect',component.id);assert.equal(inspected.status,0,inspected.stderr);assert.equal(JSON.parse(inspected.stdout).id,component.id);
 const verified=invoke(cwd,'verify',component.id);assert.equal(verified.status,0,verified.stderr);assert.equal(JSON.parse(verified.stdout).files,2);
 const first=invoke(cwd,'materialize',component.id,'restored');assert.equal(first.status,0,first.stderr);assert.equal(JSON.parse(first.stdout).created.length,2);
 for(const [path,bytes] of Object.entries(payloads)) assert.equal(await readFile(join(cwd,'restored',path),'utf8'),bytes);
 const second=invoke(cwd,'materialize',component.id,'restored');assert.equal(second.status,0,second.stderr);assert.equal(JSON.parse(second.stdout).unchanged.length,2);
 assert.notEqual(invoke(cwd,'inspect','absent').status,0);
});

test('CLI counts references separately and restore commands reject display-only records',async()=>{
 const cwd=await mkdtemp(join(tmpdir(),'ui-vault-reference-cli-'));
 const catalog=sample();catalog.components=[{assetKind:'reference',id:'synthetic:reference',sourceId:'synthetic',name:'Reference',category:'navigation',tags:[],upstreamUrl:'https://example.invalid/reference',upstreamCommit:null,license:{status:'allowed',evidencePath:null,noticePaths:[]},snapshotPath:null,files:[],dependencies:{},limitations:['No source provided'],publicUrl:'https://example.invalid/reference',isInference:true,interactionFlow:['Open menu'],visualNotes:{layout:'drawer',colors:'blue',typography:'serif',motion:'slide'},useCases:['navigation'],implementationNotes:'Inferred CSS translation'}];
 await mkdir(join(cwd,'inventory'));await writeFile(join(cwd,'inventory/collection.json'),JSON.stringify(catalog));
 const index=invoke(cwd,'index');assert.equal(index.status,0,index.stderr);assert.match(index.stdout,/0 source components; 1 references/);
 assert.equal(JSON.parse(invoke(cwd,'search','translation').stdout).length,1);
 assert.equal(JSON.parse(invoke(cwd,'inspect','synthetic:reference').stdout).assetKind,'reference');
 for(const args of [['verify','synthetic:reference'],['materialize','synthetic:reference','output']]) {
  const result=invoke(cwd,...args);assert.notEqual(result.status,0);assert.match(result.stderr,/Reference records cannot be restored as source/);
 }
});

test('CLI classification filters reuse core query validation and preserve old unknown metadata',async()=>{
 const cwd=await mkdtemp(join(tmpdir(),'ui-vault-filter-cli-'));
 const catalog=sample(), known=catalog.components[0];known.techStack={frameworks:['react'],languages:['typescript'],styling:['tailwindcss']};known.tags.push('按钮');
 catalog.components.push({...known,id:'synthetic:unknown',techStack:undefined});
 await writeFile(join(cwd,'catalog.json'),JSON.stringify(catalog));
 const filtered=invoke(cwd,'search','Synthetic','--source','synthetic','--category','button','--framework','react','--language','typescript','--styling','tailwindcss','--dependency','react','--tag','按钮','--availability','registration_only','--kind','source','--license','unknown');
 // Explicit dependency filtering needs an explicitly recorded dependency, not inferred technology.
 assert.equal(filtered.status,0,filtered.stderr);assert.deepEqual(JSON.parse(filtered.stdout),[]);
 known.dependencies.react='19.0.0';await writeFile(join(cwd,'catalog.json'),JSON.stringify(catalog));
 const result=invoke(cwd,'list','--framework','react','--dependency','react');assert.equal(result.status,0,result.stderr);assert.equal(JSON.parse(result.stdout).length,1);
 const unknown=invoke(cwd,'search','--framework','unknown');assert.equal(unknown.status,0,unknown.stderr);assert.equal(JSON.parse(unknown.stdout)[0].id,'synthetic:unknown');
 for(const args of [['search','--unrecognized','x'],['search','--source'],['search','--availability','restored'],['search','--license','free'],['list','positional']]) assert.notEqual(invoke(cwd,...args).status,0);
});
