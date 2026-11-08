import {readFile,lstat,readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {verifySourcePackage} from './source-package.mjs';
import {analyzeSourceModules} from './source-dependencies.mjs';

const keys=(value,allowed)=>value&&Object.keys(value).sort().join()===allowed.sort().join();
const safeText=value=>typeof value==='string'&&!/(?:<|>|file:|\/workspace\/|\/home\/|\/cursor\/|private_candidate|material_baseline)/i.test(value);

// Held UI identities and excluded files are different sets: support files cannot replace a UI.
const heldCanonicalIds=new Set([
 'agent-elements:agent-chat','agent-elements:message-list','agent-elements:input-bar',
 'agent-elements:user-message','agent-elements:file-attachment','agent-elements:spiral-loader'
]);
const excludedSourcePaths=new Set([
 'lib/agent-ui/components/agent-chat.tsx','lib/agent-ui/components/image-lightbox.tsx',
 'lib/agent-ui/components/input-bar.tsx','lib/agent-ui/components/input/file-attachment.tsx',
 'lib/agent-ui/components/message-list.tsx','lib/agent-ui/components/spiral-loader-data.ts',
 'lib/agent-ui/components/spiral-loader.tsx','lib/agent-ui/components/user-message.tsx','lib/agent-ui/index.ts'
]);

/** One admission authority for the local source-download projection, separate from catalog/restore. */
function validateAgentDownloads(registry) {
 if(!keys(registry,['formatVersion','sourceId','upstreamRepository','upstreamRef','excludedSourcePaths','items'])||registry.formatVersion!==1||registry.sourceId!=='agent-elements'||registry.upstreamRepository!=='https://github.com/21st-dev/agent-elements'||registry.upstreamRef!=='b04b36cb6381a1dd1a0e86cc7c90564ddcd56d37')throw new Error('Invalid download registry');
 if(!Array.isArray(registry.excludedSourcePaths)||registry.excludedSourcePaths.length!==excludedSourcePaths.size||new Set(registry.excludedSourcePaths).size!==excludedSourcePaths.size||!registry.excludedSourcePaths.every(p=>excludedSourcePaths.has(p)))throw new Error('Invalid exclusions');
 if(!Array.isArray(registry.items)||registry.items.length!==26)throw new Error('Invalid source selection');
 const identities=new Set(),filenames=new Set();
 const common=['sourceId','canonicalId','slug','title','sourceUrl','status','runtime','restore'];
 for(const item of registry.items) {
  const extras=item.status==='available'?['entry','file','bytes','sha256','sourceManifestSha256','closure','license','thirdParty']:item.status==='held'?['reason']:[];
  if(!extras.length||!keys(item,[...common,...extras])||!Object.values(item).every(v=>typeof v==='number'||safeText(v)))throw new Error('Invalid download fields');
  if(!/^[a-z]+(?:-[a-z]+)*$/.test(item.slug)||item.sourceId!==registry.sourceId||item.canonicalId!==`${item.sourceId}:${item.slug}`||item.sourceUrl!==`https://agent-elements.21st.dev/docs/${item.slug}`||identities.has(item.canonicalId))throw new Error('Duplicate/mismatched source identity');
  identities.add(item.canonicalId);
  if(item.runtime!=='not_tested'||item.restore!=='not_tested')throw new Error('Unverified runtime/restore claim');
  if((item.status==='held')!==heldCanonicalIds.has(item.canonicalId))throw new Error('Held canonical identity/status mismatch');
  if(item.status==='held') {
   if(item.reason!=='unresolved_asset_or_source_license_in_dependency_closure')throw new Error('Invalid held source');
   continue;
  }
  if(!/^lib\/agent-ui\/components\/[a-z/-]+\.tsx$/.test(item.entry)||!item.entry.endsWith(`/${item.slug}.tsx`)||registry.excludedSourcePaths.includes(item.entry))throw new Error('Excluded/mismatched entry');
  if(item.file!==`source-agent-elements-${item.slug}.tar.gz`||filenames.has(item.file)||!Number.isSafeInteger(item.bytes)||item.bytes<=0||item.bytes>1024*1024||![item.sha256,item.sourceManifestSha256].every(h=>/^[a-f0-9]{64}$/.test(h)))throw new Error('Invalid archive descriptor');
  if(item.closure!=='partial'||item.license!=='MIT'||item.thirdParty!=='not_audited_not_bundled')throw new Error('Invalid source boundaries');
  filenames.add(item.file);
 }
 if([...heldCanonicalIds].some(id=>!identities.has(id)))throw new Error('Missing held canonical identity');
 if(registry.items.filter(x=>x.status==='available').length!==20)throw new Error('Invalid available selection');
 return registry;
}

// Explicit source strategies share this admission owner; the Agent policy above is unchanged.
const arcSlugs=new Set(`accordion tree-table calendar cookie-consent checkbox code-block combobox command-palette dialog drawer dropdown-menu empty-state expandable-card expandable-text input shortcut-recorder inline-edit json-viewer line-chart pagination image-compare radio-group rating reorderable-list resizable-panels scroll-area select signature-pad rich-text-editor sortable-data-table color-picker swipe-actions switch tag-input time-picker timeline toast tree-view bar-chart activity-heatmap donut-chart streamgraph ridgeline treemap waffle-chart slope-chart countdown icon-morph onboarding-checklist filter-toolbar`.split(' '));
const hex=value=>typeof value==='string'&&/^[a-f0-9]{64}$/.test(value);
function validateArcDownloads(registry) {
 if(!keys(registry,['formatVersion','sourceId','upstreamRepository','provenanceKind','license','items'])||registry.formatVersion!==2||registry.sourceId!=='arcui'||registry.upstreamRepository!=='https://github.com/kuratlielia/arc-library'||registry.provenanceKind!=='registry_response_sha256')throw new Error('Invalid Arc source provenance');
 const license=registry.license;
 if(!keys(license,['spdx','copyright','bytes','sha256'])||license.spdx!=='MIT'||license.copyright!=='Copyright (c) 2026 Elia Kuratli'||license.bytes!==1069||license.sha256!=='1b73a3fbab233cb995e6e9b6a63d302f91975c74c1629919c8e9820902820dde')throw new Error('Invalid Arc license');
 if(!Array.isArray(registry.items)||registry.items.length!==50)throw new Error('Invalid Arc family selection');
 const seen=new Set();
 const fields=['sourceId','canonicalId','slug','title','sourceUrl','status','runtime','restore','entry','file','bytes','sha256','sourceManifestSha256','closure','license','thirdParty','responseSha256','originalFiles','browseFile','declaredDependencies'];
 for(const item of registry.items) {
  if(!keys(item,fields)||!arcSlugs.has(item.slug)||item.sourceId!=='arcui'||item.canonicalId!==`arcui:${item.slug}`||seen.has(item.canonicalId))throw new Error('Invalid Arc canonical identity');
  seen.add(item.canonicalId);
  const slug=item.slug,base=`registry/components/${slug}/${slug}`;
  if(item.sourceUrl!==`https://uiarc.dev/${slug==='command-palette'?'blocks':'components'}/${slug}`||item.entry!==base+'.tsx'||item.file!==`source-arcui-${slug}.tar.gz`||item.browseFile!==`source-arcui-${slug}.json`)throw new Error('Arc source identity/path mismatch');
  if(!Array.isArray(item.declaredDependencies)||!item.declaredDependencies.every(x=>safeText(x)&&x.length>0)||new Set(item.declaredDependencies).size!==item.declaredDependencies.length)throw new Error('Invalid response-declared dependencies');
  if(!safeText(item.title)||!item.title||item.status!=='available'||item.closure!=='partial'||item.runtime!=='not_tested'||item.restore!=='not_tested'||item.license!=='MIT'||item.thirdParty!=='not_audited_not_bundled')throw new Error('Invalid Arc source boundaries');
  if(!Number.isSafeInteger(item.bytes)||item.bytes<=0||item.bytes>1024*1024||![item.sha256,item.sourceManifestSha256,item.responseSha256].every(hex))throw new Error('Invalid Arc hash/bytes');
  const paths=new Set(['LICENSE',base+'.tsx',base+'.module.css',...(slug==='calendar'?['lib/use-today.ts']:[])]);
  if(!Array.isArray(item.originalFiles)||item.originalFiles.length!==paths.size)throw new Error('Missing Arc original');
  for(const row of item.originalFiles){
   if(!keys(row,['path','bytes','sha256'])||!paths.delete(row.path)||!Number.isSafeInteger(row.bytes)||row.bytes<=0||row.bytes>1024*1024||!hex(row.sha256))throw new Error('Invalid Arc original path/hash');
   if(row.path==='LICENSE'&&(row.bytes!==license.bytes||row.sha256!==license.sha256))throw new Error('Arc original license mismatch');
  }
 }
 return registry;
}
export function validateSourceDownloads(registry) {
 if(registry?.sourceId==='agent-elements')return validateAgentDownloads(registry);
 if(registry?.sourceId==='arcui')return validateArcDownloads(registry);
 if(!keys(registry,['formatVersion','collections'])||registry.formatVersion!==2||!Array.isArray(registry.collections)||registry.collections.length!==2||registry.collections[0]?.sourceId!=='agent-elements'||registry.collections[1]?.sourceId!=='arcui')throw new Error('Invalid source collections');
 validateAgentDownloads(registry.collections[0]);validateArcDownloads(registry.collections[1]);return registry;
}

export async function sourceDownloadAssets(directory) {
 const agent=JSON.parse(await readFile(join(directory,'source-downloads.json')));
 const arc=JSON.parse(await readFile(join(directory,'arc-source-downloads.json')));
 const registry=validateSourceDownloads({formatVersion:2,collections:[agent,arc]});
 const available=registry.collections.flatMap(x=>x.items.filter(v=>v.status==='available').map(item=>({item,collection:x})));
 const downloadDirectory=await lstat(join(directory,'downloads'));
 if(!downloadDirectory.isDirectory()||downloadDirectory.isSymbolicLink())throw new Error('Non-directory source downloads');
 const actual=(await readdir(join(directory,'downloads'))).sort();
 if(actual.join()!==available.map(x=>x.item.file).sort().join())throw new Error('Unexpected download directory files');
 const assets=new Map([['source-downloads.json',JSON.stringify(registry,null,2)+'\n']]);
 for(const {item,collection} of available) {
  const path=join(directory,'downloads',item.file),stat=await lstat(path);
  if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Non-file source archive');
  const bytes=await readFile(path),files=verifySourcePackage(bytes,item,collection);
  assets.set(item.file,bytes);
  if(item.sourceId==='arcui') {
   const meta=JSON.parse(files.get('SOURCE.json'));
   const dependencyAnalysis=analyzeSourceModules(new Map(meta.files.map(row=>[row.path,files.get(row.path)])));
   const view={formatVersion:1,sourceId:item.sourceId,canonicalId:item.canonicalId,provenance:meta.provenance,
    closure:meta.closure,runtime:meta.runtime,restore:meta.restore,notice:files.get('README.md').toString('utf8'),moduleEdges:meta.moduleEdges,
    unbundledRequirements:meta.unbundledRequirements,externalRequirements:meta.externalRequirements,dependencyAnalysis,
    files:meta.files.map(row=>({...row,content:files.get(row.path).toString('utf8')}))};
   assets.set(item.browseFile,JSON.stringify(view,null,2).replace(/</g,'\\u003c').replace(/>/g,'\\u003e')+'\n');
  }
 }
 return {registry,assets};
}
