import {readFile,lstat,readdir} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {verifySourcePackage} from './source-package.mjs';

const keys=(value,allowed)=>value&&Object.keys(value).sort().join()===allowed.sort().join();
const safeText=value=>typeof value==='string'&&!/(?:<|>|file:|\/workspace\/|\/home\/|\/cursor\/|private_candidate|material_baseline)/i.test(value);

/** One admission authority for the local source-download projection, separate from catalog/restore. */
export function validateSourceDownloads(registry) {
 if(!keys(registry,['formatVersion','sourceId','upstreamRepository','upstreamRef','excludedSourcePaths','items'])||registry.formatVersion!==1||registry.sourceId!=='agent-elements'||registry.upstreamRepository!=='https://github.com/21st-dev/agent-elements'||registry.upstreamRef!=='b04b36cb6381a1dd1a0e86cc7c90564ddcd56d37')throw new Error('Invalid download registry');
 if(!Array.isArray(registry.excludedSourcePaths)||registry.excludedSourcePaths.length!==9||new Set(registry.excludedSourcePaths).size!==9||!registry.excludedSourcePaths.every(p=>/^lib\/agent-ui\/[a-z/-]+\.tsx?$/.test(p)))throw new Error('Invalid exclusions');
 // Irrevocable reviewed exclusion set: data changes cannot silently relax this boundary.
 if(createHash('sha256').update(JSON.stringify([...registry.excludedSourcePaths].sort())).digest('hex')!=='73f92d36ffdccbed74d2f794dc5dfd3a49676e70d63a34a48e9e18fbfdc74b08')throw new Error('Unreviewed exclusion set');
 if(!Array.isArray(registry.items)||registry.items.length!==26)throw new Error('Invalid source selection');
 const identities=new Set(),filenames=new Set();
 const common=['sourceId','canonicalId','slug','title','sourceUrl','status','runtime','restore'];
 for(const item of registry.items) {
  const extras=item.status==='available'?['entry','file','bytes','sha256','sourceManifestSha256','closure','license','thirdParty']:item.status==='held'?['reason']:[];
  if(!extras.length||!keys(item,[...common,...extras])||!Object.values(item).every(v=>typeof v==='number'||safeText(v)))throw new Error('Invalid download fields');
  if(!/^[a-z]+(?:-[a-z]+)*$/.test(item.slug)||item.sourceId!==registry.sourceId||item.canonicalId!==`${item.sourceId}:${item.slug}`||item.sourceUrl!==`https://agent-elements.21st.dev/docs/${item.slug}`||identities.has(item.canonicalId))throw new Error('Duplicate/mismatched source identity');
  identities.add(item.canonicalId);
  if(item.runtime!=='not_tested'||item.restore!=='not_tested')throw new Error('Unverified runtime/restore claim');
  if(item.status==='held') {
   if(item.reason!=='unresolved_asset_or_source_license_in_dependency_closure'||!registry.excludedSourcePaths.some(p=>p.endsWith(`/${item.slug}.tsx`)))throw new Error('Invalid held source');
   continue;
  }
  if(!/^lib\/agent-ui\/components\/[a-z/-]+\.tsx$/.test(item.entry)||!item.entry.endsWith(`/${item.slug}.tsx`)||registry.excludedSourcePaths.includes(item.entry))throw new Error('Excluded/mismatched entry');
  if(item.file!==`source-agent-elements-${item.slug}.tar.gz`||filenames.has(item.file)||!Number.isSafeInteger(item.bytes)||item.bytes<=0||item.bytes>1024*1024||![item.sha256,item.sourceManifestSha256].every(h=>/^[a-f0-9]{64}$/.test(h)))throw new Error('Invalid archive descriptor');
  if(item.closure!=='partial'||item.license!=='MIT'||item.thirdParty!=='not_audited_not_bundled')throw new Error('Invalid source boundaries');
  filenames.add(item.file);
 }
 if(registry.items.filter(x=>x.status==='available').length!==20)throw new Error('Invalid available selection');
 return registry;
}

export async function sourceDownloadAssets(directory) {
 const raw=await readFile(join(directory,'source-downloads.json'));
 const registry=validateSourceDownloads(JSON.parse(raw));
 const available=registry.items.filter(x=>x.status==='available');
 const downloadDirectory=await lstat(join(directory,'downloads'));
 if(!downloadDirectory.isDirectory()||downloadDirectory.isSymbolicLink())throw new Error('Non-directory source downloads');
 const actual=(await readdir(join(directory,'downloads'))).sort();
 if(actual.join()!==available.map(x=>x.file).sort().join())throw new Error('Unexpected download directory files');
 const assets=new Map([['source-downloads.json',JSON.stringify(registry,null,2)+'\n']]);
 for(const item of available) {
  const path=join(directory,'downloads',item.file),stat=await lstat(path);
  if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Non-file source archive');
  const bytes=await readFile(path);
  verifySourcePackage(bytes,item,registry);assets.set(item.file,bytes);
 }
 return {registry,assets};
}
