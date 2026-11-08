import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readSourceTar,writeSourceTar,verifySourcePackage} from '../apps/explorer/gallery/source-package.mjs';
import {validateSourceDownloads} from '../apps/explorer/gallery/source-downloads.mjs';
import {analyzeSourceModules,moduleEdgesFor,externalRequirementsFor,unbundledRequirementsFor,sameModuleEdges} from '../apps/explorer/gallery/source-dependencies.mjs';
const directory=new URL('../apps/explorer/gallery/',import.meta.url),sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const json=value=>Buffer.from(JSON.stringify(value,null,2)+'\n');

/** Repair derived metadata only. Raw source/LICENSE are bounded by the reviewed original-file hashes. */
export async function rebuildSourceDependencies() {
 const registry=validateSourceDownloads(JSON.parse(await readFile(new URL('arc-source-downloads.json',directory))));
 const plan=[];
 for(const item of registry.items) {
  const bytes=await readFile(new URL('downloads/'+item.file,directory));
  if(bytes.length!==item.bytes||sha(bytes)!==item.sha256)throw new Error('Input archive hash mismatch');
  const members=readSourceTar(bytes),prefix=`arcui-${item.slug}/`,files=new Map();
  for(const [name,data] of members){if(!name.startsWith(prefix))throw new Error('Input package identity mismatch');files.set(name.slice(prefix.length),data);}
  const source=files.get('SOURCE.json');if(!source||sha(source)!==item.sourceManifestSha256)throw new Error('Input source metadata hash mismatch');
  const meta=JSON.parse(source),originals=new Map();
  for(const row of item.originalFiles){const data=files.get(row.path);if(!data||data.length!==row.bytes||sha(data)!==row.sha256)throw new Error('Input original byte mismatch');originals.set(row.path,data);}
  const analysis=analyzeSourceModules(originals),moduleEdges=moduleEdgesFor(analysis,originals,meta.moduleEdges);
  const externalRequirements=externalRequirementsFor(analysis,item.declaredDependencies);
  const unbundledRequirements=unbundledRequirementsFor(moduleEdges,['registry/foundation.css','registry/motion-tokens.ts','lib/motion-tokens.ts']);
  if(sameModuleEdges(meta.moduleEdges,moduleEdges)&&JSON.stringify(meta.externalRequirements)===JSON.stringify(externalRequirements)&&JSON.stringify(meta.unbundledRequirements)===JSON.stringify(unbundledRequirements)){
   verifySourcePackage(bytes,item,registry);continue;
  }
  const updated={...meta,moduleEdges,externalRequirements,unbundledRequirements};
  files.set('SOURCE.json',json(updated));
  // Preserve every original attribution/material note; replace only the derived requirements section.
  const lines=files.get('README.md').toString('utf8').split('\n');
  const markers=lines.flatMap((line,index)=>line.startsWith('Unbundled requirements')?[index]:[]);
  if(markers.length!==1)throw new Error('Missing/ambiguous derived README requirements section');
  const begin=markers[0];let end=begin+1;while(end<lines.length&&lines[end].startsWith('- '))end++;
  lines.splice(begin,end-begin,'Unbundled requirements (derived from syntax; no relocation is implied):',...unbundledRequirements.map(x=>'- '+x));
  lines.push('Dependency syntax includes type/runtime/side-effect imports, re-exports, import=, import types and literal dynamic imports. Expression-based imports and unestablished require bindings are explicit unknown, not empty. Parse failures block admission. SOURCE.json is the dependency authority; its type and runtime requirements are conservatively combined.','');
  files.set('README.md',Buffer.from(lines.join('\n')));
  files.set('SHA256SUMS',Buffer.from([...files].filter(([p])=>p!=='SHA256SUMS').sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,b])=>`${sha(b)}  ${p}\n`).join('')));
  const output=writeSourceTar(new Map([...files].map(([path,data])=>[prefix+path,data])));
  const descriptor={...item,bytes:output.length,sha256:sha(output),sourceManifestSha256:sha(files.get('SOURCE.json'))};
  verifySourcePackage(output,descriptor,registry);plan.push({item,descriptor,output});
 }
 for(const {item,descriptor,output} of plan){await writeFile(new URL('downloads/'+item.file,directory),output);Object.assign(item,descriptor);}
 if(plan.length)await writeFile(new URL('arc-source-downloads.json',directory),json(registry));
 return {changedPackages:plan.map(({item})=>item.canonicalId),unchangedPackages:50-plan.length};
}
if(process.argv[1]===fileURLToPath(import.meta.url))console.log(JSON.stringify(await rebuildSourceDependencies(),null,2));
