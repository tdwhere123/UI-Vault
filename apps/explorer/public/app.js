const $ = id => document.getElementById(id);
const status = $('status');
let catalog;
let selected;
let searchSequence = 0;
let sourceSequence = 0;
const node = (tag, text) => { const item = document.createElement(tag); if (text !== undefined) item.textContent = text; return item; };
async function json(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error((await response.json()).error || '读取失败');
  return response.json();
}
function field(dl, name, value) { dl.append(node('dt', name), node('dd', value)); }
function renderDetail(component) {
  selected = component.id;
  sourceSequence++;
  const detail = $('detail');
  detail.replaceChildren(node('h2', component.name), node('strong', component.assetKind === 'reference' ? '审美/交互参考 · 不含可导出源码' : '源码登记'));
  const dl = node('dl');
  const source = catalog.sources.find(item => item.id === component.sourceId);
  field(dl, '来源', source?.name || component.sourceId);
  field(dl, '分类 / 标签', [component.category, ...component.tags].join(' · '));
  field(dl, '固定版本', component.upstreamCommit ?? '参考记录，无源码版本');
  field(dl, '许可登记', component.license.status);
  field(dl, '许可证据', component.license.evidencePath ?? '未提供');
  field(dl, 'NOTICE', component.license.noticePaths.join(', ') || '无登记');
  field(dl, '快照目录', component.snapshotPath ?? '仅登记，无快照');
  field(dl, '固定依赖', Object.entries(component.dependencies).map(([name, version]) => `${name}@${version}`).join(', ') || '无登记');
  detail.append(dl);
  const link = node('a', '查看上游来源');
  link.href = component.upstreamUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
  detail.append(link, node('h3', '限制与闭包说明'));
  const limits = node('ul');
  for (const text of component.limitations) limits.append(node('li', text));
  if (!component.limitations.length) limits.append(node('li', '未登记限制；不代表已经验证完整闭包。'));
  detail.append(limits);
  if (component.assetKind === 'reference') { renderReference(detail, component); return; }
  renderSource(detail, component);
}
function renderReference(detail, component) {
  const dl = node('dl');
  field(dl, '实现说明性质', component.isInference ? '推测，未经内部实现验证' : '来源已明确说明；不代表已取得源码');
  field(dl, '交互流程', component.interactionFlow.join(' → '));
  for (const [key, label] of [['layout', '布局'], ['colors', '配色'], ['typography', '字体'], ['motion', '动效']]) field(dl, label, component.visualNotes[key]);
  field(dl, '适用场景', component.useCases.join('；'));
  field(dl, '实现说明', component.implementationNotes);
  field(dl, '本地素材登记', component.localAssetPaths?.join(', ') || '无登记');
  detail.append(node('h3', '审美/交互参考'), dl);
  for (const [label, urls] of [['公开展示', [component.publicUrl]], ['截图出处', component.screenshotUrls ?? []], ['演示出处', component.demoUrls ?? []]]) {
    for (const url of urls) {
      const link = node('a', `${label}：${url}`);
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      detail.append(node('p'), link);
    }
  }
}
function renderSource(detail, component) {
  detail.append(node('h3', '源码（纯文本）'));
  if (!component.files.length) { detail.append(node('p', '无快照文件，仅展示登记信息。')); return; }
  const label = node('label', '选择快照文件');
  const files = node('select'); files.id = 'files';
  files.append(new Option('请选择文件', ''));
  for (const file of component.files) files.append(new Option(`${file.path} (${file.size} bytes)`, file.path));
  label.append(files);
  const info = node('p'); const pre = node('pre', '选择文件后读取已校验的本地源码。');
  pre.setAttribute('aria-live', 'polite');
  files.addEventListener('change', async () => {
    const sequence = ++sourceSequence;
    if (!files.value) { info.textContent = ''; pre.textContent = '请选择文件。'; return; }
    const file = component.files.find(item => item.path === files.value);
    info.textContent = `SHA256 ${file.sha256}`; pre.textContent = '读取中…';
    try {
      const result = await json(`/api/source?id=${encodeURIComponent(component.id)}&path=${encodeURIComponent(file.path)}`);
      if (sequence === sourceSequence) pre.textContent = result.text;
    } catch (error) { if (sequence === sourceSequence) pre.textContent = `读取失败：${error.message}`; }
  });
  detail.append(label, info, pre);
}
async function search() {
  const sequence = ++searchSequence;
  status.textContent = '搜索中…';
  try {
    const params = new URLSearchParams({ query: $('query').value, category: $('category').value, sourceId: $('source').value });
    const components = await json(`/api/components?${params}`);
    if (sequence !== searchSequence) return;
    $('list').replaceChildren();
    for (const component of components) {
      const button = node('button', `${component.assetKind === 'reference' ? '审美/交互参考' : '源码登记'} · ${component.name} · ${component.category} · ${component.license.status}`);
      button.type = 'button'; button.setAttribute('aria-current', String(component.id === selected));
      button.addEventListener('click', () => {
        for (const sibling of $('list').children) sibling.setAttribute('aria-current', String(sibling === button));
        renderDetail(component);
      });
      $('list').append(button);
    }
    status.textContent = `${components.length} 条登记（非可恢复数量）；源码不执行。`;
    const current = components.find(item => item.id === selected);
    if (current) renderDetail(current);
    else {
      sourceSequence++; selected = undefined;
      $('detail').replaceChildren(node('h2', components.length ? '选择组件查看登记信息与源码' : '没有匹配的组件'));
    }
  } catch (error) {
    if (sequence !== searchSequence) return;
    sourceSequence++; selected = undefined; $('list').replaceChildren();
    $('detail').replaceChildren(node('p', '搜索失败，请重试；不保留旧结果。'));
    status.textContent = `读取失败：${error.message}`;
  }
}
$('filters').addEventListener('submit', event => { event.preventDefault(); search(); });
async function init() {
  try {
    catalog = await json('/api/catalog');
    for (const category of [...new Set(catalog.components.map(item => item.category))].sort()) $('category').append(new Option(category, category));
    for (const source of catalog.sources) $('source').append(new Option(source.name, source.id));
    await search();
  } catch (error) { status.textContent = `catalog 不可用：${error.message}；修复后刷新页面。`; }
}
init();
