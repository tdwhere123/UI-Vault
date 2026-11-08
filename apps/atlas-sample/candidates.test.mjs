import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Script} from 'node:vm';
import {adaptCandidate} from './candidate-adapter.mjs';
import {composePreview} from './preview-runtime.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
test('source baseline is preserved and all new families are directly viewable',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate),b=JSON.parse(await read('items.json'));
 const baseline=JSON.parse(await read('candidate-baseline-ids.json'));assert.equal(baseline.length,185);assert(baseline.every(id=>a.some(x=>x.id===id)));assert(a.filter(x=>!baseline.includes(x.id)).every(x=>x.preview));assert.equal(new Set([...a,...b].map(x=>x.id)).size,a.length+b.length);
 const categories=['Agent与对话','输入与选择','导航与组织','数据与状态','展示与媒体','产品与营销','视觉与动效','图标系列'];assert(a.every(x=>x.pending&&x.featured&&categories.includes(x.category)));
 assert(a.filter(x=>x.format==='图标家族').every(x=>x.kind==='图标系列'));
 assert(a.filter(x=>x.batch==='batch-002').every(x=>!x.bundle));
});
test('every local preview has parseable self-contained runtime assets',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate).filter(x=>x.preview);assert(a.length>=22);
 for(const x of a){const [html,css,js]=await Promise.all([read(x.preview),read(x.runtime.css),read(x.runtime.js)]);new Script(js);const composed=composePreview(html,css,js,x.runtime);assert(composed.includes("connect-src 'none'"));assert(!composed.includes('src="runtime.js"'));assert(css.length>0);}
});

test('family search preserves supplied glyph names and multilingual labels',()=>{const x=adaptCandidate({id:'test:icons',title:'Icons',keywords:['robot','机器人']});assert(x.keywords.includes('robot'));assert(x.keywords.includes('机器人'));});
