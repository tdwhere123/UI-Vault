// Shared by the browser adapter and focused tests. Visual items only, never catalog files.
export function filterGallery(items, {query='',purpose='',style='',technology=''}={}) {
 const q=query.trim().toLocaleLowerCase();
 return items.filter(x=>(!purpose||x.purpose===purpose)&&(!style||x.style===style)&&(!technology||x.technology.includes(technology))&&(!q||[x.title,x.description,x.purpose,x.style,...x.technology,x.sourceName].join(' ').toLocaleLowerCase().includes(q)));
}
export function galleryCounts(items) {
 return {ui:new Set(items.map(x=>x.id)).size,images:new Set(items.map(x=>x.image)).size,sourceSites:new Set(items.map(x=>new URL(x.sourceUrl).hostname)).size};
}

// Caption belongs to its item, not to a second global selected-item state.
export function referenceCaption(item) {return `${item.title} — ${item.description} ｜ ${item.sourceName} · 仅参考 · ${item.sourceUrl}`;}

// A title/slug match is insufficient: bind only exact source + canonical id + provenance URL.
export function sourceForPreview(item,registry) {
 return registry.items.find(x=>x.canonicalId===item.id&&x.sourceId===item.id.split(':')[0]&&x.sourceUrl===item.sourceUrl);
}
export function projectGalleryDownloads(items,registry) {
 return items.map(item=>{
  const source=sourceForPreview(item,registry);
  return {...item,downloadAvailable:source?.status==='available',downloadStatus:source?.status??'not_collected'};
 });
}
export function sourceDownloadRows(registry,items) {
 return registry.items.map(item=>({...item,previewStatus:items.some(x=>sourceForPreview(x,registry)===item)?'reference_only':'not_collected'}));
}
export function sourceDownloadCounts(registry,items) {
 const rows=sourceDownloadRows(registry,items);
 return {available:rows.filter(x=>x.status==='available').length,held:rows.filter(x=>x.status==='held').length,
  withPreview:rows.filter(x=>x.status==='available'&&x.previewStatus==='reference_only').length,
  withoutPreview:rows.filter(x=>x.status==='available'&&x.previewStatus==='not_collected').length};
}
