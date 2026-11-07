import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as core from '../../../dist/packages/core/src/index.js';
const source = {id:'synthetic',name:'Synthetic',upstreamUrl:'https://example.invalid',upstreamCommit:'a'.repeat(40)};
const component = (id, extra={}) => ({assetKind:'source',id,sourceId:'synthetic',name:'Same name',category:'input',tags:['输入','input','按钮','button'],upstreamUrl:'https://example.invalid/button',upstreamCommit:'a'.repeat(40),license:{status:'unknown',evidencePath:null,noticePaths:[]},snapshotPath:null,files:[],dependencies:{react:'19.0.0'},limitations:['Synthetic classification fixture'],...extra});
const sample = () => ({sources:[source],components:[component('known',{techStack:{frameworks:['react'],languages:['typescript'],styling:['tailwindcss']}}),component('unknown')]});

test('explicit technology metadata and bilingual tags are searchable without inferring old records',()=>{
 const input=sample();const catalog=core.validateCatalog(input);
 assert.equal(core.searchCatalog(catalog,{query:'typescript'}).length,1);
 assert.equal(core.searchCatalog(catalog,{query:'输入'}).length,2);
 assert.deepEqual(core.searchCatalog(catalog,{framework:'react',language:'typescript',styling:'tailwindcss',tag:'按钮',dependency:'react',category:'input',sourceId:'synthetic'}).map(c=>c.id),['known']);
 assert.deepEqual(core.searchCatalog(catalog,{framework:null}).map(c=>c.id),['unknown']);
 assert.deepEqual(core.searchCatalog(catalog,{framework:'vue'}),[]);
 assert.equal('techStack' in catalog.components[1],false);
 const result=core.searchCatalog(catalog,{framework:'react'});result[0].techStack.frameworks.push('mutated');
 assert.deepEqual(input.components[0].techStack.frameworks,['react']);
});
test('unknown technology remains distinct from explicitly empty sets',()=>{
 const input=sample();input.components.push(component('null',{techStack:{frameworks:null,languages:null,styling:null}}),component('empty',{techStack:{frameworks:[],languages:[],styling:[]}}));
 assert.deepEqual(core.searchCatalog(input,{framework:null}).map(c=>c.id),['unknown','null']);
 for(const invalid of [{frameworks:['react']},{frameworks:'react',languages:null,styling:null}]) {
  const data=sample();data.components[0].techStack=invalid;assert.throws(()=>core.validateCatalog(data));
 }
});
test('availability distinguishes display references, registrations and recorded snapshots, never restored success',()=>{
 const input=sample();const registered=input.components[1];
 assert.equal(core.getComponentAvailability(registered),'registration_only');
 const snapshot=component('snapshot',{license:{status:'allowed',evidencePath:'archive/test/LICENSE',noticePaths:[]},snapshotPath:'archive/test',files:[{path:'LICENSE',sha256:'b'.repeat(64),size:3}]});
 input.components.push(snapshot);
 assert.equal(core.getComponentAvailability(snapshot),'source_snapshot');
 assert.deepEqual(core.searchCatalog(input,{availability:'source_snapshot',assetKind:'source',licenseStatus:'allowed'}).map(c=>c.id),['snapshot']);
 assert.equal(core.searchCatalog(input,{licenseStatus:'restricted'}).length,0);
 const ref={...registered,assetKind:'reference',id:'reference',upstreamCommit:null,dependencies:{},publicUrl:'https://example.invalid',isInference:true,interactionFlow:['Open'],visualNotes:{layout:'row',colors:'unknown',typography:'Unknown',motion:'not observed'},useCases:['sample'],implementationNotes:'Unknown/inferred'};
 input.components.push(ref);assert.equal(core.getComponentAvailability(ref),'reference');
 assert.deepEqual(core.searchCatalog(input,{availability:'reference'}).map(c=>c.id),['reference']);
 assert.equal(core.searchCatalog(input,{availability:'source_snapshot'}).some(c=>'restored' in c),false);
});

test('existing Explorer empty select values mean no filter; unsupported states do not become success',()=>{
 const input=sample();assert.equal(core.searchCatalog(input,{query:'',category:'',sourceId:''}).length,2);
 for(const filters of [{availability:'restored'},{licenseStatus:'free'},{assetKind:'preview'},{unknownFilter:'yes'}]) assert.throws(()=>core.searchCatalog(input,filters));
});
