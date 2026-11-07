import { searchPublicCatalog, validatePublicCatalog } from './public-catalog.js';

const $ = id => document.getElementById(id);
const node = (tag,text) => { const item=document.createElement(tag); if(text!==undefined)item.textContent=text; return item; };
let catalog; let selected;
const status=$('status');
function field(dl,name,value) { dl.append(node('dt',name),node('dd',value)); }
function renderDetail(item) {
  selected=item.id;
  const detail=$('detail');
  detail.replaceChildren(node('h2',`${item.name} · ${item.sourceId}`));
  detail.append(node('strong',item.assetKind==='reference'?'审美/交互参考 · Pro/未知许可：不可据此取用':'源码登记 · 不代表已恢复或获再分发许可'));
  const dl=node('dl');
  const source=catalog.sources.find(s=>s.id===item.sourceId);
  field(dl,'来源',`${source.name} (${item.sourceId})`);
  field(dl,'类型',item.assetKind); field(dl,'可取用登记',item.availability);
  field(dl,'本次恢复状态','未检查 / not_checked（公开目录不执行恢复）');
  for(const [key,label] of [['frameworks','框架'],['languages','语言'],['styling','样式']]) {
    const values=item.techStack?.[key];
    field(dl,label,values==null?'未知（未登记）':values.length?values.join(', '):'明确无');
  }
  field(dl,'分类 / 标签',[item.category,...item.tags].join(' · '));
  field(dl,'许可登记',item.licenseStatus);
  field(dl,'固定依赖',Object.entries(item.dependencies).map(([name,version])=>`${name}@${version}`).join(', ')||'无登记');
  detail.append(dl);
  const upstream=node('a','查看审定上游入口（不含本地素材或演示链接）');
  upstream.href=item.upstreamUrl; upstream.target='_blank'; upstream.rel='noopener noreferrer';
  const disabled=node('button','源码阅读已禁用：公开目录不提供源码、截图或 Demo');
  disabled.type='button'; disabled.disabled=true;
  detail.append(upstream,node('p','未知及 Pro 仅作目录参考；实现与交互推测未验证。快照登记不证明恢复成功。'),disabled);
}
function search() {
  try {
    const query={query:$('query').value,category:$('category').value,sourceId:$('source').value};
    for(const key of ['tag','dependency','framework','language','styling','assetKind','licenseStatus','availability']) {
      if($(key).value) query[key]=['framework','language','styling'].includes(key)?JSON.parse($(key).value):$(key).value;
    }
    const matches=searchPublicCatalog(catalog,query);
    $('list').replaceChildren();
    for(const item of matches) {
      const button=node('button',`${item.assetKind==='reference'?'审美/交互参考':'源码登记'} · ${item.name} (${item.sourceId}) · ${item.category} · ${item.licenseStatus} · ${item.availability}`);
      button.type='button'; button.setAttribute('aria-current',String(selected===item.id));
      button.addEventListener('click',()=>{
        for(const other of $('list').children) other.setAttribute('aria-current',String(other===button));
        renderDetail(item);
      });
      $('list').append(button);
    }
    status.textContent=`${matches.length} 条公开登记（非可恢复数量）；源码阅读已禁用。`;
    const current=matches.find(item=>item.id===selected);
    if(current)renderDetail(current);else {selected=undefined;$('detail').replaceChildren(node('h2',matches.length?'选择组件查看公开登记信息':'没有匹配的组件'));}
  } catch(error) {
    selected=undefined; $('list').replaceChildren(); $('detail').replaceChildren(node('p','搜索失败，不保留旧结果。'));
    status.textContent=`读取失败：${error.message}`;
  }
}
function options(id,values,encode=value=>value) {
  for(const value of [...new Set(values)].sort()) $(id).append(new Option(value,encode(value)));
}
async function init() {
  try {
    const response=await fetch(new URL('./catalog.json',import.meta.url));
    if(!response.ok)throw new Error('公开目录请求失败');
    catalog=validatePublicCatalog(await response.json());
    options('category',catalog.components.map(x=>x.category));
    options('tag',catalog.components.flatMap(x=>x.tags));
    options('dependency',catalog.components.flatMap(x=>Object.keys(x.dependencies)));
    for(const [id,key] of [['framework','frameworks'],['language','languages'],['styling','styling']])options(id,catalog.components.flatMap(x=>x.techStack?.[key]??[]),JSON.stringify);
    for(const source of catalog.sources)$('source').append(new Option(`${source.name} (${source.id})`,source.id));
    $('filters').addEventListener('submit',event=>{event.preventDefault();search();}); search();
  } catch(error) {status.textContent=`公开目录不可用：${error.message}；修复后刷新。`;}
}
init();
