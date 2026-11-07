import { readFile, writeFile, mkdir, readdir, lstat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import ts from 'typescript';
import { validateCatalog, getComponentAvailability } from '../../dist/packages/core/src/catalog.js';
import { validatePublicCatalog, upstreamLinks } from './public-catalog.mjs';
import { compileQueryValidator } from './compile-query-validator.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const files = ['app.js','catalog.json','index.html','manifest.json','public-catalog.js','query-validator.js','query-view.js','style.css','version.json'];
const json = value => JSON.stringify(value,null,2)+'\n';
const here = fileURLToPath(new URL('.',import.meta.url));

/** Explicit projection plus exact human-review lock; no input object spreads. */
export function projectPublicCatalog(input, reviewed) {
  const c = validateCatalog(input);
  const projected = {
    sources: c.sources.map(s => ({ id:s.id, name:s.name, upstreamUrl:s.upstreamUrl })),
    components: c.components.map(x => ({
      id:x.id, sourceId:x.sourceId, name:x.name, category:x.category, tags:structuredClone(x.tags),
      dependencies:structuredClone(x.dependencies), assetKind:x.assetKind, licenseStatus:x.license.status,
      availability:getComponentAvailability(x), restoreStatus:'not_checked', upstreamUrl:upstreamLinks[x.sourceId],
      ...(x.techStack === undefined ? {} : { techStack:structuredClone(x.techStack) })
    }))
  };
  const safe = validatePublicCatalog(projected);
  if (!isDeepStrictEqual(safe, validatePublicCatalog(reviewed))) throw new Error('Public review does not match projected fields');
  return safe;
}

export async function staticFiles(root, {basePath,sha}) {
  if (resolve(root) !== resolve(here,'../..')) throw new Error('Root must match this isolated exporter');
  if (typeof basePath !== 'string' || !/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(basePath)) throw new Error('Invalid base path');
  const head=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
  if (!/^[a-f0-9]{40}$/.test(sha) || sha !== head) throw new Error('Version SHA must equal candidate HEAD');
  const input=await readFile(join(root,'catalog.json'));
  const review=await readFile(join(root,'apps/explorer/public-review.json'));
  const catalog=projectPublicCatalog(JSON.parse(input),JSON.parse(review));
  const adapter=(await readFile(join(root,'apps/explorer/public-catalog.mjs'),'utf8'))
    .replace('../../dist/packages/core/src/query-view.js','./query-view.js').replace('./query-validator.mjs','./query-validator.js');
  const html=(await readFile(join(root,'apps/explorer/public/index.html'),'utf8'))
    .replace('<head>','<head><meta name="referrer" content="no-referrer"><meta http-equiv="Content-Security-Policy" content="default-src &apos;none&apos;; script-src &apos;self&apos;; style-src &apos;self&apos;; connect-src &apos;self&apos;; base-uri &apos;none&apos;; form-action &apos;self&apos;">')
    .replace('href="/style.css"','href="./style.css"').replace('src="/app.js"','src="./app.js"')
    .replace('本地源码收藏','公开审核目录').replace('本地源码收藏','公开审核目录')
    .replace('仅展示文本，不运行第三方组件；快照登记不代表恢复成功','源码、截图与 Demo 不公开；仅审定目录与上游链接；未知及 Pro 不代表获得许可')
    .replace('选择组件查看登记信息与源码','选择组件查看公开登记信息');
  const querySource=await readFile(join(root,'packages/core/src/query-view.ts'),'utf8');
  const queryModule=ts.transpileModule(querySource,{fileName:'query-view.mts',compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.NodeNext}}).outputText;
  if (queryModule !== await readFile(join(root,'dist/packages/core/src/query-view.js'),'utf8')) throw new Error('Stale query build');
  const version={formatVersion:1,codeSha:sha,basePath,catalogInputSha256:hash(input),reviewSha256:hash(review),
    worktreeDirty:execFileSync('git',['status','--porcelain'],{cwd:root,encoding:'utf8'}).trim().length>0};
  return new Map([
    ['index.html',html],['style.css',await readFile(join(root,'apps/explorer/public/style.css'))],
    ['app.js',await readFile(join(root,'apps/explorer/static-app.js'))],['public-catalog.js',adapter],
    ['query-view.js',queryModule],
    ['query-validator.js',compileQueryValidator()],['catalog.json',json(catalog)],['version.json',json(version)]
  ]);
}

export async function exportStatic({root,output,basePath='/',sha}) {
  root=resolve(root); output=resolve(output);
  await mkdir(output,{recursive:true});
  if ((await readdir(output)).length) throw new Error('Output must be a new empty directory');
  const assets=await staticFiles(root,{basePath,sha});
  for (const [file,bytes] of assets) await writeFile(join(output,file),bytes,{flag:'wx'});
  const version=JSON.parse(assets.get('version.json'));
  const manifest={formatVersion:1,codeSha:sha,files:[...assets].map(([path,bytes])=>({path,bytes:Buffer.byteLength(bytes),sha256:hash(bytes)}))};
  await writeFile(join(output,'manifest.json'),json(manifest),{flag:'wx'});
  return auditStatic(output,{root,version});
}

/** Enumerates every file, verifies fields/hashes AND compares all bytes to approved build inputs. */
export async function auditStatic(output,{root=resolve(here,'../..'),version}={}) {
  const names=(await readdir(output)).sort();
  if (!isDeepStrictEqual(names,files)) throw new Error('Unexpected output files');
  const bytes=new Map();
  for (const file of names) {
    const stat=await lstat(join(output,file));
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error('Unexpected file type');
    bytes.set(file,await readFile(join(output,file)));
  }
  const actualVersion=JSON.parse(bytes.get('version.json'));
  const expected=await staticFiles(root,{basePath:actualVersion.basePath,sha:actualVersion.codeSha});
  if (version && !isDeepStrictEqual(version,actualVersion)) throw new Error('Version mismatch');
  for (const [file,content] of expected) if (!bytes.get(file).equals(Buffer.from(content))) throw new Error(`Unapproved bytes: ${file}`);
  validatePublicCatalog(JSON.parse(bytes.get('catalog.json')));
  const manifest=JSON.parse(bytes.get('manifest.json'));
  const expectedManifest={formatVersion:1,codeSha:actualVersion.codeSha,files:[...expected].map(([path,content])=>({path,bytes:Buffer.byteLength(content),sha256:hash(content)}))};
  if (!isDeepStrictEqual(manifest,expectedManifest)) throw new Error('Invalid manifest');
  return {codeSha:actualVersion.codeSha,worktreeDirty:actualVersion.worktreeDirty,
    files:names.map(path=>({path,bytes:bytes.get(path).length,sha256:hash(bytes.get(path))})),
    publicFields:'Explicit whitelist + exact public-review.json equality; all artifact bytes match fixed inputs'};
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [output,basePath='/']=process.argv.slice(2);
  if (!output) throw new Error('Usage: node apps/explorer/static-export.mjs OUTPUT [BASE_PATH]');
  const root=resolve(here,'../..');
  const sha=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
  console.log(json(await exportStatic({root,output,basePath,sha})));
}
