import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Script} from 'node:vm';
import {adaptCandidate} from './candidate-adapter.mjs';
import {composePreview,validateScriptNames,MAX_SCRIPT_BYTES} from './preview-runtime.mjs';
const read=p=>readFile(new URL(p,import.meta.url),'utf8');
test('source baseline is preserved; new families have previews or explicit reviewed source-only status',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate),b=JSON.parse(await read('items.json'));
 const baseline=JSON.parse(await read('candidate-baseline-ids.json'));assert.equal(baseline.length,185);assert(baseline.every(id=>a.some(x=>x.id===id)));assert(a.filter(x=>!baseline.includes(x.id)).every(x=>x.preview||(x.previewStatus==='source-only'&&x.sourceCollectionReady===true&&x.runtimeRedistributionAuditComplete===false&&x.completedPreviewCount===0&&/^[a-f0-9]{40}$/.test(x.revision)&&/^https:\/\/github\.com\//.test(x.licenseEvidence?.url||'')&&/^[a-f0-9]{64}$/.test(x.licenseEvidence?.sha256||''))));assert.equal(new Set([...a,...b].map(x=>x.id)).size,a.length+b.length);
 const categories=['Agent与对话','输入与选择','导航与组织','数据与状态','展示与媒体','产品与营销','视觉与动效','图标系列'];assert(a.every(x=>x.pending&&x.featured&&categories.includes(x.category)));
 assert(a.filter(x=>x.format==='图标家族').every(x=>x.kind==='图标系列'));
 assert(a.filter(x=>x.batch==='batch-002').every(x=>!x.bundle));
});
test('every local preview has parseable self-contained runtime assets',async()=>{
 const a=JSON.parse(await read('candidate-catalog.json')).map(adaptCandidate).filter(x=>x.preview);assert(a.length>=22);
 for(const x of a){const names=x.runtime.scripts?validateScriptNames(x.runtime.scripts):[x.runtime.scriptSrc],dir=x.runtime.js.slice(0,-x.runtime.scriptSrc.length);const [html,css,parts]=await Promise.all([read(x.preview),read(x.runtime.css),Promise.all(names.map(n=>read(dir+n)))]);for(const text of parts){new Script(text);if(x.runtime.scripts)assert(Buffer.byteLength(text,'utf8')<MAX_SCRIPT_BYTES)}const js=parts.join('\n;\n');new Script(js);const composed=composePreview(html,css,js,x.runtime);assert(composed.includes("connect-src 'none'"));assert(!composed.includes('src="runtime.js"'));assert(css.length>0);}
});

test('family search preserves supplied glyph names and multilingual labels',()=>{const x=adaptCandidate({id:'test:icons',title:'Icons',keywords:['robot','机器人']});assert(x.keywords.includes('robot'));assert(x.keywords.includes('机器人'));});

test('local audio previews opt in only to blob media while all network stays blocked',()=>{const h='<head><link rel="stylesheet" href="runtime.css"></head><script src="runtime.js"></script>';const r={cssHref:'runtime.css',scriptSrc:'runtime.js'};const normal=composePreview(h,'body{}','',r),audio=composePreview(h,'body{}','',{...r,allowLocalMedia:true});assert(!normal.includes('media-src'));assert(audio.includes('media-src blob:;'));assert(audio.includes("connect-src 'none'"));assert(audio.includes("default-src 'none'"));assert(!audio.includes('media-src https:'));});

test('reviewed source-only additions stay outside the runnable gallery and claim no runtime or ZIP',async()=>{const raw=JSON.parse(await read('candidate-catalog.json'));for(const x of raw.filter(x=>x.sourceCollectionReady)){assert.equal(x.previewStatus,'source-only');assert.equal(x.runtimeRedistributionAuditComplete,false);assert.equal(x.publicationReady,false);assert.equal(x.completedPreviewCount,0);assert(!x.preview&&!x.thumbnail&&!x.archive);const y=adaptCandidate(x);assert.equal(y.runtime,null);assert.equal(y.bundle,'');assert(y.adaptation.length>0);assert(!raw.filter(z=>z.preview).some(z=>z.id===x.id));}});

test('normal presentation removes generic QA badges without changing audit facts or limitations',()=>{const raw={id:'test:card',title:'卡片',source:'Test',preview:'batches/test/card.html',description:'源码已归档；视觉效果与交互尚未完成本轮验证。',buildStatus:'not visually verified',gaps:['真实封面及最终浏览器验收未完成','仅本地模拟，不发送消息。'],browserVisualQA:'pending'};const before=JSON.stringify(raw),x=adaptCandidate(raw);assert.equal(x.description,'Test · 卡片');assert.equal(x.kind,'组件');assert.equal(x.adaptation,'仅本地模拟，不发送消息。');assert.equal(x.buildStatus,raw.buildStatus);assert.equal(x.browserVisualQA,'pending');assert.equal(x.pending,true);assert.equal(JSON.stringify(raw),before);});
