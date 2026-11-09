(()=>{var st=Object.defineProperty;var rs=Object.getOwnPropertyDescriptor;var u=(n,e)=>()=>(n&&(e=n(n=0)),e);var os=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),as=(n,e)=>{for(var t in e)st(n,t,{get:e[t],enumerable:!0})};var m=(n,e,t,s)=>{for(var i=s>1?void 0:s?rs(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&st(e,t,i),i};var de,ue,Re,nt,Z,it,E,Oe,pe,Le=u(()=>{/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */de=window,ue=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Re=Symbol(),nt=new WeakMap,Z=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ue&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=nt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&nt.set(t,e))}return e}toString(){return this.cssText}},it=n=>new Z(typeof n=="string"?n:n+"",void 0,Re),E=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new Z(t,n,Re)},Oe=(n,e)=>{ue?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let s=document.createElement("style"),i=de.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)})},pe=ue?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return it(t)})(n):n});var Ie,fe,rt,ls,ot,ze,at,Te,He,M,me=u(()=>{Le();Le();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */fe=window,rt=fe.trustedTypes,ls=rt?rt.emptyScript:"",ot=fe.reactiveElementPolyfillSupport,ze={toAttribute(n,e){switch(e){case Boolean:n=n?ls:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},at=(n,e)=>e!==n&&(e==e||n==n),Te={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:at},He="finalized",M=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,s)=>{let i=this._$Ep(s,t);i!==void 0&&(this._$Ev.set(i,s),e.push(i))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let s=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){let r=this[e];this[t]=i,this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(He))return!1;this[He]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(pe(i))}else e!==void 0&&t.push(pe(e));return t}static _$Ep(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Oe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=Te){var i;let r=this.constructor._$Ep(e,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:ze).toAttribute(t,s.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var s;let i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){let o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:ze;this._$El=r,this[r]=l.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||at)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};M[He]=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},ot?.({ReactiveElement:M}),((Ie=fe.reactiveElementVersions)!==null&&Ie!==void 0?Ie:fe.reactiveElementVersions=[]).push("1.6.3")});function yt(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(e):e}function B(n,e,t=n,s){var i,r,o,l;if(e===L)return e;let a=s!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[s]:t._$Cl,h=X(e)?void 0:e._$litDirective$;return a?.constructor!==h&&((r=a?._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(n),a._$AT(n,t,s)),s!==void 0?((o=(l=t)._$Co)!==null&&o!==void 0?o:l._$Co=[])[s]=a:t._$Cl=a),a!==void 0&&(e=B(n,a._$AS(n,e.values),a,s)),e}var Ne,ge,V,lt,Ve,C,mt,hs,O,K,X,gt,cs,Ue,Q,ht,ct,P,dt,ut,vt,bt,D,Ps,L,g,pt,R,ds,Y,Be,J,G,Ge,us,De,je,Fe,ft,St,ve=u(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ge=window,V=ge.trustedTypes,lt=V?V.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ve="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,mt="?"+C,hs=`<${mt}>`,O=document,K=()=>O.createComment(""),X=n=>n===null||typeof n!="object"&&typeof n!="function",gt=Array.isArray,cs=n=>gt(n)||typeof n?.[Symbol.iterator]=="function",Ue=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ct=/>/g,P=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,ut=/"/g,vt=/^(?:script|style|textarea|title)$/i,bt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),D=bt(1),Ps=bt(2),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),pt=new WeakMap,R=O.createTreeWalker(O,129,null,!1);ds=(n,e)=>{let t=n.length-1,s=[],i,r=e===2?"<svg>":"",o=Q;for(let l=0;l<t;l++){let a=n[l],h,c,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,c=o.exec(a),c!==null);)p=o.lastIndex,o===Q?c[1]==="!--"?o=ht:c[1]!==void 0?o=ct:c[2]!==void 0?(vt.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=P):c[3]!==void 0&&(o=P):o===P?c[0]===">"?(o=i??Q,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?P:c[3]==='"'?ut:dt):o===ut||o===dt?o=P:o===ht||o===ct?o=Q:(o=P,i=void 0);let v=o===P&&n[l+1].startsWith("/>")?" ":"";r+=o===Q?a+hs:d>=0?(s.push(h),a.slice(0,d)+Ve+a.slice(d)+C+v):a+C+(d===-2?(s.push(void 0),l):v)}return[yt(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),s]},Y=class n{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0,l=e.length-1,a=this.parts,[h,c]=ds(e,t);if(this.el=n.createElement(h,s),R.currentNode=this.el.content,t===2){let d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=R.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let p of i.getAttributeNames())if(p.endsWith(Ve)||p.startsWith(C)){let v=c[o++];if(d.push(p),v!==void 0){let _=i.getAttribute(v.toLowerCase()+Ve).split(C),S=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:S[2],strings:_,ctor:S[1]==="."?Ge:S[1]==="?"?De:S[1]==="@"?je:G})}else a.push({type:6,index:r})}for(let p of d)i.removeAttribute(p)}if(vt.test(i.tagName)){let d=i.textContent.split(C),p=d.length-1;if(p>0){i.textContent=V?V.emptyScript:"";for(let v=0;v<p;v++)i.append(d[v],K()),R.nextNode(),a.push({type:2,index:++r});i.append(d[p],K())}}}else if(i.nodeType===8)if(i.data===mt)a.push({type:2,index:r});else{let d=-1;for(;(d=i.data.indexOf(C,d+1))!==-1;)a.push({type:7,index:r}),d+=C.length-1}r++}}static createElement(e,t){let s=O.createElement("template");return s.innerHTML=e,s}};Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:s},parts:i}=this._$AD,r=((t=e?.creationScope)!==null&&t!==void 0?t:O).importNode(s,!0);R.currentNode=r;let o=R.nextNode(),l=0,a=0,h=i[0];for(;h!==void 0;){if(l===h.index){let c;h.type===2?c=new J(o,o.nextSibling,this,e):h.type===1?c=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(c=new Fe(o,this,e)),this._$AV.push(c),h=i[++a]}l!==h?.index&&(o=R.nextNode(),l++)}return R.currentNode=O,r}v(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},J=class n{constructor(e,t,s,i){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=(r=i?.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),X(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):cs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(O.createTextNode(e)),this._$AH=e}g(e){var t;let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Y.createElement(yt(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(s);else{let o=new Be(r,this),l=o.u(this.options);o.v(s),this.$(l),this._$AH=o}}_$AC(e){let t=pt.get(e.strings);return t===void 0&&pt.set(e.strings,t=new Y(e)),t}T(e){gt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let r of e)i===t.length?t.push(s=new n(this.k(K()),this.k(K()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},G=class{constructor(e,t,s,i,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){let r=this.strings,o=!1;if(r===void 0)e=B(this,e,t,0),o=!X(e)||e!==this._$AH&&e!==L,o&&(this._$AH=e);else{let l=e,a,h;for(e=r[0],a=0;a<r.length-1;a++)h=B(this,l[s+a],t,a),h===L&&(h=this._$AH[a]),o||(o=!X(h)||h!==this._$AH[a]),h===g?e=g:e!==g&&(e+=(h??"")+r[a+1]),this._$AH[a]=h}o&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ge=class extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},us=V?V.emptyScript:"",De=class extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,us):this.element.removeAttribute(this.name)}},je=class extends G{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){var s;if((e=(s=B(this,e,t,0))!==null&&s!==void 0?s:g)===L)return;let i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}},Fe=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}},ft=ge.litHtmlPolyfillSupport;ft?.(Y,J),((Ne=ge.litHtmlVersions)!==null&&Ne!==void 0?Ne:ge.litHtmlVersions=[]).push("2.8.0");St=(n,e,t)=>{var s,i;let r=(s=t?.renderBefore)!==null&&s!==void 0?s:e,o=r._$litPart$;if(o===void 0){let l=(i=t?.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new J(e.insertBefore(K(),l),l,void 0,t??{})}return o._$AI(n),o}});var qe,We,$,$t,wt=u(()=>{me();me();ve();ve();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */$=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=St(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return L}};$.finalized=!0,$._$litElement$=!0,(qe=globalThis.litElementHydrateSupport)===null||qe===void 0||qe.call(globalThis,{LitElement:$});$t=globalThis.litElementPolyfillSupport;$t?.({LitElement:$});((We=globalThis.litElementVersions)!==null&&We!==void 0?We:globalThis.litElementVersions=[]).push("3.3.3")});var ee=u(()=>{me();ve();wt()});var j,xt=u(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */j=n=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(n,e):((t,s)=>{let{kind:i,elements:r}=s;return{kind:i,elements:r,finisher(o){customElements.define(t,o)}}})(n,e)});function b(n){return(e,t)=>t!==void 0?fs(n,e,t):ps(n,e)}var ps,fs,Ze=u(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ps=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},fs=(n,e,t)=>{e.constructor.createProperty(t,n)}});var Et=u(()=>{Ze();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var I,T=u(()=>{/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */I=({finisher:n,descriptor:e})=>(t,s)=>{var i;if(s===void 0){let r=(i=t.originalKey)!==null&&i!==void 0?i:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(l){n(l,r)}),o}{let r=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),n?.(r,s)}}});var Mt=u(()=>{T();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});function te(n,e){return I({descriptor:t=>{let s={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){let i=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var r,o;return this[i]===void 0&&(this[i]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[i]}}return s}})}var kt=u(()=>{T();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var _t=u(()=>{T();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var At=u(()=>{T();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var Qe,tn,Ct=u(()=>{T();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */tn=((Qe=window.HTMLSlotElement)===null||Qe===void 0?void 0:Qe.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE)});var Pt=u(()=>{T();Ct();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */});var se=u(()=>{xt();Ze();Et();Mt();kt();_t();At();Pt()});function be(n,e,t){if(n&&n.length){let[s,i]=e,r=Math.PI/180*t,o=Math.cos(r),l=Math.sin(r);n.forEach(a=>{let[h,c]=a;a[0]=(h-s)*o-(c-i)*l+s,a[1]=(h-s)*l+(c-i)*o+i})}}function Rt(n,e,t){let s=[];n.forEach(i=>s.push(...i)),be(s,e,t)}function k(n){let e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Ot(n,e,t,s){let i=e[1]-n[1],r=n[0]-e[0],o=i*n[0]+r*n[1],l=s[1]-t[1],a=t[0]-s[0],h=l*t[0]+a*t[1],c=i*a-l*r;return c?[(a*o-r*h)/c,(i*h-l*o)/c]:null}function ye(n,e,t){let s=n.length;if(s<3)return!1;let i=[Number.MAX_SAFE_INTEGER,t],r=[e,t],o=0;for(let l=0;l<s;l++){let a=n[l],h=n[(l+1)%s];if(Ke(a,h,r,i)){if(ie(a,r,h)===0)return ne(a,r,h);o++}}return o%2===1}function ne(n,e,t){return e[0]<=Math.max(n[0],t[0])&&e[0]>=Math.min(n[0],t[0])&&e[1]<=Math.max(n[1],t[1])&&e[1]>=Math.min(n[1],t[1])}function ie(n,e,t){let s=(e[1]-n[1])*(t[0]-e[0])-(e[0]-n[0])*(t[1]-e[1]);return s===0?0:s>0?1:2}function Ke(n,e,t,s){let i=ie(n,e,t),r=ie(n,e,s),o=ie(t,s,n),l=ie(t,s,e);return!!(i!==r&&o!==l||i===0&&ne(n,t,e)||r===0&&ne(n,s,e)||o===0&&ne(t,n,s)||l===0&&ne(t,e,s))}var F=u(()=>{});function re(n,e){let t=[0,0],s=Math.round(e.hachureAngle+90);s&&be(n,t,s);let i=ms(n,e);return s&&(be(n,t,-s),Rt(i,t,-s)),i}function ms(n,e){let t=[...n];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);let s=[];if(t&&t.length>2){let i=e.hachureGap;i<0&&(i=e.strokeWidth*4),i=Math.max(i,.1);let r=[];for(let a=0;a<t.length-1;a++){let h=t[a],c=t[a+1];if(h[1]!==c[1]){let d=Math.min(h[1],c[1]);r.push({ymin:d,ymax:Math.max(h[1],c[1]),x:d===h[1]?h[0]:c[0],islope:(c[0]-h[0])/(c[1]-h[1])})}}if(r.sort((a,h)=>a.ymin<h.ymin?-1:a.ymin>h.ymin?1:a.x<h.x?-1:a.x>h.x?1:a.ymax===h.ymax?0:(a.ymax-h.ymax)/Math.abs(a.ymax-h.ymax)),!r.length)return s;let o=[],l=r[0].ymin;for(;o.length||r.length;){if(r.length){let a=-1;for(let c=0;c<r.length&&!(r[c].ymin>l);c++)a=c;r.splice(0,a+1).forEach(c=>{o.push({s:l,edge:c})})}if(o=o.filter(a=>!(a.edge.ymax<=l)),o.sort((a,h)=>a.edge.x===h.edge.x?0:(a.edge.x-h.edge.x)/Math.abs(a.edge.x-h.edge.x)),o.length>1)for(let a=0;a<o.length;a=a+2){let h=a+1;if(h>=o.length)break;let c=o[a].edge,d=o[h].edge;s.push([[Math.round(c.x),l],[Math.round(d.x),l]])}l+=i,o.forEach(a=>{a.edge.x=a.edge.x+i*a.edge.islope})}}return s}var oe=u(()=>{F()});var q,Se=u(()=>{F();oe();q=class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,s=!1){let i=re(e,t);if(s){let o=this.connectingLines(e,i);i=i.concat(o)}return{type:"fillSketch",ops:this.renderLines(i,t)}}renderLines(e,t){let s=[];for(let i of e)s.push(...this.helper.doubleLineOps(i[0][0],i[0][1],i[1][0],i[1][1],t));return s}connectingLines(e,t){let s=[];if(t.length>1)for(let i=1;i<t.length;i++){let r=t[i-1];if(k(r)<3)continue;let l=[t[i][0],r[1]];if(k(l)>3){let a=this.splitOnIntersections(e,l);s.push(...a)}}return s}midPointInPolygon(e,t){return ye(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){let s=Math.max(5,k(t)*.1),i=[];for(let r=0;r<e.length;r++){let o=e[r],l=e[(r+1)%e.length];if(Ke(o,l,...t)){let a=Ot(o,l,t[0],t[1]);if(a){let h=k([a,t[0]]),c=k([a,t[1]]);h>s&&c>s&&i.push({point:a,distance:h})}}}if(i.length>1){let r=i.sort((a,h)=>a.distance-h.distance).map(a=>a.point);if(ye(e,...t[0])||r.shift(),ye(e,...t[1])||r.pop(),r.length<=1)return this.midPointInPolygon(e,t)?[t]:[];let o=[t[0],...r,t[1]],l=[];for(let a=0;a<o.length-1;a+=2){let h=[o[a],o[a+1]];this.midPointInPolygon(e,h)&&l.push(h)}return l}else return this.midPointInPolygon(e,t)?[t]:[]}}});var ae,Xe=u(()=>{Se();ae=class extends q{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}}});var Lt=u(()=>{Se()});var It=u(()=>{F();oe()});var Tt=u(()=>{F();oe()});var zt=u(()=>{F();oe()});var Ht=u(()=>{Se();Xe();Lt();It();Tt();zt()});var $e,Nt=u(()=>{$e=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}});var Ut=u(()=>{});var Vt=u(()=>{});var Bt=u(()=>{});var Gt=u(()=>{Ut();Vt();Bt()});function Je(n,e,t,s,i){return{type:"path",ops:le(n,e,t,s,i)}}function ys(n,e,t){let s=(n||[]).length;if(s>2){let i=[];for(let r=0;r<s-1;r++)i.push(...le(n[r][0],n[r][1],n[r+1][0],n[r+1][1],t));return e&&i.push(...le(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:i}}else if(s===2)return Je(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function et(n,e){return ys(n,!0,e)}function qt(n,e,t,s,i){let r=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return et(r,i)}function Wt(n,e,t,s,i){let r=Zt(t,s,i);return Ss(n,e,i,r).opset}function Zt(n,e,t){let s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),i=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s),r=Math.PI*2/i,o=Math.abs(n/2),l=Math.abs(e/2),a=1-t.curveFitting;return o+=f(o*a,t),l+=f(l*a,t),{increment:r,rx:o,ry:l}}function Ss(n,e,t,s){let[i,r]=Ft(s.increment,n,e,s.rx,s.ry,1,s.increment*Ye(.1,Ye(.4,1,t),t),t),o=jt(i,null,t);if(!t.disableMultiStroke){let[l]=Ft(s.increment,n,e,s.rx,s.ry,1.5,0,t),a=jt(l,null,t);o=o.concat(a)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function Qt(n,e,t,s,i){return le(n,e,t,s,i,!0)}function Kt(n){return n.randomizer||(n.randomizer=new $e(n.seed||0)),n.randomizer.next()}function Ye(n,e,t,s=1){return t.roughness*s*(Kt(t)*(e-n)+n)}function f(n,e,t=1){return Ye(-n,n,e,t)}function le(n,e,t,s,i,r=!1){let o=r?i.disableMultiStrokeFill:i.disableMultiStroke,l=Dt(n,e,t,s,i,!0,!1);if(o)return l;let a=Dt(n,e,t,s,i,!0,!0);return l.concat(a)}function Dt(n,e,t,s,i,r,o){let l=Math.pow(n-t,2)+Math.pow(e-s,2),a=Math.sqrt(l),h=1;a<200?h=1:a>500?h=.4:h=-.0016668*a+1.233334;let c=i.maxRandomnessOffset||0;c*c*100>l&&(c=a/10);let d=c/2,p=.2+Kt(i)*.2,v=i.bowing*i.maxRandomnessOffset*(s-e)/200,_=i.bowing*i.maxRandomnessOffset*(n-t)/200;v=f(v,i,h),_=f(_,i,h);let S=[],A=()=>f(d,i,h),U=()=>f(c,i,h);return r&&(o?S.push({op:"move",data:[n+A(),e+A()]}):S.push({op:"move",data:[n+f(c,i,h),e+f(c,i,h)]})),o?S.push({op:"bcurveTo",data:[v+n+(t-n)*p+A(),_+e+(s-e)*p+A(),v+n+2*(t-n)*p+A(),_+e+2*(s-e)*p+A(),t+A(),s+A()]}):S.push({op:"bcurveTo",data:[v+n+(t-n)*p+U(),_+e+(s-e)*p+U(),v+n+2*(t-n)*p+U(),_+e+2*(s-e)*p+U(),t+U(),s+U()]}),S}function jt(n,e,t){let s=n.length,i=[];if(s>3){let r=[],o=1-t.curveTightness;i.push({op:"move",data:[n[1][0],n[1][1]]});for(let l=1;l+2<s;l++){let a=n[l];r[0]=[a[0],a[1]],r[1]=[a[0]+(o*n[l+1][0]-o*n[l-1][0])/6,a[1]+(o*n[l+1][1]-o*n[l-1][1])/6],r[2]=[n[l+1][0]+(o*n[l][0]-o*n[l+2][0])/6,n[l+1][1]+(o*n[l][1]-o*n[l+2][1])/6],r[3]=[n[l+1][0],n[l+1][1]],i.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&e.length===2){let l=t.maxRandomnessOffset;i.push({op:"lineTo",data:[e[0]+f(l,t),e[1]+f(l,t)]})}}else s===3?(i.push({op:"move",data:[n[1][0],n[1][1]]}),i.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&i.push(...le(n[0][0],n[0][1],n[1][0],n[1][1],t));return i}function Ft(n,e,t,s,i,r,o,l){let a=[],h=[],c=f(.5,l)-Math.PI/2;h.push([f(r,l)+e+.9*s*Math.cos(c-n),f(r,l)+t+.9*i*Math.sin(c-n)]);for(let d=c;d<Math.PI*2+c-.01;d=d+n){let p=[f(r,l)+e+s*Math.cos(d),f(r,l)+t+i*Math.sin(d)];a.push(p),h.push(p)}return h.push([f(r,l)+e+s*Math.cos(c+Math.PI*2+o*.5),f(r,l)+t+i*Math.sin(c+Math.PI*2+o*.5)]),h.push([f(r,l)+e+.98*s*Math.cos(c+o),f(r,l)+t+.98*i*Math.sin(c+o)]),h.push([f(r,l)+e+.9*s*Math.cos(c+o*.5),f(r,l)+t+.9*i*Math.sin(c+o*.5)]),[h,a]}var Xt=u(()=>{Ht();Nt();Gt()});function we(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function ws(n,e){let t="";for(let s of n.ops){let i=s.data;switch(s.op){case"move":if(e&&t)break;t+=`M${i[0]} ${i[1]} `;break;case"bcurveTo":t+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":t+=`L${i[0]} ${i[1]} `;break}}return t.trim()}function xs(n,e){let t=document.createElementNS("http://www.w3.org/2000/svg",n);if(e)for(let s in e)t.setAttributeNS(null,s,e[s]);return t}function xe(n,e,t=!1){let s=xs("path",{d:ws(n,t)});return e&&e.appendChild(s),s}function he(n,e,t,s,i,r){return xe(qt(e+2,t+2,s-4,i-4,we(r)),n)}function ce(n,e,t,s,i,r){return xe(Je(e,t,s,i,we(r)),n)}function Yt(n,e,t){return xe(et(e,we(t)),n,!0)}function Ee(n,e){let s=new ae($s).fillPolygon(n,we(e));return xe(s,null)}var $s,Me=u(()=>{Xt();Xe();$s={randOffset(n,e){return n},randOffsetWithRange(n,e,t){return(n+e)/2},ellipse(n,e,t,s,i){return Wt(n,e,t,s,i)},doubleLineOps(n,e,t,s,i){return Qt(n,e,t,s,i)}}});function Jt(){return Math.floor(Math.random()*2**31)}function tt(n,e,t){n.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}var ke,z,_e=u(()=>{ee();se();ke=E`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`,z=class extends ${constructor(){super(...arguments);this.lastSize=[0,0];this.seed=Math.floor(Math.random()*2**31)}performUpdate(){try{super.performUpdate()}catch{this.dispatchEvent(new CustomEvent("wired-failure",{bubbles:!0,composed:!0}))}}updated(t){this.wiredRender()}wiredRender(t=!1){if(this.isConnected&&this.svg){let s=this.canvasSize();if(!t&&s[0]===this.lastSize[0]&&s[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${s[0]}`),this.svg.setAttribute("height",`${s[1]}`),this.draw(this.svg,s),this.lastSize=s,this.classList.add("wired-rendered")}}fire(t,s){tt(this,t,s)}};m([te("svg")],z.prototype,"svg",2)});var W,es=u(()=>{_e();Me();ee();se();W=class extends z{constructor(){super();this.elevation=1;this.roAttached=!1;window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[ke,E`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return D`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(t){let s=t.has("fill");this.wiredRender(s),this.attachResizeListener()}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.attachResizeListener()}disconnectedCallback(){super.disconnectedCallback(),this.detachResizeListener()}attachResizeListener(){this.isConnected&&(this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&(window.removeEventListener("resize",this.windowResizeHandler),this.windowResizeHandler=void 0),this.roAttached=!1}canvasSize(){let t=this.getBoundingClientRect(),s=Math.min(Math.max(1,this.elevation),5),i=t.width+(s-1)*2,r=t.height+(s-1)*2;return[i,r]}draw(t,s){let i=Math.min(Math.max(1,this.elevation),5),r={width:s[0]-(i-1)*2,height:s[1]-(i-1)*2};if(this.fill&&this.fill.trim()){let o=Ee([[2,2],[r.width-4,2],[r.width-2,r.height-4],[2,r.height-4]],this.seed);o.classList.add("cardFill"),t.style.setProperty("--wired-card-background-fill",this.fill.trim()),t.appendChild(o)}he(t,2,2,r.width-4,r.height-4,this.seed);for(let o=1;o<i;o++)ce(t,o*2,r.height-4+o*2,r.width-4+o*2,r.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,ce(t,r.width-4+o*2,r.height-4+o*2,r.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,ce(t,o*2,r.height-4+o*2,r.width-4+o*2,r.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,ce(t,r.width-4+o*2,r.height-4+o*2,r.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};m([b({type:Number})],W.prototype,"elevation",2),m([b({type:String})],W.prototype,"fill",2),W=m([j("wired-card")],W)});var H,ts=u(()=>{_e();ee();se();Me();H=class extends z{constructor(){super(...arguments);this.value="";this.name="";this.selected=!1}static get styles(){return[ke,E`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (prefers-reduced-motion: reduce) {
        button span, svg path { transition: none !important; }
        button:active span { transform: none; }
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return D`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){let t=this.getBoundingClientRect();return[t.width,t.height]}draw(t,s){let i=Ee([[0,0],[s[0],0],[s[0],s[1]],[0,s[1]]],this.seed);t.appendChild(i)}};m([b()],H.prototype,"value",2),m([b()],H.prototype,"name",2),m([b({type:Boolean})],H.prototype,"selected",2),H=m([j("wired-item")],H)});var ss={};as(ss,{WiredCombo:()=>w});var w,ns=u(()=>{ee();se();Me();_e();es();ts();w=class extends ${constructor(){super(...arguments);this.disabled=!1;this.terminated=!1;this.inputsBound=!1;this.blurHandler=()=>{this.terminated||!this.isConnected||this.cardShowing&&this.setCardShowing(!1)};this.keyHandler=t=>{if(!(this.terminated||!this.isConnected||this.disabled||document.hidden))switch(t.keyCode){case 37:case 38:t.preventDefault(),this.selectPrevious();break;case 39:case 40:t.preventDefault(),this.selectNext();break;case 27:t.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:t.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:t.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}};this.timers=new Set;this.seed=Jt();this.cardShowing=!1;this.itemNodes=[]}bindInputListeners(){this.terminated||!this.isConnected||this.inputsBound||(this.addEventListener("blur",this.blurHandler),this.addEventListener("keydown",this.keyHandler),this.inputsBound=!0)}unbindInputListeners(){this.removeEventListener("blur",this.blurHandler),this.removeEventListener("keydown",this.keyHandler),this.inputsBound=!1}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.bindInputListeners()}dispose(){this.terminated=!0,this.unbindInputListeners(),this.pause()}deferred(t,s=0){if(this.terminated||!this.isConnected)return;let i=setTimeout(()=>{if(this.timers.delete(i),!this.terminated&&this.isConnected&&!document.hidden)try{t()}catch{this.dispatchEvent(new CustomEvent("wired-failure",{bubbles:!0,composed:!0}))}},s);this.timers.add(i)}pause(){this.timers.forEach(clearTimeout),this.timers.clear(),this.setCardShowing(!1)}disconnectedCallback(){this.unbindInputListeners(),this.pause(),super.disconnectedCallback()}performUpdate(){if(!this.terminated)try{super.performUpdate()}catch{this.dispatchEvent(new CustomEvent("wired-failure",{bubbles:!0,composed:!0}))}}static get styles(){return E`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return D`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.setAttribute("aria-disabled",String(this.disabled)),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.bindInputListeners()}updated(t){t.has("disabled")&&this.refreshDisabledState();let s=this.svg;for(;s.hasChildNodes();)s.removeChild(s.lastChild);let i=this.shadowRoot.getElementById("container").getBoundingClientRect();s.setAttribute("width",`${i.width}`),s.setAttribute("height",`${i.height}`);let r=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=r.height+"px",he(s,0,0,r.width,r.height,this.seed);let o=r.width-4;he(s,o,0,34,r.height,this.seed);let l=Math.max(0,Math.abs((r.height-24)/2)),a=Yt(s,[[o+8,5+l],[o+26,5+l],[o+17,l+Math.min(r.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];let h=this.shadowRoot.getElementById("slot").assignedNodes();if(h&&h.length)for(let c=0;c<h.length;c++){let d=h[c];d.tagName==="WIRED-ITEM"&&(d.setAttribute("role","option"),this.itemNodes.push(d))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));let s=this.shadowRoot.getElementById("slot").assignedNodes();if(s){let i=null;for(let r=0;r<s.length;r++){let o=s[r];if(o.tagName==="WIRED-ITEM"){let l=o.value||o.getAttribute("value")||"";if(this.selected&&l===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(t){t&&(this.terminated||!this.isConnected||this.disabled)||(this.timers.forEach(clearTimeout),this.timers.clear(),this.card&&(this.cardShowing=t,this.card.style.display=t?"":"none",t&&this.deferred(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{let r=i;r.requestUpdate&&r.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`)))}onItemClick(t){t.stopPropagation(),!(this.terminated||!this.isConnected||this.disabled||document.hidden)&&(this.selected=t.target.value,this.refreshSelection(),this.fireSelected(),this.deferred(()=>{this.setCardShowing(!1)}))}fireSelected(){tt(this,"selected",{selected:this.selected})}selectPrevious(){if(this.terminated||!this.isConnected||this.disabled)return;let t=this.itemNodes;if(t.length){let s=-1;for(let i=0;i<t.length;i++)if(t[i]===this.lastSelectedItem){s=i;break}s<0?s=0:s===0?s=t.length-1:s--,this.selected=t[s].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){if(this.terminated||!this.isConnected||this.disabled)return;let t=this.itemNodes;if(t.length){let s=-1;for(let i=0;i<t.length;i++)if(t[i]===this.lastSelectedItem){s=i;break}s<0||s>=t.length-1?s=0:s++,this.selected=t[s].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(t){t.stopPropagation(),!(this.terminated||!this.isConnected||this.disabled||document.hidden)&&this.setCardShowing(!this.cardShowing)}};m([b({type:Object})],w.prototype,"value",2),m([b({type:String,reflect:!0})],w.prototype,"selected",2),m([b({type:Boolean,reflect:!0})],w.prototype,"disabled",2),m([te("svg")],w.prototype,"svg",2),m([te("#card")],w.prototype,"card",2),w=m([j("wired-combo")],w)});var Es=os(()=>{var is=document.getElementById("demo"),y=is||document.body,N=new AbortController,Ce=!1,Pe;function x(n=!1){Ce||(Ce=!0,N.abort(),Pe?.disconnect(),Pe=void 0,y.querySelectorAll("wired-combo").forEach(e=>{try{e.dispose?.()}catch{}}),y.textContent=n?"The original example could not render. Close and reopen to retry.":"",n&&y.setAttribute("role","alert"))}function Ae(){Ce||document.hidden||(y.querySelectorAll("wired-combo").forEach(n=>n.requestUpdate()),y.querySelectorAll("wired-item").forEach(n=>n.wiredRender(!0)))}is?(document.addEventListener("wired-failure",()=>x(!0),{signal:N.signal}),window.addEventListener("pagehide",()=>x(),{signal:N.signal}),window.addEventListener("atlas:dispose",()=>x(),{signal:N.signal}),document.addEventListener("visibilitychange",()=>{if(document.hidden)y.querySelectorAll("wired-combo").forEach(n=>n.pause());else try{Ae()}catch{x(!0)}},{signal:N.signal}),Promise.resolve().then(()=>(ns(),ss)).then(()=>{if(!Ce)try{let n=document.getElementById("original");y.appendChild(document.importNode(n.content,!0)),y.querySelector("button").addEventListener("click",()=>{try{let e=Array.from(y.querySelectorAll("wired-combo")).map(t=>t.selected||"(none)");y.querySelector("output").textContent=e.join(" \xB7 ")}catch{x(!0)}},{signal:N.signal}),window.ResizeObserver?(Pe=new ResizeObserver(()=>{try{Ae()}catch{x(!0)}}),Pe.observe(y)):window.addEventListener("resize",()=>{try{Ae()}catch{x(!0)}},{signal:N.signal}),Ae()}catch{x(!0)}}).catch(()=>x(!0))):x(!0)});Es();})();
