(()=>{'use strict';
const payload=window.__iconSeries;delete window.__iconSeries;
const root=document.getElementById('app'); if(!root){const fallback=document.body;if(fallback){fallback.replaceChildren();fallback.setAttribute('role','alert');fallback.textContent='预览已安全停止：缺少本地图标容器，未尝试联网。';}return;}
let controller=null,dead=false,hidden=document.hidden,dirty=false,releaseCache=()=>{};
function fail(){dead=true;controller?.abort();releaseCache();root.style.removeProperty('--size');root.style.removeProperty('--ink');root.replaceChildren();root.className='failed';root.setAttribute('role','alert');root.textContent='预览已安全停止。图标源或渲染发生错误，未尝试访问网络。';}
try{
const allowedTags=new Set(['svg','path','g','circle','ellipse','rect','line','polyline','polygon','title','desc','defs','mask','clipPath']);
const allowedAttrs=new Set(['version','id','width','height','viewBox','xmlns','d','fill','fill-rule','clip-rule','stroke','stroke-width','stroke-linecap','stroke-linejoin','stroke-miterlimit','opacity','fill-opacity','stroke-opacity','transform','cx','cy','r','rx','ry','x','y','x1','x2','y1','y2','points','style','enable-background','xml:space','mask','clip-path','stroke-dasharray']);
if(!Array.isArray(payload)||payload.length!==1671)throw Error('bad count');
const seen=new Set(),templates=new Map();releaseCache=()=>templates.clear();
for(const icon of payload){
 if(typeof icon.svg!=='string'||!/^[-a-zA-Z0-9_]+$/.test(icon.name)||seen.has(icon.name))throw Error('bad identity');seen.add(icon.name);
 if(/<!DOCTYPE|<!ENTITY/i.test(icon.svg))throw Error('doctype');
 const doc=new DOMParser().parseFromString(icon.svg,'image/svg+xml');
 if(doc.querySelector('parsererror')||doc.documentElement.localName!=='svg')throw Error('xml');
 for(const el of doc.querySelectorAll('*')){
  if(el.namespaceURI!=='http://www.w3.org/2000/svg'||!allowedTags.has(el.localName))throw Error('tag');
  for(const attr of el.attributes){
   if(!allowedAttrs.has(attr.name)||/^on/i.test(attr.name)||/javascript:|https?:|data:/i.test(attr.value)&&attr.name!=='xmlns'||/url\s*\(/i.test(attr.value)&&!/^url\(#[-\w]+\)$/.test(attr.value))throw Error('attribute');
   if(attr.name==='style'&&!/^(\s*(?:fill|stroke|stroke-width|fill-rule|clip-rule|opacity|fill-opacity|stroke-opacity|stroke-linecap|stroke-linejoin|stroke-miterlimit)\s*:\s*[-#.\w\s%,]+;?\s*)*$/.test(attr.value))throw Error('style');
  }
 }
 templates.set(icon.name,doc.documentElement);
}
controller=new AbortController();const signal=controller.signal;
const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
const on=(e,t,fn)=>e.addEventListener(t,event=>{if(dead)return;try{fn(event)}catch(error){fail()}},{signal});
const button=(text,fn)=>{const b=node('button','',text);b.type='button';on(b,'click',()=>{if(!dead)fn()});return b};
let svgSeq=0;const svg=(name)=>{const el=document.importNode(templates.get(name),true),prefix='local-icon-'+(++svgSeq)+'-';for(const n of el.querySelectorAll('[id]'))n.id=prefix+n.id;for(const n of [el,...el.querySelectorAll('*')])for(const a of [...n.attributes])if(/^url\(#[-\w]+\)$/.test(a.value))n.setAttribute(a.name,a.value.replace('url(#','url(#'+prefix));el.setAttribute('aria-hidden','true');el.setAttribute('focusable','false');return el};
let query='',styleFilter='all',page=0,selected=payload[0].name;const pageSize=30;
root.replaceChildren();root.append(node('p','eyebrow','Iconoir · 24px originals'),node('h1','','用简洁线条，表达一个动作。'),node('p','intro','1671 个固定版本原始 SVG，一套 Iconoir 图标系列。这里的搜索、分页和预览界面为原创；图标路径保持原样。保留原来源中的品牌标记，仅作图形来源参考，不代表商标授权或背书。'));
const bar=node('div','toolbar'),search=node('input');search.type='search';search.placeholder='搜索英文名称，如 code';search.setAttribute('aria-label','搜索图标名称');
const reset=button('重置',()=>{query='';search.value='';styleFilter='all';styles.value='all';page=0;selected=payload[0].name;paint()});
const size=node('select');size.setAttribute('aria-label','图标显示尺寸');for(const n of [24, 48, 72]){const o=node('option','',n+' px');o.value=n;size.append(o)}size.value='24';
const color=node('input');color.type='color';color.value='#244e3d';color.setAttribute('aria-label','预览颜色');
const sl=node('label','','尺寸 '),cl=node('label','','颜色 ');sl.append(size);cl.append(color);const styles=node('select');styles.setAttribute('aria-label','图标风格');for(const [v,t]of [['all','全部 1671'],['regular','Regular 1383'],['solid','Solid 288']]){const o=node('option','',t);o.value=v;styles.append(o)}on(styles,'change',()=>{styleFilter=styles.value;page=0;paint()});bar.append(search,styles,reset,sl,cl);root.append(bar);
const status=node('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');root.append(status);
const workspace=node('section','workspace'),results=node('div'),grid=node('div','grid'),pager=node('nav','pager'),pageText=node('span','page-text'),detail=node('aside','detail');detail.setAttribute('aria-label','所选图标');
const prev=button('上一页',()=>{page--;paint()}),next=button('下一页',()=>{page++;paint()});pager.append(prev,pageText,next);results.append(grid,pager);workspace.append(results,detail);root.append(workspace,node('p','foot','原图：Iconoir 原作者 · MIT。品牌标记属于各自权利人，展示不代表品牌授权、服务或背书。颜色为 CSS 预览，不改动原始源码。'));
function paint(){try{render()}catch(error){fail()}}
function render(){if(dead)return;if(hidden){dirty=true;return}dirty=false;
 const matches=payload.filter(x=>(styleFilter==='all'||x.style===styleFilter)&&x.name.toLowerCase().includes(query));const total=Math.ceil(matches.length/pageSize);page=Math.max(0,Math.min(page,Math.max(0,total-1)));const subset=matches.slice(page*pageSize,(page+1)*pageSize);
 if(!subset.some(x=>x.name===selected))selected=subset[0]?.name||null;
 grid.replaceChildren();for(const x of subset){const b=node('button','tile');b.type='button';b.dataset.icon=x.name;b.setAttribute('aria-label',x.name);b.setAttribute('aria-pressed',String(x.name===selected));b.append(svg(x.name),node('span','',x.name));grid.append(b)}
 if(!matches.length)grid.append(node('p','empty','没有匹配项。试试 code、folder 或清空搜索。'));
 status.textContent=`${matches.length} / 1671 个原图标`;pageText.textContent=total?`${page+1} / ${total}`:'0 / 0';prev.disabled=page===0;next.disabled=total===0||page>=total-1;
 detail.replaceChildren();if(selected){const x=payload.find(x=>x.name===selected);const large=node('div','large');large.append(svg(selected));detail.append(large,node('h2','',selected),node('p','','原生 24 × 24 · 保留原始属性与路径'),node('p','',x.sourcePath),node('p','',x.brand?'原品牌标记：'+x.brand+'。仅作图形来源参考，无官方背书。':'通用图形，来源与路径见下。'),node('p','','源 SHA-256：'+x.sha256.slice(0,16)+'…'))}else detail.append(node('p','','没有所选图标'));
}
on(search,'input',()=>{query=search.value.trim().toLowerCase();page=0;paint()});
on(grid,'click',e=>{const b=e.target.closest('button[data-icon]');if(!b||!grid.contains(b))return;selected=b.dataset.icon;for(const tile of grid.querySelectorAll('.tile'))tile.setAttribute('aria-pressed',String(tile.dataset.icon===selected));paint();grid.querySelector(`[data-icon="${selected}"]`)?.focus()});
on(size,'change',()=>root.style.setProperty('--size',Number(size.value)+'px'));
on(color,'input',()=>root.style.setProperty('--ink',color.value));
on(document,'visibilitychange',()=>{hidden=document.hidden;if(!hidden&&dirty)paint()});
function destroy(){if(dead)return;dead=true;controller.abort();templates.clear();root.replaceChildren();root.style.removeProperty('--ink');root.style.removeProperty('--size')}
on(window,'pagehide',destroy);on(window,'atlas:dispose',destroy);paint();
}catch(error){fail()}
})();
