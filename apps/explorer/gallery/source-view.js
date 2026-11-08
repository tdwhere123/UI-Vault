import {sourceItems} from './gallery-model.mjs';

// These are text nodes, never HTML parsed from a source file. The original bytes remain in the archive.
export function renderSourceFiles(host,payload) {
 const document=host.ownerDocument;host.replaceChildren();
 for(const file of payload.files) {
  const section=document.createElement('section'),heading=document.createElement('h2'),pre=document.createElement('pre');
  heading.textContent=`${file.path} · ${file.bytes} bytes · SHA256 ${file.sha256}`;
  pre.textContent=file.content;section.append(heading,pre);host.append(section);
 }
}
export function selectBrowsableSource(registry,sourceId,canonicalId) {
 return sourceItems(registry).find(x=>x.sourceId===sourceId&&x.canonicalId===canonicalId&&x.status==='available'&&/^source-arcui-[a-z-]+\.json$/.test(x.browseFile));
}
async function start() {
 const params=new URL(location.href).searchParams;
 const registryResponse=await fetch('./source-downloads.json');if(!registryResponse.ok)throw new Error('来源目录不可取');
 const item=selectBrowsableSource(await registryResponse.json(),params.get('source'),params.get('canonical'));
 if(!item)throw new Error('未找到同来源、同canonical的文本入口');
 const response=await fetch('./'+item.browseFile);if(!response.ok)throw new Error('原源码文本不可取');
 const payload=await response.json();
 if(payload.sourceId!==item.sourceId||payload.canonicalId!==item.canonicalId||payload.provenance.sha256!==item.responseSha256)throw new Error('文本来源身份不符');
 for(const file of payload.files) {
  const bytes=new TextEncoder().encode(file.content),digest=await crypto.subtle.digest('SHA-256',bytes);
  const hash=Array.from(new Uint8Array(digest),x=>x.toString(16).padStart(2,'0')).join('');
  if(bytes.length!==file.bytes||hash!==file.sha256)throw new Error('原文本字节不符');
 }
 document.getElementById('source-title').textContent=item.canonicalId;
 document.getElementById('source-state').textContent='依赖解析 '+payload.dependencyAnalysis.state+'（仅引用可静态识别，不代表闭包完整；类型与运行时均列入，动态未知不视为空） · 未配预览 · partial · runtime/restore=not_tested · 仅展示文本，不运行组件；npm/素材未附带、未全审。响应SHA256 '+item.responseSha256;
 document.getElementById('source-requirements').textContent=payload.notice+'\n依赖解析：'+payload.dependencyAnalysis.state+'\n类型引用：'+payload.dependencyAnalysis.references.filter(x=>x.typeOnly).length+'\n显式未知：'+JSON.stringify(payload.dependencyAnalysis.unknown,null,2)+'\n未打包/未验证依赖：\n'+payload.unbundledRequirements.join('\n')+'\n\nnpm/host：\n'+payload.externalRequirements.join('\n');
 const download=document.getElementById('source-download');download.href='./'+item.file;download.download=item.file;download.textContent='下载 '+item.canonicalId+' 原源码包';
 renderSourceFiles(document.getElementById('source-files'),payload);
}
if(typeof document!=='undefined')start().catch(error=>{document.getElementById('source-state').textContent='读取失败：'+error.message;});
