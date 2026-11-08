/** Publish the atlas at / and preserve the previous audited gallery at /legacy/. */
import { mkdir, readdir, copyFile, lstat, readFile, writeFile } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { exportStatic } from '../apps/explorer/static-export.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export async function exportPages(output,basePath='/UI-Vault/') {
  output=resolve(output);
  if(!/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(basePath))throw Error('Invalid base path');
  await mkdir(output,{recursive:true});
  if((await readdir(output)).length)throw Error('Output must be empty');
  const sha=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
  const legacy=await exportStatic({root,output:join(output,'legacy'),basePath:basePath+'legacy/',sha});
  const source=join(root,'apps/atlas-sample');
  const files=['index.html','app.js','style.css','items.json','README.md'];
  async function copy(relative){const s=join(source,relative),d=join(output,relative),info=await lstat(s);if(info.isSymbolicLink())throw Error('Symlinks not permitted');if(info.isDirectory()){await mkdir(d);for(const child of await readdir(s))await copy(relative+'/'+child)}else if(info.isFile())await copyFile(s,d);else throw Error('Unsupported input');}
  for(const name of [...files,'assets','previews','originals','bundles'])await copy(name);
  const items=JSON.parse(await readFile(join(output,'items.json'),'utf8'));
  if(items.length!==20||new Set(items.map(x=>x.id)).size!==20)throw Error('Expected 20 unique atlas materials');
  for(const x of items)for(const key of ['preview','code','bundle']){if(typeof x[key]!=='string'||x[key].includes('..')||x[key].startsWith('/'))throw Error('Invalid material path');await lstat(join(output,x[key]));}
  const version={codeSha:sha,basePath,materials:items.length,legacy:'legacy/',worktreeDirty:legacy.worktreeDirty};
  await writeFile(join(output,'version.json'),JSON.stringify(version,null,2)+'\n');
  await writeFile(join(output,'.nojekyll'),'');
  return version;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const [output,basePath]=process.argv.slice(2);if(!output)throw Error('Usage: node scripts/export-pages.mjs OUTPUT [BASE_PATH]');console.log(await exportPages(output,basePath));
}
