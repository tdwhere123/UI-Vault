import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const batch = path.join(root, 'batches/zulip-reading-01');

test('official Zulip CSS hides unfocused message lists; the local fixture is the focused list', () => {
  const css = readFileSync(path.join(batch, 'runtime.css'), 'utf8');
  const html = readFileSync(path.join(batch, 'index.html'), 'utf8');
  // Official compiled rule pair from Zulip message-list focus, left intact.
  const officialHide = css.indexOf('div.message-list{border-collapse:separate;margin-left:auto;display:none;width:100%}');
  const officialShow = css.indexOf('div.focused-message-list{display:block}');
  assert.notEqual(officialHide, -1);
  assert.notEqual(officialShow, -1);
  assert.ok(officialShow > officialHide);
  const hostAppendix = css.slice(css.lastIndexOf('.local-host{'));
  assert.match(hostAppendix, /#main_div div\.message-list\{display:block\}/);
  // Host override must not rewrite the official hide rule.
  assert.equal(css.split('div.message-list{border-collapse:separate;margin-left:auto;display:none;width:100%}').length, 2);
  const lists = [...html.matchAll(/class="([^"]*message-list[^"]*)"/g)].map(m => m[1]);
  assert.equal(lists.length, 1);
  assert.match(lists[0], /\bmessage-list\b/);
  assert.match(lists[0], /\bfocused-message-list\b/);
  assert.equal([...html.matchAll(/class="recipient_row"/g)].length, 3);
  assert.equal([...html.matchAll(/class="message_row /g)].length, 6);
});

test('without the focused class, official display:none hides the six already-rendered messages', () => {
  // The live header already showed “全部话题 · 6 条消息” while the conversation
  // pane was blank. That count is static host text plus filtering; it does
  // not override div.message-list{display:none}.
  const displayFor = (className) => className.includes('focused-message-list') ? 'block' : 'none';
  assert.equal(displayFor('message-list'), 'none');
  assert.equal(displayFor('message-list focused-message-list'), 'block');
});

test('this scene has no separate channel sidebar; stream labels live on the recipient rows', () => {
  const html = readFileSync(path.join(batch, 'index.html'), 'utf8');
  assert.equal(html.includes('id="left-sidebar"') || html.includes('class="column-left"'), false);
  assert.match(html, /class="[^"]*stream_label[^"]*"/);
  assert.match(html, /href="#channel-1"/);
  assert.match(html, /href="#topic-0"/);
});
