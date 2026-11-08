const $ = id => document.getElementById(id);
const PAGE_SIZE = 18;
let items = [], page = 1, returnFocus;
const dialog = $('preview-dialog');
function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = String(text);
  if (className) node.className = className;
  return node;
}
function safeURL(value, localOnly = false) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, location.href);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (localOnly && (url.origin !== location.origin || !url.pathname.startsWith(new URL('.', location.href).pathname))) return null;
    return url.href;
  } catch { return null; }
}
function link(label, value, download = false) {
  const href = safeURL(value);
  if (!href) return null;
  const a = el('a', label); a.href = href;
  if (download) a.setAttribute('download', '');
  else { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  return a;
}
function appendLink(parent, label, value, download) { const a = link(label, value, download); if (a) parent.append(a); }
function closePreview() {
  $('candidate-preview-stage').replaceChildren();
  document.body.style.overflow = '';
  if (returnFocus?.isConnected) returnFocus.focus();
}
function openPreview(item, trigger) {
  const href = safeURL(item.preview, true); if (!href) return;
  returnFocus = trigger;
  $('preview-title').textContent = item.title;
  const frame = document.createElement('iframe');
  frame.title = `${item.title} · 待验收预览`;
  frame.setAttribute('sandbox', 'allow-scripts');
  frame.setAttribute('referrerpolicy', 'no-referrer');
  frame.src = href;
  $('candidate-preview-stage').replaceChildren(frame);
  dialog.showModal(); document.body.style.overflow = 'hidden';
}
dialog.addEventListener('close', closePreview);
$('close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  }
});
window.addEventListener('pagehide', closePreview);
function card(item, index) {
  const article = el('article', undefined, 'candidate-card'); article.id = item.id;
  const top = el('div', undefined, 'candidate-topline');
  top.append(el('span', `No. ${String(index + 1).padStart(3, '0')}`), el('span', '待验收', 'candidate-status'));
  article.append(top, el('h2', item.title || item.id), el('p', `${item.source || '来源待补充'} · ${item.license || '许可见清单'}`, 'candidate-source'));
  if (item.description) article.append(el('p', item.description, 'candidate-description'));
  const links = el('div', undefined, 'candidate-links');
  if (safeURL(item.preview, true)) {
    const button = el('button', '试用预览 ↗'); button.type = 'button';
    button.addEventListener('click', () => openPreview(item, button)); links.append(button);
  }
  appendLink(links, '上游演示 ↗', item.website);
  appendLink(links, '源码 ZIP ↓', item.archive, true);
  appendLink(links, '原始出处 ↗', item.upstream);
  article.append(links);
  const details = el('details'); details.append(el('summary', '构建状态与已知缺口'));
  details.append(el('p', item.buildStatus || '尚未完成构建与交互验收。'));
  if (Array.isArray(item.gaps) && item.gaps.length) {
    const list = el('ul'); for (const gap of item.gaps) if (typeof gap === 'string') list.append(el('li', gap)); details.append(list);
  }
  appendLink(details, '查看完整来源清单 ↗', item.manifest);
  article.append(details); return article;
}
function filteredItems() {
  const q = $('candidate-search').value.trim().toLocaleLowerCase();
  const source = $('candidate-source').value;
  return items.filter(item => (!source || source === item.source) && (!$('has-preview').checked || safeURL(item.preview, true)) && (!q || [item.id, item.title, item.source, item.description].filter(Boolean).join(' ').toLocaleLowerCase().includes(q)));
}
function render() {
  const filtered = filteredItems(), pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  page = Math.max(1, Math.min(page, pages));
  $('candidate-grid').replaceChildren(...filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(item => card(item, items.indexOf(item))));
  $('result-count').textContent = `${filtered.length} 项新收录 · 尚未完成验收`;
  $('candidate-empty').hidden = filtered.length > 0;
  $('candidate-pagination').hidden = pages <= 1;
  $('previous').disabled = page === 1; $('next').disabled = page === pages;
  $('page-number').textContent = `${page} / ${pages}`;
}
function reset() { $('candidate-search').value = ''; $('candidate-source').value = ''; $('has-preview').checked = false; page = 1; render(); }
let debounce;
$('candidate-search').addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(() => { page = 1; render(); }, 150); });
for (const id of ['candidate-source', 'has-preview']) $(id).addEventListener('change', () => { page = 1; render(); });
$('candidate-clear').addEventListener('click', reset);
for (const [id, delta] of [['previous', -1], ['next', 1]]) $(id).addEventListener('click', () => { page += delta; render(); $('candidate-search').scrollIntoView({ block: 'start' }); });
try {
  const response = await fetch('candidate-catalog.json');
  if (!response.ok) throw Error(`HTTP ${response.status}`);
  const data = await response.json(); items = Array.isArray(data) ? data : data.items;
  if (!Array.isArray(items)) throw Error('Invalid candidate catalog');
  $('total').textContent = items.length; $('nav-count').textContent = items.length;
  for (const source of [...new Set(items.map(item => item.source).filter(Boolean))].sort()) { const option = el('option', source); option.value = source; $('candidate-source').append(option); }
  render();
} catch (error) {
  $('result-count').textContent = '收录清单暂时未加载成功，请刷新重试。';
  console.error('Candidate catalog could not load:', error);
}
