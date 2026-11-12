import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {adaptCandidate} from './candidate-adapter.mjs';
import {runtimeFor,composePreview} from './preview-runtime.mjs';
import {filterItems,detailHash,resolveRoute} from './atlas-model.mjs';
import {applyCuration} from './curation-policy.mjs';
import curationRules from './curation-rules.mjs';

const ROOT=new URL('./',import.meta.url);
const read=name=>JSON.parse(readFileSync(new URL(name,ROOT),'utf8'));
const text=name=>readFileSync(new URL(name,ROOT),'utf8');
const sha=value=>createHash('sha256').update(value).digest('hex');
const input=read('test-fixtures/curation/qualified-inventory-scopes.json');
const fromBase=name=>JSON.parse(execFileSync('git',['show',`${input.base}:apps/atlas-sample/${name}`],{cwd:new URL('../../',ROOT),maxBuffer:32*1024*1024}));
const items=read('items.json'),catalog=read('catalog.json'),candidates=read('candidate-catalog.json');
const originalItems=fromBase('items.json'),originalCandidates=fromBase('candidate-catalog.json');
const qualifiedIds=input.qualified.map(x=>x.id);

test('only named qualified inventory entries are appended and the earlier inventory is untouched',()=>{
 assert.equal(input.qualified.length,35);
 assert.equal(input.notQualified.length,20);
 assert.deepEqual(items.slice(0,originalItems.length),originalItems);
 assert.deepEqual(items.slice(originalItems.length).map(x=>x.id),qualifiedIds);
 assert.deepEqual(catalog.map(x=>x.id),items.map(x=>x.id));
 for(const {id} of input.notQualified)assert(!items.some(x=>x.id===id),id);
 const oldAccepted=fromBase('COLLECTION-LEDGER.json').verifiedNewIndependentRecords;
 for(const {id} of oldAccepted)assert(!items.some(x=>x.id===id),id);
});

test('classified entries retain their purpose and appear once without pending or editorial promotion',()=>{
 const all=[...catalog];
 all.push(...candidates.filter(x=>x.preview&&!all.some(y=>y.id===x.id)).map(adaptCandidate));
 const curated=applyCuration(all,curationRules);
 for(const {id,scope} of input.qualified){
  const item=items.find(x=>x.id===id);assert(item,id);
  assert.equal(item.description,scope,id);
  assert.equal(item.behavior,scope,id);
  assert.equal(item.pending,undefined,id);assert.equal(item.featured,undefined,id);
  assert.equal(item.editorialApproval,undefined,id);assert.equal(item.curation,undefined,id);
  assert.equal(item.category,originalCandidates.find(x=>x.id===id).category,id);
  assert(item.technology.length>0,id);
  assert.equal(curated.filter(x=>x.id===id).length,1,id);
  assert(filterItems(curated,{category:item.category}).some(x=>x.id===id),id);
  for(const category of ['精选','待复核'])assert(!filterItems(curated,{category}).some(x=>x.id===id),id);
  assert(resolveRoute(detailHash(id),curated),id);
 }
});

test('inventory details preserve the frozen candidate runtime, source, ZIP and poster paths',()=>{
 for(const {id} of input.qualified){
  const item=items.find(x=>x.id===id);assert(item,id);
  const frozen=originalCandidates.find(x=>x.id===id),adapted=adaptCandidate(frozen);
  assert.equal(item.bundle,frozen.archive,id);
  for(const field of ['preview','code','thumbnail'])assert.equal(item[field],frozen[field],id);
  const runtime=runtimeFor(item);assert(runtime,id);
  assert.notEqual(runtime.key,'featured-v1',id);
  assert.equal(runtime.cssHref,'runtime.css',id);assert.equal(runtime.scriptSrc,'runtime.js',id);
  assert.deepEqual(runtime,adapted.runtime,id);
  const composed=composePreview(text(item.preview),text(runtime.css),text(runtime.js),runtime);
  const before=composePreview(text(frozen.preview),text(adapted.runtime.css),text(adapted.runtime.js),adapted.runtime);
  assert.equal(sha(composed),sha(before),id);
  assert(composed.includes("connect-src 'none'"),id);
  for(const file of [item.code,item.bundle,item.thumbnail])assert(readFileSync(new URL(file,ROOT)).length>0,id);
 }
});
