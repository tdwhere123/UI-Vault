import {gunzipSync,gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
import {analyzeSourceModules,moduleEdgesFor,externalRequirementsFor,unbundledRequirementsFor,sameModuleEdges} from './source-dependencies.mjs';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const safePath = name => typeof name==='string' && /^[a-zA-Z0-9_.-]+(?:\/[a-zA-Z0-9_.-]+)*$/.test(name) && !name.split('/').some(x=>x==='.'||x==='..');
const fail = message => {throw new Error(message);};
const text = (bytes,start,size) => bytes.subarray(start,start+size).toString('utf8').replace(/\0.*$/s,'');
function octal(bytes,start,size) {
 const field=text(bytes,start,size).trim();
 if(!/^[0-7]+$/.test(field))fail('Invalid tar numeric field');
 const value=Number.parseInt(field,8);
 if(!Number.isSafeInteger(value))fail('Invalid tar size');
 return value;
}

/** Deliberately accepts only our bounded, regular-file USTAR format; never executes source. */
export function readSourceTar(gzip) {
 const raw=gunzipSync(gzip,{maxOutputLength:4*1024*1024});
 if(raw.length%512)fail('Truncated tar');
 const files=new Map();let offset=0;
 while(offset+512<=raw.length) {
  const header=raw.subarray(offset,offset+512);
  if(header.every(x=>x===0)) {
   if(raw.length-offset<1024||!raw.subarray(offset).every(x=>x===0))fail('Invalid tar terminator');
   return files;
  }
  const checksum=octal(header,148,8);
  const actual=header.reduce((sum,value,i)=>sum+(i>=148&&i<156?32:value),0);
  if(checksum!==actual)fail('Tar checksum mismatch');
  if(text(header,257,6)!=='ustar'||text(header,345,155)!==''||![0,48].includes(header[156]))fail('Unsupported tar member');
  const name=text(header,0,100),size=octal(header,124,12);
  if(!safePath(name)||files.has(name)||size>1024*1024||files.size>=100)fail('Unsafe/duplicate tar member');
  const end=offset+512+size,next=offset+512+Math.ceil(size/512)*512;
  if(next>raw.length||!raw.subarray(end,next).every(x=>x===0))fail('Truncated/invalid tar padding');
  files.set(name,raw.subarray(offset+512,end));offset=next;
 }
 fail('Missing tar terminator');
}

/** Package hash is locked by the reviewed registry; the manifest binds source identity and raw bytes. */
export function verifySourcePackage(bytes,item,registry) {
 if(registry.sourceId==='arcui')return verifyArcPackage(bytes,item,registry);
 if(bytes.length!==item.bytes||sha(bytes)!==item.sha256)fail('Source archive byte mismatch');
 const members=readSourceTar(bytes),prefix=`agent-elements-${item.slug}/`,files=new Map();
 for(const [name,data] of members) {
  if(!name.startsWith(prefix))fail('Wrong package identity');
  const path=name.slice(prefix.length);
  if(!safePath(path)||registry.excludedSourcePaths.includes(path))fail('Excluded/unsafe source path');
  files.set(path,data);
 }
 const source=files.get('SOURCE.json');
 if(!source||sha(source)!==item.sourceManifestSha256)fail('Source manifest mismatch');
 const meta=JSON.parse(source);
 const required=['formatVersion','sourceId','canonicalId','upstreamRepository','upstreamRef','entry','files','moduleEdges','externalRequirements','hostRequirements','hostDeclaredRanges','closure','runtime','restore','thirdParty','notice'];
 if(Object.keys(meta).sort().join()!==required.sort().join())fail('Unexpected source metadata');
 for(const key of ['sourceId','canonicalId','entry','closure','runtime','restore','thirdParty'])if(meta[key]!==item[key])fail('Source identity/state mismatch');
 if(meta.formatVersion!==1||meta.upstreamRef!==registry.upstreamRef||meta.upstreamRepository!==registry.upstreamRepository)fail('Upstream identity mismatch');
 if(!Array.isArray(meta.files)||!meta.files.length||!Array.isArray(meta.moduleEdges))fail('Missing source manifest');
 const expected=new Set(['SOURCE.json','README.md','SHA256SUMS']);
 for(const row of meta.files) {
  if(!safePath(row.path)||expected.has(row.path))fail('Duplicate/unsafe source manifest');
  expected.add(row.path);
  const data=files.get(row.path);
  if(!data||data.length!==row.size||sha(data)!==row.sha256)fail('Original source byte mismatch');
  const blob=createHash('sha1').update(`blob ${data.length}\0`).update(data).digest('hex');
  if(blob!==row.git_blob||row.url!==`${registry.upstreamRepository}/blob/${registry.upstreamRef}/${row.path}`)fail('Original provenance mismatch');
  const content=data.toString('utf8');
  if(/\/home\/|\/cursor\/|private_candidate|material_baseline|README-CANDIDATE|source-collection|download-candidates/i.test(content))fail('Private data in source');
  // This exact upstream business prefix is not a path to this machine. Never redact original code.
  if(content.includes('/workspace/')&&(row.path!=='lib/agent-ui/components/tools/tool-registry.ts'||row.sha256!=='33e578edd7f405c6839959655b9755f6b8b8015ac71e1e0c762b42aee4c53dc7'))fail('Unreviewed workspace string');
 }
 if(files.size!==expected.size||[...files.keys()].some(x=>!expected.has(x)))fail('Unexpected package file set');
 if(!files.has(item.entry)||!files.has('lib/agent-ui/agent-ui.css'))fail('Missing entry/stylesheet');
 const license=files.get('LICENSE');
 if(!license||license.length!==1065||sha(license)!=='8bc26817d6b5c323f8cb5e5da77182fe0db8a5ad0e0b563903f9382bba06dc9a')fail('Original MIT license mismatch');
 const graphFiles=new Set(meta.files.filter(x=>/\.tsx?$/.test(x.path)).map(x=>x.path));
 const reachable=new Set(),todo=[item.entry];
 for(const edge of meta.moduleEdges) {
  if(!graphFiles.has(edge.file)||typeof edge.specifier!=='string'||(edge.resolved!==null&&!graphFiles.has(edge.resolved)))fail('Incomplete dependency edge');
 }
 while(todo.length) {
  const file=todo.pop();if(reachable.has(file))continue;reachable.add(file);
  todo.push(...meta.moduleEdges.filter(x=>x.file===file&&x.resolved!==null).map(x=>x.resolved));
 }
 if(reachable.size!==graphFiles.size||[...graphFiles].some(x=>!reachable.has(x)))fail('Unexpected static dependency closure');
 for(const key of ['SOURCE.json','README.md','SHA256SUMS']) {
  if(/\/workspace\/|\/home\/|\/cursor\/|material_baseline|private_candidate|README-CANDIDATE|source-collection|download-candidates/i.test(files.get(key).toString()))fail('Private wrapper');
 }
 const sums=[...files].filter(([p])=>p!=='SHA256SUMS').sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,b])=>`${sha(b)}  ${p}\n`).join('');
 if(files.get('SHA256SUMS').toString()!==sums)fail('Invalid package sums');
 return files;
}

/** Registry-response snapshots are not Git snapshots. Preserve their original paths and bytes. */
function verifyArcPackage(bytes,item,registry) {
 if(bytes.length!==item.bytes||sha(bytes)!==item.sha256)fail('Source archive byte mismatch');
 const files=new Map(),prefix=`arcui-${item.slug}/`;
 for(const [name,data] of readSourceTar(bytes)) {
  if(!name.startsWith(prefix))fail('Wrong package identity');
  const path=name.slice(prefix.length);if(!safePath(path))fail('Unsafe source path');files.set(path,data);
 }
 const source=files.get('SOURCE.json');
 if(!source||sha(source)!==item.sourceManifestSha256)fail('Source manifest mismatch');
 const meta=JSON.parse(source);
 const fields=['formatVersion','sourceId','canonicalId','upstreamRepository','provenance','entry','files','moduleEdges','externalRequirements','registryRequirements','unbundledRequirements','closure','runtime','restore','thirdParty'];
 if(Object.keys(meta).sort().join()!==fields.sort().join()||meta.formatVersion!==2)fail('Unexpected source metadata');
 for(const key of ['sourceId','canonicalId','entry','closure','runtime','restore','thirdParty'])if(meta[key]!==item[key])fail('Source identity/state mismatch');
 const expectedProvenance={kind:'registry_response_sha256',url:`https://uiarc.dev/r/${item.slug}.json`,sha256:item.responseSha256};
 if(meta.upstreamRepository!==registry.upstreamRepository||!isDeepStrictEqual(meta.provenance,expectedProvenance))fail('Registry response provenance mismatch');
 if(!isDeepStrictEqual(meta.files,item.originalFiles))fail('Original source manifest mismatch');
 const expected=new Set(['SOURCE.json','README.md','SHA256SUMS',...item.originalFiles.map(x=>x.path)]);
 if(files.size!==expected.size||[...files.keys()].some(p=>!expected.has(p)))fail('Unexpected package file set');
 const originals=new Map();
 for(const row of item.originalFiles) {
  const data=files.get(row.path);
  if(!data||data.length!==row.bytes||sha(data)!==row.sha256)fail('Original source byte mismatch');
  const content=data.toString('utf8');
  if(/\/workspace\/|\/home\/|\/cursor\/|private_candidate|material_baseline|README-CANDIDATE|source-collection|download-candidates/i.test(content))fail('Private data in source');
  originals.set(row.path,data);
 }
 const license=files.get('LICENSE');
 if(!license||license.length!==1069||sha(license)!=='1b73a3fbab233cb995e6e9b6a63d302f91975c74c1629919c8e9820902820dde')fail('Original MIT license mismatch');
 const analysis=analyzeSourceModules(originals),expectedEdges=moduleEdgesFor(analysis,originals,meta.moduleEdges);
 if(!sameModuleEdges(meta.moduleEdges,expectedEdges))fail('Incomplete/incorrect syntax module dependencies');
 if(!isDeepStrictEqual(meta.externalRequirements,externalRequirementsFor(analysis,item.declaredDependencies)))fail('Incorrect external dependency requirements');
 if(!isDeepStrictEqual(meta.unbundledRequirements,unbundledRequirementsFor(expectedEdges,['registry/foundation.css','registry/motion-tokens.ts','lib/motion-tokens.ts'])))fail('Incorrect unbundled dependency requirements');
 if(!Array.isArray(meta.registryRequirements)||!meta.registryRequirements.every(x=>typeof x==='string'))fail('Invalid requirements');
 for(const key of ['SOURCE.json','README.md','SHA256SUMS'])if(/\/workspace\/|\/home\/|\/cursor\/|material_baseline|private_candidate|README-CANDIDATE|source-collection|download-candidates/i.test(files.get(key).toString()))fail('Private wrapper');
 const sums=[...files].filter(([p])=>p!=='SHA256SUMS').sort(([a],[b])=>a<b?-1:a>b?1:0).map(([p,b])=>`${sha(b)}  ${p}\n`).join('');
 if(files.get('SHA256SUMS').toString()!==sums)fail('Invalid package sums');
 return files;
}

export function writeSourceTar(files) {
 const blocks=[];
 for(const [name,data] of [...files].sort(([a],[b])=>a<b?-1:a>b?1:0)) {
  if(!safePath(name)||Buffer.byteLength(name)>100||!Buffer.isBuffer(data)||data.length>1024*1024)fail('Unsafe tar input');
  const h=Buffer.alloc(512);h.write(name);h.write('0000644\0',100);h.write('0000000\0',108);h.write('0000000\0',116);
  h.write(data.length.toString(8).padStart(11,'0')+'\0',124);h.write('00000000000\0',136);h.fill(32,148,156);h[156]=48;h.write('ustar\0',257);h.write('00',263);
  h.write(h.reduce((sum,b)=>sum+b,0).toString(8).padStart(6,'0')+'\0 ',148);
  blocks.push(h,data,Buffer.alloc((512-data.length%512)%512));
 }
 blocks.push(Buffer.alloc(1024));return gzipSync(Buffer.concat(blocks));
}
