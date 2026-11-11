import test from'node:test';import assert from'node:assert/strict';import{composePreview,createPreviewLoader,createPreviewPool,isBenignPreviewError,BENIGN_PREVIEW_ERROR_RE}from'./preview-runtime.mjs';
const runtime={css:'a.css',js:'a.js',cssHref:'a.css',scriptSrc:'a.js'},html='<html><head><link rel="stylesheet" href="a.css"></head><body><div id="app"></div><script src="a.js"></script></body></html>',item={preview:'a.html',runtime};
class Target extends EventTarget{count=0;addEventListener(k,f,o){super.addEventListener(k,f,o);if(k==='message')this.count++}removeEventListener(k,f,o){super.removeEventListener(k,f,o);if(k==='message')this.count--}}
function fixture(code='',markup=html){const target=new Target(),frame={contentWindow:{},ownerDocument:{defaultView:target},dataset:{},isConnected:true,removeAttribute(k){delete this[k]}},states=[],errors=[],ready=[];const loader=createPreviewLoader({cache:{get:async u=>u==='a.html'?markup:u==='a.js'?code:''},diagnosticTimeoutMs:20});const handlers={onState:s=>states.push(s),onError:e=>errors.push(e),onReady:r=>ready.push(r)};return{target,frame,states,errors,ready,loader,handlers}}
function capability(frame){const s=frame.srcdoc;return{channel:'ui-vault-preview-health-v1',nonce:s.match(/"nonce":"([a-f0-9]{32})"/)[1],generation:Number(s.match(/"generation":(\d+)/)[1])}}
function post(f,data,source=f.frame.contentWindow){const e=new Event('message');Object.defineProperties(e,{source:{value:source},data:{value:data}});f.target.dispatchEvent(e)}
const delay=ms=>new Promise(r=>setTimeout(r,ms));
test('load is not success; source, nonce and generation all required; start remains unverified',async()=>{const f=fixture();await f.loader.mount(f.frame,item,f.handlers);const cap=capability(f.frame);f.frame.onload();assert.equal(f.ready.length,0);assert.equal(f.states.at(-1).phase,'loading');for(const [data,source]of[[{...cap,kind:'started'},{}],[{...cap,kind:'started',nonce:'bad'},f.frame.contentWindow],[{...cap,kind:'started',generation:cap.generation-1},f.frame.contentWindow],[{...cap,kind:'unknown'},f.frame.contentWindow]])post(f,data,source);assert.equal(f.states.length,1);post(f,{...cap,kind:'started'});assert.equal(f.states.at(-1).phase,'unverified');assert.equal(f.ready[0].verified,false);post(f,{...cap,kind:'started'});assert.equal(f.ready.length,1);f.loader.release(f.frame);assert.equal(f.target.count,0)});
test('late uncaught error is sticky, clears resources and cannot be replaced by ready',async()=>{const f=fixture();await f.loader.mount(f.frame,item,f.handlers);const cap=capability(f.frame);post(f,{...cap,kind:'started'});post(f,{...cap,kind:'error',message:'late crash'});assert.equal(f.errors[0].message,'late crash');assert.equal(f.states.at(-1).phase,'error');assert.equal(f.frame.src,'about:blank');assert.equal(f.target.count,0);post(f,{...cap,kind:'started'});assert.equal(f.states.at(-1).phase,'error');f.loader.release(f.frame)});
test('stable WindowProxy cannot revive old generation, cancelled callbacks or cross-frame tokens',async()=>{const f=fixture();await f.loader.mount(f.frame,item,f.handlers);const old=capability(f.frame),load=f.frame.onload;await f.loader.mount(f.frame,item,f.handlers);const next=capability(f.frame);assert.notEqual(old.nonce,next.nonce);assert.notEqual(old.generation,next.generation);post(f,{...old,kind:'error',message:'stale'});load();assert.equal(f.errors.length,0);post(f,{...next,kind:'started'},{});assert.equal(f.ready.length,0);f.loader.release(f.frame);post(f,{...next,kind:'started'});assert.equal(f.ready.length,0);assert.equal(f.target.count,0);await delay(30);assert.equal(f.states.at(-1).phase,'loading')});
test('no signal times out to unverified, never inferred success; release removes watch',async()=>{const f=fixture();await f.loader.mount(f.frame,item,f.handlers);await delay(30);assert.equal(f.states.at(-1).signal,'diagnostic-timeout');assert.equal(f.ready.length,0);assert.equal(f.errors.length,0);f.loader.release(f.frame);assert.equal(f.target.count,0)});
test('asset failure and missing head fail closed without running or leaked listener',async()=>{for(const markup of['<div><link rel="stylesheet" href="a.css"></div><script src="a.js"></script>','<!doctype html><html><meta charset="utf-8"><link rel="stylesheet" href="a.css"><div>x</div><script src="a.js"></script>']){const f=fixture('',markup);await f.loader.mount(f.frame,item,f.handlers);assert.equal(f.errors.length,1);assert.equal(f.frame.srcdoc,undefined);assert.equal(f.frame.src,'about:blank');assert.equal(f.target.count,0);f.loader.release(f.frame)}});
test('CSP is first real head metadata for case/attributes/comments; missing/fake/duplicate head-policy rejected',()=>{const policy="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:; connect-src 'none'; form-action 'none'";for(const opening of['<head>','<!doctype html><html lang="zh-CN"><HEAD data-theme="light">','<!-- <head>fake</head> --><html data-x="<head>"><head data-x=">">']){const out=composePreview(opening+'<link rel="stylesheet" href="a.css"></head><body><script src="a.js"></script></body>','','',runtime);assert.equal((out.match(/http-equiv="Content-Security-Policy"/g)||[]).length,1);assert(out.includes(opening+'<meta http-equiv="Content-Security-Policy" content="'+policy+'">'));assert(out.indexOf('<meta http-equiv="Content-Security-Policy"')<out.indexOf('<style>'))}assert.throws(()=>composePreview('<!-- <head> -->'+html.replace('<head>','').replace('</head>',''),'','',runtime));assert.throws(()=>composePreview(html.replace('<head>','<head><meta http-equiv="Content-Security-Policy" content="default-src none">'),'','',runtime));assert.match(composePreview(html,'','',{...runtime,allowLocalMedia:true}),/media-src blob:;/)});
test('20 mounts/release cycles do not accumulate parent message listeners or delayed state',async()=>{const f=fixture();for(let i=0;i<20;i++){await f.loader.mount(f.frame,item,f.handlers);assert.equal(f.target.count,1);f.loader.release(f.frame);assert.equal(f.target.count,0)}const count=f.states.length;await delay(30);assert.equal(f.states.length,count)});

test('legacy document without runtime only reports unverified on load',async()=>{const f=fixture();await f.loader.mount(f.frame,{preview:'legacy.html'},f.handlers);f.frame.onload();assert.equal(f.ready.length,0);assert.equal(f.states.at(-1).signal,'load-only');assert.equal(f.states.at(-1).phase,'unverified');f.loader.release(f.frame);assert.equal(f.target.count,0)});
test('only known ResizeObserver loop diagnostics are benign, not a catch-all',()=>{
 for(const message of['ResizeObserver loop completed with undelivered notifications.','ResizeObserver loop completed with undelivered notifications','ResizeObserver loop limit exceeded','ResizeObserver loop limit exceeded.'])assert.equal(isBenignPreviewError(message),true);
 for(const message of['ResizeObserver','ResizeObserver loop','Script error.','JSON viewer unavailable. Close and reopen.','预览脚本执行失败','',null,undefined,123])assert.equal(isBenignPreviewError(message),false);
});
test('parent ignores benign ResizeObserver error posts and still accepts start; real errors remain fatal',async()=>{
 const f=fixture();await f.loader.mount(f.frame,item,f.handlers);const cap=capability(f.frame);
 post(f,{...cap,kind:'error',message:'ResizeObserver loop completed with undelivered notifications.'});
 assert.equal(f.errors.length,0);assert.equal(typeof f.frame.srcdoc,'string');assert.notEqual(f.states.at(-1).phase,'error');
 post(f,{...cap,kind:'started'});assert.equal(f.states.at(-1).phase,'unverified');assert.equal(f.ready[0].verified,false);
 post(f,{...cap,kind:'error',message:'ResizeObserver loop limit exceeded'});
 assert.equal(f.errors.length,0);assert.equal(f.states.at(-1).phase,'unverified');assert.equal(typeof f.frame.srcdoc,'string');
 post(f,{...cap,kind:'error',message:'actual boom'});
 assert.equal(f.errors[0].message,'actual boom');assert.equal(f.states.at(-1).phase,'error');assert.equal(f.frame.srcdoc,undefined);assert.equal(f.frame.src,'about:blank');
 f.loader.release(f.frame);
});
test('injected health bootstrap swallows only ResizeObserver loop errors, stops later listeners, and still starts',async()=>{
 const f=fixture();await f.loader.mount(f.frame,item,f.handlers);
 const src=f.frame.srcdoc;const match=src.match(/<script>\(function\(config\)\{[\s\S]*?\}\)\(\{[\s\S]*?\}\);<\/script>/);
 assert.ok(match);assert.ok(match[0].includes(String(BENIGN_PREVIEW_ERROR_RE)));
 const messages=[];const listeners=[];
 const window={addEventListener(type,fn,opts){listeners.push({type,fn,opts})},document:{readyState:'complete'}};
 const {createContext,runInContext}=await import('node:vm');
 runInContext(match[0].slice(8,-9),createContext({window,document:window.document,parent:{postMessage(data){messages.push(data)}}}));
 const errorListener=listeners.find(l=>l.type==='error');
 assert.equal(errorListener?.opts,true);
 assert.equal(messages.map(m=>m.kind).join(','),'started');
 let prevented=false,stopped=false;
 errorListener.fn({message:'ResizeObserver loop completed with undelivered notifications.',cancelable:true,preventDefault(){prevented=true},stopImmediatePropagation(){stopped=true}});
 assert.equal(prevented,true);assert.equal(stopped,true);assert.equal(messages.length,1);
 const rejectListener=listeners.find(l=>l.type==='unhandledrejection');
 const before=messages.length;
 rejectListener.fn({reason:{message:'ResizeObserver loop limit exceeded'},cancelable:true,preventDefault(){},stopImmediatePropagation(){}});
 assert.equal(messages.length,before);
 errorListener.fn({message:'actual boom',cancelable:true,preventDefault(){},stopImmediatePropagation(){}});
 assert.equal(messages.at(-1).kind,'error');assert.equal(messages.at(-1).message,'actual boom');
 const after=messages.length;
 rejectListener.fn({reason:{message:'async boom'},cancelable:true,preventDefault(){},stopImmediatePropagation(){}});
 assert.equal(messages.length,after);
 f.loader.release(f.frame);
});
