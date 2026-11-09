export const isIconSeries=item=>item.kind==='图标系列';
export const isFeaturedItem=item=>Boolean(item.featured)&&!isIconSeries(item);
export function getInventoryCounts(items){return items.reduce((counts,item)=>{counts.total++;if(isIconSeries(item))counts.iconSeries++;else if(isFeaturedItem(item))counts.featured++;else counts.basic++;return counts},{total:0,featured:0,basic:0,iconSeries:0})}
// Same-facet multi-select is OR; distinct facets and query are intersected (AND).
const asValues=value=>(Array.isArray(value)?value:[value]).filter(v=>typeof v==='string'&&v.length>0);
export function filterItems(items,{query='',category='',kind='',source='',style='',styleTags=[],tag='',format=''}={}){
 const q=query.trim().toLocaleLowerCase();
 const selectedStyles=[...asValues(style),...asValues(styleTags)];
 const selectedTags=asValues(tag);
 return items.filter(x=>{
  const primary=x.primaryCategory||x.category;
  const styles=asValues(x.styleTags);
  const tags=[...styles,...asValues(x.interactionTags),...asValues(x.purposeTags)];
  const categoryMatch=!category||(category==='Agent工作流'?tags.includes('Agent工作流'):category==='精选'?isFeaturedItem(x):category==='基础组件'?(!x.featured&&!isIconSeries(x)):category==='图标系列'?isIconSeries(x):primary===category);
  const searchText=[x.title,x.keywords,primary,x.description,x.source,x.format,...asValues(x.technology),...tags].filter(Boolean).join(' ').toLocaleLowerCase();
  return categoryMatch&&(!kind||x.kind===kind)&&(!source||x.source===source)&&(!format||x.format===format)&&(!selectedStyles.length||selectedStyles.some(t=>styles.includes(t)))&&(!selectedTags.length||selectedTags.some(t=>tags.includes(t)))&&(!q||searchText.includes(q));
 });
}
export function detailHash(id){return '#/item/'+encodeURIComponent(id)}
export function resolveRoute(hash,items){if(!hash.startsWith('#/item/'))return null;try{return items.find(x=>x.id===decodeURIComponent(hash.slice(7)))??null}catch{return null}}
export function paginateItems(items,page=1,pageSize=12){const size=Math.max(1,Math.floor(pageSize));const pages=Math.max(1,Math.ceil(items.length/size));const current=Math.min(pages,Math.max(1,Math.floor(page)||1));return {items:items.slice((current-1)*size,current*size),page:current,pages,total:items.length,pageSize:size}}

// Jump input is deliberately stricter than pagination's defensive clamping.
export function parsePageJump(value,pages){const text=String(value).trim();if(!/^[0-9]+$/.test(text))return null;const n=Number(text);return Number.isSafeInteger(n)&&n>=1&&n<=pages?n:null}
