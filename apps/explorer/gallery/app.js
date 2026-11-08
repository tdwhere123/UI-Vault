import {filterGallery,galleryCounts,referenceCaption} from './gallery-model.js';
const $=id=>document.getElementById(id);
const controls=['query','purpose','style','technology'];
const node=(tag,text,className)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(className)n.className=className;return n;};
let instance;
try {
 const [dataResponse,versionResponse]=await Promise.all([fetch('./gallery-data.json'),fetch('./version.json')]);
 if(!dataResponse.ok||!versionResponse.ok)throw new Error('图库输入获取失败');
 const items=await dataResponse.json(),version=await versionResponse.json(),counts=galleryCounts(items);
 $('totals').textContent=`${counts.ui} 独立 UI · ${counts.images} 真实截图 · ${counts.sourceSites} 源站 · ${counts.sourceDownloads} 已接线源码下载`;
 $('version').textContent=` · ${version.codeSha.slice(0,12)} · ${version.worktreeDirty?'含未提交改动':'干净构建'}`;
 for(const field of ['purpose','style','technology']){const values=[...new Set(items.flatMap(x=>x[field]))].sort();for(const value of values){const option=node('option',value);option.value=value;$(field).append(option);}}
 function render(){
  if(instance){instance.destroy();instance=undefined;}
  const selected=filterGallery(items,Object.fromEntries(controls.map(k=>[k,$(k).value]))),grid=$('gallery');grid.replaceChildren();
  $('visible-count').textContent=`${selected.length} / ${items.length}`;$('empty').hidden=selected.length!==0;
  for(const item of selected){
   const card=node('a',undefined,'gallery-card');card.href='./'+item.image;card.dataset.tags=[item.purpose,item.style,...item.technology].join(',');card.dataset.caption=referenceCaption(item);card.dataset.width=item.width;card.dataset.height=item.height;
   const image=node('img');image.src='./'+item.image;image.alt=item.title+'：'+item.description;image.width=item.width;image.height=item.height;image.loading='lazy';card.append(image);
   const body=node('div',undefined,'card-body');body.append(node('span','仅参考 · 点击放大','status'),node('h3',item.title),node('p',item.description));
   const tags=node('div',undefined,'tags');for(const t of [item.purpose,item.style,...item.technology])tags.append(node('span',t));body.append(tags,node('small',item.sourceName+' · '+item.sourceUrl));card.append(body);grid.append(card);
  }
  // One filter authority above; reuse upstream grid/lightbox/zoom/navigation, not a second hidden filter state.
  if(selected.length)instance=new window.NeikiGallery(grid,{layout:'grid',theme:'dark',zoom:true,thumbnails:true,captions:true,hashNavigation:false,share:false,video:false,filter:false,stagger:false,fullscreen:true,print:false,editor:false,annotate:false,contextMenu:false});
 }
 for(const k of controls)$(k).addEventListener(k==='query'?'input':'change',render);
 $('reset').addEventListener('click',()=>{for(const k of controls)$(k).value='';render();});render();
}catch(error){$('totals').textContent='图库加载失败：'+error.message;console.error(error);}
