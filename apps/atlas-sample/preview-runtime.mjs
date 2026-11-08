/** Bounded runtime text cache; failed requests never poison a later retry. */
export function createTextCache(fetcher=globalThis.fetch,{maxBytes=8*1024*1024,maxEntries=20}={}){
 const cache=new Map();let bytes=0;
 function trim(){for(const [key,entry] of cache){if(bytes<=maxBytes&&cache.size<=maxEntries)break;if(entry.bytes!==null){cache.delete(key);bytes-=entry.bytes}}}
 return {async get(url){let entry=cache.get(url);if(entry){cache.delete(url);cache.set(url,entry);return entry.promise}entry={bytes:null,promise:null};entry.promise=Promise.resolve().then(()=>fetcher(url)).then(r=>{if(!r.ok)throw Error('预览资源加载失败');return r.text()}).then(value=>{if(cache.get(url)===entry){entry.bytes=value.length*2;bytes+=entry.bytes;trim()}return value}).catch(error=>{if(cache.get(url)===entry)cache.delete(url);throw error});cache.set(url,entry);trim();return entry.promise},clear(){cache.clear();bytes=0},stats(){return {entries:cache.size,bytes}}};
}
export function runtimeFor(item){return item.runtime??(item.featured?{key:'featured-v1',css:'featured/featured.css',js:'featured/featured.js',cssHref:'featured.css',scriptSrc:'featured.js'}:null)}
export function composePreview(html,css,js,runtime){
 const cssTag=`<link rel="stylesheet" href="${runtime.cssHref}">`,jsTag=`<script src="${runtime.scriptSrc}"></script>`;
 if(!html.includes(cssTag)||!html.includes(jsTag))throw Error('预览入口与运行资源定义不匹配');
 const safeCss=css.replace(/<\/style/gi,'<\\/style'),safeJs=js.replace(/<\/script/gi,'<\\/script');
 return html.replace(cssTag,()=>'<style>'+safeCss+'</style>').replace(jsTag,()=>'<script>'+safeJs+'</script>').replace('<head>',`<head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; font-src data:; img-src data: blob:; ${runtime.allowLocalMedia===true?'media-src blob:; ':''}connect-src 'none'; form-action 'none'">`);
}
/** Generation tokens prevent stale async completions from reviving released frames. */
export function createPreviewLoader({cache=createTextCache(),connected=frame=>frame.isConnected}={}){
 const versions=new WeakMap();
 function release(frame){versions.set(frame,(versions.get(frame)??0)+1);frame.onload=null;frame.removeAttribute('srcdoc');frame.removeAttribute('src');frame.src='about:blank';frame.dataset.preview=''}
 async function mount(frame,item,{onReady=()=>{},onError=()=>{}}={}){
  release(frame);const version=versions.get(frame);frame.dataset.preview=item.preview;
  const current=()=>versions.get(frame)===version&&connected(frame);
  const loaded=()=>{if(current())onReady()};
  try{const runtime=runtimeFor(item);if(!runtime){frame.onload=loaded;frame.src=item.preview;return}const [css,js,html]=await Promise.all([cache.get(runtime.css),cache.get(runtime.js),cache.get(item.preview)]);if(current()){const document=composePreview(html,css,js,runtime);frame.onload=loaded;frame.srcdoc=document}}catch(error){if(current()){onError(error);frame.srcdoc='<p style="font:14px system-ui;padding:20px">预览未加载，打开详情重试。</p>'}}
 }
 return {mount,release,cache};
}
/** At most maxActive previews run. Hidden/offscreen cards own no live document. */
export function createPreviewPool({loader,Observer=globalThis.IntersectionObserver,maxActive=6}={}){
 const records=new Map();let suspended=false,serial=0;
 function reconcile(){const chosen=new Set(suspended?[]:[...records.values()].filter(r=>r.visible).sort((a,b)=>a.top-b.top||a.order-b.order).slice(0,maxActive));for(const r of records.values()){if(chosen.has(r)&&!r.active){r.active=true;r.element.dataset.previewState='loading';loader.mount(r.frame,r.item,{onReady:()=>{if(r.active)r.element.dataset.previewState='ready'},onError:()=>{if(r.active)r.element.dataset.previewState='error'}})}else if(!chosen.has(r)&&r.active){r.active=false;loader.release(r.frame);r.element.dataset.previewState='idle'}}}
 const observer=Observer?new Observer(entries=>{for(const e of entries){const r=records.get(e.target);if(r){r.visible=e.isIntersecting;r.top=e.boundingClientRect?.top??0}}reconcile()},{rootMargin:'0px',threshold:.05}):null;
 return {register(frame,item,element){const r={frame,item,element,visible:!observer,active:false,top:0,order:serial++};records.set(element,r);element.dataset.previewState='idle';observer?.observe(element);if(!observer)reconcile()},suspend(value=true){suspended=value;reconcile()},clear(){observer?.disconnect();for(const r of records.values())loader.release(r.frame);records.clear()},stats(){return {registered:records.size,active:[...records.values()].filter(r=>r.active).length,suspended}},destroy(){this.clear();suspended=true}};
}
