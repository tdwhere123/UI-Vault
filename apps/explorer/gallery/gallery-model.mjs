// Shared by the browser adapter and focused tests. Visual items only, never catalog files.
export function filterGallery(items, {query='',purpose='',style='',technology=''}={}) {
 const q=query.trim().toLocaleLowerCase();
 return items.filter(x=>(!purpose||x.purpose===purpose)&&(!style||x.style===style)&&(!technology||x.technology.includes(technology))&&(!q||[x.title,x.description,x.purpose,x.style,...x.technology,x.sourceName].join(' ').toLocaleLowerCase().includes(q)));
}
export function galleryCounts(items) {
 return {ui:new Set(items.map(x=>x.id)).size,images:new Set(items.map(x=>x.image)).size,sourceSites:new Set(items.map(x=>new URL(x.sourceUrl).hostname)).size,sourceDownloads:items.filter(x=>x.downloadAvailable).length};
}

// Caption belongs to its item, not to a second global selected-item state.
export function referenceCaption(item) {return `${item.title} — ${item.description} ｜ ${item.sourceName} · 仅参考 · ${item.sourceUrl}`;}
