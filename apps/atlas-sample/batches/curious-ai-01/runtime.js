(()=>{var vA=Object.create;var Tv=Object.defineProperty;var _A=Object.getOwnPropertyDescriptor;var SA=Object.getOwnPropertyNames;var MA=Object.getPrototypeOf,bA=Object.prototype.hasOwnProperty;var Ev=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var ir=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var wA=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of SA(e))!bA.call(t,r)&&r!==n&&Tv(t,r,{get:()=>e[r],enumerable:!(i=_A(e,r))||i.enumerable});return t};var ot=(t,e,n)=>(n=t!=null?vA(MA(t)):{},wA(e||!t||!t.__esModule?Tv(n,"default",{value:t,enumerable:!0}):n,t));var zv=ir(qe=>{"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),TA=Symbol.for("react.portal"),EA=Symbol.for("react.fragment"),AA=Symbol.for("react.strict_mode"),CA=Symbol.for("react.profiler"),RA=Symbol.for("react.provider"),PA=Symbol.for("react.context"),IA=Symbol.for("react.forward_ref"),DA=Symbol.for("react.suspense"),LA=Symbol.for("react.memo"),NA=Symbol.for("react.lazy"),Pv=Symbol.iterator;function FA(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var Lv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,Fv={};function Fo(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Lv}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=Fo.prototype;function bm(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Lv}var wm=bm.prototype=new Uv;wm.constructor=bm;Nv(wm,Fo.prototype);wm.isPureReactComponent=!0;var Iv=Array.isArray,Ov=Object.prototype.hasOwnProperty,Tm={current:null},kv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fl,type:t,key:s,ref:o,props:r,_owner:Tm.current}}function UA(t,e){return{$$typeof:fl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Em(t){return typeof t=="object"&&t!==null&&t.$$typeof===fl}function OA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dv=/\/+/g;function Mm(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OA(""+t.key):e.toString(36)}function Ru(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fl:case TA:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mm(o,0):i,Iv(r)?(n="",t!=null&&(n=t.replace(Dv,"$&/")+"/"),Ru(r,e,n,"",function(c){return c})):r!=null&&(Em(r)&&(r=UA(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Dv,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Iv(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mm(s,a);o+=Ru(s,e,n,l,r)}else if(l=FA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mm(s,a++),o+=Ru(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cu(t,e,n){if(t==null)return t;var i=[],r=0;return Ru(t,i,"","",function(s){return e.call(n,s,r++)}),i}function kA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},Pu={transition:null},BA={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Pu,ReactCurrentOwner:Tm};function Vv(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Cu,forEach:function(t,e,n){Cu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cu(t,function(){e++}),e},toArray:function(t){return Cu(t,function(e){return e})||[]},only:function(t){if(!Em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Fo;qe.Fragment=EA;qe.Profiler=CA;qe.PureComponent=bm;qe.StrictMode=AA;qe.Suspense=DA;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BA;qe.act=Vv;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Tm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ov.call(e,l)&&!kv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:fl,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:PA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RA,_context:t},t.Consumer=t};qe.createElement=Bv;qe.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:IA,render:t}};qe.isValidElement=Em;qe.lazy=function(t){return{$$typeof:NA,_payload:{_status:-1,_result:t},_init:kA}};qe.memo=function(t,e){return{$$typeof:LA,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Pu.transition;Pu.transition={};try{t()}finally{Pu.transition=e}};qe.unstable_act=Vv;qe.useCallback=function(t,e){return xn.current.useCallback(t,e)};qe.useContext=function(t){return xn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return xn.current.useEffect(t,e)};qe.useId=function(){return xn.current.useId()};qe.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return xn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};qe.useRef=function(t){return xn.current.useRef(t)};qe.useState=function(t){return xn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return xn.current.useTransition()};qe.version="18.3.1"});var mt=ir((WF,Gv)=>{"use strict";Gv.exports=zv()});var Jv=ir(ht=>{"use strict";/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Pm(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Iu(r,e))t[i]=e,t[n]=r,n=i;else break e}}function yi(t){return t.length===0?null:t[0]}function Lu(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Iu(a,n))l<r&&0>Iu(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Iu(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Iu(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Hv=performance,ht.unstable_now=function(){return Hv.now()}):(Am=Date,Wv=Am.now(),ht.unstable_now=function(){return Am.now()-Wv});var Hv,Am,Wv,Ni=[],Lr=[],VA=1,ni=null,sn=3,Nu=!1,Ls=!1,dl=!1,Yv=typeof setTimeout=="function"?setTimeout:null,jv=typeof clearTimeout=="function"?clearTimeout:null,Xv=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Im(t){for(var e=yi(Lr);e!==null;){if(e.callback===null)Lu(Lr);else if(e.startTime<=t)Lu(Lr),e.sortIndex=e.expirationTime,Pm(Ni,e);else break;e=yi(Lr)}}function Dm(t){if(dl=!1,Im(t),!Ls)if(yi(Ni)!==null)Ls=!0,Nm(Lm);else{var e=yi(Lr);e!==null&&Fm(Dm,e.startTime-t)}}function Lm(t,e){Ls=!1,dl&&(dl=!1,jv(pl),pl=-1),Nu=!0;var n=sn;try{for(Im(e),ni=yi(Ni);ni!==null&&(!(ni.expirationTime>e)||t&&!Zv());){var i=ni.callback;if(typeof i=="function"){ni.callback=null,sn=ni.priorityLevel;var r=i(ni.expirationTime<=e);e=ht.unstable_now(),typeof r=="function"?ni.callback=r:ni===yi(Ni)&&Lu(Ni),Im(e)}else Lu(Ni);ni=yi(Ni)}if(ni!==null)var s=!0;else{var o=yi(Lr);o!==null&&Fm(Dm,o.startTime-e),s=!1}return s}finally{ni=null,sn=n,Nu=!1}}var Fu=!1,Du=null,pl=-1,$v=5,Kv=-1;function Zv(){return!(ht.unstable_now()-Kv<$v)}function Cm(){if(Du!==null){var t=ht.unstable_now();Kv=t;var e=!0;try{e=Du(!0,t)}finally{e?hl():(Fu=!1,Du=null)}}else Fu=!1}var hl;typeof Xv=="function"?hl=function(){Xv(Cm)}:typeof MessageChannel<"u"?(Rm=new MessageChannel,qv=Rm.port2,Rm.port1.onmessage=Cm,hl=function(){qv.postMessage(null)}):hl=function(){Yv(Cm,0)};var Rm,qv;function Nm(t){Du=t,Fu||(Fu=!0,hl())}function Fm(t,e){pl=Yv(function(){t(ht.unstable_now())},e)}ht.unstable_IdlePriority=5;ht.unstable_ImmediatePriority=1;ht.unstable_LowPriority=4;ht.unstable_NormalPriority=3;ht.unstable_Profiling=null;ht.unstable_UserBlockingPriority=2;ht.unstable_cancelCallback=function(t){t.callback=null};ht.unstable_continueExecution=function(){Ls||Nu||(Ls=!0,Nm(Lm))};ht.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$v=0<t?Math.floor(1e3/t):5};ht.unstable_getCurrentPriorityLevel=function(){return sn};ht.unstable_getFirstCallbackNode=function(){return yi(Ni)};ht.unstable_next=function(t){switch(sn){case 1:case 2:case 3:var e=3;break;default:e=sn}var n=sn;sn=e;try{return t()}finally{sn=n}};ht.unstable_pauseExecution=function(){};ht.unstable_requestPaint=function(){};ht.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=sn;sn=t;try{return e()}finally{sn=n}};ht.unstable_scheduleCallback=function(t,e,n){var i=ht.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:VA++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Pm(Lr,t),yi(Ni)===null&&t===yi(Lr)&&(dl?(jv(pl),pl=-1):dl=!0,Fm(Dm,n-i))):(t.sortIndex=r,Pm(Ni,t),Ls||Nu||(Ls=!0,Nm(Lm))),t};ht.unstable_shouldYield=Zv;ht.unstable_wrapCallback=function(t){var e=sn;return function(){var n=sn;sn=e;try{return t.apply(this,arguments)}finally{sn=n}}}});var e_=ir((qF,Qv)=>{"use strict";Qv.exports=Jv()});var r1=ir(Wn=>{"use strict";/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zA=mt(),Gn=e_();function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aS=new Set,Ul={};function qs(t,e){na(t,e),na(t+"Capture",e)}function na(t,e){for(Ul[t]=e,t=0;t<e.length;t++)aS.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),r0=Object.prototype.hasOwnProperty,GA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t_={},n_={};function HA(t){return r0.call(n_,t)?!0:r0.call(t_,t)?!1:GA.test(t)?n_[t]=!0:(t_[t]=!0,!1)}function WA(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XA(t,e,n,i){if(e===null||typeof e>"u"||WA(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _n(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new _n(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new _n(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new _n(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new _n(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new _n(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new _n(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new _n(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new _n(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new _n(t,5,!1,t.toLowerCase(),null,!1,!1)});var K0=/[\-:]([a-z])/g;function Z0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(K0,Z0);rn[e]=new _n(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(K0,Z0);rn[e]=new _n(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(K0,Z0);rn[e]=new _n(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new _n(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new _n("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new _n(t,1,!1,t.toLowerCase(),null,!0,!0)});function J0(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XA(e,n,r,i)&&(n=null),i||r===null?HA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var dr=zA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uu=Symbol.for("react.element"),ko=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),lS=Symbol.for("react.provider"),cS=Symbol.for("react.context"),eg=Symbol.for("react.forward_ref"),o0=Symbol.for("react.suspense"),a0=Symbol.for("react.suspense_list"),tg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var uS=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var i_=Symbol.iterator;function ml(t){return t===null||typeof t!="object"?null:(t=i_&&t[i_]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,Um;function bl(t){if(Um===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Um=e&&e[1]||""}return`
`+Um+t}var Om=!1;function km(t,e){if(!t||Om)return"";Om=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Om=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bl(t):""}function qA(t){switch(t.tag){case 5:return bl(t.type);case 16:return bl("Lazy");case 13:return bl("Suspense");case 19:return bl("SuspenseList");case 0:case 2:case 15:return t=km(t.type,!1),t;case 11:return t=km(t.type.render,!1),t;case 1:return t=km(t.type,!0),t;default:return""}}function l0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bo:return"Fragment";case ko:return"Portal";case s0:return"Profiler";case Q0:return"StrictMode";case o0:return"Suspense";case a0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cS:return(t.displayName||"Context")+".Consumer";case lS:return(t._context.displayName||"Context")+".Provider";case eg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tg:return e=t.displayName||null,e!==null?e:l0(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return l0(t(e))}catch{}}return null}function YA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return l0(e);case 8:return e===Q0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jA(t){var e=fS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ou(t){t._valueTracker||(t._valueTracker=jA(t))}function hS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function c0(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function r_(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dS(t,e){e=e.checked,e!=null&&J0(t,"checked",e,!1)}function u0(t,e){dS(t,e);var n=$r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?f0(t,e.type,n):e.hasOwnProperty("defaultValue")&&f0(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function f0(t,e,n){(e!=="number"||hf(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wl=Array.isArray;function Ko(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function h0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(wl(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function pS(t,e){var n=$r(e.value),i=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function a_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function d0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ku,gS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ku=ku||document.createElement("div"),ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Al={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$A=["Webkit","ms","Moz","O"];Object.keys(Al).forEach(function(t){$A.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Al[e]=Al[t]})});function xS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Al.hasOwnProperty(t)&&Al[t]?(""+e).trim():e+"px"}function yS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=xS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var KA=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function p0(t,e){if(e){if(KA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function m0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=null;function ng(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var x0=null,Zo=null,Jo=null;function l_(t){if(t=tc(t)){if(typeof x0!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Vf(e),x0(t.stateNode,t.type,e))}}function vS(t){Zo?Jo?Jo.push(t):Jo=[t]:Zo=t}function _S(){if(Zo){var t=Zo,e=Jo;if(Jo=Zo=null,l_(t),e)for(t=0;t<e.length;t++)l_(e[t])}}function SS(t,e){return t(e)}function MS(){}var Bm=!1;function bS(t,e,n){if(Bm)return t(e,n);Bm=!0;try{return SS(t,e,n)}finally{Bm=!1,(Zo!==null||Jo!==null)&&(MS(),_S())}}function kl(t,e){var n=t.stateNode;if(n===null)return null;var i=Vf(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var y0=!1;if(cr)try{Uo={},Object.defineProperty(Uo,"passive",{get:function(){y0=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{y0=!1}var Uo;function ZA(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Cl=!1,df=null,pf=!1,v0=null,JA={onError:function(t){Cl=!0,df=t}};function QA(t,e,n,i,r,s,o,a,l){Cl=!1,df=null,ZA.apply(JA,arguments)}function e3(t,e,n,i,r,s,o,a,l){if(QA.apply(this,arguments),Cl){if(Cl){var c=df;Cl=!1,df=null}else throw Error(ee(198));pf||(pf=!0,v0=c)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c_(t){if(Ys(t)!==t)throw Error(ee(188))}function t3(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return c_(r),t;if(s===i)return c_(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function TS(t){return t=t3(t),t!==null?ES(t):null}function ES(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ES(t);if(e!==null)return e;t=t.sibling}return null}var AS=Gn.unstable_scheduleCallback,u_=Gn.unstable_cancelCallback,n3=Gn.unstable_shouldYield,i3=Gn.unstable_requestPaint,kt=Gn.unstable_now,r3=Gn.unstable_getCurrentPriorityLevel,ig=Gn.unstable_ImmediatePriority,CS=Gn.unstable_UserBlockingPriority,mf=Gn.unstable_NormalPriority,s3=Gn.unstable_LowPriority,RS=Gn.unstable_IdlePriority,Uf=null,ki=null;function o3(t){if(ki&&typeof ki.onCommitFiberRoot=="function")try{ki.onCommitFiberRoot(Uf,t,void 0,(t.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:c3,a3=Math.log,l3=Math.LN2;function c3(t){return t>>>=0,t===0?32:31-(a3(t)/l3|0)|0}var Bu=64,Vu=4194304;function Tl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gf(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Tl(a):(s&=o,s!==0&&(i=Tl(s)))}else o=n&~r,o!==0?i=Tl(o):s!==0&&(i=Tl(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bi(e),r=1<<n,i|=t[n],e&=~r;return i}function u3(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f3(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bi(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=u3(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function PS(){var t=Bu;return Bu<<=1,(Bu&4194240)===0&&(Bu=64),t}function Vm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bi(e),t[e]=n}function h3(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function IS(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var DS,sg,LS,NS,FS,S0=!1,zu=[],zr=null,Gr=null,Hr=null,Bl=new Map,Vl=new Map,Or=[],d3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f_(t,e){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(e.pointerId)}}function gl(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tc(e),e!==null&&sg(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p3(t,e,n,i,r){switch(e){case"focusin":return zr=gl(zr,t,e,n,i,r),!0;case"dragenter":return Gr=gl(Gr,t,e,n,i,r),!0;case"mouseover":return Hr=gl(Hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Bl.set(s,gl(Bl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Vl.set(s,gl(Vl.get(s)||null,t,e,n,i,r)),!0}return!1}function US(t){var e=Us(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=wS(n),e!==null){t.blockedOn=e,FS(t.priority,function(){LS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tf(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=M0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);g0=i,n.target.dispatchEvent(i),g0=null}else return e=tc(n),e!==null&&sg(e),t.blockedOn=n,!1;e.shift()}return!0}function h_(t,e,n){tf(t)&&n.delete(e)}function m3(){S0=!1,zr!==null&&tf(zr)&&(zr=null),Gr!==null&&tf(Gr)&&(Gr=null),Hr!==null&&tf(Hr)&&(Hr=null),Bl.forEach(h_),Vl.forEach(h_)}function xl(t,e){t.blockedOn===e&&(t.blockedOn=null,S0||(S0=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,m3)))}function zl(t){function e(r){return xl(r,t)}if(0<zu.length){xl(zu[0],t);for(var n=1;n<zu.length;n++){var i=zu[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zr!==null&&xl(zr,t),Gr!==null&&xl(Gr,t),Hr!==null&&xl(Hr,t),Bl.forEach(e),Vl.forEach(e),n=0;n<Or.length;n++)i=Or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)US(n),n.blockedOn===null&&Or.shift()}var Qo=dr.ReactCurrentBatchConfig,xf=!0;function g3(t,e,n,i){var r=at,s=Qo.transition;Qo.transition=null;try{at=1,og(t,e,n,i)}finally{at=r,Qo.transition=s}}function x3(t,e,n,i){var r=at,s=Qo.transition;Qo.transition=null;try{at=4,og(t,e,n,i)}finally{at=r,Qo.transition=s}}function og(t,e,n,i){if(xf){var r=M0(t,e,n,i);if(r===null)Ym(t,e,i,yf,n),f_(t,i);else if(p3(r,t,e,n,i))i.stopPropagation();else if(f_(t,i),e&4&&-1<d3.indexOf(t)){for(;r!==null;){var s=tc(r);if(s!==null&&DS(s),s=M0(t,e,n,i),s===null&&Ym(t,e,i,yf,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ym(t,e,i,null,n)}}var yf=null;function M0(t,e,n,i){if(yf=null,t=ng(i),t=Us(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yf=t,null}function OS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r3()){case ig:return 1;case CS:return 4;case mf:case s3:return 16;case RS:return 536870912;default:return 16}default:return 16}}var Br=null,ag=null,nf=null;function kS(){if(nf)return nf;var t,e=ag,n=e.length,i,r="value"in Br?Br.value:Br.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nf=r.slice(t,1<i?1-i:void 0)}function rf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gu(){return!0}function d_(){return!1}function Hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gu:d_,this.isPropagationStopped=d_,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gu)},persist:function(){},isPersistent:Gu}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lg=Hn(ca),ec=Ct({},ca,{view:0,detail:0}),y3=Hn(ec),zm,Gm,yl,Of=Ct({},ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yl&&(yl&&t.type==="mousemove"?(zm=t.screenX-yl.screenX,Gm=t.screenY-yl.screenY):Gm=zm=0,yl=t),zm)},movementY:function(t){return"movementY"in t?t.movementY:Gm}}),p_=Hn(Of),v3=Ct({},Of,{dataTransfer:0}),_3=Hn(v3),S3=Ct({},ec,{relatedTarget:0}),Hm=Hn(S3),M3=Ct({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),b3=Hn(M3),w3=Ct({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T3=Hn(w3),E3=Ct({},ca,{data:0}),m_=Hn(E3),A3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R3[t])?!!e[t]:!1}function cg(){return P3}var I3=Ct({},ec,{key:function(t){if(t.key){var e=A3[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cg,charCode:function(t){return t.type==="keypress"?rf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D3=Hn(I3),L3=Ct({},Of,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=Hn(L3),N3=Ct({},ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cg}),F3=Hn(N3),U3=Ct({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),O3=Hn(U3),k3=Ct({},Of,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B3=Hn(k3),V3=[9,13,27,32],ug=cr&&"CompositionEvent"in window,Rl=null;cr&&"documentMode"in document&&(Rl=document.documentMode);var z3=cr&&"TextEvent"in window&&!Rl,BS=cr&&(!ug||Rl&&8<Rl&&11>=Rl),x_=" ",y_=!1;function VS(t,e){switch(t){case"keyup":return V3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vo=!1;function G3(t,e){switch(t){case"compositionend":return zS(e);case"keypress":return e.which!==32?null:(y_=!0,x_);case"textInput":return t=e.data,t===x_&&y_?null:t;default:return null}}function H3(t,e){if(Vo)return t==="compositionend"||!ug&&VS(t,e)?(t=kS(),nf=ag=Br=null,Vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BS&&e.locale!=="ko"?null:e.data;default:return null}}var W3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W3[t.type]:e==="textarea"}function GS(t,e,n,i){vS(i),e=vf(e,"onChange"),0<e.length&&(n=new lg("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Pl=null,Gl=null;function X3(t){QS(t,0)}function kf(t){var e=Ho(t);if(hS(e))return t}function q3(t,e){if(t==="change")return e}var HS=!1;cr&&(cr?(Wu="oninput"in document,Wu||(Wm=document.createElement("div"),Wm.setAttribute("oninput","return;"),Wu=typeof Wm.oninput=="function"),Hu=Wu):Hu=!1,HS=Hu&&(!document.documentMode||9<document.documentMode));var Hu,Wu,Wm;function __(){Pl&&(Pl.detachEvent("onpropertychange",WS),Gl=Pl=null)}function WS(t){if(t.propertyName==="value"&&kf(Gl)){var e=[];GS(e,Gl,t,ng(t)),bS(X3,e)}}function Y3(t,e,n){t==="focusin"?(__(),Pl=e,Gl=n,Pl.attachEvent("onpropertychange",WS)):t==="focusout"&&__()}function j3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kf(Gl)}function $3(t,e){if(t==="click")return kf(e)}function K3(t,e){if(t==="input"||t==="change")return kf(e)}function Z3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ti=typeof Object.is=="function"?Object.is:Z3;function Hl(t,e){if(Ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!r0.call(e,r)||!Ti(t[r],e[r]))return!1}return!0}function S_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function M_(t,e){var n=S_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=S_(n)}}function XS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?XS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qS(){for(var t=window,e=hf();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hf(t.document)}return e}function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J3(t){var e=qS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&XS(n.ownerDocument.documentElement,n)){if(i!==null&&fg(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=M_(n,s);var o=M_(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q3=cr&&"documentMode"in document&&11>=document.documentMode,zo=null,b0=null,Il=null,w0=!1;function b_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;w0||zo==null||zo!==hf(i)||(i=zo,"selectionStart"in i&&fg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Il&&Hl(Il,i)||(Il=i,i=vf(b0,"onSelect"),0<i.length&&(e=new lg("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zo)))}function Xu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Go={animationend:Xu("Animation","AnimationEnd"),animationiteration:Xu("Animation","AnimationIteration"),animationstart:Xu("Animation","AnimationStart"),transitionend:Xu("Transition","TransitionEnd")},Xm={},YS={};cr&&(YS=document.createElement("div").style,"AnimationEvent"in window||(delete Go.animationend.animation,delete Go.animationiteration.animation,delete Go.animationstart.animation),"TransitionEvent"in window||delete Go.transitionend.transition);function Bf(t){if(Xm[t])return Xm[t];if(!Go[t])return t;var e=Go[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YS)return Xm[t]=e[n];return t}var jS=Bf("animationend"),$S=Bf("animationiteration"),KS=Bf("animationstart"),ZS=Bf("transitionend"),JS=new Map,w_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){JS.set(t,e),qs(e,[t])}for(qu=0;qu<w_.length;qu++)Yu=w_[qu],T_=Yu.toLowerCase(),E_=Yu[0].toUpperCase()+Yu.slice(1),Zr(T_,"on"+E_);var Yu,T_,E_,qu;Zr(jS,"onAnimationEnd");Zr($S,"onAnimationIteration");Zr(KS,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(ZS,"onTransitionEnd");na("onMouseEnter",["mouseout","mouseover"]);na("onMouseLeave",["mouseout","mouseover"]);na("onPointerEnter",["pointerout","pointerover"]);na("onPointerLeave",["pointerout","pointerover"]);qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eC=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function A_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e3(i,e,void 0,t),t.currentTarget=null}function QS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;A_(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;A_(r,a,c),s=l}}}if(pf)throw t=v0,pf=!1,v0=null,t}function gt(t,e){var n=e[R0];n===void 0&&(n=e[R0]=new Set);var i=t+"__bubble";n.has(i)||(eM(e,t,2,!1),n.add(i))}function qm(t,e,n){var i=0;e&&(i|=4),eM(n,t,i,e)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[ju]){t[ju]=!0,aS.forEach(function(n){n!=="selectionchange"&&(eC.has(n)||qm(n,!1,t),qm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ju]||(e[ju]=!0,qm("selectionchange",!1,e))}}function eM(t,e,n,i){switch(OS(e)){case 1:var r=g3;break;case 4:r=x3;break;default:r=og}n=r.bind(null,e,n,t),r=void 0,!y0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ym(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}bS(function(){var c=s,u=ng(n),f=[];e:{var h=JS.get(t);if(h!==void 0){var p=lg,g=t;switch(t){case"keypress":if(rf(n)===0)break e;case"keydown":case"keyup":p=D3;break;case"focusin":g="focus",p=Hm;break;case"focusout":g="blur",p=Hm;break;case"beforeblur":case"afterblur":p=Hm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=F3;break;case jS:case $S:case KS:p=b3;break;case ZS:p=O3;break;case"scroll":p=y3;break;case"wheel":p=B3;break;case"copy":case"cut":case"paste":p=T3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=g_}var v=(e&4)!==0,y=!v&&t==="scroll",d=v?h!==null?h+"Capture":null:h;v=[];for(var m=c,x;m!==null;){x=m;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=kl(m,d),S!=null&&v.push(Xl(m,S,x)))),y)break;m=m.return}0<v.length&&(h=new p(h,g,null,n,u),f.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==g0&&(g=n.relatedTarget||n.fromElement)&&(Us(g)||g[ur]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Us(g):null,g!==null&&(y=Ys(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=p_,S="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=g_,S="onPointerLeave",d="onPointerEnter",m="pointer"),y=p==null?h:Ho(p),x=g==null?h:Ho(g),h=new v(S,m+"leave",p,n,u),h.target=y,h.relatedTarget=x,S=null,Us(u)===c&&(v=new v(d,m+"enter",g,n,u),v.target=x,v.relatedTarget=y,S=v),y=S,p&&g)t:{for(v=p,d=g,m=0,x=v;x;x=Oo(x))m++;for(x=0,S=d;S;S=Oo(S))x++;for(;0<m-x;)v=Oo(v),m--;for(;0<x-m;)d=Oo(d),x--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break t;v=Oo(v),d=Oo(d)}v=null}else v=null;p!==null&&C_(f,h,p,v,!1),g!==null&&y!==null&&C_(f,y,g,v,!0)}}e:{if(h=c?Ho(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=q3;else if(v_(h))if(HS)E=K3;else{E=j3;var M=Y3}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=$3);if(E&&(E=E(t,c))){GS(f,E,n,u);break e}M&&M(t,h,c),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&f0(h,"number",h.value)}switch(M=c?Ho(c):window,t){case"focusin":(v_(M)||M.contentEditable==="true")&&(zo=M,b0=c,Il=null);break;case"focusout":Il=b0=zo=null;break;case"mousedown":w0=!0;break;case"contextmenu":case"mouseup":case"dragend":w0=!1,b_(f,n,u);break;case"selectionchange":if(Q3)break;case"keydown":case"keyup":b_(f,n,u)}var A;if(ug)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vo?VS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(BS&&n.locale!=="ko"&&(Vo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vo&&(A=kS()):(Br=u,ag="value"in Br?Br.value:Br.textContent,Vo=!0)),M=vf(c,R),0<M.length&&(R=new m_(R,t,null,n,u),f.push({event:R,listeners:M}),A?R.data=A:(A=zS(n),A!==null&&(R.data=A)))),(A=z3?G3(t,n):H3(t,n))&&(c=vf(c,"onBeforeInput"),0<c.length&&(u=new m_("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}QS(f,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vf(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=kl(t,n),s!=null&&i.unshift(Xl(t,s,r)),s=kl(t,e),s!=null&&i.push(Xl(t,s,r))),t=t.return}return i}function Oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C_(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=kl(n,s),l!=null&&o.unshift(Xl(n,l,a))):r||(l=kl(n,s),l!=null&&o.push(Xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tC=/\r\n?/g,nC=/\u0000|\uFFFD/g;function R_(t){return(typeof t=="string"?t:""+t).replace(tC,`
`).replace(nC,"")}function $u(t,e,n){if(e=R_(e),R_(t)!==e&&n)throw Error(ee(425))}function _f(){}var T0=null,E0=null;function A0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var C0=typeof setTimeout=="function"?setTimeout:void 0,iC=typeof clearTimeout=="function"?clearTimeout:void 0,P_=typeof Promise=="function"?Promise:void 0,rC=typeof queueMicrotask=="function"?queueMicrotask:typeof P_<"u"?function(t){return P_.resolve(null).then(t).catch(sC)}:C0;function sC(t){setTimeout(function(){throw t})}function jm(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zl(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function I_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ua=Math.random().toString(36).slice(2),Oi="__reactFiber$"+ua,ql="__reactProps$"+ua,ur="__reactContainer$"+ua,R0="__reactEvents$"+ua,oC="__reactListeners$"+ua,aC="__reactHandles$"+ua;function Us(t){var e=t[Oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[Oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=I_(t);t!==null;){if(n=t[Oi])return n;t=I_(t)}return e}t=n,n=t.parentNode}return null}function tc(t){return t=t[Oi]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Vf(t){return t[ql]||null}var P0=[],Wo=-1;function Jr(t){return{current:t}}function xt(t){0>Wo||(t.current=P0[Wo],P0[Wo]=null,Wo--)}function dt(t,e){Wo++,P0[Wo]=t.current,t.current=e}var Kr={},cn=Jr(Kr),Cn=Jr(!1),zs=Kr;function ia(t,e){var n=t.type.contextTypes;if(!n)return Kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(t){return t=t.childContextTypes,t!=null}function Sf(){xt(Cn),xt(cn)}function D_(t,e,n){if(cn.current!==Kr)throw Error(ee(168));dt(cn,e),dt(Cn,n)}function tM(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,YA(t)||"Unknown",r));return Ct({},n,i)}function Mf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,zs=cn.current,dt(cn,t),dt(Cn,Cn.current),!0}function L_(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=tM(t,e,zs),i.__reactInternalMemoizedMergedChildContext=t,xt(Cn),xt(cn),dt(cn,t)):xt(Cn),dt(Cn,n)}var sr=null,zf=!1,$m=!1;function nM(t){sr===null?sr=[t]:sr.push(t)}function lC(t){zf=!0,nM(t)}function Qr(){if(!$m&&sr!==null){$m=!0;var t=0,e=at;try{var n=sr;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}sr=null,zf=!1}catch(r){throw sr!==null&&(sr=sr.slice(t+1)),AS(ig,Qr),r}finally{at=e,$m=!1}}return null}var Xo=[],qo=0,bf=null,wf=0,ii=[],ri=0,Gs=null,or=1,ar="";function Ns(t,e){Xo[qo++]=wf,Xo[qo++]=bf,bf=t,wf=e}function iM(t,e,n){ii[ri++]=or,ii[ri++]=ar,ii[ri++]=Gs,Gs=t;var i=or;t=ar;var r=32-bi(i)-1;i&=~(1<<r),n+=1;var s=32-bi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,or=1<<32-bi(e)+r|n<<r|i,ar=s+t}else or=1<<s|n<<r|i,ar=t}function hg(t){t.return!==null&&(Ns(t,1),iM(t,1,0))}function dg(t){for(;t===bf;)bf=Xo[--qo],Xo[qo]=null,wf=Xo[--qo],Xo[qo]=null;for(;t===Gs;)Gs=ii[--ri],ii[ri]=null,ar=ii[--ri],ii[ri]=null,or=ii[--ri],ii[ri]=null}var zn=null,Vn=null,vt=!1,Mi=null;function rM(t,e){var n=si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,Vn=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gs!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,Vn=null,!0):!1;default:return!1}}function I0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function D0(t){if(vt){var e=Vn;if(e){var n=e;if(!N_(t,e)){if(I0(t))throw Error(ee(418));e=Wr(n.nextSibling);var i=zn;e&&N_(t,e)?rM(i,n):(t.flags=t.flags&-4097|2,vt=!1,zn=t)}}else{if(I0(t))throw Error(ee(418));t.flags=t.flags&-4097|2,vt=!1,zn=t}}}function F_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function Ku(t){if(t!==zn)return!1;if(!vt)return F_(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!A0(t.type,t.memoizedProps)),e&&(e=Vn)){if(I0(t))throw sM(),Error(ee(418));for(;e;)rM(t,e),e=Wr(e.nextSibling)}if(F_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=zn?Wr(t.stateNode.nextSibling):null;return!0}function sM(){for(var t=Vn;t;)t=Wr(t.nextSibling)}function ra(){Vn=zn=null,vt=!1}function pg(t){Mi===null?Mi=[t]:Mi.push(t)}var cC=dr.ReactCurrentBatchConfig;function vl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Zu(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U_(t){var e=t._init;return e(t._payload)}function oM(t){function e(d,m){if(t){var x=d.deletions;x===null?(d.deletions=[m],d.flags|=16):x.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=jr(d,m),d.index=0,d.sibling=null,d}function s(d,m,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<m?(d.flags|=2,m):x):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,x,S){return m===null||m.tag!==6?(m=n0(x,d.mode,S),m.return=d,m):(m=r(m,x),m.return=d,m)}function l(d,m,x,S){var E=x.type;return E===Bo?u(d,m,x.props.children,S,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fr&&U_(E)===m.type)?(S=r(m,x.props),S.ref=vl(d,m,x),S.return=d,S):(S=ff(x.type,x.key,x.props,null,d.mode,S),S.ref=vl(d,m,x),S.return=d,S)}function c(d,m,x,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=i0(x,d.mode,S),m.return=d,m):(m=r(m,x.children||[]),m.return=d,m)}function u(d,m,x,S,E){return m===null||m.tag!==7?(m=Vs(x,d.mode,S,E),m.return=d,m):(m=r(m,x),m.return=d,m)}function f(d,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=n0(""+m,d.mode,x),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uu:return x=ff(m.type,m.key,m.props,null,d.mode,x),x.ref=vl(d,null,m),x.return=d,x;case ko:return m=i0(m,d.mode,x),m.return=d,m;case Fr:var S=m._init;return f(d,S(m._payload),x)}if(wl(m)||ml(m))return m=Vs(m,d.mode,x,null),m.return=d,m;Zu(d,m)}return null}function h(d,m,x,S){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:a(d,m,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uu:return x.key===E?l(d,m,x,S):null;case ko:return x.key===E?c(d,m,x,S):null;case Fr:return E=x._init,h(d,m,E(x._payload),S)}if(wl(x)||ml(x))return E!==null?null:u(d,m,x,S,null);Zu(d,x)}return null}function p(d,m,x,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(m,d,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Uu:return d=d.get(S.key===null?x:S.key)||null,l(m,d,S,E);case ko:return d=d.get(S.key===null?x:S.key)||null,c(m,d,S,E);case Fr:var M=S._init;return p(d,m,x,M(S._payload),E)}if(wl(S)||ml(S))return d=d.get(x)||null,u(m,d,S,E,null);Zu(m,S)}return null}function g(d,m,x,S){for(var E=null,M=null,A=m,R=m=0,w=null;A!==null&&R<x.length;R++){A.index>R?(w=A,A=null):w=A.sibling;var _=h(d,A,x[R],S);if(_===null){A===null&&(A=w);break}t&&A&&_.alternate===null&&e(d,A),m=s(_,m,R),M===null?E=_:M.sibling=_,M=_,A=w}if(R===x.length)return n(d,A),vt&&Ns(d,R),E;if(A===null){for(;R<x.length;R++)A=f(d,x[R],S),A!==null&&(m=s(A,m,R),M===null?E=A:M.sibling=A,M=A);return vt&&Ns(d,R),E}for(A=i(d,A);R<x.length;R++)w=p(A,d,R,x[R],S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?R:w.key),m=s(w,m,R),M===null?E=w:M.sibling=w,M=w);return t&&A.forEach(function(P){return e(d,P)}),vt&&Ns(d,R),E}function v(d,m,x,S){var E=ml(x);if(typeof E!="function")throw Error(ee(150));if(x=E.call(x),x==null)throw Error(ee(151));for(var M=E=null,A=m,R=m=0,w=null,_=x.next();A!==null&&!_.done;R++,_=x.next()){A.index>R?(w=A,A=null):w=A.sibling;var P=h(d,A,_.value,S);if(P===null){A===null&&(A=w);break}t&&A&&P.alternate===null&&e(d,A),m=s(P,m,R),M===null?E=P:M.sibling=P,M=P,A=w}if(_.done)return n(d,A),vt&&Ns(d,R),E;if(A===null){for(;!_.done;R++,_=x.next())_=f(d,_.value,S),_!==null&&(m=s(_,m,R),M===null?E=_:M.sibling=_,M=_);return vt&&Ns(d,R),E}for(A=i(d,A);!_.done;R++,_=x.next())_=p(A,d,R,_.value,S),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?R:_.key),m=s(_,m,R),M===null?E=_:M.sibling=_,M=_);return t&&A.forEach(function(L){return e(d,L)}),vt&&Ns(d,R),E}function y(d,m,x,S){if(typeof x=="object"&&x!==null&&x.type===Bo&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Uu:e:{for(var E=x.key,M=m;M!==null;){if(M.key===E){if(E=x.type,E===Bo){if(M.tag===7){n(d,M.sibling),m=r(M,x.props.children),m.return=d,d=m;break e}}else if(M.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fr&&U_(E)===M.type){n(d,M.sibling),m=r(M,x.props),m.ref=vl(d,M,x),m.return=d,d=m;break e}n(d,M);break}else e(d,M);M=M.sibling}x.type===Bo?(m=Vs(x.props.children,d.mode,S,x.key),m.return=d,d=m):(S=ff(x.type,x.key,x.props,null,d.mode,S),S.ref=vl(d,m,x),S.return=d,d=S)}return o(d);case ko:e:{for(M=x.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(d,m.sibling),m=r(m,x.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=i0(x,d.mode,S),m.return=d,d=m}return o(d);case Fr:return M=x._init,y(d,m,M(x._payload),S)}if(wl(x))return g(d,m,x,S);if(ml(x))return v(d,m,x,S);Zu(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,x),m.return=d,d=m):(n(d,m),m=n0(x,d.mode,S),m.return=d,d=m),o(d)):n(d,m)}return y}var sa=oM(!0),aM=oM(!1),Tf=Jr(null),Ef=null,Yo=null,mg=null;function gg(){mg=Yo=Ef=null}function xg(t){var e=Tf.current;xt(Tf),t._currentValue=e}function L0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ea(t,e){Ef=t,mg=Yo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(An=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(mg!==t)if(t={context:t,memoizedValue:e,next:null},Yo===null){if(Ef===null)throw Error(ee(308));Yo=t,Ef.dependencies={lanes:0,firstContext:t}}else Yo=Yo.next=t;return e}var Os=null;function yg(t){Os===null?Os=[t]:Os.push(t)}function lM(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yg(e)):(n.next=r.next,r.next=n),e.interleaved=n,fr(t,i)}function fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function vg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cM(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fr(t,n)}return r=i.interleaved,r===null?(e.next=e,yg(i)):(e.next=r.next,r.next=e),i.interleaved=e,fr(t,n)}function sf(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rg(t,n)}}function O_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Af(t,e,n,i){var r=t.updateQueue;Ur=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Ct({},f,h);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=f}}function k_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var nc={},Bi=Jr(nc),Yl=Jr(nc),jl=Jr(nc);function ks(t){if(t===nc)throw Error(ee(174));return t}function _g(t,e){switch(dt(jl,e),dt(Yl,t),dt(Bi,nc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:d0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=d0(e,t)}xt(Bi),dt(Bi,e)}function oa(){xt(Bi),xt(Yl),xt(jl)}function uM(t){ks(jl.current);var e=ks(Bi.current),n=d0(e,t.type);e!==n&&(dt(Yl,t),dt(Bi,n))}function Sg(t){Yl.current===t&&(xt(Bi),xt(Yl))}var Et=Jr(0);function Cf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Km=[];function Mg(){for(var t=0;t<Km.length;t++)Km[t]._workInProgressVersionPrimary=null;Km.length=0}var of=dr.ReactCurrentDispatcher,Zm=dr.ReactCurrentBatchConfig,Hs=0,At=null,Ht=null,Zt=null,Rf=!1,Dl=!1,$l=0,uC=0;function on(){throw Error(ee(321))}function bg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ti(t[n],e[n]))return!1;return!0}function wg(t,e,n,i,r,s){if(Hs=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,of.current=t===null||t.memoizedState===null?pC:mC,t=n(i,r),Dl){s=0;do{if(Dl=!1,$l=0,25<=s)throw Error(ee(301));s+=1,Zt=Ht=null,e.updateQueue=null,of.current=gC,t=n(i,r)}while(Dl)}if(of.current=Pf,e=Ht!==null&&Ht.next!==null,Hs=0,Zt=Ht=At=null,Rf=!1,e)throw Error(ee(300));return t}function Tg(){var t=$l!==0;return $l=0,t}function Ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function li(){if(Ht===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=Zt===null?At.memoizedState:Zt.next;if(e!==null)Zt=e,Ht=t;else{if(t===null)throw Error(ee(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Zt===null?At.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Kl(t,e){return typeof e=="function"?e(t):e}function Jm(t){var e=li(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Hs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,At.lanes|=u,Ws|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ti(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,Ws|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qm(t){var e=li(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ti(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fM(){}function hM(t,e){var n=At,i=li(),r=e(),s=!Ti(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Eg(mM.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,Zl(9,pM.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(ee(349));(Hs&30)!==0||dM(n,e,r)}return r}function dM(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pM(t,e,n,i){e.value=n,e.getSnapshot=i,gM(e)&&xM(t)}function mM(t,e,n){return n(function(){gM(e)&&xM(t)})}function gM(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ti(t,n)}catch{return!0}}function xM(t){var e=fr(t,1);e!==null&&wi(e,t,1,-1)}function B_(t){var e=Ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},e.queue=t,t=t.dispatch=dC.bind(null,At,t),[e.memoizedState,t]}function Zl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function yM(){return li().memoizedState}function af(t,e,n,i){var r=Ui();At.flags|=t,r.memoizedState=Zl(1|e,n,void 0,i===void 0?null:i)}function Gf(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&bg(i,o.deps)){r.memoizedState=Zl(e,n,s,i);return}}At.flags|=t,r.memoizedState=Zl(1|e,n,s,i)}function V_(t,e){return af(8390656,8,t,e)}function Eg(t,e){return Gf(2048,8,t,e)}function vM(t,e){return Gf(4,2,t,e)}function _M(t,e){return Gf(4,4,t,e)}function SM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function MM(t,e,n){return n=n!=null?n.concat([t]):null,Gf(4,4,SM.bind(null,e,t),n)}function Ag(){}function bM(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wM(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&bg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function TM(t,e,n){return(Hs&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n):(Ti(n,e)||(n=PS(),At.lanes|=n,Ws|=n,t.baseState=!0),e)}function fC(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Zm.transition;Zm.transition={};try{t(!1),e()}finally{at=n,Zm.transition=i}}function EM(){return li().memoizedState}function hC(t,e,n){var i=Yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},AM(t))CM(e,n);else if(n=lM(t,e,n,i),n!==null){var r=vn();wi(n,t,i,r),RM(n,e,i)}}function dC(t,e,n){var i=Yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(AM(t))CM(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ti(a,o)){var l=e.interleaved;l===null?(r.next=r,yg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lM(t,e,r,i),n!==null&&(r=vn(),wi(n,t,i,r),RM(n,e,i))}}function AM(t){var e=t.alternate;return t===At||e!==null&&e===At}function CM(t,e){Dl=Rf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function RM(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rg(t,n)}}var Pf={readContext:ai,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},pC={readContext:ai,useCallback:function(t,e){return Ui().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:V_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,af(4194308,4,SM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return af(4194308,4,t,e)},useInsertionEffect:function(t,e){return af(4,2,t,e)},useMemo:function(t,e){var n=Ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ui();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hC.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=Ui();return t={current:t},e.memoizedState=t},useState:B_,useDebugValue:Ag,useDeferredValue:function(t){return Ui().memoizedState=t},useTransition:function(){var t=B_(!1),e=t[0];return t=fC.bind(null,t[1]),Ui().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=Ui();if(vt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Jt===null)throw Error(ee(349));(Hs&30)!==0||dM(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,V_(mM.bind(null,i,s,t),[t]),i.flags|=2048,Zl(9,pM.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ui(),e=Jt.identifierPrefix;if(vt){var n=ar,i=or;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$l++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mC={readContext:ai,useCallback:bM,useContext:ai,useEffect:Eg,useImperativeHandle:MM,useInsertionEffect:vM,useLayoutEffect:_M,useMemo:wM,useReducer:Jm,useRef:yM,useState:function(){return Jm(Kl)},useDebugValue:Ag,useDeferredValue:function(t){var e=li();return TM(e,Ht.memoizedState,t)},useTransition:function(){var t=Jm(Kl)[0],e=li().memoizedState;return[t,e]},useMutableSource:fM,useSyncExternalStore:hM,useId:EM,unstable_isNewReconciler:!1},gC={readContext:ai,useCallback:bM,useContext:ai,useEffect:Eg,useImperativeHandle:MM,useInsertionEffect:vM,useLayoutEffect:_M,useMemo:wM,useReducer:Qm,useRef:yM,useState:function(){return Qm(Kl)},useDebugValue:Ag,useDeferredValue:function(t){var e=li();return Ht===null?e.memoizedState=t:TM(e,Ht.memoizedState,t)},useTransition:function(){var t=Qm(Kl)[0],e=li().memoizedState;return[t,e]},useMutableSource:fM,useSyncExternalStore:hM,useId:EM,unstable_isNewReconciler:!1};function _i(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function N0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hf={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Yr(t),s=lr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(wi(e,t,r,i),sf(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Yr(t),s=lr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xr(t,s,r),e!==null&&(wi(e,t,r,i),sf(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=Yr(t),r=lr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xr(t,r,i),e!==null&&(wi(e,t,i,n),sf(e,t,i))}};function z_(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hl(n,i)||!Hl(r,s):!0}function PM(t,e,n){var i=!1,r=Kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Rn(e)?zs:cn.current,i=e.contextTypes,s=(i=i!=null)?ia(t,r):Kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hf,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function G_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hf.enqueueReplaceState(e,e.state,null)}function F0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},vg(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Rn(e)?zs:cn.current,r.context=ia(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(N0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hf.enqueueReplaceState(r,r.state,null),Af(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=qA(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function e0(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function U0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xC=typeof WeakMap=="function"?WeakMap:Map;function IM(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Df||(Df=!0,q0=i),U0(t,e)},n}function DM(t,e,n){n=lr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){U0(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){U0(t,e),typeof i!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function H_(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xC;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=IC.bind(null,t,e,n),e.then(t,t))}function W_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function X_(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var yC=dr.ReactCurrentOwner,An=!1;function yn(t,e,n,i){e.child=t===null?aM(e,null,n,i):sa(e,t.child,n,i)}function q_(t,e,n,i,r){n=n.render;var s=e.ref;return ea(e,r),i=wg(t,e,n,i,s,r),n=Tg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(vt&&n&&hg(e),e.flags|=1,yn(t,e,i,r),e.child)}function Y_(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,LM(t,e,s,i,r)):(t=ff(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(o,i)&&t.ref===e.ref)return hr(t,e,r)}return e.flags|=1,t=jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function LM(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Hl(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(An=!0);else return e.lanes=t.lanes,hr(t,e,r)}return O0(t,e,n,i,r)}function NM(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt($o,Bn),Bn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt($o,Bn),Bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt($o,Bn),Bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt($o,Bn),Bn|=i;return yn(t,e,r,n),e.child}function FM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function O0(t,e,n,i,r){var s=Rn(n)?zs:cn.current;return s=ia(e,s),ea(e,r),n=wg(t,e,n,i,s,r),i=Tg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(vt&&i&&hg(e),e.flags|=1,yn(t,e,n,r),e.child)}function j_(t,e,n,i,r){if(Rn(n)){var s=!0;Mf(e)}else s=!1;if(ea(e,r),e.stateNode===null)lf(t,e),PM(e,n,i),F0(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ai(c):(c=Rn(n)?zs:cn.current,c=ia(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&G_(e,o,i,c),Ur=!1;var h=e.memoizedState;o.state=h,Af(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Cn.current||Ur?(typeof u=="function"&&(N0(e,n,u,i),l=e.memoizedState),(a=Ur||z_(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cM(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:_i(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Rn(n)?zs:cn.current,l=ia(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&G_(e,o,i,l),Ur=!1,h=e.memoizedState,o.state=h,Af(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||Cn.current||Ur?(typeof p=="function"&&(N0(e,n,p,i),g=e.memoizedState),(c=Ur||z_(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return k0(t,e,n,i,s,r)}function k0(t,e,n,i,r,s){FM(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&L_(e,n,!1),hr(t,e,s);i=e.stateNode,yC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=sa(e,t.child,null,s),e.child=sa(e,null,a,s)):yn(t,e,a,s),e.memoizedState=i.state,r&&L_(e,n,!0),e.child}function UM(t){var e=t.stateNode;e.pendingContext?D_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&D_(t,e.context,!1),_g(t,e.containerInfo)}function $_(t,e,n,i,r){return ra(),pg(r),e.flags|=256,yn(t,e,n,i),e.child}var B0={dehydrated:null,treeContext:null,retryLane:0};function V0(t){return{baseLanes:t,cachePool:null,transitions:null}}function OM(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(Et,r&1),t===null)return D0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qf(o,i,0,null),t=Vs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=V0(n),e.memoizedState=B0,t):Cg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vC(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=jr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Vs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?V0(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=B0,i}return s=t.child,t=s.sibling,i=jr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cg(t,e){return e=qf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ju(t,e,n,i){return i!==null&&pg(i),sa(e,t.child,null,n),t=Cg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vC(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=e0(Error(ee(422))),Ju(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=qf({mode:"visible",children:i.children},r,0,null),s=Vs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&sa(e,t.child,null,o),e.child.memoizedState=V0(o),e.memoizedState=B0,s);if((e.mode&1)===0)return Ju(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=e0(s,i,void 0),Ju(t,e,o,i)}if(a=(o&t.childLanes)!==0,An||a){if(i=Jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fr(t,r),wi(i,t,r,-1))}return Ng(),i=e0(Error(ee(421))),Ju(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=DC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=Wr(r.nextSibling),zn=e,vt=!0,Mi=null,t!==null&&(ii[ri++]=or,ii[ri++]=ar,ii[ri++]=Gs,or=t.id,ar=t.overflow,Gs=e),e=Cg(e,i.children),e.flags|=4096,e)}function K_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),L0(t.return,e,n)}function t0(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function kM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(yn(t,e,i.children,n),i=Et.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&K_(t,n,e);else if(t.tag===19)K_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(Et,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cf(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),t0(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cf(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}t0(e,!0,n,null,s);break;case"together":t0(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lf(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _C(t,e,n){switch(e.tag){case 3:UM(e),ra();break;case 5:uM(e);break;case 1:Rn(e.type)&&Mf(e);break;case 4:_g(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Tf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(Et,Et.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?OM(t,e,n):(dt(Et,Et.current&1),t=hr(t,e,n),t!==null?t.sibling:null);dt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return kM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,NM(t,e,n)}return hr(t,e,n)}var BM,z0,VM,zM;BM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};z0=function(){};VM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ks(Bi.current);var s=null;switch(n){case"input":r=c0(t,r),i=c0(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=h0(t,r),i=h0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_f)}p0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ul.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ul.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zM=function(t,e,n,i){n!==i&&(e.flags|=4)};function _l(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function SC(t,e,n){var i=e.pendingProps;switch(dg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Rn(e.type)&&Sf(),an(e),null;case 3:return i=e.stateNode,oa(),xt(Cn),xt(cn),Mg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ku(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Mi!==null&&($0(Mi),Mi=null))),z0(t,e),an(e),null;case 5:Sg(e);var r=ks(jl.current);if(n=e.type,t!==null&&e.stateNode!=null)VM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return an(e),null}if(t=ks(Bi.current),Ku(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Oi]=e,i[ql]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<El.length;r++)gt(El[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":r_(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":o_(i,s),gt("invalid",i)}p0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$u(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$u(i.textContent,a,t),r=["children",""+a]):Ul.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Ou(i),s_(i,s,!0);break;case"textarea":Ou(i),a_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_f)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Oi]=e,t[ql]=i,BM(t,e,!1,!1),e.stateNode=t;e:{switch(o=m0(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<El.length;r++)gt(El[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":r_(t,i),r=c0(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),gt("invalid",t);break;case"textarea":o_(t,i),r=h0(t,i),gt("invalid",t);break;default:r=i}p0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ol(t,l):typeof l=="number"&&Ol(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ul.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&J0(t,s,l,o))}switch(n){case"input":Ou(t),s_(t,i,!1);break;case"textarea":Ou(t),a_(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ko(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ko(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_f)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)zM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=ks(jl.current),ks(Bi.current),Ku(e)){if(i=e.stateNode,n=e.memoizedProps,i[Oi]=e,(s=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:$u(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$u(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Oi]=e,e.stateNode=i}return an(e),null;case 13:if(xt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Vn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)sM(),ra(),e.flags|=98560,s=!1;else if(s=Ku(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Oi]=e}else ra(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else Mi!==null&&($0(Mi),Mi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Et.current&1)!==0?Wt===0&&(Wt=3):Ng())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return oa(),z0(t,e),t===null&&Wl(e.stateNode.containerInfo),an(e),null;case 10:return xg(e.type._context),an(e),null;case 17:return Rn(e.type)&&Sf(),an(e),null;case 19:if(xt(Et),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_l(s,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Cf(t),o!==null){for(e.flags|=128,_l(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&kt()>la&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cf(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return an(e),null}else 2*kt()-s.renderingStartTime>la&&n!==1073741824&&(e.flags|=128,i=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,n=Et.current,dt(Et,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return Lg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Bn&1073741824)!==0&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function MC(t,e){switch(dg(e),e.tag){case 1:return Rn(e.type)&&Sf(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oa(),xt(Cn),xt(cn),Mg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Sg(e),null;case 13:if(xt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Et),null;case 4:return oa(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Lg(),null;case 24:return null;default:return null}}var Qu=!1,ln=!1,bC=typeof WeakSet=="function"?WeakSet:Set,pe=null;function jo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function G0(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Z_=!1;function wC(t,e){if(T0=xf,t=qS(),fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(E0={focusedElem:t,selectionRange:n},xf=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,y=g.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:_i(e.type,v),y);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=Z_,Z_=!1,g}function Ll(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&G0(e,n,s)}r=r.next}while(r!==i)}}function Wf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function H0(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function GM(t){var e=t.alternate;e!==null&&(t.alternate=null,GM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Oi],delete e[ql],delete e[R0],delete e[oC],delete e[aC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HM(t){return t.tag===5||t.tag===3||t.tag===4}function J_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function W0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_f));else if(i!==4&&(t=t.child,t!==null))for(W0(t,e,n),t=t.sibling;t!==null;)W0(t,e,n),t=t.sibling}function X0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(X0(t,e,n),t=t.sibling;t!==null;)X0(t,e,n),t=t.sibling}var tn=null,Si=!1;function Nr(t,e,n){for(n=n.child;n!==null;)WM(t,e,n),n=n.sibling}function WM(t,e,n){if(ki&&typeof ki.onCommitFiberUnmount=="function")try{ki.onCommitFiberUnmount(Uf,n)}catch{}switch(n.tag){case 5:ln||jo(n,e);case 6:var i=tn,r=Si;tn=null,Nr(t,e,n),tn=i,Si=r,tn!==null&&(Si?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(Si?(t=tn,n=n.stateNode,t.nodeType===8?jm(t.parentNode,n):t.nodeType===1&&jm(t,n),zl(t)):jm(tn,n.stateNode));break;case 4:i=tn,r=Si,tn=n.stateNode.containerInfo,Si=!0,Nr(t,e,n),tn=i,Si=r;break;case 0:case 11:case 14:case 15:if(!ln&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&G0(n,e,o),r=r.next}while(r!==i)}Nr(t,e,n);break;case 1:if(!ln&&(jo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Nt(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(ln=(i=ln)||n.memoizedState!==null,Nr(t,e,n),ln=i):Nr(t,e,n);break;default:Nr(t,e,n)}}function Q_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bC),e.forEach(function(i){var r=LC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function vi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,Si=!1;break e;case 3:tn=a.stateNode.containerInfo,Si=!0;break e;case 4:tn=a.stateNode.containerInfo,Si=!0;break e}a=a.return}if(tn===null)throw Error(ee(160));WM(s,o,r),tn=null,Si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Nt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)XM(e,t),e=e.sibling}function XM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vi(e,t),Fi(t),i&4){try{Ll(3,t,t.return),Wf(3,t)}catch(v){Nt(t,t.return,v)}try{Ll(5,t,t.return)}catch(v){Nt(t,t.return,v)}}break;case 1:vi(e,t),Fi(t),i&512&&n!==null&&jo(n,n.return);break;case 5:if(vi(e,t),Fi(t),i&512&&n!==null&&jo(n,n.return),t.flags&32){var r=t.stateNode;try{Ol(r,"")}catch(v){Nt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dS(r,s),m0(a,o);var c=m0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?yS(r,f):u==="dangerouslySetInnerHTML"?gS(r,f):u==="children"?Ol(r,f):J0(r,u,f,c)}switch(a){case"input":u0(r,s);break;case"textarea":pS(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ko(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ko(r,!!s.multiple,s.defaultValue,!0):Ko(r,!!s.multiple,s.multiple?[]:"",!1))}r[ql]=s}catch(v){Nt(t,t.return,v)}}break;case 6:if(vi(e,t),Fi(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Nt(t,t.return,v)}}break;case 3:if(vi(e,t),Fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zl(e.containerInfo)}catch(v){Nt(t,t.return,v)}break;case 4:vi(e,t),Fi(t);break;case 13:vi(e,t),Fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ig=kt())),i&4&&Q_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ln=(c=ln)||u,vi(e,t),ln=c):vi(e,t),Fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(pe=t,u=t.child;u!==null;){for(f=pe=u;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ll(4,h,h.return);break;case 1:jo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Nt(i,n,v)}}break;case 5:jo(h,h.return);break;case 22:if(h.memoizedState!==null){tS(f);continue}}p!==null?(p.return=h,pe=p):tS(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xS("display",o))}catch(v){Nt(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Nt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vi(e,t),Fi(t),i&4&&Q_(t);break;case 21:break;default:vi(e,t),Fi(t)}}function Fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HM(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ol(r,""),i.flags&=-33);var s=J_(t);X0(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=J_(t);W0(t,a,o);break;default:throw Error(ee(161))}}catch(l){Nt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TC(t,e,n){pe=t,qM(t,e,n)}function qM(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Qu;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||ln;a=Qu;var c=ln;if(Qu=o,(ln=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?nS(r):l!==null?(l.return=o,pe=l):nS(r);for(;s!==null;)pe=s,qM(s,e,n),s=s.sibling;pe=r,Qu=a,ln=c}eS(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,pe=s):eS(t,e,n)}}function eS(t){for(;pe!==null;){var e=pe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ln||Wf(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!ln)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_i(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&k_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}k_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&zl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}ln||e.flags&512&&H0(e)}catch(h){Nt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function tS(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function nS(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wf(4,e)}catch(l){Nt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Nt(e,r,l)}}var s=e.return;try{H0(e)}catch(l){Nt(e,s,l)}break;case 5:var o=e.return;try{H0(e)}catch(l){Nt(e,o,l)}}}catch(l){Nt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var EC=Math.ceil,If=dr.ReactCurrentDispatcher,Rg=dr.ReactCurrentOwner,oi=dr.ReactCurrentBatchConfig,tt=0,Jt=null,Vt=null,nn=0,Bn=0,$o=Jr(0),Wt=0,Jl=null,Ws=0,Xf=0,Pg=0,Nl=null,En=null,Ig=0,la=1/0,rr=null,Df=!1,q0=null,qr=null,ef=!1,Vr=null,Lf=0,Fl=0,Y0=null,cf=-1,uf=0;function vn(){return(tt&6)!==0?kt():cf!==-1?cf:cf=kt()}function Yr(t){return(t.mode&1)===0?1:(tt&2)!==0&&nn!==0?nn&-nn:cC.transition!==null?(uf===0&&(uf=PS()),uf):(t=at,t!==0||(t=window.event,t=t===void 0?16:OS(t.type)),t)}function wi(t,e,n,i){if(50<Fl)throw Fl=0,Y0=null,Error(ee(185));Ql(t,n,i),((tt&2)===0||t!==Jt)&&(t===Jt&&((tt&2)===0&&(Xf|=n),Wt===4&&kr(t,nn)),Pn(t,i),n===1&&tt===0&&(e.mode&1)===0&&(la=kt()+500,zf&&Qr()))}function Pn(t,e){var n=t.callbackNode;f3(t,e);var i=gf(t,t===Jt?nn:0);if(i===0)n!==null&&u_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&u_(n),e===1)t.tag===0?lC(iS.bind(null,t)):nM(iS.bind(null,t)),rC(function(){(tt&6)===0&&Qr()}),n=null;else{switch(IS(i)){case 1:n=ig;break;case 4:n=CS;break;case 16:n=mf;break;case 536870912:n=RS;break;default:n=mf}n=e1(n,YM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YM(t,e){if(cf=-1,uf=0,(tt&6)!==0)throw Error(ee(327));var n=t.callbackNode;if(ta()&&t.callbackNode!==n)return null;var i=gf(t,t===Jt?nn:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Nf(t,i);else{e=i;var r=tt;tt|=2;var s=$M();(Jt!==t||nn!==e)&&(rr=null,la=kt()+500,Bs(t,e));do try{RC();break}catch(a){jM(t,a)}while(!0);gg(),If.current=s,tt=r,Vt!==null?e=0:(Jt=null,nn=0,e=Wt)}if(e!==0){if(e===2&&(r=_0(t),r!==0&&(i=r,e=j0(t,r))),e===1)throw n=Jl,Bs(t,0),kr(t,i),Pn(t,kt()),n;if(e===6)kr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!AC(r)&&(e=Nf(t,i),e===2&&(s=_0(t),s!==0&&(i=s,e=j0(t,s))),e===1))throw n=Jl,Bs(t,0),kr(t,i),Pn(t,kt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Fs(t,En,rr);break;case 3:if(kr(t,i),(i&130023424)===i&&(e=Ig+500-kt(),10<e)){if(gf(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=C0(Fs.bind(null,t,En,rr),e);break}Fs(t,En,rr);break;case 4:if(kr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-bi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*EC(i/1960))-i,10<i){t.timeoutHandle=C0(Fs.bind(null,t,En,rr),i);break}Fs(t,En,rr);break;case 5:Fs(t,En,rr);break;default:throw Error(ee(329))}}}return Pn(t,kt()),t.callbackNode===n?YM.bind(null,t):null}function j0(t,e){var n=Nl;return t.current.memoizedState.isDehydrated&&(Bs(t,e).flags|=256),t=Nf(t,e),t!==2&&(e=En,En=n,e!==null&&$0(e)),t}function $0(t){En===null?En=t:En.push.apply(En,t)}function AC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~Pg,e&=~Xf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bi(e),i=1<<n;t[n]=-1,e&=~i}}function iS(t){if((tt&6)!==0)throw Error(ee(327));ta();var e=gf(t,0);if((e&1)===0)return Pn(t,kt()),null;var n=Nf(t,e);if(t.tag!==0&&n===2){var i=_0(t);i!==0&&(e=i,n=j0(t,i))}if(n===1)throw n=Jl,Bs(t,0),kr(t,e),Pn(t,kt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fs(t,En,rr),Pn(t,kt()),null}function Dg(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(la=kt()+500,zf&&Qr())}}function Xs(t){Vr!==null&&Vr.tag===0&&(tt&6)===0&&ta();var e=tt;tt|=1;var n=oi.transition,i=at;try{if(oi.transition=null,at=1,t)return t()}finally{at=i,oi.transition=n,tt=e,(tt&6)===0&&Qr()}}function Lg(){Bn=$o.current,xt($o)}function Bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iC(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(dg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sf();break;case 3:oa(),xt(Cn),xt(cn),Mg();break;case 5:Sg(i);break;case 4:oa();break;case 13:xt(Et);break;case 19:xt(Et);break;case 10:xg(i.type._context);break;case 22:case 23:Lg()}n=n.return}if(Jt=t,Vt=t=jr(t.current,null),nn=Bn=e,Wt=0,Jl=null,Pg=Xf=Ws=0,En=Nl=null,Os!==null){for(e=0;e<Os.length;e++)if(n=Os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Os=null}return t}function jM(t,e){do{var n=Vt;try{if(gg(),of.current=Pf,Rf){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rf=!1}if(Hs=0,Zt=Ht=At=null,Dl=!1,$l=0,Rg.current=null,n===null||n.return===null){Wt=1,Jl=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=W_(o);if(p!==null){p.flags&=-257,X_(p,o,a,s,e),p.mode&1&&H_(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if((e&1)===0){H_(s,c,e),Ng();break e}l=Error(ee(426))}}else if(vt&&a.mode&1){var y=W_(o);if(y!==null){(y.flags&65536)===0&&(y.flags|=256),X_(y,o,a,s,e),pg(aa(l,a));break e}}s=l=aa(l,a),Wt!==4&&(Wt=2),Nl===null?Nl=[s]:Nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=IM(s,l,e);O_(s,d);break e;case 1:a=l;var m=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qr===null||!qr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=DM(s,a,e);O_(s,S);break e}}s=s.return}while(s!==null)}ZM(n)}catch(E){e=E,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function $M(){var t=If.current;return If.current=Pf,t===null?Pf:t}function Ng(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Jt===null||(Ws&268435455)===0&&(Xf&268435455)===0||kr(Jt,nn)}function Nf(t,e){var n=tt;tt|=2;var i=$M();(Jt!==t||nn!==e)&&(rr=null,Bs(t,e));do try{CC();break}catch(r){jM(t,r)}while(!0);if(gg(),tt=n,If.current=i,Vt!==null)throw Error(ee(261));return Jt=null,nn=0,Wt}function CC(){for(;Vt!==null;)KM(Vt)}function RC(){for(;Vt!==null&&!n3();)KM(Vt)}function KM(t){var e=QM(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,e===null?ZM(t):Vt=e,Rg.current=null}function ZM(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=SC(n,e,Bn),n!==null){Vt=n;return}}else{if(n=MC(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Vt=null;return}}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Fs(t,e,n){var i=at,r=oi.transition;try{oi.transition=null,at=1,PC(t,e,n,i)}finally{oi.transition=r,at=i}return null}function PC(t,e,n,i){do ta();while(Vr!==null);if((tt&6)!==0)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h3(t,s),t===Jt&&(Vt=Jt=null,nn=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ef||(ef=!0,e1(mf,function(){return ta(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=oi.transition,oi.transition=null;var o=at;at=1;var a=tt;tt|=4,Rg.current=null,wC(t,n),XM(n,t),J3(E0),xf=!!T0,E0=T0=null,t.current=n,TC(n,t,r),i3(),tt=a,at=o,oi.transition=s}else t.current=n;if(ef&&(ef=!1,Vr=t,Lf=r),s=t.pendingLanes,s===0&&(qr=null),o3(n.stateNode,i),Pn(t,kt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Df)throw Df=!1,t=q0,q0=null,t;return(Lf&1)!==0&&t.tag!==0&&ta(),s=t.pendingLanes,(s&1)!==0?t===Y0?Fl++:(Fl=0,Y0=t):Fl=0,Qr(),null}function ta(){if(Vr!==null){var t=IS(Lf),e=oi.transition,n=at;try{if(oi.transition=null,at=16>t?16:t,Vr===null)var i=!1;else{if(t=Vr,Vr=null,Lf=0,(tt&6)!==0)throw Error(ee(331));var r=tt;for(tt|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if((pe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Ll(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var h=u.sibling,p=u.return;if(GM(u),u===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}pe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ll(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var m=t.current;for(pe=m;pe!==null;){o=pe;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,pe=x;else e:for(o=m;pe!==null;){if(a=pe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Wf(9,a)}}catch(E){Nt(a,a.return,E)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(tt=r,Qr(),ki&&typeof ki.onPostCommitFiberRoot=="function")try{ki.onPostCommitFiberRoot(Uf,t)}catch{}i=!0}return i}finally{at=n,oi.transition=e}}return!1}function rS(t,e,n){e=aa(n,e),e=IM(t,e,1),t=Xr(t,e,1),e=vn(),t!==null&&(Ql(t,1,e),Pn(t,e))}function Nt(t,e,n){if(t.tag===3)rS(t,t,n);else for(;e!==null;){if(e.tag===3){rS(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qr===null||!qr.has(i))){t=aa(n,t),t=DM(e,t,1),e=Xr(e,t,1),t=vn(),e!==null&&(Ql(e,1,t),Pn(e,t));break}}e=e.return}}function IC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(nn&n)===n&&(Wt===4||Wt===3&&(nn&130023424)===nn&&500>kt()-Ig?Bs(t,0):Pg|=n),Pn(t,e)}function JM(t,e){e===0&&((t.mode&1)===0?e=1:(e=Vu,Vu<<=1,(Vu&130023424)===0&&(Vu=4194304)));var n=vn();t=fr(t,e),t!==null&&(Ql(t,e,n),Pn(t,n))}function DC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),JM(t,n)}function LC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),JM(t,n)}var QM;QM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)An=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return An=!1,_C(t,e,n);An=(t.flags&131072)!==0}else An=!1,vt&&(e.flags&1048576)!==0&&iM(e,wf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;lf(t,e),t=e.pendingProps;var r=ia(e,cn.current);ea(e,n),r=wg(null,e,i,t,r,n);var s=Tg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,Mf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,vg(e),r.updater=Hf,e.stateNode=r,r._reactInternals=e,F0(e,i,t,n),e=k0(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&hg(e),yn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(lf(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=FC(i),t=_i(i,t),r){case 0:e=O0(null,e,i,t,n);break e;case 1:e=j_(null,e,i,t,n);break e;case 11:e=q_(null,e,i,t,n);break e;case 14:e=Y_(null,e,i,_i(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),O0(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),j_(t,e,i,r,n);case 3:e:{if(UM(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cM(t,e),Af(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ee(423)),e),e=$_(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(ee(424)),e),e=$_(t,e,i,n,r);break e}else for(Vn=Wr(e.stateNode.containerInfo.firstChild),zn=e,vt=!0,Mi=null,n=aM(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===r){e=hr(t,e,n);break e}yn(t,e,i,n)}e=e.child}return e;case 5:return uM(e),t===null&&D0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,A0(i,r)?o=null:s!==null&&A0(i,s)&&(e.flags|=32),FM(t,e),yn(t,e,o,n),e.child;case 6:return t===null&&D0(e),null;case 13:return OM(t,e,n);case 4:return _g(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=sa(e,null,i,n):yn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),q_(t,e,i,r,n);case 7:return yn(t,e,e.pendingProps,n),e.child;case 8:return yn(t,e,e.pendingProps.children,n),e.child;case 12:return yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Tf,i._currentValue),i._currentValue=o,s!==null)if(Ti(s.value,o)){if(s.children===r.children&&!Cn.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=lr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),L0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),L0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ea(e,n),r=ai(r),i=i(r),e.flags|=1,yn(t,e,i,n),e.child;case 14:return i=e.type,r=_i(i,e.pendingProps),r=_i(i.type,r),Y_(t,e,i,r,n);case 15:return LM(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_i(i,r),lf(t,e),e.tag=1,Rn(i)?(t=!0,Mf(e)):t=!1,ea(e,n),PM(e,i,r),F0(e,i,r,n),k0(null,e,i,!0,t,n);case 19:return kM(t,e,n);case 22:return NM(t,e,n)}throw Error(ee(156,e.tag))};function e1(t,e){return AS(t,e)}function NC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,e,n,i){return new NC(t,e,n,i)}function Fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FC(t){if(typeof t=="function")return Fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eg)return 11;if(t===tg)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ff(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bo:return Vs(n.children,r,s,e);case Q0:o=8,r|=8;break;case s0:return t=si(12,n,e,r|2),t.elementType=s0,t.lanes=s,t;case o0:return t=si(13,n,e,r),t.elementType=o0,t.lanes=s,t;case a0:return t=si(19,n,e,r),t.elementType=a0,t.lanes=s,t;case uS:return qf(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lS:o=10;break e;case cS:o=9;break e;case eg:o=11;break e;case tg:o=14;break e;case Fr:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vs(t,e,n,i){return t=si(7,t,i,e),t.lanes=n,t}function qf(t,e,n,i){return t=si(22,t,i,e),t.elementType=uS,t.lanes=n,t.stateNode={isHidden:!1},t}function n0(t,e,n){return t=si(6,t,null,e),t.lanes=n,t}function i0(t,e,n){return e=si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vm(0),this.expirationTimes=Vm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vm(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ug(t,e,n,i,r,s,o,a,l){return t=new UC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vg(s),t}function OC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ko,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function t1(t){if(!t)return Kr;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(Rn(n))return tM(t,n,e)}return e}function n1(t,e,n,i,r,s,o,a,l){return t=Ug(n,i,!0,t,r,s,o,a,l),t.context=t1(null),n=t.current,i=vn(),r=Yr(n),s=lr(i,r),s.callback=e??null,Xr(n,s,r),t.current.lanes=r,Ql(t,r,i),Pn(t,i),t}function Yf(t,e,n,i){var r=e.current,s=vn(),o=Yr(r);return n=t1(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xr(r,e,o),t!==null&&(wi(t,r,o,s),sf(t,r,o)),o}function Ff(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Og(t,e){sS(t,e),(t=t.alternate)&&sS(t,e)}function kC(){return null}var i1=typeof reportError=="function"?reportError:function(t){console.error(t)};function kg(t){this._internalRoot=t}jf.prototype.render=kg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Yf(t,e,null,null)};jf.prototype.unmount=kg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xs(function(){Yf(null,t,null,null)}),e[ur]=null}};function jf(t){this._internalRoot=t}jf.prototype.unstable_scheduleHydration=function(t){if(t){var e=NS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&US(t)}};function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oS(){}function BC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ff(o);s.call(c)}}var o=n1(e,i,t,0,null,!1,!1,"",oS);return t._reactRootContainer=o,t[ur]=o.current,Wl(t.nodeType===8?t.parentNode:t),Xs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ff(l);a.call(c)}}var l=Ug(t,0,!1,null,null,!1,!1,"",oS);return t._reactRootContainer=l,t[ur]=l.current,Wl(t.nodeType===8?t.parentNode:t),Xs(function(){Yf(e,l,n,i)}),l}function Kf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ff(o);a.call(l)}}Yf(e,o,t,r)}else o=BC(n,e,t,r,i);return Ff(o)}DS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Tl(e.pendingLanes);n!==0&&(rg(e,n|1),Pn(e,kt()),(tt&6)===0&&(la=kt()+500,Qr()))}break;case 13:Xs(function(){var i=fr(t,1);if(i!==null){var r=vn();wi(i,t,1,r)}}),Og(t,1)}};sg=function(t){if(t.tag===13){var e=fr(t,134217728);if(e!==null){var n=vn();wi(e,t,134217728,n)}Og(t,134217728)}};LS=function(t){if(t.tag===13){var e=Yr(t),n=fr(t,e);if(n!==null){var i=vn();wi(n,t,e,i)}Og(t,e)}};NS=function(){return at};FS=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};x0=function(t,e,n){switch(e){case"input":if(u0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vf(i);if(!r)throw Error(ee(90));hS(i),u0(i,r)}}}break;case"textarea":pS(t,n);break;case"select":e=n.value,e!=null&&Ko(t,!!n.multiple,e,!1)}};SS=Dg;MS=Xs;var VC={usingClientEntryPoint:!1,Events:[tc,Ho,Vf,vS,_S,Dg]},Sl={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zC={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=TS(t),t===null?null:t.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||kC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ml.isDisabled&&Ml.supportsFiber))try{Uf=Ml.inject(zC),ki=Ml}catch{}var Ml;Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VC;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bg(e))throw Error(ee(200));return OC(t,e,null,n)};Wn.createRoot=function(t,e){if(!Bg(t))throw Error(ee(299));var n=!1,i="",r=i1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ug(t,1,!1,null,null,n,!1,i,r),t[ur]=e.current,Wl(t.nodeType===8?t.parentNode:t),new kg(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=TS(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return Xs(t)};Wn.hydrate=function(t,e,n){if(!$f(e))throw Error(ee(200));return Kf(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=i1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n1(e,null,t,1,n??null,r,!1,s,o),t[ur]=e.current,Wl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jf(e)};Wn.render=function(t,e,n){if(!$f(e))throw Error(ee(200));return Kf(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!$f(t))throw Error(ee(40));return t._reactRootContainer?(Xs(function(){Kf(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};Wn.unstable_batchedUpdates=Dg;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$f(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Kf(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426"});var a1=ir((jF,o1)=>{"use strict";function s1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s1)}catch(t){console.error(t)}}s1(),o1.exports=r1()});var c1=ir(Vg=>{"use strict";var l1=a1();Vg.createRoot=l1.createRoot,Vg.hydrateRoot=l1.hydrateRoot;var $F});var f1=ir(Zf=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GC=mt(),HC=Symbol.for("react.element"),WC=Symbol.for("react.fragment"),XC=Object.prototype.hasOwnProperty,qC=GC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YC={key:!0,ref:!0,__self:!0,__source:!0};function u1(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)XC.call(e,i)&&!YC.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:HC,type:t,key:s,ref:o,props:r,_owner:qC.current}}Zf.Fragment=WC;Zf.jsx=u1;Zf.jsxs=u1});var js=ir((JF,h1)=>{"use strict";h1.exports=f1()});var Av=window.requestAnimationFrame.bind(window),_m=window.cancelAnimationFrame.bind(window),ll=new Map,cl=[],ul=!document.hidden;window.requestAnimationFrame=t=>{if(!ul)return cl.push(t),0;let e=Av(n=>{ll.delete(e),ul&&t(n)});return ll.set(e,t),e};window.cancelAnimationFrame=t=>{ll.delete(t),_m(t)};function Cv(){for(let[t,e]of ll)_m(t),cl.push(e);ll.clear()}function Sm(t){if(ul=t,!ul)Cv();else{let e=cl;cl=[];for(let n of e)window.requestAnimationFrame(n)}}function Rv(){ul=!1,Cv(),cl=[],window.requestAnimationFrame=Av,window.cancelAnimationFrame=_m}var aA=ot(c1(),1);var Ot=ot(mt(),1);var d1=ot(mt(),1),Jf=(0,d1.createContext)({});var p1=ot(mt(),1);function es(t){let e=(0,p1.useRef)(null);return e.current===null&&(e.current=t()),e.current}var Qf=ot(mt(),1);var m1=typeof window<"u";var eh=m1?Qf.useLayoutEffect:Qf.useEffect;var g1=ot(mt(),1),fa=(0,g1.createContext)(null);function $s(t,e){t.indexOf(e)===-1&&t.push(e)}function ts(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}var Xt=(t,e,n)=>n>e?e:n<t?t:n;var pr=()=>{},In=()=>{};var Sn={};var ic=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);var rc=t=>typeof t=="object"&&t!==null;var sc=t=>/^0[^.\s]+$/u.test(t);function oc(t){let e;return()=>(e===void 0&&(e=t()),e)}var Rt=t=>t;var Ei=(...t)=>t.reduce((e,n)=>i=>n(e(i)));var Vi=(t,e,n)=>{let i=e-t;return i?(n-t)/i:1};var mr=class{constructor(){this.subscriptions=[]}add(e){return $s(this.subscriptions,e),()=>ts(this.subscriptions,e)}notify(e,n,i){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){let o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};var Bt=t=>t*1e3,Qt=t=>t/1e3;var ac=(t,e)=>e?t*(1e3/e):0;var x1=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,jC=1e-7,$C=12;function KC(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=x1(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>jC&&++a<$C);return o}function ns(t,e,n,i){if(t===e&&n===i)return Rt;let r=s=>KC(s,0,1,t,n);return s=>s===0||s===1?s:x1(r(s),e,i)}var th=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2;var nh=t=>e=>1-t(1-e);var ih=ns(.33,1.53,.69,.99),ha=nh(ih),lc=th(ha);var cc=t=>t>=1?1:(t*=2)<1?.5*ha(t):.5*(2-Math.pow(2,-10*(t-1)));var uc=t=>1-Math.sin(Math.acos(t)),fc=nh(uc),hc=th(uc);var zg=ns(.42,0,1,1),Gg=ns(0,0,.58,1),dc=ns(.42,0,.58,1);var Hg=t=>Array.isArray(t)&&typeof t[0]!="number";var pc=t=>Array.isArray(t)&&typeof t[0]=="number";var y1={linear:Rt,easeIn:zg,easeInOut:dc,easeOut:Gg,circIn:uc,circInOut:hc,circOut:fc,backIn:ha,backInOut:lc,backOut:ih,anticipate:cc},ZC=t=>typeof t=="string",rh=t=>{if(pc(t)){In(t.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[e,n,i,r]=t;return ns(e,n,i,r)}else if(ZC(t))return In(y1[t]!==void 0,`Invalid easing type '${t}'`,"invalid-easing-type"),y1[t];return t};var mc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function v1(t){let e=new Set,n=new Set,i=!1,r=!1,s=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}let l={schedule:(c,u=!1,f=!1)=>{let p=f&&i?e:n;return u&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;let u=e;e=n,n=u,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}var JC=40;function sh(t,e){let n=!1,i=!0,r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=mc.reduce((x,S)=>(x[S]=v1(s),x),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:h,render:p,postRender:g}=o,v=()=>{let x=Sn.useManualTiming,S=x?r.timestamp:performance.now();n=!1,x||(r.delta=i?1e3/60:Math.max(Math.min(S-r.timestamp,JC),1)),r.timestamp=S,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),h.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(v))},y=()=>{n=!0,i=!0,r.isProcessing||t(v)};return{schedule:mc.reduce((x,S)=>{let E=o[S];return x[S]=(M,A=!1,R=!1)=>(n||y(),E.schedule(M,A,R)),x},{}),cancel:x=>{for(let S=0;S<mc.length;S++)o[mc[S]].cancel(x)},state:r,steps:o}}var{schedule:De,cancel:un,state:Ft,steps:gc}=sh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rt,!0);var oh;function QC(){oh=void 0}var Pt={now:()=>(oh===void 0&&Pt.set(Ft.isProcessing||Sn.useManualTiming?Ft.timestamp:performance.now()),oh),set:t=>{oh=t,queueMicrotask(QC)}};var _1=t=>e=>typeof e=="string"&&e.startsWith(t),ah=_1("--"),e2=_1("var(--"),da=t=>e2(t)?t2.test(t.split("/*")[0].trim()):!1,t2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Wg(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}var zi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},gr={...zi,transform:t=>Xt(0,1,t)},xc={...zi,default:1};var is=t=>Math.round(t*1e5)/1e5;var pa=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function S1(t){return t==null}var M1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;var ma=(t,e)=>n=>!!(typeof n=="string"&&M1.test(n)&&n.startsWith(t)||e&&!S1(n)&&Object.prototype.hasOwnProperty.call(n,e)),lh=(t,e,n)=>i=>{if(typeof i!="string")return i;let[r,s,o,a]=i.match(pa);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}};var n2=t=>Xt(0,255,t),Xg={...zi,transform:t=>Math.round(n2(t))},Gi={test:ma("rgb","red"),parse:lh("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Xg.transform(t)+", "+Xg.transform(e)+", "+Xg.transform(n)+", "+is(gr.transform(i))+")"};function i2(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}var yc={test:ma("#"),parse:i2,transform:Gi.transform};var vc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ci=vc("deg"),fn=vc("%"),ue=vc("px"),qg=vc("vh"),Yg=vc("vw"),ch={...fn,parse:t=>fn.parse(t)/100,transform:t=>fn.transform(t*100)};var rs={test:ma("hsl","hue"),parse:lh("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+fn.transform(is(e))+", "+fn.transform(is(n))+", "+is(gr.transform(i))+")"};var _t={test:t=>Gi.test(t)||yc.test(t)||rs.test(t),parse:t=>Gi.test(t)?Gi.parse(t):rs.test(t)?rs.parse(t):yc.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Gi.transform(t):rs.transform(t),getAnimatableNone:t=>{let e=_t.parse(t);return e.alpha=0,_t.transform(e)}};var b1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function r2(t){return isNaN(t)&&typeof t=="string"&&(t.match(pa)?.length||0)+(t.match(b1)?.length||0)>0}var T1="number",E1="color",s2="var",o2="var(",w1="${}",a2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ss(t){let e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[],s=0,a=e.replace(a2,l=>(_t.test(l)?(i.color.push(s),r.push(E1),n.push(_t.parse(l))):l.startsWith(o2)?(i.var.push(s),r.push(s2),n.push(l)):(i.number.push(s),r.push(T1),n.push(parseFloat(l))),++s,w1)).split(w1);return{values:n,split:a,indexes:i,types:r}}function l2(t){return ss(t).values}function A1({split:t,types:e}){let n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){let o=e[s];o===T1?r+=is(i[s]):o===E1?r+=_t.transform(i[s]):r+=i[s]}return r}}function c2(t){return A1(ss(t))}var u2=t=>typeof t=="number"?0:_t.test(t)?_t.getAnimatableNone(t):t,f2=(t,e)=>typeof t=="number"?e?.trim().endsWith("/")?t:0:u2(t);function h2(t){let e=ss(t);return A1(e)(e.values.map((i,r)=>f2(i,e.split[r])))}var qt={test:r2,parse:l2,createTransformer:c2,getAnimatableNone:h2};function jg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function C1({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{let a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=jg(l,a,t+1/3),s=jg(l,a,t),o=jg(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function ga(t,e){return n=>n>0?e:t}var ze=(t,e,n)=>t+(e-t)*n;var $g=(t,e,n)=>{let i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},d2=[yc,Gi,rs],p2=t=>d2.find(e=>e.test(t));function R1(t){let e=p2(t);if(pr(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!e)return!1;let n=e.parse(t);return e===rs&&(n=C1(n)),n}var Kg=(t,e)=>{let n=R1(t),i=R1(e);if(!n||!i)return ga(t,e);let r={...n};return s=>(r.red=$g(n.red,i.red,s),r.green=$g(n.green,i.green,s),r.blue=$g(n.blue,i.blue,s),r.alpha=ze(n.alpha,i.alpha,s),Gi.transform(r))};var uh=new Set(["none","hidden"]);function P1(t,e){return uh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function m2(t,e){return n=>ze(t,e,n)}function fh(t){return typeof t=="number"?m2:typeof t=="string"?da(t)?ga:_t.test(t)?Kg:y2:Array.isArray(t)?I1:typeof t=="object"?_t.test(t)?Kg:g2:ga}function I1(t,e){let n=[...t],i=n.length,r=t.map((s,o)=>fh(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function g2(t,e){let n={...t,...e},i={};for(let r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=fh(t[r])(t[r],e[r]));return r=>{for(let s in i)n[s]=i[s](r);return n}}function x2(t,e){let n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){let s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}var y2=(t,e)=>{let n=qt.createTransformer(e),i=ss(t),r=ss(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?uh.has(t)&&!r.values.length||uh.has(e)&&!i.values.length?P1(t,e):Ei(I1(x2(i,r),r.values),n):(pr(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),ga(t,e))};function hh(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ze(t,e,n):fh(t)(t,e)}var D1=t=>{let e=({timestamp:n})=>t(n);return{start:(n=!0)=>De.update(e,n),stop:()=>un(e),now:()=>Ft.isProcessing?Ft.timestamp:Pt.now()}};var dh=(t,e,n=10)=>{let i="",r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`};function xa(t){let e=0,n=50,i=t.next(e);for(;!i.done&&e<2e4;)e+=n,i=t.next(e);return e>=2e4?1/0:e}function L1(t,e=100,n){let i=n({...t,keyframes:[0,e]}),r=Math.min(xa(i),2e4);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Qt(r)}}var It={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Qg(t,e){return t*Math.sqrt(1-e*e)}var v2=12;function _2(t,e,n){let i=n;for(let r=1;r<v2;r++)i=i-t(i)/e(i);return i}var Jg=.001;function S2({duration:t=It.duration,bounce:e=It.bounce,velocity:n=It.velocity,mass:i=It.mass}){let r,s;pr(t<=Bt(It.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let o=1-e;o=Xt(It.minDamping,It.maxDamping,o),t=Xt(It.minDuration,It.maxDuration,Qt(t)),o<1?(r=c=>{let u=c*o,f=u*t,h=u-n,p=Qg(c,o),g=Math.exp(-f);return Jg-h/p*g},s=c=>{let f=c*o*t,h=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),v=Qg(Math.pow(c,2),o);return(-r(c)+Jg>0?-1:1)*((h-p)*g)/v}):(r=c=>{let u=Math.exp(-c*t),f=(c-n)*t+1;return-Jg+u*f},s=c=>{let u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});let a=5/t,l=_2(r,s,a);if(t=Bt(t),isNaN(l))return{stiffness:It.stiffness,damping:It.damping,duration:t};{let c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}var M2=["duration","bounce"],b2=["stiffness","damping","mass"];function N1(t,e){return e.some(n=>t[n]!==void 0)}function w2(t){let e={velocity:It.velocity,stiffness:It.stiffness,damping:It.damping,mass:It.mass,isResolvedFromDuration:!1,...t};if(!N1(t,b2)&&N1(t,M2))if(e.velocity=0,t.visualDuration){let n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Xt(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:It.mass,stiffness:r,damping:s}}else{let n=S2({...t,velocity:0});e={...e,...n,mass:It.mass},e.isResolvedFromDuration=!0}return e}function ya(t=It.visualDuration,e=It.bounce){let n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t,{restSpeed:i,restDelta:r}=n,s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:p}=w2({...n,velocity:-Qt(n.velocity||0)}),g=h||0,v=c/(2*Math.sqrt(l*u)),y=o-s,d=Qt(Math.sqrt(l/u)),m=Math.abs(y)<5;i||(i=m?It.restSpeed.granular:It.restSpeed.default),r||(r=m?It.restDelta.granular:It.restDelta.default);let x,S,E,M,A,R;if(v<1)E=Qg(d,v),M=(g+v*d*y)/E,x=_=>{let P=Math.exp(-v*d*_);return o-P*(M*Math.sin(E*_)+y*Math.cos(E*_))},A=v*d*M+y*E,R=v*d*y-M*E,S=_=>Math.exp(-v*d*_)*(A*Math.sin(E*_)+R*Math.cos(E*_));else if(v===1){x=P=>o-Math.exp(-d*P)*(y+(g+d*y)*P);let _=g+d*y;S=P=>Math.exp(-d*P)*(d*_*P-g)}else{let _=d*Math.sqrt(v*v-1);x=H=>{let X=Math.exp(-v*d*H),k=Math.min(_*H,300);return o-X*((g+v*d*y)*Math.sinh(k)+_*y*Math.cosh(k))/_};let P=(g+v*d*y)/_,L=v*d*P-y*_,B=v*d*y-P*_;S=H=>{let X=Math.exp(-v*d*H),k=Math.min(_*H,300);return X*(L*Math.sinh(k)+B*Math.cosh(k))}}let w={calculatedDuration:p&&f||null,velocity:_=>Bt(S(_)),next:_=>{if(!p&&v<1){let L=Math.exp(-v*d*_),B=Math.sin(E*_),H=Math.cos(E*_),X=o-L*(M*B+y*H),k=Bt(L*(A*B+R*H));return a.done=Math.abs(k)<=i&&Math.abs(o-X)<=r,a.value=a.done?o:X,a}let P=x(_);if(p)a.done=_>=f;else{let L=Bt(S(_));a.done=Math.abs(L)<=i&&Math.abs(o-P)<=r}return a.value=a.done?o:P,a},toString:()=>{let _=Math.min(xa(w),2e4),P=dh(L=>w.next(_*L).value,_,30);return _+"ms "+P},toTransition:()=>{}};return w}ya.applyToOptions=t=>{let e=L1(t,100,ya);return t.ease=e.ease,t.duration=Bt(e.duration),t.type="keyframes",t};var T2=5;function ph(t,e,n){let i=Math.max(e-T2,0);return ac(n-t(i),e-i)}function _c({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){let f=t[0],h={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,g=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l,v=n*e,y=f+v,d=o===void 0?y:o(y);d!==y&&(v=d-f);let m=R=>-v*Math.exp(-R/i),x=R=>d+m(R),S=R=>{let w=m(R),_=x(R);h.done=Math.abs(w)<=c,h.value=h.done?d:_},E,M,A=R=>{p(h.value)&&(E=R,M=ya({keyframes:[h.value,g(h.value)],velocity:ph(x,R,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:R=>{let w=!1;return!M&&E===void 0&&(w=!0,S(R),A(R)),E!==void 0&&R>=E?M.next(R-E):(!w&&S(R),h)}}}function E2(t,e,n){let i=[],r=n||Sn.mix||hh,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){let l=Array.isArray(e)?e[o]||Rt:e;a=Ei(l,a)}i.push(a)}return i}function mh(t,e,{clamp:n=!0,ease:i,mixer:r}={}){let s=t.length;if(In(s===e.length,"Both input and output ranges must be the same length","range-length"),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];let o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());let a=E2(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);let h=Vi(t[f],t[f+1],u);return a[f](h)};return n?u=>c(Xt(t[0],t[s-1],u)):c}function F1(t,e){let n=t[t.length-1];for(let i=1;i<=e;i++){let r=Vi(0,e,i);t.push(ze(n,1,r))}}function U1(t){let e=[0];return F1(e,t.length-1),e}function O1(t,e){return t.map(n=>n*e)}function A2(t,e){return t.map(()=>e||dc).splice(0,t.length-1)}function Ks({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){let r=Hg(i)?i.map(rh):rh(i),s={done:!1,value:e[0]},o=O1(n&&n.length===e.length?n:U1(e),t),a=mh(o,e,{ease:Array.isArray(r)?r:A2(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}var C2=t=>t!==null;function os(t,{repeat:e,repeatType:n="loop"},i,r=1){let s=t.filter(C2),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}var R2={decay:_c,inertia:_c,tween:Ks,keyframes:Ks,spring:ya};function gh(t){typeof t.type=="string"&&(t.type=R2[t.type])}var as=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}};var P2=t=>t/100,Ai=class extends as{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:n}=this.options;n&&n.updatedAt!==Pt.now()&&this.tick(Pt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;gh(e);let{type:n=Ks,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e,{keyframes:a}=e,l=n||Ks;l!==Ks&&typeof a[0]!="number"&&(this.mixKeyframes=Ei(P2,hh(a[0],a[1])),a=[0,100]);let c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=xa(c));let{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){let n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){let{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);let{delay:c=0,keyframes:u,repeat:f,repeatType:h,repeatDelay:p,type:g,onUpdate:v,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);let d=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,S=i;if(f){let R=Math.min(this.currentTime,r)/a,w=Math.floor(R),_=R%1;!_&&R>=1&&(_=1),_===1&&w--,w=Math.min(w,f+1),!!(w%2)&&(h==="reverse"?(_=1-_,p&&(_-=p/a)):h==="mirror"&&(S=o)),x=Xt(0,1,_)*a}let E;m?(this.delayState.value=u[0],E=this.delayState):E=S.next(x),s&&!m&&(E.value=s(E.value));let{done:M}=E;!m&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return A&&g!==_c&&(E.value=os(u,this.options,y,this.speed)),v&&v(E.value),A&&this.finish(),E}then(e,n){return this.finished.then(e,n)}get duration(){return Qt(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(this.currentTime)}set time(e){e=Bt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let n=this.generator.next(e).value;return ph(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){let n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(Pt.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Qt(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=D1,startTime:n}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),this.options.onPlay?.();let i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Pt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}};function k1(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}var Zs=t=>t*180/Math.PI,ex=t=>{let e=Zs(Math.atan2(t[1],t[0]));return tx(e)},I2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:ex,rotateZ:ex,skewX:t=>Zs(Math.atan(t[1])),skewY:t=>Zs(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},tx=t=>(t=t%360,t<0&&(t+=360),t),B1=ex,V1=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),z1=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),D2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:V1,scaleY:z1,scale:t=>(V1(t)+z1(t))/2,rotateX:t=>tx(Zs(Math.atan2(t[6],t[5]))),rotateY:t=>tx(Zs(Math.atan2(-t[2],t[0]))),rotateZ:B1,rotate:B1,skewX:t=>Zs(Math.atan(t[4])),skewY:t=>Zs(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function xh(t){return t.includes("scale")?1:0}function yh(t,e){if(!t||t==="none")return xh(e);let n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),i,r;if(n)i=D2,r=n;else{let a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=I2,r=a}if(!r)return xh(e);let s=i[e],o=r[1].split(",").map(L2);return typeof s=="function"?s(o):o[s]}var G1=(t,e)=>{let{transform:n="none"}=getComputedStyle(t);return yh(n,e)};function L2(t){return parseFloat(t.trim())}var Hi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ui=new Set([...Hi,"pathRotation"]);var nx=t=>t===zi||t===ue,N2=new Set(["x","y","z"]),F2=Hi.filter(t=>!N2.has(t));function H1(t){let e=[];return F2.forEach(n=>{let i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}var xr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{let r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{let r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>yh(e,"x"),y:(t,{transform:e})=>yh(e,"y")};xr.translateX=xr.x;xr.translateY=xr.y;var Js=new Set,ix=!1,rx=!1,sx=!1;function W1(){if(rx){let t=Array.from(Js).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{let r=H1(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();let r=n.get(i);r&&r.forEach(([s,o])=>{i.getValue(s)?.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}rx=!1,ix=!1,Js.forEach(t=>t.complete(sx)),Js.clear()}function X1(){Js.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(rx=!0)})}function q1(){sx=!0,X1(),W1(),sx=!1}var ls=class{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Js.add(this),ix||(ix=!0,De.read(X1),De.resolveKeyframes(W1))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){let s=r?.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){let a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}k1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Js.delete(this)}cancel(){this.state==="scheduled"&&(Js.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}};var Y1=t=>t.startsWith("--");function vh(t,e,n){Y1(e)?t.style.setProperty(e,n):t.style[e]=n}var j1={};function _h(t,e){let n=oc(t);return()=>j1[e]??n()}var $1=_h(()=>window.ScrollTimeline!==void 0,"scrollTimeline");var Sh=_h(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");var Qs=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;var ox={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qs([0,.65,.55,1]),circOut:Qs([.55,0,1,.45]),backIn:Qs([.31,.01,.66,-.59]),backOut:Qs([.33,1.53,.69,.99])};function ax(t,e){if(t)return typeof t=="function"?Sh()?dh(t,e):"ease-out":pc(t)?Qs(t):Array.isArray(t)?t.map(n=>ax(n,e)||ox.easeOut):ox[t]}function K1(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){let u={[e]:n};l&&(u.offset=l);let f=ax(a,r);Array.isArray(f)&&(u.easing=f);let h={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(u,h)}function Mh(t){return typeof t=="function"&&"applyToOptions"in t}function Z1({type:t,...e}){return Mh(t)&&Sh()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}var va=class extends as{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,In(typeof e.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let c=Z1(e);this.animation=K1(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){let u=os(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),vh(n,i,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Qt(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Qt(e)}get time(){return Qt(Number(this.animation.currentTime)||0)}set time(e){let n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Bt(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&$1()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Rt):r(this)}};var J1={anticipate:cc,backInOut:lc,circInOut:hc};function U2(t){return t in J1}function Q1(t){typeof t.ease=="string"&&U2(t.ease)&&(t.ease=J1[t.ease])}var lx=10,bh=class extends va{constructor(e){Q1(e),gh(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}let a=new Ai({...o,autoplay:!1}),l=Math.max(lx,Pt.now()-this.startTime),c=Xt(0,lx,l-lx),u=a.sample(l).value,{name:f}=this.options;s&&f&&vh(s,f,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}};var cx=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(qt.test(t)||t==="0")&&!t.startsWith("url("));function O2(t){let e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function eb(t,e,n,i){let r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;let s=t[t.length-1],o=cx(r,e),a=cx(s,e);return pr(o===a,`You are trying to animate ${e} from "${r}" to "${s}". "${o?s:r}" is not an animatable value.`,"value-not-animatable"),!o||!a?!1:O2(t)||(n==="spring"||Mh(n))&&i}function Sc(t){t.duration=0,t.type="keyframes"}var wh=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);var k2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function tb(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&k2.test(t[e]))return!0;return!1}var B2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),V2=oc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nb(t){let{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t,l=e?.owner?.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:u}=e.owner.getProps();return V2()&&n&&(wh.has(n)||B2.has(n)&&tb(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}var z2=40,Th=class extends as{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...f}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Pt.now();let h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...f},p=u?.KeyframeResolver||ls;this.keyframeResolver=new p(a,(g,v,y)=>this.onKeyframesResolved(g,v,h,!y),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;let{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=Pt.now();let f=!0;eb(e,s,o,a)||(f=!1,(Sn.instantAnimations||!l)&&u?.(os(e,i,n)),e[0]=e[e.length-1],Sc(i),i.repeat=0);let p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>z2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},g=f&&!c&&nb(p),v=p.motionValue?.owner?.current,y;if(g)try{y=new bh({...p,element:v})}catch{y=new Ai(p)}else y=new Ai(p);y.finished.then(()=>{this.notifyFinished()}).catch(Rt),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),q1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Eh(t,e,n,i=0,r=1){let s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}var ib=30,G2=t=>!isNaN(parseFloat(t)),eo={current:void 0},Ah=class{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{let r=Pt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Pt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=G2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new mr);let i=this.events[e].add(n);return e==="change"?()=>{i(),De.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return eo.current&&eo.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Pt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ib)return 0;let n=Math.min(this.updatedAt-this.prevUpdatedAt,ib);return ac(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Dn(t,e){return new Ah(t,e)}function Ch(t,e){if(t?.inherit&&e){let{inherit:n,...i}=t;return{...e,...i}}return t}function _a(t,e){let n=t?.[e]??t?.default??t;return n!==t?Ch(n,t):n}var H2={type:"spring",stiffness:500,damping:25,restSpeed:10},W2=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),X2={type:"keyframes",duration:.8},q2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rb=(t,{keyframes:e})=>e.length>2?X2:ui.has(t)?t.startsWith("scale")?W2(e[1]):H2:q2;var Y2=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function sb(t){for(let e in t)if(!Y2.has(e))return!0;return!1}var to=(t,e,n,i={},r,s)=>o=>{let a=_a(i,t)||{},l=a.delay||i.delay||0,{elapsed:c=0}=i;c=c-Bt(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};sb(a)||Object.assign(u,rb(t,u)),u.duration&&(u.duration=Bt(u.duration)),u.repeatDelay&&(u.repeatDelay=Bt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Sc(u),u.delay===0&&(f=!0)),(Sn.instantAnimations||Sn.skipAnimations||r?.shouldSkipAnimations||a.skipAnimations)&&(f=!0,Sc(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){let h=os(u.keyframes,a);if(h!==void 0){De.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new Ai(u):new Th(u)};var j2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $2(t){let e=j2.exec(t);if(!e)return[,];let[,n,i,r]=e;return[`--${n??i}`,r]}var K2=4;function ux(t,e,n=1){In(n<=K2,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[i,r]=$2(t);if(!i)return;let s=window.getComputedStyle(e).getPropertyValue(i);if(s){let o=s.trim();return ic(o)?parseFloat(o):o}return da(r)?ux(r,e,n+1):r}function ob(t){let e=[{},{}];return t?.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function no(t,e,n,i){if(typeof e=="function"){let[r,s]=ob(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){let[r,s]=ob(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Xn(t,e,n){let i=t.getProps();return no(i,e,n!==void 0?n:i.custom,t)}var Rh=new Set(["width","height","top","left","right","bottom",...Hi]);var Mc=t=>Array.isArray(t);function Z2(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Dn(n))}function J2(t){return Mc(t)?t[t.length-1]||0:t}function ab(t,e){let n=Xn(t,e),{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(let o in s){let a=J2(s[o]);Z2(t,o,a)}}var nt=t=>!!(t&&t.getVelocity);function lb(t){return!!(nt(t)&&t.add)}function Sa(t,e){let n=t.getValue("willChange");if(lb(n))return n.add(e);if(!n&&Sn.WillChange){let i=new Sn.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Ma(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var cb="framerAppearId",bc="data-"+Ma(cb);function Ph(t){return t.props[bc]}function Q2({protectedKeys:t,needsAnimating:e},n){let i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Ih(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e,l=t.getDefaultTransition();s=s?Ch(s,l):l;let c=s?.reduceMotion,u=s?.skipAnimations;i&&(s=i);let f=[],h=r&&t.animationState&&t.animationState.getState()[r],p=s?.path;p&&p.animateVisualElement(t,a,s,n,f);for(let g in a){let v=t.getValue(g,t.latestValues[g]??null),y=a[g];if(y===void 0||h&&Q2(h,g))continue;let d={delay:n,..._a(s||{},g)};u&&(d.skipAnimations=!0);let m=v.get();if(m!==void 0&&!v.isAnimating()&&!Array.isArray(y)&&y===m&&!d.velocity){De.update(()=>v.set(y));continue}let x=!1;if(window.MotionHandoffAnimation){let M=Ph(t);if(M){let A=window.MotionHandoffAnimation(M,g,De);A!==null&&(d.startTime=A,x=!0)}}Sa(t,g);let S=c??t.shouldReduceMotion;v.start(to(g,v,y,S&&Rh.has(g)?{type:!1}:d,t,x));let E=v.animation;E&&f.push(E)}if(o){let g=()=>De.update(()=>{o&&ab(t,o)});f.length?Promise.all(f).then(g):g()}return f}function Dh(t,e,n={}){let i=Xn(t,e,n.type==="exit"?t.presenceContext?.custom:void 0),{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);let s=i?()=>Promise.all(Ih(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{let{delayChildren:c=0,staggerChildren:u,staggerDirection:f}=r;return eR(t,e,l,c,u,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){let[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function eR(t,e,n=0,i=0,r=0,s=1,o){let a=[];for(let l of t.variantChildren)l.notify("AnimationStart",e),a.push(Dh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+Eh(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function ub(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){let r=e.map(s=>Dh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Dh(t,e,n);else{let r=typeof e=="function"?Xn(t,e,n.custom):e;i=Promise.all(Ih(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}var fb={test:t=>t==="auto",parse:t=>t};var Lh=t=>e=>e.test(t);var fx=[zi,ue,fn,ci,Yg,qg,fb],hx=t=>fx.find(Lh(t));function hb(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||sc(t):!0}var tR=new Set(["brightness","contrast","saturate","opacity"]);function nR(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;let[i]=n.match(pa)||[];if(!i)return t;let r=n.replace(i,""),s=tR.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}var iR=/\b([a-z-]*)\(.*?\)/gu,wc={...qt,getAnimatableNone:t=>{let e=t.match(iR);return e?e.map(nR).join(" "):t}};var Tc={...qt,getAnimatableNone:t=>{let e=qt.parse(t);return qt.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}};var dx={...zi,transform:Math.round};var db={rotate:ci,pathRotation:ci,rotateX:ci,rotateY:ci,rotateZ:ci,scale:xc,scaleX:xc,scaleY:xc,scaleZ:xc,skew:ci,skewX:ci,skewY:ci,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:gr,originX:ch,originY:ch,originZ:ue};var io={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,inset:ue,insetBlock:ue,insetBlockStart:ue,insetBlockEnd:ue,insetInline:ue,insetInlineStart:ue,insetInlineEnd:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,paddingBlock:ue,paddingBlockStart:ue,paddingBlockEnd:ue,paddingInline:ue,paddingInlineStart:ue,paddingInlineEnd:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,marginBlock:ue,marginBlockStart:ue,marginBlockEnd:ue,marginInline:ue,marginInlineStart:ue,marginInlineEnd:ue,fontSize:ue,backgroundPositionX:ue,backgroundPositionY:ue,...db,zIndex:dx,fillOpacity:gr,strokeOpacity:gr,numOctaves:dx};var rR={...io,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:wc,WebkitFilter:wc,mask:Tc,WebkitMask:Tc},Nh=t=>rR[t];var sR=new Set([wc,Tc]);function Fh(t,e){let n=Nh(t);return sR.has(n)||(n=qt),n.getAnimatableNone?n.getAnimatableNone(e):void 0}var oR=new Set(["auto","none","0"]);function pb(t,e,n){let i=0,r;for(;i<t.length&&!r;){let s=t[i];typeof s=="string"&&!oR.has(s)&&ss(s).values.length&&(r=t[i]),i++}if(r&&n)for(let s of e)t[s]=Fh(n,r)}var Uh=class extends ls{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let f=e[u];if(typeof f=="string"&&(f=f.trim(),da(f))){let h=ux(f,n.current);h!==void 0&&(e[u]=h),u===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!Rh.has(i)||e.length!==2)return;let[r,s]=e,o=hx(r),a=hx(s),l=Wg(r),c=Wg(s);if(l!==c&&xr[i]){this.needsMeasurement=!0;return}if(o!==a)if(nx(o)&&nx(a))for(let u=0;u<e.length;u++){let f=e[u];typeof f=="string"&&(e[u]=parseFloat(f))}else xr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||hb(e[r]))&&i.push(r);i.length&&pb(e,i,n)}measureInitialState(){let{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;let r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){let{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;let r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);let s=i.length-1,o=i[s];i[s]=xr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}};var Ec=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Oh(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;e&&(i=e.current);let r=n?.[t]??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}var Ac=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function mb(t){return rc(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}var{schedule:ro,cancel:aR}=sh(queueMicrotask,!1);var fi={x:!1,y:!1};function kh(){return fi.x||fi.y}function px(t){return t==="x"||t==="y"?fi[t]?null:(fi[t]=!0,()=>{fi[t]=!1}):fi.x||fi.y?null:(fi.x=fi.y=!0,()=>{fi.x=fi.y=!1})}function Bh(t,e){let n=Oh(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function lR(t){return!(t.pointerType==="touch"||kh())}function mx(t,e,n={}){let[i,r,s]=Bh(t,n);return i.forEach(o=>{let a=!1,l=!1,c,u=()=>{o.removeEventListener("pointerleave",g)},f=y=>{c&&(c(y),c=void 0),u()},h=y=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,f(y))},p=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},g=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}f(y)}},v=y=>{if(!lR(y))return;l=!1;let d=e(o,y);typeof d=="function"&&(c=d,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",v,r),o.addEventListener("pointerdown",p,r)}),s}var gx=(t,e)=>e?t===e?!0:gx(t,e.parentElement):!1;var so=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;var cR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xx(t){return cR.has(t.tagName)||t.isContentEditable===!0}var uR=new Set(["INPUT","SELECT","TEXTAREA"]);function yx(t){return uR.has(t.tagName)||t.isContentEditable===!0}var ba=new WeakSet;function gb(t){return e=>{e.key==="Enter"&&t(e)}}function vx(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}var xb=(t,e)=>{let n=t.currentTarget;if(!n)return;let i=gb(()=>{if(ba.has(n))return;vx(n,"down");let r=gb(()=>{vx(n,"up")}),s=()=>vx(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function yb(t){return so(t)&&!kh()}var vb=new WeakSet;function _x(t,e,n={}){let[i,r,s]=Bh(t,n),o=a=>{let l=a.currentTarget;if(!yb(a)||vb.has(a))return;ba.add(l),n.stopPropagation&&vb.add(a);let c=e(l,a),u={...r,capture:!0},f=(g,v)=>{window.removeEventListener("pointerup",h,u),window.removeEventListener("pointercancel",p,u),ba.has(l)&&ba.delete(l),yb(g)&&typeof c=="function"&&c(g,{success:v})},h=g=>{f(g,l===window||l===document||n.useGlobalTarget||gx(l,g.target))},p=g=>{f(g,!1)};window.addEventListener("pointerup",h,u),window.addEventListener("pointercancel",p,u)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),mb(a)&&(a.addEventListener("focus",c=>xb(c,r)),!xx(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function wa(t){return rc(t)&&"ownerSVGElement"in t}var Vh=new WeakMap,zh,_b=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:wa(i)&&"getBBox"in i?i.getBBox()[e]:i[n],fR=_b("inline","width","offsetWidth"),hR=_b("block","height","offsetHeight");function dR({target:t,borderBoxSize:e}){Vh.get(t)?.forEach(n=>{n(t,{get width(){return fR(t,e)},get height(){return hR(t,e)}})})}function pR(t){t.forEach(dR)}function mR(){typeof ResizeObserver>"u"||(zh=new ResizeObserver(pR))}function Sb(t,e){zh||mR();let n=Oh(t);return n.forEach(i=>{let r=Vh.get(i);r||(r=new Set,Vh.set(i,r)),r.add(e),zh?.observe(i)}),()=>{n.forEach(i=>{let r=Vh.get(i);r?.delete(e),r?.size||zh?.unobserve(i)})}}var Gh=new Set,Ta;function gR(){Ta=()=>{let t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Gh.forEach(e=>e(t))},window.addEventListener("resize",Ta)}function Mb(t){return Gh.add(t),Ta||gR(),()=>{Gh.delete(t),!Gh.size&&typeof Ta=="function"&&(window.removeEventListener("resize",Ta),Ta=void 0)}}function Hh(t,e){return typeof t=="function"?Mb(t):Sb(t,e)}var oo={value:null,addProjectionMetrics:null};function bb(t){return wa(t)&&t.tagName==="svg"}function Sx(...t){let e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=mh(r,s,o);return e?a(i):a}function bx(t,e,n={}){let i=t.get(),r=null,s=i,o,a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,l=()=>{r&&(r.stop(),r=null),t.animation=void 0},c=()=>{let f=wb(t.get()),h=wb(s);if(f===h){l();return}let p=r?r.getGeneratorVelocity():t.getVelocity();l(),r=new Ai({keyframes:[f,h],velocity:p,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o})},u=()=>{c(),t.animation=r??void 0,t.events.animationStart?.notify(),r?.then(()=>{t.animation=void 0,t.events.animationComplete?.notify()})};if(t.attach((f,h)=>{s=f,o=p=>h(Mx(p,a)),De.postRender(u)},l),nt(e)){let f=n.skipInitialAnimation===!0,h=e.on("change",g=>{f?(f=!1,t.jump(Mx(g,a),!1)):t.set(Mx(g,a))}),p=t.on("destroy",h);return()=>{h(),p()}}return l}function Mx(t,e){return e?t+e:t}function wb(t){return typeof t=="number"?t:parseFloat(t)}var xR=[...fx,_t,qt],Tb=t=>xR.find(Lh(t));var wx=()=>({translate:0,scale:1,origin:0,originPoint:0}),cs=()=>({x:wx(),y:wx()}),Tx=()=>({min:0,max:0}),St=()=>({x:Tx(),y:Tx()});var Eb=new WeakMap;function yr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Wi(t){return typeof t=="string"||Array.isArray(t)}var Wh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cc=["initial",...Wh];function us(t){return yr(t.animate)||Cc.some(e=>Wi(t[e]))}function Rc(t){return!!(us(t)||t.variants)}function Ab(t,e,n){for(let i in e){let r=e[i],s=n[i];if(nt(r))t.addValue(i,r);else if(nt(s))t.addValue(i,Dn(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){let o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{let o=t.getStaticValue(i);t.addValue(i,Dn(o!==void 0?o:r,{owner:t}))}}for(let i in n)e[i]===void 0&&t.removeValue(i);return e}var Pc={current:null},Xh={current:!1};var yR=typeof window<"u";function Cb(){if(Xh.current=!0,!!yR)if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Pc.current=t.matches;t.addEventListener("change",e),e()}else Pc.current=!1}var Rb=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],qh={};function Dc(t){qh=t}function Ex(){return qh}var Ic=class{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ls,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let p=Pt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,De.render(this.render,!1,!0))};let{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=us(n),this.isVariantNode=Rc(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(let p in h){let g=h[p];c[p]!==void 0&&nt(g)&&g.set(c[p])}}mount(e){if(this.hasBeenMounted)for(let n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,Eb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Xh.current||Cb(),this.shouldReduceMotion=Pc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),un(this.notifyUpdate),un(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&wh.has(e)&&this.current instanceof HTMLElement){let{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,f=new va({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Bt(u)}),h=o(f);this.valueSubscriptions.set(e,()=>{h(),f.cancel()});return}let i=ui.has(e);i&&this.onBindTransform&&this.onBindTransform();let r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&De.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in qh){let n=qh[e];if(!n)continue;let{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){let s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):St()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Rb.length;i++){let r=Rb[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Ab(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){let i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);let n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Dn(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(ic(i)||sc(i))?i=parseFloat(i):!Tb(i)&&qt.test(n)&&(i=Fh(e,n)),this.setBaseTarget(e,nt(i)?i.get():i)),nt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){let{initial:n}=this.props,i;if(typeof n=="string"||typeof n=="object"){let s=no(this.props,n,this.presenceContext?.custom);s&&(i=s[e])}if(n&&i!==void 0)return i;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!nt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new mr),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){ro.render(this.render)}};var Ea=class extends Ic{constructor(){super(...arguments),this.KeyframeResolver=Uh}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){let i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;nt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}};var Yt=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Lc({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Ax({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Cx(t,e){if(!e)return t;let n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Rx(t){return t===void 0||t===1}function Yh({scale:t,scaleX:e,scaleY:n}){return!Rx(t)||!Rx(e)||!Rx(n)}function vr(t){return Yh(t)||Px(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Px(t){return Pb(t.x)||Pb(t.y)}function Pb(t){return t&&t!=="0%"}function Nc(t,e,n){let i=t-n,r=e*i;return n+r}function Ib(t,e,n,i,r){return r!==void 0&&(t=Nc(t,r,i)),Nc(t,n,i)+e}function Ix(t,e=0,n=1,i,r){t.min=Ib(t.min,e,n,i,r),t.max=Ib(t.max,e,n,i,r)}function Dx(t,{x:e,y:n}){Ix(t.x,e.translate,e.scale,e.originPoint),Ix(t.y,n.translate,n.scale,n.originPoint)}var Db=.999999999999,Lb=1.0000000000001;function Ub(t,e,n,i=!1){let r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;let{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(hi(t.x,-s.scroll.offset.x),hi(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Dx(t,o)),i&&vr(s.latestValues)&&Fc(t,s.latestValues,s.layout?.layoutBox))}e.x<Lb&&e.x>Db&&(e.x=1),e.y<Lb&&e.y>Db&&(e.y=1)}function hi(t,e){t.min+=e,t.max+=e}function Nb(t,e,n,i,r=.5){let s=ze(t.min,t.max,r);Ix(t,e,n,s,i)}function Fb(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Fc(t,e,n){let i=n??t;Nb(t.x,Fb(e.x,i.x),e.scaleX,e.scale,e.originX),Nb(t.y,Fb(e.y,i.y),e.scaleY,e.scale,e.originY)}function jh(t,e){return Lc(Cx(t.getBoundingClientRect(),e))}function Lx(t,e,n){let i=jh(t,n),{scroll:r}=e;return r&&(hi(i.x,r.offset.x),hi(i.y,r.offset.y)),i}var vR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_R=Hi.length;function Ob(t,e,n){let i="",r=!0;for(let o=0;o<_R;o++){let a=Hi[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{let u=parseFloat(l);c=a.startsWith("scale")?u===1:u===0}if(!c||n){let u=Ac(l,io[a]);if(!c){r=!1;let f=vR[a]||a;i+=`${f}(${u}) `}n&&(e[a]=u)}}let s=t.pathRotation;return s&&(r=!1,i+=`rotate(${Ac(s,io.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function ao(t,e,n){let{style:i,vars:r,transformOrigin:s}=t,o=!1,a=!1;for(let l in e){let c=e[l];if(ui.has(l)){o=!0;continue}else if(ah(l)){r[l]=c;continue}else{let u=Ac(c,io[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Ob(e,t.transform,n):i.transform&&(i.transform="none")),a){let{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function $h(t,{style:e,vars:n},i,r){let s=t.style,o;for(o in e)s[o]=e[o];r?.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function kb(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}var Aa={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ue.test(t))t=parseFloat(t);else return t;let n=kb(t,e.target.x),i=kb(t,e.target.y);return`${n}% ${i}%`}};var Bb={correct:(t,{treeScale:e,projectionDelta:n})=>{let i=t,r=qt.parse(t);if(r.length>5)return i;let s=qt.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;let c=ze(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};var Uc={borderRadius:{...Aa,applyTo:[...Ec]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:Bb};function Oc(t,{layout:e,layoutId:n}){return ui.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Uc[t]||t==="opacity")}function lo(t,e,n){let i=t.style,r=e?.style,s={};if(!i)return s;for(let o in i)(nt(i[o])||r&&nt(r[o])||Oc(o,t)||n?.getValue(o)?.liveStyle!==void 0)&&(s[o]=i[o]);return s}function SR(t){return window.getComputedStyle(t)}var kc=class extends Ea{constructor(){super(...arguments),this.type="html",this.renderInstance=$h}mount(e){In(!!e.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(e)}readValueFromInstance(e,n){if(ui.has(n))return this.projection?.isProjecting?xh(n):G1(e,n);{let i=SR(e),r=(ah(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return jh(e,n)}build(e,n,i){ao(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return lo(e,n,i)}};var MR={offset:"stroke-dashoffset",array:"stroke-dasharray"},bR={offset:"strokeDashoffset",array:"strokeDasharray"};function Vb(t,e,n=1,i=0,r=!0){t.pathLength=1;let s=r?MR:bR;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}var wR=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Bc(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(ao(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:f,style:h}=t;f.transform&&(h.transform=f.transform,delete f.transform),(h.transform||f.transformOrigin)&&(h.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),h.transform&&(h.transformBox=u?.transformBox??"fill-box",delete f.transformBox);for(let p of wR)f[p]!==void 0&&(h[p]=f[p],delete f[p]);e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&Vb(f,r,s,o,!1)}var Kh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);var Vc=t=>typeof t=="string"&&t.toLowerCase()==="svg";function zb(t,e,n,i){$h(t,e,void 0,i);for(let r in e.attrs)t.setAttribute(Kh.has(r)?r:Ma(r),e.attrs[r])}function zc(t,e,n){let i=lo(t,e,n);for(let r in t)if(nt(t[r])||nt(e[r])){let s=Hi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}var Gc=class extends Ea{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=St}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ui.has(n)){let i=Nh(n);return i&&i.default||0}return n=Kh.has(n)?n:Ma(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return zc(e,n,i)}build(e,n,i){Bc(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){zb(e,n,i,r)}mount(e){this.isSVGTag=Vc(e.tagName),super.mount(e)}};var TR=Cc.length;function Nx(t){if(!t)return;if(!t.isControllingVariants){let n=t.parent?Nx(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}let e={};for(let n=0;n<TR;n++){let i=Cc[n],r=t.props[i];(Wi(r)||r===!1)&&(e[i]=r)}return e}function Fx(t,e){if(!Array.isArray(e))return!1;let n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}var ER=[...Wh].reverse(),AR=Wh.length;function CR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ub(t,n,i)))}function Ux(t){let e=CR(t),n=Gb(),i=!0,r=!1,s=c=>(u,f)=>{let h=Xn(t,f,c==="exit"?t.presenceContext?.custom:void 0);if(h){let{transition:p,transitionEnd:g,...v}=h;u={...u,...v,...g}}return u};function o(c){e=c(t)}function a(c){let{props:u}=t,f=Nx(t.parent)||{},h=[],p=new Set,g={},v=1/0;for(let d=0;d<AR;d++){let m=ER[d],x=n[m],S=u[m]!==void 0?u[m]:f[m],E=Wi(S),M=m===c?x.isActive:null;M===!1&&(v=d);let A=S===f[m]&&S!==u[m]&&E;if(A&&(i||r)&&t.manuallyAnimateOnMount&&(A=!1),x.protectedKeys={...g},!x.isActive&&M===null||!S&&!x.prevProp||yr(S)||typeof S=="boolean")continue;if(m==="exit"&&x.isActive&&M!==!0){x.prevResolvedValues&&(g={...g,...x.prevResolvedValues});continue}let R=Hb(x.prevProp,S),w=R||m===c&&x.isActive&&!A&&E||d>v&&E,_=!1,P=Array.isArray(S)?S:[S],L=P.reduce(s(m),{});M===!1&&(L={});let{prevResolvedValues:B={}}=x,H={...B,...L},X=O=>{w=!0,p.has(O)&&(_=!0,p.delete(O)),x.needsAnimating[O]=!0;let Z=t.getValue(O);Z&&(Z.liveStyle=!1)};for(let O in H){let Z=L[O],Q=B[O];if(g.hasOwnProperty(O))continue;let ge=!1;Mc(Z)&&Mc(Q)?ge=!Fx(Z,Q)||R:ge=Z!==Q,ge?Z!=null?X(O):p.add(O):Z!==void 0&&p.has(O)?X(O):x.protectedKeys[O]=!0}x.prevProp=S,x.prevResolvedValues=L,x.isActive&&(g={...g,...L}),(i||r)&&t.blockInitialAnimation&&(w=!1);let k=A&&R;w&&(!k||_)&&h.push(...P.map(O=>{let Z={type:m};if(typeof O=="string"&&(i||r)&&!k&&t.manuallyAnimateOnMount&&t.parent){let{parent:Q}=t,ge=Xn(Q,O);if(Q.enteringChildren&&ge){let{delayChildren:Ne}=ge.transition||{};Z.delay=Eh(Q.enteringChildren,t,Ne)}}return{animation:O,options:Z}}))}if(p.size){let d={};if(typeof u.initial!="boolean"){let m=Xn(t,Array.isArray(u.initial)?u.initial[0]:u.initial);m&&m.transition&&(d.transition=m.transition)}p.forEach(m=>{let x=t.getBaseTarget(m),S=t.getValue(m);S&&(S.liveStyle=!0),d[m]=x??null}),h.push({animation:d})}let y=!!h.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,r=!1,y?e(h):Promise.resolve()}function l(c,u){if(n[c].isActive===u)return Promise.resolve();t.variantChildren?.forEach(h=>h.animationState?.setActive(c,u)),n[c].isActive=u;let f=a(c);for(let h in n)n[h].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Gb(),r=!0}}}function Hb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Fx(e,t):!1}function co(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Gb(){return{animate:co(!0),whileInView:co(),whileHover:co(),whileTap:co(),whileDrag:co(),whileFocus:co(),exit:co()}}function Zh(t,e){t.min=e.min,t.max=e.max}function di(t,e){Zh(t.x,e.x),Zh(t.y,e.y)}function Ox(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}var Wb=1e-4,RR=1-Wb,PR=1+Wb,Xb=.01,IR=0-Xb,DR=0+Xb;function zt(t){return t.max-t.min}function zx(t,e,n){return Math.abs(t-e)<=n}function kx(t,e,n,i=.5){t.origin=i,t.originPoint=ze(e.min,e.max,t.origin),t.scale=zt(n)/zt(e),t.translate=ze(n.min,n.max,t.origin)-t.originPoint,(t.scale>=RR&&t.scale<=PR||isNaN(t.scale))&&(t.scale=1),(t.translate>=IR&&t.translate<=DR||isNaN(t.translate))&&(t.translate=0)}function uo(t,e,n,i){kx(t.x,e.x,n.x,i?i.originX:void 0),kx(t.y,e.y,n.y,i?i.originY:void 0)}function Bx(t,e,n,i=0){let r=i?ze(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+zt(e)}function Gx(t,e,n,i){Bx(t.x,e.x,n.x,i?.x),Bx(t.y,e.y,n.y,i?.y)}function Vx(t,e,n,i=0){let r=i?ze(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+zt(e)}function Ca(t,e,n,i){Vx(t.x,e.x,n.x,i?.x),Vx(t.y,e.y,n.y,i?.y)}function qb(t,e,n,i,r){return t-=e,t=Nc(t,1/n,i),r!==void 0&&(t=Nc(t,1/r,i)),t}function LR(t,e=0,n=1,i=.5,r,s=t,o=t){if(fn.test(e)&&(e=parseFloat(e),e=ze(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ze(s.min,s.max,i);t===s&&(a-=e),t.min=qb(t.min,e,n,a,r),t.max=qb(t.max,e,n,a,r)}function Yb(t,e,[n,i,r],s,o){LR(t,e[n],e[i],e[r],e.scale,s,o)}var NR=["x","scaleX","originX"],FR=["y","scaleY","originY"];function Hx(t,e,n,i){Yb(t.x,e,NR,n?n.x:void 0,i?i.x:void 0),Yb(t.y,e,FR,n?n.y:void 0,i?i.y:void 0)}function jb(t){return t.translate===0&&t.scale===1}function Wx(t){return jb(t.x)&&jb(t.y)}function $b(t,e){return t.min===e.min&&t.max===e.max}function Zb(t,e){return $b(t.x,e.x)&&$b(t.y,e.y)}function Kb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Xx(t,e){return Kb(t.x,e.x)&&Kb(t.y,e.y)}function qx(t){return zt(t.x)/zt(t.y)}function Yx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function qn(t){return[t("x"),t("y")]}function Jb(t,e,n){let i="",r=t.x.translate/e.x,s=t.y.translate/e.y,o=n?.z||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){let{transformPerspective:c,rotate:u,pathRotation:f,rotateX:h,rotateY:p,skewX:g,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotate(${f}deg) `),h&&(i+=`rotateX(${h}deg) `),p&&(i+=`rotateY(${p}deg) `),g&&(i+=`skewX(${g}deg) `),v&&(i+=`skewY(${v}deg) `)}let a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}var UR=Ec.length,Qb=t=>typeof t=="string"?parseFloat(t):t,ew=t=>typeof t=="number"||ue.test(t);function nw(t,e,n,i,r,s){r?(t.opacity=ze(0,n.opacity??1,OR(i)),t.opacityExit=ze(e.opacity??1,0,kR(i))):s&&(t.opacity=ze(e.opacity??1,n.opacity??1,i));for(let o=0;o<UR;o++){let a=Ec[o],l=tw(e,a),c=tw(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||ew(l)===ew(c)?(t[a]=Math.max(ze(Qb(l),Qb(c),i),0),(fn.test(c)||fn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ze(e.rotate||0,n.rotate||0,i))}function tw(t,e){return t[e]!==void 0?t[e]:t.borderRadius}var OR=iw(0,.5,fc),kR=iw(.5,.95,Rt);function iw(t,e,n){return i=>i<t?0:i>e?1:n(Vi(t,e,i))}function rw(t,e,n){let i=nt(t)?t:Dn(t);return i.start(to("",i,e,n)),i.animation}function Xi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}var sw=(t,e)=>t.depth-e.depth;var Jh=class{constructor(){this.children=[],this.isDirty=!1}add(e){$s(this.children,e),this.isDirty=!0}remove(e){ts(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sw),this.isDirty=!1,this.children.forEach(e)}};function ow(t,e){let n=Pt.now(),i=({timestamp:r})=>{let s=r-n;s>=e&&(un(i),t(s-e))};return De.setup(i,!0),()=>un(i)}function fo(t){return nt(t)?t.get():t}var Qh=class{constructor(){this.members=[]}add(e){$s(this.members,e);for(let n=this.members.length-1;n>=0;n--){let i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;let r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(ts(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(ts(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){for(let n=this.members.indexOf(e)-1;n>=0;n--){let i=this.members[n];if(i.isPresent!==!1&&i.instance?.isConnected!==!1)return this.promote(i),!0}return!1}promote(e,n){let i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=i.options,{layoutDependency:s}=e.options;(r===void 0||r!==s)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}};var ho={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var po={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},jx=["","X","Y","Z"],BR=1e3,VR=0;function $x(t,e,n,i){let{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function mw(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:e}=t.options;if(!e)return;let n=Ph(e);if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",De,!(r||s))}let{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&mw(i)}function ed({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e?.()){this.id=VR++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,oo.value&&(po.nodes=po.calculatedTargetDeltas=po.calculatedProjections=0),this.nodes.forEach(HR),this.nodes.forEach($R),this.nodes.forEach(KR),this.nodes.forEach(WR),oo.addProjectionMetrics&&oo.addProjectionMetrics(po)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jh)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new mr),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){let l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=wa(o)&&!bb(o),this.instance=o;let{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,f=0,h=()=>this.root.updateBlockedByResize=!1;De.read(()=>{f=window.innerWidth}),t(o,()=>{let p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=ow(h,250),ho.hasAnimatedSinceResize&&(ho.hasAnimatedSinceResize=!1,this.nodes.forEach(cw)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let g=this.options.transition||c.getDefaultTransition()||tP,{onLayoutAnimationStart:v,onLayoutAnimationComplete:y}=c.getProps(),d=!this.targetLayout||!Xx(this.targetLayout,p),m=!f&&h;if(this.options.layoutRoot||this.resumeFrom||m||f&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let x={..._a(g,"layout"),onPlay:v,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(u,m,x.path)}else f||cw(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),un(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ZR),this.animationId++)}getTransformTemplate(){let{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&mw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){let f=this.path[u];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}let{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;let c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(qR),this.nodes.forEach(aw);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(lw);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(YR),this.nodes.forEach(jR),this.nodes.forEach(zR),this.nodes.forEach(GR)):this.nodes.forEach(lw),this.clearAllSnapshots();let a=Pt.now();Ft.delta=Xt(0,1e3/60,a-Ft.timestamp),Ft.timestamp=a,Ft.isProcessing=!0,gc.update.process(Ft),gc.preRender.process(Ft),gc.render.process(Ft),Ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ro.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XR),this.sharedNodes.forEach(JR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!zt(this.snapshot.measuredBox.x)&&!zt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();let o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=St()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){let l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;let o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Wx(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||vr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){let a=this.measurePageBox(),l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),nP(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:o}=this.options;if(!o)return St();let a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(iP))){let{scroll:c}=this.root;c&&(hi(a.x,c.offset.x),hi(a.y,c.offset.y))}return a}removeElementScroll(o){let a=St();if(di(a,o),this.scroll?.wasRoot)return a;for(let l=0;l<this.path.length;l++){let c=this.path[l],{scroll:u,options:f}=c;c!==this.root&&u&&f.layoutScroll&&(u.wasRoot&&di(a,o),hi(a.x,u.offset.x),hi(a.y,u.offset.y))}return a}applyTransform(o,a=!1,l){let c=l||St();di(c,o);for(let u=0;u<this.path.length;u++){let f=this.path[u];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(hi(c.x,-f.scroll.offset.x),hi(c.y,-f.scroll.offset.y)),vr(f.latestValues)&&Fc(c,f.latestValues,f.layout?.layoutBox)}return vr(this.latestValues)&&Fc(c,this.latestValues,this.layout?.layoutBox),c}removeTransform(o){let a=St();di(a,o);for(let l=0;l<this.path.length;l++){let c=this.path[l];if(!vr(c.latestValues))continue;let u;c.instance&&(Yh(c.latestValues)&&c.updateSnapshot(),u=St(),di(u,c.measurePageBox())),Hx(a,c.latestValues,c.snapshot?.layoutBox,u)}return vr(this.latestValues)&&Hx(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){let a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);let l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=Ft.timestamp;let h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=St(),this.targetWithTransforms=St()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Gx(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):di(this.target,this.layout.layoutBox),Dx(this.target,this.targetDelta)):di(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0),oo.value&&po.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Yh(this.parent.latestValues)||Px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),Ca(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),di(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let o=this.getLead(),a=!!this.resumingFrom||this!==o,l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ft.timestamp&&(l=!1),l)return;let{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;di(this.layoutCorrected,this.layout.layoutBox);let f=this.treeScale.x,h=this.treeScale.y;Ub(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=St());let{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ox(this.prevProjectionDelta.x,this.projectionDelta.x),Ox(this.prevProjectionDelta.y,this.projectionDelta.y)),uo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!Yx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),oo.value&&po.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){let a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=cs(),this.projectionDelta=cs(),this.projectionDeltaWithTransform=cs()}setAnimationOrigin(o,a=!1,l){let c=this.snapshot,u=c?c.latestValues:{},f={...this.latestValues},h=cs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;let p=St(),g=c?c.source:void 0,v=this.layout?this.layout.source:void 0,y=g!==v,d=this.getStack(),m=!d||d.members.length<=1,x=!!(y&&!m&&this.options.crossfade===!0&&!this.path.some(eP));this.animationProgress=0;let S,E=l?.interpolateProjection(o);this.mixTargetDelta=M=>{let A=M/1e3,R=E?.(A);R?(h.x.translate=R.x,h.x.scale=ze(o.x.scale,1,A),h.x.origin=o.x.origin,h.x.originPoint=o.x.originPoint,h.y.translate=R.y,h.y.scale=ze(o.y.scale,1,A),h.y.origin=o.y.origin,h.y.originPoint=o.y.originPoint):(uw(h.x,o.x,A),uw(h.y,o.y,A)),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ca(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),QR(this.relativeTarget,this.relativeTargetOrigin,p,A),S&&Zb(this.relativeTarget,S)&&(this.isProjectionDirty=!1),S||(S=St()),di(S,this.relativeTarget)),y&&(this.animationValues=f,nw(f,u,this.latestValues,A,x,m)),R&&R.rotate!==void 0&&(this.animationValues||(this.animationValues=f),this.animationValues.pathRotation=R.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(un(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{ho.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Dn(0)),this.motionValue.jump(0,!1),this.currentAnimation=rw(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(BR),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let o=this.getLead(),{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&gw(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||St();let f=zt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;let h=zt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}di(a,l),Fc(a,u),uo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Qh),this.sharedNodes.get(o).add(a);let c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){let o=this.getStack();return o?o.lead===this:!0}getLead(){let{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){let{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){let c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){let o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){let{visualElement:o}=this.options;if(!o)return;let a=!1,{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;let c={};l.z&&$x("z",o,c,this.animationValues);for(let u=0;u<jx.length;u++)$x(`rotate${jx[u]}`,o,c,this.animationValues),$x(`skew${jx[u]}`,o,c,this.animationValues);o.render();for(let u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}let l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=fo(a?.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}let c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=fo(a?.pointerEvents)||""),this.hasProjected&&!vr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";let u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=Jb(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),o.transform=f;let{x:h,y:p}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(let g in Uc){if(u[g]===void 0)continue;let{correct:v,applyTo:y,isCSSVariable:d}=Uc[g],m=f==="none"?u[g]:v(u[g],c);if(y){let x=y.length;for(let S=0;S<x;S++)o[y[S]]=m}else d?this.options.visualElement.renderState.vars[g]=m:o[g]=m}this.options.layoutId&&(o.pointerEvents=c===this?fo(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(aw),this.root.sharedNodes.clear()}}}function zR(t){t.updateLayout()}function GR(t){let e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){let{layoutBox:n,measuredBox:i}=t.layout,{animationType:r}=t.options,s=e.source!==t.layout.source;if(r==="size")qn(u=>{let f=s?e.measuredBox[u]:e.layoutBox[u],h=zt(f);f.min=n[u].min,f.max=f.min+h});else if(r==="x"||r==="y"){let u=r==="x"?"y":"x";Zh(s?e.measuredBox[u]:e.layoutBox[u],n[u])}else gw(r,e.layoutBox,n)&&qn(u=>{let f=s?e.measuredBox[u]:e.layoutBox[u],h=zt(n[u]);f.max=f.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[u].max=t.relativeTarget[u].min+h)});let o=cs();uo(o,n,e.layoutBox);let a=cs();s?uo(a,t.applyTransform(i,!0),e.measuredBox):uo(a,n,e.layoutBox);let l=!Wx(o),c=!1;if(!t.resumeFrom){let u=t.getClosestProjectingParent();if(u&&!u.resumeFrom){let{snapshot:f,layout:h}=u;if(f&&h){let p=t.options.layoutAnchor||void 0,g=St();Ca(g,e.layoutBox,f.layoutBox,p);let v=St();Ca(v,n,h.layoutBox,p),Xx(g,v)||(c=!0),u.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=g,t.relativeParent=u)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(t.isLead()){let{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function HR(t){oo.value&&po.nodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function WR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function XR(t){t.clearSnapshot()}function aw(t){t.clearMeasurements()}function qR(t){t.isLayoutDirty=!0,t.updateLayout()}function lw(t){t.isLayoutDirty=!1}function YR(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function jR(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function cw(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $R(t){t.resolveTargetDelta()}function KR(t){t.calcProjection()}function ZR(t){t.resetSkewAndRotation()}function JR(t){t.removeLeadSnapshot()}function uw(t,e,n){t.translate=ze(e.translate,0,n),t.scale=ze(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function fw(t,e,n,i){t.min=ze(e.min,n.min,i),t.max=ze(e.max,n.max,i)}function QR(t,e,n,i){fw(t.x,e.x,n.x,i),fw(t.y,e.y,n.y,i)}function eP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}var tP={duration:.45,ease:[.4,0,.1,1]},hw=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),dw=hw("applewebkit/")&&!hw("chrome/")?Math.round:Rt;function pw(t){t.min=dw(t.min),t.max=dw(t.max)}function nP(t){pw(t.x),pw(t.y)}function gw(t,e,n){return t==="position"||t==="preserve-aspect"&&!zx(qx(e),qx(n),.2)}function iP(t){return t!==t.root&&t.scroll?.wasRoot}var xw=ed({attachResizeListener:(t,e)=>Xi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0});var td={current:void 0},Hc=ed({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!td.current){let t=new xw({});t.mount(window),t.setOptions({layoutScroll:!0}),td.current=t}return td.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"});var yw=ot(mt(),1),fs=(0,yw.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});var hs=ot(mt(),1);function vw(t=!0){let e=(0,hs.useContext)(fa);if(e===null)return[!0,null];let{isPresent:n,onExitComplete:i,register:r}=e,s=(0,hs.useId)();(0,hs.useEffect)(()=>{if(t)return r(s)},[t]);let o=(0,hs.useCallback)(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}var _w=ot(mt(),1),nd=(0,_w.createContext)({strict:!1});var Sw={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mw=!1;function rP(){if(Mw)return;let t={};for(let e in Sw)t[e]={isEnabled:n=>Sw[e].some(i=>!!n[i])};Dc(t),Mw=!0}function id(){return rP(),Ex()}function bw(t){let e=id();for(let n in t)e[n]={...e[n],...t[n]};Dc(e)}var sP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Wc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||sP.has(t)}var ww=t=>!Wc(t);function oP(t){typeof t=="function"&&(ww=e=>e.startsWith("on")?!Wc(e):t(e))}try{oP(Ev("@emotion/is-prop-valid").default)}catch{}function Tw(t,e,n){let i={};for(let r in t)r==="values"&&typeof t.values=="object"||nt(t[r])||(ww(r)||n===!0&&Wc(r)||!e&&!Wc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}var ld=ot(js(),1);var Da=ot(mt(),1);var Ew=ot(mt(),1),ds=(0,Ew.createContext)({});var rd=ot(mt(),1);function Aw(t,e){if(us(t)){let{initial:n,animate:i}=t;return{initial:n===!1||Wi(n)?n:void 0,animate:Wi(i)?i:void 0}}return t.inherit!==!1?e:{}}function Rw(t){let{initial:e,animate:n}=Aw(t,(0,rd.useContext)(ds));return(0,rd.useMemo)(()=>({initial:e,animate:n}),[Cw(e),Cw(n)])}function Cw(t){return Array.isArray(t)?t.join(" "):t}var Ia=ot(mt(),1);var Pw=ot(mt(),1);var Ra=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Kx(t,e,n){for(let i in e)!nt(e[i])&&!Oc(i,n)&&(t[i]=e[i])}function aP({transformTemplate:t},e){return(0,Pw.useMemo)(()=>{let n=Ra();return ao(n,e,t),Object.assign({},n.vars,n.style)},[e])}function lP(t,e){let n=t.style||{},i={};return Kx(i,n,t),Object.assign(i,aP(t,e)),i}function Iw(t,e){let n={},i=lP(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}var Dw=ot(mt(),1);var sd=()=>({...Ra(),attrs:{}});function Lw(t,e,n,i){let r=(0,Dw.useMemo)(()=>{let s=sd();return Bc(s,e,Vc(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){let s={};Kx(s,t.style,t),r.style={...s,...r.style}}return r}var Nw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pa(t){return typeof t!="string"||t.includes("-")?!1:!!(Nw.indexOf(t)>-1||/[A-Z]/u.test(t))}function Fw(t,e,n,{latestValues:i},r,s=!1,o){let l=(o??Pa(t)?Lw:Iw)(e,i,r,t),c=Tw(e,typeof t=="string",s),u=t!==Ia.Fragment?{...c,...l,ref:n}:{},{children:f}=e,h=(0,Ia.useMemo)(()=>nt(f)?f.get():f,[f]);return(0,Ia.createElement)(t,{...u,children:h})}var Zx=ot(mt(),1);function cP({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:uP(n,i,r,t),renderState:e()}}function uP(t,e,n,i){let r={},s=i(t,{});for(let h in s)r[h]=fo(s[h]);let{initial:o,animate:a}=t,l=us(t),c=Rc(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;let f=u?a:o;if(f&&typeof f!="boolean"&&!yr(f)){let h=Array.isArray(f)?f:[f];for(let p=0;p<h.length;p++){let g=no(t,h[p]);if(g){let{transitionEnd:v,transition:y,...d}=g;for(let m in d){let x=d[m];if(Array.isArray(x)){let S=u?x.length-1:0;x=x[S]}x!==null&&(r[m]=x)}for(let m in v)r[m]=v[m]}}}return r}var od=t=>(e,n)=>{let i=(0,Zx.useContext)(ds),r=(0,Zx.useContext)(fa),s=()=>cP(t,e,i,r);return n?s():es(s)};var Uw=od({scrapeMotionValuesFromProps:lo,createRenderState:Ra});var Ow=od({scrapeMotionValuesFromProps:zc,createRenderState:sd});var kw=Symbol.for("motionComponentSymbol");var mo=ot(mt(),1);function Bw(t,e,n){let i=(0,mo.useRef)(n);(0,mo.useInsertionEffect)(()=>{i.current=n});let r=(0,mo.useRef)(null);return(0,mo.useCallback)(s=>{s&&t.onMount?.(s),e&&(s?e.mount(s):e.unmount());let o=i.current;if(typeof o=="function")if(s){let a=o(s);typeof a=="function"&&(r.current=a)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}var Mn=ot(mt(),1);var Vw=ot(mt(),1),ad=(0,Vw.createContext)({});function ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function zw(t,e,n,i,r,s){let{visualElement:o}=(0,Mn.useContext)(ds),a=(0,Mn.useContext)(nd),l=(0,Mn.useContext)(fa),c=(0,Mn.useContext)(fs),u=c.reducedMotion,f=c.skipAnimations,h=(0,Mn.useRef)(null),p=(0,Mn.useRef)(!1);i=i||a.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:f,isSVG:s}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));let g=h.current,v=(0,Mn.useContext)(ad);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&fP(h.current,n,r,v);let y=(0,Mn.useRef)(!1);(0,Mn.useInsertionEffect)(()=>{g&&y.current&&g.update(n,l)});let d=n[bc],m=(0,Mn.useRef)(!!d&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(d)&&window.MotionHasOptimisedAnimation?.(d));return eh(()=>{p.current=!0,g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),m.current&&g.animationState&&g.animationState.animateChanges())}),(0,Mn.useEffect)(()=>{g&&(!m.current&&g.animationState&&g.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(d)}),m.current=!1),g.enteringChildren=void 0)}),g}function fP(t,e,n,i){let{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Gw(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&ps(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function Gw(t){if(t)return t.options.allowProjection!==!1?t.projection:Gw(t.parent)}function cd(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&bw(i);let s=n?n==="svg":Pa(t),o=s?Ow:Uw;function a(c,u){let f,h={...(0,Da.useContext)(fs),...c,layoutId:hP(c)},{isStatic:p}=h,g=Rw(c),v=o(c,p);if(!p&&typeof window<"u"){dP(h,i);let y=pP(h);f=y.MeasureLayout,g.visualElement=zw(t,v,h,r,y.ProjectionNode,s)}return(0,ld.jsxs)(ds.Provider,{value:g,children:[f&&g.visualElement?(0,ld.jsx)(f,{visualElement:g.visualElement,...h}):null,Fw(t,c,Bw(v,g.visualElement,u),v,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;let l=(0,Da.forwardRef)(a);return l[kw]=t,l}function hP({layoutId:t}){let e=(0,Da.useContext)(Jf).id;return e&&t!==void 0?e+"-"+t:t}function dP(t,e){let n=(0,Da.useContext)(nd).strict}function pP(t){let e=id(),{drag:n,layout:i}=e;if(!n&&!i)return{};let r={...n,...i};return{MeasureLayout:n?.isEnabled(t)||i?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Hw(t,e){if(typeof Proxy>"u")return cd;let n=new Map,i=(s,o)=>cd(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,cd(o,void 0,t,e)),n.get(o))})}var Ww=ot(mt(),1);var Xw=(t,e)=>e.isSVG??Pa(t)?new Gc(e):new kc(e,{allowProjection:t!==Ww.Fragment});var ud=class extends Yt{constructor(e){super(e),e.animationState||(e.animationState=Ux(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();yr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}};var mP=0,fd=class extends Yt{constructor(){super(...arguments),this.id=mP++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){let{initial:s,custom:o}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){let a=Xn(this.node,s,o);if(a){let{transition:l,transitionEnd:c,...u}=a;for(let f in u)this.node.getValue(f)?.jump(u[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){let{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}};var qw={animation:{Feature:ud},exit:{Feature:fd}};function _r(t){return{point:{x:t.pageX,y:t.pageY}}}var Yw=t=>e=>so(e)&&t(e,_r(e));function ms(t,e,n,i){return Xi(t,e,Yw(n),i)}var hd=({current:t})=>t?t.ownerDocument.defaultView:null;var jw=(t,e)=>Math.abs(t-e);function $w(t,e){let n=jw(t.x,e.x),i=jw(t.y,e.y);return Math.sqrt(n**2+i**2)}var Kw=new Set(["auto","scroll"]),La=class{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=g=>{this.handleScroll(g.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=dd(this.lastRawMoveEventInfo,this.transformPagePoint));let g=Jx(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=$w(g.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!y)return;let{point:d}=g,{timestamp:m}=Ft;this.history.push({...d,timestamp:m});let{onStart:x,onMove:S}=this.handlers;v||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=dd(v,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();let{onEnd:y,onSessionEnd:d,resumeAnimation:m}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let x=Jx(g.type==="pointercancel"?this.lastMoveEventInfo:dd(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(g,x),d&&d(g,x)},!so(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;let l=_r(e),c=dd(l,this.transformPagePoint),{point:u}=c,{timestamp:f}=Ft;this.history=[{...u,timestamp:f}];let{onSessionStart:h}=n;h&&h(e,Jx(c,this.history));let p={passive:!0,capture:!0};this.removeListeners=Ei(ms(this.contextWindow,"pointermove",this.handlePointerMove,p),ms(this.contextWindow,"pointerup",this.handlePointerUp,p),ms(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){let i=getComputedStyle(n);(Kw.has(i.overflowX)||Kw.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){let n=this.scrollPositions.get(e);if(!n)return;let i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),De.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),un(this.updatePoint)}};function dd(t,e){return e?{point:e(t.point)}:t}function Zw(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Jx({point:t},e){return{point:t,delta:Zw(t,Jw(e)),offset:Zw(t,gP(e)),velocity:xP(e,.1)}}function gP(t){return t[0]}function Jw(t){return t[t.length-1]}function xP(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null,r=Jw(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Bt(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Bt(e)*2&&(i=t[1]);let s=Qt(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};let o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function iT(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ze(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ze(n,t,i.max):Math.min(t,n)),t}function Qw(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function rT(t,{top:e,left:n,bottom:i,right:r}){return{x:Qw(t.x,n,r),y:Qw(t.y,e,i)}}function eT(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function sT(t,e){return{x:eT(t.x,e.x),y:eT(t.y,e.y)}}function oT(t,e){let n=.5,i=zt(t),r=zt(e);return r>i?n=Vi(e.min,e.max-i,t.min):i>r&&(n=Vi(t.min,t.max-r,e.min)),Xt(0,1,n)}function aT(t,e){let n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}var pd=.35;function lT(t=pd){return t===!1?t=0:t===!0&&(t=pd),{x:tT(t,"left","right"),y:tT(t,"top","bottom")}}function tT(t,e,n){return{min:nT(t,e),max:nT(t,n)}}function nT(t,e){return typeof t=="number"?t:t[e]||0}var yP=new WeakMap,gd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=St(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let s=f=>{n&&this.snapToCursor(_r(f).point),this.stopAnimation()},o=(f,h)=>{let{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=px(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qn(d=>{let m=this.getAxisMotionValue(d).get()||0;if(fn.test(m)){let{projection:x}=this.visualElement;if(x&&x.layout){let S=x.layout.layoutBox[d];S&&(m=zt(S)*(parseFloat(m)/100))}}this.originPoint[d]=m}),v&&De.update(()=>v(f,h),!1,!0),Sa(this.visualElement,"transform");let{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;let{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:y}=this.getProps();if(!p&&!this.openDragLock)return;let{offset:d}=h;if(g&&this.currentDirection===null){this.currentDirection=_P(d),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,d),this.updateAxis("y",h.point,d),this.visualElement.render(),y&&De.update(()=>y(f,h),!1,!0)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new La(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:hd(this.visualElement),element:this.visualElement.current})}stop(e,n){let i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;let{velocity:o}=r;this.startAnimation(o);let{onDragEnd:a}=this.getProps();a&&De.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){let{drag:r}=this.getProps();if(!i||!md(e,r,this.currentDirection))return;let s=this.getAxisMotionValue(e),o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=iT(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&ps(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=rT(i.layoutBox,e):this.constraints=!1,this.elastic=lT(n),r!==this.constraints&&!ps(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&qn(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=aT(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ps(e))return!1;let i=e.current;In(i!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let s=Lx(i,r.root,this.visualElement.getTransformPagePoint()),o=sT(r.layout.layoutBox,s);if(n){let a=n(Ax(o));this.hasMutatedConstraints=!!a,a&&(o=Lc(a))}return o}startAnimation(e){let{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=qn(u=>{if(!md(u,n,this.currentDirection))return;let f=l&&l[u]||{};(o===!0||o===u)&&(f={min:0,max:0});let h=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){let i=this.getAxisMotionValue(e);return Sa(this.visualElement,e),i.start(to(e,i,0,n,this.visualElement,!1))}stopAnimation(){qn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){qn(n=>{let{drag:i}=this.getProps();if(!md(n,i,this.currentDirection))return;let{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){let{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-ze(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ps(n)||!i||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};qn(o=>{let a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){let l=a.get();r[o]=oT({min:l,max:l},this.constraints[o])}});let{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),qn(o=>{if(!md(o,e,null))return;let a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ze(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yP.set(this.visualElement,this);let e=this.visualElement.current,n=ms(e,"pointerdown",c=>{let{drag:u,dragListener:f=!0}=this.getProps(),h=c.target,p=h!==e&&yx(h);u&&f&&!p&&this.start(c)}),i,r=()=>{let{dragConstraints:c}=this.getProps();ps(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=vP(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),De.read(r);let a=Xi(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(qn(f=>{let h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=c[f].translate,h.set(h.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){let e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=pd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}};function cT(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function vP(t,e,n){let i=Hh(t,cT(n)),r=Hh(e,cT(n));return()=>{i(),r()}}function md(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _P(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}var xd=class extends Yt{constructor(e){super(e),this.removeGroupControls=Rt,this.removeListeners=Rt,this.controls=new gd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}};var Qx=t=>(e,n)=>{t&&De.update(()=>t(e,n),!1,!0)},yd=class extends Yt{constructor(){super(...arguments),this.removePointerDownListener=Rt}onPointerDown(e){this.session=new La(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hd(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Qx(e),onStart:Qx(n),onMove:Qx(i),onEnd:(s,o)=>{delete this.session,r&&De.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ms(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};var uT=ot(js(),1);var Xc=ot(mt(),1);var ey=!1,ty=class extends Xc.Component{componentDidMount(){let{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),ey&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ho.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),ey=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||De.postRender(()=>{let a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),ro.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;ey=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function vd(t){let[e,n]=vw(),i=(0,Xc.useContext)(Jf);return(0,uT.jsx)(ty,{...t,layoutGroup:i,switchLayoutGroup:(0,Xc.useContext)(ad),isPresent:e,safeToRemove:n})}var fT={pan:{Feature:yd},drag:{Feature:xd,ProjectionNode:Hc,MeasureLayout:vd}};function hT(t,e,n){let{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");let r="onHover"+n,s=i[r];s&&De.postRender(()=>s(e,_r(e)))}var _d=class extends Yt{mount(){let{current:e}=this.node;e&&(this.unmount=mx(e,(n,i)=>(hT(this.node,i,"Start"),r=>hT(this.node,r,"End"))))}unmount(){}};var Sd=class extends Yt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ei(Xi(this.node.current,"focus",()=>this.onFocus()),Xi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}};function dT(t,e,n){let{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");let r="onTap"+(n==="End"?"":n),s=i[r];s&&De.postRender(()=>s(e,_r(e)))}var Md=class extends Yt{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=_x(e,(r,s)=>(dT(this.node,s,"Start"),(o,{success:a})=>dT(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:i?.tap===!1})}unmount(){}};var iy=new WeakMap,ny=new WeakMap,SP=t=>{let e=iy.get(t.target);e&&e(t)},MP=t=>{t.forEach(SP)};function bP({root:t,...e}){let n=t||document;ny.has(n)||ny.set(n,{});let i=ny.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(MP,{root:t,...e})),i[r]}function pT(t,e,n){let i=bP(e);return iy.set(t,n),i.observe(t),()=>{iy.delete(t),i.unobserve(t)}}var wP={some:0,all:1},bd=class extends Yt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:wP[r]},a=l=>{let{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);let{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};this.stopObserver=pT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;let{props:e,prevProps:n}=this.node;["amount","margin","root"].some(TP(e,n))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function TP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}var mT={inView:{Feature:bd},tap:{Feature:Md},focus:{Feature:Sd},hover:{Feature:_d}};var gT={layout:{ProjectionNode:Hc,MeasureLayout:vd}};var xT={...qw,...mT,...fT,...gT};var qc=Hw(xT,Xw);var Na=ot(mt(),1);function gs(t){let e=es(()=>Dn(t)),{isStatic:n}=(0,Na.useContext)(fs);if(n){let[,i]=(0,Na.useState)(t);(0,Na.useEffect)(()=>e.on("change",i),[])}return e}function wd(t,e){let n=gs(e()),i=()=>n.set(e());return i(),eh(()=>{let r=()=>De.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),un(i)}}),n}var Td=ot(mt(),1);function yT(t){eo.current=[],t();let e=wd(eo.current,t);return eo.current=void 0,e}function ry(t,e,n,i){if(typeof t=="function")return yT(t);if(n!==void 0&&!Array.isArray(n)&&typeof e!="function")return EP(t,e,n,i);let o=typeof e=="function"?e:Sx(e,n,i),a=Array.isArray(t)?vT(t,o):vT([t],([c])=>o(c)),l=Array.isArray(t)?void 0:t.accelerate;return l&&!l.isTransformed&&typeof e!="function"&&Array.isArray(n)&&i?.clamp!==!1&&(a.accelerate={...l,times:e,keyframes:n,isTransformed:!0,...i?.ease?{ease:i.ease}:{}}),a}function vT(t,e){let n=es(()=>[]);return wd(t,()=>{n.length=0;let i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function EP(t,e,n,i){let r=es(()=>Object.keys(n)),s=es(()=>({}));for(let o of r)s[o]=ry(t,e,n[o],i);return s}function _T(t,e={}){let{isStatic:n}=(0,Td.useContext)(fs),i=()=>nt(t)?t.get():t;if(n)return ry(i);let r=gs(i());return(0,Td.useInsertionEffect)(()=>bx(r,t,e),[r,JSON.stringify(e)]),r}function Ed(t,e={}){return _T(t,{type:"spring",...e})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var vp="181";var kT=0,Ny=1,BT=2;var Fy=1,VT=2,Zi=3,Ar=0,bn=1,Ji=2,Qi=0,Mo=1,Uy=2,Oy=3,ky=4,zT=5,ws=100,GT=101,HT=102,WT=103,XT=104,qT=200,YT=201,jT=202,$T=203,qd=204,Yd=205,KT=206,ZT=207,JT=208,QT=209,eE=210,tE=211,nE=212,iE=213,rE=214,_p=0,Sp=1,Mp=2,bo=3,bp=4,wp=5,Tp=6,Ep=7,By=0,sE=1,oE=2,Pr=0,aE=1,lE=2,cE=3,uE=4,fE=5,hE=6,dE=7;var Vy=300,Ao=301,Co=302,Ap=303,Cp=304,xu=306,jd=1e3,Yi=1001,$d=1002,Nn=1003,pE=1004;var yu=1005;var Jn=1006,Rp=1007;var Cs=1008;var er=1009,zy=1010,Gy=1011,tl=1012,Pp=1013,Rs=1014,tr=1015,Ro=1016,Ip=1017,Dp=1018,nl=1020,Hy=35902,Wy=35899,Xy=1021,qy=1022,gi=1023,ja=1026,il=1027,Yy=1028,Lp=1029,Np=1030,Fp=1031;var Up=1033,vu=33776,_u=33777,Su=33778,Mu=33779,Op=35840,kp=35841,Bp=35842,Vp=35843,zp=36196,Gp=37492,Hp=37496,Wp=37808,Xp=37809,qp=37810,Yp=37811,jp=37812,$p=37813,Kp=37814,Zp=37815,Jp=37816,Qp=37817,em=37818,tm=37819,nm=37820,im=37821,rm=36492,sm=36494,om=36495,am=36283,lm=36284,cm=36285,um=36286;var Jc=2300,Kd=2301,Xd=2302,Cy=2400,Ry=2401,Py=2402;var mE=3200,gE=3201;var xE=0,yE=1,Ir="",$n="srgb",wo="srgb-linear",Qc="linear",lt="srgb";var _o=7680;var Iy=519,vE=512,_E=513,SE=514,jy=515,ME=516,bE=517,wE=518,TE=519,Dy=35044;var $y="300 es",Ii=2e3,eu=2001;function Ky(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function EE(){let t=tu("canvas");return t.style.display="block",t}var ST={},$a=null;function Zy(...t){let e="THREE."+t.shift();$a?$a("log",e,...t):console.log(e,...t)}function Le(...t){let e="THREE."+t.shift();$a?$a("warn",e,...t):console.warn(e,...t)}function Ye(...t){let e="THREE."+t.shift();$a?$a("error",e,...t):console.error(e,...t)}function Ka(...t){let e=t.join(" ");e in ST||(ST[e]=!0,Le(...t))}function AE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Cr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sy=Math.PI/180,Zd=180/Math.PI;function bu(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function AP(t,e){return(t%e+e)%e}function oy(t,e,n){return(1-n)*t+n*e}function Yc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Je=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let y=l*h+c*p+u*g+f*v;y<0&&(h=-h,p=-p,g=-g,v=-v,y=-y);let d=1-a;if(y<.9995){let m=Math.acos(y),x=Math.sin(m);d=Math.sin(d*m)/x,a=Math.sin(a*m)/x,l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+v*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+g*a,f=f*d+v*a;let m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(MT.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(MT.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ay.copy(this).projectOnVector(e),this.sub(ay)}reflect(e){return this.sub(ay.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ay=new z,MT=new Rr,Ve=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=r[0],y=r[3],d=r[6],m=r[1],x=r[4],S=r[7],E=r[2],M=r[5],A=r[8];return s[0]=o*v+a*m+l*E,s[3]=o*y+a*x+l*M,s[6]=o*d+a*S+l*A,s[1]=c*v+u*m+f*E,s[4]=c*y+u*x+f*M,s[7]=c*d+u*S+f*A,s[2]=h*v+p*m+g*E,s[5]=h*y+p*x+g*M,s[8]=h*d+p*S+g*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ly.makeScale(e,n)),this}rotate(e){return this.premultiply(ly.makeRotation(-e)),this}translate(e,n){return this.premultiply(ly.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ly=new Ve,bT=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wT=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CP(){let t={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=Ya(r.r),r.g=Ya(r.g),r.b=Ya(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?Qc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wo]:{primaries:e,whitePoint:i,transfer:Qc,toXYZ:bT,fromXYZ:wT,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:bT,fromXYZ:wT,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),t}var it=CP();function Er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ya(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Fa,Jd=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fa===void 0&&(Fa=tu("canvas")),Fa.width=e.width,Fa.height=e.height;let r=Fa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fa}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=tu("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Er(n[i]/255)*255):n[i]=Er(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},RP=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RP++}),this.uuid=bu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cy(r[o].image)):s.push(cy(r[o]))}else s=cy(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function cy(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var PP=0,uy=new z,Fn=class t extends Cr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Yi,r=Yi,s=Jn,o=Cs,a=gi,l=er,c=t.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PP++}),this.uuid=bu(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uy).x}get height(){return this.source.getSize(uy).y}get depth(){return this.source.getSize(uy).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Vy;Fn.DEFAULT_ANISOTROPY=1;var Ut=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],y=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-y)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+y)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,S=(p+1)/2,E=(d+1)/2,M=(u+h)/4,A=(f+v)/4,R=(g+y)/4;return x>S&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((y-g)*(y-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(y-g)/m,this.y=(f-v)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qd=class extends Cr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);let r={width:e,height:n,depth:i.depth},s=new Fn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Za(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends Qd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},nu=class extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ep=class extends Fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ad.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ad.copy(i.boundingBox)),Ad.applyMatrix4(e.matrixWorld),this.union(Ad)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jc),Cd.subVectors(this.max,jc),Ua.subVectors(e.a,jc),Oa.subVectors(e.b,jc),ka.subVectors(e.c,jc),xs.subVectors(Oa,Ua),ys.subVectors(ka,Oa),go.subVectors(Ua,ka);let n=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-go.z,go.y,xs.z,0,-xs.x,ys.z,0,-ys.x,go.z,0,-go.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-go.y,go.x,0];return!fy(n,Ua,Oa,ka,Cd)||(n=[1,0,0,0,1,0,0,0,1],!fy(n,Ua,Oa,ka,Cd))?!1:(Rd.crossVectors(xs,ys),n=[Rd.x,Rd.y,Rd.z],fy(n,Ua,Oa,ka,Cd))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sr=[new z,new z,new z,new z,new z,new z,new z,new z],Ci=new z,Ad=new Ts,Ua=new z,Oa=new z,ka=new z,xs=new z,ys=new z,go=new z,jc=new z,Cd=new z,Rd=new z,xo=new z;function fy(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){xo.fromArray(t,s);let a=r.x*Math.abs(xo.x)+r.y*Math.abs(xo.y)+r.z*Math.abs(xo.z),l=e.dot(xo),c=n.dot(xo),u=i.dot(xo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var IP=new Ts,$c=new z,hy=new z,Ja=class{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):IP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$c.subVectors(e,this.center);let n=$c.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($c,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hy.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($c.copy(e.center).add(hy)),this.expandByPoint($c.copy(e.center).sub(hy))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mr=new z,dy=new z,Pd=new z,vs=new z,py=new z,Id=new z,my=new z,tp=class{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,n),Mr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){dy.copy(e).add(n).multiplyScalar(.5),Pd.copy(n).sub(e).normalize(),vs.copy(this.origin).sub(dy);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Pd),a=vs.dot(this.direction),l=-vs.dot(Pd),c=vs.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(dy).addScaledVector(Pd,h),p}intersectSphere(e,n){Mr.subVectors(e.center,this.origin);let i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,n,i,r,s){py.subVectors(n,e),Id.subVectors(i,e),my.crossVectors(py,Id);let o=this.direction.dot(my),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);let l=a*this.direction.dot(Id.crossVectors(vs,Id));if(l<0)return null;let c=a*this.direction.dot(py.cross(vs));if(c<0||l+c>o)return null;let u=-a*vs.dot(my);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class t{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,y){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,y)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,v,y){let d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Ba.setFromMatrixColumn(e,0).length(),s=1/Ba.setFromMatrixColumn(e,1).length(),o=1/Ba.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,g=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-v*f}else if(e.order==="XZY"){let h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DP,e,LP)}lookAt(e,n,i){let r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),_s.crossVectors(i,Yn),_s.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),_s.crossVectors(i,Yn)),_s.normalize(),Dd.crossVectors(Yn,_s),r[0]=_s.x,r[4]=Dd.x,r[8]=Yn.x,r[1]=_s.y,r[5]=Dd.y,r[9]=Yn.y,r[2]=_s.z,r[6]=Dd.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],y=i[10],d=i[14],m=i[3],x=i[7],S=i[11],E=i[15],M=r[0],A=r[4],R=r[8],w=r[12],_=r[1],P=r[5],L=r[9],B=r[13],H=r[2],X=r[6],k=r[10],ne=r[14],O=r[3],Z=r[7],Q=r[11],ge=r[15];return s[0]=o*M+a*_+l*H+c*O,s[4]=o*A+a*P+l*X+c*Z,s[8]=o*R+a*L+l*k+c*Q,s[12]=o*w+a*B+l*ne+c*ge,s[1]=u*M+f*_+h*H+p*O,s[5]=u*A+f*P+h*X+p*Z,s[9]=u*R+f*L+h*k+p*Q,s[13]=u*w+f*B+h*ne+p*ge,s[2]=g*M+v*_+y*H+d*O,s[6]=g*A+v*P+y*X+d*Z,s[10]=g*R+v*L+y*k+d*Q,s[14]=g*w+v*B+y*ne+d*ge,s[3]=m*M+x*_+S*H+E*O,s[7]=m*A+x*P+S*X+E*Z,s[11]=m*R+x*L+S*k+E*Q,s[15]=m*w+x*B+S*ne+E*ge,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],y=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+y*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],y=e[14],d=e[15],m=f*y*c-v*h*c+v*l*p-a*y*p-f*l*d+a*h*d,x=g*h*c-u*y*c-g*l*p+o*y*p+u*l*d-o*h*d,S=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,E=g*f*l-u*v*l-g*a*h+o*v*h+u*a*y-o*f*y,M=n*m+i*x+r*S+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/M;return e[0]=m*A,e[1]=(v*h*s-f*y*s-v*r*p+i*y*p+f*r*d-i*h*d)*A,e[2]=(a*y*s-v*l*s+v*r*c-i*y*c-a*r*d+i*l*d)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(u*y*s-g*h*s+g*r*p-n*y*p-u*r*d+n*h*d)*A,e[6]=(g*l*s-o*y*s-g*r*c+n*y*c+o*r*d-n*l*d)*A,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*d-n*f*d)*A,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=E*A,e[13]=(u*v*r-g*f*r+g*i*h-n*v*h-u*i*y+n*f*y)*A,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*y-n*a*y)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,v=o*u,y=o*f,d=a*f,m=l*c,x=l*u,S=l*f,E=i.x,M=i.y,A=i.z;return r[0]=(1-(v+d))*E,r[1]=(p+S)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(p-S)*M,r[5]=(1-(h+d))*M,r[6]=(y+m)*M,r[7]=0,r[8]=(g+x)*A,r[9]=(y-m)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Ba.set(r[0],r[1],r[2]).length(),o=Ba.set(r[4],r[5],r[6]).length(),a=Ba.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ri.copy(this);let c=1/s,u=1/o,f=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=f,Ri.elements[9]*=f,Ri.elements[10]*=f,n.setFromRotationMatrix(Ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ii,l=!1){let c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r),g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===Ii)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===eu)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ii,l=!1){let c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r),g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===Ii)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===eu)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ba=new z,Ri=new jt,DP=new z(0,0,0),LP=new z(1,1,1),_s=new z,Dd=new z,Yn=new z,TT=new jt,ET=new Rr,$i=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return TT.makeRotationFromQuaternion(e),this.setFromRotationMatrix(TT,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ET.setFromEuler(this),this.setFromQuaternion(ET,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var iu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},NP=0,AT=new z,Va=new Rr,br=new jt,Ld=new z,Kc=new z,FP=new z,UP=new Rr,CT=new z(1,0,0),RT=new z(0,1,0),PT=new z(0,0,1),IT={type:"added"},OP={type:"removed"},za={type:"childadded",child:null},gy={type:"childremoved",child:null},mi=class t extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NP++}),this.uuid=bu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,n=new $i,i=new Rr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ve}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Va.setFromAxisAngle(e,n),this.quaternion.multiply(Va),this}rotateOnWorldAxis(e,n){return Va.setFromAxisAngle(e,n),this.quaternion.premultiply(Va),this}rotateX(e){return this.rotateOnAxis(CT,e)}rotateY(e){return this.rotateOnAxis(RT,e)}rotateZ(e){return this.rotateOnAxis(PT,e)}translateOnAxis(e,n){return AT.copy(e).applyQuaternion(this.quaternion),this.position.add(AT.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(CT,e)}translateY(e){return this.translateOnAxis(RT,e)}translateZ(e){return this.translateOnAxis(PT,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ld.copy(e):Ld.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Kc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Kc,Ld,this.up):br.lookAt(Ld,Kc,this.up),this.quaternion.setFromRotationMatrix(br),r&&(br.extractRotation(r.matrixWorld),Va.setFromRotationMatrix(br),this.quaternion.premultiply(Va.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(IT),za.child=e,this.dispatchEvent(za),za.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OP),gy.child=e,this.dispatchEvent(gy),gy.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(IT),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,e,FP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kc,UP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};mi.DEFAULT_UP=new z(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new z,wr=new z,xy=new z,Tr=new z,Ga=new z,Ha=new z,DT=new z,yy=new z,vy=new z,_y=new z,Sy=new Ut,My=new Ut,by=new Ut,bs=class t{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pi.subVectors(e,n),r.cross(Pi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pi.subVectors(r,n),wr.subVectors(i,n),xy.subVectors(e,n);let o=Pi.dot(Pi),a=Pi.dot(wr),l=Pi.dot(xy),c=wr.dot(wr),u=wr.dot(xy),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(a,Tr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Sy.setScalar(0),My.setScalar(0),by.setScalar(0),Sy.fromBufferAttribute(e,n),My.fromBufferAttribute(e,i),by.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Sy,s.x),o.addScaledVector(My,s.y),o.addScaledVector(by,s.z),o}static isFrontFacing(e,n,i,r){return Pi.subVectors(i,n),wr.subVectors(e,n),Pi.cross(wr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Pi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Ga.subVectors(r,i),Ha.subVectors(s,i),yy.subVectors(e,i);let l=Ga.dot(yy),c=Ha.dot(yy);if(l<=0&&c<=0)return n.copy(i);vy.subVectors(e,r);let u=Ga.dot(vy),f=Ha.dot(vy);if(u>=0&&f<=u)return n.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ga,o);_y.subVectors(e,s);let p=Ga.dot(_y),g=Ha.dot(_y);if(g>=0&&p<=g)return n.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ha,a);let y=u*g-p*f;if(y<=0&&f-u>=0&&p-g>=0)return DT.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(DT,a);let d=1/(y+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(Ga,o).addScaledVector(Ha,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},CE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},Nd={h:0,s:0,l:0};function wy(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var je=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=AP(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wy(o,s,e+1/3),this.g=wy(o,s,e),this.b=wy(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){let i=CE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Ya(e.r),this.g=Ya(e.g),this.b=Ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return it.workingToColorSpace(dn.copy(this),e),Math.round(Ze(dn.r*255,0,255))*65536+Math.round(Ze(dn.g*255,0,255))*256+Math.round(Ze(dn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(dn.copy(this),n);let i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=$n){it.workingToColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,r=dn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+n,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ss),e.getHSL(Nd);let i=oy(Ss.h,Nd.h,n),r=oy(Ss.s,Nd.s,n),s=oy(Ss.l,Nd.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new je;je.NAMES=CE;var kP=0,To=class extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=bu(),this.name="",this.type="Material",this.blending=Mo,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qd&&(i.blendSrc=this.blendSrc),this.blendDst!==Yd&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ru=class extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=By,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new z,Fd=new Je,BP=0,Kn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dy,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fd.fromBufferAttribute(this,n),Fd.applyMatrix3(e),this.setXY(n,Fd.x,Fd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Yc(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Yc(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Yc(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Yc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Yc(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),r=Ln(r,this.array),s=Ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dy&&(e.usage=this.usage),e}};var su=class extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var ou=class extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Zn=class extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}},VP=0,pi=new jt,Ty=new mi,Wa=new z,jn=new Ts,Zc=new Ts,en=new z,Ki=class t extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VP++}),this.uuid=bu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?ou:su)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,i){return pi.makeTranslation(e,n,i),this.applyMatrix4(pi),this}scale(e,n,i){return pi.makeScale(e,n,i),this.applyMatrix4(pi),this}lookAt(e){return Ty.lookAt(e),Ty.updateMatrix(),this.applyMatrix4(Ty.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wa).negate(),this.translate(Wa.x,Wa.y,Wa.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zn(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];Zc.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(jn.min,Zc.min),jn.expandByPoint(en),en.addVectors(jn.max,Zc.max),jn.expandByPoint(en)):(jn.expandByPoint(Zc.min),jn.expandByPoint(Zc.max))}jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Wa.fromBufferAttribute(e,c),en.add(Wa)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new z,l[R]=new z;let c=new z,u=new z,f=new z,h=new Je,p=new Je,g=new Je,v=new z,y=new z;function d(R,w,_){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,_),u.sub(c),f.sub(c),p.sub(h),g.sub(h);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),y.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(v),a[w].add(v),a[_].add(v),l[R].add(y),l[w].add(y),l[_].add(y))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,w=m.length;R<w;++R){let _=m[R],P=_.start,L=_.count;for(let B=P,H=P+L;B<H;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new z,S=new z,E=new z,M=new z;function A(R){E.fromBufferAttribute(r,R),M.copy(E);let w=a[R];x.copy(w),x.sub(E.multiplyScalar(E.dot(w))).normalize(),S.crossVectors(M,w);let P=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,w=m.length;R<w;++R){let _=m[R],P=_.start,L=_.count;for(let B=P,H=P+L;B<H;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),v=e.getX(h+1),y=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,y),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),p=0,g=0;for(let v=0,y=l.length;v<y;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Kn(h,u,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},LT=new jt,yo=new tp,Ud=new Ja,NT=new z,Od=new z,kd=new z,Bd=new z,Ey=new z,Vd=new z,FT=new z,zd=new z,Qn=class extends mi{constructor(e=new Ki,n=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Vd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(Ey.fromBufferAttribute(f,e),o?Vd.addScaledVector(Ey,u):Vd.addScaledVector(Ey.sub(n),u))}n.add(Vd)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ud.copy(i.boundingSphere),Ud.applyMatrix4(s),yo.copy(e.ray).recast(e.near),!(Ud.containsPoint(yo.origin)===!1&&(yo.intersectSphere(Ud,NT)===null||yo.origin.distanceToSquared(NT)>(e.far-e.near)**2))&&(LT.copy(s).invert(),yo.copy(e.ray).applyMatrix4(LT),!(i.boundingBox!==null&&yo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yo)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let y=h[g],d=o[y.materialIndex],m=Math.max(y.start,p.start),x=Math.min(a.count,Math.min(y.start+y.count,p.start+p.count));for(let S=m,E=x;S<E;S+=3){let M=a.getX(S),A=a.getX(S+1),R=a.getX(S+2);r=Gd(this,d,e,i,c,u,f,M,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let y=g,d=v;y<d;y+=3){let m=a.getX(y),x=a.getX(y+1),S=a.getX(y+2);r=Gd(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let y=h[g],d=o[y.materialIndex],m=Math.max(y.start,p.start),x=Math.min(l.count,Math.min(y.start+y.count,p.start+p.count));for(let S=m,E=x;S<E;S+=3){let M=S,A=S+1,R=S+2;r=Gd(this,d,e,i,c,u,f,M,A,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let y=g,d=v;y<d;y+=3){let m=y,x=y+1,S=y+2;r=Gd(this,o,e,i,c,u,f,m,x,S),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}};function zP(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;zd.copy(a),zd.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(zd);return c<n.near||c>n.far?null:{distance:c,point:zd.clone(),object:t}}function Gd(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Od),t.getVertexPosition(l,kd),t.getVertexPosition(c,Bd);let u=zP(t,e,n,i,Od,kd,Bd,FT);if(u){let f=new z;bs.getBarycoord(FT,Od,kd,Bd,f),r&&(u.uv=bs.getInterpolatedAttribute(r,a,l,c,f,new Je)),s&&(u.uv1=bs.getInterpolatedAttribute(s,a,l,c,f,new Je)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};bs.getNormal(Od,kd,Bd,h.normal),u.face=h,u.barycoord=f}return u}var Qa=class t extends Ki{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(f,2));function g(v,y,d,m,x,S,E,M,A,R,w){let _=S/A,P=E/R,L=S/2,B=E/2,H=M/2,X=A+1,k=R+1,ne=0,O=0,Z=new z;for(let Q=0;Q<k;Q++){let ge=Q*P-B;for(let Ne=0;Ne<X;Ne++){let Qe=Ne*_-L;Z[v]=Qe*m,Z[y]=ge*x,Z[d]=H,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[y]=0,Z[d]=M>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Ne/A),f.push(1-Q/R),ne+=1}}for(let Q=0;Q<R;Q++)for(let ge=0;ge<A;ge++){let Ne=h+ge+X*Q,Qe=h+ge+X*(Q+1),He=h+(ge+1)+X*(Q+1),Ke=h+(ge+1)+X*Q;l.push(Ne,Qe,Ke),l.push(Qe,He,Ke),O+=6}a.addGroup(p,O,w),p+=O,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Po(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function mn(t){let e={};for(let n=0;n<t.length;n++){let i=Po(t[n]);for(let r in i)e[r]=i[r]}return e}function GP(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jy(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var RE={clone:Po,merge:mn},HP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HP,this.fragmentShader=WP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=GP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},au=class extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ms=new z,UT=new Je,OT=new Je,pn=class extends au{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sy*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(sy*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,n){return this.getViewBounds(e,UT,OT),n.subVectors(OT,UT)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(sy*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Xa=-90,qa=1,np=class extends mi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new pn(Xa,qa,e,n);r.layers=this.layers,this.add(r);let s=new pn(Xa,qa,e,n);s.layers=this.layers,this.add(s);let o=new pn(Xa,qa,e,n);o.layers=this.layers,this.add(o);let a=new pn(Xa,qa,e,n);a.layers=this.layers,this.add(a);let l=new pn(Xa,qa,e,n);l.layers=this.layers,this.add(l);let c=new pn(Xa,qa,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},lu=class extends Fn{constructor(e=[],n=Ao,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ip=class extends ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lu(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qa(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Qi});s.uniforms.tEquirect.value=n;let o=new Qn(r,s),a=n.minFilter;return n.minFilter===Cs&&(n.minFilter=Jn),new np(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},So=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},XP={type:"move"},el=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new So,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new So,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new So,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let y=n.getJointPose(v,i),d=this._getHandJoint(c,v);y!==null&&(d.matrix.fromArray(y.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=y.radius),d.visible=y!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new So;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var cu=class extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var rp=class extends Fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Nn,u=Nn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ay=new z,qP=new z,YP=new Ve,qi=class{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Ay.subVectors(i,n).cross(qP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Ay),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||YP.getNormalMatrix(e),r=this.coplanarPoint(Ay).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vo=new Ja,jP=new Je(.5,.5),Hd=new z,uu=class{constructor(e=new qi,n=new qi,i=new qi,r=new qi,s=new qi,o=new qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],v=s[9],y=s[10],d=s[11],m=s[12],x=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,p-u,d-g,E-m).normalize(),r[1].setComponents(c+o,p+u,d+g,E+m).normalize(),r[2].setComponents(c+a,p+f,d+v,E+x).normalize(),r[3].setComponents(c-a,p-f,d-v,E-x).normalize(),i)r[4].setComponents(l,h,y,S).normalize(),r[5].setComponents(c-l,p-h,d-y,E-S).normalize();else if(r[4].setComponents(c-l,p-h,d-y,E-S).normalize(),n===Ii)r[5].setComponents(c+l,p+h,d+y,E+S).normalize();else if(n===eu)r[5].setComponents(l,h,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vo)}intersectsSprite(e){vo.center.set(0,0,0);let n=jP.distanceTo(e.center);return vo.radius=.7071067811865476+n,vo.applyMatrix4(e.matrixWorld),this.intersectsSphere(vo)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Hd.x=r.normal.x>0?e.max.x:e.min.x,Hd.y=r.normal.y>0?e.max.y:e.min.y,Hd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fu=class extends Fn{constructor(e,n,i=Rs,r,s,o,a=Nn,l=Nn,c,u=ja,f=1){if(u!==ja&&u!==il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Za(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},hu=class extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var sp=class t extends Ki{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};let s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Zn(s,3)),this.setAttribute("normal",new Zn(s.slice(),3)),this.setAttribute("uv",new Zn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){let x=new z,S=new z,E=new z;for(let M=0;M<n.length;M+=3)p(n[M+0],x),p(n[M+1],S),p(n[M+2],E),l(x,S,E,m)}function l(m,x,S,E){let M=E+1,A=[];for(let R=0;R<=M;R++){A[R]=[];let w=m.clone().lerp(S,R/M),_=x.clone().lerp(S,R/M),P=M-R;for(let L=0;L<=P;L++)L===0&&R===M?A[R][L]=w:A[R][L]=w.clone().lerp(_,L/P)}for(let R=0;R<M;R++)for(let w=0;w<2*(M-R)-1;w++){let _=Math.floor(w/2);w%2===0?(h(A[R][_+1]),h(A[R+1][_]),h(A[R][_])):(h(A[R][_+1]),h(A[R+1][_+1]),h(A[R+1][_]))}}function c(m){let x=new z;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(m),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){let m=new z;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];let S=y(m)/2/Math.PI+.5,E=d(m)/Math.PI+.5;o.push(S,1-E)}g(),f()}function f(){for(let m=0;m<o.length;m+=6){let x=o[m+0],S=o[m+2],E=o[m+4],M=Math.max(x,S,E),A=Math.min(x,S,E);M>.9&&A<.1&&(x<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),E<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function p(m,x){let S=m*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){let m=new z,x=new z,S=new z,E=new z,M=new Je,A=new Je,R=new Je;for(let w=0,_=0;w<s.length;w+=9,_+=6){m.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),M.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),E.copy(m).add(x).add(S).divideScalar(3);let P=y(E);v(M,_+0,m,P),v(A,_+2,x,P),v(R,_+4,S,P)}}function v(m,x,S,E){E<0&&m.x===1&&(o[x]=m.x-1),S.x===0&&S.z===0&&(o[x]=E/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.details)}};var du=class t extends sp{constructor(e=1,n=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}};var pu=class t extends Ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],v=[],y=[];for(let d=0;d<u;d++){let m=d*h-o;for(let x=0;x<c;x++){let S=x*f-s;g.push(S,-m,0),v.push(0,0,1),y.push(x/a),y.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){let x=m+c*d,S=m+c*(d+1),E=m+1+c*(d+1),M=m+1+c*d;p.push(x,S,M),p.push(S,E,M)}this.setIndex(p),this.setAttribute("position",new Zn(g,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var op=class extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ap=class extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function $P(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Eo=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lp=class extends Eo{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cy,endingEnd:Cy}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ry:s=e,a=2*n-i;break;case Py:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ry:o=e,l=2*i-n;break;case Py:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),v=g*g,y=v*g,d=-h*y+2*h*v-h*g,m=(1+h)*y+(-1.5-2*h)*v+(-.5+h)*g+1,x=(-1-p)*y+(1.5+p)*v+.5*g,S=p*y-p*v;for(let E=0;E!==a;++E)s[E]=d*o[u+E]+m*o[c+E]+x*o[l+E]+S*o[f+E];return s}},cp=class extends Eo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},up=class extends Eo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wd(n,this.TimeBufferType),this.values=Wd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Wd(e.times,Array),values:Wd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new up(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Jc:n=this.InterpolantFactoryMethodDiscrete;break;case Kd:n=this.InterpolantFactoryMethodLinear;break;case Xd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jc;case this.InterpolantFactoryMethodLinear:return Kd;case this.InterpolantFactoryMethodSmooth:return Xd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&$P(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Xd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){let v=n[f+g];if(v!==n[h+g]||v!==n[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let p=0;p!==i;++p)n[h+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Kd;var Es=class extends ei{constructor(e,n,i){super(e,n,i)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Jc;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var fp=class extends ei{constructor(e,n,i,r){super(e,n,i,r)}};fp.prototype.ValueTypeName="color";var hp=class extends ei{constructor(e,n,i,r){super(e,n,i,r)}};hp.prototype.ValueTypeName="number";var dp=class extends Eo{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)Rr.slerpFlat(s,0,o,c-a,o,c,l);return s}},mu=class extends ei{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}};mu.prototype.ValueTypeName="quaternion";mu.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends ei{constructor(e,n,i){super(e,n,i)}};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Jc;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var pp=class extends ei{constructor(e,n,i,r){super(e,n,i,r)}};pp.prototype.ValueTypeName="vector";var mp=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},PE=new mp,gp=class{constructor(e){this.manager=e!==void 0?e:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gp.DEFAULT_MATERIAL_NAME="__DEFAULT";var xp=class extends au{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var yp=class extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};var Qy="\\[\\]\\.:\\/",KP=new RegExp("["+Qy+"]","g"),ev="[^"+Qy+"]",ZP="[^"+Qy.replace("\\.","")+"]",JP=/((?:WC+[\/:])*)/.source.replace("WC",ev),QP=/(WCOD+)?/.source.replace("WCOD",ZP),eI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ev),tI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ev),nI=new RegExp("^"+JP+QP+eI+tI+"$"),iI=["material","materials","bones","map"],Ly=class{constructor(e,n,i){let r=i||yt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},yt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KP,"")}static parseTrackName(e){let n=nI.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);iI.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Ly;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iq=new Float32Array(1);function tv(t,e,n,i){let r=rI(i);switch(n){case Xy:return t*e;case Yy:return t*e/r.components*r.byteLength;case Lp:return t*e/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case Fp:return t*e*2/r.components*r.byteLength;case qy:return t*e*3/r.components*r.byteLength;case gi:return t*e*4/r.components*r.byteLength;case Up:return t*e*4/r.components*r.byteLength;case vu:case _u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kp:case Vp:return Math.max(t,16)*Math.max(e,8)/4;case Op:case Bp:return Math.max(t,8)*Math.max(e,8)/2;case zp:case Gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $p:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case em:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case tm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case im:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rm:case sm:case om:return Math.ceil(t/4)*Math.ceil(e/4)*16;case am:case lm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cm:case um:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rI(t){switch(t){case er:case zy:return{byteLength:1,components:1};case tl:case Gy:case Ro:return{byteLength:2,components:1};case Ip:case Dp:return{byteLength:2,components:4};case Rs:case Pp:case tr:return{byteLength:4,components:1};case Hy:case Wy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sI(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var oI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_I=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,MI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,II=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UI="gl_FragColor = linearToOutputTexel( gl_FragColor );",OI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VI=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$I=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KI=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZI=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JI=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_D=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ED=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ID=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ND=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$D=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ML=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:oI,alphahash_pars_fragment:aI,alphamap_fragment:lI,alphamap_pars_fragment:cI,alphatest_fragment:uI,alphatest_pars_fragment:fI,aomap_fragment:hI,aomap_pars_fragment:dI,batching_pars_vertex:pI,batching_vertex:mI,begin_vertex:gI,beginnormal_vertex:xI,bsdfs:yI,iridescence_fragment:vI,bumpmap_pars_fragment:_I,clipping_planes_fragment:SI,clipping_planes_pars_fragment:MI,clipping_planes_pars_vertex:bI,clipping_planes_vertex:wI,color_fragment:TI,color_pars_fragment:EI,color_pars_vertex:AI,color_vertex:CI,common:RI,cube_uv_reflection_fragment:PI,defaultnormal_vertex:II,displacementmap_pars_vertex:DI,displacementmap_vertex:LI,emissivemap_fragment:NI,emissivemap_pars_fragment:FI,colorspace_fragment:UI,colorspace_pars_fragment:OI,envmap_fragment:kI,envmap_common_pars_fragment:BI,envmap_pars_fragment:VI,envmap_pars_vertex:zI,envmap_physical_pars_fragment:JI,envmap_vertex:GI,fog_vertex:HI,fog_pars_vertex:WI,fog_fragment:XI,fog_pars_fragment:qI,gradientmap_pars_fragment:YI,lightmap_pars_fragment:jI,lights_lambert_fragment:$I,lights_lambert_pars_fragment:KI,lights_pars_begin:ZI,lights_toon_fragment:QI,lights_toon_pars_fragment:eD,lights_phong_fragment:tD,lights_phong_pars_fragment:nD,lights_physical_fragment:iD,lights_physical_pars_fragment:rD,lights_fragment_begin:sD,lights_fragment_maps:oD,lights_fragment_end:aD,logdepthbuf_fragment:lD,logdepthbuf_pars_fragment:cD,logdepthbuf_pars_vertex:uD,logdepthbuf_vertex:fD,map_fragment:hD,map_pars_fragment:dD,map_particle_fragment:pD,map_particle_pars_fragment:mD,metalnessmap_fragment:gD,metalnessmap_pars_fragment:xD,morphinstance_vertex:yD,morphcolor_vertex:vD,morphnormal_vertex:_D,morphtarget_pars_vertex:SD,morphtarget_vertex:MD,normal_fragment_begin:bD,normal_fragment_maps:wD,normal_pars_fragment:TD,normal_pars_vertex:ED,normal_vertex:AD,normalmap_pars_fragment:CD,clearcoat_normal_fragment_begin:RD,clearcoat_normal_fragment_maps:PD,clearcoat_pars_fragment:ID,iridescence_pars_fragment:DD,opaque_fragment:LD,packing:ND,premultiplied_alpha_fragment:FD,project_vertex:UD,dithering_fragment:OD,dithering_pars_fragment:kD,roughnessmap_fragment:BD,roughnessmap_pars_fragment:VD,shadowmap_pars_fragment:zD,shadowmap_pars_vertex:GD,shadowmap_vertex:HD,shadowmask_pars_fragment:WD,skinbase_vertex:XD,skinning_pars_vertex:qD,skinning_vertex:YD,skinnormal_vertex:jD,specularmap_fragment:$D,specularmap_pars_fragment:KD,tonemapping_fragment:ZD,tonemapping_pars_fragment:JD,transmission_fragment:QD,transmission_pars_fragment:eL,uv_pars_fragment:tL,uv_pars_vertex:nL,uv_vertex:iL,worldpos_vertex:rL,background_vert:sL,background_frag:oL,backgroundCube_vert:aL,backgroundCube_frag:lL,cube_vert:cL,cube_frag:uL,depth_vert:fL,depth_frag:hL,distanceRGBA_vert:dL,distanceRGBA_frag:pL,equirect_vert:mL,equirect_frag:gL,linedashed_vert:xL,linedashed_frag:yL,meshbasic_vert:vL,meshbasic_frag:_L,meshlambert_vert:SL,meshlambert_frag:ML,meshmatcap_vert:bL,meshmatcap_frag:wL,meshnormal_vert:TL,meshnormal_frag:EL,meshphong_vert:AL,meshphong_frag:CL,meshphysical_vert:RL,meshphysical_frag:PL,meshtoon_vert:IL,meshtoon_frag:DL,points_vert:LL,points_frag:NL,shadow_vert:FL,shadow_frag:UL,sprite_vert:OL,sprite_frag:kL},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},nr={basic:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:mn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:mn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:mn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:mn([ae.points,ae.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:mn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:mn([ae.common,ae.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:mn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:mn([ae.sprite,ae.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:mn([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:mn([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};nr.physical={uniforms:mn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var fm={r:0,b:0,g:0},Io=new $i,BL=new jt;function VL(t,e,n,i,r,s,o){let a=new je(0),l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function v(x){let S=!1,E=g(x);E===null?d(a,l):E&&E.isColor&&(d(E,1),S=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,S){let E=g(S);E&&(E.isCubeTexture||E.mapping===xu)?(u===void 0&&(u=new Qn(new Qa(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Po(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Io.copy(S.backgroundRotation),Io.x*=-1,Io.y*=-1,Io.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Io.y*=-1,Io.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BL.makeRotationFromEuler(Io)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,(f!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qn(new pu(2,2),new Un({name:"BackgroundMaterial",uniforms:Po(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,S){x.getRGB(fm,Jy(t)),i.buffers.color.setClear(fm.r,fm.g,fm.b,S,o)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(a,l)},render:v,addToRenderList:y,dispose:m}}function zL(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(_,P,L,B,H){let X=!1,k=f(B,L,P);s!==k&&(s=k,c(s.object)),X=p(_,B,L,H),X&&g(_,B,L,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(_,P,L,B),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,P,L){let B=L.wireframe===!0,H=i[_.id];H===void 0&&(H={},i[_.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let k=X[B];return k===void 0&&(k=h(l()),X[B]=k),k}function h(_){let P=[],L=[],B=[];for(let H=0;H<n;H++)P[H]=0,L[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:B,object:_,attributes:{},index:null}}function p(_,P,L,B){let H=s.attributes,X=P.attributes,k=0,ne=L.getAttributes();for(let O in ne)if(ne[O].location>=0){let Q=H[O],ge=X[O];if(ge===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),Q===void 0||Q.attribute!==ge||ge&&Q.data!==ge.data)return!0;k++}return s.attributesNum!==k||s.index!==B}function g(_,P,L,B){let H={},X=P.attributes,k=0,ne=L.getAttributes();for(let O in ne)if(ne[O].location>=0){let Q=X[O];Q===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));let ge={};ge.attribute=Q,Q&&Q.data&&(ge.data=Q.data),H[O]=ge,k++}s.attributes=H,s.attributesNum=k,s.index=B}function v(){let _=s.newAttributes;for(let P=0,L=_.length;P<L;P++)_[P]=0}function y(_){d(_,0)}function d(_,P){let L=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;L[_]=1,B[_]===0&&(t.enableVertexAttribArray(_),B[_]=1),H[_]!==P&&(t.vertexAttribDivisor(_,P),H[_]=P)}function m(){let _=s.newAttributes,P=s.enabledAttributes;for(let L=0,B=P.length;L<B;L++)P[L]!==_[L]&&(t.disableVertexAttribArray(L),P[L]=0)}function x(_,P,L,B,H,X,k){k===!0?t.vertexAttribIPointer(_,P,L,H,X):t.vertexAttribPointer(_,P,L,B,H,X)}function S(_,P,L,B){v();let H=B.attributes,X=L.getAttributes(),k=P.defaultAttributeValues;for(let ne in X){let O=X[ne];if(O.location>=0){let Z=H[ne];if(Z===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(Z=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(Z=_.instanceColor)),Z!==void 0){let Q=Z.normalized,ge=Z.itemSize,Ne=e.get(Z);if(Ne===void 0)continue;let Qe=Ne.buffer,He=Ne.type,Ke=Ne.bytesPerElement,q=He===t.INT||He===t.UNSIGNED_INT||Z.gpuType===Pp;if(Z.isInterleavedBufferAttribute){let $=Z.data,de=$.stride,Fe=Z.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)d(O.location+Se,$.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<O.locationSize;Se++)y(O.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Se=0;Se<O.locationSize;Se++)x(O.location+Se,ge/O.locationSize,He,Q,de*Ke,(Fe+ge/O.locationSize*Se)*Ke,q)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)d(O.location+$,Z.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<O.locationSize;$++)y(O.location+$);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let $=0;$<O.locationSize;$++)x(O.location+$,ge/O.locationSize,He,Q,ge*Ke,ge/O.locationSize*$*Ke,q)}}else if(k!==void 0){let Q=k[ne];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(O.location,Q);break;case 3:t.vertexAttrib3fv(O.location,Q);break;case 4:t.vertexAttrib4fv(O.location,Q);break;default:t.vertexAttrib1fv(O.location,Q)}}}}m()}function E(){R();for(let _ in i){let P=i[_];for(let L in P){let B=P[L];for(let H in B)u(B[H].object),delete B[H];delete P[L]}delete i[_]}}function M(_){if(i[_.id]===void 0)return;let P=i[_.id];for(let L in P){let B=P[L];for(let H in B)u(B[H].object),delete B[H];delete P[L]}delete i[_.id]}function A(_){for(let P in i){let L=i[P];if(L[_.id]===void 0)continue;let B=L[_.id];for(let H in B)u(B[H].object),delete B[H];delete L[_.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:y,disableUnusedAttributes:m}}function GL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*h[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==gi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==er&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==tr&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,M=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:y,maxAttributes:d,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:E,maxSamples:M}}function WL(t){let e=this,n=null,i=0,r=!1,s=!1,o=new qi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,v=f.clipIntersection,y=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!y)s?u(null):c();else{let m=s?0:i,x=m*4,S=d.clippingState||null;l.value=S,S=u(g,h,x,p);for(let E=0;E!==x;++E)S[E]=n[E];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){let v=f!==null?f.length:0,y=null;if(v!==0){if(y=l.value,g!==!0||y===null){let d=p+v*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<d)&&(y=new Float32Array(d));for(let x=0,S=p;x!==v;++x,S+=4)o.copy(f[x]).applyMatrix4(m,a),o.normal.toArray(y,S),y[S+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function XL(t){let e=new WeakMap;function n(o,a){return a===Ap?o.mapping=Ao:a===Cp&&(o.mapping=Co),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ap||a===Cp)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ip(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ps=4,IE=[.125,.215,.35,.446,.526,.582],Lo=20,qL=256,wu=new xp,DE=new je,nv=null,iv=0,rv=0,sv=!1,YL=new z,dm=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:o=256,position:a=YL}=s;nv=this._renderer.getRenderTarget(),iv=this._renderer.getActiveCubeFace(),rv=this._renderer.getActiveMipmapLevel(),sv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=FE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=NE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nv,iv,rv),this._renderer.xr.enabled=sv,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ao||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nv=this._renderer.getRenderTarget(),iv=this._renderer.getActiveCubeFace(),rv=this._renderer.getActiveMipmapLevel(),sv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ro,format:gi,colorSpace:wo,depthBuffer:!1},r=LE(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=LE(e,n,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jL(s)),this._blurMaterial=KL(s,e,n),this._ggxMaterial=$L(s,e,n)}return r}_compileMaterial(e){let n=new Qn(new Ki,e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r,s){let l=new pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(DE),f.toneMapping=Pr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new Qa,new ru({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,y=v.material,d=!1,m=e.background;m?m.isColor&&(y.color.copy(m),e.background=null,d=!0):(y.color.copy(DE),d=!0);for(let x=0;x<6;x++){let S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));let E=this._cubeSize;rl(r,S*E,x>2?E:0,E,E),f.setRenderTarget(r),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Ao||e.mapping===Co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=FE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=NE());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=.05+c*.95,p=f*h,{_lodMax:g}=this,v=this._sizeLods[i],y=3*v*(i>g-Ps?i-g+Ps:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,rl(s,y,d,3*v,2*v),r.setRenderTarget(s),r.render(a,wu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,rl(e,y,d,3*v,2*v),r.setRenderTarget(e),r.render(a,wu)}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=c;let h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lo-1),v=s/g,y=isFinite(s)?1+Math.floor(u*v):Lo;y>Lo&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Lo}`);let d=[],m=0;for(let A=0;A<Lo;++A){let R=A/v,w=Math.exp(-R*R/2);d.push(w),A===0?m+=w:A<y&&(m+=2*w)}for(let A=0;A<d.length;A++)d[A]=d[A]/m;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;let S=this._sizeLods[r],E=3*S*(r>x-Ps?r-x+Ps:0),M=4*(this._cubeSize-S);rl(n,E,M,3*S,2*S),l.setRenderTarget(n),l.render(f,wu)}};function jL(t){let e=[],n=[],i=[],r=t,s=t-Ps+1+IE.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ps?l=IE[o-t+Ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,y=2,d=1,m=new Float32Array(v*g*p),x=new Float32Array(y*g*p),S=new Float32Array(d*g*p);for(let M=0;M<p;M++){let A=M%3*2/3-1,R=M>2?0:-1,w=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];m.set(w,v*g*M),x.set(h,y*g*M);let _=[M,M,M,M,M,M];S.set(_,d*g*M)}let E=new Ki;E.setAttribute("position",new Kn(m,v)),E.setAttribute("uv",new Kn(x,y)),E.setAttribute("faceIndex",new Kn(S,d)),i.push(new Qn(E,null)),r>Ps&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function LE(t,e,n){let i=new ji(t,e,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $L(t,e,n){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mm(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function KL(t,e,n){let i=new Float32Array(Lo),r=new z(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function NE(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function FE(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function mm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ap||l===Cp,u=l===Ao||l===Co;if(c||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function JL(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ka("WebGLRenderer: "+i+" extension not supported."),r}}}function QL(t,e,n,i){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let m=p.array;v=p.version;for(let x=0,S=m.length;x<S;x+=3){let E=m[x+0],M=m[x+1],A=m[x+2];h.push(E,M,M,A,A,E)}}else if(g!==void 0){let m=g.array;v=g.version;for(let x=0,S=m.length/3-1;x<S;x+=3){let E=x+0,M=x+1,A=x+2;h.push(E,M,M,A,A,E)}}else return;let y=new(Ky(h)?ou:su)(h,1);y.version=v;let d=s.get(f);d&&e.remove(d),s.set(f,y)}function u(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eN(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let y=0;for(let d=0;d<g;d++)y+=p[d];n.update(y,i,1)}function f(h,p,g,v){if(g===0)return;let y=e.get("WEBGL_multi_draw");if(y===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{y.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m]*v[m];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function tN(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function nN(t,e,n){let i=new WeakMap,r=new Ut;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let w=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let S=a.attributes.position.count*x,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let M=new Float32Array(S*E*4*f),A=new nu(M,S,E,f);A.type=tr,A.needsUpdate=!0;let R=x*4;for(let _=0;_<f;_++){let P=y[_],L=d[_],B=m[_],H=S*E*4*_;for(let X=0;X<P.count;X++){let k=X*R;p===!0&&(r.fromBufferAttribute(P,X),M[H+k+0]=r.x,M[H+k+1]=r.y,M[H+k+2]=r.z,M[H+k+3]=0),g===!0&&(r.fromBufferAttribute(L,X),M[H+k+4]=r.x,M[H+k+5]=r.y,M[H+k+6]=r.z,M[H+k+7]=0),v===!0&&(r.fromBufferAttribute(B,X),M[H+k+8]=r.x,M[H+k+9]=r.y,M[H+k+10]=r.z,M[H+k+11]=B.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new Je(S,E)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function iN(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var eA=new Fn,UE=new fu(1,1),tA=new nu,nA=new ep,iA=new lu,OE=[],kE=[],BE=new Float32Array(16),VE=new Float32Array(9),zE=new Float32Array(4);function ol(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=OE[r];if(s===void 0&&(s=new Float32Array(r),OE[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gm(t,e){let n=kE[e];n===void 0&&(n=new Int32Array(e),kE[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rN(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function oN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function aN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function lN(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;zE.set(i),t.uniformMatrix2fv(this.addr,!1,zE),Kt(n,i)}}function cN(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;VE.set(i),t.uniformMatrix3fv(this.addr,!1,VE),Kt(n,i)}}function uN(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,i))return;BE.set(i),t.uniformMatrix4fv(this.addr,!1,BE),Kt(n,i)}}function fN(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function dN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function pN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function mN(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function xN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function yN(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function vN(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(UE.compareFunction=jy,s=UE):s=eA,n.setTexture2D(e||s,r)}function _N(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nA,r)}function SN(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iA,r)}function MN(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tA,r)}function bN(t){switch(t){case 5126:return rN;case 35664:return sN;case 35665:return oN;case 35666:return aN;case 35674:return lN;case 35675:return cN;case 35676:return uN;case 5124:case 35670:return fN;case 35667:case 35671:return hN;case 35668:case 35672:return dN;case 35669:case 35673:return pN;case 5125:return mN;case 36294:return gN;case 36295:return xN;case 36296:return yN;case 35678:case 36198:case 36298:case 36306:case 35682:return vN;case 35679:case 36299:case 36307:return _N;case 35680:case 36300:case 36308:case 36293:return SN;case 36289:case 36303:case 36311:case 36292:return MN}}function wN(t,e){t.uniform1fv(this.addr,e)}function TN(t,e){let n=ol(e,this.size,2);t.uniform2fv(this.addr,n)}function EN(t,e){let n=ol(e,this.size,3);t.uniform3fv(this.addr,n)}function AN(t,e){let n=ol(e,this.size,4);t.uniform4fv(this.addr,n)}function CN(t,e){let n=ol(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function RN(t,e){let n=ol(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PN(t,e){let n=ol(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IN(t,e){t.uniform1iv(this.addr,e)}function DN(t,e){t.uniform2iv(this.addr,e)}function LN(t,e){t.uniform3iv(this.addr,e)}function NN(t,e){t.uniform4iv(this.addr,e)}function FN(t,e){t.uniform1uiv(this.addr,e)}function UN(t,e){t.uniform2uiv(this.addr,e)}function ON(t,e){t.uniform3uiv(this.addr,e)}function kN(t,e){t.uniform4uiv(this.addr,e)}function BN(t,e,n){let i=this.cache,r=e.length,s=gm(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||eA,s[o])}function VN(t,e,n){let i=this.cache,r=e.length,s=gm(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||nA,s[o])}function zN(t,e,n){let i=this.cache,r=e.length,s=gm(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||iA,s[o])}function GN(t,e,n){let i=this.cache,r=e.length,s=gm(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||tA,s[o])}function HN(t){switch(t){case 5126:return wN;case 35664:return TN;case 35665:return EN;case 35666:return AN;case 35674:return CN;case 35675:return RN;case 35676:return PN;case 5124:case 35670:return IN;case 35667:case 35671:return DN;case 35668:case 35672:return LN;case 35669:case 35673:return NN;case 5125:return FN;case 36294:return UN;case 36295:return ON;case 36296:return kN;case 35678:case 36198:case 36298:case 36306:case 35682:return BN;case 35679:case 36299:case 36307:return VN;case 35680:case 36300:case 36308:case 36293:return zN;case 36289:case 36303:case 36311:case 36292:return GN}}var av=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bN(n.type)}},lv=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HN(n.type)}},cv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},ov=/(\w+)(\])?(\[|\.)?/g;function GE(t,e){t.seq.push(e),t.map[e.id]=e}function WN(t,e,n){let i=t.name,r=i.length;for(ov.lastIndex=0;;){let s=ov.exec(i),o=ov.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){GE(n,c===void 0?new av(a,t,e):new lv(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new cv(a),GE(n,f)),n=f}}}var sl=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);WN(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function HE(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var XN=37297,qN=0;function YN(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var WE=new Ve;function jN(t){it._getMatrix(WE,it.workingColorSpace,t);let e=`mat3( ${WE.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Qc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function XE(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+YN(t.getShaderSource(e),a)}else return s}function $N(t,e){let n=jN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KN(t,e){let n;switch(e){case aE:n="Linear";break;case lE:n="Reinhard";break;case cE:n="Cineon";break;case uE:n="ACESFilmic";break;case hE:n="AgX";break;case dE:n="Neutral";break;case fE:n="Custom";break;default:Le("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var hm=new z;function ZN(){it.getLuminanceCoefficients(hm);let t=hm.x.toFixed(4),e=hm.y.toFixed(4),n=hm.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tu).join(`
`)}function QN(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eF(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Tu(t){return t!==""}function qE(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function YE(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tF=/^[ \t]*#include +<([\w\d./]+)>/gm;function uv(t){return t.replace(tF,iF)}var nF=new Map;function iF(t,e){let n=Ge[e];if(n===void 0){let i=nF.get(e);if(i!==void 0)n=Ge[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uv(n)}var rF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jE(t){return t.replace(rF,sF)}function sF(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $E(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oF(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===VT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function aF(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ao:case Co:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lF(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function cF(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case By:e="ENVMAP_BLENDING_MULTIPLY";break;case sE:e="ENVMAP_BLENDING_MIX";break;case oE:e="ENVMAP_BLENDING_ADD";break}return e}function uF(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fF(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=oF(n),c=aF(n),u=lF(n),f=cF(n),h=uF(n),p=JN(n),g=QN(s),v=r.createProgram(),y,d,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Tu).join(`
`),y.length>0&&(y+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Tu).join(`
`),d.length>0&&(d+=`
`)):(y=[$E(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tu).join(`
`),d=[$E(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pr?"#define TONE_MAPPING":"",n.toneMapping!==Pr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Pr?KN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,$N("linearToOutputTexel",n.outputColorSpace),ZN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tu).join(`
`)),o=uv(o),o=qE(o,n),o=YE(o,n),a=uv(a),a=qE(a,n),a=YE(a,n),o=jE(o),a=jE(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,d=["#define varying in",n.glslVersion===$y?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$y?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=m+y+o,S=m+d+a,E=HE(r,r.VERTEX_SHADER,x),M=HE(r,r.FRAGMENT_SHADER,S);r.attachShader(v,E),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(P){if(t.debug.checkShaderErrors){let L=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(E)||"",H=r.getShaderInfoLog(M)||"",X=L.trim(),k=B.trim(),ne=H.trim(),O=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,M);else{let Q=XE(r,E,"vertex"),ge=XE(r,M,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+Q+`
`+ge)}else X!==""?Le("WebGLProgram: Program Info Log:",X):(k===""||ne==="")&&(Z=!1);Z&&(P.diagnostics={runnable:O,programLog:X,vertexShader:{log:k,prefix:y},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(E),r.deleteShader(M),R=new sl(r,v),w=eF(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,XN)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qN++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=M,this}var hF=0,fv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new hv(e),n.set(e,i)),i}},hv=class{constructor(e){this.id=hF++,this.code=e,this.usedTimes=0}};function dF(t,e,n,i,r,s,o){let a=new iu,l=new fv,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function y(w,_,P,L,B){let H=L.fog,X=B.geometry,k=w.isMeshStandardMaterial?L.environment:null,ne=(w.isMeshStandardMaterial?n:e).get(w.envMap||k),O=ne&&ne.mapping===xu?ne.image.height:null,Z=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&Le("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=Q!==void 0?Q.length:0,Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let Qe,He,Ke,q;if(Z){let ct=nr[Z];Qe=ct.vertexShader,He=ct.fragmentShader}else Qe=w.vertexShader,He=w.fragmentShader,l.update(w),Ke=l.getVertexShaderID(w),q=l.getFragmentShaderID(w);let $=t.getRenderTarget(),de=t.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Se=B.isBatchedMesh===!0,Ue=!!w.map,Mt=!!w.matcap,ke=!!ne,et=!!w.aoMap,I=!!w.lightMap,We=!!w.bumpMap,Xe=!!w.normalMap,st=!!w.displacementMap,ve=!!w.emissiveMap,bt=!!w.metalnessMap,we=!!w.roughnessMap,Be=w.anisotropy>0,C=w.clearcoat>0,b=w.dispersion>0,U=w.iridescence>0,Y=w.sheen>0,K=w.transmission>0,W=Be&&!!w.anisotropyMap,Me=C&&!!w.clearcoatMap,le=C&&!!w.clearcoatNormalMap,Te=C&&!!w.clearcoatRoughnessMap,_e=U&&!!w.iridescenceMap,J=U&&!!w.iridescenceThicknessMap,re=Y&&!!w.sheenColorMap,Re=Y&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,he=!!w.specularColorMap,Ie=!!w.specularIntensityMap,D=K&&!!w.transmissionMap,ce=K&&!!w.thicknessMap,se=!!w.gradientMap,oe=!!w.alphaMap,te=w.alphaTest>0,j=!!w.alphaHash,xe=!!w.extensions,Oe=Pr;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Oe=t.toneMapping);let pt={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:Qe,fragmentShader:He,defines:w.defines,customVertexShaderID:Ke,customFragmentShaderID:q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Se,batchingColor:Se&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:wo,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:Mt,envMap:ke,envMapMode:ke&&ne.mapping,envMapCubeUVHeight:O,aoMap:et,lightMap:I,bumpMap:We,normalMap:Xe,displacementMap:h&&st,emissiveMap:ve,normalMapObjectSpace:Xe&&w.normalMapType===yE,normalMapTangentSpace:Xe&&w.normalMapType===xE,metalnessMap:bt,roughnessMap:we,anisotropy:Be,anisotropyMap:W,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:Te,dispersion:b,iridescence:U,iridescenceMap:_e,iridescenceThicknessMap:J,sheen:Y,sheenColorMap:re,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:he,specularIntensityMap:Ie,transmission:K,transmissionMap:D,thicknessMap:ce,gradientMap:se,opaque:w.transparent===!1&&w.blending===Mo&&w.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:j,combine:w.combine,mapUv:Ue&&v(w.map.channel),aoMapUv:et&&v(w.aoMap.channel),lightMapUv:I&&v(w.lightMap.channel),bumpMapUv:We&&v(w.bumpMap.channel),normalMapUv:Xe&&v(w.normalMap.channel),displacementMapUv:st&&v(w.displacementMap.channel),emissiveMapUv:ve&&v(w.emissiveMap.channel),metalnessMapUv:bt&&v(w.metalnessMap.channel),roughnessMapUv:we&&v(w.roughnessMap.channel),anisotropyMapUv:W&&v(w.anisotropyMap.channel),clearcoatMapUv:Me&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(w.sheenRoughnessMap.channel),specularMapUv:Ae&&v(w.specularMap.channel),specularColorMapUv:he&&v(w.specularColorMap.channel),specularIntensityMapUv:Ie&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:ce&&v(w.thicknessMap.channel),alphaMapUv:oe&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xe||Be),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Ue||oe),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&it.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:ve&&w.emissiveMap.isVideoTexture===!0&&it.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&w.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function d(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)_.push(P),_.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(m(_,w),x(_,w),_.push(t.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function m(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function x(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){let _=g[w.type],P;if(_){let L=nr[_];P=RE.clone(L.uniforms)}else P=w.uniforms;return P}function E(w,_){let P;for(let L=0,B=u.length;L<B;L++){let H=u[L];if(H.cacheKey===_){P=H,++P.usedTimes;break}}return P===void 0&&(P=new fF(t,_,w,s),u.push(P)),P}function M(w){if(--w.usedTimes===0){let _=u.indexOf(w);u[_]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function R(){l.dispose()}return{getParameters:y,getProgramCacheKey:d,getUniforms:S,acquireProgram:E,releaseProgram:M,releaseShaderCache:A,programs:u,dispose:R}}function pF(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function KE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ZE(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,v,y){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:y},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=y),e++,d}function a(f,h,p,g,v,y){let d=o(f,h,p,g,v,y);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,v,y){let d=o(f,h,p,g,v,y);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||mF),i.length>1&&i.sort(h||KE),r.length>1&&r.sort(h||KE)}function u(){for(let f=e,h=t.length;f<h;f++){let p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gF(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new ZE,t.set(i,[o])):r>=s.length?(o=new ZE,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function xF(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new je};break;case"SpotLight":n={position:new z,direction:new z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function yF(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var vF=0;function _F(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SF(t){let e=new xF,n=yF(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let r=new z,s=new jt,o=new jt;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,y=0,d=0,m=0,x=0,S=0,E=0,M=0,A=0;c.sort(_F);for(let w=0,_=c.length;w<_;w++){let P=c[w],L=P.color,B=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*B,f+=L.g*B,h+=L.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],B);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,O=n.get(P);O.shadowIntensity=ne.intensity,O.shadowBias=ne.bias,O.shadowNormalBias=ne.normalBias,O.shadowRadius=ne.radius,O.shadowMapSize=ne.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=k,p++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(L).multiplyScalar(B),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[v]=k;let ne=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,ne.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=ne.matrix,P.castShadow){let O=n.get(P);O.shadowIntensity=ne.intensity,O.shadowBias=ne.bias,O.shadowNormalBias=ne.normalBias,O.shadowRadius=ne.radius,O.shadowMapSize=ne.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=X,S++}v++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(L).multiplyScalar(B),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=k,y++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let ne=P.shadow,O=n.get(P);O.shadowIntensity=ne.intensity,O.shadowBias=ne.bias,O.shadowNormalBias=ne.normalBias,O.shadowRadius=ne.radius,O.shadowMapSize=ne.mapSize,O.shadowCameraNear=ne.camera.near,O.shadowCameraFar=ne.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=k,g++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[d]=k,d++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==d||R.numDirectionalShadows!==m||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==E||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+E-M,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=d,R.numDirectionalShadows=m,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=E,R.numLightProbes=A,i.version=vF++)}function l(c,u){let f=0,h=0,p=0,g=0,v=0,y=u.matrixWorldInverse;for(let d=0,m=c.length;d<m;d++){let x=c[d];if(x.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(y),f++}else if(x.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(y),p++}else if(x.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),o.identity(),s.copy(x.matrixWorld),s.premultiply(y),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(y),h++}else if(x.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(y),v++}}}return{setup:a,setupView:l,state:i}}function JE(t){let e=new SF(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MF(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new JE(t),e.set(r,[a])):s>=o.length?(a=new JE(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var bF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TF(t,e,n){let i=new uu,r=new Je,s=new Je,o=new Ut,a=new op({depthPacking:gE}),l=new ap,c={},u=n.maxTextureSize,f={[Ar]:bn,[bn]:Ar,[Ji]:Ji},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:bF,fragmentShader:wF}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ki;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Qn(g,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fy;let d=this.type;this.render=function(M,A,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;let w=t.getRenderTarget(),_=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),L=t.state;L.setBlending(Qi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=d!==Zi&&this.type===Zi,H=d===Zi&&this.type!==Zi;for(let X=0,k=M.length;X<k;X++){let ne=M[X],O=ne.shadow;if(O===void 0){Le("WebGLShadowMap:",ne,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let Z=O.getFrameExtents();if(r.multiply(Z),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,O.mapSize.y=s.y)),O.map===null||B===!0||H===!0){let ge=this.type!==Zi?{minFilter:Nn,magFilter:Nn}:{};O.map!==null&&O.map.dispose(),O.map=new ji(r.x,r.y,ge),O.map.texture.name=ne.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();let Q=O.getViewportCount();for(let ge=0;ge<Q;ge++){let Ne=O.getViewport(ge);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),L.viewport(o),O.updateMatrices(ne,ge),i=O.getFrustum(),S(A,R,O.camera,ne,this.type)}O.isPointLightShadow!==!0&&this.type===Zi&&m(O,R),O.needsUpdate=!1}d=this.type,y.needsUpdate=!1,t.setRenderTarget(w,_,P)};function m(M,A){let R=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ji(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(A,null,R,h,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(A,null,R,p,v,null)}function x(M,A,R,w){let _=null,P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)_=P;else if(_=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=_.uuid,B=A.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let X=H[B];X===void 0&&(X=_.clone(),H[B]=X,A.addEventListener("dispose",E)),_=X}if(_.visible=A.visible,_.wireframe=A.wireframe,w===Zi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let L=t.properties.get(_);L.light=R}return _}function S(M,A,R,w,_){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===Zi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let B=e.update(M),H=M.material;if(Array.isArray(H)){let X=B.groups;for(let k=0,ne=X.length;k<ne;k++){let O=X[k],Z=H[O.materialIndex];if(Z&&Z.visible){let Q=x(M,Z,w,_);M.onBeforeShadow(t,M,A,R,B,Q,O),t.renderBufferDirect(R,null,B,Q,M,O),M.onAfterShadow(t,M,A,R,B,Q,O)}}}else if(H.visible){let X=x(M,H,w,_);M.onBeforeShadow(t,M,A,R,B,X,null),t.renderBufferDirect(R,null,B,X,M,null),M.onAfterShadow(t,M,A,R,B,X,null)}}let L=M.children;for(let B=0,H=L.length;B<H;B++)S(L[B],A,R,w,_)}function E(M){M.target.removeEventListener("dispose",E);for(let R in c){let w=c[R],_=M.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}var EF={[_p]:Sp,[Mp]:Tp,[bp]:Ep,[bo]:wp,[Sp]:_p,[Tp]:Mp,[Ep]:bp,[wp]:bo};function AF(t,e){function n(){let D=!1,ce=new Ut,se=null,oe=new Ut(0,0,0,0);return{setMask:function(te){se!==te&&!D&&(t.colorMask(te,te,te,te),se=te)},setLocked:function(te){D=te},setClear:function(te,j,xe,Oe,pt){pt===!0&&(te*=Oe,j*=Oe,xe*=Oe),ce.set(te,j,xe,Oe),oe.equals(ce)===!1&&(t.clearColor(te,j,xe,Oe),oe.copy(ce))},reset:function(){D=!1,se=null,oe.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,se=null,oe=null,te=null;return{setReversed:function(j){if(ce!==j){let xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ce=j;let Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return ce},setTest:function(j){j?$(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(j){se!==j&&!D&&(t.depthMask(j),se=j)},setFunc:function(j){if(ce&&(j=EF[j]),oe!==j){switch(j){case _p:t.depthFunc(t.NEVER);break;case Sp:t.depthFunc(t.ALWAYS);break;case Mp:t.depthFunc(t.LESS);break;case bo:t.depthFunc(t.LEQUAL);break;case bp:t.depthFunc(t.EQUAL);break;case wp:t.depthFunc(t.GEQUAL);break;case Tp:t.depthFunc(t.GREATER);break;case Ep:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=j}},setLocked:function(j){D=j},setClear:function(j){te!==j&&(ce&&(j=1-j),t.clearDepth(j),te=j)},reset:function(){D=!1,se=null,oe=null,te=null,ce=!1}}}function r(){let D=!1,ce=null,se=null,oe=null,te=null,j=null,xe=null,Oe=null,pt=null;return{setTest:function(ct){D||(ct?$(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(ct){ce!==ct&&!D&&(t.stencilMask(ct),ce=ct)},setFunc:function(ct,Li,xi){(se!==ct||oe!==Li||te!==xi)&&(t.stencilFunc(ct,Li,xi),se=ct,oe=Li,te=xi)},setOp:function(ct,Li,xi){(j!==ct||xe!==Li||Oe!==xi)&&(t.stencilOp(ct,Li,xi),j=ct,xe=Li,Oe=xi)},setLocked:function(ct){D=ct},setClear:function(ct){pt!==ct&&(t.clearStencil(ct),pt=ct)},reset:function(){D=!1,ce=null,se=null,oe=null,te=null,j=null,xe=null,Oe=null,pt=null}}}let s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},h=new WeakMap,p=[],g=null,v=!1,y=null,d=null,m=null,x=null,S=null,E=null,M=null,A=new je(0,0,0),R=0,w=!1,_=null,P=null,L=null,B=null,H=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ne=0,O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=ne>=1):O.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=ne>=2);let Z=null,Q={},ge=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),Qe=new Ut().fromArray(ge),He=new Ut().fromArray(Ne);function Ke(D,ce,se,oe){let te=new Uint8Array(4),j=t.createTexture();t.bindTexture(D,j),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<se;xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(ce+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return j}let q={};q[t.TEXTURE_2D]=Ke(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(bo),We(!1),Xe(Ny),$(t.CULL_FACE),et(Qi);function $(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function de(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Fe(D,ce){return f[D]!==ce?(t.bindFramebuffer(D,ce),f[D]=ce,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Se(D,ce){let se=p,oe=!1;if(D){se=h.get(ce),se===void 0&&(se=[],h.set(ce,se));let te=D.textures;if(se.length!==te.length||se[0]!==t.COLOR_ATTACHMENT0){for(let j=0,xe=te.length;j<xe;j++)se[j]=t.COLOR_ATTACHMENT0+j;se.length=te.length,oe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,oe=!0);oe&&t.drawBuffers(se)}function Ue(D){return g!==D?(t.useProgram(D),g=D,!0):!1}let Mt={[ws]:t.FUNC_ADD,[GT]:t.FUNC_SUBTRACT,[HT]:t.FUNC_REVERSE_SUBTRACT};Mt[WT]=t.MIN,Mt[XT]=t.MAX;let ke={[qT]:t.ZERO,[YT]:t.ONE,[jT]:t.SRC_COLOR,[qd]:t.SRC_ALPHA,[eE]:t.SRC_ALPHA_SATURATE,[JT]:t.DST_COLOR,[KT]:t.DST_ALPHA,[$T]:t.ONE_MINUS_SRC_COLOR,[Yd]:t.ONE_MINUS_SRC_ALPHA,[QT]:t.ONE_MINUS_DST_COLOR,[ZT]:t.ONE_MINUS_DST_ALPHA,[tE]:t.CONSTANT_COLOR,[nE]:t.ONE_MINUS_CONSTANT_COLOR,[iE]:t.CONSTANT_ALPHA,[rE]:t.ONE_MINUS_CONSTANT_ALPHA};function et(D,ce,se,oe,te,j,xe,Oe,pt,ct){if(D===Qi){v===!0&&(de(t.BLEND),v=!1);return}if(v===!1&&($(t.BLEND),v=!0),D!==zT){if(D!==y||ct!==w){if((d!==ws||S!==ws)&&(t.blendEquation(t.FUNC_ADD),d=ws,S=ws),ct)switch(D){case Mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uy:t.blendFunc(t.ONE,t.ONE);break;case Oy:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ky:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uy:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Oy:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ky:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}m=null,x=null,E=null,M=null,A.set(0,0,0),R=0,y=D,w=ct}return}te=te||ce,j=j||se,xe=xe||oe,(ce!==d||te!==S)&&(t.blendEquationSeparate(Mt[ce],Mt[te]),d=ce,S=te),(se!==m||oe!==x||j!==E||xe!==M)&&(t.blendFuncSeparate(ke[se],ke[oe],ke[j],ke[xe]),m=se,x=oe,E=j,M=xe),(Oe.equals(A)===!1||pt!==R)&&(t.blendColor(Oe.r,Oe.g,Oe.b,pt),A.copy(Oe),R=pt),y=D,w=!1}function I(D,ce){D.side===Ji?de(t.CULL_FACE):$(t.CULL_FACE);let se=D.side===bn;ce&&(se=!se),We(se),D.blending===Mo&&D.transparent===!1?et(Qi):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let oe=D.stencilWrite;a.setTest(oe),oe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){_!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),_=D)}function Xe(D){D!==kT?($(t.CULL_FACE),D!==P&&(D===Ny?t.cullFace(t.BACK):D===BT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),P=D}function st(D){D!==L&&(k&&t.lineWidth(D),L=D)}function ve(D,ce,se){D?($(t.POLYGON_OFFSET_FILL),(B!==ce||H!==se)&&(t.polygonOffset(ce,se),B=ce,H=se)):de(t.POLYGON_OFFSET_FILL)}function bt(D){D?$(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function we(D){D===void 0&&(D=t.TEXTURE0+X-1),Z!==D&&(t.activeTexture(D),Z=D)}function Be(D,ce,se){se===void 0&&(Z===null?se=t.TEXTURE0+X-1:se=Z);let oe=Q[se];oe===void 0&&(oe={type:void 0,texture:void 0},Q[se]=oe),(oe.type!==D||oe.texture!==ce)&&(Z!==se&&(t.activeTexture(se),Z=se),t.bindTexture(D,ce||q[D]),oe.type=D,oe.texture=ce)}function C(){let D=Q[Z];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function Y(){try{t.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function K(){try{t.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function le(){try{t.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Te(){try{t.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function _e(){try{t.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function re(D){Qe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Qe.copy(D))}function Re(D){He.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Ae(D,ce){let se=c.get(ce);se===void 0&&(se=new WeakMap,c.set(ce,se));let oe=se.get(D);oe===void 0&&(oe=t.getUniformBlockIndex(ce,D.name),se.set(D,oe))}function he(D,ce){let oe=c.get(ce).get(D);l.get(ce)!==oe&&(t.uniformBlockBinding(ce,oe,D.__bindingPointIndex),l.set(ce,oe))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Z=null,Q={},f={},h=new WeakMap,p=[],g=null,v=!1,y=null,d=null,m=null,x=null,S=null,E=null,M=null,A=new je(0,0,0),R=0,w=!1,_=null,P=null,L=null,B=null,H=null,Qe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:de,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Ue,setBlending:et,setMaterial:I,setFlipSided:We,setCullFace:Xe,setLineWidth:st,setPolygonOffset:ve,setScissorTest:bt,activeTexture:we,bindTexture:Be,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:U,texImage2D:_e,texImage3D:J,updateUBOMapping:Ae,uniformBlockBinding:he,texStorage2D:le,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:Me,scissor:re,viewport:Re,reset:Ie}}function CF(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):tu("canvas")}function v(C,b,U){let Y=1,K=Be(C);if((K.width>U||K.height>U)&&(Y=U/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(Y*K.width),Me=Math.floor(Y*K.height);f===void 0&&(f=g(W,Me));let le=b?g(W,Me):f;return le.width=W,le.height=Me,le.getContext("2d").drawImage(C,0,0,W,Me),Le("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Me+")."),le}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function y(C){return C.generateMipmaps}function d(C){t.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,b,U,Y,K=!1){if(C!==null){if(t[C]!==void 0)return t[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=b;if(b===t.RED&&(U===t.FLOAT&&(W=t.R32F),U===t.HALF_FLOAT&&(W=t.R16F),U===t.UNSIGNED_BYTE&&(W=t.R8)),b===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.R8UI),U===t.UNSIGNED_SHORT&&(W=t.R16UI),U===t.UNSIGNED_INT&&(W=t.R32UI),U===t.BYTE&&(W=t.R8I),U===t.SHORT&&(W=t.R16I),U===t.INT&&(W=t.R32I)),b===t.RG&&(U===t.FLOAT&&(W=t.RG32F),U===t.HALF_FLOAT&&(W=t.RG16F),U===t.UNSIGNED_BYTE&&(W=t.RG8)),b===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RG8UI),U===t.UNSIGNED_SHORT&&(W=t.RG16UI),U===t.UNSIGNED_INT&&(W=t.RG32UI),U===t.BYTE&&(W=t.RG8I),U===t.SHORT&&(W=t.RG16I),U===t.INT&&(W=t.RG32I)),b===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGB8UI),U===t.UNSIGNED_SHORT&&(W=t.RGB16UI),U===t.UNSIGNED_INT&&(W=t.RGB32UI),U===t.BYTE&&(W=t.RGB8I),U===t.SHORT&&(W=t.RGB16I),U===t.INT&&(W=t.RGB32I)),b===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),U===t.UNSIGNED_INT&&(W=t.RGBA32UI),U===t.BYTE&&(W=t.RGBA8I),U===t.SHORT&&(W=t.RGBA16I),U===t.INT&&(W=t.RGBA32I)),b===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),b===t.RGBA){let Me=K?Qc:it.getTransfer(Y);U===t.FLOAT&&(W=t.RGBA32F),U===t.HALF_FLOAT&&(W=t.RGBA16F),U===t.UNSIGNED_BYTE&&(W=Me===lt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(C,b){let U;return C?b===null||b===Rs||b===nl?U=t.DEPTH24_STENCIL8:b===tr?U=t.DEPTH32F_STENCIL8:b===tl&&(U=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rs||b===nl?U=t.DEPTH_COMPONENT24:b===tr?U=t.DEPTH_COMPONENT32F:b===tl&&(U=t.DEPTH_COMPONENT16),U}function E(C,b){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==Jn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function M(C){let b=C.target;b.removeEventListener("dispose",M),R(b),b.isVideoTexture&&u.delete(b)}function A(C){let b=C.target;b.removeEventListener("dispose",A),_(b)}function R(C){let b=i.get(C);if(b.__webglInit===void 0)return;let U=C.source,Y=h.get(U);if(Y){let K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(C),Object.keys(Y).length===0&&h.delete(U)}i.remove(C)}function w(C){let b=i.get(C);t.deleteTexture(b.__webglTexture);let U=C.source,Y=h.get(U);delete Y[b.__cacheKey],o.memory.textures--}function _(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)t.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else t.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)t.deleteFramebuffer(b.__webglFramebuffer[Y]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let U=C.textures;for(let Y=0,K=U.length;Y<K;Y++){let W=i.get(U[Y]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(C)}let P=0;function L(){P=0}function B(){let C=P;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function H(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function X(C,b){let U=i.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){let Y=C.image;if(Y===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,C,b);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+b)}function k(C,b){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,b);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+b)}function ne(C,b){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,b);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+b)}function O(C,b){let U=i.get(C);if(C.version>0&&U.__version!==C.version){$(U,C,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+b)}let Z={[jd]:t.REPEAT,[Yi]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},Q={[Nn]:t.NEAREST,[pE]:t.NEAREST_MIPMAP_NEAREST,[yu]:t.NEAREST_MIPMAP_LINEAR,[Jn]:t.LINEAR,[Rp]:t.LINEAR_MIPMAP_NEAREST,[Cs]:t.LINEAR_MIPMAP_LINEAR},ge={[vE]:t.NEVER,[TE]:t.ALWAYS,[_E]:t.LESS,[jy]:t.LEQUAL,[SE]:t.EQUAL,[wE]:t.GEQUAL,[ME]:t.GREATER,[bE]:t.NOTEQUAL};function Ne(C,b){if(b.type===tr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Jn||b.magFilter===Rp||b.magFilter===yu||b.magFilter===Cs||b.minFilter===Jn||b.minFilter===Rp||b.minFilter===yu||b.minFilter===Cs)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Z[b.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Z[b.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Z[b.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Q[b.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==yu&&b.minFilter!==Cs||b.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Qe(C,b){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",M));let Y=b.source,K=h.get(Y);K===void 0&&(K={},h.set(Y,K));let W=H(b);if(W!==C.__cacheKey){K[W]===void 0&&(K[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[W].usedTimes++;let Me=K[C.__cacheKey];Me!==void 0&&(K[C.__cacheKey].usedTimes--,Me.usedTimes===0&&w(b)),C.__cacheKey=W,C.__webglTexture=K[W].texture}return U}function He(C,b,U){return Math.floor(Math.floor(C/U)/b)}function Ke(C,b,U,Y){let W=C.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,U,Y,b.data);else{W.sort((J,re)=>J.start-re.start);let Me=0;for(let J=1;J<W.length;J++){let re=W[Me],Re=W[J],Ae=re.start+re.count,he=He(Re.start,b.width,4),Ie=He(re.start,b.width,4);Re.start<=Ae+1&&he===Ie&&He(Re.start+Re.count-1,b.width,4)===he?re.count=Math.max(re.count,Re.start+Re.count-re.start):(++Me,W[Me]=Re)}W.length=Me+1;let le=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),_e=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let J=0,re=W.length;J<re;J++){let Re=W[J],Ae=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),Ie=Ae%b.width,D=Math.floor(Ae/b.width),ce=he,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ie,D,ce,se,U,Y,b.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function q(C,b,U){let Y=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=t.TEXTURE_3D);let K=Qe(C,b),W=b.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+U);let Me=i.get(W);if(W.version!==Me.__version||K===!0){n.activeTexture(t.TEXTURE0+U);let le=it.getPrimaries(it.workingColorSpace),Te=b.colorSpace===Ir?null:it.getPrimaries(b.colorSpace),_e=b.colorSpace===Ir||le===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let J=v(b.image,!1,r.maxTextureSize);J=we(b,J);let re=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),Ae=x(b.internalFormat,re,Re,b.colorSpace,b.isVideoTexture);Ne(Y,b);let he,Ie=b.mipmaps,D=b.isVideoTexture!==!0,ce=Me.__version===void 0||K===!0,se=W.dataReady,oe=E(b,J);if(b.isDepthTexture)Ae=S(b.format===il,b.type),ce&&(D?n.texStorage2D(t.TEXTURE_2D,1,Ae,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ae,J.width,J.height,0,re,Re,null));else if(b.isDataTexture)if(Ie.length>0){D&&ce&&n.texStorage2D(t.TEXTURE_2D,oe,Ae,Ie[0].width,Ie[0].height);for(let te=0,j=Ie.length;te<j;te++)he=Ie[te],D?se&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,re,Re,he.data):n.texImage2D(t.TEXTURE_2D,te,Ae,he.width,he.height,0,re,Re,he.data);b.generateMipmaps=!1}else D?(ce&&n.texStorage2D(t.TEXTURE_2D,oe,Ae,J.width,J.height),se&&Ke(b,J,re,Re)):n.texImage2D(t.TEXTURE_2D,0,Ae,J.width,J.height,0,re,Re,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){D&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Ae,Ie[0].width,Ie[0].height,J.depth);for(let te=0,j=Ie.length;te<j;te++)if(he=Ie[te],b.format!==gi)if(re!==null)if(D){if(se)if(b.layerUpdates.size>0){let xe=tv(he.width,he.height,b.format,b.type);for(let Oe of b.layerUpdates){let pt=he.data.subarray(Oe*xe/he.data.BYTES_PER_ELEMENT,(Oe+1)*xe/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Oe,he.width,he.height,1,re,pt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,J.depth,re,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ae,he.width,he.height,J.depth,0,he.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,J.depth,re,Re,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ae,he.width,he.height,J.depth,0,re,Re,he.data)}else{D&&ce&&n.texStorage2D(t.TEXTURE_2D,oe,Ae,Ie[0].width,Ie[0].height);for(let te=0,j=Ie.length;te<j;te++)he=Ie[te],b.format!==gi?re!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,re,he.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ae,he.width,he.height,0,he.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,re,Re,he.data):n.texImage2D(t.TEXTURE_2D,te,Ae,he.width,he.height,0,re,Re,he.data)}else if(b.isDataArrayTexture)if(D){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Ae,J.width,J.height,J.depth),se)if(b.layerUpdates.size>0){let te=tv(J.width,J.height,b.format,b.type);for(let j of b.layerUpdates){let xe=J.data.subarray(j*te/J.data.BYTES_PER_ELEMENT,(j+1)*te/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,re,Re,xe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,Re,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,J.width,J.height,J.depth,0,re,Re,J.data);else if(b.isData3DTexture)D?(ce&&n.texStorage3D(t.TEXTURE_3D,oe,Ae,J.width,J.height,J.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,Re,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,J.width,J.height,J.depth,0,re,Re,J.data);else if(b.isFramebufferTexture){if(ce)if(D)n.texStorage2D(t.TEXTURE_2D,oe,Ae,J.width,J.height);else{let te=J.width,j=J.height;for(let xe=0;xe<oe;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ae,te,j,0,re,Re,null),te>>=1,j>>=1}}else if(Ie.length>0){if(D&&ce){let te=Be(Ie[0]);n.texStorage2D(t.TEXTURE_2D,oe,Ae,te.width,te.height)}for(let te=0,j=Ie.length;te<j;te++)he=Ie[te],D?se&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,re,Re,he):n.texImage2D(t.TEXTURE_2D,te,Ae,re,Re,he);b.generateMipmaps=!1}else if(D){if(ce){let te=Be(J);n.texStorage2D(t.TEXTURE_2D,oe,Ae,te.width,te.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,Re,J)}else n.texImage2D(t.TEXTURE_2D,0,Ae,re,Re,J);y(b)&&d(Y),Me.__version=W.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function $(C,b,U){if(b.image.length!==6)return;let Y=Qe(C,b),K=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+U);let W=i.get(K);if(K.version!==W.__version||Y===!0){n.activeTexture(t.TEXTURE0+U);let Me=it.getPrimaries(it.workingColorSpace),le=b.colorSpace===Ir?null:it.getPrimaries(b.colorSpace),Te=b.colorSpace===Ir||Me===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let _e=b.isCompressedTexture||b.image[0].isCompressedTexture,J=b.image[0]&&b.image[0].isDataTexture,re=[];for(let j=0;j<6;j++)!_e&&!J?re[j]=v(b.image[j],!0,r.maxCubemapSize):re[j]=J?b.image[j].image:b.image[j],re[j]=we(b,re[j]);let Re=re[0],Ae=s.convert(b.format,b.colorSpace),he=s.convert(b.type),Ie=x(b.internalFormat,Ae,he,b.colorSpace),D=b.isVideoTexture!==!0,ce=W.__version===void 0||Y===!0,se=K.dataReady,oe=E(b,Re);Ne(t.TEXTURE_CUBE_MAP,b);let te;if(_e){D&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ie,Re.width,Re.height);for(let j=0;j<6;j++){te=re[j].mipmaps;for(let xe=0;xe<te.length;xe++){let Oe=te[xe];b.format!==gi?Ae!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Oe.width,Oe.height,Ae,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,Ie,Oe.width,Oe.height,0,Oe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Oe.width,Oe.height,Ae,he,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,Ie,Oe.width,Oe.height,0,Ae,he,Oe.data)}}}else{if(te=b.mipmaps,D&&ce){te.length>0&&oe++;let j=Be(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ie,j.width,j.height)}for(let j=0;j<6;j++)if(J){D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,re[j].width,re[j].height,Ae,he,re[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,re[j].width,re[j].height,0,Ae,he,re[j].data);for(let xe=0;xe<te.length;xe++){let pt=te[xe].image[j].image;D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,pt.width,pt.height,Ae,he,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,Ie,pt.width,pt.height,0,Ae,he,pt.data)}}else{D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,he,re[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ie,Ae,he,re[j]);for(let xe=0;xe<te.length;xe++){let Oe=te[xe];D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ae,he,Oe.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,Ie,Ae,he,Oe.image[j])}}}y(b)&&d(t.TEXTURE_CUBE_MAP),W.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function de(C,b,U,Y,K,W){let Me=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Te=x(U.internalFormat,Me,le,U.colorSpace),_e=i.get(b),J=i.get(U);if(J.__renderTarget=b,!_e.__hasExternalTextures){let re=Math.max(1,b.width>>W),Re=Math.max(1,b.height>>W);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,W,Te,re,Re,b.depth,0,Me,le,null):n.texImage2D(K,W,Te,re,Re,0,Me,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,K,J.__webglTexture,0,st(b)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,K,J.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(C,b,U){if(t.bindRenderbuffer(t.RENDERBUFFER,C),b.depthBuffer){let Y=b.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,W=S(b.stencilBuffer,K),Me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=st(b);ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,W,b.width,b.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,W,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,W,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,C)}else{let Y=b.textures;for(let K=0;K<Y.length;K++){let W=Y[K],Me=s.convert(W.format,W.colorSpace),le=s.convert(W.type),Te=x(W.internalFormat,Me,le,W.colorSpace),_e=st(b);U&&ve(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,Te,b.width,b.height):ve(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,Te,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Te,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let K=Y.__webglTexture,W=st(b);if(b.depthTexture.format===ja)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(b.depthTexture.format===il)ve(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ue(C){let b=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let Y=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Y}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let Y=C.texture.mipmaps;Y&&Y.length>0?Se(b.__webglFramebuffer[0],C):Se(b.__webglFramebuffer,C)}else if(U){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=t.createRenderbuffer(),Fe(b.__webglDepthbuffer[Y],C,!1);else{let K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}else{let Y=C.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),Fe(b.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Mt(C,b,U){let Y=i.get(C);b!==void 0&&de(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ue(C)}function ke(C){let b=C.texture,U=i.get(C),Y=i.get(b);C.addEventListener("dispose",A);let K=C.textures,W=C.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=b.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Te=0;Te<b.mipmaps.length;Te++)U.__webglFramebuffer[le][Te]=t.createFramebuffer()}else U.__webglFramebuffer[le]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)U.__webglFramebuffer[le]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Me)for(let le=0,Te=K.length;le<Te;le++){let _e=i.get(K[le]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&ve(C)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){let Te=K[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);let _e=s.convert(Te.format,Te.colorSpace),J=s.convert(Te.type),re=x(Te.internalFormat,_e,J,Te.colorSpace,C.isXRRenderTarget===!0),Re=st(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,re,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)de(U.__webglFramebuffer[le][Te],C,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te);else de(U.__webglFramebuffer[le],C,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);y(b)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let le=0,Te=K.length;le<Te;le++){let _e=K[le],J=i.get(_e),re=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,J.__webglTexture),Ne(re,_e),de(U.__webglFramebuffer,C,_e,t.COLOR_ATTACHMENT0+le,re,0),y(_e)&&d(re)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Y.__webglTexture),Ne(le,b),b.mipmaps&&b.mipmaps.length>0)for(let Te=0;Te<b.mipmaps.length;Te++)de(U.__webglFramebuffer[Te],C,b,t.COLOR_ATTACHMENT0,le,Te);else de(U.__webglFramebuffer,C,b,t.COLOR_ATTACHMENT0,le,0);y(b)&&d(le),n.unbindTexture()}C.depthBuffer&&Ue(C)}function et(C){let b=C.textures;for(let U=0,Y=b.length;U<Y;U++){let K=b[U];if(y(K)){let W=m(C),Me=i.get(K).__webglTexture;n.bindTexture(W,Me),d(W),n.unbindTexture()}}}let I=[],We=[];function Xe(C){if(C.samples>0){if(ve(C)===!1){let b=C.textures,U=C.width,Y=C.height,K=t.COLOR_BUFFER_BIT,W=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(C),le=b.length>1;if(le)for(let _e=0;_e<b.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Te=C.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let J=i.get(b[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,U,Y,0,0,U,Y,K,t.NEAREST),l===!0&&(I.length=0,We.length=0,I.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(I.push(W),We.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let _e=0;_e<b.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);let J=i.get(b[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function st(C){return Math.min(r.maxSamples,C.samples)}function ve(C){let b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(C){let b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function we(C,b){let U=C.colorSpace,Y=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==wo&&U!==Ir&&(it.getTransfer(U)===lt?(Y!==gi||K!==er)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",U)),b}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=O,this.rebindTextures=Mt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function RF(t,e){function n(i,r=Ir){let s,o=it.getTransfer(r);if(i===er)return t.UNSIGNED_BYTE;if(i===Ip)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zy)return t.BYTE;if(i===Gy)return t.SHORT;if(i===tl)return t.UNSIGNED_SHORT;if(i===Pp)return t.INT;if(i===Rs)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===Xy)return t.ALPHA;if(i===qy)return t.RGB;if(i===gi)return t.RGBA;if(i===ja)return t.DEPTH_COMPONENT;if(i===il)return t.DEPTH_STENCIL;if(i===Yy)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===Np)return t.RG;if(i===Fp)return t.RG_INTEGER;if(i===Up)return t.RGBA_INTEGER;if(i===vu||i===_u||i===Su||i===Mu)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Op||i===kp||i===Bp||i===Vp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Op)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zp||i===Gp||i===Hp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zp||i===Gp)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wp||i===Xp||i===qp||i===Yp||i===jp||i===$p||i===Kp||i===Zp||i===Jp||i===Qp||i===em||i===tm||i===nm||i===im)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$p)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qp)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===em)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===im)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rm||i===sm||i===om)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rm)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===om)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===am||i===lm||i===cm||i===um)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===am)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===um)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var PF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new hu(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Un({vertexShader:PF,fragmentShader:IF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new pu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pv=class extends Cr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null,v=typeof XRWebGLBinding<"u",y=new dv,d={},m=n.getContextAttributes(),x=null,S=null,E=[],M=[],A=new Je,R=null,w=new pn;w.viewport=new Ut;let _=new pn;_.viewport=new Ut;let P=[w,_],L=new yp,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=E[q];return $===void 0&&($=new el,E[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=E[q];return $===void 0&&($=new el,E[q]=$),$.getGripSpace()},this.getHand=function(q){let $=E[q];return $===void 0&&($=new el,E[q]=$),$.getHandSpace()};function X(q){let $=M.indexOf(q.inputSource);if($===-1)return;let de=E[$];de!==void 0&&(de.update(q.inputSource,q.frame,c||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",ne);for(let q=0;q<E.length;q++){let $=M[q];$!==null&&(M[q]=null,E[q].disconnect($))}B=null,H=null,y.reset();for(let q in d)delete d[q];e.setRenderTarget(x),p=null,h=null,f=null,r=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",k),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Fe=null,Se=null;m.depth&&(Se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=m.stencil?il:ja,Fe=m.stencil?nl:Rs);let Ue={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ji(h.textureWidth,h.textureHeight,{format:gi,type:er,depthTexture:new fu(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ji(p.framebufferWidth,p.framebufferHeight,{format:gi,type:er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(q){for(let $=0;$<q.removed.length;$++){let de=q.removed[$],Fe=M.indexOf(de);Fe>=0&&(M[Fe]=null,E[Fe].disconnect(de))}for(let $=0;$<q.added.length;$++){let de=q.added[$],Fe=M.indexOf(de);if(Fe===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=M.length){M.push(de),Fe=Ue;break}else if(M[Ue]===null){M[Ue]=de,Fe=Ue;break}if(Fe===-1)break}let Se=E[Fe];Se&&Se.connect(de)}}let O=new z,Z=new z;function Q(q,$,de){O.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);let Fe=O.distanceTo(Z),Se=$.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Mt=Se[14]/(Se[10]-1),ke=Se[14]/(Se[10]+1),et=(Se[9]+1)/Se[5],I=(Se[9]-1)/Se[5],We=(Se[8]-1)/Se[0],Xe=(Ue[8]+1)/Ue[0],st=Mt*We,ve=Mt*Xe,bt=Fe/(-We+Xe),we=bt*-We;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Be=Mt+bt,C=ke+bt,b=st-we,U=ve+(Fe-we),Y=et*ke/C*Be,K=I*ke/C*Be;q.projectionMatrix.makePerspective(b,U,Y,K,Be,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ge(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let $=q.near,de=q.far;y.texture!==null&&(y.depthNear>0&&($=y.depthNear),y.depthFar>0&&(de=y.depthFar)),L.near=_.near=w.near=$,L.far=_.far=w.far=de,(B!==L.near||H!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,H=L.far),L.layers.mask=q.layers.mask|6,w.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;let Fe=q.parent,Se=L.cameras;ge(L,Fe);for(let Ue=0;Ue<Se.length;Ue++)ge(Se[Ue],Fe);Se.length===2?Q(L,w,_):L.projectionMatrix.copy(w.projectionMatrix),Ne(q,L,Fe)};function Ne(q,$,de){de===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(L)},this.getCameraTexture=function(q){return d[q]};let Qe=null;function He(q,$){if(u=$.getViewerPose(c||o),g=$,u!==null){let de=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Fe=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let ke=0;ke<de.length;ke++){let et=de[ke],I=null;if(p!==null)I=p.getViewport(et);else{let Xe=f.getViewSubImage(h,et);I=Xe.viewport,ke===0&&(e.setRenderTargetTextures(S,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(S))}let We=P[ke];We===void 0&&(We=new pn,We.layers.enable(ke),We.viewport=new Ut,P[ke]=We),We.matrix.fromArray(et.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(et.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(I.x,I.y,I.width,I.height),ke===0&&(L.matrix.copy(We.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push(We)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let ke=f.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&y.init(ke,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let ke=0;ke<de.length;ke++){let et=de[ke].camera;if(et){let I=d[et];I||(I=new hu,d[et]=I);let We=f.getCameraImage(et);I.sourceTexture=We}}}}for(let de=0;de<E.length;de++){let Fe=M[de],Se=E[de];Fe!==null&&Se!==void 0&&Se.update(Fe,$,c||o)}Qe&&Qe(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let Ke=new QE;Ke.setAnimationLoop(He),this.setAnimationLoop=function(q){Qe=q},this.dispose=function(){}}},Do=new $i,DF=new jt;function LF(t,e){function n(y,d){y.matrixAutoUpdate===!0&&y.updateMatrix(),d.value.copy(y.matrix)}function i(y,d){d.color.getRGB(y.fogColor.value,Jy(t)),d.isFog?(y.fogNear.value=d.near,y.fogFar.value=d.far):d.isFogExp2&&(y.fogDensity.value=d.density)}function r(y,d,m,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(y,d):d.isMeshToonMaterial?(s(y,d),f(y,d)):d.isMeshPhongMaterial?(s(y,d),u(y,d)):d.isMeshStandardMaterial?(s(y,d),h(y,d),d.isMeshPhysicalMaterial&&p(y,d,S)):d.isMeshMatcapMaterial?(s(y,d),g(y,d)):d.isMeshDepthMaterial?s(y,d):d.isMeshDistanceMaterial?(s(y,d),v(y,d)):d.isMeshNormalMaterial?s(y,d):d.isLineBasicMaterial?(o(y,d),d.isLineDashedMaterial&&a(y,d)):d.isPointsMaterial?l(y,d,m,x):d.isSpriteMaterial?c(y,d):d.isShadowMaterial?(y.color.value.copy(d.color),y.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(y,d){y.opacity.value=d.opacity,d.color&&y.diffuse.value.copy(d.color),d.emissive&&y.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(y.map.value=d.map,n(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.bumpMap&&(y.bumpMap.value=d.bumpMap,n(d.bumpMap,y.bumpMapTransform),y.bumpScale.value=d.bumpScale,d.side===bn&&(y.bumpScale.value*=-1)),d.normalMap&&(y.normalMap.value=d.normalMap,n(d.normalMap,y.normalMapTransform),y.normalScale.value.copy(d.normalScale),d.side===bn&&y.normalScale.value.negate()),d.displacementMap&&(y.displacementMap.value=d.displacementMap,n(d.displacementMap,y.displacementMapTransform),y.displacementScale.value=d.displacementScale,y.displacementBias.value=d.displacementBias),d.emissiveMap&&(y.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,y.emissiveMapTransform)),d.specularMap&&(y.specularMap.value=d.specularMap,n(d.specularMap,y.specularMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest);let m=e.get(d),x=m.envMap,S=m.envMapRotation;x&&(y.envMap.value=x,Do.copy(S),Do.x*=-1,Do.y*=-1,Do.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Do.y*=-1,Do.z*=-1),y.envMapRotation.value.setFromMatrix4(DF.makeRotationFromEuler(Do)),y.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=d.reflectivity,y.ior.value=d.ior,y.refractionRatio.value=d.refractionRatio),d.lightMap&&(y.lightMap.value=d.lightMap,y.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,y.lightMapTransform)),d.aoMap&&(y.aoMap.value=d.aoMap,y.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,y.aoMapTransform))}function o(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,d.map&&(y.map.value=d.map,n(d.map,y.mapTransform))}function a(y,d){y.dashSize.value=d.dashSize,y.totalSize.value=d.dashSize+d.gapSize,y.scale.value=d.scale}function l(y,d,m,x){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.size.value=d.size*m,y.scale.value=x*.5,d.map&&(y.map.value=d.map,n(d.map,y.uvTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function c(y,d){y.diffuse.value.copy(d.color),y.opacity.value=d.opacity,y.rotation.value=d.rotation,d.map&&(y.map.value=d.map,n(d.map,y.mapTransform)),d.alphaMap&&(y.alphaMap.value=d.alphaMap,n(d.alphaMap,y.alphaMapTransform)),d.alphaTest>0&&(y.alphaTest.value=d.alphaTest)}function u(y,d){y.specular.value.copy(d.specular),y.shininess.value=Math.max(d.shininess,1e-4)}function f(y,d){d.gradientMap&&(y.gradientMap.value=d.gradientMap)}function h(y,d){y.metalness.value=d.metalness,d.metalnessMap&&(y.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,y.metalnessMapTransform)),y.roughness.value=d.roughness,d.roughnessMap&&(y.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,y.roughnessMapTransform)),d.envMap&&(y.envMapIntensity.value=d.envMapIntensity)}function p(y,d,m){y.ior.value=d.ior,d.sheen>0&&(y.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),y.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(y.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,y.sheenColorMapTransform)),d.sheenRoughnessMap&&(y.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,y.sheenRoughnessMapTransform))),d.clearcoat>0&&(y.clearcoat.value=d.clearcoat,y.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(y.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,y.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(y.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&y.clearcoatNormalScale.value.negate())),d.dispersion>0&&(y.dispersion.value=d.dispersion),d.iridescence>0&&(y.iridescence.value=d.iridescence,y.iridescenceIOR.value=d.iridescenceIOR,y.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(y.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,y.iridescenceMapTransform)),d.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),d.transmission>0&&(y.transmission.value=d.transmission,y.transmissionSamplerMap.value=m.texture,y.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(y.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,y.transmissionMapTransform)),y.thickness.value=d.thickness,d.thicknessMap&&(y.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=d.attenuationDistance,y.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(y.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(y.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=d.specularIntensity,y.specularColor.value.copy(d.specularColor),d.specularColorMap&&(y.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,y.specularColorMapTransform)),d.specularIntensityMap&&(y.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,y.specularIntensityMapTransform))}function g(y,d){d.matcap&&(y.matcap.value=d.matcap)}function v(y,d){let m=e.get(d).light;y.referencePosition.value.setFromMatrixPosition(m.matrixWorld),y.nearDistance.value=m.shadow.camera.near,y.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NF(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let S=x.program;i.uniformBlockBinding(m,S)}function c(m,x){let S=r[m.id];S===void 0&&(g(m),S=u(m),r[m.id]=S,m.addEventListener("dispose",y));let E=x.program;i.updateUBOMapping(m,E);let M=e.render.frame;s[m.id]!==M&&(h(m),s[m.id]=M)}function u(m){let x=f();m.__bindingPointIndex=x;let S=t.createBuffer(),E=m.__size,M=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){let x=r[m.id],S=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let M=0,A=S.length;M<A;M++){let R=Array.isArray(S[M])?S[M]:[S[M]];for(let w=0,_=R.length;w<_;w++){let P=R[w];if(p(P,M,w,E)===!0){let L=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],H=0;for(let X=0;X<B.length;X++){let k=B[X],ne=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,L+H,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,H),H+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,x,S,E){let M=m.value,A=x+"_"+S;if(E[A]===void 0)return typeof M=="number"||typeof M=="boolean"?E[A]=M:E[A]=M.clone(),!0;{let R=E[A];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return E[A]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(m){let x=m.uniforms,S=0,E=16;for(let A=0,R=x.length;A<R;A++){let w=Array.isArray(x[A])?x[A]:[x[A]];for(let _=0,P=w.length;_<P;_++){let L=w[_],B=Array.isArray(L.value)?L.value:[L.value];for(let H=0,X=B.length;H<X;H++){let k=B[H],ne=v(k),O=S%E,Z=O%ne.boundary,Q=O+Z;S+=Z,Q!==0&&E-Q<ne.storage&&(S+=E-Q),L.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=ne.storage}}}let M=S%E;return M>0&&(S+=E-M),m.__size=S,m.__cache={},this}function v(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",m),x}function y(m){let x=m.target;x.removeEventListener("dispose",y);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(let m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var FF=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Dr=null;function UF(){return Dr===null&&(Dr=new rp(FF,32,32,Np,Ro),Dr.minFilter=Jn,Dr.magFilter=Jn,Dr.wrapS=Yi,Dr.wrapT=Yi,Dr.generateMipmaps=!1,Dr.needsUpdate=!0),Dr}var pm=class{constructor(e={}){let{canvas:n=EE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Set([Up,Fp,Lp]),v=new Set([er,Rs,tl,nl,Ip,Dp]),y=new Uint32Array(4),d=new Int32Array(4),m=null,x=null,S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,A=!1;this._outputColorSpace=$n;let R=0,w=0,_=null,P=-1,L=null,B=new Ut,H=new Ut,X=null,k=new je(0),ne=0,O=n.width,Z=n.height,Q=1,ge=null,Ne=null,Qe=new Ut(0,0,O,Z),He=new Ut(0,0,O,Z),Ke=!1,q=new uu,$=!1,de=!1,Fe=new jt,Se=new z,Ue=new Ut,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function et(){return _===null?Q:1}let I=i;function We(T,N){return n.getContext(T,N)}try{let T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",j,!1),n.addEventListener("webglcontextcreationerror",xe,!1),I===null){let N="webgl2";if(I=We(N,T),I===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let Xe,st,ve,bt,we,Be,C,b,U,Y,K,W,Me,le,Te,_e,J,re,Re,Ae,he,Ie,D,ce;function se(){Xe=new JL(I),Xe.init(),Ie=new RF(I,Xe),st=new HL(I,Xe,e,Ie),ve=new AF(I,Xe),st.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),bt=new tN(I),we=new pF,Be=new CF(I,Xe,ve,we,st,Ie,bt),C=new XL(M),b=new ZL(M),U=new sI(I),D=new zL(I,U),Y=new QL(I,U,bt,D),K=new iN(I,Y,U,bt),Re=new nN(I,st,Be),_e=new WL(we),W=new dF(M,C,b,Xe,st,D,_e),Me=new LF(M,we),le=new gF,Te=new MF(Xe),re=new VL(M,C,b,ve,K,p,l),J=new TF(M,K,st),ce=new NF(I,bt,st,ve),Ae=new GL(I,Xe,bt),he=new eN(I,Xe,bt),bt.programs=W.programs,M.capabilities=st,M.extensions=Xe,M.properties=we,M.renderLists=le,M.shadowMap=J,M.state=ve,M.info=bt}se();let oe=new pv(M,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(O,Z,!1))},this.getSize=function(T){return T.set(O,Z)},this.setSize=function(T,N,V=!0){if(oe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,Z=N,n.width=Math.floor(T*Q),n.height=Math.floor(N*Q),V===!0&&(n.style.width=T+"px",n.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(O*Q,Z*Q).floor()},this.setDrawingBufferSize=function(T,N,V){O=T,Z=N,Q=V,n.width=Math.floor(T*V),n.height=Math.floor(N*V),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(Qe)},this.setViewport=function(T,N,V,G){T.isVector4?Qe.set(T.x,T.y,T.z,T.w):Qe.set(T,N,V,G),ve.viewport(B.copy(Qe).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,N,V,G){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,N,V,G),ve.scissor(H.copy(He).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){ve.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){ge=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,V=!0){let G=0;if(T){let F=!1;if(_!==null){let ie=_.texture.format;F=g.has(ie)}if(F){let ie=_.texture.type,fe=v.has(ie),ye=re.getClearColor(),me=re.getClearAlpha(),Ce=ye.r,Pe=ye.g,be=ye.b;fe?(y[0]=Ce,y[1]=Pe,y[2]=be,y[3]=me,I.clearBufferuiv(I.COLOR,0,y)):(d[0]=Ce,d[1]=Pe,d[2]=be,d[3]=me,I.clearBufferiv(I.COLOR,0,d))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",j,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),re.dispose(),le.dispose(),Te.dispose(),we.dispose(),C.dispose(),b.dispose(),K.dispose(),D.dispose(),ce.dispose(),W.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",yv),oe.removeEventListener("sessionend",vv),Is.stop()};function te(T){T.preventDefault(),Zy("WebGLRenderer: Context Lost."),A=!0}function j(){Zy("WebGLRenderer: Context Restored."),A=!1;let T=bt.autoReset,N=J.enabled,V=J.autoUpdate,G=J.needsUpdate,F=J.type;se(),bt.autoReset=T,J.enabled=N,J.autoUpdate=V,J.needsUpdate=G,J.type=F}function xe(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){let N=T.target;N.removeEventListener("dispose",Oe),pt(N)}function pt(T){ct(T),we.remove(T)}function ct(T){let N=we.get(T).programs;N!==void 0&&(N.forEach(function(V){W.releaseProgram(V)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,V,G,F,ie){N===null&&(N=Mt);let fe=F.isMesh&&F.matrixWorld.determinant()<0,ye=dA(T,N,V,G,F);ve.setMaterial(G,fe);let me=V.index,Ce=1;if(G.wireframe===!0){if(me=Y.getWireframeAttribute(V),me===void 0)return;Ce=2}let Pe=V.drawRange,be=V.attributes.position,$e=Pe.start*Ce,ut=(Pe.start+Pe.count)*Ce;ie!==null&&($e=Math.max($e,ie.start*Ce),ut=Math.min(ut,(ie.start+ie.count)*Ce)),me!==null?($e=Math.max($e,0),ut=Math.min(ut,me.count)):be!=null&&($e=Math.max($e,0),ut=Math.min(ut,be.count));let Dt=ut-$e;if(Dt<0||Dt===1/0)return;D.setup(F,G,ye,V,me);let Lt,ft=Ae;if(me!==null&&(Lt=U.get(me),ft=he,ft.setIndex(Lt)),F.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*et()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(F.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),ve.setLineWidth(Ee*et()),F.isLineSegments?ft.setMode(I.LINES):F.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else F.isPoints?ft.setMode(I.POINTS):F.isSprite&&ft.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ee=F._multiDrawStarts,wt=F._multiDrawCounts,rt=F._multiDrawCount,On=me?U.get(me).bytesPerElement:1,No=we.get(G).currentProgram.getUniforms();for(let kn=0;kn<rt;kn++)No.setValue(I,"_gl_DrawID",kn),ft.render(Ee[kn]/On,wt[kn])}else if(F.isInstancedMesh)ft.renderInstances($e,Dt,F.count);else if(V.isInstancedBufferGeometry){let Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wt=Math.min(V.instanceCount,Ee);ft.renderInstances($e,Dt,wt)}else ft.render($e,Dt)};function Li(T,N,V){T.transparent===!0&&T.side===Ji&&T.forceSinglePass===!1?(T.side=bn,T.needsUpdate=!0,Au(T,N,V),T.side=Ar,T.needsUpdate=!0,Au(T,N,V),T.side=Ji):Au(T,N,V)}this.compile=function(T,N,V=null){V===null&&(V=T),x=Te.get(V),x.init(N),E.push(x),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(x.pushLight(F),F.castShadow&&x.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(x.pushLight(F),F.castShadow&&x.pushShadow(F))}),x.setupLights();let G=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ie=F.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){let ye=ie[fe];Li(ye,V,F),G.add(ye)}else Li(ie,V,F),G.add(ie)}),x=E.pop(),G},this.compileAsync=function(T,N,V=null){let G=this.compile(T,N,V);return new Promise(F=>{function ie(){if(G.forEach(function(fe){we.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){F(T);return}setTimeout(ie,10)}Xe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let xi=null;function hA(T){xi&&xi(T)}function yv(){Is.stop()}function vv(){Is.start()}let Is=new QE;Is.setAnimationLoop(hA),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(T){xi=T,oe.setAnimationLoop(T),T===null?Is.stop():Is.start()},oe.addEventListener("sessionstart",yv),oe.addEventListener("sessionend",vv),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,_),x=Te.get(T,E.length),x.init(N),E.push(x),Fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Fe,Ii,N.reversedDepth),de=this.localClippingEnabled,$=_e.init(this.clippingPlanes,de),m=le.get(T,S.length),m.init(),S.push(m),oe.enabled===!0&&oe.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&ym(ie,N,-1/0,M.sortObjects)}ym(T,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ge,Ne),ke=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ke&&re.addToRenderList(m,T),this.info.render.frame++,$===!0&&_e.beginShadows();let V=x.state.shadowsArray;J.render(V,T,N),$===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(x.setupLights(),N.isArrayCamera){let ie=N.cameras;if(F.length>0)for(let fe=0,ye=ie.length;fe<ye;fe++){let me=ie[fe];Sv(G,F,T,me)}ke&&re.render(T);for(let fe=0,ye=ie.length;fe<ye;fe++){let me=ie[fe];_v(m,T,me,me.viewport)}}else F.length>0&&Sv(G,F,T,N),ke&&re.render(T),_v(m,T,N);_!==null&&w===0&&(Be.updateMultisampleRenderTarget(_),Be.updateRenderTargetMipmap(_)),T.isScene===!0&&T.onAfterRender(M,T,N),D.resetDefaultState(),P=-1,L=null,E.pop(),E.length>0?(x=E[E.length-1],$===!0&&_e.setGlobalState(M.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ym(T,N,V,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)x.pushLight(T),T.castShadow&&x.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){G&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);let fe=K.update(T),ye=T.material;ye.visible&&m.push(T,fe,ye,V,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let fe=K.update(T),ye=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(ye)){let me=fe.groups;for(let Ce=0,Pe=me.length;Ce<Pe;Ce++){let be=me[Ce],$e=ye[be.materialIndex];$e&&$e.visible&&m.push(T,fe,$e,V,Ue.z,be)}}else ye.visible&&m.push(T,fe,ye,V,Ue.z,null)}}let ie=T.children;for(let fe=0,ye=ie.length;fe<ye;fe++)ym(ie[fe],N,V,G)}function _v(T,N,V,G){let{opaque:F,transmissive:ie,transparent:fe}=T;x.setupLightsView(V),$===!0&&_e.setGlobalState(M.clippingPlanes,V),G&&ve.viewport(B.copy(G)),F.length>0&&Eu(F,N,V),ie.length>0&&Eu(ie,N,V),fe.length>0&&Eu(fe,N,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Sv(T,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[G.id]===void 0&&(x.state.transmissionRenderTarget[G.id]=new ji(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Ro:er,minFilter:Cs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ie=x.state.transmissionRenderTarget[G.id],fe=G.viewport||B;ie.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);let ye=M.getRenderTarget(),me=M.getActiveCubeFace(),Ce=M.getActiveMipmapLevel();M.setRenderTarget(ie),M.getClearColor(k),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),ke&&re.render(V);let Pe=M.toneMapping;M.toneMapping=Pr;let be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),x.setupLightsView(G),$===!0&&_e.setGlobalState(M.clippingPlanes,G),Eu(T,V,G),Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ut=0,Dt=N.length;ut<Dt;ut++){let Lt=N[ut],{object:ft,geometry:Ee,material:wt,group:rt}=Lt;if(wt.side===Ji&&ft.layers.test(G.layers)){let On=wt.side;wt.side=bn,wt.needsUpdate=!0,Mv(ft,V,G,Ee,wt,rt),wt.side=On,wt.needsUpdate=!0,$e=!0}}$e===!0&&(Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie))}M.setRenderTarget(ye,me,Ce),M.setClearColor(k,ne),be!==void 0&&(G.viewport=be),M.toneMapping=Pe}function Eu(T,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ie=T.length;F<ie;F++){let fe=T[F],{object:ye,geometry:me,group:Ce}=fe,Pe=fe.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),ye.layers.test(V.layers)&&Mv(ye,N,V,me,Pe,Ce)}}function Mv(T,N,V,G,F,ie){T.onBeforeRender(M,N,V,G,F,ie),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(M,N,V,G,T,ie),F.transparent===!0&&F.side===Ji&&F.forceSinglePass===!1?(F.side=bn,F.needsUpdate=!0,M.renderBufferDirect(V,N,G,F,T,ie),F.side=Ar,F.needsUpdate=!0,M.renderBufferDirect(V,N,G,F,T,ie),F.side=Ji):M.renderBufferDirect(V,N,G,F,T,ie),T.onAfterRender(M,N,V,G,F,ie)}function Au(T,N,V){N.isScene!==!0&&(N=Mt);let G=we.get(T),F=x.state.lights,ie=x.state.shadowsArray,fe=F.state.version,ye=W.getParameters(T,F.state,ie,N,V),me=W.getProgramCacheKey(ye),Ce=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?b:C).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Oe),Ce=new Map,G.programs=Ce);let Pe=Ce.get(me);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===fe)return wv(T,ye),Pe}else ye.uniforms=W.getUniforms(T),T.onBeforeCompile(ye,M),Pe=W.acquireProgram(ye,me),Ce.set(me,Pe),G.uniforms=ye.uniforms;let be=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=_e.uniform),wv(T,ye),G.needsLights=mA(T),G.lightsStateVersion=fe,G.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function bv(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=sl.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function wv(T,N){let V=we.get(T);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function dA(T,N,V,G,F){N.isScene!==!0&&(N=Mt),Be.resetTextureUnits();let ie=N.fog,fe=G.isMeshStandardMaterial?N.environment:null,ye=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:wo,me=(G.isMeshStandardMaterial?b:C).get(G.envMap||fe),Ce=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,Dt=Pr;G.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Dt=M.toneMapping);let Lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=Lt!==void 0?Lt.length:0,Ee=we.get(G),wt=x.state.lights;if($===!0&&(de===!0||T!==L)){let gn=T===L&&G.id===P;_e.setState(G,T,gn)}let rt=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==wt.state.version||Ee.outputColorSpace!==ye||F.isBatchedMesh&&Ee.batching===!1||!F.isBatchedMesh&&Ee.batching===!0||F.isBatchedMesh&&Ee.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ee.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ee.instancing===!1||!F.isInstancedMesh&&Ee.instancing===!0||F.isSkinnedMesh&&Ee.skinning===!1||!F.isSkinnedMesh&&Ee.skinning===!0||F.isInstancedMesh&&Ee.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ee.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ee.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ee.instancingMorph===!1&&F.morphTexture!==null||Ee.envMap!==me||G.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Pe||Ee.morphTargets!==be||Ee.morphNormals!==$e||Ee.morphColors!==ut||Ee.toneMapping!==Dt||Ee.morphTargetsCount!==ft)&&(rt=!0):(rt=!0,Ee.__version=G.version);let On=Ee.currentProgram;rt===!0&&(On=Au(G,N,F));let No=!1,kn=!1,al=!1,Tt=On.getUniforms(),wn=Ee.uniforms;if(ve.useProgram(On.program)&&(No=!0,kn=!0,al=!0),G.id!==P&&(P=G.id,kn=!0),No||L!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(I,"projectionMatrix",T.projectionMatrix),Tt.setValue(I,"viewMatrix",T.matrixWorldInverse);let Tn=Tt.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,Se.setFromMatrixPosition(T.matrixWorld)),st.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,kn=!0,al=!0)}if(F.isSkinnedMesh){Tt.setOptional(I,F,"bindMatrix"),Tt.setOptional(I,F,"bindMatrixInverse");let gn=F.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Tt.setValue(I,"boneTexture",gn.boneTexture,Be))}F.isBatchedMesh&&(Tt.setOptional(I,F,"batchingTexture"),Tt.setValue(I,"batchingTexture",F._matricesTexture,Be),Tt.setOptional(I,F,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",F._indirectTexture,Be),Tt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",F._colorsTexture,Be));let ti=V.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Re.update(F,V,On),(kn||Ee.receiveShadow!==F.receiveShadow)&&(Ee.receiveShadow=F.receiveShadow,Tt.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wn.envMap.value=me,wn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(wn.envMapIntensity.value=N.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=UF()),kn&&(Tt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&pA(wn,al),ie&&G.fog===!0&&Me.refreshFogUniforms(wn,ie),Me.refreshMaterialUniforms(wn,G,Q,Z,x.state.transmissionRenderTarget[T.id]),sl.upload(I,bv(Ee),wn,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sl.upload(I,bv(Ee),wn,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Tt.setValue(I,"center",F.center),Tt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(I,"normalMatrix",F.normalMatrix),Tt.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let gn=G.uniformsGroups;for(let Tn=0,vm=gn.length;Tn<vm;Tn++){let Ds=gn[Tn];ce.update(Ds,On),ce.bind(Ds,On)}}return On}function pA(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function mA(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(T,N,V){let G=we.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),we.get(T.texture).__webglTexture=N,we.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let V=we.get(T);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let gA=I.createFramebuffer();this.setRenderTarget=function(T,N=0,V=0){_=T,R=N,w=V;let G=!0,F=null,ie=!1,fe=!1;if(T){let me=we.get(T);if(me.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)Be.setupRenderTarget(T);else if(me.__hasExternalTextures)Be.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let be=T.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(T)}}let Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);let Pe=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?F=Pe[N][V]:F=Pe[N],ie=!0):T.samples>0&&Be.useMultisampledRTT(T)===!1?F=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[V]:F=Pe,B.copy(T.viewport),H.copy(T.scissor),X=T.scissorTest}else B.copy(Qe).multiplyScalar(Q).floor(),H.copy(He).multiplyScalar(Q).floor(),X=Ke;if(V!==0&&(F=gA),ve.bindFramebuffer(I.FRAMEBUFFER,F)&&G&&ve.drawBuffers(T,F),ve.viewport(B),ve.scissor(H),ve.setScissorTest(X),ie){let me=we.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,V)}else if(fe){let me=N;for(let Ce=0;Ce<T.textures.length;Ce++){let Pe=we.get(T.textures[Ce]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,V,me)}}else if(T!==null&&V!==0){let me=we.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,V)}P=-1},this.readRenderTargetPixels=function(T,N,V,G,F,ie,fe,ye=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(I.FRAMEBUFFER,me);try{let Ce=T.textures[ye],Pe=Ce.format,be=Ce.type;if(!st.textureFormatReadable(Pe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(be)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&V>=0&&V<=T.height-F&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(N,V,G,F,Ie.convert(Pe),Ie.convert(be),ie))}finally{let Ce=_!==null?we.get(_).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,N,V,G,F,ie,fe,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(N>=0&&N<=T.width-G&&V>=0&&V<=T.height-F){ve.bindFramebuffer(I.FRAMEBUFFER,me);let Ce=T.textures[ye],Pe=Ce.format,be=Ce.type;if(!st.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(N,V,G,F,Ie.convert(Pe),Ie.convert(be),0);let ut=_!==null?we.get(_).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,ut);let Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await AE(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie),I.deleteBuffer($e),I.deleteSync(Dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,V=0){let G=Math.pow(2,-V),F=Math.floor(T.image.width*G),ie=Math.floor(T.image.height*G),fe=N!==null?N.x:0,ye=N!==null?N.y:0;Be.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,fe,ye,F,ie),ve.unbindTexture()};let xA=I.createFramebuffer(),yA=I.createFramebuffer();this.copyTextureToTexture=function(T,N,V=null,G=null,F=0,ie=null){ie===null&&(F!==0?(Ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let fe,ye,me,Ce,Pe,be,$e,ut,Dt,Lt=T.isCompressedTexture?T.mipmaps[ie]:T.image;if(V!==null)fe=V.max.x-V.min.x,ye=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Pe=V.min.y,be=V.isBox3?V.min.z:0;else{let ti=Math.pow(2,-F);fe=Math.floor(Lt.width*ti),ye=Math.floor(Lt.height*ti),T.isDataArrayTexture?me=Lt.depth:T.isData3DTexture?me=Math.floor(Lt.depth*ti):me=1,Ce=0,Pe=0,be=0}G!==null?($e=G.x,ut=G.y,Dt=G.z):($e=0,ut=0,Dt=0);let ft=Ie.convert(N.format),Ee=Ie.convert(N.type),wt;N.isData3DTexture?(Be.setTexture3D(N,0),wt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Be.setTexture2DArray(N,0),wt=I.TEXTURE_2D_ARRAY):(Be.setTexture2D(N,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let rt=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),No=I.getParameter(I.UNPACK_SKIP_PIXELS),kn=I.getParameter(I.UNPACK_SKIP_ROWS),al=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be);let Tt=T.isDataArrayTexture||T.isData3DTexture,wn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let ti=we.get(T),gn=we.get(N),Tn=we.get(ti.__renderTarget),vm=we.get(gn.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,vm.__webglFramebuffer);for(let Ds=0;Ds<me;Ds++)Tt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(T).__webglTexture,F,be+Ds),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(N).__webglTexture,ie,Dt+Ds)),I.blitFramebuffer(Ce,Pe,fe,ye,$e,ut,fe,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||we.has(T)){let ti=we.get(T),gn=we.get(N);ve.bindFramebuffer(I.READ_FRAMEBUFFER,xA),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,yA);for(let Tn=0;Tn<me;Tn++)Tt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ti.__webglTexture,F,be+Tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ti.__webglTexture,F),wn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,ie,Dt+Tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,ie),F!==0?I.blitFramebuffer(Ce,Pe,fe,ye,$e,ut,fe,ye,I.COLOR_BUFFER_BIT,I.NEAREST):wn?I.copyTexSubImage3D(wt,ie,$e,ut,Dt+Tn,Ce,Pe,fe,ye):I.copyTexSubImage2D(wt,ie,$e,ut,Ce,Pe,fe,ye);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else wn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(wt,ie,$e,ut,Dt,fe,ye,me,ft,Ee,Lt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,ie,$e,ut,Dt,fe,ye,me,ft,Lt.data):I.texSubImage3D(wt,ie,$e,ut,Dt,fe,ye,me,ft,Ee,Lt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,$e,ut,fe,ye,ft,Ee,Lt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,$e,ut,Lt.width,Lt.height,ft,Lt.data):I.texSubImage2D(I.TEXTURE_2D,ie,$e,ut,fe,ye,ft,Ee,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,No),I.pixelStorei(I.UNPACK_SKIP_ROWS,kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,al),ie===0&&N.generateMipmaps&&I.generateMipmap(wt),ve.unbindTexture()},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&Be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Be.setTextureCube(T,0):T.isData3DTexture?Be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Be.setTexture2DArray(T,0):Be.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){R=0,w=0,_=null,ve.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}};var Di=ot(js(),1);function kF(t){let[e,n]=(0,Ot.useState)("dark");return(0,Ot.useEffect)(()=>{let i=t.current;if(!i)return;let r=()=>{let l=i.closest("[data-card-theme]");if(l){n(l.dataset.cardTheme==="dark"?"dark":"light");return}n(document.documentElement.classList.contains("dark")?"dark":"light")};r();let s=[],o=i;for(;o;){let l=new MutationObserver(r);l.observe(o,{attributes:!0,attributeFilter:["class","data-card-theme"]}),s.push(l),o=o.parentElement}let a=new MutationObserver(r);return a.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),s.push(a),()=>s.forEach(l=>l.disconnect())},[t]),e}var BF=`
  uniform float uTime;
  uniform float uActive;        // 0..1 lerp toward "alert"
  uniform vec2  uLook;          // -1..1, current look direction (cursor or idle script)
  uniform float uReduce;        // 1 = motion allowed, 0 = motion frozen

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vLocalPos;       // original mesh position \u2014 for stable surface speckles
  varying vec3 vViewPos;        // view-space position \u2014 fragment derives the displaced normal from this

  // Classic 3D simplex noise \u2014 Ashima Arts / Stefan Gustavson, MIT.
  vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
  vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(
              i.z+vec4(0.,i1.z,i2.z,1.))
            + i.y+vec4(0.,i1.y,i2.y,1.))
            + i.x+vec4(0.,i1.x,i2.x,1.));
    float n_=1./7.;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vLocalPos = position;            // stable surface coord \u2014 speckles stick here
    vec3 pos  = position;
    float t   = uTime * uReduce;

    // Slow anisotropic stretch \u2014 orb morphs through ovoid orientations over time.
    float ax = sin(t * 0.27 + 0.0) * 0.16;
    float ay = sin(t * 0.19 + 1.7) * 0.20;
    float az = sin(t * 0.23 + 3.1) * 0.12;
    pos *= vec3(1.0 + ax, 1.0 + ay, 1.0 + az);

    // Two octaves \u2014 keep the surface glossier/smoother for the new aesthetic.
    float nLow = snoise(pos * 0.55 + vec3( t * 0.18,  t * 0.13, -t * 0.15));
    float nMid = snoise(pos * 1.45 + vec3(-t * 0.22,  t * 0.20,  t * 0.18));

    // Look direction biases the noise sample \u2014 the "face" bulges where it looks.
    vec3 lookDir = vec3(uLook, 0.55);
    float facing = clamp(dot(normalize(pos), normalize(lookDir)), 0.0, 1.0);
    float bulge  = pow(facing, 2.5) * (0.08 + uActive * 0.10);

    // Gentle breath \u2014 overall radial pulse, very slow.
    float breath = sin(t * 0.55) * 0.022;

    float amp = mix(0.20, 0.34, uActive);
    float displacement = (nLow * 0.66 + nMid * 0.34) * amp + bulge + breath;

    pos += normal * displacement;

    vec4 mv  = modelViewMatrix * vec4(pos, 1.0);
    vNormal  = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    vViewPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,VF=`
  precision highp float;

  uniform vec3  uBase;
  uniform vec3  uRimA;     // cyan rim (upper-left light)
  uniform vec3  uRimB;     // magenta rim (lower-right light)
  uniform vec3  uSpeckA;   // electric pink speckle
  uniform vec3  uSpeckB;   // electric cyan speckle
  uniform float uActive;

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vLocalPos;
  varying vec3 vViewPos;

  // Simplex 3D noise \u2014 same as vertex, needed for speckle sampling.
  vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
  vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
  vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(
              i.z+vec4(0.,i1.z,i2.z,1.))
            + i.y+vec4(0.,i1.y,i2.y,1.))
            + i.x+vec4(0.,i1.x,i2.x,1.));
    float n_=1./7.;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    // True surface normal derived from view-space position derivatives \u2014 picks
    // up the actual wrinkles/ridges from the displaced geometry instead of the
    // smooth icosahedron normal. Gives proper shadow-in-valley, highlight-on-
    // ridge shading.
    vec3 dx = dFdx(vViewPos);
    vec3 dy = dFdy(vViewPos);
    vec3 n  = normalize(cross(dx, dy));
    vec3 v  = normalize(-vViewPos);

    // Fresnel \u2014 bright at glancing angles, dark where the surface faces us.
    float fres = 1.0 - clamp(dot(n, v), 0.0, 1.0);

    // \u2500\u2500 Diffuse 3D lighting on the body \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    // Two soft lights: warm-cyan key from upper-left-front, cool-magenta fill
    // from lower-right. Combined with derivative normal, this makes wrinkle
    // ridges catch light and valleys fall into shadow.
    vec3 keyDir  = normalize(vec3(-0.45,  0.70,  0.85));
    vec3 fillDir = normalize(vec3( 0.65, -0.35,  0.55));

    float diffKey  = max(0.0, dot(n, keyDir));
    float diffFill = max(0.0, dot(n, fillDir));

    // Ambient + key + fill \u2014 wrap the body in directional light so ridges and
    // valleys actually read as 3D.
    vec3 lit = uBase * (0.30 + diffKey * 0.95 + diffFill * 0.45);

    // \u2500\u2500 Two-tone rim lights \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    vec3 dirCyan    = normalize(vec3(-0.70,  0.55,  0.50));
    vec3 dirMagenta = normalize(vec3( 0.75, -0.30,  0.50));

    float cyanWrap    = max(0.0, dot(n, dirCyan));
    float magentaWrap = max(0.0, dot(n, dirMagenta));

    float rimCoreP = mix(2.2, 1.7, uActive);
    float rimCyan    = pow(cyanWrap,    1.3) * pow(fres, rimCoreP);
    float rimMagenta = pow(magentaWrap, 1.3) * pow(fres, rimCoreP);

    // \u2500\u2500 Specular highlight on ridges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    // Blinn-half-vector style spec from the key light \u2014 puts a moving glint on
    // ridges that face the light, sells the glossy / wet quality.
    vec3 halfKey = normalize(keyDir + v);
    float specKey = pow(max(0.0, dot(n, halfKey)), 32.0) * 0.55;

    vec3 col = lit
             + uRimA * rimCyan    * mix(1.10, 1.55, uActive)
             + uRimB * rimMagenta * mix(1.00, 1.45, uActive)
             + specKey * vec3(0.80, 0.95, 1.00);

    // \u2500\u2500 Iridescent speckles (sparser than before) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
    // Higher thresholds \u2192 ~half the previous density. Single big-scale layer
    // with a small-scale accent.
    float speckBig   = snoise(vLocalPos * 10.0);
    float speckSmall = snoise(vLocalPos * 24.0 + 1.7);
    float maskBig    = smoothstep(0.66, 0.74, speckBig);
    float maskSmall  = smoothstep(0.72, 0.78, speckSmall) * 0.40;
    float speckMask  = max(maskBig, maskSmall);

    // Per-cluster colour pick \u2014 biased toward pink, with cyan accents.
    float colorPick  = snoise(vLocalPos * 4.0 + 5.3);
    vec3  speckColor = mix(uSpeckA, uSpeckB, smoothstep(0.55, 0.75, colorPick));

    // Fade speckles in valley shadows so they read as surface, not stickers.
    float speckBody  = 1.0 - smoothstep(0.55, 0.95, fres);
    col += speckColor * speckMask * speckBody * 0.85;

    gl_FragColor = vec4(col, 1.0);
  }
`,rA={dark:{base:[.05,.075,.085],rimA:[.38,.86,.94],rimB:[.73,.33,.94],speckA:[.88,.275,.985],speckB:[.4,.91,1],eye:"rgba(255, 140, 245, 0.85)",eyeGlow:"rgba(225, 90, 230, 0.70)"},light:{base:[.075,.105,.12],rimA:[.4,.87,.94],rimB:[.745,.355,.94],speckA:[.895,.29,.985],speckB:[.42,.915,1],eye:"rgba(255, 150, 248, 0.88)",eyeGlow:"rgba(225, 100, 230, 0.75)"}},sA=[{x:-.65,y:0,dur:2400},{x:.32,y:0,dur:2800},{x:-.24,y:0,dur:2200},{x:0,y:-.55,dur:2800},{x:0,y:0,dur:2600}];function mv(){let t=(0,Ot.useRef)(null),e=(0,Ot.useRef)(null),n=(0,Ot.useRef)(null),i=(0,Ot.useRef)({w:320,h:320}),r=(0,Ot.useRef)({x:0,y:0}),s=(0,Ot.useRef)({x:0,y:0}),o=(0,Ot.useRef)(!1),a=(0,Ot.useRef)(0),l=(0,Ot.useRef)(0),c=gs(0),u=gs(0),f=Ed(c,{stiffness:200,damping:22,mass:.4}),h=Ed(u,{stiffness:200,damping:22,mass:.4});(0,Ot.useEffect)(()=>()=>{f.stop(),h.stop(),c.stop(),u.stop()},[f,h,c,u]);let[p,g]=(0,Ot.useState)("loading"),[v,y]=(0,Ot.useState)(0),[d,m]=(0,Ot.useState)(.85),x=kF(t);(0,Ot.useEffect)(()=>{let M=n.current;if(!M)return;let A=M.clientWidth||320,R=M.clientHeight||320;i.current={w:A,h:R};let w=rA[x],_=new cu,P=new pn(38,A/R,.1,100);P.position.z=4.4;let L;try{L=new pm({antialias:!0,alpha:!0})}catch{g("unsupported");return}let B=!1,H=!1,X=!1,k=[],ne=()=>{if(B=!0,!H){H=!0;for(let Q of k.reverse())try{Q()}catch{}try{L.forceContextLoss()}catch{}try{L.dispose()}catch{}M.contains(L.domElement)&&M.removeChild(L.domElement)}},O=()=>{ne(),g("unsupported")},Z=Q=>{Q.preventDefault(),O()};if(L.domElement.addEventListener("webglcontextlost",Z),k.push(()=>L.domElement.removeEventListener("webglcontextlost",Z)),L.debug){let Q=L.debug.onShaderError;L.debug.onShaderError=()=>{X=!0},k.push(()=>{L.debug.onShaderError=Q})}try{let Se=function(){if(!B)try{let Ue=Math.min(Fe.getDelta(),.05);Ne.uTime.value+=Ue;let Mt=1-Math.exp(-Ue*6);a.current+=(l.current-a.current)*Mt,Ne.uActive.value=a.current;let ke=o.current?7:2.2,et=1-Math.exp(-Ue*ke),I=s.current,We=r.current;I.x+=(We.x-I.x)*et,I.y+=(We.y-I.y)*et,Ne.uLook.value.set(I.x,-I.y);let Xe=.12+a.current*.06;He.position.x+=(I.x*Xe-He.position.x)*et,He.position.y+=(-I.y*Xe-He.position.y)*et;let st=i.current.w*.18;if(c.set(I.x*st),u.set(I.y*st),He.rotation.y+=Ue*.04,He.rotation.x+=Ue*.015,L.render(_,P),X){O();return}B||(de=requestAnimationFrame(Se))}catch{O()}};L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setSize(A,R),L.setClearColor(0,0),M.appendChild(L.domElement);let Q=A<400?32:64,ge=new du(1,Q);k.push(()=>ge.dispose());let Ne={uTime:{value:0},uActive:{value:0},uLook:{value:new Je(0,0)},uReduce:{value:1},uBase:{value:new je(...w.base)},uRimA:{value:new je(...w.rimA)},uRimB:{value:new je(...w.rimB)},uSpeckA:{value:new je(...w.speckA)},uSpeckB:{value:new je(...w.speckB)}},Qe=new Un({vertexShader:BF,fragmentShader:VF,uniforms:Ne,transparent:!0});k.push(()=>Qe.dispose());let He=new Qn(ge,Qe);_.add(He);let Ke=window.matchMedia("(prefers-reduced-motion: reduce)"),q=()=>{Ne.uReduce.value=Ke.matches?0:1};q(),Ke.addEventListener("change",q),k.push(()=>Ke.removeEventListener("change",q));let $=new ResizeObserver(Ue=>{if(!B)try{let Mt=Ue[0]?.contentRect;if(!Mt)return;let ke=Math.max(1,Math.floor(Mt.width)),et=Math.max(1,Math.floor(Mt.height));i.current={w:ke,h:et},L.setSize(ke,et),P.aspect=ke/et,P.updateProjectionMatrix()}catch{O()}});k.push(()=>$.disconnect()),$.observe(M);let de=0,Fe=new gu;return k.push(()=>cancelAnimationFrame(de)),Se(),B||g("ready"),ne}catch{return O(),ne}},[x,c,u]),(0,Ot.useEffect)(()=>{if(p==="unsupported")return;let M=t.current,A=e.current;if(!M||!A)return;function R(k,ne){let O=A.getBoundingClientRect(),Z=O.left+O.width/2,Q=O.top+O.height/2,ge=O.width/2,Ne=k-Z,Qe=ne-Q,He=Math.max(-1,Math.min(1,Ne/ge)),Ke=Math.max(-1,Math.min(1,Qe/ge)),$=Math.sqrt(He*He+Ke*Ke)<.62;o.current=!0,$?(l.current=1,r.current={x:He,y:Ke},m(.32)):(l.current=.35,r.current={x:He*.4,y:Ke*.4},m(.7))}function w(k){R(k.clientX,k.clientY)}function _(k){R(k.clientX,k.clientY),y(ne=>ne+1)}function P(){H(),o.current=!1,l.current=0,m(.85),y(k=>k+1)}function L(k){H(),R(k.clientX,k.clientY)}let B;function H(){window.clearTimeout(B)}function X(){H(),B=window.setTimeout(()=>{M?.matches(":hover")||P()},500)}return M.addEventListener("pointermove",w),M.addEventListener("pointerenter",_),M.addEventListener("pointerleave",P),M.addEventListener("pointerdown",L),M.addEventListener("pointerup",X),M.addEventListener("pointercancel",P),()=>{H(),M.removeEventListener("pointermove",w),M.removeEventListener("pointerenter",_),M.removeEventListener("pointerleave",P),M.removeEventListener("pointerdown",L),M.removeEventListener("pointerup",X),M.removeEventListener("pointercancel",P)}},[p]),(0,Ot.useEffect)(()=>{if(p==="unsupported"||typeof window>"u")return;let M=0,A;function R(){let w=sA[M];o.current||(r.current={x:w.x,y:w.y}),M=(M+1)%sA.length,A=window.setTimeout(R,w.dur)}return R(),()=>window.clearTimeout(A)},[p]),(0,Ot.useEffect)(()=>{if(p==="unsupported"||typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let M;function A(){let R=3800+Math.random()*3200;M=window.setTimeout(()=>{y(w=>w+1),A()},R)}return A(),()=>window.clearTimeout(M)},[p]);let S=rA[x];return(0,Di.jsx)("div",{ref:t,"data-graphics-status":p,"data-eye-open":d,className:"relative flex min-h-screen w-full items-center justify-center",style:{backgroundColor:x==="dark"?"#0A0A09":"#E8E8DF"},children:(0,Di.jsxs)("div",{ref:e,className:"relative aspect-square h-full max-h-[min(42vh,42vw)] w-full max-w-[min(42vh,42vw)] cursor-pointer select-none touch-none",children:[(0,Di.jsx)("div",{ref:n,className:"absolute inset-0"}),p==="ready"&&(0,Di.jsxs)(qc.div,{className:"pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-between",style:{x:f,y:h,width:"11%",height:"15%"},children:[(0,Di.jsx)(oA,{open:d,blinkKey:v,palette:S}),(0,Di.jsx)(oA,{open:d,blinkKey:v,palette:S})]}),p!=="ready"&&(0,Di.jsx)("p",{role:"status",className:"fallback",children:p==="unsupported"?"WebGL unavailable. The original 3D orb cannot be displayed here.":"Preparing the original 3D orb\u2026"})]})})}function oA({open:t,blinkKey:e,palette:n}){return(0,Di.jsx)(qc.div,{style:{width:"32%",height:"100%",background:n.eye,borderRadius:9999,boxShadow:`0 0 4px 0 ${n.eye}, 0 0 14px 1px ${n.eyeGlow}, 0 0 28px 4px ${n.eyeGlow}`,originY:.5},animate:{scaleY:t},transition:{type:"spring",stiffness:240,damping:22,mass:.4},children:(0,Di.jsx)(qc.div,{className:"h-full w-full",style:{background:n.eye,borderRadius:9999},initial:{scaleY:1},animate:{scaleY:[1,.05,1]},transition:{duration:.18,times:[0,.45,1],ease:"easeInOut"}},e)})}var fA=ot(js(),1),gv=[],xm=[window.addEventListener,document.addEventListener];function lA(t,e,n){return function(i,r,s){if(n.includes(i)){let o=typeof s=="boolean"?s:!!s?.capture;gv.some(a=>a[0]===t&&a[1]===i&&a[2]===r&&a[3]===o)||gv.push([t,i,r,o])}return e.call(t,i,r,s)}}window.addEventListener=lA(window,xm[0],["resize"]);document.addEventListener=lA(document,xm[1],["selectionchange"]);var cA=(0,aA.createRoot)(document.getElementById("app"));function xv(){Sm(!document.hidden),cA.render(document.hidden?null:(0,fA.jsx)(mv,{}))}xv();document.addEventListener("visibilitychange",xv);function uA(){Sm(!1),document.removeEventListener("visibilitychange",xv),cA.unmount();for(let[t,e,n,i]of gv)t.removeEventListener(e,n,i);Rv(),window.addEventListener=xm[0],document.addEventListener=xm[1],window.removeEventListener("pagehide",uA)}window.addEventListener("pagehide",uA);})();
