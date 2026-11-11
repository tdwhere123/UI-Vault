import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const runtimePath = path.join(root, 'batches/jsoncrack-extension-01/runtime.js');
const sourcePath = path.join(root, 'batches/jsoncrack-extension-01/SOURCE.json');

function hostFrom(runtime) {
  const marker = 'var life=window.__jsonLifetime';
  const index = runtime.lastIndexOf(marker);
  assert.notEqual(index, -1);
  return runtime.slice(index);
}

function chromeStatusSandbox() {
  const element = {
    id: 'status',
    textContent: '',
    attrs: {},
    removed: false,
    removeAttribute() { this.removed = true; },
    setAttribute(name, value) { this.attrs[name] = value; }
  };
  const sandbox = {
    document: {getElementById(id) { return id === 'status' ? element : null; }},
    result: null
  };
  Object.defineProperty(sandbox, 'status', {
    get() { return sandbox._status ?? ''; },
    set(value) { sandbox._status = String(value); },
    configurable: true,
    enumerable: true
  });
  sandbox.element = element;
  return sandbox;
}

test('Chrome window.status accessor drops a var status element binding', () => {
  const sandbox = chromeStatusSandbox();
  runInNewContext(`var status=document.getElementById("status");
    result={type:typeof status,canSet:typeof (status&&status.setAttribute)};`, sandbox);
  assert.equal(sandbox.result.canSet, 'undefined');
  assert.notEqual(typeof sandbox.element.setAttribute, 'undefined');
});

test('jsoncrack host keeps the #status node when window.status is a string accessor', () => {
  const host = hostFrom(readFileSync(runtimePath, 'utf8'));
  assert.match(host, /var statusEl=document\.getElementById\("status"\)/);
  assert.doesNotMatch(host, /var status=document\.getElementById\("status"\)/);
  const source = JSON.parse(readFileSync(sourcePath, 'utf8')).localHostSource;
  assert.match(source, /statusEl=document\.getElementById\('status'\)/);
  assert.doesNotMatch(source, /status=document\.getElementById\('status'\)/);

  const sandbox = chromeStatusSandbox();
  runInNewContext(`var statusEl=document.getElementById("status");
    statusEl.removeAttribute("role");
    statusEl.textContent="Local Raw/Graph viewer. No extension access or cloud requests.";
    statusEl.setAttribute("role","status");
    result={text:statusEl.textContent,removed:statusEl.removed,role:statusEl.attrs.role,canSet:typeof statusEl.setAttribute};`, sandbox);
  assert.equal(sandbox.result.canSet, 'function');
  assert.equal(sandbox.result.text, 'Local Raw/Graph viewer. No extension access or cloud requests.');
  assert.equal(sandbox.result.removed, true);
  assert.equal(sandbox.result.role, 'status');
});

test('host apply success and error paths use the element, not window.status', () => {
  const sandbox = chromeStatusSandbox();
  sandbox.dead = false;
  sandbox.scene = {dispose() { this.disposed = true; }};
  sandbox.injectToggle = () => ({dispose() {}});
  sandbox.JSON = JSON;
  sandbox.Error = Error;
  runInNewContext(`
    var statusEl=document.getElementById("status");
    var input={value:JSON.stringify({ok:true})};
    var dead=false, scene=null;
    function apply(){
      if(dead)return;
      try{
        if(input.value.length>3e4)throw Error("30,000 character limit");
        const value=JSON.parse(input.value);
        scene=injectToggle(JSON.stringify(value));
        statusEl.removeAttribute("role");
        statusEl.textContent="Local Raw/Graph viewer. No extension access or cloud requests.";
      }catch(e){
        statusEl.textContent=String(e.message);
        statusEl.setAttribute("role","alert");
      }
    }
    apply();
    result={okText:statusEl.textContent,okRemoved:statusEl.removed};
    input.value="{";
    apply();
    result.errText=statusEl.textContent;
    result.errRole=statusEl.attrs.role;
  `, sandbox);
  assert.equal(sandbox.result.okText, 'Local Raw/Graph viewer. No extension access or cloud requests.');
  assert.equal(sandbox.result.okRemoved, true);
  assert.notEqual(sandbox.result.errText, sandbox.result.okText);
  assert.match(String(sandbox.result.errText), /JSON/i);
  assert.equal(sandbox.result.errRole, 'alert');
});
