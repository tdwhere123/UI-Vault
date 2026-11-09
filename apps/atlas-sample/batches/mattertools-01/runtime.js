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
function release(){cancelTasks();for(const restore of mediaRestore)restore();mediaRestore.clear();window.matchMedia=originalMatchMedia;for(const observer of observers)observer.disconnect();for(const name in originalObservers)window[name]=originalObservers[name];for(const x of own.splice(0))remove.call(x.target,x.type,x.fn,x.options);proto.addEventListener=add;proto.removeEventListener=remove;window.setInterval=nativeInterval;window.clearInterval=nativeClearInterval;window.setTimeout=set;window.clearTimeout=clear;window.requestAnimationFrame=raf;window.cancelAnimationFrame=caf;document.body.style.pointerEvents=basePointer;document.body.style.overflow=baseOverflow;document.querySelectorAll('[data-radix-focus-guard]').forEach(n=>n.remove());}
function exit(){if(stopped)return;stopped=true;try{teardown()}catch{}queueMicrotask(release)}
function fatal(error){if(failed)return;console.error("MatterTools preview error",error);failed=true;exit();queueMicrotask(()=>{try{const p=document.createElement('p');p.setAttribute('role','alert');p.textContent='图形预览不可用或已停止。请关闭后重新打开；没有显示替代效果。';document.body.append(p)}catch{}})}
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
/* MODULE_START */

(()=>{var mi=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(A,z)=>(typeof require<"u"?require:A)[z]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')});var ot=(i,A)=>()=>(A||i((A={exports:{}}).exports,A),A.exports);var sr=ot((Ar,Sn)=>{(function(A,z){typeof Ar=="object"&&typeof Sn=="object"?Sn.exports=z((function(){try{return mi("poly-decomp")}catch{}})()):typeof define=="function"&&define.amd?define("Matter",["poly-decomp"],z):typeof Ar=="object"?Ar.Matter=z((function(){try{return mi("poly-decomp")}catch{}})()):A.Matter=z(A.decomp)})(Ar,function(i){return(function(A){var z={};function b(l){if(z[l])return z[l].exports;var p=z[l]={i:l,l:!1,exports:{}};return A[l].call(p.exports,p,p.exports,b),p.l=!0,p.exports}return b.m=A,b.c=z,b.d=function(l,p,y){b.o(l,p)||Object.defineProperty(l,p,{enumerable:!0,get:y})},b.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},b.t=function(l,p){if(p&1&&(l=b(l)),p&8||p&4&&typeof l=="object"&&l&&l.__esModule)return l;var y=Object.create(null);if(b.r(y),Object.defineProperty(y,"default",{enumerable:!0,value:l}),p&2&&typeof l!="string")for(var _ in l)b.d(y,_,function(O){return l[O]}.bind(null,_));return y},b.n=function(l){var p=l&&l.__esModule?function(){return l.default}:function(){return l};return b.d(p,"a",p),p},b.o=function(l,p){return Object.prototype.hasOwnProperty.call(l,p)},b.p="",b(b.s=24)})([(function(A,z){var b={};A.exports=b,(function(){b._nextId=0,b._seed=0,b._nowStartTime=+new Date,b.extend=function(p,y){var _,O,k;typeof y=="boolean"?(_=2,k=y):(_=1,k=!0);for(var T=_;T<arguments.length;T++){var w=arguments[T];if(w)for(var j in w)k&&w[j]&&w[j].constructor===Object&&(!p[j]||p[j].constructor===Object)?(p[j]=p[j]||{},b.extend(p[j],k,w[j])):p[j]=w[j]}return p},b.clone=function(p,y){return b.extend({},y,p)},b.keys=function(p){if(Object.keys)return Object.keys(p);var y=[];for(var _ in p)y.push(_);return y},b.values=function(p){var y=[];if(Object.keys){for(var _=Object.keys(p),O=0;O<_.length;O++)y.push(p[_[O]]);return y}for(var k in p)y.push(p[k]);return y},b.get=function(p,y,_,O){y=y.split(".").slice(_,O);for(var k=0;k<y.length;k+=1)p=p[y[k]];return p},b.set=function(p,y,_,O,k){var T=y.split(".").slice(O,k);return b.get(p,y,0,-1)[T[T.length-1]]=_,_},b.shuffle=function(p){for(var y=p.length-1;y>0;y--){var _=Math.floor(b.random()*(y+1)),O=p[y];p[y]=p[_],p[_]=O}return p},b.choose=function(p){return p[Math.floor(b.random()*p.length)]},b.isElement=function(p){return typeof HTMLElement<"u"?p instanceof HTMLElement:!!(p&&p.nodeType&&p.nodeName)},b.isArray=function(p){return Object.prototype.toString.call(p)==="[object Array]"},b.isFunction=function(p){return typeof p=="function"},b.isPlainObject=function(p){return typeof p=="object"&&p.constructor===Object},b.isString=function(p){return toString.call(p)==="[object String]"},b.clamp=function(p,y,_){return p<y?y:p>_?_:p},b.sign=function(p){return p<0?-1:1},b.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return new Date-b._nowStartTime},b.random=function(p,y){return p=typeof p<"u"?p:0,y=typeof y<"u"?y:1,p+l()*(y-p)};var l=function(){return b._seed=(b._seed*9301+49297)%233280,b._seed/233280};b.colorToNumber=function(p){return p=p.replace("#",""),p.length==3&&(p=p.charAt(0)+p.charAt(0)+p.charAt(1)+p.charAt(1)+p.charAt(2)+p.charAt(2)),parseInt(p,16)},b.logLevel=1,b.log=function(){console&&b.logLevel>0&&b.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},b.info=function(){console&&b.logLevel>0&&b.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},b.warn=function(){console&&b.logLevel>0&&b.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},b.nextId=function(){return b._nextId++},b.indexOf=function(p,y){if(p.indexOf)return p.indexOf(y);for(var _=0;_<p.length;_++)if(p[_]===y)return _;return-1},b.map=function(p,y){if(p.map)return p.map(y);for(var _=[],O=0;O<p.length;O+=1)_.push(y(p[O]));return _},b.topologicalSort=function(p){var y=[],_=[],O=[];for(var k in p)!_[k]&&!O[k]&&b._topologicalSort(k,_,O,p,y);return y},b._topologicalSort=function(p,y,_,O,k){var T=O[p]||[];_[p]=!0;for(var w=0;w<T.length;w+=1){var j=T[w];_[j]||y[j]||b._topologicalSort(j,y,_,O,k)}_[p]=!1,y[p]=!0,k.push(p)},b.chain=function(){for(var p=[],y=0;y<arguments.length;y+=1){var _=arguments[y];_._chained?p.push.apply(p,_._chained):p.push(_)}var O=function(){for(var k,T=new Array(arguments.length),w=0,j=arguments.length;w<j;w++)T[w]=arguments[w];for(w=0;w<p.length;w+=1){var f=p[w].apply(k,T);typeof f<"u"&&(k=f)}return k};return O._chained=p,O},b.chainPathBefore=function(p,y,_){return b.set(p,y,b.chain(_,b.get(p,y)))},b.chainPathAfter=function(p,y,_){return b.set(p,y,b.chain(b.get(p,y),_))}})()}),(function(A,z){var b={};A.exports=b,(function(){b.create=function(l){var p={min:{x:0,y:0},max:{x:0,y:0}};return l&&b.update(p,l),p},b.update=function(l,p,y){l.min.x=1/0,l.max.x=-1/0,l.min.y=1/0,l.max.y=-1/0;for(var _=0;_<p.length;_++){var O=p[_];O.x>l.max.x&&(l.max.x=O.x),O.x<l.min.x&&(l.min.x=O.x),O.y>l.max.y&&(l.max.y=O.y),O.y<l.min.y&&(l.min.y=O.y)}y&&(y.x>0?l.max.x+=y.x:l.min.x+=y.x,y.y>0?l.max.y+=y.y:l.min.y+=y.y)},b.contains=function(l,p){return p.x>=l.min.x&&p.x<=l.max.x&&p.y>=l.min.y&&p.y<=l.max.y},b.overlaps=function(l,p){return l.min.x<=p.max.x&&l.max.x>=p.min.x&&l.max.y>=p.min.y&&l.min.y<=p.max.y},b.translate=function(l,p){l.min.x+=p.x,l.max.x+=p.x,l.min.y+=p.y,l.max.y+=p.y},b.shift=function(l,p){var y=l.max.x-l.min.x,_=l.max.y-l.min.y;l.min.x=p.x,l.max.x=p.x+y,l.min.y=p.y,l.max.y=p.y+_}})()}),(function(A,z){var b={};A.exports=b,(function(){b.create=function(l,p){return{x:l||0,y:p||0}},b.clone=function(l){return{x:l.x,y:l.y}},b.magnitude=function(l){return Math.sqrt(l.x*l.x+l.y*l.y)},b.magnitudeSquared=function(l){return l.x*l.x+l.y*l.y},b.rotate=function(l,p,y){var _=Math.cos(p),O=Math.sin(p);y||(y={});var k=l.x*_-l.y*O;return y.y=l.x*O+l.y*_,y.x=k,y},b.rotateAbout=function(l,p,y,_){var O=Math.cos(p),k=Math.sin(p);_||(_={});var T=y.x+((l.x-y.x)*O-(l.y-y.y)*k);return _.y=y.y+((l.x-y.x)*k+(l.y-y.y)*O),_.x=T,_},b.normalise=function(l){var p=b.magnitude(l);return p===0?{x:0,y:0}:{x:l.x/p,y:l.y/p}},b.dot=function(l,p){return l.x*p.x+l.y*p.y},b.cross=function(l,p){return l.x*p.y-l.y*p.x},b.cross3=function(l,p,y){return(p.x-l.x)*(y.y-l.y)-(p.y-l.y)*(y.x-l.x)},b.add=function(l,p,y){return y||(y={}),y.x=l.x+p.x,y.y=l.y+p.y,y},b.sub=function(l,p,y){return y||(y={}),y.x=l.x-p.x,y.y=l.y-p.y,y},b.mult=function(l,p){return{x:l.x*p,y:l.y*p}},b.div=function(l,p){return{x:l.x/p,y:l.y/p}},b.perp=function(l,p){return p=p===!0?-1:1,{x:p*-l.y,y:p*l.x}},b.neg=function(l){return{x:-l.x,y:-l.y}},b.angle=function(l,p){return Math.atan2(p.y-l.y,p.x-l.x)},b._temp=[b.create(),b.create(),b.create(),b.create(),b.create(),b.create()]})()}),(function(A,z,b){var l={};A.exports=l;var p=b(2),y=b(0);(function(){l.create=function(_,O){for(var k=[],T=0;T<_.length;T++){var w=_[T],j={x:w.x,y:w.y,index:T,body:O,isInternal:!1};k.push(j)}return k},l.fromPath=function(_,O){var k=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,T=[];return _.replace(k,function(w,j,f){T.push({x:parseFloat(j),y:parseFloat(f)})}),l.create(T,O)},l.centre=function(_){for(var O=l.area(_,!0),k={x:0,y:0},T,w,j,f=0;f<_.length;f++)j=(f+1)%_.length,T=p.cross(_[f],_[j]),w=p.mult(p.add(_[f],_[j]),T),k=p.add(k,w);return p.div(k,6*O)},l.mean=function(_){for(var O={x:0,y:0},k=0;k<_.length;k++)O.x+=_[k].x,O.y+=_[k].y;return p.div(O,_.length)},l.area=function(_,O){for(var k=0,T=_.length-1,w=0;w<_.length;w++)k+=(_[T].x-_[w].x)*(_[T].y+_[w].y),T=w;return O?k/2:Math.abs(k)/2},l.inertia=function(_,O){for(var k=0,T=0,w=_,j,f,C=0;C<w.length;C++)f=(C+1)%w.length,j=Math.abs(p.cross(w[f],w[C])),k+=j*(p.dot(w[f],w[f])+p.dot(w[f],w[C])+p.dot(w[C],w[C])),T+=j;return O/6*(k/T)},l.translate=function(_,O,k){var T;if(k)for(T=0;T<_.length;T++)_[T].x+=O.x*k,_[T].y+=O.y*k;else for(T=0;T<_.length;T++)_[T].x+=O.x,_[T].y+=O.y;return _},l.rotate=function(_,O,k){if(O!==0){for(var T=Math.cos(O),w=Math.sin(O),j=0;j<_.length;j++){var f=_[j],C=f.x-k.x,N=f.y-k.y;f.x=k.x+(C*T-N*w),f.y=k.y+(C*w+N*T)}return _}},l.contains=function(_,O){for(var k=0;k<_.length;k++){var T=_[k],w=_[(k+1)%_.length];if((O.x-T.x)*(w.y-T.y)+(O.y-T.y)*(T.x-w.x)>0)return!1}return!0},l.scale=function(_,O,k,T){if(O===1&&k===1)return _;T=T||l.centre(_);for(var w,j,f=0;f<_.length;f++)w=_[f],j=p.sub(w,T),_[f].x=T.x+j.x*O,_[f].y=T.y+j.y*k;return _},l.chamfer=function(_,O,k,T,w){typeof O=="number"?O=[O]:O=O||[8],k=typeof k<"u"?k:-1,T=T||2,w=w||14;for(var j=[],f=0;f<_.length;f++){var C=_[f-1>=0?f-1:_.length-1],N=_[f],P=_[(f+1)%_.length],e=O[f<O.length?f:O.length-1];if(e===0){j.push(N);continue}var s=p.normalise({x:N.y-C.y,y:C.x-N.x}),r=p.normalise({x:P.y-N.y,y:N.x-P.x}),a=Math.sqrt(2*Math.pow(e,2)),t=p.mult(y.clone(s),e),d=p.normalise(p.mult(p.add(s,r),.5)),c=p.sub(N,p.mult(d,a)),m=k;k===-1&&(m=Math.pow(e,.32)*1.75),m=y.clamp(m,T,w),m%2===1&&(m+=1);for(var v=Math.acos(p.dot(s,r)),h=v/m,S=0;S<m;S++)j.push(p.add(p.rotate(t,h*S),c))}return j},l.clockwiseSort=function(_){var O=l.mean(_);return _.sort(function(k,T){return p.angle(O,k)-p.angle(O,T)}),_},l.isConvex=function(){throw new Error("Convexity helper not distributed in this fixed scene")},l.hull=function(_){var O=[],k=[],T,w;for(_=_.slice(0),_.sort(function(j,f){var C=j.x-f.x;return C!==0?C:j.y-f.y}),w=0;w<_.length;w+=1){for(T=_[w];k.length>=2&&p.cross3(k[k.length-2],k[k.length-1],T)<=0;)k.pop();k.push(T)}for(w=_.length-1;w>=0;w-=1){for(T=_[w];O.length>=2&&p.cross3(O[O.length-2],O[O.length-1],T)<=0;)O.pop();O.push(T)}return O.pop(),k.pop(),O.concat(k)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(0);(function(){l.on=function(y,_,O){for(var k=_.split(" "),T,w=0;w<k.length;w++)T=k[w],y.events=y.events||{},y.events[T]=y.events[T]||[],y.events[T].push(O);return O},l.off=function(y,_,O){if(!_){y.events={};return}typeof _=="function"&&(O=_,_=p.keys(y.events).join(" "));for(var k=_.split(" "),T=0;T<k.length;T++){var w=y.events[k[T]],j=[];if(O&&w)for(var f=0;f<w.length;f++)w[f]!==O&&j.push(w[f]);y.events[k[T]]=j}},l.trigger=function(y,_,O){var k,T,w,j,f=y.events;if(f&&p.keys(f).length>0){O||(O={}),k=_.split(" ");for(var C=0;C<k.length;C++)if(T=k[C],w=f[T],w){j=p.clone(O,!1),j.name=T,j.source=y;for(var N=0;N<w.length;N++)w[N].apply(y,[j])}}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(4),y=b(0),_=b(1),O=b(6);(function(){l.create=function(k){return y.extend({id:y.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{}},k)},l.setModified=function(k,T,w,j){if(k.isModified=T,w&&k.parent&&l.setModified(k.parent,T,w,j),j)for(var f=0;f<k.composites.length;f++){var C=k.composites[f];l.setModified(C,T,w,j)}},l.add=function(k,T){var w=[].concat(T);p.trigger(k,"beforeAdd",{object:T});for(var j=0;j<w.length;j++){var f=w[j];switch(f.type){case"body":if(f.parent!==f){y.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}l.addBody(k,f);break;case"constraint":l.addConstraint(k,f);break;case"composite":l.addComposite(k,f);break;case"mouseConstraint":l.addConstraint(k,f.constraint);break}}return p.trigger(k,"afterAdd",{object:T}),k},l.remove=function(k,T,w){var j=[].concat(T);p.trigger(k,"beforeRemove",{object:T});for(var f=0;f<j.length;f++){var C=j[f];switch(C.type){case"body":l.removeBody(k,C,w);break;case"constraint":l.removeConstraint(k,C,w);break;case"composite":l.removeComposite(k,C,w);break;case"mouseConstraint":l.removeConstraint(k,C.constraint);break}}return p.trigger(k,"afterRemove",{object:T}),k},l.addComposite=function(k,T){return k.composites.push(T),T.parent=k,l.setModified(k,!0,!0,!1),k},l.removeComposite=function(k,T,w){var j=y.indexOf(k.composites,T);if(j!==-1&&(l.removeCompositeAt(k,j),l.setModified(k,!0,!0,!1)),w)for(var f=0;f<k.composites.length;f++)l.removeComposite(k.composites[f],T,!0);return k},l.removeCompositeAt=function(k,T){return k.composites.splice(T,1),l.setModified(k,!0,!0,!1),k},l.addBody=function(k,T){return k.bodies.push(T),l.setModified(k,!0,!0,!1),k},l.removeBody=function(k,T,w){var j=y.indexOf(k.bodies,T);if(j!==-1&&(l.removeBodyAt(k,j),l.setModified(k,!0,!0,!1)),w)for(var f=0;f<k.composites.length;f++)l.removeBody(k.composites[f],T,!0);return k},l.removeBodyAt=function(k,T){return k.bodies.splice(T,1),l.setModified(k,!0,!0,!1),k},l.addConstraint=function(k,T){return k.constraints.push(T),l.setModified(k,!0,!0,!1),k},l.removeConstraint=function(k,T,w){var j=y.indexOf(k.constraints,T);if(j!==-1&&l.removeConstraintAt(k,j),w)for(var f=0;f<k.composites.length;f++)l.removeConstraint(k.composites[f],T,!0);return k},l.removeConstraintAt=function(k,T){return k.constraints.splice(T,1),l.setModified(k,!0,!0,!1),k},l.clear=function(k,T,w){if(w)for(var j=0;j<k.composites.length;j++)l.clear(k.composites[j],T,!0);return T?k.bodies=k.bodies.filter(function(f){return f.isStatic}):k.bodies.length=0,k.constraints.length=0,k.composites.length=0,l.setModified(k,!0,!0,!1),k},l.allBodies=function(k){for(var T=[].concat(k.bodies),w=0;w<k.composites.length;w++)T=T.concat(l.allBodies(k.composites[w]));return T},l.allConstraints=function(k){for(var T=[].concat(k.constraints),w=0;w<k.composites.length;w++)T=T.concat(l.allConstraints(k.composites[w]));return T},l.allComposites=function(k){for(var T=[].concat(k.composites),w=0;w<k.composites.length;w++)T=T.concat(l.allComposites(k.composites[w]));return T},l.get=function(k,T,w){var j,f;switch(w){case"body":j=l.allBodies(k);break;case"constraint":j=l.allConstraints(k);break;case"composite":j=l.allComposites(k).concat(k);break}return j?(f=j.filter(function(C){return C.id.toString()===T.toString()}),f.length===0?null:f[0]):null},l.move=function(k,T,w){return l.remove(k,T),l.add(w,T),k},l.rebase=function(k){for(var T=l.allBodies(k).concat(l.allConstraints(k)).concat(l.allComposites(k)),w=0;w<T.length;w++)T[w].id=y.nextId();return l.setModified(k,!0,!0,!1),k},l.translate=function(k,T,w){for(var j=w?l.allBodies(k):k.bodies,f=0;f<j.length;f++)O.translate(j[f],T);return l.setModified(k,!0,!0,!1),k},l.rotate=function(k,T,w,j){for(var f=Math.cos(T),C=Math.sin(T),N=j?l.allBodies(k):k.bodies,P=0;P<N.length;P++){var e=N[P],s=e.position.x-w.x,r=e.position.y-w.y;O.setPosition(e,{x:w.x+(s*f-r*C),y:w.y+(s*C+r*f)}),O.rotate(e,T)}return l.setModified(k,!0,!0,!1),k},l.scale=function(k,T,w,j,f){for(var C=f?l.allBodies(k):k.bodies,N=0;N<C.length;N++){var P=C[N],e=P.position.x-j.x,s=P.position.y-j.y;O.setPosition(P,{x:j.x+e*T,y:j.y+s*w}),O.scale(P,T,w)}return l.setModified(k,!0,!0,!1),k},l.bounds=function(k){for(var T=l.allBodies(k),w=[],j=0;j<T.length;j+=1){var f=T[j];w.push(f.bounds.min,f.bounds.max)}return _.create(w)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(2),_=b(7),O=b(10),k=b(0),T=b(1),w=b(15);(function(){l._inertiaScale=4,l._nextCollidingGroupId=1,l._nextNonCollidingGroupId=-1,l._nextCategory=1,l.create=function(f){var C={id:k.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:p.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},N=k.extend(C,f);return j(N,f),N},l.nextGroup=function(f){return f?l._nextNonCollidingGroupId--:l._nextCollidingGroupId++},l.nextCategory=function(){return l._nextCategory=l._nextCategory<<1,l._nextCategory};var j=function(f,C){C=C||{},l.set(f,{bounds:f.bounds||T.create(f.vertices),positionPrev:f.positionPrev||y.clone(f.position),anglePrev:f.anglePrev||f.angle,vertices:f.vertices,parts:f.parts||[f],isStatic:f.isStatic,isSleeping:f.isSleeping,parent:f.parent||f}),p.rotate(f.vertices,f.angle,f.position),w.rotate(f.axes,f.angle),T.update(f.bounds,f.vertices,f.velocity),l.set(f,{axes:C.axes||f.axes,area:C.area||f.area,mass:C.mass||f.mass,inertia:C.inertia||f.inertia});var N=f.isStatic?"#14151f":k.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),P=f.isStatic?"#555":"#ccc",e=f.isStatic&&f.render.fillStyle===null?1:0;f.render.fillStyle=f.render.fillStyle||N,f.render.strokeStyle=f.render.strokeStyle||P,f.render.lineWidth=f.render.lineWidth||e,f.render.sprite.xOffset+=-(f.bounds.min.x-f.position.x)/(f.bounds.max.x-f.bounds.min.x),f.render.sprite.yOffset+=-(f.bounds.min.y-f.position.y)/(f.bounds.max.y-f.bounds.min.y)};l.set=function(f,C,N){var P;typeof C=="string"&&(P=C,C={},C[P]=N);for(P in C)if(Object.prototype.hasOwnProperty.call(C,P))switch(N=C[P],P){case"isStatic":l.setStatic(f,N);break;case"isSleeping":_.set(f,N);break;case"mass":l.setMass(f,N);break;case"density":l.setDensity(f,N);break;case"inertia":l.setInertia(f,N);break;case"vertices":l.setVertices(f,N);break;case"position":l.setPosition(f,N);break;case"angle":l.setAngle(f,N);break;case"velocity":l.setVelocity(f,N);break;case"angularVelocity":l.setAngularVelocity(f,N);break;case"parts":l.setParts(f,N);break;case"centre":l.setCentre(f,N);break;default:f[P]=N}},l.setStatic=function(f,C){for(var N=0;N<f.parts.length;N++){var P=f.parts[N];P.isStatic=C,C?(P._original={restitution:P.restitution,friction:P.friction,mass:P.mass,inertia:P.inertia,density:P.density,inverseMass:P.inverseMass,inverseInertia:P.inverseInertia},P.restitution=0,P.friction=1,P.mass=P.inertia=P.density=1/0,P.inverseMass=P.inverseInertia=0,P.positionPrev.x=P.position.x,P.positionPrev.y=P.position.y,P.anglePrev=P.angle,P.angularVelocity=0,P.speed=0,P.angularSpeed=0,P.motion=0):P._original&&(P.restitution=P._original.restitution,P.friction=P._original.friction,P.mass=P._original.mass,P.inertia=P._original.inertia,P.density=P._original.density,P.inverseMass=P._original.inverseMass,P.inverseInertia=P._original.inverseInertia,P._original=null)}},l.setMass=function(f,C){var N=f.inertia/(f.mass/6);f.inertia=N*(C/6),f.inverseInertia=1/f.inertia,f.mass=C,f.inverseMass=1/f.mass,f.density=f.mass/f.area},l.setDensity=function(f,C){l.setMass(f,C*f.area),f.density=C},l.setInertia=function(f,C){f.inertia=C,f.inverseInertia=1/f.inertia},l.setVertices=function(f,C){C[0].body===f?f.vertices=C:f.vertices=p.create(C,f),f.axes=w.fromVertices(f.vertices),f.area=p.area(f.vertices),l.setMass(f,f.density*f.area);var N=p.centre(f.vertices);p.translate(f.vertices,N,-1),l.setInertia(f,l._inertiaScale*p.inertia(f.vertices,f.mass)),p.translate(f.vertices,f.position),T.update(f.bounds,f.vertices,f.velocity)},l.setParts=function(f,C,N){var P;for(C=C.slice(0),f.parts.length=0,f.parts.push(f),f.parent=f,P=0;P<C.length;P++){var e=C[P];e!==f&&(e.parent=f,f.parts.push(e))}if(f.parts.length!==1){if(N=typeof N<"u"?N:!0,N){var s=[];for(P=0;P<C.length;P++)s=s.concat(C[P].vertices);p.clockwiseSort(s);var r=p.hull(s),a=p.centre(r);l.setVertices(f,r),p.translate(f.vertices,a)}var t=l._totalProperties(f);f.area=t.area,f.parent=f,f.position.x=t.centre.x,f.position.y=t.centre.y,f.positionPrev.x=t.centre.x,f.positionPrev.y=t.centre.y,l.setMass(f,t.mass),l.setInertia(f,t.inertia),l.setPosition(f,t.centre)}},l.setCentre=function(f,C,N){N?(f.positionPrev.x+=C.x,f.positionPrev.y+=C.y,f.position.x+=C.x,f.position.y+=C.y):(f.positionPrev.x=C.x-(f.position.x-f.positionPrev.x),f.positionPrev.y=C.y-(f.position.y-f.positionPrev.y),f.position.x=C.x,f.position.y=C.y)},l.setPosition=function(f,C){var N=y.sub(C,f.position);f.positionPrev.x+=N.x,f.positionPrev.y+=N.y;for(var P=0;P<f.parts.length;P++){var e=f.parts[P];e.position.x+=N.x,e.position.y+=N.y,p.translate(e.vertices,N),T.update(e.bounds,e.vertices,f.velocity)}},l.setAngle=function(f,C){var N=C-f.angle;f.anglePrev+=N;for(var P=0;P<f.parts.length;P++){var e=f.parts[P];e.angle+=N,p.rotate(e.vertices,N,f.position),w.rotate(e.axes,N),T.update(e.bounds,e.vertices,f.velocity),P>0&&y.rotateAbout(e.position,N,f.position,e.position)}},l.setVelocity=function(f,C){f.positionPrev.x=f.position.x-C.x,f.positionPrev.y=f.position.y-C.y,f.velocity.x=C.x,f.velocity.y=C.y,f.speed=y.magnitude(f.velocity)},l.setAngularVelocity=function(f,C){f.anglePrev=f.angle-C,f.angularVelocity=C,f.angularSpeed=Math.abs(f.angularVelocity)},l.translate=function(f,C){l.setPosition(f,y.add(f.position,C))},l.rotate=function(f,C,N){if(!N)l.setAngle(f,f.angle+C);else{var P=Math.cos(C),e=Math.sin(C),s=f.position.x-N.x,r=f.position.y-N.y;l.setPosition(f,{x:N.x+(s*P-r*e),y:N.y+(s*e+r*P)}),l.setAngle(f,f.angle+C)}},l.scale=function(f,C,N,P){var e=0,s=0;P=P||f.position;for(var r=0;r<f.parts.length;r++){var a=f.parts[r];p.scale(a.vertices,C,N,P),a.axes=w.fromVertices(a.vertices),a.area=p.area(a.vertices),l.setMass(a,f.density*a.area),p.translate(a.vertices,{x:-a.position.x,y:-a.position.y}),l.setInertia(a,l._inertiaScale*p.inertia(a.vertices,a.mass)),p.translate(a.vertices,{x:a.position.x,y:a.position.y}),r>0&&(e+=a.area,s+=a.inertia),a.position.x=P.x+(a.position.x-P.x)*C,a.position.y=P.y+(a.position.y-P.y)*N,T.update(a.bounds,a.vertices,f.velocity)}f.parts.length>1&&(f.area=e,f.isStatic||(l.setMass(f,f.density*e),l.setInertia(f,s))),f.circleRadius&&(C===N?f.circleRadius*=C:f.circleRadius=null)},l.update=function(f,C,N,P){var e=Math.pow(C*N*f.timeScale,2),s=1-f.frictionAir*N*f.timeScale,r=f.position.x-f.positionPrev.x,a=f.position.y-f.positionPrev.y;f.velocity.x=r*s*P+f.force.x/f.mass*e,f.velocity.y=a*s*P+f.force.y/f.mass*e,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.position.x+=f.velocity.x,f.position.y+=f.velocity.y,f.angularVelocity=(f.angle-f.anglePrev)*s*P+f.torque/f.inertia*e,f.anglePrev=f.angle,f.angle+=f.angularVelocity,f.speed=y.magnitude(f.velocity),f.angularSpeed=Math.abs(f.angularVelocity);for(var t=0;t<f.parts.length;t++){var d=f.parts[t];p.translate(d.vertices,f.velocity),t>0&&(d.position.x+=f.velocity.x,d.position.y+=f.velocity.y),f.angularVelocity!==0&&(p.rotate(d.vertices,f.angularVelocity,f.position),w.rotate(d.axes,f.angularVelocity),t>0&&y.rotateAbout(d.position,f.angularVelocity,f.position,d.position)),T.update(d.bounds,d.vertices,f.velocity)}},l.applyForce=function(f,C,N){f.force.x+=N.x,f.force.y+=N.y;var P={x:C.x-f.position.x,y:C.y-f.position.y};f.torque+=P.x*N.y-P.y*N.x},l._totalProperties=function(f){for(var C={mass:0,area:0,inertia:0,centre:{x:0,y:0}},N=f.parts.length===1?0:1;N<f.parts.length;N++){var P=f.parts[N],e=P.mass!==1/0?P.mass:1;C.mass+=e,C.area+=P.area,C.inertia+=P.inertia,C.centre=y.add(C.centre,y.mult(P.position,e))}return C.centre=y.div(C.centre,C.mass),C}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(4);(function(){l._motionWakeThreshold=.18,l._motionSleepThreshold=.08,l._minBias=.9,l.update=function(y,_){for(var O=_*_*_,k=0;k<y.length;k++){var T=y[k],w=T.speed*T.speed+T.angularSpeed*T.angularSpeed;if(T.force.x!==0||T.force.y!==0){l.set(T,!1);continue}var j=Math.min(T.motion,w),f=Math.max(T.motion,w);T.motion=l._minBias*j+(1-l._minBias)*f,T.sleepThreshold>0&&T.motion<l._motionSleepThreshold*O?(T.sleepCounter+=1,T.sleepCounter>=T.sleepThreshold&&l.set(T,!0)):T.sleepCounter>0&&(T.sleepCounter-=1)}},l.afterCollisions=function(y,_){for(var O=_*_*_,k=0;k<y.length;k++){var T=y[k];if(T.isActive){var w=T.collision,j=w.bodyA.parent,f=w.bodyB.parent;if(!(j.isSleeping&&f.isSleeping||j.isStatic||f.isStatic)&&(j.isSleeping||f.isSleeping)){var C=j.isSleeping&&!j.isStatic?j:f,N=C===j?f:j;!C.isStatic&&N.motion>l._motionWakeThreshold*O&&l.set(C,!1)}}}},l.set=function(y,_){var O=y.isSleeping;_?(y.isSleeping=!0,y.sleepCounter=y.sleepThreshold,y.positionImpulse.x=0,y.positionImpulse.y=0,y.positionPrev.x=y.position.x,y.positionPrev.y=y.position.y,y.anglePrev=y.angle,y.speed=0,y.angularSpeed=0,y.motion=0,O||p.trigger(y,"sleepStart")):(y.isSleeping=!1,y.sleepCounter=0,O&&p.trigger(y,"sleepEnd"))}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(2),_=b(7),O=b(1),k=b(15),T=b(0);(function(){l._warming=.4,l._torqueDampen=1,l._minLength=1e-6,l.create=function(w){var j=w;j.bodyA&&!j.pointA&&(j.pointA={x:0,y:0}),j.bodyB&&!j.pointB&&(j.pointB={x:0,y:0});var f=j.bodyA?y.add(j.bodyA.position,j.pointA):j.pointA,C=j.bodyB?y.add(j.bodyB.position,j.pointB):j.pointB,N=y.magnitude(y.sub(f,C));j.length=typeof j.length<"u"?j.length:N,j.id=j.id||T.nextId(),j.label=j.label||"Constraint",j.type="constraint",j.stiffness=j.stiffness||(j.length>0?1:.7),j.damping=j.damping||0,j.angularStiffness=j.angularStiffness||0,j.angleA=j.bodyA?j.bodyA.angle:j.angleA,j.angleB=j.bodyB?j.bodyB.angle:j.angleB,j.plugin={};var P={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return j.length===0&&j.stiffness>.1?(P.type="pin",P.anchors=!1):j.stiffness<.9&&(P.type="spring"),j.render=T.extend(P,j.render),j},l.preSolveAll=function(w){for(var j=0;j<w.length;j+=1){var f=w[j],C=f.constraintImpulse;f.isStatic||C.x===0&&C.y===0&&C.angle===0||(f.position.x+=C.x,f.position.y+=C.y,f.angle+=C.angle)}},l.solveAll=function(w,j){for(var f=0;f<w.length;f+=1){var C=w[f],N=!C.bodyA||C.bodyA&&C.bodyA.isStatic,P=!C.bodyB||C.bodyB&&C.bodyB.isStatic;(N||P)&&l.solve(w[f],j)}for(f=0;f<w.length;f+=1)C=w[f],N=!C.bodyA||C.bodyA&&C.bodyA.isStatic,P=!C.bodyB||C.bodyB&&C.bodyB.isStatic,!N&&!P&&l.solve(w[f],j)},l.solve=function(w,j){var f=w.bodyA,C=w.bodyB,N=w.pointA,P=w.pointB;if(!(!f&&!C)){f&&!f.isStatic&&(y.rotate(N,f.angle-w.angleA,N),w.angleA=f.angle),C&&!C.isStatic&&(y.rotate(P,C.angle-w.angleB,P),w.angleB=C.angle);var e=N,s=P;if(f&&(e=y.add(f.position,N)),C&&(s=y.add(C.position,P)),!(!e||!s)){var r=y.sub(e,s),a=y.magnitude(r);a<l._minLength&&(a=l._minLength);var t=(a-w.length)/a,d=w.stiffness<1?w.stiffness*j:w.stiffness,c=y.mult(r,t*d),m=(f?f.inverseMass:0)+(C?C.inverseMass:0),v=(f?f.inverseInertia:0)+(C?C.inverseInertia:0),h=m+v,S,R,B,H,V;if(w.damping){var X=y.create();B=y.div(r,a),V=y.sub(C&&y.sub(C.position,C.positionPrev)||X,f&&y.sub(f.position,f.positionPrev)||X),H=y.dot(B,V)}f&&!f.isStatic&&(R=f.inverseMass/m,f.constraintImpulse.x-=c.x*R,f.constraintImpulse.y-=c.y*R,f.position.x-=c.x*R,f.position.y-=c.y*R,w.damping&&(f.positionPrev.x-=w.damping*B.x*H*R,f.positionPrev.y-=w.damping*B.y*H*R),S=y.cross(N,c)/h*l._torqueDampen*f.inverseInertia*(1-w.angularStiffness),f.constraintImpulse.angle-=S,f.angle-=S),C&&!C.isStatic&&(R=C.inverseMass/m,C.constraintImpulse.x+=c.x*R,C.constraintImpulse.y+=c.y*R,C.position.x+=c.x*R,C.position.y+=c.y*R,w.damping&&(C.positionPrev.x+=w.damping*B.x*H*R,C.positionPrev.y+=w.damping*B.y*H*R),S=y.cross(P,c)/h*l._torqueDampen*C.inverseInertia*(1-w.angularStiffness),C.constraintImpulse.angle+=S,C.angle+=S)}}},l.postSolveAll=function(w){for(var j=0;j<w.length;j++){var f=w[j],C=f.constraintImpulse;if(!(f.isStatic||C.x===0&&C.y===0&&C.angle===0)){_.set(f,!1);for(var N=0;N<f.parts.length;N++){var P=f.parts[N];p.translate(P.vertices,C),N>0&&(P.position.x+=C.x,P.position.y+=C.y),C.angle!==0&&(p.rotate(P.vertices,C.angle,f.position),k.rotate(P.axes,C.angle),N>0&&y.rotateAbout(P.position,C.angle,f.position,P.position)),O.update(P.bounds,P.vertices,f.velocity)}C.angle*=l._warming,C.x*=l._warming,C.y*=l._warming}}},l.pointAWorld=function(w){return{x:(w.bodyA?w.bodyA.position.x:0)+w.pointA.x,y:(w.bodyA?w.bodyA.position.y:0)+w.pointA.y}},l.pointBWorld=function(w){return{x:(w.bodyB?w.bodyB.position.x:0)+w.pointB.x,y:(w.bodyB?w.bodyB.position.y:0)+w.pointB.y}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(18);(function(){l.create=function(y,_){var O=y.bodyA,k=y.bodyB,T=y.parentA,w=y.parentB,j={id:l.id(O,k),bodyA:O,bodyB:k,contacts:{},activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:O.isSensor||k.isSensor,timeCreated:_,timeUpdated:_,inverseMass:T.inverseMass+w.inverseMass,friction:Math.min(T.friction,w.friction),frictionStatic:Math.max(T.frictionStatic,w.frictionStatic),restitution:Math.max(T.restitution,w.restitution),slop:Math.max(T.slop,w.slop)};return l.update(j,y,_),j},l.update=function(y,_,O){var k=y.contacts,T=_.supports,w=y.activeContacts,j=_.parentA,f=_.parentB;if(y.collision=_,y.inverseMass=j.inverseMass+f.inverseMass,y.friction=Math.min(j.friction,f.friction),y.frictionStatic=Math.max(j.frictionStatic,f.frictionStatic),y.restitution=Math.max(j.restitution,f.restitution),y.slop=Math.max(j.slop,f.slop),w.length=0,_.collided){for(var C=0;C<T.length;C++){var N=T[C],P=p.id(N),e=k[P];e?w.push(e):w.push(k[P]=p.create(N))}y.separation=_.depth,l.setActive(y,!0,O)}else y.isActive===!0&&l.setActive(y,!1,O)},l.setActive=function(y,_,O){_?(y.isActive=!0,y.timeUpdated=O):(y.isActive=!1,y.activeContacts.length=0)},l.id=function(y,_){return y.id<_.id?"A"+y.id+"B"+_.id:"A"+_.id+"B"+y.id}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(0),y=b(5),_=b(1),O=b(4),k=b(11),T=b(2),w=b(14);(function(){var j,f;typeof window<"u"&&(j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(s){window.setTimeout(function(){s(p.now())},1e3/60)},f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),l.create=function(s){var r={controller:l,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!s.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},a=p.extend(r,s);return a.canvas&&(a.canvas.width=a.options.width||a.canvas.width,a.canvas.height=a.options.height||a.canvas.height),a.mouse=s.mouse,a.engine=s.engine,a.canvas=a.canvas||C(a.options.width,a.options.height),a.context=a.canvas.getContext("2d"),a.textures={},a.bounds=a.bounds||{min:{x:0,y:0},max:{x:a.canvas.width,y:a.canvas.height}},a.options.pixelRatio!==1&&l.setPixelRatio(a,a.options.pixelRatio),p.isElement(a.element)?a.element.appendChild(a.canvas):a.canvas.parentNode||p.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),a},l.run=function(s){(function r(a){s.frameRequestId=j(r),l.world(s)})()},l.stop=function(s){f(s.frameRequestId)},l.setPixelRatio=function(s,r){var a=s.options,t=s.canvas;r==="auto"&&(r=N(t)),a.pixelRatio=r,t.setAttribute("data-pixel-ratio",r),t.width=a.width*r,t.height=a.height*r,t.style.width=a.width+"px",t.style.height=a.height+"px"},l.lookAt=function(s,r,a,t){t=typeof t<"u"?t:!0,r=p.isArray(r)?r:[r],a=a||{x:0,y:0};for(var d={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},c=0;c<r.length;c+=1){var m=r[c],v=m.bounds?m.bounds.min:m.min||m.position||m,h=m.bounds?m.bounds.max:m.max||m.position||m;v&&h&&(v.x<d.min.x&&(d.min.x=v.x),h.x>d.max.x&&(d.max.x=h.x),v.y<d.min.y&&(d.min.y=v.y),h.y>d.max.y&&(d.max.y=h.y))}var S=d.max.x-d.min.x+2*a.x,R=d.max.y-d.min.y+2*a.y,B=s.canvas.height,H=s.canvas.width,V=H/B,X=S/R,J=1,de=1;X>V?de=X/V:J=V/X,s.options.hasBounds=!0,s.bounds.min.x=d.min.x,s.bounds.max.x=d.min.x+S*J,s.bounds.min.y=d.min.y,s.bounds.max.y=d.min.y+R*de,t&&(s.bounds.min.x+=S*.5-S*J*.5,s.bounds.max.x+=S*.5-S*J*.5,s.bounds.min.y+=R*.5-R*de*.5,s.bounds.max.y+=R*.5-R*de*.5),s.bounds.min.x-=a.x,s.bounds.max.x-=a.x,s.bounds.min.y-=a.y,s.bounds.max.y-=a.y,s.mouse&&(w.setScale(s.mouse,{x:(s.bounds.max.x-s.bounds.min.x)/s.canvas.width,y:(s.bounds.max.y-s.bounds.min.y)/s.canvas.height}),w.setOffset(s.mouse,s.bounds.min))},l.startViewTransform=function(s){var r=s.bounds.max.x-s.bounds.min.x,a=s.bounds.max.y-s.bounds.min.y,t=r/s.options.width,d=a/s.options.height;s.context.setTransform(s.options.pixelRatio/t,0,0,s.options.pixelRatio/d,0,0),s.context.translate(-s.bounds.min.x,-s.bounds.min.y)},l.endViewTransform=function(s){s.context.setTransform(s.options.pixelRatio,0,0,s.options.pixelRatio,0,0)},l.world=function(s){var r=s.engine,a=r.world,t=s.canvas,d=s.context,c=s.options,m=y.allBodies(a),v=y.allConstraints(a),h=c.wireframes?c.wireframeBackground:c.background,S=[],R=[],B,H={timestamp:r.timing.timestamp};if(O.trigger(s,"beforeRender",H),s.currentBackground!==h&&e(s,h),d.globalCompositeOperation="source-in",d.fillStyle="transparent",d.fillRect(0,0,t.width,t.height),d.globalCompositeOperation="source-over",c.hasBounds){for(B=0;B<m.length;B++){var V=m[B];_.overlaps(V.bounds,s.bounds)&&S.push(V)}for(B=0;B<v.length;B++){var X=v[B],J=X.bodyA,de=X.bodyB,ge=X.pointA,ce=X.pointB;J&&(ge=T.add(J.position,X.pointA)),de&&(ce=T.add(de.position,X.pointB)),!(!ge||!ce)&&(_.contains(s.bounds,ge)||_.contains(s.bounds,ce))&&R.push(X)}l.startViewTransform(s),s.mouse&&(w.setScale(s.mouse,{x:(s.bounds.max.x-s.bounds.min.x)/s.options.width,y:(s.bounds.max.y-s.bounds.min.y)/s.options.height}),w.setOffset(s.mouse,s.bounds.min))}else R=v,S=m,s.options.pixelRatio!==1&&s.context.setTransform(s.options.pixelRatio,0,0,s.options.pixelRatio,0,0);!c.wireframes||r.enableSleeping&&c.showSleeping?l.bodies(s,S,d):(c.showConvexHulls&&l.bodyConvexHulls(s,S,d),l.bodyWireframes(s,S,d)),c.showBounds&&l.bodyBounds(s,S,d),(c.showAxes||c.showAngleIndicator)&&l.bodyAxes(s,S,d),c.showPositions&&l.bodyPositions(s,S,d),c.showVelocity&&l.bodyVelocity(s,S,d),c.showIds&&l.bodyIds(s,S,d),c.showSeparations&&l.separations(s,r.pairs.list,d),c.showCollisions&&l.collisions(s,r.pairs.list,d),c.showVertexNumbers&&l.vertexNumbers(s,S,d),c.showMousePosition&&l.mousePosition(s,s.mouse,d),l.constraints(R,d),c.showBroadphase&&r.broadphase.controller===k&&l.grid(s,r.broadphase,d),c.showDebug&&l.debug(s,d),c.hasBounds&&l.endViewTransform(s),O.trigger(s,"afterRender",H)},l.debug=function(s,r){var a=r,t=s.engine,d=t.world,c=t.metrics,m=s.options,v=y.allBodies(d),h="    ";if(t.timing.timestamp-(s.debugTimestamp||0)>=500){var S="";c.timing&&(S+="fps: "+Math.round(c.timing.fps)+h),c.extended&&(c.timing&&(S+="delta: "+c.timing.delta.toFixed(3)+h,S+="correction: "+c.timing.correction.toFixed(3)+h),S+="bodies: "+v.length+h,t.broadphase.controller===k&&(S+="buckets: "+c.buckets+h),S+=`
`,S+="collisions: "+c.collisions+h,S+="pairs: "+t.pairs.list.length+h,S+="broad: "+c.broadEff+h,S+="mid: "+c.midEff+h,S+="narrow: "+c.narrowEff+h),s.debugString=S,s.debugTimestamp=t.timing.timestamp}if(s.debugString){a.font="12px Arial",m.wireframes?a.fillStyle="rgba(255,255,255,0.5)":a.fillStyle="rgba(0,0,0,0.5)";for(var R=s.debugString.split(`
`),B=0;B<R.length;B++)a.fillText(R[B],50,50+B*18)}},l.constraints=function(s,r){for(var a=r,t=0;t<s.length;t++){var d=s[t];if(!(!d.render.visible||!d.pointA||!d.pointB)){var c=d.bodyA,m=d.bodyB,v,h;if(c?v=T.add(c.position,d.pointA):v=d.pointA,d.render.type==="pin")a.beginPath(),a.arc(v.x,v.y,3,0,2*Math.PI),a.closePath();else{if(m?h=T.add(m.position,d.pointB):h=d.pointB,a.beginPath(),a.moveTo(v.x,v.y),d.render.type==="spring")for(var S=T.sub(h,v),R=T.perp(T.normalise(S)),B=Math.ceil(p.clamp(d.length/5,12,20)),H,V=1;V<B;V+=1)H=V%2===0?1:-1,a.lineTo(v.x+S.x*(V/B)+R.x*H*4,v.y+S.y*(V/B)+R.y*H*4);a.lineTo(h.x,h.y)}d.render.lineWidth&&(a.lineWidth=d.render.lineWidth,a.strokeStyle=d.render.strokeStyle,a.stroke()),d.render.anchors&&(a.fillStyle=d.render.strokeStyle,a.beginPath(),a.arc(v.x,v.y,3,0,2*Math.PI),a.arc(h.x,h.y,3,0,2*Math.PI),a.closePath(),a.fill())}}},l.bodyShadows=function(s,r,a){for(var t=a,d=s.engine,c=0;c<r.length;c++){var m=r[c];if(m.render.visible){if(m.circleRadius)t.beginPath(),t.arc(m.position.x,m.position.y,m.circleRadius,0,2*Math.PI),t.closePath();else{t.beginPath(),t.moveTo(m.vertices[0].x,m.vertices[0].y);for(var v=1;v<m.vertices.length;v++)t.lineTo(m.vertices[v].x,m.vertices[v].y);t.closePath()}var h=m.position.x-s.options.width*.5,S=m.position.y-s.options.height*.2,R=Math.abs(h)+Math.abs(S);t.shadowColor="rgba(0,0,0,0.15)",t.shadowOffsetX=.05*h,t.shadowOffsetY=.05*S,t.shadowBlur=1+12*Math.min(1,R/1e3),t.fill(),t.shadowColor=null,t.shadowOffsetX=null,t.shadowOffsetY=null,t.shadowBlur=null}}},l.bodies=function(s,r,a){var t=a,d=s.engine,c=s.options,m=c.showInternalEdges||!c.wireframes,v,h,S,R;for(S=0;S<r.length;S++)if(v=r[S],!!v.render.visible){for(R=v.parts.length>1?1:0;R<v.parts.length;R++)if(h=v.parts[R],!!h.render.visible){if(c.showSleeping&&v.isSleeping?t.globalAlpha=.5*h.render.opacity:h.render.opacity!==1&&(t.globalAlpha=h.render.opacity),h.render.sprite&&h.render.sprite.texture&&!c.wireframes){var B=h.render.sprite,H=P(s,B.texture);t.translate(h.position.x,h.position.y),t.rotate(h.angle),t.drawImage(H,H.width*-B.xOffset*B.xScale,H.height*-B.yOffset*B.yScale,H.width*B.xScale,H.height*B.yScale),t.rotate(-h.angle),t.translate(-h.position.x,-h.position.y)}else{if(h.circleRadius)t.beginPath(),t.arc(h.position.x,h.position.y,h.circleRadius,0,2*Math.PI);else{t.beginPath(),t.moveTo(h.vertices[0].x,h.vertices[0].y);for(var V=1;V<h.vertices.length;V++)!h.vertices[V-1].isInternal||m?t.lineTo(h.vertices[V].x,h.vertices[V].y):t.moveTo(h.vertices[V].x,h.vertices[V].y),h.vertices[V].isInternal&&!m&&t.moveTo(h.vertices[(V+1)%h.vertices.length].x,h.vertices[(V+1)%h.vertices.length].y);t.lineTo(h.vertices[0].x,h.vertices[0].y),t.closePath()}c.wireframes?(t.lineWidth=1,t.strokeStyle="#bbb",t.stroke()):(t.fillStyle=h.render.fillStyle,h.render.lineWidth&&(t.lineWidth=h.render.lineWidth,t.strokeStyle=h.render.strokeStyle,t.stroke()),t.fill())}t.globalAlpha=1}}},l.bodyWireframes=function(s,r,a){var t=a,d=s.options.showInternalEdges,c,m,v,h,S;for(t.beginPath(),v=0;v<r.length;v++)if(c=r[v],!!c.render.visible)for(S=c.parts.length>1?1:0;S<c.parts.length;S++){for(m=c.parts[S],t.moveTo(m.vertices[0].x,m.vertices[0].y),h=1;h<m.vertices.length;h++)!m.vertices[h-1].isInternal||d?t.lineTo(m.vertices[h].x,m.vertices[h].y):t.moveTo(m.vertices[h].x,m.vertices[h].y),m.vertices[h].isInternal&&!d&&t.moveTo(m.vertices[(h+1)%m.vertices.length].x,m.vertices[(h+1)%m.vertices.length].y);t.lineTo(m.vertices[0].x,m.vertices[0].y)}t.lineWidth=1,t.strokeStyle="#bbb",t.stroke()},l.bodyConvexHulls=function(s,r,a){var t=a,d,c,m,v,h;for(t.beginPath(),m=0;m<r.length;m++)if(d=r[m],!(!d.render.visible||d.parts.length===1)){for(t.moveTo(d.vertices[0].x,d.vertices[0].y),v=1;v<d.vertices.length;v++)t.lineTo(d.vertices[v].x,d.vertices[v].y);t.lineTo(d.vertices[0].x,d.vertices[0].y)}t.lineWidth=1,t.strokeStyle="rgba(255,255,255,0.2)",t.stroke()},l.vertexNumbers=function(s,r,a){var t=a,d,c,m;for(d=0;d<r.length;d++){var v=r[d].parts;for(m=v.length>1?1:0;m<v.length;m++){var h=v[m];for(c=0;c<h.vertices.length;c++)t.fillStyle="rgba(255,255,255,0.2)",t.fillText(d+"_"+c,h.position.x+(h.vertices[c].x-h.position.x)*.8,h.position.y+(h.vertices[c].y-h.position.y)*.8)}}},l.mousePosition=function(s,r,a){var t=a;t.fillStyle="rgba(255,255,255,0.8)",t.fillText(r.position.x+"  "+r.position.y,r.position.x+5,r.position.y-5)},l.bodyBounds=function(s,r,a){var t=a,d=s.engine,c=s.options;t.beginPath();for(var m=0;m<r.length;m++){var v=r[m];if(v.render.visible)for(var h=r[m].parts,S=h.length>1?1:0;S<h.length;S++){var R=h[S];t.rect(R.bounds.min.x,R.bounds.min.y,R.bounds.max.x-R.bounds.min.x,R.bounds.max.y-R.bounds.min.y)}}c.wireframes?t.strokeStyle="rgba(255,255,255,0.08)":t.strokeStyle="rgba(0,0,0,0.1)",t.lineWidth=1,t.stroke()},l.bodyAxes=function(s,r,a){var t=a,d=s.engine,c=s.options,m,v,h,S;for(t.beginPath(),v=0;v<r.length;v++){var R=r[v],B=R.parts;if(R.render.visible)if(c.showAxes)for(h=B.length>1?1:0;h<B.length;h++)for(m=B[h],S=0;S<m.axes.length;S++){var H=m.axes[S];t.moveTo(m.position.x,m.position.y),t.lineTo(m.position.x+H.x*20,m.position.y+H.y*20)}else for(h=B.length>1?1:0;h<B.length;h++)for(m=B[h],S=0;S<m.axes.length;S++)t.moveTo(m.position.x,m.position.y),t.lineTo((m.vertices[0].x+m.vertices[m.vertices.length-1].x)/2,(m.vertices[0].y+m.vertices[m.vertices.length-1].y)/2)}c.wireframes?(t.strokeStyle="indianred",t.lineWidth=1):(t.strokeStyle="rgba(255, 255, 255, 0.4)",t.globalCompositeOperation="overlay",t.lineWidth=2),t.stroke(),t.globalCompositeOperation="source-over"},l.bodyPositions=function(s,r,a){var t=a,d=s.engine,c=s.options,m,v,h,S;for(t.beginPath(),h=0;h<r.length;h++)if(m=r[h],!!m.render.visible)for(S=0;S<m.parts.length;S++)v=m.parts[S],t.arc(v.position.x,v.position.y,3,0,2*Math.PI,!1),t.closePath();for(c.wireframes?t.fillStyle="indianred":t.fillStyle="rgba(0,0,0,0.5)",t.fill(),t.beginPath(),h=0;h<r.length;h++)m=r[h],m.render.visible&&(t.arc(m.positionPrev.x,m.positionPrev.y,2,0,2*Math.PI,!1),t.closePath());t.fillStyle="rgba(255,165,0,0.8)",t.fill()},l.bodyVelocity=function(s,r,a){var t=a;t.beginPath();for(var d=0;d<r.length;d++){var c=r[d];c.render.visible&&(t.moveTo(c.position.x,c.position.y),t.lineTo(c.position.x+(c.position.x-c.positionPrev.x)*2,c.position.y+(c.position.y-c.positionPrev.y)*2))}t.lineWidth=3,t.strokeStyle="cornflowerblue",t.stroke()},l.bodyIds=function(s,r,a){var t=a,d,c;for(d=0;d<r.length;d++)if(r[d].render.visible){var m=r[d].parts;for(c=m.length>1?1:0;c<m.length;c++){var v=m[c];t.font="12px Arial",t.fillStyle="rgba(255,255,255,0.5)",t.fillText(v.id,v.position.x+10,v.position.y-10)}}},l.collisions=function(s,r,a){var t=a,d=s.options,c,m,v,h,S,R,B;for(t.beginPath(),R=0;R<r.length;R++)if(c=r[R],!!c.isActive)for(m=c.collision,B=0;B<c.activeContacts.length;B++){var H=c.activeContacts[B],V=H.vertex;t.rect(V.x-1.5,V.y-1.5,3.5,3.5)}for(d.wireframes?t.fillStyle="rgba(255,255,255,0.7)":t.fillStyle="orange",t.fill(),t.beginPath(),R=0;R<r.length;R++)if(c=r[R],!!c.isActive&&(m=c.collision,c.activeContacts.length>0)){var X=c.activeContacts[0].vertex.x,J=c.activeContacts[0].vertex.y;c.activeContacts.length===2&&(X=(c.activeContacts[0].vertex.x+c.activeContacts[1].vertex.x)/2,J=(c.activeContacts[0].vertex.y+c.activeContacts[1].vertex.y)/2),m.bodyB===m.supports[0].body||m.bodyA.isStatic===!0?t.moveTo(X-m.normal.x*8,J-m.normal.y*8):t.moveTo(X+m.normal.x*8,J+m.normal.y*8),t.lineTo(X,J)}d.wireframes?t.strokeStyle="rgba(255,165,0,0.7)":t.strokeStyle="orange",t.lineWidth=1,t.stroke()},l.separations=function(s,r,a){var t=a,d=s.options,c,m,v,h,S,R,B;for(t.beginPath(),R=0;R<r.length;R++)if(c=r[R],!!c.isActive){m=c.collision,h=m.bodyA,S=m.bodyB;var H=1;!S.isStatic&&!h.isStatic&&(H=.5),S.isStatic&&(H=0),t.moveTo(S.position.x,S.position.y),t.lineTo(S.position.x-m.penetration.x*H,S.position.y-m.penetration.y*H),H=1,!S.isStatic&&!h.isStatic&&(H=.5),h.isStatic&&(H=0),t.moveTo(h.position.x,h.position.y),t.lineTo(h.position.x+m.penetration.x*H,h.position.y+m.penetration.y*H)}d.wireframes?t.strokeStyle="rgba(255,165,0,0.5)":t.strokeStyle="orange",t.stroke()},l.grid=function(s,r,a){var t=a,d=s.options;d.wireframes?t.strokeStyle="rgba(255,180,0,0.1)":t.strokeStyle="rgba(255,180,0,0.5)",t.beginPath();for(var c=p.keys(r.buckets),m=0;m<c.length;m++){var v=c[m];if(!(r.buckets[v].length<2)){var h=v.split(/C|R/);t.rect(.5+parseInt(h[1],10)*r.bucketWidth,.5+parseInt(h[2],10)*r.bucketHeight,r.bucketWidth,r.bucketHeight)}}t.lineWidth=1,t.stroke()},l.inspector=function(s,r){var a=s.engine,t=s.selected,d=s.render,c=d.options,m;if(c.hasBounds){var v=d.bounds.max.x-d.bounds.min.x,h=d.bounds.max.y-d.bounds.min.y,S=v/d.options.width,R=h/d.options.height;r.scale(1/S,1/R),r.translate(-d.bounds.min.x,-d.bounds.min.y)}for(var B=0;B<t.length;B++){var H=t[B].data;switch(r.translate(.5,.5),r.lineWidth=1,r.strokeStyle="rgba(255,165,0,0.9)",r.setLineDash([1,2]),H.type){case"body":m=H.bounds,r.beginPath(),r.rect(Math.floor(m.min.x-3),Math.floor(m.min.y-3),Math.floor(m.max.x-m.min.x+6),Math.floor(m.max.y-m.min.y+6)),r.closePath(),r.stroke();break;case"constraint":var V=H.pointA;H.bodyA&&(V=H.pointB),r.beginPath(),r.arc(V.x,V.y,10,0,2*Math.PI),r.closePath(),r.stroke();break}r.setLineDash([]),r.translate(-.5,-.5)}s.selectStart!==null&&(r.translate(.5,.5),r.lineWidth=1,r.strokeStyle="rgba(255,165,0,0.6)",r.fillStyle="rgba(255,165,0,0.1)",m=s.selectBounds,r.beginPath(),r.rect(Math.floor(m.min.x),Math.floor(m.min.y),Math.floor(m.max.x-m.min.x),Math.floor(m.max.y-m.min.y)),r.closePath(),r.stroke(),r.fill(),r.translate(-.5,-.5)),c.hasBounds&&r.setTransform(1,0,0,1,0,0)};var C=function(s,r){var a=document.createElement("canvas");return a.width=s,a.height=r,a.oncontextmenu=function(){return!1},a.onselectstart=function(){return!1},a},N=function(s){var r=s.getContext("2d"),a=window.devicePixelRatio||1,t=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1;return a/t},P=function(s,r){var a=s.textures[r];return a||(a=s.textures[r]=new Image,a.src=r,a)},e=function(s,r){var a=r;/(jpg|gif|png)$/.test(r)&&(a="url("+r+")"),s.canvas.style.background=a,s.canvas.style.backgroundSize="contain",s.currentBackground=r}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(9),y=b(12),_=b(0);(function(){l.create=function(O){var k={controller:l,detector:y.collisions,buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return _.extend(k,O)},l.update=function(O,k,T,w){var j,f,C,N=T.world,P=O.buckets,e,s,r=!1,a=T.metrics;for(a.broadphaseTests=0,j=0;j<k.length;j++){var t=k[j];if(!(t.isSleeping&&!w)&&!(t.bounds.max.x<N.bounds.min.x||t.bounds.min.x>N.bounds.max.x||t.bounds.max.y<N.bounds.min.y||t.bounds.min.y>N.bounds.max.y)){var d=l._getRegion(O,t);if(!t.region||d.id!==t.region.id||w){a.broadphaseTests+=1,(!t.region||w)&&(t.region=d);var c=l._regionUnion(d,t.region);for(f=c.startCol;f<=c.endCol;f++)for(C=c.startRow;C<=c.endRow;C++){s=l._getBucketId(f,C),e=P[s];var m=f>=d.startCol&&f<=d.endCol&&C>=d.startRow&&C<=d.endRow,v=f>=t.region.startCol&&f<=t.region.endCol&&C>=t.region.startRow&&C<=t.region.endRow;!m&&v&&v&&e&&l._bucketRemoveBody(O,e,t),(t.region===d||m&&!v||w)&&(e||(e=l._createBucket(P,s)),l._bucketAddBody(O,e,t))}t.region=d,r=!0}}}r&&(O.pairsList=l._createActivePairsList(O))},l.clear=function(O){O.buckets={},O.pairs={},O.pairsList=[]},l._regionUnion=function(O,k){var T=Math.min(O.startCol,k.startCol),w=Math.max(O.endCol,k.endCol),j=Math.min(O.startRow,k.startRow),f=Math.max(O.endRow,k.endRow);return l._createRegion(T,w,j,f)},l._getRegion=function(O,k){var T=k.bounds,w=Math.floor(T.min.x/O.bucketWidth),j=Math.floor(T.max.x/O.bucketWidth),f=Math.floor(T.min.y/O.bucketHeight),C=Math.floor(T.max.y/O.bucketHeight);return l._createRegion(w,j,f,C)},l._createRegion=function(O,k,T,w){return{id:O+","+k+","+T+","+w,startCol:O,endCol:k,startRow:T,endRow:w}},l._getBucketId=function(O,k){return"C"+O+"R"+k},l._createBucket=function(O,k){var T=O[k]=[];return T},l._bucketAddBody=function(O,k,T){for(var w=0;w<k.length;w++){var j=k[w];if(!(T.id===j.id||T.isStatic&&j.isStatic)){var f=p.id(T,j),C=O.pairs[f];C?C[2]+=1:O.pairs[f]=[T,j,1]}}k.push(T)},l._bucketRemoveBody=function(O,k,T){k.splice(_.indexOf(k,T),1);for(var w=0;w<k.length;w++){var j=k[w],f=p.id(T,j),C=O.pairs[f];C&&(C[2]-=1)}},l._createActivePairsList=function(O){var k,T,w=[];k=_.keys(O.pairs);for(var j=0;j<k.length;j++)T=O.pairs[k[j]],T[2]>0?w.push(T):delete O.pairs[k[j]];return w}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(13),y=b(9),_=b(1);(function(){l.collisions=function(O,k){for(var T=[],w=k.pairs.table,j=k.metrics,f=0;f<O.length;f++){var C=O[f][0],N=O[f][1];if(!((C.isStatic||C.isSleeping)&&(N.isStatic||N.isSleeping))&&l.canCollide(C.collisionFilter,N.collisionFilter)&&(j.midphaseTests+=1,_.overlaps(C.bounds,N.bounds)))for(var P=C.parts.length>1?1:0;P<C.parts.length;P++)for(var e=C.parts[P],s=N.parts.length>1?1:0;s<N.parts.length;s++){var r=N.parts[s];if(e===C&&r===N||_.overlaps(e.bounds,r.bounds)){var a=y.id(e,r),t=w[a],d;t&&t.isActive?d=t.collision:d=null;var c=p.collides(e,r,d);j.narrowphaseTests+=1,c.reused&&(j.narrowReuseCount+=1),c.collided&&(T.push(c),j.narrowDetections+=1)}}}return T},l.canCollide=function(O,k){return O.group===k.group&&O.group!==0?O.group>0:(O.mask&k.category)!==0&&(k.mask&O.category)!==0}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(2);(function(){l.collides=function(_,O,k){var T,w,j,f,C=!1;if(k){var N=_.parent,P=O.parent,e=N.speed*N.speed+N.angularSpeed*N.angularSpeed+P.speed*P.speed+P.angularSpeed*P.angularSpeed;C=k&&k.collided&&e<.2,f=k}else f={collided:!1,bodyA:_,bodyB:O};if(k&&C){var s=f.axisBody,r=s===_?O:_,a=[s.axes[k.axisNumber]];if(j=l._overlapAxes(s.vertices,r.vertices,a),f.reused=!0,j.overlap<=0)return f.collided=!1,f}else{if(T=l._overlapAxes(_.vertices,O.vertices,_.axes),T.overlap<=0||(w=l._overlapAxes(O.vertices,_.vertices,O.axes),w.overlap<=0))return f.collided=!1,f;T.overlap<w.overlap?(j=T,f.axisBody=_):(j=w,f.axisBody=O),f.axisNumber=j.axisNumber}f.bodyA=_.id<O.id?_:O,f.bodyB=_.id<O.id?O:_,f.collided=!0,f.depth=j.overlap,f.parentA=f.bodyA.parent,f.parentB=f.bodyB.parent,_=f.bodyA,O=f.bodyB,y.dot(j.axis,y.sub(O.position,_.position))<0?f.normal={x:j.axis.x,y:j.axis.y}:f.normal={x:-j.axis.x,y:-j.axis.y},f.tangent=y.perp(f.normal),f.penetration=f.penetration||{},f.penetration.x=f.normal.x*f.depth,f.penetration.y=f.normal.y*f.depth;var t=l._findSupports(_,O,f.normal),d=[];if(p.contains(_.vertices,t[0])&&d.push(t[0]),p.contains(_.vertices,t[1])&&d.push(t[1]),d.length<2){var c=l._findSupports(O,_,y.neg(f.normal));p.contains(O.vertices,c[0])&&d.push(c[0]),d.length<2&&p.contains(O.vertices,c[1])&&d.push(c[1])}return d.length<1&&(d=[t[0]]),f.supports=d,f},l._overlapAxes=function(_,O,k){for(var T=y._temp[0],w=y._temp[1],j={overlap:Number.MAX_VALUE},f,C,N=0;N<k.length;N++){if(C=k[N],l._projectToAxis(T,_,C),l._projectToAxis(w,O,C),f=Math.min(T.max-w.min,w.max-T.min),f<=0)return j.overlap=f,j;f<j.overlap&&(j.overlap=f,j.axis=C,j.axisNumber=N)}return j},l._projectToAxis=function(_,O,k){for(var T=y.dot(O[0],k),w=T,j=1;j<O.length;j+=1){var f=y.dot(O[j],k);f>w?w=f:f<T&&(T=f)}_.min=T,_.max=w},l._findSupports=function(_,O,k){for(var T=Number.MAX_VALUE,w=y._temp[0],j=O.vertices,f=_.position,C,N,P,e,s=0;s<j.length;s++)N=j[s],w.x=N.x-f.x,w.y=N.y-f.y,C=-y.dot(k,w),C<T&&(T=C,P=N);var r=P.index-1>=0?P.index-1:j.length-1;N=j[r],w.x=N.x-f.x,w.y=N.y-f.y,T=-y.dot(k,w),e=N;var a=(P.index+1)%j.length;return N=j[a],w.x=N.x-f.x,w.y=N.y-f.y,C=-y.dot(k,w),C<T&&(e=N),[P,e]}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(0);(function(){l.create=function(y){var _={};return y||p.log("Mouse.create: element was undefined, defaulting to document.body","warn"),_.element=y||document.body,_.absolute={x:0,y:0},_.position={x:0,y:0},_.mousedownPosition={x:0,y:0},_.mouseupPosition={x:0,y:0},_.offset={x:0,y:0},_.scale={x:1,y:1},_.wheelDelta=0,_.button=-1,_.pixelRatio=parseInt(_.element.getAttribute("data-pixel-ratio"),10)||1,_.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},_.mousemove=function(O){var k=l._getRelativeMousePosition(O,_.element,_.pixelRatio),T=O.changedTouches;T&&(_.button=0,O.preventDefault()),_.absolute.x=k.x,_.absolute.y=k.y,_.position.x=_.absolute.x*_.scale.x+_.offset.x,_.position.y=_.absolute.y*_.scale.y+_.offset.y,_.sourceEvents.mousemove=O},_.mousedown=function(O){var k=l._getRelativeMousePosition(O,_.element,_.pixelRatio),T=O.changedTouches;T?(_.button=0,O.preventDefault()):_.button=O.button,_.absolute.x=k.x,_.absolute.y=k.y,_.position.x=_.absolute.x*_.scale.x+_.offset.x,_.position.y=_.absolute.y*_.scale.y+_.offset.y,_.mousedownPosition.x=_.position.x,_.mousedownPosition.y=_.position.y,_.sourceEvents.mousedown=O},_.mouseup=function(O){var k=l._getRelativeMousePosition(O,_.element,_.pixelRatio),T=O.changedTouches;T&&O.preventDefault(),_.button=-1,_.absolute.x=k.x,_.absolute.y=k.y,_.position.x=_.absolute.x*_.scale.x+_.offset.x,_.position.y=_.absolute.y*_.scale.y+_.offset.y,_.mouseupPosition.x=_.position.x,_.mouseupPosition.y=_.position.y,_.sourceEvents.mouseup=O},_.mousewheel=function(O){_.wheelDelta=Math.max(-1,Math.min(1,O.wheelDelta||-O.detail)),O.preventDefault()},l.setElement(_,_.element),_},l.setElement=function(y,_){y.element=_,_.addEventListener("mousemove",y.mousemove),_.addEventListener("mousedown",y.mousedown),_.addEventListener("mouseup",y.mouseup),_.addEventListener("mousewheel",y.mousewheel),_.addEventListener("DOMMouseScroll",y.mousewheel),_.addEventListener("touchmove",y.mousemove),_.addEventListener("touchstart",y.mousedown),_.addEventListener("touchend",y.mouseup)},l.clearSourceEvents=function(y){y.sourceEvents.mousemove=null,y.sourceEvents.mousedown=null,y.sourceEvents.mouseup=null,y.sourceEvents.mousewheel=null,y.wheelDelta=0},l.setOffset=function(y,_){y.offset.x=_.x,y.offset.y=_.y,y.position.x=y.absolute.x*y.scale.x+y.offset.x,y.position.y=y.absolute.y*y.scale.y+y.offset.y},l.setScale=function(y,_){y.scale.x=_.x,y.scale.y=_.y,y.position.x=y.absolute.x*y.scale.x+y.offset.x,y.position.y=y.absolute.y*y.scale.y+y.offset.y},l._getRelativeMousePosition=function(y,_,O){var k=_.getBoundingClientRect(),T=document.documentElement||document.body.parentNode||document.body,w=window.pageXOffset!==void 0?window.pageXOffset:T.scrollLeft,j=window.pageYOffset!==void 0?window.pageYOffset:T.scrollTop,f=y.changedTouches,C,N;return f?(C=f[0].pageX-k.left-w,N=f[0].pageY-k.top-j):(C=y.pageX-k.left-w,N=y.pageY-k.top-j),{x:C/(_.clientWidth/(_.width||_.clientWidth)*O),y:N/(_.clientHeight/(_.height||_.clientHeight)*O)}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(2),y=b(0);(function(){l.fromVertices=function(_){for(var O={},k=0;k<_.length;k++){var T=(k+1)%_.length,w=p.normalise({x:_[T].y-_[k].y,y:_[k].x-_[T].x}),j=w.y===0?1/0:w.x/w.y;j=j.toFixed(3).toString(),O[j]=w}return y.values(O)},l.rotate=function(_,O){if(O!==0)for(var k=Math.cos(O),T=Math.sin(O),w=0;w<_.length;w++){var j=_[w],f;f=j.x*k-j.y*T,j.y=j.x*T+j.y*k,j.x=f}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(0),_=b(6),O=b(1),k=b(2);(function(){l._decompWarned=!1,l.rectangle=function(T,w,j,f,C){C=C||{};var N={label:"Rectangle Body",position:{x:T,y:w},vertices:p.fromPath("L 0 0 L "+j+" 0 L "+j+" "+f+" L 0 "+f)};if(C.chamfer){var P=C.chamfer;N.vertices=p.chamfer(N.vertices,P.radius,P.quality,P.qualityMin,P.qualityMax),delete C.chamfer}return _.create(y.extend({},N,C))},l.trapezoid=function(T,w,j,f,C,N){N=N||{},C*=.5;var P=(1-C*2)*j,e=j*C,s=e+P,r=s+e,a;C<.5?a="L 0 0 L "+e+" "+-f+" L "+s+" "+-f+" L "+r+" 0":a="L 0 0 L "+s+" "+-f+" L "+r+" 0";var t={label:"Trapezoid Body",position:{x:T,y:w},vertices:p.fromPath(a)};if(N.chamfer){var d=N.chamfer;t.vertices=p.chamfer(t.vertices,d.radius,d.quality,d.qualityMin,d.qualityMax),delete N.chamfer}return _.create(y.extend({},t,N))},l.circle=function(T,w,j,f,C){f=f||{};var N={label:"Circle Body",circleRadius:j};C=C||25;var P=Math.ceil(Math.max(10,Math.min(C,j)));return P%2===1&&(P+=1),l.polygon(T,w,P,j,y.extend({},N,f))},l.polygon=function(T,w,j,f,C){if(C=C||{},j<3)return l.circle(T,w,f,C);for(var N=2*Math.PI/j,P="",e=N*.5,s=0;s<j;s+=1){var r=e+s*N,a=Math.cos(r)*f,t=Math.sin(r)*f;P+="L "+a.toFixed(3)+" "+t.toFixed(3)+" "}var d={label:"Polygon Body",position:{x:T,y:w},vertices:p.fromPath(P)};if(C.chamfer){var c=C.chamfer;d.vertices=p.chamfer(d.vertices,c.radius,c.quality,c.qualityMin,c.qualityMax),delete C.chamfer}return _.create(y.extend({},d,C))},l.fromVertices=function(T,w,j,f,C,N,P,e){var s,r,a,t,d,c,m,v,h,S,R,B;try{s=b(27)}catch{s=null}for(r=!!(s&&s.quickDecomp),f=f||{},t=[],C=typeof C<"u"?C:!1,N=typeof N<"u"?N:.01,P=typeof P<"u"?P:10,e=typeof e<"u"?e:.01,y.isArray(j[0])||(j=[j]),R=0;R<j.length;R+=1)if(m=j[R],d=p.isConvex(m),c=!d,c&&!r&&!l._decompWarned&&(y.warn("Could not resolve the expected 'poly-decomp' package for concave vertices in 'Bodies.fromVertices'"),y.warn("Try 'npm install poly-decomp --save' or as a global e.g. 'window.decomp'"),l._decompWarned=!0),d||!r)d?m=p.clockwiseSort(m):m=p.hull(m),t.push({position:{x:T,y:w},vertices:m});else{var H=m.map(function(Oe){return[Oe.x,Oe.y]});s.makeCCW(H),N!==!1&&s.removeCollinearPoints(H,N),e!==!1&&s.removeDuplicatePoints&&s.removeDuplicatePoints(H,e);var V=s.quickDecomp(H);for(v=0;v<V.length;v++){var X=V[v],J=X.map(function(Oe){return{x:Oe[0],y:Oe[1]}});P>0&&p.area(J)<P||t.push({position:p.centre(J),vertices:J})}}for(v=0;v<t.length;v++)t[v]=_.create(y.extend(t[v],f));if(C){var de=5;for(v=0;v<t.length;v++){var ge=t[v];for(h=v+1;h<t.length;h++){var ce=t[h];if(O.overlaps(ge.bounds,ce.bounds)){var ye=ge.vertices,ze=ce.vertices;for(S=0;S<ge.vertices.length;S++)for(B=0;B<ce.vertices.length;B++){var Be=k.magnitudeSquared(k.sub(ye[(S+1)%ye.length],ze[B])),ke=k.magnitudeSquared(k.sub(ye[S],ze[(B+1)%ze.length]));Be<de&&ke<de&&(ye[S].isInternal=!0,ze[B].isInternal=!0)}}}}}return t.length>1?(a=_.create(y.extend({parts:t.slice(0)},f)),_.setPosition(a,{x:T,y:w}),a):t[0]}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(0);(function(){l._registry={},l.register=function(y){if(l.isPlugin(y)||p.warn("Plugin.register:",l.toString(y),"does not implement all required fields."),y.name in l._registry){var _=l._registry[y.name],O=l.versionParse(y.version).number,k=l.versionParse(_.version).number;O>k?(p.warn("Plugin.register:",l.toString(_),"was upgraded to",l.toString(y)),l._registry[y.name]=y):O<k?p.warn("Plugin.register:",l.toString(_),"can not be downgraded to",l.toString(y)):y!==_&&p.warn("Plugin.register:",l.toString(y),"is already registered to different plugin object")}else l._registry[y.name]=y;return y},l.resolve=function(y){return l._registry[l.dependencyParse(y).name]},l.toString=function(y){return typeof y=="string"?y:(y.name||"anonymous")+"@"+(y.version||y.range||"0.0.0")},l.isPlugin=function(y){return y&&y.name&&y.version&&y.install},l.isUsed=function(y,_){return y.used.indexOf(_)>-1},l.isFor=function(y,_){var O=y.for&&l.dependencyParse(y.for);return!y.for||_.name===O.name&&l.versionSatisfies(_.version,O.range)},l.use=function(y,_){if(y.uses=(y.uses||[]).concat(_||[]),y.uses.length===0){p.warn("Plugin.use:",l.toString(y),"does not specify any dependencies to install.");return}for(var O=l.dependencies(y),k=p.topologicalSort(O),T=[],w=0;w<k.length;w+=1)if(k[w]!==y.name){var j=l.resolve(k[w]);if(!j){T.push("\u274C "+k[w]);continue}l.isUsed(y,j.name)||(l.isFor(j,y)||(p.warn("Plugin.use:",l.toString(j),"is for",j.for,"but installed on",l.toString(y)+"."),j._warned=!0),j.install?j.install(y):(p.warn("Plugin.use:",l.toString(j),"does not specify an install function."),j._warned=!0),j._warned?(T.push("\u{1F536} "+l.toString(j)),delete j._warned):T.push("\u2705 "+l.toString(j)),y.used.push(j.name))}T.length>0&&p.info(T.join("  "))},l.dependencies=function(y,_){var O=l.dependencyParse(y),k=O.name;if(_=_||{},!(k in _)){y=l.resolve(y)||y,_[k]=p.map(y.uses||[],function(w){l.isPlugin(w)&&l.register(w);var j=l.dependencyParse(w),f=l.resolve(w);return f&&!l.versionSatisfies(f.version,j.range)?(p.warn("Plugin.dependencies:",l.toString(f),"does not satisfy",l.toString(j),"used by",l.toString(O)+"."),f._warned=!0,y._warned=!0):f||(p.warn("Plugin.dependencies:",l.toString(w),"used by",l.toString(O),"could not be resolved."),y._warned=!0),j.name});for(var T=0;T<_[k].length;T+=1)l.dependencies(_[k][T],_);return _}},l.dependencyParse=function(y){if(p.isString(y)){var _=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;return _.test(y)||p.warn("Plugin.dependencyParse:",y,"is not a valid dependency string."),{name:y.split("@")[0],range:y.split("@")[1]||"*"}}return{name:y.name,range:y.range||y.version}},l.versionParse=function(y){var _=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-]+)?$/;_.test(y)||p.warn("Plugin.versionParse:",y,"is not a valid version or range.");var O=_.exec(y),k=Number(O[4]),T=Number(O[5]),w=Number(O[6]);return{isRange:!!(O[1]||O[2]),version:O[3],range:y,operator:O[1]||O[2]||"",major:k,minor:T,patch:w,parts:[k,T,w],prerelease:O[7],number:k*1e8+T*1e4+w}},l.versionSatisfies=function(y,_){_=_||"*";var O=l.versionParse(_),k=l.versionParse(y);if(O.isRange){if(O.operator==="*"||y==="*")return!0;if(O.operator===">")return k.number>O.number;if(O.operator===">=")return k.number>=O.number;if(O.operator==="~")return k.major===O.major&&k.minor===O.minor&&k.patch>=O.patch;if(O.operator==="^")return O.major>0?k.major===O.major&&k.number>=O.number:O.minor>0?k.minor===O.minor&&k.patch>=O.patch:k.patch===O.patch}return y===_||y==="*"}})()}),(function(A,z){var b={};A.exports=b,(function(){b.create=function(l){return{id:b.id(l),vertex:l,normalImpulse:0,tangentImpulse:0}},b.id=function(l){return l.body.id+"_"+l.index}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(5),y=b(8),_=b(0);(function(){l.create=function(O){var k=p.create(),T={label:"World",gravity:{x:0,y:1,scale:.001},bounds:{min:{x:-1/0,y:-1/0},max:{x:1/0,y:1/0}}};return _.extend(k,T,O)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(9),y=b(0);(function(){l._pairMaxIdleLife=1e3,l.create=function(_){return y.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},_)},l.update=function(_,O,k){var T=_.list,w=_.table,j=_.collisionStart,f=_.collisionEnd,C=_.collisionActive,N,P,e,s;for(j.length=0,f.length=0,C.length=0,s=0;s<T.length;s++)T[s].confirmedActive=!1;for(s=0;s<O.length;s++)N=O[s],N.collided&&(P=p.id(N.bodyA,N.bodyB),e=w[P],e?(e.isActive?C.push(e):j.push(e),p.update(e,N,k),e.confirmedActive=!0):(e=p.create(N,k),w[P]=e,j.push(e),T.push(e)));for(s=0;s<T.length;s++)e=T[s],e.isActive&&!e.confirmedActive&&(p.setActive(e,!1,k),f.push(e))},l.removeOld=function(_,O){var k=_.list,T=_.table,w=[],j,f,C,N;for(N=0;N<k.length;N++){if(j=k[N],f=j.collision,f.bodyA.isSleeping||f.bodyB.isSleeping){j.timeUpdated=O;continue}O-j.timeUpdated>l._pairMaxIdleLife&&w.push(N)}for(N=0;N<w.length;N++)C=w[N]-N,j=k[C],delete T[j.id],k.splice(C,1)},l.clear=function(_){return _.table={},_.list.length=0,_.collisionStart.length=0,_.collisionActive.length=0,_.collisionEnd.length=0,_}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(2),_=b(0),O=b(1);(function(){l._restingThresh=4,l._restingThreshTangent=6,l._positionDampen=.9,l._positionWarming=.8,l._frictionNormalMultiplier=5,l.preSolvePosition=function(k){var T,w,j;for(T=0;T<k.length;T++)w=k[T],w.isActive&&(j=w.activeContacts.length,w.collision.parentA.totalContacts+=j,w.collision.parentB.totalContacts+=j)},l.solvePosition=function(k,T){var w,j,f,C,N,P,e,s,r,a={},t=y._temp[0],d=y._temp[1],c=y._temp[2],m=y._temp[3];for(w=0;w<k.length;w++)j=k[w],!(!j.isActive||j.isSensor)&&(f=j.collision,C=f.parentA,N=f.parentB,P=f.normal,e=y.sub(y.add(N.positionImpulse,N.position,t),y.add(C.positionImpulse,y.sub(N.position,f.penetration,d),c),m),j.separation=y.dot(P,e));for(w=0;w<k.length;w++)j=k[w],!(!j.isActive||j.isSensor)&&(f=j.collision,C=f.parentA,N=f.parentB,P=f.normal,r=(j.separation-j.slop)*T,(C.isStatic||N.isStatic)&&(r*=2),C.isStatic||C.isSleeping||(s=l._positionDampen/C.totalContacts,C.positionImpulse.x+=P.x*r*s,C.positionImpulse.y+=P.y*r*s),N.isStatic||N.isSleeping||(s=l._positionDampen/N.totalContacts,N.positionImpulse.x-=P.x*r*s,N.positionImpulse.y-=P.y*r*s))},l.postSolvePosition=function(k){for(var T=0;T<k.length;T++){var w=k[T];if(w.totalContacts=0,w.positionImpulse.x!==0||w.positionImpulse.y!==0){for(var j=0;j<w.parts.length;j++){var f=w.parts[j];p.translate(f.vertices,w.positionImpulse),O.update(f.bounds,f.vertices,w.velocity),f.position.x+=w.positionImpulse.x,f.position.y+=w.positionImpulse.y}w.positionPrev.x+=w.positionImpulse.x,w.positionPrev.y+=w.positionImpulse.y,y.dot(w.positionImpulse,w.velocity)<0?(w.positionImpulse.x=0,w.positionImpulse.y=0):(w.positionImpulse.x*=l._positionWarming,w.positionImpulse.y*=l._positionWarming)}}},l.preSolveVelocity=function(k){var T,w,j,f,C,N,P,e,s,r,a,t,d,c,m=y._temp[0],v=y._temp[1];for(T=0;T<k.length;T++)if(j=k[T],!(!j.isActive||j.isSensor))for(f=j.activeContacts,C=j.collision,N=C.parentA,P=C.parentB,e=C.normal,s=C.tangent,w=0;w<f.length;w++)r=f[w],a=r.vertex,t=r.normalImpulse,d=r.tangentImpulse,(t!==0||d!==0)&&(m.x=e.x*t+s.x*d,m.y=e.y*t+s.y*d,N.isStatic||N.isSleeping||(c=y.sub(a,N.position,v),N.positionPrev.x+=m.x*N.inverseMass,N.positionPrev.y+=m.y*N.inverseMass,N.anglePrev+=y.cross(c,m)*N.inverseInertia),P.isStatic||P.isSleeping||(c=y.sub(a,P.position,v),P.positionPrev.x-=m.x*P.inverseMass,P.positionPrev.y-=m.y*P.inverseMass,P.anglePrev-=y.cross(c,m)*P.inverseInertia))},l.solveVelocity=function(k,T){for(var w=T*T,j=y._temp[0],f=y._temp[1],C=y._temp[2],N=y._temp[3],P=y._temp[4],e=y._temp[5],s=0;s<k.length;s++){var r=k[s];if(!(!r.isActive||r.isSensor)){var a=r.collision,t=a.parentA,d=a.parentB,c=a.normal,m=a.tangent,v=r.activeContacts,h=1/v.length;t.velocity.x=t.position.x-t.positionPrev.x,t.velocity.y=t.position.y-t.positionPrev.y,d.velocity.x=d.position.x-d.positionPrev.x,d.velocity.y=d.position.y-d.positionPrev.y,t.angularVelocity=t.angle-t.anglePrev,d.angularVelocity=d.angle-d.anglePrev;for(var S=0;S<v.length;S++){var R=v[S],B=R.vertex,H=y.sub(B,t.position,f),V=y.sub(B,d.position,C),X=y.add(t.velocity,y.mult(y.perp(H),t.angularVelocity),N),J=y.add(d.velocity,y.mult(y.perp(V),d.angularVelocity),P),de=y.sub(X,J,e),ge=y.dot(c,de),ce=y.dot(m,de),ye=Math.abs(ce),ze=_.sign(ce),Be=(1+r.restitution)*ge,ke=_.clamp(r.separation+ge,0,1)*l._frictionNormalMultiplier,Oe=ce,Ke=1/0;ye>r.friction*r.frictionStatic*ke*w&&(Ke=ye,Oe=_.clamp(r.friction*ze*w,-Ke,Ke));var Qe=y.cross(H,c),Ye=y.cross(V,c),ae=h/(t.inverseMass+d.inverseMass+t.inverseInertia*Qe*Qe+d.inverseInertia*Ye*Ye);if(Be*=ae,Oe*=ae,ge<0&&ge*ge>l._restingThresh*w)R.normalImpulse=0;else{var st=R.normalImpulse;R.normalImpulse=Math.min(R.normalImpulse+Be,0),Be=R.normalImpulse-st}if(ce*ce>l._restingThreshTangent*w)R.tangentImpulse=0;else{var $e=R.tangentImpulse;R.tangentImpulse=_.clamp(R.tangentImpulse+Oe,-Ke,Ke),Oe=R.tangentImpulse-$e}j.x=c.x*Be+m.x*Oe,j.y=c.y*Be+m.y*Oe,t.isStatic||t.isSleeping||(t.positionPrev.x+=j.x*t.inverseMass,t.positionPrev.y+=j.y*t.inverseMass,t.anglePrev+=y.cross(H,j)*t.inverseInertia),d.isStatic||d.isSleeping||(d.positionPrev.x-=j.x*d.inverseMass,d.positionPrev.y-=j.y*d.inverseMass,d.anglePrev-=y.cross(V,j)*d.inverseInertia)}}}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(19),y=b(7),_=b(21),O=b(10),k=b(20),T=b(23),w=b(11),j=b(4),f=b(5),C=b(8),N=b(0),P=b(6);(function(){l.create=function(e,s){s=N.isElement(e)?s:e,e=N.isElement(e)?e:null,s=s||{},(e||s.render)&&N.warn("Engine.create: engine.render is deprecated (see docs)");var r={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},timing:{timestamp:0,timeScale:1},broadphase:{controller:w}},a=N.extend(r,s);if(e||a.render){var t={element:e,controller:O};a.render=N.extend(t,a.render)}return a.render&&a.render.controller&&(a.render=a.render.controller.create(a.render)),a.render&&(a.render.engine=a),a.world=s.world||p.create(a.world),a.pairs=k.create(),a.broadphase=a.broadphase.controller.create(a.broadphase),a.metrics=a.metrics||{extended:!1},a.metrics=T.create(a.metrics),a},l.update=function(e,s,r){s=s||1e3/60,r=r||1;var a=e.world,t=e.timing,d=e.broadphase,c=[],m;t.timestamp+=s*t.timeScale;var v={timestamp:t.timestamp};j.trigger(e,"beforeUpdate",v);var h=f.allBodies(a),S=f.allConstraints(a);for(T.reset(e.metrics),e.enableSleeping&&y.update(h,t.timeScale),l._bodiesApplyGravity(h,a.gravity),l._bodiesUpdate(h,s,t.timeScale,r,a.bounds),C.preSolveAll(h),m=0;m<e.constraintIterations;m++)C.solveAll(S,t.timeScale);C.postSolveAll(h),d.controller?(a.isModified&&d.controller.clear(d),d.controller.update(d,h,e,a.isModified),c=d.pairsList):c=h,a.isModified&&f.setModified(a,!1,!1,!0);var R=d.detector(c,e),B=e.pairs,H=t.timestamp;for(k.update(B,R,H),k.removeOld(B,H),e.enableSleeping&&y.afterCollisions(B.list,t.timeScale),B.collisionStart.length>0&&j.trigger(e,"collisionStart",{pairs:B.collisionStart}),_.preSolvePosition(B.list),m=0;m<e.positionIterations;m++)_.solvePosition(B.list,t.timeScale);for(_.postSolvePosition(h),C.preSolveAll(h),m=0;m<e.constraintIterations;m++)C.solveAll(S,t.timeScale);for(C.postSolveAll(h),_.preSolveVelocity(B.list),m=0;m<e.velocityIterations;m++)_.solveVelocity(B.list,t.timeScale);return B.collisionActive.length>0&&j.trigger(e,"collisionActive",{pairs:B.collisionActive}),B.collisionEnd.length>0&&j.trigger(e,"collisionEnd",{pairs:B.collisionEnd}),T.update(e.metrics,e),l._bodiesClearForces(h),j.trigger(e,"afterUpdate",v),e},l.merge=function(e,s){if(N.extend(e,s),s.world){e.world=s.world,l.clear(e);for(var r=f.allBodies(e.world),a=0;a<r.length;a++){var t=r[a];y.set(t,!1),t.id=N.nextId()}}},l.clear=function(e){var s=e.world;k.clear(e.pairs);var r=e.broadphase;if(r.controller){var a=f.allBodies(s);r.controller.clear(r),r.controller.update(r,a,e,!0)}},l._bodiesClearForces=function(e){for(var s=0;s<e.length;s++){var r=e[s];r.force.x=0,r.force.y=0,r.torque=0}},l._bodiesApplyGravity=function(e,s){var r=typeof s.scale<"u"?s.scale:.001;if(!(s.x===0&&s.y===0||r===0))for(var a=0;a<e.length;a++){var t=e[a];t.isStatic||t.isSleeping||(t.force.y+=t.mass*s.y*r,t.force.x+=t.mass*s.x*r)}},l._bodiesUpdate=function(e,s,r,a,t){for(var d=0;d<e.length;d++){var c=e[d];c.isStatic||c.isSleeping||P.update(c,s,r,a)}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(5),y=b(0);(function(){l.create=function(_){var O={extended:!1,narrowDetections:0,narrowphaseTests:0,narrowReuse:0,narrowReuseCount:0,midphaseTests:0,broadphaseTests:0,narrowEff:1e-4,midEff:1e-4,broadEff:1e-4,collisions:0,buckets:0,bodies:0,pairs:0};return y.extend(O,!1,_)},l.reset=function(_){_.extended&&(_.narrowDetections=0,_.narrowphaseTests=0,_.narrowReuse=0,_.narrowReuseCount=0,_.midphaseTests=0,_.broadphaseTests=0,_.narrowEff=0,_.midEff=0,_.broadEff=0,_.collisions=0,_.buckets=0,_.pairs=0,_.bodies=0)},l.update=function(_,O){if(_.extended){var k=O.world,T=p.allBodies(k);_.collisions=_.narrowDetections,_.pairs=O.pairs.list.length,_.bodies=T.length,_.midEff=(_.narrowDetections/(_.midphaseTests||1)).toFixed(2),_.narrowEff=(_.narrowDetections/(_.narrowphaseTests||1)).toFixed(2),_.broadEff=(1-_.broadphaseTests/(T.length||1)).toFixed(2),_.narrowReuse=(_.narrowReuseCount/(_.narrowphaseTests||1)).toFixed(2)}}})()}),(function(A,z,b){var l=A.exports=b(25);l.Body=b(6),l.Composite=b(5),l.World=b(19),l.Contact=b(18),l.Detector=b(12),l.Grid=b(11),l.Pairs=b(20),l.Pair=b(9),l.Query=b(26),l.Resolver=b(21),l.SAT=b(13),l.Constraint=b(8),l.MouseConstraint=b(28),l.Common=b(0),l.Engine=b(22),l.Events=b(4),l.Mouse=b(14),l.Runner=b(29),l.Sleeping=b(7),l.Plugin=b(17),l.Metrics=b(23),l.Bodies=b(16),l.Composites=b(30),l.Axes=b(15),l.Bounds=b(1),l.Svg=b(31),l.Vector=b(2),l.Vertices=b(3),l.Render=b(10),l.RenderPixi=b(32),l.World.add=l.Composite.add,l.World.remove=l.Composite.remove,l.World.addComposite=l.Composite.addComposite,l.World.addBody=l.Composite.addBody,l.World.addConstraint=l.Composite.addConstraint,l.World.clear=l.Composite.clear,l.Engine.run=l.Runner.run}),(function(A,z,b){var l={};A.exports=l;var p=b(17),y=b(0);(function(){l.name="matter-js",l.version="0.16.1",l.uses=[],l.used=[],l.use=function(){p.use(l,Array.prototype.slice.call(arguments))},l.before=function(_,O){return _=_.replace(/^Matter./,""),y.chainPathBefore(l,_,O)},l.after=function(_,O){return _=_.replace(/^Matter./,""),y.chainPathAfter(l,_,O)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(2),y=b(13),_=b(1),O=b(16),k=b(3);(function(){l.collides=function(T,w){for(var j=[],f=0;f<w.length;f++){var C=w[f];if(_.overlaps(C.bounds,T.bounds))for(var N=C.parts.length===1?0:1;N<C.parts.length;N++){var P=C.parts[N];if(_.overlaps(P.bounds,T.bounds)){var e=y.collides(P,T);if(e.collided){j.push(e);break}}}}return j},l.ray=function(T,w,j,f){f=f||1e-100;for(var C=p.angle(w,j),N=p.magnitude(p.sub(w,j)),P=(j.x+w.x)*.5,e=(j.y+w.y)*.5,s=O.rectangle(P,e,N,f,{angle:C}),r=l.collides(s,T),a=0;a<r.length;a+=1){var t=r[a];t.body=t.bodyB=t.bodyA}return r},l.region=function(T,w,j){for(var f=[],C=0;C<T.length;C++){var N=T[C],P=_.overlaps(N.bounds,w);(P&&!j||!P&&j)&&f.push(N)}return f},l.point=function(T,w){for(var j=[],f=0;f<T.length;f++){var C=T[f];if(_.contains(C.bounds,w))for(var N=C.parts.length===1?0:1;N<C.parts.length;N++){var P=C.parts[N];if(_.contains(P.bounds,w)&&k.contains(P.vertices,w)){j.push(C);break}}}return j}})()}),(function(A,z){if(typeof i>"u"){var b=new Error("Cannot find module 'undefined'");throw b.code="MODULE_NOT_FOUND",b}A.exports=i}),(function(A,z,b){var l={};A.exports=l;var p=b(3),y=b(7),_=b(14),O=b(4),k=b(12),T=b(8),w=b(5),j=b(0),f=b(1);(function(){l.create=function(C,N){var P=(C?C.mouse:null)||(N?N.mouse:null);P||(C&&C.render&&C.render.canvas?P=_.create(C.render.canvas):N&&N.element?P=_.create(N.element):(P=_.create(),j.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var e=T.create({label:"Mouse Constraint",pointA:P.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),s={type:"mouseConstraint",mouse:P,element:null,body:null,constraint:e,collisionFilter:{category:1,mask:4294967295,group:0}},r=j.extend(s,N);return O.on(C,"beforeUpdate",function(){var a=w.allBodies(C.world);l.update(r,a),l._triggerEvents(r)}),r},l.update=function(C,N){var P=C.mouse,e=C.constraint,s=C.body;if(P.button===0){if(e.bodyB)y.set(e.bodyB,!1),e.pointA=P.position;else for(var r=0;r<N.length;r++)if(s=N[r],f.contains(s.bounds,P.position)&&k.canCollide(s.collisionFilter,C.collisionFilter))for(var a=s.parts.length>1?1:0;a<s.parts.length;a++){var t=s.parts[a];if(p.contains(t.vertices,P.position)){e.pointA=P.position,e.bodyB=C.body=s,e.pointB={x:P.position.x-s.position.x,y:P.position.y-s.position.y},e.angleB=s.angle,y.set(s,!1),O.trigger(C,"startdrag",{mouse:P,body:s});break}}}else e.bodyB=C.body=null,e.pointB=null,s&&O.trigger(C,"enddrag",{mouse:P,body:s})},l._triggerEvents=function(C){var N=C.mouse,P=N.sourceEvents;P.mousemove&&O.trigger(C,"mousemove",{mouse:N}),P.mousedown&&O.trigger(C,"mousedown",{mouse:N}),P.mouseup&&O.trigger(C,"mouseup",{mouse:N}),_.clearSourceEvents(N)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(4),y=b(22),_=b(0);(function(){var O,k;if(typeof window<"u"&&(O=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,k=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!O){var T;O=function(w){T=setTimeout(function(){w(_.now())},1e3/60)},k=function(){clearTimeout(T)}}l.create=function(w){var j={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},f=_.extend(j,w);return f.delta=f.delta||1e3/f.fps,f.deltaMin=f.deltaMin||1e3/f.fps,f.deltaMax=f.deltaMax||1e3/(f.fps*.5),f.fps=1e3/f.delta,f},l.run=function(w,j){return typeof w.positionIterations<"u"&&(j=w,w=l.create()),(function f(C){w.frameRequestId=O(f),C&&w.enabled&&l.tick(w,j,C)})(),w},l.tick=function(w,j,f){var C=j.timing,N=1,P,e={timestamp:C.timestamp};p.trigger(w,"beforeTick",e),p.trigger(j,"beforeTick",e),w.isFixed?P=w.delta:(P=f-w.timePrev||w.delta,w.timePrev=f,w.deltaHistory.push(P),w.deltaHistory=w.deltaHistory.slice(-w.deltaSampleSize),P=Math.min.apply(null,w.deltaHistory),P=P<w.deltaMin?w.deltaMin:P,P=P>w.deltaMax?w.deltaMax:P,N=P/w.delta,w.delta=P),w.timeScalePrev!==0&&(N*=C.timeScale/w.timeScalePrev),C.timeScale===0&&(N=0),w.timeScalePrev=C.timeScale,w.correction=N,w.frameCounter+=1,f-w.counterTimestamp>=1e3&&(w.fps=w.frameCounter*((f-w.counterTimestamp)/1e3),w.counterTimestamp=f,w.frameCounter=0),p.trigger(w,"tick",e),p.trigger(j,"tick",e),j.world.isModified&&j.render&&j.render.controller&&j.render.controller.clear&&j.render.controller.clear(j.render),p.trigger(w,"beforeUpdate",e),y.update(j,P,N),p.trigger(w,"afterUpdate",e),j.render&&j.render.controller&&(p.trigger(w,"beforeRender",e),p.trigger(j,"beforeRender",e),j.render.controller.world(j.render),p.trigger(w,"afterRender",e),p.trigger(j,"afterRender",e)),p.trigger(w,"afterTick",e),p.trigger(j,"afterTick",e)},l.stop=function(w){k(w.frameRequestId)},l.start=function(w,j){l.run(w,j)}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(5),y=b(8),_=b(0),O=b(6),k=b(16);(function(){l.stack=function(T,w,j,f,C,N,P){for(var e=p.create({label:"Stack"}),s=T,r=w,a,t=0,d=0;d<f;d++){for(var c=0,m=0;m<j;m++){var v=P(s,r,m,d,a,t);if(v){var h=v.bounds.max.y-v.bounds.min.y,S=v.bounds.max.x-v.bounds.min.x;h>c&&(c=h),O.translate(v,{x:S*.5,y:h*.5}),s=v.bounds.max.x+C,p.addBody(e,v),a=v,t+=1}else s+=C}r+=c+N,s=T}return e},l.chain=function(T,w,j,f,C,N){for(var P=T.bodies,e=1;e<P.length;e++){var s=P[e-1],r=P[e],a=s.bounds.max.y-s.bounds.min.y,t=s.bounds.max.x-s.bounds.min.x,d=r.bounds.max.y-r.bounds.min.y,c=r.bounds.max.x-r.bounds.min.x,m={bodyA:s,pointA:{x:t*w,y:a*j},bodyB:r,pointB:{x:c*f,y:d*C}},v=_.extend(m,N);p.addConstraint(T,y.create(v))}return T.label+=" Chain",T},l.mesh=function(T,w,j,f,C){var N=T.bodies,P,e,s,r,a;for(P=0;P<j;P++){for(e=1;e<w;e++)s=N[e-1+P*w],r=N[e+P*w],p.addConstraint(T,y.create(_.extend({bodyA:s,bodyB:r},C)));if(P>0)for(e=0;e<w;e++)s=N[e+(P-1)*w],r=N[e+P*w],p.addConstraint(T,y.create(_.extend({bodyA:s,bodyB:r},C))),f&&e>0&&(a=N[e-1+(P-1)*w],p.addConstraint(T,y.create(_.extend({bodyA:a,bodyB:r},C)))),f&&e<w-1&&(a=N[e+1+(P-1)*w],p.addConstraint(T,y.create(_.extend({bodyA:a,bodyB:r},C))))}return T.label+=" Mesh",T},l.pyramid=function(T,w,j,f,C,N,P){return l.stack(T,w,j,f,C,N,function(e,s,r,a,t,d){var c=Math.min(f,Math.ceil(j/2)),m=t?t.bounds.max.x-t.bounds.min.x:0;if(!(a>c)){a=c-a;var v=a,h=j-1-a;if(!(r<v||r>h)){d===1&&O.translate(t,{x:(r+(j%2===1?1:-1))*m,y:0});var S=t?r*m:0;return P(T+S+r*C,s,r,a,t,d)}}})},l.newtonsCradle=function(T,w,j,f,C){for(var N=p.create({label:"Newtons Cradle"}),P=0;P<j;P++){var e=1.9,s=k.circle(T+P*(f*e),w+C,f,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),r=y.create({pointA:{x:T+P*(f*e),y:w},bodyB:s});p.addBody(N,s),p.addConstraint(N,r)}return N},l.car=function(T,w,j,f,C){var N=O.nextGroup(!0),P=20,e=-j*.5+P,s=j*.5-P,r=0,a=p.create({label:"Car"}),t=k.rectangle(T,w,j,f,{collisionFilter:{group:N},chamfer:{radius:f*.5},density:2e-4}),d=k.circle(T+e,w+r,C,{collisionFilter:{group:N},friction:.8}),c=k.circle(T+s,w+r,C,{collisionFilter:{group:N},friction:.8}),m=y.create({bodyB:t,pointB:{x:e,y:r},bodyA:d,stiffness:1,length:0}),v=y.create({bodyB:t,pointB:{x:s,y:r},bodyA:c,stiffness:1,length:0});return p.addBody(a,t),p.addBody(a,d),p.addBody(a,c),p.addConstraint(a,m),p.addConstraint(a,v),a},l.softBody=function(T,w,j,f,C,N,P,e,s,r){s=_.extend({inertia:1/0},s),r=_.extend({stiffness:.2,render:{type:"line",anchors:!1}},r);var a=l.stack(T,w,j,f,C,N,function(t,d){return k.circle(t,d,e,s)});return l.mesh(a,j,f,P,r),a.label="Soft Body",a}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(1),y=b(0);(function(){l.pathToVertices=function(_,O){typeof window<"u"&&!("SVGPathSeg"in window)&&y.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var k,T,w,j,f,C,N,P,e,s,r=[],a,t,d=0,c=0,m=0;O=O||15;var v=function(S,R,B){var H=B%2===1&&B>1;if(!e||S!=e.x||R!=e.y){e&&H?(a=e.x,t=e.y):(a=0,t=0);var V={x:a+S,y:t+R};(H||!e)&&(e=V),r.push(V),c=a+S,m=t+R}},h=function(S){var R=S.pathSegTypeAsLetter.toUpperCase();if(R!=="Z"){switch(R){case"M":case"L":case"T":case"C":case"S":case"Q":c=S.x,m=S.y;break;case"H":c=S.x;break;case"V":m=S.y;break}v(c,m,S.pathSegType)}};for(l._svgPathToAbsolute(_),w=_.getTotalLength(),C=[],k=0;k<_.pathSegList.numberOfItems;k+=1)C.push(_.pathSegList.getItem(k));for(N=C.concat();d<w;){if(s=_.getPathSegAtLength(d),f=C[s],f!=P){for(;N.length&&N[0]!=f;)h(N.shift());P=f}switch(f.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":j=_.getPointAtLength(d),v(j.x,j.y,0);break}d+=O}for(k=0,T=N.length;k<T;++k)h(N[k]);return r},l._svgPathToAbsolute=function(_){for(var O,k,T,w,j,f,C=_.pathSegList,N=0,P=0,e=C.numberOfItems,s=0;s<e;++s){var r=C.getItem(s),a=r.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(a))"x"in r&&(N=r.x),"y"in r&&(P=r.y);else switch("x1"in r&&(T=N+r.x1),"x2"in r&&(j=N+r.x2),"y1"in r&&(w=P+r.y1),"y2"in r&&(f=P+r.y2),"x"in r&&(N+=r.x),"y"in r&&(P+=r.y),a){case"m":C.replaceItem(_.createSVGPathSegMovetoAbs(N,P),s);break;case"l":C.replaceItem(_.createSVGPathSegLinetoAbs(N,P),s);break;case"h":C.replaceItem(_.createSVGPathSegLinetoHorizontalAbs(N),s);break;case"v":C.replaceItem(_.createSVGPathSegLinetoVerticalAbs(P),s);break;case"c":C.replaceItem(_.createSVGPathSegCurvetoCubicAbs(N,P,T,w,j,f),s);break;case"s":C.replaceItem(_.createSVGPathSegCurvetoCubicSmoothAbs(N,P,j,f),s);break;case"q":C.replaceItem(_.createSVGPathSegCurvetoQuadraticAbs(N,P,T,w),s);break;case"t":C.replaceItem(_.createSVGPathSegCurvetoQuadraticSmoothAbs(N,P),s);break;case"a":C.replaceItem(_.createSVGPathSegArcAbs(N,P,r.r1,r.r2,r.angle,r.largeArcFlag,r.sweepFlag),s);break;case"z":case"Z":N=O,P=k;break}(a=="M"||a=="m")&&(O=N,k=P)}}})()}),(function(A,z,b){var l={};A.exports=l;var p=b(1),y=b(5),_=b(0),O=b(4),k=b(2);(function(){var T,w;typeof window<"u"&&(T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(N){window.setTimeout(function(){N(_.now())},1e3/60)},w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),l.create=function(N){_.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");var P={controller:l,engine:null,element:null,frameRequestId:null,canvas:null,renderer:null,container:null,spriteContainer:null,pixiOptions:null,options:{width:800,height:600,background:"#fafafa",wireframeBackground:"#222",hasBounds:!1,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1}},e=_.extend(P,N),s=!e.options.wireframes&&e.options.background==="transparent";return e.pixiOptions=e.pixiOptions||{view:e.canvas,transparent:s,antialias:!0,backgroundColor:N.background},e.mouse=N.mouse,e.engine=N.engine,e.renderer=e.renderer||new PIXI.WebGLRenderer(e.options.width,e.options.height,e.pixiOptions),e.container=e.container||new PIXI.Container,e.spriteContainer=e.spriteContainer||new PIXI.Container,e.canvas=e.canvas||e.renderer.view,e.bounds=e.bounds||{min:{x:0,y:0},max:{x:e.options.width,y:e.options.height}},O.on(e.engine,"beforeUpdate",function(){l.clear(e)}),e.textures={},e.sprites={},e.primitives={},e.container.addChild(e.spriteContainer),_.isElement(e.element)?e.element.appendChild(e.canvas):_.warn('No "render.element" passed, "render.canvas" was not inserted into document.'),e.canvas.oncontextmenu=function(){return!1},e.canvas.onselectstart=function(){return!1},e},l.run=function(N){(function P(e){N.frameRequestId=T(P),l.world(N)})()},l.stop=function(N){w(N.frameRequestId)},l.clear=function(N){for(var P=N.container,e=N.spriteContainer;P.children[0];)P.removeChild(P.children[0]);for(;e.children[0];)e.removeChild(e.children[0]);var s=N.sprites["bg-0"];N.textures={},N.sprites={},N.primitives={},N.sprites["bg-0"]=s,s&&P.addChildAt(s,0),N.container.addChild(N.spriteContainer),N.currentBackground=null,P.scale.set(1,1),P.position.set(0,0)},l.setBackground=function(N,P){if(N.currentBackground!==P){var e=P.indexOf&&P.indexOf("#")!==-1,s=N.sprites["bg-0"];if(e){var r=_.colorToNumber(P);N.renderer.backgroundColor=r,s&&N.container.removeChild(s)}else if(!s){var a=C(N,P);s=N.sprites["bg-0"]=new PIXI.Sprite(a),s.position.x=0,s.position.y=0,N.container.addChildAt(s,0)}N.currentBackground=P}},l.world=function(N){var P=N.engine,e=P.world,s=N.renderer,r=N.container,a=N.options,t=y.allBodies(e),d=y.allConstraints(e),c=[],m;a.wireframes?l.setBackground(N,a.wireframeBackground):l.setBackground(N,a.background);var v=N.bounds.max.x-N.bounds.min.x,h=N.bounds.max.y-N.bounds.min.y,S=v/N.options.width,R=h/N.options.height;if(a.hasBounds){for(m=0;m<t.length;m++){var B=t[m];B.render.sprite.visible=p.overlaps(B.bounds,N.bounds)}for(m=0;m<d.length;m++){var H=d[m],V=H.bodyA,X=H.bodyB,J=H.pointA,de=H.pointB;V&&(J=k.add(V.position,H.pointA)),X&&(de=k.add(X.position,H.pointB)),!(!J||!de)&&(p.contains(N.bounds,J)||p.contains(N.bounds,de))&&c.push(H)}r.scale.set(1/S,1/R),r.position.set(-N.bounds.min.x*(1/S),-N.bounds.min.y*(1/R))}else c=d;for(m=0;m<t.length;m++)l.body(N,t[m]);for(m=0;m<c.length;m++)l.constraint(N,c[m]);s.render(r)},l.constraint=function(N,P){var e=N.engine,s=P.bodyA,r=P.bodyB,a=P.pointA,t=P.pointB,d=N.container,c=P.render,m="c-"+P.id,v=N.primitives[m];if(v||(v=N.primitives[m]=new PIXI.Graphics),!c.visible||!P.pointA||!P.pointB){v.clear();return}_.indexOf(d.children,v)===-1&&d.addChild(v),v.clear(),v.beginFill(0,0),v.lineStyle(c.lineWidth,_.colorToNumber(c.strokeStyle),1),s?v.moveTo(s.position.x+a.x,s.position.y+a.y):v.moveTo(a.x,a.y),r?v.lineTo(r.position.x+t.x,r.position.y+t.y):v.lineTo(t.x,t.y),v.endFill()},l.body=function(N,P){var e=N.engine,s=P.render;if(s.visible)if(s.sprite&&s.sprite.texture){var r="b-"+P.id,a=N.sprites[r],t=N.spriteContainer;a||(a=N.sprites[r]=j(N,P)),_.indexOf(t.children,a)===-1&&t.addChild(a),a.position.x=P.position.x,a.position.y=P.position.y,a.rotation=P.angle,a.scale.x=s.sprite.xScale||1,a.scale.y=s.sprite.yScale||1}else{var d="b-"+P.id,c=N.primitives[d],m=N.container;c||(c=N.primitives[d]=f(N,P),c.initialAngle=P.angle),_.indexOf(m.children,c)===-1&&m.addChild(c),c.position.x=P.position.x,c.position.y=P.position.y,c.rotation=P.angle-c.initialAngle}};var j=function(N,P){var e=P.render,s=e.sprite.texture,r=C(N,s),a=new PIXI.Sprite(r);return a.anchor.x=P.render.sprite.xOffset,a.anchor.y=P.render.sprite.yOffset,a},f=function(N,P){var e=P.render,s=N.options,r=new PIXI.Graphics,a=_.colorToNumber(e.fillStyle),t=_.colorToNumber(e.strokeStyle),d=_.colorToNumber(e.strokeStyle),c=_.colorToNumber("#bbb"),m=_.colorToNumber("#CD5C5C"),v;r.clear();for(var h=P.parts.length>1?1:0;h<P.parts.length;h++){v=P.parts[h],s.wireframes?(r.beginFill(0,0),r.lineStyle(1,c,1)):(r.beginFill(a,1),r.lineStyle(e.lineWidth,t,1)),r.moveTo(v.vertices[0].x-P.position.x,v.vertices[0].y-P.position.y);for(var S=1;S<v.vertices.length;S++)r.lineTo(v.vertices[S].x-P.position.x,v.vertices[S].y-P.position.y);r.lineTo(v.vertices[0].x-P.position.x,v.vertices[0].y-P.position.y),r.endFill(),(s.showAngleIndicator||s.showAxes)&&(r.beginFill(0,0),s.wireframes?r.lineStyle(1,m,1):r.lineStyle(1,d),r.moveTo(v.position.x-P.position.x,v.position.y-P.position.y),r.lineTo((v.vertices[0].x+v.vertices[v.vertices.length-1].x)/2-P.position.x,(v.vertices[0].y+v.vertices[v.vertices.length-1].y)/2-P.position.y),r.endFill())}return r},C=function(N,P){var e=N.textures[P];return e||(e=N.textures[P]=PIXI.Texture.fromImage(P)),e}})()})])})});var _i=ot((Yr,vi)=>{var ar={getItem(){return null},setItem(){},removeItem(){}};(function(i,A){typeof Yr=="object"&&typeof vi<"u"?A(Yr):typeof define=="function"&&define.amd?define(["exports"],A):A(i.dat={})})(Yr,(function(i){"use strict";function A(F){if(F&&!(typeof window>"u")){var x=document.createElement("style");return x.setAttribute("type","text/css"),x.innerHTML=F,document.head.appendChild(x),F}}function z(F,x){var L=F.__state.conversionName.toString(),q=Math.round(F.r),W=Math.round(F.g),Q=Math.round(F.b),oe=F.a,fe=Math.round(F.h),_e=F.s.toFixed(1),Me=F.v.toFixed(1);if(x||L==="THREE_CHAR_HEX"||L==="SIX_CHAR_HEX"){for(var qe=F.hex.toString(16);qe.length<6;)qe="0"+qe;return"#"+qe}else{if(L==="CSS_RGB")return"rgb("+q+","+W+","+Q+")";if(L==="CSS_RGBA")return"rgba("+q+","+W+","+Q+","+oe+")";if(L==="HEX")return"0x"+F.hex.toString(16);if(L==="RGB_ARRAY")return"["+q+","+W+","+Q+"]";if(L==="RGBA_ARRAY")return"["+q+","+W+","+Q+","+oe+"]";if(L==="RGB_OBJ")return"{r:"+q+",g:"+W+",b:"+Q+"}";if(L==="RGBA_OBJ")return"{r:"+q+",g:"+W+",b:"+Q+",a:"+oe+"}";if(L==="HSV_OBJ")return"{h:"+fe+",s:"+_e+",v:"+Me+"}";if(L==="HSVA_OBJ")return"{h:"+fe+",s:"+_e+",v:"+Me+",a:"+oe+"}"}return"unknown format"}var b=Array.prototype.forEach,l=Array.prototype.slice,p={BREAK:{},extend:function(x){return this.each(l.call(arguments,1),function(L){var q=this.isObject(L)?Object.keys(L):[];q.forEach(function(W){this.isUndefined(L[W])||(x[W]=L[W])}.bind(this))},this),x},defaults:function(x){return this.each(l.call(arguments,1),function(L){var q=this.isObject(L)?Object.keys(L):[];q.forEach(function(W){this.isUndefined(x[W])&&(x[W]=L[W])}.bind(this))},this),x},compose:function(){var x=l.call(arguments);return function(){for(var L=l.call(arguments),q=x.length-1;q>=0;q--)L=[x[q].apply(this,L)];return L[0]}},each:function(x,L,q){if(x){if(b&&x.forEach&&x.forEach===b)x.forEach(L,q);else if(x.length===x.length+0){var W=void 0,Q=void 0;for(W=0,Q=x.length;W<Q;W++)if(W in x&&L.call(q,x[W],W)===this.BREAK)return}else for(var oe in x)if(L.call(q,x[oe],oe)===this.BREAK)return}},defer:function(x){setTimeout(x,0)},debounce:function(x,L,q){var W=void 0;return function(){var Q=this,oe=arguments;function fe(){W=null,q||x.apply(Q,oe)}var _e=q||!W;clearTimeout(W),W=setTimeout(fe,L),_e&&x.apply(Q,oe)}},toArray:function(x){return x.toArray?x.toArray():l.call(x)},isUndefined:function(x){return x===void 0},isNull:function(x){return x===null},isNaN:(function(F){function x(L){return F.apply(this,arguments)}return x.toString=function(){return F.toString()},x})(function(F){return isNaN(F)}),isArray:Array.isArray||function(F){return F.constructor===Array},isObject:function(x){return x===Object(x)},isNumber:function(x){return x===x+0},isString:function(x){return x===x+""},isBoolean:function(x){return x===!1||x===!0},isFunction:function(x){return x instanceof Function}},y=[{litmus:p.isString,conversions:{THREE_CHAR_HEX:{read:function(x){var L=x.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return L===null?!1:{space:"HEX",hex:parseInt("0x"+L[1].toString()+L[1].toString()+L[2].toString()+L[2].toString()+L[3].toString()+L[3].toString(),0)}},write:z},SIX_CHAR_HEX:{read:function(x){var L=x.match(/^#([A-F0-9]{6})$/i);return L===null?!1:{space:"HEX",hex:parseInt("0x"+L[1].toString(),0)}},write:z},CSS_RGB:{read:function(x){var L=x.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return L===null?!1:{space:"RGB",r:parseFloat(L[1]),g:parseFloat(L[2]),b:parseFloat(L[3])}},write:z},CSS_RGBA:{read:function(x){var L=x.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return L===null?!1:{space:"RGB",r:parseFloat(L[1]),g:parseFloat(L[2]),b:parseFloat(L[3]),a:parseFloat(L[4])}},write:z}}},{litmus:p.isNumber,conversions:{HEX:{read:function(x){return{space:"HEX",hex:x,conversionName:"HEX"}},write:function(x){return x.hex}}}},{litmus:p.isArray,conversions:{RGB_ARRAY:{read:function(x){return x.length!==3?!1:{space:"RGB",r:x[0],g:x[1],b:x[2]}},write:function(x){return[x.r,x.g,x.b]}},RGBA_ARRAY:{read:function(x){return x.length!==4?!1:{space:"RGB",r:x[0],g:x[1],b:x[2],a:x[3]}},write:function(x){return[x.r,x.g,x.b,x.a]}}}},{litmus:p.isObject,conversions:{RGBA_OBJ:{read:function(x){return p.isNumber(x.r)&&p.isNumber(x.g)&&p.isNumber(x.b)&&p.isNumber(x.a)?{space:"RGB",r:x.r,g:x.g,b:x.b,a:x.a}:!1},write:function(x){return{r:x.r,g:x.g,b:x.b,a:x.a}}},RGB_OBJ:{read:function(x){return p.isNumber(x.r)&&p.isNumber(x.g)&&p.isNumber(x.b)?{space:"RGB",r:x.r,g:x.g,b:x.b}:!1},write:function(x){return{r:x.r,g:x.g,b:x.b}}},HSVA_OBJ:{read:function(x){return p.isNumber(x.h)&&p.isNumber(x.s)&&p.isNumber(x.v)&&p.isNumber(x.a)?{space:"HSV",h:x.h,s:x.s,v:x.v,a:x.a}:!1},write:function(x){return{h:x.h,s:x.s,v:x.v,a:x.a}}},HSV_OBJ:{read:function(x){return p.isNumber(x.h)&&p.isNumber(x.s)&&p.isNumber(x.v)?{space:"HSV",h:x.h,s:x.s,v:x.v}:!1},write:function(x){return{h:x.h,s:x.s,v:x.v}}}}}],_=void 0,O=void 0,k=function(){O=!1;var x=arguments.length>1?p.toArray(arguments):arguments[0];return p.each(y,function(L){if(L.litmus(x))return p.each(L.conversions,function(q,W){if(_=q.read(x),O===!1&&_!==!1)return O=_,_.conversionName=W,_.conversion=q,p.BREAK}),p.BREAK}),O},T=void 0,w={hsv_to_rgb:function(x,L,q){var W=Math.floor(x/60)%6,Q=x/60-Math.floor(x/60),oe=q*(1-L),fe=q*(1-Q*L),_e=q*(1-(1-Q)*L),Me=[[q,_e,oe],[fe,q,oe],[oe,q,_e],[oe,fe,q],[_e,oe,q],[q,oe,fe]][W];return{r:Me[0]*255,g:Me[1]*255,b:Me[2]*255}},rgb_to_hsv:function(x,L,q){var W=Math.min(x,L,q),Q=Math.max(x,L,q),oe=Q-W,fe=void 0,_e=void 0;if(Q!==0)_e=oe/Q;else return{h:NaN,s:0,v:0};return x===Q?fe=(L-q)/oe:L===Q?fe=2+(q-x)/oe:fe=4+(x-L)/oe,fe/=6,fe<0&&(fe+=1),{h:fe*360,s:_e,v:Q/255}},rgb_to_hex:function(x,L,q){var W=this.hex_with_component(0,2,x);return W=this.hex_with_component(W,1,L),W=this.hex_with_component(W,0,q),W},component_from_hex:function(x,L){return x>>L*8&255},hex_with_component:function(x,L,q){return q<<(T=L*8)|x&~(255<<T)}},j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},f=function(F,x){if(!(F instanceof x))throw new TypeError("Cannot call a class as a function")},C=(function(){function F(x,L){for(var q=0;q<L.length;q++){var W=L[q];W.enumerable=W.enumerable||!1,W.configurable=!0,"value"in W&&(W.writable=!0),Object.defineProperty(x,W.key,W)}}return function(x,L,q){return L&&F(x.prototype,L),q&&F(x,q),x}})(),N=function F(x,L,q){x===null&&(x=Function.prototype);var W=Object.getOwnPropertyDescriptor(x,L);if(W===void 0){var Q=Object.getPrototypeOf(x);return Q===null?void 0:F(Q,L,q)}else{if("value"in W)return W.value;var oe=W.get;return oe===void 0?void 0:oe.call(q)}},P=function(F,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof x);F.prototype=Object.create(x&&x.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),x&&(Object.setPrototypeOf?Object.setPrototypeOf(F,x):F.__proto__=x)},e=function(F,x){if(!F)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return x&&(typeof x=="object"||typeof x=="function")?x:F},s=(function(){function F(){if(f(this,F),this.__state=k.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return C(F,[{key:"toString",value:function(){return z(this)}},{key:"toHexString",value:function(){return z(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),F})();function r(F,x,L){Object.defineProperty(F,x,{get:function(){return this.__state.space==="RGB"?this.__state[x]:(s.recalculateRGB(this,x,L),this.__state[x])},set:function(W){this.__state.space!=="RGB"&&(s.recalculateRGB(this,x,L),this.__state.space="RGB"),this.__state[x]=W}})}function a(F,x){Object.defineProperty(F,x,{get:function(){return this.__state.space==="HSV"?this.__state[x]:(s.recalculateHSV(this),this.__state[x])},set:function(q){this.__state.space!=="HSV"&&(s.recalculateHSV(this),this.__state.space="HSV"),this.__state[x]=q}})}s.recalculateRGB=function(F,x,L){if(F.__state.space==="HEX")F.__state[x]=w.component_from_hex(F.__state.hex,L);else if(F.__state.space==="HSV")p.extend(F.__state,w.hsv_to_rgb(F.__state.h,F.__state.s,F.__state.v));else throw new Error("Corrupted color state")},s.recalculateHSV=function(F){var x=w.rgb_to_hsv(F.r,F.g,F.b);p.extend(F.__state,{s:x.s,v:x.v}),p.isNaN(x.h)?p.isUndefined(F.__state.h)&&(F.__state.h=0):F.__state.h=x.h},s.COMPONENTS=["r","g","b","h","s","v","hex","a"],r(s.prototype,"r",2),r(s.prototype,"g",1),r(s.prototype,"b",0),a(s.prototype,"h"),a(s.prototype,"s"),a(s.prototype,"v"),Object.defineProperty(s.prototype,"a",{get:function(){return this.__state.a},set:function(x){this.__state.a=x}}),Object.defineProperty(s.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=w.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(x){this.__state.space="HEX",this.__state.hex=x}});var t=(function(){function F(x,L){f(this,F),this.initialValue=x[L],this.domElement=document.createElement("div"),this.object=x,this.property=L,this.__onChange=void 0,this.__onFinishChange=void 0}return C(F,[{key:"onChange",value:function(L){return this.__onChange=L,this}},{key:"onFinishChange",value:function(L){return this.__onFinishChange=L,this}},{key:"setValue",value:function(L){return this.object[this.property]=L,this.__onChange&&this.__onChange.call(this,L),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),F})(),d={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},c={};p.each(d,function(F,x){p.each(F,function(L){c[L]=x})});var m=/(\d+(\.\d+)?)px/;function v(F){if(F==="0"||p.isUndefined(F))return 0;var x=F.match(m);return p.isNull(x)?0:parseFloat(x[1])}var h={makeSelectable:function(x,L){x===void 0||x.style===void 0||(x.onselectstart=L?function(){return!1}:function(){},x.style.MozUserSelect=L?"auto":"none",x.style.KhtmlUserSelect=L?"auto":"none",x.unselectable=L?"on":"off")},makeFullscreen:function(x,L,q){var W=q,Q=L;p.isUndefined(Q)&&(Q=!0),p.isUndefined(W)&&(W=!0),x.style.position="absolute",Q&&(x.style.left=0,x.style.right=0),W&&(x.style.top=0,x.style.bottom=0)},fakeEvent:function(x,L,q,W){var Q=q||{},oe=c[L];if(!oe)throw new Error("Event type "+L+" not supported.");var fe=document.createEvent(oe);switch(oe){case"MouseEvents":{var _e=Q.x||Q.clientX||0,Me=Q.y||Q.clientY||0;fe.initMouseEvent(L,Q.bubbles||!1,Q.cancelable||!0,window,Q.clickCount||1,0,0,_e,Me,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var qe=fe.initKeyboardEvent||fe.initKeyEvent;p.defaults(Q,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),qe(L,Q.bubbles||!1,Q.cancelable,window,Q.ctrlKey,Q.altKey,Q.shiftKey,Q.metaKey,Q.keyCode,Q.charCode);break}default:{fe.initEvent(L,Q.bubbles||!1,Q.cancelable||!0);break}}p.defaults(fe,W),x.dispatchEvent(fe)},bind:function(x,L,q,W){var Q=W||!1;return x.addEventListener?x.addEventListener(L,q,Q):x.attachEvent&&x.attachEvent("on"+L,q),h},unbind:function(x,L,q,W){var Q=W||!1;return x.removeEventListener?x.removeEventListener(L,q,Q):x.detachEvent&&x.detachEvent("on"+L,q),h},addClass:function(x,L){if(x.className===void 0)x.className=L;else if(x.className!==L){var q=x.className.split(/ +/);q.indexOf(L)===-1&&(q.push(L),x.className=q.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return h},removeClass:function(x,L){if(L)if(x.className===L)x.removeAttribute("class");else{var q=x.className.split(/ +/),W=q.indexOf(L);W!==-1&&(q.splice(W,1),x.className=q.join(" "))}else x.className=void 0;return h},hasClass:function(x,L){return new RegExp("(?:^|\\s+)"+L+"(?:\\s+|$)").test(x.className)||!1},getWidth:function(x){var L=getComputedStyle(x);return v(L["border-left-width"])+v(L["border-right-width"])+v(L["padding-left"])+v(L["padding-right"])+v(L.width)},getHeight:function(x){var L=getComputedStyle(x);return v(L["border-top-width"])+v(L["border-bottom-width"])+v(L["padding-top"])+v(L["padding-bottom"])+v(L.height)},getOffset:function(x){var L=x,q={left:0,top:0};if(L.offsetParent)do q.left+=L.offsetLeft,q.top+=L.offsetTop,L=L.offsetParent;while(L);return q},isActive:function(x){return x===document.activeElement&&(x.type||x.href)}},S=(function(F){P(x,F);function x(L,q){f(this,x);var W=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q)),Q=W;W.__prev=W.getValue(),W.__checkbox=document.createElement("input"),W.__checkbox.setAttribute("type","checkbox");function oe(){Q.setValue(!Q.__prev)}return h.bind(W.__checkbox,"change",oe,!1),W.domElement.appendChild(W.__checkbox),W.updateDisplay(),W}return C(x,[{key:"setValue",value:function(q){var W=N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"setValue",this).call(this,q);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),W}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"updateDisplay",this).call(this)}}]),x})(t),R=(function(F){P(x,F);function x(L,q,W){f(this,x);var Q=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q)),oe=W,fe=Q;if(Q.__select=document.createElement("select"),p.isArray(oe)){var _e={};p.each(oe,function(Me){_e[Me]=Me}),oe=_e}return p.each(oe,function(Me,qe){var Ee=document.createElement("option");Ee.innerHTML=qe,Ee.setAttribute("value",Me),fe.__select.appendChild(Ee)}),Q.updateDisplay(),h.bind(Q.__select,"change",function(){var Me=this.options[this.selectedIndex].value;fe.setValue(Me)}),Q.domElement.appendChild(Q.__select),Q}return C(x,[{key:"setValue",value:function(q){var W=N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"setValue",this).call(this,q);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),W}},{key:"updateDisplay",value:function(){return h.isActive(this.__select)?this:(this.__select.value=this.getValue(),N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"updateDisplay",this).call(this))}}]),x})(t),B=(function(F){P(x,F);function x(L,q){f(this,x);var W=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q)),Q=W;function oe(){Q.setValue(Q.__input.value)}function fe(){Q.__onFinishChange&&Q.__onFinishChange.call(Q,Q.getValue())}return W.__input=document.createElement("input"),W.__input.setAttribute("type","text"),h.bind(W.__input,"keyup",oe),h.bind(W.__input,"change",oe),h.bind(W.__input,"blur",fe),h.bind(W.__input,"keydown",function(_e){_e.keyCode===13&&this.blur()}),W.updateDisplay(),W.domElement.appendChild(W.__input),W}return C(x,[{key:"updateDisplay",value:function(){return h.isActive(this.__input)||(this.__input.value=this.getValue()),N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"updateDisplay",this).call(this)}}]),x})(t);function H(F){var x=F.toString();return x.indexOf(".")>-1?x.length-x.indexOf(".")-1:0}var V=(function(F){P(x,F);function x(L,q,W){f(this,x);var Q=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q)),oe=W||{};return Q.__min=oe.min,Q.__max=oe.max,Q.__step=oe.step,p.isUndefined(Q.__step)?Q.initialValue===0?Q.__impliedStep=1:Q.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(Q.initialValue))/Math.LN10))/10:Q.__impliedStep=Q.__step,Q.__precision=H(Q.__impliedStep),Q}return C(x,[{key:"setValue",value:function(q){var W=q;return this.__min!==void 0&&W<this.__min?W=this.__min:this.__max!==void 0&&W>this.__max&&(W=this.__max),this.__step!==void 0&&W%this.__step!==0&&(W=Math.round(W/this.__step)*this.__step),N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"setValue",this).call(this,W)}},{key:"min",value:function(q){return this.__min=q,this}},{key:"max",value:function(q){return this.__max=q,this}},{key:"step",value:function(q){return this.__step=q,this.__impliedStep=q,this.__precision=H(q),this}}]),x})(t);function X(F,x){var L=Math.pow(10,x);return Math.round(F*L)/L}var J=(function(F){P(x,F);function x(L,q,W){f(this,x);var Q=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q,W));Q.__truncationSuspended=!1;var oe=Q,fe=void 0;function _e(){var et=parseFloat(oe.__input.value);p.isNaN(et)||oe.setValue(et)}function Me(){oe.__onFinishChange&&oe.__onFinishChange.call(oe,oe.getValue())}function qe(){Me()}function Ee(et){var Le=fe-et.clientY;oe.setValue(oe.getValue()+Le*oe.__impliedStep),fe=et.clientY}function He(){h.unbind(window,"mousemove",Ee),h.unbind(window,"mouseup",He),Me()}function at(et){h.bind(window,"mousemove",Ee),h.bind(window,"mouseup",He),fe=et.clientY}return Q.__input=document.createElement("input"),Q.__input.setAttribute("type","text"),h.bind(Q.__input,"change",_e),h.bind(Q.__input,"blur",qe),h.bind(Q.__input,"mousedown",at),h.bind(Q.__input,"keydown",function(et){et.keyCode===13&&(oe.__truncationSuspended=!0,this.blur(),oe.__truncationSuspended=!1,Me())}),Q.updateDisplay(),Q.domElement.appendChild(Q.__input),Q}return C(x,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():X(this.getValue(),this.__precision),N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"updateDisplay",this).call(this)}}]),x})(V);function de(F,x,L,q,W){return q+(W-q)*((F-x)/(L-x))}var ge=(function(F){P(x,F);function x(L,q,W,Q,oe){f(this,x);var fe=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q,{min:W,max:Q,step:oe})),_e=fe;fe.__background=document.createElement("div"),fe.__foreground=document.createElement("div"),h.bind(fe.__background,"mousedown",Me),h.bind(fe.__background,"touchstart",He),h.addClass(fe.__background,"slider"),h.addClass(fe.__foreground,"slider-fg");function Me(Le){document.activeElement.blur(),h.bind(window,"mousemove",qe),h.bind(window,"mouseup",Ee),qe(Le)}function qe(Le){Le.preventDefault();var tt=_e.__background.getBoundingClientRect();return _e.setValue(de(Le.clientX,tt.left,tt.right,_e.__min,_e.__max)),!1}function Ee(){h.unbind(window,"mousemove",qe),h.unbind(window,"mouseup",Ee),_e.__onFinishChange&&_e.__onFinishChange.call(_e,_e.getValue())}function He(Le){Le.touches.length===1&&(h.bind(window,"touchmove",at),h.bind(window,"touchend",et),at(Le))}function at(Le){var tt=Le.touches[0].clientX,Lt=_e.__background.getBoundingClientRect();_e.setValue(de(tt,Lt.left,Lt.right,_e.__min,_e.__max))}function et(){h.unbind(window,"touchmove",at),h.unbind(window,"touchend",et),_e.__onFinishChange&&_e.__onFinishChange.call(_e,_e.getValue())}return fe.updateDisplay(),fe.__background.appendChild(fe.__foreground),fe.domElement.appendChild(fe.__background),fe}return C(x,[{key:"updateDisplay",value:function(){var q=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=q*100+"%",N(x.prototype.__proto__||Object.getPrototypeOf(x.prototype),"updateDisplay",this).call(this)}}]),x})(V),ce=(function(F){P(x,F);function x(L,q,W){f(this,x);var Q=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q)),oe=Q;return Q.__button=document.createElement("div"),Q.__button.innerHTML=W===void 0?"Fire":W,h.bind(Q.__button,"click",function(fe){return fe.preventDefault(),oe.fire(),!1}),h.addClass(Q.__button,"button"),Q.domElement.appendChild(Q.__button),Q}return C(x,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),x})(t),ye=(function(F){P(x,F);function x(L,q){f(this,x);var W=e(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,L,q));W.__color=new s(W.getValue()),W.__temp=new s(0);var Q=W;W.domElement=document.createElement("div"),h.makeSelectable(W.domElement,!1),W.__selector=document.createElement("div"),W.__selector.className="selector",W.__saturation_field=document.createElement("div"),W.__saturation_field.className="saturation-field",W.__field_knob=document.createElement("div"),W.__field_knob.className="field-knob",W.__field_knob_border="2px solid ",W.__hue_knob=document.createElement("div"),W.__hue_knob.className="hue-knob",W.__hue_field=document.createElement("div"),W.__hue_field.className="hue-field",W.__input=document.createElement("input"),W.__input.type="text",W.__input_textShadow="0 1px 1px ",h.bind(W.__input,"keydown",function(Le){Le.keyCode===13&&Ee.call(this)}),h.bind(W.__input,"blur",Ee),h.bind(W.__selector,"mousedown",function(){h.addClass(this,"drag").bind(window,"mouseup",function(){h.removeClass(Q.__selector,"drag")})}),h.bind(W.__selector,"touchstart",function(){h.addClass(this,"drag").bind(window,"touchend",function(){h.removeClass(Q.__selector,"drag")})});var oe=document.createElement("div");p.extend(W.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),p.extend(W.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:W.__field_knob_border+(W.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),p.extend(W.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),p.extend(W.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),p.extend(oe.style,{width:"100%",height:"100%",background:"none"}),Be(oe,"top","rgba(0,0,0,0)","#000"),p.extend(W.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ke(W.__hue_field),p.extend(W.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:W.__input_textShadow+"rgba(0,0,0,0.7)"}),h.bind(W.__saturation_field,"mousedown",fe),h.bind(W.__saturation_field,"touchstart",fe),h.bind(W.__field_knob,"mousedown",fe),h.bind(W.__field_knob,"touchstart",fe),h.bind(W.__hue_field,"mousedown",_e),h.bind(W.__hue_field,"touchstart",_e);function fe(Le){at(Le),h.bind(window,"mousemove",at),h.bind(window,"touchmove",at),h.bind(window,"mouseup",Me),h.bind(window,"touchend",Me)}function _e(Le){et(Le),h.bind(window,"mousemove",et),h.bind(window,"touchmove",et),h.bind(window,"mouseup",qe),h.bind(window,"touchend",qe)}function Me(){h.unbind(window,"mousemove",at),h.unbind(window,"touchmove",at),h.unbind(window,"mouseup",Me),h.unbind(window,"touchend",Me),He()}function qe(){h.unbind(window,"mousemove",et),h.unbind(window,"touchmove",et),h.unbind(window,"mouseup",qe),h.unbind(window,"touchend",qe),He()}function Ee(){var Le=k(this.value);Le!==!1?(Q.__color.__state=Le,Q.setValue(Q.__color.toOriginal())):this.value=Q.__color.toString()}function He(){Q.__onFinishChange&&Q.__onFinishChange.call(Q,Q.__color.toOriginal())}W.__saturation_field.appendChild(oe),W.__selector.appendChild(W.__field_knob),W.__selector.appendChild(W.__saturation_field),W.__selector.appendChild(W.__hue_field),W.__hue_field.appendChild(W.__hue_knob),W.domElement.appendChild(W.__input),W.domElement.appendChild(W.__selector),W.updateDisplay();function at(Le){Le.type.indexOf("touch")===-1&&Le.preventDefault();var tt=Q.__saturation_field.getBoundingClientRect(),Lt=Le.touches&&Le.touches[0]||Le,wr=Lt.clientX,_t=Lt.clientY,Ut=(wr-tt.left)/(tt.right-tt.left),Gt=1-(_t-tt.top)/(tt.bottom-tt.top);return Gt>1?Gt=1:Gt<0&&(Gt=0),Ut>1?Ut=1:Ut<0&&(Ut=0),Q.__color.v=Gt,Q.__color.s=Ut,Q.setValue(Q.__color.toOriginal()),!1}function et(Le){Le.type.indexOf("touch")===-1&&Le.preventDefault();var tt=Q.__hue_field.getBoundingClientRect(),Lt=Le.touches&&Le.touches[0]||Le,wr=Lt.clientY,_t=1-(wr-tt.top)/(tt.bottom-tt.top);return _t>1?_t=1:_t<0&&(_t=0),Q.__color.h=_t*360,Q.setValue(Q.__color.toOriginal()),!1}return W}return C(x,[{key:"updateDisplay",value:function(){var q=k(this.getValue());if(q!==!1){var W=!1;p.each(s.COMPONENTS,function(fe){if(!p.isUndefined(q[fe])&&!p.isUndefined(this.__color.__state[fe])&&q[fe]!==this.__color.__state[fe])return W=!0,{}},this),W&&p.extend(this.__color.__state,q)}p.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var Q=this.__color.v<.5||this.__color.s>.5?255:0,oe=255-Q;p.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+Q+","+Q+","+Q+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Be(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),p.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+Q+","+Q+","+Q+")",textShadow:this.__input_textShadow+"rgba("+oe+","+oe+","+oe+",.7)"})}}]),x})(t),ze=["-moz-","-o-","-webkit-","-ms-",""];function Be(F,x,L,q){F.style.background="",p.each(ze,function(W){F.style.cssText+="background: "+W+"linear-gradient("+x+", "+L+" 0%, "+q+" 100%); "})}function ke(F){F.style.background="",F.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",F.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",F.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",F.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",F.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Oe={load:function(x,L){var q=L||document,W=q.createElement("link");W.type="text/css",W.rel="stylesheet",W.href=x,q.getElementsByTagName("head")[0].appendChild(W)},inject:function(x,L){var q=L||document,W=document.createElement("style");W.type="text/css",W.innerHTML=x;var Q=q.getElementsByTagName("head")[0];try{Q.appendChild(W)}catch{}}},Ke=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Qe=function(x,L){var q=x[L];return p.isArray(arguments[2])||p.isObject(arguments[2])?new R(x,L,arguments[2]):p.isNumber(q)?p.isNumber(arguments[2])&&p.isNumber(arguments[3])?p.isNumber(arguments[4])?new ge(x,L,arguments[2],arguments[3],arguments[4]):new ge(x,L,arguments[2],arguments[3]):p.isNumber(arguments[4])?new J(x,L,{min:arguments[2],max:arguments[3],step:arguments[4]}):new J(x,L,{min:arguments[2],max:arguments[3]}):p.isString(q)?new B(x,L):p.isFunction(q)?new ce(x,L,""):p.isBoolean(q)?new S(x,L):null};function Ye(F){setTimeout(F,1e3/60)}var ae=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Ye,st=(function(){function F(){f(this,F),this.backgroundElement=document.createElement("div"),p.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),h.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),p.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var x=this;h.bind(this.backgroundElement,"click",function(){x.hide()})}return C(F,[{key:"show",value:function(){var L=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),p.defer(function(){L.backgroundElement.style.opacity=1,L.domElement.style.opacity=1,L.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var L=this,q=function W(){L.domElement.style.display="none",L.backgroundElement.style.display="none",h.unbind(L.domElement,"webkitTransitionEnd",W),h.unbind(L.domElement,"transitionend",W),h.unbind(L.domElement,"oTransitionEnd",W)};h.bind(this.domElement,"webkitTransitionEnd",q),h.bind(this.domElement,"transitionend",q),h.bind(this.domElement,"oTransitionEnd",q),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-h.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-h.getHeight(this.domElement)/2+"px"}}]),F})(),$e=A(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad linear-gradient(45deg,#bbb 25%,transparent 25%,transparent 75%,#bbb 75%) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 linear-gradient(45deg,#bbb 25%,transparent 25%,transparent 75%,#bbb 75%) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:linear-gradient(45deg,#bbb 25%,transparent 25%,transparent 75%,#bbb 75%)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Oe.inject($e);var Xe="dg",xe=72,ct=20,ve="Default",Ve=(function(){try{return!!ar}catch{return!1}})(),he=void 0,Ir=!0,Vt=void 0,cr=!1,vr=[],Re=function F(x){var L=this,q=x||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),h.addClass(this.domElement,Xe),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],q=p.defaults(q,{closeOnTop:!1,autoPlace:!0,width:F.DEFAULT_WIDTH}),q=p.defaults(q,{resizable:q.autoPlace,hideable:q.autoPlace}),p.isUndefined(q.load)?q.load={preset:ve}:q.preset&&(q.load.preset=q.preset),p.isUndefined(q.parent)&&q.hideable&&vr.push(this),q.resizable=p.isUndefined(q.parent)&&q.resizable,q.autoPlace&&p.isUndefined(q.scrollable)&&(q.scrollable=!0);var W=Ve&&ar.getItem(Rt(this,"isLocal"))==="true",Q=void 0,oe=void 0;if(Object.defineProperties(this,{parent:{get:function(){return q.parent}},scrollable:{get:function(){return q.scrollable}},autoPlace:{get:function(){return q.autoPlace}},closeOnTop:{get:function(){return q.closeOnTop}},preset:{get:function(){return L.parent?L.getRoot().preset:q.load.preset},set:function(He){L.parent?L.getRoot().preset=He:q.load.preset=He,ft(this),L.revert()}},width:{get:function(){return q.width},set:function(He){q.width=He,fr(L,He)}},name:{get:function(){return q.name},set:function(He){q.name=He,oe&&(oe.innerHTML=q.name)}},closed:{get:function(){return q.closed},set:function(He){q.closed=He,q.closed?h.addClass(L.__ul,F.CLASS_CLOSED):h.removeClass(L.__ul,F.CLASS_CLOSED),this.onResize(),L.__closeButton&&(L.__closeButton.innerHTML=He?F.TEXT_OPEN:F.TEXT_CLOSED)}},load:{get:function(){return q.load}},useLocalStorage:{get:function(){return W},set:function(He){Ve&&(W=He,He?h.bind(window,"unload",Q):h.unbind(window,"unload",Q),ar.setItem(Rt(L,"isLocal"),He))}}}),p.isUndefined(q.parent)){if(this.closed=q.closed||!1,h.addClass(this.domElement,F.CLASS_MAIN),h.makeSelectable(this.domElement,!1),Ve&&W){L.useLocalStorage=!0;var fe=ar.getItem(Rt(this,"gui"));fe&&(q.load=JSON.parse(fe))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=F.TEXT_CLOSED,h.addClass(this.__closeButton,F.CLASS_CLOSE_BUTTON),q.closeOnTop?(h.addClass(this.__closeButton,F.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(h.addClass(this.__closeButton,F.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),h.bind(this.__closeButton,"click",function(){L.closed=!L.closed})}else{q.closed===void 0&&(q.closed=!0);var _e=document.createTextNode(q.name);h.addClass(_e,"controller-name"),oe=vt(L,_e);var Me=function(He){return He.preventDefault(),L.closed=!L.closed,!1};h.addClass(this.__ul,F.CLASS_CLOSED),h.addClass(oe,"title"),h.bind(oe,"click",Me),q.closed||(this.closed=!1)}q.autoPlace&&(p.isUndefined(q.parent)&&(Ir&&(Vt=document.createElement("div"),h.addClass(Vt,Xe),h.addClass(Vt,F.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Vt),Ir=!1),Vt.appendChild(this.domElement),h.addClass(this.domElement,F.CLASS_AUTO_PLACE)),this.parent||fr(L,q.width)),this.__resizeHandler=function(){L.onResizeDebounced()},h.bind(window,"resize",this.__resizeHandler),h.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),h.bind(this.__ul,"transitionend",this.__resizeHandler),h.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),q.resizable&&Br(this),Q=function(){Ve&&ar.getItem(Rt(L,"isLocal"))==="true"&&ar.setItem(Rt(L,"gui"),JSON.stringify(L.getSaveObject()))},this.saveToLocalStorageIfPossible=Q;function qe(){var Ee=L.getRoot();Ee.width+=1,p.defer(function(){Ee.width-=1})}q.parent||qe()};Re.toggleHide=function(){cr=!cr,p.each(vr,function(F){F.domElement.style.display=cr?"none":""})},Re.CLASS_AUTO_PLACE="a",Re.CLASS_AUTO_PLACE_CONTAINER="ac",Re.CLASS_MAIN="main",Re.CLASS_CONTROLLER_ROW="cr",Re.CLASS_TOO_TALL="taller-than-window",Re.CLASS_CLOSED="closed",Re.CLASS_CLOSE_BUTTON="close-button",Re.CLASS_CLOSE_TOP="close-top",Re.CLASS_CLOSE_BOTTOM="close-bottom",Re.CLASS_DRAG="drag",Re.DEFAULT_WIDTH=245,Re.TEXT_CLOSED="Close Controls",Re.TEXT_OPEN="Open Controls",Re._keydownHandler=function(F){document.activeElement.type!=="text"&&(F.which===xe||F.keyCode===xe)&&Re.toggleHide()},h.bind(window,"keydown",Re._keydownHandler,!1),p.extend(Re.prototype,{add:function(x,L){return qt(this,x,L,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(x,L){return qt(this,x,L,{color:!0})},remove:function(x){this.__ul.removeChild(x.__li),this.__controllers.splice(this.__controllers.indexOf(x),1);var L=this;p.defer(function(){L.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Vt.removeChild(this.domElement);var x=this;p.each(this.__folders,function(L){x.removeFolder(L)}),h.unbind(window,"keydown",Re._keydownHandler,!1),Nt(this)},addFolder:function(x){if(this.__folders[x]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+x+'"');var L={name:x,parent:this};L.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[x]&&(L.closed=this.load.folders[x].closed,L.load=this.load.folders[x]);var q=new Re(L);this.__folders[x]=q;var W=vt(this,q.domElement);return h.addClass(W,"folder"),q},removeFolder:function(x){this.__ul.removeChild(x.domElement.parentElement),delete this.__folders[x.name],this.load&&this.load.folders&&this.load.folders[x.name]&&delete this.load.folders[x.name],Nt(x);var L=this;p.each(x.__folders,function(q){x.removeFolder(q)}),p.defer(function(){L.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var x=this.getRoot();if(x.scrollable){var L=h.getOffset(x.__ul).top,q=0;p.each(x.__ul.childNodes,function(W){x.autoPlace&&W===x.__save_row||(q+=h.getHeight(W))}),window.innerHeight-L-ct<q?(h.addClass(x.domElement,Re.CLASS_TOO_TALL),x.__ul.style.height=window.innerHeight-L-ct+"px"):(h.removeClass(x.domElement,Re.CLASS_TOO_TALL),x.__ul.style.height="auto")}x.__resize_handle&&p.defer(function(){x.__resize_handle.style.height=x.__ul.offsetHeight+"px"}),x.__closeButton&&(x.__closeButton.style.width=x.width+"px")},onResizeDebounced:p.debounce(function(){this.onResize()},50),remember:function(){if(p.isUndefined(he)&&(he=new st,he.domElement.innerHTML=Ke),this.parent)throw new Error("You can only call remember on a top level GUI.");var x=this;p.each(Array.prototype.slice.call(arguments),function(L){x.__rememberedObjects.length===0&&Qt(x),x.__rememberedObjects.indexOf(L)===-1&&x.__rememberedObjects.push(L)}),this.autoPlace&&fr(this,this.width)},getRoot:function(){for(var x=this;x.parent;)x=x.parent;return x},getSaveObject:function(){var x=this.load;return x.closed=this.closed,this.__rememberedObjects.length>0&&(x.preset=this.preset,x.remembered||(x.remembered={}),x.remembered[this.preset]=lt(this)),x.folders={},p.each(this.__folders,function(L,q){x.folders[q]=L.getSaveObject()}),x},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=lt(this),Mt(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(x){this.load.remembered||(this.load.remembered={},this.load.remembered[ve]=lt(this,!0)),this.load.remembered[x]=lt(this),this.preset=x,_r(this,x,!0),this.saveToLocalStorageIfPossible()},revert:function(x){p.each(this.__controllers,function(L){this.getRoot().load.remembered?Jt(x||this.getRoot(),L):L.setValue(L.initialValue),L.__onFinishChange&&L.__onFinishChange.call(L,L.getValue())},this),p.each(this.__folders,function(L){L.revert(L)}),x||Mt(this.getRoot(),!1)},listen:function(x){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){x.updateDisplay();return}var L=this.__listening.length===0;this.__listening.push(x),L&&ur(this.__listening)},updateDisplay:function(){p.each(this.__controllers,function(x){x.updateDisplay()}),p.each(this.__folders,function(x){x.updateDisplay()})}});function vt(F,x,L){var q=document.createElement("li");return x&&q.appendChild(x),L?F.__ul.insertBefore(q,L):F.__ul.appendChild(q),F.onResize(),q}function Nt(F){h.unbind(window,"resize",F.__resizeHandler),F.saveToLocalStorageIfPossible&&h.unbind(window,"unload",F.saveToLocalStorageIfPossible)}function Mt(F,x){var L=F.__preset_select[F.__preset_select.selectedIndex];x?L.innerHTML=L.value+"*":L.innerHTML=L.value}function on(F,x,L){if(L.__li=x,L.__gui=F,p.extend(L,{options:function(oe){if(arguments.length>1){var fe=L.__li.nextElementSibling;return L.remove(),qt(F,L.object,L.property,{before:fe,factoryArgs:[p.toArray(arguments)]})}if(p.isArray(oe)||p.isObject(oe)){var _e=L.__li.nextElementSibling;return L.remove(),qt(F,L.object,L.property,{before:_e,factoryArgs:[oe]})}},name:function(oe){return L.__li.firstElementChild.firstElementChild.innerHTML=oe,L},listen:function(){return L.__gui.listen(L),L},remove:function(){return L.__gui.remove(L),L}}),L instanceof ge){var q=new J(L.object,L.property,{min:L.__min,max:L.__max,step:L.__step});p.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(Q){var oe=L[Q],fe=q[Q];L[Q]=q[Q]=function(){var _e=Array.prototype.slice.call(arguments);return fe.apply(q,_e),oe.apply(L,_e)}}),h.addClass(x,"has-slider"),L.domElement.insertBefore(q.domElement,L.domElement.firstElementChild)}else if(L instanceof J){var W=function(oe){if(p.isNumber(L.__min)&&p.isNumber(L.__max)){var fe=L.__li.firstElementChild.firstElementChild.innerHTML,_e=L.__gui.__listening.indexOf(L)>-1;L.remove();var Me=qt(F,L.object,L.property,{before:L.__li.nextElementSibling,factoryArgs:[L.__min,L.__max,L.__step]});return Me.name(fe),_e&&Me.listen(),Me}return oe};L.min=p.compose(W,L.min),L.max=p.compose(W,L.max)}else L instanceof S?(h.bind(x,"click",function(){h.fakeEvent(L.__checkbox,"click")}),h.bind(L.__checkbox,"click",function(Q){Q.stopPropagation()})):L instanceof ce?(h.bind(x,"click",function(){h.fakeEvent(L.__button,"click")}),h.bind(x,"mouseover",function(){h.addClass(L.__button,"hover")}),h.bind(x,"mouseout",function(){h.removeClass(L.__button,"hover")})):L instanceof ye&&(h.addClass(x,"color"),L.updateDisplay=p.compose(function(Q){return x.style.borderLeftColor=L.__color.toString(),Q},L.updateDisplay),L.updateDisplay());L.setValue=p.compose(function(Q){return F.getRoot().__preset_select&&L.isModified()&&Mt(F.getRoot(),!0),Q},L.setValue)}function Jt(F,x){var L=F.getRoot(),q=L.__rememberedObjects.indexOf(x.object);if(q!==-1){var W=L.__rememberedObjectIndecesToControllers[q];if(W===void 0&&(W={},L.__rememberedObjectIndecesToControllers[q]=W),W[x.property]=x,L.load&&L.load.remembered){var Q=L.load.remembered,oe=void 0;if(Q[F.preset])oe=Q[F.preset];else if(Q[ve])oe=Q[ve];else return;if(oe[q]&&oe[q][x.property]!==void 0){var fe=oe[q][x.property];x.initialValue=fe,x.setValue(fe)}}}}function qt(F,x,L,q){if(x[L]===void 0)throw new Error('Object "'+x+'" has no property "'+L+'"');var W=void 0;if(q.color)W=new ye(x,L);else{var Q=[x,L].concat(q.factoryArgs);W=Qe.apply(F,Q)}q.before instanceof t&&(q.before=q.before.__li),Jt(F,W),h.addClass(W.domElement,"c");var oe=document.createElement("span");h.addClass(oe,"property-name"),oe.innerHTML=W.property;var fe=document.createElement("div");fe.appendChild(oe),fe.appendChild(W.domElement);var _e=vt(F,fe,q.before);return h.addClass(_e,Re.CLASS_CONTROLLER_ROW),W instanceof ye?h.addClass(_e,"color"):h.addClass(_e,j(W.getValue())),on(F,_e,W),F.__controllers.push(W),W}function Rt(F,x){return document.location.href+"."+x}function _r(F,x,L){var q=document.createElement("option");q.innerHTML=x,q.value=x,F.__preset_select.appendChild(q),L&&(F.__preset_select.selectedIndex=F.__preset_select.length-1)}function Dt(F,x){x.style.display=F.useLocalStorage?"block":"none"}function Qt(F){var x=F.__save_row=document.createElement("li");h.addClass(F.domElement,"has-save"),F.__ul.insertBefore(x,F.__ul.firstChild),h.addClass(x,"save-row");var L=document.createElement("span");L.innerHTML="&nbsp;",h.addClass(L,"button gears");var q=document.createElement("span");q.innerHTML="Save",h.addClass(q,"button"),h.addClass(q,"save");var W=document.createElement("span");W.innerHTML="New",h.addClass(W,"button"),h.addClass(W,"save-as");var Q=document.createElement("span");Q.innerHTML="Revert",h.addClass(Q,"button"),h.addClass(Q,"revert");var oe=F.__preset_select=document.createElement("select");if(F.load&&F.load.remembered?p.each(F.load.remembered,function(Ee,He){_r(F,He,He===F.preset)}):_r(F,ve,!1),h.bind(oe,"change",function(){for(var Ee=0;Ee<F.__preset_select.length;Ee++)F.__preset_select[Ee].innerHTML=F.__preset_select[Ee].value;F.preset=this.value}),x.appendChild(oe),x.appendChild(L),x.appendChild(q),x.appendChild(W),x.appendChild(Q),Ve){var fe=document.getElementById("dg-local-explain"),_e=document.getElementById("dg-local-storage"),Me=document.getElementById("dg-save-locally");Me.style.display="block",ar.getItem(Rt(F,"isLocal"))==="true"&&_e.setAttribute("checked","checked"),Dt(F,fe),h.bind(_e,"change",function(){F.useLocalStorage=!F.useLocalStorage,Dt(F,fe)})}var qe=document.getElementById("dg-new-constructor");h.bind(qe,"keydown",function(Ee){Ee.metaKey&&(Ee.which===67||Ee.keyCode===67)&&he.hide()}),h.bind(L,"click",function(){qe.innerHTML=JSON.stringify(F.getSaveObject(),void 0,2),he.show(),qe.focus(),qe.select()}),h.bind(q,"click",function(){F.save()}),h.bind(W,"click",function(){var Ee=prompt("Enter a new preset name.");Ee&&F.saveAs(Ee)}),h.bind(Q,"click",function(){F.revert()})}function Br(F){var x=void 0;F.__resize_handle=document.createElement("div"),p.extend(F.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function L(Q){return Q.preventDefault(),F.width+=x-Q.clientX,F.onResize(),x=Q.clientX,!1}function q(){h.removeClass(F.__closeButton,Re.CLASS_DRAG),h.unbind(window,"mousemove",L),h.unbind(window,"mouseup",q)}function W(Q){return Q.preventDefault(),x=Q.clientX,h.addClass(F.__closeButton,Re.CLASS_DRAG),h.bind(window,"mousemove",L),h.bind(window,"mouseup",q),!1}h.bind(F.__resize_handle,"mousedown",W),h.bind(F.__closeButton,"mousedown",W),F.domElement.insertBefore(F.__resize_handle,F.domElement.firstElementChild)}function fr(F,x){F.domElement.style.width=x+"px",F.__save_row&&F.autoPlace&&(F.__save_row.style.width=x+"px"),F.__closeButton&&(F.__closeButton.style.width=x+"px")}function lt(F,x){var L={};return p.each(F.__rememberedObjects,function(q,W){var Q={},oe=F.__rememberedObjectIndecesToControllers[W];p.each(oe,function(fe,_e){Q[_e]=x?fe.initialValue:fe.getValue()}),L[W]=Q}),L}function ft(F){for(var x=0;x<F.__preset_select.length;x++)F.__preset_select[x].value===F.preset&&(F.__preset_select.selectedIndex=x)}function ur(F){F.length!==0&&ae.call(window,function(){ur(F)}),p.each(F,function(x){x.updateDisplay()})}var Rr={Color:s,math:w,interpret:k},xr={Controller:t,BooleanController:S,OptionController:R,StringController:B,NumberController:V,NumberControllerBox:J,NumberControllerSlider:ge,FunctionController:ce,ColorController:ye},Dr={dom:h},Fr={GUI:Re},yr=Re,Wt={color:Rr,controllers:xr,dom:Dr,gui:Fr,GUI:yr};i.color=Rr,i.controllers=xr,i.dom=Dr,i.gui=Fr,i.GUI=yr,i.default=Wt,Object.defineProperty(i,"__esModule",{value:!0})}))});var Jr=ot((ja,xi)=>{"use strict";var Pr=xi.exports={};Pr.injectStyles=function(i,A){if(document.getElementById(A))return;let z=document.createElement("div");z.innerHTML=`<style id="${A}" type="text/css">${i}</style>`;let b=document.head.querySelector("style:last-of-type");b?Pr.domInsertBefore(z.firstElementChild,b):document.head.appendChild(z.firstElementChild)};Pr.injectScript=function(){throw Error("External script loading disabled")};Pr.domRemove=function(i){return i.parentElement.removeChild(i)};Pr.domInsertBefore=function(i,A){return A.parentNode.insertBefore(i,A.previousElementSibling)}});var Qr=ot((Sa,yi)=>{var Or=Object.create(null);yi.exports={setItem(i,A){Or[i]=String(A)},getItem(i){return Or[i]??null},removeItem(i){delete Or[i]},clear(){for(let i in Or)delete Or[i]}}});var bi=ot((Ta,wi)=>{function me(i){this.table=null,this.prefix="#",this.cleanup=!1,this.revive=!0;for(var A in i)i.hasOwnProperty(A)&&(this[A]=i[A]);this.refcode=this.prefix+"id",this.origcode=this.prefix+"original",this.buildcode=this.prefix+".",this.valuecode=this.prefix+"v"}wi.exports=me;me.GLOBAL=globalThis;me.escapeRegExp=function(i){return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")};me.prototype.Error=function(A){this.message=A||"",this.stack=new Error().stack};me.prototype.Error.prototype=Object.create(Error.prototype);me.prototype.Error.prototype.name="ResurrectError";me.NamespaceResolver=function(i){this.scope=i};me.NamespaceResolver.prototype.getPrototype=function(i){let A={Object,Array,Date,RegExp,Number};if(!Object.prototype.hasOwnProperty.call(A,i))throw new me.prototype.Error("Unsupported local prototype");return A[i].prototype};me.NamespaceResolver.prototype.getName=function(i){var A=i.constructor.name;if(A==null){var z=/^\s*function\s*([A-Za-z0-9_$]*)/;A=z.exec(i.constructor)[1]}if(A===""){var b="Can't serialize objects with anonymous constructors.";throw new me.prototype.Error(b)}else return A==="Object"||A==="Array"?null:A};me.prototype.resolver=new me.NamespaceResolver(me.GLOBAL);me.Node=function(){throw new Error("DOM restoration disabled")};me.is=function(i){var A="[object "+i+"]";return function(z){return Object.prototype.toString.call(z)===A}};me.isArray=me.is("Array");me.isString=me.is("String");me.isBoolean=me.is("Boolean");me.isNumber=me.is("Number");me.isFunction=me.is("Function");me.isDate=me.is("Date");me.isRegExp=me.is("RegExp");me.isObject=me.is("Object");me.isAtom=function(i){return!me.isObject(i)&&!me.isArray(i)};me.isPrimitive=function(i){return i==null||me.isNumber(i)||me.isString(i)||me.isBoolean(i)};me.prototype.ref=function(i){var A={};return i===void 0?A[this.prefix]=-1:A[this.prefix]=i[this.refcode],A};me.prototype.deref=function(i){return this.table[i[this.prefix]]};me.prototype.tag=function(i){if(this.revive){var A=this.resolver.getName(i);if(A){var z=Object.getPrototypeOf(i);if(this.resolver.getPrototype(A)!==z)throw new this.Error("Constructor mismatch!");i[this.prefix]=A}}return i[this.refcode]=this.table.length,this.table.push(i),i[this.refcode]};me.prototype.builder=function(i,A){var z={};return z[this.buildcode]=i,z[this.valuecode]=A,z};me.prototype.build=function(i){var A=i[this.valuecode];switch(i[this.buildcode]){case"Date":return new Date(A[0]);case"RegExp":return new RegExp(A[0],A[1]);case"Number":return Number(A[0]);default:throw new this.Error("Unsupported local constructor")}};me.prototype.decode=function(i){if(this.prefix in i)return this.deref(i);if(this.buildcode in i)return this.build(i);throw new this.Error("Unknown encoding.")};me.prototype.isTagged=function(i){return this.refcode in i&&i[this.refcode]!=null};me.prototype.visit=function(i,A,z){if(me.isAtom(i))return A(i);if(this.isTagged(i))return this.ref(i);var b=null;if(me.isArray(i)){b=[],i[this.refcode]=this.tag(b);for(var l=0;l<i.length;l++)b.push(this.visit(i[l],A,z))}else{b=Object.create(Object.getPrototypeOf(i)),i[this.refcode]=this.tag(b);for(var p in i){var y=i[p];if(i.hasOwnProperty(p)){if(z&&y!==void 0&&(y=z.call(i,p,i[p]),y===void 0))continue;b[p]=this.visit(y,A,z)}}}return b[this.origcode]=i,this.ref(b)};me.prototype.handleAtom=function(i){var A=me.GLOBAL.Node||function(){};if(me.isFunction(i))throw new this.Error("Can't serialize functions.");if(i instanceof A)throw new this.Error("DOM serialization disabled");if(me.isDate(i))return this.builder("Date",[i.toISOString()]);if(me.isRegExp(i)){var z=i.toString().match(/\/(.+)\/([gimy]*)/).slice(1);return this.builder("RegExp",z)}else return i===void 0?this.ref(void 0):me.isNumber(i)&&(isNaN(i)||!isFinite(i))?this.builder("Number",[i.toString()]):i};me.prototype.replacerWrapper=function(i){var A=new RegExp("^"+me.escapeRegExp(this.prefix));return function(z,b){return A.test(z)?b:i(z,b)}};me.prototype.stringify=function(i,A,z){if(me.isFunction(A))A=this.replacerWrapper(A);else if(me.isArray(A)){var b=A;A=function(y,_){return b.indexOf(y)>=0?_:void 0}}if(me.isAtom(i))return JSON.stringify(this.handleAtom(i),A,z);this.table=[],this.visit(i,this.handleAtom.bind(this),A);for(var l=0;l<this.table.length;l++)this.cleanup?delete this.table[l][this.origcode][this.refcode]:this.table[l][this.origcode][this.refcode]=null,delete this.table[l][this.refcode],delete this.table[l][this.origcode];var p=this.table;return this.table=null,JSON.stringify(p,null,z)};me.prototype.fixPrototype=function(i){if(this.prefix in i){var A=i[this.prefix],z=this.resolver.getPrototype(A);if("__proto__"in i)return i.__proto__=z,this.cleanup&&delete i[this.prefix],i;var b=Object.create(z);for(var l in i)i.hasOwnProperty(l)&&l!==this.prefix&&(b[l]=i[l]);return b}else return i};me.prototype.resurrect=function(i){var A=null,z=JSON.parse(i);if(me.isArray(z)){if(this.table=z,this.revive)for(var b=0;b<this.table.length;b++)this.table[b]=this.fixPrototype(this.table[b]);for(b=0;b<this.table.length;b++){var l=this.table[b];for(var p in l)l.hasOwnProperty(p)&&(me.isAtom(l[p])||(l[p]=this.decode(l[p])))}A=this.table[0]}else me.isObject(z)?(this.table=[],A=this.decode(z)):A=z;return this.table=null,A}});var Zr=ot((Ea,ji)=>{"use strict";var or=ji.exports={},ki=Qr(),zs=bi(),Ci=sr(),Vs=Ci.Common,qs=Ci.Engine;or.create=function(){let i=new zs({prefix:"$",cleanup:!0});return i.parse=i.resurrect,i};or.clone=function(i,A){var z=i.parse(or.serialise(i,A));return z.id=Vs.nextId(),z};or.saveState=function(i,A,z){ki.setItem(z,or.serialise(i,A.world))};or.loadState=function(i,A,z){var b=i.parse(ki.getItem(z));b&&(Object.assign(A.world.gravity,b.gravity),b.gravity=A.world.gravity,Object.assign(A.world,b),qs.merge(A,{world:A.world}),A.world.isModified=!0)};or.serialise=function(i,A,z){return z=z||0,i.stringify(A,function(b,l){if(!/^#/.exec(b)&&typeof l=="number"){var p=parseFloat(l.toFixed(3));return p===0&&l!==0?l:p}return l},z)}});var Si=ot((Aa,Ws)=>{Ws.exports=`/*
*	MatterTools.Gui
*/

body .dg .c,
body .dg .cr.function,
body .dg .c select,
body .dg .property-name,
body .dg .title {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body .dg.main {
  z-index: 10;
  height: 100%;
  background: #14151f;
  position: fixed;
  top: 0;
  right: 0;
  padding: 48px 0 0 0;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}

body .dg.main,
body .dg.main * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body .dg.main *:focus,
body .dg.main *:active {
  outline: 0;
}

body .dg.main *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

body .dg.main *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

body .dg.ac {
  position: static;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
}

body .dg.main {
  transform: translate(230px, 0);
  transition: transform ease;
  transition-delay: 2000ms;
  transition-duration: 300ms;
}

body .dg.main:hover {
  transform: translate(0, 0);
  transition-delay: 0ms;
  transition-duration: 400ms;
}

@media only screen and (min-width: 1300px) {
  body .dg.main,
  body .dg.main:hover {
    transition-delay: 0ms;
    transform: translate(0, 0);
  }
}

body .dg.main .close-button {
  display: none;
}

body .dg.main > ul {
  height: 100%;
  background: #191921;
  overflow-y: auto;
  scrollbar-color: #0d0f1b #0d0f1b;
  scrollbar-width: thin;
}

body .dg.main > ul:hover {
  scrollbar-color: #44444e #0d0f1b;
  scrollbar-width: thin;
}

body .dg.main > ul::-webkit-scrollbar {
  background: #0d0f1b;
  width: 6px;
  height: 6px;
}

body .dg.main > ul::-webkit-scrollbar-track,
body .dg.main > ul::-webkit-scrollbar-corner {
  background: #0d0f1b;
}

body .dg.main > ul::-webkit-scrollbar-thumb {
  background: #0d0f1b;
  border-radius: 3px;
}

body .dg.main > ul:hover::-webkit-scrollbar-thumb {
  background: #44444e;
}

body .dg {
  color: #6d6d7d;
  text-shadow: none !important;
  font-size: 12px;
}

body .dg .closed .cr {
  display: none;
}

body .dg li:not(.folder) {
  height: 29px;
  background: #1c1c25;
  border-bottom: 0px;
  padding: 0 8px 0 12px;
}

body .dg li.save-row .button {
  text-shadow: none !important;
}

body .dg li.title {
  padding: 2px 0 0 24px;
  color: #6a6977;
  background: #0d0f1b
    none
    no-repeat;
  background-position: 12px;
}

body .dg li.title:hover {
  color: #9494a2;
}

body .dg .cr.boolean:hover {
  background: #20212b;
}

body .dg .cr.function {
  background: #262731;
  color: #636371;
  border-top: 1px solid #30313c;
}

body .dg .cr.function:hover {
  background: #30313e;
}

body .dg .cr.function:active {
  background: #2d2e3a;
}

body .dg .cr.function:active .property-name {
  transform: translateY(1px);
}

body .dg .c,
body .dg .property-name {
  width: 50%;
}

body .dg .c select {
  margin-top: 2px;
  margin-left: -5px;
  padding: 3px 5px;
}

body .dg .c select,
body .dg .c input[type="text"],
body .dg .cr.number input[type="text"] {
  text-align: right;
  background: transparent;
  color: #686c7b;
  border: 0;
  border-radius: 2px;
  overflow: hidden;
  font-size: 11px;
}

body .dg .cr.number,
body .dg .cr.boolean,
body .dg .cr.function {
  border-left: 0;
}

body .dg .c select,
body .dg .c select:focus {
  width: 88px;
}

body .dg .c input[type="text"]:hover {
  background: #2b2c3a;
}

body .dg .c input[type="text"]:focus {
  background: #2b2c3a;
  color: #fff;
  outline: none;
}

body .dg .c input[type="checkbox"] {
  margin-top: 10px;
  border: none;
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #35363e;
  display: block;
  width: 7px;
  height: 7px;
  float: right;
}

body .dg .c input[type="checkbox"]:checked {
  background: #747784;
}

body .dg .c .slider {
  background: #23232d;
  border-radius: 2px;
  box-shadow: none;
  padding: 0;
  overflow: hidden;
}

body .dg .c .slider:hover {
  background: #282b3a;
}

body .dg .c .slider-fg {
  background: #3f4354;
  border-radius: 0;
  margin-left: 0;
  padding-right: 0;
}

body .dg .c .slider-fg:after {
  display: none;
}

body .dg .c .slider:hover .slider-fg {
  background: #4d526b;
}

body .dg li.folder {
  border-left: 0;
}

body .dg.a {
  margin-right: 0;
}

body .dg li.title:before{content:'\u25BE';position:absolute;left:9px}body .dg .closed>li.title:before{content:'\u25B8'}
`});var An=ot((Pa,Pi)=>{"use strict";var Nr=Pi.exports={},Tn=_i(),Us=Jr(),$r=Zr(),lr=sr(),Gs=lr.Engine,Ks=lr.Detector,Ti=lr.Grid,Ai=lr.World,Xs=lr.Bodies,En=lr.Events,Ei=lr.Composite;Nr.create=function(i,A,z){Tn.GUI.TEXT_CLOSED="\u25B2",Tn.GUI.TEXT_OPEN="\u25BC";var b=new Tn.GUI({autoPlace:!1}),l={engine:i,runner:A,render:z,datGui:b,broadphase:"grid",broadphaseCache:{grid:i.broadphase.controller===Ti?i.broadphase:Ti.create(),bruteForce:{detector:Ks.bruteForce}},amount:1,size:40,sides:4,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,offset:{x:0,y:0},renderer:"canvas",chamfer:0,isRecording:!1};$r&&(l.serializer=$r.create());let p=Si();return Us.injectStyles(p,"matter-gui-style"),Ys(l),l};Nr.update=function(i){var A,z=i.datGui;for(A in z.__folders)Nr.update(i,z.__folders[A]);for(A in z.__controllers){var b=z.__controllers[A];b.updateDisplay&&b.updateDisplay()}};Nr.closeAll=function(i){var A=i.datGui;for(var z in A.__folders)A.__folders[z].close()};Nr.destroy=function(i){i.datGui.domElement.parentElement.removeChild(i.datGui.domElement),i.datGui.destroy()};var Ys=function(i){var A=i.engine,z=i.runner,b=i.datGui,l={addBody:function(){Js(i)},clear:function(){Qs(i)},save:function(){$r.saveState(i.serializer,A,"guiState"),En.trigger(i,"save")},load:function(){$r.loadState(i.serializer,A,"guiState"),En.trigger(i,"load")}},p=b.addFolder("Metrics");if(z&&p.add(z,"fps").listen(),A.metrics.extended&&(z&&(p.add(z,"delta").listen(),p.add(z,"correction").listen()),A&&(p.add(A.metrics,"bodies").listen(),p.add(A.metrics,"collisions").listen(),p.add(A.metrics,"pairs").listen(),p.add(A.metrics,"broadEff").listen(),p.add(A.metrics,"midEff").listen(),p.add(A.metrics,"narrowEff").listen(),p.add(A.metrics,"narrowReuse").listen()),p.open()),A){var y=b.addFolder("Add Body");y.add(i,"amount",1,5).step(1),y.add(i,"size",5,150).step(1),y.add(i,"sides",1,8).step(1),y.add(i,"density",1e-4,.01).step(.001),y.add(i,"friction",0,1).step(.05),y.add(i,"frictionStatic",0,10).step(.1),y.add(i,"frictionAir",0,i.frictionAir*10).step(i.frictionAir/10),y.add(i,"restitution",0,1).step(.1),y.add(i,"chamfer",0,30).step(2),y.add(l,"addBody"),y.open();var _=b.addFolder("World");i.serializer&&(_.add(l,"load"),_.add(l,"save")),_.add(l,"clear"),_.open();var O=b.addFolder("Gravity");O.add(A.world.gravity,"scale",0,.001).step(1e-4),O.add(A.world.gravity,"x",-1,1).step(.01),O.add(A.world.gravity,"y",-1,1).step(.01);var k=b.addFolder("Engine");k.add(A,"enableSleeping"),k.add(A.timing,"timeScale",0,1.2).step(.05).listen(),k.add(A,"velocityIterations",1,10).step(1),k.add(A,"positionIterations",1,10).step(1),k.add(A,"constraintIterations",1,10).step(1),z&&k.add(z,"enabled")}if(i.render){var T=b.addFolder("Render");T.add(i.render.options,"wireframes").onFinishChange(function(f){f||(j.setValue(!1),w.setValue(!1))}),T.add(i.render.options,"showDebug"),T.add(i.render.options,"showPositions"),T.add(i.render.options,"showBroadphase"),T.add(i.render.options,"showBounds"),T.add(i.render.options,"showVelocity"),T.add(i.render.options,"showCollisions"),T.add(i.render.options,"showSeparations");var w=T.add(i.render.options,"showAxes"),j=T.add(i.render.options,"showAngleIndicator");T.add(i.render.options,"showSleeping"),T.add(i.render.options,"showIds"),T.add(i.render.options,"showVertexNumbers"),T.add(i.render.options,"showConvexHulls"),T.add(i.render.options,"showInternalEdges"),T.add(i.render.options,"enabled"),T.open()}document.body.appendChild(i.datGui.domElement)},Js=function(i){var A=i.engine,z={density:i.density,friction:i.friction,frictionStatic:i.frictionStatic,frictionAir:i.frictionAir,restitution:i.restitution};i.chamfer&&i.sides>2&&(z.chamfer={radius:i.chamfer});for(var b=0;b<i.amount;b++)Ai.add(A.world,Xs.polygon(i.offset.x+120+b*i.size+b*50,i.offset.y+200,i.sides,i.size,z))},Qs=function(i){for(var A=i.engine,z=Ei.allConstraints(A.world),b=null,l=0;l<z.length;l+=1){var p=z[l];if(p.label==="Mouse Constraint"){b=p;break}}if(Ai.clear(A.world,!0),Gs.clear(A),b&&Ei.add(A.world,b),i.render){var y=i.render.controller;y.clear&&y.clear(i.render)}En.trigger(i,"clear")}});var Ni=ot((Oi,Pn)=>{(function(i){var A,z={},b={16:!1,18:!1,17:!1,91:!1},l="all",p={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,command:91},y={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},_=function(B){return y[B]||B.toUpperCase().charCodeAt(0)},O=[];for(A=1;A<20;A++)y["f"+A]=111+A;function k(B,H){for(var V=B.length;V--;)if(B[V]===H)return V;return-1}function T(B,H){if(B.length!=H.length)return!1;for(var V=0;V<B.length;V++)if(B[V]!==H[V])return!1;return!0}var w={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function j(B){for(A in b)b[A]=B[w[A]]}function f(B){var H,V,X,J,de,ge;if(H=B.keyCode,k(O,H)==-1&&O.push(H),(H==93||H==224)&&(H=91),H in b){b[H]=!0;for(X in p)p[X]==H&&(P[X]=!0);return}if(j(B),!!P.filter.call(this,B)&&H in z){for(ge=d(),J=0;J<z[H].length;J++)if(V=z[H][J],V.scope==ge||V.scope=="all"){de=V.mods.length>0;for(X in b)(!b[X]&&k(V.mods,+X)>-1||b[X]&&k(V.mods,+X)==-1)&&(de=!1);(V.mods.length==0&&!b[16]&&!b[18]&&!b[17]&&!b[91]||de)&&V.method(B,V)===!1&&(B.preventDefault?B.preventDefault():B.returnValue=!1,B.stopPropagation&&B.stopPropagation(),B.cancelBubble&&(B.cancelBubble=!0))}}}function C(B){var H=B.keyCode,V,X=k(O,H);if(X>=0&&O.splice(X,1),(H==93||H==224)&&(H=91),H in b){b[H]=!1;for(V in p)p[V]==H&&(P[V]=!1)}}function N(){for(A in b)b[A]=!1;for(A in p)P[A]=!1}function P(B,H,V){var X,J;X=m(B),V===void 0&&(V=H,H="all");for(var de=0;de<X.length;de++)J=[],B=X[de].split("+"),B.length>1&&(J=v(B),B=[B[B.length-1]]),B=B[0],B=_(B),B in z||(z[B]=[]),z[B].push({shortcut:X[de],scope:H,method:V,key:X[de],mods:J})}function e(B,H){var V,X,J=[],de,ge,ce;for(V=m(B),ge=0;ge<V.length;ge++){if(X=V[ge].split("+"),X.length>1&&(J=v(X),B=X[X.length-1]),B=_(B),H===void 0&&(H=d()),!z[B])return;for(de=0;de<z[B].length;de++)ce=z[B][de],ce.scope===H&&T(ce.mods,J)&&(z[B][de]={})}}function s(B){return typeof B=="string"&&(B=_(B)),k(O,B)!=-1}function r(){return O.slice(0)}function a(B){var H=(B.target||B.srcElement).tagName;return!(H=="INPUT"||H=="SELECT"||H=="TEXTAREA")}for(A in p)P[A]=!1;function t(B){l=B||"all"}function d(){return l||"all"}function c(B){var H,V,X;for(H in z)for(V=z[H],X=0;X<V.length;)V[X].scope===B?V.splice(X,1):X++}function m(B){var H;return B=B.replace(/\s/g,""),H=B.split(","),H[H.length-1]==""&&(H[H.length-2]+=","),H}function v(B){for(var H=B.slice(0,B.length-1),V=0;V<H.length;V++)H[V]=p[H[V]];return H}function h(B,H,V){B.addEventListener?B.addEventListener(H,V,!1):B.attachEvent&&B.attachEvent("on"+H,function(){V(window.event)})}h(document,"keydown",function(B){f(B)}),h(document,"keyup",C),h(window,"focus",N);var S=i.key;function R(){var B=i.key;return i.key=S,B}i.key=P,i.key.setScope=t,i.key.getScope=d,i.key.deleteScope=c,i.key.filter=a,i.key.isPressed=s,i.key.getPressedKeyCodes=r,i.key.noConflict=R,i.key.unbind=e,typeof Pn<"u"&&(Pn.exports=P)})(Oi)});var tn=ot((Mi,en)=>{(function(i,A){"use strict";typeof en=="object"&&typeof en.exports=="object"?en.exports=i.document?A(i,!0):function(z){if(!z.document)throw new Error("jQuery requires a window with a document");return A(z)}:A(i)})(typeof window<"u"?window:Mi,function(i,A){"use strict";var z=[],b=Object.getPrototypeOf,l=z.slice,p=z.flat?function(n){return z.flat.call(n)}:function(n){return z.concat.apply([],n)},y=z.push,_=z.indexOf,O={},k=O.toString,T=O.hasOwnProperty,w=T.toString,j=w.call(Object),f={},C=function(o){return typeof o=="function"&&typeof o.nodeType!="number"},N=function(o){return o!=null&&o===o.window},P=i.document,e={type:!0,src:!0,nonce:!0,noModule:!0};function s(){throw new Error("Script evaluation disabled in offline scene")}function r(n){return n==null?n+"":typeof n=="object"||typeof n=="function"?O[k.call(n)]||"object":typeof n}var a="3.5.1",t=function(n,o){return new t.fn.init(n,o)};t.fn=t.prototype={jquery:a,constructor:t,length:0,toArray:function(){return l.call(this)},get:function(n){return n==null?l.call(this):n<0?this[n+this.length]:this[n]},pushStack:function(n){var o=t.merge(this.constructor(),n);return o.prevObject=this,o},each:function(n){return t.each(this,n)},map:function(n){return this.pushStack(t.map(this,function(o,u){return n.call(o,u,o)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(t.grep(this,function(n,o){return(o+1)%2}))},odd:function(){return this.pushStack(t.grep(this,function(n,o){return o%2}))},eq:function(n){var o=this.length,u=+n+(n<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:y,sort:z.sort,splice:z.splice},t.extend=t.fn.extend=function(){var n,o,u,g,E,M,I=arguments[0]||{},G=1,K=arguments.length,Z=!1;for(typeof I=="boolean"&&(Z=I,I=arguments[G]||{},G++),typeof I!="object"&&!C(I)&&(I={}),G===K&&(I=this,G--);G<K;G++)if((n=arguments[G])!=null)for(o in n)g=n[o],!(o==="__proto__"||I===g)&&(Z&&g&&(t.isPlainObject(g)||(E=Array.isArray(g)))?(u=I[o],E&&!Array.isArray(u)?M=[]:!E&&!t.isPlainObject(u)?M={}:M=u,E=!1,I[o]=t.extend(Z,M,g)):g!==void 0&&(I[o]=g));return I},t.extend({expando:"jQuery"+(a+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isPlainObject:function(n){var o,u;return!n||k.call(n)!=="[object Object]"?!1:(o=b(n),o?(u=T.call(o,"constructor")&&o.constructor,typeof u=="function"&&w.call(u)===j):!0)},isEmptyObject:function(n){var o;for(o in n)return!1;return!0},globalEval:function(n,o,u){s(n,{nonce:o&&o.nonce},u)},each:function(n,o){var u,g=0;if(d(n))for(u=n.length;g<u&&o.call(n[g],g,n[g])!==!1;g++);else for(g in n)if(o.call(n[g],g,n[g])===!1)break;return n},makeArray:function(n,o){var u=o||[];return n!=null&&(d(Object(n))?t.merge(u,typeof n=="string"?[n]:n):y.call(u,n)),u},inArray:function(n,o,u){return o==null?-1:_.call(o,n,u)},merge:function(n,o){for(var u=+o.length,g=0,E=n.length;g<u;g++)n[E++]=o[g];return n.length=E,n},grep:function(n,o,u){for(var g,E=[],M=0,I=n.length,G=!u;M<I;M++)g=!o(n[M],M),g!==G&&E.push(n[M]);return E},map:function(n,o,u){var g,E,M=0,I=[];if(d(n))for(g=n.length;M<g;M++)E=o(n[M],M,u),E!=null&&I.push(E);else for(M in n)E=o(n[M],M,u),E!=null&&I.push(E);return p(I)},guid:1,support:f}),typeof Symbol=="function"&&(t.fn[Symbol.iterator]=z[Symbol.iterator]),t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(n,o){O["[object "+o+"]"]=o.toLowerCase()});function d(n){var o=!!n&&"length"in n&&n.length,u=r(n);return C(n)||N(n)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in n}var c=(function(n){var o,u,g,E,M,I,G,K,Z,te,le,ee,re,we,Pe,be,nt,rt,xt,We="sizzle"+1*new Date,Ae=n.document,pt=0,De=0,Ze=Ur(),jr=Ur(),Vr=Ur(),yt=Ur(),er=function(D,U){return D===U&&(le=!0),0},tr={}.hasOwnProperty,gt=[],Kt=gt.pop,Ct=gt.push,Xt=gt.push,oi=gt.slice,rr=function(D,U){for(var Y=0,ne=D.length;Y<ne;Y++)if(D[Y]===U)return Y;return-1},_n="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Fe="[\\x20\\t\\r\\n\\f]",nr="(?:\\\\[\\da-fA-F]{1,6}"+Fe+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",li="\\["+Fe+"*("+nr+")(?:"+Fe+"*([*^$|!~]?=)"+Fe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+nr+"))|)"+Fe+"*\\]",xn=":("+nr+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+li+")*)|.*)\\)|)",Ts=new RegExp(Fe+"+","g"),qr=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g"),Es=new RegExp("^"+Fe+"*,"+Fe+"*"),di=new RegExp("^"+Fe+"*([>+~]|"+Fe+")"+Fe+"*"),As=new RegExp(Fe+"|>"),Ps=new RegExp(xn),Os=new RegExp("^"+nr+"$"),Wr={ID:new RegExp("^#("+nr+")"),CLASS:new RegExp("^\\.("+nr+")"),TAG:new RegExp("^("+nr+"|[*])"),ATTR:new RegExp("^"+li),PSEUDO:new RegExp("^"+xn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Fe+"*(even|odd|(([+-]|)(\\d*)n|)"+Fe+"*(?:([+-]|)"+Fe+"*(\\d+)|))"+Fe+"*\\)|)","i"),bool:new RegExp("^(?:"+_n+")$","i"),needsContext:new RegExp("^"+Fe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Fe+"*((?:-\\d)?\\d*)"+Fe+"*\\)|)(?=[^-]|$)","i")},Ns=/HTML$/i,Ms=/^(?:input|select|textarea|button)$/i,Ls=/^h\d$/i,Sr=/^[^{]+\{\s*\[native \w/,Is=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yn=/[+~]/,Ft=new RegExp("\\\\[\\da-fA-F]{1,6}"+Fe+"?|\\\\([^\\r\\n\\f])","g"),Ht=function(D,U){var Y="0x"+D.slice(1)-65536;return U||(Y<0?String.fromCharCode(Y+65536):String.fromCharCode(Y>>10|55296,Y&1023|56320))},ci=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fi=function(D,U){return U?D==="\0"?"\uFFFD":D.slice(0,-1)+"\\"+D.charCodeAt(D.length-1).toString(16)+" ":"\\"+D},ui=function(){ee()},Bs=Kr(function(D){return D.disabled===!0&&D.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Xt.apply(gt=oi.call(Ae.childNodes),Ae.childNodes),gt[Ae.childNodes.length].nodeType}catch{Xt={apply:gt.length?function(U,Y){Ct.apply(U,oi.call(Y))}:function(U,Y){for(var ne=U.length,$=0;U[ne++]=Y[$++];);U.length=ne-1}}}function Ue(D,U,Y,ne){var $,ie,se,ue,pe,je,Ce,Te=U&&U.ownerDocument,Ne=U?U.nodeType:9;if(Y=Y||[],typeof D!="string"||!D||Ne!==1&&Ne!==9&&Ne!==11)return Y;if(!ne&&(ee(U),U=U||re,Pe)){if(Ne!==11&&(pe=Is.exec(D)))if($=pe[1]){if(Ne===9)if(se=U.getElementById($)){if(se.id===$)return Y.push(se),Y}else return Y;else if(Te&&(se=Te.getElementById($))&&xt(U,se)&&se.id===$)return Y.push(se),Y}else{if(pe[2])return Xt.apply(Y,U.getElementsByTagName(D)),Y;if(($=pe[3])&&u.getElementsByClassName&&U.getElementsByClassName)return Xt.apply(Y,U.getElementsByClassName($)),Y}if(u.qsa&&!yt[D+" "]&&(!be||!be.test(D))&&(Ne!==1||U.nodeName.toLowerCase()!=="object")){if(Ce=D,Te=U,Ne===1&&(As.test(D)||di.test(D))){for(Te=yn.test(D)&&bn(U.parentNode)||U,(Te!==U||!u.scope)&&((ue=U.getAttribute("id"))?ue=ue.replace(ci,fi):U.setAttribute("id",ue=We)),je=I(D),ie=je.length;ie--;)je[ie]=(ue?"#"+ue:":scope")+" "+Gr(je[ie]);Ce=je.join(",")}try{return Xt.apply(Y,Te.querySelectorAll(Ce)),Y}catch{yt(D,!0)}finally{ue===We&&U.removeAttribute("id")}}}return K(D.replace(qr,"$1"),U,Y,ne)}function Ur(){var D=[];function U(Y,ne){return D.push(Y+" ")>g.cacheLength&&delete U[D.shift()],U[Y+" "]=ne}return U}function Tt(D){return D[We]=!0,D}function Et(D){var U=re.createElement("fieldset");try{return!!D(U)}catch{return!1}finally{U.parentNode&&U.parentNode.removeChild(U),U=null}}function wn(D,U){for(var Y=D.split("|"),ne=Y.length;ne--;)g.attrHandle[Y[ne]]=U}function hi(D,U){var Y=U&&D,ne=Y&&D.nodeType===1&&U.nodeType===1&&D.sourceIndex-U.sourceIndex;if(ne)return ne;if(Y){for(;Y=Y.nextSibling;)if(Y===U)return-1}return D?1:-1}function Rs(D){return function(U){var Y=U.nodeName.toLowerCase();return Y==="input"&&U.type===D}}function Ds(D){return function(U){var Y=U.nodeName.toLowerCase();return(Y==="input"||Y==="button")&&U.type===D}}function pi(D){return function(U){return"form"in U?U.parentNode&&U.disabled===!1?"label"in U?"label"in U.parentNode?U.parentNode.disabled===D:U.disabled===D:U.isDisabled===D||U.isDisabled!==!D&&Bs(U)===D:U.disabled===D:"label"in U?U.disabled===D:!1}}function ir(D){return Tt(function(U){return U=+U,Tt(function(Y,ne){for(var $,ie=D([],Y.length,U),se=ie.length;se--;)Y[$=ie[se]]&&(Y[$]=!(ne[$]=Y[$]))})})}function bn(D){return D&&typeof D.getElementsByTagName<"u"&&D}u=Ue.support={},M=Ue.isXML=function(D){var U=D.namespaceURI,Y=(D.ownerDocument||D).documentElement;return!Ns.test(U||Y&&Y.nodeName||"HTML")},ee=Ue.setDocument=function(D){var U,Y,ne=D?D.ownerDocument||D:Ae;return ne==re||ne.nodeType!==9||!ne.documentElement||(re=ne,we=re.documentElement,Pe=!M(re),Ae!=re&&(Y=re.defaultView)&&Y.top!==Y&&(Y.addEventListener?Y.addEventListener("unload",ui,!1):Y.attachEvent&&Y.attachEvent("onunload",ui)),u.scope=Et(function($){return we.appendChild($).appendChild(re.createElement("div")),typeof $.querySelectorAll<"u"&&!$.querySelectorAll(":scope fieldset div").length}),u.attributes=Et(function($){return $.className="i",!$.getAttribute("className")}),u.getElementsByTagName=Et(function($){return $.appendChild(re.createComment("")),!$.getElementsByTagName("*").length}),u.getElementsByClassName=Sr.test(re.getElementsByClassName),u.getById=Et(function($){return we.appendChild($).id=We,!re.getElementsByName||!re.getElementsByName(We).length}),u.getById?(g.filter.ID=function($){var ie=$.replace(Ft,Ht);return function(se){return se.getAttribute("id")===ie}},g.find.ID=function($,ie){if(typeof ie.getElementById<"u"&&Pe){var se=ie.getElementById($);return se?[se]:[]}}):(g.filter.ID=function($){var ie=$.replace(Ft,Ht);return function(se){var ue=typeof se.getAttributeNode<"u"&&se.getAttributeNode("id");return ue&&ue.value===ie}},g.find.ID=function($,ie){if(typeof ie.getElementById<"u"&&Pe){var se,ue,pe,je=ie.getElementById($);if(je){if(se=je.getAttributeNode("id"),se&&se.value===$)return[je];for(pe=ie.getElementsByName($),ue=0;je=pe[ue++];)if(se=je.getAttributeNode("id"),se&&se.value===$)return[je]}return[]}}),g.find.TAG=u.getElementsByTagName?function($,ie){if(typeof ie.getElementsByTagName<"u")return ie.getElementsByTagName($);if(u.qsa)return ie.querySelectorAll($)}:function($,ie){var se,ue=[],pe=0,je=ie.getElementsByTagName($);if($==="*"){for(;se=je[pe++];)se.nodeType===1&&ue.push(se);return ue}return je},g.find.CLASS=u.getElementsByClassName&&function($,ie){if(typeof ie.getElementsByClassName<"u"&&Pe)return ie.getElementsByClassName($)},nt=[],be=[],(u.qsa=Sr.test(re.querySelectorAll))&&(Et(function($){var ie;we.appendChild($).innerHTML="<a id='"+We+"'></a><select id='"+We+"-\r\\' msallowcapture=''><option selected=''></option></select>",$.querySelectorAll("[msallowcapture^='']").length&&be.push("[*^$]="+Fe+`*(?:''|"")`),$.querySelectorAll("[selected]").length||be.push("\\["+Fe+"*(?:value|"+_n+")"),$.querySelectorAll("[id~="+We+"-]").length||be.push("~="),ie=re.createElement("input"),ie.setAttribute("name",""),$.appendChild(ie),$.querySelectorAll("[name='']").length||be.push("\\["+Fe+"*name"+Fe+"*="+Fe+`*(?:''|"")`),$.querySelectorAll(":checked").length||be.push(":checked"),$.querySelectorAll("a#"+We+"+*").length||be.push(".#.+[+~]"),$.querySelectorAll("\\\f"),be.push("[\\r\\n\\f]")}),Et(function($){$.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ie=re.createElement("input");ie.setAttribute("type","hidden"),$.appendChild(ie).setAttribute("name","D"),$.querySelectorAll("[name=d]").length&&be.push("name"+Fe+"*[*^$|!~]?="),$.querySelectorAll(":enabled").length!==2&&be.push(":enabled",":disabled"),we.appendChild($).disabled=!0,$.querySelectorAll(":disabled").length!==2&&be.push(":enabled",":disabled"),$.querySelectorAll("*,:x"),be.push(",.*:")})),(u.matchesSelector=Sr.test(rt=we.matches||we.webkitMatchesSelector||we.mozMatchesSelector||we.oMatchesSelector||we.msMatchesSelector))&&Et(function($){u.disconnectedMatch=rt.call($,"*"),rt.call($,"[s!='']:x"),nt.push("!=",xn)}),be=be.length&&new RegExp(be.join("|")),nt=nt.length&&new RegExp(nt.join("|")),U=Sr.test(we.compareDocumentPosition),xt=U||Sr.test(we.contains)?function($,ie){var se=$.nodeType===9?$.documentElement:$,ue=ie&&ie.parentNode;return $===ue||!!(ue&&ue.nodeType===1&&(se.contains?se.contains(ue):$.compareDocumentPosition&&$.compareDocumentPosition(ue)&16))}:function($,ie){if(ie){for(;ie=ie.parentNode;)if(ie===$)return!0}return!1},er=U?function($,ie){if($===ie)return le=!0,0;var se=!$.compareDocumentPosition-!ie.compareDocumentPosition;return se||(se=($.ownerDocument||$)==(ie.ownerDocument||ie)?$.compareDocumentPosition(ie):1,se&1||!u.sortDetached&&ie.compareDocumentPosition($)===se?$==re||$.ownerDocument==Ae&&xt(Ae,$)?-1:ie==re||ie.ownerDocument==Ae&&xt(Ae,ie)?1:te?rr(te,$)-rr(te,ie):0:se&4?-1:1)}:function($,ie){if($===ie)return le=!0,0;var se,ue=0,pe=$.parentNode,je=ie.parentNode,Ce=[$],Te=[ie];if(!pe||!je)return $==re?-1:ie==re?1:pe?-1:je?1:te?rr(te,$)-rr(te,ie):0;if(pe===je)return hi($,ie);for(se=$;se=se.parentNode;)Ce.unshift(se);for(se=ie;se=se.parentNode;)Te.unshift(se);for(;Ce[ue]===Te[ue];)ue++;return ue?hi(Ce[ue],Te[ue]):Ce[ue]==Ae?-1:Te[ue]==Ae?1:0}),re},Ue.matches=function(D,U){return Ue(D,null,null,U)},Ue.matchesSelector=function(D,U){if(ee(D),u.matchesSelector&&Pe&&!yt[U+" "]&&(!nt||!nt.test(U))&&(!be||!be.test(U)))try{var Y=rt.call(D,U);if(Y||u.disconnectedMatch||D.document&&D.document.nodeType!==11)return Y}catch{yt(U,!0)}return Ue(U,re,null,[D]).length>0},Ue.contains=function(D,U){return(D.ownerDocument||D)!=re&&ee(D),xt(D,U)},Ue.attr=function(D,U){(D.ownerDocument||D)!=re&&ee(D);var Y=g.attrHandle[U.toLowerCase()],ne=Y&&tr.call(g.attrHandle,U.toLowerCase())?Y(D,U,!Pe):void 0;return ne!==void 0?ne:u.attributes||!Pe?D.getAttribute(U):(ne=D.getAttributeNode(U))&&ne.specified?ne.value:null},Ue.escape=function(D){return(D+"").replace(ci,fi)},Ue.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},Ue.uniqueSort=function(D){var U,Y=[],ne=0,$=0;if(le=!u.detectDuplicates,te=!u.sortStable&&D.slice(0),D.sort(er),le){for(;U=D[$++];)U===D[$]&&(ne=Y.push($));for(;ne--;)D.splice(Y[ne],1)}return te=null,D},E=Ue.getText=function(D){var U,Y="",ne=0,$=D.nodeType;if($){if($===1||$===9||$===11){if(typeof D.textContent=="string")return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)Y+=E(D)}else if($===3||$===4)return D.nodeValue}else for(;U=D[ne++];)Y+=E(U);return Y},g=Ue.selectors={cacheLength:50,createPseudo:Tt,match:Wr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(Ft,Ht),D[3]=(D[3]||D[4]||D[5]||"").replace(Ft,Ht),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||Ue.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&Ue.error(D[0]),D},PSEUDO:function(D){var U,Y=!D[6]&&D[2];return Wr.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":Y&&Ps.test(Y)&&(U=I(Y,!0))&&(U=Y.indexOf(")",Y.length-U)-Y.length)&&(D[0]=D[0].slice(0,U),D[2]=Y.slice(0,U)),D.slice(0,3))}},filter:{TAG:function(D){var U=D.replace(Ft,Ht).toLowerCase();return D==="*"?function(){return!0}:function(Y){return Y.nodeName&&Y.nodeName.toLowerCase()===U}},CLASS:function(D){var U=Ze[D+" "];return U||(U=new RegExp("(^|"+Fe+")"+D+"("+Fe+"|$)"))&&Ze(D,function(Y){return U.test(typeof Y.className=="string"&&Y.className||typeof Y.getAttribute<"u"&&Y.getAttribute("class")||"")})},ATTR:function(D,U,Y){return function(ne){var $=Ue.attr(ne,D);return $==null?U==="!=":U?($+="",U==="="?$===Y:U==="!="?$!==Y:U==="^="?Y&&$.indexOf(Y)===0:U==="*="?Y&&$.indexOf(Y)>-1:U==="$="?Y&&$.slice(-Y.length)===Y:U==="~="?(" "+$.replace(Ts," ")+" ").indexOf(Y)>-1:U==="|="?$===Y||$.slice(0,Y.length+1)===Y+"-":!1):!0}},CHILD:function(D,U,Y,ne,$){var ie=D.slice(0,3)!=="nth",se=D.slice(-4)!=="last",ue=U==="of-type";return ne===1&&$===0?function(pe){return!!pe.parentNode}:function(pe,je,Ce){var Te,Ne,Ge,Se,it,ut,wt=ie!==se?"nextSibling":"previousSibling",Je=pe.parentNode,Tr=ue&&pe.nodeName.toLowerCase(),Er=!Ce&&!ue,bt=!1;if(Je){if(ie){for(;wt;){for(Se=pe;Se=Se[wt];)if(ue?Se.nodeName.toLowerCase()===Tr:Se.nodeType===1)return!1;ut=wt=D==="only"&&!ut&&"nextSibling"}return!0}if(ut=[se?Je.firstChild:Je.lastChild],se&&Er){for(Se=Je,Ge=Se[We]||(Se[We]={}),Ne=Ge[Se.uniqueID]||(Ge[Se.uniqueID]={}),Te=Ne[D]||[],it=Te[0]===pt&&Te[1],bt=it&&Te[2],Se=it&&Je.childNodes[it];Se=++it&&Se&&Se[wt]||(bt=it=0)||ut.pop();)if(Se.nodeType===1&&++bt&&Se===pe){Ne[D]=[pt,it,bt];break}}else if(Er&&(Se=pe,Ge=Se[We]||(Se[We]={}),Ne=Ge[Se.uniqueID]||(Ge[Se.uniqueID]={}),Te=Ne[D]||[],it=Te[0]===pt&&Te[1],bt=it),bt===!1)for(;(Se=++it&&Se&&Se[wt]||(bt=it=0)||ut.pop())&&!((ue?Se.nodeName.toLowerCase()===Tr:Se.nodeType===1)&&++bt&&(Er&&(Ge=Se[We]||(Se[We]={}),Ne=Ge[Se.uniqueID]||(Ge[Se.uniqueID]={}),Ne[D]=[pt,bt]),Se===pe)););return bt-=$,bt===ne||bt%ne===0&&bt/ne>=0}}},PSEUDO:function(D,U){var Y,ne=g.pseudos[D]||g.setFilters[D.toLowerCase()]||Ue.error("unsupported pseudo: "+D);return ne[We]?ne(U):ne.length>1?(Y=[D,D,"",U],g.setFilters.hasOwnProperty(D.toLowerCase())?Tt(function($,ie){for(var se,ue=ne($,U),pe=ue.length;pe--;)se=rr($,ue[pe]),$[se]=!(ie[se]=ue[pe])}):function($){return ne($,0,Y)}):ne}},pseudos:{not:Tt(function(D){var U=[],Y=[],ne=G(D.replace(qr,"$1"));return ne[We]?Tt(function($,ie,se,ue){for(var pe,je=ne($,null,ue,[]),Ce=$.length;Ce--;)(pe=je[Ce])&&($[Ce]=!(ie[Ce]=pe))}):function($,ie,se){return U[0]=$,ne(U,null,se,Y),U[0]=null,!Y.pop()}}),has:Tt(function(D){return function(U){return Ue(D,U).length>0}}),contains:Tt(function(D){return D=D.replace(Ft,Ht),function(U){return(U.textContent||E(U)).indexOf(D)>-1}}),lang:Tt(function(D){return Os.test(D||"")||Ue.error("unsupported lang: "+D),D=D.replace(Ft,Ht).toLowerCase(),function(U){var Y;do if(Y=Pe?U.lang:U.getAttribute("xml:lang")||U.getAttribute("lang"))return Y=Y.toLowerCase(),Y===D||Y.indexOf(D+"-")===0;while((U=U.parentNode)&&U.nodeType===1);return!1}}),target:function(D){var U=n.location&&n.location.hash;return U&&U.slice(1)===D.id},root:function(D){return D===we},focus:function(D){return D===re.activeElement&&(!re.hasFocus||re.hasFocus())&&!!(D.type||D.href||~D.tabIndex)},enabled:pi(!1),disabled:pi(!0),checked:function(D){var U=D.nodeName.toLowerCase();return U==="input"&&!!D.checked||U==="option"&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!g.pseudos.empty(D)},header:function(D){return Ls.test(D.nodeName)},input:function(D){return Ms.test(D.nodeName)},button:function(D){var U=D.nodeName.toLowerCase();return U==="input"&&D.type==="button"||U==="button"},text:function(D){var U;return D.nodeName.toLowerCase()==="input"&&D.type==="text"&&((U=D.getAttribute("type"))==null||U.toLowerCase()==="text")},first:ir(function(){return[0]}),last:ir(function(D,U){return[U-1]}),eq:ir(function(D,U,Y){return[Y<0?Y+U:Y]}),even:ir(function(D,U){for(var Y=0;Y<U;Y+=2)D.push(Y);return D}),odd:ir(function(D,U){for(var Y=1;Y<U;Y+=2)D.push(Y);return D}),lt:ir(function(D,U,Y){for(var ne=Y<0?Y+U:Y>U?U:Y;--ne>=0;)D.push(ne);return D}),gt:ir(function(D,U,Y){for(var ne=Y<0?Y+U:Y;++ne<U;)D.push(ne);return D})}},g.pseudos.nth=g.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})g.pseudos[o]=Rs(o);for(o in{submit:!0,reset:!0})g.pseudos[o]=Ds(o);function gi(){}gi.prototype=g.filters=g.pseudos,g.setFilters=new gi,I=Ue.tokenize=function(D,U){var Y,ne,$,ie,se,ue,pe,je=jr[D+" "];if(je)return U?0:je.slice(0);for(se=D,ue=[],pe=g.preFilter;se;){(!Y||(ne=Es.exec(se)))&&(ne&&(se=se.slice(ne[0].length)||se),ue.push($=[])),Y=!1,(ne=di.exec(se))&&(Y=ne.shift(),$.push({value:Y,type:ne[0].replace(qr," ")}),se=se.slice(Y.length));for(ie in g.filter)(ne=Wr[ie].exec(se))&&(!pe[ie]||(ne=pe[ie](ne)))&&(Y=ne.shift(),$.push({value:Y,type:ie,matches:ne}),se=se.slice(Y.length));if(!Y)break}return U?se.length:se?Ue.error(D):jr(D,ue).slice(0)};function Gr(D){for(var U=0,Y=D.length,ne="";U<Y;U++)ne+=D[U].value;return ne}function Kr(D,U,Y){var ne=U.dir,$=U.next,ie=$||ne,se=Y&&ie==="parentNode",ue=De++;return U.first?function(pe,je,Ce){for(;pe=pe[ne];)if(pe.nodeType===1||se)return D(pe,je,Ce);return!1}:function(pe,je,Ce){var Te,Ne,Ge,Se=[pt,ue];if(Ce){for(;pe=pe[ne];)if((pe.nodeType===1||se)&&D(pe,je,Ce))return!0}else for(;pe=pe[ne];)if(pe.nodeType===1||se)if(Ge=pe[We]||(pe[We]={}),Ne=Ge[pe.uniqueID]||(Ge[pe.uniqueID]={}),$&&$===pe.nodeName.toLowerCase())pe=pe[ne]||pe;else{if((Te=Ne[ie])&&Te[0]===pt&&Te[1]===ue)return Se[2]=Te[2];if(Ne[ie]=Se,Se[2]=D(pe,je,Ce))return!0}return!1}}function kn(D){return D.length>1?function(U,Y,ne){for(var $=D.length;$--;)if(!D[$](U,Y,ne))return!1;return!0}:D[0]}function Fs(D,U,Y){for(var ne=0,$=U.length;ne<$;ne++)Ue(D,U[ne],Y);return Y}function Xr(D,U,Y,ne,$){for(var ie,se=[],ue=0,pe=D.length,je=U!=null;ue<pe;ue++)(ie=D[ue])&&(!Y||Y(ie,ne,$))&&(se.push(ie),je&&U.push(ue));return se}function Cn(D,U,Y,ne,$,ie){return ne&&!ne[We]&&(ne=Cn(ne)),$&&!$[We]&&($=Cn($,ie)),Tt(function(se,ue,pe,je){var Ce,Te,Ne,Ge=[],Se=[],it=ue.length,ut=se||Fs(U||"*",pe.nodeType?[pe]:pe,[]),wt=D&&(se||!U)?Xr(ut,Ge,D,pe,je):ut,Je=Y?$||(se?D:it||ne)?[]:ue:wt;if(Y&&Y(wt,Je,pe,je),ne)for(Ce=Xr(Je,Se),ne(Ce,[],pe,je),Te=Ce.length;Te--;)(Ne=Ce[Te])&&(Je[Se[Te]]=!(wt[Se[Te]]=Ne));if(se){if($||D){if($){for(Ce=[],Te=Je.length;Te--;)(Ne=Je[Te])&&Ce.push(wt[Te]=Ne);$(null,Je=[],Ce,je)}for(Te=Je.length;Te--;)(Ne=Je[Te])&&(Ce=$?rr(se,Ne):Ge[Te])>-1&&(se[Ce]=!(ue[Ce]=Ne))}}else Je=Xr(Je===ue?Je.splice(it,Je.length):Je),$?$(null,ue,Je,je):Xt.apply(ue,Je)})}function jn(D){for(var U,Y,ne,$=D.length,ie=g.relative[D[0].type],se=ie||g.relative[" "],ue=ie?1:0,pe=Kr(function(Te){return Te===U},se,!0),je=Kr(function(Te){return rr(U,Te)>-1},se,!0),Ce=[function(Te,Ne,Ge){var Se=!ie&&(Ge||Ne!==Z)||((U=Ne).nodeType?pe(Te,Ne,Ge):je(Te,Ne,Ge));return U=null,Se}];ue<$;ue++)if(Y=g.relative[D[ue].type])Ce=[Kr(kn(Ce),Y)];else{if(Y=g.filter[D[ue].type].apply(null,D[ue].matches),Y[We]){for(ne=++ue;ne<$&&!g.relative[D[ne].type];ne++);return Cn(ue>1&&kn(Ce),ue>1&&Gr(D.slice(0,ue-1).concat({value:D[ue-2].type===" "?"*":""})).replace(qr,"$1"),Y,ue<ne&&jn(D.slice(ue,ne)),ne<$&&jn(D=D.slice(ne)),ne<$&&Gr(D))}Ce.push(Y)}return kn(Ce)}function Hs(D,U){var Y=U.length>0,ne=D.length>0,$=function(ie,se,ue,pe,je){var Ce,Te,Ne,Ge=0,Se="0",it=ie&&[],ut=[],wt=Z,Je=ie||ne&&g.find.TAG("*",je),Tr=pt+=wt==null?1:Math.random()||.1,Er=Je.length;for(je&&(Z=se==re||se||je);Se!==Er&&(Ce=Je[Se])!=null;Se++){if(ne&&Ce){for(Te=0,!se&&Ce.ownerDocument!=re&&(ee(Ce),ue=!Pe);Ne=D[Te++];)if(Ne(Ce,se||re,ue)){pe.push(Ce);break}je&&(pt=Tr)}Y&&((Ce=!Ne&&Ce)&&Ge--,ie&&it.push(Ce))}if(Ge+=Se,Y&&Se!==Ge){for(Te=0;Ne=U[Te++];)Ne(it,ut,se,ue);if(ie){if(Ge>0)for(;Se--;)it[Se]||ut[Se]||(ut[Se]=Kt.call(pe));ut=Xr(ut)}Xt.apply(pe,ut),je&&!ie&&ut.length>0&&Ge+U.length>1&&Ue.uniqueSort(pe)}return je&&(pt=Tr,Z=wt),it};return Y?Tt($):$}return G=Ue.compile=function(D,U){var Y,ne=[],$=[],ie=Vr[D+" "];if(!ie){for(U||(U=I(D)),Y=U.length;Y--;)ie=jn(U[Y]),ie[We]?ne.push(ie):$.push(ie);ie=Vr(D,Hs($,ne)),ie.selector=D}return ie},K=Ue.select=function(D,U,Y,ne){var $,ie,se,ue,pe,je=typeof D=="function"&&D,Ce=!ne&&I(D=je.selector||D);if(Y=Y||[],Ce.length===1){if(ie=Ce[0]=Ce[0].slice(0),ie.length>2&&(se=ie[0]).type==="ID"&&U.nodeType===9&&Pe&&g.relative[ie[1].type]){if(U=(g.find.ID(se.matches[0].replace(Ft,Ht),U)||[])[0],U)je&&(U=U.parentNode);else return Y;D=D.slice(ie.shift().value.length)}for($=Wr.needsContext.test(D)?0:ie.length;$--&&(se=ie[$],!g.relative[ue=se.type]);)if((pe=g.find[ue])&&(ne=pe(se.matches[0].replace(Ft,Ht),yn.test(ie[0].type)&&bn(U.parentNode)||U))){if(ie.splice($,1),D=ne.length&&Gr(ie),!D)return Xt.apply(Y,ne),Y;break}}return(je||G(D,Ce))(ne,U,!Pe,Y,!U||yn.test(D)&&bn(U.parentNode)||U),Y},u.sortStable=We.split("").sort(er).join("")===We,u.detectDuplicates=!!le,ee(),u.sortDetached=Et(function(D){return D.compareDocumentPosition(re.createElement("fieldset"))&1}),Et(function(D){return D.innerHTML="<a href='#'></a>",D.firstChild.getAttribute("href")==="#"})||wn("type|href|height|width",function(D,U,Y){if(!Y)return D.getAttribute(U,U.toLowerCase()==="type"?1:2)}),(!u.attributes||!Et(function(D){return D.innerHTML="<input/>",D.firstChild.setAttribute("value",""),D.firstChild.getAttribute("value")===""}))&&wn("value",function(D,U,Y){if(!Y&&D.nodeName.toLowerCase()==="input")return D.defaultValue}),Et(function(D){return D.getAttribute("disabled")==null})||wn(_n,function(D,U,Y){var ne;if(!Y)return D[U]===!0?U.toLowerCase():(ne=D.getAttributeNode(U))&&ne.specified?ne.value:null}),Ue})(i);t.find=c,t.expr=c.selectors,t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=c.uniqueSort,t.text=c.getText,t.isXMLDoc=c.isXML,t.contains=c.contains,t.escapeSelector=c.escape;var m=function(n,o,u){for(var g=[],E=u!==void 0;(n=n[o])&&n.nodeType!==9;)if(n.nodeType===1){if(E&&t(n).is(u))break;g.push(n)}return g},v=function(n,o){for(var u=[];n;n=n.nextSibling)n.nodeType===1&&n!==o&&u.push(n);return u},h=t.expr.match.needsContext;function S(n,o){return n.nodeName&&n.nodeName.toLowerCase()===o.toLowerCase()}var R=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function B(n,o,u){return C(o)?t.grep(n,function(g,E){return!!o.call(g,E,g)!==u}):o.nodeType?t.grep(n,function(g){return g===o!==u}):typeof o!="string"?t.grep(n,function(g){return _.call(o,g)>-1!==u}):t.filter(o,n,u)}t.filter=function(n,o,u){var g=o[0];return u&&(n=":not("+n+")"),o.length===1&&g.nodeType===1?t.find.matchesSelector(g,n)?[g]:[]:t.find.matches(n,t.grep(o,function(E){return E.nodeType===1}))},t.fn.extend({find:function(n){var o,u,g=this.length,E=this;if(typeof n!="string")return this.pushStack(t(n).filter(function(){for(o=0;o<g;o++)if(t.contains(E[o],this))return!0}));for(u=this.pushStack([]),o=0;o<g;o++)t.find(n,E[o],u);return g>1?t.uniqueSort(u):u},filter:function(n){return this.pushStack(B(this,n||[],!1))},not:function(n){return this.pushStack(B(this,n||[],!0))},is:function(n){return!!B(this,typeof n=="string"&&h.test(n)?t(n):n||[],!1).length}});var H,V=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,X=t.fn.init=function(n,o,u){var g,E;if(!n)return this;if(u=u||H,typeof n=="string")if(n[0]==="<"&&n[n.length-1]===">"&&n.length>=3?g=[null,n,null]:g=V.exec(n),g&&(g[1]||!o))if(g[1]){if(o=o instanceof t?o[0]:o,t.merge(this,t.parseHTML(g[1],o&&o.nodeType?o.ownerDocument||o:P,!0)),R.test(g[1])&&t.isPlainObject(o))for(g in o)C(this[g])?this[g](o[g]):this.attr(g,o[g]);return this}else return E=P.getElementById(g[2]),E&&(this[0]=E,this.length=1),this;else return!o||o.jquery?(o||u).find(n):this.constructor(o).find(n);else{if(n.nodeType)return this[0]=n,this.length=1,this;if(C(n))return u.ready!==void 0?u.ready(n):n(t)}return t.makeArray(n,this)};X.prototype=t.fn,H=t(P);var J=/^(?:parents|prev(?:Until|All))/,de={children:!0,contents:!0,next:!0,prev:!0};t.fn.extend({has:function(n){var o=t(n,this),u=o.length;return this.filter(function(){for(var g=0;g<u;g++)if(t.contains(this,o[g]))return!0})},closest:function(n,o){var u,g=0,E=this.length,M=[],I=typeof n!="string"&&t(n);if(!h.test(n)){for(;g<E;g++)for(u=this[g];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(I?I.index(u)>-1:u.nodeType===1&&t.find.matchesSelector(u,n))){M.push(u);break}}return this.pushStack(M.length>1?t.uniqueSort(M):M)},index:function(n){return n?typeof n=="string"?_.call(t(n),this[0]):_.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,o){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(n,o))))},addBack:function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))}});function ge(n,o){for(;(n=n[o])&&n.nodeType!==1;);return n}t.each({parent:function(n){var o=n.parentNode;return o&&o.nodeType!==11?o:null},parents:function(n){return m(n,"parentNode")},parentsUntil:function(n,o,u){return m(n,"parentNode",u)},next:function(n){return ge(n,"nextSibling")},prev:function(n){return ge(n,"previousSibling")},nextAll:function(n){return m(n,"nextSibling")},prevAll:function(n){return m(n,"previousSibling")},nextUntil:function(n,o,u){return m(n,"nextSibling",u)},prevUntil:function(n,o,u){return m(n,"previousSibling",u)},siblings:function(n){return v((n.parentNode||{}).firstChild,n)},children:function(n){return v(n.firstChild)},contents:function(n){return n.contentDocument!=null&&b(n.contentDocument)?n.contentDocument:(S(n,"template")&&(n=n.content||n),t.merge([],n.childNodes))}},function(n,o){t.fn[n]=function(u,g){var E=t.map(this,o,u);return n.slice(-5)!=="Until"&&(g=u),g&&typeof g=="string"&&(E=t.filter(g,E)),this.length>1&&(de[n]||t.uniqueSort(E),J.test(n)&&E.reverse()),this.pushStack(E)}});var ce=/[^\x20\t\r\n\f]+/g;function ye(n){var o={};return t.each(n.match(ce)||[],function(u,g){o[g]=!0}),o}t.Callbacks=function(n){n=typeof n=="string"?ye(n):t.extend({},n);var o,u,g,E,M=[],I=[],G=-1,K=function(){for(E=E||n.once,g=o=!0;I.length;G=-1)for(u=I.shift();++G<M.length;)M[G].apply(u[0],u[1])===!1&&n.stopOnFalse&&(G=M.length,u=!1);n.memory||(u=!1),o=!1,E&&(u?M=[]:M="")},Z={add:function(){return M&&(u&&!o&&(G=M.length-1,I.push(u)),(function te(le){t.each(le,function(ee,re){C(re)?(!n.unique||!Z.has(re))&&M.push(re):re&&re.length&&r(re)!=="string"&&te(re)})})(arguments),u&&!o&&K()),this},remove:function(){return t.each(arguments,function(te,le){for(var ee;(ee=t.inArray(le,M,ee))>-1;)M.splice(ee,1),ee<=G&&G--}),this},has:function(te){return te?t.inArray(te,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return E=I=[],M=u="",this},disabled:function(){return!M},lock:function(){return E=I=[],!u&&!o&&(M=u=""),this},locked:function(){return!!E},fireWith:function(te,le){return E||(le=le||[],le=[te,le.slice?le.slice():le],I.push(le),o||K()),this},fire:function(){return Z.fireWith(this,arguments),this},fired:function(){return!!g}};return Z};function ze(n){return n}function Be(n){throw n}function ke(n,o,u,g){var E;try{n&&C(E=n.promise)?E.call(n).done(o).fail(u):n&&C(E=n.then)?E.call(n,o,u):o.apply(void 0,[n].slice(g))}catch(M){u.apply(void 0,[M])}}t.extend({Deferred:function(n){var o=[["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],u="pending",g={state:function(){return u},always:function(){return E.done(arguments).fail(arguments),this},catch:function(M){return g.then(null,M)},pipe:function(){var M=arguments;return t.Deferred(function(I){t.each(o,function(G,K){var Z=C(M[K[4]])&&M[K[4]];E[K[1]](function(){var te=Z&&Z.apply(this,arguments);te&&C(te.promise)?te.promise().progress(I.notify).done(I.resolve).fail(I.reject):I[K[0]+"With"](this,Z?[te]:arguments)})}),M=null}).promise()},then:function(M,I,G){var K=0;function Z(te,le,ee,re){return function(){var we=this,Pe=arguments,be=function(){var rt,xt;if(!(te<K)){if(rt=ee.apply(we,Pe),rt===le.promise())throw new TypeError("Thenable self-resolution");xt=rt&&(typeof rt=="object"||typeof rt=="function")&&rt.then,C(xt)?re?xt.call(rt,Z(K,le,ze,re),Z(K,le,Be,re)):(K++,xt.call(rt,Z(K,le,ze,re),Z(K,le,Be,re),Z(K,le,ze,le.notifyWith))):(ee!==ze&&(we=void 0,Pe=[rt]),(re||le.resolveWith)(we,Pe))}},nt=re?be:function(){try{be()}catch(rt){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(rt,nt.stackTrace),te+1>=K&&(ee!==Be&&(we=void 0,Pe=[rt]),le.rejectWith(we,Pe))}};te?nt():(t.Deferred.getStackHook&&(nt.stackTrace=t.Deferred.getStackHook()),i.setTimeout(nt))}}return t.Deferred(function(te){o[0][3].add(Z(0,te,C(G)?G:ze,te.notifyWith)),o[1][3].add(Z(0,te,C(M)?M:ze)),o[2][3].add(Z(0,te,C(I)?I:Be))}).promise()},promise:function(M){return M!=null?t.extend(M,g):g}},E={};return t.each(o,function(M,I){var G=I[2],K=I[5];g[I[1]]=G.add,K&&G.add(function(){u=K},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),G.add(I[3].fire),E[I[0]]=function(){return E[I[0]+"With"](this===E?void 0:this,arguments),this},E[I[0]+"With"]=G.fireWith}),g.promise(E),n&&n.call(E,E),E},when:function(n){var o=arguments.length,u=o,g=Array(u),E=l.call(arguments),M=t.Deferred(),I=function(G){return function(K){g[G]=this,E[G]=arguments.length>1?l.call(arguments):K,--o||M.resolveWith(g,E)}};if(o<=1&&(ke(n,M.done(I(u)).resolve,M.reject,!o),M.state()==="pending"||C(E[u]&&E[u].then)))return M.then();for(;u--;)ke(E[u],I(u),M.reject);return M.promise()}});var Oe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(n,o){i.console&&i.console.warn&&n&&Oe.test(n.name)&&i.console.warn("jQuery.Deferred exception: "+n.message,n.stack,o)},t.readyException=function(n){i.setTimeout(function(){throw n})};var Ke=t.Deferred();t.fn.ready=function(n){return Ke.then(n).catch(function(o){t.readyException(o)}),this},t.extend({isReady:!1,readyWait:1,ready:function(n){(n===!0?--t.readyWait:t.isReady)||(t.isReady=!0,!(n!==!0&&--t.readyWait>0)&&Ke.resolveWith(P,[t]))}}),t.ready.then=Ke.then;function Qe(){P.removeEventListener("DOMContentLoaded",Qe),i.removeEventListener("load",Qe),t.ready()}P.readyState==="complete"||P.readyState!=="loading"&&!P.documentElement.doScroll?i.setTimeout(t.ready):(P.addEventListener("DOMContentLoaded",Qe),i.addEventListener("load",Qe));var Ye=function(n,o,u,g,E,M,I){var G=0,K=n.length,Z=u==null;if(r(u)==="object"){E=!0;for(G in u)Ye(n,o,G,u[G],!0,M,I)}else if(g!==void 0&&(E=!0,C(g)||(I=!0),Z&&(I?(o.call(n,g),o=null):(Z=o,o=function(te,le,ee){return Z.call(t(te),ee)})),o))for(;G<K;G++)o(n[G],u,I?g:g.call(n[G],G,o(n[G],u)));return E?n:Z?o.call(n):K?o(n[0],u):M},ae=/^-ms-/,st=/-([a-z])/g;function $e(n,o){return o.toUpperCase()}function Xe(n){return n.replace(ae,"ms-").replace(st,$e)}var xe=function(n){return n.nodeType===1||n.nodeType===9||!+n.nodeType};function ct(){this.expando=t.expando+ct.uid++}ct.uid=1,ct.prototype={cache:function(n){var o=n[this.expando];return o||(o={},xe(n)&&(n.nodeType?n[this.expando]=o:Object.defineProperty(n,this.expando,{value:o,configurable:!0}))),o},set:function(n,o,u){var g,E=this.cache(n);if(typeof o=="string")E[Xe(o)]=u;else for(g in o)E[Xe(g)]=o[g];return E},get:function(n,o){return o===void 0?this.cache(n):n[this.expando]&&n[this.expando][Xe(o)]},access:function(n,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(n,o):(this.set(n,o,u),u!==void 0?u:o)},remove:function(n,o){var u,g=n[this.expando];if(g!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Xe):(o=Xe(o),o=o in g?[o]:o.match(ce)||[]),u=o.length;u--;)delete g[o[u]];(o===void 0||t.isEmptyObject(g))&&(n.nodeType?n[this.expando]=void 0:delete n[this.expando])}},hasData:function(n){var o=n[this.expando];return o!==void 0&&!t.isEmptyObject(o)}};var ve=new ct,Ve=new ct,he=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ir=/[A-Z]/g;function Vt(n){return n==="true"?!0:n==="false"?!1:n==="null"?null:n===+n+""?+n:he.test(n)?JSON.parse(n):n}function cr(n,o,u){var g;if(u===void 0&&n.nodeType===1)if(g="data-"+o.replace(Ir,"-$&").toLowerCase(),u=n.getAttribute(g),typeof u=="string"){try{u=Vt(u)}catch{}Ve.set(n,o,u)}else u=void 0;return u}t.extend({hasData:function(n){return Ve.hasData(n)||ve.hasData(n)},data:function(n,o,u){return Ve.access(n,o,u)},removeData:function(n,o){Ve.remove(n,o)},_data:function(n,o,u){return ve.access(n,o,u)},_removeData:function(n,o){ve.remove(n,o)}}),t.fn.extend({data:function(n,o){var u,g,E,M=this[0],I=M&&M.attributes;if(n===void 0){if(this.length&&(E=Ve.get(M),M.nodeType===1&&!ve.get(M,"hasDataAttrs"))){for(u=I.length;u--;)I[u]&&(g=I[u].name,g.indexOf("data-")===0&&(g=Xe(g.slice(5)),cr(M,g,E[g])));ve.set(M,"hasDataAttrs",!0)}return E}return typeof n=="object"?this.each(function(){Ve.set(this,n)}):Ye(this,function(G){var K;if(M&&G===void 0)return K=Ve.get(M,n),K!==void 0||(K=cr(M,n),K!==void 0)?K:void 0;this.each(function(){Ve.set(this,n,G)})},null,o,arguments.length>1,null,!0)},removeData:function(n){return this.each(function(){Ve.remove(this,n)})}}),t.extend({queue:function(n,o,u){var g;if(n)return o=(o||"fx")+"queue",g=ve.get(n,o),u&&(!g||Array.isArray(u)?g=ve.access(n,o,t.makeArray(u)):g.push(u)),g||[]},dequeue:function(n,o){o=o||"fx";var u=t.queue(n,o),g=u.length,E=u.shift(),M=t._queueHooks(n,o),I=function(){t.dequeue(n,o)};E==="inprogress"&&(E=u.shift(),g--),E&&(o==="fx"&&u.unshift("inprogress"),delete M.stop,E.call(n,I,M)),!g&&M&&M.empty.fire()},_queueHooks:function(n,o){var u=o+"queueHooks";return ve.get(n,u)||ve.access(n,u,{empty:t.Callbacks("once memory").add(function(){ve.remove(n,[o+"queue",u])})})}}),t.fn.extend({queue:function(n,o){var u=2;return typeof n!="string"&&(o=n,n="fx",u--),arguments.length<u?t.queue(this[0],n):o===void 0?this:this.each(function(){var g=t.queue(this,n,o);t._queueHooks(this,n),n==="fx"&&g[0]!=="inprogress"&&t.dequeue(this,n)})},dequeue:function(n){return this.each(function(){t.dequeue(this,n)})},clearQueue:function(n){return this.queue(n||"fx",[])},promise:function(n,o){var u,g=1,E=t.Deferred(),M=this,I=this.length,G=function(){--g||E.resolveWith(M,[M])};for(typeof n!="string"&&(o=n,n=void 0),n=n||"fx";I--;)u=ve.get(M[I],n+"queueHooks"),u&&u.empty&&(g++,u.empty.add(G));return G(),E.promise(o)}});var vr=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Re=new RegExp("^(?:([+-])=|)("+vr+")([a-z%]*)$","i"),vt=["Top","Right","Bottom","Left"],Nt=P.documentElement,Mt=function(n){return t.contains(n.ownerDocument,n)},on={composed:!0};Nt.getRootNode&&(Mt=function(n){return t.contains(n.ownerDocument,n)||n.getRootNode(on)===n.ownerDocument});var Jt=function(n,o){return n=o||n,n.style.display==="none"||n.style.display===""&&Mt(n)&&t.css(n,"display")==="none"};function qt(n,o,u,g){var E,M,I=20,G=g?function(){return g.cur()}:function(){return t.css(n,o,"")},K=G(),Z=u&&u[3]||(t.cssNumber[o]?"":"px"),te=n.nodeType&&(t.cssNumber[o]||Z!=="px"&&+K)&&Re.exec(t.css(n,o));if(te&&te[3]!==Z){for(K=K/2,Z=Z||te[3],te=+K||1;I--;)t.style(n,o,te+Z),(1-M)*(1-(M=G()/K||.5))<=0&&(I=0),te=te/M;te=te*2,t.style(n,o,te+Z),u=u||[]}return u&&(te=+te||+K||0,E=u[1]?te+(u[1]+1)*u[2]:+u[2],g&&(g.unit=Z,g.start=te,g.end=E)),E}var Rt={};function _r(n){var o,u=n.ownerDocument,g=n.nodeName,E=Rt[g];return E||(o=u.body.appendChild(u.createElement(g)),E=t.css(o,"display"),o.parentNode.removeChild(o),E==="none"&&(E="block"),Rt[g]=E,E)}function Dt(n,o){for(var u,g,E=[],M=0,I=n.length;M<I;M++)g=n[M],g.style&&(u=g.style.display,o?(u==="none"&&(E[M]=ve.get(g,"display")||null,E[M]||(g.style.display="")),g.style.display===""&&Jt(g)&&(E[M]=_r(g))):u!=="none"&&(E[M]="none",ve.set(g,"display",u)));for(M=0;M<I;M++)E[M]!=null&&(n[M].style.display=E[M]);return n}t.fn.extend({show:function(){return Dt(this,!0)},hide:function(){return Dt(this)},toggle:function(n){return typeof n=="boolean"?n?this.show():this.hide():this.each(function(){Jt(this)?t(this).show():t(this).hide()})}});var Qt=/^(?:checkbox|radio)$/i,Br=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,fr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var n=P.createDocumentFragment(),o=n.appendChild(P.createElement("div")),u=P.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),f.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",f.option=!!o.lastChild})();var lt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.thead,lt.th=lt.td,f.option||(lt.optgroup=lt.option=[1,"<select multiple='multiple'>","</select>"]);function ft(n,o){var u;return typeof n.getElementsByTagName<"u"?u=n.getElementsByTagName(o||"*"):typeof n.querySelectorAll<"u"?u=n.querySelectorAll(o||"*"):u=[],o===void 0||o&&S(n,o)?t.merge([n],u):u}function ur(n,o){for(var u=0,g=n.length;u<g;u++)ve.set(n[u],"globalEval",!o||ve.get(o[u],"globalEval"))}var Rr=/<|&#?\w+;/;function xr(n,o,u,g,E){for(var M,I,G,K,Z,te,le=o.createDocumentFragment(),ee=[],re=0,we=n.length;re<we;re++)if(M=n[re],M||M===0)if(r(M)==="object")t.merge(ee,M.nodeType?[M]:M);else if(!Rr.test(M))ee.push(o.createTextNode(M));else{for(I=I||le.appendChild(o.createElement("div")),G=(Br.exec(M)||["",""])[1].toLowerCase(),K=lt[G]||lt._default,I.innerHTML=K[1]+t.htmlPrefilter(M)+K[2],te=K[0];te--;)I=I.lastChild;t.merge(ee,I.childNodes),I=le.firstChild,I.textContent=""}for(le.textContent="",re=0;M=ee[re++];){if(g&&t.inArray(M,g)>-1){E&&E.push(M);continue}if(Z=Mt(M),I=ft(le.appendChild(M),"script"),Z&&ur(I),u)for(te=0;M=I[te++];)fr.test(M.type||"")&&u.push(M)}return le}var Dr=/^key/,Fr=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,yr=/^([^.]*)(?:\.(.+)|)/;function Wt(){return!0}function F(){return!1}function x(n,o){return n===L()==(o==="focus")}function L(){try{return P.activeElement}catch{}}function q(n,o,u,g,E,M){var I,G;if(typeof o=="object"){typeof u!="string"&&(g=g||u,u=void 0);for(G in o)q(n,G,u,g,o[G],M);return n}if(g==null&&E==null?(E=u,g=u=void 0):E==null&&(typeof u=="string"?(E=g,g=void 0):(E=g,g=u,u=void 0)),E===!1)E=F;else if(!E)return n;return M===1&&(I=E,E=function(K){return t().off(K),I.apply(this,arguments)},E.guid=I.guid||(I.guid=t.guid++)),n.each(function(){t.event.add(this,o,E,g,u)})}t.event={global:{},add:function(n,o,u,g,E){var M,I,G,K,Z,te,le,ee,re,we,Pe,be=ve.get(n);if(xe(n))for(u.handler&&(M=u,u=M.handler,E=M.selector),E&&t.find.matchesSelector(Nt,E),u.guid||(u.guid=t.guid++),(K=be.events)||(K=be.events=Object.create(null)),(I=be.handle)||(I=be.handle=function(nt){return typeof t<"u"&&t.event.triggered!==nt.type?t.event.dispatch.apply(n,arguments):void 0}),o=(o||"").match(ce)||[""],Z=o.length;Z--;)G=yr.exec(o[Z])||[],re=Pe=G[1],we=(G[2]||"").split(".").sort(),re&&(le=t.event.special[re]||{},re=(E?le.delegateType:le.bindType)||re,le=t.event.special[re]||{},te=t.extend({type:re,origType:Pe,data:g,handler:u,guid:u.guid,selector:E,needsContext:E&&t.expr.match.needsContext.test(E),namespace:we.join(".")},M),(ee=K[re])||(ee=K[re]=[],ee.delegateCount=0,(!le.setup||le.setup.call(n,g,we,I)===!1)&&n.addEventListener&&n.addEventListener(re,I)),le.add&&(le.add.call(n,te),te.handler.guid||(te.handler.guid=u.guid)),E?ee.splice(ee.delegateCount++,0,te):ee.push(te),t.event.global[re]=!0)},remove:function(n,o,u,g,E){var M,I,G,K,Z,te,le,ee,re,we,Pe,be=ve.hasData(n)&&ve.get(n);if(!(!be||!(K=be.events))){for(o=(o||"").match(ce)||[""],Z=o.length;Z--;){if(G=yr.exec(o[Z])||[],re=Pe=G[1],we=(G[2]||"").split(".").sort(),!re){for(re in K)t.event.remove(n,re+o[Z],u,g,!0);continue}for(le=t.event.special[re]||{},re=(g?le.delegateType:le.bindType)||re,ee=K[re]||[],G=G[2]&&new RegExp("(^|\\.)"+we.join("\\.(?:.*\\.|)")+"(\\.|$)"),I=M=ee.length;M--;)te=ee[M],(E||Pe===te.origType)&&(!u||u.guid===te.guid)&&(!G||G.test(te.namespace))&&(!g||g===te.selector||g==="**"&&te.selector)&&(ee.splice(M,1),te.selector&&ee.delegateCount--,le.remove&&le.remove.call(n,te));I&&!ee.length&&((!le.teardown||le.teardown.call(n,we,be.handle)===!1)&&t.removeEvent(n,re,be.handle),delete K[re])}t.isEmptyObject(K)&&ve.remove(n,"handle events")}},dispatch:function(n){var o,u,g,E,M,I,G=new Array(arguments.length),K=t.event.fix(n),Z=(ve.get(this,"events")||Object.create(null))[K.type]||[],te=t.event.special[K.type]||{};for(G[0]=K,o=1;o<arguments.length;o++)G[o]=arguments[o];if(K.delegateTarget=this,!(te.preDispatch&&te.preDispatch.call(this,K)===!1)){for(I=t.event.handlers.call(this,K,Z),o=0;(E=I[o++])&&!K.isPropagationStopped();)for(K.currentTarget=E.elem,u=0;(M=E.handlers[u++])&&!K.isImmediatePropagationStopped();)(!K.rnamespace||M.namespace===!1||K.rnamespace.test(M.namespace))&&(K.handleObj=M,K.data=M.data,g=((t.event.special[M.origType]||{}).handle||M.handler).apply(E.elem,G),g!==void 0&&(K.result=g)===!1&&(K.preventDefault(),K.stopPropagation()));return te.postDispatch&&te.postDispatch.call(this,K),K.result}},handlers:function(n,o){var u,g,E,M,I,G=[],K=o.delegateCount,Z=n.target;if(K&&Z.nodeType&&!(n.type==="click"&&n.button>=1)){for(;Z!==this;Z=Z.parentNode||this)if(Z.nodeType===1&&!(n.type==="click"&&Z.disabled===!0)){for(M=[],I={},u=0;u<K;u++)g=o[u],E=g.selector+" ",I[E]===void 0&&(I[E]=g.needsContext?t(E,this).index(Z)>-1:t.find(E,this,null,[Z]).length),I[E]&&M.push(g);M.length&&G.push({elem:Z,handlers:M})}}return Z=this,K<o.length&&G.push({elem:Z,handlers:o.slice(K)}),G},addProp:function(n,o){Object.defineProperty(t.Event.prototype,n,{enumerable:!0,configurable:!0,get:C(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[n]},set:function(u){Object.defineProperty(this,n,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(n){return n[t.expando]?n:new t.Event(n)},special:{load:{noBubble:!0},click:{setup:function(n){var o=this||n;return Qt.test(o.type)&&o.click&&S(o,"input")&&W(o,"click",Wt),!1},trigger:function(n){var o=this||n;return Qt.test(o.type)&&o.click&&S(o,"input")&&W(o,"click"),!0},_default:function(n){var o=n.target;return Qt.test(o.type)&&o.click&&S(o,"input")&&ve.get(o,"click")||S(o,"a")}},beforeunload:{postDispatch:function(n){n.result!==void 0&&n.originalEvent&&(n.originalEvent.returnValue=n.result)}}}};function W(n,o,u){if(!u){ve.get(n,o)===void 0&&t.event.add(n,o,Wt);return}ve.set(n,o,!1),t.event.add(n,o,{namespace:!1,handler:function(g){var E,M,I=ve.get(this,o);if(g.isTrigger&1&&this[o]){if(I.length)(t.event.special[o]||{}).delegateType&&g.stopPropagation();else if(I=l.call(arguments),ve.set(this,o,I),E=u(this,o),this[o](),M=ve.get(this,o),I!==M||E?ve.set(this,o,!1):M={},I!==M)return g.stopImmediatePropagation(),g.preventDefault(),M.value}else I.length&&(ve.set(this,o,{value:t.event.trigger(t.extend(I[0],t.Event.prototype),I.slice(1),this)}),g.stopImmediatePropagation())}})}t.removeEvent=function(n,o,u){n.removeEventListener&&n.removeEventListener(o,u)},t.Event=function(n,o){if(!(this instanceof t.Event))return new t.Event(n,o);n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.defaultPrevented===void 0&&n.returnValue===!1?Wt:F,this.target=n.target&&n.target.nodeType===3?n.target.parentNode:n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget):this.type=n,o&&t.extend(this,o),this.timeStamp=n&&n.timeStamp||Date.now(),this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:F,isPropagationStopped:F,isImmediatePropagationStopped:F,isSimulated:!1,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=Wt,n&&!this.isSimulated&&n.preventDefault()},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=Wt,n&&!this.isSimulated&&n.stopPropagation()},stopImmediatePropagation:function(){var n=this.originalEvent;this.isImmediatePropagationStopped=Wt,n&&!this.isSimulated&&n.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(n){var o=n.button;return n.which==null&&Dr.test(n.type)?n.charCode!=null?n.charCode:n.keyCode:!n.which&&o!==void 0&&Fr.test(n.type)?o&1?1:o&2?3:o&4?2:0:n.which}},t.event.addProp),t.each({focus:"focusin",blur:"focusout"},function(n,o){t.event.special[n]={setup:function(){return W(this,n,x),!1},trigger:function(){return W(this,n),!0},delegateType:o}}),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(n,o){t.event.special[n]={delegateType:o,bindType:o,handle:function(u){var g,E=this,M=u.relatedTarget,I=u.handleObj;return(!M||M!==E&&!t.contains(E,M))&&(u.type=I.origType,g=I.handler.apply(this,arguments),u.type=o),g}}}),t.fn.extend({on:function(n,o,u,g){return q(this,n,o,u,g)},one:function(n,o,u,g){return q(this,n,o,u,g,1)},off:function(n,o,u){var g,E;if(n&&n.preventDefault&&n.handleObj)return g=n.handleObj,t(n.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if(typeof n=="object"){for(E in n)this.off(E,o,n[E]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=F),this.each(function(){t.event.remove(this,n,u,o)})}});var Q=/<script|<style|<link/i,oe=/checked\s*(?:[^=]|=\s*.checked.)/i,fe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _e(n,o){return S(n,"table")&&S(o.nodeType!==11?o:o.firstChild,"tr")&&t(n).children("tbody")[0]||n}function Me(n){return n.type=(n.getAttribute("type")!==null)+"/"+n.type,n}function qe(n){return(n.type||"").slice(0,5)==="true/"?n.type=n.type.slice(5):n.removeAttribute("type"),n}function Ee(n,o){var u,g,E,M,I,G,K;if(o.nodeType===1){if(ve.hasData(n)&&(M=ve.get(n),K=M.events,K)){ve.remove(o,"handle events");for(E in K)for(u=0,g=K[E].length;u<g;u++)t.event.add(o,E,K[E][u])}Ve.hasData(n)&&(I=Ve.access(n),G=t.extend({},I),Ve.set(o,G))}}function He(n,o){var u=o.nodeName.toLowerCase();u==="input"&&Qt.test(n.type)?o.checked=n.checked:(u==="input"||u==="textarea")&&(o.defaultValue=n.defaultValue)}function at(n,o,u,g){o=p(o);var E,M,I,G,K,Z,te=0,le=n.length,ee=le-1,re=o[0],we=C(re);if(we||le>1&&typeof re=="string"&&!f.checkClone&&oe.test(re))return n.each(function(Pe){var be=n.eq(Pe);we&&(o[0]=re.call(this,Pe,be.html())),at(be,o,u,g)});if(le&&(E=xr(o,n[0].ownerDocument,!1,n,g),M=E.firstChild,E.childNodes.length===1&&(E=M),M||g)){for(I=t.map(ft(E,"script"),Me),G=I.length;te<le;te++)K=E,te!==ee&&(K=t.clone(K,!0,!0),G&&t.merge(I,ft(K,"script"))),u.call(n[te],K,te);if(G)for(Z=I[I.length-1].ownerDocument,t.map(I,qe),te=0;te<G;te++)K=I[te],fr.test(K.type||"")&&!ve.access(K,"globalEval")&&t.contains(Z,K)&&(K.src&&(K.type||"").toLowerCase()!=="module"?t._evalUrl&&!K.noModule&&t._evalUrl(K.src,{nonce:K.nonce||K.getAttribute("nonce")},Z):s(K.textContent.replace(fe,""),K,Z))}return n}function et(n,o,u){for(var g,E=o?t.filter(o,n):n,M=0;(g=E[M])!=null;M++)!u&&g.nodeType===1&&t.cleanData(ft(g)),g.parentNode&&(u&&Mt(g)&&ur(ft(g,"script")),g.parentNode.removeChild(g));return n}t.extend({htmlPrefilter:function(n){return n},clone:function(n,o,u){var g,E,M,I,G=n.cloneNode(!0),K=Mt(n);if(!f.noCloneChecked&&(n.nodeType===1||n.nodeType===11)&&!t.isXMLDoc(n))for(I=ft(G),M=ft(n),g=0,E=M.length;g<E;g++)He(M[g],I[g]);if(o)if(u)for(M=M||ft(n),I=I||ft(G),g=0,E=M.length;g<E;g++)Ee(M[g],I[g]);else Ee(n,G);return I=ft(G,"script"),I.length>0&&ur(I,!K&&ft(n,"script")),G},cleanData:function(n){for(var o,u,g,E=t.event.special,M=0;(u=n[M])!==void 0;M++)if(xe(u)){if(o=u[ve.expando]){if(o.events)for(g in o.events)E[g]?t.event.remove(u,g):t.removeEvent(u,g,o.handle);u[ve.expando]=void 0}u[Ve.expando]&&(u[Ve.expando]=void 0)}}}),t.fn.extend({detach:function(n){return et(this,n,!0)},remove:function(n){return et(this,n)},text:function(n){return Ye(this,function(o){return o===void 0?t.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,n,arguments.length)},append:function(){return at(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=_e(this,n);o.appendChild(n)}})},prepend:function(){return at(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=_e(this,n);o.insertBefore(n,o.firstChild)}})},before:function(){return at(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this)})},after:function(){return at(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)})},empty:function(){for(var n,o=0;(n=this[o])!=null;o++)n.nodeType===1&&(t.cleanData(ft(n,!1)),n.textContent="");return this},clone:function(n,o){return n=n??!1,o=o??n,this.map(function(){return t.clone(this,n,o)})},html:function(n){return Ye(this,function(o){var u=this[0]||{},g=0,E=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!Q.test(o)&&!lt[(Br.exec(o)||["",""])[1].toLowerCase()]){o=t.htmlPrefilter(o);try{for(;g<E;g++)u=this[g]||{},u.nodeType===1&&(t.cleanData(ft(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,n,arguments.length)},replaceWith:function(){var n=[];return at(this,arguments,function(o){var u=this.parentNode;t.inArray(this,n)<0&&(t.cleanData(ft(this)),u&&u.replaceChild(o,this))},n)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,o){t.fn[n]=function(u){for(var g,E=[],M=t(u),I=M.length-1,G=0;G<=I;G++)g=G===I?this:this.clone(!0),t(M[G])[o](g),y.apply(E,g.get());return this.pushStack(E)}});var Le=new RegExp("^("+vr+")(?!px)[a-z%]+$","i"),tt=function(n){var o=n.ownerDocument.defaultView;return(!o||!o.opener)&&(o=i),o.getComputedStyle(n)},Lt=function(n,o,u){var g,E,M={};for(E in o)M[E]=n.style[E],n.style[E]=o[E];g=u.call(n);for(E in o)n.style[E]=M[E];return g},wr=new RegExp(vt.join("|"),"i");(function(){function n(){if(Z){K.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Z.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Nt.appendChild(K).appendChild(Z);var te=i.getComputedStyle(Z);u=te.top!=="1%",G=o(te.marginLeft)===12,Z.style.right="60%",M=o(te.right)===36,g=o(te.width)===36,Z.style.position="absolute",E=o(Z.offsetWidth/3)===12,Nt.removeChild(K),Z=null}}function o(te){return Math.round(parseFloat(te))}var u,g,E,M,I,G,K=P.createElement("div"),Z=P.createElement("div");Z.style&&(Z.style.backgroundClip="content-box",Z.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle=Z.style.backgroundClip==="content-box",t.extend(f,{boxSizingReliable:function(){return n(),g},pixelBoxStyles:function(){return n(),M},pixelPosition:function(){return n(),u},reliableMarginLeft:function(){return n(),G},scrollboxSize:function(){return n(),E},reliableTrDimensions:function(){var te,le,ee,re;return I==null&&(te=P.createElement("table"),le=P.createElement("tr"),ee=P.createElement("div"),te.style.cssText="position:absolute;left:-11111px",le.style.height="1px",ee.style.height="9px",Nt.appendChild(te).appendChild(le).appendChild(ee),re=i.getComputedStyle(le),I=parseInt(re.height)>3,Nt.removeChild(te)),I}}))})();function _t(n,o,u){var g,E,M,I,G=n.style;return u=u||tt(n),u&&(I=u.getPropertyValue(o)||u[o],I===""&&!Mt(n)&&(I=t.style(n,o)),!f.pixelBoxStyles()&&Le.test(I)&&wr.test(o)&&(g=G.width,E=G.minWidth,M=G.maxWidth,G.minWidth=G.maxWidth=G.width=I,I=u.width,G.width=g,G.minWidth=E,G.maxWidth=M)),I!==void 0?I+"":I}function Ut(n,o){return{get:function(){if(n()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var Gt=["Webkit","Moz","ms"],qn=P.createElement("div").style,Wn={};function ts(n){for(var o=n[0].toUpperCase()+n.slice(1),u=Gt.length;u--;)if(n=Gt[u]+o,n in qn)return n}function ln(n){var o=t.cssProps[n]||Wn[n];return o||(n in qn?n:Wn[n]=ts(n)||n)}var rs=/^(none|table(?!-c[ea]).+)/,Un=/^--/,ns={position:"absolute",visibility:"hidden",display:"block"},Gn={letterSpacing:"0",fontWeight:"400"};function Kn(n,o,u){var g=Re.exec(o);return g?Math.max(0,g[2]-(u||0))+(g[3]||"px"):o}function dn(n,o,u,g,E,M){var I=o==="width"?1:0,G=0,K=0;if(u===(g?"border":"content"))return 0;for(;I<4;I+=2)u==="margin"&&(K+=t.css(n,u+vt[I],!0,E)),g?(u==="content"&&(K-=t.css(n,"padding"+vt[I],!0,E)),u!=="margin"&&(K-=t.css(n,"border"+vt[I]+"Width",!0,E))):(K+=t.css(n,"padding"+vt[I],!0,E),u!=="padding"?K+=t.css(n,"border"+vt[I]+"Width",!0,E):G+=t.css(n,"border"+vt[I]+"Width",!0,E));return!g&&M>=0&&(K+=Math.max(0,Math.ceil(n["offset"+o[0].toUpperCase()+o.slice(1)]-M-K-G-.5))||0),K}function Xn(n,o,u){var g=tt(n),E=!f.boxSizingReliable()||u,M=E&&t.css(n,"boxSizing",!1,g)==="border-box",I=M,G=_t(n,o,g),K="offset"+o[0].toUpperCase()+o.slice(1);if(Le.test(G)){if(!u)return G;G="auto"}return(!f.boxSizingReliable()&&M||!f.reliableTrDimensions()&&S(n,"tr")||G==="auto"||!parseFloat(G)&&t.css(n,"display",!1,g)==="inline")&&n.getClientRects().length&&(M=t.css(n,"boxSizing",!1,g)==="border-box",I=K in n,I&&(G=n[K])),G=parseFloat(G)||0,G+dn(n,o,u||(M?"border":"content"),I,g,G)+"px"}t.extend({cssHooks:{opacity:{get:function(n,o){if(o){var u=_t(n,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(n,o,u,g){if(!(!n||n.nodeType===3||n.nodeType===8||!n.style)){var E,M,I,G=Xe(o),K=Un.test(o),Z=n.style;if(K||(o=ln(G)),I=t.cssHooks[o]||t.cssHooks[G],u!==void 0){if(M=typeof u,M==="string"&&(E=Re.exec(u))&&E[1]&&(u=qt(n,o,E),M="number"),u==null||u!==u)return;M==="number"&&!K&&(u+=E&&E[3]||(t.cssNumber[G]?"":"px")),!f.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(Z[o]="inherit"),(!I||!("set"in I)||(u=I.set(n,u,g))!==void 0)&&(K?Z.setProperty(o,u):Z[o]=u)}else return I&&"get"in I&&(E=I.get(n,!1,g))!==void 0?E:Z[o]}},css:function(n,o,u,g){var E,M,I,G=Xe(o),K=Un.test(o);return K||(o=ln(G)),I=t.cssHooks[o]||t.cssHooks[G],I&&"get"in I&&(E=I.get(n,!0,u)),E===void 0&&(E=_t(n,o,g)),E==="normal"&&o in Gn&&(E=Gn[o]),u===""||u?(M=parseFloat(E),u===!0||isFinite(M)?M||0:E):E}}),t.each(["height","width"],function(n,o){t.cssHooks[o]={get:function(u,g,E){if(g)return rs.test(t.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Lt(u,ns,function(){return Xn(u,o,E)}):Xn(u,o,E)},set:function(u,g,E){var M,I=tt(u),G=!f.scrollboxSize()&&I.position==="absolute",K=G||E,Z=K&&t.css(u,"boxSizing",!1,I)==="border-box",te=E?dn(u,o,E,Z,I):0;return Z&&G&&(te-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(I[o])-dn(u,o,"border",!1,I)-.5)),te&&(M=Re.exec(g))&&(M[3]||"px")!=="px"&&(u.style[o]=g,g=t.css(u,o)),Kn(u,g,te)}}}),t.cssHooks.marginLeft=Ut(f.reliableMarginLeft,function(n,o){if(o)return(parseFloat(_t(n,"marginLeft"))||n.getBoundingClientRect().left-Lt(n,{marginLeft:0},function(){return n.getBoundingClientRect().left}))+"px"}),t.each({margin:"",padding:"",border:"Width"},function(n,o){t.cssHooks[n+o]={expand:function(u){for(var g=0,E={},M=typeof u=="string"?u.split(" "):[u];g<4;g++)E[n+vt[g]+o]=M[g]||M[g-2]||M[0];return E}},n!=="margin"&&(t.cssHooks[n+o].set=Kn)}),t.fn.extend({css:function(n,o){return Ye(this,function(u,g,E){var M,I,G={},K=0;if(Array.isArray(g)){for(M=tt(u),I=g.length;K<I;K++)G[g[K]]=t.css(u,g[K],!1,M);return G}return E!==void 0?t.style(u,g,E):t.css(u,g)},n,o,arguments.length>1)}});function ht(n,o,u,g,E){return new ht.prototype.init(n,o,u,g,E)}t.Tween=ht,ht.prototype={constructor:ht,init:function(n,o,u,g,E,M){this.elem=n,this.prop=u,this.easing=E||t.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=g,this.unit=M||(t.cssNumber[u]?"":"px")},cur:function(){var n=ht.propHooks[this.prop];return n&&n.get?n.get(this):ht.propHooks._default.get(this)},run:function(n){var o,u=ht.propHooks[this.prop];return this.options.duration?this.pos=o=t.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):this.pos=o=n,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):ht.propHooks._default.set(this),this}},ht.prototype.init.prototype=ht.prototype,ht.propHooks={_default:{get:function(n){var o;return n.elem.nodeType!==1||n.elem[n.prop]!=null&&n.elem.style[n.prop]==null?n.elem[n.prop]:(o=t.css(n.elem,n.prop,""),!o||o==="auto"?0:o)},set:function(n){t.fx.step[n.prop]?t.fx.step[n.prop](n):n.elem.nodeType===1&&(t.cssHooks[n.prop]||n.elem.style[ln(n.prop)]!=null)?t.style(n.elem,n.prop,n.now+n.unit):n.elem[n.prop]=n.now}}},ht.propHooks.scrollTop=ht.propHooks.scrollLeft={set:function(n){n.elem.nodeType&&n.elem.parentNode&&(n.elem[n.prop]=n.now)}},t.easing={linear:function(n){return n},swing:function(n){return .5-Math.cos(n*Math.PI)/2},_default:"swing"},t.fx=ht.prototype.init,t.fx.step={};var hr,Hr,is=/^(?:toggle|show|hide)$/,ss=/queueHooks$/;function cn(){Hr&&(P.hidden===!1&&i.requestAnimationFrame?i.requestAnimationFrame(cn):i.setTimeout(cn,t.fx.interval),t.fx.tick())}function Yn(){return i.setTimeout(function(){hr=void 0}),hr=Date.now()}function zr(n,o){var u,g=0,E={height:n};for(o=o?1:0;g<4;g+=2-o)u=vt[g],E["margin"+u]=E["padding"+u]=n;return o&&(E.opacity=E.width=n),E}function Jn(n,o,u){for(var g,E=(St.tweeners[o]||[]).concat(St.tweeners["*"]),M=0,I=E.length;M<I;M++)if(g=E[M].call(u,o,n))return g}function as(n,o,u){var g,E,M,I,G,K,Z,te,le="width"in o||"height"in o,ee=this,re={},we=n.style,Pe=n.nodeType&&Jt(n),be=ve.get(n,"fxshow");u.queue||(I=t._queueHooks(n,"fx"),I.unqueued==null&&(I.unqueued=0,G=I.empty.fire,I.empty.fire=function(){I.unqueued||G()}),I.unqueued++,ee.always(function(){ee.always(function(){I.unqueued--,t.queue(n,"fx").length||I.empty.fire()})}));for(g in o)if(E=o[g],is.test(E)){if(delete o[g],M=M||E==="toggle",E===(Pe?"hide":"show"))if(E==="show"&&be&&be[g]!==void 0)Pe=!0;else continue;re[g]=be&&be[g]||t.style(n,g)}if(K=!t.isEmptyObject(o),!(!K&&t.isEmptyObject(re))){le&&n.nodeType===1&&(u.overflow=[we.overflow,we.overflowX,we.overflowY],Z=be&&be.display,Z==null&&(Z=ve.get(n,"display")),te=t.css(n,"display"),te==="none"&&(Z?te=Z:(Dt([n],!0),Z=n.style.display||Z,te=t.css(n,"display"),Dt([n]))),(te==="inline"||te==="inline-block"&&Z!=null)&&t.css(n,"float")==="none"&&(K||(ee.done(function(){we.display=Z}),Z==null&&(te=we.display,Z=te==="none"?"":te)),we.display="inline-block")),u.overflow&&(we.overflow="hidden",ee.always(function(){we.overflow=u.overflow[0],we.overflowX=u.overflow[1],we.overflowY=u.overflow[2]})),K=!1;for(g in re)K||(be?"hidden"in be&&(Pe=be.hidden):be=ve.access(n,"fxshow",{display:Z}),M&&(be.hidden=!Pe),Pe&&Dt([n],!0),ee.done(function(){Pe||Dt([n]),ve.remove(n,"fxshow");for(g in re)t.style(n,g,re[g])})),K=Jn(Pe?be[g]:0,g,ee),g in be||(be[g]=K.start,Pe&&(K.end=K.start,K.start=0))}}function os(n,o){var u,g,E,M,I;for(u in n)if(g=Xe(u),E=o[g],M=n[u],Array.isArray(M)&&(E=M[1],M=n[u]=M[0]),u!==g&&(n[g]=M,delete n[u]),I=t.cssHooks[g],I&&"expand"in I){M=I.expand(M),delete n[g];for(u in M)u in n||(n[u]=M[u],o[u]=E)}else o[g]=E}function St(n,o,u){var g,E,M=0,I=St.prefilters.length,G=t.Deferred().always(function(){delete K.elem}),K=function(){if(E)return!1;for(var le=hr||Yn(),ee=Math.max(0,Z.startTime+Z.duration-le),re=ee/Z.duration||0,we=1-re,Pe=0,be=Z.tweens.length;Pe<be;Pe++)Z.tweens[Pe].run(we);return G.notifyWith(n,[Z,we,ee]),we<1&&be?ee:(be||G.notifyWith(n,[Z,1,0]),G.resolveWith(n,[Z]),!1)},Z=G.promise({elem:n,props:t.extend({},o),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},u),originalProperties:o,originalOptions:u,startTime:hr||Yn(),duration:u.duration,tweens:[],createTween:function(le,ee){var re=t.Tween(n,Z.opts,le,ee,Z.opts.specialEasing[le]||Z.opts.easing);return Z.tweens.push(re),re},stop:function(le){var ee=0,re=le?Z.tweens.length:0;if(E)return this;for(E=!0;ee<re;ee++)Z.tweens[ee].run(1);return le?(G.notifyWith(n,[Z,1,0]),G.resolveWith(n,[Z,le])):G.rejectWith(n,[Z,le]),this}}),te=Z.props;for(os(te,Z.opts.specialEasing);M<I;M++)if(g=St.prefilters[M].call(Z,n,te,Z.opts),g)return C(g.stop)&&(t._queueHooks(Z.elem,Z.opts.queue).stop=g.stop.bind(g)),g;return t.map(te,Jn,Z),C(Z.opts.start)&&Z.opts.start.call(n,Z),Z.progress(Z.opts.progress).done(Z.opts.done,Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always),t.fx.timer(t.extend(K,{elem:n,anim:Z,queue:Z.opts.queue})),Z}t.Animation=t.extend(St,{tweeners:{"*":[function(n,o){var u=this.createTween(n,o);return qt(u.elem,n,Re.exec(o),u),u}]},tweener:function(n,o){C(n)?(o=n,n=["*"]):n=n.match(ce);for(var u,g=0,E=n.length;g<E;g++)u=n[g],St.tweeners[u]=St.tweeners[u]||[],St.tweeners[u].unshift(o)},prefilters:[as],prefilter:function(n,o){o?St.prefilters.unshift(n):St.prefilters.push(n)}}),t.speed=function(n,o,u){var g=n&&typeof n=="object"?t.extend({},n):{complete:u||!u&&o||C(n)&&n,duration:n,easing:u&&o||o&&!C(o)&&o};return t.fx.off?g.duration=0:typeof g.duration!="number"&&(g.duration in t.fx.speeds?g.duration=t.fx.speeds[g.duration]:g.duration=t.fx.speeds._default),(g.queue==null||g.queue===!0)&&(g.queue="fx"),g.old=g.complete,g.complete=function(){C(g.old)&&g.old.call(this),g.queue&&t.dequeue(this,g.queue)},g},t.fn.extend({fadeTo:function(n,o,u,g){return this.filter(Jt).css("opacity",0).show().end().animate({opacity:o},n,u,g)},animate:function(n,o,u,g){var E=t.isEmptyObject(n),M=t.speed(o,u,g),I=function(){var G=St(this,t.extend({},n),M);(E||ve.get(this,"finish"))&&G.stop(!0)};return I.finish=I,E||M.queue===!1?this.each(I):this.queue(M.queue,I)},stop:function(n,o,u){var g=function(E){var M=E.stop;delete E.stop,M(u)};return typeof n!="string"&&(u=o,o=n,n=void 0),o&&this.queue(n||"fx",[]),this.each(function(){var E=!0,M=n!=null&&n+"queueHooks",I=t.timers,G=ve.get(this);if(M)G[M]&&G[M].stop&&g(G[M]);else for(M in G)G[M]&&G[M].stop&&ss.test(M)&&g(G[M]);for(M=I.length;M--;)I[M].elem===this&&(n==null||I[M].queue===n)&&(I[M].anim.stop(u),E=!1,I.splice(M,1));(E||!u)&&t.dequeue(this,n)})},finish:function(n){return n!==!1&&(n=n||"fx"),this.each(function(){var o,u=ve.get(this),g=u[n+"queue"],E=u[n+"queueHooks"],M=t.timers,I=g?g.length:0;for(u.finish=!0,t.queue(this,n,[]),E&&E.stop&&E.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===n&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<I;o++)g[o]&&g[o].finish&&g[o].finish.call(this);delete u.finish})}}),t.each(["toggle","show","hide"],function(n,o){var u=t.fn[o];t.fn[o]=function(g,E,M){return g==null||typeof g=="boolean"?u.apply(this,arguments):this.animate(zr(o,!0),g,E,M)}}),t.each({slideDown:zr("show"),slideUp:zr("hide"),slideToggle:zr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(n,o){t.fn[n]=function(u,g,E){return this.animate(o,u,g,E)}}),t.timers=[],t.fx.tick=function(){var n,o=0,u=t.timers;for(hr=Date.now();o<u.length;o++)n=u[o],!n()&&u[o]===n&&u.splice(o--,1);u.length||t.fx.stop(),hr=void 0},t.fx.timer=function(n){t.timers.push(n),t.fx.start()},t.fx.interval=13,t.fx.start=function(){Hr||(Hr=!0,cn())},t.fx.stop=function(){Hr=null},t.fx.speeds={slow:600,fast:200,_default:400},t.fn.delay=function(n,o){return n=t.fx&&t.fx.speeds[n]||n,o=o||"fx",this.queue(o,function(u,g){var E=i.setTimeout(u,n);g.stop=function(){i.clearTimeout(E)}})},(function(){var n=P.createElement("input"),o=P.createElement("select"),u=o.appendChild(P.createElement("option"));n.type="checkbox",f.checkOn=n.value!=="",f.optSelected=u.selected,n=P.createElement("input"),n.value="t",n.type="radio",f.radioValue=n.value==="t"})();var Qn,br=t.expr.attrHandle;t.fn.extend({attr:function(n,o){return Ye(this,t.attr,n,o,arguments.length>1)},removeAttr:function(n){return this.each(function(){t.removeAttr(this,n)})}}),t.extend({attr:function(n,o,u){var g,E,M=n.nodeType;if(!(M===3||M===8||M===2)){if(typeof n.getAttribute>"u")return t.prop(n,o,u);if((M!==1||!t.isXMLDoc(n))&&(E=t.attrHooks[o.toLowerCase()]||(t.expr.match.bool.test(o)?Qn:void 0)),u!==void 0){if(u===null){t.removeAttr(n,o);return}return E&&"set"in E&&(g=E.set(n,u,o))!==void 0?g:(n.setAttribute(o,u+""),u)}return E&&"get"in E&&(g=E.get(n,o))!==null?g:(g=t.find.attr(n,o),g??void 0)}},attrHooks:{type:{set:function(n,o){if(!f.radioValue&&o==="radio"&&S(n,"input")){var u=n.value;return n.setAttribute("type",o),u&&(n.value=u),o}}}},removeAttr:function(n,o){var u,g=0,E=o&&o.match(ce);if(E&&n.nodeType===1)for(;u=E[g++];)n.removeAttribute(u)}}),Qn={set:function(n,o,u){return o===!1?t.removeAttr(n,u):n.setAttribute(u,u),u}},t.each(t.expr.match.bool.source.match(/\w+/g),function(n,o){var u=br[o]||t.find.attr;br[o]=function(g,E,M){var I,G,K=E.toLowerCase();return M||(G=br[K],br[K]=I,I=u(g,E,M)!=null?K:null,br[K]=G),I}});var ls=/^(?:input|select|textarea|button)$/i,ds=/^(?:a|area)$/i;t.fn.extend({prop:function(n,o){return Ye(this,t.prop,n,o,arguments.length>1)},removeProp:function(n){return this.each(function(){delete this[t.propFix[n]||n]})}}),t.extend({prop:function(n,o,u){var g,E,M=n.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!t.isXMLDoc(n))&&(o=t.propFix[o]||o,E=t.propHooks[o]),u!==void 0?E&&"set"in E&&(g=E.set(n,u,o))!==void 0?g:n[o]=u:E&&"get"in E&&(g=E.get(n,o))!==null?g:n[o]},propHooks:{tabIndex:{get:function(n){var o=t.find.attr(n,"tabindex");return o?parseInt(o,10):ls.test(n.nodeName)||ds.test(n.nodeName)&&n.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(t.propHooks.selected={get:function(n){var o=n.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(n){var o=n.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this});function Zt(n){var o=n.match(ce)||[];return o.join(" ")}function $t(n){return n.getAttribute&&n.getAttribute("class")||""}function fn(n){return Array.isArray(n)?n:typeof n=="string"?n.match(ce)||[]:[]}t.fn.extend({addClass:function(n){var o,u,g,E,M,I,G,K=0;if(C(n))return this.each(function(Z){t(this).addClass(n.call(this,Z,$t(this)))});if(o=fn(n),o.length){for(;u=this[K++];)if(E=$t(u),g=u.nodeType===1&&" "+Zt(E)+" ",g){for(I=0;M=o[I++];)g.indexOf(" "+M+" ")<0&&(g+=M+" ");G=Zt(g),E!==G&&u.setAttribute("class",G)}}return this},removeClass:function(n){var o,u,g,E,M,I,G,K=0;if(C(n))return this.each(function(Z){t(this).removeClass(n.call(this,Z,$t(this)))});if(!arguments.length)return this.attr("class","");if(o=fn(n),o.length){for(;u=this[K++];)if(E=$t(u),g=u.nodeType===1&&" "+Zt(E)+" ",g){for(I=0;M=o[I++];)for(;g.indexOf(" "+M+" ")>-1;)g=g.replace(" "+M+" "," ");G=Zt(g),E!==G&&u.setAttribute("class",G)}}return this},toggleClass:function(n,o){var u=typeof n,g=u==="string"||Array.isArray(n);return typeof o=="boolean"&&g?o?this.addClass(n):this.removeClass(n):C(n)?this.each(function(E){t(this).toggleClass(n.call(this,E,$t(this),o),o)}):this.each(function(){var E,M,I,G;if(g)for(M=0,I=t(this),G=fn(n);E=G[M++];)I.hasClass(E)?I.removeClass(E):I.addClass(E);else(n===void 0||u==="boolean")&&(E=$t(this),E&&ve.set(this,"__className__",E),this.setAttribute&&this.setAttribute("class",E||n===!1?"":ve.get(this,"__className__")||""))})},hasClass:function(n){var o,u,g=0;for(o=" "+n+" ";u=this[g++];)if(u.nodeType===1&&(" "+Zt($t(u))+" ").indexOf(o)>-1)return!0;return!1}});var cs=/\r/g;t.fn.extend({val:function(n){var o,u,g,E=this[0];return arguments.length?(g=C(n),this.each(function(M){var I;this.nodeType===1&&(g?I=n.call(this,M,t(this).val()):I=n,I==null?I="":typeof I=="number"?I+="":Array.isArray(I)&&(I=t.map(I,function(G){return G==null?"":G+""})),o=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,I,"value")===void 0)&&(this.value=I))})):E?(o=t.valHooks[E.type]||t.valHooks[E.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(E,"value"))!==void 0?u:(u=E.value,typeof u=="string"?u.replace(cs,""):u??"")):void 0}}),t.extend({valHooks:{option:{get:function(n){var o=t.find.attr(n,"value");return o??Zt(t.text(n))}},select:{get:function(n){var o,u,g,E=n.options,M=n.selectedIndex,I=n.type==="select-one",G=I?null:[],K=I?M+1:E.length;for(M<0?g=K:g=I?M:0;g<K;g++)if(u=E[g],(u.selected||g===M)&&!u.disabled&&(!u.parentNode.disabled||!S(u.parentNode,"optgroup"))){if(o=t(u).val(),I)return o;G.push(o)}return G},set:function(n,o){for(var u,g,E=n.options,M=t.makeArray(o),I=E.length;I--;)g=E[I],(g.selected=t.inArray(t.valHooks.option.get(g),M)>-1)&&(u=!0);return u||(n.selectedIndex=-1),M}}}}),t.each(["radio","checkbox"],function(){t.valHooks[this]={set:function(n,o){if(Array.isArray(o))return n.checked=t.inArray(t(n).val(),o)>-1}},f.checkOn||(t.valHooks[this].get=function(n){return n.getAttribute("value")===null?"on":n.value})}),f.focusin="onfocusin"in i;var Zn=/^(?:focusinfocus|focusoutblur)$/,$n=function(n){n.stopPropagation()};t.extend(t.event,{trigger:function(n,o,u,g){var E,M,I,G,K,Z,te,le,ee=[u||P],re=T.call(n,"type")?n.type:n,we=T.call(n,"namespace")?n.namespace.split("."):[];if(M=le=I=u=u||P,!(u.nodeType===3||u.nodeType===8)&&!Zn.test(re+t.event.triggered)&&(re.indexOf(".")>-1&&(we=re.split("."),re=we.shift(),we.sort()),K=re.indexOf(":")<0&&"on"+re,n=n[t.expando]?n:new t.Event(re,typeof n=="object"&&n),n.isTrigger=g?2:3,n.namespace=we.join("."),n.rnamespace=n.namespace?new RegExp("(^|\\.)"+we.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=void 0,n.target||(n.target=u),o=o==null?[n]:t.makeArray(o,[n]),te=t.event.special[re]||{},!(!g&&te.trigger&&te.trigger.apply(u,o)===!1))){if(!g&&!te.noBubble&&!N(u)){for(G=te.delegateType||re,Zn.test(G+re)||(M=M.parentNode);M;M=M.parentNode)ee.push(M),I=M;I===(u.ownerDocument||P)&&ee.push(I.defaultView||I.parentWindow||i)}for(E=0;(M=ee[E++])&&!n.isPropagationStopped();)le=M,n.type=E>1?G:te.bindType||re,Z=(ve.get(M,"events")||Object.create(null))[n.type]&&ve.get(M,"handle"),Z&&Z.apply(M,o),Z=K&&M[K],Z&&Z.apply&&xe(M)&&(n.result=Z.apply(M,o),n.result===!1&&n.preventDefault());return n.type=re,!g&&!n.isDefaultPrevented()&&(!te._default||te._default.apply(ee.pop(),o)===!1)&&xe(u)&&K&&C(u[re])&&!N(u)&&(I=u[K],I&&(u[K]=null),t.event.triggered=re,n.isPropagationStopped()&&le.addEventListener(re,$n),u[re](),n.isPropagationStopped()&&le.removeEventListener(re,$n),t.event.triggered=void 0,I&&(u[K]=I)),n.result}},simulate:function(n,o,u){var g=t.extend(new t.Event,u,{type:n,isSimulated:!0});t.event.trigger(g,null,o)}}),t.fn.extend({trigger:function(n,o){return this.each(function(){t.event.trigger(n,o,this)})},triggerHandler:function(n,o){var u=this[0];if(u)return t.event.trigger(n,o,u,!0)}}),f.focusin||t.each({focus:"focusin",blur:"focusout"},function(n,o){var u=function(g){t.event.simulate(o,g.target,t.event.fix(g))};t.event.special[o]={setup:function(){var g=this.ownerDocument||this.document||this,E=ve.access(g,o);E||g.addEventListener(n,u,!0),ve.access(g,o,(E||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,E=ve.access(g,o)-1;E?ve.access(g,o,E):(g.removeEventListener(n,u,!0),ve.remove(g,o))}}});var kr=i.location,ei={guid:Date.now()},un=/\?/;t.parseXML=function(n){var o;if(!n||typeof n!="string")return null;try{o=new i.DOMParser().parseFromString(n,"text/xml")}catch{o=void 0}return(!o||o.getElementsByTagName("parsererror").length)&&t.error("Invalid XML: "+n),o};var fs=/\[\]$/,ti=/\r?\n/g,us=/^(?:submit|button|image|reset|file)$/i,hs=/^(?:input|select|textarea|keygen)/i;function hn(n,o,u,g){var E;if(Array.isArray(o))t.each(o,function(M,I){u||fs.test(n)?g(n,I):hn(n+"["+(typeof I=="object"&&I!=null?M:"")+"]",I,u,g)});else if(!u&&r(o)==="object")for(E in o)hn(n+"["+E+"]",o[E],u,g);else g(n,o)}t.param=function(n,o){var u,g=[],E=function(M,I){var G=C(I)?I():I;g[g.length]=encodeURIComponent(M)+"="+encodeURIComponent(G??"")};if(n==null)return"";if(Array.isArray(n)||n.jquery&&!t.isPlainObject(n))t.each(n,function(){E(this.name,this.value)});else for(u in n)hn(u,n[u],o,E);return g.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var n=t.prop(this,"elements");return n?t.makeArray(n):this}).filter(function(){var n=this.type;return this.name&&!t(this).is(":disabled")&&hs.test(this.nodeName)&&!us.test(n)&&(this.checked||!Qt.test(n))}).map(function(n,o){var u=t(this).val();return u==null?null:Array.isArray(u)?t.map(u,function(g){return{name:o.name,value:g.replace(ti,`\r
`)}}):{name:o.name,value:u.replace(ti,`\r
`)}}).get()}});var ps=/%20/g,gs=/#.*$/,ms=/([?&])_=[^&]*/,vs=/^(.*?):[ \t]*([^\r\n]*)$/mg,_s=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,xs=/^(?:GET|HEAD)$/,ys=/^\/\//,ri={},pn={},ni="*/".concat("*"),gn=P.createElement("a");gn.href=kr.href;function ii(n){return function(o,u){typeof o!="string"&&(u=o,o="*");var g,E=0,M=o.toLowerCase().match(ce)||[];if(C(u))for(;g=M[E++];)g[0]==="+"?(g=g.slice(1)||"*",(n[g]=n[g]||[]).unshift(u)):(n[g]=n[g]||[]).push(u)}}function si(n,o,u,g){var E={},M=n===pn;function I(G){var K;return E[G]=!0,t.each(n[G]||[],function(Z,te){var le=te(o,u,g);if(typeof le=="string"&&!M&&!E[le])return o.dataTypes.unshift(le),I(le),!1;if(M)return!(K=le)}),K}return I(o.dataTypes[0])||!E["*"]&&I("*")}function mn(n,o){var u,g,E=t.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((E[u]?n:g||(g={}))[u]=o[u]);return g&&t.extend(!0,n,g),n}function ws(n,o,u){for(var g,E,M,I,G=n.contents,K=n.dataTypes;K[0]==="*";)K.shift(),g===void 0&&(g=n.mimeType||o.getResponseHeader("Content-Type"));if(g){for(E in G)if(G[E]&&G[E].test(g)){K.unshift(E);break}}if(K[0]in u)M=K[0];else{for(E in u){if(!K[0]||n.converters[E+" "+K[0]]){M=E;break}I||(I=E)}M=M||I}if(M)return M!==K[0]&&K.unshift(M),u[M]}function bs(n,o,u,g){var E,M,I,G,K,Z={},te=n.dataTypes.slice();if(te[1])for(I in n.converters)Z[I.toLowerCase()]=n.converters[I];for(M=te.shift();M;)if(n.responseFields[M]&&(u[n.responseFields[M]]=o),!K&&g&&n.dataFilter&&(o=n.dataFilter(o,n.dataType)),K=M,M=te.shift(),M){if(M==="*")M=K;else if(K!=="*"&&K!==M){if(I=Z[K+" "+M]||Z["* "+M],!I){for(E in Z)if(G=E.split(" "),G[1]===M&&(I=Z[K+" "+G[0]]||Z["* "+G[0]],I)){I===!0?I=Z[E]:Z[E]!==!0&&(M=G[0],te.unshift(G[1]));break}}if(I!==!0)if(I&&n.throws)o=I(o);else try{o=I(o)}catch(le){return{state:"parsererror",error:I?le:"No conversion from "+K+" to "+M}}}}return{state:"success",data:o}}t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:kr.href,type:"GET",isLocal:_s.test(kr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ni,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,o){return o?mn(mn(n,t.ajaxSettings),o):mn(t.ajaxSettings,n)},ajaxPrefilter:ii(ri),ajaxTransport:ii(pn),ajax:function(n,o){typeof n=="object"&&(o=n,n=void 0),o=o||{};var u,g,E,M,I,G,K,Z,te,le,ee=t.ajaxSetup({},o),re=ee.context||ee,we=ee.context&&(re.nodeType||re.jquery)?t(re):t.event,Pe=t.Deferred(),be=t.Callbacks("once memory"),nt=ee.statusCode||{},rt={},xt={},We="canceled",Ae={readyState:0,getResponseHeader:function(De){var Ze;if(K){if(!M)for(M={};Ze=vs.exec(E);)M[Ze[1].toLowerCase()+" "]=(M[Ze[1].toLowerCase()+" "]||[]).concat(Ze[2]);Ze=M[De.toLowerCase()+" "]}return Ze==null?null:Ze.join(", ")},getAllResponseHeaders:function(){return K?E:null},setRequestHeader:function(De,Ze){return K==null&&(De=xt[De.toLowerCase()]=xt[De.toLowerCase()]||De,rt[De]=Ze),this},overrideMimeType:function(De){return K==null&&(ee.mimeType=De),this},statusCode:function(De){var Ze;if(De)if(K)Ae.always(De[Ae.status]);else for(Ze in De)nt[Ze]=[nt[Ze],De[Ze]];return this},abort:function(De){var Ze=De||We;return u&&u.abort(Ze),pt(0,Ze),this}};if(Pe.promise(Ae),ee.url=((n||ee.url||kr.href)+"").replace(ys,kr.protocol+"//"),ee.type=o.method||o.type||ee.method||ee.type,ee.dataTypes=(ee.dataType||"*").toLowerCase().match(ce)||[""],ee.crossDomain==null){G=P.createElement("a");try{G.href=ee.url,G.href=G.href,ee.crossDomain=gn.protocol+"//"+gn.host!=G.protocol+"//"+G.host}catch{ee.crossDomain=!0}}if(ee.data&&ee.processData&&typeof ee.data!="string"&&(ee.data=t.param(ee.data,ee.traditional)),si(ri,ee,o,Ae),K)return Ae;Z=t.event&&ee.global,Z&&t.active++===0&&t.event.trigger("ajaxStart"),ee.type=ee.type.toUpperCase(),ee.hasContent=!xs.test(ee.type),g=ee.url.replace(gs,""),ee.hasContent?ee.data&&ee.processData&&(ee.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ee.data=ee.data.replace(ps,"+")):(le=ee.url.slice(g.length),ee.data&&(ee.processData||typeof ee.data=="string")&&(g+=(un.test(g)?"&":"?")+ee.data,delete ee.data),ee.cache===!1&&(g=g.replace(ms,"$1"),le=(un.test(g)?"&":"?")+"_="+ei.guid+++le),ee.url=g+le),ee.ifModified&&(t.lastModified[g]&&Ae.setRequestHeader("If-Modified-Since",t.lastModified[g]),t.etag[g]&&Ae.setRequestHeader("If-None-Match",t.etag[g])),(ee.data&&ee.hasContent&&ee.contentType!==!1||o.contentType)&&Ae.setRequestHeader("Content-Type",ee.contentType),Ae.setRequestHeader("Accept",ee.dataTypes[0]&&ee.accepts[ee.dataTypes[0]]?ee.accepts[ee.dataTypes[0]]+(ee.dataTypes[0]!=="*"?", "+ni+"; q=0.01":""):ee.accepts["*"]);for(te in ee.headers)Ae.setRequestHeader(te,ee.headers[te]);if(ee.beforeSend&&(ee.beforeSend.call(re,Ae,ee)===!1||K))return Ae.abort();if(We="abort",be.add(ee.complete),Ae.done(ee.success),Ae.fail(ee.error),u=si(pn,ee,o,Ae),!u)pt(-1,"No Transport");else{if(Ae.readyState=1,Z&&we.trigger("ajaxSend",[Ae,ee]),K)return Ae;ee.async&&ee.timeout>0&&(I=i.setTimeout(function(){Ae.abort("timeout")},ee.timeout));try{K=!1,u.send(rt,pt)}catch(De){if(K)throw De;pt(-1,De)}}function pt(De,Ze,jr,Vr){var yt,er,tr,gt,Kt,Ct=Ze;K||(K=!0,I&&i.clearTimeout(I),u=void 0,E=Vr||"",Ae.readyState=De>0?4:0,yt=De>=200&&De<300||De===304,jr&&(gt=ws(ee,Ae,jr)),!yt&&t.inArray("script",ee.dataTypes)>-1&&(ee.converters["text script"]=function(){}),gt=bs(ee,gt,Ae,yt),yt?(ee.ifModified&&(Kt=Ae.getResponseHeader("Last-Modified"),Kt&&(t.lastModified[g]=Kt),Kt=Ae.getResponseHeader("etag"),Kt&&(t.etag[g]=Kt)),De===204||ee.type==="HEAD"?Ct="nocontent":De===304?Ct="notmodified":(Ct=gt.state,er=gt.data,tr=gt.error,yt=!tr)):(tr=Ct,(De||!Ct)&&(Ct="error",De<0&&(De=0))),Ae.status=De,Ae.statusText=(Ze||Ct)+"",yt?Pe.resolveWith(re,[er,Ct,Ae]):Pe.rejectWith(re,[Ae,Ct,tr]),Ae.statusCode(nt),nt=void 0,Z&&we.trigger(yt?"ajaxSuccess":"ajaxError",[Ae,ee,yt?er:tr]),be.fireWith(re,[Ae,Ct]),Z&&(we.trigger("ajaxComplete",[Ae,ee]),--t.active||t.event.trigger("ajaxStop")))}return Ae},getJSON:function(n,o,u){return t.get(n,o,u,"json")},getScript:function(n,o){return t.get(n,void 0,o,"script")}}),t.each(["get","post"],function(n,o){t[o]=function(u,g,E,M){return C(g)&&(M=M||E,E=g,g=void 0),t.ajax(t.extend({url:u,type:o,dataType:M,data:g,success:E},t.isPlainObject(u)&&u))}}),t.ajaxPrefilter(function(n){var o;for(o in n.headers)o.toLowerCase()==="content-type"&&(n.contentType=n.headers[o]||"")}),t._evalUrl=function(n,o,u){return t.ajax({url:n,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(g){t.globalEval(g,o,u)}})},t.fn.extend({wrapAll:function(n){var o;return this[0]&&(C(n)&&(n=n.call(this[0])),o=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(n){return C(n)?this.each(function(o){t(this).wrapInner(n.call(this,o))}):this.each(function(){var o=t(this),u=o.contents();u.length?u.wrapAll(n):o.append(n)})},wrap:function(n){var o=C(n);return this.each(function(u){t(this).wrapAll(o?n.call(this,u):n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t.expr.pseudos.hidden=function(n){return!t.expr.pseudos.visible(n)},t.expr.pseudos.visible=function(n){return!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length)},t.ajaxSettings.xhr=function(){try{return}catch{}};var ks={0:200,1223:204},Cr=t.ajaxSettings.xhr();f.cors=!!Cr&&"withCredentials"in Cr,f.ajax=Cr=!!Cr,t.ajaxTransport(function(n){var o,u;if(f.cors||Cr&&!n.crossDomain)return{send:function(g,E){var M,I=n.xhr();if(I.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(M in n.xhrFields)I[M]=n.xhrFields[M];n.mimeType&&I.overrideMimeType&&I.overrideMimeType(n.mimeType),!n.crossDomain&&!g["X-Requested-With"]&&(g["X-Requested-With"]="XMLHttpRequest");for(M in g)I.setRequestHeader(M,g[M]);o=function(G){return function(){o&&(o=u=I.onload=I.onerror=I.onabort=I.ontimeout=I.onreadystatechange=null,G==="abort"?I.abort():G==="error"?typeof I.status!="number"?E(0,"error"):E(I.status,I.statusText):E(ks[I.status]||I.status,I.statusText,(I.responseType||"text")!=="text"||typeof I.responseText!="string"?{binary:I.response}:{text:I.responseText},I.getAllResponseHeaders()))}},I.onload=o(),u=I.onerror=I.ontimeout=o("error"),I.onabort!==void 0?I.onabort=u:I.onreadystatechange=function(){I.readyState===4&&i.setTimeout(function(){o&&u()})},o=o("abort");try{I.send(n.hasContent&&n.data||null)}catch(G){if(o)throw G}},abort:function(){o&&o()}}}),t.ajaxPrefilter(function(n){n.crossDomain&&(n.contents.script=!1)}),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(n){return t.globalEval(n),n}}}),t.ajaxPrefilter("script",function(n){n.cache===void 0&&(n.cache=!1),n.crossDomain&&(n.type="GET")}),t.ajaxTransport("script",function(n){if(n.crossDomain||n.scriptAttrs){var o,u;return{send:function(g,E){o=t("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",u=function(M){o.remove(),u=null,M&&E(M.type==="error"?404:200,M.type)}),P.head.appendChild(o[0])},abort:function(){u&&u()}}}});var ai=[],vn=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=ai.pop()||t.expando+"_"+ei.guid++;return this[n]=!0,n}}),t.ajaxPrefilter("json jsonp",function(n,o,u){var g,E,M,I=n.jsonp!==!1&&(vn.test(n.url)?"url":typeof n.data=="string"&&(n.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&vn.test(n.data)&&"data");if(I||n.dataTypes[0]==="jsonp")return g=n.jsonpCallback=C(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,I?n[I]=n[I].replace(vn,"$1"+g):n.jsonp!==!1&&(n.url+=(un.test(n.url)?"&":"?")+n.jsonp+"="+g),n.converters["script json"]=function(){return M||t.error(g+" was not called"),M[0]},n.dataTypes[0]="json",E=i[g],i[g]=function(){M=arguments},u.always(function(){E===void 0?t(i).removeProp(g):i[g]=E,n[g]&&(n.jsonpCallback=o.jsonpCallback,ai.push(g)),M&&C(E)&&E(M[0]),M=E=void 0}),"script"}),f.createHTMLDocument=(function(){var n=P.implementation.createHTMLDocument("").body;return n.innerHTML="<form></form><form></form>",n.childNodes.length===2})(),t.parseHTML=function(n,o,u){if(typeof n!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var g,E,M;return o||(f.createHTMLDocument?(o=P.implementation.createHTMLDocument(""),g=o.createElement("base"),g.href=P.location.href,o.head.appendChild(g)):o=P),E=R.exec(n),M=!u&&[],E?[o.createElement(E[1])]:(E=xr([n],o,M),M&&M.length&&t(M).remove(),t.merge([],E.childNodes))},t.fn.load=function(n,o,u){var g,E,M,I=this,G=n.indexOf(" ");return G>-1&&(g=Zt(n.slice(G)),n=n.slice(0,G)),C(o)?(u=o,o=void 0):o&&typeof o=="object"&&(E="POST"),I.length>0&&t.ajax({url:n,type:E||"GET",dataType:"html",data:o}).done(function(K){M=arguments,I.html(g?t("<div>").append(t.parseHTML(K)).find(g):K)}).always(u&&function(K,Z){I.each(function(){u.apply(this,M||[K.responseText,Z,K])})}),this},t.expr.pseudos.animated=function(n){return t.grep(t.timers,function(o){return n===o.elem}).length},t.offset={setOffset:function(n,o,u){var g,E,M,I,G,K,Z,te=t.css(n,"position"),le=t(n),ee={};te==="static"&&(n.style.position="relative"),G=le.offset(),M=t.css(n,"top"),K=t.css(n,"left"),Z=(te==="absolute"||te==="fixed")&&(M+K).indexOf("auto")>-1,Z?(g=le.position(),I=g.top,E=g.left):(I=parseFloat(M)||0,E=parseFloat(K)||0),C(o)&&(o=o.call(n,u,t.extend({},G))),o.top!=null&&(ee.top=o.top-G.top+I),o.left!=null&&(ee.left=o.left-G.left+E),"using"in o?o.using.call(n,ee):(typeof ee.top=="number"&&(ee.top+="px"),typeof ee.left=="number"&&(ee.left+="px"),le.css(ee))}},t.fn.extend({offset:function(n){if(arguments.length)return n===void 0?this:this.each(function(E){t.offset.setOffset(this,n,E)});var o,u,g=this[0];if(g)return g.getClientRects().length?(o=g.getBoundingClientRect(),u=g.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var n,o,u,g=this[0],E={top:0,left:0};if(t.css(g,"position")==="fixed")o=g.getBoundingClientRect();else{for(o=this.offset(),u=g.ownerDocument,n=g.offsetParent||u.documentElement;n&&(n===u.body||n===u.documentElement)&&t.css(n,"position")==="static";)n=n.parentNode;n&&n!==g&&n.nodeType===1&&(E=t(n).offset(),E.top+=t.css(n,"borderTopWidth",!0),E.left+=t.css(n,"borderLeftWidth",!0))}return{top:o.top-E.top-t.css(g,"marginTop",!0),left:o.left-E.left-t.css(g,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent;n&&t.css(n,"position")==="static";)n=n.offsetParent;return n||Nt})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,o){var u=o==="pageYOffset";t.fn[n]=function(g){return Ye(this,function(E,M,I){var G;if(N(E)?G=E:E.nodeType===9&&(G=E.defaultView),I===void 0)return G?G[o]:E[M];G?G.scrollTo(u?G.pageXOffset:I,u?I:G.pageYOffset):E[M]=I},n,g,arguments.length)}}),t.each(["top","left"],function(n,o){t.cssHooks[o]=Ut(f.pixelPosition,function(u,g){if(g)return g=_t(u,o),Le.test(g)?t(u).position()[o]+"px":g})}),t.each({Height:"height",Width:"width"},function(n,o){t.each({padding:"inner"+n,content:o,"":"outer"+n},function(u,g){t.fn[g]=function(E,M){var I=arguments.length&&(u||typeof E!="boolean"),G=u||(E===!0||M===!0?"margin":"border");return Ye(this,function(K,Z,te){var le;return N(K)?g.indexOf("outer")===0?K["inner"+n]:K.document.documentElement["client"+n]:K.nodeType===9?(le=K.documentElement,Math.max(K.body["scroll"+n],le["scroll"+n],K.body["offset"+n],le["offset"+n],le["client"+n])):te===void 0?t.css(K,Z,G):t.style(K,Z,te,G)},o,I?E:void 0,I)}})}),t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(n,o){t.fn[o]=function(u){return this.on(o,u)}}),t.fn.extend({bind:function(n,o,u){return this.on(n,null,o,u)},unbind:function(n,o){return this.off(n,null,o)},delegate:function(n,o,u,g){return this.on(o,n,u,g)},undelegate:function(n,o,u){return arguments.length===1?this.off(n,"**"):this.off(o,n||"**",u)},hover:function(n,o){return this.mouseenter(n).mouseleave(o||n)}}),t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(n,o){t.fn[o]=function(u,g){return arguments.length>0?this.on(o,null,u,g):this.trigger(o)}});var Cs=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;t.proxy=function(n,o){var u,g,E;if(typeof o=="string"&&(u=n[o],o=n,n=u),!!C(n))return g=l.call(arguments,2),E=function(){return n.apply(o||this,g.concat(l.call(arguments)))},E.guid=n.guid=n.guid||t.guid++,E},t.holdReady=function(n){n?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=S,t.isFunction=C,t.isWindow=N,t.camelCase=Xe,t.type=r,t.now=Date.now,t.isNumeric=function(n){var o=t.type(n);return(o==="number"||o==="string")&&!isNaN(n-parseFloat(n))},t.trim=function(n){return n==null?"":(n+"").replace(Cs,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return t});var js=i.jQuery,Ss=i.$;return t.noConflict=function(n){return i.$===t&&(i.$=Ss),n&&i.jQuery===t&&(i.jQuery=js),t},typeof A>"u"&&(i.jQuery=i.$=t),t})});var Li=ot((Oa,rn)=>{(function(i){"use strict";typeof define=="function"&&define.amd?define(["jquery"],i):typeof rn<"u"&&rn.exports?rn.exports=i(tn()):i(jQuery)})(function(i,A){"use strict";if(!i.jstree){var z=0,b=!1,l=!1,p=!1,y=[],_=i("script:last").attr("src"),O=window.document,k=window.setImmediate,T=window.Promise;!k&&T&&(k=function(e,s){T.resolve(s).then(e)}),i.jstree={version:"3.3.11",defaults:{plugins:[]},plugins:{},path:_&&_.indexOf("/")!==-1?_.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},i.jstree.create=function(e,s){var r=new i.jstree.core(++z),a=s;return s=i.extend(!0,{},i.jstree.defaults,s),a&&a.plugins&&(s.plugins=a.plugins),i.each(s.plugins,function(t,d){t!=="core"&&(r=r.plugin(d,s[d]))}),i(e).data("jstree",r),r.init(e,s),r},i.jstree.destroy=function(){i(".jstree:jstree").jstree("destroy"),i(O).off(".jstree")},i.jstree.core=function(e){this._id=e,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1,ellipsis:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},i.jstree.reference=function(e){var s=null,r=null;if(e&&e.id&&(!e.tagName||!e.nodeType)&&(e=e.id),!r||!r.length)try{r=i(e)}catch{}if(!r||!r.length)try{r=i("#"+e.replace(i.jstree.idregex,"\\$&"))}catch{}return r&&r.length&&(r=r.closest(".jstree")).length&&(r=r.data("jstree"))?s=r:i(".jstree").each(function(){var a=i(this).data("jstree");if(a&&a._model.data[e])return s=a,!1}),s},i.fn.jstree=function(e){var s=typeof e=="string",r=Array.prototype.slice.call(arguments,1),a=null;return e===!0&&!this.length?!1:(this.each(function(){var t=i.jstree.reference(this),d=s&&t?t[e]:null;if(a=s&&d?d.apply(t,r):null,!t&&!s&&(e===A||i.isPlainObject(e))&&i.jstree.create(this,e),(t&&!s||e===!0)&&(a=t||!1),a!==null&&a!==A)return!1}),a!==null&&a!==A?a:this)},i.expr.pseudos.jstree=i.expr.createPseudo(function(e){return function(s){return i(s).hasClass("jstree")&&i(s).data("jstree")!==A}}),i.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:i.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,ellipsis:!1,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0,loaded_state:!1,restore_focus:!0,compute_elements_positions:!1,keyboard:{"ctrl-space":function(e){e.type="click",i(e.currentTarget).trigger(e)},enter:function(e){e.type="click",i(e.currentTarget).trigger(e)},left:function(e){if(e.preventDefault(),this.is_open(e.currentTarget))this.close_node(e.currentTarget);else{var s=this.get_parent(e.currentTarget);s&&s.id!==i.jstree.root&&this.get_node(s,!0).children(".jstree-anchor").focus()}},up:function(e){e.preventDefault();var s=this.get_prev_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},right:function(e){if(e.preventDefault(),this.is_closed(e.currentTarget))this.open_node(e.currentTarget,function(r){this.get_node(r,!0).children(".jstree-anchor").focus()});else if(this.is_open(e.currentTarget)){var s=this.get_node(e.currentTarget,!0).children(".jstree-children")[0];s&&i(this._firstChild(s)).children(".jstree-anchor").focus()}},down:function(e){e.preventDefault();var s=this.get_next_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},"*":function(e){this.open_all()},home:function(e){e.preventDefault();var s=this._firstChild(this.get_container_ul()[0]);s&&i(s).children(".jstree-anchor").filter(":visible").focus()},end:function(e){e.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().focus()},f2:function(e){e.preventDefault(),this.edit(e.currentTarget)}}},i.jstree.core.prototype={plugin:function(e,s){var r=i.jstree.plugins[e];return r?(this._data[e]={},r.prototype=this,new r(s,this)):this},init:function(e,s){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[i.jstree.root]={id:i.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=i(e).addClass("jstree jstree-"+this._id),this.settings=s,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl=this.element.css("direction")==="rtl",this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return this.nodeType===3&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().outerHeight()||24,this._data.core.node=this._create_prototype_node(),this.trigger("loading"),this.load_node(i.jstree.root)},destroy:function(e){if(this.trigger("destroy"),this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch{}e||this.element.empty(),this.teardown()},_create_prototype_node:function(){var e=O.createElement("LI"),s,r;return e.setAttribute("role","none"),s=O.createElement("I"),s.className="jstree-icon jstree-ocl",s.setAttribute("role","presentation"),e.appendChild(s),s=O.createElement("A"),s.className="jstree-anchor",s.setAttribute("href","#"),s.setAttribute("tabindex","-1"),s.setAttribute("role","treeitem"),r=O.createElement("I"),r.className="jstree-icon jstree-themeicon",r.setAttribute("role","presentation"),s.appendChild(r),e.appendChild(s),s=r=null,e},_kbevent_to_func:function(e){var s={8:"Backspace",9:"Tab",13:"Enter",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock",16:"Shift",17:"Ctrl",18:"Alt",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*",173:"-"},r=[];if(e.ctrlKey&&r.push("ctrl"),e.altKey&&r.push("alt"),e.shiftKey&&r.push("shift"),r.push(s[e.which]||e.which),r=r.sort().join("-").toLowerCase(),r==="shift-shift"||r==="ctrl-ctrl"||r==="alt-alt")return null;var a=this.settings.core.keyboard,t,d;for(t in a)if(a.hasOwnProperty(t)&&(d=t,d!=="-"&&d!=="+"&&(d=d.replace("--","-MINUS").replace("+-","-MINUS").replace("++","-PLUS").replace("-+","-PLUS"),d=d.split(/-|\+/).sort().join("-").replace("MINUS","-").replace("PLUS","+").toLowerCase()),d===r))return a[t];return null},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/ig,"")}),this.element=null},bind:function(){var e="",s=null,r=0;this.element.on("dblclick.jstree",function(a){if(a.target.tagName&&a.target.tagName.toLowerCase()==="input")return!0;if(O.selection&&O.selection.empty)O.selection.empty();else if(window.getSelection){var t=window.getSelection();try{t.removeAllRanges(),t.collapse()}catch{}}}).on("mousedown.jstree",i.proxy(function(a){a.target===this.element[0]&&(a.preventDefault(),r=+new Date)},this)).on("mousedown.jstree",".jstree-ocl",function(a){a.preventDefault()}).on("click.jstree",".jstree-ocl",i.proxy(function(a){this.toggle_node(a.target)},this)).on("dblclick.jstree",".jstree-anchor",i.proxy(function(a){if(a.target.tagName&&a.target.tagName.toLowerCase()==="input")return!0;this.settings.core.dblclick_toggle&&this.toggle_node(a.target)},this)).on("click.jstree",".jstree-anchor",i.proxy(function(a){a.preventDefault(),a.currentTarget!==O.activeElement&&i(a.currentTarget).focus(),this.activate_node(a.currentTarget,a)},this)).on("keydown.jstree",".jstree-anchor",i.proxy(function(a){if(a.target.tagName&&a.target.tagName.toLowerCase()==="input")return!0;this._data.core.rtl&&(a.which===37?a.which=39:a.which===39&&(a.which=37));var t=this._kbevent_to_func(a);if(t){var d=t.call(this,a);if(d===!1||d===!0)return d}},this)).on("load_node.jstree",i.proxy(function(a,t){t.status&&(t.node.id===i.jstree.root&&!this._data.core.loaded&&(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(i.proxy(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var d=[],c,m;for(c=0,m=this._data.core.selected.length;c<m;c++)d=d.concat(this._model.data[this._data.core.selected[c]].parents);for(d=i.vakata.array_unique(d),c=0,m=d.length;c<m;c++)this.open_node(d[c],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this),0))},this)).on("keypress.jstree",i.proxy(function(a){if(a.target.tagName&&a.target.tagName.toLowerCase()==="input")return!0;s&&clearTimeout(s),s=setTimeout(function(){e=""},500);var t=String.fromCharCode(a.which).toLowerCase(),d=this.element.find(".jstree-anchor").filter(":visible"),c=d.index(O.activeElement)||0,m=!1;e+=t,!(e.length>1&&(d.slice(c).each(i.proxy(function(v,h){if(i(h).text().toLowerCase().indexOf(e)===0)return i(h).focus(),m=!0,!1},this)),m||(d.slice(0,c).each(i.proxy(function(v,h){if(i(h).text().toLowerCase().indexOf(e)===0)return i(h).focus(),m=!0,!1},this)),m)))&&new RegExp("^"+t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(e)&&(d.slice(c+1).each(i.proxy(function(v,h){if(i(h).text().toLowerCase().charAt(0)===t)return i(h).focus(),m=!0,!1},this)),m||d.slice(0,c+1).each(i.proxy(function(v,h){if(i(h).text().toLowerCase().charAt(0)===t)return i(h).focus(),m=!0,!1},this)))},this)).on("init.jstree",i.proxy(function(){var a=this.settings.core.themes;this._data.core.themes.dots=a.dots,this._data.core.themes.stripes=a.stripes,this._data.core.themes.icons=a.icons,this._data.core.themes.ellipsis=a.ellipsis,this.set_theme(a.name||"default",a.url),this.set_theme_variant(a.variant)},this)).on("loading.jstree",i.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"](),this[this._data.core.themes.ellipsis?"show_ellipsis":"hide_ellipsis"]()},this)).on("blur.jstree",".jstree-anchor",i.proxy(function(a){this._data.core.focused=null,i(a.currentTarget).filter(".jstree-hovered").trigger("mouseleave"),this.element.attr("tabindex","0")},this)).on("focus.jstree",".jstree-anchor",i.proxy(function(a){var t=this.get_node(a.currentTarget);t&&t.id&&(this._data.core.focused=t.id),this.element.find(".jstree-hovered").not(a.currentTarget).trigger("mouseleave"),i(a.currentTarget).trigger("mouseenter"),this.element.attr("tabindex","-1")},this)).on("focus.jstree",i.proxy(function(){if(+new Date-r>500&&!this._data.core.focused&&this.settings.core.restore_focus){r=0;var a=this.get_node(this.element.attr("aria-activedescendant"),!0);a&&a.find("> .jstree-anchor").focus()}},this)).on("mouseenter.jstree",".jstree-anchor",i.proxy(function(a){this.hover_node(a.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",i.proxy(function(a){this.dehover_node(a.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),i(O).off(".jstree-"+this._id)},trigger:function(e,s){s||(s={}),s.instance=this,this.element.triggerHandler(e.replace(".jstree","")+".jstree",s)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(e){var s=this.settings.core.strings;return i.isFunction(s)?s.call(this,e):s&&s[e]?s[e]:e},_firstChild:function(e){for(e=e?e.firstChild:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_nextSibling:function(e){for(e=e?e.nextSibling:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_previousSibling:function(e){for(e=e?e.previousSibling:null;e!==null&&e.nodeType!==1;)e=e.previousSibling;return e},get_node:function(e,s){e&&e.id&&(e=e.id),e instanceof i&&e.length&&e[0].id&&(e=e[0].id);var r;try{if(this._model.data[e])e=this._model.data[e];else if(typeof e=="string"&&this._model.data[e.replace(/^#/,"")])e=this._model.data[e.replace(/^#/,"")];else if(typeof e=="string"&&(r=i("#"+e.replace(i.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[r.closest(".jstree-node").attr("id")])e=this._model.data[r.closest(".jstree-node").attr("id")];else if((r=this.element.find(e)).length&&this._model.data[r.closest(".jstree-node").attr("id")])e=this._model.data[r.closest(".jstree-node").attr("id")];else if((r=this.element.find(e)).length&&r.hasClass("jstree"))e=this._model.data[i.jstree.root];else return!1;return s&&(e=e.id===i.jstree.root?this.element:i("#"+e.id.replace(i.jstree.idregex,"\\$&"),this.element)),e}catch{return!1}},get_path:function(e,s,r){if(e=e.parents?e:this.get_node(e),!e||e.id===i.jstree.root||!e.parents)return!1;var a,t,d=[];for(d.push(r?e.id:e.text),a=0,t=e.parents.length;a<t;a++)d.push(r?e.parents[a]:this.get_text(e.parents[a]));return d=d.reverse().slice(1),s?d.join(s):d},get_next_dom:function(e,s){var r;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(r=this._firstChild(this.get_container_ul()[0]);r&&r.offsetHeight===0;)r=this._nextSibling(r);return r?i(r):!1}if(!e||!e.length)return!1;if(s){r=e[0];do r=this._nextSibling(r);while(r&&r.offsetHeight===0);return r?i(r):!1}if(e.hasClass("jstree-open")){for(r=this._firstChild(e.children(".jstree-children")[0]);r&&r.offsetHeight===0;)r=this._nextSibling(r);if(r!==null)return i(r)}r=e[0];do r=this._nextSibling(r);while(r&&r.offsetHeight===0);return r!==null?i(r):e.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(e,s){var r;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(r=this.get_container_ul()[0].lastChild;r&&r.offsetHeight===0;)r=this._previousSibling(r);return r?i(r):!1}if(!e||!e.length)return!1;if(s){r=e[0];do r=this._previousSibling(r);while(r&&r.offsetHeight===0);return r?i(r):!1}r=e[0];do r=this._previousSibling(r);while(r&&r.offsetHeight===0);if(r!==null){for(e=i(r);e.hasClass("jstree-open");)e=e.children(".jstree-children").first().children(".jstree-node:visible:last");return e}return r=e[0].parentNode.parentNode,r&&r.className&&r.className.indexOf("jstree-node")!==-1?i(r):!1},get_parent:function(e){return e=this.get_node(e),!e||e.id===i.jstree.root?!1:e.parent},get_children_dom:function(e){return e=this.get_node(e,!0),e[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):!e||!e.length?!1:e.children(".jstree-children").children(".jstree-node")},is_parent:function(e){return e=this.get_node(e),e&&(e.state.loaded===!1||e.children.length>0)},is_loaded:function(e){return e=this.get_node(e),e&&e.state.loaded},is_loading:function(e){return e=this.get_node(e),e&&e.state&&e.state.loading},is_open:function(e){return e=this.get_node(e),e&&e.state.opened},is_closed:function(e){return e=this.get_node(e),e&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(e,s){var r,a,t,d,c;if(i.isArray(e))return this._load_nodes(e.slice(),s),!0;if(e=this.get_node(e),!e)return s&&s.call(this,e,!1),!1;if(e.state.loaded){for(e.state.loaded=!1,t=0,d=e.parents.length;t<d;t++)this._model.data[e.parents[t]].children_d=i.vakata.array_filter(this._model.data[e.parents[t]].children_d,function(m){return i.inArray(m,e.children_d)===-1});for(r=0,a=e.children_d.length;r<a;r++)this._model.data[e.children_d[r]].state.selected&&(c=!0),delete this._model.data[e.children_d[r]];c&&(this._data.core.selected=i.vakata.array_filter(this._data.core.selected,function(m){return i.inArray(m,e.children_d)===-1})),e.children=[],e.children_d=[],c&&this.trigger("changed",{action:"load_node",node:e,selected:this._data.core.selected})}return e.state.failed=!1,e.state.loading=!0,this.get_node(e,!0).addClass("jstree-loading").attr("aria-busy",!0),this._load_node(e,i.proxy(function(m){e=this._model.data[e.id],e.state.loading=!1,e.state.loaded=m,e.state.failed=!e.state.loaded;var v=this.get_node(e,!0),h=0,S=0,R=this._model.data,B=!1;for(h=0,S=e.children.length;h<S;h++)if(R[e.children[h]]&&!R[e.children[h]].state.hidden){B=!0;break}e.state.loaded&&v&&v.length&&(v.removeClass("jstree-closed jstree-open jstree-leaf"),B?e.id!=="#"&&v.addClass(e.state.opened?"jstree-open":"jstree-closed"):v.addClass("jstree-leaf")),v.removeClass("jstree-loading").attr("aria-busy",!1),this.trigger("load_node",{node:e,status:m}),s&&s.call(this,e,m)},this)),!0},_load_nodes:function(e,s,r,a){var t=!0,d=function(){this._load_nodes(e,s,!0)},c=this._model.data,m,v,h=[];for(m=0,v=e.length;m<v;m++)c[e[m]]&&(!c[e[m]].state.loaded&&!c[e[m]].state.failed||!r&&a)&&(this.is_loading(e[m])||this.load_node(e[m],d),t=!1);if(t){for(m=0,v=e.length;m<v;m++)c[e[m]]&&c[e[m]].state.loaded&&h.push(e[m]);s&&!s.done&&(s.call(this,h),s.done=!0)}},load_all:function(e,s){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var r=[],a=this._model.data,t=a[e.id].children_d,d,c;for(e.state&&!e.state.loaded&&r.push(e.id),d=0,c=t.length;d<c;d++)a[t[d]]&&a[t[d]].state&&!a[t[d]].state.loaded&&r.push(t[d]);r.length?this._load_nodes(r,function(){this.load_all(e,s)}):(s&&s.call(this,e),this.trigger("load_all",{node:e}))},_load_node:function(e,s){var r=this.settings.core.data,a,t=function(){return this.nodeType!==3&&this.nodeType!==8};return r?i.isFunction(r)?r.call(this,e,i.proxy(function(d){d===!1?s.call(this,!1):this[typeof d=="string"?"_append_html_data":"_append_json_data"](e,typeof d=="string"?i(i.parseHTML(d)).filter(t):d,function(c){s.call(this,c)})},this)):typeof r=="object"?r.url?(r=i.extend(!0,{},r),i.isFunction(r.url)&&(r.url=r.url.call(this,e)),i.isFunction(r.data)&&(r.data=r.data.call(this,e)),i.ajax(r).done(i.proxy(function(d,c,m){var v=m.getResponseHeader("Content-Type");return v&&v.indexOf("json")!==-1||typeof d=="object"?this._append_json_data(e,d,function(h){s.call(this,h)}):v&&v.indexOf("html")!==-1||typeof d=="string"?this._append_html_data(e,i(i.parseHTML(d)).filter(t),function(h){s.call(this,h)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:m})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))},this)).fail(i.proxy(function(d){this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:d})},s.call(this,!1),this.settings.core.error.call(this,this._data.core.last_error)},this))):(i.isArray(r)?a=i.extend(!0,[],r):i.isPlainObject(r)?a=i.extend(!0,{},r):a=r,e.id===i.jstree.root?this._append_json_data(e,a,function(d){s.call(this,d)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))):typeof r=="string"?e.id===i.jstree.root?this._append_html_data(e,i(i.parseHTML(r)).filter(t),function(d){s.call(this,d)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1)):s.call(this,!1):e.id===i.jstree.root?this._append_html_data(e,this._data.core.original_container_html.clone(!0),function(d){s.call(this,d)}):s.call(this,!1)},_node_changed:function(e){e=this.get_node(e),e&&i.inArray(e.id,this._model.changed)===-1&&this._model.changed.push(e.id)},_append_html_data:function(e,s,r){e=this.get_node(e),e.children=[],e.children_d=[];var a=s.is("ul")?s.children():s,t=e.id,d=[],c=[],m=this._model.data,v=m[t],h=this._data.core.selected.length,S,R,B;for(a.each(i.proxy(function(H,V){S=this._parse_model_from_html(i(V),t,v.parents.concat()),S&&(d.push(S),c.push(S),m[S].children_d.length&&(c=c.concat(m[S].children_d)))},this)),v.children=d,v.children_d=c,R=0,B=v.parents.length;R<B;R++)m[v.parents[R]].children_d=m[v.parents[R]].children_d.concat(c);this.trigger("model",{nodes:c,parent:t}),t!==i.jstree.root?(this._node_changed(t),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==h&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),r.call(this,!0)},_append_json_data:function(e,s,r,a){if(this.element!==null){e=this.get_node(e),e.children=[],e.children_d=[],s.d&&(s=s.d,typeof s=="string"&&(s=JSON.parse(s))),i.isArray(s)||(s=[s]);var t=null,d={df:this._model.default_state,dat:s,par:e.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},c=this,m=function(h,S){h.data&&(h=h.data);var R=h.dat,B=h.par,H=[],V=[],X=[],J=h.df,de=h.t_id,ge=h.t_cnt,ce=h.m,ye=ce[B],ze=h.sel,Be,ke,Oe,Ke,Qe=function(ae,st,$e){$e?$e=$e.concat():$e=[],st&&$e.unshift(st);var Xe=ae.id.toString(),xe,ct,ve,Ve,he={id:Xe,text:ae.text||"",icon:ae.icon!==S?ae.icon:!0,parent:st,parents:$e,children:ae.children||[],children_d:ae.children_d||[],data:ae.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(xe in J)J.hasOwnProperty(xe)&&(he.state[xe]=J[xe]);if(ae&&ae.data&&ae.data.jstree&&ae.data.jstree.icon&&(he.icon=ae.data.jstree.icon),(he.icon===S||he.icon===null||he.icon==="")&&(he.icon=!0),ae&&ae.data&&(he.data=ae.data,ae.data.jstree))for(xe in ae.data.jstree)ae.data.jstree.hasOwnProperty(xe)&&(he.state[xe]=ae.data.jstree[xe]);if(ae&&typeof ae.state=="object")for(xe in ae.state)ae.state.hasOwnProperty(xe)&&(he.state[xe]=ae.state[xe]);if(ae&&typeof ae.li_attr=="object")for(xe in ae.li_attr)ae.li_attr.hasOwnProperty(xe)&&(he.li_attr[xe]=ae.li_attr[xe]);if(he.li_attr.id||(he.li_attr.id=Xe),ae&&typeof ae.a_attr=="object")for(xe in ae.a_attr)ae.a_attr.hasOwnProperty(xe)&&(he.a_attr[xe]=ae.a_attr[xe]);for(ae&&ae.children&&ae.children===!0&&(he.state.loaded=!1,he.children=[],he.children_d=[]),ce[he.id]=he,xe=0,ct=he.children.length;xe<ct;xe++)ve=Qe(ce[he.children[xe]],he.id,$e),Ve=ce[ve],he.children_d.push(ve),Ve.children_d.length&&(he.children_d=he.children_d.concat(Ve.children_d));return delete ae.data,delete ae.children,ce[he.id].original=ae,he.state.selected&&X.push(he.id),he.id},Ye=function(ae,st,$e){$e?$e=$e.concat():$e=[],st&&$e.unshift(st);var Xe=!1,xe,ct,ve,Ve,he;do Xe="j"+de+"_"+ ++ge;while(ce[Xe]);he={id:!1,text:typeof ae=="string"?ae:"",icon:typeof ae=="object"&&ae.icon!==S?ae.icon:!0,parent:st,parents:$e,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(xe in J)J.hasOwnProperty(xe)&&(he.state[xe]=J[xe]);if(ae&&ae.id&&(he.id=ae.id.toString()),ae&&ae.text&&(he.text=ae.text),ae&&ae.data&&ae.data.jstree&&ae.data.jstree.icon&&(he.icon=ae.data.jstree.icon),(he.icon===S||he.icon===null||he.icon==="")&&(he.icon=!0),ae&&ae.data&&(he.data=ae.data,ae.data.jstree))for(xe in ae.data.jstree)ae.data.jstree.hasOwnProperty(xe)&&(he.state[xe]=ae.data.jstree[xe]);if(ae&&typeof ae.state=="object")for(xe in ae.state)ae.state.hasOwnProperty(xe)&&(he.state[xe]=ae.state[xe]);if(ae&&typeof ae.li_attr=="object")for(xe in ae.li_attr)ae.li_attr.hasOwnProperty(xe)&&(he.li_attr[xe]=ae.li_attr[xe]);if(he.li_attr.id&&!he.id&&(he.id=he.li_attr.id.toString()),he.id||(he.id=Xe),he.li_attr.id||(he.li_attr.id=he.id),ae&&typeof ae.a_attr=="object")for(xe in ae.a_attr)ae.a_attr.hasOwnProperty(xe)&&(he.a_attr[xe]=ae.a_attr[xe]);if(ae&&ae.children&&ae.children.length){for(xe=0,ct=ae.children.length;xe<ct;xe++)ve=Ye(ae.children[xe],he.id,$e),Ve=ce[ve],he.children.push(ve),Ve.children_d.length&&(he.children_d=he.children_d.concat(Ve.children_d));he.children_d=he.children_d.concat(he.children)}return ae&&ae.children&&ae.children===!0&&(he.state.loaded=!1,he.children=[],he.children_d=[]),delete ae.data,delete ae.children,he.original=ae,ce[he.id]=he,he.state.selected&&X.push(he.id),he.id};if(R.length&&R[0].id!==S&&R[0].parent!==S){for(ke=0,Oe=R.length;ke<Oe;ke++)R[ke].children||(R[ke].children=[]),R[ke].state||(R[ke].state={}),ce[R[ke].id.toString()]=R[ke];for(ke=0,Oe=R.length;ke<Oe;ke++){if(!ce[R[ke].parent.toString()]){typeof c<"u"&&(c._data.core.last_error={error:"parse",plugin:"core",id:"core_07",reason:"Node with invalid parent",data:JSON.stringify({id:R[ke].id.toString(),parent:R[ke].parent.toString()})},c.settings.core.error.call(c,c._data.core.last_error));continue}ce[R[ke].parent.toString()].children.push(R[ke].id.toString()),ye.children_d.push(R[ke].id.toString())}for(ke=0,Oe=ye.children.length;ke<Oe;ke++)Be=Qe(ce[ye.children[ke]],B,ye.parents.concat()),V.push(Be),ce[Be].children_d.length&&(V=V.concat(ce[Be].children_d));for(ke=0,Oe=ye.parents.length;ke<Oe;ke++)ce[ye.parents[ke]].children_d=ce[ye.parents[ke]].children_d.concat(V);Ke={cnt:ge,mod:ce,sel:ze,par:B,dpc:V,add:X}}else{for(ke=0,Oe=R.length;ke<Oe;ke++)Be=Ye(R[ke],B,ye.parents.concat()),Be&&(H.push(Be),V.push(Be),ce[Be].children_d.length&&(V=V.concat(ce[Be].children_d)));for(ye.children=H,ye.children_d=V,ke=0,Oe=ye.parents.length;ke<Oe;ke++)ce[ye.parents[ke]].children_d=ce[ye.parents[ke]].children_d.concat(V);Ke={cnt:ge,mod:ce,sel:ze,par:B,dpc:V,add:X}}if(typeof window>"u"||typeof window.document>"u")postMessage(Ke);else return Ke},v=function(h,S){if(this.element!==null){this._cnt=h.cnt;var R,B=this._model.data;for(R in B)B.hasOwnProperty(R)&&B[R].state&&B[R].state.loading&&h.mod[R]&&(h.mod[R].state.loading=!0);if(this._model.data=h.mod,S){var H,V=h.add,X=h.sel,J=this._data.core.selected.slice();if(B=this._model.data,X.length!==J.length||i.vakata.array_unique(X.concat(J)).length!==X.length){for(R=0,H=X.length;R<H;R++)i.inArray(X[R],V)===-1&&i.inArray(X[R],J)===-1&&(B[X[R]].state.selected=!1);for(R=0,H=J.length;R<H;R++)i.inArray(J[R],X)===-1&&(B[J[R]].state.selected=!0)}}h.add.length&&(this._data.core.selected=this._data.core.selected.concat(h.add)),this.trigger("model",{nodes:h.dpc,parent:h.par}),h.par!==i.jstree.root?(this._node_changed(h.par),this.redraw()):this.redraw(!0),h.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!S&&k?k(function(){c.element&&c.element[0]&&c.element[0].isConnected&&r.call(c,!0)}):c.element&&c.element[0]&&c.element[0].isConnected&&r.call(c,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{this._wrk===null&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+m.toString()],{type:"text/javascript"}))),!this._data.core.working||a?(this._data.core.working=!0,t=new window.Worker(this._wrk),t.onmessage=i.proxy(function(h){v.call(this,h.data,!0);try{t.terminate(),t=null}catch{}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),d.par?t.postMessage(d):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([e,s,r,!0])}catch{v.call(this,m(d),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else v.call(this,m(d),!1)}},_parse_model_from_html:function(e,s,r){r?r=[].concat(r):r=[],s&&r.unshift(s);var a,t,d=this._model.data,c={id:!1,text:!1,icon:!0,parent:s,parents:r,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},m,v,h;for(m in this._model.default_state)this._model.default_state.hasOwnProperty(m)&&(c.state[m]=this._model.default_state[m]);if(v=i.vakata.attributes(e,!0),i.each(v,function(S,R){if(R=i.vakata.trim(R),!R.length)return!0;c.li_attr[S]=R,S==="id"&&(c.id=R.toString())}),v=e.children("a").first(),v.length&&(v=i.vakata.attributes(v,!0),i.each(v,function(S,R){R=i.vakata.trim(R),R.length&&(c.a_attr[S]=R)})),v=e.children("a").first().length?e.children("a").first().clone():e.clone(),v.children("ins, i, ul").remove(),v=v.html(),v=i("<div></div>").html(v),c.text=this.settings.core.force_text?v.text():v.html(),v=e.data(),c.data=v?i.extend(!0,{},v):null,c.state.opened=e.hasClass("jstree-open"),c.state.selected=e.children("a").hasClass("jstree-clicked"),c.state.disabled=e.children("a").hasClass("jstree-disabled"),c.data&&c.data.jstree)for(m in c.data.jstree)c.data.jstree.hasOwnProperty(m)&&(c.state[m]=c.data.jstree[m]);v=e.children("a").children(".jstree-themeicon"),v.length&&(c.icon=v.hasClass("jstree-themeicon-hidden")?!1:v.attr("rel")),c.state.icon!==A&&(c.icon=c.state.icon),(c.icon===A||c.icon===null||c.icon==="")&&(c.icon=!0),v=e.children("ul").children("li");do h="j"+this._id+"_"+ ++this._cnt;while(d[h]);return c.id=c.li_attr.id?c.li_attr.id.toString():h,v.length?(v.each(i.proxy(function(S,R){a=this._parse_model_from_html(i(R),c.id,r),t=this._model.data[a],c.children.push(a),t.children_d.length&&(c.children_d=c.children_d.concat(t.children_d))},this)),c.children_d=c.children_d.concat(c.children)):e.hasClass("jstree-closed")&&(c.state.loaded=!1),c.li_attr.class&&(c.li_attr.class=c.li_attr.class.replace("jstree-closed","").replace("jstree-open","")),c.a_attr.class&&(c.a_attr.class=c.a_attr.class.replace("jstree-clicked","").replace("jstree-disabled","")),d[c.id]=c,c.state.selected&&this._data.core.selected.push(c.id),c.id},_parse_model_from_flat_json:function(e,s,r){r?r=r.concat():r=[],s&&r.unshift(s);var a=e.id.toString(),t=this._model.data,d=this._model.default_state,c,m,v,h,S={id:a,text:e.text||"",icon:e.icon!==A?e.icon:!0,parent:s,parents:r,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(c in d)d.hasOwnProperty(c)&&(S.state[c]=d[c]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(S.icon=e.data.jstree.icon),(S.icon===A||S.icon===null||S.icon==="")&&(S.icon=!0),e&&e.data&&(S.data=e.data,e.data.jstree))for(c in e.data.jstree)e.data.jstree.hasOwnProperty(c)&&(S.state[c]=e.data.jstree[c]);if(e&&typeof e.state=="object")for(c in e.state)e.state.hasOwnProperty(c)&&(S.state[c]=e.state[c]);if(e&&typeof e.li_attr=="object")for(c in e.li_attr)e.li_attr.hasOwnProperty(c)&&(S.li_attr[c]=e.li_attr[c]);if(S.li_attr.id||(S.li_attr.id=a),e&&typeof e.a_attr=="object")for(c in e.a_attr)e.a_attr.hasOwnProperty(c)&&(S.a_attr[c]=e.a_attr[c]);for(e&&e.children&&e.children===!0&&(S.state.loaded=!1,S.children=[],S.children_d=[]),t[S.id]=S,c=0,m=S.children.length;c<m;c++)v=this._parse_model_from_flat_json(t[S.children[c]],S.id,r),h=t[v],S.children_d.push(v),h.children_d.length&&(S.children_d=S.children_d.concat(h.children_d));return delete e.data,delete e.children,t[S.id].original=e,S.state.selected&&this._data.core.selected.push(S.id),S.id},_parse_model_from_json:function(e,s,r){r?r=r.concat():r=[],s&&r.unshift(s);var a=!1,t,d,c,m,v=this._model.data,h=this._model.default_state,S;do a="j"+this._id+"_"+ ++this._cnt;while(v[a]);S={id:!1,text:typeof e=="string"?e:"",icon:typeof e=="object"&&e.icon!==A?e.icon:!0,parent:s,parents:r,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(t in h)h.hasOwnProperty(t)&&(S.state[t]=h[t]);if(e&&e.id&&(S.id=e.id.toString()),e&&e.text&&(S.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(S.icon=e.data.jstree.icon),(S.icon===A||S.icon===null||S.icon==="")&&(S.icon=!0),e&&e.data&&(S.data=e.data,e.data.jstree))for(t in e.data.jstree)e.data.jstree.hasOwnProperty(t)&&(S.state[t]=e.data.jstree[t]);if(e&&typeof e.state=="object")for(t in e.state)e.state.hasOwnProperty(t)&&(S.state[t]=e.state[t]);if(e&&typeof e.li_attr=="object")for(t in e.li_attr)e.li_attr.hasOwnProperty(t)&&(S.li_attr[t]=e.li_attr[t]);if(S.li_attr.id&&!S.id&&(S.id=S.li_attr.id.toString()),S.id||(S.id=a),S.li_attr.id||(S.li_attr.id=S.id),e&&typeof e.a_attr=="object")for(t in e.a_attr)e.a_attr.hasOwnProperty(t)&&(S.a_attr[t]=e.a_attr[t]);if(e&&e.children&&e.children.length){for(t=0,d=e.children.length;t<d;t++)c=this._parse_model_from_json(e.children[t],S.id,r),m=v[c],S.children.push(c),m.children_d.length&&(S.children_d=S.children_d.concat(m.children_d));S.children_d=S.children.concat(S.children_d)}return e&&e.children&&e.children===!0&&(S.state.loaded=!1,S.children=[],S.children_d=[]),delete e.data,delete e.children,S.original=e,v[S.id]=S,S.state.selected&&this._data.core.selected.push(S.id),S.id},_redraw:function(){var e=this._model.force_full_redraw?this._model.data[i.jstree.root].children.concat([]):this._model.changed.concat([]),s=O.createElement("UL"),r,a,t,d=this._data.core.focused;for(a=0,t=e.length;a<t;a++)r=this.redraw_node(e[a],!0,this._model.force_full_redraw),r&&this._model.force_full_redraw&&s.appendChild(r);this._model.force_full_redraw&&(s.className=this.get_container_ul()[0].className,s.setAttribute("role","group"),this.element.empty().append(s)),d!==null&&this.settings.core.restore_focus&&(r=this.get_node(d,!0),r&&r.length&&r.children(".jstree-anchor")[0]!==O.activeElement?r.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(e){var s=this.get_node(e),r=!1,a=!1,t=!1,d=O;if(!s)return!1;if(s.id===i.jstree.root)return this.redraw(!0);if(e=this.get_node(e,!0),!e||!e.length)return!1;if(e.children(".jstree-children").remove(),e=e[0],s.children.length&&s.state.loaded){for(t=d.createElement("UL"),t.setAttribute("role","group"),t.className="jstree-children",r=0,a=s.children.length;r<a;r++)t.appendChild(this.redraw_node(s.children[r],!0,!0));e.appendChild(t)}},redraw_node:function(e,s,r,a){var t=this.get_node(e),d=!1,c=!1,m=!1,v=!1,h=!1,S=!1,R="",B=O,H=this._model.data,V=!1,X=!1,J=null,de=0,ge=0,ce=!1,ye=!1;if(!t)return!1;if(t.id===i.jstree.root)return this.redraw(!0);if(s=s||t.children.length===0,e=O.querySelector?this.element[0].querySelector("#"+("0123456789".indexOf(t.id[0])!==-1?"\\3"+t.id[0]+" "+t.id.substr(1).replace(i.jstree.idregex,"\\$&"):t.id.replace(i.jstree.idregex,"\\$&"))):O.getElementById(t.id),e)e=i(e),r||(d=e.parent().parent()[0],d===this.element[0]&&(d=null),c=e.index()),!s&&t.children.length&&!e.children(".jstree-children").length&&(s=!0),s||(m=e.children(".jstree-children")[0]),V=e.children(".jstree-anchor")[0]===O.activeElement,e.remove();else if(s=!0,!r){if(d=t.parent!==i.jstree.root?i("#"+t.parent.replace(i.jstree.idregex,"\\$&"),this.element)[0]:null,d!==null&&(!d||!H[t.parent].state.opened))return!1;c=i.inArray(t.id,d===null?H[i.jstree.root].children:H[t.parent].children)}e=this._data.core.node.cloneNode(!0),R="jstree-node ";for(v in t.li_attr)if(t.li_attr.hasOwnProperty(v)){if(v==="id")continue;v!=="class"?e.setAttribute(v,t.li_attr[v]):R+=t.li_attr[v]}for(t.a_attr.id||(t.a_attr.id=t.id+"_anchor"),e.childNodes[1].setAttribute("aria-selected",!!t.state.selected),e.childNodes[1].setAttribute("aria-level",t.parents.length),this.settings.core.compute_elements_positions&&(e.childNodes[1].setAttribute("aria-setsize",H[t.parent].children.length),e.childNodes[1].setAttribute("aria-posinset",H[t.parent].children.indexOf(t.id)+1)),t.state.disabled&&e.childNodes[1].setAttribute("aria-disabled",!0),v=0,h=t.children.length;v<h;v++)if(!H[t.children[v]].state.hidden){ce=!0;break}if(t.parent!==null&&H[t.parent]&&!t.state.hidden&&(v=i.inArray(t.id,H[t.parent].children),ye=t.id,v!==-1))for(v++,h=H[t.parent].children.length;v<h&&(H[H[t.parent].children[v]].state.hidden||(ye=H[t.parent].children[v]),ye===t.id);v++);t.state.hidden&&(R+=" jstree-hidden"),t.state.loading&&(R+=" jstree-loading"),t.state.loaded&&!ce?R+=" jstree-leaf":(R+=t.state.opened&&t.state.loaded?" jstree-open":" jstree-closed",e.childNodes[1].setAttribute("aria-expanded",t.state.opened&&t.state.loaded)),ye===t.id&&(R+=" jstree-last"),e.id=t.id,e.className=R,R=(t.state.selected?" jstree-clicked":"")+(t.state.disabled?" jstree-disabled":"");for(h in t.a_attr)if(t.a_attr.hasOwnProperty(h)){if(h==="href"&&t.a_attr[h]==="#")continue;h!=="class"?e.childNodes[1].setAttribute(h,t.a_attr[h]):R+=" "+t.a_attr[h]}if(R.length&&(e.childNodes[1].className="jstree-anchor "+R),(t.icon&&t.icon!==!0||t.icon===!1)&&(t.icon===!1?e.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":t.icon.indexOf("/")===-1&&t.icon.indexOf(".")===-1?e.childNodes[1].childNodes[0].className+=" "+t.icon+" jstree-themeicon-custom":(e.childNodes[1].childNodes[0].style.backgroundImage='url("'+t.icon+'")',e.childNodes[1].childNodes[0].style.backgroundPosition="center center",e.childNodes[1].childNodes[0].style.backgroundSize="auto",e.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?e.childNodes[1].appendChild(B.createTextNode(t.text)):e.childNodes[1].innerHTML+=t.text,s&&t.children.length&&(t.state.opened||a)&&t.state.loaded){for(S=B.createElement("UL"),S.setAttribute("role","group"),S.className="jstree-children",v=0,h=t.children.length;v<h;v++)S.appendChild(this.redraw_node(t.children[v],s,!0));e.appendChild(S)}if(m&&e.appendChild(m),!r){for(d||(d=this.element[0]),v=0,h=d.childNodes.length;v<h;v++)if(d.childNodes[v]&&d.childNodes[v].className&&d.childNodes[v].className.indexOf("jstree-children")!==-1){J=d.childNodes[v];break}J||(J=B.createElement("UL"),J.setAttribute("role","group"),J.className="jstree-children",d.appendChild(J)),d=J,c<d.childNodes.length?d.insertBefore(e,d.childNodes[c]):d.appendChild(e),V&&(de=this.element[0].scrollTop,ge=this.element[0].scrollLeft,e.childNodes[1].focus(),this.element[0].scrollTop=de,this.element[0].scrollLeft=ge)}return t.state.opened&&!t.state.loaded&&(t.state.opened=!1,setTimeout(i.proxy(function(){this.open_node(t.id,!1,0)},this),0)),e},open_node:function(e,s,r){var a,t,d,c;if(i.isArray(e)){for(e=e.slice(),a=0,t=e.length;a<t;a++)this.open_node(e[a],s,r);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;if(r=r===A?this.settings.core.animation:r,!this.is_closed(e))return s&&s.call(this,e,!1),!1;if(this.is_loaded(e))return d=this.get_node(e,!0),c=this,d.length&&(r&&d.children(".jstree-children").length&&d.children(".jstree-children").stop(!0,!0),e.children.length&&!this._firstChild(d.children(".jstree-children")[0])&&this.draw_children(e),r?(this.trigger("before_open",{node:e}),d.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded",!0).end().children(".jstree-children").stop(!0,!0).slideDown(r,function(){this.style.display="",c.element&&c.trigger("after_open",{node:e})})):(this.trigger("before_open",{node:e}),d[0].className=d[0].className.replace("jstree-closed","jstree-open"),d[0].childNodes[1].setAttribute("aria-expanded",!0))),e.state.opened=!0,s&&s.call(this,e,!0),d.length||this.trigger("before_open",{node:e}),this.trigger("open_node",{node:e}),(!r||!d.length)&&this.trigger("after_open",{node:e}),!0;if(this.is_loading(e))return setTimeout(i.proxy(function(){this.open_node(e,s,r)},this),500);this.load_node(e,function(m,v){return v?this.open_node(m,s,r):s?s.call(this,m,!1):!1})},_open_to:function(e){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var s,r,a=e.parents;for(s=0,r=a.length;s<r;s+=1)s!==i.jstree.root&&this.open_node(a[s],!1,0);return i("#"+e.id.replace(i.jstree.idregex,"\\$&"),this.element)},close_node:function(e,s){var r,a,t,d;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.close_node(e[r],s);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root||this.is_closed(e))return!1;s=s===A?this.settings.core.animation:s,t=this,d=this.get_node(e,!0),e.state.opened=!1,this.trigger("close_node",{node:e}),d.length?s?d.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded",!1).end().children(".jstree-children").stop(!0,!0).slideUp(s,function(){this.style.display="",d.children(".jstree-children").remove(),t.element&&t.trigger("after_close",{node:e})}):(d[0].className=d[0].className.replace("jstree-open","jstree-closed"),d.children(".jstree-anchor").attr("aria-expanded",!1),d.children(".jstree-children").remove(),this.trigger("after_close",{node:e})):this.trigger("after_close",{node:e})},toggle_node:function(e){var s,r;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.toggle_node(e[s]);return!0}if(this.is_closed(e))return this.open_node(e);if(this.is_open(e))return this.close_node(e)},open_all:function(e,s,r){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var a=e.id===i.jstree.root?this.get_container_ul():this.get_node(e,!0),t,d,c;if(!a.length){for(t=0,d=e.children_d.length;t<d;t++)this.is_closed(this._model.data[e.children_d[t]])&&(this._model.data[e.children_d[t]].state.opened=!0);return this.trigger("open_all",{node:e})}r=r||a,c=this,a=this.is_closed(e)?a.find(".jstree-closed").addBack():a.find(".jstree-closed"),a.each(function(){c.open_node(this,function(m,v){v&&this.is_parent(m)&&this.open_all(m,s,r)},s||0)}),r.find(".jstree-closed").length===0&&this.trigger("open_all",{node:this.get_node(r)})},close_all:function(e,s){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var r=e.id===i.jstree.root?this.get_container_ul():this.get_node(e,!0),a=this,t,d;for(r.length&&(r=this.is_open(e)?r.find(".jstree-open").addBack():r.find(".jstree-open"),i(r.get().reverse()).each(function(){a.close_node(this,s||0)})),t=0,d=e.children_d.length;t<d;t++)this._model.data[e.children_d[t]].state.opened=!1;this.trigger("close_all",{node:e})},is_disabled:function(e){return e=this.get_node(e),e&&e.state&&e.state.disabled},enable_node:function(e){var s,r;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.enable_node(e[s]);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;e.state.disabled=!1,this.get_node(e,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),this.trigger("enable_node",{node:e})},disable_node:function(e){var s,r;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.disable_node(e[s]);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;e.state.disabled=!0,this.get_node(e,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),this.trigger("disable_node",{node:e})},is_hidden:function(e){return e=this.get_node(e),e.state.hidden===!0},hide_node:function(e,s){var r,a;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.hide_node(e[r],!0);return s||this.redraw(),!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;e.state.hidden||(e.state.hidden=!0,this._node_changed(e.parent),s||this.redraw(),this.trigger("hide_node",{node:e}))},show_node:function(e,s){var r,a;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.show_node(e[r],!0);return s||this.redraw(),!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;e.state.hidden&&(e.state.hidden=!1,this._node_changed(e.parent),s||this.redraw(),this.trigger("show_node",{node:e}))},hide_all:function(e){var s,r=this._model.data,a=[];for(s in r)r.hasOwnProperty(s)&&s!==i.jstree.root&&!r[s].state.hidden&&(r[s].state.hidden=!0,a.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("hide_all",{nodes:a}),a},show_all:function(e){var s,r=this._model.data,a=[];for(s in r)r.hasOwnProperty(s)&&s!==i.jstree.root&&r[s].state.hidden&&(r[s].state.hidden=!1,a.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("show_all",{nodes:a}),a},activate_node:function(e,s){if(this.is_disabled(e))return!1;if((!s||typeof s!="object")&&(s={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==A?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),!this.settings.core.multiple||!s.metaKey&&!s.ctrlKey&&!s.shiftKey||s.shiftKey&&(!this._data.core.last_clicked||!this.get_parent(e)||this.get_parent(e)!==this._data.core.last_clicked.parent))!this.settings.core.multiple&&(s.metaKey||s.ctrlKey||s.shiftKey)&&this.is_selected(e)?this.deselect_node(e,!1,s):(this.deselect_all(!0),this.select_node(e,!1,!1,s),this._data.core.last_clicked=this.get_node(e));else if(s.shiftKey){var r=this.get_node(e).id,a=this._data.core.last_clicked.id,t=this.get_node(this._data.core.last_clicked.parent).children,d=!1,c,m;for(c=0,m=t.length;c<m;c+=1)t[c]===r&&(d=!d),t[c]===a&&(d=!d),!this.is_disabled(t[c])&&(d||t[c]===r||t[c]===a)?this.is_hidden(t[c])||this.select_node(t[c],!0,!1,s):this.deselect_node(t[c],!0,s);this.trigger("changed",{action:"select_node",node:this.get_node(e),selected:this._data.core.selected,event:s})}else this.is_selected(e)?this.deselect_node(e,!1,s):this.select_node(e,!1,!1,s);this.trigger("activate_node",{node:this.get_node(e),event:s})},hover_node:function(e){if(e=this.get_node(e,!0),!e||!e.length||e.children(".jstree-hovered").length)return!1;var s=this.element.find(".jstree-hovered"),r=this.element;s&&s.length&&this.dehover_node(s),e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),setTimeout(function(){r.attr("aria-activedescendant",e[0].id)},0)},dehover_node:function(e){if(e=this.get_node(e,!0),!e||!e.length||!e.children(".jstree-hovered").length)return!1;e.children(".jstree-anchor").removeClass("jstree-hovered"),this.trigger("dehover_node",{node:this.get_node(e)})},select_node:function(e,s,r,a){var t,d,c,m;if(i.isArray(e)){for(e=e.slice(),d=0,c=e.length;d<c;d++)this.select_node(e[d],s,r,a);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;t=this.get_node(e,!0),e.state.selected||(e.state.selected=!0,this._data.core.selected.push(e.id),r||(t=this._open_to(e)),t&&t.length&&t.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected",!0),this.trigger("select_node",{node:e,selected:this._data.core.selected,event:a}),s||this.trigger("changed",{action:"select_node",node:e,selected:this._data.core.selected,event:a}))},deselect_node:function(e,s,r){var a,t,d;if(i.isArray(e)){for(e=e.slice(),a=0,t=e.length;a<t;a++)this.deselect_node(e[a],s,r);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;d=this.get_node(e,!0),e.state.selected&&(e.state.selected=!1,this._data.core.selected=i.vakata.array_remove_item(this._data.core.selected,e.id),d.length&&d.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_node",{node:e,selected:this._data.core.selected,event:r}),s||this.trigger("changed",{action:"deselect_node",node:e,selected:this._data.core.selected,event:r}))},select_all:function(e){var s=this._data.core.selected.concat([]),r,a;for(this._data.core.selected=this._model.data[i.jstree.root].children_d.concat(),r=0,a=this._data.core.selected.length;r<a;r++)this._model.data[this._data.core.selected[r]]&&(this._model.data[this._data.core.selected[r]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:s})},deselect_all:function(e){var s=this._data.core.selected.concat([]),r,a;for(r=0,a=this._data.core.selected.length;r<a;r++)this._model.data[this._data.core.selected[r]]&&(this._model.data[this._data.core.selected[r]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:s}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:s})},is_selected:function(e){return e=this.get_node(e),!e||e.id===i.jstree.root?!1:e.state.selected},get_selected:function(e){return e?i.map(this._data.core.selected,i.proxy(function(s){return this.get_node(s)},this)):this._data.core.selected.slice()},get_top_selected:function(e){var s=this.get_selected(!0),r={},a,t,d,c;for(a=0,t=s.length;a<t;a++)r[s[a].id]=s[a];for(a=0,t=s.length;a<t;a++)for(d=0,c=s[a].children_d.length;d<c;d++)r[s[a].children_d[d]]&&delete r[s[a].children_d[d]];s=[];for(a in r)r.hasOwnProperty(a)&&s.push(a);return e?i.map(s,i.proxy(function(m){return this.get_node(m)},this)):s},get_bottom_selected:function(e){var s=this.get_selected(!0),r=[],a,t;for(a=0,t=s.length;a<t;a++)s[a].children.length||r.push(s[a].id);return e?i.map(r,i.proxy(function(d){return this.get_node(d)},this)):r},get_state:function(){var e={core:{open:[],loaded:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},s;for(s in this._model.data)this._model.data.hasOwnProperty(s)&&s!==i.jstree.root&&(this._model.data[s].state.loaded&&this.settings.core.loaded_state&&e.core.loaded.push(s),this._model.data[s].state.opened&&e.core.open.push(s),this._model.data[s].state.selected&&e.core.selected.push(s));return e},set_state:function(e,s){if(e){if(e.core&&e.core.selected&&e.core.initial_selection===A&&(e.core.initial_selection=this._data.core.selected.concat([]).sort().join(",")),e.core){var r,a,t,d,c;if(e.core.loaded)return!this.settings.core.loaded_state||!i.isArray(e.core.loaded)||!e.core.loaded.length?(delete e.core.loaded,this.set_state(e,s)):this._load_nodes(e.core.loaded,function(m){delete e.core.loaded,this.set_state(e,s)}),!1;if(e.core.open)return!i.isArray(e.core.open)||!e.core.open.length?(delete e.core.open,this.set_state(e,s)):this._load_nodes(e.core.open,function(m){this.open_node(m,!1,0),delete e.core.open,this.set_state(e,s)}),!1;if(e.core.scroll)return e.core.scroll&&e.core.scroll.left!==A&&this.element.scrollLeft(e.core.scroll.left),e.core.scroll&&e.core.scroll.top!==A&&this.element.scrollTop(e.core.scroll.top),delete e.core.scroll,this.set_state(e,s),!1;if(e.core.selected)return d=this,(e.core.initial_selection===A||e.core.initial_selection===this._data.core.selected.concat([]).sort().join(","))&&(this.deselect_all(),i.each(e.core.selected,function(m,v){d.select_node(v,!1,!0)})),delete e.core.initial_selection,delete e.core.selected,this.set_state(e,s),!1;for(c in e)e.hasOwnProperty(c)&&c!=="core"&&i.inArray(c,this.settings.plugins)===-1&&delete e[c];if(i.isEmptyObject(e.core))return delete e.core,this.set_state(e,s),!1}return i.isEmptyObject(e)?(e=null,s&&s.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(e,s){this._data.core.state=s===!0?{}:this.get_state(),s&&i.isFunction(s)&&(this._data.core.state=s.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[i.jstree.root]={id:i.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var r=this.get_container_ul()[0].className;e||(this.element.html("<ul class='"+r+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(i.jstree.root,function(a,t){t&&(this.get_container_ul()[0].className=r,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(i.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(e){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var s=[],r=[],a=this._data.core.selected.concat([]);r.push(e.id),e.state.opened===!0&&s.push(e.id),this.get_node(e,!0).find(".jstree-open").each(function(){r.push(this.id),s.push(this.id)}),this._load_nodes(r,i.proxy(function(t){this.open_node(s,!1,0),this.select_node(a),this.trigger("refresh_node",{node:e,nodes:t})},this),!1,!0)},set_id:function(e,s){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var r,a,t=this._model.data,d=e.id;for(s=s.toString(),t[e.parent].children[i.inArray(e.id,t[e.parent].children)]=s,r=0,a=e.parents.length;r<a;r++)t[e.parents[r]].children_d[i.inArray(e.id,t[e.parents[r]].children_d)]=s;for(r=0,a=e.children.length;r<a;r++)t[e.children[r]].parent=s;for(r=0,a=e.children_d.length;r<a;r++)t[e.children_d[r]].parents[i.inArray(e.id,t[e.children_d[r]].parents)]=s;return r=i.inArray(e.id,this._data.core.selected),r!==-1&&(this._data.core.selected[r]=s),r=this.get_node(e.id,!0),r&&(r.attr("id",s),this.element.attr("aria-activedescendant")===e.id&&this.element.attr("aria-activedescendant",s)),delete t[e.id],e.id=s,e.li_attr.id=s,t[s]=e,this.trigger("set_id",{node:e,new:e.id,old:d}),!0},get_text:function(e){return e=this.get_node(e),!e||e.id===i.jstree.root?!1:e.text},set_text:function(e,s){var r,a;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.set_text(e[r],s);return!0}return e=this.get_node(e),!e||e.id===i.jstree.root?!1:(e.text=s,this.get_node(e,!0).length&&this.redraw_node(e.id),this.trigger("set_text",{obj:e,text:s}),!0)},get_json:function(e,s,r){if(e=this.get_node(e||i.jstree.root),!e)return!1;s&&s.flat&&!r&&(r=[]);var a={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:i.extend(!0,{},e.li_attr),a_attr:i.extend(!0,{},e.a_attr),state:{},data:s&&s.no_data?!1:i.extend(!0,i.isArray(e.data)?[]:{},e.data)},t,d;if(s&&s.flat?a.parent=e.parent:a.children=[],!s||!s.no_state)for(t in e.state)e.state.hasOwnProperty(t)&&(a.state[t]=e.state[t]);else delete a.state;if(s&&s.no_li_attr&&delete a.li_attr,s&&s.no_a_attr&&delete a.a_attr,s&&s.no_id&&(delete a.id,a.li_attr&&a.li_attr.id&&delete a.li_attr.id,a.a_attr&&a.a_attr.id&&delete a.a_attr.id),s&&s.flat&&e.id!==i.jstree.root&&r.push(a),!s||!s.no_children)for(t=0,d=e.children.length;t<d;t++)s&&s.flat?this.get_json(e.children[t],s,r):a.children.push(this.get_json(e.children[t],s));return s&&s.flat?r:e.id===i.jstree.root?a.children:a},create_node:function(e,s,r,a,t){if(e===null&&(e=i.jstree.root),e=this.get_node(e),!e)return!1;if(r=r===A?"last":r,!r.toString().match(/^(before|after)$/)&&!t&&!this.is_loaded(e))return this.load_node(e,function(){this.create_node(e,s,r,a,!0)});s||(s={text:this.get_string("New node")}),typeof s=="string"?s={text:s}:s=i.extend(!0,{},s),s.text===A&&(s.text=this.get_string("New node"));var d,c,m,v;switch(e.id===i.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":d=this.get_node(e.parent),r=i.inArray(e.id,d.children),e=d;break;case"after":d=this.get_node(e.parent),r=i.inArray(e.id,d.children)+1,e=d;break;case"inside":case"first":r=0;break;case"last":r=e.children.length;break;default:r||(r=0);break}if(r>e.children.length&&(r=e.children.length),s.id||(s.id=!0),!this.check("create_node",s,e,r))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(s.id===!0&&delete s.id,s=this._parse_model_from_json(s,e.id,e.parents.concat()),!s)return!1;for(d=this.get_node(s),c=[],c.push(s),c=c.concat(d.children_d),this.trigger("model",{nodes:c,parent:e.id}),e.children_d=e.children_d.concat(c),m=0,v=e.parents.length;m<v;m++)this._model.data[e.parents[m]].children_d=this._model.data[e.parents[m]].children_d.concat(c);for(s=d,d=[],m=0,v=e.children.length;m<v;m++)d[m>=r?m+1:m]=e.children[m];return d[r]=s.id,e.children=d,this.redraw_node(e,!0),this.trigger("create_node",{node:this.get_node(s),parent:e.id,position:r}),a&&a.call(this,this.get_node(s)),s.id},rename_node:function(e,s){var r,a,t;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.rename_node(e[r],s);return!0}return e=this.get_node(e),!e||e.id===i.jstree.root?!1:(t=e.text,this.check("rename_node",e,this.get_parent(e),s)?(this.set_text(e,s),this.trigger("rename_node",{node:e,text:s,old:t}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1))},delete_node:function(e){var s,r,a,t,d,c,m,v,h,S,R,B;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.delete_node(e[s]);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;if(a=this.get_node(e.parent),t=i.inArray(e.id,a.children),S=!1,!this.check("delete_node",e,a,t))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(t!==-1&&(a.children=i.vakata.array_remove(a.children,t)),d=e.children_d.concat([]),d.push(e.id),c=0,m=e.parents.length;c<m;c++)this._model.data[e.parents[c]].children_d=i.vakata.array_filter(this._model.data[e.parents[c]].children_d,function(H){return i.inArray(H,d)===-1});for(v=0,h=d.length;v<h;v++)if(this._model.data[d[v]].state.selected){S=!0;break}for(S&&(this._data.core.selected=i.vakata.array_filter(this._data.core.selected,function(H){return i.inArray(H,d)===-1})),this.trigger("delete_node",{node:e,parent:a.id}),S&&this.trigger("changed",{action:"delete_node",node:e,selected:this._data.core.selected,parent:a.id}),v=0,h=d.length;v<h;v++)delete this._model.data[d[v]];return i.inArray(this._data.core.focused,d)!==-1&&(this._data.core.focused=null,R=this.element[0].scrollTop,B=this.element[0].scrollLeft,a.id===i.jstree.root?this._model.data[i.jstree.root].children[0]&&this.get_node(this._model.data[i.jstree.root].children[0],!0).children(".jstree-anchor").focus():this.get_node(a,!0).children(".jstree-anchor").focus(),this.element[0].scrollTop=R,this.element[0].scrollLeft=B),this.redraw_node(a,!0),!0},check:function(e,s,r,a,t){s=s&&s.id?s:this.get_node(s),r=r&&r.id?r:this.get_node(r);var d=e.match(/^move_node|copy_node|create_node$/i)?r:s,c=this.settings.core.check_callback;if(e==="move_node"||e==="copy_node"){if((!t||!t.is_multi)&&e==="move_node"&&i.inArray(s.id,r.children)===a)return this._data.core.last_error={error:"check",plugin:"core",id:"core_08",reason:"Moving node to its current position",data:JSON.stringify({chk:e,pos:a,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1;if((!t||!t.is_multi)&&(s.id===r.id||e==="move_node"&&i.inArray(s.id,r.children)===a||i.inArray(r.id,s.children_d)!==-1))return this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:e,pos:a,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1}return d&&d.data&&(d=d.data),d&&d.functions&&(d.functions[e]===!1||d.functions[e]===!0)?(d.functions[e]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+e,data:JSON.stringify({chk:e,pos:a,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})}),d.functions[e]):c===!1||i.isFunction(c)&&c.call(this,e,s,r,a,t)===!1||c&&c[e]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+e,data:JSON.stringify({chk:e,pos:a,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1):!0},last_error:function(){return this._data.core.last_error},move_node:function(e,s,r,a,t,d,c){var m,v,h,S,R,B,H,V,X,J,de,ge,ce,ye;if(s=this.get_node(s),r=r===A?0:r,!s)return!1;if(!r.toString().match(/^(before|after)$/)&&!t&&!this.is_loaded(s))return this.load_node(s,function(){this.move_node(e,s,r,a,!0,!1,c)});if(i.isArray(e))if(e.length===1)e=e[0];else{for(m=0,v=e.length;m<v;m++)(X=this.move_node(e[m],s,r,a,t,!1,c))&&(s=X,r="after");return this.redraw(),!0}if(e=e&&e.id?e:this.get_node(e),!e||e.id===i.jstree.root)return!1;if(h=(e.parent||i.jstree.root).toString(),R=!r.toString().match(/^(before|after)$/)||s.id===i.jstree.root?s:this.get_node(s.parent),B=c||(this._model.data[e.id]?this:i.jstree.reference(e.id)),H=!B||!B._id||this._id!==B._id,S=B&&B._id&&h&&B._model.data[h]&&B._model.data[h].children?i.inArray(e.id,B._model.data[h].children):-1,B&&B._id&&(e=B._model.data[e.id]),H)return(X=this.copy_node(e,s,r,a,t,!1,c))?(B&&B.delete_node(e),X):!1;switch(s.id===i.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":r=i.inArray(s.id,R.children);break;case"after":r=i.inArray(s.id,R.children)+1;break;case"inside":case"first":r=0;break;case"last":r=R.children.length;break;default:r||(r=0);break}if(r>R.children.length&&(r=R.children.length),!this.check("move_node",e,R,r,{core:!0,origin:c,is_multi:B&&B._id&&B._id!==this._id,is_foreign:!B||!B._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(e.parent===R.id){for(V=R.children.concat(),X=i.inArray(e.id,V),X!==-1&&(V=i.vakata.array_remove(V,X),r>X&&r--),X=[],J=0,de=V.length;J<de;J++)X[J>=r?J+1:J]=V[J];X[r]=e.id,R.children=X,this._node_changed(R.id),this.redraw(R.id===i.jstree.root)}else{for(X=e.children_d.concat(),X.push(e.id),J=0,de=e.parents.length;J<de;J++){for(V=[],ye=B._model.data[e.parents[J]].children_d,ge=0,ce=ye.length;ge<ce;ge++)i.inArray(ye[ge],X)===-1&&V.push(ye[ge]);B._model.data[e.parents[J]].children_d=V}for(B._model.data[h].children=i.vakata.array_remove_item(B._model.data[h].children,e.id),J=0,de=R.parents.length;J<de;J++)this._model.data[R.parents[J]].children_d=this._model.data[R.parents[J]].children_d.concat(X);for(V=[],J=0,de=R.children.length;J<de;J++)V[J>=r?J+1:J]=R.children[J];for(V[r]=e.id,R.children=V,R.children_d.push(e.id),R.children_d=R.children_d.concat(e.children_d),e.parent=R.id,X=R.parents.concat(),X.unshift(R.id),ye=e.parents.length,e.parents=X,X=X.concat(),J=0,de=e.children_d.length;J<de;J++)this._model.data[e.children_d[J]].parents=this._model.data[e.children_d[J]].parents.slice(0,ye*-1),Array.prototype.push.apply(this._model.data[e.children_d[J]].parents,X);(h===i.jstree.root||R.id===i.jstree.root)&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(h),this._node_changed(R.id)),d||this.redraw()}return a&&a.call(this,e,R,r),this.trigger("move_node",{node:e,parent:R.id,position:r,old_parent:h,old_position:S,is_multi:B&&B._id&&B._id!==this._id,is_foreign:!B||!B._id,old_instance:B,new_instance:this}),e.id},copy_node:function(e,s,r,a,t,d,c){var m,v,h,S,R,B,H,V,X,J,de;if(s=this.get_node(s),r=r===A?0:r,!s)return!1;if(!r.toString().match(/^(before|after)$/)&&!t&&!this.is_loaded(s))return this.load_node(s,function(){this.copy_node(e,s,r,a,!0,!1,c)});if(i.isArray(e))if(e.length===1)e=e[0];else{for(m=0,v=e.length;m<v;m++)(S=this.copy_node(e[m],s,r,a,t,!0,c))&&(s=S,r="after");return this.redraw(),!0}if(e=e&&e.id?e:this.get_node(e),!e||e.id===i.jstree.root)return!1;switch(V=(e.parent||i.jstree.root).toString(),X=!r.toString().match(/^(before|after)$/)||s.id===i.jstree.root?s:this.get_node(s.parent),J=c||(this._model.data[e.id]?this:i.jstree.reference(e.id)),de=!J||!J._id||this._id!==J._id,J&&J._id&&(e=J._model.data[e.id]),s.id===i.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":r=i.inArray(s.id,X.children);break;case"after":r=i.inArray(s.id,X.children)+1;break;case"inside":case"first":r=0;break;case"last":r=X.children.length;break;default:r||(r=0);break}if(r>X.children.length&&(r=X.children.length),!this.check("copy_node",e,X,r,{core:!0,origin:c,is_multi:J&&J._id&&J._id!==this._id,is_foreign:!J||!J._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(H=J?J.get_json(e,{no_id:!0,no_data:!0,no_state:!0}):e,!H||(H.id===!0&&delete H.id,H=this._parse_model_from_json(H,X.id,X.parents.concat()),!H))return!1;for(S=this.get_node(H),e&&e.state&&e.state.loaded===!1&&(S.state.loaded=!1),h=[],h.push(H),h=h.concat(S.children_d),this.trigger("model",{nodes:h,parent:X.id}),R=0,B=X.parents.length;R<B;R++)this._model.data[X.parents[R]].children_d=this._model.data[X.parents[R]].children_d.concat(h);for(h=[],R=0,B=X.children.length;R<B;R++)h[R>=r?R+1:R]=X.children[R];return h[r]=S.id,X.children=h,X.children_d.push(S.id),X.children_d=X.children_d.concat(S.children_d),X.id===i.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(X.id),d||this.redraw(X.id===i.jstree.root),a&&a.call(this,S,X,r),this.trigger("copy_node",{node:S,original:e,parent:X.id,position:r,old_parent:V,old_position:J&&J._id&&V&&J._model.data[V]&&J._model.data[V].children?i.inArray(e.id,J._model.data[V].children):-1,is_multi:J&&J._id&&J._id!==this._id,is_foreign:!J||!J._id,old_instance:J,new_instance:this}),S.id},cut:function(e){if(e||(e=this._data.core.selected.concat()),i.isArray(e)||(e=[e]),!e.length)return!1;var s=[],r,a,t;for(a=0,t=e.length;a<t;a++)r=this.get_node(e[a]),r&&r.id&&r.id!==i.jstree.root&&s.push(r);if(!s.length)return!1;b=s,p=this,l="move_node",this.trigger("cut",{node:e})},copy:function(e){if(e||(e=this._data.core.selected.concat()),i.isArray(e)||(e=[e]),!e.length)return!1;var s=[],r,a,t;for(a=0,t=e.length;a<t;a++)r=this.get_node(e[a]),r&&r.id&&r.id!==i.jstree.root&&s.push(r);if(!s.length)return!1;b=s,p=this,l="copy_node",this.trigger("copy",{node:e})},get_buffer:function(){return{mode:l,node:b,inst:p}},can_paste:function(){return l!==!1&&b!==!1},paste:function(e,s){if(e=this.get_node(e),!e||!l||!l.match(/^(copy_node|move_node)$/)||!b)return!1;this[l](b,e,s,!1,!1,!1,p)&&this.trigger("paste",{parent:e.id,node:b,mode:l}),b=!1,l=!1,p=!1},clear_buffer:function(){b=!1,l=!1,p=!1,this.trigger("clear_buffer")},edit:function(e,s,r){var a,t,d,c,m,v,h,S,R,B=!1;if(e=this.get_node(e),!e)return!1;if(!this.check("edit",e,this.get_parent(e)))return this.settings.core.error.call(this,this._data.core.last_error),!1;R=e,s=typeof s=="string"?s:e.text,this.set_text(e,""),e=this._open_to(e),R.text=s,a=this._data.core.rtl,t=this.element.width(),this._data.core.focused=R.id,d=e.children(".jstree-anchor").focus(),c=i("<span></span>");m=s,v=i("<div></div>",{css:{position:"absolute",top:"-200px",left:a?"0px":"-1000px",visibility:"hidden"}}).appendTo(O.body),h=i("<input />",{value:m,class:"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:i.proxy(function(H){H.stopImmediatePropagation(),H.preventDefault();var V=c.children(".jstree-rename-input"),X=V.val(),J=this.settings.core.force_text,de;X===""&&(X=m),v.remove(),c.replaceWith(d),c.remove(),m=J?m:i("<div></div>").append(i.parseHTML(m)).html(),e=this.get_node(e),this.set_text(e,m),de=!!this.rename_node(e,J?i("<div></div>").text(X).text():i("<div></div>").append(i.parseHTML(X)).html()),de||this.set_text(e,m),this._data.core.focused=R.id,setTimeout(i.proxy(function(){var ge=this.get_node(R.id,!0);ge.length&&(this._data.core.focused=R.id,ge.children(".jstree-anchor").focus())},this),0),r&&r.call(this,R,de,B,X),h=null},this),keydown:function(H){var V=H.which;V===27&&(B=!0,this.value=m),(V===27||V===13||V===37||V===38||V===39||V===40||V===32)&&H.stopImmediatePropagation(),(V===27||V===13)&&(H.preventDefault(),this.blur())},click:function(H){H.stopImmediatePropagation()},mousedown:function(H){H.stopImmediatePropagation()},keyup:function(H){h.width(Math.min(v.text("pW"+this.value).width(),t))},keypress:function(H){if(H.which===13)return!1}}),S={fontFamily:d.css("fontFamily")||"",fontSize:d.css("fontSize")||"",fontWeight:d.css("fontWeight")||"",fontStyle:d.css("fontStyle")||"",fontStretch:d.css("fontStretch")||"",fontVariant:d.css("fontVariant")||"",letterSpacing:d.css("letterSpacing")||"",wordSpacing:d.css("wordSpacing")||""},c.attr("class",d.attr("class")).append(d.contents().clone()).append(h),d.replaceWith(c),v.css(S),h.css(S).width(Math.min(v.text("pW"+h[0].value).width(),t))[0].select(),i(O).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(H){h&&H.target!==h&&i(h).blur()})},set_theme:function(e,s){if(!e)return!1;if(s===!0){var r=this.settings.core.themes.dir;r||(r=i.jstree.path+"/themes"),s=r+"/"+e+"/style.css"}s&&i.inArray(s,y)===-1&&(i("head").append('<link rel="stylesheet" href="'+s+'" type="text/css" />'),y.push(s)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=e,this.element.addClass("jstree-"+e),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+e+"-responsive"),this.trigger("set_theme",{theme:e})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=e,e&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped"),this.trigger("show_stripes")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped"),this.trigger("hide_stripes")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots"),this.trigger("show_dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots"),this.trigger("hide_dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons"),this.trigger("show_icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons"),this.trigger("hide_icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},show_ellipsis:function(){this._data.core.themes.ellipsis=!0,this.get_container_ul().addClass("jstree-ellipsis"),this.trigger("show_ellipsis")},hide_ellipsis:function(){this._data.core.themes.ellipsis=!1,this.get_container_ul().removeClass("jstree-ellipsis"),this.trigger("hide_ellipsis")},toggle_ellipsis:function(){this._data.core.themes.ellipsis?this.hide_ellipsis():this.show_ellipsis()},set_icon:function(e,s){var r,a,t,d;if(i.isArray(e)){for(e=e.slice(),r=0,a=e.length;r<a;r++)this.set_icon(e[r],s);return!0}return e=this.get_node(e),!e||e.id===i.jstree.root?!1:(d=e.icon,e.icon=s===!0||s===null||s===A||s===""?!0:s,t=this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon"),s===!1?(t.removeClass("jstree-themeicon-custom "+d).css("background","").removeAttr("rel"),this.hide_icon(e)):s===!0||s===null||s===A||s===""?(t.removeClass("jstree-themeicon-custom "+d).css("background","").removeAttr("rel"),d===!1&&this.show_icon(e)):s.indexOf("/")===-1&&s.indexOf(".")===-1?(t.removeClass(d).css("background",""),t.addClass(s+" jstree-themeicon-custom").attr("rel",s),d===!1&&this.show_icon(e)):(t.removeClass(d).css("background",""),t.addClass("jstree-themeicon-custom").css("background","url('"+s+"') center center no-repeat").attr("rel",s),d===!1&&this.show_icon(e)),!0)},get_icon:function(e){return e=this.get_node(e),!e||e.id===i.jstree.root?!1:e.icon},hide_icon:function(e){var s,r;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.hide_icon(e[s]);return!0}return e=this.get_node(e),!e||e===i.jstree.root?!1:(e.icon=!1,this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0)},show_icon:function(e){var s,r,a;if(i.isArray(e)){for(e=e.slice(),s=0,r=e.length;s<r;s++)this.show_icon(e[s]);return!0}return e=this.get_node(e),!e||e===i.jstree.root?!1:(a=this.get_node(e,!0),e.icon=a.length?a.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,e.icon||(e.icon=!0),a.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0)}},i.vakata={},i.vakata.attributes=function(e,s){e=i(e)[0];var r=s?{}:[];return e&&e.attributes&&i.each(e.attributes,function(a,t){i.inArray(t.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])===-1&&t.value!==null&&i.vakata.trim(t.value)!==""&&(s?r[t.name]=t.value:r.push(t.name))}),r},i.vakata.array_unique=function(e){var s=[],r,a,t,d={};for(r=0,t=e.length;r<t;r++)d[e[r]]===A&&(s.push(e[r]),d[e[r]]=!0);return s},i.vakata.array_remove=function(e,s){return e.splice(s,1),e},i.vakata.array_remove_item=function(e,s){var r=i.inArray(s,e);return r!==-1?i.vakata.array_remove(e,r):e},i.vakata.array_filter=function(e,s,r,a,t){if(e.filter)return e.filter(s,r);a=[];for(t in e)~~t+""==t+""&&t>=0&&s.call(r,e[t],+t,e)&&a.push(e[t]);return a},i.vakata.trim=function(e){return String.prototype.trim?String.prototype.trim.call(e.toString()):e.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},i.jstree.plugins.changed=function(e,s){var r=[];this.trigger=function(a,t){var d,c;if(t||(t={}),a.replace(".jstree","")==="changed"){t.changed={selected:[],deselected:[]};var m={};for(d=0,c=r.length;d<c;d++)m[r[d]]=1;for(d=0,c=t.selected.length;d<c;d++)m[t.selected[d]]?m[t.selected[d]]=2:t.changed.selected.push(t.selected[d]);for(d=0,c=r.length;d<c;d++)m[r[d]]===1&&t.changed.deselected.push(r[d]);r=t.selected.slice()}s.trigger.call(this,a,t)},this.refresh=function(a,t){return r=[],s.refresh.apply(this,arguments)}};var w=O.createElement("I");w.className="jstree-icon jstree-checkbox",w.setAttribute("role","presentation"),i.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},i.jstree.plugins.checkbox=function(e,s){this.bind=function(){s.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",i.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",i.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),this.settings.checkbox.cascade.indexOf("undetermined")!==-1&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",i.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(i.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",i.proxy(function(r,a){var t=this._model.data,d=t[a.parent],c=a.nodes,m,v;for(m=0,v=c.length;m<v;m++)t[c[m]].state.checked=t[c[m]].state.checked||t[c[m]].original&&t[c[m]].original.state&&t[c[m]].original.state.checked,t[c[m]].state.checked&&this._data.checkbox.selected.push(c[m])},this)),(this.settings.checkbox.cascade.indexOf("up")!==-1||this.settings.checkbox.cascade.indexOf("down")!==-1)&&this.element.on("model.jstree",i.proxy(function(r,a){var t=this._model.data,d=t[a.parent],c=a.nodes,m=[],v,h,S,R,B,H,V=this.settings.checkbox.cascade,X=this.settings.checkbox.tie_selection;if(V.indexOf("down")!==-1){if(d.state[X?"selected":"checked"]){for(h=0,S=c.length;h<S;h++)t[c[h]].state[X?"selected":"checked"]=!0;this._data[X?"core":"checkbox"].selected=this._data[X?"core":"checkbox"].selected.concat(c)}else for(h=0,S=c.length;h<S;h++)if(t[c[h]].state[X?"selected":"checked"]){for(R=0,B=t[c[h]].children_d.length;R<B;R++)t[t[c[h]].children_d[R]].state[X?"selected":"checked"]=!0;this._data[X?"core":"checkbox"].selected=this._data[X?"core":"checkbox"].selected.concat(t[c[h]].children_d)}}if(V.indexOf("up")!==-1){for(h=0,S=d.children_d.length;h<S;h++)t[d.children_d[h]].children.length||m.push(t[d.children_d[h]].parent);for(m=i.vakata.array_unique(m),R=0,B=m.length;R<B;R++)for(d=t[m[R]];d&&d.id!==i.jstree.root;){for(v=0,h=0,S=d.children.length;h<S;h++)v+=t[d.children[h]].state[X?"selected":"checked"];if(v===S)d.state[X?"selected":"checked"]=!0,this._data[X?"core":"checkbox"].selected.push(d.id),H=this.get_node(d,!0),H&&H.length&&H.attr("aria-selected",!0).children(".jstree-anchor").addClass(X?"jstree-clicked":"jstree-checked");else break;d=this.get_node(d.parent)}}this._data[X?"core":"checkbox"].selected=i.vakata.array_unique(this._data[X?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",i.proxy(function(r,a){var t=this,d=a.node,c=this._model.data,m=this.get_node(d.parent),v,h,S,R,B=this.settings.checkbox.cascade,H=this.settings.checkbox.tie_selection,V={},X=this._data[H?"core":"checkbox"].selected;for(v=0,h=X.length;v<h;v++)V[X[v]]=!0;if(B.indexOf("down")!==-1){var J=this._cascade_new_checked_state(d.id,!0),de=d.children_d.concat(d.id);for(v=0,h=de.length;v<h;v++)J.indexOf(de[v])>-1?V[de[v]]=!0:delete V[de[v]]}if(B.indexOf("up")!==-1)for(;m&&m.id!==i.jstree.root;){for(S=0,v=0,h=m.children.length;v<h;v++)S+=c[m.children[v]].state[H?"selected":"checked"];if(S===h)m.state[H?"selected":"checked"]=!0,V[m.id]=!0,R=this.get_node(m,!0),R&&R.length&&R.attr("aria-selected",!0).children(".jstree-anchor").addClass(H?"jstree-clicked":"jstree-checked");else break;m=this.get_node(m.parent)}X=[];for(v in V)V.hasOwnProperty(v)&&X.push(v);this._data[H?"core":"checkbox"].selected=X},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",i.proxy(function(r,a){var t=this.get_node(i.jstree.root),d=this._model.data,c,m,v;for(c=0,m=t.children_d.length;c<m;c++)v=d[t.children_d[c]],v&&v.original&&v.original.state&&v.original.state.undetermined&&(v.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",i.proxy(function(r,a){var t=this,d=a.node,c=this.get_node(d,!0),m,v,h,S=this.settings.checkbox.cascade,R=this.settings.checkbox.tie_selection,B=this._data[R?"core":"checkbox"].selected,H={},V=[],X=d.children_d.concat(d.id);if(S.indexOf("down")!==-1){var J=this._cascade_new_checked_state(d.id,!1);B=i.vakata.array_filter(B,function(de){return X.indexOf(de)===-1||J.indexOf(de)>-1})}if(S.indexOf("up")!==-1&&B.indexOf(d.id)===-1){for(m=0,v=d.parents.length;m<v;m++)h=this._model.data[d.parents[m]],h.state[R?"selected":"checked"]=!1,h&&h.original&&h.original.state&&h.original.state.undetermined&&(h.original.state.undetermined=!1),h=this.get_node(d.parents[m],!0),h&&h.length&&h.attr("aria-selected",!1).children(".jstree-anchor").removeClass(R?"jstree-clicked":"jstree-checked");B=i.vakata.array_filter(B,function(de){return d.parents.indexOf(de)===-1})}this._data[R?"core":"checkbox"].selected=B},this)),this.settings.checkbox.cascade.indexOf("up")!==-1&&this.element.on("delete_node.jstree",i.proxy(function(r,a){for(var t=this.get_node(a.parent),d=this._model.data,c,m,v,h,S=this.settings.checkbox.tie_selection;t&&t.id!==i.jstree.root&&!t.state[S?"selected":"checked"];){for(v=0,c=0,m=t.children.length;c<m;c++)v+=d[t.children[c]].state[S?"selected":"checked"];if(m>0&&v===m)t.state[S?"selected":"checked"]=!0,this._data[S?"core":"checkbox"].selected.push(t.id),h=this.get_node(t,!0),h&&h.length&&h.attr("aria-selected",!0).children(".jstree-anchor").addClass(S?"jstree-clicked":"jstree-checked");else break;t=this.get_node(t.parent)}},this)).on("move_node.jstree",i.proxy(function(r,a){var t=a.is_multi,d=a.old_parent,c=this.get_node(a.parent),m=this._model.data,v,h,S,R,B,H=this.settings.checkbox.tie_selection;if(!t)for(v=this.get_node(d);v&&v.id!==i.jstree.root&&!v.state[H?"selected":"checked"];){for(h=0,S=0,R=v.children.length;S<R;S++)h+=m[v.children[S]].state[H?"selected":"checked"];if(R>0&&h===R)v.state[H?"selected":"checked"]=!0,this._data[H?"core":"checkbox"].selected.push(v.id),B=this.get_node(v,!0),B&&B.length&&B.attr("aria-selected",!0).children(".jstree-anchor").addClass(H?"jstree-clicked":"jstree-checked");else break;v=this.get_node(v.parent)}for(v=c;v&&v.id!==i.jstree.root;){for(h=0,S=0,R=v.children.length;S<R;S++)h+=m[v.children[S]].state[H?"selected":"checked"];if(h===R)v.state[H?"selected":"checked"]||(v.state[H?"selected":"checked"]=!0,this._data[H?"core":"checkbox"].selected.push(v.id),B=this.get_node(v,!0),B&&B.length&&B.attr("aria-selected",!0).children(".jstree-anchor").addClass(H?"jstree-clicked":"jstree-checked"));else if(v.state[H?"selected":"checked"])v.state[H?"selected":"checked"]=!1,this._data[H?"core":"checkbox"].selected=i.vakata.array_remove_item(this._data[H?"core":"checkbox"].selected,v.id),B=this.get_node(v,!0),B&&B.length&&B.attr("aria-selected",!1).children(".jstree-anchor").removeClass(H?"jstree-clicked":"jstree-checked");else break;v=this.get_node(v.parent)}},this))},this.get_undetermined=function(r){if(this.settings.checkbox.cascade.indexOf("undetermined")===-1)return[];var a,t,d,c,m={},v=this._model.data,h=this.settings.checkbox.tie_selection,S=this._data[h?"core":"checkbox"].selected,R=[],B=this,H=[];for(a=0,t=S.length;a<t;a++)if(v[S[a]]&&v[S[a]].parents)for(d=0,c=v[S[a]].parents.length;d<c&&m[v[S[a]].parents[d]]===A;d++)v[S[a]].parents[d]!==i.jstree.root&&(m[v[S[a]].parents[d]]=!0,R.push(v[S[a]].parents[d]));for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var V=B.get_node(this),X;if(V){if(V.state.loaded){for(a=0,t=V.children_d.length;a<t;a++)if(X=v[V.children_d[a]],!X.state.loaded&&X.original&&X.original.state&&X.original.state.undetermined&&X.original.state.undetermined===!0)for(m[X.id]===A&&X.id!==i.jstree.root&&(m[X.id]=!0,R.push(X.id)),d=0,c=X.parents.length;d<c;d++)m[X.parents[d]]===A&&X.parents[d]!==i.jstree.root&&(m[X.parents[d]]=!0,R.push(X.parents[d]))}else if(V.original&&V.original.state&&V.original.state.undetermined&&V.original.state.undetermined===!0)for(m[V.id]===A&&V.id!==i.jstree.root&&(m[V.id]=!0,R.push(V.id)),d=0,c=V.parents.length;d<c;d++)m[V.parents[d]]===A&&V.parents[d]!==i.jstree.root&&(m[V.parents[d]]=!0,R.push(V.parents[d]))}}),a=0,t=R.length;a<t;a++)v[R[a]].state[h?"selected":"checked"]||H.push(r?v[R[a]]:R[a]);return H},this._undetermined=function(){if(this.element!==null){var r=this.get_undetermined(!1),a,t,d;for(this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),a=0,t=r.length;a<t;a++)d=this.get_node(r[a],!0),d&&d.length&&d.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")}},this.redraw_node=function(r,a,t,d){if(r=s.redraw_node.apply(this,arguments),r){var c,m,v=null,h=null;for(c=0,m=r.childNodes.length;c<m;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){v=r.childNodes[c];break}v&&(!this.settings.checkbox.tie_selection&&this._model.data[r.id].state.checked&&(v.className+=" jstree-checked"),h=w.cloneNode(!1),this._model.data[r.id].state.checkbox_disabled&&(h.className+=" jstree-checkbox-disabled"),v.insertBefore(h,v.childNodes[0]))}return!t&&this.settings.checkbox.cascade.indexOf("undetermined")!==-1&&(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(i.proxy(this._undetermined,this),50)),r},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(r){r=this.get_node(r);var a=this.settings.checkbox.cascade,t,d,c=this.settings.checkbox.tie_selection,m=this._data[c?"core":"checkbox"].selected,v=this._model.data;if(!r||r.state[c?"selected":"checked"]===!0||a.indexOf("undetermined")===-1||a.indexOf("down")===-1&&a.indexOf("up")===-1)return!1;if(!r.state.loaded&&r.original.state.undetermined===!0)return!0;for(t=0,d=r.children_d.length;t<d;t++)if(i.inArray(r.children_d[t],m)!==-1||!v[r.children_d[t]].state.loaded&&v[r.children_d[t]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(r){var a,t,d;if(i.isArray(r)){for(r=r.slice(),a=0,t=r.length;a<t;a++)this.disable_checkbox(r[a]);return!0}if(r=this.get_node(r),!r||r.id===i.jstree.root)return!1;d=this.get_node(r,!0),r.state.checkbox_disabled||(r.state.checkbox_disabled=!0,d&&d.length&&d.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:r}))},this.enable_checkbox=function(r){var a,t,d;if(i.isArray(r)){for(r=r.slice(),a=0,t=r.length;a<t;a++)this.enable_checkbox(r[a]);return!0}if(r=this.get_node(r),!r||r.id===i.jstree.root)return!1;d=this.get_node(r,!0),r.state.checkbox_disabled&&(r.state.checkbox_disabled=!1,d&&d.length&&d.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:r}))},this.activate_node=function(r,a){if(i(a.target).hasClass("jstree-checkbox-disabled"))return!1;if(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||i(a.target).hasClass("jstree-checkbox"))&&(a.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!i(a.target).hasClass("jstree-checkbox"))return s.activate_node.call(this,r,a);if(this.is_disabled(r))return!1;this.is_checked(r)?this.uncheck_node(r,a):this.check_node(r,a),this.trigger("activate_node",{node:this.get_node(r)})},this._cascade_new_checked_state=function(r,a){var t=this,d=this.settings.checkbox.tie_selection,c=this._model.data[r],m=[],v=[],h,S,R;if((this.settings.checkbox.cascade_to_disabled||!c.state.disabled)&&(this.settings.checkbox.cascade_to_hidden||!c.state.hidden)){if(c.children)for(h=0,S=c.children.length;h<S;h++){var B=c.children[h];R=t._cascade_new_checked_state(B,a),m=m.concat(R),R.indexOf(B)>-1&&v.push(B)}var H=t.get_node(c,!0),V=v.length>0&&v.length<c.children.length;c.original&&c.original.state&&c.original.state.undetermined&&(c.original.state.undetermined=V),V?(c.state[d?"selected":"checked"]=!1,H.attr("aria-selected",!1).children(".jstree-anchor").removeClass(d?"jstree-clicked":"jstree-checked")):a&&v.length===c.children.length?(c.state[d?"selected":"checked"]=a,m.push(c.id),H.attr("aria-selected",!0).children(".jstree-anchor").addClass(d?"jstree-clicked":"jstree-checked")):(c.state[d?"selected":"checked"]=!1,H.attr("aria-selected",!1).children(".jstree-anchor").removeClass(d?"jstree-clicked":"jstree-checked"))}else R=this.get_checked_descendants(r),c.state[d?"selected":"checked"]&&R.push(c.id),m=m.concat(R);return m},this.get_checked_descendants=function(r){var a=this,t=a.settings.checkbox.tie_selection,d=a._model.data[r];return i.vakata.array_filter(d.children_d,function(c){return a._model.data[c].state[t?"selected":"checked"]})},this.check_node=function(r,a){if(this.settings.checkbox.tie_selection)return this.select_node(r,!1,!0,a);var t,d,c,m;if(i.isArray(r)){for(r=r.slice(),d=0,c=r.length;d<c;d++)this.check_node(r[d],a);return!0}if(r=this.get_node(r),!r||r.id===i.jstree.root)return!1;t=this.get_node(r,!0),r.state.checked||(r.state.checked=!0,this._data.checkbox.selected.push(r.id),t&&t.length&&t.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:r,selected:this._data.checkbox.selected,event:a}))},this.uncheck_node=function(r,a){if(this.settings.checkbox.tie_selection)return this.deselect_node(r,!1,a);var t,d,c;if(i.isArray(r)){for(r=r.slice(),t=0,d=r.length;t<d;t++)this.uncheck_node(r[t],a);return!0}if(r=this.get_node(r),!r||r.id===i.jstree.root)return!1;c=this.get_node(r,!0),r.state.checked&&(r.state.checked=!1,this._data.checkbox.selected=i.vakata.array_remove_item(this._data.checkbox.selected,r.id),c.length&&c.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:r,selected:this._data.checkbox.selected,event:a}))},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();var r=this._data.checkbox.selected.concat([]),a,t;for(this._data.checkbox.selected=this._model.data[i.jstree.root].children_d.concat(),a=0,t=this._data.checkbox.selected.length;a<t;a++)this._model.data[this._data.checkbox.selected[a]]&&(this._model.data[this._data.checkbox.selected[a]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var r=this._data.checkbox.selected.concat([]),a,t;for(a=0,t=this._data.checkbox.selected.length;a<t;a++)this._model.data[this._data.checkbox.selected[a]]&&(this._model.data[this._data.checkbox.selected[a]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:r})},this.is_checked=function(r){return this.settings.checkbox.tie_selection?this.is_selected(r):(r=this.get_node(r),!r||r.id===i.jstree.root?!1:r.state.checked)},this.get_checked=function(r){return this.settings.checkbox.tie_selection?this.get_selected(r):r?i.map(this._data.checkbox.selected,i.proxy(function(a){return this.get_node(a)},this)):this._data.checkbox.selected.slice()},this.get_top_checked=function(r){if(this.settings.checkbox.tie_selection)return this.get_top_selected(r);var a=this.get_checked(!0),t={},d,c,m,v;for(d=0,c=a.length;d<c;d++)t[a[d].id]=a[d];for(d=0,c=a.length;d<c;d++)for(m=0,v=a[d].children_d.length;m<v;m++)t[a[d].children_d[m]]&&delete t[a[d].children_d[m]];a=[];for(d in t)t.hasOwnProperty(d)&&a.push(d);return r?i.map(a,i.proxy(function(h){return this.get_node(h)},this)):a},this.get_bottom_checked=function(r){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(r);var a=this.get_checked(!0),t=[],d,c;for(d=0,c=a.length;d<c;d++)a[d].children.length||t.push(a[d].id);return r?i.map(t,i.proxy(function(m){return this.get_node(m)},this)):t},this.load_node=function(r,a){var t,d,c,m,v,h;if(!i.isArray(r)&&!this.settings.checkbox.tie_selection&&(h=this.get_node(r),h&&h.state.loaded))for(t=0,d=h.children_d.length;t<d;t++)this._model.data[h.children_d[t]].state.checked&&(v=!0,this._data.checkbox.selected=i.vakata.array_remove_item(this._data.checkbox.selected,h.children_d[t]));return s.load_node.apply(this,arguments)},this.get_state=function(){var r=s.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection||(r.checkbox=this._data.checkbox.selected.slice()),r},this.set_state=function(r,a){var t=s.set_state.apply(this,arguments);if(t&&r.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var d=this;i.each(r.checkbox,function(c,m){d.check_node(m)})}return delete r.checkbox,this.set_state(r,a),!1}return t},this.refresh=function(r,a){return this.settings.checkbox.tie_selection&&(this._data.checkbox.selected=[]),s.refresh.apply(this,arguments)}},i.jstree.defaults.conditionalselect=function(){return!0},i.jstree.plugins.conditionalselect=function(e,s){this.activate_node=function(r,a){if(this.settings.conditionalselect.call(this,this.get_node(r),a))return s.activate_node.call(this,r,a)}},i.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(e,s){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.create_node(t,{},"last",function(d){try{a.edit(d)}catch{setTimeout(function(){a.edit(d)},0)}})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.edit(t)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.is_selected(t)?a.delete_node(a.get_selected()):a.delete_node(t)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.is_selected(t)?a.cut(a.get_top_selected()):a.cut(t)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.is_selected(t)?a.copy(a.get_top_selected()):a.copy(t)}},paste:{separator_before:!1,icon:!1,_disabled:function(r){return!i.jstree.reference(r.reference).can_paste()},separator_after:!1,label:"Paste",action:function(r){var a=i.jstree.reference(r.reference),t=a.get_node(r.reference);a.paste(t)}}}}}}},i.jstree.plugins.contextmenu=function(e,s){this.bind=function(){s.bind.call(this);var r=0,a=null,t,d;this.element.on("init.jstree loading.jstree ready.jstree",i.proxy(function(){this.get_container_ul().addClass("jstree-contextmenu")},this)).on("contextmenu.jstree",".jstree-anchor",i.proxy(function(c,m){c.target.tagName.toLowerCase()!=="input"&&(c.preventDefault(),r=c.ctrlKey?+new Date:0,(m||a)&&(r=+new Date+1e4),a&&clearTimeout(a),this.is_loading(c.currentTarget)||this.show_contextmenu(c.currentTarget,c.pageX,c.pageY,c))},this)).on("click.jstree",".jstree-anchor",i.proxy(function(c){this._data.contextmenu.visible&&(!r||+new Date-r>250)&&i.vakata.context.hide(),r=0},this)).on("touchstart.jstree",".jstree-anchor",function(c){!c.originalEvent||!c.originalEvent.changedTouches||!c.originalEvent.changedTouches[0]||(t=c.originalEvent.changedTouches[0].clientX,d=c.originalEvent.changedTouches[0].clientY,a=setTimeout(function(){i(c.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(c){a&&c.originalEvent&&c.originalEvent.changedTouches&&c.originalEvent.changedTouches[0]&&(Math.abs(t-c.originalEvent.changedTouches[0].clientX)>10||Math.abs(d-c.originalEvent.changedTouches[0].clientY)>10)&&(clearTimeout(a),i.vakata.context.hide())}).on("touchend.vakata.jstree",function(c){a&&clearTimeout(a)});i(O).on("context_hide.vakata.jstree",i.proxy(function(c,m){this._data.contextmenu.visible=!1,i(m.reference).removeClass("jstree-context")},this))},this.teardown=function(){this._data.contextmenu.visible&&i.vakata.context.hide(),s.teardown.call(this)},this.show_contextmenu=function(r,a,t,d){if(r=this.get_node(r),!r||r.id===i.jstree.root)return!1;var c=this.settings.contextmenu,m=this.get_node(r,!0),v=m.children(".jstree-anchor"),h=!1,S=!1;(c.show_at_node||a===A||t===A)&&(h=v.offset(),a=h.left,t=h.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(r)&&this.activate_node(r,d),S=c.items,i.isFunction(S)&&(S=S.call(this,r,i.proxy(function(R){this._show_contextmenu(r,a,t,R)},this))),i.isPlainObject(S)&&this._show_contextmenu(r,a,t,S)},this._show_contextmenu=function(r,a,t,d){var c=this.get_node(r,!0),m=c.children(".jstree-anchor");i(O).one("context_show.vakata.jstree",i.proxy(function(v,h){var S="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";i(h.element).addClass(S),m.addClass("jstree-context")},this)),this._data.contextmenu.visible=!0,i.vakata.context.show(m,{x:a,y:t},d),this.trigger("show_contextmenu",{node:r,x:a,y:t})}},(function(e){var s=!1,r={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};e.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(a){e(O).triggerHandler("context_"+a+".vakata",{reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}})},_execute:function(a){return a=r.items[a],a&&(!a._disabled||e.isFunction(a._disabled)&&!a._disabled({item:a,reference:r.reference,element:r.element}))&&a.action?a.action.call(null,{item:a,reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}}):!1},_parse:function(a,t){if(!a)return!1;t||(r.html="",r.items=[]);var d="",c=!1,m;return t&&(d+="<ul>"),e.each(a,function(v,h){if(!h)return!0;r.items.push(h),!c&&h.separator_before&&(d+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>"),c=!1,d+="<li class='"+(h._class||"")+(h._disabled===!0||e.isFunction(h._disabled)&&h._disabled({item:h,reference:r.reference,element:r.element})?" vakata-contextmenu-disabled ":"")+"' "+(h.shortcut?" data-shortcut='"+h.shortcut+"' ":"")+">",d+="<a href='#' rel='"+(r.items.length-1)+"' "+(h.title?"title='"+h.title+"'":"")+">",e.vakata.context.settings.icons&&(d+="<i ",h.icon&&(h.icon.indexOf("/")!==-1||h.icon.indexOf(".")!==-1?d+=` style='background:url("`+h.icon+`") center center no-repeat' `:d+=" class='"+h.icon+"' "),d+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),d+=(e.isFunction(h.label)?h.label({item:v,reference:r.reference,element:r.element}):h.label)+(h.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+h.shortcut+'">'+(h.shortcut_label||"")+"</span>":"")+"</a>",h.submenu&&(m=e.vakata.context._parse(h.submenu,!0),m&&(d+=m)),d+="</li>",h.separator_after&&(d+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>",c=!0)}),d=d.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),t&&(d+="</ul>"),t||(r.html=d,e.vakata.context._trigger("parse")),d.length>10?d:!1},_show_submenu:function(a){if(a=e(a),!(!a.length||!a.children("ul").length)){var t=a.children("ul"),d=a.offset().left,c=d+a.outerWidth(),m=a.offset().top,v=t.width(),h=t.height(),S=e(window).width()+e(window).scrollLeft(),R=e(window).height()+e(window).scrollTop();s?a[c-(v+10+a.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):a[c+v>S&&d>S-c?"addClass":"removeClass"]("vakata-context-right"),m+h+10>R&&t.css("bottom","-1px"),a.hasClass("vakata-context-right")?d<v&&t.css("margin-right",d-v):S-c<v&&t.css("margin-left",S-c-v),t.show()}},show:function(a,t,d){var c,m,v,h,S,R,B,H,V=!0;switch(r.element&&r.element.length&&r.element.width(""),V){case(!t&&!a):return!1;case(!!t&&!!a):r.reference=a,r.position_x=t.x,r.position_y=t.y;break;case(!t&&!!a):r.reference=a,c=a.offset(),r.position_x=c.left+a.outerHeight(),r.position_y=c.top;break;case(!!t&&!a):r.position_x=t.x,r.position_y=t.y;break}a&&!d&&e(a).data("vakata_contextmenu")&&(d=e(a).data("vakata_contextmenu")),e.vakata.context._parse(d)&&r.element.html(r.html),r.items.length&&(r.element.appendTo(O.body),m=r.element,v=r.position_x,h=r.position_y,S=m.width(),R=m.height(),B=e(window).width()+e(window).scrollLeft(),H=e(window).height()+e(window).scrollTop(),s&&(v-=m.outerWidth()-e(a).outerWidth(),v<e(window).scrollLeft()+20&&(v=e(window).scrollLeft()+20)),v+S+20>B&&(v=B-(S+20)),h+R+20>H&&(h=H-(R+20)),r.element.css({left:v,top:h}).show().find("a").first().focus().parent().addClass("vakata-context-hover"),r.is_visible=!0,e.vakata.context._trigger("show"))},hide:function(){r.is_visible&&(r.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),r.is_visible=!1,e.vakata.context._trigger("hide"))}},e(function(){s=e(O.body).css("direction")==="rtl";var a=!1;r.element=e("<ul class='vakata-context'></ul>"),r.element.on("mouseenter","li",function(t){t.stopImmediatePropagation(),!e.contains(this,t.relatedTarget)&&(a&&clearTimeout(a),r.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),e.vakata.context._show_submenu(this))}).on("mouseleave","li",function(t){e.contains(this,t.relatedTarget)||e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(t){e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),e.vakata.context.settings.hide_onmouseleave&&(a=setTimeout((function(d){return function(){e.vakata.context.hide()}})(this),e.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(t){t.preventDefault(),!e(this).blur().parent().hasClass("vakata-context-disabled")&&e.vakata.context._execute(e(this).attr("rel"))!==!1&&e.vakata.context.hide()}).on("keydown","a",function(t){var d=null;switch(t.which){case 13:case 32:t.type="click",t.preventDefault(),e(t.currentTarget).trigger(t);break;case 37:r.is_visible&&(r.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 38:r.is_visible&&(d=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),d.length||(d=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),d.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 39:r.is_visible&&(r.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 40:r.is_visible&&(d=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),d.length||(d=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),d.addClass("vakata-context-hover").children("a").focus(),t.stopImmediatePropagation(),t.preventDefault());break;case 27:e.vakata.context.hide(),t.preventDefault();break;default:break}}).on("keydown",function(t){t.preventDefault();var d=r.element.find(".vakata-contextmenu-shortcut-"+t.which).parent();d.parent().not(".vakata-context-disabled")&&d.click()}),e(O).on("mousedown.vakata.jstree",function(t){r.is_visible&&r.element[0]!==t.target&&!e.contains(r.element[0],t.target)&&e.vakata.context.hide()}).on("context_show.vakata.jstree",function(t,d){r.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),s&&r.element.addClass("vakata-context-rtl").css("direction","rtl"),r.element.find("ul").hide().end()})})})(i),i.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1};var j,f;i.jstree.plugins.dnd=function(e,s){this.init=function(r,a){s.init.call(this,r,a),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in O.createElement("span")},this.bind=function(){s.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",i.proxy(function(r){if(this.settings.dnd.large_drag_target&&i(r.target).closest(".jstree-node")[0]!==r.currentTarget||r.type==="touchstart"&&(!this.settings.dnd.touch||this.settings.dnd.touch==="selected"&&!i(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var a=this.get_node(r.target),t=this.is_selected(a)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,d=t>1?t+" "+this.get_string("nodes"):this.get_text(r.currentTarget);if(this.settings.core.force_text&&(d=i.vakata.html.escape(d)),a&&a.id&&a.id!==i.jstree.root&&(r.which===1||r.type==="touchstart"||r.type==="dragstart")&&(this.settings.dnd.is_draggable===!0||i.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,t>1?this.get_top_selected(!0):[a],r)))if(j={jstree:!0,origin:this,obj:this.get_node(a,!0),nodes:t>1?this.get_top_selected():[a.id]},f=r.currentTarget,this.settings.dnd.use_html5)i.vakata.dnd._trigger("start",r,{helper:i(),element:f,data:j});else return this.element.trigger("mousedown.jstree"),i.vakata.dnd.start(r,j,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+d+'<ins class="jstree-copy" style="display:none;">+</ins></div>')},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(r){return r.preventDefault(),i.vakata.dnd._trigger("move",r,{helper:i(),element:f,data:j}),!1}).on("drop.jstree",i.proxy(function(r){return r.preventDefault(),i.vakata.dnd._trigger("stop",r,{helper:i(),element:f,data:j}),!1},this))},this.redraw_node=function(r,a,t,d){if(r=s.redraw_node.apply(this,arguments),r&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)r.setAttribute("draggable",!0);else{var c,m,v=null;for(c=0,m=r.childNodes.length;c<m;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){v=r.childNodes[c];break}v&&v.setAttribute("draggable",!0)}return r}},i(function(){var e=!1,s=!1,r=!1,a=!1,t=i('<div id="jstree-marker">&#160;</div>').hide();i(O).on("dragover.vakata.jstree",function(d){f&&i.vakata.dnd._trigger("move",d,{helper:i(),element:f,data:j})}).on("drop.vakata.jstree",function(d){f&&(i.vakata.dnd._trigger("stop",d,{helper:i(),element:f,data:j}),f=null,j=null)}).on("dnd_start.vakata.jstree",function(d,c){e=!1,r=!1,!(!c||!c.data||!c.data.jstree)&&t.appendTo(O.body)}).on("dnd_move.vakata.jstree",function(d,c){var m=c.event.target!==r.target;if(a&&(!c.event||c.event.type!=="dragover"||m)&&clearTimeout(a),!(!c||!c.data||!c.data.jstree)&&!(c.event.target.id&&c.event.target.id==="jstree-marker")){r=c.event;var v=i.jstree.reference(c.event.target),h=!1,S=!1,R=!1,B,H,V,X,J,de,ge,ce,ye,ze,Be,ke,Oe,Ke,Qe,Ye,ae,st;if(v&&v._data&&v._data.dnd){if(t.attr("class","jstree-"+v.get_theme()+(v.settings.core.themes.responsive?" jstree-dnd-responsive":"")),Ye=c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey)),c.helper.children().attr("class","jstree-"+v.get_theme()+" jstree-"+v.get_theme()+"-"+v.get_theme_variant()+" "+(v.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[Ye?"show":"hide"](),(c.event.target===v.element[0]||c.event.target===v.get_container_ul()[0])&&v.get_container_ul().children().length===0){for(ce=!0,ye=0,ze=c.data.nodes.length;ye<ze&&(ce=ce&&v.check(c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node",c.data.origin&&c.data.origin!==v?c.data.origin.get_node(c.data.nodes[ye]):c.data.nodes[ye],i.jstree.root,"last",{dnd:!0,ref:v.get_node(i.jstree.root),pos:"i",origin:c.data.origin,is_multi:c.data.origin&&c.data.origin!==v,is_foreign:!c.data.origin}),!!ce);ye++);if(ce){e={ins:v,par:i.jstree.root,pos:"last"},t.hide(),c.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),c.event.originalEvent&&c.event.originalEvent.dataTransfer&&(c.event.originalEvent.dataTransfer.dropEffect=Ye?"copy":"move");return}}else if(h=v.settings.dnd.large_drop_target?i(c.event.target).closest(".jstree-node").children(".jstree-anchor"):i(c.event.target).closest(".jstree-anchor"),h&&h.length&&h.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(S=h.offset(),R=(c.event.pageY!==A?c.event.pageY:c.event.originalEvent.pageY)-S.top,X=h.outerHeight(),R<X/3?ge=["b","i","a"]:R>X-X/3?ge=["a","i","b"]:ge=R>X/2?["i","a","b"]:["i","b","a"],i.each(ge,function($e,Xe){switch(Xe){case"b":H=S.left-6,V=S.top,J=v.get_parent(h),de=h.parent().index(),st="jstree-below";break;case"i":Ke=v.settings.dnd.inside_pos,Qe=v.get_node(h.parent()),H=S.left-2,V=S.top+X/2+1,J=Qe.id,de=Ke==="first"?0:Ke==="last"?Qe.children.length:Math.min(Ke,Qe.children.length),st="jstree-inside";break;case"a":H=S.left-6,V=S.top+X,J=v.get_parent(h),de=h.parent().index()+1,st="jstree-above";break}for(ce=!0,ye=0,ze=c.data.nodes.length;ye<ze;ye++)if(Be=c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node",ke=de,Be==="move_node"&&Xe==="a"&&c.data.origin&&c.data.origin===v&&J===v.get_parent(c.data.nodes[ye])&&(Oe=v.get_node(J),ke>i.inArray(c.data.nodes[ye],Oe.children)&&(ke-=1)),ce=ce&&(v&&v.settings&&v.settings.dnd&&v.settings.dnd.check_while_dragging===!1||v.check(Be,c.data.origin&&c.data.origin!==v?c.data.origin.get_node(c.data.nodes[ye]):c.data.nodes[ye],J,ke,{dnd:!0,ref:v.get_node(h.parent()),pos:Xe,origin:c.data.origin,is_multi:c.data.origin&&c.data.origin!==v,is_foreign:!c.data.origin})),!ce){v&&v.last_error&&(s=v.last_error());break}if(Xe==="i"&&h.parent().is(".jstree-closed")&&v.settings.dnd.open_timeout&&(!c.event||c.event.type!=="dragover"||m)&&(a&&clearTimeout(a),a=setTimeout((function(xe,ct){return function(){xe.open_node(ct)}})(v,h),v.settings.dnd.open_timeout)),ce)return ae=v.get_node(J,!0),ae.hasClass(".jstree-dnd-parent")||(i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),ae.addClass("jstree-dnd-parent")),e={ins:v,par:J,pos:Xe==="i"&&Ke==="last"&&de===0&&!v.is_loaded(Qe)?"last":de},t.css({left:H+"px",top:V+"px"}).show(),t.removeClass("jstree-above jstree-inside jstree-below").addClass(st),c.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),c.event.originalEvent&&c.event.originalEvent.dataTransfer&&(c.event.originalEvent.dataTransfer.dropEffect=Ye?"copy":"move"),s={},ge=!0,!1}),ge===!0))return}i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),e=!1,c.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),c.event.originalEvent&&c.event.originalEvent.dataTransfer,t.hide()}}).on("dnd_scroll.vakata.jstree",function(d,c){!c||!c.data||!c.data.jstree||(t.hide(),e=!1,r=!1,c.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(d,c){if(i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),a&&clearTimeout(a),!(!c||!c.data||!c.data.jstree)){t.hide().detach();var m,v,h=[];if(e){for(m=0,v=c.data.nodes.length;m<v;m++)h[m]=c.data.origin?c.data.origin.get_node(c.data.nodes[m]):c.data.nodes[m];e.ins[c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node"](h,e.par,e.pos,!1,!1,!1,c.data.origin)}else m=i(c.event.target).closest(".jstree"),m.length&&s&&s.error&&s.error==="check"&&(m=m.jstree(!0),m&&m.settings.core.error.call(this,s));r=!1,e=!1}}).on("keyup.jstree keydown.jstree",function(d,c){c=i.vakata.dnd._get(),c&&c.data&&c.data.jstree&&(d.type==="keyup"&&d.which===27?(a&&clearTimeout(a),e=!1,s=!1,r=!1,a=!1,t.hide().detach(),i.vakata.dnd._clean()):(c.helper.find(".jstree-copy").first()[c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(d.metaKey||d.ctrlKey))?"show":"hide"](),r&&(r.metaKey=d.metaKey,r.ctrlKey=d.ctrlKey,i.vakata.dnd._trigger("move",r))))})}),(function(e){e.vakata.html={div:e("<div></div>"),escape:function(r){return e.vakata.html.div.text(r).html()},strip:function(r){return e.vakata.html.div.empty().append(e.parseHTML(r)).text()}};var s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:10},_trigger:function(r,a,t){t===A&&(t=e.vakata.dnd._get()),t.event=a,e(O).triggerHandler("dnd_"+r+".vakata",t)},_get:function(){return{data:s.data,element:s.element,helper:s.helper}},_clean:function(){s.helper&&s.helper.remove(),s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},f=null,e(O).off("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(O).off("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop)},_scroll:function(r){if(!s.scroll_e||!s.scroll_l&&!s.scroll_t)return s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),!1;if(!s.scroll_i)return s.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(r===!0)return!1;var a=s.scroll_e.scrollTop(),t=s.scroll_e.scrollLeft();s.scroll_e.scrollTop(a+s.scroll_t*e.vakata.dnd.settings.scroll_speed),s.scroll_e.scrollLeft(t+s.scroll_l*e.vakata.dnd.settings.scroll_speed),(a!==s.scroll_e.scrollTop()||t!==s.scroll_e.scrollLeft())&&e.vakata.dnd._trigger("scroll",s.scroll_e)},start:function(r,a,t){r.type==="touchstart"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=O.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag&&e.vakata.dnd.stop({});try{r.currentTarget.unselectable="on",r.currentTarget.onselectstart=function(){return!1},r.currentTarget.style&&(r.currentTarget.style.touchAction="none",r.currentTarget.style.msTouchAction="none",r.currentTarget.style.MozUserSelect="none")}catch{}return s.init_x=r.pageX,s.init_y=r.pageY,s.data=a,s.is_down=!0,s.element=r.currentTarget,s.target=r.target,s.is_touch=r.type==="touchstart",t!==!1&&(s.helper=e("<div id='vakata-dnd'></div>").html(t).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(O).on("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(O).on("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop),!1},drag:function(r){if(r.type==="touchmove"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=O.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),!!s.is_down){if(!s.is_drag)if(Math.abs(r.pageX-s.init_x)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)||Math.abs(r.pageY-s.init_y)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold))s.helper&&(s.helper.appendTo(O.body),s.helper_w=s.helper.outerWidth()),s.is_drag=!0,e(s.target).one("click.vakata",!1),e.vakata.dnd._trigger("start",r);else return;var a=!1,t=!1,d=!1,c=!1,m=!1,v=!1,h=!1,S=!1,R=!1,B=!1;return s.scroll_t=0,s.scroll_l=0,s.scroll_e=!1,e(e(r.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var H=e(this),V=H.offset();if(this.scrollHeight>this.offsetHeight&&(V.top+H.height()-r.pageY<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),r.pageY-V.top<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(V.left+H.width()-r.pageX<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),r.pageX-V.left<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1)),s.scroll_t||s.scroll_l)return s.scroll_e=e(this),!1}),s.scroll_e||(a=e(O),t=e(window),d=a.height(),c=t.height(),m=a.width(),v=t.width(),h=a.scrollTop(),S=a.scrollLeft(),d>c&&r.pageY-h<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1),d>c&&c-(r.pageY-h)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),m>v&&r.pageX-S<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1),m>v&&v-(r.pageX-S)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),(s.scroll_t||s.scroll_l)&&(s.scroll_e=a)),s.scroll_e&&e.vakata.dnd._scroll(!0),s.helper&&(R=parseInt(r.pageY+e.vakata.dnd.settings.helper_top,10),B=parseInt(r.pageX+e.vakata.dnd.settings.helper_left,10),d&&R+25>d&&(R=d-50),m&&B+s.helper_w>m&&(B=m-(s.helper_w+2)),s.helper.css({left:B+"px",top:R+"px"})),e.vakata.dnd._trigger("move",r),!1}},stop:function(r){if(r.type==="touchend"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=O.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag)r.target!==s.target&&e(s.target).off("click.vakata"),e.vakata.dnd._trigger("stop",r);else if(r.type==="touchend"&&r.target===s.target){var a=setTimeout(function(){e(r.target).click()},100);e(r.target).one("click",function(){a&&clearTimeout(a)})}return e.vakata.dnd._clean(),!1}}})(i),i.jstree.defaults.massload=null,i.jstree.plugins.massload=function(e,s){this.init=function(r,a){this._data.massload={},s.init.call(this,r,a)},this._load_nodes=function(r,a,t,d){var c=this.settings.massload,m=[],v=this._model.data,h,S,R;if(!t){for(h=0,S=r.length;h<S;h++)(!v[r[h]]||!v[r[h]].state.loaded&&!v[r[h]].state.failed||d)&&(m.push(r[h]),R=this.get_node(r[h],!0),R&&R.length&&R.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},m.length){if(i.isFunction(c))return c.call(this,m,i.proxy(function(B){var H,V;if(B)for(H in B)B.hasOwnProperty(H)&&(this._data.massload[H]=B[H]);for(H=0,V=r.length;H<V;H++)R=this.get_node(r[H],!0),R&&R.length&&R.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,r,a,t,d)},this));if(typeof c=="object"&&c&&c.url)return c=i.extend(!0,{},c),i.isFunction(c.url)&&(c.url=c.url.call(this,m)),i.isFunction(c.data)&&(c.data=c.data.call(this,m)),i.ajax(c).done(i.proxy(function(B,H,V){var X,J;if(B)for(X in B)B.hasOwnProperty(X)&&(this._data.massload[X]=B[X]);for(X=0,J=r.length;X<J;X++)R=this.get_node(r[X],!0),R&&R.length&&R.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,r,a,t,d)},this)).fail(i.proxy(function(B){s._load_nodes.call(this,r,a,t,d)},this))}}return s._load_nodes.call(this,r,a,t,d)},this._load_node=function(r,a){var t=this._data.massload[r.id],d=null,c;return t?(d=this[typeof t=="string"?"_append_html_data":"_append_json_data"](r,typeof t=="string"?i(i.parseHTML(t)).filter(function(){return this.nodeType!==3}):t,function(m){a.call(this,m)}),c=this.get_node(r.id,!0),c&&c.length&&c.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[r.id],d):s._load_node.call(this,r,a)}},i.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},i.jstree.plugins.search=function(e,s){this.bind=function(){s.bind.call(this),this._data.search.str="",this._data.search.dom=i(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",i.proxy(function(r,a){if(this._data.search.som&&a.res.length){var t=this._model.data,d,c,m=[],v,h;for(d=0,c=a.res.length;d<c;d++)if(t[a.res[d]]&&!t[a.res[d]].state.hidden&&(m.push(a.res[d]),m=m.concat(t[a.res[d]].parents),this._data.search.smc))for(v=0,h=t[a.res[d]].children_d.length;v<h;v++)t[t[a.res[d]].children_d[v]]&&!t[t[a.res[d]].children_d[v]].state.hidden&&m.push(t[a.res[d]].children_d[v]);m=i.vakata.array_remove_item(i.vakata.array_unique(m),i.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(m,!0),this.redraw(!0)}},this)).on("clear_search.jstree",i.proxy(function(r,a){this._data.search.som&&a.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))},this))},this.search=function(r,a,t,d,c,m){if(r===!1||i.vakata.trim(r.toString())==="")return this.clear_search();d=this.get_node(d),d=d&&d.id?d.id:null,r=r.toString();var v=this.settings.search,h=v.ajax?v.ajax:!1,S=this._model.data,R=null,B=[],H=[],V,X;if(this._data.search.res.length&&!c&&this.clear_search(),t===A&&(t=v.show_only_matches),m===A&&(m=v.show_only_matches_children),!a&&h!==!1)return i.isFunction(h)?h.call(this,r,i.proxy(function(J){J&&J.d&&(J=J.d),this._load_nodes(i.isArray(J)?i.vakata.array_unique(J):[],function(){this.search(r,!0,t,d,c,m)})},this),d):(h=i.extend({},h),h.data||(h.data={}),h.data.str=r,d&&(h.data.inside=d),this._data.search.lastRequest&&this._data.search.lastRequest.abort(),this._data.search.lastRequest=i.ajax(h).fail(i.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(h)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(i.proxy(function(J){J&&J.d&&(J=J.d),this._load_nodes(i.isArray(J)?i.vakata.array_unique(J):[],function(){this.search(r,!0,t,d,c,m)})},this)),this._data.search.lastRequest);if(c||(this._data.search.str=r,this._data.search.dom=i(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=t,this._data.search.smc=m),R=new i.vakata.search(r,!0,{caseSensitive:v.case_sensitive,fuzzy:v.fuzzy}),i.each(S[d||i.jstree.root].children_d,function(J,de){var ge=S[de];ge.text&&!ge.state.hidden&&(!v.search_leaves_only||ge.state.loaded&&ge.children.length===0)&&(v.search_callback&&v.search_callback.call(this,r,ge)||!v.search_callback&&R.search(ge.text).isMatch)&&(B.push(de),H=H.concat(ge.parents))}),B.length){for(H=i.vakata.array_unique(H),V=0,X=H.length;V<X;V++)H[V]!==i.jstree.root&&S[H[V]]&&this.open_node(H[V],null,0)===!0&&this._data.search.opn.push(H[V]);c?(this._data.search.dom=this._data.search.dom.add(i(this.element[0].querySelectorAll("#"+i.map(B,function(J){return"0123456789".indexOf(J[0])!==-1?"\\3"+J[0]+" "+J.substr(1).replace(i.jstree.idregex,"\\$&"):J.replace(i.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=i.vakata.array_unique(this._data.search.res.concat(B))):(this._data.search.dom=i(this.element[0].querySelectorAll("#"+i.map(B,function(J){return"0123456789".indexOf(J[0])!==-1?"\\3"+J[0]+" "+J.substr(1).replace(i.jstree.idregex,"\\$&"):J.replace(i.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=B),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:r,res:this._data.search.res,show_only_matches:t})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=i(this.element[0].querySelectorAll("#"+i.map(this._data.search.res,function(r){return"0123456789".indexOf(r[0])!==-1?"\\3"+r[0]+" "+r.substr(1).replace(i.jstree.idregex,"\\$&"):r.replace(i.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=i()},this.redraw_node=function(r,a,t,d){if(r=s.redraw_node.apply(this,arguments),r&&i.inArray(r.id,this._data.search.res)!==-1){var c,m,v=null;for(c=0,m=r.childNodes.length;c<m;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){v=r.childNodes[c];break}v&&(v.className+=" jstree-search")}return r}},(function(e){e.vakata.search=function(s,r,a){a=a||{},a=e.extend({},e.vakata.search.defaults,a),a.fuzzy!==!1&&(a.fuzzy=!0),s=a.caseSensitive?s:s.toLowerCase();var t=a.location,d=a.distance,c=a.threshold,m=s.length,v,h,S,R;return m>32&&(a.fuzzy=!1),a.fuzzy&&(v=1<<m-1,h=(function(){var B={},H=0;for(H=0;H<m;H++)B[s.charAt(H)]=0;for(H=0;H<m;H++)B[s.charAt(H)]|=1<<m-H-1;return B})(),S=function(B,H){var V=B/m,X=Math.abs(t-H);return d?V+X/d:X?1:V}),R=function(B){if(B=a.caseSensitive?B:B.toLowerCase(),s===B||B.indexOf(s)!==-1)return{isMatch:!0,score:0};if(!a.fuzzy)return{isMatch:!1,score:1};var H,V,X=B.length,J=c,de=B.indexOf(s,t),ge,ce,ye=m+X,ze,Be,ke,Oe,Ke,Qe=1,Ye=[];for(de!==-1&&(J=Math.min(S(0,de),J),de=B.lastIndexOf(s,t+m),de!==-1&&(J=Math.min(S(0,de),J))),de=-1,H=0;H<m;H++){for(ge=0,ce=ye;ge<ce;)S(H,t+ce)<=J?ge=ce:ye=ce,ce=Math.floor((ye-ge)/2+ge);for(ye=ce,Be=Math.max(1,t-ce+1),ke=Math.min(t+ce,X)+m,Oe=new Array(ke+2),Oe[ke+1]=(1<<H)-1,V=ke;V>=Be;V--)if(Ke=h[B.charAt(V-1)],H===0?Oe[V]=(Oe[V+1]<<1|1)&Ke:Oe[V]=(Oe[V+1]<<1|1)&Ke|((ze[V+1]|ze[V])<<1|1)|ze[V+1],Oe[V]&v&&(Qe=S(H,V-1),Qe<=J))if(J=Qe,de=V-1,Ye.push(de),de>t)Be=Math.max(1,2*t-de);else break;if(S(H+1,t)>J)break;ze=Oe}return{isMatch:de>=0,score:Qe}},r===!0?{search:R}:R(r)},e.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1}})(i),i.jstree.defaults.sort=function(e,s){return this.get_text(e)>this.get_text(s)?1:-1},i.jstree.plugins.sort=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("model.jstree",i.proxy(function(r,a){this.sort(a.parent,!0)},this)).on("rename_node.jstree create_node.jstree",i.proxy(function(r,a){this.sort(a.parent||a.node.parent,!1),this.redraw_node(a.parent||a.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",i.proxy(function(r,a){this.sort(a.parent,!1),this.redraw_node(a.parent,!0)},this))},this.sort=function(r,a){var t,d;if(r=this.get_node(r),r&&r.children&&r.children.length&&(r.children.sort(i.proxy(this.settings.sort,this)),a))for(t=0,d=r.children_d.length;t<d;t++)this.sort(r.children_d[t],!1)}};var C=!1;i.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1,preserve_loaded:!1},i.jstree.plugins.state=function(e,s){this.bind=function(){s.bind.call(this);var r=i.proxy(function(){this.element.on(this.settings.state.events,i.proxy(function(){C&&clearTimeout(C),C=setTimeout(i.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",i.proxy(function(a,t){this.element.one("restore_state.jstree",r),this.restore_state()||r()},this))},this.save_state=function(){var r=this.get_state();this.settings.state.preserve_loaded||delete r.core.loaded;var a={state:r,ttl:this.settings.state.ttl,sec:+new Date};i.vakata.storage.set(this.settings.state.key,JSON.stringify(a))},this.restore_state=function(){var r=i.vakata.storage.get(this.settings.state.key);if(r)try{r=JSON.parse(r)}catch{return!1}return r&&r.ttl&&r.sec&&+new Date-r.sec>r.ttl?!1:(r&&r.state&&(r=r.state),r&&i.isFunction(this.settings.state.filter)&&(r=this.settings.state.filter.call(this,r)),r?(this.settings.state.preserve_loaded||delete r.core.loaded,this.element.one("set_state.jstree",function(a,t){t.instance.trigger("restore_state",{state:i.extend(!0,{},r)})}),this.set_state(r),!0):!1)},this.clear_state=function(){return i.vakata.storage.del(this.settings.state.key)}},(function(e,s){e.vakata.storage={set:function(r,a){return window.localStorage.setItem(r,a)},get:function(r){return window.localStorage.getItem(r)},del:function(r){return window.localStorage.removeItem(r)}}})(i),i.jstree.defaults.types={default:{}},i.jstree.defaults.types[i.jstree.root]={},i.jstree.plugins.types=function(e,s){this.init=function(r,a){var t,d;if(a&&a.types&&a.types.default){for(t in a.types)if(t!=="default"&&t!==i.jstree.root&&a.types.hasOwnProperty(t))for(d in a.types.default)a.types.default.hasOwnProperty(d)&&a.types[t][d]===A&&(a.types[t][d]=a.types.default[d])}s.init.call(this,r,a),this._model.data[i.jstree.root].type=i.jstree.root},this.refresh=function(r,a){s.refresh.call(this,r,a),this._model.data[i.jstree.root].type=i.jstree.root},this.bind=function(){this.element.on("model.jstree",i.proxy(function(r,a){var t=this._model.data,d=a.nodes,c=this.settings.types,m,v,h="default",S;for(m=0,v=d.length;m<v;m++){if(h="default",t[d[m]].original&&t[d[m]].original.type&&c[t[d[m]].original.type]&&(h=t[d[m]].original.type),t[d[m]].data&&t[d[m]].data.jstree&&t[d[m]].data.jstree.type&&c[t[d[m]].data.jstree.type]&&(h=t[d[m]].data.jstree.type),t[d[m]].type=h,t[d[m]].icon===!0&&c[h].icon!==A&&(t[d[m]].icon=c[h].icon),c[h].li_attr!==A&&typeof c[h].li_attr=="object"){for(S in c[h].li_attr)if(c[h].li_attr.hasOwnProperty(S)){if(S==="id")continue;t[d[m]].li_attr[S]===A?t[d[m]].li_attr[S]=c[h].li_attr[S]:S==="class"&&(t[d[m]].li_attr.class=c[h].li_attr.class+" "+t[d[m]].li_attr.class)}}if(c[h].a_attr!==A&&typeof c[h].a_attr=="object"){for(S in c[h].a_attr)if(c[h].a_attr.hasOwnProperty(S)){if(S==="id")continue;t[d[m]].a_attr[S]===A?t[d[m]].a_attr[S]=c[h].a_attr[S]:S==="href"&&t[d[m]].a_attr[S]==="#"?t[d[m]].a_attr.href=c[h].a_attr.href:S==="class"&&(t[d[m]].a_attr.class=c[h].a_attr.class+" "+t[d[m]].a_attr.class)}}}t[i.jstree.root].type=i.jstree.root},this)),s.bind.call(this)},this.get_json=function(r,a,t){var d,c,m=this._model.data,v=a?i.extend(!0,{},a,{no_id:!1}):{},h=s.get_json.call(this,r,v,t);if(h===!1)return!1;if(i.isArray(h))for(d=0,c=h.length;d<c;d++)h[d].type=h[d].id&&m[h[d].id]&&m[h[d].id].type?m[h[d].id].type:"default",a&&a.no_id&&(delete h[d].id,h[d].li_attr&&h[d].li_attr.id&&delete h[d].li_attr.id,h[d].a_attr&&h[d].a_attr.id&&delete h[d].a_attr.id);else h.type=h.id&&m[h.id]&&m[h.id].type?m[h.id].type:"default",a&&a.no_id&&(h=this._delete_ids(h));return h},this._delete_ids=function(r){if(i.isArray(r)){for(var a=0,t=r.length;a<t;a++)r[a]=this._delete_ids(r[a]);return r}return delete r.id,r.li_attr&&r.li_attr.id&&delete r.li_attr.id,r.a_attr&&r.a_attr.id&&delete r.a_attr.id,r.children&&i.isArray(r.children)&&(r.children=this._delete_ids(r.children)),r},this.check=function(r,a,t,d,c){if(s.check.call(this,r,a,t,d,c)===!1)return!1;a=a&&a.id?a:this.get_node(a),t=t&&t.id?t:this.get_node(t);var m=a&&a.id?c&&c.origin?c.origin:i.jstree.reference(a.id):null,v,h,S,R;switch(m=m&&m._model&&m._model.data?m._model.data:null,r){case"create_node":case"move_node":case"copy_node":if(r!=="move_node"||i.inArray(a.id,t.children)===-1){if(v=this.get_rules(t),v.max_children!==A&&v.max_children!==-1&&v.max_children===t.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})},!1;if(v.valid_children!==A&&v.valid_children!==-1&&i.inArray(a.type||"default",v.valid_children)===-1)return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})},!1;if(m&&a.children_d&&a.parents){for(h=0,S=0,R=a.children_d.length;S<R;S++)h=Math.max(h,m[a.children_d[S]].parents.length);h=h-a.parents.length+1}(h<=0||h===A)&&(h=1);do{if(v.max_depth!==A&&v.max_depth!==-1&&v.max_depth<h)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})},!1;t=this.get_node(t.parent),v=this.get_rules(t),h++}while(t)}break}return!0},this.get_rules=function(r){if(r=this.get_node(r),!r)return!1;var a=this.get_type(r,!0);return a.max_depth===A&&(a.max_depth=-1),a.max_children===A&&(a.max_children=-1),a.valid_children===A&&(a.valid_children=-1),a},this.get_type=function(r,a){return r=this.get_node(r),r?a?i.extend({type:r.type},this.settings.types[r.type]):r.type:!1},this.set_type=function(r,a){var t=this._model.data,d,c,m,v,h,S,R,B;if(i.isArray(r)){for(r=r.slice(),c=0,m=r.length;c<m;c++)this.set_type(r[c],a);return!0}if(d=this.settings.types,r=this.get_node(r),!d[a]||!r)return!1;if(R=this.get_node(r,!0),R&&R.length&&(B=R.children(".jstree-anchor")),v=r.type,h=this.get_icon(r),r.type=a,(h===!0||!d[v]||d[v].icon!==A&&h===d[v].icon)&&this.set_icon(r,d[a].icon!==A?d[a].icon:!0),d[v]&&d[v].li_attr!==A&&typeof d[v].li_attr=="object"){for(S in d[v].li_attr)if(d[v].li_attr.hasOwnProperty(S)){if(S==="id")continue;S==="class"?(t[r.id].li_attr.class=(t[r.id].li_attr.class||"").replace(d[v].li_attr[S],""),R&&R.removeClass(d[v].li_attr[S])):t[r.id].li_attr[S]===d[v].li_attr[S]&&(t[r.id].li_attr[S]=null,R&&R.removeAttr(S))}}if(d[v]&&d[v].a_attr!==A&&typeof d[v].a_attr=="object"){for(S in d[v].a_attr)if(d[v].a_attr.hasOwnProperty(S)){if(S==="id")continue;S==="class"?(t[r.id].a_attr.class=(t[r.id].a_attr.class||"").replace(d[v].a_attr[S],""),B&&B.removeClass(d[v].a_attr[S])):t[r.id].a_attr[S]===d[v].a_attr[S]&&(S==="href"?(t[r.id].a_attr[S]="#",B&&B.attr("href","#")):(delete t[r.id].a_attr[S],B&&B.removeAttr(S)))}}if(d[a].li_attr!==A&&typeof d[a].li_attr=="object"){for(S in d[a].li_attr)if(d[a].li_attr.hasOwnProperty(S)){if(S==="id")continue;t[r.id].li_attr[S]===A?(t[r.id].li_attr[S]=d[a].li_attr[S],R&&(S==="class"?R.addClass(d[a].li_attr[S]):R.attr(S,d[a].li_attr[S]))):S==="class"&&(t[r.id].li_attr.class=d[a].li_attr[S]+" "+t[r.id].li_attr.class,R&&R.addClass(d[a].li_attr[S]))}}if(d[a].a_attr!==A&&typeof d[a].a_attr=="object"){for(S in d[a].a_attr)if(d[a].a_attr.hasOwnProperty(S)){if(S==="id")continue;t[r.id].a_attr[S]===A?(t[r.id].a_attr[S]=d[a].a_attr[S],B&&(S==="class"?B.addClass(d[a].a_attr[S]):B.attr(S,d[a].a_attr[S]))):S==="href"&&t[r.id].a_attr[S]==="#"?(t[r.id].a_attr.href=d[a].a_attr.href,B&&B.attr("href",d[a].a_attr.href)):S==="class"&&(t[r.id].a_attr.class=d[a].a_attr.class+" "+t[r.id].a_attr.class,B&&B.addClass(d[a].a_attr[S]))}}return!0}},i.jstree.defaults.unique={case_sensitive:!1,trim_whitespace:!1,duplicate:function(e,s){return e+" ("+s+")"}},i.jstree.plugins.unique=function(e,s){this.check=function(r,a,t,d,c){if(s.check.call(this,r,a,t,d,c)===!1)return!1;if(a=a&&a.id?a:this.get_node(a),t=t&&t.id?t:this.get_node(t),!t||!t.children)return!0;var m=r==="rename_node"?d:a.text,v=[],h=this.settings.unique.case_sensitive,S=this.settings.unique.trim_whitespace,R=this._model.data,B,H,V;for(B=0,H=t.children.length;B<H;B++)V=R[t.children[B]].text,h||(V=V.toLowerCase()),S&&(V=V.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),v.push(V);switch(h||(m=m.toLowerCase()),S&&(m=m.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),r){case"delete_node":return!0;case"rename_node":return V=a.text||"",h||(V=V.toLowerCase()),S&&(V=V.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),B=i.inArray(m,v)===-1||a.text&&V===m,B||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+m+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})}),B;case"create_node":return B=i.inArray(m,v)===-1,B||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+m+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})}),B;case"copy_node":return B=i.inArray(m,v)===-1,B||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+m+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})}),B;case"move_node":return B=a.parent===t.id&&(!c||!c.is_multi)||i.inArray(m,v)===-1,B||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+m+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:d,obj:a&&a.id?a.id:!1,par:t&&t.id?t.id:!1})}),B}return!0},this.create_node=function(r,a,t,d,c){if(!a||a.text===A){if(r===null&&(r=i.jstree.root),r=this.get_node(r),!r)return s.create_node.call(this,r,a,t,d,c);if(t=t===A?"last":t,!t.toString().match(/^(before|after)$/)&&!c&&!this.is_loaded(r))return s.create_node.call(this,r,a,t,d,c);a||(a={});var m,v,h,S,R,B=this._model.data,H=this.settings.unique.case_sensitive,V=this.settings.unique.trim_whitespace,X=this.settings.unique.duplicate,J;for(v=m=this.get_string("New node"),h=[],S=0,R=r.children.length;S<R;S++)J=B[r.children[S]].text,H||(J=J.toLowerCase()),V&&(J=J.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),h.push(J);for(S=1,J=v,H||(J=J.toLowerCase()),V&&(J=J.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));i.inArray(J,h)!==-1;)v=X.call(this,m,++S).toString(),J=v,H||(J=J.toLowerCase()),V&&(J=J.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));a.text=v}return s.create_node.call(this,r,a,t,d,c)}};var N=O.createElement("DIV");if(N.setAttribute("unselectable","on"),N.setAttribute("role","presentation"),N.className="jstree-wholerow",N.innerHTML="&#160;",i.jstree.plugins.wholerow=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("ready.jstree set_state.jstree",i.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",i.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",i.proxy(function(r,a){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",i.proxy(function(r,a){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var t=!1,d,c;for(d=0,c=a.selected.length;d<c;d++)t=this.get_node(a.selected[d],!0),t&&t.length&&t.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",i.proxy(function(r,a){this.get_node(a.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",i.proxy(function(r,a){r.type==="hover_node"&&this.is_disabled(a.node)||this.get_node(a.node,!0).children(".jstree-wholerow")[r.type==="hover_node"?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",i.proxy(function(r){if(this._data.contextmenu){r.preventDefault();var a=i.Event("contextmenu",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey,pageX:r.pageX,pageY:r.pageY});i(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(a)}},this)).on("click.jstree",".jstree-wholerow",function(r){r.stopImmediatePropagation();var a=i.Event("click",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});i(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(a).focus()}).on("dblclick.jstree",".jstree-wholerow",function(r){r.stopImmediatePropagation();var a=i.Event("dblclick",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});i(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(a).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",i.proxy(function(r){r.stopImmediatePropagation();var a=i.Event("click",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});i(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(a).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",i.proxy(function(r){return r.stopImmediatePropagation(),this.is_disabled(r.currentTarget)||this.hover_node(r.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",i.proxy(function(r){this.dehover_node(r.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),s.teardown.call(this)},this.redraw_node=function(r,a,t,d){if(r=s.redraw_node.apply(this,arguments),r){var c=N.cloneNode(!0);i.inArray(r.id,this._data.core.selected)!==-1&&(c.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===r.id&&(c.className+=" jstree-wholerow-hovered"),r.insertBefore(c,r.childNodes[0])}return r}},window.customElements&&Object&&Object.create){var P=Object.create(HTMLElement.prototype);P.createdCallback=function(){var e={core:{},plugins:[]},s;for(s in i.jstree.plugins)i.jstree.plugins.hasOwnProperty(s)&&this.attributes[s]&&(e.plugins.push(s),this.getAttribute(s)&&JSON.parse(this.getAttribute(s))&&(e[s]=JSON.parse(this.getAttribute(s))));for(s in i.jstree.defaults.core)i.jstree.defaults.core.hasOwnProperty(s)&&this.attributes[s]&&(e.core[s]=JSON.parse(this.getAttribute(s))||this.getAttribute(s));i(this).jstree(e)};try{window.customElements.define("vakata-jstree",function(){},{prototype:P})}catch{}}}})});var Ii=ot((Na,Zs)=>{Zs.exports=`/* jsTree default theme */
.jstree-node,
.jstree-children,
.jstree-container-ul {
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style-image: none;
}
.jstree-node {
  white-space: nowrap;
}
.jstree-anchor {
  display: inline-block;
  color: black;
  white-space: nowrap;
  padding: 0 4px 0 1px;
  margin: 0;
  vertical-align: top;
}
.jstree-anchor:focus {
  outline: 0;
}
.jstree-anchor,
.jstree-anchor:link,
.jstree-anchor:visited,
.jstree-anchor:hover,
.jstree-anchor:active {
  text-decoration: none;
  color: inherit;
}
.jstree-icon {
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
  text-align: center;
}
.jstree-icon:empty {
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
  text-align: center;
}
.jstree-ocl {
  cursor: pointer;
}
.jstree-leaf > .jstree-ocl {
  cursor: default;
}
.jstree .jstree-open > .jstree-children {
  display: block;
}
.jstree .jstree-closed > .jstree-children,
.jstree .jstree-leaf > .jstree-children {
  display: none;
}
.jstree-anchor > .jstree-themeicon {
  margin-right: 2px;
}
.jstree-no-icons .jstree-themeicon,
.jstree-anchor > .jstree-themeicon-hidden {
  display: none;
}
.jstree-hidden,
.jstree-node.jstree-hidden {
  display: none;
}
.jstree-rtl .jstree-anchor {
  padding: 0 1px 0 4px;
}
.jstree-rtl .jstree-anchor > .jstree-themeicon {
  margin-left: 2px;
  margin-right: 0;
}
.jstree-rtl .jstree-node {
  margin-left: 0;
}
.jstree-rtl .jstree-container-ul > .jstree-node {
  margin-right: 0;
}
.jstree-wholerow-ul {
  position: relative;
  display: inline-block;
  min-width: 100%;
}
.jstree-wholerow-ul .jstree-leaf > .jstree-ocl {
  cursor: pointer;
}
.jstree-wholerow-ul .jstree-anchor,
.jstree-wholerow-ul .jstree-icon {
  position: relative;
}
.jstree-wholerow-ul .jstree-wholerow {
  width: 100%;
  cursor: pointer;
  position: absolute;
  left: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.jstree-contextmenu .jstree-anchor {
  -webkit-user-select: none;
  /* disable selection/Copy of UIWebView */
  -webkit-touch-callout: none;
  /* disable the IOS popup when long-press on a link */
}
.vakata-context {
  display: none;
}
.vakata-context,
.vakata-context ul {
  margin: 0;
  padding: 2px;
  position: absolute;
  background: #f5f5f5;
  border: 1px solid #979797;
  box-shadow: 2px 2px 2px #999999;
}
.vakata-context ul {
  list-style: none;
  left: 100%;
  margin-top: -2.7em;
  margin-left: -4px;
}
.vakata-context .vakata-context-right ul {
  left: auto;
  right: 100%;
  margin-left: auto;
  margin-right: -4px;
}
.vakata-context li {
  list-style: none;
}
.vakata-context li > a {
  display: block;
  padding: 0 2em 0 2em;
  text-decoration: none;
  width: auto;
  color: black;
  white-space: nowrap;
  line-height: 2.4em;
  text-shadow: 1px 1px 0 white;
  border-radius: 1px;
}
.vakata-context li > a:hover {
  position: relative;
  background-color: #e8eff7;
  box-shadow: 0 0 2px #0a6aa1;
}
.vakata-context li > a.vakata-context-parent {
  background-image: none;
  background-position: right center;
  background-repeat: no-repeat;
}
.vakata-context li > a:focus {
  outline: 0;
}
.vakata-context .vakata-context-hover > a {
  position: relative;
  background-color: #e8eff7;
  box-shadow: 0 0 2px #0a6aa1;
}
.vakata-context .vakata-context-separator > a,
.vakata-context .vakata-context-separator > a:hover {
  background: white;
  border: 0;
  border-top: 1px solid #e2e3e3;
  height: 1px;
  min-height: 1px;
  max-height: 1px;
  padding: 0;
  margin: 0 0 0 2.4em;
  border-left: 1px solid #e0e0e0;
  text-shadow: 0 0 0 transparent;
  box-shadow: 0 0 0 transparent;
  border-radius: 0;
}
.vakata-context .vakata-contextmenu-disabled a,
.vakata-context .vakata-contextmenu-disabled a:hover {
  color: silver;
  background-color: transparent;
  border: 0;
  box-shadow: 0 0 0;
}
.vakata-context .vakata-contextmenu-disabled > a > i {
  filter: grayscale(100%);
}
.vakata-context li > a > i {
  text-decoration: none;
  display: inline-block;
  width: 2.4em;
  height: 2.4em;
  background: transparent;
  margin: 0 0 0 -2em;
  vertical-align: top;
  text-align: center;
  line-height: 2.4em;
}
.vakata-context li > a > i:empty {
  width: 2.4em;
  line-height: 2.4em;
}
.vakata-context li > a .vakata-contextmenu-sep {
  display: inline-block;
  width: 1px;
  height: 2.4em;
  background: white;
  margin: 0 0.5em 0 0;
  border-left: 1px solid #e2e3e3;
}
.vakata-context .vakata-contextmenu-shortcut {
  font-size: 0.8em;
  color: silver;
  opacity: 0.5;
  display: none;
}
.vakata-context-rtl ul {
  left: auto;
  right: 100%;
  margin-left: auto;
  margin-right: -4px;
}
.vakata-context-rtl li > a.vakata-context-parent {
  background-image: none;
  background-position: left center;
  background-repeat: no-repeat;
}
.vakata-context-rtl .vakata-context-separator > a {
  margin: 0 2.4em 0 0;
  border-left: 0;
  border-right: 1px solid #e2e3e3;
}
.vakata-context-rtl .vakata-context-left ul {
  right: auto;
  left: 100%;
  margin-left: -4px;
  margin-right: auto;
}
.vakata-context-rtl li > a > i {
  margin: 0 -2em 0 0;
}
.vakata-context-rtl li > a .vakata-contextmenu-sep {
  margin: 0 0 0 0.5em;
  border-left-color: white;
  background: #e2e3e3;
}
#jstree-marker {
  position: absolute;
  top: 0;
  left: 0;
  margin: -5px 0 0 0;
  padding: 0;
  border-right: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}
#jstree-dnd {
  line-height: 16px;
  margin: 0;
  padding: 4px;
}
#jstree-dnd .jstree-icon,
#jstree-dnd .jstree-copy {
  display: inline-block;
  text-decoration: none;
  margin: 0 2px 0 0;
  padding: 0;
  width: 16px;
  height: 16px;
}
#jstree-dnd .jstree-ok {
  background: green;
}
#jstree-dnd .jstree-er {
  background: red;
}
#jstree-dnd .jstree-copy {
  margin: 0 2px 0 2px;
}
.jstree-default .jstree-node,
.jstree-default .jstree-icon {
  background-repeat: no-repeat;
  background-color: transparent;
}
.jstree-default .jstree-anchor,
.jstree-default .jstree-animated,
.jstree-default .jstree-wholerow {
  transition: background-color 0.15s, box-shadow 0.15s;
}
.jstree-default .jstree-hovered {
  background: #e7f4f9;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #cccccc;
}
.jstree-default .jstree-context {
  background: #e7f4f9;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #cccccc;
}
.jstree-default .jstree-clicked {
  background: #beebff;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #999999;
}
.jstree-default .jstree-no-icons .jstree-anchor > .jstree-themeicon {
  display: none;
}
.jstree-default .jstree-disabled {
  background: transparent;
  color: #666666;
}
.jstree-default .jstree-disabled.jstree-hovered {
  background: transparent;
  box-shadow: none;
}
.jstree-default .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default .jstree-disabled > .jstree-icon {
  opacity: 0.8;
  filter: none;
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default .jstree-search {
  font-style: italic;
  color: #8b0000;
  font-weight: bold;
}
.jstree-default .jstree-no-checkboxes .jstree-checkbox {
  display: none !important;
}
.jstree-default.jstree-checkbox-no-clicked .jstree-clicked {
  background: transparent;
  box-shadow: none;
}
.jstree-default.jstree-checkbox-no-clicked .jstree-clicked.jstree-hovered {
  background: #e7f4f9;
}
.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked {
  background: transparent;
}
.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked.jstree-wholerow-hovered {
  background: #e7f4f9;
}
.jstree-default > .jstree-striped {
  min-width: 100%;
  display: inline-block;
  background: none left top repeat;
}
.jstree-default > .jstree-wholerow-ul .jstree-hovered,
.jstree-default > .jstree-wholerow-ul .jstree-clicked {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}
.jstree-default .jstree-wholerow {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.jstree-default .jstree-wholerow-hovered {
  background: #e7f4f9;
}
.jstree-default .jstree-wholerow-clicked {
  background: #beebff;
  background: -webkit-linear-gradient(top, #beebff 0%, #a8e4ff 100%);
  background: linear-gradient(to bottom, #beebff 0%, #a8e4ff 100%);
}
.jstree-default .jstree-node {
  min-height: 24px;
  line-height: 24px;
  margin-left: 24px;
  min-width: 24px;
}
.jstree-default .jstree-anchor {
  line-height: 24px;
  height: 24px;
}
.jstree-default .jstree-icon {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.jstree-default .jstree-icon:empty {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.jstree-default.jstree-rtl .jstree-node {
  margin-right: 24px;
}
.jstree-default .jstree-wholerow {
  height: 24px;
}
.jstree-default .jstree-node,
.jstree-default .jstree-icon {
  background-image: none;
}
.jstree-default .jstree-node {
  background-position: -292px -4px;
  background-repeat: repeat-y;
}
.jstree-default .jstree-last {
  background: transparent;
}
.jstree-default .jstree-open > .jstree-ocl {
  background-position: -132px -4px;
}
.jstree-default .jstree-closed > .jstree-ocl {
  background-position: -100px -4px;
}
.jstree-default .jstree-leaf > .jstree-ocl {
  background-position: -68px -4px;
}
.jstree-default .jstree-themeicon {
  background-position: -260px -4px;
}
.jstree-default > .jstree-no-dots .jstree-node,
.jstree-default > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -36px -4px;
}
.jstree-default > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -4px -4px;
}
.jstree-default .jstree-disabled {
  background: transparent;
}
.jstree-default .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default .jstree-checkbox {
  background-position: -164px -4px;
}
.jstree-default .jstree-checkbox:hover {
  background-position: -164px -36px;
}
.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default .jstree-checked > .jstree-checkbox {
  background-position: -228px -4px;
}
.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default .jstree-checked > .jstree-checkbox:hover {
  background-position: -228px -36px;
}
.jstree-default .jstree-anchor > .jstree-undetermined {
  background-position: -196px -4px;
}
.jstree-default .jstree-anchor > .jstree-undetermined:hover {
  background-position: -196px -36px;
}
.jstree-default .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: none;
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default > .jstree-striped {
  background-size: auto 48px;
}
.jstree-default.jstree-rtl .jstree-node {
  background-image: none;
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -132px -36px;
}
.jstree-default.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -100px -36px;
}
.jstree-default.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -68px -36px;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -36px -36px;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -4px -36px;
}
.jstree-default .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: none center center no-repeat;
}
.jstree-default .jstree-file {
  background: none -100px -68px no-repeat;
}
.jstree-default .jstree-folder {
  background: none -260px -4px no-repeat;
}
.jstree-default > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default {
  line-height: 24px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default .jstree-ok,
#jstree-dnd.jstree-default .jstree-er {
  background-image: none;
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default i {
  background: transparent;
  width: 24px;
  height: 24px;
  line-height: 24px;
}
#jstree-dnd.jstree-default .jstree-ok {
  background-position: -4px -68px;
}
#jstree-dnd.jstree-default .jstree-er {
  background-position: -36px -68px;
}
.jstree-default .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 29px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default.jstree-rtl .jstree-node {
  background-image: none;
}
.jstree-default.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-small .jstree-node {
  min-height: 18px;
  line-height: 18px;
  margin-left: 18px;
  min-width: 18px;
}
.jstree-default-small .jstree-anchor {
  line-height: 18px;
  height: 18px;
}
.jstree-default-small .jstree-icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.jstree-default-small .jstree-icon:empty {
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.jstree-default-small.jstree-rtl .jstree-node {
  margin-right: 18px;
}
.jstree-default-small .jstree-wholerow {
  height: 18px;
}
.jstree-default-small .jstree-node,
.jstree-default-small .jstree-icon {
  background-image: none;
}
.jstree-default-small .jstree-node {
  background-position: -295px -7px;
  background-repeat: repeat-y;
}
.jstree-default-small .jstree-last {
  background: transparent;
}
.jstree-default-small .jstree-open > .jstree-ocl {
  background-position: -135px -7px;
}
.jstree-default-small .jstree-closed > .jstree-ocl {
  background-position: -103px -7px;
}
.jstree-default-small .jstree-leaf > .jstree-ocl {
  background-position: -71px -7px;
}
.jstree-default-small .jstree-themeicon {
  background-position: -263px -7px;
}
.jstree-default-small > .jstree-no-dots .jstree-node,
.jstree-default-small > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-small > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -39px -7px;
}
.jstree-default-small > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -7px -7px;
}
.jstree-default-small .jstree-disabled {
  background: transparent;
}
.jstree-default-small .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default-small .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default-small .jstree-checkbox {
  background-position: -167px -7px;
}
.jstree-default-small .jstree-checkbox:hover {
  background-position: -167px -39px;
}
.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default-small .jstree-checked > .jstree-checkbox {
  background-position: -231px -7px;
}
.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default-small .jstree-checked > .jstree-checkbox:hover {
  background-position: -231px -39px;
}
.jstree-default-small .jstree-anchor > .jstree-undetermined {
  background-position: -199px -7px;
}
.jstree-default-small .jstree-anchor > .jstree-undetermined:hover {
  background-position: -199px -39px;
}
.jstree-default-small .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: none;
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default-small > .jstree-striped {
  background-size: auto 36px;
}
.jstree-default-small.jstree-rtl .jstree-node {
  background-image: none;
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default-small.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-small.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -135px -39px;
}
.jstree-default-small.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -103px -39px;
}
.jstree-default-small.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -71px -39px;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -39px -39px;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -7px -39px;
}
.jstree-default-small .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default-small > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: none center center no-repeat;
}
.jstree-default-small .jstree-file {
  background: none -103px -71px no-repeat;
}
.jstree-default-small .jstree-folder {
  background: none -263px -7px no-repeat;
}
.jstree-default-small > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default-small {
  line-height: 18px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default-small .jstree-ok,
#jstree-dnd.jstree-default-small .jstree-er {
  background-image: none;
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default-small i {
  background: transparent;
  width: 18px;
  height: 18px;
  line-height: 18px;
}
#jstree-dnd.jstree-default-small .jstree-ok {
  background-position: -7px -71px;
}
#jstree-dnd.jstree-default-small .jstree-er {
  background-position: -39px -71px;
}
.jstree-default-small .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default-small .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 23px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default-small.jstree-rtl .jstree-node {
  background-image: none;
}
.jstree-default-small.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-large .jstree-node {
  min-height: 32px;
  line-height: 32px;
  margin-left: 32px;
  min-width: 32px;
}
.jstree-default-large .jstree-anchor {
  line-height: 32px;
  height: 32px;
}
.jstree-default-large .jstree-icon {
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.jstree-default-large .jstree-icon:empty {
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.jstree-default-large.jstree-rtl .jstree-node {
  margin-right: 32px;
}
.jstree-default-large .jstree-wholerow {
  height: 32px;
}
.jstree-default-large .jstree-node,
.jstree-default-large .jstree-icon {
  background-image: none;
}
.jstree-default-large .jstree-node {
  background-position: -288px 0px;
  background-repeat: repeat-y;
}
.jstree-default-large .jstree-last {
  background: transparent;
}
.jstree-default-large .jstree-open > .jstree-ocl {
  background-position: -128px 0px;
}
.jstree-default-large .jstree-closed > .jstree-ocl {
  background-position: -96px 0px;
}
.jstree-default-large .jstree-leaf > .jstree-ocl {
  background-position: -64px 0px;
}
.jstree-default-large .jstree-themeicon {
  background-position: -256px 0px;
}
.jstree-default-large > .jstree-no-dots .jstree-node,
.jstree-default-large > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-large > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -32px 0px;
}
.jstree-default-large > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: 0px 0px;
}
.jstree-default-large .jstree-disabled {
  background: transparent;
}
.jstree-default-large .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default-large .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default-large .jstree-checkbox {
  background-position: -160px 0px;
}
.jstree-default-large .jstree-checkbox:hover {
  background-position: -160px -32px;
}
.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default-large .jstree-checked > .jstree-checkbox {
  background-position: -224px 0px;
}
.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default-large .jstree-checked > .jstree-checkbox:hover {
  background-position: -224px -32px;
}
.jstree-default-large .jstree-anchor > .jstree-undetermined {
  background-position: -192px 0px;
}
.jstree-default-large .jstree-anchor > .jstree-undetermined:hover {
  background-position: -192px -32px;
}
.jstree-default-large .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: none;
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default-large > .jstree-striped {
  background-size: auto 64px;
}
.jstree-default-large.jstree-rtl .jstree-node {
  background-image: none;
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default-large.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-large.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -128px -32px;
}
.jstree-default-large.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -96px -32px;
}
.jstree-default-large.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -64px -32px;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -32px -32px;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: 0px -32px;
}
.jstree-default-large .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default-large > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: none center center no-repeat;
}
.jstree-default-large .jstree-file {
  background: none -96px -64px no-repeat;
}
.jstree-default-large .jstree-folder {
  background: none -256px 0px no-repeat;
}
.jstree-default-large > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default-large {
  line-height: 32px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default-large .jstree-ok,
#jstree-dnd.jstree-default-large .jstree-er {
  background-image: none;
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default-large i {
  background: transparent;
  width: 32px;
  height: 32px;
  line-height: 32px;
}
#jstree-dnd.jstree-default-large .jstree-ok {
  background-position: 0px -64px;
}
#jstree-dnd.jstree-default-large .jstree-er {
  background-position: -32px -64px;
}
.jstree-default-large .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default-large .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 37px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default-large.jstree-rtl .jstree-node {
  background-image: none;
}
.jstree-default-large.jstree-rtl .jstree-last {
  background: transparent;
}
@media (max-width: 768px) {
  #jstree-dnd.jstree-dnd-responsive {
    line-height: 40px;
    font-weight: bold;
    font-size: 1.1em;
    text-shadow: 1px 1px white;
  }
  #jstree-dnd.jstree-dnd-responsive > i {
    background: transparent;
    width: 40px;
    height: 40px;
  }
  #jstree-dnd.jstree-dnd-responsive > .jstree-ok {
    background-image: none;
    background-position: 0 -200px;
    background-size: 120px 240px;
  }
  #jstree-dnd.jstree-dnd-responsive > .jstree-er {
    background-image: none;
    background-position: -40px -200px;
    background-size: 120px 240px;
  }
  #jstree-marker.jstree-dnd-responsive {
    border-left-width: 10px;
    border-top-width: 10px;
    border-bottom-width: 10px;
    margin-top: -10px;
  }
}
@media (max-width: 768px) {
  .jstree-default-responsive {
    /*
	.jstree-open > .jstree-ocl,
	.jstree-closed > .jstree-ocl { border-radius:20px; background-color:white; }
	*/
  }
  .jstree-default-responsive .jstree-icon {
    background-image: none;
  }
  .jstree-default-responsive .jstree-node,
  .jstree-default-responsive .jstree-leaf > .jstree-ocl {
    background: transparent;
  }
  .jstree-default-responsive .jstree-node {
    min-height: 40px;
    line-height: 40px;
    margin-left: 40px;
    min-width: 40px;
    white-space: nowrap;
  }
  .jstree-default-responsive .jstree-anchor {
    line-height: 40px;
    height: 40px;
  }
  .jstree-default-responsive .jstree-icon,
  .jstree-default-responsive .jstree-icon:empty {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .jstree-default-responsive > .jstree-container-ul > .jstree-node {
    margin-left: 0;
  }
  .jstree-default-responsive.jstree-rtl .jstree-node {
    margin-left: 0;
    margin-right: 40px;
    background: transparent;
  }
  .jstree-default-responsive.jstree-rtl .jstree-container-ul > .jstree-node {
    margin-right: 0;
  }
  .jstree-default-responsive .jstree-ocl,
  .jstree-default-responsive .jstree-themeicon,
  .jstree-default-responsive .jstree-checkbox {
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-leaf > .jstree-ocl,
  .jstree-default-responsive.jstree-rtl .jstree-leaf > .jstree-ocl {
    background: transparent;
  }
  .jstree-default-responsive .jstree-open > .jstree-ocl {
    background-position: 0 0 !important;
  }
  .jstree-default-responsive .jstree-closed > .jstree-ocl {
    background-position: 0 -40px !important;
  }
  .jstree-default-responsive.jstree-rtl .jstree-closed > .jstree-ocl {
    background-position: -40px 0 !important;
  }
  .jstree-default-responsive .jstree-themeicon {
    background-position: -40px -40px;
  }
  .jstree-default-responsive .jstree-checkbox,
  .jstree-default-responsive .jstree-checkbox:hover {
    background-position: -40px -80px;
  }
  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
  .jstree-default-responsive .jstree-checked > .jstree-checkbox,
  .jstree-default-responsive .jstree-checked > .jstree-checkbox:hover {
    background-position: 0 -80px;
  }
  .jstree-default-responsive .jstree-anchor > .jstree-undetermined,
  .jstree-default-responsive .jstree-anchor > .jstree-undetermined:hover {
    background-position: 0 -120px;
  }
  .jstree-default-responsive .jstree-anchor {
    font-weight: bold;
    font-size: 1.1em;
    text-shadow: 1px 1px white;
  }
  .jstree-default-responsive > .jstree-striped {
    background: transparent;
  }
  .jstree-default-responsive .jstree-wholerow {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(64, 64, 64, 0.2);
    background: #ebebeb;
    height: 40px;
  }
  .jstree-default-responsive .jstree-wholerow-hovered {
    background: #e7f4f9;
  }
  .jstree-default-responsive .jstree-wholerow-clicked {
    background: #beebff;
  }
  .jstree-default-responsive .jstree-children .jstree-last > .jstree-wholerow {
    box-shadow: inset 0 -6px 3px -5px #666666;
  }
  .jstree-default-responsive .jstree-children .jstree-open > .jstree-wholerow {
    box-shadow: inset 0 6px 3px -5px #666666;
    border-top: 0;
  }
  .jstree-default-responsive .jstree-children .jstree-open + .jstree-open {
    box-shadow: none;
  }
  .jstree-default-responsive .jstree-node,
  .jstree-default-responsive .jstree-icon,
  .jstree-default-responsive .jstree-node > .jstree-ocl,
  .jstree-default-responsive .jstree-themeicon,
  .jstree-default-responsive .jstree-checkbox {
    background-image: none;
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-node {
    background-position: -80px 0;
    background-repeat: repeat-y;
  }
  .jstree-default-responsive .jstree-last {
    background: transparent;
  }
  .jstree-default-responsive .jstree-leaf > .jstree-ocl {
    background-position: -40px -120px;
  }
  .jstree-default-responsive .jstree-last > .jstree-ocl {
    background-position: -40px -160px;
  }
  .jstree-default-responsive .jstree-themeicon-custom {
    background-color: transparent;
    background-image: none;
    background-position: 0 0;
  }
  .jstree-default-responsive .jstree-file {
    background: none 0 -160px no-repeat;
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-folder {
    background: none -40px -40px no-repeat;
    background-size: 120px 240px;
  }
  .jstree-default-responsive > .jstree-container-ul > .jstree-node {
    margin-left: 0;
    margin-right: 0;
  }
}

.jstree-ocl{background:none!important}.jstree-closed>.jstree-ocl:before{content:'\u25B8';font:16px system-ui}.jstree-open>.jstree-ocl:before{content:'\u25BE';font:16px system-ui}.jstree-themeicon:before{content:'\u25C7';font:14px system-ui}.jstree-themeicon{background:none!important}
`});var Bi=ot((Ma,$s)=>{$s.exports=`/*
*	MatterTools.Inspector
*/

.ins-container,
.jstree {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ins-cursor-move canvas {
  cursor: move !important;
}

.ins-cursor-rotate canvas {
  cursor: ew-resize !important;
}

.ins-cursor-scale canvas {
  cursor: nwse-resize !important;
}

.ins-container {
  position: fixed;
  z-index: 10;
  width: 245px;
  bottom: 0;
  top: 0;
  left: 0;
  background: #191921;
  padding: 0;
  font-size: 13px;
  color: #7c7c85;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}

.ins-container,
.ins-container * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ins-container *:focus,
.ins-container *:active {
  outline: 0;
}

.ins-container *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.ins-container *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.ins-container {
  transform: translate(-220px, 0);
  transition: transform ease;
  transition-delay: 2000ms;
  transition-duration: 300ms;
}

.ins-container:hover {
  transform: translate(0, 0);
  transition-delay: 0ms;
  transition-duration: 400ms;
}

@media only screen and (min-width: 1300px) {
  .ins-container,
  .ins-container:hover {
    transition-delay: 0ms;
    transform: translate(0, 0);
  }
}

.ins-world-tree {
  position: absolute;
  overflow: auto;
  top: 91px;
  left: 3px;
  right: 0;
  bottom: 0;
  scrollbar-color: #191921 #191921;
  scrollbar-width: thin;
}

.ins-world-tree:hover {
  scrollbar-color: #32323a #191921;
  scrollbar-width: thin;
}

.ins-world-tree::-webkit-scrollbar {
  background: #191921;
  width: 6px;
  height: 6px;
}

.ins-world-tree::-webkit-scrollbar-track,
.ins-world-tree::-webkit-scrollbar-corner {
  background: #191921;
}

.ins-world-tree::-webkit-scrollbar-thumb {
  background: #191921;
  border-radius: 3px;
}

.ins-world-tree:hover::-webkit-scrollbar-thumb {
  background: #32323a;
}

.ins-add-button.ins-button {
  width: auto;
  height: auto;
  padding: 2px 5px;
  margin: 1px 10px 0px 0;
  right: 0px;
  min-width: 0;
  position: absolute;
  z-index: 100;
}

.ins-top-panel {
  height: 48px;
  background: #14151f;
}

.ins-search-box {
  margin: 7px 5px 9px 5px;
  border: 0;
  padding: 7px 8px;
  font-size: 13px;
  width: 235px;
  border-radius: 3px;
  background: #12131b;
  color: #8e8d96;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.ins-search-box:focus {
  background: #0f1017;
  border: 0;
  outline: 0;
}

.ins-search-box::-webkit-search-cancel-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 15px;
  width: 8px;
  cursor: pointer;
}

.ins-search-box::-webkit-search-cancel-button:before {
  height: 10px;
  width: 10px;
  content: "x";
  line-height: 0;
  font-size: 13px;
  color: #999;
  font-weight: bold;
  cursor: pointer;
}

.ins-search-box::-webkit-input-placeholder {
  color: #56565f;
}

.ins-search-box:-moz-placeholder {
  color: #56565f;
}

.ins-search-box::-moz-placeholder {
  color: #56565f;
}

.ins-search-box:-ms-input-placeholder {
  color: #56565f;
}

.ins-control-group {
  display: block;
  clear: both;
  overflow: hidden;
  padding: 14px 20px 12px 20px;
  background: #191921;
  border-bottom: 1px solid #29292d;
}

.ins-button {
  display: block;
  float: left;
  font-size: 11px;
  line-height: 1;
  padding: 10px 11px;
  min-width: 49px;
  text-align: center;
  background: #0e0f15;
  border: 0;
  color: #b1b1c3;
  border-radius: 2px;
  outline: none;
  margin: 0;
}

.ins-button:hover {
  background: #000;
}

.ins-button:active {
  transform: translateY(1px);
  background: #000;
}

.jstree-default .jstree-search {
  font-style: italic;
  color: #aaa;
  font-weight: normal;
}

.jstree-default .jstree-wholerow-hovered,
.jstree-default .jstree-hovered {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}

.jstree-default .jstree-wholerow {
  height: 28px;
}

.jstree-default .jstree-wholerow-clicked,
.jstree-default .jstree-clicked {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  transition: none;
}

.jstree-default .jstree-leaf .jstree-clicked {
  color: #bbb !important;
}

.jstree-default .jstree-anchor {
  line-height: 27px;
  outline: none;
}

.jstree-default .jstree-container-ul {
  margin-bottom: 12px;
}

.jstree-default .jstree-container-ul > .jstree-node > .jstree-anchor:before,
.jstree-default
  .jstree-open
  > .jstree-children
  > .jstree-node
  > .jstree-anchor:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 1px;
  height: 28px;
  border-radius: 0;
  box-shadow: none;
  border-right: none;
  pointer-events: none;
  background: rgb(44, 47, 62, 0.5);
  opacity: 0;
}

.jstree-default .jstree-anchor.jstree-clicked:before {
  opacity: 1 !important;
  pointer-events: none;
}

.jstree-default .jstree-node,
.jstree-default .jstree-leaf .jstree-ocl,
.jstree-default .jstree-icon {
  background: transparent;
}

.jstree-default .jstree-node {
  min-height: 28px;
  line-height: 28px;
  margin-left: 12px;
  min-width: 26px;
}

.jstree-default .jstree-icon {
  position: relative;
}

.jstree-default .jstree-icon:before {
  display: block;
  pointer-events: none;
  color: #d6d6d6;
  font-style: normal;
  font-size: 11px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24px;
  line-height: 24px;
  transform-origin: 12px 12px;
  transform: translate(0px, -0px);
}

.jstree-default .jstree-open > .jstree-icon:before {
  content: "\u25BE";
  top: 2px;
}

.jstree-default .jstree-closed > .jstree-icon:before {
  content: "\u25BE";
  transform: rotate(-90deg) translate(-2px, 0px);
}

.jstree-leaf .jstree-icon:before {
  display: none;
}

.jstree-default .jstree-open .jstree-ocl {
  background-position: -38px -1px;
}

.jstree-default .jstree-closed .jstree-ocl {
  background-position: -4px -2px;
}

.jstree-anchor {
  padding: 1px 0;
  transition: none;
}

.jstree-anchor .jstree-icon {
  display: none;
}

.jstree-node-type-bodies > .jstree-anchor,
.jstree-node-type-constraints > .jstree-anchor,
.jstree-node-type-composites > .jstree-anchor {
  color: #51515d;
}

#vakata-dnd {
  font-size: 12px;
  color: #aaa;
}
`});var Bn=ot((La,Wi)=>{"use strict";var Nn=Wi.exports={},Di=Qr(),mt=Ni(),kt=tn();Li();var Mn=Jr(),pr=Zr(),It=sr(),Lr=It.Body,sn=It.Bounds,dt=It.Composite,Mr=It.Common,At=It.Events,ea=It.Mouse,ta=It.Query,ra=It.Vertices,Pt=It.Vector,na=It.MouseConstraint,dr;Nn.create=function(i,A,z){var b={engine:null,render:null,isPaused:!1,selected:[],selectStart:null,selectEnd:null,selectBounds:sn.create(),mousePrevPosition:{x:0,y:0},offset:{x:0,y:0},autoExpand:!0,autoHide:!0,autoRewind:!0,hasExpanded:!1,bodyClass:"",exportIndent:0,clipboard:[],controls:{container:null,worldTree:null},root:dt.create({label:"Root"}),keyBindings:[]};b=Mr.extend(b,z),Nn.instance=b,b.engine=i,b.render=A,b.render?(b.mouse=ea.create(b.render.canvas),b.mouseConstraint=na.create(i,{mouse:b.mouse})):b.mouse={position:{x:0,y:0}},pr&&(b.serializer=pr.create(),Di.removeItem("pauseState")),dr=kt("body"),dt.add(b.root,i.world),i.world.isModified=!0,i.world.parent=null;let l=Ii();return Mn.injectStyles(l,"js-tree-style"),l=Bi(),Mn.injectStyles(l,"matter-inspector-style"),b.keyBind=Mr.chain(mt,p=>{b.keyBindings.push(p)}),ia(b),oa(b),aa(b),sa(b),b};Nn.destroy=function(i){i.controls.worldTree.data("jstree").destroy();var A=[].slice.call(document.body.querySelectorAll(".ins-container, .vakata-context, .jstree-marker"));A.forEach(Mn.domRemove),i.keyBindings.forEach(z=>{mt.unbind(z)}),At.off(i.engine,"beforeUpdate",i.beforeEngineUpdate),i.render&&(At.off(i.render,"afterRender",i.afterRender),At.off(i.mouseConstraint))};var ia=function(i){var A=i.controls,z=kt('<div class="ins-container">'),b=kt('<div class="ins-top-panel">'),l=kt('<div class="ins-control-group">'),p=kt('<input class="ins-search-box" type="search" placeholder="search">'),y=kt('<button class="ins-import-button ins-button">Import</button>'),_=kt('<button class="ins-export-button ins-button">Export</button>'),O=kt('<button class="ins-pause-button ins-button">Pause</button>'),k=kt('<button class="ins-help-button ins-button">Help</button>'),T=kt('<button aria-label="Add composite body" title="Add composite body" class="ins-add-button ins-button">+</button>');l.append(O,k),b.append(l),z.prepend(b,p,T),dr.prepend(z),A.pauseButton=O,A.importButton=y,A.exportButton=_,A.helpButton=k,A.searchBox=p,A.container=z,A.addCompositeButton=T,A.pauseButton.click(function(){Hi(i,!i.isPaused)}),A.exportButton.click(function(){Vi(i)}),A.importButton.click(function(){qi(i)}),A.helpButton.click(function(){Fi(i)}),A.addCompositeButton.click(function(){_a(i)});var w;A.searchBox.keyup(function(){clearTimeout(w),w=setTimeout(function(){var j=A.searchBox.val(),f=A.worldTree.data("jstree");f.search(j)},250)})},Fi=function(){var i=`Matter Tools

`;i+=`Drag nodes in the tree to move them between composites.
`,i+=`Use browser's developer console to inspect selected objects.
`,i+=`Note: selections only render if renderer supports it.

`,i+=`[shift + space] pause or play simulation.
`,i+=`[right click] and drag on empty space to select a region.
`,i+=`[right click] and drag on an object to move it.
`,i+=`[right click + shift] and drag to move whole selection.

`,i+=`[ctrl-c] to copy selected world objects.
`,i+=`[ctrl-v] to paste copied world objects to mouse position.
`,i+=`[del] or [backspace] delete selected objects.

`,i+=`[shift + s] scale-xy selected objects with mouse or arrows.
`,i+=`[shift + s + d] scale-x selected objects with mouse or arrows.
`,i+=`[shift + s + f] scale-y selected objects with mouse or arrows.
`,i+=`[shift + r] rotate selected objects with mouse or arrows.

`,i+=`[shift + q] set selected objects as static (can't be undone).
`,i+=`[shift + h] toggle Matter.Gui.
`,i+=`[shift + y] toggle auto-hide.
`,i+=`[shift + r] toggle auto-rewind on play/pause.

`,i+="[shift + j] show this help message.",alert(i)},sa=function(i){i.keyBind("shift+space",function(){Hi(i,!i.isPaused)}),i.serializer&&(i.keyBind("shift+o",function(){Vi(i)}),i.keyBind("shift+i",function(){qi(i)})),i.keyBind("shift+j",function(){Fi(i)}),i.keyBind("shift+y",function(){i.autoHide=!i.autoHide,dr.toggleClass("ins-auto-hide gui-auto-hide",i.autoHide)}),i.keyBind("shift+r",function(){i.autoRewind=!i.autoRewind,i.autoRewind||Di.removeItem("pauseState")}),i.keyBind("shift+q",function(){for(var A=0;A<i.selected.length;A++){var z=i.selected[A].data;z.type==="body"&&!z.isStatic&&Lr.setStatic(z,!0)}}),i.keyBind("del",function(){Ri(i)}),i.keyBind("backspace",function(){Ri(i)}),i.serializer&&(i.keyBind("ctrl+c",function(){la(i)}),i.keyBind("ctrl+v",function(){da(i)})),kt(document).on("keydown.matterlocal",function(A){A.key==="Backspace"&&!A.target.closest("input,textarea,[contenteditable=true]")&&A.preventDefault()})},aa=function(i){var A=i.engine,z=i.controls,b,l={core:{worker:!1,force_text:!0,check_callback:!0,animation:!1},dnd:{copy:!1},search:{show_only_matches:!0,fuzzy:!1},types:{"#":{valid_children:[]},body:{valid_children:[]},constraint:{valid_children:[]},composite:{valid_children:[]},bodies:{valid_children:["body"]},constraints:{valid_children:["constraint"]},composites:{valid_children:["composite"]}},plugins:["dnd","types","unique","search"]};z.worldTree=kt('<div class="ins-world-tree">').jstree(l),z.container.append(z.worldTree),i.hasExpanded=!1,z.worldTree.on("refresh.jstree",function(){i.autoExpand&&!i.hasExpanded&&(i.hasExpanded=!0,z.worldTree.jstree("open_all"))}),z.worldTree.on("changed.jstree",function(p,y){var _=[],O=z.worldTree.data("jstree");y.action==="select_node"&&(clearTimeout(b),b=setTimeout(function(){y.selected=O.get_selected();for(var k=0;k<y.selected.length;k++){var T=y.selected[k],w=T.split("_")[0],j=T.split("_")[1],f=dt.get(A.world,j,w);switch(w){case"body":case"constraint":case"composite":_.push(f);break}}zt(i,_)},1))}),kt(document).on("dnd_stop.vakata",function(p,y){for(var _=z.worldTree.data("jstree"),O=y.data.nodes,k=0;k<O.length;k++){var T=_.get_node(O[k]),w=_.get_node(_.get_parent(O[k])),j=T.data.compositeId,f=w.data.compositeId;if(j!==f){var C=O[k],N=C.split("_")[0],P=C.split("_")[1],e=dt.get(i.root,P,N),s=dt.get(i.root,j,"composite"),r=dt.get(i.root,f,"composite");dt.move(s,e,r)}}}),z.worldTree.on("dblclick.jstree",function(){for(var p=z.worldTree.data("jstree"),y=p.get_selected(),_=0;_<y.length;_++){var O=y[_],k=O.split("_")[0];switch(k){case"composite":case"composites":case"bodies":case"constraints":for(var T=p.get_node(O).children,w=0;w<T.length;w++)p.select_node(T[w],!1);break}}})},nn=function(i,A){i.bodyClass.indexOf(" "+A)===-1&&(dr.addClass(A),i.bodyClass=" "+dr.attr("class"))},On=function(i,A){for(var z=!1,b=A.split(" "),l=0;l<b.length&&(z=i.bodyClass.indexOf(" "+b[l])!==-1,!z);l++);z&&(dr.removeClass(A),i.bodyClass=" "+dr.attr("class"))},Ln=function(i){return Pt.add(i.mouse.position,i.offset)},oa=function(i){var A=i.engine,z=i.mouse,b=Ln(i),l=i.controls;i.beforeEngineUpdate=function(){b=Ln(i);var p=b.x-i.mousePrevPosition.x,y=mt.isPressed("up")+mt.isPressed("right")-mt.isPressed("down")-mt.isPressed("left"),_=p+y;if(A.world.isModified){var O=zi(i.root,null,!0);pa(l.worldTree.data("jstree"),O),zt(i,[])}if(i.selectStart!==null&&(i.selectEnd.x=b.x,i.selectEnd.y=b.y,sn.update(i.selectBounds,[i.selectStart,i.selectEnd])),mt.shift&&mt.isPressed("r")){var k=.03,T=Math.max(-2,Math.min(2,_))*k;nn(i,"ins-cursor-rotate"),ha(i,T)}else On(i,"ins-cursor-rotate");if(mt.shift&&mt.isPressed("s")){var w=.02,j=1+Math.max(-2,Math.min(2,_))*w;nn(i,"ins-cursor-scale");var f,C;mt.isPressed("d")?(f=j,C=1):mt.isPressed("f")?(f=1,C=j):f=C=j,ua(i,f,C)}else On(i,"ins-cursor-scale");z.button===2?(nn(i,"ins-cursor-move"),fa(i,b.x,b.y)):On(i,"ins-cursor-move"),i.mousePrevPosition=Mr.clone(b)},At.on(i.engine,"beforeUpdate",i.beforeEngineUpdate),i.mouseConstraint&&(At.on(i.mouseConstraint,"mouseup",function(){if(i.selectStart!==null){var p=ta.region(dt.allBodies(A.world),i.selectBounds);zt(i,p)}i.selectStart=null,i.selectEnd=null,At.trigger(i,"selectEnd")}),At.on(i.mouseConstraint,"mousedown",function(){var p=dt.allBodies(A.world),y=dt.allConstraints(A.world),_=mt.shift||mt.control,O=i.controls.worldTree.data("jstree"),k;if(z.button===2){var T=!1;for(k=0;k<p.length;k++){var w=p[k];if(sn.contains(w.bounds,b)&&ra.contains(w.vertices,b)){_?In(i,w):zt(i,[w]),T=!0;break}}if(!T){for(k=0;k<y.length;k++){var j=y[k],f=j.bodyA,C=j.bodyB;if(j.label.indexOf("Mouse Constraint")===-1){var N=j.pointA,P=j.pointB;if(f&&(N=Pt.add(f.position,j.pointA)),C&&(P=Pt.add(C.position,j.pointB)),!(!N||!P)){var e=Pt.magnitudeSquared(Pt.sub(b,N)),s=Pt.magnitudeSquared(Pt.sub(b,P));if(e<100||s<100){_?In(i,j):zt(i,[j]),T=!0;break}}}}T?(i.selectStart=null,i.selectEnd=null):(O.deselect_all(!0),zt(i,[]),i.selectStart=Mr.clone(b),i.selectEnd=Mr.clone(b),sn.update(i.selectBounds,[i.selectStart,i.selectEnd]),At.trigger(i,"selectStart"))}}z.button===2&&i.selected.length>0&&(nn(i,"ins-cursor-move"),ca(i))})),i.render&&(i.afterRender=function(){var p=i.render.controller,y=i.render.context;p.inspector&&p.inspector(i,y)},At.on(i.render,"afterRender",i.afterRender))},Ri=function(i){var A=[],z,b=i.controls.worldTree.data("jstree"),l;for(l=0;l<i.selected.length;l++)z=i.selected[l].data,z!==i.engine.world&&A.push(z);var p=b.get_selected();for(l=0;l<p.length;l++){var y=b.get_node(p[l]);if(y.type==="composite"&&(y=b.get_node(y.children[0]),y.data)){var _=y.data.compositeId;z=dt.get(i.root,_,"composite"),z&&z!==i.engine.world&&(A.push(z),b.delete_node(p[l]))}}dt.remove(i.root,A,!0),zt(i,[])},la=function(i){i.clipboard.length=0;for(var A=0;A<i.selected.length;A++){var z=i.selected[A].data;z.type==="body"&&i.clipboard.push(z)}},da=function(i){if(i.serializer){for(var A=[],z=i.controls.worldTree.data("jstree"),b=0;b<i.clipboard.length;b++){var l=i.clipboard[b],p=pr.clone(i.serializer,l);Lr.translate(p,{x:50,y:50});var y=z.get_node(l.type+"_"+l.id,!1),_=y.data.compositeId,O=dt.get(i.engine.world,_,"composite");dt.add(O,p),A.push(p)}setTimeout(function(){zt(i,A)},200)}},ca=function(i){for(var A=i.selected,z=Ln(i),b,l,p=0;p<A.length;p++)b=A[p],l=b.data,l.position?b.mousedownOffset={x:z.x-l.position.x,y:z.y-l.position.y}:l.pointA&&!l.bodyA?b.mousedownOffset={x:z.x-l.pointA.x,y:z.y-l.pointA.y}:l.pointB&&!l.bodyB&&(b.mousedownOffset={x:z.x-l.pointB.x,y:z.y-l.pointB.y})},fa=function(i,A,z){for(var b=i.selected,l,p,y=0;y<b.length;y++)if(l=b[y],p=l.data,!!l.mousedownOffset)switch(p.type){case"body":var _={x:A-p.position.x-l.mousedownOffset.x,y:z-p.position.y-l.mousedownOffset.y};Lr.translate(p,_),p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y;break;case"constraint":var O=p.pointA;p.bodyA&&(O=p.pointB),O.x=A-l.mousedownOffset.x,O.y=z-l.mousedownOffset.y;var k=p.bodyA?Pt.add(p.bodyA.position,p.pointA):p.pointA,T=p.bodyB?Pt.add(p.bodyB.position,p.pointB):p.pointB;p.length=Pt.magnitude(Pt.sub(k,T));break}},ua=function(i,A,z){for(var b=i.selected,l,p,y=0;y<b.length;y++)switch(l=b[y],p=l.data,p.type){case"body":Lr.scale(p,A,z,p.position),p.circleRadius&&(p.circleRadius*=A);break}},ha=function(i,A){for(var z=i.selected,b,l,p=0;p<z.length;p++)switch(b=z[p],l=b.data,l.type){case"body":Lr.rotate(l,A);break}},Hi=function(i,A){A?(i.autoRewind&&i.serializer&&(zt(i,[]),pr.loadState(i.serializer,i.engine,"pauseState")),i.engine.timing.timeScale=0,i.isPaused=!0,i.controls.pauseButton.text("Play"),At.trigger(i,"paused")):(i.autoRewind&&i.serializer&&pr.saveState(i.serializer,i.engine,"pauseState"),i.engine.timing.timeScale=1,i.isPaused=!1,i.controls.pauseButton.text("Pause"),At.trigger(i,"play"))},zt=function(i,A){var z=i.controls.worldTree.data("jstree"),b,l;for(l=0;l<i.selected.length;l++)b=i.selected[l].data,z.deselect_node(b.type+"_"+b.id,!0);for(i.selected=[],A.length>0&&console.clear(),l=0;l<A.length;l++)b=A[l],b&&(In(i,b),l<5?console.log(b.label+" "+b.id+": %O",b):l===6&&console.warn("Omitted inspecting "+(A.length-5)+" more objects"))},In=function(i,A){if(A){var z=i.controls.worldTree.data("jstree");i.selected.push({data:A}),z.select_node(A.type+"_"+A.id,!0)}},pa=function(i,A){A[0].state=A[0].state||{opened:!0},i.settings.core.data=A,i.refresh(-1)},zi=function(i,A,z){var b=[],l={id:"composite_"+i.id,data:{compositeId:A},type:"composite",text:(i.label?i.label:"Composite")+" "+i.id,li_attr:{class:"jstree-node-type-composite"}},p=ga(i.composites,i.id);return p.id="composites_"+i.id,b.push(p),z?p.children:(p=ma(i.bodies,i.id),p.id="bodies_"+i.id,b.push(p),p=va(i.constraints,i.id),p.id="constraints_"+i.id,b.push(p),l.children=b,l)},ga=function(i,A){for(var z={type:"composites",text:"Composites",data:{compositeId:A},children:[],li_attr:{class:"jstree-node-type-composites"}},b=0;b<i.length;b++){var l=i[b];z.children.push(zi(l,A))}return z},ma=function(i,A){for(var z={type:"bodies",text:"Bodies",data:{compositeId:A},children:[],li_attr:{class:"jstree-node-type-bodies"}},b=0;b<i.length;b++){var l=i[b];z.children.push({type:"body",id:"body_"+l.id,data:{compositeId:A},text:(l.label?l.label:"Body")+" "+l.id,li_attr:{class:"jstree-node-type-body"}})}return z},va=function(i,A){for(var z={type:"constraints",text:"Constraints",data:{compositeId:A},children:[],li_attr:{class:"jstree-node-type-constraints"}},b=0;b<i.length;b++){var l=i[b];z.children.push({type:"constraint",id:"constraint_"+l.id,data:{compositeId:A},text:(l.label?l.label:"Constraint")+" "+l.id,li_attr:{class:"jstree-node-type-constraint"}})}return z},_a=function(i){var A=dt.create();dt.add(i.root,A),i.root.composites.splice(i.root.composites.length-1,1),i.root.composites.unshift(A),dt.setModified(i.engine.world,!0,!0,!1)},Vi=function(){return!1},qi=function(){return!1}});var Ui=ot((Ia,xa)=>{xa.exports=`/*
*	MatterTools.Demo
*/

.matter-demo {
  display: flex;
  background: #14151f;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 50px 0 0 0;
}

.matter-demo,
.matter-demo * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.matter-demo *:focus,
.matter-demo *:active {
  outline: 0;
}

.matter-demo *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.matter-demo *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.matter-demo.matter-demo-inline {
  padding: 0;
  height: inherit;
}

.matter-demo canvas {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  max-width: 100%;
  max-height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-demo.matter-demo-inline canvas {
  max-height: calc(100% - 49px);
}

.matter-is-fullscreen .matter-demo {
  width: 100%;
}

.matter-is-fullscreen .dg.ac,
.matter-is-fullscreen .ins-container {
  display: none;
}

.matter-header-outer {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background: #0e0f19;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matter-demo-inline .matter-header-outer {
  position: static;
  background: transparent;
  z-index: 0;
  width: 100%;
}

.matter-header {
  width: 100%;
  padding: 7px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matter-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.matter-header h1 {
  display: none;
  margin: 0 12px 0 0;
  width: 18px;
  overflow: hidden;
  flex-shrink: 0;
}

.matter-header h1 a {
  color: #c5c5cc;
  font-size: 14px;
  font-weight: 400;
  display: block;
  text-decoration: none;
  padding: 3px 0 2px 0;
  border-bottom: 1px solid transparent;
  white-space: nowrap;
  float: right;
}

.matter-header h1 a:hover,
.matter-header h1 a:focus {
  border-bottom: 1px solid #f5b862;
  color: #fff;
  outline: 0;
}

@media screen and (min-width: 300px) {
  .matter-header h1 {
    display: inline;
  }
}

@media screen and (min-width: 600px) {
  .matter-header h1 {
    width: auto;
    overflow: visible;
  }
}

.btn-home {
  display: none;
}

.matter-demo-title svg {
  fill: #fff;
  width: 14px;
  height: 14px;
  margin: 0px 0 -2px 2px;
}

.matter-link {
  text-decoration: none;
  line-height: 13px;
  margin: 0 -10px 0 0;
  flex-shrink: 0;
}

.matter-link:focus {
  outline: none;
}

.matter-logo {
  height: 33px;
  width: 46px;
}

@media screen and (min-width: 1024px) {
  .matter-logo {
    width: 50px;
  }
}

.matter-logo #m-triangle {
  transform-origin: 14px 856px;
  transition: transform 400ms ease;
}

.matter-link:focus #m-triangle,
.matter-logo:hover #m-triangle {
  transform: rotate(-30deg) translate(-98px, -25px);
}

.matter-logo #m-circle {
  transition: transform 200ms ease;
  transition-delay: 300ms;
}

.matter-link:focus #m-circle,
.matter-logo:hover #m-circle {
  transform: translate(18px, -33px);
}

.matter-logo #m-square {
  transition: transform 150ms ease;
  transition-delay: 400ms;
}

.matter-link:focus #m-square,
.matter-logo:hover #m-square {
  transform: translate(47px, -2px);
}

.matter-toolbar {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 18px 0 0;
}

.matter-select {
  background: transparent;
  color: #c5c5cc;
  font-size: 14px;
  line-height: 33px;
  width: 100%;
  outline: none;
  padding: 0 25px 0 7px;
  margin: 0;
  border: 0;
  border-radius: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-select option {
  background: #fff;
  color: #000;
}

.matter-select-wrapper {
  height: 33px;
  width: 100%;
  min-width: 100px;
  max-width: 175px;
  position: relative;
  display: inline-block;
  margin-right: 4%;
}

.matter-select-wrapper:after {
  content: " ";
  display: block;
  position: absolute;
  pointer-events: none;
  width: 28px;
  height: 100%;
  background: linear-gradient(-90deg, rgb(14 15 25), rgb(14 15 25 / 0));
  right: 23px;
  top: 0;
}

.matter-demo-inline .matter-select-wrapper:after {
  display: none;
}

.matter-select:hover,
.matter-select-wrapper:hover .matter-select {
  color: #fff;
}

.matter-select:focus-visible {
  color: #fff;
}

.matter-select:-moz-focusring {
  color: #fff;
}

.matter-select:focus {
  outline: 0;
}

.matter-select-wrapper svg:hover,
.matter-select-wrapper:hover svg {
  background: #232635;
}

.matter-select-wrapper:hover:after svg {
  fill: #fff;
}

.matter-select-wrapper svg {
  display: block;
  pointer-events: none;
  fill: #cecece;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 6px;
  right: 0;
  border-radius: 5px;
  background: #101119;
}

.matter-btn {
  border: 0;
  background: #0b0c15;
  width: 40px;
  height: 33px;
  border-radius: 2px;
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  color: #c2cad4;
  text-decoration: none;
  text-align: center;
  cursor: default;
  flex-shrink: 0;
  flex-grow: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-btn svg {
  fill: #fff;
  width: 15px;
  height: 15px;
  margin: 2px 0 0 0;
}

.matter-demo-inline .matter-btn {
  background: #0f0f13;
}

.matter-btn:hover {
  background: #1c1f2d;
  outline: none;
}

.matter-btn:active {
  transform: translate(0px, 1px);
}

.matter-btn:focus-visible {
  background: #1c1f2d;
  outline: none;
}

.matter-btn:-moz-focusring {
  background: #1c1f2d;
  outline: none;
}

.matter-btn-tools {
  position: relative;
  display: none;
  font-size: 15px;
}

.matter-btn-tools svg {
  margin-left: -3px;
}

.matter-btn-inspect {
  position: relative;
  display: none;
}

.matter-btn-inspect svg {
  margin-left: -3px;
}

.matter-btn-source {
  display: none;
  font-size: 12px;
  text-align: center;
  line-height: 31px;
}

.matter-btn-fullscreen {
  position: relative;
  font-size: 18px;
}

.matter-btn-fullscreen svg {
  margin-left: -3px;
}

.matter-is-fullscreen .matter-btn-tools,
.matter-is-fullscreen .matter-btn-inspect {
  display: none;
}

.matter-btn-fullscreen:after,
.matter-btn-tools:after,
.matter-btn-inspect:after {
  content: " ";
  position: absolute;
  bottom: 10px;
  width: 3px;
  height: 3px;
  background: #f5df75;
  border-radius: 1px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 100ms ease, transform 100ms ease;
}

.matter-btn-inspect:after {
  left: 31px;
}

.matter-btn-tools:after {
  background: #f45f5f;
  left: 28px;
}

.matter-btn-fullscreen:after {
  background: #76f09b;
  left: 32px;
}

.matter-is-fullscreen .matter-btn-fullscreen:after,
.matter-gui-active .matter-btn-tools:after,
.matter-inspect-active .matter-btn-inspect:after {
  opacity: 1;
  transform: scale(1);
}

.ins-container,
body .dg {
  display: none;
}

@media screen and (min-width: 500px) {
  .ins-container,
  body .dg,
  .matter-btn-tools,
  .matter-btn-inspect,
  .matter-btn-source {
    display: block;
  }
}
`});var Xi=ot((Ba,Ki)=>{"use strict";var Ie=Ki.exports={},Rn=An(),Dn=Bn(),Yt=Jr(),ya=sr(),Gi=ya.Common;Ie._isIOS=window.navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;Ie._matterLink="https://brm.io/matter-js/";Ie.create=function(i){let A=Object.assign({example:{instance:null},examples:[],resetOnOrientation:!1,preventZoom:!1,fullPage:!1,startExample:!0,appendTo:document.body,toolbar:{title:null,url:null,reset:!0,source:!1,inspector:!1,tools:!1,fullscreen:!0,exampleSelect:!1},tools:{inspector:null,gui:null},dom:{}},i||{});return(!i.toolbar||A.examples.length>1&&i.toolbar&&i.toolbar.exampleSelect!==!1)&&(A.toolbar.exampleSelect=!0),Ie._isIOS&&(A.toolbar.fullscreen=!1),Rn||(A.toolbar.tools=!1,A.tools.gui=!1),Dn||(A.toolbar.inspector=!1,A.tools.inspector=!1),A.dom=Ie._createDom(A),Ie._bindDom(A),!A.fullPage&&A.inline!==!1&&A.dom.root.classList.add("matter-demo-inline"),A.appendTo&&A.appendTo.appendChild(A.dom.root),A.startExample&&Ie.start(A,A.startExample),A};Ie.start=function(i,A){A=typeof A=="string"?A:i.examples[0].id,Ie.setExampleById(i,A)};Ie.stop=function(i){i.example&&i.example.instance&&i.example.instance.stop()};Ie.reset=function(i){Gi._nextId=0,Gi._seed=0,Ie.setExample(i,i.example)};Ie.setExampleById=function(i,A){let z=i.examples.filter(b=>b.id===A)[0];Ie.setExample(i,z)};Ie.setExample=function(i,A){if(clearTimeout(i.localToolsTimer),A){let z=i.example.instance;z&&(z.stop(),z.canvas&&z.canvas.parentElement.removeChild(z.canvas)),i.example.instance=null,i.example=A,i.example.instance=z=A.init(i),!z.canvas&&z.render&&(z.canvas=z.render.canvas),z.canvas&&i.dom.root.appendChild(z.canvas),i.dom.exampleSelect.value=A.id,i.dom.buttonSource.href=A.sourceLink||i.url||"#",i.localToolsTimer=setTimeout(function(){i.tools.inspector&&Ie.setInspector(i,!0),i.tools.gui&&Ie.setGui(i,!0)},500)}else Ie.setExample(i,i.examples[0])};Ie.setInspector=function(i,A){if(!A){Ie._destroyTools(i,!0,!1),i.dom.root.classList.toggle("matter-inspect-active",!1);return}let z=i.example.instance;Ie._destroyTools(i,!0,!1),i.dom.root.classList.toggle("matter-inspect-active",!0),i.tools.inspector=Dn.create(z.engine,z.render)};Ie.setGui=function(i,A){if(!A){Ie._destroyTools(i,!1,!0),i.dom.root.classList.toggle("matter-gui-active",!1);return}let z=i.example.instance;Ie._destroyTools(i,!1,!0),i.dom.root.classList.toggle("matter-gui-active",!0),i.tools.gui=Rn.create(z.engine,z.runner,z.render)};Ie._destroyTools=function(i,A,z){let b=i.tools.inspector,l=i.tools.gui;A&&b&&b!==!0&&(Dn.destroy(b),i.tools.inspector=null),z&&l&&l!==!0&&(Rn.destroy(l),i.tools.gui=null)};Ie._toggleFullscreen=function(){return!1};Ie._bindDom=function(i){var A=i.dom;if(window.addEventListener("orientationchange",function(){setTimeout(()=>{i.resetOnOrientation&&Ie.reset(i)},300)}),i.preventZoom){document.body.addEventListener("gesturestart",function(p){p.preventDefault()});var z=!0,b;document.body.addEventListener("touchstart",function(p){z||p.preventDefault(),z=!1,clearTimeout(b),b=setTimeout(function(){z=!0},500)})}if(A.exampleSelect&&A.exampleSelect.addEventListener("change",function(){let p=this.options[this.selectedIndex].value;Ie.setExampleById(i,p)}),A.buttonReset&&A.buttonReset.addEventListener("click",function(){Ie.reset(i)}),A.buttonInspect&&A.buttonInspect.addEventListener("click",function(){var p=!i.tools.inspector;Ie.setInspector(i,p)}),A.buttonTools&&A.buttonTools.addEventListener("click",function(){var p=!i.tools.gui;Ie.setGui(i,p)}),A.buttonFullscreen){A.buttonFullscreen.addEventListener("click",function(){Ie._toggleFullscreen(i)});var l=function(){var p=document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen;document.body.classList.toggle("matter-is-fullscreen",p)};document.addEventListener("webkitfullscreenchange",l),document.addEventListener("mozfullscreenchange",l),document.addEventListener("fullscreenchange",l)}};Ie._createDom=function(i){let A=Ui();Yt.injectStyles(A,"matter-demo-style");let z=document.createElement("div"),b=i.examples.map(y=>`<option value="${y.id}">${y.name}</option>`).join(" ");var l=i.preventZoom&&Ie._isIOS?"prevent-zoom-ios":"";z.innerHTML=`
    <div class="matter-demo ${i.toolbar.title} ${l}">
      <div class="matter-header-outer">
        <header class="matter-header">
          <div class="matter-header-inner">
            <h1 class="matter-demo-title">
              <a href="${i.toolbar.url}" target="_blank">
              ${i.toolbar.title}
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                </svg>
              </a>
            </h1>
            <div class="matter-toolbar">
              <div class="matter-select-wrapper">
                <select aria-label="Select example" title="Select example" class="matter-example-select matter-select">
                  ${b}
                </select>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </div>
              <button class="matter-btn matter-btn-reset" title="Reset">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <a href="#" class="matter-btn matter-btn-source" title="Source" target="_blank">{ }</a>
              <button class="matter-btn matter-btn-tools" title="Tools">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <button class="matter-btn matter-btn-inspect" title="Inspect">
              <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"/>
              </svg>
              </button>
              <button class="matter-btn matter-btn-fullscreen" title="Fullscreen">
                <svg fill="#000000" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
            <a class="matter-link" href="${Ie._matterLink}" title="matter.js" target="_blank">
              <svg class="matter-logo" height="100" viewBox="0 952.04859 330 100" width="268" xmlns="http://www.w3.org/2000/svg">
                <path id="m-triangle" style="fill:#76f09b;" d="m 115.83215,1052.3622 -57.916072,0 -57.916078053812107,0 L 28.958038,1002.2054 57.916077,952.04859 86.874114,1002.2054 Z" />
                <path id="m-square" style="fill:#f55f5f" d="m 168.03172,952.36218 0,100.00002 100,0 0,-100.00002 -100,0 z" />
                <circle id="m-circle" style="fill:#f5b862" r="12.947398" cy="1039.4148" cx="140.28374" />
              </svg>
            </a>
          </div>
        </header>
      </div>
    </div>
  `;let p={root:z.firstElementChild,title:z.querySelector(".matter-demo-title"),header:z.querySelector(".matter-header"),exampleSelect:z.querySelector(".matter-example-select"),buttonReset:z.querySelector(".matter-btn-reset"),buttonSource:z.querySelector(".matter-btn-source"),buttonTools:z.querySelector(".matter-btn-tools"),buttonInspect:z.querySelector(".matter-btn-inspect"),buttonFullscreen:z.querySelector(".matter-btn-fullscreen")};return i.toolbar.title||Yt.domRemove(p.title),i.toolbar.exampleSelect||Yt.domRemove(p.exampleSelect.parentElement),i.toolbar.reset||Yt.domRemove(p.buttonReset),i.toolbar.source||Yt.domRemove(p.buttonSource),i.toolbar.inspector||Yt.domRemove(p.buttonInspect),i.toolbar.tools||Yt.domRemove(p.buttonTools),i.toolbar.fullscreen||Yt.domRemove(p.buttonFullscreen),p}});var Ji=ot((Ra,Yi)=>{Yi.exports={Gui:An(),Inspector:Bn(),Demo:Xi(),Serializer:Zr()}});var Zi=ot((Da,Qi)=>{var Ot=sr(),Fn=Fn||{};Fn.basic=function(){var i=Ot.Engine,A=Ot.Render,z=Ot.Runner,b=Ot.Composites,l=Ot.Common,p=Ot.MouseConstraint,y=Ot.Mouse,_=Ot.World,O=Ot.Bodies,k=i.create(),T=k.world,w=A.create({element:document.body,engine:k,options:{width:800,height:600,showAngleIndicator:!0}});if(!w.context)throw Error("Canvas 2D unavailable");A.run(w);var j=z.create();z.run(j,k);var f=b.stack(20,20,10,5,0,0,function(P,e){var s=Math.round(l.random(1,8));s=s===3?4:s;var r=null;switch(s>2&&l.random()>.7&&(r={radius:10}),Math.round(l.random(0,1))){case 0:return l.random()<.8?O.rectangle(P,e,l.random(25,50),l.random(25,50),{chamfer:r}):O.rectangle(P,e,l.random(80,120),l.random(25,30),{chamfer:r});case 1:return O.polygon(P,e,s,l.random(25,50),{chamfer:r})}});_.add(T,f),_.add(T,[O.rectangle(400,0,800,50,{isStatic:!0}),O.rectangle(400,600,800,50,{isStatic:!0}),O.rectangle(800,300,50,600,{isStatic:!0}),O.rectangle(0,300,50,600,{isStatic:!0})]);var C=y.create(w.canvas),N=p.create(k,{mouse:C,constraint:{stiffness:.2,render:{visible:!1}}});return _.add(T,N),w.mouse=C,A.lookAt(w,{min:{x:0,y:0},max:{x:800,y:600}}),{engine:k,runner:j,render:w,canvas:w.canvas,stop:function(){Ot.Render.stop(w),Ot.Runner.stop(j)}}};Qi.exports=Fn});var jt=sr(),gr=Ji(),wa=Zi(),Hn=tn(),ba=Qr(),Bt,zn=!1,mr=matchMedia("(prefers-reduced-motion: reduce)").matches,$i=jt.Render.run,es=jt.Runner.run;jt.Render.run=function(i){return mr?i:$i(i)};jt.Runner.run=function(i,A){return mr?(i.enabled=!1,i):es(i,A)};var ka=gr.Demo.setExample;gr.Demo.setExample=function(i,A){if(clearTimeout(i.localStaticTimer),i.example?.instance){let z=!!i.tools.inspector,b=!!i.tools.gui;gr.Demo._destroyTools(i,!0,!0),i.tools.inspector=z,i.tools.gui=b}ka(i,A),i.example.instance.canvas.addEventListener("contextlost",z=>{z.preventDefault(),fatal(Error("Canvas context lost"))}),mr&&(jt.Render.world(i.example.instance.render),i.localStaticTimer=setTimeout(Vn,520))};registerCleanup(()=>{zn=!0;try{if(Bt){clearTimeout(Bt.localToolsTimer),clearTimeout(Bt.localStaticTimer),gr.Demo.stop(Bt),gr.Demo._destroyTools(Bt,!0,!0);let i=Bt.example.instance;i&&(i.render.mouse&&jt.Mouse.clearSourceEvents(i.render.mouse),jt.Events.off(i.engine),jt.Events.off(i.render),jt.World.clear(i.engine.world,!1),jt.Engine.clear(i.engine))}}finally{ba.clear(),Hn(document).off(),Hn(window).off(),Hn(document.body).off(),document.body.replaceChildren(),document.querySelectorAll('style[id^="matter-"]').forEach(i=>i.remove())}});if(!document.getElementById("root"))throw Error("Missing preview root");Bt=gr.Demo.create({fullPage:!0,preventZoom:!1,startExample:!0,appendTo:document.getElementById("root"),toolbar:{title:"matter-tools \xB7 \u672C\u5730\u6F14\u793A",url:"#",reset:!0,source:!1,inspector:!0,tools:!0,fullscreen:!1,exampleSelect:!0},tools:{inspector:!0,gui:!0},examples:[{name:"Basic \xB7 50 bodies",id:"basic",init:wa.basic}]});document.querySelectorAll("a").forEach(i=>{i.removeAttribute("href"),i.removeAttribute("target")});var an=document.createElement("div");an.className="offline-note";an.textContent="\u539F MatterTools GUI / Inspector \xB7 \u4EC5\u5F53\u524D\u4F1A\u8BDD\u5FEB\u7167 \xB7 \u65E0\u6587\u4EF6\u5BFC\u5165\u5BFC\u51FA \xB7 Canvas \u50CF\u7D20\u5F85\u9A8C";document.body.append(an);if(mr){let i=document.createElement("button");i.textContent="\u4E3B\u52A8\u64AD\u653E\u7269\u7406\u6A21\u62DF",i.onclick=()=>{if(zn)return;mr=!1;let A=Bt.example.instance;A.runner.enabled=!0,es(A.runner,A.engine),$i(A.render),i.remove()},an.append(i)}function Vn(){mr&&!zn&&(jt.Engine.update(Bt.example.instance.engine,0),jt.Render.world(Bt.example.instance.render))}document.addEventListener("input",()=>{Vn()});document.addEventListener("click",()=>{Vn()});document.addEventListener("visibilitychange",()=>{document.hidden?pauseTasks():resumeTasks()});})();
/*!
 * matter-js 0.16.1 by @liabru 2021-01-31
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * # ResurrectJS
 * @version 1.0.3
 * @license Public Domain
 *
 * ResurrectJS preserves object behavior (prototypes) and reference
 * circularity with a special JSON encoding. Unlike regular JSON,
 * Date, RegExp, DOM objects, and `undefined` are also properly
 * preserved.
 *
 * ## Examples
 *
 * function Foo() {}
 * Foo.prototype.greet = function() { return "hello"; };
 *
 * // Behavior is preserved:
 * var necromancer = new Resurrect();
 * var json = necromancer.stringify(new Foo());
 * var foo = necromancer.resurrect(json);
 * foo.greet();  // => "hello"
 *
 * // References to the same object are preserved:
 * json = necromancer.stringify([foo, foo]);
 * var array = necromancer.resurrect(json);
 * array[0] === array[1];  // => true
 * array[1].greet();  // => "hello"
 *
 * // Dates are restored properly
 * json = necromancer.stringify(new Date());
 * var date = necromancer.resurrect(json);
 * Object.prototype.toString.call(date);  // => "[object Date]"
 *
 * ## Options
 *
 * Options are provided to the constructor as an object with these
 * properties:
 *
 *   prefix ('#'): A prefix string used for temporary properties added
 *     to objects during serialization and deserialization. It is
 *     important that you don't use any properties beginning with this
 *     string. This option must be consistent between both
 *     serialization and deserialization.
 *
 *   cleanup (false): Perform full property cleanup after both
 *     serialization and deserialization using the `delete`
 *     operator. This may cause performance penalties (breaking hidden
 *     classes in V8) on objects that ResurrectJS touches, so enable
 *     with care.
 *
 *   revive (true): Restore behavior (__proto__) to objects that have
 *     been resurrected. If this is set to false during serialization,
 *     resurrection information will not be encoded. You still get
 *     circularity and Date support.
 *
 *   resolver (Resurrect.NamespaceResolver(window)): Converts between
 *     a name and a prototype. Create a custom resolver if your
 *     constructors are not stored in global variables. The resolver
 *     has two methods: getName(object) and getPrototype(string).
 *
 * For example,
 *
 * var necromancer = new Resurrect({
 *     prefix: '__#',
 *     cleanup: true
 * });
 *
 * ## Caveats
 *
 *   * With the default resolver, all constructors must be named and
 *   stored in the global variable under that name. This is required
 *   so that the prototypes can be looked up and reconnected at
 *   resurrection time.
 *
 *   * The wrapper objects Boolean, String, and Number will be
 *   unwrapped. This means extra properties added to these objects
 *   will not be preserved.
 *
 *   * Functions cannot ever be serialized. Resurrect will throw an
 *   error if a function is found when traversing a data structure.
 *
 * @see http://nullprogram.com/blog/2013/03/28/
 */
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
/*!
 * jsTree 3.3.11
 * http://jstree.com/
 *
 * Copyright (c) 2014 Ivan Bozhanov (http://vakata.com)
 *
 * Licensed same as jquery - under the terms of the MIT License
 *   http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * if using jslint please allow for the jQuery global and use following options:
 * jslint: loopfunc: true, browser: true, ass: true, bitwise: true, continue: true, nomen: true, plusplus: true, regexp: true, unparam: true, todo: true, white: true
 */
/*!
oi = obj.children("i:visible"),
ai = a.children("i:visible"),
w1 = oi.width() * oi.length,
w2 = ai.width() * ai.length,
*/
/*!
if(!('oncontextmenu' in document.body) && ('ontouchstart' in document.body)) {
	var el = null, tm = null;
	this.element
		.on("touchstart", ".jstree-anchor", function (e) {
			el = e.currentTarget;
			tm = +new Date();
			$(document).one("touchend", function (e) {
				e.target = document.elementFromPoint(e.originalEvent.targetTouches[0].pageX - window.pageXOffset, e.originalEvent.targetTouches[0].pageY - window.pageYOffset);
				e.currentTarget = e.target;
				tm = ((+(new Date())) - tm);
				if(e.target === el && tm > 600 && tm < 1000) {
					e.preventDefault();
					$(el).trigger('contextmenu', e);
				}
				el = null;
				tm = null;
			});
		});
}
*/

}catch(e){fatal(e)}})();