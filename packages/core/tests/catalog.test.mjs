import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateCatalog, searchCatalog, buildCatalog } from '../../../dist/packages/core/src/catalog.js';
const component = () => ({ assetKind:'source', id:'buttons:primary', sourceId:'buttons', name:'Primary', category:'button', tags:['accessible'], upstreamUrl:'https://example.invalid/button', upstreamCommit:'a'.repeat(40), license:{status:'allowed',evidencePath:'archive/buttons/LICENSE',noticePaths:[]},snapshotPath:'archive/buttons/primary',files:[{path:'index.tsx',sha256:'b'.repeat(64),size:10}],dependencies:{react:'19.0.0'},limitations:[] });
const sample = () => ({ sources:[{id:'buttons',name:'Buttons',upstreamUrl:'https://example.invalid/buttons',upstreamCommit:'a'.repeat(40)}],components:[component()] });
test('catalog validates independent copies and searches category, tags and source', () => {
 const input=sample(); const data=validateCatalog(input); input.components[0].tags.push('changed');
 assert.deepEqual(data.components[0].tags,['accessible']);
 assert.equal(searchCatalog(data,{query:'accessible',category:'button'}).length,1);
 assert.equal(searchCatalog(data,{sourceId:'other'}).length,0);
 assert.equal(searchCatalog(data,{query:'missing'}).length,0);
});
test('unknown and restricted entries are registration only', () => {
 for (const state of ['unknown','restricted']) {
  const data=sample(); data.components[0].license.status=state;
  assert.throws(()=>validateCatalog(data));
  data.components[0].files=[];data.components[0].snapshotPath=null;data.components[0].license.evidencePath=null;
  assert.equal(validateCatalog(data).components.length,1);
 }
});
test('allowed snapshots require evidence and actual file listings',()=>{
 for(const alter of [c=>c.license.evidencePath=null,c=>c.files=[],c=>c.snapshotPath=null]) {
  const data=sample();alter(data.components[0]);assert.throws(()=>validateCatalog(data));
 }
});
test('duplicate identities, missing sources and unpinned dependencies fail',()=>{
 for(const alter of [d=>d.components.push(component()),d=>d.sources=[],d=>d.components[0].dependencies.react='^19.0.0',d=>d.components[0].upstreamCommit='main']){
  const data=sample();alter(data);assert.throws(()=>validateCatalog(data));
 }
});
test('unsafe paths, conflicting file mappings and invalid hashes fail',()=>{
 for(const alter of [c=>c.files[0].path='../escape',c=>c.snapshotPath='/tmp/a',c=>c.license.evidencePath='../LICENSE',c=>c.files[0].sha256='not-a-hash',c=>c.files.push({...c.files[0]}),c=>c.files.push({...c.files[0],path:'index.tsx/child'})]){
  const data=sample();alter(data.components[0]);assert.throws(()=>validateCatalog(data));
 }
});
test('catalog derivation is deterministic without mutating inventory',()=>{
 const input=sample();input.components.push({...component(),id:'buttons:alpha',name:'Alpha',snapshotPath:'archive/buttons/alpha'});
 const before=JSON.stringify(input);const built=buildCatalog(input);
 assert.deepEqual(built.components.map(c=>c.id),['buttons:alpha','buttons:primary']);
 assert.equal(JSON.stringify(input),before);
});

test('portable file mapping rejects case aliases and case-folded parent collisions', () => {
 for (const path of ['INDEX.tsx', 'INDEX.tsx/child', 'index.tsx/CHILD']) {
  const data=sample(); data.components[0].files.push({...data.components[0].files[0],path});
  assert.throws(()=>validateCatalog(data));
 }
});
test('dependency versions are exact valid semver, not merely digit-shaped strings', () => {
 for (const version of ['01.0.0','1.01.0','1.0.00','1.0.0-','1.0.0-a..b','1.0.0-01','1.0.0+abc..def']) {
  const data=sample();data.components[0].dependencies.react=version;
  assert.throws(()=>validateCatalog(data),version);
 }
 for (const version of ['0.0.0','1.2.3-beta.1','1.2.3+build.01']) {
  const data=sample();data.components[0].dependencies.react=version;validateCatalog(data);
 }
});
test('derivation uses environment-independent code point ordering', () => {
 const data=sample();data.components=['a','Z','_'].map(id=>({...component(),id}));
 assert.deepEqual(buildCatalog(data).components.map(c=>c.id),['Z','_','a']);
});

test('all catalog path fields reject traversal and nonportable characters', () => {
 const unsafe=['/root','../escape','a/../b','a/./b','a//b','a/','C:/temp','a\\b','a:stream','a*','a?','a"','a<','a>','a|','a\u0000','a\u001f','a\u007f','CON','nul.txt','a/COM1.txt','a.','a '];
 for(const path of unsafe) for(const field of ['file','snapshot','evidence','notice']) {
  const data=sample(), c=data.components[0];
  if(field==='file') c.files[0].path=path;
  if(field==='snapshot') c.snapshotPath=path;
  if(field==='evidence') c.license.evidencePath=path;
  if(field==='notice') c.license.noticePaths=[path];
  assert.throws(()=>validateCatalog(data),`${field}:${path}`);
 }
});
test('source selection and search results are detached from caller state',async()=>{
 const {getSourceComponents}=await import('../../../dist/packages/core/src/index.js');
 const data=sample();const selected=getSourceComponents(data);selected[0].files[0].path='changed';
 const searched=searchCatalog(data);searched[0].license.noticePaths.push('changed');
 assert.equal(data.components[0].files[0].path,'index.tsx');assert.deepEqual(data.components[0].license.noticePaths,[]);
 assert.equal(getSourceComponents(data).length,1);
});

test('dependency names cannot evade exact version checks through unmatched record keys',()=>{
 for(const name of ['React','https://example.invalid/package','bad name','@scope/']) {
  const data=sample();data.components[0].dependencies={[name]:'latest'};
  assert.throws(()=>validateCatalog(data),name);
 }
});
