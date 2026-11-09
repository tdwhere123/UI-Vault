import test from 'node:test';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
import {loadMediaAssets,validateMediaAssets,MAX_MEDIA_BYTES} from './preview-media.mjs';
import {createPreviewLoader,composePreview} from './preview-runtime.mjs';
const bytes=new Uint8Array([137,80,78,71,13,10,26,10,0]);
const entry={key:'a.png',path:'batches/test/images/a.png',mime:'image/png',bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};
const options=(extra={})=>({baseURL:'https://example.test/UI-Vault/',fetcher:async()=>new Response(bytes,{headers:{'content-type':'image/png'}}),...extra});
function blobs(){const made=[],revoked=[];return {made,revoked,urlAPI:{createObjectURL:()=>{const u='blob:test/'+made.length;made.push(u);return u},revokeObjectURL:u=>revoked.push(u)}}}
test('media inventory rejects URLs traversal encoded paths duplicates and oversized declarations before fetching',async()=>{
 for(const path of ['https://evil/a.png','//evil/a.png','batches/test/../a.png','batches/test/%2e%2e/a.png','batches/test/a.png?x','batches/test/a.png#x','batches/test/\\a.png'])assert.throws(()=>validateMediaAssets([{...entry,path}]));
 for(const patch of [{mime:'image/svg+xml'},{sha256:'bad'},{bytes:0},{bytes:MAX_MEDIA_BYTES},{key:'__proto__'}])assert.throws(()=>validateMediaAssets([{...entry,...patch}]));
 assert.throws(()=>validateMediaAssets([entry,entry]));assert.throws(()=>validateMediaAssets(Array.from({length:9},(_,i)=>({...entry,key:`a${i}`,path:`batches/a/${i}.png`,bytes:1024*1024}))));
 let calls=0;await assert.rejects(loadMediaAssets([{...entry,path:'../a.png'}],options({fetcher:()=>calls++})));assert.equal(calls,0);
});
test('media fetch is fixed same-origin with redirects and credentials disabled; verified blobs revoked idempotently',async()=>{
 const b=blobs(),controller=new AbortController();let request;
 const result=await loadMediaAssets([entry],options({...b,signal:controller.signal,fetcher:async(...args)=>{request=args;return new Response(bytes,{headers:{'content-type':'image/png','content-length':String(bytes.length)}})}}));
 assert.equal(request[0],'https://example.test/UI-Vault/batches/test/images/a.png');assert.equal(request[1].redirect,'error');assert.equal(request[1].credentials,'omit');assert.equal(result.mapping['a.png'],'blob:test/0');assert.ok(Object.isFrozen(result.mapping));controller.abort();result.dispose();assert.deepEqual(b.revoked,b.made);
});
test('reject MIME byte length magic hash redirects and oversized streaming bodies without making a blob',async()=>{
 for(const kind of ['mime','length','magic','hash','redirect','oversize']){
  const b=blobs();const data=kind==='magic'?new Uint8Array(bytes.length):kind==='oversize'?new Uint8Array(100):bytes;
  await assert.rejects(loadMediaAssets([{...entry,...(kind==='hash'?{sha256:'0'.repeat(64)}:{})}],options({...b,fetcher:async()=>kind==='redirect'?{ok:true,redirected:true}:new Response(data,{headers:{'content-type':kind==='mime'?'text/html':'image/png',...(kind==='length'?{'content-length':'500'}:{})}})})));assert.equal(b.made.length,0);
 }
});
test('partial batch failure releases earlier blobs; cancellation while hashing creates none',async()=>{
 const b=blobs();await assert.rejects(loadMediaAssets([entry,{...entry,key:'b.png',path:'batches/a/b.png',sha256:'0'.repeat(64)}],options(b)));assert.deepEqual(b.revoked,b.made);assert.equal(b.made.length,1);
 const c=new AbortController(),b2=blobs();await assert.rejects(loadMediaAssets([entry],options({...b2,signal:c.signal,crypto:{subtle:{digest:async()=>{c.abort();return new ArrayBuffer(32)}}}})),{name:'AbortError'});assert.equal(b2.made.length,0);
});
const runtime={css:'a.css',js:'a.js',cssHref:'a.css',scriptSrc:'a.js',assets:[entry]};const html='<head><link rel="stylesheet" href="a.css"></head><script src="a.js"></script>';
const frame=()=>({dataset:{},isConnected:true,removeAttribute(k){delete this[k]}});
test('loader disposes media on release, compose failure and stale completions, preserving CSP',async()=>{
 let disposed=0;const cache={get:async path=>path==='a.html'?html:''};const mediaLoader=async()=>({mapping:{'a.png':'blob:test/0'},dispose:()=>disposed++});
 const loader=createPreviewLoader({cache,mediaLoader}),f=frame();await loader.mount(f,{preview:'a.html',runtime});assert.match(f.srcdoc,/__atlasAssets/);assert.match(f.srcdoc,/img-src data: blob:/);assert.match(f.srcdoc,/connect-src 'none'/);loader.release(f);assert.equal(disposed,1);
 await loader.mount(f,{preview:'bad.html',runtime});assert.equal(disposed,2);
 let finish;const stale=createPreviewLoader({cache,mediaLoader:()=>new Promise(r=>finish=r)});const pending=stale.mount(f,{preview:'a.html',runtime});await new Promise(r=>setImmediate(r));stale.release(f);finish({mapping:{},dispose:()=>disposed++});await pending;assert.equal(disposed,3);assert.equal(f.srcdoc,undefined);
});
test('mapping script escapes less-than and is injected ahead of consumer code',()=>{const result=composePreview(html,'','consume()',runtime,{'a.png':'blob:test/0'});assert.ok(result.indexOf('__atlasAssets')<result.indexOf('consume()'));assert.ok(!result.includes('allow-same-origin'))});

// Contract integration: catalog JSON -> gallery adapter -> actual media loader -> iframe srcdoc -> consumer.
test('catalog raster declarations survive adapter and reach iframe consumer through verified loader',async()=>{
 const {adaptCandidate}=await import('./candidate-adapter.mjs');const {runInNewContext}=await import('node:vm');
 const raw=JSON.parse(JSON.stringify({id:'test:media',title:'媒体测试',preview:'batches/test/index.html',runtime:{assets:[entry]}}));
 const item=adaptCandidate(raw);assert.deepEqual(item.runtime.assets,[entry]);const b=blobs(),f=frame();let fetched=0;
 const page='<head><link rel="stylesheet" href="runtime.css"></head><script src="runtime.js"></script>';
 const cache={get:async path=>path.endsWith('index.html')?page:path.endsWith('.js')?'window.observed=window.__atlasAssets["a.png"];':'img{}'};
 const loader=createPreviewLoader({cache,mediaLoader:(assets,{signal})=>loadMediaAssets(assets,options({...b,signal,fetcher:async()=>{fetched++;return new Response(bytes,{headers:{'content-type':'image/png'}})}}))});
 await loader.mount(f,item);assert.equal(fetched,1);const context={window:{}};runInNewContext([...f.srcdoc.matchAll(/<script>([\s\S]*?)<\/script>/g)].at(-1)[1],context);assert.equal(context.window.observed,b.made[0]);assert.ok(Object.isFrozen(context.window.__atlasAssets));loader.release(f);assert.deepEqual(b.revoked,b.made);
 // Invalid catalog entries must not silently turn into undeclared fallback media.
 const bad=adaptCandidate({...raw,runtime:{assets:[{...entry,path:'https://external.test/a.png'}]}});let errors=0;await loader.mount(f,bad,{onError:()=>errors++});assert.equal(errors,1);assert.equal(fetched,1);
});
