import {readFile,lstat} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {sourceDownloadAssets} from './source-downloads.mjs';
import {projectGalleryDownloads,sourceDownloadRows,sourceDownloadCounts} from './gallery-model.mjs';
export async function galleryAssets(root){
 const directory=join(root,'apps/explorer/gallery');
 const raw=await readFile(join(directory,'items.json'));const items=JSON.parse(raw);
 const downloads=await sourceDownloadAssets(directory);
 if(!Array.isArray(items)||items.length===0)throw new Error('Empty gallery');
 const ids=new Set(),images=new Set();const assets=new Map();
 const allowed=new Set(['id','title','description','purpose','style','technology','image','width','height','sourceName','sourceUrl','capturedAt','status','attribution','sha256']);
 for(const item of items){
  for(const key of ['title','description','purpose','style','sourceName','sourceUrl','capturedAt','attribution'])if(typeof item[key]!=='string'||!item[key])throw new Error('Missing display field');
  if(Object.keys(item).some(k=>!allowed.has(k)))throw new Error('Unapproved gallery field');
  if(typeof item.id!=='string'||!/^(?:shadcn-[a-z]+|bencho:[a-z-]+|agent-elements:[a-z-]+)$/.test(item.id)||ids.has(item.id))throw new Error('Duplicate/invalid UI');ids.add(item.id);
  if(!/^gallery-(?:(?:bencho|agent)-)?\d{2}-[a-z-]+\.png$/.test(item.image)||images.has(item.image))throw new Error('Invalid image');images.add(item.image);
  const shadcn=/^https:\/\/ui\.shadcn\.com\/docs\/components\/base\/[a-z]+$/.test(item.sourceUrl)&&item.id.startsWith('shadcn-');
  const benchoSlug=item.id.slice('bencho:'.length);
  const bencho=item.id.startsWith('bencho:')&&['escape','wake-slider','heat-word','eye-tracker'].includes(benchoSlug)&&item.sourceUrl===`https://bencho.dev/blocks/${benchoSlug}?c=${benchoSlug}&theme=light`;
  const agentSlug=item.id.slice('agent-elements:'.length);
  const agent=item.id.startsWith('agent-elements:')&&['attachment-button','send-button','suggestions'].includes(agentSlug)&&item.sourceUrl===`https://agent-elements.21st.dev/docs/${agentSlug}`;
  if(item.status!=='reference-only'||!(shadcn||bencho||agent))throw new Error('Unapproved provenance');
  if(!Array.isArray(item.technology)||!item.technology.every(t=>typeof t==='string')||!Number.isInteger(item.width)||!Number.isInteger(item.height)||item.width<=0||item.height<=0)throw new Error('Invalid display fields');
  for(const value of Object.values(item).flat()){if(typeof value==='string'&&(/(?:<|>|file:|\/workspace\/|\/home\/|\/cursor\/)/i.test(value)))throw new Error('Private path or markup in gallery');}
  const path=join(directory,'media',item.image),stat=await lstat(path);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Non-file image');
  const bytes=await readFile(path);if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||createHash('sha256').update(bytes).digest('hex')!==item.sha256)throw new Error('Screenshot byte mismatch');
  if(bytes.readUInt32BE(16)!==item.width||bytes.readUInt32BE(20)!==item.height)throw new Error('Image dimension mismatch');
  assets.set(item.image,bytes);
 }
 for(const [output,input] of [['index.html','index.html'],['app.js','app.js'],['style.css','style.css'],['gallery-model.js','gallery-model.mjs'],['gallery-neiki.js','vendor/neiki-gallery.js'],['gallery-neiki.css','vendor/neiki-gallery.css'],['gallery-LICENSE.txt','vendor/LICENSE'],['gallery-THIRD-PARTY.txt','THIRD-PARTY.txt'],['source-view.html','source-view.html'],['source-view.js','source-view.js']])assets.set(output,input==='source-view.js'?(await readFile(join(directory,input),'utf8')).replace('./gallery-model.mjs','./gallery-model.js'):await readFile(join(directory,input)));
 const html=assets.get('index.html').toString(),counts=sourceDownloadCounts(downloads.registry,items);
 for(const marker of ['<!-- source-download-list -->','<!-- source-download-summary -->'])if(html.split(marker).length!==2)throw new Error('Missing/duplicate source download slot');
 const summary=`<p>${counts.available} 个多来源源码入口：${counts.withPreview} 个有同身份参考截图，其余 ${counts.withoutPreview} 个未配预览；截图与源码家族分账；Arc新增50主体均无预览。${counts.held} 项挂起。下载不受图片筛选影响。</p>`;
 assets.set('index.html',html.replace('<!-- source-download-list -->',downloadList(downloads.registry,items)).replace('<!-- source-download-summary -->',summary));
 assets.set('gallery-data.json',JSON.stringify(projectGalleryDownloads(items,downloads.registry),null,2)+'\n');
 for(const [name,bytes] of downloads.assets)assets.set(name,bytes);
 return assets;
}


// Strings originate in the validated public registry, not catalog/private wrapper text.
function downloadList(registry,items) {
 const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return '<ul class="source-list">'+sourceDownloadRows(registry,items).map(item=>{
  const label=escape(item.title),identity=escape(item.canonicalId);
  if(item.status==='held')return `<li><strong>${label}</strong> · ${identity} · 许可依赖挂起，不提供下载</li>`;
  const preview=item.previewStatus==='reference_only'?'已配同身份参考截图（非固定 ref 运行）':'未配预览';
  return `<li id="download-${escape(item.sourceId)}-${escape(item.slug)}"><a href="./${escape(item.file)}" download="${escape(item.file)}">下载 ${label} 源码</a>${item.browseFile?` · <a href="./source-view.html?source=${escape(item.sourceId)}&amp;canonical=${encodeURIComponent(item.canonicalId)}">浏览原源码文本</a>`:''} · ${identity} · ${preview}<br><small>${item.bytes} bytes · SHA256 <code>${item.sha256}</code> · MIT · partial · 运行/恢复 not_tested</small></li>`;
 }).join('')+'</ul>';
}
