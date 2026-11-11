import {parsePageJump, detailHash} from './atlas-model.mjs';
import {localizeItem} from './display-names.mjs';
import {collectionAccountingFrom, formatCollectionAccountingStatus} from './collection-accounting.mjs';
const $ = id => document.getElementById(id);
const PAGE_SIZE = 18;
let items = [], page = 1, pageCount = 1, disposed = false, loaded = false, loadGeneration = 0, loadController;
function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = String(text);
  if (className) node.className = className;
  return node;
}
function safeURL(value, localOnly = false) {
  if (typeof value !== 'string' || !value.trim() || /[\u0000-\u001f\u007f]/.test(value)) return null;
  try {
    const url = new URL(value, location.href);
    if (url.username || url.password || !['http:', 'https:'].includes(url.protocol)) return null;
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
function hasPreview(item) { return typeof item.id === 'string' && item.id.length > 0 && Boolean(safeURL(item.preview, true)); }
const genericGaps = new Set(['未做浏览器视觉、完整键盘/触控验收。', '未完成真实浏览器视觉与交互复验。', '未进行浏览器视觉及完整键盘/触屏验收。', 'No completed browser interaction QA']);
function card(item, index) {
  const article = el('article', undefined, 'candidate-card'); article.id = item.id;
  const top = el('div', undefined, 'candidate-topline');
  top.append(el('span', `No. ${String(index + 1).padStart(3, '0')}`), el('span', hasPreview(item) ? '已接入预览' : '仅来源', 'candidate-status'));
  article.append(top, el('h2', item.title || item.id), el('p', `${item.source || '来源待补充'} · ${item.license || '许可见清单'}`, 'candidate-source'));
  if (item.description) article.append(el('p', item.description, 'candidate-description'));
  const links = el('div', undefined, 'candidate-links');
  if (hasPreview(item)) {
    const a = el('a', '在主图鉴查看 →'); a.className = 'candidate-open';
    a.setAttribute('href', 'index.html' + detailHash(item.id)); links.append(a);
  }
  appendLink(links, '上游演示 ↗', item.website);
  appendLink(links, '源码 ZIP ↓', item.archive, true);
  appendLink(links, '原始出处 ↗', item.upstream);
  article.append(links);
  const details = el('details'); details.append(el('summary', '构建状态与已知缺口'));
  if (item.buildStatus) details.append(el('p', item.buildStatus));
  if (Array.isArray(item.gaps) && item.gaps.length) {
    const list = el('ul'); for (const gap of item.gaps) if (typeof gap === 'string' && !genericGaps.has(gap)) list.append(el('li', gap)); details.append(list);
  }
  appendLink(details, '查看完整来源清单 ↗', item.manifest);
  article.append(details); return article;
}
function filteredItems() {
  const q = $('candidate-search').value.trim().toLocaleLowerCase();
  const source = $('candidate-source').value;
  return items.filter(item => (!source || source === item.source) && (!$('has-preview').checked || hasPreview(item)) && (!q || [item.id, item.title, item.source, item.description, item.keywords].filter(Boolean).join(' ').toLocaleLowerCase().includes(q)));
}
function render() {
  if (disposed) return;
  const filtered = filteredItems(), pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  pageCount = pages; page = Math.max(1, Math.min(page, pages));
  $('page-jump').value = String(page); $('page-jump').max = String(pages);
  $('page-jump').removeAttribute('aria-invalid'); $('page-jump-error').textContent = '';
  $('candidate-grid').replaceChildren(...filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(item => card(item, items.indexOf(item))));
  $('result-count').textContent = `${filtered.length} 项匹配 · ${filtered.filter(hasPreview).length} 项已接入预览 · ${filtered.filter(item => !hasPreview(item)).length} 项仅来源`;
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
$('page-jump-form').addEventListener('submit', event => {
  event.preventDefault(); const next = parsePageJump($('page-jump').value, pageCount);
  if (next === null) { $('page-jump-error').textContent = `请输入 1–${pageCount} 的整数页码`; $('page-jump').setAttribute('aria-invalid', 'true'); $('page-jump').focus(); return; }
  page = next; render(); $('candidate-search').scrollIntoView({block:'start'});
});
window.addEventListener('pagehide', () => { disposed = true; clearTimeout(debounce); loadGeneration++; loadController?.abort(); loadController = null; });
window.addEventListener('pageshow', () => {
  if (!disposed) return;
  disposed = false;
  if (loaded) render(); else load();
});
async function load() {
 const generation = ++loadGeneration; loadController?.abort();
 const controller = new AbortController(); loadController = controller;
 const current = () => !disposed && generation === loadGeneration;
 try {
  const response = await fetch('candidate-catalog.json', {signal:controller.signal});
  if (!response.ok) throw Error(`HTTP ${response.status}`);
  const data = await response.json(); const records = Array.isArray(data) ? data : data?.items;
  if (!Array.isArray(records)) throw Error('Invalid candidate catalog');
  if (!current()) return;
  items = records.filter(item => item && typeof item === 'object').map(localizeItem);
  $('inventory-counts').textContent = `${items.length} 项扩展来源记录 · ${items.filter(hasPreview).length} 项已接入预览 · ${items.filter(item => !hasPreview(item)).length} 项仅来源（以上为目录记录数，不是新原件身份上限）`;
  try {
    const ledgerResponse = await fetch('COLLECTION-LEDGER.json', {signal:controller.signal});
    if (ledgerResponse.ok) {
      const ledger = await ledgerResponse.json();
      const acc = collectionAccountingFrom(items, ledger);
      const accounting = $('collection-accounting');
      if (accounting) accounting.textContent = formatCollectionAccountingStatus(acc);
    }
  } catch (ledgerError) {
    if (!current()) return;
    const accounting = $('collection-accounting');
    if (accounting) accounting.textContent = '本线分账未能读取。';
  }
  $('total').textContent = items.length; $('nav-count').textContent = items.length;
  $('candidate-source').replaceChildren(el('option', '全部来源')); $('candidate-source').firstChild.value = '';
  for (const source of [...new Set(items.map(item => item.source).filter(Boolean))].sort()) { const option = el('option', source); option.value = source; $('candidate-source').append(option); }
  loaded = true; render();
 } catch (error) {
  if (!current()) return;
  if (!disposed) $('result-count').textContent = '来源与接入清单暂时未加载成功，请刷新重试。';
  console.error('Candidate catalog could not load:', error);
 } finally { if (loadController === controller) loadController = null; }
}
await load();
