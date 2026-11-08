import test from 'node:test';
import assert from 'node:assert/strict';
import {createPreviewLoader} from './preview-runtime.mjs';
const frame=()=>({dataset:{},isConnected:true,removeAttribute(k){delete this[k]}});
const item={featured:true,preview:'sample.html'};
const html='<head><link rel="stylesheet" href="featured.css"></head><script src="featured.js"></script>';
test('failed asset calls error, never ready, and explicit retry can recover',async()=>{
 let fail=true,errors=0,ready=0;
 const loader=createPreviewLoader({cache:{get:async url=>{if(fail)throw Error('offline');return url.endsWith('.html')?html:''}}});
 const f=frame();await loader.mount(f,item,{onError:()=>errors++,onReady:()=>ready++});
 assert.equal(errors,1);assert.equal(ready,0);
 fail=false;await loader.mount(f,item,{onError:()=>errors++,onReady:()=>ready++});
 assert.equal(ready,0,'mount resolves before iframe load; caller must await onReady');
 f.onload();assert.equal(ready,1);assert.equal(errors,1);
});
test('stale failing mount does not report an error over a newer navigation',async()=>{
 let reject; const pending=new Promise((_,r)=>{reject=r});let errors=0;
 const loader=createPreviewLoader({cache:{get:()=>pending}});const f=frame();
 const operation=loader.mount(f,item,{onError:()=>errors++});loader.release(f);
 reject(Error('old request'));await operation;assert.equal(errors,0);assert.equal(f.srcdoc,undefined);
});
