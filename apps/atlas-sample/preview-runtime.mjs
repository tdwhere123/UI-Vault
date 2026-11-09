import {loadMediaAssets} from './preview-media.mjs';
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
export function composePreview(html,css,js,runtime,mediaMapping){
 const cssTag=`<link rel="stylesheet" href="${runtime.cssHref}">`,chunks=runtimeScripts(runtime),names=chunks?.names??[runtime.scriptSrc],tags=names.map(name=>`<script src="${name}"></script>`);
 if(!html.includes(cssTag)||tags.some(tag=>!html.includes(tag)))throw Error('预览入口与运行资源定义不匹配');
 if(chunks){let last=-1;for(const tag of tags){const index=html.indexOf(tag);if(index<=last||html.indexOf(tag,index+tag.length)!==-1)throw Error('预览分片顺序或重复不匹配');last=index}if((html.match(/<script\b/gi)||[]).length!==tags.length)throw Error('预览存在未声明脚本');}
 if(mediaMapping)js='Object.defineProperty(window,"__atlasAssets",{value:Object.freeze('+JSON.stringify(mediaMapping).replace(/</g,'\\u003c')+')});\n'+js;
 const safeCss=css.replace(/<\/style/gi,'<\\/style'),safeJs=js.replace(/<\/script/gi,'<\\/script');
 let composed=html;for(const tag of tags.slice(1))composed=composed.replace(tag,'');composed=composed.replace(cssTag,()=>'<style>'+safeCss+'</style>').replace(tags[0],()=>'<script>'+safeJs+'</script>');
 return composed.replace('<head>',`<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:; ${runtime.allowLocalMedia===true?'media-src blob:; ':''}connect-src 'none'; form-action 'none'">`);
}
/** Generation tokens prevent stale async completions from reviving released frames. */
export function createPreviewLoader({cache=createTextCache(),connected=frame=>frame.isConnected,mediaLoader=loadMediaAssets}={}){
 const versions=new WeakMap(),controllers=new WeakMap(),media=new WeakMap();
 function release(frame){media.get(frame)?.dispose();media.delete(frame);controllers.get(frame)?.abort();controllers.delete(frame);versions.set(frame,(versions.get(frame)??0)+1);frame.onload=null;frame.removeAttribute('srcdoc');frame.removeAttribute('src');frame.src='about:blank';frame.dataset.preview=''}
 async function mount(frame,item,{onReady=()=>{},onError=()=>{}}={}){
  release(frame);const version=versions.get(frame),controller=new AbortController();controllers.set(frame,controller);frame.dataset.preview=item.preview;
  const current=()=>versions.get(frame)===version&&connected(frame);
  const loaded=()=>{if(current())onReady()};
  try{const runtime=runtimeFor(item);if(!runtime){frame.onload=loaded;frame.src=item.preview;return}const chunks=runtimeScripts(runtime),urls=chunks?.urls??[runtime.js],get=url=>cache.get(url,{signal:controller.signal});const [css,texts,html]=await Promise.all([get(runtime.css),Promise.all(urls.map(get)),get(item.preview)]);if(chunks&&texts.some(text=>new TextEncoder().encode(text).byteLength>=MAX_SCRIPT_BYTES))throw Error('预览分片过大');const js=texts.join('\n;\n');let assets;if(runtime.assets){assets=await mediaLoader(runtime.assets,{signal:controller.signal});if(!current()){assets.dispose();return}media.set(frame,assets)}if(current()){const document=composePreview(html,css,js,runtime,assets?.mapping);frame.onload=loaded;frame.srcdoc=document}}catch(error){controller.abort();if(current()){media.get(frame)?.dispose();media.delete(frame)}if(current()){onError(error);frame.srcdoc='<p style="font:14px system-ui;padding:20px">预览未加载，打开详情重试。</p>'}}
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
  for(const r of chosen)if(!r.active){r.active=true;r.element.dataset.previewState='loading';loader.mount(r.frame,r.item,{onReady:()=>{if(r.active)r.element.dataset.previewState='ready'},onError:()=>{if(r.active)r.element.dataset.previewState='error'}})}
 }
 const observer=Observer?new Observer(entries=>{for(const e of entries){const r=records.get(e.target);if(r){r.visible=e.isIntersecting;r.top=e.boundingClientRect?.top??0}}reconcile()},{rootMargin:'0px',threshold:.05}):null;
 return {register(frame,item,element){const r={frame,item,element,visible:false,active:false,top:0,order:serial++};records.set(element,r);element.dataset.previewState='idle';observer?.observe(element);if(!observer)reconcile()},prefer(element){preferred=records.has(element)?element:null;if(!observer)for(const r of records.values())r.visible=r.element===preferred;reconcile()},suspend(value=true){suspended=value;reconcile()},clear(){preferred=null;observer?.disconnect();for(const r of records.values()){r.active=false;loader.release(r.frame);r.element.dataset.previewState='idle'}records.clear()},stats(){return {registered:records.size,active:[...records.values()].filter(r=>r.active).length,suspended}},destroy(){this.clear();suspended=true}};
}
