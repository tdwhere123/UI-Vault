(function(){"use strict";var Ln={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs;function Ld(){if(vs)return El;vs=1;var m=Symbol.for("react.transitional.element"),T=Symbol.for("react.fragment");function E(o,M,H){var Q=null;if(H!==void 0&&(Q=""+H),M.key!==void 0&&(Q=""+M.key),"key"in M){H={};for(var P in M)P!=="key"&&(H[P]=M[P])}else H=M;return M=H.ref,{$$typeof:m,type:o,key:Q,ref:M!==void 0?M:null,props:H}}return El.Fragment=T,El.jsx=E,El.jsxs=E,El}var _s;function Zd(){return _s||(_s=1,Ln.exports=Ld()),Ln.exports}var s=Zd(),Zn={exports:{}},I={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys;function Vd(){if(ys)return I;ys=1;var m=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),O=Symbol.iterator;function J(d){return d===null||typeof d!="object"?null:(d=O&&d[O]||d["@@iterator"],typeof d=="function"?d:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vt=Object.assign,mt={};function R(d,j,C){this.props=d,this.context=j,this.refs=mt,this.updater=C||W}R.prototype.isReactComponent={},R.prototype.setState=function(d,j){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,j,"setState")},R.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function $(){}$.prototype=R.prototype;function Z(d,j,C){this.props=d,this.context=j,this.refs=mt,this.updater=C||W}var it=Z.prototype=new $;it.constructor=Z,vt(it,R.prototype),it.isPureReactComponent=!0;var ut=Array.isArray;function tt(){}var w={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function nt(d,j,C){var Y=C.ref;return{$$typeof:m,type:d,key:j,ref:Y!==void 0?Y:null,props:C}}function $t(d,j){return nt(d.type,j,d.props)}function Xt(d){return typeof d=="object"&&d!==null&&d.$$typeof===m}function Ct(d){var j={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(C){return j[C]})}var Ue=/\/+/g;function ne(d,j){return typeof d=="object"&&d!==null&&d.key!=null?Ct(""+d.key):j.toString(36)}function Ft(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(tt,tt):(d.status="pending",d.then(function(j){d.status==="pending"&&(d.status="fulfilled",d.value=j)},function(j){d.status==="pending"&&(d.status="rejected",d.reason=j)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function x(d,j,C,Y,F){var at=typeof d;(at==="undefined"||at==="boolean")&&(d=null);var N=!1;if(d===null)N=!0;else switch(at){case"bigint":case"string":case"number":N=!0;break;case"object":switch(d.$$typeof){case m:case T:N=!0;break;case k:return N=d._init,x(N(d._payload),j,C,Y,F)}}if(N)return F=F(d),N=Y===""?"."+ne(d,0):Y,ut(F)?(C="",N!=null&&(C=N.replace(Ue,"$&/")+"/"),x(F,j,C,"",function(wa){return wa})):F!=null&&(Xt(F)&&(F=$t(F,C+(F.key==null||d&&d.key===F.key?"":(""+F.key).replace(Ue,"$&/")+"/")+N)),j.push(F)),1;N=0;var Tt=Y===""?".":Y+":";if(ut(d))for(var xt=0;xt<d.length;xt++)Y=d[xt],at=Tt+ne(Y,xt),N+=x(Y,j,C,at,F);else if(xt=J(d),typeof xt=="function")for(d=xt.call(d),xt=0;!(Y=d.next()).done;)Y=Y.value,at=Tt+ne(Y,xt++),N+=x(Y,j,C,at,F);else if(at==="object"){if(typeof d.then=="function")return x(Ft(d),j,C,Y,F);throw j=String(d),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return N}function D(d,j,C){if(d==null)return d;var Y=[],F=0;return x(d,Y,"","",function(at){return j.call(C,at,F++)}),Y}function V(d){if(d._status===-1){var j=d._result;j=j(),j.then(function(C){(d._status===0||d._status===-1)&&(d._status=1,d._result=C)},function(C){(d._status===0||d._status===-1)&&(d._status=2,d._result=C)}),d._status===-1&&(d._status=0,d._result=j)}if(d._status===1)return d._result.default;throw d._result}var pt=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},_t={map:D,forEach:function(d,j,C){D(d,function(){j.apply(this,arguments)},C)},count:function(d){var j=0;return D(d,function(){j++}),j},toArray:function(d){return D(d,function(j){return j})||[]},only:function(d){if(!Xt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return I.Activity=U,I.Children=_t,I.Component=R,I.Fragment=E,I.Profiler=M,I.PureComponent=Z,I.StrictMode=o,I.Suspense=A,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,I.__COMPILER_RUNTIME={__proto__:null,c:function(d){return w.H.useMemoCache(d)}},I.cache=function(d){return function(){return d.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(d,j,C){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var Y=vt({},d.props),F=d.key;if(j!=null)for(at in j.key!==void 0&&(F=""+j.key),j)!G.call(j,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&j.ref===void 0||(Y[at]=j[at]);var at=arguments.length-2;if(at===1)Y.children=C;else if(1<at){for(var N=Array(at),Tt=0;Tt<at;Tt++)N[Tt]=arguments[Tt+2];Y.children=N}return nt(d.type,F,Y)},I.createContext=function(d){return d={$$typeof:Q,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:H,_context:d},d},I.createElement=function(d,j,C){var Y,F={},at=null;if(j!=null)for(Y in j.key!==void 0&&(at=""+j.key),j)G.call(j,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(F[Y]=j[Y]);var N=arguments.length-2;if(N===1)F.children=C;else if(1<N){for(var Tt=Array(N),xt=0;xt<N;xt++)Tt[xt]=arguments[xt+2];F.children=Tt}if(d&&d.defaultProps)for(Y in N=d.defaultProps,N)F[Y]===void 0&&(F[Y]=N[Y]);return nt(d,at,F)},I.createRef=function(){return{current:null}},I.forwardRef=function(d){return{$$typeof:P,render:d}},I.isValidElement=Xt,I.lazy=function(d){return{$$typeof:k,_payload:{_status:-1,_result:d},_init:V}},I.memo=function(d,j){return{$$typeof:_,type:d,compare:j===void 0?null:j}},I.startTransition=function(d){var j=w.T,C={};w.T=C;try{var Y=d(),F=w.S;F!==null&&F(C,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(tt,pt)}catch(at){pt(at)}finally{j!==null&&C.types!==null&&(j.types=C.types),w.T=j}},I.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},I.use=function(d){return w.H.use(d)},I.useActionState=function(d,j,C){return w.H.useActionState(d,j,C)},I.useCallback=function(d,j){return w.H.useCallback(d,j)},I.useContext=function(d){return w.H.useContext(d)},I.useDebugValue=function(){},I.useDeferredValue=function(d,j){return w.H.useDeferredValue(d,j)},I.useEffect=function(d,j){return w.H.useEffect(d,j)},I.useEffectEvent=function(d){return w.H.useEffectEvent(d)},I.useId=function(){return w.H.useId()},I.useImperativeHandle=function(d,j,C){return w.H.useImperativeHandle(d,j,C)},I.useInsertionEffect=function(d,j){return w.H.useInsertionEffect(d,j)},I.useLayoutEffect=function(d,j){return w.H.useLayoutEffect(d,j)},I.useMemo=function(d,j){return w.H.useMemo(d,j)},I.useOptimistic=function(d,j){return w.H.useOptimistic(d,j)},I.useReducer=function(d,j,C){return w.H.useReducer(d,j,C)},I.useRef=function(d){return w.H.useRef(d)},I.useState=function(d){return w.H.useState(d)},I.useSyncExternalStore=function(d,j,C){return w.H.useSyncExternalStore(d,j,C)},I.useTransition=function(){return w.H.useTransition()},I.version="19.2.0",I}var bs;function Vn(){return bs||(bs=1,Zn.exports=Vd()),Zn.exports}var B=Vn(),Kn={exports:{}},Al={},Jn={exports:{}},$n={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs;function Kd(){return xs||(xs=1,(function(m){function T(x,D){var V=x.length;x.push(D);t:for(;0<V;){var pt=V-1>>>1,_t=x[pt];if(0<M(_t,D))x[pt]=D,x[V]=_t,V=pt;else break t}}function E(x){return x.length===0?null:x[0]}function o(x){if(x.length===0)return null;var D=x[0],V=x.pop();if(V!==D){x[0]=V;t:for(var pt=0,_t=x.length,d=_t>>>1;pt<d;){var j=2*(pt+1)-1,C=x[j],Y=j+1,F=x[Y];if(0>M(C,V))Y<_t&&0>M(F,C)?(x[pt]=F,x[Y]=V,pt=Y):(x[pt]=C,x[j]=V,pt=j);else if(Y<_t&&0>M(F,V))x[pt]=F,x[Y]=V,pt=Y;else break t}}return D}function M(x,D){var V=x.sortIndex-D.sortIndex;return V!==0?V:x.id-D.id}if(m.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var H=performance;m.unstable_now=function(){return H.now()}}else{var Q=Date,P=Q.now();m.unstable_now=function(){return Q.now()-P}}var A=[],_=[],k=1,U=null,O=3,J=!1,W=!1,vt=!1,mt=!1,R=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function it(x){for(var D=E(_);D!==null;){if(D.callback===null)o(_);else if(D.startTime<=x)o(_),D.sortIndex=D.expirationTime,T(A,D);else break;D=E(_)}}function ut(x){if(vt=!1,it(x),!W)if(E(A)!==null)W=!0,tt||(tt=!0,Ct());else{var D=E(_);D!==null&&Ft(ut,D.startTime-x)}}var tt=!1,w=-1,G=5,nt=-1;function $t(){return mt?!0:!(m.unstable_now()-nt<G)}function Xt(){if(mt=!1,tt){var x=m.unstable_now();nt=x;var D=!0;try{t:{W=!1,vt&&(vt=!1,$(w),w=-1),J=!0;var V=O;try{e:{for(it(x),U=E(A);U!==null&&!(U.expirationTime>x&&$t());){var pt=U.callback;if(typeof pt=="function"){U.callback=null,O=U.priorityLevel;var _t=pt(U.expirationTime<=x);if(x=m.unstable_now(),typeof _t=="function"){U.callback=_t,it(x),D=!0;break e}U===E(A)&&o(A),it(x)}else o(A);U=E(A)}if(U!==null)D=!0;else{var d=E(_);d!==null&&Ft(ut,d.startTime-x),D=!1}}break t}finally{U=null,O=V,J=!1}D=void 0}}finally{D?Ct():tt=!1}}}var Ct;if(typeof Z=="function")Ct=function(){Z(Xt)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,ne=Ue.port2;Ue.port1.onmessage=Xt,Ct=function(){ne.postMessage(null)}}else Ct=function(){R(Xt,0)};function Ft(x,D){w=R(function(){x(m.unstable_now())},D)}m.unstable_IdlePriority=5,m.unstable_ImmediatePriority=1,m.unstable_LowPriority=4,m.unstable_NormalPriority=3,m.unstable_Profiling=null,m.unstable_UserBlockingPriority=2,m.unstable_cancelCallback=function(x){x.callback=null},m.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<x?Math.floor(1e3/x):5},m.unstable_getCurrentPriorityLevel=function(){return O},m.unstable_next=function(x){switch(O){case 1:case 2:case 3:var D=3;break;default:D=O}var V=O;O=D;try{return x()}finally{O=V}},m.unstable_requestPaint=function(){mt=!0},m.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var V=O;O=x;try{return D()}finally{O=V}},m.unstable_scheduleCallback=function(x,D,V){var pt=m.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?pt+V:pt):V=pt,x){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=V+_t,x={id:k++,callback:D,priorityLevel:x,startTime:V,expirationTime:_t,sortIndex:-1},V>pt?(x.sortIndex=V,T(_,x),E(A)===null&&x===E(_)&&(vt?($(w),w=-1):vt=!0,Ft(ut,V-pt))):(x.sortIndex=_t,T(A,x),W||J||(W=!0,tt||(tt=!0,Ct()))),x},m.unstable_shouldYield=$t,m.unstable_wrapCallback=function(x){var D=O;return function(){var V=O;O=D;try{return x.apply(this,arguments)}finally{O=V}}}})($n)),$n}var Ss;function Jd(){return Ss||(Ss=1,Jn.exports=Kd()),Jn.exports}var Wn={exports:{}},Jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws;function $d(){if(ws)return Jt;ws=1;var m=Vn();function T(A){var _="https://react.dev/errors/"+A;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)_+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+A+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var o={d:{f:E,r:function(){throw Error(T(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},M=Symbol.for("react.portal");function H(A,_,k){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:U==null?null:""+U,children:A,containerInfo:_,implementation:k}}var Q=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(A,_){if(A==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Jt.createPortal=function(A,_){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(T(299));return H(A,_,null,k)},Jt.flushSync=function(A){var _=Q.T,k=o.p;try{if(Q.T=null,o.p=2,A)return A()}finally{Q.T=_,o.p=k,o.d.f()}},Jt.preconnect=function(A,_){typeof A=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,o.d.C(A,_))},Jt.prefetchDNS=function(A){typeof A=="string"&&o.d.D(A)},Jt.preinit=function(A,_){if(typeof A=="string"&&_&&typeof _.as=="string"){var k=_.as,U=P(k,_.crossOrigin),O=typeof _.integrity=="string"?_.integrity:void 0,J=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;k==="style"?o.d.S(A,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:U,integrity:O,fetchPriority:J}):k==="script"&&o.d.X(A,{crossOrigin:U,integrity:O,fetchPriority:J,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Jt.preinitModule=function(A,_){if(typeof A=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var k=P(_.as,_.crossOrigin);o.d.M(A,{crossOrigin:k,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&o.d.M(A)},Jt.preload=function(A,_){if(typeof A=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var k=_.as,U=P(k,_.crossOrigin);o.d.L(A,k,{crossOrigin:U,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Jt.preloadModule=function(A,_){if(typeof A=="string")if(_){var k=P(_.as,_.crossOrigin);o.d.m(A,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:k,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else o.d.m(A)},Jt.requestFormReset=function(A){o.d.r(A)},Jt.unstable_batchedUpdates=function(A,_){return A(_)},Jt.useFormState=function(A,_,k){return Q.H.useFormState(A,_,k)},Jt.useFormStatus=function(){return Q.H.useHostTransitionStatus()},Jt.version="19.2.0",Jt}var zs;function Wd(){if(zs)return Wn.exports;zs=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(T){console.error(T)}}return m(),Wn.exports=$d(),Wn.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js;function Fd(){if(js)return Al;js=1;var m=Jd(),T=Vn(),E=Wd();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function H(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Q(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function P(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function A(t){if(H(t)!==t)throw Error(o(188))}function _(t){var e=t.alternate;if(!e){if(e=H(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,l=e;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return A(i),t;if(n===l)return A(i),e;n=n.sibling}throw Error(o(188))}if(a.return!==l.return)a=i,l=n;else{for(var u=!1,c=i.child;c;){if(c===a){u=!0,a=i,l=n;break}if(c===l){u=!0,l=i,a=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===a){u=!0,a=n,l=i;break}if(c===l){u=!0,l=n,a=i;break}c=c.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function k(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=k(t),e!==null)return e;t=t.sibling}return null}var U=Object.assign,O=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),$t=Symbol.for("react.memo_cache_sentinel"),Xt=Symbol.iterator;function Ct(t){return t===null||typeof t!="object"?null:(t=Xt&&t[Xt]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vt:return"Fragment";case R:return"Profiler";case mt:return"StrictMode";case ut:return"Suspense";case tt:return"SuspenseList";case nt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case W:return"Portal";case Z:return t.displayName||"Context";case $:return(t._context.displayName||"Context")+".Consumer";case it:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case w:return e=t.displayName||null,e!==null?e:ne(t.type)||"Memo";case G:e=t._payload,t=t._init;try{return ne(t(e))}catch{}}return null}var Ft=Array.isArray,x=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},pt=[],_t=-1;function d(t){return{current:t}}function j(t){0>_t||(t.current=pt[_t],pt[_t]=null,_t--)}function C(t,e){_t++,pt[_t]=t.current,t.current=e}var Y=d(null),F=d(null),at=d(null),N=d(null);function Tt(t,e){switch(C(at,e),C(F,t),C(Y,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?hd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=hd(e),t=md(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Y),C(Y,t)}function xt(){j(Y),j(F),j(at)}function wa(t){t.memoizedState!==null&&C(N,t);var e=Y.current,a=md(e,t.type);e!==a&&(C(F,t),C(Y,a))}function ji(t){F.current===t&&(j(Y),j(F)),N.current===t&&(j(N),yi._currentValue=V)}var Pn,Gs;function za(t){if(Pn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Pn=e&&e[1]||"",Gs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pn+t+Gs}var tu=!1;function eu(t,e){if(!t||tu)return"";tu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(y){var v=y}Reflect.construct(t,[],z)}else{try{z.call()}catch(y){v=y}t.call(z.prototype)}}else{try{throw Error()}catch(y){v=y}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(y){if(y&&v&&typeof y.stack=="string")return[y.stack,v.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var r=u.split(`
`),g=c.split(`
`);for(i=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(l===r.length||i===g.length)for(l=r.length-1,i=g.length-1;1<=l&&0<=i&&r[l]!==g[i];)i--;for(;1<=l&&0<=i;l--,i--)if(r[l]!==g[i]){if(l!==1||i!==1)do if(l--,i--,0>i||r[l]!==g[i]){var b=`
`+r[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=i);break}}}finally{tu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?za(a):""}function K0(t,e){switch(t.tag){case 26:case 27:case 5:return za(t.type);case 16:return za("Lazy");case 13:return t.child!==e&&e!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return eu(t.type,!1);case 11:return eu(t.type.render,!1);case 1:return eu(t.type,!0);case 31:return za("Activity");default:return""}}function Xs(t){try{var e="",a=null;do e+=K0(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var au=Object.prototype.hasOwnProperty,lu=m.unstable_scheduleCallback,iu=m.unstable_cancelCallback,J0=m.unstable_shouldYield,$0=m.unstable_requestPaint,ue=m.unstable_now,W0=m.unstable_getCurrentPriorityLevel,Qs=m.unstable_ImmediatePriority,Ls=m.unstable_UserBlockingPriority,Ti=m.unstable_NormalPriority,F0=m.unstable_LowPriority,Zs=m.unstable_IdlePriority,I0=m.log,P0=m.unstable_setDisableYieldValue,Ol=null,ce=null;function Ie(t){if(typeof I0=="function"&&P0(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Ol,t)}catch{}}var se=Math.clz32?Math.clz32:ah,th=Math.log,eh=Math.LN2;function ah(t){return t>>>=0,t===0?32:31-(th(t)/eh|0)|0}var Ei=256,Ai=262144,Ni=4194304;function ja(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mi(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~n,l!==0?i=ja(l):(u&=c,u!==0?i=ja(u):a||(a=c&~t,a!==0&&(i=ja(a))))):(c=l&~n,c!==0?i=ja(c):u!==0?i=ja(u):a||(a=l&~t,a!==0&&(i=ja(a)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:i}function Dl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function lh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vs(){var t=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),t}function nu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ul(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ih(t,e,a,l,i,n){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,r=t.expirationTimes,g=t.hiddenUpdates;for(a=u&~a;0<a;){var b=31-se(a),z=1<<b;c[b]=0,r[b]=-1;var v=g[b];if(v!==null)for(g[b]=null,b=0;b<v.length;b++){var y=v[b];y!==null&&(y.lane&=-536870913)}a&=~z}l!==0&&Ks(t,l,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~e))}function Ks(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-se(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Js(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-se(a),i=1<<l;i&e|t[l]&e&&(t[l]|=e),a&=~i}}function $s(t,e){var a=e&-e;return a=(a&42)!==0?1:uu(a),(a&(t.suspendedLanes|e))!==0?0:a}function uu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function cu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:kd(t.type))}function Fs(t,e){var a=D.p;try{return D.p=t,e()}finally{D.p=a}}var Pe=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Pe,It="__reactProps$"+Pe,Qa="__reactContainer$"+Pe,su="__reactEvents$"+Pe,nh="__reactListeners$"+Pe,uh="__reactHandles$"+Pe,Is="__reactResources$"+Pe,Cl="__reactMarker$"+Pe;function ru(t){delete t[Qt],delete t[It],delete t[su],delete t[nh],delete t[uh]}function La(t){var e=t[Qt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Qa]||a[Qt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=xd(t);t!==null;){if(a=t[Qt])return a;t=xd(t)}return e}t=a,a=t.parentNode}return null}function Za(t){if(t=t[Qt]||t[Qa]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Rl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Va(t){var e=t[Is];return e||(e=t[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[Cl]=!0}var Ps=new Set,tr={};function Ta(t,e){Ka(t,e),Ka(t+"Capture",e)}function Ka(t,e){for(tr[t]=e,t=0;t<e.length;t++)Ps.add(e[t])}var ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),er={},ar={};function sh(t){return au.call(ar,t)?!0:au.call(er,t)?!1:ch.test(t)?ar[t]=!0:(er[t]=!0,!1)}function Oi(t,e,a){if(sh(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Di(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ce(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function ge(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lr(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rh(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,n.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ou(t){if(!t._valueTracker){var e=lr(t)?"checked":"value";t._valueTracker=rh(t,e,""+t[e])}}function ir(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=lr(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Ui(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oh=/[\n"\\]/g;function ve(t){return t.replace(oh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fu(t,e,a,l,i,n,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ge(e)):t.value!==""+ge(e)&&(t.value=""+ge(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?du(t,u,ge(e)):a!=null?du(t,u,ge(a)):l!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ge(c):t.removeAttribute("name")}function nr(t,e,a,l,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){ou(t);return}a=a!=null?""+ge(a):"",e=e!=null?""+ge(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),ou(t)}function du(t,e,a){e==="number"&&Ui(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ja(t,e,a,l){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ur(t,e,a){if(e!=null&&(e=""+ge(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ge(a):""}function cr(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ft(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ge(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),ou(t)}function $a(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var fh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sr(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||fh.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function rr(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&a[i]!==l&&sr(t,i,l)}else for(var n in e)e.hasOwnProperty(n)&&sr(t,n,e[n])}function hu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ci(t){return hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Re(){}var mu=null;function pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wa=null,Fa=null;function or(t){var e=Za(t);if(e&&(t=e.stateNode)){var a=t[It]||null;t:switch(t=e.stateNode,e.type){case"input":if(fu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var i=l[It]||null;if(!i)throw Error(o(90));fu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&ir(l)}break t;case"textarea":ur(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ja(t,!!a.multiple,e,!1)}}}var gu=!1;function fr(t,e,a){if(gu)return t(e,a);gu=!0;try{var l=t(e);return l}finally{if(gu=!1,(Wa!==null||Fa!==null)&&(Sn(),Wa&&(e=Wa,t=Fa,Fa=Wa=null,or(e),t)))for(e=0;e<t.length;e++)or(t[e])}}function Hl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[It]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(He)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){vu=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{vu=!1}var ta=null,_u=null,Ri=null;function dr(){if(Ri)return Ri;var t,e=_u,a=e.length,l,i="value"in ta?ta.value:ta.textContent,n=i.length;for(t=0;t<a&&e[t]===i[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===i[n-l];l++);return Ri=i.slice(t,1<l?1-l:void 0)}function Hi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ki(){return!0}function hr(){return!1}function Pt(t){function e(a,l,i,n,u){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ki:hr,this.isPropagationStopped=hr,this}return U(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=Pt(Ea),Bl=U({},Ea,{view:0,detail:0}),mh=Pt(Bl),yu,bu,ql,qi=U({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ql&&(ql&&t.type==="mousemove"?(yu=t.screenX-ql.screenX,bu=t.screenY-ql.screenY):bu=yu=0,ql=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),mr=Pt(qi),ph=U({},qi,{dataTransfer:0}),gh=Pt(ph),vh=U({},Bl,{relatedTarget:0}),xu=Pt(vh),_h=U({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),yh=Pt(_h),bh=U({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xh=Pt(bh),Sh=U({},Ea,{data:0}),pr=Pt(Sh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Th(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jh[t])?!!e[t]:!1}function Su(){return Th}var Eh=U({},Bl,{key:function(t){if(t.key){var e=wh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?Hi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ah=Pt(Eh),Nh=U({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gr=Pt(Nh),Mh=U({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Oh=Pt(Mh),Dh=U({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=Pt(Dh),Ch=U({},qi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rh=Pt(Ch),Hh=U({},Ea,{newState:0,oldState:0}),kh=Pt(Hh),Bh=[9,13,27,32],wu=He&&"CompositionEvent"in window,Yl=null;He&&"documentMode"in document&&(Yl=document.documentMode);var qh=He&&"TextEvent"in window&&!Yl,vr=He&&(!wu||Yl&&8<Yl&&11>=Yl),_r=" ",yr=!1;function br(t,e){switch(t){case"keyup":return Bh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ia=!1;function Yh(t,e){switch(t){case"compositionend":return xr(e);case"keypress":return e.which!==32?null:(yr=!0,_r);case"textInput":return t=e.data,t===_r&&yr?null:t;default:return null}}function Gh(t,e){if(Ia)return t==="compositionend"||!wu&&br(t,e)?(t=dr(),Ri=_u=ta=null,Ia=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vr&&e.locale!=="ko"?null:e.data;default:return null}}var Xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xh[t.type]:e==="textarea"}function wr(t,e,a,l){Wa?Fa?Fa.push(l):Fa=[l]:Wa=l,e=Nn(e,"onChange"),0<e.length&&(a=new Bi("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Gl=null,Xl=null;function Qh(t){cd(t,0)}function Yi(t){var e=Rl(t);if(ir(e))return t}function zr(t,e){if(t==="change")return e}var jr=!1;if(He){var zu;if(He){var ju="oninput"in document;if(!ju){var Tr=document.createElement("div");Tr.setAttribute("oninput","return;"),ju=typeof Tr.oninput=="function"}zu=ju}else zu=!1;jr=zu&&(!document.documentMode||9<document.documentMode)}function Er(){Gl&&(Gl.detachEvent("onpropertychange",Ar),Xl=Gl=null)}function Ar(t){if(t.propertyName==="value"&&Yi(Xl)){var e=[];wr(e,Xl,t,pu(t)),fr(Qh,e)}}function Lh(t,e,a){t==="focusin"?(Er(),Gl=e,Xl=a,Gl.attachEvent("onpropertychange",Ar)):t==="focusout"&&Er()}function Zh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yi(Xl)}function Vh(t,e){if(t==="click")return Yi(e)}function Kh(t,e){if(t==="input"||t==="change")return Yi(e)}function Jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Jh;function Ql(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!au.call(e,i)||!re(t[i],e[i]))return!1}return!0}function Nr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mr(t,e){var a=Nr(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Nr(a)}}function Or(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Or(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ui(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ui(t.document)}return e}function Tu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $h=He&&"documentMode"in document&&11>=document.documentMode,Pa=null,Eu=null,Ll=null,Au=!1;function Ur(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Pa==null||Pa!==Ui(l)||(l=Pa,"selectionStart"in l&&Tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Ql(Ll,l)||(Ll=l,l=Nn(Eu,"onSelect"),0<l.length&&(e=new Bi("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Pa)))}function Aa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var tl={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},Nu={},Cr={};He&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Na(t){if(Nu[t])return Nu[t];if(!tl[t])return t;var e=tl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Cr)return Nu[t]=e[a];return t}var Rr=Na("animationend"),Hr=Na("animationiteration"),kr=Na("animationstart"),Wh=Na("transitionrun"),Fh=Na("transitionstart"),Ih=Na("transitioncancel"),Br=Na("transitionend"),qr=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function Te(t,e){qr.set(t,e),Ta(e,[t])}var Gi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_e=[],el=0,Ou=0;function Xi(){for(var t=el,e=Ou=el=0;e<t;){var a=_e[e];_e[e++]=null;var l=_e[e];_e[e++]=null;var i=_e[e];_e[e++]=null;var n=_e[e];if(_e[e++]=null,l!==null&&i!==null){var u=l.pending;u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i}n!==0&&Yr(a,i,n)}}function Qi(t,e,a,l){_e[el++]=t,_e[el++]=e,_e[el++]=a,_e[el++]=l,Ou|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Du(t,e,a,l){return Qi(t,e,a,l),Li(t)}function Ma(t,e){return Qi(t,null,null,e),Li(t)}function Yr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=t.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-se(a),t=n.hiddenUpdates,l=t[i],l===null?t[i]=[e]:l.push(e),e.lane=a|536870912),n):null}function Li(t){if(50<di)throw di=0,Gc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var al={};function Ph(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oe(t,e,a,l){return new Ph(t,e,a,l)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ke(t,e){var a=t.alternate;return a===null?(a=oe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gr(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zi(t,e,a,l,i,n){var u=0;if(l=t,typeof t=="function")Uu(t)&&(u=1);else if(typeof t=="string")u=ip(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case nt:return t=oe(31,a,e,i),t.elementType=nt,t.lanes=n,t;case vt:return Oa(a.children,i,n,e);case mt:u=8,i|=24;break;case R:return t=oe(12,a,e,i|2),t.elementType=R,t.lanes=n,t;case ut:return t=oe(13,a,e,i),t.elementType=ut,t.lanes=n,t;case tt:return t=oe(19,a,e,i),t.elementType=tt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z:u=10;break t;case $:u=9;break t;case it:u=11;break t;case w:u=14;break t;case G:u=16,l=null;break t}u=29,a=Error(o(130,t===null?"null":typeof t,"")),l=null}return e=oe(u,a,e,i),e.elementType=t,e.type=l,e.lanes=n,e}function Oa(t,e,a,l){return t=oe(7,t,l,e),t.lanes=a,t}function Cu(t,e,a){return t=oe(6,t,null,e),t.lanes=a,t}function Xr(t){var e=oe(18,null,null,0);return e.stateNode=t,e}function Ru(t,e,a){return e=oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qr=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var a=Qr.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Xs(e)},Qr.set(t,e),e)}return{value:t,source:e,stack:Xs(e)}}var ll=[],il=0,Vi=null,Zl=0,be=[],xe=0,ea=null,Ne=1,Me="";function Be(t,e){ll[il++]=Zl,ll[il++]=Vi,Vi=t,Zl=e}function Lr(t,e,a){be[xe++]=Ne,be[xe++]=Me,be[xe++]=ea,ea=t;var l=Ne;t=Me;var i=32-se(l)-1;l&=~(1<<i),a+=1;var n=32-se(e)+i;if(30<n){var u=i-i%5;n=(l&(1<<u)-1).toString(32),l>>=u,i-=u,Ne=1<<32-se(e)+i|a<<i|l,Me=n+t}else Ne=1<<n|a<<i|l,Me=t}function Hu(t){t.return!==null&&(Be(t,1),Lr(t,1,0))}function ku(t){for(;t===Vi;)Vi=ll[--il],ll[il]=null,Zl=ll[--il],ll[il]=null;for(;t===ea;)ea=be[--xe],be[xe]=null,Me=be[--xe],be[xe]=null,Ne=be[--xe],be[xe]=null}function Zr(t,e){be[xe++]=Ne,be[xe++]=Me,be[xe++]=ea,Ne=e.id,Me=e.overflow,ea=t}var Lt=null,Et=null,ft=!1,aa=null,Se=!1,Bu=Error(o(519));function la(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(ye(e,t)),Bu}function Vr(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Qt]=t,e[It]=l,a){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(a=0;a<mi.length;a++)st(mi[a],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),nr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),cr(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||fd(e.textContent,a)?(l.popover!=null&&(st("beforetoggle",e),st("toggle",e)),l.onScroll!=null&&st("scroll",e),l.onScrollEnd!=null&&st("scrollend",e),l.onClick!=null&&(e.onclick=Re),e=!0):e=!1,e||la(t,!0)}function Kr(t){for(Lt=t.return;Lt;)switch(Lt.tag){case 5:case 31:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:Lt=Lt.return}}function nl(t){if(t!==Lt)return!1;if(!ft)return Kr(t),ft=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||as(t.type,t.memoizedProps)),a=!a),a&&Et&&la(t),Kr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=bd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Et=bd(t)}else e===27?(e=Et,va(t.type)?(t=cs,cs=null,Et=t):Et=e):Et=Lt?ze(t.stateNode.nextSibling):null;return!0}function Da(){Et=Lt=null,ft=!1}function qu(){var t=aa;return t!==null&&(le===null?le=t:le.push.apply(le,t),aa=null),t}function Vl(t){aa===null?aa=[t]:aa.push(t)}var Yu=d(null),Ua=null,qe=null;function ia(t,e,a){C(Yu,e._currentValue),e._currentValue=a}function Ye(t){t._currentValue=Yu.current,j(Yu)}function Gu(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Xu(t,e,a,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=i;for(var r=0;r<e.length;r++)if(c.context===e[r]){n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),Gu(n.return,a,t),l||(u=null);break t}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(o(341));u.lanes|=a,n=u.alternate,n!==null&&(n.lanes|=a),Gu(u,a,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ul(t,e,a,l){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var c=i.type;re(i.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(i===N.current){if(u=i.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(yi):t=[yi])}i=i.return}t!==null&&Xu(e,t,a,l),e.flags|=262144}function Ki(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ca(t){Ua=t,qe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return Jr(Ua,t)}function Ji(t,e){return Ua===null&&Ca(t),Jr(t,e)}function Jr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},qe===null){if(t===null)throw Error(o(308));qe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else qe=qe.next=e;return a}var tm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},em=m.unstable_scheduleCallback,am=m.unstable_NormalPriority,Rt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new tm,data:new Map,refCount:0}}function Kl(t){t.refCount--,t.refCount===0&&em(am,function(){t.controller.abort()})}var Jl=null,Lu=0,cl=0,sl=null;function lm(t,e){if(Jl===null){var a=Jl=[];Lu=0,cl=Kc(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Lu++,e.then($r,$r),e}function $r(){if(--Lu===0&&Jl!==null){sl!==null&&(sl.status="fulfilled");var t=Jl;Jl=null,cl=0,sl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function im(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Wr=x.S;x.S=function(t,e){Rf=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&lm(t,e),Wr!==null&&Wr(t,e)};var Ra=d(null);function Zu(){var t=Ra.current;return t!==null?t:jt.pooledCache}function $i(t,e){e===null?C(Ra,Ra.current):C(Ra,e.pool)}function Fr(){var t=Zu();return t===null?null:{parent:Rt._currentValue,pool:t}}var rl=Error(o(460)),Vu=Error(o(474)),Wi=Error(o(542)),Fi={then:function(){}};function Ir(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pr(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Re,Re),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,eo(t),t;default:if(typeof e.status=="string")e.then(Re,Re);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,eo(t),t}throw ka=e,rl}}function Ha(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ka=a,rl):a}}var ka=null;function to(){if(ka===null)throw Error(o(459));var t=ka;return ka=null,t}function eo(t){if(t===rl||t===Wi)throw Error(o(483))}var ol=null,$l=0;function Ii(t){var e=$l;return $l+=1,ol===null&&(ol=[]),Pr(ol,t,e)}function Wl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Pi(t,e){throw e.$$typeof===O?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ao(t){function e(h,f){if(t){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function a(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function l(h){for(var f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(h,f){return h=ke(h,f),h.index=0,h.sibling=null,h}function n(h,f,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=67108866,f):p):(h.flags|=67108866,f)):(h.flags|=1048576,f)}function u(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function c(h,f,p,S){return f===null||f.tag!==6?(f=Cu(p,h.mode,S),f.return=h,f):(f=i(f,p),f.return=h,f)}function r(h,f,p,S){var L=p.type;return L===vt?b(h,f,p.props.children,S,p.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===G&&Ha(L)===f.type)?(f=i(f,p.props),Wl(f,p),f.return=h,f):(f=Zi(p.type,p.key,p.props,null,h.mode,S),Wl(f,p),f.return=h,f)}function g(h,f,p,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ru(p,h.mode,S),f.return=h,f):(f=i(f,p.children||[]),f.return=h,f)}function b(h,f,p,S,L){return f===null||f.tag!==7?(f=Oa(p,h.mode,S,L),f.return=h,f):(f=i(f,p),f.return=h,f)}function z(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Cu(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case J:return p=Zi(f.type,f.key,f.props,null,h.mode,p),Wl(p,f),p.return=h,p;case W:return f=Ru(f,h.mode,p),f.return=h,f;case G:return f=Ha(f),z(h,f,p)}if(Ft(f)||Ct(f))return f=Oa(f,h.mode,p,null),f.return=h,f;if(typeof f.then=="function")return z(h,Ii(f),p);if(f.$$typeof===Z)return z(h,Ji(h,f),p);Pi(h,f)}return null}function v(h,f,p,S){var L=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return L!==null?null:c(h,f,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case J:return p.key===L?r(h,f,p,S):null;case W:return p.key===L?g(h,f,p,S):null;case G:return p=Ha(p),v(h,f,p,S)}if(Ft(p)||Ct(p))return L!==null?null:b(h,f,p,S,null);if(typeof p.then=="function")return v(h,f,Ii(p),S);if(p.$$typeof===Z)return v(h,f,Ji(h,p),S);Pi(h,p)}return null}function y(h,f,p,S,L){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return h=h.get(p)||null,c(f,h,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case J:return h=h.get(S.key===null?p:S.key)||null,r(f,h,S,L);case W:return h=h.get(S.key===null?p:S.key)||null,g(f,h,S,L);case G:return S=Ha(S),y(h,f,p,S,L)}if(Ft(S)||Ct(S))return h=h.get(p)||null,b(f,h,S,L,null);if(typeof S.then=="function")return y(h,f,p,Ii(S),L);if(S.$$typeof===Z)return y(h,f,p,Ji(f,S),L);Pi(f,S)}return null}function q(h,f,p,S){for(var L=null,dt=null,X=f,lt=f=0,ot=null;X!==null&&lt<p.length;lt++){X.index>lt?(ot=X,X=null):ot=X.sibling;var ht=v(h,X,p[lt],S);if(ht===null){X===null&&(X=ot);break}t&&X&&ht.alternate===null&&e(h,X),f=n(ht,f,lt),dt===null?L=ht:dt.sibling=ht,dt=ht,X=ot}if(lt===p.length)return a(h,X),ft&&Be(h,lt),L;if(X===null){for(;lt<p.length;lt++)X=z(h,p[lt],S),X!==null&&(f=n(X,f,lt),dt===null?L=X:dt.sibling=X,dt=X);return ft&&Be(h,lt),L}for(X=l(X);lt<p.length;lt++)ot=y(X,h,lt,p[lt],S),ot!==null&&(t&&ot.alternate!==null&&X.delete(ot.key===null?lt:ot.key),f=n(ot,f,lt),dt===null?L=ot:dt.sibling=ot,dt=ot);return t&&X.forEach(function(Sa){return e(h,Sa)}),ft&&Be(h,lt),L}function K(h,f,p,S){if(p==null)throw Error(o(151));for(var L=null,dt=null,X=f,lt=f=0,ot=null,ht=p.next();X!==null&&!ht.done;lt++,ht=p.next()){X.index>lt?(ot=X,X=null):ot=X.sibling;var Sa=v(h,X,ht.value,S);if(Sa===null){X===null&&(X=ot);break}t&&X&&Sa.alternate===null&&e(h,X),f=n(Sa,f,lt),dt===null?L=Sa:dt.sibling=Sa,dt=Sa,X=ot}if(ht.done)return a(h,X),ft&&Be(h,lt),L;if(X===null){for(;!ht.done;lt++,ht=p.next())ht=z(h,ht.value,S),ht!==null&&(f=n(ht,f,lt),dt===null?L=ht:dt.sibling=ht,dt=ht);return ft&&Be(h,lt),L}for(X=l(X);!ht.done;lt++,ht=p.next())ht=y(X,h,lt,ht.value,S),ht!==null&&(t&&ht.alternate!==null&&X.delete(ht.key===null?lt:ht.key),f=n(ht,f,lt),dt===null?L=ht:dt.sibling=ht,dt=ht);return t&&X.forEach(function(pp){return e(h,pp)}),ft&&Be(h,lt),L}function zt(h,f,p,S){if(typeof p=="object"&&p!==null&&p.type===vt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case J:t:{for(var L=p.key;f!==null;){if(f.key===L){if(L=p.type,L===vt){if(f.tag===7){a(h,f.sibling),S=i(f,p.props.children),S.return=h,h=S;break t}}else if(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===G&&Ha(L)===f.type){a(h,f.sibling),S=i(f,p.props),Wl(S,p),S.return=h,h=S;break t}a(h,f);break}else e(h,f);f=f.sibling}p.type===vt?(S=Oa(p.props.children,h.mode,S,p.key),S.return=h,h=S):(S=Zi(p.type,p.key,p.props,null,h.mode,S),Wl(S,p),S.return=h,h=S)}return u(h);case W:t:{for(L=p.key;f!==null;){if(f.key===L)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){a(h,f.sibling),S=i(f,p.children||[]),S.return=h,h=S;break t}else{a(h,f);break}else e(h,f);f=f.sibling}S=Ru(p,h.mode,S),S.return=h,h=S}return u(h);case G:return p=Ha(p),zt(h,f,p,S)}if(Ft(p))return q(h,f,p,S);if(Ct(p)){if(L=Ct(p),typeof L!="function")throw Error(o(150));return p=L.call(p),K(h,f,p,S)}if(typeof p.then=="function")return zt(h,f,Ii(p),S);if(p.$$typeof===Z)return zt(h,f,Ji(h,p),S);Pi(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(a(h,f.sibling),S=i(f,p),S.return=h,h=S):(a(h,f),S=Cu(p,h.mode,S),S.return=h,h=S),u(h)):a(h,f)}return function(h,f,p,S){try{$l=0;var L=zt(h,f,p,S);return ol=null,L}catch(X){if(X===rl||X===Wi)throw X;var dt=oe(29,X,null,h.mode);return dt.lanes=S,dt.return=h,dt}finally{}}}var Ba=ao(!0),lo=ao(!1),na=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=Li(t),Yr(t,null,a),e}return Qi(t,l,e,a),Li(t)}function Fl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Js(t,a)}}function $u(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,a=a.next}while(a!==null);n===null?i=n=e:n=n.next=e}else i=n=e;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Wu=!1;function Il(){if(Wu){var t=sl;if(t!==null)throw t}}function Pl(t,e,a,l){Wu=!1;var i=t.updateQueue;na=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var r=c,g=r.next;r.next=null,u===null?n=g:u.next=g,u=r;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=g:c.next=g,b.lastBaseUpdate=r))}if(n!==null){var z=i.baseState;u=0,b=g=r=null,c=n;do{var v=c.lane&-536870913,y=v!==c.lane;if(y?(rt&v)===v:(l&v)===v){v!==0&&v===cl&&(Wu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var q=t,K=c;v=e;var zt=a;switch(K.tag){case 1:if(q=K.payload,typeof q=="function"){z=q.call(zt,z,v);break t}z=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=K.payload,v=typeof q=="function"?q.call(zt,z,v):q,v==null)break t;z=U({},z,v);break t;case 2:na=!0}}v=c.callback,v!==null&&(t.flags|=64,y&&(t.flags|=8192),y=i.callbacks,y===null?i.callbacks=[v]:y.push(v))}else y={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(g=b=y,r=z):b=b.next=y,u|=v;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;y=c,c=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);b===null&&(r=z),i.baseState=r,i.firstBaseUpdate=g,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),da|=u,t.lanes=u,t.memoizedState=z}}function io(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function no(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)io(a[t],e)}var fl=d(null),tn=d(0);function uo(t,e){t=$e,C(tn,t),C(fl,e),$e=t|e.baseLanes}function Fu(){C(tn,$e),C(fl,fl.current)}function Iu(){$e=tn.current,j(fl),j(tn)}var fe=d(null),we=null;function sa(t){var e=t.alternate;C(Dt,Dt.current&1),C(fe,t),we===null&&(e===null||fl.current!==null||e.memoizedState!==null)&&(we=t)}function Pu(t){C(Dt,Dt.current),C(fe,t),we===null&&(we=t)}function co(t){t.tag===22?(C(Dt,Dt.current),C(fe,t),we===null&&(we=t)):ra()}function ra(){C(Dt,Dt.current),C(fe,fe.current)}function de(t){j(fe),we===t&&(we=null),j(Dt)}var Dt=d(0);function en(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ns(a)||us(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ge=0,et=null,St=null,Ht=null,an=!1,dl=!1,qa=!1,ln=0,ti=0,hl=null,nm=0;function Mt(){throw Error(o(321))}function tc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!re(t[a],e[a]))return!1;return!0}function ec(t,e,a,l,i,n){return Ge=n,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=t===null||t.memoizedState===null?Zo:gc,qa=!1,n=a(l,i),qa=!1,dl&&(n=ro(e,a,l,i)),so(t),n}function so(t){x.H=li;var e=St!==null&&St.next!==null;if(Ge=0,Ht=St=et=null,an=!1,ti=0,hl=null,e)throw Error(o(300));t===null||kt||(t=t.dependencies,t!==null&&Ki(t)&&(kt=!0))}function ro(t,e,a,l){et=t;var i=0;do{if(dl&&(hl=null),ti=0,dl=!1,25<=i)throw Error(o(301));if(i+=1,Ht=St=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}x.H=Vo,n=e(a,l)}while(dl);return n}function um(){var t=x.H,e=t.useState()[0];return e=typeof e.then=="function"?ei(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(et.flags|=1024),e}function ac(){var t=ln!==0;return ln=0,t}function lc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function ic(t){if(an){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}an=!1}Ge=0,Ht=St=et=null,dl=!1,ti=ln=0,hl=null}function Wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?et.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Ut(){if(St===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ht===null?et.memoizedState:Ht.next;if(e!==null)Ht=e,St=t;else{if(t===null)throw et.alternate===null?Error(o(467)):Error(o(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?et.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(t){var e=ti;return ti+=1,hl===null&&(hl=[]),t=Pr(hl,t,e),e=et,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?Zo:gc),t}function un(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ei(t);if(t.$$typeof===Z)return Zt(t)}throw Error(o(438,String(t)))}function nc(t){var e=null,a=et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=et.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=nn(),et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=$t;return e.index++,a}function Xe(t,e){return typeof e=="function"?e(t):e}function cn(t){var e=Ut();return uc(e,St,t)}function uc(t,e,a){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var i=t.baseQueue,n=l.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}e.baseQueue=i=n,l.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var c=u=null,r=null,g=e,b=!1;do{var z=g.lane&-536870913;if(z!==g.lane?(rt&z)===z:(Ge&z)===z){var v=g.revertLane;if(v===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),z===cl&&(b=!0);else if((Ge&v)===v){g=g.next,v===cl&&(b=!0);continue}else z={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=z,u=n):r=r.next=z,et.lanes|=v,da|=v;z=g.action,qa&&a(n,z),n=g.hasEagerState?g.eagerState:a(n,z)}else v={lane:z,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},r===null?(c=r=v,u=n):r=r.next=v,et.lanes|=z,da|=z;g=g.next}while(g!==null&&g!==e);if(r===null?u=n:r.next=c,!re(n,t.memoizedState)&&(kt=!0,b&&(a=sl,a!==null)))throw a;t.memoizedState=n,t.baseState=u,t.baseQueue=r,l.lastRenderedState=n}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function cc(t){var e=Ut(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=a.dispatch,i=a.pending,n=e.memoizedState;if(i!==null){a.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);re(n,e.memoizedState)||(kt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,l]}function oo(t,e,a){var l=et,i=Ut(),n=ft;if(n){if(a===void 0)throw Error(o(407));a=a()}else a=e();var u=!re((St||i).memoizedState,a);if(u&&(i.memoizedState=a,kt=!0),i=i.queue,oc(mo.bind(null,l,i,t),[t]),i.getSnapshot!==e||u||Ht!==null&&Ht.memoizedState.tag&1){if(l.flags|=2048,ml(9,{destroy:void 0},ho.bind(null,l,i,a,e),null),jt===null)throw Error(o(349));n||(Ge&127)!==0||fo(l,e,a)}return a}function fo(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=et.updateQueue,e===null?(e=nn(),et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function ho(t,e,a,l){e.value=a,e.getSnapshot=l,po(e)&&go(t)}function mo(t,e,a){return a(function(){po(e)&&go(t)})}function po(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!re(t,a)}catch{return!0}}function go(t){var e=Ma(t,2);e!==null&&ie(e,t,2)}function sc(t){var e=Wt();if(typeof t=="function"){var a=t;if(t=a(),qa){Ie(!0);try{a()}finally{Ie(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:t},e}function vo(t,e,a,l){return t.baseState=a,uc(t,St,typeof l=="function"?l:Xe)}function cm(t,e,a,l,i){if(on(t))throw Error(o(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};x.T!==null?a(!0):n.isTransition=!1,l(n),a=e.pending,a===null?(n.next=e.pending=n,_o(e,n)):(n.next=a.next,e.pending=a.next=n)}}function _o(t,e){var a=e.action,l=e.payload,i=t.state;if(e.isTransition){var n=x.T,u={};x.T=u;try{var c=a(i,l),r=x.S;r!==null&&r(u,c),yo(t,e,c)}catch(g){rc(t,e,g)}finally{n!==null&&u.types!==null&&(n.types=u.types),x.T=n}}else try{n=a(i,l),yo(t,e,n)}catch(g){rc(t,e,g)}}function yo(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){bo(t,e,l)},function(l){return rc(t,e,l)}):bo(t,e,a)}function bo(t,e,a){e.status="fulfilled",e.value=a,xo(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,_o(t,a)))}function rc(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,xo(e),e=e.next;while(e!==l)}t.action=null}function xo(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function So(t,e){return e}function wo(t,e){if(ft){var a=jt.formState;if(a!==null){t:{var l=et;if(ft){if(Et){e:{for(var i=Et,n=Se;i.nodeType!==8;){if(!n){i=null;break e}if(i=ze(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Et=ze(i.nextSibling),l=i.data==="F!";break t}}la(l)}l=!1}l&&(e=a[0])}}return a=Wt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:e},a.queue=l,a=Xo.bind(null,et,l),l.dispatch=a,l=sc(!1),n=pc.bind(null,et,!1,l.queue),l=Wt(),i={state:e,dispatch:null,action:t,pending:null},l.queue=i,a=cm.bind(null,et,i,n,a),i.dispatch=a,l.memoizedState=t,[e,a,!1]}function zo(t){var e=Ut();return jo(e,St,t)}function jo(t,e,a){if(e=uc(t,e,So)[0],t=cn(Xe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ei(e)}catch(u){throw u===rl?Wi:u}else l=e;e=Ut();var i=e.queue,n=i.dispatch;return a!==e.memoizedState&&(et.flags|=2048,ml(9,{destroy:void 0},sm.bind(null,i,a),null)),[l,n,t]}function sm(t,e){t.action=e}function To(t){var e=Ut(),a=St;if(a!==null)return jo(e,a,t);Ut(),e=e.memoizedState,a=Ut();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function ml(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=et.updateQueue,e===null&&(e=nn(),et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Eo(){return Ut().memoizedState}function sn(t,e,a,l){var i=Wt();et.flags|=t,i.memoizedState=ml(1|e,{destroy:void 0},a,l===void 0?null:l)}function rn(t,e,a,l){var i=Ut();l=l===void 0?null:l;var n=i.memoizedState.inst;St!==null&&l!==null&&tc(l,St.memoizedState.deps)?i.memoizedState=ml(e,n,a,l):(et.flags|=t,i.memoizedState=ml(1|e,n,a,l))}function Ao(t,e){sn(8390656,8,t,e)}function oc(t,e){rn(2048,8,t,e)}function rm(t){et.flags|=4;var e=et.updateQueue;if(e===null)e=nn(),et.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function No(t){var e=Ut().memoizedState;return rm({ref:e,nextImpl:t}),function(){if((gt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Mo(t,e){return rn(4,2,t,e)}function Oo(t,e){return rn(4,4,t,e)}function Do(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uo(t,e,a){a=a!=null?a.concat([t]):null,rn(4,4,Do.bind(null,e,t),a)}function fc(){}function Co(t,e){var a=Ut();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&tc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Ro(t,e){var a=Ut();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&tc(e,l[1]))return l[0];if(l=t(),qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l}function dc(t,e,a){return a===void 0||(Ge&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=kf(),et.lanes|=t,da|=t,a)}function Ho(t,e,a,l){return re(a,e)?a:fl.current!==null?(t=dc(t,a,l),re(t,e)||(kt=!0),t):(Ge&42)===0||(Ge&1073741824)!==0&&(rt&261930)===0?(kt=!0,t.memoizedState=a):(t=kf(),et.lanes|=t,da|=t,e)}function ko(t,e,a,l,i){var n=D.p;D.p=n!==0&&8>n?n:8;var u=x.T,c={};x.T=c,pc(t,!1,e,a);try{var r=i(),g=x.S;if(g!==null&&g(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=im(r,l);ai(t,e,b,pe(t))}else ai(t,e,l,pe(t))}catch(z){ai(t,e,{then:function(){},status:"rejected",reason:z},pe())}finally{D.p=n,u!==null&&c.types!==null&&(u.types=c.types),x.T=u}}function om(){}function hc(t,e,a,l){if(t.tag!==5)throw Error(o(476));var i=Bo(t).queue;ko(t,i,e,V,a===null?om:function(){return qo(t),a(l)})}function Bo(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:V},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xe,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qo(t){var e=Bo(t);e.next===null&&(e=t.alternate.memoizedState),ai(t,e.next.queue,{},pe())}function mc(){return Zt(yi)}function Yo(){return Ut().memoizedState}function Go(){return Ut().memoizedState}function fm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=pe();t=ua(a);var l=ca(e,t,a);l!==null&&(ie(l,e,a),Fl(l,e,a)),e={cache:Qu()},t.payload=e;return}e=e.return}}function dm(t,e,a){var l=pe();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},on(t)?Qo(e,a):(a=Du(t,e,a,l),a!==null&&(ie(a,t,l),Lo(a,e,l)))}function Xo(t,e,a){var l=pe();ai(t,e,a,l)}function ai(t,e,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(on(t))Qo(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var u=e.lastRenderedState,c=n(u,a);if(i.hasEagerState=!0,i.eagerState=c,re(c,u))return Qi(t,e,i,0),jt===null&&Xi(),!1}catch{}finally{}if(a=Du(t,e,i,l),a!==null)return ie(a,t,l),Lo(a,e,l),!0}return!1}function pc(t,e,a,l){if(l={lane:2,revertLane:Kc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},on(t)){if(e)throw Error(o(479))}else e=Du(t,a,l,2),e!==null&&ie(e,t,2)}function on(t){var e=t.alternate;return t===et||e!==null&&e===et}function Qo(t,e){dl=an=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Lo(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Js(t,a)}}var li={readContext:Zt,use:un,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};li.useEffectEvent=Mt;var Zo={readContext:Zt,use:un,useCallback:function(t,e){return Wt().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:Ao,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,sn(4194308,4,Do.bind(null,e,t),a)},useLayoutEffect:function(t,e){return sn(4194308,4,t,e)},useInsertionEffect:function(t,e){sn(4,2,t,e)},useMemo:function(t,e){var a=Wt();e=e===void 0?null:e;var l=t();if(qa){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Wt();if(a!==void 0){var i=a(e);if(qa){Ie(!0);try{a(e)}finally{Ie(!1)}}}else i=e;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=dm.bind(null,et,t),[l.memoizedState,t]},useRef:function(t){var e=Wt();return t={current:t},e.memoizedState=t},useState:function(t){t=sc(t);var e=t.queue,a=Xo.bind(null,et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:fc,useDeferredValue:function(t,e){var a=Wt();return dc(a,t,e)},useTransition:function(){var t=sc(!1);return t=ko.bind(null,et,t.queue,!0,!1),Wt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=et,i=Wt();if(ft){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),jt===null)throw Error(o(349));(rt&127)!==0||fo(l,e,a)}i.memoizedState=a;var n={value:a,getSnapshot:e};return i.queue=n,Ao(mo.bind(null,l,n,t),[t]),l.flags|=2048,ml(9,{destroy:void 0},ho.bind(null,l,n,a,e),null),a},useId:function(){var t=Wt(),e=jt.identifierPrefix;if(ft){var a=Me,l=Ne;a=(l&~(1<<32-se(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ln++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=nm++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mc,useFormState:wo,useActionState:wo,useOptimistic:function(t){var e=Wt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=pc.bind(null,et,!0,a),a.dispatch=e,[t,e]},useMemoCache:nc,useCacheRefresh:function(){return Wt().memoizedState=fm.bind(null,et)},useEffectEvent:function(t){var e=Wt(),a={impl:t};return e.memoizedState=a,function(){if((gt&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},gc={readContext:Zt,use:un,useCallback:Co,useContext:Zt,useEffect:oc,useImperativeHandle:Uo,useInsertionEffect:Mo,useLayoutEffect:Oo,useMemo:Ro,useReducer:cn,useRef:Eo,useState:function(){return cn(Xe)},useDebugValue:fc,useDeferredValue:function(t,e){var a=Ut();return Ho(a,St.memoizedState,t,e)},useTransition:function(){var t=cn(Xe)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:ei(t),e]},useSyncExternalStore:oo,useId:Yo,useHostTransitionStatus:mc,useFormState:zo,useActionState:zo,useOptimistic:function(t,e){var a=Ut();return vo(a,St,t,e)},useMemoCache:nc,useCacheRefresh:Go};gc.useEffectEvent=No;var Vo={readContext:Zt,use:un,useCallback:Co,useContext:Zt,useEffect:oc,useImperativeHandle:Uo,useInsertionEffect:Mo,useLayoutEffect:Oo,useMemo:Ro,useReducer:cc,useRef:Eo,useState:function(){return cc(Xe)},useDebugValue:fc,useDeferredValue:function(t,e){var a=Ut();return St===null?dc(a,t,e):Ho(a,St.memoizedState,t,e)},useTransition:function(){var t=cc(Xe)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:ei(t),e]},useSyncExternalStore:oo,useId:Yo,useHostTransitionStatus:mc,useFormState:To,useActionState:To,useOptimistic:function(t,e){var a=Ut();return St!==null?vo(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nc,useCacheRefresh:Go};Vo.useEffectEvent=No;function vc(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:U({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _c={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=pe(),i=ua(l);i.payload=e,a!=null&&(i.callback=a),e=ca(t,i,l),e!==null&&(ie(e,t,l),Fl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=pe(),i=ua(l);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=ca(t,i,l),e!==null&&(ie(e,t,l),Fl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=pe(),l=ua(a);l.tag=2,e!=null&&(l.callback=e),e=ca(t,l,a),e!==null&&(ie(e,t,a),Fl(e,t,a))}};function Ko(t,e,a,l,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,u):e.prototype&&e.prototype.isPureReactComponent?!Ql(a,l)||!Ql(i,n):!0}function Jo(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Ya(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=U({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function $o(t){Gi(t)}function Wo(t){console.error(t)}function Fo(t){Gi(t)}function fn(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Io(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function yc(t,e,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){fn(t,e)},a}function Po(t){return t=ua(t),t.tag=3,t}function tf(t,e,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;t.payload=function(){return i(n)},t.callback=function(){Io(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Io(e,a,l),typeof i!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function hm(t,e,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ul(e,a,i,!0),a=fe.current,a!==null){switch(a.tag){case 31:case 13:return we===null?wn():a.alternate===null&&Ot===0&&(Ot=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Lc(t,l,i)),!1;case 22:return a.flags|=65536,l===Fi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Lc(t,l,i)),!1}throw Error(o(435,a.tag))}return Lc(t,l,i),wn(),!1}if(ft)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==Bu&&(t=Error(o(422),{cause:l}),Vl(ye(t,a)))):(l!==Bu&&(e=Error(o(423),{cause:l}),Vl(ye(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=ye(l,a),i=yc(t.stateNode,l,i),$u(t,i),Ot!==4&&(Ot=2)),!1;var n=Error(o(520),{cause:l});if(n=ye(n,a),fi===null?fi=[n]:fi.push(n),Ot!==4&&(Ot=2),e===null)return!0;l=ye(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=yc(a.stateNode,l,t),$u(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ha===null||!ha.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Po(i),tf(i,t,a,l),$u(a,i),!1}a=a.return}while(a!==null);return!1}var bc=Error(o(461)),kt=!1;function Vt(t,e,a,l){e.child=t===null?lo(e,null,a,l):Ba(e,t.child,a,l)}function ef(t,e,a,l,i){a=a.render;var n=e.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Ca(e),l=ec(t,e,a,u,n,i),c=ac(),t!==null&&!kt?(lc(t,e,i),Qe(t,e,i)):(ft&&c&&Hu(e),e.flags|=1,Vt(t,e,l,i),e.child)}function af(t,e,a,l,i){if(t===null){var n=a.type;return typeof n=="function"&&!Uu(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,lf(t,e,n,l,i)):(t=Zi(a.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!Ac(t,i)){var u=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(u,l)&&t.ref===e.ref)return Qe(t,e,i)}return e.flags|=1,t=ke(n,l),t.ref=e.ref,t.return=e,e.child=t}function lf(t,e,a,l,i){if(t!==null){var n=t.memoizedProps;if(Ql(n,l)&&t.ref===e.ref)if(kt=!1,e.pendingProps=l=n,Ac(t,i))(t.flags&131072)!==0&&(kt=!0);else return e.lanes=t.lanes,Qe(t,e,i)}return xc(t,e,a,l,i)}function nf(t,e,a,l){var i=l.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,e.child=null;return uf(t,e,n,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&$i(e,n!==null?n.cachePool:null),n!==null?uo(e,n):Fu(),co(e);else return l=e.lanes=536870912,uf(t,e,n!==null?n.baseLanes|a:a,a,l)}else n!==null?($i(e,n.cachePool),uo(e,n),ra(),e.memoizedState=null):(t!==null&&$i(e,null),Fu(),ra());return Vt(t,e,i,a),e.child}function ii(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function uf(t,e,a,l,i){var n=Zu();return n=n===null?null:{parent:Rt._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&$i(e,null),Fu(),co(e),t!==null&&ul(t,e,l,!0),e.childLanes=i,null}function dn(t,e){return e=mn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function cf(t,e,a){return Ba(e,t.child,null,a),t=dn(e,e.pendingProps),t.flags|=2,de(e),e.memoizedState=null,t}function mm(t,e,a){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(l.mode==="hidden")return t=dn(e,l),e.lanes=536870912,ii(null,t);if(Pu(e),(t=Et)?(t=yd(t,Se),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:Ne,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=Xr(t),a.return=e,e.child=a,Lt=e,Et=null)):t=null,t===null)throw la(e);return e.lanes=536870912,null}return dn(e,l)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(Pu(e),i)if(e.flags&256)e.flags&=-257,e=cf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(kt||ul(t,e,a,!1),i=(a&t.childLanes)!==0,kt||i){if(l=jt,l!==null&&(u=$s(l,a),u!==0&&u!==n.retryLane))throw n.retryLane=u,Ma(t,u),ie(l,t,u),bc;wn(),e=cf(t,e,a)}else t=n.treeContext,Et=ze(u.nextSibling),Lt=e,ft=!0,aa=null,Se=!1,t!==null&&Zr(e,t),e=dn(e,l),e.flags|=4096;return e}return t=ke(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function hn(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function xc(t,e,a,l,i){return Ca(e),a=ec(t,e,a,l,void 0,i),l=ac(),t!==null&&!kt?(lc(t,e,i),Qe(t,e,i)):(ft&&l&&Hu(e),e.flags|=1,Vt(t,e,a,i),e.child)}function sf(t,e,a,l,i,n){return Ca(e),e.updateQueue=null,a=ro(e,l,a,i),so(t),l=ac(),t!==null&&!kt?(lc(t,e,n),Qe(t,e,n)):(ft&&l&&Hu(e),e.flags|=1,Vt(t,e,a,n),e.child)}function rf(t,e,a,l,i){if(Ca(e),e.stateNode===null){var n=al,u=a.contextType;typeof u=="object"&&u!==null&&(n=Zt(u)),n=new a(l,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_c,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=l,n.state=e.memoizedState,n.refs={},Ku(e),u=a.contextType,n.context=typeof u=="object"&&u!==null?Zt(u):al,n.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(vc(e,a,u,l),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&_c.enqueueReplaceState(n,n.state,null),Pl(e,l,n,i),Il(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){n=e.stateNode;var c=e.memoizedProps,r=Ya(a,c);n.props=r;var g=n.context,b=a.contextType;u=al,typeof b=="object"&&b!==null&&(u=Zt(b));var z=a.getDerivedStateFromProps;b=typeof z=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||g!==u)&&Jo(e,n,l,u),na=!1;var v=e.memoizedState;n.state=v,Pl(e,l,n,i),Il(),g=e.memoizedState,c||v!==g||na?(typeof z=="function"&&(vc(e,a,z,l),g=e.memoizedState),(r=na||Ko(e,a,r,l,v,g,u))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=g),n.props=l,n.state=g,n.context=u,l=r):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{n=e.stateNode,Ju(t,e),u=e.memoizedProps,b=Ya(a,u),n.props=b,z=e.pendingProps,v=n.context,g=a.contextType,r=al,typeof g=="object"&&g!==null&&(r=Zt(g)),c=a.getDerivedStateFromProps,(g=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==z||v!==r)&&Jo(e,n,l,r),na=!1,v=e.memoizedState,n.state=v,Pl(e,l,n,i),Il();var y=e.memoizedState;u!==z||v!==y||na||t!==null&&t.dependencies!==null&&Ki(t.dependencies)?(typeof c=="function"&&(vc(e,a,c,l),y=e.memoizedState),(b=na||Ko(e,a,b,l,v,y,r)||t!==null&&t.dependencies!==null&&Ki(t.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,y,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,y,r)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=y),n.props=l,n.state=y,n.context=r,l=b):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),l=!1)}return n=l,hn(t,e),l=(e.flags&128)!==0,n||l?(n=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&l?(e.child=Ba(e,t.child,null,i),e.child=Ba(e,null,a,i)):Vt(t,e,a,i),e.memoizedState=n.state,t=e.child):t=Qe(t,e,i),t}function of(t,e,a,l){return Da(),e.flags|=256,Vt(t,e,a,l),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(t){return{baseLanes:t,cachePool:Fr()}}function zc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=me),t}function ff(t,e,a){var l=e.pendingProps,i=!1,n=(e.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:(Dt.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(i?sa(e):ra(),(t=Et)?(t=yd(t,Se),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ea!==null?{id:Ne,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},a=Xr(t),a.return=e,e.child=a,Lt=e,Et=null)):t=null,t===null)throw la(e);return us(t)?e.lanes=32:e.lanes=536870912,null}var c=l.children;return l=l.fallback,i?(ra(),i=e.mode,c=mn({mode:"hidden",children:c},i),l=Oa(l,i,a,null),c.return=e,l.return=e,c.sibling=l,e.child=c,l=e.child,l.memoizedState=wc(a),l.childLanes=zc(t,u,a),e.memoizedState=Sc,ii(null,l)):(sa(e),jc(e,c))}var r=t.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(n)e.flags&256?(sa(e),e.flags&=-257,e=Tc(t,e,a)):e.memoizedState!==null?(ra(),e.child=t.child,e.flags|=128,e=null):(ra(),c=l.fallback,i=e.mode,l=mn({mode:"visible",children:l.children},i),c=Oa(c,i,a,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Ba(e,t.child,null,a),l=e.child,l.memoizedState=wc(a),l.childLanes=zc(t,u,a),e.memoizedState=Sc,e=ii(null,l));else if(sa(e),us(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var g=u.dgst;u=g,l=Error(o(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),e=Tc(t,e,a)}else if(kt||ul(t,e,a,!1),u=(a&t.childLanes)!==0,kt||u){if(u=jt,u!==null&&(l=$s(u,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ma(t,l),ie(u,t,l),bc;ns(c)||wn(),e=Tc(t,e,a)}else ns(c)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,Et=ze(c.nextSibling),Lt=e,ft=!0,aa=null,Se=!1,t!==null&&Zr(e,t),e=jc(e,l.children),e.flags|=4096);return e}return i?(ra(),c=l.fallback,i=e.mode,r=t.child,g=r.sibling,l=ke(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,g!==null?c=ke(g,c):(c=Oa(c,i,a,null),c.flags|=2),c.return=e,l.return=e,l.sibling=c,e.child=l,ii(null,l),l=e.child,c=t.child.memoizedState,c===null?c=wc(a):(i=c.cachePool,i!==null?(r=Rt._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=Fr(),c={baseLanes:c.baseLanes|a,cachePool:i}),l.memoizedState=c,l.childLanes=zc(t,u,a),e.memoizedState=Sc,ii(t.child,l)):(sa(e),a=t.child,t=a.sibling,a=ke(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function jc(t,e){return e=mn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mn(t,e){return t=oe(22,t,null,e),t.lanes=0,t}function Tc(t,e,a){return Ba(e,t.child,null,a),t=jc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function df(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Gu(t.return,e,a)}function Ec(t,e,a,l,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=i,u.treeForkCount=n)}function hf(t,e,a){var l=e.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var u=Dt.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,C(Dt,u),Vt(t,e,l,a),l=ft?Zl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,a,e);else if(t.tag===19)df(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&en(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Ec(e,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&en(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Ec(e,!0,a,null,n,l);break;case"together":Ec(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Qe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),da|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ul(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=ke(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ke(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ac(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ki(t)))}function pm(t,e,a){switch(e.tag){case 3:Tt(e,e.stateNode.containerInfo),ia(e,Rt,t.memoizedState.cache),Da();break;case 27:case 5:wa(e);break;case 4:Tt(e,e.stateNode.containerInfo);break;case 10:ia(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Pu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?ff(t,e,a):(sa(e),t=Qe(t,e,a),t!==null?t.sibling:null);sa(e);break;case 19:var i=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ul(t,e,a,!1),l=(a&e.childLanes)!==0),i){if(l)return hf(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),C(Dt,Dt.current),l)break;return null;case 22:return e.lanes=0,nf(t,e,a,e.pendingProps);case 24:ia(e,Rt,t.memoizedState.cache)}return Qe(t,e,a)}function mf(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)kt=!0;else{if(!Ac(t,a)&&(e.flags&128)===0)return kt=!1,pm(t,e,a);kt=(t.flags&131072)!==0}else kt=!1,ft&&(e.flags&1048576)!==0&&Lr(e,Zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Ha(e.elementType),e.type=t,typeof t=="function")Uu(t)?(l=Ya(t,l),e.tag=1,e=rf(null,e,t,l,a)):(e.tag=0,e=xc(null,e,t,l,a));else{if(t!=null){var i=t.$$typeof;if(i===it){e.tag=11,e=ef(null,e,t,l,a);break t}else if(i===w){e.tag=14,e=af(null,e,t,l,a);break t}}throw e=ne(t)||t,Error(o(306,e,""))}}return e;case 0:return xc(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,i=Ya(l,e.pendingProps),rf(t,e,l,i,a);case 3:t:{if(Tt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));l=e.pendingProps;var n=e.memoizedState;i=n.element,Ju(t,e),Pl(e,l,null,a);var u=e.memoizedState;if(l=u.cache,ia(e,Rt,l),l!==n.cache&&Xu(e,[Rt],a,!0),Il(),l=u.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=of(t,e,l,a);break t}else if(l!==i){i=ye(Error(o(424)),e),Vl(i),e=of(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=ze(t.firstChild),Lt=e,ft=!0,aa=null,Se=!0,a=lo(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Da(),l===i){e=Qe(t,e,a);break t}Vt(t,e,l,a)}e=e.child}return e;case 26:return hn(t,e),t===null?(a=jd(e.type,null,e.pendingProps,null))?e.memoizedState=a:ft||(a=e.type,t=e.pendingProps,l=Mn(at.current).createElement(a),l[Qt]=e,l[It]=t,Kt(l,a,t),Yt(l),e.stateNode=l):e.memoizedState=jd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return wa(e),t===null&&ft&&(l=e.stateNode=Sd(e.type,e.pendingProps,at.current),Lt=e,Se=!0,i=Et,va(e.type)?(cs=i,Et=ze(l.firstChild)):Et=i),Vt(t,e,e.pendingProps.children,a),hn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((i=l=Et)&&(l=Zm(l,e.type,e.pendingProps,Se),l!==null?(e.stateNode=l,Lt=e,Et=ze(l.firstChild),Se=!1,i=!0):i=!1),i||la(e)),wa(e),i=e.type,n=e.pendingProps,u=t!==null?t.memoizedProps:null,l=n.children,as(i,n)?l=null:u!==null&&as(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=ec(t,e,um,null,null,a),yi._currentValue=i),hn(t,e),Vt(t,e,l,a),e.child;case 6:return t===null&&ft&&((t=a=Et)&&(a=Vm(a,e.pendingProps,Se),a!==null?(e.stateNode=a,Lt=e,Et=null,t=!0):t=!1),t||la(e)),null;case 13:return ff(t,e,a);case 4:return Tt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Ba(e,null,l,a):Vt(t,e,l,a),e.child;case 11:return ef(t,e,e.type,e.pendingProps,a);case 7:return Vt(t,e,e.pendingProps,a),e.child;case 8:return Vt(t,e,e.pendingProps.children,a),e.child;case 12:return Vt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,ia(e,e.type,l.value),Vt(t,e,l.children,a),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,Ca(e),i=Zt(i),l=l(i),e.flags|=1,Vt(t,e,l,a),e.child;case 14:return af(t,e,e.type,e.pendingProps,a);case 15:return lf(t,e,e.type,e.pendingProps,a);case 19:return hf(t,e,a);case 31:return mm(t,e,a);case 22:return nf(t,e,a,e.pendingProps);case 24:return Ca(e),l=Zt(Rt),t===null?(i=Zu(),i===null&&(i=jt,n=Qu(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),e.memoizedState={parent:l,cache:i},Ku(e),ia(e,Rt,i)):((t.lanes&a)!==0&&(Ju(t,e),Pl(e,null,null,a),Il()),i=t.memoizedState,n=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ia(e,Rt,l)):(l=n.cache,ia(e,Rt,l),l!==i.cache&&Xu(e,[Rt],a,!0))),Vt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Le(t){t.flags|=4}function Nc(t,e,a,l,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Gf())t.flags|=8192;else throw ka=Fi,Vu}else t.flags&=-16777217}function pf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Md(e))if(Gf())t.flags|=8192;else throw ka=Fi,Vu}function pn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vs():536870912,t.lanes|=e,_l|=e)}function ni(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function gm(t,e,a){var l=e.pendingProps;switch(ku(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ye(Rt),xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(nl(e)?Le(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,qu())),At(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(Le(e),n!==null?(At(e),pf(e,n)):(At(e),Nc(e,i,null,l,a))):n?n!==t.memoizedState?(Le(e),At(e),pf(e,n)):(At(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Le(e),At(e),Nc(e,i,t,l,a)),null;case 27:if(ji(e),a=at.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Le(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return At(e),null}t=Y.current,nl(e)?Vr(e):(t=Sd(i,l,a),e.stateNode=t,Le(e))}return At(e),null;case 5:if(ji(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Le(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return At(e),null}if(n=Y.current,nl(e))Vr(e);else{var u=Mn(at.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?u.createElement(i,{is:l.is}):u.createElement(i)}}n[Qt]=e,n[It]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=n;t:switch(Kt(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Le(e)}}return At(e),Nc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Le(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(t=at.current,nl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,i=Lt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[Qt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||fd(t.nodeValue,a)),t||la(e,!0)}else t=Mn(t).createTextNode(l),t[Qt]=e,e.stateNode=t}return At(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=nl(e),a!==null){if(t===null){if(!l)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Qt]=e}else Da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(de(e),e):(de(e),null);if((e.flags&128)!==0)throw Error(o(558))}return At(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=nl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Qt]=e}else Da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;At(e),i=!1}else i=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(de(e),e):(de(e),null)}return de(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),pn(e,e.updateQueue),At(e),null);case 4:return xt(),t===null&&Fc(e.stateNode.containerInfo),At(e),null;case 10:return Ye(e.type),At(e),null;case 19:if(j(Dt),l=e.memoizedState,l===null)return At(e),null;if(i=(e.flags&128)!==0,n=l.rendering,n===null)if(i)ni(l,!1);else{if(Ot!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=en(t),n!==null){for(e.flags|=128,ni(l,!1),t=n.updateQueue,e.updateQueue=t,pn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Gr(a,t),a=a.sibling;return C(Dt,Dt.current&1|2),ft&&Be(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&ue()>bn&&(e.flags|=128,i=!0,ni(l,!1),e.lanes=4194304)}else{if(!i)if(t=en(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,pn(e,t),ni(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ft)return At(e),null}else 2*ue()-l.renderingStartTime>bn&&a!==536870912&&(e.flags|=128,i=!0,ni(l,!1),e.lanes=4194304);l.isBackwards?(n.sibling=e.child,e.child=n):(t=l.last,t!==null?t.sibling=n:e.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,a=Dt.current,C(Dt,i?a&1|2:a&1),ft&&Be(e,l.treeForkCount),t):(At(e),null);case 22:case 23:return de(e),Iu(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),a=e.updateQueue,a!==null&&pn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&j(Ra),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ye(Rt),At(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function vm(t,e){switch(ku(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ye(Rt),xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ji(e),null;case 31:if(e.memoizedState!==null){if(de(e),e.alternate===null)throw Error(o(340));Da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(de(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return j(Dt),null;case 4:return xt(),null;case 10:return Ye(e.type),null;case 22:case 23:return de(e),Iu(),t!==null&&j(Ra),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ye(Rt),null;case 25:return null;default:return null}}function gf(t,e){switch(ku(e),e.tag){case 3:Ye(Rt),xt();break;case 26:case 27:case 5:ji(e);break;case 4:xt();break;case 31:e.memoizedState!==null&&de(e);break;case 13:de(e);break;case 19:j(Dt);break;case 10:Ye(e.type);break;case 22:case 23:de(e),Iu(),t!==null&&j(Ra);break;case 24:Ye(Rt)}}function ui(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){l=void 0;var n=a.create,u=a.inst;l=n(),u.destroy=l}a=a.next}while(a!==i)}}catch(c){bt(e,e.return,c)}}function oa(t,e,a){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=e;var r=a,g=c;try{g()}catch(b){bt(i,r,b)}}}l=l.next}while(l!==n)}}catch(b){bt(e,e.return,b)}}function vf(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{no(e,a)}catch(l){bt(t,t.return,l)}}}function _f(t,e,a){a.props=Ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){bt(t,e,l)}}function ci(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(i){bt(t,e,i)}}function Oe(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){bt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){bt(t,e,i)}else a.current=null}function yf(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){bt(t,t.return,i)}}function Mc(t,e,a){try{var l=t.stateNode;qm(l,t.type,a,e),l[It]=e}catch(i){bt(t,t.return,i)}}function bf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Re));else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Dc(t,e,a),t=t.sibling;t!==null;)Dc(t,e,a),t=t.sibling}function gn(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gn(t,e,a),t=t.sibling;t!==null;)gn(t,e,a),t=t.sibling}function xf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Kt(e,l,a),e[Qt]=t,e[It]=a}catch(n){bt(t,t.return,n)}}var Ze=!1,Bt=!1,Uc=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function _m(t,e){if(t=t.containerInfo,ts=kn,t=Dr(t),Tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var u=0,c=-1,r=-1,g=0,b=0,z=t,v=null;e:for(;;){for(var y;z!==a||i!==0&&z.nodeType!==3||(c=u+i),z!==n||l!==0&&z.nodeType!==3||(r=u+l),z.nodeType===3&&(u+=z.nodeValue.length),(y=z.firstChild)!==null;)v=z,z=y;for(;;){if(z===t)break e;if(v===a&&++g===i&&(c=u),v===n&&++b===l&&(r=u),(y=z.nextSibling)!==null)break;z=v,v=z.parentNode}z=y}a=c===-1||r===-1?null:{start:c,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(es={focusedElem:t,selectionRange:a},kn=!1,Gt=e;Gt!==null;)if(e=Gt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Gt=t;else for(;Gt!==null;){switch(e=Gt,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var q=Ya(a.type,i);t=l.getSnapshotBeforeUpdate(q,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(K){bt(a,a.return,K)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)is(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":is(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Gt=t;break}Gt=e.return}}function wf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ke(t,a),l&4&&ui(5,a);break;case 1:if(Ke(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){bt(a,a.return,u)}else{var i=Ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){bt(a,a.return,u)}}l&64&&vf(a),l&512&&ci(a,a.return);break;case 3:if(Ke(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{no(t,e)}catch(u){bt(a,a.return,u)}}break;case 27:e===null&&l&4&&xf(a);case 26:case 5:Ke(t,a),e===null&&l&4&&yf(a),l&512&&ci(a,a.return);break;case 12:Ke(t,a);break;case 31:Ke(t,a),l&4&&Tf(t,a);break;case 13:Ke(t,a),l&4&&Ef(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Em.bind(null,a),Km(t,a))));break;case 22:if(l=a.memoizedState!==null||Ze,!l){e=e!==null&&e.memoizedState!==null||Bt,i=Ze;var n=Bt;Ze=l,(Bt=e)&&!n?Je(t,a,(a.subtreeFlags&8772)!==0):Ke(t,a),Ze=i,Bt=n}break;case 30:break;default:Ke(t,a)}}function zf(t){var e=t.alternate;e!==null&&(t.alternate=null,zf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ru(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,te=!1;function Ve(t,e,a){for(a=a.child;a!==null;)jf(t,e,a),a=a.sibling}function jf(t,e,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:Bt||Oe(a,e),Ve(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bt||Oe(a,e);var l=Nt,i=te;va(a.type)&&(Nt=a.stateNode,te=!1),Ve(t,e,a),gi(a.stateNode),Nt=l,te=i;break;case 5:Bt||Oe(a,e);case 6:if(l=Nt,i=te,Nt=null,Ve(t,e,a),Nt=l,te=i,Nt!==null)if(te)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(a.stateNode)}catch(n){bt(a,e,n)}else try{Nt.removeChild(a.stateNode)}catch(n){bt(a,e,n)}break;case 18:Nt!==null&&(te?(t=Nt,vd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tl(t)):vd(Nt,a.stateNode));break;case 4:l=Nt,i=te,Nt=a.stateNode.containerInfo,te=!0,Ve(t,e,a),Nt=l,te=i;break;case 0:case 11:case 14:case 15:oa(2,a,e),Bt||oa(4,a,e),Ve(t,e,a);break;case 1:Bt||(Oe(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_f(a,e,l)),Ve(t,e,a);break;case 21:Ve(t,e,a);break;case 22:Bt=(l=Bt)||a.memoizedState!==null,Ve(t,e,a),Bt=l;break;default:Ve(t,e,a)}}function Tf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tl(t)}catch(a){bt(e,e.return,a)}}}function Ef(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tl(t)}catch(a){bt(e,e.return,a)}}function ym(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Sf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Sf),e;default:throw Error(o(435,t.tag))}}function vn(t,e){var a=ym(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var i=Am.bind(null,t,l);l.then(i,i)}})}function ee(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(va(c.type)){Nt=c.stateNode,te=!1;break t}break;case 5:Nt=c.stateNode,te=!1;break t;case 3:case 4:Nt=c.stateNode.containerInfo,te=!0;break t}c=c.return}if(Nt===null)throw Error(o(160));jf(n,u,i),Nt=null,te=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Af(e,t),e=e.sibling}var Ee=null;function Af(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ee(e,t),ae(t),l&4&&(oa(3,t,t.return),ui(3,t),oa(5,t,t.return));break;case 1:ee(e,t),ae(t),l&512&&(Bt||a===null||Oe(a,a.return)),l&64&&Ze&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Ee;if(ee(e,t),ae(t),l&512&&(Bt||a===null||Oe(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Cl]||n[Qt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Kt(n,l,a),n[Qt]=t,Yt(n),l=n;break t;case"link":var u=Ad("link","href",i).get(l+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break e}}n=i.createElement(l),Kt(n,l,a),i.head.appendChild(n);break;case"meta":if(u=Ad("meta","content",i).get(l+(a.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break e}}n=i.createElement(l),Kt(n,l,a),i.head.appendChild(n);break;default:throw Error(o(468,l))}n[Qt]=t,Yt(n),l=n}t.stateNode=l}else Nd(i,t.type,t.stateNode);else t.stateNode=Ed(i,l,t.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Nd(i,t.type,t.stateNode):Ed(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Mc(t,t.memoizedProps,a.memoizedProps)}break;case 27:ee(e,t),ae(t),l&512&&(Bt||a===null||Oe(a,a.return)),a!==null&&l&4&&Mc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ee(e,t),ae(t),l&512&&(Bt||a===null||Oe(a,a.return)),t.flags&32){i=t.stateNode;try{$a(i,"")}catch(q){bt(t,t.return,q)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,Mc(t,i,a!==null?a.memoizedProps:i)),l&1024&&(Uc=!0);break;case 6:if(ee(e,t),ae(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){bt(t,t.return,q)}}break;case 3:if(Un=null,i=Ee,Ee=On(e.containerInfo),ee(e,t),Ee=i,ae(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tl(e.containerInfo)}catch(q){bt(t,t.return,q)}Uc&&(Uc=!1,Nf(t));break;case 4:l=Ee,Ee=On(t.stateNode.containerInfo),ee(e,t),ae(t),Ee=l;break;case 12:ee(e,t),ae(t);break;case 31:ee(e,t),ae(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vn(t,l)));break;case 13:ee(e,t),ae(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yn=ue()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vn(t,l)));break;case 22:i=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,g=Ze,b=Bt;if(Ze=g||i,Bt=b||r,ee(e,t),Bt=b,Ze=g,ae(t),l&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||r||Ze||Bt||Ga(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(n=r.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=r.stateNode;var z=r.memoizedProps.style,v=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(q){bt(r,r.return,q)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(q){bt(r,r.return,q)}}}else if(e.tag===18){if(a===null){r=e;try{var y=r.stateNode;i?_d(y,!0):_d(r.stateNode,!1)}catch(q){bt(r,r.return,q)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,vn(t,a))));break;case 19:ee(e,t),ae(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vn(t,l)));break;case 30:break;case 21:break;default:ee(e,t),ae(t)}}function ae(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(bf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,n=Oc(t);gn(t,n,i);break;case 5:var u=a.stateNode;a.flags&32&&($a(u,""),a.flags&=-33);var c=Oc(t);gn(t,c,u);break;case 3:case 4:var r=a.stateNode.containerInfo,g=Oc(t);Dc(t,g,r);break;default:throw Error(o(161))}}catch(b){bt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Nf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wf(t,e.alternate,e),e=e.sibling}function Ga(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:oa(4,e,e.return),Ga(e);break;case 1:Oe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&_f(e,e.return,a),Ga(e);break;case 27:gi(e.stateNode);case 26:case 5:Oe(e,e.return),Ga(e);break;case 22:e.memoizedState===null&&Ga(e);break;case 30:Ga(e);break;default:Ga(e)}t=t.sibling}}function Je(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=t,n=e,u=n.flags;switch(n.tag){case 0:case 11:case 15:Je(i,n,a),ui(4,n);break;case 1:if(Je(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){bt(l,l.return,g)}if(l=n,i=l.updateQueue,i!==null){var c=l.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)io(r[i],c)}catch(g){bt(l,l.return,g)}}a&&u&64&&vf(n),ci(n,n.return);break;case 27:xf(n);case 26:case 5:Je(i,n,a),a&&l===null&&u&4&&yf(n),ci(n,n.return);break;case 12:Je(i,n,a);break;case 31:Je(i,n,a),a&&u&4&&Tf(i,n);break;case 13:Je(i,n,a),a&&u&4&&Ef(i,n);break;case 22:n.memoizedState===null&&Je(i,n,a),ci(n,n.return);break;case 30:break;default:Je(i,n,a)}e=e.sibling}}function Cc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Kl(a))}function Rc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kl(t))}function Ae(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mf(t,e,a,l),e=e.sibling}function Mf(t,e,a,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e,a,l),i&2048&&ui(9,e);break;case 1:Ae(t,e,a,l);break;case 3:Ae(t,e,a,l),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Kl(t)));break;case 12:if(i&2048){Ae(t,e,a,l),t=e.stateNode;try{var n=e.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){bt(e,e.return,r)}}else Ae(t,e,a,l);break;case 31:Ae(t,e,a,l);break;case 13:Ae(t,e,a,l);break;case 23:break;case 22:n=e.stateNode,u=e.alternate,e.memoizedState!==null?n._visibility&2?Ae(t,e,a,l):si(t,e):n._visibility&2?Ae(t,e,a,l):(n._visibility|=2,pl(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Cc(u,e);break;case 24:Ae(t,e,a,l),i&2048&&Rc(e.alternate,e);break;default:Ae(t,e,a,l)}}function pl(t,e,a,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,u=e,c=a,r=l,g=u.flags;switch(u.tag){case 0:case 11:case 15:pl(n,u,c,r,i),ui(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?pl(n,u,c,r,i):si(n,u):(b._visibility|=2,pl(n,u,c,r,i)),i&&g&2048&&Cc(u.alternate,u);break;case 24:pl(n,u,c,r,i),i&&g&2048&&Rc(u.alternate,u);break;default:pl(n,u,c,r,i)}e=e.sibling}}function si(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,i=l.flags;switch(l.tag){case 22:si(a,l),i&2048&&Cc(l.alternate,l);break;case 24:si(a,l),i&2048&&Rc(l.alternate,l);break;default:si(a,l)}e=e.sibling}}var ri=8192;function gl(t,e,a){if(t.subtreeFlags&ri)for(t=t.child;t!==null;)Of(t,e,a),t=t.sibling}function Of(t,e,a){switch(t.tag){case 26:gl(t,e,a),t.flags&ri&&t.memoizedState!==null&&np(a,Ee,t.memoizedState,t.memoizedProps);break;case 5:gl(t,e,a);break;case 3:case 4:var l=Ee;Ee=On(t.stateNode.containerInfo),gl(t,e,a),Ee=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=ri,ri=16777216,gl(t,e,a),ri=l):gl(t,e,a));break;default:gl(t,e,a)}}function Df(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function oi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Gt=l,Cf(l,t)}Df(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(t),t=t.sibling}function Uf(t){switch(t.tag){case 0:case 11:case 15:oi(t),t.flags&2048&&oa(9,t,t.return);break;case 3:oi(t);break;case 12:oi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_n(t)):oi(t);break;default:oi(t)}}function _n(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Gt=l,Cf(l,t)}Df(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:oa(8,e,e.return),_n(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,_n(e));break;default:_n(e)}t=t.sibling}}function Cf(t,e){for(;Gt!==null;){var a=Gt;switch(a.tag){case 0:case 11:case 15:oa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Gt=l;else t:for(a=t;Gt!==null;){l=Gt;var i=l.sibling,n=l.return;if(zf(l),l===a){Gt=null;break t}if(i!==null){i.return=n,Gt=i;break t}Gt=n}}}var bm={getCacheForType:function(t){var e=Zt(Rt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Zt(Rt).controller.signal}},xm=typeof WeakMap=="function"?WeakMap:Map,gt=0,jt=null,ct=null,rt=0,yt=0,he=null,fa=!1,vl=!1,Hc=!1,$e=0,Ot=0,da=0,Xa=0,kc=0,me=0,_l=0,fi=null,le=null,Bc=!1,yn=0,Rf=0,bn=1/0,xn=null,ha=null,qt=0,ma=null,yl=null,We=0,qc=0,Yc=null,Hf=null,di=0,Gc=null;function pe(){return(gt&2)!==0&&rt!==0?rt&-rt:x.T!==null?Kc():Ws()}function kf(){if(me===0)if((rt&536870912)===0||ft){var t=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),me=t}else me=536870912;return t=fe.current,t!==null&&(t.flags|=32),me}function ie(t,e,a){(t===jt&&(yt===2||yt===9)||t.cancelPendingCommit!==null)&&(bl(t,0),pa(t,rt,me,!1)),Ul(t,a),((gt&2)===0||t!==jt)&&(t===jt&&((gt&2)===0&&(Xa|=a),Ot===4&&pa(t,rt,me,!1)),De(t))}function Bf(t,e,a){if((gt&6)!==0)throw Error(o(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Dl(t,e),i=l?zm(t,e):Qc(t,e,!0),n=l;do{if(i===0){vl&&!l&&pa(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!Sm(a)){i=Qc(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;i=fi;var r=c.current.memoizedState.isDehydrated;if(r&&(bl(c,u).flags|=256),u=Qc(c,u,!1),u!==2){if(Hc&&!r){c.errorRecoveryDisabledLanes|=n,Xa|=n,i=4;break t}n=le,le=i,n!==null&&(le===null?le=n:le.push.apply(le,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){bl(t,0),pa(t,e,0,!0);break}t:{switch(l=t,n=i,n){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:pa(l,e,me,!fa);break t;case 2:le=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=yn+300-ue(),10<i)){if(pa(l,e,me,!fa),Mi(l,0,!0)!==0)break t;We=e,l.timeoutHandle=pd(qf.bind(null,l,a,le,xn,Bc,e,me,Xa,_l,fa,n,"Throttled",-0,0),i);break t}qf(l,a,le,xn,Bc,e,me,Xa,_l,fa,n,null,-0,0)}}break}while(!0);De(t)}function qf(t,e,a,l,i,n,u,c,r,g,b,z,v,y){if(t.timeoutHandle=-1,z=e.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Re},Of(e,n,z);var q=(n&62914560)===n?yn-ue():(n&4194048)===n?Rf-ue():0;if(q=up(z,q),q!==null){We=n,t.cancelPendingCommit=q(Kf.bind(null,t,e,n,a,l,i,u,c,r,b,z,null,v,y)),pa(t,n,u,!g);return}}Kf(t,e,n,a,l,i,u,c,r)}function Sm(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!re(n(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pa(t,e,a,l){e&=~kc,e&=~Xa,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var i=e;0<i;){var n=31-se(i),u=1<<n;l[n]=-1,i&=~u}a!==0&&Ks(t,a,e)}function Sn(){return(gt&6)===0?(hi(0),!1):!0}function Xc(){if(ct!==null){if(yt===0)var t=ct.return;else t=ct,qe=Ua=null,ic(t),ol=null,$l=0,t=ct;for(;t!==null;)gf(t.alternate,t),t=t.return;ct=null}}function bl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),We=0,Xc(),jt=t,ct=a=ke(t.current,null),rt=e,yt=0,he=null,fa=!1,vl=Dl(t,e),Hc=!1,_l=me=kc=Xa=da=Ot=0,le=fi=null,Bc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var i=31-se(l),n=1<<i;e|=t[i],l&=~n}return $e=e,Xi(),a}function Yf(t,e){et=null,x.H=li,e===rl||e===Wi?(e=to(),yt=3):e===Vu?(e=to(),yt=4):yt=e===bc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,he=e,ct===null&&(Ot=1,fn(t,ye(e,t.current)))}function Gf(){var t=fe.current;return t===null?!0:(rt&4194048)===rt?we===null:(rt&62914560)===rt||(rt&536870912)!==0?t===we:!1}function Xf(){var t=x.H;return x.H=li,t===null?li:t}function Qf(){var t=x.A;return x.A=bm,t}function wn(){Ot=4,fa||(rt&4194048)!==rt&&fe.current!==null||(vl=!0),(da&134217727)===0&&(Xa&134217727)===0||jt===null||pa(jt,rt,me,!1)}function Qc(t,e,a){var l=gt;gt|=2;var i=Xf(),n=Qf();(jt!==t||rt!==e)&&(xn=null,bl(t,e)),e=!1;var u=Ot;t:do try{if(yt!==0&&ct!==null){var c=ct,r=he;switch(yt){case 8:Xc(),u=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var g=yt;if(yt=0,he=null,xl(t,c,r,g),a&&vl){u=0;break t}break;default:g=yt,yt=0,he=null,xl(t,c,r,g)}}wm(),u=Ot;break}catch(b){Yf(t,b)}while(!0);return e&&t.shellSuspendCounter++,qe=Ua=null,gt=l,x.H=i,x.A=n,ct===null&&(jt=null,rt=0,Xi()),u}function wm(){for(;ct!==null;)Lf(ct)}function zm(t,e){var a=gt;gt|=2;var l=Xf(),i=Qf();jt!==t||rt!==e?(xn=null,bn=ue()+500,bl(t,e)):vl=Dl(t,e);t:do try{if(yt!==0&&ct!==null){e=ct;var n=he;e:switch(yt){case 1:yt=0,he=null,xl(t,e,n,1);break;case 2:case 9:if(Ir(n)){yt=0,he=null,Zf(e);break}e=function(){yt!==2&&yt!==9||jt!==t||(yt=7),De(t)},n.then(e,e);break t;case 3:yt=7;break t;case 4:yt=5;break t;case 7:Ir(n)?(yt=0,he=null,Zf(e)):(yt=0,he=null,xl(t,e,n,7));break;case 5:var u=null;switch(ct.tag){case 26:u=ct.memoizedState;case 5:case 27:var c=ct;if(u?Md(u):c.stateNode.complete){yt=0,he=null;var r=c.sibling;if(r!==null)ct=r;else{var g=c.return;g!==null?(ct=g,zn(g)):ct=null}break e}}yt=0,he=null,xl(t,e,n,5);break;case 6:yt=0,he=null,xl(t,e,n,6);break;case 8:Xc(),Ot=6;break t;default:throw Error(o(462))}}jm();break}catch(b){Yf(t,b)}while(!0);return qe=Ua=null,x.H=l,x.A=i,gt=a,ct!==null?0:(jt=null,rt=0,Xi(),Ot)}function jm(){for(;ct!==null&&!J0();)Lf(ct)}function Lf(t){var e=mf(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?zn(t):ct=e}function Zf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=sf(a,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=sf(a,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:ic(e);default:gf(a,e),e=ct=Gr(e,$e),e=mf(a,e,$e)}t.memoizedProps=t.pendingProps,e===null?zn(t):ct=e}function xl(t,e,a,l){qe=Ua=null,ic(e),ol=null,$l=0;var i=e.return;try{if(hm(t,i,e,a,rt)){Ot=1,fn(t,ye(a,t.current)),ct=null;return}}catch(n){if(i!==null)throw ct=i,n;Ot=1,fn(t,ye(a,t.current)),ct=null;return}e.flags&32768?(ft||l===1?t=!0:vl||(rt&536870912)!==0?t=!1:(fa=t=!0,(l===2||l===9||l===3||l===6)&&(l=fe.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vf(e,t)):zn(e)}function zn(t){var e=t;do{if((e.flags&32768)!==0){Vf(e,fa);return}t=e.return;var a=gm(e.alternate,e,$e);if(a!==null){ct=a;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Ot===0&&(Ot=5)}function Vf(t,e){do{var a=vm(t.alternate,t);if(a!==null){a.flags&=32767,ct=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=a}while(t!==null);Ot=6,ct=null}function Kf(t,e,a,l,i,n,u,c,r){t.cancelPendingCommit=null;do jn();while(qt!==0);if((gt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(n=e.lanes|e.childLanes,n|=Ou,ih(t,a,n,u,c,r),t===jt&&(ct=jt=null,rt=0),yl=e,ma=t,We=a,qc=n,Yc=i,Hf=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nm(Ti,function(){return If(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,i=D.p,D.p=2,u=gt,gt|=4;try{_m(t,e,a)}finally{gt=u,D.p=i,x.T=l}}qt=1,Jf(),$f(),Wf()}}function Jf(){if(qt===1){qt=0;var t=ma,e=yl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var l=D.p;D.p=2;var i=gt;gt|=4;try{Af(e,t);var n=es,u=Dr(t.containerInfo),c=n.focusedElem,r=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&Or(c.ownerDocument.documentElement,c)){if(r!==null&&Tu(c)){var g=r.start,b=r.end;if(b===void 0&&(b=g),"selectionStart"in c)c.selectionStart=g,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,v=z&&z.defaultView||window;if(v.getSelection){var y=v.getSelection(),q=c.textContent.length,K=Math.min(r.start,q),zt=r.end===void 0?K:Math.min(r.end,q);!y.extend&&K>zt&&(u=zt,zt=K,K=u);var h=Mr(c,K),f=Mr(c,zt);if(h&&f&&(y.rangeCount!==1||y.anchorNode!==h.node||y.anchorOffset!==h.offset||y.focusNode!==f.node||y.focusOffset!==f.offset)){var p=z.createRange();p.setStart(h.node,h.offset),y.removeAllRanges(),K>zt?(y.addRange(p),y.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),y.addRange(p))}}}}for(z=[],y=c;y=y.parentNode;)y.nodeType===1&&z.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var S=z[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}kn=!!ts,es=ts=null}finally{gt=i,D.p=l,x.T=a}}t.current=e,qt=2}}function $f(){if(qt===2){qt=0;var t=ma,e=yl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var l=D.p;D.p=2;var i=gt;gt|=4;try{wf(t,e.alternate,e)}finally{gt=i,D.p=l,x.T=a}}qt=3}}function Wf(){if(qt===4||qt===3){qt=0,$0();var t=ma,e=yl,a=We,l=Hf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?qt=5:(qt=0,yl=ma=null,Ff(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(ha=null),cu(a),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Ol,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=x.T,i=D.p,D.p=2,x.T=null;try{for(var n=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];n(c.value,{componentStack:c.stack})}}finally{x.T=e,D.p=i}}(We&3)!==0&&jn(),De(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Gc?di++:(di=0,Gc=t):di=0,hi(0)}}function Ff(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Kl(e)))}function jn(){return Jf(),$f(),Wf(),If()}function If(){if(qt!==5)return!1;var t=ma,e=qc;qc=0;var a=cu(We),l=x.T,i=D.p;try{D.p=32>a?32:a,x.T=null,a=Yc,Yc=null;var n=ma,u=We;if(qt=0,yl=ma=null,We=0,(gt&6)!==0)throw Error(o(331));var c=gt;if(gt|=4,Uf(n.current),Mf(n,n.current,u,a),gt=c,hi(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Ol,n)}catch{}return!0}finally{D.p=i,x.T=l,Ff(t,e)}}function Pf(t,e,a){e=ye(a,e),e=yc(t.stateNode,e,2),t=ca(t,e,2),t!==null&&(Ul(t,2),De(t))}function bt(t,e,a){if(t.tag===3)Pf(t,t,a);else for(;e!==null;){if(e.tag===3){Pf(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ha===null||!ha.has(l))){t=ye(a,t),a=Po(2),l=ca(e,a,2),l!==null&&(tf(a,l,e,t),Ul(l,2),De(l));break}}e=e.return}}function Lc(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new xm;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(a)||(Hc=!0,i.add(a),t=Tm.bind(null,t,e,a),e.then(t,t))}function Tm(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(rt&a)===a&&(Ot===4||Ot===3&&(rt&62914560)===rt&&300>ue()-yn?(gt&2)===0&&bl(t,0):kc|=a,_l===rt&&(_l=0)),De(t)}function td(t,e){e===0&&(e=Vs()),t=Ma(t,e),t!==null&&(Ul(t,e),De(t))}function Em(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),td(t,a)}function Am(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),td(t,a)}function Nm(t,e){return lu(t,e)}var Tn=null,Sl=null,Zc=!1,En=!1,Vc=!1,ga=0;function De(t){t!==Sl&&t.next===null&&(Sl===null?Tn=Sl=t:Sl=Sl.next=t),En=!0,Zc||(Zc=!0,Om())}function hi(t,e){if(!Vc&&En){Vc=!0;do for(var a=!1,l=Tn;l!==null;){if(t!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var u=l.suspendedLanes,c=l.pingedLanes;n=(1<<31-se(42|t)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,id(l,n))}else n=rt,n=Mi(l,l===jt?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Dl(l,n)||(a=!0,id(l,n));l=l.next}while(a);Vc=!1}}function Mm(){ed()}function ed(){En=Zc=!1;var t=0;ga!==0&&Gm()&&(t=ga);for(var e=ue(),a=null,l=Tn;l!==null;){var i=l.next,n=ad(l,e);n===0?(l.next=null,a===null?Tn=i:a.next=i,i===null&&(Sl=a)):(a=l,(t!==0||(n&3)!==0)&&(En=!0)),l=i}qt!==0&&qt!==5||hi(t),ga!==0&&(ga=0)}function ad(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-se(n),c=1<<u,r=i[u];r===-1?((c&a)===0||(c&l)!==0)&&(i[u]=lh(c,e)):r<=e&&(t.expiredLanes|=c),n&=~c}if(e=jt,a=rt,a=Mi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(yt===2||yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&iu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Dl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&iu(l),cu(a)){case 2:case 8:a=Ls;break;case 32:a=Ti;break;case 268435456:a=Zs;break;default:a=Ti}return l=ld.bind(null,t),a=lu(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&iu(l),t.callbackPriority=2,t.callbackNode=null,2}function ld(t,e){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jn()&&t.callbackNode!==a)return null;var l=rt;return l=Mi(t,t===jt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Bf(t,l,e),ad(t,ue()),t.callbackNode!=null&&t.callbackNode===a?ld.bind(null,t):null)}function id(t,e){if(jn())return null;Bf(t,e,!0)}function Om(){Qm(function(){(gt&6)!==0?lu(Qs,Mm):ed()})}function Kc(){if(ga===0){var t=cl;t===0&&(t=Ei,Ei<<=1,(Ei&261888)===0&&(Ei=256)),ga=t}return ga}function nd(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ci(""+t)}function ud(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Dm(t,e,a,l,i){if(e==="submit"&&a&&a.stateNode===i){var n=nd((i[It]||null).action),u=l.submitter;u&&(e=(e=u[It]||null)?nd(e.formAction):u.getAttribute("formAction"),e!==null&&(n=e,u=null));var c=new Bi("action","action",null,l,i);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var r=u?ud(i,u):new FormData(i);hc(a,{pending:!0,data:r,method:i.method,action:n},null,r)}}else typeof n=="function"&&(c.preventDefault(),r=u?ud(i,u):new FormData(i),hc(a,{pending:!0,data:r,method:i.method,action:n},n,r))},currentTarget:i}]})}}for(var Jc=0;Jc<Mu.length;Jc++){var $c=Mu[Jc],Um=$c.toLowerCase(),Cm=$c[0].toUpperCase()+$c.slice(1);Te(Um,"on"+Cm)}Te(Rr,"onAnimationEnd"),Te(Hr,"onAnimationIteration"),Te(kr,"onAnimationStart"),Te("dblclick","onDoubleClick"),Te("focusin","onFocus"),Te("focusout","onBlur"),Te(Wh,"onTransitionRun"),Te(Fh,"onTransitionStart"),Te(Ih,"onTransitionCancel"),Te(Br,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi));function cd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],i=l.event;l=l.listeners;t:{var n=void 0;if(e)for(var u=l.length-1;0<=u;u--){var c=l[u],r=c.instance,g=c.currentTarget;if(c=c.listener,r!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=g;try{n(i)}catch(b){Gi(b)}i.currentTarget=null,n=r}else for(u=0;u<l.length;u++){if(c=l[u],r=c.instance,g=c.currentTarget,c=c.listener,r!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=g;try{n(i)}catch(b){Gi(b)}i.currentTarget=null,n=r}}}}function st(t,e){var a=e[su];a===void 0&&(a=e[su]=new Set);var l=t+"__bubble";a.has(l)||(sd(e,t,2,!1),a.add(l))}function Wc(t,e,a){var l=0;e&&(l|=4),sd(a,t,l,e)}var An="_reactListening"+Math.random().toString(36).slice(2);function Fc(t){if(!t[An]){t[An]=!0,Ps.forEach(function(a){a!=="selectionchange"&&(Rm.has(a)||Wc(a,!1,t),Wc(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[An]||(e[An]=!0,Wc("selectionchange",!1,e))}}function sd(t,e,a,l){switch(kd(e)){case 2:var i=rp;break;case 8:i=op;break;default:i=ds}a=i.bind(null,e,a,t),i=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Ic(t,e,a,l,i){var n=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=l.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=La(c),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){l=n=u;continue t}c=c.parentNode}}l=l.return}fr(function(){var g=n,b=pu(a),z=[];t:{var v=qr.get(t);if(v!==void 0){var y=Bi,q=t;switch(t){case"keypress":if(Hi(a)===0)break t;case"keydown":case"keyup":y=Ah;break;case"focusin":q="focus",y=xu;break;case"focusout":q="blur",y=xu;break;case"beforeblur":case"afterblur":y=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Oh;break;case Rr:case Hr:case kr:y=yh;break;case Br:y=Uh;break;case"scroll":case"scrollend":y=mh;break;case"wheel":y=Rh;break;case"copy":case"cut":case"paste":y=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=gr;break;case"toggle":case"beforetoggle":y=kh}var K=(e&4)!==0,zt=!K&&(t==="scroll"||t==="scrollend"),h=K?v!==null?v+"Capture":null:v;K=[];for(var f=g,p;f!==null;){var S=f;if(p=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||p===null||h===null||(S=Hl(f,h),S!=null&&K.push(pi(f,S,p))),zt)break;f=f.return}0<K.length&&(v=new y(v,q,null,a,b),z.push({event:v,listeners:K}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",v&&a!==mu&&(q=a.relatedTarget||a.fromElement)&&(La(q)||q[Qa]))break t;if((y||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,y?(q=a.relatedTarget||a.toElement,y=g,q=q?La(q):null,q!==null&&(zt=H(q),K=q.tag,q!==zt||K!==5&&K!==27&&K!==6)&&(q=null)):(y=null,q=g),y!==q)){if(K=mr,S="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(K=gr,S="onPointerLeave",h="onPointerEnter",f="pointer"),zt=y==null?v:Rl(y),p=q==null?v:Rl(q),v=new K(S,f+"leave",y,a,b),v.target=zt,v.relatedTarget=p,S=null,La(b)===g&&(K=new K(h,f+"enter",q,a,b),K.target=p,K.relatedTarget=zt,S=K),zt=S,y&&q)e:{for(K=Hm,h=y,f=q,p=0,S=h;S;S=K(S))p++;S=0;for(var L=f;L;L=K(L))S++;for(;0<p-S;)h=K(h),p--;for(;0<S-p;)f=K(f),S--;for(;p--;){if(h===f||f!==null&&h===f.alternate){K=h;break e}h=K(h),f=K(f)}K=null}else K=null;y!==null&&rd(z,v,y,K,!1),q!==null&&zt!==null&&rd(z,zt,q,K,!0)}}t:{if(v=g?Rl(g):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var dt=zr;else if(Sr(v))if(jr)dt=Kh;else{dt=Zh;var X=Lh}else y=v.nodeName,!y||y.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?g&&hu(g.elementType)&&(dt=zr):dt=Vh;if(dt&&(dt=dt(t,g))){wr(z,dt,a,b);break t}X&&X(t,v,g),t==="focusout"&&g&&v.type==="number"&&g.memoizedProps.value!=null&&du(v,"number",v.value)}switch(X=g?Rl(g):window,t){case"focusin":(Sr(X)||X.contentEditable==="true")&&(Pa=X,Eu=g,Ll=null);break;case"focusout":Ll=Eu=Pa=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Ur(z,a,b);break;case"selectionchange":if($h)break;case"keydown":case"keyup":Ur(z,a,b)}var lt;if(wu)t:{switch(t){case"compositionstart":var ot="onCompositionStart";break t;case"compositionend":ot="onCompositionEnd";break t;case"compositionupdate":ot="onCompositionUpdate";break t}ot=void 0}else Ia?br(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(vr&&a.locale!=="ko"&&(Ia||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ia&&(lt=dr()):(ta=b,_u="value"in ta?ta.value:ta.textContent,Ia=!0)),X=Nn(g,ot),0<X.length&&(ot=new pr(ot,t,null,a,b),z.push({event:ot,listeners:X}),lt?ot.data=lt:(lt=xr(a),lt!==null&&(ot.data=lt)))),(lt=qh?Yh(t,a):Gh(t,a))&&(ot=Nn(g,"onBeforeInput"),0<ot.length&&(X=new pr("onBeforeInput","beforeinput",null,a,b),z.push({event:X,listeners:ot}),X.data=lt)),Dm(z,t,g,a,b)}cd(z,e)})}function pi(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Nn(t,e){for(var a=e+"Capture",l=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Hl(t,a),i!=null&&l.unshift(pi(t,i,n)),i=Hl(t,e),i!=null&&l.push(pi(t,i,n))),t.tag===3)return l;t=t.return}return[]}function Hm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rd(t,e,a,l,i){for(var n=e._reactName,u=[];a!==null&&a!==l;){var c=a,r=c.alternate,g=c.stateNode;if(c=c.tag,r!==null&&r===l)break;c!==5&&c!==26&&c!==27||g===null||(r=g,i?(g=Hl(a,n),g!=null&&u.unshift(pi(a,g,r))):i||(g=Hl(a,n),g!=null&&u.push(pi(a,g,r)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var km=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function od(t){return(typeof t=="string"?t:""+t).replace(km,`
`).replace(Bm,"")}function fd(t,e){return e=od(e),od(t)===e}function wt(t,e,a,l,i,n){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||$a(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&$a(t,""+l);break;case"className":Di(t,"class",l);break;case"tabIndex":Di(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(t,a,l);break;case"style":rr(t,l,n);break;case"data":if(e!=="object"){Di(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ci(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&wt(t,e,"name",i.name,i,null),wt(t,e,"formEncType",i.formEncType,i,null),wt(t,e,"formMethod",i.formMethod,i,null),wt(t,e,"formTarget",i.formTarget,i,null)):(wt(t,e,"encType",i.encType,i,null),wt(t,e,"method",i.method,i,null),wt(t,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ci(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Re);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ci(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":st("beforetoggle",t),st("toggle",t),Oi(t,"popover",l);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dh.get(a)||a,Oi(t,a,l))}}function Pc(t,e,a,l,i,n){switch(a){case"style":rr(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof l=="string"?$a(t,l):(typeof l=="number"||typeof l=="bigint")&&$a(t,""+l);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Re);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),n=t[It]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,i);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Oi(t,a,l)}}}function Kt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var u=a[n];if(u!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:wt(t,e,n,u,a,null)}}i&&wt(t,e,"srcSet",a.srcSet,a,null),l&&wt(t,e,"src",a.src,a,null);return;case"input":st("invalid",t);var c=n=u=i=null,r=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":i=b;break;case"type":u=b;break;case"checked":r=b;break;case"defaultChecked":g=b;break;case"value":n=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,e));break;default:wt(t,e,l,b,a,null)}}nr(t,n,c,r,g,u,i,!1);return;case"select":st("invalid",t),l=u=n=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:wt(t,e,i,c,a,null)}e=n,a=u,t.multiple=!!l,e!=null?Ja(t,!!l,e,!1):a!=null&&Ja(t,!!l,a,!0);return;case"textarea":st("invalid",t),n=i=l=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:wt(t,e,u,c,a,null)}cr(t,l,i,n);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:wt(t,e,r,l,a,null)}return;case"dialog":st("beforetoggle",t),st("toggle",t),st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(l=0;l<mi.length;l++)st(mi[l],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:wt(t,e,g,l,a,null)}return;default:if(hu(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Pc(t,e,b,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&wt(t,e,c,l,a,null))}function qm(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,r=null,g=null,b=null;for(y in a){var z=a[y];if(a.hasOwnProperty(y)&&z!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":r=z;default:l.hasOwnProperty(y)||wt(t,e,y,null,l,z)}}for(var v in l){var y=l[v];if(z=a[v],l.hasOwnProperty(v)&&(y!=null||z!=null))switch(v){case"type":n=y;break;case"name":i=y;break;case"checked":g=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(137,e));break;default:y!==z&&wt(t,e,v,y,l,z)}}fu(t,u,c,r,g,b,n,i);return;case"select":y=u=c=v=null;for(n in a)if(r=a[n],a.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":y=r;default:l.hasOwnProperty(n)||wt(t,e,n,null,l,r)}for(i in l)if(n=l[i],r=a[i],l.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":v=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==r&&wt(t,e,i,n,l,r)}e=c,a=u,l=y,v!=null?Ja(t,!!a,v,!1):!!l!=!!a&&(e!=null?Ja(t,!!a,e,!0):Ja(t,!!a,a?[]:"",!1));return;case"textarea":y=v=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:wt(t,e,c,null,l,i)}for(u in l)if(i=l[u],n=a[u],l.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":v=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==n&&wt(t,e,u,i,l,n)}ur(t,v,y);return;case"option":for(var q in a)if(v=a[q],a.hasOwnProperty(q)&&v!=null&&!l.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:wt(t,e,q,null,l,v)}for(r in l)if(v=l[r],y=a[r],l.hasOwnProperty(r)&&v!==y&&(v!=null||y!=null))switch(r){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:wt(t,e,r,v,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)v=a[K],a.hasOwnProperty(K)&&v!=null&&!l.hasOwnProperty(K)&&wt(t,e,K,null,l,v);for(g in l)if(v=l[g],y=a[g],l.hasOwnProperty(g)&&v!==y&&(v!=null||y!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(137,e));break;default:wt(t,e,g,v,l,y)}return;default:if(hu(e)){for(var zt in a)v=a[zt],a.hasOwnProperty(zt)&&v!==void 0&&!l.hasOwnProperty(zt)&&Pc(t,e,zt,void 0,l,v);for(b in l)v=l[b],y=a[b],!l.hasOwnProperty(b)||v===y||v===void 0&&y===void 0||Pc(t,e,b,v,l,y);return}}for(var h in a)v=a[h],a.hasOwnProperty(h)&&v!=null&&!l.hasOwnProperty(h)&&wt(t,e,h,null,l,v);for(z in l)v=l[z],y=a[z],!l.hasOwnProperty(z)||v===y||v==null&&y==null||wt(t,e,z,v,l,y)}function dd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ym(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&dd(u)){for(u=0,c=i.responseEnd,l+=1;l<a.length;l++){var r=a[l],g=r.startTime;if(g>c)break;var b=r.transferSize,z=r.initiatorType;b&&dd(z)&&(r=r.responseEnd,u+=b*(r<c?1:(c-g)/(r-g)))}if(--l,e+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ts=null,es=null;function Mn(t){return t.nodeType===9?t:t.ownerDocument}function hd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function md(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function as(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ls=null;function Gm(){var t=window.event;return t&&t.type==="popstate"?t===ls?!1:(ls=t,!0):(ls=null,!1)}var pd=typeof setTimeout=="function"?setTimeout:void 0,Xm=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(t){return gd.resolve(null).then(t).catch(Lm)}:pd;function Lm(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function vd(t,e){var a=e,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(i),Tl(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")gi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,gi(a);for(var n=a.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[Cl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=u}}else a==="body"&&gi(t.ownerDocument.body);a=i}while(a);Tl(e)}function _d(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function is(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":is(a),ru(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zm(t,e,a,l){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Cl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ze(t.nextSibling),t===null)break}return null}function Vm(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ze(t.nextSibling),t===null))return null;return t}function yd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ze(t.nextSibling),t===null))return null;return t}function ns(t){return t.data==="$?"||t.data==="$~"}function us(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Km(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ze(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var cs=null;function bd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return ze(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function xd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Sd(t,e,a){switch(e=Mn(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function gi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ru(t)}var je=new Map,wd=new Set;function On(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Fe=D.d;D.d={f:Jm,r:$m,D:Wm,C:Fm,L:Im,m:Pm,X:ep,S:tp,M:ap};function Jm(){var t=Fe.f(),e=Sn();return t||e}function $m(t){var e=Za(t);e!==null&&e.tag===5&&e.type==="form"?qo(e):Fe.r(t)}var wl=typeof document>"u"?null:document;function zd(t,e,a){var l=wl;if(l&&typeof e=="string"&&e){var i=ve(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),wd.has(i)||(wd.add(i),t={rel:t,crossOrigin:a,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),Kt(e,"link",t),Yt(e),l.head.appendChild(e)))}}function Wm(t){Fe.D(t),zd("dns-prefetch",t,null)}function Fm(t,e){Fe.C(t,e),zd("preconnect",t,e)}function Im(t,e,a){Fe.L(t,e,a);var l=wl;if(l&&t&&e){var i='link[rel="preload"][as="'+ve(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ve(a.imageSizes)+'"]')):i+='[href="'+ve(t)+'"]';var n=i;switch(e){case"style":n=zl(t);break;case"script":n=jl(t)}je.has(n)||(t=U({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),je.set(n,t),l.querySelector(i)!==null||e==="style"&&l.querySelector(vi(n))||e==="script"&&l.querySelector(_i(n))||(e=l.createElement("link"),Kt(e,"link",t),Yt(e),l.head.appendChild(e)))}}function Pm(t,e){Fe.m(t,e);var a=wl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ve(l)+'"][href="'+ve(t)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=jl(t)}if(!je.has(n)&&(t=U({rel:"modulepreload",href:t},e),je.set(n,t),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_i(n)))return}l=a.createElement("link"),Kt(l,"link",t),Yt(l),a.head.appendChild(l)}}}function tp(t,e,a){Fe.S(t,e,a);var l=wl;if(l&&t){var i=Va(l).hoistableStyles,n=zl(t);e=e||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(vi(n)))c.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":e},a),(a=je.get(n))&&ss(t,a);var r=u=l.createElement("link");Yt(r),Kt(r,"link",t),r._p=new Promise(function(g,b){r.onload=g,r.onerror=b}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Dn(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function ep(t,e){Fe.X(t,e);var a=wl;if(a&&t){var l=Va(a).hoistableScripts,i=jl(t),n=l.get(i);n||(n=a.querySelector(_i(i)),n||(t=U({src:t,async:!0},e),(e=je.get(i))&&rs(t,e),n=a.createElement("script"),Yt(n),Kt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function ap(t,e){Fe.M(t,e);var a=wl;if(a&&t){var l=Va(a).hoistableScripts,i=jl(t),n=l.get(i);n||(n=a.querySelector(_i(i)),n||(t=U({src:t,async:!0,type:"module"},e),(e=je.get(i))&&rs(t,e),n=a.createElement("script"),Yt(n),Kt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function jd(t,e,a,l){var i=(i=at.current)?On(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=zl(a.href),a=Va(i).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zl(a.href);var n=Va(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(vi(t)))&&!n._p&&(u.instance=n,u.state.loading=5),je.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},je.set(t,a),n||lp(i,t,a,u.state))),e&&l===null)throw Error(o(528,""));return u}if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=jl(a),a=Va(i).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function zl(t){return'href="'+ve(t)+'"'}function vi(t){return'link[rel="stylesheet"]['+t+"]"}function Td(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function lp(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Kt(e,"link",a),Yt(e),t.head.appendChild(e))}function jl(t){return'[src="'+ve(t)+'"]'}function _i(t){return"script[async]"+t}function Ed(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ve(a.href)+'"]');if(l)return e.instance=l,Yt(l),l;var i=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Yt(l),Kt(l,"style",i),Dn(l,a.precedence,t),e.instance=l;case"stylesheet":i=zl(a.href);var n=t.querySelector(vi(i));if(n)return e.state.loading|=4,e.instance=n,Yt(n),n;l=Td(a),(i=je.get(i))&&ss(l,i),n=(t.ownerDocument||t).createElement("link"),Yt(n);var u=n;return u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Kt(n,"link",l),e.state.loading|=4,Dn(n,a.precedence,t),e.instance=n;case"script":return n=jl(a.src),(i=t.querySelector(_i(n)))?(e.instance=i,Yt(i),i):(l=a,(i=je.get(n))&&(l=U({},a),rs(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),Yt(i),Kt(i,"link",l),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Dn(l,a.precedence,t));return e.instance}function Dn(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===e)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function ss(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function rs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Un=null;function Ad(t,e,a){if(Un===null){var l=new Map,i=Un=new Map;i.set(a,l)}else i=Un,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var n=a[i];if(!(n[Cl]||n[Qt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(e)||"";u=t+u;var c=l.get(u);c?c.push(n):l.set(u,[n])}}return l}function Nd(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function ip(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Md(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function np(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=zl(l.href),n=e.querySelector(vi(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Cn.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=n,Yt(n);return}n=e.ownerDocument||e,l=Td(l),(i=je.get(i))&&ss(l,i),n=n.createElement("link"),Yt(n);var u=n;u._p=new Promise(function(c,r){u.onload=c,u.onerror=r}),Kt(n,"link",l),a.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Cn.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var os=0;function up(t,e){return t.stylesheets&&t.count===0&&Hn(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Hn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&os===0&&(os=62500*Ym());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>os?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Cn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rn=null;function Hn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rn=new Map,e.forEach(cp,t),Rn=null,Cn.call(t))}function cp(t,e){if(!(e.state.loading&4)){var a=Rn.get(t);if(a)var l=a.get(null);else{a=new Map,Rn.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}i=e.instance,u=i.getAttribute("data-precedence"),n=a.get(u)||l,n===l&&a.set(null,i),a.set(u,i),this.count++,l=Cn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var yi={$$typeof:Z,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function sp(t,e,a,l,i,n,u,c,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.hiddenUpdates=nu(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Od(t,e,a,l,i,n,u,c,r,g,b,z){return t=new sp(t,e,a,u,r,g,b,z,c),e=1,n===!0&&(e|=24),n=oe(3,null,null,e),t.current=n,n.stateNode=t,e=Qu(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:e},Ku(n),t}function Dd(t){return t?(t=al,t):al}function Ud(t,e,a,l,i,n){i=Dd(i),l.context===null?l.context=i:l.pendingContext=i,l=ua(e),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=ca(t,l,e),a!==null&&(ie(a,t,e),Fl(a,t,e))}function Cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function fs(t,e){Cd(t,e),(t=t.alternate)&&Cd(t,e)}function Rd(t){if(t.tag===13||t.tag===31){var e=Ma(t,67108864);e!==null&&ie(e,t,67108864),fs(t,67108864)}}function Hd(t){if(t.tag===13||t.tag===31){var e=pe();e=uu(e);var a=Ma(t,e);a!==null&&ie(a,t,e),fs(t,e)}}var kn=!0;function rp(t,e,a,l){var i=x.T;x.T=null;var n=D.p;try{D.p=2,ds(t,e,a,l)}finally{D.p=n,x.T=i}}function op(t,e,a,l){var i=x.T;x.T=null;var n=D.p;try{D.p=8,ds(t,e,a,l)}finally{D.p=n,x.T=i}}function ds(t,e,a,l){if(kn){var i=hs(l);if(i===null)Ic(t,e,l,Bn,a),Bd(t,l);else if(dp(i,t,e,a,l))l.stopPropagation();else if(Bd(t,l),e&4&&-1<fp.indexOf(t)){for(;i!==null;){var n=Za(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=ja(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var r=1<<31-se(u);c.entanglements[1]|=r,u&=~r}De(n),(gt&6)===0&&(bn=ue()+500,hi(0))}}break;case 31:case 13:c=Ma(n,2),c!==null&&ie(c,n,2),Sn(),fs(n,2)}if(n=hs(l),n===null&&Ic(t,e,l,Bn,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else Ic(t,e,l,null,a)}}function hs(t){return t=pu(t),ms(t)}var Bn=null;function ms(t){if(Bn=null,t=La(t),t!==null){var e=H(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Q(e),t!==null)return t;t=null}else if(a===31){if(t=P(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bn=t,null}function kd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W0()){case Qs:return 2;case Ls:return 8;case Ti:case F0:return 32;case Zs:return 268435456;default:return 32}default:return 32}}var ps=!1,_a=null,ya=null,ba=null,bi=new Map,xi=new Map,xa=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bd(t,e){switch(t){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(e.pointerId)}}function Si(t,e,a,l,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dp(t,e,a,l,i){switch(e){case"focusin":return _a=Si(_a,t,e,a,l,i),!0;case"dragenter":return ya=Si(ya,t,e,a,l,i),!0;case"mouseover":return ba=Si(ba,t,e,a,l,i),!0;case"pointerover":var n=i.pointerId;return bi.set(n,Si(bi.get(n)||null,t,e,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,xi.set(n,Si(xi.get(n)||null,t,e,a,l,i)),!0}return!1}function qd(t){var e=La(t.target);if(e!==null){var a=H(e);if(a!==null){if(e=a.tag,e===13){if(e=Q(a),e!==null){t.blockedOn=e,Fs(t.priority,function(){Hd(a)});return}}else if(e===31){if(e=P(a),e!==null){t.blockedOn=e,Fs(t.priority,function(){Hd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=hs(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);mu=l,a.target.dispatchEvent(l),mu=null}else return e=Za(a),e!==null&&Rd(e),t.blockedOn=a,!1;e.shift()}return!0}function Yd(t,e,a){qn(t)&&a.delete(e)}function hp(){ps=!1,_a!==null&&qn(_a)&&(_a=null),ya!==null&&qn(ya)&&(ya=null),ba!==null&&qn(ba)&&(ba=null),bi.forEach(Yd),xi.forEach(Yd)}function Yn(t,e){t.blockedOn===e&&(t.blockedOn=null,ps||(ps=!0,m.unstable_scheduleCallback(m.unstable_NormalPriority,hp)))}var Gn=null;function Gd(t){Gn!==t&&(Gn=t,m.unstable_scheduleCallback(m.unstable_NormalPriority,function(){Gn===t&&(Gn=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],i=t[e+2];if(typeof l!="function"){if(ms(l||a)===null)continue;break}var n=Za(a);n!==null&&(t.splice(e,3),e-=3,hc(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Tl(t){function e(r){return Yn(r,t)}_a!==null&&Yn(_a,t),ya!==null&&Yn(ya,t),ba!==null&&Yn(ba,t),bi.forEach(e),xi.forEach(e);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)qd(a),a.blockedOn===null&&xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],u=i[It]||null;if(typeof n=="function")u||Gd(a);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[It]||null)c=u.formAction;else if(ms(i)!==null)continue}else c=u.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Gd(a)}}}function Xd(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function gs(t){this._internalRoot=t}Xn.prototype.render=gs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,l=pe();Ud(a,l,t,e,null,null)},Xn.prototype.unmount=gs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ud(t.current,2,null,t,null,null),Sn(),e[Qa]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ws();t={blockedOn:null,target:t,priority:e};for(var a=0;a<xa.length&&e!==0&&e<xa[a].priority;a++);xa.splice(a,0,t),a===0&&qd(t)}};var Qd=T.version;if(Qd!=="19.2.0")throw Error(o(527,Qd,"19.2.0"));D.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=_(e),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var mp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qn.isDisabled&&Qn.supportsFiber)try{Ol=Qn.inject(mp),ce=Qn}catch{}}return Al.createRoot=function(t,e){if(!M(t))throw Error(o(299));var a=!1,l="",i=$o,n=Wo,u=Fo;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=Od(t,1,!1,null,null,a,l,null,i,n,u,Xd),t[Qa]=e.current,Fc(t),new gs(e)},Al.hydrateRoot=function(t,e,a){if(!M(t))throw Error(o(299));var l=!1,i="",n=$o,u=Wo,c=Fo,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Od(t,1,!0,e,a??null,l,i,r,n,u,c,Xd),e.context=Dd(null),a=e.current,l=pe(),l=uu(l),i=ua(l),i.callback=null,ca(a,i,l),a=l,e.current.lanes=a,Ul(e,a),De(e),t[Qa]=e.current,Fc(t),new Xn(e)},Al.version="19.2.0",Al}var Ts;function Id(){if(Ts)return Kn.exports;Ts=1;function m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m)}catch(T){console.error(T)}}return m(),Kn.exports=Fd(),Kn.exports}var Pd=Id();function t0({decisions:m,onDecide:T,className:E}){const[o,M]=B.useState(()=>Object.fromEntries(m.map(_=>[_.id,{open:!_.collapsed}]))),H=(_,k)=>M(U=>({...U,[_]:{...U[_],...k}})),Q=m.filter(_=>!o[_.id]?.answered).length,P=new Intl.NumberFormat("en").format(Q),A=(_,k)=>{H(_.id,{answered:k==="primary"?_.primary:_.secondary}),T?.(_,k),window.setTimeout(()=>{M(U=>{const O={...U,[_.id]:{...U[_.id],gone:!0}},J=m.find(W=>W.id!==_.id&&!O[W.id]?.open&&!O[W.id]?.answered);return J&&(O[J.id]={...O[J.id],open:!0}),O})},1100)};return s.jsxs(s.Fragment,{children:[s.jsx("style",{href:"ui-decision-inbox",precedence:"default",children:a0}),s.jsxs("section",{className:["ui-di",E].filter(Boolean).join(" "),"data-clear":Q===0||void 0,children:[s.jsx("header",{className:"ui-di__head","aria-live":"polite",children:Q>0?s.jsxs(s.Fragment,{children:[s.jsx(e0,{}),s.jsxs("span",{children:[P," ",Q===1?"needs":"need"," your input"]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Es,{}),s.jsx("span",{children:"All caught up"})]})}),s.jsxs("div",{className:"ui-di__card",children:[m.map(_=>{const k=o[_.id]??{open:!0};return s.jsx("div",{className:"ui-di__row","data-gone":k.gone||void 0,inert:k.gone,children:s.jsx("div",{className:"ui-di__row-inner",children:s.jsxs("div",{className:"ui-di__item","data-open":k.open||void 0,"data-answered":k.answered?!0:void 0,children:[k.open?s.jsx("p",{className:"ui-di__title",dir:"auto",children:_.title}):s.jsx("button",{type:"button",className:"ui-di__title ui-di__title--folded",dir:"auto",title:_.title,onClick:()=>H(_.id,{open:!0}),children:_.title}),s.jsx("div",{className:"ui-di__body","data-open":k.open||void 0,children:s.jsxs("div",{className:"ui-di__body-inner",children:[_.detail&&s.jsx("p",{className:"ui-di__detail",dir:"auto",children:_.detail}),s.jsx("div",{className:"ui-di__actions",children:k.answered?s.jsxs("span",{className:"ui-di__done",role:"status",children:[s.jsx(Es,{}),s.jsx("span",{dir:"auto",children:k.answered})]}):s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"ui-di__btn ui-di__btn--primary",dir:"auto",onClick:()=>A(_,"primary"),children:_.primary}),s.jsx("button",{type:"button",className:"ui-di__btn",dir:"auto",onClick:()=>A(_,"secondary"),children:_.secondary})]})})]})})]})})},_.id)}),s.jsx("p",{className:"ui-di__empty",children:"Nothing waiting on you – new decisions show up here."})]})]})]})}const e0=()=>s.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[s.jsx("path",{d:"M6.7 2.3a1.5 1.5 0 0 1 2.6 0l5.4 9.4A1.5 1.5 0 0 1 13.4 14H2.6a1.5 1.5 0 0 1-1.3-2.3Z",fill:"currentColor"}),s.jsx("path",{d:"M8 5.6v3.6",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("circle",{cx:"8",cy:"11.4",r:"0.85",fill:"#fff"})]}),Es=()=>s.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"7",fill:"currentColor"}),s.jsx("path",{d:"m5 8.2 2 2 4-4.2",fill:"none",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}),a0=`
.ui-di {
  --ui-di-tray: #f0f0f0;
  --ui-di-card: #ffffff;
  --ui-di-line: #f0f0f0;
  --ui-di-ink: #171717;
  --ui-di-text: #404040;
  --ui-di-muted: #8f8f8f;
  --ui-di-faint: #b5b5b5;
  --ui-di-alert: #e8590c;
  --ui-di-ok: #1f8a4c;
  --ui-di-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  /* Like the Chat Composer: a gray tray with the heading, the white card sits on top of it */
  background: var(--ui-di-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-di-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-di *, .ui-di *::before, .ui-di *::after { box-sizing: border-box; }
.ui-di button { margin: 0; font: inherit; cursor: pointer; }
.ui-di button:focus-visible { outline: 2px solid #2f6bff; outline-offset: 2px; }

.ui-di__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-alert);
  transition: color 300ms ease;
}
.ui-di[data-clear] .ui-di__head { color: var(--ui-di-ok); }

.ui-di__card {
  overflow: hidden;
  background: var(--ui-di-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

/* Rows fold away with a height transition once answered */
.ui-di__row {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 460ms var(--ui-di-ease), opacity 300ms ease;
}
.ui-di__row[data-gone] { grid-template-rows: 0fr; opacity: 0; }
.ui-di__row-inner { min-height: 0; overflow: hidden; }
.ui-di__row + .ui-di__row .ui-di__item { border-top: 1px solid var(--ui-di-line); }
.ui-di__row[data-gone] + .ui-di__row .ui-di__item { border-top-color: transparent; }

.ui-di__item { padding: 16px 20px 14px; }
.ui-di__item:not([data-open]) { padding-bottom: 16px; }
.ui-di__title {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: start;
  color: var(--ui-di-ink);
  overflow-wrap: anywhere;
}
.ui-di__title--folded {
  /* Still one line however long the title – it opens in full on click */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--ui-di-faint);
  transition: color 160ms ease;
}
.ui-di__title--folded:hover { color: var(--ui-di-muted); }

.ui-di__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms var(--ui-di-ease);
}
.ui-di__body[data-open] { grid-template-rows: 1fr; }
/* Room around the buttons so the clipping for the fold never cuts their ring and shadow */
.ui-di__body-inner {
  min-height: 0;
  overflow: hidden;
  margin: 0 -4px -4px;
  padding: 0 4px 4px;
}
.ui-di__detail {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
  white-space: pre-line;
  overflow-wrap: anywhere;
}
.ui-di__actions {
  display: flex;
  align-items: center;
  /* Long or translated answers go on a second line instead of out of the card */
  flex-wrap: wrap;
  gap: 8px;
  min-height: 30px;
  margin-top: 12px;
}

.ui-di__btn {
  max-width: 100%;
  min-height: 30px;
  padding: 5px 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  line-height: 20px;
  color: var(--ui-di-ink);
  overflow-wrap: anywhere;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-di__btn:hover { background: #f7f7f7; }
.ui-di__btn:active { transform: scale(0.98); }
.ui-di__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff;
}
.ui-di__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }

.ui-di__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  max-width: 100%;
  color: var(--ui-di-ok);
  overflow-wrap: anywhere;
  animation: ui-di-in 360ms var(--ui-di-ease);
}
.ui-di__done > span { min-width: 0; }

.ui-di__empty {
  display: none;
  margin: 0;
  padding: 18px 20px;
  font-size: 13px;
  line-height: 20px;
  color: var(--ui-di-muted);
}
.ui-di[data-clear] .ui-di__empty { display: block; animation: ui-di-in 420ms var(--ui-di-ease) 300ms both; }

@keyframes ui-di-in {
  from { opacity: 0; transform: translateY(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .ui-di__row, .ui-di__body { transition: none; }
  .ui-di__done, .ui-di__empty { animation: none !important; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-di {
  --ui-di-tray: #161618;
  --ui-di-card: #232326;
  --ui-di-line: rgba(255, 255, 255, 0.08);
  --ui-di-ink: #ededed;
  --ui-di-text: #c4c4c4;
  --ui-di-muted: #8f8f8f;
  --ui-di-faint: #6b6b70;
  --ui-di-alert: #fb8a3c;
  --ui-di-ok: #3fbf74;
}
:where(.dark, [data-theme="dark"]) .ui-di__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-di__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-di__btn:hover { background: #313135; }
/* The dark primary button inverts, like on the site */
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 #ffffff;
  color: #121213;
}
:where(.dark, [data-theme="dark"]) .ui-di__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`,l0=[{name:"Jonas Weber",email:"jonas@northwind.io"},{name:"Lena Hart",email:"lena@northwind.io"},{name:"Finance team",email:"billing@northwind.io"}],Nl=m=>m.name.trim().split(/\s+/)[0]??"",i0=m=>m.trim().split(/\s+/).map(T=>T.match(/[\p{L}\p{N}]/u)?.[0]??"").join("").slice(0,2).toUpperCase(),As=m=>m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n0={name:"",email:""},u0=[{id:"friendly",label:"Friendly",body:m=>`Hi ${Nl(m)}, a heads-up that your Growth plan renews on October 9 for $8,900 a year. If you'd like to add seats or switch to monthly billing, you can review the quote here:`},{id:"short",label:"Short",body:m=>`Hi ${Nl(m)}, your Growth plan renews on October 9 ($8,900/year). Quote for changes:`},{id:"formal",label:"Formal",body:m=>`Dear ${m.name}, this is a reminder that your Growth subscription is scheduled to renew on October 9 at $8,900 per year. Should you wish to adjust seats or billing, please review the attached quote:`}];function c0({reference:m="SUB-1182",account:T="Northwind Logistics",amount:E="$8,900",status:o="Renews in 5 days",agent:M="Renewal agent",contacts:H=l0,attachment:Q="Renewal-quote.pdf",tones:P=u0,link:A={label:"Review quote",href:"#"},onSend:_,onDiscard:k,className:U}){const[O,J]=B.useState(H[0]??n0),[W,vt]=B.useState(Q),[mt,R]=B.useState(P[0]?.id??""),[$,Z]=B.useState(null),[it,ut]=B.useState(!1),[tt,w]=B.useState(!1),[G,nt]=B.useState("draft"),[$t,Xt]=B.useState(0),Ct=B.useRef(null),Ue=s0(Ct),ne=B.useRef(null),Ft=B.useRef(null),x=B.useRef([]),D=P.find(N=>N.id===mt)?.body(O)??"",V=$??D;B.useEffect(()=>()=>x.current.forEach(N=>window.clearTimeout(N)),[]),B.useEffect(()=>{if(!tt)return;const N=xt=>{Ft.current?.contains(xt.target)||w(!1)},Tt=xt=>xt.key==="Escape"&&w(!1);return document.addEventListener("pointerdown",N),document.addEventListener("keydown",Tt),()=>{document.removeEventListener("pointerdown",N),document.removeEventListener("keydown",Tt)}},[tt]),B.useLayoutEffect(()=>{const N=ne.current;N&&(N.style.height="auto",N.style.height=`${N.scrollHeight}px`)},[it,V]);const pt=()=>{Z(V),ut(!0),requestAnimationFrame(()=>{const N=ne.current;N&&(N.focus(),N.setSelectionRange(N.value.length,N.value.length))})},_t=N=>{N===mt&&$===null||(R(N),Z(null),ut(!1),Xt(Tt=>Tt+1))},d=N=>{J(N),w(!1);const Tt=O.name.trim(),xt=[Tt&&As(Tt),Nl(O)&&`\\b${As(Nl(O))}\\b`].filter(Boolean);$!==null&&xt.length&&Z($.replace(new RegExp(xt.join("|"),"g"),wa=>wa===Tt?N.name.trim():Nl(N)))},j=()=>{G!=="draft"||!O.email||(ut(!1),nt("sending"),x.current.push(window.setTimeout(()=>{nt("sent"),_?.({to:O,body:`${V} ${A.label}: ${A.href}`,attachment:W})},900)))},C=()=>{ut(!1),nt("discarded"),k?.()},Y=()=>nt("draft"),F=G==="draft"||G==="sending",at=G==="sent"?{text:"Sent",tone:"ok"}:G==="discarded"?{text:"Discarded",tone:"muted"}:{text:"Ready for review",tone:"ok"};return s.jsxs("div",{className:["ui-ed",U].filter(Boolean).join(" "),children:[s.jsx("style",{href:"ui-email-draft",precedence:"default",children:r0}),s.jsxs("div",{className:"ui-ed__record",children:[s.jsxs("div",{className:"ui-ed__ref",children:[s.jsx("span",{className:"ui-ed__id",title:m,children:m}),o&&s.jsx("span",{className:"ui-ed__status",dir:"auto",title:o,children:o}),s.jsx("span",{className:"ui-ed__amount",children:E})]}),s.jsx("span",{className:"ui-ed__account",dir:"auto",children:T})]}),s.jsx("div",{className:"ui-ed__outer",ref:Ue,children:s.jsx("div",{ref:Ct,children:F?s.jsxs("div",{className:"ui-ed__card","data-sending":G==="sending"?"":void 0,children:[s.jsxs("div",{className:"ui-ed__meta",children:[s.jsxs("div",{className:"ui-ed__to",ref:Ft,children:[s.jsx("span",{className:"ui-ed__label",children:"to"}),O.email?s.jsxs("button",{type:"button",className:"ui-ed__recipient","aria-haspopup":"listbox","aria-expanded":tt,title:`${O.name} <${O.email}>`,onClick:()=>w(N=>!N),children:[s.jsx("span",{className:"ui-ed__name",dir:"auto",children:O.name})," ",s.jsxs("span",{className:"ui-ed__email",children:["(",O.email,")"]}),s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:s.jsx("path",{d:"m7 10 5 5 5-5"})})]}):s.jsx("span",{className:"ui-ed__email",children:"No recipient"}),tt&&s.jsx("ul",{className:"ui-ed__menu",role:"listbox","aria-label":"Recipient",children:H.map((N,Tt)=>s.jsx("li",{children:s.jsxs("button",{type:"button",role:"option","aria-selected":N.email===O.email,onClick:()=>d(N),children:[s.jsx("span",{className:"ui-ed__avatar","aria-hidden":"true",children:i0(N.name)}),s.jsxs("span",{className:"ui-ed__menu-text",dir:"auto",children:[N.name,s.jsx("small",{children:N.email})]}),N.email===O.email&&s.jsx("svg",{className:"ui-ed__tick",viewBox:"0 0 24 24","aria-hidden":"true",children:s.jsx("path",{d:"m6 12.5 4 4 8-9"})})]})},`${N.email}-${Tt}`))})]}),W?s.jsxs("span",{className:"ui-ed__file",children:[s.jsx(Ml,{children:s.jsx("path",{d:"m15.5 7.5-6.4 6.4a1.8 1.8 0 0 0 2.5 2.5l6.7-6.7a3.5 3.5 0 0 0-5-5l-6.9 6.9a5.2 5.2 0 0 0 7.4 7.4l6-6"})}),s.jsx("span",{className:"ui-ed__file-name",title:W,children:W}),s.jsx("button",{type:"button","aria-label":`Remove ${W}`,onClick:()=>vt(null),children:s.jsx(Ml,{children:s.jsx("path",{d:"M7 7l10 10M17 7 7 17"})})})]}):Q&&s.jsxs("button",{type:"button",className:"ui-ed__attach",onClick:()=>vt(Q),children:[s.jsx(Ml,{children:s.jsx("path",{d:"M12 6v12M6 12h12"})}),s.jsxs("span",{className:"ui-ed__file-name",title:Q,children:["Attach ",Q]})]})]}),s.jsx("div",{className:"ui-ed__body",children:it?s.jsx("textarea",{ref:ne,className:"ui-ed__edit",dir:"auto",value:$??"",onChange:N=>Z(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.metaKey||N.ctrlKey)&&(N.preventDefault(),j()),N.key==="Escape"&&ut(!1)},onBlur:()=>ut(!1),"aria-label":"Email text"}):s.jsxs("p",{className:"ui-ed__text",dir:"auto",onClick:pt,title:"Click to edit",children:[V," ",s.jsx("a",{href:A.href,onClick:N=>N.stopPropagation(),children:A.label})]},$t)}),s.jsxs("div",{className:"ui-ed__actions",children:[s.jsxs("div",{className:"ui-ed__tones",role:"group","aria-label":"Tone",children:[P.map(N=>s.jsx("button",{type:"button","aria-pressed":mt===N.id&&$===null,onClick:()=>_t(N.id),children:N.label},N.id)),s.jsx("button",{type:"button",className:"ui-ed__edit-btn","aria-pressed":it,"aria-label":"Edit text",onClick:pt,children:s.jsx(Ml,{children:s.jsx("path",{d:"M14.5 5.5 18.5 9.5M5 19l1-4L15.5 5.5l4 4L10 19l-5 0Z"})})})]}),s.jsxs("div",{className:"ui-ed__buttons",children:[s.jsx("button",{type:"button",className:"ui-ed__secondary",onClick:C,disabled:G==="sending",children:"Discard"}),s.jsx("button",{type:"button",className:"ui-ed__primary",onClick:j,disabled:G==="sending"||!O.email,children:G==="sending"?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"ui-ed__spinner","aria-hidden":"true"}),"Sending"]}):"Send email"})]})]})]}):s.jsxs("div",{className:"ui-ed__receipt",role:"status",children:[s.jsx("span",{className:"ui-ed__receipt-icon","data-tone":G==="sent"?"ok":"muted","aria-hidden":"true",children:s.jsx(Ml,{children:G==="sent"?s.jsx("path",{d:"m6 12.5 4 4 8-9"}):s.jsx("path",{d:"M7 7l10 10M17 7 7 17"})})}),s.jsx("span",{className:"ui-ed__receipt-text",children:G==="sent"?s.jsxs(s.Fragment,{children:["Sent to ",s.jsx("b",{dir:"auto",children:O.name}),W?` with ${W}`:""]}):"Draft discarded"}),s.jsx("button",{type:"button",className:"ui-ed__undo",onClick:Y,children:"Undo"})]})})}),s.jsxs("div",{className:"ui-ed__foot",children:[s.jsx("span",{className:"ui-ed__agent",title:M,children:M}),s.jsx("span",{className:"ui-ed__badge","data-tone":at.tone,children:at.text},at.text),F&&s.jsx("span",{className:"ui-ed__hint",children:"⌘ Enter to send"})]})]})}const Ml=({children:m})=>s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:m});function s0(m){const T=B.useRef(null);return B.useLayoutEffect(()=>{const E=T.current,o=m.current;if(!E||!o)return;const M=()=>{E.style.height=`${o.offsetHeight}px`};M();const H=new ResizeObserver(M);H.observe(o);const Q=requestAnimationFrame(()=>E.setAttribute("data-smooth",""));return()=>{H.disconnect(),cancelAnimationFrame(Q)}},[m]),T}const r0=`
.ui-ed {
  --ui-ed-tray: #f0f0f0;
  --ui-ed-card: #ffffff;
  --ui-ed-card-line: #e5e5e5;
  --ui-ed-line: #ececec;
  --ui-ed-ink: #171717;
  --ui-ed-text: #404040;
  --ui-ed-muted: #8f8f8f;
  --ui-ed-chip: #f5f5f5;
  --ui-ed-chip-line: #ebebeb;
  --ui-ed-hover: #f5f5f5;
  --ui-ed-warn: #c2570c;
  --ui-ed-warn-bg: #fdeedd;
  --ui-ed-ok: #2f7d32;
  --ui-ed-ok-bg: #e8f5e6;
  --ui-ed-btn-top: #323137;
  --ui-ed-btn-bottom: #201e25;
  --ui-ed-btn-ring: #0d0d0d;
  --ui-ed-btn-text: #ffffff;
  --ui-ed-focus: #2f6bff;
  --ui-ed-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ed-ease: cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
  max-width: 520px;
  container-type: inline-size;
  padding: 6px;
  border-radius: 20px;
  background: var(--ui-ed-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ed-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ed *, .ui-ed *::before, .ui-ed *::after { box-sizing: border-box; }
.ui-ed button { font: inherit; color: inherit; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-ed button:focus-visible, .ui-ed a:focus-visible { outline: 2px solid var(--ui-ed-focus); outline-offset: 2px; }
.ui-ed svg { width: 15px; height: 15px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }

/* ---------- Record on the tray ---------- */

.ui-ed__record { display: grid; gap: 2px; padding: 8px 10px 10px; }
.ui-ed__ref { display: flex; align-items: center; gap: 8px; min-width: 0; }
/* The status gives way first, then the reference – the amount never does */
.ui-ed__id { flex: 0 1 auto; min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 15px; font-weight: 500; letter-spacing: -0.01em; }
.ui-ed__status {
  flex: 0 100 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 8px;
  border-radius: 8px;
  background: var(--ui-ed-warn-bg);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--ui-ed-warn);
  white-space: nowrap;
}
.ui-ed__amount { flex: none; margin-left: auto; white-space: nowrap; font-size: 15px; font-weight: 500; font-variant-numeric: tabular-nums; }
.ui-ed__account { overflow-wrap: anywhere; font-size: 13px; color: var(--ui-ed-muted); }

.ui-ed__outer { position: relative; }
.ui-ed__outer[data-smooth] { transition: height 360ms var(--ui-ed-ease); }

/* ---------- Email card ---------- */

.ui-ed__card {
  border: 1px solid var(--ui-ed-card-line);
  border-radius: 16px;
  background: var(--ui-ed-card);
  box-shadow: var(--ui-ed-shadow);
  animation: ui-ed-in 320ms var(--ui-ed-ease) both;
  transition: opacity 220ms ease;
}
.ui-ed__card[data-sending] { opacity: 0.7; pointer-events: none; }

.ui-ed__meta {
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 14px;
  padding: 12px 0 11px;
  border-bottom: 1px solid var(--ui-ed-line);
}
.ui-ed__to { position: relative; display: flex; align-items: center; gap: 6px; min-width: 0; }
.ui-ed__label { font-size: 13px; color: var(--ui-ed-muted); }
.ui-ed__recipient {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: 8px;
  background: var(--ui-ed-chip);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  transition: background-color 160ms ease;
}
.ui-ed__recipient:hover { background: color-mix(in srgb, var(--ui-ed-chip) 80%, var(--ui-ed-ink) 6%); }
/* A long name shortens; the address gives way before it */
.ui-ed__name { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-ed__email { flex: 0 100 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--ui-ed-muted); }
.ui-ed__recipient svg { width: 14px; height: 14px; color: var(--ui-ed-muted); transition: transform 220ms var(--ui-ed-ease); }
.ui-ed__recipient[aria-expanded="true"] svg { transform: rotate(180deg); }

.ui-ed__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 18px;
  z-index: 5;
  display: grid;
  gap: 2px;
  min-width: 250px;
  max-width: calc(100cqw - 36px);
  max-height: 288px;
  overflow-y: auto;
  overscroll-behavior: contain;
  margin: 0;
  padding: 5px;
  list-style: none;
  border-radius: 12px;
  background: var(--ui-ed-card);
  box-shadow: 0 0 0 1px var(--ui-ed-card-line), 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ui-ed-menu 200ms var(--ui-ed-ease) both;
  transform-origin: top left;
}
.ui-ed__menu button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 7px 8px;
  border: 0;
  border-radius: 8px;
  background: none;
  text-align: left;
  font-size: 13px;
}
.ui-ed__menu button:hover { background: var(--ui-ed-hover); }
.ui-ed__avatar {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 50%;
  background: var(--ui-ed-chip);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--ui-ed-text);
}
.ui-ed__menu-text { display: grid; flex: 1; min-width: 0; overflow-wrap: anywhere; }
.ui-ed__menu-text small { font-size: 12px; color: var(--ui-ed-muted); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ed__tick { color: var(--ui-ed-ink); }

.ui-ed__file {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
  font-size: 13px;
  color: var(--ui-ed-muted);
  white-space: nowrap;
}
/* The file name shortens, the remove button always stays in reach */
.ui-ed__file-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-ed__file button,
.ui-ed__attach {
  display: grid;
  place-items: center;
  border: 0;
  background: none;
  color: var(--ui-ed-muted) !important;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ed__file button { flex: none; width: 20px; height: 20px; padding: 0; border-radius: 6px; }
.ui-ed__file button svg { width: 13px; height: 13px; }
.ui-ed__file button:hover { background: var(--ui-ed-hover); color: var(--ui-ed-ink) !important; }
.ui-ed__attach { display: inline-flex; min-width: 0; gap: 4px; padding: 3px 6px; border-radius: 8px; font-size: 13px; white-space: nowrap; }
.ui-ed__attach:hover { background: var(--ui-ed-hover); color: var(--ui-ed-ink) !important; }

/* Body */
.ui-ed__body { padding: 12px 14px 4px; }
.ui-ed__text {
  margin: -4px -6px;
  padding: 4px 6px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ui-ed-text);
  white-space: pre-line;
  overflow-wrap: anywhere;
  cursor: text;
  transition: background-color 160ms ease;
  animation: ui-ed-fade 280ms ease both;
}
.ui-ed__text:hover { background: var(--ui-ed-hover); }
.ui-ed__text a {
  color: var(--ui-ed-text);
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, var(--ui-ed-text) 35%, transparent);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 4px;
}
.ui-ed__text a:hover { text-decoration-color: currentColor; }
.ui-ed__edit {
  display: block;
  width: calc(100% + 12px);
  margin: -4px -6px;
  padding: 4px 6px;
  border: 0;
  border-radius: 8px;
  background: var(--ui-ed-hover);
  box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line);
  outline: none;
  resize: none;
  overflow: hidden;
  font: inherit;
  font-size: 15px;
  line-height: 1.6;
  color: var(--ui-ed-ink);
}

/* Actions */
.ui-ed__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 10px 10px 14px;
}
.ui-ed__tones { display: flex; flex-wrap: wrap; align-items: center; gap: 2px; min-width: 0; }
.ui-ed__tones button {
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 9px;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 12.5px;
  color: var(--ui-ed-muted) !important;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-ed__tones button:hover { color: var(--ui-ed-ink) !important; }
.ui-ed__tones button[aria-pressed="true"] { background: var(--ui-ed-chip); color: var(--ui-ed-ink) !important; box-shadow: inset 0 0 0 1px var(--ui-ed-chip-line); }
.ui-ed__tones .ui-ed__edit-btn { width: 28px; padding: 0; justify-content: center; margin-left: 4px; }
.ui-ed__buttons { display: flex; gap: 8px; margin-left: auto; }
.ui-ed__secondary,
.ui-ed__primary {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 14px;
  border: 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 160ms ease, transform 160ms ease, filter 160ms ease;
}
.ui-ed__secondary { background: var(--ui-ed-card); box-shadow: inset 0 0 0 1px var(--ui-ed-card-line); color: var(--ui-ed-text) !important; }
.ui-ed__secondary:hover { background: var(--ui-ed-hover); }
.ui-ed__primary {
  background: linear-gradient(180deg, var(--ui-ed-btn-top), var(--ui-ed-btn-bottom));
  box-shadow: 0 0 0 1px var(--ui-ed-btn-ring), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: var(--ui-ed-btn-text) !important;
}
.ui-ed__primary:hover { filter: brightness(1.12); }
.ui-ed__secondary:active, .ui-ed__primary:active { transform: scale(0.98); }
.ui-ed__spinner {
  width: 13px;
  height: 13px;
  border: 1.8px solid color-mix(in srgb, var(--ui-ed-btn-text) 30%, transparent);
  border-top-color: var(--ui-ed-btn-text);
  border-radius: 50%;
  animation: ui-ed-spin 700ms linear infinite;
}

/* ---------- Receipt after send / discard ---------- */

.ui-ed__receipt {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px 12px 12px;
  border: 1px solid var(--ui-ed-card-line);
  border-radius: 16px;
  background: var(--ui-ed-card);
  box-shadow: var(--ui-ed-shadow);
  font-size: 14px;
  color: var(--ui-ed-text);
  animation: ui-ed-in 320ms var(--ui-ed-ease) both;
}
.ui-ed__receipt b { font-weight: 500; color: var(--ui-ed-ink); }
.ui-ed__receipt-icon {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 50%;
  background: var(--ui-ed-chip);
  color: var(--ui-ed-muted);
}
.ui-ed__receipt-icon[data-tone="ok"] { background: var(--ui-ed-ok-bg); color: var(--ui-ed-ok); }
.ui-ed__receipt-icon svg { width: 14px; height: 14px; stroke-width: 2.2; }
.ui-ed__receipt-text { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ui-ed__undo {
  padding: 4px 8px;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-ed-ink) !important;
  transition: background-color 160ms ease;
}
.ui-ed__undo:hover { background: var(--ui-ed-hover); }

/* ---------- Footer on the tray ---------- */

.ui-ed__foot { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 10px 10px 6px; }
.ui-ed__agent { min-width: 0; overflow-wrap: anywhere; font-size: 14px; color: var(--ui-ed-ink); }
.ui-ed__badge {
  flex: none;
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 12.5px;
  font-weight: 500;
  animation: ui-ed-fade 260ms ease both;
}
.ui-ed__badge[data-tone="ok"] { background: var(--ui-ed-ok-bg); color: var(--ui-ed-ok); }
.ui-ed__badge[data-tone="muted"] { background: var(--ui-ed-chip); color: var(--ui-ed-muted); }
.ui-ed__hint { margin-left: auto; font-size: 12px; color: var(--ui-ed-muted); }

@keyframes ui-ed-in { from { opacity: 0; transform: translateY(4px) scale(0.99); } }
@keyframes ui-ed-fade { from { opacity: 0; } }
@keyframes ui-ed-menu { from { opacity: 0; transform: scale(0.96) translateY(-4px); } }
@keyframes ui-ed-spin { to { transform: rotate(360deg); } }

@media (max-width: 480px) {
  .ui-ed__email, .ui-ed__hint { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .ui-ed__outer[data-smooth] { transition: none; }
  .ui-ed__card, .ui-ed__receipt, .ui-ed__text, .ui-ed__badge, .ui-ed__menu { animation: none; }
}


/* Text fields: no focus box while typing – also against global :focus-visible rules of the host page */
.ui-ed input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ed textarea:focus-visible,
.ui-ed [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ed {
  --ui-ed-tray: #161618;
  --ui-ed-card: #232326;
  --ui-ed-card-line: rgba(255, 255, 255, 0.08);
  --ui-ed-line: rgba(255, 255, 255, 0.07);
  --ui-ed-ink: #ededed;
  --ui-ed-text: #c4c4c4;
  --ui-ed-muted: #8f8f8f;
  --ui-ed-chip: #2a2a2d;
  --ui-ed-chip-line: rgba(255, 255, 255, 0.08);
  --ui-ed-hover: rgba(255, 255, 255, 0.05);
  --ui-ed-warn: #fb9a4b;
  --ui-ed-warn-bg: rgba(251, 154, 75, 0.14);
  --ui-ed-ok: #6fd27a;
  --ui-ed-ok-bg: rgba(111, 210, 122, 0.14);
  --ui-ed-btn-top: #f4f4f5;
  --ui-ed-btn-bottom: #e4e4e7;
  --ui-ed-btn-ring: rgba(0, 0, 0, 0.6);
  --ui-ed-btn-text: #121213;
  --ui-ed-focus: #6b95ff;
  --ui-ed-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
`,Fn=["No signal","Weak signal","Good signal","Strong signal"],wi=m=>{const T=Math.round(Number(m));return Number.isFinite(T)?Math.min(3,Math.max(0,T)):0},o0=m=>new RegExp("^\\p{Lu}\\p{Ll}","u").test(m)?m.charAt(0).toLowerCase()+m.slice(1):m;function f0({title:m="Smart recommendation",options:T,onAccept:E,onUndo:o,defaultOpen:M=!0,className:H}){const[Q,P]=B.useState(0),[A,_]=B.useState(null),[k,U]=B.useState(M),[O,J]=B.useState(!1),W=B.useRef(null),[vt,mt]=B.useState(!1);B.useLayoutEffect(()=>{const w=W.current,G=w?.querySelector(".ui-sr__menu"),nt=w?.closest(".ui-sr");if(!O||!w||!G||!nt||getComputedStyle(w).position==="static")return mt(!1);mt(w.getBoundingClientRect().right-G.offsetWidth<nt.getBoundingClientRect().left-24)},[O]),B.useEffect(()=>{if(!O)return;const w=nt=>!W.current?.contains(nt.target)&&J(!1),G=nt=>nt.key==="Escape"&&J(!1);return window.addEventListener("pointerdown",w),window.addEventListener("keydown",G),()=>{window.removeEventListener("pointerdown",w),window.removeEventListener("keydown",G)}},[O]);const R=Q<T.length?Q:0,$=T[R];if(!$)return null;const Z=R===0,it=A===R,ut=wi($.signal),tt=`Accept ${o0(String($.label))}`;return s.jsxs(s.Fragment,{children:[s.jsx("style",{href:"ui-smart-recommendation",precedence:"default",children:h0}),s.jsxs("section",{className:["ui-sr",H].filter(Boolean).join(" "),"aria-label":m,"data-accepted":it||void 0,children:[s.jsxs("div",{className:"ui-sr__card",children:[s.jsxs("button",{type:"button",className:"ui-sr__head","aria-expanded":k,onClick:()=>U(w=>!w),children:[s.jsx(d0,{}),s.jsx("span",{className:"ui-sr__title",dir:"auto",title:m,children:m}),!Z&&s.jsx("span",{className:"ui-sr__pill",children:"Alternative"}),s.jsx("span",{className:"ui-sr__chevron",children:s.jsx(Ns,{d:"m4.5 6.25 3.5 3.5 3.5-3.5"})})]}),s.jsx("div",{className:"ui-sr__body","data-open":k||void 0,inert:!k,children:s.jsx("p",{className:"ui-sr__reason",dir:"auto",children:$.reason},R)})]}),s.jsxs("footer",{className:"ui-sr__foot",children:[s.jsxs("span",{className:"ui-sr__signal","data-level":ut,title:Fn[ut],children:[s.jsx("span",{className:"ui-sr__bars","aria-hidden":"true",children:[1,2,3].map(w=>s.jsx("span",{"data-on":ut>=w||void 0},w))}),Fn[ut]]}),s.jsxs("div",{className:"ui-sr__actions",children:[T.length>1&&!it&&s.jsxs("div",{className:"ui-sr__alt",ref:W,children:[s.jsx("button",{type:"button",className:"ui-sr__btn","aria-haspopup":"menu","aria-expanded":O,onClick:()=>J(w=>!w),children:"Alternatives"}),O&&s.jsx("div",{className:"ui-sr__menu",role:"menu","data-flip":vt||void 0,children:T.map((w,G)=>s.jsxs("button",{type:"button",role:"menuitemradio","aria-checked":G===R,className:"ui-sr__option",onClick:()=>{P(G),J(!1),U(!0)},children:[s.jsxs("span",{className:"ui-sr__option-label",children:[s.jsx("span",{className:"ui-sr__option-name",dir:"auto",title:w.label,children:w.label}),G===0&&s.jsx("span",{className:"ui-sr__tag",children:"Recommended"})]}),s.jsx("span",{className:"ui-sr__mini","data-level":wi(w.signal),"aria-label":Fn[wi(w.signal)],children:[1,2,3].map(nt=>s.jsx("span",{"data-on":wi(w.signal)>=nt||void 0},nt))})]},`${w.id}-${G}`))})]}),it?s.jsxs(s.Fragment,{children:[s.jsxs("span",{className:"ui-sr__done",role:"status",children:[s.jsx(Ns,{d:"m3.5 8.5 3 3 6-7",size:14}),s.jsxs("span",{className:"ui-sr__done-text",title:`${$.label} accepted`,children:[s.jsx("bdi",{children:$.label})," accepted"]})]}),s.jsx("button",{type:"button",className:"ui-sr__btn",onClick:()=>{_(null),o?.($)},children:"Undo"})]}):s.jsx("button",{type:"button",className:"ui-sr__btn ui-sr__btn--primary",title:tt,onClick:()=>{_(R),J(!1),E?.($)},children:s.jsx("span",{className:"ui-sr__btn-text",children:tt})})]})]})]})]})}const d0=()=>s.jsxs("svg",{className:"ui-sr__spark",viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[s.jsx("path",{d:"M9 3.5H4A1.5 1.5 0 0 0 2.5 5v7A1.5 1.5 0 0 0 4 13.5h7a1.5 1.5 0 0 0 1.5-1.5V8"}),s.jsx("path",{d:"M12.5 1.5v4M10.5 3.5h4"})]}),Ns=({d:m,size:T=16})=>s.jsx("svg",{viewBox:"0 0 16 16",width:T,height:T,fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:s.jsx("path",{d:m})}),h0=`
.ui-sr {
  --ui-sr-tray: #f0f0f0;
  --ui-sr-card: #ffffff;
  --ui-sr-ink: #171717;
  --ui-sr-text: #404040;
  --ui-sr-muted: #8f8f8f;
  --ui-sr-accent: #2f6bff;
  --ui-sr-ok: #1f8a4c;
  --ui-sr-accent-text: #2f6bff;
  --ui-sr-border: #e5e5e5;
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-sr-head-hover: #f8f8f8;
  --ui-sr-pill: #f4f0ff;
  --ui-sr-pill-text: #7c4dff;
  --ui-sr-bar: #d4d4d4;
  --ui-sr-btn: #fff;
  --ui-sr-btn-hover: #f7f7f7;
  --ui-sr-menu: #fff;
  --ui-sr-option-hover: #f5f5f5;
  --ui-sr-option-on: #f5f8ff;
  --ui-sr-tag: #eef3ff;
  --ui-sr-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 440px;
  container-type: inline-size;
  /* Like the Chat Composer: the white card on a gray tray, the actions live in the tray below */
  background: var(--ui-sr-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-sr-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-sr *, .ui-sr *::before, .ui-sr *::after { box-sizing: border-box; }
.ui-sr button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-sr button:focus-visible { outline: 2px solid var(--ui-sr-accent); outline-offset: 2px; }

.ui-sr__card {
  padding: 6px 8px 8px;
  background: var(--ui-sr-card);
  border: 1px solid var(--ui-sr-border);
  border-radius: 16px;
  box-shadow: var(--ui-sr-shadow);
}
.ui-sr__head {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  text-align: left;
  transition: background-color 140ms ease;
}
.ui-sr__head:hover { background: var(--ui-sr-head-hover); }
.ui-sr__spark { flex: none; color: var(--ui-sr-accent-text); }
.ui-sr__title { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 15px; font-weight: 500; }
.ui-sr__pill {
  flex: none;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--ui-sr-pill);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--ui-sr-pill-text);
}
.ui-sr__chevron { display: grid; margin-left: auto; color: var(--ui-sr-muted); transition: transform 280ms var(--ui-sr-ease); }
.ui-sr__head[aria-expanded="false"] .ui-sr__chevron { transform: rotate(-90deg); }
.ui-sr__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 340ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] { grid-template-rows: 1fr; }
.ui-sr__reason {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-sr-text);
  text-align: start;
  white-space: pre-line;
  overflow-wrap: anywhere;
  animation: ui-sr-swap 360ms var(--ui-sr-ease);
}
.ui-sr__body[data-open] .ui-sr__reason { padding-bottom: 8px; }
.ui-sr__reason strong { font-weight: 500; color: var(--ui-sr-ink); }

.ui-sr__foot {
  display: flex;
  align-items: center;
  /* Narrow containers: the actions move below the signal instead of running out of the tray */
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 10px;
  min-height: 50px;
  padding: 8px 8px 8px 16px;
}
.ui-sr__signal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  white-space: nowrap;
  color: var(--ui-sr-muted);
}
.ui-sr__bars, .ui-sr__mini { display: inline-flex; align-items: flex-end; gap: 2px; }
.ui-sr__bars span, .ui-sr__mini span {
  width: 3px;
  border-radius: 1px;
  background: var(--ui-sr-bar);
  transition: background-color 260ms ease;
}
.ui-sr__bars span:nth-child(1), .ui-sr__mini span:nth-child(1) { height: 6px; }
.ui-sr__bars span:nth-child(2), .ui-sr__mini span:nth-child(2) { height: 9px; }
.ui-sr__bars span:nth-child(3), .ui-sr__mini span:nth-child(3) { height: 12px; }
/* Scoped to the card, so other components with data-level on the page keep their colors */
.ui-sr [data-level="1"] > span[data-on] { background: #f59e0b; }
.ui-sr [data-level="2"] > span[data-on] { background: var(--ui-sr-accent); }
.ui-sr [data-level="3"] > span[data-on] { background: var(--ui-sr-ok); }
.ui-sr__signal[data-level="0"] .ui-sr__bars span:first-child { background: #8f8f8f; }

/* Never wider than the row – a long label shortens in its button instead of running out of the tray */
.ui-sr__actions { display: flex; align-items: center; gap: 6px; min-width: 0; max-width: 100%; margin-left: auto; }
.ui-sr__alt, .ui-sr__actions > .ui-sr__btn:not(.ui-sr__btn--primary) { flex: none; }
.ui-sr__btn {
  height: 32px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  background: var(--ui-sr-btn);
  box-shadow: 0 0 0 1px var(--ui-sr-border), 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 13px !important;
  font-weight: 500;
  min-width: 0;
  max-width: 100%;
  white-space: nowrap;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-sr__btn--primary { display: inline-flex; align-items: center; }
.ui-sr__btn-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-sr__btn:hover { background: var(--ui-sr-btn-hover); }
.ui-sr__btn:active { transform: scale(0.98); }
.ui-sr__btn--primary {
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  color: #fff !important;
}
.ui-sr__btn--primary:hover { background: linear-gradient(#3b3a41, #26242b); }
.ui-sr__done {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding-right: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-sr-ok);
  animation: ui-sr-swap 300ms var(--ui-sr-ease);
}

.ui-sr__alt { position: relative; }
.ui-sr__menu {
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  z-index: 5;
  display: grid;
  gap: 2px;
  /* The column never grows with a long name; a long list scrolls */
  grid-template-columns: minmax(0, 1fr);
  width: 260px;
  max-height: min(320px, 60vh);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 4px;
  border-radius: 12px;
  background: var(--ui-sr-menu);
  box-shadow: 0 0 0 1px var(--ui-sr-border), 0 12px 30px -8px rgba(0, 0, 0, 0.2);
  animation: ui-sr-drop 180ms var(--ui-sr-ease);
}
.ui-sr__menu[data-flip] { right: auto; left: 0; }
/* Narrow: the actions sit on their own row – the menu lines up with its right edge so it stays inside */
@container (max-width: 420px) {
  .ui-sr__actions { position: relative; }
  .ui-sr__alt { position: static; }
  .ui-sr__menu { width: min(260px, 100cqw - 24px); }
}
.ui-sr__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 34px;
  padding: 0 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 13px !important;
  text-align: left;
}
.ui-sr__option:hover { background: var(--ui-sr-option-hover); }
.ui-sr__option[aria-checked="true"] { background: var(--ui-sr-option-on); }
.ui-sr__option-label { display: inline-flex; flex: 0 1 auto; align-items: center; gap: 6px; min-width: 0; }
.ui-sr__option-name, .ui-sr__done-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-sr__tag, .ui-sr__mini { flex: none; }
.ui-sr__tag { padding: 0 6px; border-radius: 999px; background: var(--ui-sr-tag); font-size: 10.5px; font-weight: 500; line-height: 16px; color: var(--ui-sr-accent-text); }

@keyframes ui-sr-swap { from { opacity: 0; transform: translateY(2px); } }
@keyframes ui-sr-drop { from { opacity: 0; transform: translateY(4px) scale(0.98); } }
@media (prefers-reduced-motion: reduce) {
  .ui-sr__reason, .ui-sr__done, .ui-sr__menu { animation: none; }
  .ui-sr__body, .ui-sr__chevron { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-sr {
  --ui-sr-tray: #161618;
  --ui-sr-card: #232326;
  --ui-sr-ink: #ededed;
  --ui-sr-text: #c4c4c4;
  --ui-sr-muted: #8f8f8f;
  --ui-sr-ok: #3dbb6f;
  --ui-sr-accent-text: #6b95ff;
  --ui-sr-border: rgba(255, 255, 255, 0.08);
  --ui-sr-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-sr-head-hover: rgba(255, 255, 255, 0.06);
  --ui-sr-pill: rgba(139, 92, 246, 0.18);
  --ui-sr-pill-text: #b49cff;
  --ui-sr-bar: rgba(255, 255, 255, 0.14);
  --ui-sr-btn: #2a2a2d;
  --ui-sr-btn-hover: #313135;
  --ui-sr-menu: #2a2a2d;
  --ui-sr-option-hover: #313135;
  --ui-sr-option-on: rgba(47, 107, 255, 0.16);
  --ui-sr-tag: rgba(47, 107, 255, 0.16);
}
:where(.dark, [data-theme="dark"]) .ui-sr__menu {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 12px 30px -8px rgba(0, 0, 0, 0.5);
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
:where(.dark, [data-theme="dark"]) .ui-sr__btn--primary:hover { background: linear-gradient(#ffffff, #ececef); }
`;function m0({title:m="What's changed",period:T,icon:E,changes:o,className:M}){return s.jsxs(s.Fragment,{children:[s.jsx("style",{href:"ui-change-summary",precedence:"default",children:_0}),s.jsxs("section",{className:["ui-cs",M].filter(Boolean).join(" "),"aria-label":m,children:[s.jsxs("header",{className:"ui-cs__head",children:[s.jsxs("span",{className:"ui-cs__title",children:[s.jsx("span",{className:"ui-cs__icon",children:E??s.jsx(p0,{})}),s.jsx("span",{className:"ui-cs__title-text",dir:"auto",title:m,children:m})]}),T&&s.jsx("span",{className:"ui-cs__period",dir:"auto",title:T,children:T})]}),o.length>0&&s.jsx("dl",{className:"ui-cs__card",children:o.map((H,Q)=>{const P=H.tone==="good"||H.tone==="bad"?H.tone:"neutral",A=H.direction??(P==="bad"?"down":"up");return s.jsxs("div",{className:"ui-cs__row",style:{animationDelay:`${120+Math.min(Q,12)*70}ms`},children:[s.jsx("dt",{className:"ui-cs__label",dir:"auto",title:H.label,children:H.label}),s.jsxs("dd",{className:"ui-cs__change",children:[s.jsx("span",{className:"ui-cs__trend","data-tone":P,"aria-hidden":"true",children:P==="neutral"?s.jsx(v0,{}):s.jsx(g0,{down:A==="down"})}),s.jsx("span",{className:"ui-cs__text",dir:"auto",title:H.change,children:H.change})]})]},`${Q}-${H.label}`)})})]})]})}const p0=()=>s.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round","aria-hidden":"true",children:s.jsx("path",{d:"M2.5 4h4M2.5 8h8M6.5 12h7M9.5 4h1"})}),g0=({down:m})=>s.jsx("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:m?s.jsx("path",{d:"M6 2.5v7M3 6.5l3 3 3-3"}):s.jsx("path",{d:"M6 9.5v-7M3 5.5l3-3 3 3"})}),v0=()=>s.jsx("svg",{viewBox:"0 0 12 12",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round","aria-hidden":"true",children:s.jsx("path",{d:"M3 6h6"})}),_0=`
.ui-cs {
  --ui-cs-tray: #f0f0f0;
  --ui-cs-card: #ffffff;
  --ui-cs-line: #f0f0f0;
  --ui-cs-ink: #171717;
  --ui-cs-muted: #737373;
  --ui-cs-accent: #2f6bff;
  --ui-cs-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  container-type: inline-size;
  /* Like the Chat Composer: a gray tray with the heading, the white card sits on top of it */
  background: var(--ui-cs-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-cs-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-cs *, .ui-cs *::before, .ui-cs *::after { box-sizing: border-box; }

.ui-cs__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 18px 10px;
  font-size: 14px;
  line-height: 20px;
}
.ui-cs__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-weight: 500;
  color: var(--ui-cs-accent);
}
.ui-cs__icon { display: grid; place-items: center; flex: none; width: 16px; height: 16px; overflow: hidden; }
/* A custom icon – an image too – fits the 16px tile */
.ui-cs__icon > :is(img, svg) { display: block; width: 16px; height: 16px; object-fit: contain; }
.ui-cs__title-text { min-width: 0; overflow-wrap: anywhere; }
/* The period shortens before it squeezes the title */
.ui-cs__period { flex: 0 1 auto; min-width: 0; max-width: 50%; overflow: hidden; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; color: var(--ui-cs-muted); }

.ui-cs__card {
  margin: 0;
  overflow: hidden;
  background: var(--ui-cs-card);
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
.ui-cs__row {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  align-items: center;
  gap: 16px;
  min-height: 52px;
  padding: 0 20px;
  animation: ui-cs-in 520ms var(--ui-cs-ease) both;
  transition: background-color 140ms ease;
}
.ui-cs__row + .ui-cs__row { border-top: 1px solid var(--ui-cs-line); }
.ui-cs__row:hover { background: #fafafa; }
.ui-cs__label {
  overflow: hidden;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  text-align: start;
}
.ui-cs__change {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: var(--ui-cs-muted);
}
/* The change keeps its numbers: it wraps up to three lines instead of being cut off */
.ui-cs__text { display: -webkit-box; overflow: hidden; white-space: pre-line; overflow-wrap: anywhere; text-align: start; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
/* Narrow: each metric stacks above its change, so the text wraps instead of being cut off */
@container (max-width: 400px) {
  .ui-cs__row { grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 11px 16px; }
  .ui-cs__label { white-space: normal; }
  .ui-cs__change { align-items: flex-start; }
}
.ui-cs__trend {
  display: grid;
  place-items: center;
  flex: none;
  width: 20px;
  height: 20px;
  border-radius: 6px;
}
.ui-cs__trend[data-tone="good"] { background: #edfaf3; color: #1f8a4c; }
.ui-cs__trend[data-tone="bad"] { background: #fff0f0; color: #e5484d; }
.ui-cs__trend[data-tone="neutral"] { background: #f5f5f5; color: #8f8f8f; }

@keyframes ui-cs-in {
  from { opacity: 0; transform: translateY(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-cs__row { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-cs {
  --ui-cs-tray: #161618;
  --ui-cs-card: #232326;
  --ui-cs-line: rgba(255, 255, 255, 0.08);
  --ui-cs-ink: #ededed;
  --ui-cs-muted: #8f8f8f;
  --ui-cs-accent: #6b95ff;
}
:where(.dark, [data-theme="dark"]) .ui-cs__card {
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-cs__row:hover { background: #2a2a2d; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="good"] { background: rgba(31, 138, 76, 0.18); color: #3fbf74; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="bad"] { background: rgba(229, 72, 77, 0.16); color: #f2777b; }
:where(.dark, [data-theme="dark"]) .ui-cs__trend[data-tone="neutral"] { background: #2a2a2d; color: #8f8f8f; }
`;function y0(m,T){const E=Math.max(0,Math.round((T-m)/1e3));if(E<45)return"just now";const o=Math.round(E/60);if(o<60)return`${o}min ago`;const M=Math.round(o/60);if(M<24)return`${M}h ago`;const H=Math.round(M/24);return H<30?`${H}d ago`:H<365?`${Math.round(H/30)}mo ago`:`${Math.round(H/365)}y ago`}const b0=new Intl.NumberFormat("en"),x0=m=>m.split(/\s+/).map(T=>Array.from(T).find(E=>/[\p{L}\p{N}]/u.test(E))).filter(Boolean).slice(0,2).join("").toUpperCase();function S0({title:m="Comment",messages:T,currentUser:E,assistant:o,onReply:M,onClose:H,className:Q}){const[P,A]=B.useState(T),[_]=B.useState(()=>new Set(T.filter(w=>w.author.assistant).map(w=>w.id))),[k,U]=B.useState(new Set),[O,J]=B.useState(""),[W,vt]=B.useState(!1),[mt,R]=B.useState(()=>Date.now()),$=B.useRef(null),Z=w0($);B.useEffect(()=>{const w=window.setInterval(()=>R(Date.now()),3e4);return()=>window.clearInterval(w)},[]),B.useEffect(()=>{$.current?.scrollTo({top:$.current.scrollHeight,behavior:"smooth"})},[P.length,W]);const it=async()=>{const w=O.trim();if(!w||W)return;J(""),R(Date.now()),ut(!0),A(nt=>[...nt,{id:`m-${Date.now()}`,author:E,createdAt:Date.now(),text:w}]);const G=M?.(w);if(G){vt(!0);try{const nt=await G;nt&&A($t=>[...$t,{...nt,createdAt:Date.now()}])}finally{vt(!1),R(Date.now())}}},ut=w=>{const G=$.current;G&&(G.style.maxHeight=w?`${G.offsetHeight}px`:"")},tt=w=>{ut(!1),U(G=>{const nt=new Set(G);return nt.has(w)?nt.delete(w):nt.add(w),nt})};return s.jsxs(s.Fragment,{children:[s.jsx("style",{href:"ui-comment-thread",precedence:"default",children:z0}),s.jsxs("section",{className:["ui-ct",Q].filter(Boolean).join(" "),"aria-label":m,children:[s.jsxs("header",{className:"ui-ct__head",children:[s.jsx("h3",{className:"ui-ct__title",title:m,dir:"auto",children:m}),s.jsxs("span",{className:"ui-ct__count",children:[b0.format(P.length)," ",P.length===1?"message":"messages"]}),H&&s.jsx("button",{type:"button",className:"ui-ct__icon-btn","aria-label":"Close comment",onClick:H,children:s.jsx(zi,{d:"m4 4 8 8M12 4l-8 8"})})]}),s.jsx("div",{className:"ui-ct__card ui-ct__morph",ref:Z,children:s.jsxs("div",{className:"ui-ct__scroll",ref:$,"aria-live":"polite",children:[P.map(w=>{const G=k.has(w.id),nt=/^\/edit\b/i.test(w.text.trim());return s.jsxs("article",{className:"ui-ct__msg","data-delayed":_.has(w.id)||void 0,children:[s.jsxs("div",{className:"ui-ct__meta",children:[s.jsx(Ms,{author:w.author}),s.jsx("span",{className:"ui-ct__name",title:w.author.name,dir:"auto",children:w.author.name}),s.jsx("time",{className:"ui-ct__time",dateTime:new Date(w.createdAt).toISOString(),children:y0(+w.createdAt,mt)})]}),w.text&&s.jsx("p",{className:"ui-ct__text",dir:"auto",children:nt?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"ui-ct__command",children:"/Edit"})," ",w.text.trim().replace(/^\/edit\s*/i,"")]}):w.text}),w.status&&s.jsxs("div",{className:"ui-ct__status",children:[s.jsxs("button",{type:"button",className:"ui-ct__status-btn","aria-expanded":G,disabled:!w.details?.length,onClick:()=>tt(w.id),children:[s.jsx("span",{className:"ui-ct__check",children:s.jsx(zi,{d:"m4 8.3 2.6 2.6L12 5.4",size:12})}),s.jsx("span",{className:"ui-ct__status-text",title:w.status,dir:"auto",children:w.status}),!!w.details?.length&&s.jsx("span",{className:"ui-ct__chevron",children:s.jsx(zi,{d:"m4.5 6.25 3.5 3.5 3.5-3.5",size:14})})]}),!!w.details?.length&&s.jsx("div",{className:"ui-ct__details","data-open":G||void 0,inert:!G,children:s.jsx("ul",{children:w.details.map(($t,Xt)=>s.jsx("li",{dir:"auto",style:{"--i":Xt},children:$t},Xt))})})]})]},w.id)}),W&&o&&s.jsxs("article",{className:"ui-ct__msg","aria-label":`${o.name} is thinking`,children:[s.jsxs("div",{className:"ui-ct__meta",children:[s.jsx(Ms,{author:o}),s.jsx("span",{className:"ui-ct__name",children:o.name})]}),s.jsx("p",{className:"ui-ct__thinking",children:"Thinking…"})]})]})}),s.jsxs("form",{className:"ui-ct__composer",onSubmit:w=>{w.preventDefault(),it()},children:[s.jsx("input",{className:"ui-ct__input",value:O,onChange:w=>J(w.target.value),placeholder:o?`Reply, or ask @${o.name}…`:"Add comment…","aria-label":"Reply"}),s.jsx("button",{type:"submit",className:"ui-ct__send","aria-label":"Send reply",disabled:!O.trim()||W,children:s.jsx(zi,{d:"M8 13V3M3.5 7.5 8 3l4.5 4.5",size:14})})]})]})]})}function Ms({author:m}){const[T,E]=B.useState(!1);return m.avatar&&typeof m.avatar!="string"?s.jsx("span",{className:"ui-ct__avatar",children:m.avatar}):typeof m.avatar=="string"&&!T?s.jsx("img",{className:"ui-ct__avatar",src:m.avatar,alt:"",width:24,height:24,loading:"lazy",onError:()=>E(!0)}):s.jsx("span",{className:"ui-ct__avatar ui-ct__avatar--initials","aria-hidden":"true",children:x0(m.name)})}const zi=({d:m,size:T=16})=>s.jsx("svg",{viewBox:"0 0 16 16",width:T,height:T,fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:s.jsx("path",{d:m})});function w0(m){const T=B.useRef(null);return B.useLayoutEffect(()=>{const E=T.current,o=m.current;if(!E||!o)return;const M=()=>{E.style.height=`${o.offsetHeight}px`};M();const H=new ResizeObserver(M);H.observe(o);const Q=requestAnimationFrame(()=>E.setAttribute("data-smooth",""));return()=>{H.disconnect(),cancelAnimationFrame(Q)}},[m]),T}const z0=`
.ui-ct {
  --ui-ct-tray: #f0f0f0;
  --ui-ct-card: #ffffff;
  --ui-ct-ink: #171717;
  --ui-ct-text: #404040;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-accent: #2f6bff;
  --ui-ct-ok: #1f8a4c;
  --ui-ct-accent-text: #2f6bff;
  --ui-ct-border: #e5e5e5;
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ct-hover: rgba(0, 0, 0, 0.05);
  --ui-ct-row-hover: #f5f5f5;
  --ui-ct-initials: #eef3ff;
  --ui-ct-dot: #d4d4d4;
  --ui-ct-subtle: #a3a3a3;
  --ui-ct-avatar-ring: rgba(0, 0, 0, 0.06);
  --ui-ct-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  /* Like the Chat Composer: a gray tray with heading and reply field, the white card sits on top of it */
  background: var(--ui-ct-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ct-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ct *, .ui-ct *::before, .ui-ct *::after { box-sizing: border-box; }
.ui-ct button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-ct button:focus-visible { outline: 2px solid var(--ui-ct-accent); outline-offset: 2px; }

.ui-ct__head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 6px 10px 6px 18px;
}
/* A long title takes two lines at most – the count and close stay in place */
.ui-ct__title { display: -webkit-box; min-width: 0; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow-wrap: anywhere; margin: 0; font-size: 15px; font-weight: 500; line-height: 22px; }
.ui-ct__count { flex: none; margin-right: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); }
.ui-ct__icon-btn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--ui-ct-muted) !important;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ct__icon-btn:hover { background: var(--ui-ct-hover); color: var(--ui-ct-ink) !important; }

.ui-ct__card {
  background: var(--ui-ct-card);
  border: 1px solid var(--ui-ct-border);
  border-radius: 16px;
  box-shadow: var(--ui-ct-shadow);
}
.ui-ct__scroll {
  display: grid;
  gap: 18px;
  align-content: start;
  min-height: var(--ui-ct-min-height, 0px);
  max-height: var(--ui-ct-max-height, 340px);
  padding: 16px 18px 18px;
  overflow-y: auto;
  scrollbar-width: thin;
}
/* Each message builds up piece by piece: name row, text, status – the assistant's first reply a beat later */
.ui-ct__msg { --ui-ct-d: 0ms; min-width: 0; }
.ui-ct__msg[data-delayed] { --ui-ct-d: 700ms; }
.ui-ct__msg > * { animation: ui-ct-in 420ms var(--ui-ct-ease) both; animation-delay: var(--ui-ct-d); }
.ui-ct__msg > :nth-child(2) { animation-delay: calc(var(--ui-ct-d) + 80ms); }
.ui-ct__msg > :nth-child(3) { animation-delay: calc(var(--ui-ct-d) + 160ms); }
.ui-ct__meta { display: flex; align-items: center; gap: 9px; min-width: 0; }
.ui-ct__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ct__avatar { box-shadow: 0 0 0 1px var(--ui-ct-avatar-ring); }
.ui-ct__avatar svg { width: 100%; height: 100%; }
.ui-ct__avatar--initials { background: var(--ui-ct-initials); font-size: 9px; font-weight: 600; color: var(--ui-ct-accent-text); }
.ui-ct__name { min-width: 0; overflow: hidden; font-size: 14px; font-weight: 500; line-height: 20px; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__time { flex: none; margin-left: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); font-variant-numeric: tabular-nums; }
.ui-ct__text { margin: 8px 0 0; font-size: 14px; line-height: 21px; overflow-wrap: anywhere; white-space: pre-line; text-align: start; color: var(--ui-ct-text); }
.ui-ct__command { color: var(--ui-ct-muted); }

.ui-ct__status { margin-top: 8px; }
.ui-ct__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 14px !important;
  transition: background-color 140ms ease;
}
/* The global button reset sets margin: 0 – shift the row so the check icon sits centered under the avatars */
.ui-ct .ui-ct__status-btn { margin-left: -4px; }
.ui-ct__status-btn:hover:not(:disabled) { background: var(--ui-ct-row-hover); }
.ui-ct__status-btn:disabled { cursor: default; }
.ui-ct__status-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__check, .ui-ct__chevron { flex: none; }
.ui-ct__check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ui-ct-ok);
  color: #fff;
}
.ui-ct__chevron { display: grid; color: var(--ui-ct-muted); transition: transform 260ms var(--ui-ct-ease); }
.ui-ct__status-btn[aria-expanded="true"] .ui-ct__chevron { transform: rotate(180deg); }
.ui-ct__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ct-ease);
}
.ui-ct__details[data-open] { grid-template-rows: 1fr; }
.ui-ct__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ct__details li {
  position: relative;
  margin-top: 6px;
  font-size: 13px;
  line-height: 19px;
  overflow-wrap: anywhere;
  text-align: start;
  color: var(--ui-ct-muted);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ct-ease);
}
/* Opening: lines come in one after another */
.ui-ct__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Tree lines instead of dots: each line gets its own corner – down on the axis of the check icon, then a rounded turn right */
.ui-ct__details li:first-child { margin-top: 5px; }
.ui-ct__details li::before {
  content: "";
  position: absolute;
  left: -16.625px;
  top: -3px;
  width: 10.5px;
  height: 13px;
  border-left: 1.25px solid var(--ui-ct-dot);
  border-bottom: 1.25px solid var(--ui-ct-dot);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ct__details li:first-child::before {
  top: -5px;
  height: 15px;
}

.ui-ct__thinking {
  display: inline-block;
  margin: 8px 0 0;
  font-size: 14px;
  background: linear-gradient(90deg, var(--ui-ct-subtle) 0%, var(--ui-ct-subtle) 35%, rgba(255, 255, 255, 0.9) 50%, var(--ui-ct-subtle) 65%, var(--ui-ct-subtle) 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-ct-shine 1.6s linear infinite;
}

.ui-ct__composer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 9px 9px 18px;
}
.ui-ct__input {
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ui-ct-ink);
}
.ui-ct__input::placeholder { color: var(--ui-ct-subtle); }
.ui-ct__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff !important;
  transition: opacity 160ms ease, transform 160ms ease;
}
.ui-ct__send:disabled { opacity: 0.3; cursor: default; }
.ui-ct__send:not(:disabled):active { transform: scale(0.94); }

@keyframes ui-ct-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ct-shine { from { background-position: 100% 0; } to { background-position: 0% 0; } }
@media (prefers-reduced-motion: reduce) {
  .ui-ct__msg > *, .ui-ct__thinking { animation: none; }
  .ui-ct__details, .ui-ct__details li, .ui-ct__chevron { transition: none; }
}

/* Height changes glide instead of jumping */
.ui-ct__morph { overflow: hidden; }
.ui-ct__morph[data-smooth] { transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1); }
@media (prefers-reduced-motion: reduce) { .ui-ct__morph[data-smooth] { transition: none; } }


/* Text fields: no focus box while typing – also against global :focus-visible rules of the host page */
.ui-ct input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ct textarea:focus-visible,
.ui-ct [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ct {
  --ui-ct-tray: #161618;
  --ui-ct-card: #232326;
  --ui-ct-ink: #ededed;
  --ui-ct-text: #c4c4c4;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-ok: #2a9d5c;
  --ui-ct-accent-text: #6b95ff;
  --ui-ct-border: rgba(255, 255, 255, 0.08);
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-ct-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-row-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-initials: rgba(47, 107, 255, 0.16);
  --ui-ct-dot: rgba(255, 255, 255, 0.14);
  --ui-ct-subtle: #6b6b70;
  --ui-ct-avatar-ring: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ct__send {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
`,Os=12;function j0({notices:m,onDismiss:T,className:E}){const[o,M]=B.useState(m),[H,Q]=B.useState(new Set),P=B.useRef(new Set),[A,_]=B.useState(m);m!==A&&(_(m),M(m.filter(R=>!P.current.has(R.id))));const[k,U]=B.useState({}),O=B.useRef(new Map),J=o.filter(R=>!H.has(R.id)),W=Math.min(J.length-1,2);B.useLayoutEffect(()=>{const R=()=>{const Z={};O.current.forEach((it,ut)=>Z[ut]=it.scrollHeight+it.offsetHeight-it.clientHeight),U(Z)};R();const $=new ResizeObserver(R);return O.current.forEach(Z=>$.observe(Z)),()=>$.disconnect()},[o]);const vt=R=>{Q($=>new Set($).add(R.id)),T?.(R),window.setTimeout(()=>{P.current.add(R.id),M($=>$.filter(Z=>Z.id!==R.id)),Q($=>{const Z=new Set($);return Z.delete(R.id),Z})},320)},mt=J[0]?k[J[0].id]??0:0;return s.jsxs(s.Fragment,{children:[s.jsx("style",{href:"ui-notification-stack",precedence:"default",children:N0}),s.jsx("section",{className:["ui-ns",E].filter(Boolean).join(" "),"aria-label":"Notifications",style:{height:J.length?mt+W*Os:0},children:o.map(R=>{const $=J.findIndex(G=>G.id===R.id),Z=$===-1,it=Math.max(0,$);if(!Z&&it>3)return null;const ut=!Z&&it>0,tt=Z||it===0?0:mt-Math.min(k[R.id]??mt,mt)+Math.min(it,2)*Os,w=Z?1:1-Math.min(it,2)*.05;return s.jsxs("article",{ref:G=>{G?O.current.set(R.id,G):O.current.delete(R.id)},className:"ui-ns__card","data-depth":Z?void 0:it,"data-leaving":Z||void 0,"aria-labelledby":`${R.id}-title`,"aria-hidden":ut||void 0,inert:ut||Z,style:{zIndex:Z?10:10-it,transform:Z?void 0:`translateY(${tt}px) scale(${w})`,opacity:it>2?0:void 0,maxHeight:ut&&mt?mt:void 0},children:[s.jsx(T0,{kind:R.pattern??"orbit"}),s.jsxs("div",{className:"ui-ns__body",children:[s.jsxs("div",{className:"ui-ns__top",children:[R.badge?s.jsx("span",{className:"ui-ns__badge",dir:"auto",title:R.badge,children:R.badge}):s.jsx("span",{}),s.jsx("button",{type:"button",className:"ui-ns__close","aria-label":`Dismiss ${R.title}`,onClick:G=>{G.stopPropagation(),vt(R)},children:s.jsx(E0,{})})]}),s.jsx("h3",{id:`${R.id}-title`,className:"ui-ns__title",dir:"auto",children:R.title}),s.jsx("p",{className:"ui-ns__text",dir:"auto",children:R.text}),R.action&&(R.action.href?s.jsxs("a",{className:"ui-ns__btn",dir:"auto",href:R.action.href,onClick:R.action.onClick,...R.action.external?{target:"_blank",rel:"noreferrer"}:{},children:[R.action.label,R.action.external&&s.jsx(A0,{})]}):s.jsx("button",{type:"button",className:"ui-ns__btn",dir:"auto",onClick:R.action.onClick,children:R.action.label}))]})]},R.id)})})]})}function T0({kind:m}){return s.jsxs("svg",{className:"ui-ns__pattern",viewBox:"0 0 220 160",fill:"none","aria-hidden":"true",children:[m==="orbit"&&s.jsxs(s.Fragment,{children:[s.jsx("circle",{cx:"190",cy:"10",r:"46"}),s.jsx("circle",{cx:"190",cy:"10",r:"86"}),s.jsx("circle",{cx:"190",cy:"10",r:"128"}),s.jsx("path",{d:"M60 160 220 0M0 58h220M150 0v160"}),s.jsx("circle",{cx:"150",cy:"58",r:"3.5",className:"ui-ns__dot"})]}),m==="grid"&&s.jsxs(s.Fragment,{children:[[30,60,90,120,150,180,210].map(T=>s.jsx("path",{d:`M${T} 0v160`},`x${T}`)),[20,50,80,110,140].map(T=>s.jsx("path",{d:`M0 ${T}h220`},`y${T}`)),s.jsx("rect",{x:"150",y:"50",width:"30",height:"30",className:"ui-ns__fill"}),s.jsx("circle",{cx:"180",cy:"50",r:"3.5",className:"ui-ns__dot"})]}),m==="rays"&&s.jsxs(s.Fragment,{children:[[0,1,2,3,4,5,6,7].map(T=>s.jsx("path",{d:`M210 6 L${210-Math.cos(T*Math.PI/16)*230} ${6+Math.sin(T*Math.PI/16)*230}`},T)),s.jsx("path",{d:"M120 6a90 90 0 0 0 90 90"}),s.jsx("circle",{cx:"146",cy:"70",r:"3.5",className:"ui-ns__dot"})]})]})}const E0=()=>s.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round","aria-hidden":"true",children:s.jsx("path",{d:"m4 4 8 8M12 4l-8 8"})}),A0=()=>s.jsx("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:s.jsx("path",{d:"M5 11 11 5M6 5h5v5"})}),N0=`
.ui-ns {
  --ui-ns-card: #ffffff;
  --ui-ns-line: #e5e5e5;
  --ui-ns-ink: #171717;
  --ui-ns-muted: #737373;
  --ui-ns-art: #e3e3e3;
  --ui-ns-accent: #2f6bff;
  --ui-ns-ease: cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 380px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ns-ink);
  -webkit-font-smoothing: antialiased;
  transition: height 460ms var(--ui-ns-ease);
}
.ui-ns *, .ui-ns *::before, .ui-ns *::after { box-sizing: border-box; }

.ui-ns__card {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--ui-ns-card);
  border: 1px solid var(--ui-ns-line);
  border-radius: 20px;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.035);
  transform-origin: 50% 100%;
  transition:
    transform 460ms var(--ui-ns-ease),
    opacity 300ms ease,
    box-shadow 300ms ease;
}
/* Cards behind show only their edge */
.ui-ns__card > * { transition: opacity 260ms ease; }
.ui-ns__card:not([data-depth="0"]) > * { opacity: 0; }
.ui-ns__card[data-leaving] {
  opacity: 0;
  transform: translateX(40px) scale(0.98) !important;
  transition: transform 320ms var(--ui-ns-ease), opacity 240ms ease;
}

.ui-ns__pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 160px;
  stroke: var(--ui-ns-art);
  stroke-width: 1;
  pointer-events: none;
  /* Only the top-right corner, fading out towards the text */
  -webkit-mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
  mask-image: radial-gradient(120% 110% at 100% 0%, #000 20%, transparent 70%);
}
.ui-ns__dot { fill: #d4d4d4; stroke: none; }
.ui-ns__fill { fill: #f5f5f5; }

.ui-ns__body {
  position: relative;
  padding: 18px 20px 20px;
}
.ui-ns__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 26px;
  margin-bottom: 14px;
}
.ui-ns__badge {
  padding: 2px 9px;
  border-radius: 999px;
  background: #fff;
  box-shadow: inset 0 0 0 1px var(--ui-ns-line);
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #525252;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ui-ns__close {
  display: grid;
  flex: none;
  place-items: center;
  width: 28px;
  height: 28px;
  margin: -2px -6px 0 0;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--ui-ns-muted);
  cursor: pointer;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ns__close:hover { background: rgba(0, 0, 0, 0.05); color: var(--ui-ns-ink); }
.ui-ns__title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: start;
  overflow-wrap: anywhere;
}
.ui-ns__text {
  margin: 6px 0 0;
  max-width: 34ch;
  font-size: 14px;
  line-height: 21px;
  color: var(--ui-ns-muted);
  text-align: start;
  overflow-wrap: anywhere;
  white-space: pre-line;
}
.ui-ns__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* Grows with a long label instead of leaving the card */
  min-height: 32px;
  max-width: 100%;
  margin-top: 16px;
  padding: 6px 12px;
  border: 0;
  border-radius: 9px;
  background: #fff;
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--ui-ns-ink);
  text-align: start;
  overflow-wrap: anywhere;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 160ms ease, transform 160ms ease;
}
.ui-ns__btn:hover { background: #f7f7f7; }
.ui-ns__btn:active { transform: scale(0.98); }
.ui-ns__btn svg { flex: none; color: var(--ui-ns-muted); }
.ui-ns button:focus-visible,
.ui-ns a:focus-visible { outline: 2px solid var(--ui-ns-accent); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  .ui-ns, .ui-ns__card, .ui-ns__card > * { transition: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ns {
  --ui-ns-card: #232326;
  --ui-ns-line: rgba(255, 255, 255, 0.1);
  --ui-ns-ink: #ededed;
  --ui-ns-muted: #8f8f8f;
  --ui-ns-art: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ns__card {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 8px 24px rgba(0, 0, 0, 0.35);
}
:where(.dark, [data-theme="dark"]) .ui-ns__dot { fill: rgba(255, 255, 255, 0.22); }
:where(.dark, [data-theme="dark"]) .ui-ns__fill { fill: rgba(255, 255, 255, 0.04); }
:where(.dark, [data-theme="dark"]) .ui-ns__badge { background: #2a2a2d; color: #c4c4c4; }
:where(.dark, [data-theme="dark"]) .ui-ns__close:hover { background: rgba(255, 255, 255, 0.06); }
:where(.dark, [data-theme="dark"]) .ui-ns__btn {
  background: #2a2a2d;
  box-shadow: 0 0 0 1px var(--ui-ns-line), 0 1px 2px rgba(0, 0, 0, 0.4);
}
:where(.dark, [data-theme="dark"]) .ui-ns__btn:hover { background: #313135; }
`;function In({name:m,summary:T,icon:E,status:o,args:M,result:H,error:Q,startedAt:P,duration:A,defaultOpen:_=!1,open:k,onOpenChange:U,openOnError:O=!0,onRetry:J,maxCodeHeight:W=220,className:vt}){const mt=B.useId(),[R,$]=B.useState(_),Z=k??R,it=Ct=>{k===void 0&&$(Ct),U?.(Ct)},[ut,tt]=B.useState(o),[w,G]=B.useState(!1);o!==ut&&(tt(o),k===void 0&&O&&(o==="error"&&!R?($(!0),G(!0)):ut==="error"&&w&&($(!1),G(!1))));const nt=ks(o==="running",P,!1),$t=o==="running"?nt??0:A??nt,Xt=o==="running"?`${m} running`:o==="success"?`${m} finished`:`${m} failed${Q?`: ${Q}`:""}`;return s.jsxs("div",{className:["ui-tc",vt].filter(Boolean).join(" "),"data-status":o,"data-open":Z||void 0,children:[s.jsx("style",{href:"ui-tool-call",precedence:"default",children:qs}),s.jsx("span",{className:"ui-tc-sr",role:"status","aria-live":"polite",children:Xt}),s.jsxs("button",{type:"button",className:"ui-tc__head","aria-expanded":Z,"aria-controls":`${mt}-body`,onClick:()=>{G(!1),it(!Z)},children:[s.jsx("span",{className:"ui-tc__icon","aria-hidden":"true",children:E??s.jsx(Hs,{})}),s.jsxs("span",{className:"ui-tc__main",children:[s.jsx("code",{className:"ui-tc__name",title:m,children:m}),T!=null&&s.jsx("span",{className:"ui-tc__summary",dir:"auto",title:typeof T=="string"?T:void 0,children:T})]}),s.jsxs("span",{className:"ui-tc__status",children:[o==="running"&&s.jsx(D0,{}),o==="success"&&s.jsx("svg",{className:"ui-tc__ok",viewBox:"0 0 16 16","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})}),o==="error"&&s.jsx(Cs,{}),s.jsx("span",{className:"ui-tc__time",children:o==="error"?"Failed":$t!=null?Bs($t,o==="running"):null})]},o),s.jsx(Rs,{})]}),s.jsx("div",{className:"ui-tc__body",id:`${mt}-body`,inert:!Z,children:s.jsx("div",{className:"ui-tc__clip",children:s.jsxs("div",{className:"ui-tc__sections",children:[o==="error"&&s.jsxs("div",{className:"ui-tc__error",children:[s.jsx(Cs,{}),s.jsx("p",{className:"ui-tc__error-text",dir:"auto",children:Q??"The tool call failed."}),J&&s.jsxs("button",{type:"button",className:"ui-tc__retry",onClick:J,children:[s.jsxs("svg",{viewBox:"0 0 16 16","aria-hidden":"true",children:[s.jsx("path",{d:"M2.75 8a5.25 5.25 0 1 0 1.6-3.77"}),s.jsx("path",{d:"M2.5 2.5v2.75h2.75"})]}),"Retry"]})]}),M!==void 0&&s.jsx(Us,{label:"Arguments",value:M,cap:W}),H!==void 0?s.jsx(Us,{label:"Result",value:H,cap:W}):o==="running"?s.jsxs("div",{className:"ui-tc__section",children:[s.jsx("div",{className:"ui-tc__section-head",children:s.jsx("span",{className:"ui-tc__label",children:"Result"})}),s.jsx("p",{className:"ui-tc__pending",children:"Waiting for result…"})]}):null,M===void 0&&H===void 0&&o==="success"&&s.jsx("p",{className:"ui-tc__pending",children:"No arguments or result."})]})})})]})}function M0({children:m,label:T,runningLabel:E="Using tools…",duration:o,defaultOpen:M=!1,open:H,onOpenChange:Q,className:P}){const A=B.useId(),[_,k]=B.useState(M),U=H??_,O=B.Children.toArray(m).filter(B.isValidElement).map(tt=>tt.props),J=O.some(tt=>tt.status==="running"),W=O.filter(tt=>tt.status==="error").length,vt=O.reduce((tt,w)=>w.status==="running"&&w.startedAt!=null&&(tt==null||w.startedAt<tt)?w.startedAt:tt,void 0),mt=ks(J,vt,!0),R=O.length&&O.every(tt=>tt.duration!=null)?O.reduce((tt,w)=>tt+(w.duration??0),0):null,$=J?mt:o??R??mt,Z=`Used ${O.length.toLocaleString("en-US")} ${O.length===1?"tool":"tools"}`,it=J?E:T??Z,ut=O.slice(-3);return s.jsxs("div",{className:["ui-tc-group",P].filter(Boolean).join(" "),"data-running":J||void 0,"data-open":U||void 0,children:[s.jsx("style",{href:"ui-tool-call",precedence:"default",children:qs}),s.jsx("span",{className:"ui-tc-sr",role:"status","aria-live":"polite",children:J?E:`${Z}${W?`, ${W} failed`:""}`}),s.jsxs("button",{type:"button",className:"ui-tc-group__head","aria-expanded":U,"aria-controls":`${A}-list`,onClick:()=>{H===void 0&&k(!U),Q?.(!U)},children:[s.jsx("span",{className:"ui-tc-group__stack","aria-hidden":"true",children:ut.map((tt,w)=>s.jsx("span",{className:"ui-tc__icon",children:tt.icon??s.jsx(Hs,{})},O.length-ut.length+w))}),s.jsxs("span",{className:"ui-tc-group__title",children:[s.jsx("span",{className:J?"ui-tc-group__label ui-tc__shine":"ui-tc-group__label","data-text":it,children:it}),!J&&W>0&&s.jsxs("span",{className:"ui-tc-group__failed",children:["· ",W," failed"]}),$!=null&&s.jsxs("span",{className:"ui-tc-group__time",children:["· ",Bs($,J)]})]},J?"busy":"done"),s.jsx(Rs,{})]}),s.jsx("div",{className:"ui-tc__body",id:`${A}-list`,inert:!U,children:s.jsx("div",{className:"ui-tc__clip",children:s.jsx("div",{className:"ui-tc-group__list",children:m})})})]})}const Ds=640;function Us({label:m,value:T,cap:E}){const{text:o,json:M}=U0(T),H=B.useRef(null),[Q,P]=B.useState(!1),[A,_]=B.useState(0);B.useLayoutEffect(()=>{const U=H.current,O=U?.firstElementChild;if(!U||!O)return;const J=()=>_(U.scrollHeight);J();const W=new ResizeObserver(J);return W.observe(O),()=>W.disconnect()},[o]);const k=A>E+24;return s.jsxs("div",{className:"ui-tc__section",children:[s.jsxs("div",{className:"ui-tc__section-head",children:[s.jsx("span",{className:"ui-tc__label",children:m}),s.jsx(O0,{text:o,label:m.toLowerCase()})]}),s.jsx("pre",{ref:H,className:"ui-tc__code","data-capped":k&&!Q||void 0,"data-scroll":k&&Q&&A>Ds||void 0,style:k?{maxHeight:Q?Math.min(A,Ds):E}:void 0,children:s.jsx("code",{children:M?R0(o):o})}),k&&s.jsx("button",{type:"button",className:"ui-tc__more","aria-expanded":Q,onClick:()=>P(!Q),children:Q?"Show less":"Show all"})]})}function O0({text:m,label:T}){const[E,o]=B.useState(!1);return B.useEffect(()=>{if(!E)return;const M=window.setTimeout(()=>o(!1),1400);return()=>window.clearTimeout(M)},[E]),s.jsxs("button",{type:"button",className:"ui-tc__copy","data-copied":E||void 0,"aria-label":E?"Copied":`Copy ${T}`,title:E?"Copied":`Copy ${T}`,onClick:()=>H0(m).then(M=>M&&o(!0)),children:[s.jsxs("svg",{className:"ui-tc__copy-icon",viewBox:"0 0 16 16","aria-hidden":"true",children:[s.jsx("rect",{x:"5.25",y:"5.25",width:"8",height:"8",rx:"2"}),s.jsx("path",{d:"M10.75 5.25v-1a1.5 1.5 0 0 0-1.5-1.5h-4.5a2 2 0 0 0-2 2v4.5a1.5 1.5 0 0 0 1.5 1.5h1"})]}),s.jsx("svg",{className:"ui-tc__copy-done",viewBox:"0 0 16 16","aria-hidden":"true",children:s.jsx("path",{d:"M3.5 8.4 6.6 11.3 12.5 4.9",pathLength:1})})]})}function D0(){return s.jsxs("svg",{className:"ui-tc__spinner",viewBox:"0 0 16 16","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"5.75"}),s.jsx("path",{d:"M8 2.25a5.75 5.75 0 0 1 5.75 5.75"})]})}function Cs(){return s.jsxs("svg",{className:"ui-tc__err",viewBox:"0 0 16 16","aria-hidden":"true",children:[s.jsx("circle",{cx:"8",cy:"8",r:"6"}),s.jsx("path",{d:"M8 5v3.4M8 10.9v.1"})]})}function Rs(){return s.jsx("svg",{className:"ui-tc__chevron",viewBox:"0 0 16 16","aria-hidden":"true",children:s.jsx("path",{d:"M4.5 6.25 8 9.75l3.5-3.5"})})}function Hs(){return s.jsx("svg",{viewBox:"0 0 16 16",children:s.jsx("path",{d:"M10.2 2.4a3.5 3.5 0 0 0-4.3 4.6L2.6 10.3a1.4 1.4 0 0 0 2 2L7.9 9a3.5 3.5 0 0 0 4.6-4.3l-2 2-1.6-.4-.4-1.6 1.7-2.3Z"})})}function ks(m,T,E){const o=B.useRef(null),M=B.useRef(0),[H,Q]=B.useState(null);return B.useEffect(()=>{if(!m){o.current!==null&&(M.current+=Date.now()-o.current,o.current=null,Q(M.current));return}E||(M.current=0),o.current=T??Date.now();const P=()=>Q(M.current+Date.now()-(o.current??Date.now()));P();const A=window.setInterval(P,100);return()=>window.clearInterval(A)},[m,T,E]),H}function Bs(m,T){if(!T&&m<1e3)return`${Math.max(1,Math.round(m))}ms`;if(m<6e4)return`${(Math.floor(m/100)/10).toFixed(1)}s`;const E=Math.floor(m/1e3);if(E<3600)return`${Math.floor(E/60)}m ${String(E%60).padStart(2,"0")}s`;const o=Math.floor(E/3600);return o<24?`${o}h ${String(Math.floor(E/60)%60).padStart(2,"0")}m`:`${Math.floor(o/24)}d ${o%24}h`}function U0(m){if(typeof m=="string"){const T=m.trim();if(T.startsWith("{")||T.startsWith("["))try{return{text:JSON.stringify(JSON.parse(T),null,2),json:!0}}catch{}return{text:m,json:!1}}try{const T=JSON.stringify(m,null,2);return T===void 0?{text:String(m),json:!1}:{text:T,json:!0}}catch{return{text:String(m),json:!1}}}const C0=/("(?:[^"\\]|\\.)*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;function R0(m){const T=[],E=new RegExp(C0.source,"g");let o=0,M;for(;M=E.exec(m);){if(M.index>o&&T.push(m.slice(o,M.index)),M[1]&&M[2])T.push(s.jsx("span",{className:"ui-tc__t-key",children:M[1]},M.index),M[2]);else{const H=M[1]?"str":/^[tfn]/.test(M[0])?"lit":"num";T.push(s.jsx("span",{className:`ui-tc__t-${H}`,children:M[0]},M.index))}o=M.index+M[0].length}return o<m.length&&T.push(m.slice(o)),T}async function H0(m){try{return await navigator.clipboard.writeText(m),!0}catch{const T=document.createElement("textarea");T.value=m,T.style.cssText="position:fixed;opacity:0",document.body.appendChild(T),T.select();const E=document.execCommand("copy");return T.remove(),E}}const qs=`
.ui-tc,
.ui-tc-group {
  --ui-tc-ink: #171717;
  --ui-tc-text: #6b6b6b;
  --ui-tc-muted: #8a8a8a;
  --ui-tc-bg: #ffffff;
  --ui-tc-line: #e7e7e7;
  --ui-tc-hover: #fafafa;
  --ui-tc-tile: #f5f5f5;
  --ui-tc-code: #fafafa;
  --ui-tc-ring: #ffffff;
  --ui-tc-red: #c8372d;
  --ui-tc-red-bg: rgba(200, 55, 45, 0.06);
  --ui-tc-red-line: rgba(200, 55, 45, 0.16);
  --ui-tc-key: #171717;
  --ui-tc-str: #0f7b6c;
  --ui-tc-num: #b25b0c;
  --ui-tc-lit: #6e56cf;
  --ui-tc-shine: rgba(255, 255, 255, 0.82);
  --ui-tc-focus: rgba(23, 23, 23, 0.22);
  --ui-tc-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ui-tc-mono: ui-monospace, "SF Mono", Menlo, monospace;
  box-sizing: border-box;
  min-width: 0;
  color: var(--ui-tc-text);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  line-height: 1.4;
  letter-spacing: -0.006em;
  -webkit-font-smoothing: antialiased;
}
.ui-tc *,
.ui-tc-group * { box-sizing: border-box; }

.ui-tc {
  position: relative;
  border-radius: 12px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
}
.ui-tc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Header: icon, name + summary, status, chevron – everything truncates before it overflows */
.ui-tc__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding: 8px 10px 8px 9px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc[data-open] .ui-tc__head { border-radius: 12px 12px 0 0; }
.ui-tc__head:focus-visible,
.ui-tc-group__head:focus-visible,
.ui-tc__copy:focus-visible,
.ui-tc__more:focus-visible,
.ui-tc__retry:focus-visible {
  outline: 2px solid var(--ui-tc-focus);
  outline-offset: 2px;
}
@media (hover: hover) {
  .ui-tc__head:hover { background: var(--ui-tc-hover); }
  .ui-tc-group__head:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__copy:hover { background: var(--ui-tc-hover); color: var(--ui-tc-ink); }
  .ui-tc__more:hover { color: var(--ui-tc-ink); }
  .ui-tc__retry:hover { background: var(--ui-tc-hover); }
}

.ui-tc__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: var(--ui-tc-tile);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-ink);
}
.ui-tc__icon > svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.ui-tc__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.ui-tc__name {
  flex: 0 1 auto;
  max-width: 55%;
  overflow: hidden;
  color: var(--ui-tc-ink);
  font-family: var(--ui-tc-mono);
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ui-tc__summary {
  flex: 1 1 0;
  min-width: 0;
  overflow: hidden;
  color: var(--ui-tc-text);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-tc__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: none;
  color: var(--ui-tc-muted);
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc[data-status="error"] .ui-tc__status { color: var(--ui-tc-red); }
.ui-tc__status > svg { width: 14px; height: 14px; flex: none; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__spinner circle { stroke: currentColor; stroke-width: 1.6; opacity: 0.22; }
.ui-tc__spinner path { stroke: var(--ui-tc-ink); stroke-width: 1.6; }
.ui-tc__spinner { animation: ui-tc-spin 800ms linear infinite; }
.ui-tc__ok { stroke: var(--ui-tc-ink); stroke-width: 1.8; }
.ui-tc__ok path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: ui-tc-draw 360ms var(--ui-tc-ease) 80ms forwards; }
.ui-tc__err { stroke: var(--ui-tc-red); stroke-width: 1.5; }

.ui-tc__chevron {
  flex: none;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-tc-muted);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 360ms var(--ui-tc-ease);
}
.ui-tc[data-open] > .ui-tc__head .ui-tc__chevron,
.ui-tc-group[data-open] > .ui-tc-group__head .ui-tc__chevron { transform: rotate(180deg); }

/* Body: grows from 0fr to 1fr, so the height animates without measuring */
.ui-tc__body {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 380ms var(--ui-tc-ease), opacity 240ms ease;
}
.ui-tc[data-open] > .ui-tc__body,
.ui-tc-group[data-open] > .ui-tc__body {
  grid-template-rows: 1fr;
  opacity: 1;
}
.ui-tc__clip { min-height: 0; overflow: hidden; }
.ui-tc__sections {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--ui-tc-line);
}

.ui-tc__section { display: grid; gap: 6px; min-width: 0; }
.ui-tc__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 24px;
}
.ui-tc__label { color: var(--ui-tc-muted); font-size: 12px; font-weight: 500; }
.ui-tc__pending { margin: 0; color: var(--ui-tc-muted); font-size: 12.5px; }

.ui-tc__copy {
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: var(--ui-tc-muted);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc__copy svg {
  position: absolute;
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: opacity 200ms ease, transform 320ms var(--ui-tc-ease), filter 200ms ease;
}
.ui-tc__copy-done { opacity: 0; transform: scale(0.6); filter: blur(2px); stroke-width: 1.7; }
.ui-tc__copy[data-copied] { color: var(--ui-tc-ink); }
.ui-tc__copy[data-copied] .ui-tc__copy-icon { opacity: 0; transform: scale(0.6); filter: blur(2px); }
.ui-tc__copy[data-copied] .ui-tc__copy-done { opacity: 1; transform: none; filter: none; }

/* Code: wraps instead of scrolling sideways; capped blocks fade out at the bottom */
.ui-tc__code {
  position: relative;
  margin: 0;
  padding: 10px 12px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--ui-tc-code);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line);
  color: var(--ui-tc-muted);
  font-family: var(--ui-tc-mono);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  tab-size: 2;
  transition: max-height 420ms var(--ui-tc-ease);
}
.ui-tc__code code { display: block; font: inherit; }
.ui-tc__code::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  height: 56px;
  border-radius: 0 0 7px 7px;
  background: linear-gradient(to bottom, transparent, var(--ui-tc-code));
  opacity: 0;
  transition: opacity 240ms ease;
  pointer-events: none;
}
.ui-tc__code[data-capped]::after { opacity: 1; }
.ui-tc__code[data-scroll] { overflow-y: auto; overscroll-behavior: contain; }
.ui-tc__t-key { color: var(--ui-tc-key); }
.ui-tc__t-str { color: var(--ui-tc-str); }
.ui-tc__t-num { color: var(--ui-tc-num); }
.ui-tc__t-lit { color: var(--ui-tc-lit); }

.ui-tc__more {
  all: unset;
  justify-self: start;
  padding: 2px 4px;
  margin-left: -4px;
  border-radius: 5px;
  color: var(--ui-tc-text);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: color 160ms ease;
}

/* Error: the message and an optional retry */
.ui-tc__error {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 9px 10px 9px 11px;
  border-radius: 8px;
  background: var(--ui-tc-red-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-red-line);
}
.ui-tc__error > .ui-tc__err { flex: none; width: 14px; height: 14px; margin-top: 2px; fill: none; stroke-linecap: round; }
.ui-tc__error-text {
  flex: 1;
  min-width: 0;
  max-height: 200px;
  margin: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  white-space: pre-line;
  color: var(--ui-tc-red);
  font-size: 13px;
  line-height: 1.45;
  overflow-wrap: anywhere;
}
.ui-tc__retry {
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  height: 26px;
  margin: -3px 0;
  padding: 0 10px 0 8px;
  border-radius: 7px;
  background: var(--ui-tc-bg);
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--ui-tc-ink);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 160ms ease;
}
.ui-tc__retry svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.ui-tc__retry:active svg { transform: rotate(-60deg); transition: transform 200ms var(--ui-tc-ease); }

/* Group: one quiet line with the tool icons stacked, the cards below */
.ui-tc-group { display: grid; }
.ui-tc-group__head {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 9px;
  justify-self: start;
  max-width: 100%;
  min-height: 36px;
  padding: 4px 10px 4px 5px;
  border-radius: 10px;
  color: var(--ui-tc-text);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-tc-group__stack { display: flex; flex: none; }
.ui-tc-group__stack .ui-tc__icon {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  box-shadow: inset 0 0 0 1px var(--ui-tc-line), 0 0 0 2px var(--ui-tc-ring);
  animation: ui-tc-pop 420ms var(--ui-tc-ease) both;
}
.ui-tc-group__stack .ui-tc__icon + .ui-tc__icon { margin-left: -5px; }
.ui-tc-group__stack .ui-tc__icon > svg { width: 13px; height: 13px; }
.ui-tc-group__title {
  display: flex;
  align-items: baseline;
  gap: 5px;
  min-width: 0;
  white-space: nowrap;
  animation: ui-tc-in 360ms var(--ui-tc-ease) both;
}
.ui-tc-group__label {
  position: relative;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: inherit;
  font-weight: 500;
}
.ui-tc-group__failed { flex: none; color: var(--ui-tc-red); }
.ui-tc-group__time { flex: none; color: var(--ui-tc-muted); font-variant-numeric: tabular-nums; }
.ui-tc-group__list { display: grid; gap: 8px; padding-top: 8px; }

/* A soft light sweeping over "Using tools…" */
.ui-tc__shine::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  position: absolute;
  inset: 0;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(90deg, transparent 38%, var(--ui-tc-shine) 50%, transparent 62%) 100% 0 / 300% 100% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ui-tc-sweep 1.8s linear infinite;
  pointer-events: none;
}

@keyframes ui-tc-in {
  from { opacity: 0; transform: translateY(3px); filter: blur(2px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes ui-tc-pop {
  from { opacity: 0; transform: scale(0.6); }
  to { opacity: 1; transform: none; }
}
@keyframes ui-tc-spin { to { transform: rotate(360deg); } }
@keyframes ui-tc-draw { to { stroke-dashoffset: 0; } }
@keyframes ui-tc-sweep {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .ui-tc *,
  .ui-tc-group *,
  .ui-tc *::after,
  .ui-tc-group *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
  .ui-tc__shine::after { display: none; }
  .ui-tc__ok path { stroke-dashoffset: 0; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-tc,
:where(.dark, [data-theme="dark"]) .ui-tc-group {
  --ui-tc-ink: #ededed;
  --ui-tc-text: #a1a1a1;
  --ui-tc-muted: #7c7c7c;
  --ui-tc-bg: #161618;
  --ui-tc-line: rgba(255, 255, 255, 0.1);
  --ui-tc-hover: rgba(255, 255, 255, 0.035);
  --ui-tc-tile: #1d1d20;
  --ui-tc-code: #1d1d20;
  --ui-tc-ring: #161618;
  --ui-tc-red: #ff7b72;
  --ui-tc-red-bg: rgba(255, 110, 100, 0.08);
  --ui-tc-red-line: rgba(255, 110, 100, 0.2);
  --ui-tc-key: #ededed;
  --ui-tc-str: #5fd4b8;
  --ui-tc-num: #f2a65a;
  --ui-tc-lit: #b5a4ff;
  --ui-tc-shine: rgba(255, 255, 255, 0.95);
  --ui-tc-focus: rgba(255, 255, 255, 0.3);
}
:where(.dark, [data-theme="dark"]) .ui-tc { box-shadow: inset 0 0 0 1px var(--ui-tc-line); }
`;function k0(){return s.jsx(t0,{decisions:[{id:"a",title:"Move the design review?",detail:"Two participants have a conflicting meeting. No invitation is sent in this demo.",primary:"Move to Thursday",secondary:"Keep Wednesday"},{id:"b",title:"Use the shorter introduction?",detail:"The draft is ready for your review.",primary:"Use short version",secondary:"Keep original",collapsed:!0},{id:"c",title:"Archive the completed run?",primary:"Archive locally",secondary:"Keep visible",collapsed:!0}]})}function B0(){return s.jsx(c0,{reference:"DRAFT · 014",account:"Sample workspace",amount:"Review before sending",status:"Draft",contacts:[{name:"Alex Example",email:"alex@example.com"},{name:"Sam Example",email:"sam@example.com"}],attachment:"project-brief.pdf",link:{label:"Read sample brief",href:"#"},onSend:()=>{}})}function q0(){return s.jsx(f0,{title:"Choose a sync strategy",options:[{id:"incremental",label:"Incremental sync",reason:"Only changed records need to move. Keeps the existing workspace available.",signal:3},{id:"full",label:"Full rebuild",reason:"Rebuild all records. More consistent, but needs a maintenance window.",signal:2},{id:"manual",label:"Manual review",reason:"Inspect every change before applying it. Slowest but most controlled.",signal:1}]})}function Y0(){return s.jsx(m0,{title:"Weekly agent report",period:"7-day sample",changes:[{label:"Resolved requests",change:"Up 16% to 842",tone:"good"},{label:"Median response",change:"Down 1.2s to 3.4s",tone:"good",direction:"down"},{label:"Human review",change:"Up 3% to 28 cases",tone:"neutral"},{label:"Failed runs",change:"Up from 4 to 7",tone:"bad",direction:"up"}]})}function G0(){return s.jsx(S0,{title:"Review the release note",currentUser:{name:"You"},assistant:{name:"Draft assistant",assistant:!0},messages:[{id:"1",author:{name:"Alex"},createdAt:Date.now()-12e4,text:"Can we make the change log easier to scan?"},{id:"2",author:{name:"Draft assistant",assistant:!0},createdAt:Date.now()-9e4,text:"I grouped the changes into Features, Fixes and Migration notes.",status:"Reviewed 3 sections",details:["Read the supplied release note","Grouped related changes","Kept the original technical details"]}],onReply:async m=>(await new Promise(T=>setTimeout(T,900)),{id:"reply-"+Date.now(),author:{name:"Draft assistant",assistant:!0},createdAt:Date.now(),text:"Local demo: your comment was added. No model or external service was contacted.",status:"Local preview response",details:["Message remains inside this iframe"]})})}function X0(){return s.jsx(j0,{notices:[{id:"1",badge:"Review",title:"Your weekly brief is ready",text:"Three findings need a decision before this run can continue.",pattern:"orbit"},{id:"2",badge:"Complete",title:"Research finished",text:"Six public sources were organized into a readable draft.",pattern:"grid"},{id:"3",badge:"Scheduled",title:"Next check on Monday",text:"This is a local sample, not an active reminder.",pattern:"rays"}]})}function Q0(){const[m,T]=B.useState("error");return s.jsxs(M0,{defaultOpen:!0,label:"Research pipeline",children:[s.jsx(In,{name:"search_sources",summary:"Located three sample documents",status:"success",args:{query:"project timeline"},result:{matches:3},duration:710}),s.jsx(In,{name:"read_document",summary:"Read the project brief",status:m,args:{document:"project-brief"},result:m==="success"?{title:"Project brief",sections:4}:void 0,error:"Sample timeout. Retry to simulate a successful read.",onRetry:()=>{T("running"),setTimeout(()=>T("success"),900)}}),s.jsx(In,{name:"summarize_findings",summary:"Prepared a compact summary",status:"success",result:{summary:"Three milestones and two open decisions."},duration:490})]})}const L0={"decision-inbox":k0,"email-draft":B0,"smart-recommendation":q0,"change-summary":Y0,"comment-thread":G0,"notification-stack":X0,"tool-call-card":Q0},Ys=document.body.dataset.demo,Z0=L0[Ys];function V0(){const[m,T]=B.useState(0);return s.jsxs("main",{children:[s.jsxs("header",{className:"scene-label",children:["Affect UI / ",Ys.replaceAll("-"," ")]}),s.jsx(Z0,{},m),s.jsx("button",{className:"reset",onClick:()=>T(E=>E+1),children:"Reset demo"}),s.jsx("footer",{children:"Local interactive sample. No email, tool, payment or agent request is sent."})]})}Pd.createRoot(document.getElementById("root")).render(s.jsx(V0,{}))})();
