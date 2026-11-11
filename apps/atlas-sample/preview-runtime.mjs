import {loadMediaAssets} from './preview-media.mjs';
import {PREVIEW_ADAPTER_BOOTSTRAP} from './preview-adapters.mjs';
/** Bounded runtime text cache; failed requests never poison a later retry. */
export function createTextCache(fetcher=globalThis.fetch,{maxBytes=8*1024*1024,maxEntries=20}={}){
 const cache=new Map();let bytes=0;
 const abortError=()=>Object.assign(Error('预览请求已取消'),{name:'AbortError'});
 function drop(key,entry){if(cache.get(key)!==entry)return;cache.delete(key);bytes-=entry.bytes??0;}
 function trim(){for(const [key,entry] of cache){if(bytes<=maxBytes&&cache.size<=maxEntries)break;if(entry.bytes!==null)drop(key,entry)}}
 return {get(url,{signal}={}){
  if(signal?.aborted)return Promise.reject(abortError());
  let entry=cache.get(url);
  if(!entry){
   trim();if(cache.size>=maxEntries){const oldest=[...cache].find(([,e])=>e.bytes!==null);if(oldest)drop(...oldest);else return Promise.reject(Error('预览请求过多，请重试'));}
   entry={bytes:null,users:0,controller:new AbortController(),promise:null};cache.set(url,entry);
   entry.promise=Promise.resolve().then(()=>{if(entry.controller.signal.aborted)throw abortError();return fetcher(url,{signal:entry.controller.signal})}).then(r=>{if(!r.ok)throw Error('预览资源加载失败');return r.text()}).then(value=>{if(cache.get(url)===entry){entry.bytes=value.length*2;bytes+=entry.bytes;trim()}return value}).catch(error=>{drop(url,entry);throw error});
  }else{cache.delete(url);cache.set(url,entry)}
  entry.users++;
  return new Promise((resolve,reject)=>{let done=false;const finish=(fn,value)=>{if(done)return;done=true;signal?.removeEventListener('abort',cancel);entry.users--;if(entry.bytes===null&&entry.users===0){drop(url,entry);entry.controller.abort()}fn(value)};const cancel=()=>finish(reject,abortError());signal?.addEventListener('abort',cancel,{once:true});entry.promise.then(value=>finish(resolve,value),error=>finish(reject,error));});
 },clear(){for(const entry of cache.values())entry.controller.abort();cache.clear();bytes=0},stats(){return {entries:cache.size,bytes}}};
}
export const MAX_RUNTIME_SCRIPTS=16,MAX_SCRIPT_BYTES=700*1024;
/** Ordered plain UTF-8 JS files, never URLs/paths/encoded filenames. */
export function validateScriptNames(names){
 if(!Array.isArray(names)||names.length<1||names.length>MAX_RUNTIME_SCRIPTS||new Set(names).size!==names.length||Array.from(names).some(n=>typeof n!=='string'||n.length>96||! /^[A-Za-z0-9][A-Za-z0-9_-]*\.js$/.test(n)))throw Error('预览分片定义不合法');
 return names.slice();
}
function runtimeScripts(runtime){
 if(runtime.scripts===undefined)return null;
 const names=validateScriptNames(runtime.scripts);
 if(names.at(-1)!==runtime.scriptSrc||typeof runtime.js!=='string'||!(runtime.js===runtime.scriptSrc||runtime.js.endsWith('/'+runtime.scriptSrc)))throw Error('预览入口分片不匹配');
 const dir=runtime.js.slice(0,-runtime.scriptSrc.length);if(!/^(?:[A-Za-z0-9_-]+\/)*$/.test(dir))throw Error('预览分片目录不合法');
 return {names,urls:names.map(name=>dir+name)};
}
export function runtimeFor(item){return item.runtime??(item.featured?{key:'featured-v1',css:'featured/featured.css',js:'featured/featured.js',cssHref:'featured.css',scriptSrc:'featured.js'}:null)}
/** Require a real leading head; comments/application text cannot impersonate it. */
function normalizeHead(html){
 let rest=html,offset=0,htmlSeen=false,doctypeSeen=false;
 const tag=/^<(?:"[^"]*"|'[^']*'|[^'">])*>/;
 for(;;){const space=/^\s*/.exec(rest)[0];offset+=space.length;rest=rest.slice(space.length);
  if(rest.startsWith('<!--')){const end=rest.indexOf('-->');if(end<0)throw Error('预览文档注释未闭合');offset+=end+3;rest=rest.slice(end+3);continue}
  const next=tag.exec(rest)?.[0];if(!next)throw Error('预览入口缺少合法 head，已停止运行');
  if(/^<!doctype\b/i.test(next)&&!doctypeSeen&&!htmlSeen){doctypeSeen=true;offset+=next.length;rest=rest.slice(next.length);continue}
  if(/^<html(?:\s|>)/i.test(next)&&!htmlSeen){htmlSeen=true;offset+=next.length;rest=rest.slice(next.length);continue}
  if(/^<head(?:\s|>)/i.test(next))return {html,offset:offset+next.length};
  throw Error('预览入口缺少合法 head，已停止运行');
 }
}
export function composePreview(html,css,js,runtime,mediaMapping){
 const cssTag=`<link rel="stylesheet" href="${runtime.cssHref}">`,chunks=runtimeScripts(runtime),names=chunks?.names??[runtime.scriptSrc],tags=names.map(name=>`<script src="${name}"></script>`);
 if(!html.includes(cssTag)||tags.some(tag=>!html.includes(tag)))throw Error('预览入口与运行资源定义不匹配');
 if(chunks){let last=-1;for(const tag of tags){const index=html.indexOf(tag);if(index<=last||html.indexOf(tag,index+tag.length)!==-1)throw Error('预览分片顺序或重复不匹配');last=index}if((html.match(/<script\b/gi)||[]).length!==tags.length)throw Error('预览存在未声明脚本');}
 if(mediaMapping)js='if(!window.__atlasAssets)Object.defineProperty(window,"__atlasAssets",{value:Object.freeze('+JSON.stringify(mediaMapping).replace(/</g,'\\u003c')+')});\n'+js;
 const safeCss=css.replace(/<\/style/gi,'<\\/style'),safeJs=js.replace(/<\/script/gi,'<\\/script');
 let composed=html;for(const tag of tags.slice(1))composed=composed.replace(tag,'');composed=composed.replace(cssTag,()=>'<style>'+safeCss+'</style>').replace(tags[0],()=>'<script>'+safeJs+'</script>');
 const normalized=normalizeHead(composed);composed=normalized.html;const offset=normalized.offset;
 // Refuse ambiguous pre-existing policies rather than silently weakening or duplicating one.
 if(/<meta\b[^>]*http-equiv\s*=\s*["']?Content-Security-Policy\b/i.test(html))throw Error('预览入口已有 CSP，需核对后接入');
 const policy=`<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:; ${runtime.allowLocalMedia===true?'media-src blob:; ':''}connect-src 'none'; form-action 'none'">`;
 return composed.slice(0,offset)+policy+composed.slice(offset);
}
/** A start signal is diagnostic only: it is never proof of visual or functional success. */
const HEALTH_CHANNEL='ui-vault-preview-health-v1';
/** Chrome reports these ResizeObserver loop diagnostics as window error events with a string message; they are not application failures. */
export const BENIGN_PREVIEW_ERROR_RE=/ResizeObserver loop (?:completed with undelivered notifications|limit exceeded)\.?/i;
export function isBenignPreviewError(message){return typeof message==='string'&&BENIGN_PREVIEW_ERROR_RE.test(message)}

function healthNonce(){const values=new Uint32Array(4);if(!globalThis.crypto?.getRandomValues)throw Error('浏览器不支持安全预览诊断');globalThis.crypto.getRandomValues(values);return Array.from(values,x=>x.toString(16).padStart(8,'0')).join('')}
function healthBootstrap(nonce,generation,mediaMapping){
 const config=JSON.stringify({channel:HEALTH_CHANNEL,nonce,generation}).replace(/</g,'\\u003c');
 const assetsInit=mediaMapping?'try{if(!window.__atlasAssets)Object.defineProperty(window,"__atlasAssets",{value:Object.freeze('+JSON.stringify(mediaMapping).replace(/</g,'\\u003c')+')})}catch(_){};':'';
 return `<script>(function(config){${assetsInit}${PREVIEW_ADAPTER_BOOTSTRAP}var failed=false,started=false,warned=false,benign=`+BENIGN_PREVIEW_ERROR_RE+`;var send=function(kind,message){try{parent.postMessage({channel:config.channel,nonce:config.nonce,generation:config.generation,kind:kind,message:String(message||'').slice(0,500)},'*')}catch(_){}};var ignoreBenign=function(event,message){if(typeof message!=='string'||!benign.test(message))return false;if(event.cancelable)event.preventDefault();event.stopImmediatePropagation();return true};window.addEventListener('error',function(event){if(failed)return;if(ignoreBenign(event,event.message))return;if(typeof event.message!=='string'){if(!warned){warned=true;send('warning','预览资源加载出现告警')}return}failed=true;send('error',event.message||'预览脚本执行失败')},true);window.addEventListener('unhandledrejection',function(event){if(failed)return;var reason=event.reason;var message='未处理的异步错误';try{if(reason&&typeof reason.message==='string')message=reason.message;else if(typeof reason==='string')message=reason}catch(_){}if(ignoreBenign(event,message))return;failed=true;send('error',message)});var start=function(){if(started||failed)return;started=true;send('started','启动阶段未捕获异常；视觉与交互尚未验证')};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start()})(`+config+`);</script>`;
}
/** Source identity + per-mount random capability + generation reject stale/cross-frame messages. */
export function createPreviewLoader({cache=createTextCache(),connected=frame=>frame.isConnected,mediaLoader=loadMediaAssets,diagnosticTimeoutMs=5000}={}){
 const versions=new WeakMap(),controllers=new WeakMap(),media=new WeakMap(),health=new WeakMap();
 function stopHealth(frame){health.get(frame)?.();health.delete(frame)}
 function release(frame){stopHealth(frame);media.get(frame)?.dispose();media.delete(frame);controllers.get(frame)?.abort();controllers.delete(frame);versions.set(frame,(versions.get(frame)??0)+1);frame.onload=null;frame.removeAttribute('srcdoc');frame.removeAttribute('src');frame.src='about:blank';frame.dataset.preview='';frame.dataset.previewState='idle'}
 async function mount(frame,item,{onState=()=>{},onReady=()=>{},onError=()=>{}}={}){
  release(frame);const version=versions.get(frame),controller=new AbortController();controllers.set(frame,controller);frame.dataset.preview=item.preview;
  let failed=false;const current=()=>versions.get(frame)===version&&connected(frame)&&!controller.signal.aborted;
  const state=(phase,message,signal)=>{if(!current()||failed&&phase!=='error')return;frame.dataset.previewState=phase;onState({phase,message,signal})};
  const fail=(error,signal)=>{if(!current()||failed)return;failed=true;stopHealth(frame);media.get(frame)?.dispose();media.delete(frame);state('error',signal==='runtime'?'预览运行时报错':'预览资源未能加载',signal);frame.onload=null;frame.removeAttribute('srcdoc');frame.removeAttribute('src');frame.src='about:blank';onError(error);controller.abort()};
  state('loading','正在加载预览资源与启动诊断…','loading');
  try{
   const runtime=runtimeFor(item);
   if(!runtime){frame.onload=()=>{if(current()&&!failed)state('unverified','文档已载入；没有运行诊断，视觉与交互未验证','load-only')};frame.src=item.preview;return}
   const chunks=runtimeScripts(runtime),urls=chunks?.urls??[runtime.js],get=url=>cache.get(url,{signal:controller.signal});
   const [css,texts,html]=await Promise.all([get(runtime.css),Promise.all(urls.map(get)),get(item.preview)]);
   if(chunks&&texts.some(text=>new TextEncoder().encode(text).byteLength>=MAX_SCRIPT_BYTES))throw Error('预览分片过大');
   const js=texts.join('\n;\n');let assets;
   if(runtime.assets){assets=await mediaLoader(runtime.assets,{signal:controller.signal});if(!current()){assets.dispose();return}media.set(frame,assets)}
   if(!current())return;
   const nonce=healthNonce(),target=frame.ownerDocument?.defaultView??globalThis.window;
   const composed=composePreview(html,css,js,runtime,assets?.mapping);
   let timer=null,started=false,warned=false;
   const clearTimer=()=>{if(timer!==null){clearTimeout(timer);timer=null}};
   const receive=event=>{
    if(!current()||failed||event.source!==frame.contentWindow)return;
    const data=event.data;
    if(!data||typeof data!=='object'||data.channel!==HEALTH_CHANNEL||data.nonce!==nonce||data.generation!==version)return;
    if(data.kind==='error'){
     const message=typeof data.message==='string'?data.message.slice(0,500).replace(/[\u0000-\u001f]/g,' '):'预览运行时报错';
     if(isBenignPreviewError(message))return;
     fail(Error(message),'runtime');
    }else if(data.kind==='warning'&&!warned){warned=true;state('unverified','检测到资源加载告警；运行效果尚未验证','resource-warning')}else if(data.kind==='started'&&!started){started=true;clearTimer();state('unverified',warned?'启动收到资源告警；视觉与交互尚未验证':'启动阶段未捕获异常；视觉与交互尚未验证',warned?'resource-warning':'started');onReady({verified:false,phase:'unverified'})}
   };
   target?.addEventListener('message',receive);
   health.set(frame,()=>{clearTimer();target?.removeEventListener('message',receive)});
   timer=setTimeout(()=>{timer=null;if(current()&&!failed&&!started)state('unverified','未收到启动诊断；视觉与交互尚未验证','diagnostic-timeout')},diagnosticTimeoutMs);
   // onload may fire even for a broken document. It intentionally grants no readiness.
   frame.onload=()=>{};
   // Inject before all application code, while preserving the existing CSP verbatim.
   const metaStart=composed.indexOf('<meta http-equiv="Content-Security-Policy"');
   const headEnd=metaStart<0?-1:composed.indexOf('>',metaStart)+1;
   if(metaStart<0||headEnd<=0)throw Error('预览入口缺少安全策略');
   frame.srcdoc=composed.slice(0,headEnd)+healthBootstrap(nonce,version,assets?.mapping)+composed.slice(headEnd);
  }catch(error){fail(error,'asset')}
 }
 return {mount,release,cache};
}
/** At most maxActive previews run. Hidden/offscreen cards own no live document. */
export function createPreviewPool({loader,Observer=globalThis.IntersectionObserver,maxActive=6}={}){
 const records=new Map();let suspended=false,serial=0,preferred=null;
 function reconcile(){
  const chosen=new Set(suspended?[]:[...records.values()].filter(r=>r.visible).sort((a,b)=>Number(b.element===preferred)-Number(a.element===preferred)||a.top-b.top||a.order-b.order).slice(0,maxActive));
  // Release first, including when the selected card precedes the old one in DOM order.
  for(const r of records.values())if(!chosen.has(r)&&r.active){r.active=false;loader.release(r.frame);r.element.dataset.previewState='idle'}
  for(const r of chosen)if(!r.active){r.active=true;r.element.dataset.previewState='loading';loader.mount(r.frame,r.item,{onState:state=>{if(r.active){r.element.dataset.previewState=state.phase;r.element.dataset.previewSignal=state.signal}},onReady:()=>{if(r.active)r.element.dataset.previewState='unverified'},onError:()=>{if(r.active)r.element.dataset.previewState='error'}})}
 }
 const observer=Observer?new Observer(entries=>{for(const e of entries){const r=records.get(e.target);if(r){r.visible=e.isIntersecting;r.top=e.boundingClientRect?.top??0}}reconcile()},{rootMargin:'0px',threshold:.05}):null;
 return {register(frame,item,element){const r={frame,item,element,visible:false,active:false,top:0,order:serial++};records.set(element,r);element.dataset.previewState='idle';observer?.observe(element);if(!observer)reconcile()},prefer(element){preferred=records.has(element)?element:null;if(!observer)for(const r of records.values())r.visible=r.element===preferred;reconcile()},suspend(value=true){suspended=value;reconcile()},clear(){preferred=null;observer?.disconnect();for(const r of records.values()){r.active=false;loader.release(r.frame);r.element.dataset.previewState='idle'}records.clear()},stats(){return {registered:records.size,active:[...records.values()].filter(r=>r.active).length,suspended}},destroy(){this.clear();suspended=true}};
}
