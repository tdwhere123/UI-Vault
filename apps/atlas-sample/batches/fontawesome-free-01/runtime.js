(()=>{'use strict';
const data=window.__faOriginals;delete window.__faOriginals;if(!data)return;const payload=data.items;data.items=[];const stopped=data.dead;data.stop();if(stopped)return;
const root=document.getElementById('app')||document.body;
let controller=null,dead=false,hidden=document.hidden,dirty=false,releaseCache=()=>{};
function fail(){dead=true;controller?.abort();releaseCache();root.style.removeProperty('--size');root.style.removeProperty('--ink');root.replaceChildren();root.className='failed';root.setAttribute('role','alert');root.textContent='预览已安全停止。图标源或渲染发生错误，未尝试访问网络。';}
try{
const allowedTags=new Set(["circle", "clipPath", "defs", "ellipse", "g", "path", "rect", "svg"]);
const allowedAttrs=new Set(["clip-path", "clip-rule", "cx", "cy", "d", "fill", "fill-rule", "height", "id", "r", "rx", "ry", "stroke", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-width", "transform", "viewBox", "width", "x", "y", "xmlns"]);
if(!Array.isArray(payload)||payload.length!==2274)throw Error('bad count');
const seen=new Set(),templates=new Map();releaseCache=()=>templates.clear();
for(const icon of payload){
 if(typeof icon.svg!=='string'||!/^[-a-zA-Z0-9_]+$/.test(icon.name)||seen.has(icon.name))throw Error('bad identity');seen.add(icon.name);
 if(/<!DOCTYPE|<!ENTITY/i.test(icon.svg))throw Error('doctype');
 const doc=new DOMParser().parseFromString(icon.svg,'image/svg+xml');
 if(doc.getElementsByTagName('parsererror').length||doc.documentElement.localName!=='svg')throw Error('xml');
 for(const el of doc.getElementsByTagName('*')){
  if(el.namespaceURI!=='http://www.w3.org/2000/svg'||!allowedTags.has(el.localName))throw Error('tag');
  for(const attr of el.attributes){
   if(!allowedAttrs.has(attr.name)||/^on/i.test(attr.name)||/javascript:|https?:|data:/i.test(attr.value)&&attr.name!=='xmlns')throw Error('attribute');
   if(attr.name==='style'&&!/^(\s*(?:fill|stroke|stroke-width|fill-rule|clip-rule|opacity|fill-opacity|stroke-opacity|stroke-linecap|stroke-linejoin|stroke-miterlimit)\s*:\s*[-#.\w\s%,]+;?\s*)*$/.test(attr.value))throw Error('style');
  }
 }
 const ids=new Set();for(const el of doc.getElementsByTagName('*'))if(el.hasAttribute('id')){const id=el.getAttribute('id');if(ids.has(id))throw Error('duplicate id');ids.add(id)}
 for(const el of doc.getElementsByTagName('*'))for(const attr of el.attributes)if(/url/i.test(attr.value)){if(!/^url\(#[A-Za-z_][\w.-]*\)$/.test(attr.value)||!ids.has(attr.value.slice(5,-1)))throw Error('unclosed reference')}
 templates.set(icon.name,icon.svg);
}
controller=new AbortController();const signal=controller.signal;
const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
const on=(e,t,fn)=>e.addEventListener(t,fn,{signal});
const button=(text,fn)=>{const b=node('button','',text);b.type='button';on(b,'click',()=>{if(!dead)fn()});return b};
const svg=(name)=>{const el=document.createElement('img');el.alt='';el.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(templates.get(name));return el};
let styleFilter='all';let query='',page=0,selected=payload[0].name;const pageSize=24;
root.replaceChildren();root.append(node('p','eyebrow','Font Awesome Free · original SVG'),node('h1','','小小图形，清楚表达。'),node('p','intro','2274 个固定版本原始 SVG 文件，一个 Font Awesome Free 系列。实心 2001 + 轮廓 273，保留原注释/几何；不含品牌目录、Pro或字体。Fonticons, Inc. / CC BY 4.0：creativecommons.org/licenses/by/4.0/。图标版权不等于商标、官方背书或使用授权。'));
const bar=node('div','toolbar'),search=node('input');search.type='search';search.placeholder='搜索英文名称，如 home';search.setAttribute('aria-label','搜索图标名称');
const reset=button('重置',()=>{query='';search.value='';styleFilter='all';styles.value='all';page=0;selected=payload[0].name;size.value='36';root.style.setProperty('--size','36px');paint()});
const size=node('select');size.setAttribute('aria-label','图标显示尺寸');for(const n of [24,36,48]){const o=node('option','',n+' px');o.value=n;size.append(o)}size.value='36';root.style.setProperty('--size','36px');
const sl=node('label','','尺寸 ');sl.append(size);bar.append(search,reset,sl);root.append(bar);
const styles=node('select');styles.setAttribute('aria-label','原图标样式');for(const [v,t] of [['all','全部'],['solid','实心 Solid'],['regular','轮廓 Regular']]){const o=node('option','',t);o.value=v;styles.append(o)}bar.append(styles);on(styles,'change',()=>{styleFilter=styles.value;page=0;paint()});
const status=node('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');root.append(status);
const workspace=node('section','workspace'),results=node('div'),grid=node('div','grid'),pager=node('nav','pager'),pageText=node('span','page-text'),detail=node('aside','detail');detail.setAttribute('aria-label','所选图标');
const prev=button('上一页',()=>{page--;paint()}),next=button('下一页',()=>{page++;paint()});pager.append(prev,pageText,next);results.append(grid,pager);workspace.append(results,detail);root.append(workspace,node('p','foot','原图：Fonticons, Inc. / Font Awesome Free · CC BY 4.0。图形浏览不代表商标授权、认证或任何背书。浏览壳独立提供，不是上游官方应用。'));
function paint(){try{render()}catch(error){fail()}}
function render(){if(dead)return;if(hidden){dirty=true;return}dirty=false;
 const matches=payload.filter(x=>(styleFilter==='all'||x.style===styleFilter)&&x.name.toLowerCase().includes(query));const total=Math.ceil(matches.length/pageSize);page=Math.max(0,Math.min(page,Math.max(0,total-1)));const subset=matches.slice(page*pageSize,(page+1)*pageSize);
 if(!subset.some(x=>x.name===selected))selected=subset[0]?.name||null;
 grid.replaceChildren();for(const x of subset){const b=node('button','tile');b.type='button';b.dataset.icon=x.name;b.setAttribute('aria-label',x.name);b.setAttribute('aria-pressed',String(x.name===selected));b.append(svg(x.name),node('span','',x.name));grid.append(b)}
 if(!matches.length)grid.append(node('p','empty','没有匹配项。试试 home、user 或清空搜索。'));
 status.textContent=`${matches.length} / 2274 个原 SVG 文件`;pageText.textContent=total?`${page+1} / ${total}`:'0 / 0';prev.disabled=page===0;next.disabled=total===0||page>=total-1;
 detail.replaceChildren();if(selected){const x=payload.find(x=>x.name===selected);const large=node('div','large');large.append(svg(selected));detail.append(large,node('h2','',selected),node('p','','原 SVG 全文保持不变'),node('p','',x.sourcePath),node('p','','源 SHA-256：'+x.sha256));const code=node('textarea');code.readOnly=true;code.setAttribute('aria-label','原 SVG 源码');code.value=x.svg;detail.append(code);if(x.rightsNote)detail.append(node('p','rights-note',x.rightsNote))}else detail.append(node('p','','没有所选图标'));
}
on(search,'input',()=>{query=search.value.trim().toLowerCase();page=0;paint()});
on(grid,'click',e=>{const b=e.target.closest('button[data-icon]');if(!b||!grid.contains(b))return;selected=b.dataset.icon;for(const tile of grid.querySelectorAll('.tile'))tile.setAttribute('aria-pressed',String(tile.dataset.icon===selected));paint();grid.querySelector(`[data-icon="${selected}"]`)?.focus()});
on(size,'change',()=>root.style.setProperty('--size',Number(size.value)+'px'));

on(document,'visibilitychange',()=>{hidden=document.hidden;if(!hidden&&dirty)paint()});
function destroy(){if(dead)return;dead=true;controller.abort();templates.clear();root.replaceChildren();payload.length=0;root.style.removeProperty('--ink');root.style.removeProperty('--size')}
on(window,'pagehide',destroy);on(window,'atlas:dispose',destroy);paint();
}catch(error){fail()}
})();
