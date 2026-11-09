/** Publish the current atlas only. Historical assets remain recoverable in Git. */
import { mkdir, readdir, copyFile, lstat, readFile, writeFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export async function exportPages(output,basePath='/UI-Vault/') {
  output=resolve(output);
  if(!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(basePath))throw Error('Invalid base path');
  await mkdir(output,{recursive:true});
  if((await readdir(output)).length)throw Error('Output must be empty');
  const sha=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
  const worktreeDirty=!!execFileSync('git',['status','--porcelain','--untracked-files=no'],{cwd:root,encoding:'utf8'}).trim();
  const source=join(root,'apps/atlas-sample');
  const files=['index.html','app.js','atlas-model.mjs','preview-runtime.mjs','style.css','items.json','catalog.json','shell-icons.mjs','README.md','LICENSES.md','candidates.html','candidates.js','candidates.css','candidate-catalog.json','candidate-adapter.mjs','display-names.mjs'];
  async function copy(relative){const s=join(source,relative),d=join(output,relative),info=await lstat(s);if(info.isSymbolicLink())throw Error('Symlinks not permitted');if(info.isDirectory()){await mkdir(d);for(const child of await readdir(s))await copy(relative+'/'+child)}else if(info.isFile())await copyFile(s,d);else throw Error('Unsupported input');}
  for(const name of [...files,'assets','previews','originals','bundles','featured','thumbnails'])await copy(name);
  if((await readdir(source)).includes('batches'))await copy('batches');
  const items=JSON.parse(await readFile(join(output,'items.json'),'utf8'));
  if(!items.length||new Set(items.map(x=>x.id)).size!==items.length)throw Error('Expected nonempty, unique atlas materials');
  for(const x of items)for(const value of [x.preview,x.code,x.bundle,...(x.runtime?[x.runtime.css,x.runtime.js]:[])]){if(typeof value!=='string'||value.includes('..')||value.startsWith('/')||value.includes(':'))throw Error('Invalid material path');await lstat(join(output,value));}
  const posters=items.filter(x=>x.thumbnail).length;
  if(posters!==items.length)throw Error('Every published material needs a reviewed real poster');
  for(const x of items){if(!/^thumbnails\/[a-zA-Z0-9_-]+\.webp$/.test(x.thumbnail))throw Error('Invalid poster path');await lstat(join(output,x.thumbnail));}
  const candidates=JSON.parse(await readFile(join(output,'candidate-catalog.json'),'utf8'));
  for(const x of candidates)if(x.preview)await lstat(join(output,x.preview));
  const version={candidates:candidates.length,unverifiedPreviews:candidates.filter(x=>x.preview).length,codeSha:sha,basePath,materials:items.length,posters,listPreviewMode:'poster-or-bounded-live',maxLiveCards:1,worktreeDirty};
  await writeFile(join(output,'version.json'),JSON.stringify(version,null,2)+'\n');
  await writeFile(join(output,'.nojekyll'),'');
  return version;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const [output,basePath]=process.argv.slice(2);if(!output)throw Error('Usage: node scripts/export-pages.mjs OUTPUT [BASE_PATH]');console.log(await exportPages(output,basePath));
}
