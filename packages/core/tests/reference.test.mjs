import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../../../dist/packages/core/src/index.js';
const source = () => ({id:'ui',name:'UI',upstreamUrl:'https://example.invalid/ui',upstreamCommit:'a'.repeat(40)});
const reference = () => ({assetKind:'reference',id:'reference:menu',sourceId:'ui',name:'Menu',category:'navigation',tags:[],upstreamUrl:'https://example.invalid/menu',upstreamCommit:null,license:{status:'allowed',evidencePath:null,noticePaths:[]},snapshotPath:null,files:[],dependencies:{},limitations:['Synthetic reference; no source implementation'],publicUrl:'https://example.invalid/menu',screenshotUrls:['https://example.invalid/shot'],demoUrls:[],localAssetPaths:[],interactionFlow:['Click opens drawer'],visualNotes:{layout:'sidebar',colors:'amber',typography:'serif',motion:'slide'},useCases:['site navigation'],implementationNotes:'Hypothesis: CSS transform',isInference:true});
const sample = () => ({sources:[source()],components:[reference()]});
test('references remain searchable display records, never counted as source', () => {
 const input=sample();const catalog=core.validateCatalog(input);
 assert.deepEqual(core.getSourceComponents(catalog),[]);
 for(const query of ['drawer','amber','serif','transform','site navigation']) assert.equal(core.searchCatalog(catalog,{query}).length,1,query);
 const results=core.searchCatalog(catalog);results[0].visualNotes.colors='mutated';
 assert.equal(catalog.components[0].visualNotes.colors,'amber');
 input.components[0].interactionFlow.push('mutated');assert.equal(catalog.components[0].interactionFlow.length,1);
});
test('reference cannot contain fake source, dependencies or snapshots even when allowed',()=>{
 for(const change of [c=>c.upstreamCommit='b'.repeat(40),c=>c.snapshotPath='archive/fake',c=>c.files=[{path:'x.ts',sha256:'b'.repeat(64),size:1}],c=>c.dependencies={react:'19.0.0'}]){
  const input=sample();change(input.components[0]);assert.throws(()=>core.validateCatalog(input));
 }
});
test('asset kind and required reference description fields cannot be omitted',()=>{
 for(const field of ['assetKind','publicUrl','isInference','interactionFlow','visualNotes','implementationNotes','useCases']){
  const input=sample();delete input.components[0][field];assert.throws(()=>core.validateCatalog(input),field);
 }
});
test('reference local assets use the shared path authority',()=>{
 const input=sample();input.components[0].localAssetPaths=['../unsafe'];assert.throws(()=>core.validateCatalog(input));
 assert.throws(()=>core.assertCatalogPath('C:/unsafe'));
});

test('public references can register an origin with no git commit without inventing a source version',()=>{
 const input=sample();input.sources[0].upstreamCommit=null;
 assert.equal(core.validateCatalog(input).sources[0].upstreamCommit,null);
 assert.deepEqual(core.getSourceComponents(input),[]);
});
