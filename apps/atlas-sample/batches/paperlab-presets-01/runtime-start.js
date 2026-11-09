/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-reconciler-constants.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
* @license React
* react-reconciler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-reconciler.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */
(function(){
let stopped=false,failed=false,teardown=()=>{},own=[];const timers=new Map(),frames=new Map(),intervals=new Map();let serial=1,paused=document.hidden;
const proto=EventTarget.prototype,add=proto.addEventListener,remove=proto.removeEventListener;
const set=window.setTimeout.bind(window),clear=window.clearTimeout.bind(window),raf=window.requestAnimationFrame.bind(window),caf=window.cancelAnimationFrame.bind(window);
const mediaRestore=new Set(),observers=new Set(),originalObservers={};const originalMatchMedia=window.matchMedia;
const nativeInterval=window.setInterval,nativeClearInterval=window.clearInterval;
const basePointer=document.body.style.pointerEvents,baseOverflow=document.body.style.overflow;
function registerCleanup(fn){teardown=fn}
function trackedAdd(type,fn,options){if(!fn)return add.call(this,type,fn,options);const capture=typeof options==='boolean'?options:!!options?.capture;if(!own.some(x=>x.target===this&&x.type===type&&x.fn===fn&&x.capture===capture))own.push({target:this,type,fn,options,capture});return add.call(this,type,fn,options)}
function trackedRemove(type,fn,options){const capture=typeof options==='boolean'?options:!!options?.capture;own=own.filter(x=>!(x.target===this&&x.type===type&&x.fn===fn&&x.capture===capture));return remove.call(this,type,fn,options)}
function cancelTasks(){intervals.clear();for(const task of timers.values())clear(task.handle);timers.clear();for(const task of frames.values())caf(task.handle);frames.clear()}
function release(){delete window.__paperLifecycle;delete window.__paperTest;cancelTasks();for(const restore of mediaRestore)restore();mediaRestore.clear();window.matchMedia=originalMatchMedia;for(const observer of observers)observer.disconnect();for(const name in originalObservers)window[name]=originalObservers[name];for(const x of own.splice(0))remove.call(x.target,x.type,x.fn,x.options);proto.addEventListener=add;proto.removeEventListener=remove;window.setInterval=nativeInterval;window.clearInterval=nativeClearInterval;window.setTimeout=set;window.clearTimeout=clear;window.requestAnimationFrame=raf;window.cancelAnimationFrame=caf;document.body.style.pointerEvents=basePointer;document.body.style.overflow=baseOverflow;document.querySelectorAll('[data-radix-focus-guard]').forEach(n=>n.remove());}
function exit(){if(stopped)return;stopped=true;try{teardown()}catch{}queueMicrotask(release)}
function fatal(error){if(stopped||failed)return;console.error("Paperlab preview error",error);failed=true;delete window.__paperLifecycle;exit();queueMicrotask(()=>{try{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='代码预览不可用或已停止。请关闭后重新打开；没有显示替代效果。';document.body.append(p)}catch{}})}
try{
for(const name of ['ResizeObserver','IntersectionObserver','MutationObserver']){const Original=window[name];if(!Original)continue;originalObservers[name]=Original;window[name]=class extends Original{constructor(...args){super(...args);observers.add(this)}disconnect(){super.disconnect();observers.delete(this)}}}
window.matchMedia=function(...args){const m=originalMatchMedia.apply(window,args);if(m.addListener&&m.removeListener){const a=m.addListener,r=m.removeListener,callbacks=new Set();const restore=()=>{for(const fn of callbacks)r.call(m,fn);m.addListener=a;m.removeListener=r};m.addListener=function(fn){callbacks.add(fn);mediaRestore.add(restore);return a.call(m,fn)};m.removeListener=function(fn){callbacks.delete(fn);if(!callbacks.size)mediaRestore.delete(restore);return r.call(m,fn)}}return m};
proto.addEventListener=trackedAdd;proto.removeEventListener=trackedRemove;
function scheduleTimer(id,task){const gen=task.gen=(task.gen||0)+1;task.started=performance.now();task.handle=set(()=>{if(timers.get(id)!==task||task.gen!==gen)return;timers.delete(id);if(stopped||paused)return;try{task.fn(...task.args)}catch(e){fatal(e)}},task.remaining)}
function scheduleFrame(id,task){const gen=task.gen=(task.gen||0)+1;task.handle=raf(time=>{if(frames.get(id)!==task||task.gen!==gen)return;frames.delete(id);if(stopped||paused)return;try{task.fn(time)}catch(e){fatal(e)}})}
window.setTimeout=(fn,ms=0,...args)=>{if(stopped)return 0;const id=serial++,task={fn,args,remaining:ms,handle:0,started:0};timers.set(id,task);if(!paused)scheduleTimer(id,task);return id};window.clearTimeout=id=>{const task=timers.get(id);if(task)clear(task.handle);timers.delete(id)};
window.requestAnimationFrame=fn=>{if(stopped)return 0;const id=serial++,task={fn,handle:0};frames.set(id,task);if(!paused)scheduleFrame(id,task);return id};window.cancelAnimationFrame=id=>{const task=frames.get(id);if(task)caf(task.handle);frames.delete(id)};
function pauseTasks(){if(paused)return;paused=true;for(const task of timers.values()){clear(task.handle);task.remaining=Math.max(0,task.remaining-(performance.now()-task.started))}for(const task of frames.values())caf(task.handle)}
function resumeTasks(){if(!paused||stopped)return;paused=false;for(const [id,task] of timers)scheduleTimer(id,task);for(const [id,task] of frames)scheduleFrame(id,task)}
window.setInterval=(fn,ms=0,...args)=>{if(stopped)return 0;const id=serial++;const tick=()=>{if(!intervals.has(id)||stopped)return;try{fn(...args)}catch(e){fatal(e);return}if(intervals.has(id))intervals.set(id,window.setTimeout(tick,ms))};intervals.set(id,window.setTimeout(tick,ms));return id};window.clearInterval=id=>{const handle=intervals.get(id);if(handle!==undefined)window.clearTimeout(handle);intervals.delete(id)};
window.addEventListener('pagehide',exit);window.addEventListener('atlas:dispose',exit);window.addEventListener('error',e=>{e.preventDefault();fatal(e.error)});window.addEventListener('unhandledrejection',e=>{e.preventDefault();fatal(e.reason)});
const retiredNodeObserver=new MutationObserver(()=>{if(stopped)return;const retired=own.filter(x=>x.target instanceof Node&&!x.target.isConnected);for(const x of retired)remove.call(x.target,x.type,x.fn,x.options);own=own.filter(x=>!retired.includes(x))});retiredNodeObserver.observe(document.body,{childList:true,subtree:true});
window.__paperLifecycle={registerCleanup,fatal,pauseTasks,resumeTasks};
}catch(e){fatal(e)}})();
