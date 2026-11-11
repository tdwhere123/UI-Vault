/** Explicit immutable raster inventory. No external URLs, redirects, SVG or implicit discovery. */
export const MAX_MEDIA_BYTES=8*1024*1024,MAX_MEDIA_FILE_BYTES=1024*1024,MAX_MEDIA_FILES=64;
const types={'image/png':'png','image/gif':'gif','image/jpeg':'jpe?g','image/webp':'webp'};
const abortError=()=>Object.assign(Error('预览媒体请求已取消'),{name:'AbortError'});
export function validateRemoteImageAliases(list){
 if(list===undefined)return [];
 if(!Array.isArray(list)||list.length>48)throw Error('预览媒体清单不合法');
 const aliases=[],seen=new Set();
 for(const raw of list){
  if(typeof raw!=='string'||raw.length<12||raw.length>500||seen.has(raw))throw Error('预览媒体清单不合法');
  let url;try{url=new URL(raw)}catch{throw Error('预览媒体清单不合法')}
  if((url.protocol!=='https:'&&url.protocol!=='http:')||url.username||url.password)throw Error('预览媒体清单不合法');
  seen.add(raw);aliases.push(raw);
 }
 return aliases;
}
export function validateMediaAssets(assets=[]){
 if(!Array.isArray(assets)||assets.length>MAX_MEDIA_FILES)throw Error('预览媒体清单不合法');
 let total=0;const keys=new Set(),paths=new Set();
 return assets.map(a=>{
  if(!a||typeof a.key!=='string'||! /^[A-Za-z0-9][A-Za-z0-9_.-]{0,95}$/.test(a.key)||keys.has(a.key)||typeof a.path!=='string'||a.path.length>240||! /^batches\/(?:[A-Za-z0-9_-]+\/)+[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(a.path)||paths.has(a.path)||!Object.hasOwn(types,a.mime)||!new RegExp('\\.'+types[a.mime]+'$','i').test(a.path)||!Number.isSafeInteger(a.bytes)||a.bytes<1||a.bytes>MAX_MEDIA_FILE_BYTES||! /^[a-f0-9]{64}$/.test(a.sha256)||((total+=a.bytes)>MAX_MEDIA_BYTES))throw Error('预览媒体清单不合法');
  const aliases=validateRemoteImageAliases(a.aliases);keys.add(a.key);paths.add(a.path);return Object.freeze({key:a.key,path:a.path,mime:a.mime,bytes:a.bytes,sha256:a.sha256,...(aliases.length?{aliases}: {})});
 });
}
function signature(b,mime){
 const eq=(v,offset=0)=>v.every((n,i)=>b[i+offset]===n);
 return mime==='image/png'?eq([137,80,78,71,13,10,26,10]):mime==='image/gif'?(eq([71,73,70,56,55,97])||eq([71,73,70,56,57,97])):mime==='image/jpeg'?eq([255,216,255]):eq([82,73,70,70])&&eq([87,69,66,80],8);
}
export async function loadMediaAssets(assets,{signal,baseURL=globalThis.document?.baseURI,fetcher=globalThis.fetch,crypto=globalThis.crypto,urlAPI=globalThis.URL}={}){
 const entries=validateMediaAssets(assets),mapping=Object.create(null),urls=[];
 let disposed=false;const dispose=()=>{if(disposed)return;disposed=true;for(const url of urls)urlAPI.revokeObjectURL(url);signal?.removeEventListener('abort',dispose)};
 const check=()=>{if(disposed||signal?.aborted)throw abortError()};
 signal?.addEventListener('abort',dispose,{once:true});
 try{
  for(const entry of entries){
   check();const base=new URL(baseURL),url=new URL(entry.path,base);
   if(!['https:','http:'].includes(base.protocol)||url.origin!==base.origin)throw Error('预览媒体必须同站');
   const response=await fetcher(url.href,{signal,redirect:'error',credentials:'omit',referrerPolicy:'no-referrer'});check();
   if(!response.ok||response.redirected||(response.url&&response.url!==url.href))throw Error('预览媒体加载失败');
   const mime=response.headers.get('content-type')?.split(';')[0].trim().toLowerCase(),length=response.headers.get('content-length');
   if(mime!==entry.mime||(length!==null&&Number(length)!==entry.bytes)||!response.body?.getReader){await response.body?.cancel();throw Error('预览媒体类型或长度不匹配')}
   const reader=response.body.getReader(),chunks=[];let size=0;
   try{for(;;){check();const {done,value}=await reader.read();check();if(done)break;size+=value.byteLength;if(size>entry.bytes)throw Error('预览媒体超出限额');chunks.push(value)}}catch(error){await reader.cancel().catch(()=>{});throw error}finally{reader.releaseLock()}
   if(size!==entry.bytes)throw Error('预览媒体长度不匹配');
   const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength}
   if(!signature(bytes,entry.mime))throw Error('预览媒体文件格式不匹配');
   const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(n=>n.toString(16).padStart(2,'0')).join('');check();
   if(hash!==entry.sha256)throw Error('预览媒体校验失败');
   const blobURL=urlAPI.createObjectURL(new Blob([bytes],{type:entry.mime}));urls.push(blobURL);mapping[entry.key]=blobURL;
   if(entry.aliases){for(const alias of entry.aliases){mapping[alias]=blobURL;try{const u=new URL(alias);mapping[u.origin+u.pathname]=blobURL;}catch{}}}
  }
  check();return {mapping:Object.freeze(mapping),dispose};
 }catch(error){dispose();throw error}
}
