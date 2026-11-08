import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Script} from 'node:vm';
import {adaptCandidate} from './candidate-adapter.mjs';
import {composePreview} from './preview-runtime.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
test('all collected families join atlas uniquely and disclose pending state',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate),b=JSON.parse(await read('items.json'));
 assert.equal(a.length,185);assert.equal(new Set([...a,...b].map(x=>x.id)).size,426);
 assert(a.every(x=>x.pending && x.featured && x.category));
 assert(a.filter(x=>x.batch==='batch-002').every(x=>!x.bundle));
});
test('49 genuine candidate previews have parseable self-contained runtime assets',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate).filter(x=>x.preview);assert.equal(a.length,49);
 for(const x of a){const [html,css,js]=await Promise.all([read(x.preview),read(x.runtime.css),read(x.runtime.js)]);new Script(js);const composed=composePreview(html,css,js,x.runtime);assert(composed.includes("connect-src 'none'"));assert(!composed.includes('src="runtime.js"'));assert(css.length>0);}
});
