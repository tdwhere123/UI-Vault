import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {filterGallery, galleryCounts} from './gallery-model.mjs';
const items=JSON.parse(await readFile(new URL('./items.json',import.meta.url)));
test('seven unique real reference UIs, not catalog/file/overview count',()=>{
 assert.equal(items.length,7); assert.equal(new Set(items.map(x=>x.id)).size,7);
 assert.deepEqual(galleryCounts(items),{ui:7,images:7,sourceSites:2,sourceDownloads:0});
 for(const x of items){assert.equal(x.status,'reference-only');assert.equal(x.downloadAvailable,false);assert(['ui.shadcn.com','bencho.dev','agent-elements.21st.dev'].includes(new URL(x.sourceUrl).hostname));assert(!('downloadUrl' in x));}
});
test('keyword + purpose/style/technology intersect, case-insensitive, empty state',()=>{
 assert.equal(filterGallery(items,{query:'BUTTON'}).length,3);
 assert.equal(filterGallery(items,{query:'按钮',purpose:'操作',style:'极简',technology:'React'}).length,1);
 assert.equal(filterGallery(items,{query:'按钮',purpose:'反馈'}).length,0);
 assert.equal(filterGallery(items,{query:'no-such-ui'}).length,0);
 assert.equal(filterGallery(items,{}).length,7);
});
test('all seven saved PNGs have actual PNG bytes',async()=>{
 for(const x of items){const b=await readFile(new URL('./media/'+x.image,import.meta.url));assert.equal(b.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert(b.length>1000);}
});

test('provenance has no stale global selected-source identity',async()=>{
 const app=await readFile(new URL('./app.js',import.meta.url),'utf8'),html=await readFile(new URL('./index.html',import.meta.url),'utf8');
 assert.doesNotMatch(html,/id="selected-source"/);assert.doesNotMatch(app,/showSource\(/);
 assert.match(app,/referenceCaption\(item\)/);
 const {referenceCaption}=await import('./gallery-model.mjs');
 for(const x of items)assert(referenceCaption(x).includes(x.sourceUrl)&&referenceCaption(x).includes(x.title));
});
