(()=>{'use strict';
const payload=globalThis.__healthiconsData;delete globalThis.__healthiconsData;
const root=document.getElementById('app'); if(!root){const fallback=document.body;if(fallback){fallback.replaceChildren();fallback.setAttribute('role','alert');fallback.textContent='预览已安全停止：缺少本地图标容器，未尝试联网。';}return;}
let controller=null,dead=false,hidden=document.hidden,dirty=false,releaseCache=()=>{};
function fail(){dead=true;controller?.abort();releaseCache();root.style.removeProperty('--size');root.style.removeProperty('--ink');root.replaceChildren();root.className='failed';root.setAttribute('role','alert');root.textContent='预览已安全停止。图标源或渲染发生错误，未尝试访问网络。';}
try{
const allowedTags=new Set(['svg','path']);
const allowedAttrs=new Set(['xmlns','width','height','viewBox','fill','fill-rule','clip-rule','d']);
if(!Array.isArray(payload)||payload.length!==2128)throw Error('bad count');
const expectedStyles={filled:776,outline:776,'filled-24px':288,'outline-24px':288};const counts={};const seen=new Set(),templates=new Map();releaseCache=()=>templates.clear();
for(const icon of payload){
 if(typeof icon.svg!=='string'||!/^[-!a-zA-Z0-9_]+$/.test(icon.name)||seen.has(icon.name))throw Error('bad identity');seen.add(icon.name);if(!Object.hasOwn(expectedStyles,icon.style))throw Error('unknown style');counts[icon.style]=(counts[icon.style]||0)+1;
 if(/<!DOCTYPE|<!ENTITY/i.test(icon.svg))throw Error('doctype');
 const doc=new DOMParser().parseFromString(icon.svg,'image/svg+xml');
 if(doc.querySelector('parsererror')||doc.documentElement.localName!=='svg')throw Error('xml');
 for(const el of doc.querySelectorAll('*')){
  if(el.namespaceURI!=='http://www.w3.org/2000/svg'||!allowedTags.has(el.localName))throw Error('tag');
  for(const attr of el.attributes){
   if(!allowedAttrs.has(attr.name)||/^on/i.test(attr.name)||/url\s*\(|javascript:|https?:|data:/i.test(attr.value)&&attr.name!=='xmlns')throw Error('attribute');
   if(attr.name==='style'&&!/^(\s*(?:fill|stroke|stroke-width|fill-rule|clip-rule|opacity|fill-opacity|stroke-opacity|stroke-linecap|stroke-linejoin|stroke-miterlimit)\s*:\s*[-#.\w\s%,]+;?\s*)*$/.test(attr.value))throw Error('style');
  }
 }
 templates.set(icon.name,'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(icon.svg));
}
for(const key of Object.keys(expectedStyles))if(counts[key]!==expectedStyles[key])throw Error('incomplete styles');
controller=new AbortController();const signal=controller.signal;
const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e};
const on=(e,t,fn)=>e.addEventListener(t,event=>{if(dead)return;try{fn(event)}catch(error){fail()}},{signal});
const button=(text,fn)=>{const b=node('button','',text);b.type='button';on(b,'click',()=>{if(!dead)fn()});return b};
const svg=(name)=>{const el=document.createElement('img');el.src=templates.get(name);el.alt='';el.setAttribute('aria-hidden','true');el.setAttribute('data-original',name);return el};
let query='',styleFilter='all',page=0,selected=payload[0].name;const pageSize=30;
root.replaceChildren();root.append(node('p','eyebrow','Healthicons · clinical symbols'),node('h1','','用简洁线条，表达一个动作。'),node('p','intro','2128 个固定版本原始 SVG，一套 Healthicons 四规格图标系列。这里的搜索、分页和预览界面为原创；图标路径保持原样。医学信息图形参考，不构成诊断、治疗建议、医疗资质或品牌背书。'));
const bar=node('div','toolbar'),search=node('input');search.type='search';search.placeholder='搜索英文名称，如 microscope';search.setAttribute('aria-label','搜索图标名称');
const reset=button('重置',()=>{query='';search.value='';styleFilter='all';style.value='all';page=0;selected=payload[0].name;paint()});
const size=node('select');size.setAttribute('aria-label','图标显示尺寸');for(const n of [24,36,48]){const o=node('option','',n+' px');o.value=n;size.append(o)}size.value='24';size.id='size';
const style=node('select');style.id='style';style.setAttribute('aria-label','图标风格');for(const [value,label]of [['all','全部2128'],['filled','填充48px · 776'],['outline','线框48px · 776'],['filled-24px','填充24px · 288'],['outline-24px','线框24px · 288']]){const option=node('option','',label);option.value=value;style.append(option)}
const sl=node('label','','尺寸 '),cl=node('label','','风格 ');sl.append(size);cl.append(style);bar.append(search,reset,sl,cl);root.append(bar);
const status=node('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');root.append(status);
const workspace=node('section','workspace'),results=node('div'),grid=node('div','grid'),pager=node('nav','pager'),pageText=node('span','page-text'),detail=node('aside','detail');detail.setAttribute('aria-label','所选图标');
const prev=button('上一页',()=>{page--;paint()}),next=button('下一页',()=>{page++;paint()});pager.append(prev,pageText,next);results.append(grid,pager);workspace.append(results,detail);root.append(workspace,node('p','foot','原图：Healthicons · CC0。HL7/FHIR/dhis2/Excel/OpenMRS/simple原标记仅作来源参考，无品牌背书。所有图形非诊断建议或资质证明。保留原色彩，不套用染色。四规格属于同一个系列。'));
function paint(){try{render()}catch(error){fail()}}
function render(){if(dead)return;if(hidden){dirty=true;return}dirty=false;
 const matches=payload.filter(x=>x.name.toLowerCase().includes(query)&&(styleFilter==='all'||x.style===styleFilter));const total=Math.ceil(matches.length/pageSize);page=Math.max(0,Math.min(page,Math.max(0,total-1)));const subset=matches.slice(page*pageSize,(page+1)*pageSize);
 if(!subset.some(x=>x.name===selected))selected=subset[0]?.name||null;
 grid.replaceChildren();for(const x of subset){const b=node('button','tile');b.type='button';b.dataset.icon=x.name;b.setAttribute('aria-label',x.name);b.setAttribute('aria-pressed',String(x.name===selected));b.append(svg(x.name),node('span','',x.name));grid.append(b)}
 if(!matches.length)grid.append(node('p','empty','没有匹配项。试试 microscope、devices 或清空搜索。'));
 status.textContent=`${matches.length} / 2128 个原图标`;pageText.textContent=total?`${page+1} / ${total}`:'0 / 0';prev.disabled=page===0;next.disabled=total===0||page>=total-1;
 detail.replaceChildren();if(selected){const x=payload.find(x=>x.name===selected);const large=node('div','large');large.append(svg(selected));detail.append(large,node('h2','',selected),node('p','','原生 '+x.nativeWidth+' × '+x.nativeHeight+' · 保留原始属性与路径'),node('p','',x.sourcePath),node('p','',x.brand?'原品牌标记：'+x.brand+'。仅作图形来源参考，无官方背书。':'医学信息符号，不代表诊断或资质；原来源与路径见下。'),node('p','','源 SHA-256：'+x.sha256.slice(0,16)+'…'))}else detail.append(node('p','','没有所选图标'));
}
on(search,'input',()=>{query=search.value.trim().toLowerCase();page=0;paint()});
on(grid,'click',e=>{const b=e.target.closest('button[data-icon]');if(!b||!grid.contains(b))return;selected=b.dataset.icon;for(const tile of grid.querySelectorAll('.tile'))tile.setAttribute('aria-pressed',String(tile.dataset.icon===selected));paint();grid.querySelector(`[data-icon="${selected}"]`)?.focus()});
on(size,'change',()=>root.style.setProperty('--size',Number(size.value)+'px'));
on(style,'change',()=>{styleFilter=style.value;page=0;paint()});
on(document,'visibilitychange',()=>{hidden=document.hidden;if(!hidden&&dirty)paint()});
function destroy(){if(dead)return;dead=true;controller.abort();templates.clear();root.replaceChildren();root.style.removeProperty('--ink');root.style.removeProperty('--size')}
on(window,'pagehide',destroy);on(window,'atlas:dispose',destroy);paint();
}catch(error){fail()}
})();
