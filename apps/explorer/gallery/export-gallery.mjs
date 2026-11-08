import {readFile,lstat} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
export async function galleryAssets(root){
 const directory=join(root,'apps/explorer/gallery');
 const raw=await readFile(join(directory,'items.json'));const items=JSON.parse(raw);
 if(!Array.isArray(items)||items.length===0)throw new Error('Empty gallery');
 const ids=new Set(),images=new Set();const assets=new Map();
 const allowed=new Set(['id','title','description','purpose','style','technology','image','width','height','sourceName','sourceUrl','capturedAt','status','downloadAvailable','attribution','sha256']);
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
  if(item.status!=='reference-only'||item.downloadAvailable!==false||!(shadcn||bencho||agent))throw new Error('Unapproved provenance');
  if(!Array.isArray(item.technology)||!item.technology.every(t=>typeof t==='string')||!Number.isInteger(item.width)||!Number.isInteger(item.height)||item.width<=0||item.height<=0)throw new Error('Invalid display fields');
  for(const value of Object.values(item).flat()){if(typeof value==='string'&&(/(?:<|>|file:|\/workspace\/|\/home\/|\/cursor\/)/i.test(value)))throw new Error('Private path or markup in gallery');}
  const path=join(directory,'media',item.image),stat=await lstat(path);if(!stat.isFile()||stat.isSymbolicLink())throw new Error('Non-file image');
  const bytes=await readFile(path);if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||createHash('sha256').update(bytes).digest('hex')!==item.sha256)throw new Error('Screenshot byte mismatch');
  if(bytes.readUInt32BE(16)!==item.width||bytes.readUInt32BE(20)!==item.height)throw new Error('Image dimension mismatch');
  assets.set(item.image,bytes);
 }
 for(const [output,input] of [['index.html','index.html'],['app.js','app.js'],['style.css','style.css'],['gallery-model.js','gallery-model.mjs'],['gallery-neiki.js','vendor/neiki-gallery.js'],['gallery-neiki.css','vendor/neiki-gallery.css'],['gallery-LICENSE.txt','vendor/LICENSE'],['gallery-THIRD-PARTY.txt','THIRD-PARTY.txt']])assets.set(output,await readFile(join(directory,input)));
 assets.set('gallery-data.json',raw);return assets;
}
