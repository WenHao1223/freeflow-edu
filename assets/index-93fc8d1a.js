var cI=Object.defineProperty;var hI=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>(hI(t,typeof e!="symbol"?e+"":e,n),n);function dI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function fI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ov={exports:{}},fu={},Lv={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),pI=Symbol.for("react.portal"),mI=Symbol.for("react.fragment"),gI=Symbol.for("react.strict_mode"),yI=Symbol.for("react.profiler"),vI=Symbol.for("react.provider"),_I=Symbol.for("react.context"),EI=Symbol.for("react.forward_ref"),wI=Symbol.for("react.suspense"),TI=Symbol.for("react.memo"),II=Symbol.for("react.lazy"),Pm=Symbol.iterator;function SI(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,Uv={};function rs(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=rs.prototype;function cf(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Mv}var hf=cf.prototype=new Fv;hf.constructor=cf;Vv(hf,rs.prototype);hf.isPureReactComponent=!0;var km=Array.isArray,$v=Object.prototype.hasOwnProperty,df={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function jv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$v.call(e,r)&&!Bv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ko,type:t,key:s,ref:o,props:i,_owner:df.current}}function AI(t,e){return{$$typeof:Ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ko}function CI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CI(""+t.key):e.toString(36)}function qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ko:case pI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_c(o,0):r,km(i)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),qa(i,e,n,"",function(u){return u})):i!=null&&(ff(i)&&(i=AI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",km(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_c(s,a);o+=qa(s,e,n,l,i)}else if(l=SI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_c(s,a++),o+=qa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var r=[],i=0;return qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Qa={transition:null},PI={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:df};G.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=rs;G.Fragment=mI;G.Profiler=yI;G.PureComponent=cf;G.StrictMode=gI;G.Suspense=wI;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PI;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=df.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$v.call(e,l)&&!Bv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ko,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:_I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vI,_context:t},t.Consumer=t};G.createElement=jv;G.createFactory=function(t){var e=jv.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:EI,render:t}};G.isValidElement=ff;G.lazy=function(t){return{$$typeof:II,_payload:{_status:-1,_result:t},_init:RI}};G.memo=function(t,e){return{$$typeof:TI,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return ot.current.useCallback(t,e)};G.useContext=function(t){return ot.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};G.useEffect=function(t,e){return ot.current.useEffect(t,e)};G.useId=function(){return ot.current.useId()};G.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ot.current.useMemo(t,e)};G.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};G.useRef=function(t){return ot.current.useRef(t)};G.useState=function(t){return ot.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return ot.current.useTransition()};G.version="18.2.0";Lv.exports=G;var P=Lv.exports;const zv=fI(P),kI=dI({__proto__:null,default:zv},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NI=P,xI=Symbol.for("react.element"),DI=Symbol.for("react.fragment"),bI=Object.prototype.hasOwnProperty,OI=NI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LI={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bI.call(e,r)&&!LI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xI,type:t,key:s,ref:o,props:i,_owner:OI.current}}fu.Fragment=DI;fu.jsx=Kv;fu.jsxs=Kv;Ov.exports=fu;var m=Ov.exports,Nh={},Hv={exports:{}},It={},Wv={exports:{}},Gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var H=D.length;D.push(K);e:for(;0<H;){var me=H-1>>>1,Pe=D[me];if(0<i(Pe,K))D[me]=K,D[H]=Pe,H=me;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var K=D[0],H=D.pop();if(H!==K){D[0]=H;e:for(var me=0,Pe=D.length,ga=Pe>>>1;me<ga;){var wr=2*(me+1)-1,vc=D[wr],Tr=wr+1,ya=D[Tr];if(0>i(vc,H))Tr<Pe&&0>i(ya,vc)?(D[me]=ya,D[Tr]=H,me=Tr):(D[me]=vc,D[wr]=H,me=wr);else if(Tr<Pe&&0>i(ya,H))D[me]=ya,D[Tr]=H,me=Tr;else break e}}return K}function i(D,K){var H=D.sortIndex-K.sortIndex;return H!==0?H:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,_=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(D){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=D)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function v(D){if(E=!1,f(D),!_)if(n(l)!==null)_=!0,gc(w);else{var K=n(u);K!==null&&yc(v,K.startTime-D)}}function w(D,K){_=!1,E&&(E=!1,g(k),k=-1),y=!0;var H=d;try{for(f(K),h=n(l);h!==null&&(!(h.expirationTime>K)||D&&!Te());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Pe=me(h.expirationTime<=K);K=t.unstable_now(),typeof Pe=="function"?h.callback=Pe:h===n(l)&&r(l),f(K)}else r(l);h=n(l)}if(h!==null)var ga=!0;else{var wr=n(u);wr!==null&&yc(v,wr.startTime-K),ga=!1}return ga}finally{h=null,d=H,y=!1}}var I=!1,R=null,k=-1,M=5,V=-1;function Te(){return!(t.unstable_now()-V<M)}function hn(){if(R!==null){var D=t.unstable_now();V=D;var K=!0;try{K=R(!0,D)}finally{K?bn():(I=!1,R=null)}}else I=!1}var bn;if(typeof p=="function")bn=function(){p(hn)};else if(typeof MessageChannel<"u"){var Rm=new MessageChannel,uI=Rm.port2;Rm.port1.onmessage=hn,bn=function(){uI.postMessage(null)}}else bn=function(){T(hn,0)};function gc(D){R=D,I||(I=!0,bn())}function yc(D,K){k=T(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,gc(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var H=d;d=K;try{return D()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=d;d=D;try{return K()}finally{d=H}},t.unstable_scheduleCallback=function(D,K,H){var me=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?me+H:me):H=me,D){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=H+Pe,D={id:c++,callback:K,priorityLevel:D,startTime:H,expirationTime:Pe,sortIndex:-1},H>me?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(E?(g(k),k=-1):E=!0,yc(v,H-me))):(D.sortIndex=Pe,e(l,D),_||y||(_=!0,gc(w))),D},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(D){var K=d;return function(){var H=d;d=K;try{return D.apply(this,arguments)}finally{d=H}}}})(Gv);Wv.exports=Gv;var MI=Wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=P,wt=MI;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,so={};function ti(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(so[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,VI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xm={},Dm={};function UI(t){return xh.call(Dm,t)?!0:xh.call(xm,t)?!1:VI.test(t)?Dm[t]=!0:(xm[t]=!0,!1)}function FI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $I(t,e,n,r){if(e===null||typeof e>"u"||FI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Be[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Be[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Be[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($I(e,n,i,r)&&(n=null),r||i===null?UI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),vf=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Oh=Symbol.for("react.suspense_list"),_f=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),bm=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,Ec;function ks(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function BI(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Dh:return"Profiler";case yf:return"StrictMode";case bh:return"Suspense";case Oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case Yv:return(t._context.displayName||"Context")+".Provider";case vf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _f:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function jI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zI(t){var e=Zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=zI(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mh(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function Vh(t,e){t_(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uh(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uh(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ns(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function n_(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,i_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KI=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){KI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HI=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(t,e){if(e){if(HI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kh=null,Ni=null,xi=null;function Um(t){if(t=Go(t)){if(typeof Kh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=vu(e),Kh(t.stateNode,t.type,e))}}function a_(t){Ni?xi?xi.push(t):xi=[t]:Ni=t}function l_(){if(Ni){var t=Ni,e=xi;if(xi=Ni=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function u_(t,e){return t(e)}function c_(){}var Ic=!1;function h_(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return u_(t,e,n)}finally{Ic=!1,(Ni!==null||xi!==null)&&(c_(),l_())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Hh=!1;if(wn)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Hh=!1}function WI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var js=!1,ml=null,gl=!1,Wh=null,GI={onError:function(t){js=!0,ml=t}};function qI(t,e,n,r,i,s,o,a,l){js=!1,ml=null,WI.apply(GI,arguments)}function QI(t,e,n,r,i,s,o,a,l){if(qI.apply(this,arguments),js){if(js){var u=ml;js=!1,ml=null}else throw Error(C(198));gl||(gl=!0,Wh=u)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(ni(t)!==t)throw Error(C(188))}function YI(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fm(i),t;if(s===r)return Fm(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function f_(t){return t=YI(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=wt.unstable_scheduleCallback,$m=wt.unstable_cancelCallback,XI=wt.unstable_shouldYield,JI=wt.unstable_requestPaint,ge=wt.unstable_now,ZI=wt.unstable_getCurrentPriorityLevel,wf=wt.unstable_ImmediatePriority,g_=wt.unstable_UserBlockingPriority,yl=wt.unstable_NormalPriority,eS=wt.unstable_LowPriority,y_=wt.unstable_IdlePriority,pu=null,en=null;function tS(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:iS,nS=Math.log,rS=Math.LN2;function iS(t){return t>>>=0,t===0?32:31-(nS(t)/rS|0)|0}var Ta=64,Ia=4194304;function xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xs(a):(s&=o,s!==0&&(r=xs(s)))}else o=n&~i,o!==0?r=xs(o):s!==0&&(r=xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function sS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=sS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function aS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,If,w_,T_,I_,qh=!1,Sa=[],Qn=null,Yn=null,Xn=null,lo=new Map,uo=new Map,Fn=[],lS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Go(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uS(t,e,n,r,i){switch(e){case"focusin":return Qn=vs(Qn,t,e,n,r,i),!0;case"dragenter":return Yn=vs(Yn,t,e,n,r,i),!0;case"mouseover":return Xn=vs(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return lo.set(s,vs(lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,uo.set(s,vs(uo.get(s)||null,t,e,n,r,i)),!0}return!1}function S_(t){var e=Rr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,I_(t.priority,function(){w_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zh=r,n.target.dispatchEvent(r),zh=null}else return e=Go(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function jm(t,e,n){Ya(t)&&n.delete(e)}function cS(){qh=!1,Qn!==null&&Ya(Qn)&&(Qn=null),Yn!==null&&Ya(Yn)&&(Yn=null),Xn!==null&&Ya(Xn)&&(Xn=null),lo.forEach(jm),uo.forEach(jm)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,qh||(qh=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,cS)))}function co(t){function e(i){return _s(i,t)}if(0<Sa.length){_s(Sa[0],t);for(var n=1;n<Sa.length;n++){var r=Sa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qn!==null&&_s(Qn,t),Yn!==null&&_s(Yn,t),Xn!==null&&_s(Xn,t),lo.forEach(e),uo.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)S_(n),n.blockedOn===null&&Fn.shift()}var Di=Nn.ReactCurrentBatchConfig,_l=!0;function hS(t,e,n,r){var i=J,s=Di.transition;Di.transition=null;try{J=1,Sf(t,e,n,r)}finally{J=i,Di.transition=s}}function dS(t,e,n,r){var i=J,s=Di.transition;Di.transition=null;try{J=4,Sf(t,e,n,r)}finally{J=i,Di.transition=s}}function Sf(t,e,n,r){if(_l){var i=Qh(t,e,n,r);if(i===null)Oc(t,e,r,El,n),Bm(t,r);else if(uS(i,t,e,n,r))r.stopPropagation();else if(Bm(t,r),e&4&&-1<lS.indexOf(t)){for(;i!==null;){var s=Go(i);if(s!==null&&E_(s),s=Qh(t,e,n,r),s===null&&Oc(t,e,r,El,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var El=null;function Qh(t,e,n,r){if(El=null,t=Ef(r),t=Rr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZI()){case wf:return 1;case g_:return 4;case yl:case eS:return 16;case y_:return 536870912;default:return 16}default:return 16}}var Hn=null,Af=null,Xa=null;function C_(){if(Xa)return Xa;var t,e=Af,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function zm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:zm,this.isPropagationStopped=zm,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=St(is),Wo=he({},is,{view:0,detail:0}),fS=St(Wo),Ac,Cc,Es,mu=he({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Ac=t.screenX-Es.screenX,Cc=t.screenY-Es.screenY):Cc=Ac=0,Es=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),Km=St(mu),pS=he({},mu,{dataTransfer:0}),mS=St(pS),gS=he({},Wo,{relatedTarget:0}),Rc=St(gS),yS=he({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=St(yS),_S=he({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ES=St(_S),wS=he({},is,{data:0}),Hm=St(wS),TS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SS[t])?!!e[t]:!1}function Rf(){return AS}var CS=he({},Wo,{key:function(t){if(t.key){var e=TS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RS=St(CS),PS=he({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=St(PS),kS=he({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),NS=St(kS),xS=he({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=St(xS),bS=he({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OS=St(bS),LS=[9,13,27,32],Pf=wn&&"CompositionEvent"in window,zs=null;wn&&"documentMode"in document&&(zs=document.documentMode);var MS=wn&&"TextEvent"in window&&!zs,R_=wn&&(!Pf||zs&&8<zs&&11>=zs),Gm=String.fromCharCode(32),qm=!1;function P_(t,e){switch(t){case"keyup":return LS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function VS(t,e){switch(t){case"compositionend":return k_(e);case"keypress":return e.which!==32?null:(qm=!0,Gm);case"textInput":return t=e.data,t===Gm&&qm?null:t;default:return null}}function US(t,e){if(vi)return t==="compositionend"||!Pf&&P_(t,e)?(t=C_(),Xa=Af=Hn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var FS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FS[t.type]:e==="textarea"}function N_(t,e,n,r){a_(r),e=wl(e,"onChange"),0<e.length&&(n=new Cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,ho=null;function $S(t){B_(t,0)}function gu(t){var e=wi(t);if(e_(e))return t}function BS(t,e){if(t==="change")return e}var x_=!1;if(wn){var Pc;if(wn){var kc="oninput"in document;if(!kc){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),kc=typeof Ym.oninput=="function"}Pc=kc}else Pc=!1;x_=Pc&&(!document.documentMode||9<document.documentMode)}function Xm(){Ks&&(Ks.detachEvent("onpropertychange",D_),ho=Ks=null)}function D_(t){if(t.propertyName==="value"&&gu(ho)){var e=[];N_(e,ho,t,Ef(t)),h_($S,e)}}function jS(t,e,n){t==="focusin"?(Xm(),Ks=e,ho=n,Ks.attachEvent("onpropertychange",D_)):t==="focusout"&&Xm()}function zS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(ho)}function KS(t,e){if(t==="click")return gu(e)}function HS(t,e){if(t==="input"||t==="change")return gu(e)}function WS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:WS;function fo(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GS(t){var e=O_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zm(n,s);var o=Zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qS=wn&&"documentMode"in document&&11>=document.documentMode,_i=null,Yh=null,Hs=null,Xh=!1;function eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xh||_i==null||_i!==pl(r)||(r=_i,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&fo(Hs,r)||(Hs=r,r=wl(Yh,"onSelect"),0<r.length&&(e=new Cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Nc={},L_={};wn&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function yu(t){if(Nc[t])return Nc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Nc[t]=e[n];return t}var M_=yu("animationend"),V_=yu("animationiteration"),U_=yu("animationstart"),F_=yu("transitionend"),$_=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){$_.set(t,e),ti(e,[t])}for(var xc=0;xc<tg.length;xc++){var Dc=tg[xc],QS=Dc.toLowerCase(),YS=Dc[0].toUpperCase()+Dc.slice(1);pr(QS,"on"+YS)}pr(M_,"onAnimationEnd");pr(V_,"onAnimationIteration");pr(U_,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(F_,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QI(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ng(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ng(i,a,u),s=l}}}if(gl)throw t=Wh,gl=!1,Wh=null,t}function ne(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var r=t+"__bubble";n.has(r)||(j_(e,t,2,!1),n.add(r))}function bc(t,e,n){var r=0;e&&(r|=4),j_(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Ra]){t[Ra]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(XS.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,bc("selectionchange",!1,e))}}function j_(t,e,n,r){switch(A_(e)){case 1:var i=hS;break;case 4:i=dS;break;default:i=Sf}n=i.bind(null,e,n,t),i=void 0,!Hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}h_(function(){var u=s,c=Ef(n),h=[];e:{var d=$_.get(t);if(d!==void 0){var y=Cf,_=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":y=RS;break;case"focusin":_="focus",y=Rc;break;case"focusout":_="blur",y=Rc;break;case"beforeblur":case"afterblur":y=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=mS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=NS;break;case M_:case V_:case U_:y=vS;break;case F_:y=DS;break;case"scroll":y=fS;break;case"wheel":y=OS;break;case"copy":case"cut":case"paste":y=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wm}var E=(e&4)!==0,T=!E&&t==="scroll",g=E?d!==null?d+"Capture":null:d;E=[];for(var p=u,f;p!==null;){f=p;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,g!==null&&(v=ao(p,g),v!=null&&E.push(mo(p,v,f)))),T)break;p=p.return}0<E.length&&(d=new y(d,_,null,n,c),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==zh&&(_=n.relatedTarget||n.fromElement)&&(Rr(_)||_[Tn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Rr(_):null,_!==null&&(T=ni(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(E=Km,v="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Wm,v="onPointerLeave",g="onPointerEnter",p="pointer"),T=y==null?d:wi(y),f=_==null?d:wi(_),d=new E(v,p+"leave",y,n,c),d.target=T,d.relatedTarget=f,v=null,Rr(c)===u&&(E=new E(g,p+"enter",_,n,c),E.target=f,E.relatedTarget=T,v=E),T=v,y&&_)t:{for(E=y,g=_,p=0,f=E;f;f=hi(f))p++;for(f=0,v=g;v;v=hi(v))f++;for(;0<p-f;)E=hi(E),p--;for(;0<f-p;)g=hi(g),f--;for(;p--;){if(E===g||g!==null&&E===g.alternate)break t;E=hi(E),g=hi(g)}E=null}else E=null;y!==null&&rg(h,d,y,E,!1),_!==null&&T!==null&&rg(h,T,_,E,!0)}}e:{if(d=u?wi(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var w=BS;else if(Qm(d))if(x_)w=HS;else{w=zS;var I=jS}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=KS);if(w&&(w=w(t,u))){N_(h,w,n,c);break e}I&&I(t,d,u),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Uh(d,"number",d.value)}switch(I=u?wi(u):window,t){case"focusin":(Qm(I)||I.contentEditable==="true")&&(_i=I,Yh=u,Hs=null);break;case"focusout":Hs=Yh=_i=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,eg(h,n,c);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":eg(h,n,c)}var R;if(Pf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else vi?P_(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(R_&&n.locale!=="ko"&&(vi||k!=="onCompositionStart"?k==="onCompositionEnd"&&vi&&(R=C_()):(Hn=c,Af="value"in Hn?Hn.value:Hn.textContent,vi=!0)),I=wl(u,k),0<I.length&&(k=new Hm(k,t,null,n,c),h.push({event:k,listeners:I}),R?k.data=R:(R=k_(n),R!==null&&(k.data=R)))),(R=MS?VS(t,n):US(t,n))&&(u=wl(u,"onBeforeInput"),0<u.length&&(c=new Hm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}B_(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):i||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var JS=/\r\n?/g,ZS=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(JS,`
`).replace(ZS,"")}function Pa(t,e,n){if(e=ig(e),ig(t)!==e&&n)throw Error(C(425))}function Tl(){}var Jh=null,Zh=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,eA=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,tA=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(nA)}:td;function nA(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);co(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),Qt="__reactFiber$"+ss,go="__reactProps$"+ss,Tn="__reactContainer$"+ss,nd="__reactEvents$"+ss,rA="__reactListeners$"+ss,iA="__reactHandles$"+ss;function Rr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[Qt])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[Qt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function vu(t){return t[go]||null}var rd=[],Ti=-1;function mr(t){return{current:t}}function ie(t){0>Ti||(t.current=rd[Ti],rd[Ti]=null,Ti--)}function ee(t,e){Ti++,rd[Ti]=t.current,t.current=e}var cr={},Ye=mr(cr),ct=mr(!1),Br=cr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Il(){ie(ct),ie(Ye)}function ag(t,e,n){if(Ye.current!==cr)throw Error(C(168));ee(Ye,e),ee(ct,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,jI(t)||"Unknown",i));return he({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Br=Ye.current,ee(Ye,t),ee(ct,ct.current),!0}function lg(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=z_(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,ie(ct),ie(Ye),ee(Ye,t)):ie(ct),ee(ct,n)}var fn=null,_u=!1,Mc=!1;function K_(t){fn===null?fn=[t]:fn.push(t)}function sA(t){_u=!0,K_(t)}function gr(){if(!Mc&&fn!==null){Mc=!0;var t=0,e=J;try{var n=fn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,_u=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),m_(wf,gr),i}finally{J=e,Mc=!1}}return null}var Ii=[],Si=0,Al=null,Cl=0,At=[],Ct=0,jr=null,pn=1,mn="";function Ir(t,e){Ii[Si++]=Cl,Ii[Si++]=Al,Al=t,Cl=e}function H_(t,e,n){At[Ct++]=pn,At[Ct++]=mn,At[Ct++]=jr,jr=t;var r=pn;t=mn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-jt(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function Nf(t){t.return!==null&&(Ir(t,1),H_(t,1,0))}function xf(t){for(;t===Al;)Al=Ii[--Si],Ii[Si]=null,Cl=Ii[--Si],Ii[Si]=null;for(;t===jr;)jr=At[--Ct],At[Ct]=null,mn=At[--Ct],At[Ct]=null,pn=At[--Ct],At[Ct]=null}var vt=null,gt=null,oe=!1,$t=null;function W_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,gt=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,gt=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(oe){var e=gt;if(e){var n=e;if(!ug(t,e)){if(id(t))throw Error(C(418));e=Jn(n.nextSibling);var r=vt;e&&ug(t,e)?W_(r,n):(t.flags=t.flags&-4097|2,oe=!1,vt=t)}}else{if(id(t))throw Error(C(418));t.flags=t.flags&-4097|2,oe=!1,vt=t}}}function cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ka(t){if(t!==vt)return!1;if(!oe)return cg(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=gt)){if(id(t))throw G_(),Error(C(418));for(;e;)W_(t,e),e=Jn(e.nextSibling)}if(cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=vt?Jn(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=gt;t;)t=Jn(t.nextSibling)}function ji(){gt=vt=null,oe=!1}function Df(t){$t===null?$t=[t]:$t.push(t)}var oA=Nn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rl=mr(null),Pl=null,Ai=null,bf=null;function Of(){bf=Ai=Pl=null}function Lf(t){var e=Rl.current;ie(Rl),t._currentValue=e}function od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){Pl=t,bf=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(bf!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Pl===null)throw Error(C(308));Ai=t,Pl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Pr=null;function Mf(t){Pr===null?Pr=[t]:Pr.push(t)}function q_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kl(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(d=e,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(y,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,d=typeof _=="function"?_.call(y,h,d):_,d==null)break e;h=he({},h,d);break e;case 2:Un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=h}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Y_=new qv.Component().refs;function ad(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=tr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(zt(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=tr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(zt(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=tr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(zt(e,t,r,n),Za(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fo(n,r)||!fo(i,s):!0}function X_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=ht(e)?Br:Ye.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eu.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y_,Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=ht(e)?Br:Ye.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Eu.enqueueReplaceState(i,i.state,null),kl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Y_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function J_(t){function e(g,p){if(t){var f=g.deletions;f===null?(g.deletions=[p],g.flags|=16):f.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=nr(g,p),g.index=0,g.sibling=null,g}function s(g,p,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<p?(g.flags|=2,p):f):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,f,v){return p===null||p.tag!==6?(p=zc(f,g.mode,v),p.return=g,p):(p=i(p,f),p.return=g,p)}function l(g,p,f,v){var w=f.type;return w===yi?c(g,p,f.props.children,v,f.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vn&&mg(w)===p.type)?(v=i(p,f.props),v.ref=ws(g,p,f),v.return=g,v):(v=sl(f.type,f.key,f.props,null,g.mode,v),v.ref=ws(g,p,f),v.return=g,v)}function u(g,p,f,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=Kc(f,g.mode,v),p.return=g,p):(p=i(p,f.children||[]),p.return=g,p)}function c(g,p,f,v,w){return p===null||p.tag!==7?(p=Mr(f,g.mode,v,w),p.return=g,p):(p=i(p,f),p.return=g,p)}function h(g,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zc(""+p,g.mode,f),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _a:return f=sl(p.type,p.key,p.props,null,g.mode,f),f.ref=ws(g,null,p),f.return=g,f;case gi:return p=Kc(p,g.mode,f),p.return=g,p;case Vn:var v=p._init;return h(g,v(p._payload),f)}if(Ns(p)||gs(p))return p=Mr(p,g.mode,f,null),p.return=g,p;Na(g,p)}return null}function d(g,p,f,v){var w=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:a(g,p,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _a:return f.key===w?l(g,p,f,v):null;case gi:return f.key===w?u(g,p,f,v):null;case Vn:return w=f._init,d(g,p,w(f._payload),v)}if(Ns(f)||gs(f))return w!==null?null:c(g,p,f,v,null);Na(g,f)}return null}function y(g,p,f,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(f)||null,a(p,g,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _a:return g=g.get(v.key===null?f:v.key)||null,l(p,g,v,w);case gi:return g=g.get(v.key===null?f:v.key)||null,u(p,g,v,w);case Vn:var I=v._init;return y(g,p,f,I(v._payload),w)}if(Ns(v)||gs(v))return g=g.get(f)||null,c(p,g,v,w,null);Na(p,v)}return null}function _(g,p,f,v){for(var w=null,I=null,R=p,k=p=0,M=null;R!==null&&k<f.length;k++){R.index>k?(M=R,R=null):M=R.sibling;var V=d(g,R,f[k],v);if(V===null){R===null&&(R=M);break}t&&R&&V.alternate===null&&e(g,R),p=s(V,p,k),I===null?w=V:I.sibling=V,I=V,R=M}if(k===f.length)return n(g,R),oe&&Ir(g,k),w;if(R===null){for(;k<f.length;k++)R=h(g,f[k],v),R!==null&&(p=s(R,p,k),I===null?w=R:I.sibling=R,I=R);return oe&&Ir(g,k),w}for(R=r(g,R);k<f.length;k++)M=y(R,g,k,f[k],v),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?k:M.key),p=s(M,p,k),I===null?w=M:I.sibling=M,I=M);return t&&R.forEach(function(Te){return e(g,Te)}),oe&&Ir(g,k),w}function E(g,p,f,v){var w=gs(f);if(typeof w!="function")throw Error(C(150));if(f=w.call(f),f==null)throw Error(C(151));for(var I=w=null,R=p,k=p=0,M=null,V=f.next();R!==null&&!V.done;k++,V=f.next()){R.index>k?(M=R,R=null):M=R.sibling;var Te=d(g,R,V.value,v);if(Te===null){R===null&&(R=M);break}t&&R&&Te.alternate===null&&e(g,R),p=s(Te,p,k),I===null?w=Te:I.sibling=Te,I=Te,R=M}if(V.done)return n(g,R),oe&&Ir(g,k),w;if(R===null){for(;!V.done;k++,V=f.next())V=h(g,V.value,v),V!==null&&(p=s(V,p,k),I===null?w=V:I.sibling=V,I=V);return oe&&Ir(g,k),w}for(R=r(g,R);!V.done;k++,V=f.next())V=y(R,g,k,V.value,v),V!==null&&(t&&V.alternate!==null&&R.delete(V.key===null?k:V.key),p=s(V,p,k),I===null?w=V:I.sibling=V,I=V);return t&&R.forEach(function(hn){return e(g,hn)}),oe&&Ir(g,k),w}function T(g,p,f,v){if(typeof f=="object"&&f!==null&&f.type===yi&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _a:e:{for(var w=f.key,I=p;I!==null;){if(I.key===w){if(w=f.type,w===yi){if(I.tag===7){n(g,I.sibling),p=i(I,f.props.children),p.return=g,g=p;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Vn&&mg(w)===I.type){n(g,I.sibling),p=i(I,f.props),p.ref=ws(g,I,f),p.return=g,g=p;break e}n(g,I);break}else e(g,I);I=I.sibling}f.type===yi?(p=Mr(f.props.children,g.mode,v,f.key),p.return=g,g=p):(v=sl(f.type,f.key,f.props,null,g.mode,v),v.ref=ws(g,p,f),v.return=g,g=v)}return o(g);case gi:e:{for(I=f.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){n(g,p.sibling),p=i(p,f.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Kc(f,g.mode,v),p.return=g,g=p}return o(g);case Vn:return I=f._init,T(g,p,I(f._payload),v)}if(Ns(f))return _(g,p,f,v);if(gs(f))return E(g,p,f,v);Na(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,f),p.return=g,g=p):(n(g,p),p=zc(f,g.mode,v),p.return=g,g=p),o(g)):n(g,p)}return T}var zi=J_(!0),Z_=J_(!1),qo={},tn=mr(qo),yo=mr(qo),vo=mr(qo);function kr(t){if(t===qo)throw Error(C(174));return t}function Uf(t,e){switch(ee(vo,e),ee(yo,t),ee(tn,qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$h(e,t)}ie(tn),ee(tn,e)}function Ki(){ie(tn),ie(yo),ie(vo)}function e0(t){kr(vo.current);var e=kr(tn.current),n=$h(e,t.type);e!==n&&(ee(yo,t),ee(tn,n))}function Ff(t){yo.current===t&&(ie(tn),ie(yo))}var le=mr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function $f(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var el=Nn.ReactCurrentDispatcher,Uc=Nn.ReactCurrentBatchConfig,zr=0,ue=null,Ie=null,Ne=null,xl=!1,Ws=!1,_o=0,aA=0;function je(){throw Error(C(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function jf(t,e,n,r,i,s){if(zr=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?hA:dA,t=n(r,i),Ws){s=0;do{if(Ws=!1,_o=0,25<=s)throw Error(C(301));s+=1,Ne=Ie=null,e.updateQueue=null,el.current=fA,t=n(r,i)}while(Ws)}if(el.current=Dl,e=Ie!==null&&Ie.next!==null,zr=0,Ne=Ie=ue=null,xl=!1,e)throw Error(C(300));return t}function zf(){var t=_o!==0;return _o=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function bt(){if(Ie===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Ne===null?ue.memoizedState:Ne.next;if(e!==null)Ne=e,Ie=t;else{if(t===null)throw Error(C(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ne===null?ue.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Eo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=bt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=bt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t0(){}function n0(t,e){var n=ue,r=bt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Kf(s0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,wo(9,i0.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(C(349));zr&30||r0(n,e,i)}return i}function r0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,r){e.value=n,e.getSnapshot=r,o0(e)&&a0(t)}function s0(t,e,n){return n(function(){o0(e)&&a0(t)})}function o0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function a0(t){var e=In(t,1);e!==null&&zt(e,t,1,-1)}function gg(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=cA.bind(null,ue,t),[e.memoizedState,t]}function wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l0(){return bt().memoizedState}function tl(t,e,n,r){var i=qt();ue.flags|=t,i.memoizedState=wo(1|e,n,void 0,r===void 0?null:r)}function wu(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Bf(r,o.deps)){i.memoizedState=wo(e,n,s,r);return}}ue.flags|=t,i.memoizedState=wo(1|e,n,s,r)}function yg(t,e){return tl(8390656,8,t,e)}function Kf(t,e){return wu(2048,8,t,e)}function u0(t,e){return wu(4,2,t,e)}function c0(t,e){return wu(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,h0.bind(null,e,t),n)}function Hf(){}function f0(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p0(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m0(t,e,n){return zr&21?(Kt(n,e)||(n=v_(),ue.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function lA(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Uc.transition;Uc.transition={};try{t(!1),e()}finally{J=n,Uc.transition=r}}function g0(){return bt().memoizedState}function uA(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y0(t))v0(e,n);else if(n=q_(t,e,n,r),n!==null){var i=it();zt(n,t,r,i),_0(n,e,r)}}function cA(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y0(t))v0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Mf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=q_(t,e,i,r),n!==null&&(i=it(),zt(n,t,r,i),_0(n,e,r))}}function y0(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function v0(t,e){Ws=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}var Dl={readContext:Dt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},hA={readContext:Dt,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uA.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:Hf,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=lA.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=qt();if(oe){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),xe===null)throw Error(C(349));zr&30||r0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yg(s0.bind(null,r,s,t),[t]),r.flags|=2048,wo(9,i0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=xe.identifierPrefix;if(oe){var n=mn,r=pn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dA={readContext:Dt,useCallback:f0,useContext:Dt,useEffect:Kf,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:Fc,useRef:l0,useState:function(){return Fc(Eo)},useDebugValue:Hf,useDeferredValue:function(t){var e=bt();return m0(e,Ie.memoizedState,t)},useTransition:function(){var t=Fc(Eo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},fA={readContext:Dt,useCallback:f0,useContext:Dt,useEffect:Kf,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:$c,useRef:l0,useState:function(){return $c(Eo)},useDebugValue:Hf,useDeferredValue:function(t){var e=bt();return Ie===null?e.memoizedState=t:m0(e,Ie.memoizedState,t)},useTransition:function(){var t=$c(Eo)[0],e=bt().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function Hi(t,e){try{var n="",r=e;do n+=BI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pA=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,_d=r),ud(t,e)},n}function w0(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PA.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var mA=Nn.ReactCurrentOwner,ut=!1;function nt(t,e,n,r){e.child=t===null?Z_(e,null,n,r):zi(e,t.child,n,r)}function wg(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=jf(t,e,n,r,s,i),n=zf(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(oe&&n&&Nf(e),e.flags|=1,nt(t,e,r,i),e.child)}function Tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T0(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fo(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return cd(t,e,n,r,i)}function I0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Ri,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Ri,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Ri,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(Ri,mt),mt|=r;return nt(t,e,i,n),e.child}function S0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,r,i){var s=ht(n)?Br:Ye.current;return s=Bi(e,s),bi(e,i),n=jf(t,e,n,r,s,i),r=zf(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(oe&&r&&Nf(e),e.flags|=1,nt(t,e,n,i),e.child)}function Ig(t,e,n,r,i){if(ht(n)){var s=!0;Sl(e)}else s=!1;if(bi(e,i),e.stateNode===null)nl(t,e),X_(e,n,r),ld(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ht(n)?Br:Ye.current,u=Bi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&pg(e,o,r,u),Un=!1;var d=e.memoizedState;o.state=d,kl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ct.current||Un?(typeof c=="function"&&(ad(e,n,c,r),l=e.memoizedState),(a=Un||fg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ht(n)?Br:Ye.current,l=Bi(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&pg(e,o,r,l),Un=!1,d=e.memoizedState,o.state=d,kl(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||ct.current||Un?(typeof y=="function"&&(ad(e,n,y,r),_=e.memoizedState),(u=Un||fg(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return hd(t,e,n,r,s,i)}function hd(t,e,n,r,i,s){S0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lg(e,n,!1),Sn(t,e,s);r=e.stateNode,mA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&lg(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),Uf(t,e.containerInfo)}function Sg(t,e,n,r,i){return ji(),Df(i),e.flags|=256,nt(t,e,n,r),e.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function C0(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(le,i&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Su(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=dd,t):Wf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dd,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wf(t,e){return e=Su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xa(t,e,n,r){return r!==null&&Df(r),zi(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(C(422))),xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Su({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=fd(o),e.memoizedState=dd,s);if(!(e.mode&1))return xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Bc(s,r,void 0),xa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ut||a){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),zt(r,t,i,-1))}return Jf(),r=Bc(Error(C(421))),xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Jn(i.nextSibling),vt=e,oe=!0,$t=null,t!==null&&(At[Ct++]=pn,At[Ct++]=mn,At[Ct++]=jr,pn=t.id,mn=t.overflow,jr=e),e=Wf(e,r.children),e.flags|=4096,e)}function Ag(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),od(t.return,e,n)}function jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function R0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,n,e);else if(t.tag===19)Ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yA(t,e,n){switch(e.tag){case 3:A0(e),ji();break;case 5:e0(e);break;case 1:ht(e.type)&&Sl(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Rl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?C0(t,e,n):(ee(le,le.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);ee(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,I0(t,e,n)}return Sn(t,e,n)}var P0,pd,k0,N0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};k0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(tn.current);var s=null;switch(n){case"input":i=Mh(t,i),r=Mh(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=Fh(t,i),r=Fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tl)}Bh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(so.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(so.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};N0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vA(t,e,n){var r=e.pendingProps;switch(xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(e),null;case 1:return ht(e.type)&&Il(),ze(e),null;case 3:return r=e.stateNode,Ki(),ie(ct),ie(Ye),$f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Td($t),$t=null))),pd(t,e),ze(e),null;case 5:Ff(e);var i=kr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)k0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return ze(e),null}if(t=kr(tn.current),ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[go]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)ne(Ds[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Om(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Mm(r,s),ne("invalid",r)}Bh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pa(r.textContent,a,t),i=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ea(r),Lm(r,s,!0);break;case"textarea":Ea(r),Vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[go]=r,P0(t,e,!1,!1),e.stateNode=t;e:{switch(o=jh(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)ne(Ds[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Om(t,r),i=Mh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Mm(t,r),i=Fh(t,r),ne("invalid",t);break;default:i=r}Bh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":Ea(t),Lm(t,r,!1);break;case"textarea":Ea(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ze(e),null;case 6:if(t&&e.stateNode!=null)N0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=kr(vo.current),kr(tn.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:Pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return ze(e),null;case 13:if(ie(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&gt!==null&&e.mode&1&&!(e.flags&128))G_(),ji(),e.flags|=98560,s=!1;else if(s=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Qt]=e}else ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ze(e),s=!1}else $t!==null&&(Td($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Ae===0&&(Ae=3):Jf())),e.updateQueue!==null&&(e.flags|=4),ze(e),null);case 4:return Ki(),pd(t,e),t===null&&po(e.stateNode.containerInfo),ze(e),null;case 10:return Lf(e.type._context),ze(e),null;case 17:return ht(e.type)&&Il(),ze(e),null;case 19:if(ie(le),s=e.memoizedState,s===null)return ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ts(s,!1);else{if(Ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Ts(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Wi&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return ze(e),null}else 2*ge()-s.renderingStartTime>Wi&&n!==1073741824&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=le.current,ee(le,r?n&1|2:n&1),e):(ze(e),null);case 22:case 23:return Xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(ze(e),e.subtreeFlags&6&&(e.flags|=8192)):ze(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function _A(t,e){switch(xf(e),e.tag){case 1:return ht(e.type)&&Il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),ie(ct),ie(Ye),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ff(e),null;case 13:if(ie(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(le),null;case 4:return Ki(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var Da=!1,We=!1,EA=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function md(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Cg=!1;function wA(t,e){if(Jh=_l,t=O_(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zh={focusedElem:t,selectionRange:n},_l=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,T=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?E:Ut(e.type,E),T);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){fe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return _=Cg,Cg=!1,_}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&md(e,n,s)}i=i.next}while(i!==r)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function x0(t){var e=t.alternate;e!==null&&(t.alternate=null,x0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[go],delete e[nd],delete e[rA],delete e[iA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D0(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var Oe=null,Ft=!1;function On(t,e,n){for(n=n.child;n!==null;)b0(t,e,n),n=n.sibling}function b0(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:We||Ci(n,e);case 6:var r=Oe,i=Ft;Oe=null,On(t,e,n),Oe=r,Ft=i,Oe!==null&&(Ft?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(Ft?(t=Oe,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),co(t)):Lc(Oe,n.stateNode));break;case 4:r=Oe,i=Ft,Oe=n.stateNode.containerInfo,Ft=!0,On(t,e,n),Oe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!We&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,On(t,e,n),We=r):On(t,e,n);break;default:On(t,e,n)}}function Pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EA),e.forEach(function(r){var i=NA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,Ft=!1;break e;case 3:Oe=a.stateNode.containerInfo,Ft=!0;break e;case 4:Oe=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if(Oe===null)throw Error(C(160));b0(s,o,i),Oe=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O0(e,t),e=e.sibling}function O0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Gt(t),r&4){try{Gs(3,t,t.return),Tu(3,t)}catch(E){fe(t,t.return,E)}try{Gs(5,t,t.return)}catch(E){fe(t,t.return,E)}}break;case 1:Vt(e,t),Gt(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Vt(e,t),Gt(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{oo(i,"")}catch(E){fe(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t_(i,s),jh(a,o);var u=jh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?o_(i,h):c==="dangerouslySetInnerHTML"?i_(i,h):c==="children"?oo(i,h):gf(i,c,h,u)}switch(a){case"input":Vh(i,s);break;case"textarea":n_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ki(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[go]=s}catch(E){fe(t,t.return,E)}}break;case 6:if(Vt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){fe(t,t.return,E)}}break;case 3:if(Vt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(E){fe(t,t.return,E)}break;case 4:Vt(e,t),Gt(t);break;case 13:Vt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qf=ge())),r&4&&Pg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||c,Vt(e,t),We=u):Vt(e,t),Gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,y=d.child,d.tag){case 0:case 11:case 14:case 15:Gs(4,d,d.return);break;case 1:Ci(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){fe(r,n,E)}}break;case 5:Ci(d,d.return);break;case 22:if(d.memoizedState!==null){Ng(h);continue}}y!==null?(y.return=d,x=y):Ng(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s_("display",o))}catch(E){fe(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){fe(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Gt(t),r&4&&Pg(t);break;case 21:break;default:Vt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oo(i,""),r.flags&=-33);var s=Rg(t);vd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rg(t);yd(t,a,o);break;default:throw Error(C(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TA(t,e,n){x=t,L0(t)}function L0(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=Da;var u=We;if(Da=o,(We=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?xg(i):l!==null?(l.return=o,x=l):xg(i);for(;s!==null;)x=s,L0(s),s=s.sibling;x=i,Da=a,We=u}kg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):kg(t)}}function kg(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||Tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}We||e.flags&512&&gd(e)}catch(d){fe(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Ng(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function xg(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{gd(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{gd(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var IA=Math.ceil,bl=Nn.ReactCurrentDispatcher,Gf=Nn.ReactCurrentOwner,xt=Nn.ReactCurrentBatchConfig,Y=0,xe=null,_e=null,Ue=0,mt=0,Ri=mr(0),Ae=0,To=null,Kr=0,Iu=0,qf=0,qs=null,lt=null,Qf=0,Wi=1/0,dn=null,Ol=!1,_d=null,er=null,ba=!1,Wn=null,Ll=0,Qs=0,Ed=null,rl=-1,il=0;function it(){return Y&6?ge():rl!==-1?rl:rl=ge()}function tr(t){return t.mode&1?Y&2&&Ue!==0?Ue&-Ue:oA.transition!==null?(il===0&&(il=v_()),il):(t=J,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function zt(t,e,n,r){if(50<Qs)throw Qs=0,Ed=null,Error(C(185));Ho(t,n,r),(!(Y&2)||t!==xe)&&(t===xe&&(!(Y&2)&&(Iu|=n),Ae===4&&$n(t,Ue)),dt(t,r),n===1&&Y===0&&!(e.mode&1)&&(Wi=ge()+500,_u&&gr()))}function dt(t,e){var n=t.callbackNode;oS(t,e);var r=vl(t,t===xe?Ue:0);if(r===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?sA(Dg.bind(null,t)):K_(Dg.bind(null,t)),tA(function(){!(Y&6)&&gr()}),n=null;else{switch(__(r)){case 1:n=wf;break;case 4:n=g_;break;case 16:n=yl;break;case 536870912:n=y_;break;default:n=yl}n=z0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(rl=-1,il=0,Y&6)throw Error(C(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=vl(t,t===xe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=Y;Y|=2;var s=U0();(xe!==t||Ue!==e)&&(dn=null,Wi=ge()+500,Lr(t,e));do try{CA();break}catch(a){V0(t,a)}while(1);Of(),bl.current=s,Y=i,_e!==null?e=0:(xe=null,Ue=0,e=Ae)}if(e!==0){if(e===2&&(i=Gh(t),i!==0&&(r=i,e=wd(t,i))),e===1)throw n=To,Lr(t,0),$n(t,r),dt(t,ge()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!SA(i)&&(e=Ml(t,r),e===2&&(s=Gh(t),s!==0&&(r=s,e=wd(t,s))),e===1))throw n=To,Lr(t,0),$n(t,r),dt(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Sr(t,lt,dn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=Qf+500-ge(),10<e)){if(vl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=td(Sr.bind(null,t,lt,dn),e);break}Sr(t,lt,dn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IA(r/1960))-r,10<r){t.timeoutHandle=td(Sr.bind(null,t,lt,dn),r);break}Sr(t,lt,dn);break;case 5:Sr(t,lt,dn);break;default:throw Error(C(329))}}}return dt(t,ge()),t.callbackNode===n?M0.bind(null,t):null}function wd(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=lt,lt=n,e!==null&&Td(e)),t}function Td(t){lt===null?lt=t:lt.push.apply(lt,t)}function SA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~qf,e&=~Iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Dg(t){if(Y&6)throw Error(C(327));Oi();var e=vl(t,0);if(!(e&1))return dt(t,ge()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Gh(t);r!==0&&(e=r,n=wd(t,r))}if(n===1)throw n=To,Lr(t,0),$n(t,e),dt(t,ge()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,lt,dn),dt(t,ge()),null}function Yf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Wi=ge()+500,_u&&gr())}}function Hr(t){Wn!==null&&Wn.tag===0&&!(Y&6)&&Oi();var e=Y;Y|=1;var n=xt.transition,r=J;try{if(xt.transition=null,J=1,t)return t()}finally{J=r,xt.transition=n,Y=e,!(Y&6)&&gr()}}function Xf(){mt=Ri.current,ie(Ri)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eA(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Il();break;case 3:Ki(),ie(ct),ie(Ye),$f();break;case 5:Ff(r);break;case 4:Ki();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Lf(r.type._context);break;case 22:case 23:Xf()}n=n.return}if(xe=t,_e=t=nr(t.current,null),Ue=mt=e,Ae=0,To=null,qf=Iu=Kr=0,lt=qs=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function V0(t,e){do{var n=_e;try{if(Of(),el.current=Dl,xl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(zr=0,Ne=Ie=ue=null,Ws=!1,_o=0,Gf.current=null,n===null||n.return===null){Ae=1,To=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=_g(o);if(y!==null){y.flags&=-257,Eg(y,o,a,s,e),y.mode&1&&vg(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){vg(s,u,e),Jf();break e}l=Error(C(426))}}else if(oe&&a.mode&1){var T=_g(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Eg(T,o,a,s,e),Df(Hi(l,a));break e}}s=l=Hi(l,a),Ae!==4&&(Ae=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=E0(s,l,e);hg(s,g);break e;case 1:a=l;var p=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(er===null||!er.has(f)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=w0(s,a,e);hg(s,v);break e}}s=s.return}while(s!==null)}$0(n)}catch(w){e=w,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function U0(){var t=bl.current;return bl.current=Dl,t===null?Dl:t}function Jf(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),xe===null||!(Kr&268435455)&&!(Iu&268435455)||$n(xe,Ue)}function Ml(t,e){var n=Y;Y|=2;var r=U0();(xe!==t||Ue!==e)&&(dn=null,Lr(t,e));do try{AA();break}catch(i){V0(t,i)}while(1);if(Of(),Y=n,bl.current=r,_e!==null)throw Error(C(261));return xe=null,Ue=0,Ae}function AA(){for(;_e!==null;)F0(_e)}function CA(){for(;_e!==null&&!XI();)F0(_e)}function F0(t){var e=j0(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?$0(t):_e=e,Gf.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_A(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ae=6,_e=null;return}}else if(n=vA(n,e,mt),n!==null){_e=n;return}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ae===0&&(Ae=5)}function Sr(t,e,n){var r=J,i=xt.transition;try{xt.transition=null,J=1,RA(t,e,n,r)}finally{xt.transition=i,J=r}return null}function RA(t,e,n,r){do Oi();while(Wn!==null);if(Y&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aS(t,s),t===xe&&(_e=xe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,z0(yl,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=J;J=1;var a=Y;Y|=4,Gf.current=null,wA(t,n),O0(n,t),GS(Zh),_l=!!Jh,Zh=Jh=null,t.current=n,TA(n),JI(),Y=a,J=o,xt.transition=s}else t.current=n;if(ba&&(ba=!1,Wn=t,Ll=i),s=t.pendingLanes,s===0&&(er=null),tS(n.stateNode),dt(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=_d,_d=null,t;return Ll&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Ed?Qs++:(Qs=0,Ed=t):Qs=0,gr(),null}function Oi(){if(Wn!==null){var t=__(Ll),e=xt.transition,n=J;try{if(xt.transition=null,J=16>t?16:t,Wn===null)var r=!1;else{if(t=Wn,Wn=null,Ll=0,Y&6)throw Error(C(331));var i=Y;for(Y|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Gs(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,y=c.return;if(x0(c),c===u){x=null;break}if(d!==null){d.return=y,x=d;break}x=y}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var T=E.sibling;E.sibling=null,E=T}while(E!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,x=g;break e}x=s.return}}var p=t.current;for(x=p;x!==null;){o=x;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,x=f;else e:for(o=p;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(w){fe(a,a.return,w)}if(a===o){x=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,x=v;break e}x=a.return}}if(Y=i,gr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(pu,t)}catch{}r=!0}return r}finally{J=n,xt.transition=e}}return!1}function bg(t,e,n){e=Hi(n,e),e=E0(t,e,1),t=Zn(t,e,1),e=it(),t!==null&&(Ho(t,1,e),dt(t,e))}function fe(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Hi(n,t),t=w0(e,t,1),e=Zn(e,t,1),t=it(),e!==null&&(Ho(e,1,t),dt(e,t));break}}e=e.return}}function PA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Ue&n)===n&&(Ae===4||Ae===3&&(Ue&130023424)===Ue&&500>ge()-Qf?Lr(t,0):qf|=n),dt(t,e)}function B0(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=it();t=In(t,e),t!==null&&(Ho(t,e,n),dt(t,n))}function kA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B0(t,n)}function NA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),B0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,yA(t,e,n);ut=!!(t.flags&131072)}else ut=!1,oe&&e.flags&1048576&&H_(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=Bi(e,Ye.current);bi(e,n),i=jf(null,e,r,t,i,n);var s=zf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vf(e),i.updater=Eu,e.stateNode=i,i._reactInternals=e,ld(e,r,t,n),e=hd(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Nf(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DA(r),t=Ut(r,t),i){case 0:e=cd(null,e,r,t,n);break e;case 1:e=Ig(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Tg(null,e,r,Ut(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Ig(t,e,r,i,n);case 3:e:{if(A0(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q_(t,e),kl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(C(423)),e),e=Sg(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(C(424)),e),e=Sg(t,e,r,n,i);break e}else for(gt=Jn(e.stateNode.containerInfo.firstChild),vt=e,oe=!0,$t=null,n=Z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){e=Sn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return e0(e),t===null&&sd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ed(r,i)?o=null:s!==null&&ed(r,s)&&(e.flags|=32),S0(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return C0(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),wg(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Rl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!ct.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=_n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Dt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),Tg(t,e,r,i,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),nl(t,e),e.tag=1,ht(r)?(t=!0,Sl(e)):t=!1,bi(e,n),X_(e,r,i),ld(e,r,i,n),hd(null,e,r,!0,t,n);case 19:return R0(t,e,n);case 22:return I0(t,e,n)}throw Error(C(156,e.tag))};function z0(t,e){return m_(t,e)}function xA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new xA(t,e,n,r)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DA(t){if(typeof t=="function")return Zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vf)return 11;if(t===_f)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Mr(n.children,i,s,e);case yf:o=8,i|=8;break;case Dh:return t=Nt(12,n,e,i|2),t.elementType=Dh,t.lanes=s,t;case bh:return t=Nt(13,n,e,i),t.elementType=bh,t.lanes=s,t;case Oh:return t=Nt(19,n,e,i),t.elementType=Oh,t.lanes=s,t;case Jv:return Su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yv:o=10;break e;case Xv:o=9;break e;case vf:o=11;break e;case _f:o=14;break e;case Vn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Su(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,r,i,s,o,a,l){return t=new bA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function OA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function K0(t){if(!t)return cr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(ht(n))return z_(t,n,e)}return e}function H0(t,e,n,r,i,s,o,a,l){return t=ep(n,r,!0,t,i,s,o,a,l),t.context=K0(null),n=t.current,r=it(),i=tr(n),s=_n(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,Ho(t,i,r),dt(t,r),t}function Au(t,e,n,r){var i=e.current,s=it(),o=tr(i);return n=K0(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(zt(t,i,o,s),Za(t,i,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function LA(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}Cu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Au(t,e,null,null)};Cu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){Au(null,t,null,null)}),e[Tn]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=T_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&S_(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function MA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vl(o);s.call(u)}}var o=H0(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[Tn]=o.current,po(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vl(l);a.call(u)}}var l=ep(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=l,t[Tn]=l.current,po(t.nodeType===8?t.parentNode:t),Hr(function(){Au(e,l,n,r)}),l}function Pu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Vl(o);a.call(l)}}Au(e,o,t,i)}else o=MA(n,e,t,i,r);return Vl(o)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xs(e.pendingLanes);n!==0&&(Tf(e,n|1),dt(e,ge()),!(Y&6)&&(Wi=ge()+500,gr()))}break;case 13:Hr(function(){var r=In(t,1);if(r!==null){var i=it();zt(r,t,1,i)}}),tp(t,1)}};If=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=it();zt(e,t,134217728,n)}tp(t,134217728)}};w_=function(t){if(t.tag===13){var e=tr(t),n=In(t,e);if(n!==null){var r=it();zt(n,t,e,r)}tp(t,e)}};T_=function(){return J};I_=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Kh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vu(r);if(!i)throw Error(C(90));e_(r),Vh(r,i)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};u_=Yf;c_=Hr;var VA={usingClientEntryPoint:!1,Events:[Go,wi,vu,a_,l_,Yf]},Is={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},UA={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||LA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{pu=Oa.inject(UA),en=Oa}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VA;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(C(200));return OA(t,e,null,n)};It.createRoot=function(t,e){if(!rp(t))throw Error(C(299));var n=!1,r="",i=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,po(t.nodeType===8?t.parentNode:t),new np(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Hr(t)};It.hydrate=function(t,e,n){if(!Ru(e))throw Error(C(200));return Pu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!rp(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cu(e)};It.render=function(t,e,n){if(!Ru(e))throw Error(C(200));return Pu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(C(40));return t._reactRootContainer?(Hr(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};It.unstable_batchedUpdates=Yf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ru(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Pu(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(t){console.error(t)}}G0(),Hv.exports=It;var FA=Hv.exports,Mg=FA;Nh.createRoot=Mg.createRoot,Nh.hydrateRoot=Mg.hydrateRoot;/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}var Gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gn||(Gn={}));const Vg="popstate";function $A(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Id("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ul(i)}return jA(e,n,null,t)}function ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ip(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BA(){return Math.random().toString(36).substr(2,8)}function Ug(t,e){return{usr:t.state,key:t.key,idx:e}}function Id(t,e,n,r){return n===void 0&&(n=null),Io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||r||BA()})}function Ul(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Io({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Gn.Pop;let T=c(),g=T==null?null:T-u;u=T,l&&l({action:a,location:E.location,delta:g})}function d(T,g){a=Gn.Push;let p=Id(E.location,T,g);n&&n(p,T),u=c()+1;let f=Ug(p,u),v=E.createHref(p);try{o.pushState(f,"",v)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(v)}s&&l&&l({action:a,location:E.location,delta:1})}function y(T,g){a=Gn.Replace;let p=Id(E.location,T,g);n&&n(p,T),u=c();let f=Ug(p,u),v=E.createHref(p);o.replaceState(f,"",v),s&&l&&l({action:a,location:E.location,delta:0})}function _(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof T=="string"?T:Ul(T);return ce(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let E={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vg,h),l=T,()=>{i.removeEventListener(Vg,h),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let g=_(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:y,go(T){return o.go(T)}};return E}var Fg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fg||(Fg={}));function zA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?os(e):e,i=So(r.pathname||"/",n);if(i==null)return null;let s=q0(t);KA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=ZA(s[a],tC(i));return o}function q0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),q0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:XA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Q0(s.path))i(s,o,l)}),e}function Q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const HA=/^:\w+$/,WA=3,GA=2,qA=1,QA=10,YA=-2,$g=t=>t==="*";function XA(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=YA),e&&(r+=GA),n.filter(i=>!$g(i)).reduce((i,s)=>i+(HA.test(s)?WA:s===""?qA:QA),r)}function JA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Sd({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:rr([i,c.pathname]),pathnameBase:sC(rr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=rr([i,c.pathnameBase]))}return s}function Sd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=eC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=nC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function eC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ip(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tC(t){try{return decodeURI(t)}catch(e){return ip(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function nC(t,e){try{return decodeURIComponent(t)}catch(n){return ip(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function So(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function rC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?os(t):t;return{pathname:n?n.startsWith("/")?n:iC(n,e):e,search:oC(r),hash:aC(i)}}function iC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function op(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=os(t):(i=Io({},t),ce(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=rC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),sC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Y0=["post","put","patch","delete"];new Set(Y0);const uC=["get",...Y0];new Set(uC);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}const ku=P.createContext(null),X0=P.createContext(null),ri=P.createContext(null),Nu=P.createContext(null),xn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),J0=P.createContext(null);function cC(t,e){let{relative:n}=e===void 0?{}:e;as()||ce(!1);let{basename:r,navigator:i}=P.useContext(ri),{hash:s,pathname:o,search:a}=Du(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function as(){return P.useContext(Nu)!=null}function ls(){return as()||ce(!1),P.useContext(Nu).location}function Z0(t){P.useContext(ri).static||P.useLayoutEffect(t)}function xu(){let{isDataRoute:t}=P.useContext(xn);return t?AC():hC()}function hC(){as()||ce(!1);let t=P.useContext(ku),{basename:e,navigator:n}=P.useContext(ri),{matches:r}=P.useContext(xn),{pathname:i}=ls(),s=JSON.stringify(sp(r).map(l=>l.pathnameBase)),o=P.useRef(!1);return Z0(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=op(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const dC=P.createContext(null);function fC(t){let e=P.useContext(xn).outlet;return e&&P.createElement(dC.Provider,{value:t},e)}function Du(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(xn),{pathname:i}=ls(),s=JSON.stringify(sp(r).map(o=>o.pathnameBase));return P.useMemo(()=>op(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function pC(t,e){return mC(t,e)}function mC(t,e,n){as()||ce(!1);let{navigator:r}=P.useContext(ri),{matches:i}=P.useContext(xn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ls(),u;if(e){var c;let E=typeof e=="string"?os(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||ce(!1),u=E}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",y=zA(t,{pathname:d}),_=EC(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:rr([a,r.encodeLocation?r.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:rr([a,r.encodeLocation?r.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n);return e&&_?P.createElement(Nu.Provider,{value:{location:Fl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gn.Pop}},_):_}function gC(){let t=SC(),e=lC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}const yC=P.createElement(gC,null);class vC extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(xn.Provider,{value:this.props.routeContext},P.createElement(J0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _C(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(ku);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(xn.Provider,{value:e},r)}function EC(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||yC);let d=e.concat(s.slice(0,u+1)),y=()=>{let _;return c?_=h:l.route.Component?_=P.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,P.createElement(_C,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(vC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:y(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):y()},null)}var eE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(eE||{}),$l=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($l||{});function wC(t){let e=P.useContext(ku);return e||ce(!1),e}function TC(t){let e=P.useContext(X0);return e||ce(!1),e}function IC(t){let e=P.useContext(xn);return e||ce(!1),e}function tE(t){let e=IC(),n=e.matches[e.matches.length-1];return n.route.id||ce(!1),n.route.id}function SC(){var t;let e=P.useContext(J0),n=TC($l.UseRouteError),r=tE($l.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function AC(){let{router:t}=wC(eE.UseNavigateStable),e=tE($l.UseNavigateStable),n=P.useRef(!1);return Z0(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fl({fromRouteId:e},s)))},[t,e])}function Ys(t){let{to:e,replace:n,state:r,relative:i}=t;as()||ce(!1);let{matches:s}=P.useContext(xn),{pathname:o}=ls(),a=xu(),l=op(e,sp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function nE(t){return fC(t.context)}function et(t){ce(!1)}function CC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gn.Pop,navigator:s,static:o=!1}=t;as()&&ce(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=os(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,_=P.useMemo(()=>{let E=So(u,a);return E==null?null:{location:{pathname:E,search:c,hash:h,state:d,key:y},navigationType:i}},[a,u,c,h,d,y,i]);return _==null?null:P.createElement(ri.Provider,{value:l},P.createElement(Nu.Provider,{children:n,value:_}))}function Bg(t){let{children:e,location:n}=t;return pC(Ad(e),n)}new Promise(()=>{});function Ad(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Ad(r.props.children,s));return}r.type!==et&&ce(!1),!r.props.index||!r.props.children||ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}function rE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function PC(t,e){return t.button===0&&(!e||e==="_self")&&!RC(t)}const kC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],NC=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],xC=P.createContext({isTransitioning:!1}),DC="startTransition",jg=kI[DC];function zg(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=$A({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(h=>{u&&jg?jg(()=>l(h)):l(h)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement(CC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const bC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wr=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=rE(e,kC),{basename:y}=P.useContext(ri),_,E=!1;if(typeof u=="string"&&OC.test(u)&&(_=u,bC))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=So(v.pathname,y);v.origin===f.origin&&w!=null?u=w+v.search+v.hash:E=!0}catch{}let T=cC(u,{relative:i}),g=MC(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(f){r&&r(f),f.defaultPrevented||g(f)}return P.createElement("a",Bl({},d,{href:_||T,onClick:E||s?r:p,ref:n,target:l}))}),Cr=P.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,h=rE(e,NC),d=Du(l,{relative:h.relative}),y=ls(),_=P.useContext(X0),{navigator:E}=P.useContext(ri),T=_!=null&&VC(d)&&u===!0,g=E.encodeLocation?E.encodeLocation(d).pathname:d.pathname,p=y.pathname,f=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(p=p.toLowerCase(),f=f?f.toLowerCase():null,g=g.toLowerCase());let v=p===g||!o&&p.startsWith(g)&&p.charAt(g.length)==="/",w=f!=null&&(f===g||!o&&f.startsWith(g)&&f.charAt(g.length)==="/"),I={isActive:v,isPending:w,isTransitioning:T},R=v?r:void 0,k;typeof s=="function"?k=s(I):k=[s,v?"active":null,w?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(I):a;return P.createElement(Wr,Bl({},h,{"aria-current":R,className:k,ref:n,style:M,to:l,unstable_viewTransition:u}),typeof c=="function"?c(I):c)});var Cd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cd||(Cd={}));var Kg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kg||(Kg={}));function LC(t){let e=P.useContext(ku);return e||ce(!1),e}function MC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=xu(),u=ls(),c=Du(t,{relative:o});return P.useCallback(h=>{if(PC(h,n)){h.preventDefault();let d=r!==void 0?r:Ul(u)===Ul(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function VC(t,e){e===void 0&&(e={});let n=P.useContext(xC);n==null&&ce(!1);let{basename:r}=LC(Cd.useViewTransitionState),i=Du(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=So(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=So(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sd(i.pathname,o)!=null||Sd(i.pathname,s)!=null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new FC;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $C=function(t){const e=iE(t);return sE.encodeByteArray(e,!0)},jl=function(t){return $C(t).replace(/\./g,"")},oE=function(t){try{return sE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=()=>BC().__FIREBASE_DEFAULTS__,zC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oE(t[1]);return e&&JSON.parse(e)},bu=()=>{try{return jC()||zC()||KC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aE=t=>{var e,n;return(n=(e=bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lE=t=>{const e=aE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uE=()=>{var t;return(t=bu())===null||t===void 0?void 0:t.config},cE=t=>{var e;return(e=bu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jl(JSON.stringify(n)),jl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function GC(){var t;const e=(t=bu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QC(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function YC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XC,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function JC(t,e){return t.replace(ZC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZC=/\{\$([^}]+)}/g;function eR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hg(s)&&Hg(o)){if(!Ao(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tR(t,e){const n=new nR(t,e);return n.subscribe.bind(n)}class nR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,sR=2,oR=4*60*60*1e3,aR=.5;function Wg(t,e=iR,n=sR){const r=e*Math.pow(n,t),i=Math.round(aR*r*(Math.random()-.5)*2);return Math.min(oR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cR(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uR(t){return t===Ar?void 0:t}function cR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const dR={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},fR=q.INFO,pR={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},mR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=fR,this._logHandler=mR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const gR=(t,e)=>e.some(n=>t instanceof n);let Gg,qg;function yR(){return Gg||(Gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vR(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mE=new WeakMap,Rd=new WeakMap,gE=new WeakMap,Gc=new WeakMap,ap=new WeakMap;function _R(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mE.set(n,t)}).catch(()=>{}),ap.set(e,t),e}function ER(t){if(Rd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Rd.set(t,e)}let Pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wR(t){Pd=t(Pd)}function TR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return gE.set(r,e.sort?e.sort():[e]),ir(r)}:vR().includes(t)?function(...e){return t.apply(qc(this),e),ir(mE.get(this))}:function(...e){return ir(t.apply(qc(this),e))}}function IR(t){return typeof t=="function"?TR(t):(t instanceof IDBTransaction&&ER(t),gR(t,yR())?new Proxy(t,Pd):t)}function ir(t){if(t instanceof IDBRequest)return _R(t);if(Gc.has(t))return Gc.get(t);const e=IR(t);return e!==t&&(Gc.set(t,e),ap.set(e,t)),e}const qc=t=>ap.get(t);function SR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const AR=["get","getKey","getAll","getAllKeys","count"],CR=["put","add","delete","clear"],Qc=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qc.set(e,s),s}wR(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",Yg="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Ou("@firebase/app"),kR="@firebase/app-compat",NR="@firebase/analytics-compat",xR="@firebase/analytics",DR="@firebase/app-check-compat",bR="@firebase/app-check",OR="@firebase/auth",LR="@firebase/auth-compat",MR="@firebase/database",VR="@firebase/database-compat",UR="@firebase/functions",FR="@firebase/functions-compat",$R="@firebase/installations",BR="@firebase/installations-compat",jR="@firebase/messaging",zR="@firebase/messaging-compat",KR="@firebase/performance",HR="@firebase/performance-compat",WR="@firebase/remote-config",GR="@firebase/remote-config-compat",qR="@firebase/storage",QR="@firebase/storage-compat",YR="@firebase/firestore",XR="@firebase/firestore-compat",JR="firebase",ZR="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="[DEFAULT]",eP={[kd]:"fire-core",[kR]:"fire-core-compat",[xR]:"fire-analytics",[NR]:"fire-analytics-compat",[bR]:"fire-app-check",[DR]:"fire-app-check-compat",[OR]:"fire-auth",[LR]:"fire-auth-compat",[MR]:"fire-rtdb",[VR]:"fire-rtdb-compat",[UR]:"fire-fn",[FR]:"fire-fn-compat",[$R]:"fire-iid",[BR]:"fire-iid-compat",[jR]:"fire-fcm",[zR]:"fire-fcm-compat",[KR]:"fire-perf",[HR]:"fire-perf-compat",[WR]:"fire-rc",[GR]:"fire-rc-compat",[qR]:"fire-gcs",[QR]:"fire-gcs-compat",[YR]:"fire-fst",[XR]:"fire-fst-compat","fire-js":"fire-js",[JR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,xd=new Map;function tP(t,e){try{t.container.addComponent(e)}catch(n){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(xd.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of zl.values())tP(n,t);return!0}function yr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new ii("app","Firebase",nP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=ZR;function oi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=uE()),!n)throw sr.create("no-options");const s=zl.get(i);if(s){if(Ao(n,s.options)&&Ao(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new hR(i);for(const l of xd.values())o.addComponent(l);const a=new rP(n,r,o);return zl.set(i,a),a}function Lu(t=Nd){const e=zl.get(t);if(!e&&t===Nd&&uE())return oi();if(!e)throw sr.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let i=(r=eP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(a.join(" "));return}Ht(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP="firebase-heartbeat-database",sP=1,Co="firebase-heartbeat-store";let Yc=null;function yE(){return Yc||(Yc=SR(iP,sP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Co)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function oP(t){try{return await(await yE()).transaction(Co).objectStore(Co).get(vE(t))}catch(e){if(e instanceof Mt)Gr.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(n.message)}}}async function Xg(t,e){try{const r=(await yE()).transaction(Co,"readwrite");await r.objectStore(Co).put(e,vE(t)),await r.done}catch(n){if(n instanceof Mt)Gr.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gr.warn(r.message)}}}function vE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=1024,lP=30*24*60*60*1e3;class uP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jg(),{heartbeatsToSend:n,unsentEntries:r}=cP(this._heartbeatsCache.heartbeats),i=jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jg(){return new Date().toISOString().substring(0,10)}function cP(t,e=aP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){Ht(new Ot("platform-logger",e=>new RR(e),"PRIVATE")),Ht(new Ot("heartbeat",e=>new uP(e),"PRIVATE")),ft(kd,Yg,t),ft(kd,Yg,"esm2017"),ft("fire-js","")}dP("");var fP="firebase",pP="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(fP,pP,"app");const mP=(t,e)=>e.some(n=>t instanceof n);let ey,ty;function gP(){return ey||(ey=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yP(){return ty||(ty=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,Dd=new WeakMap,EE=new WeakMap,Xc=new WeakMap,lp=new WeakMap;function vP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_E.set(n,t)}).catch(()=>{}),lp.set(e,t),e}function _P(t){if(Dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dd.set(t,e)}let bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EP(t){bd=t(bd)}function wP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return EE.set(r,e.sort?e.sort():[e]),or(r)}:yP().includes(t)?function(...e){return t.apply(Jc(this),e),or(_E.get(this))}:function(...e){return or(t.apply(Jc(this),e))}}function TP(t){return typeof t=="function"?wP(t):(t instanceof IDBTransaction&&_P(t),mP(t,gP())?new Proxy(t,bd):t)}function or(t){if(t instanceof IDBRequest)return vP(t);if(Xc.has(t))return Xc.get(t);const e=TP(t);return e!==t&&(Xc.set(t,e),lp.set(e,t)),e}const Jc=t=>lp.get(t);function IP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const SP=["get","getKey","getAll","getAllKeys","count"],AP=["put","add","delete","clear"],Zc=new Map;function ny(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zc.set(e,s),s}EP(t=>({...t,get:(e,n,r)=>ny(e,n)||t.get(e,n,r),has:(e,n)=>!!ny(e,n)||t.has(e,n)}));const wE="@firebase/installations",up="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=1e4,IE=`w:${up}`,SE="FIS_v2",CP="https://firebaseinstallations.googleapis.com/v1",RP=60*60*1e3,PP="installations",kP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qr=new ii(PP,kP,NP);function AE(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE({projectId:t}){return`${CP}/projects/${t}/installations`}function RE(t){return{token:t.token,requestStatus:2,expiresIn:DP(t.expiresIn),creationTime:Date.now()}}async function PE(t,e){const r=(await e.json()).error;return qr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function kE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xP(t,{refreshToken:e}){const n=kE(t);return n.append("Authorization",bP(e)),n}async function NE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DP(t){return Number(t.replace("s","000"))}function bP(t){return`${SE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=CE(t),i=kE(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:SE,appId:t.appId,sdkVersion:IE},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await NE(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:RE(u.authToken)}}else throw await PE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^[cdef][\w-]{21}$/,Od="";function VP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UP(t);return MP.test(n)?n:Od}catch{return Od}}function UP(t){return LP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;function bE(t,e){const n=Mu(t);OE(n,e),FP(n,e)}function OE(t,e){const n=DE.get(t);if(n)for(const r of n)r(e)}function FP(t,e){const n=$P();n&&n.postMessage({key:t,fid:e}),BP()}let Nr=null;function $P(){return!Nr&&"BroadcastChannel"in self&&(Nr=new BroadcastChannel("[Firebase] FID Change"),Nr.onmessage=t=>{OE(t.data.key,t.data.fid)}),Nr}function BP(){DE.size===0&&Nr&&(Nr.close(),Nr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="firebase-installations-database",zP=1,Qr="firebase-installations-store";let eh=null;function cp(){return eh||(eh=IP(jP,zP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}})),eh}async function Kl(t,e){const n=Mu(t),i=(await cp()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bE(t,e.fid),e}async function LE(t){const e=Mu(t),r=(await cp()).transaction(Qr,"readwrite");await r.objectStore(Qr).delete(e),await r.done}async function Vu(t,e){const n=Mu(t),i=(await cp()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&bE(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t){let e;const n=await Vu(t.appConfig,r=>{const i=KP(r),s=HP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Od?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KP(t){const e=t||{fid:VP(),registrationStatus:0};return ME(e)}function HP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=WP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:GP(t)}:{installationEntry:e}}async function WP(t,e){try{const n=await OP(t,e);return Kl(t.appConfig,n)}catch(n){throw AE(n)&&n.customData.serverCode===409?await LE(t.appConfig):await Kl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function GP(t){let e=await ry(t.appConfig);for(;e.registrationStatus===1;)await xE(100),e=await ry(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hp(t);return r||n}return e}function ry(t){return Vu(t,e=>{if(!e)throw qr.create("installation-not-found");return ME(e)})}function ME(t){return qP(t)?{fid:t.fid,registrationStatus:0}:t}function qP(t){return t.registrationStatus===1&&t.registrationTime+TE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP({appConfig:t,heartbeatServiceProvider:e},n){const r=YP(t,n),i=xP(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:IE,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await NE(()=>fetch(r,a));if(l.ok){const u=await l.json();return RE(u)}else throw await PE("Generate Auth Token",l)}function YP(t,{fid:e}){return`${CE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e=!1){let n;const r=await Vu(t.appConfig,s=>{if(!VE(s))throw qr.create("not-registered");const o=s.authToken;if(!e&&ZP(o))return s;if(o.requestStatus===1)return n=XP(t,e),s;{if(!navigator.onLine)throw qr.create("app-offline");const a=tk(s);return n=JP(t,a),a}});return n?await n:r.authToken}async function XP(t,e){let n=await iy(t.appConfig);for(;n.authToken.requestStatus===1;)await xE(100),n=await iy(t.appConfig);const r=n.authToken;return r.requestStatus===0?dp(t,e):r}function iy(t){return Vu(t,e=>{if(!VE(e))throw qr.create("not-registered");const n=e.authToken;return nk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JP(t,e){try{const n=await QP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kl(t.appConfig,r),n}catch(n){if(AE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await LE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kl(t.appConfig,r)}throw n}}function VE(t){return t!==void 0&&t.registrationStatus===2}function ZP(t){return t.requestStatus===2&&!ek(t)}function ek(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RP}function tk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function nk(t){return t.requestStatus===1&&t.requestTime+TE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t){const e=t,{installationEntry:n,registrationPromise:r}=await hp(e);return r?r.catch(console.error):dp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e=!1){const n=t;return await sk(n),(await dp(n,e)).token}async function sk(t){const{registrationPromise:e}=await hp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){if(!t||!t.options)throw th("App Configuration");if(!t.name)throw th("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw th(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function th(t){return qr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="installations",ak="installations-internal",lk=t=>{const e=t.getProvider("app").getImmediate(),n=ok(e),r=yr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uk=t=>{const e=t.getProvider("app").getImmediate(),n=yr(e,UE).getImmediate();return{getId:()=>rk(n),getToken:i=>ik(n,i)}};function ck(){Ht(new Ot(UE,lk,"PUBLIC")),Ht(new Ot(ak,uk,"PRIVATE"))}ck();ft(wE,up);ft(wE,up,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="analytics",hk="firebase_id",dk="origin",fk=60*1e3,pk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Ou("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_t=new ii("analytics","Analytics",mk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){if(!t.startsWith(fp)){const e=_t.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function FE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function yk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function vk(t,e){const n=yk("firebase-js-sdk-policy",{createScriptURL:gk}),r=document.createElement("script"),i=`${fp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _k(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ek(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await FE(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){pt.error(a)}t("config",i,s)}async function wk(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await FE(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){pt.error(s)}}function Tk(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await wk(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await Ek(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){pt.error(a)}}return i}function Ik(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Tk(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Sk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=30,Ck=1e3;class Rk{constructor(e={},n=Ck){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $E=new Rk;function Pk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kk(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Pk(r)},s=pk.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw _t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Nk(t,e=$E,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw _t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw _t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bk;return setTimeout(async()=>{a.abort()},n!==void 0?n:fk),BE({appId:r,apiKey:i,measurementId:s},o,a,e)}async function BE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$E){var s;const{appId:o,measurementId:a}=t;try{await xk(r,e)}catch(l){if(a)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await kk(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Dk(u)){if(i.deleteThrottleMetadata(o),a)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wg(n,i.intervalMillis,Ak):Wg(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),pt.debug(`Calling attemptFetch again in ${c} millis`),BE(t,h,r,i)}}function xk(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(_t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Dk(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class bk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ok(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(){if(fE())try{await pE()}catch(t){return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(_t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Mk(t,e,n,r,i,s,o){var a;const l=Nk(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>pt.error(y)),e.push(l);const u=Lk().then(y=>{if(y)return r.getId()}),[c,h]=await Promise.all([l,u]);Sk(s)||vk(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[dk]="firebase",d.update=!0,h!=null&&(d[hk]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.app=e}_delete(){return delete Xs[this.app.options.appId],Promise.resolve()}}let Xs={},sy=[];const oy={};let nh="dataLayer",Uk="gtag",ay,jE,ly=!1;function Fk(){const t=[];if(dE()&&t.push("This is a browser extension environment."),YC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=_t.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function $k(t,e,n){Fk();const r=t.options.appId;if(!r)throw _t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _t.create("no-api-key");if(Xs[r]!=null)throw _t.create("already-exists",{id:r});if(!ly){_k(nh);const{wrappedGtag:s,gtagCore:o}=Ik(Xs,sy,oy,nh,Uk);jE=s,ay=o,ly=!0}return Xs[r]=Mk(t,sy,oy,e,ay,nh,n),new Vk(t)}function Bk(t=Lu()){t=Re(t);const e=yr(t,Hl);return e.isInitialized()?e.getImmediate():jk(t)}function jk(t,e={}){const n=yr(t,Hl);if(n.isInitialized()){const i=n.getImmediate();if(Ao(e,n.getOptions()))return i;throw _t.create("already-initialized")}return n.initialize({options:e})}function zk(t,e,n,r){t=Re(t),Ok(jE,Xs[t.app.options.appId],e,n,r).catch(i=>pt.error(i))}const uy="@firebase/analytics",cy="0.10.0";function Kk(){Ht(new Ot(Hl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $k(r,i,n)},"PUBLIC")),Ht(new Ot("analytics-internal",t,"PRIVATE")),ft(uy,cy),ft(uy,cy,"esm2017");function t(e){try{const n=e.getProvider(Hl).getImmediate();return{logEvent:(r,i,s)=>zk(n,r,i,s)}}catch(n){throw _t.create("interop-component-reg-failed",{reason:n})}}}Kk();function pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hy(t){return t!==void 0&&t.enterprise!==void 0}class Hk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function zE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wk=zE,KE=new ii("auth","Firebase",zE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Ou("@firebase/auth");function Gk(t,...e){Wl.logLevel<=q.WARN&&Wl.warn(`Auth (${si}): ${t}`,...e)}function ol(t,...e){Wl.logLevel<=q.ERROR&&Wl.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw mp(t,...e)}function nn(t,...e){return mp(t,...e)}function HE(t,e,n){const r=Object.assign(Object.assign({},Wk()),{[e]:n});return new ii("auth","Firebase",r).create(e,{appName:t.name})}function qk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),HE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KE.create(t,...e)}function U(t,e,...n){if(!t)throw mp(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function An(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qk(){return dy()==="http:"||dy()==="https:"}function dy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qk()||dE()||"connection"in navigator)?navigator.onLine:!0}function Xk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=WC()||qC()}get(){return Yk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Yo(3e4,6e4);function ai(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,r,i={}){return GE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WE.fetch()(qE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function GE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jk),e);try{const i=new eN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw HE(t,c,u);Lt(t,c)}}catch(i){if(i instanceof Mt)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function Xo(t,e,n,r,i={}){const s=await vr(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gp(t.config,i):`${t.config.apiScheme}://${i}`}class eN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),Zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}async function tN(t,e){return vr(t,"GET","/v2/recaptchaConfig",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function rN(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=Re(t),r=await n.getIdToken(e),i=yp(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(rh(i.auth_time)),issuedAtTime:Js(rh(i.iat)),expirationTime:Js(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function yp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=oE(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sN(t){const e=yp(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&oN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gi(t,rN(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cN(s.providerUserInfo):[],a=uN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new QE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function lN(t){const e=Re(t);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cN(t){return t.map(e=>{var{providerId:n}=e,r=pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(t,e){const n=await GE(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ro;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new QE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return lN(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gi(this,nN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:f,emailVerified:v,isAnonymous:w,providerData:I,stsTokenManager:R}=n;U(f&&R,e,"internal-error");const k=Ro.fromJSON(this.name,R);U(typeof f=="string",e,"internal-error"),Ln(h,e.name),Ln(d,e.name),U(typeof v=="boolean",e,"internal-error"),U(typeof w=="boolean",e,"internal-error"),Ln(y,e.name),Ln(_,e.name),Ln(E,e.name),Ln(T,e.name),Ln(g,e.name),Ln(p,e.name);const M=new Vr({uid:f,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:w,photoURL:_,phoneNumber:y,tenantId:E,stsTokenManager:k,createdAt:g,lastLoginAt:p});return I&&Array.isArray(I)&&(M.providerData=I.map(V=>Object.assign({},V))),T&&(M._redirectEventId=T),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ro;i.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=fy.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YE.type="NONE";const py=YE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=al(this.userKey,i.apiKey,s),this.fullPersistenceKey=al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(yn(py),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(py);const o=al(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Vr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Li(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tw(e))return"Blackberry";if(nw(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||JE(e))&&!e.includes("edge/"))return"Chrome";if(ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XE(t=Xe()){return/firefox\//i.test(t)}function vp(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JE(t=Xe()){return/crios\//i.test(t)}function ZE(t=Xe()){return/iemobile/i.test(t)}function ew(t=Xe()){return/android/i.test(t)}function tw(t=Xe()){return/blackberry/i.test(t)}function nw(t=Xe()){return/webos/i.test(t)}function Uu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dN(t=Xe()){var e;return Uu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fN(){return QC()&&document.documentMode===10}function rw(t=Xe()){return Uu(t)||ew(t)||nw(t)||tw(t)||/windows phone/i.test(t)||ZE(t)}function pN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e=[]){let n;switch(t){case"Browser":n=my(Xe());break;case"Worker":n=`${my(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e={}){return vr(t,"GET","/v2/passwordPolicy",ai(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=6;class vN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new mN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Re(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gN(this),n=new vN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dn(t){return Re(t)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tR(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EN().appendChild(r)})}function wN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TN="https://www.google.com/recaptcha/enterprise.js?render=",IN="recaptcha-enterprise",SN="NO_RECAPTCHA";class AN{constructor(e){this.type=IN,this.auth=Dn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{tN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Hk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(SN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}sw(TN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ql(t,e,n,r=!1){const i=new AN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(t,e){const n=yr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ao(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function RN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PN(t,e,n){const r=Dn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ow(e),{host:o,port:a}=kN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NN()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kN(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yy(o)}}}function yy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function xN(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DN(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}async function bN(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends _p{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ql(e,r,"signInWithPassword");return ih(e,i)}else return ih(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ql(e,r,"signInWithPassword");return ih(e,s)}else return Promise.reject(i)});case"emailLink":return DN(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bN(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="http://localhost";class Yr extends _p{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MN(t){const e=bs(Os(t)).link,n=e?bs(Os(e)).deep_link_id:null,r=bs(Os(t)).deep_link_id;return(r?bs(Os(r)).link:null)||r||n||e||t}class Ep{constructor(e){var n,r,i,s,o,a;const l=bs(Os(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=LN((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MN(e);try{return new Ep(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ep.parseLink(n);return U(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Jo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Jo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t,e){return Xo(t,"POST","/v1/accounts:signUp",ai(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vr._fromIdTokenResponse(e,r,i),o=vy(r);return new Cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vy(r);return new Cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t){var e;const n=Dn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ll(n,{returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ql(e,n,r,i)}}function aw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,s,e,r):s})}async function UN(t,e,n=!1){const r=await Gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gi(t,aw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=yp(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(t,e,n=!1){const r="signIn",i=await aw(t,r,e),s=await Cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $N(t,e){return lw(Dn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t){const e=Dn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BN(t,e,n){var r;const i=Dn(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ql(i,s,"signUpPassword");o=ll(i,u)}else o=ll(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ql(i,s,"signUpPassword");return ll(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&uw(t),u}),l=await Cn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function jN(t,e,n){return $N(Re(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Re(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gi(r,zN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KN(t,e,n,r){return Re(t).onIdTokenChanged(e,n,r)}function HN(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function WN(t){return Re(t).signOut()}const Yl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(){const t=Xe();return vp(t)||Uu(t)}const qN=1e3,QN=10;class dw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GN()&&pN(),this.fallbackToPolling=rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dw.type="LOCAL";const YN=dw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fw.type="SESSION";const pw=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await XN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Tp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function ZN(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function ex(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nx(){return mw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="firebaseLocalStorageDb",rx=1,Xl="firebaseLocalStorage",yw="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function ix(){const t=indexedDB.deleteDatabase(gw);return new Zo(t).toPromise()}function Md(){const t=indexedDB.open(gw,rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xl,{keyPath:yw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xl)?e(r):(r.close(),await ix(),e(await Md()))})})}async function _y(t,e,n){const r=$u(t,!0).put({[yw]:e,value:n});return new Zo(r).toPromise()}async function sx(t,e){const n=$u(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function Ey(t,e){const n=$u(t,!0).delete(e);return new Zo(n).toPromise()}const ox=800,ax=3;class vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ax)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fu._getInstance(nx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ex(),!this.activeServiceWorker)return;this.sender=new JN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Md();return await _y(e,Yl,"1"),await Ey(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_y(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vw.type="LOCAL";const lx=vw;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e){return e?yn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends _p{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ux(t){return lw(t.auth,new Ip(t),t.bypassAuthState)}function cx(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),FN(n,new Ip(t),t.bypassAuthState)}async function hx(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),UN(n,new Ip(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ux;case"linkViaPopup":case"linkViaRedirect":return hx;case"reauthViaPopup":case"reauthViaRedirect":return cx;default:Lt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=new Yo(2e3,1e4);async function ww(t,e,n){const r=Dn(t);qk(t,e,wp);const i=_w(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}class xr extends Ew{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dx.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx="pendingRedirect",ul=new Map;class px extends Ew{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await mx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mx(t,e){const n=vx(e),r=yx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gx(t,e){ul.set(t._key(),e)}function yx(t){return yn(t._redirectPersistence)}function vx(t){return al(fx,t.config.apiKey,t.name)}async function _x(t,e,n=!1){const r=Dn(t),i=_w(r,e),o=await new px(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=10*60*1e3;class wx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ex&&this.cachedEventUids.clear(),this.cachedEventUids.has(wy(e))}saveEventToCache(e){this.cachedEventUids.add(wy(e)),this.lastProcessedEventTime=Date.now()}}function wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ax=/^https?/;async function Cx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ix(t);for(const n of e)try{if(Rx(n))return}catch{}Lt(t,"unauthorized-domain")}function Rx(t){const e=Ld(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ax.test(n))return!1;if(Sx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Yo(3e4,6e4);function Ty(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kx(t){return new Promise((e,n)=>{var r,i,s;function o(){Ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ty(),n(nn(t,"network-request-failed"))},timeout:Px.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=wN("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},sw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cl=null,e})}let cl=null;function Nx(t){return cl=cl||kx(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=new Yo(5e3,15e3),Dx="__/auth/iframe",bx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mx(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gp(e,bx):`https://${t.config.authDomain}/${Dx}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=Lx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function Vx(t){const e=await Nx(t),n=rn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Mx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},xx.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fx=500,$x=600,Bx="_blank",jx="http://localhost";class Iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zx(t,e,n,r=Fx,i=$x){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ux),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=JE(u)?Bx:n),XE(u)&&(e=e||jx,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,_])=>`${d}${y}=${_},`,"");if(dN(u)&&a!=="_self")return Kx(e||"",a),new Iy(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Iy(h)}function Kx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="__/auth/handler",Wx="emulator/auth/handler",Gx=encodeURIComponent("fac");async function Sy(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Jo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Gx}=${encodeURIComponent(l)}`:"";return`${qx(t)}?${Qo(a).slice(1)}${u}`}function qx({config:t}){return t.emulator?gp(t,Wx):`https://${t.authDomain}/${Hx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="webStorageSupport";class Qx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pw,this._completeRedirectFn=_x,this._overrideRedirectResult=gx}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sy(e,n,r,Ld(),i);return zx(e,o,Tp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sy(e,n,r,Ld(),i);return ZN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vx(e),r=new wx(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sh,{type:sh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sh];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rw()||vp()||Uu()}}const Yx=Qx;var Ay="@firebase/auth",Cy="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zx(t){Ht(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iw(t)},u=new _N(r,i,s,l);return RN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Ot("auth-internal",e=>{const n=Dn(e.getProvider("auth").getImmediate());return(r=>new Xx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Ay,Cy,Jx(t)),ft(Ay,Cy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=5*60,tD=cE("authIdTokenMaxAge")||eD;let Ry=null;const nD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tD)return;const i=n==null?void 0:n.token;Ry!==i&&(Ry=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ur(t=Lu()){const e=yr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CN(t,{popupRedirectResolver:Yx,persistence:[lx,YN,pw]}),r=cE("authTokenSyncURL");if(r){const s=nD(r);HN(n,s,()=>s(n.currentUser)),KN(n,o=>s(o))}const i=aE("auth");return i&&PN(n,`http://${i}`),n}Zx("Browser");const rD=()=>m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:"navbar",children:[m.jsx(Cr,{to:"/freeflow-edu/",className:({isActive:t})=>t?"link active":"link",children:"Login"}),m.jsx(Cr,{to:"/freeflow-edu/register",className:({isActive:t})=>t?"link active":"link",children:"Register"})]}),m.jsx(nE,{})]}),Py=t=>!(t!==void 0&&t!=null&&t.length>0),Ls=t=>t.charAt(0).toUpperCase()+t.slice(1);var iD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Sp=Sp||{},F=iD||self;function Bu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ea(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sD(t){return Object.prototype.hasOwnProperty.call(t,oh)&&t[oh]||(t[oh]=++oD)}var oh="closure_uid_"+(1e9*Math.random()>>>0),oD=0;function aD(t,e,n){return t.call.apply(t.bind,arguments)}function lD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=aD:qe=lD,qe.apply(null,arguments)}function Ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function _r(){this.s=this.s,this.o=this.o}var uD=0;_r.prototype.s=!1;_r.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uD!=0)&&sD(this)};_r.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ap(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ky(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Bu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var cD=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function ko(t){return/^[\s\xa0]*$/.test(t)}function ju(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return ju().indexOf(t)!=-1}function Cp(t){return Cp[" "](t),t}Cp[" "]=function(){};function hD(t,e){var n=r2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var dD=Yt("Opera"),qi=Yt("Trident")||Yt("MSIE"),Sw=Yt("Edge"),Vd=Sw||qi,Aw=Yt("Gecko")&&!(ju().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),fD=ju().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function Cw(){var t=F.document;return t?t.documentMode:void 0}var Ud;e:{var ah="",lh=function(){var t=ju();if(Aw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sw)return/Edge\/([\d\.]+)/.exec(t);if(qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(fD)return/WebKit\/(\S+)/.exec(t);if(dD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lh&&(ah=lh?lh[1]:""),qi){var uh=Cw();if(uh!=null&&uh>parseFloat(ah)){Ud=String(uh);break e}}Ud=ah}var Fd;if(F.document&&qi){var Ny=Cw();Fd=Ny||parseInt(Ud,10)||void 0}else Fd=void 0;var pD=Fd;function No(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Aw){e:{try{Cp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&No.$.h.call(this)}}be(No,Qe);var mD={2:"touch",3:"pen",4:"mouse"};No.prototype.h=function(){No.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ta="closure_listenable_"+(1e6*Math.random()|0),gD=0;function yD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++gD,this.fa=this.ia=!1}function zu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Rw(t){const e={};for(const n in t)e[n]=t[n];return e}const xy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<xy.length;s++)n=xy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ku(t){this.src=t,this.g={},this.h=0}Ku.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Bd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function $d(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Iw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Pp="closure_lm_"+(1e6*Math.random()|0),ch={};function kw(t,e,n,r,i){if(r&&r.once)return xw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)kw(t,e[s],n,r,i);return null}return n=xp(n),t&&t[ta]?t.O(e,n,ea(r)?!!r.capture:!!r,i):Nw(t,e,n,!1,r,i)}function Nw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ea(i)?!!i.capture:!!i,a=Np(t);if(a||(t[Pp]=a=new Ku(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _D(){function t(n){return e.call(t.src,t.listener,n)}const e=ED;return t}function xw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xw(t,e[s],n,r,i);return null}return n=xp(n),t&&t[ta]?t.P(e,n,ea(r)?!!r.capture:!!r,i):Nw(t,e,n,!0,r,i)}function Dw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Dw(t,e[s],n,r,i);else r=ea(r)?!!r.capture:!!r,n=xp(n),t&&t[ta]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Bd(s,n,r,i),-1<n&&(zu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Np(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bd(e,n,r,i)),(n=-1<t?e[t]:null)&&kp(n))}function kp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ta])$d(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Np(e))?($d(n,t),n.h==0&&(n.src=null,e[Pp]=null)):zu(t)}}}function bw(t){return t in ch?ch[t]:ch[t]="on"+t}function ED(t,e){if(t.fa)t=!0;else{e=new No(e,this);var n=t.listener,r=t.la||t.src;t.ia&&kp(t),t=n.call(r,e)}return t}function Np(t){return t=t[Pp],t instanceof Ku?t:null}var hh="__closure_events_fn_"+(1e9*Math.random()>>>0);function xp(t){return typeof t=="function"?t:(t[hh]||(t[hh]=function(e){return t.handleEvent(e)}),t[hh])}function De(){_r.call(this),this.i=new Ku(this),this.S=this,this.J=null}be(De,_r);De.prototype[ta]=!0;De.prototype.removeEventListener=function(t,e,n,r){Dw(this,t,e,n,r)};function Fe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(r,t),Pw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Va(o,r,!0,e)&&i}if(o=e.g=t,i=Va(o,r,!0,e)&&i,i=Va(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Va(o,r,!1,e)&&i}De.prototype.N=function(){if(De.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zu(n[r]);delete t.g[e],t.h--}}this.J=null};De.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};De.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Va(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&$d(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Dp=F.JSON.stringify;class wD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function TD(){var t=bp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ID{constructor(){this.h=this.g=null}add(e,n){const r=Ow.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ow=new wD(()=>new SD,t=>t.reset());class SD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function CD(t){F.setTimeout(()=>{throw t},0)}let xo,Do=!1,bp=new ID,Lw=()=>{const t=F.Promise.resolve(void 0);xo=()=>{t.then(RD)}};var RD=()=>{for(var t;t=TD();){try{t.h.call(t.g)}catch(n){CD(n)}var e=Ow;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Do=!1};function Hu(t,e){De.call(this),this.h=t||1,this.g=e||F,this.j=qe(this.qb,this),this.l=Date.now()}be(Hu,De);N=Hu.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fe(this,"tick"),this.ga&&(Op(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Op(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Hu.$.N.call(this),Op(this),delete this.g};function Lp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Mw(t){t.g=Lp(()=>{t.g=null,t.i&&(t.i=!1,Mw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PD extends _r{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mw(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bo(t){_r.call(this),this.h=t,this.g={}}be(bo,_r);var Dy=[];function Vw(t,e,n,r){Array.isArray(n)||(n&&(Dy[0]=n.toString()),n=Dy);for(var i=0;i<n.length;i++){var s=kw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Uw(t){Rp(t.g,function(e,n){this.g.hasOwnProperty(n)&&kp(e)},t),t.g={}}bo.prototype.N=function(){bo.$.N.call(this),Uw(this)};bo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wu(){this.g=!0}Wu.prototype.Ea=function(){this.g=!1};function kD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ND(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DD(t,n)+(r?" "+r:"")})}function xD(t,e){t.info(function(){return"TIMEOUT: "+e})}Wu.prototype.info=function(){};function DD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Dp(n)}catch{return e}}var li={},by=null;function Gu(){return by=by||new De}li.Ta="serverreachability";function Fw(t){Qe.call(this,li.Ta,t)}be(Fw,Qe);function Oo(t){const e=Gu();Fe(e,new Fw(e))}li.STAT_EVENT="statevent";function $w(t,e){Qe.call(this,li.STAT_EVENT,t),this.stat=e}be($w,Qe);function rt(t){const e=Gu();Fe(e,new $w(e,t))}li.Ua="timingevent";function Bw(t,e){Qe.call(this,li.Ua,t),this.size=e}be(Bw,Qe);function na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var qu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mp(){}Mp.prototype.h=null;function Oy(t){return t.h||(t.h=t.i())}function zw(){}var ra={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vp(){Qe.call(this,"d")}be(Vp,Qe);function Up(){Qe.call(this,"c")}be(Up,Qe);var jd;function Qu(){}be(Qu,Mp);Qu.prototype.g=function(){return new XMLHttpRequest};Qu.prototype.i=function(){return{}};jd=new Qu;function ia(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bo(this),this.P=bD,t=Vd?125:void 0,this.V=new Hu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kw}function Kw(){this.i=null,this.g="",this.h=!1}var bD=45e3,zd={},Jl={};N=ia.prototype;N.setTimeout=function(t){this.P=t};function Kd(t,e,n){t.L=1,t.v=Xu(Rn(e)),t.s=n,t.S=!0,Hw(t,null)}function Hw(t,e){t.G=Date.now(),sa(t),t.A=Rn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Zw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Kw,t.g=ET(t.l,n?e:null,!t.s),0<t.O&&(t.M=new PD(qe(t.Pa,t,t.g),t.O)),Vw(t.U,t.g,"readystatechange",t.nb),e=t.I?Rw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Oo(),kD(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Vd||this.g&&(this.h.h||this.g.ja()||Uy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Oo(3):Oo(2)),Yu(this);var n=this.g.da();this.ca=n;t:if(Ww(this)){var r=Uy(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Zs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ND(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ko(a)){var u=a;break t}}u=null}if(n=u)Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hd(this,n);else{this.i=!1,this.o=3,rt(12),Dr(this),Zs(this);break e}}this.S?(Gw(this,c,o),Vd&&this.i&&c==3&&(Vw(this.U,this.V,"tick",this.mb),this.V.start())):(Pi(this.j,this.m,o,null),Hd(this,o)),c==4&&Dr(this),this.i&&!this.J&&(c==4?gT(this.l,this):(this.i=!1,sa(this)))}else e2(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Dr(this),Zs(this)}}}catch{}finally{}};function Ww(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=OD(t,n),i==Jl){e==4&&(t.o=4,rt(14),r=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zd){t.o=4,rt(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Pi(t.j,t.m,i,null),Hd(t,i);Ww(t)&&i!=Jl&&i!=zd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kp(e),e.M=!0,rt(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),Dr(t),Zs(t))}N.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.C<e.length&&(Yu(this),Gw(this,t,e),this.i&&t!=4&&sa(this))}};function OD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Jl:(n=Number(e.substring(n,r)),isNaN(n)?zd:(r+=1,r+n>e.length?Jl:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,Dr(this)};function sa(t){t.Y=Date.now()+t.P,qw(t,t.P)}function qw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=na(qe(t.lb,t),e)}function Yu(t){t.B&&(F.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xD(this.j,this.A),this.L!=2&&(Oo(),rt(17)),Dr(this),this.o=2,Zs(this)):qw(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||gT(t.l,t)}function Dr(t){Yu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Op(t.V),Uw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Hd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wd(n.i,t))){if(!t.K&&Wd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)tu(n),tc(n);else break e;zp(n),rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=na(qe(n.ib,n),6e3));if(1>=nT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else br(n,11)}else if((t.K||n.g==t)&&tu(n),!ko(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Fp(s,s.h),s.h=null))}if(r.F){const E=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,re(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=_T(r,r.J?r.pa:null,r.Y),o.K){rT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Yu(a),sa(a)),r.g=o}else pT(r);0<n.j.length&&nc(n)}else u[0]!="stop"&&u[0]!="close"||br(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?br(n,7):jp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Oo(4)}catch{}}function LD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Bu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function MD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Bu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Qw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Bu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MD(t),r=LD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Yw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fr){this.h=t.h,Zl(this,t.j),this.s=t.s,this.g=t.g,eu(this,t.m),this.l=t.l;var e=t.i,n=new Lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ly(this,n),this.o=t.o}else t&&(e=String(t).match(Yw))?(this.h=!1,Zl(this,e[1]||"",!0),this.s=Ms(e[2]||""),this.g=Ms(e[3]||"",!0),eu(this,e[4]),this.l=Ms(e[5]||"",!0),Ly(this,e[6]||"",!0),this.o=Ms(e[7]||"")):(this.h=!1,this.i=new Lo(null,this.h))}Fr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,My,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,My,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?$D:FD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,jD)),t.join("")};function Rn(t){return new Fr(t)}function Zl(t,e,n){t.j=n?Ms(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ly(t,e,n){e instanceof Lo?(t.i=e,zD(t.i,t.h)):(n||(e=Vs(e,BD)),t.i=new Lo(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Xu(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ms(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var My=/[#\/\?@]/g,FD=/[#\?:]/g,$D=/[#\?]/g,BD=/[#\?@]/g,jD=/#/g;function Lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Er(t){t.g||(t.g=new Map,t.h=0,t.i&&VD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Lo.prototype;N.add=function(t,e){Er(this),this.i=null,t=cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xw(t,e){Er(t),e=cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jw(t,e){return Er(t),e=cs(t,e),t.g.has(e)}N.forEach=function(t,e){Er(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){Er(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){Er(this);let e=[];if(typeof t=="string")Jw(this,t)&&(e=e.concat(this.g.get(cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Er(this),this.i=null,t=cs(this,t),Jw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Zw(t,e,n){Xw(t,e),0<n.length&&(t.i=null,t.g.set(cs(t,e),Ap(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zD(t,e){e&&!t.j&&(Er(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xw(this,r),Zw(this,i,n))},t)),t.j=e}var KD=class{constructor(t,e){this.g=t,this.map=e}};function eT(t){this.l=t||HD,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HD=10;function tT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nT(t){return t.h?1:t.g?t.g.size:0}function Wd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fp(t,e){t.g?t.g.add(e):t.h=e}function rT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eT.prototype.cancel=function(){if(this.i=iT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function iT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ap(t.i)}var WD=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function GD(){this.g=new WD}function qD(t,e,n){const r=n||"";try{Qw(t,function(i,s){let o=i;ea(i)&&(o=Dp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function QD(t,e){const n=new Wu;if(F.Image){const r=new Image;r.onload=Ma(Ua,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ma(Ua,n,r,"TestLoadImage: error",!1,e),r.onabort=Ma(Ua,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ma(Ua,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ua(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ju(t){this.l=t.ec||null,this.j=t.ob||!1}be(Ju,Mp);Ju.prototype.g=function(){return new Zu(this.l,this.j)};Ju.prototype.i=function(t){return function(){return t}}({});function Zu(t,e){De.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$p,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(Zu,De);var $p=0;N=Zu.prototype;N.open=function(t,e){if(this.readyState!=$p)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mo(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=$p};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mo(this)),this.g&&(this.readyState=3,Mo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function sT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oa(this):Mo(this),this.readyState==3&&sT(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,oa(this))};N.Ya=function(t){this.g&&(this.response=t,oa(this))};N.ka=function(){this.g&&oa(this)};function oa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mo(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var YD=F.JSON.parse;function pe(t){De.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oT,this.L=this.M=!1}be(pe,De);var oT="",XD=/^https?$/i,JD=["POST","PUT"];N=pe.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jd.g(),this.C=this.u?Oy(this.u):Oy(jd),this.g.onreadystatechange=qe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Vy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=Iw(JD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uT(this),0<this.B&&((this.L=ZD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.ua,this)):this.A=Lp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vy(this,s)}};function ZD(t){return qi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Sp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function Vy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,aT(t),ec(t)}function aT(t){t.F||(t.F=!0,Fe(t,"complete"),Fe(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),ec(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),pe.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?lT(this):this.kb())};N.kb=function(){lT(this)};function lT(t){if(t.h&&typeof Sp<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)Lp(t.La,0,t);else if(Fe(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Yw)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!XD.test(i?i.toLowerCase():"")}n=r}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var s=2<Xt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",aT(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){uT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function uT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),YD(e)}};function Uy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case oT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function e2(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ko(t[r]))continue;var n=AD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}vD(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cT(t){let e="";return Rp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hT(t){this.Ga=0,this.j=[],this.l=new Wu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ss("baseRetryDelayMs",5e3,t),this.hb=Ss("retryDelaySeedMs",1e4,t),this.eb=Ss("forwardChannelMaxRetries",2,t),this.xa=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new eT(t&&t.concurrentRequestLimit),this.Ja=new GD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=hT.prototype;N.ra=8;N.H=1;function jp(t){if(dT(t),t.H==3){var e=t.W++,n=Rn(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),aa(t,n),e=new ia(t,t.l,e),e.L=2,e.v=Xu(Rn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=ET(e.l,null),e.g.ha(e.v)),e.G=Date.now(),sa(e)}vT(t)}function tc(t){t.g&&(Kp(t),t.g.cancel(),t.g=null)}function dT(t){tc(t),t.u&&(F.clearTimeout(t.u),t.u=null),tu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function nc(t){if(!tT(t.i)&&!t.m){t.m=!0;var e=t.Na;xo||Lw(),Do||(xo(),Do=!0),bp.add(e,t),t.C=0}}function t2(t,e){return nT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=na(qe(t.Na,t,e),yT(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ia(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Rw(s),Pw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fT(this,i,e),n=Rn(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),aa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(cT(s)))+"&"+e:this.o&&Bp(n,this.o,s)),Fp(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,Kd(i,n,null)):Kd(i,n,e),this.H=2}}else this.H==3&&(t?Fy(this,t):this.j.length==0||tT(this.i)||Fy(this))};function Fy(t,e){var n;e?n=e.m:n=t.W++;const r=Rn(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),aa(t,r),t.o&&t.s&&Bp(r,t.o,t.s),n=new ia(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=fT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fp(t.i,n),Kd(n,r,e)}function aa(t,e){t.na&&Rp(t.na,function(n,r){re(e,r,n)}),t.h&&Qw({},function(n,r){re(e,r,n)})}function fT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?qe(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{qD(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function pT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xo||Lw(),Do||(xo(),Do=!0),bp.add(e,t),t.A=0}}function zp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=na(qe(t.Ma,t),yT(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,mT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=na(qe(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),tc(this),mT(this))};function Kp(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function mT(t){t.g=new ia(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Rn(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),aa(t,e),t.o&&t.s&&Bp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Xu(Rn(e)),n.s=null,n.S=!0,Hw(n,t)}N.ib=function(){this.v!=null&&(this.v=null,tc(this),zp(this),rt(19))};function tu(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function gT(t,e){var n=null;if(t.g==e){tu(t),Kp(t),t.g=null;var r=2}else if(Wd(t.i,e))n=e.F,rT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Gu(),Fe(r,new Bw(r,n)),nc(t)}else pT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&t2(t,e)||r==2&&zp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function yT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function br(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=qe(t.pb,t);n||(n=new Fr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Zl(n,"https"),Xu(n)),QD(n.toString(),r)}else rt(2);t.H=0,t.h&&t.h.za(e),vT(t),dT(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function vT(t){if(t.H=0,t.ma=[],t.h){const e=iT(t.i);(e.length!=0||t.j.length!=0)&&(ky(t.ma,e),ky(t.ma,t.j),t.i.i.length=0,Ap(t.j),t.j.length=0),t.h.ya()}}function _T(t,e,n){var r=n instanceof Fr?Rn(n):new Fr(n);if(r.g!="")e&&(r.g=e+"."+r.g),eu(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Fr(null);r&&Zl(s,r),e&&(s.g=e),i&&eu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),aa(t,r),r}function ET(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new pe(new Ju({ob:!0})):new pe(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function wT(){}N=wT.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function nu(){if(qi&&!(10<=Number(pD)))throw Error("Environmental error: no available transport.")}nu.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){De.call(this),this.g=new hT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ko(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ko(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hs(this)}be(Tt,De);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=_T(t,null,t.Y),nc(t)};Tt.prototype.close=function(){jp(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dp(t),t=n);e.j.push(new KD(e.fb++,t)),e.H==3&&nc(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,jp(this.g),delete this.g,Tt.$.N.call(this)};function TT(t){Vp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}be(TT,Vp);function IT(){Up.call(this),this.status=1}be(IT,Up);function hs(t){this.g=t}be(hs,wT);hs.prototype.Ba=function(){Fe(this.g,"a")};hs.prototype.Aa=function(t){Fe(this.g,new TT(t))};hs.prototype.za=function(t){Fe(this.g,new IT)};hs.prototype.ya=function(){Fe(this.g,"b")};function n2(){this.blockSize=-1}function Wt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}be(Wt,n2);Wt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)dh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){dh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){dh(this,r),i=0;break}}this.h=i,this.i+=e};Wt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Z(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var r2={};function Hp(t){return-128<=t&&128>t?hD(t,function(e){return new Z([e|0],0>e?-1:0)}):new Z([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return Vi;if(0>t)return Me(Jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Gd;return new Z(e,0)}function ST(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Me(ST(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),r=Vi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Jt(Math.pow(e,s)),r=r.R(s).add(Jt(o))):(r=r.R(n),r=r.add(Jt(o)))}return r}var Gd=4294967296,Vi=Hp(0),qd=Hp(1),$y=Hp(16777216);N=Z.prototype;N.ea=function(){if(Pt(this))return-Me(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Gd+r)*e,e*=Gd}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(Pt(this))return"-"+Me(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,r="";;){var i=iu(n,e).g;n=ru(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}N.X=function(t){return t=ru(this,t),Pt(t)?-1:vn(t)?0:1};function Me(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Z(n,~t.h).add(qd)}N.abs=function(){return Pt(this)?Me(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Z(n,n[n.length-1]&-2147483648?-1:0)};function ru(t,e){return t.add(Me(e))}N.R=function(t){if(vn(this)||vn(t))return Vi;if(Pt(this))return Pt(t)?Me(this).R(Me(t)):Me(Me(this).R(t));if(Pt(t))return Me(this.R(Me(t)));if(0>this.X($y)&&0>t.X($y))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Fa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Fa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Z(n,0)};function Fa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function iu(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new As(Vi,Vi);if(Pt(t))return e=iu(Me(t),e),new As(Me(e.g),Me(e.h));if(Pt(e))return e=iu(t,Me(e)),new As(Me(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qd,r=e;0>=r.X(t);)n=By(n),r=By(r);var i=di(n,1),s=di(r,1);for(r=di(r,2),n=di(n,2);!vn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=di(r,1),n=di(n,1)}return e=ru(t,i.R(e)),new As(i,e)}for(i=Vi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Jt(n),o=s.R(e);Pt(o)||0<o.X(t);)n-=r,s=Jt(n),o=s.R(e);vn(s)&&(s=qd),i=i.add(s),t=ru(t,o)}return new As(i,t)}N.gb=function(t){return iu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Z(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Z(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Z(n,this.h^t.h)};function By(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Z(n,t.h)}function di(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Z(i,t.h)}nu.prototype.createWebChannel=nu.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;qu.NO_ERROR=0;qu.TIMEOUT=8;qu.HTTP_ERROR=6;jw.COMPLETE="complete";zw.EventType=ra;ra.OPEN="a";ra.CLOSE="b";ra.ERROR="c";ra.MESSAGE="d";De.prototype.listen=De.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;Wt.prototype.digest=Wt.prototype.l;Wt.prototype.reset=Wt.prototype.reset;Wt.prototype.update=Wt.prototype.j;Z.prototype.add=Z.prototype.add;Z.prototype.multiply=Z.prototype.R;Z.prototype.modulo=Z.prototype.gb;Z.prototype.compare=Z.prototype.X;Z.prototype.toNumber=Z.prototype.ea;Z.prototype.toString=Z.prototype.toString;Z.prototype.getBits=Z.prototype.D;Z.fromNumber=Jt;Z.fromString=ST;var i2=function(){return new nu},s2=function(){return Gu()},fh=qu,o2=jw,a2=li,jy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$a=zw,l2=pe,u2=Wt,Ui=Z;const zy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Ou("@firebase/firestore");function Cs(){return Xr.logLevel}function b(t,...e){if(Xr.logLevel<=q.DEBUG){const n=e.map(Wp);Xr.debug(`Firestore (${ds}): ${t}`,...n)}}function Pn(t,...e){if(Xr.logLevel<=q.ERROR){const n=e.map(Wp);Xr.error(`Firestore (${ds}): ${t}`,...n)}}function Qi(t,...e){if(Xr.logLevel<=q.WARN){const n=e.map(Wp);Xr.warn(`Firestore (${ds}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function se(t,e){t||B()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class h2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d2{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new AT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new He(e)}}class f2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class p2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new f2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class m2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.R=n.token,new m2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=y2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function Yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Ce(0,0))}static max(){return new j(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Vo{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const v2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Vo{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return v2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}function _2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new hr(i,L.empty(),e)}function E2(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(j.min(),L.empty(),-1)}static max(){return new hr(j.max(),L.empty(),-1)}}function w2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==T2)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Gp.ae=-1;function rc(t){return t==null}function su(t){return t===0&&1/t==-1/0}function S2(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.comparator=e,this.root=n||Le.EMPTY}insert(e,n){return new de(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Le.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Le.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Le.RED,this.left=i??Le.EMPTY,this.right=s??Le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Le(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Le.EMPTY=null,Le.RED=!0,Le.BLACK=!1;Le.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hy(this.data.getIterator())}getIteratorFrom(e){return new Hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new $e(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new PT("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const A2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(se(!!t),typeof t=="string"){let e=0;const n=A2.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qp(t){const e=t.mapValue.fields.__previous_value__;return qp(e)?Qp(e):e}function Uo(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qp(t)?4:R2(t)?9007199254740991:10:B()}function ln(t,e){if(t===e)return!0;const n=Zr(t);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dr(i.timestampValue),a=dr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ve(i.doubleValue),a=ve(s.doubleValue);return o===a?su(o)===su(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ky(o)!==Ky(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ln(o[l],a[l])))return!1;return!0}(t,e);default:return B()}}function $o(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=Zr(t),r=Zr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ve(s.integerValue||s.doubleValue),l=ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Wy(t.timestampValue,e.timestampValue);case 4:return Wy(Uo(t),Uo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Jr(s),l=Jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(ve(s.latitude),ve(o.latitude));return a!==0?a:X(ve(s.longitude),ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Xi(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=X(l[h],c[h]);if(d!==0)return d;const y=Xi(a[l[h]],u[c[h]]);if(y!==0)return y}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw B()}}function Wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=dr(t),r=dr(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function Ji(t){return Qd(t)}function Qd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Qd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Qd(n.fields[o])}`;return i+"}"}(t.mapValue):B()}function Yd(t){return!!t&&"integerValue"in t}function Yp(t){return!!t&&"arrayValue"in t}function Gy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function R2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(eo(this.value))}}function kT(t){const e=[];return fs(t.fields,(n,r)=>{const i=new Ve([n]);if(hl(r)){const s=kT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,j.min(),j.min(),j.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,j.min(),j.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,j.min(),j.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.position=e,this.inclusive=n}}function Qy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n="asc"){this.field=e,this.dir=n}}function P2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{}class Se extends NT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new N2(e,n,r):n==="array-contains"?new b2(e,r):n==="in"?new O2(e,r):n==="not-in"?new L2(e,r):n==="array-contains-any"?new M2(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x2(e,r):new D2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xi(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends NT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new un(e,n)}matches(e){return xT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function xT(t){return t.op==="and"}function DT(t){return k2(t)&&xT(t)}function k2(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Xd(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(DT(t))return t.filters.map(e=>Xd(e)).join(",");{const e=t.filters.map(n=>Xd(n)).join(",");return`${t.op}(${e})`}}function bT(t,e){return t instanceof Se?function(r,i){return i instanceof Se&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&bT(o,i.filters[a]),!0):!1}(t,e):void B()}function OT(t){return t instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(OT).join(" ,")+"}"}(t):"Filter"}class N2 extends Se{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class x2 extends Se{constructor(e,n){super(e,"in",n),this.keys=LT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D2 extends Se{constructor(e,n){super(e,"not-in",n),this.keys=LT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class b2 extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yp(n)&&$o(n.arrayValue,this.value)}}class O2 extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class L2 extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$o(this.value.arrayValue,n)}}class M2 extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function Xy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new V2(t,e,n,r,i,s,o)}function Xp(t){const e=z(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.le=n}return e.le}function Jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yy(t.startAt,e.startAt)&&Yy(t.endAt,e.endAt)}function Jd(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function U2(t,e,n,r,i,s,o,a){return new ic(t,e,n,r,i,s,o,a)}function Zp(t){return new ic(t)}function Jy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function F2(t){return t.collectionGroup!==null}function to(t){const e=z(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new $e(Ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new au(s,r))}),n.has(Ve.keyField().canonicalString())||e.he.push(new au(Ve.keyField(),r))}return e.he}function sn(t){const e=z(t);return e.Pe||(e.Pe=$2(e,to(t))),e.Pe}function $2(t,e){if(t.limitType==="F")return Xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new au(i.field,s)});const n=t.endAt?new ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ou(t.startAt.position,t.startAt.inclusive):null;return Xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zd(t,e,n){return new ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Jp(sn(t),sn(e))&&t.limitType===e.limitType}function MT(t){return`${Xp(sn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>OT(i)).join(", ")}]`),rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of to(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Qy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,to(r),i)||r.endAt&&!function(o,a,l){const u=Qy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,to(r),i))}(t,e)}function B2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VT(t){return(e,n)=>{let r=!1;for(const i of to(t)){const s=j2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function j2(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Xi(l,u):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=new de(L.comparator);function kn(){return z2}const UT=new de(L.comparator);function Us(...t){let e=UT;for(const n of t)e=e.insert(n.key,n);return e}function FT(t){let e=UT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return no()}function $T(){return no()}function no(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const K2=new de(L.comparator),H2=new $e(L.comparator);function W(...t){let e=H2;for(const n of t)e=e.add(n);return e}const W2=new $e(X);function G2(){return W2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function jT(t){return{integerValue:""+t}}function q2(t,e){return S2(e)?jT(e):BT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function Q2(t,e,n){return t instanceof Bo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qp(s)&&(s=Qp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof jo?KT(t,e):t instanceof zo?HT(t,e):function(i,s){const o=zT(i,s),a=Zy(o)+Zy(i.Te);return Yd(o)&&Yd(i.Te)?jT(a):BT(i.serializer,a)}(t,e)}function Y2(t,e,n){return t instanceof jo?KT(t,e):t instanceof zo?HT(t,e):n}function zT(t,e){return t instanceof lu?function(r){return Yd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bo extends ac{}class jo extends ac{constructor(e){super(),this.elements=e}}function KT(t,e){const n=WT(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends ac{constructor(e){super(),this.elements=e}}function HT(t,e){let n=WT(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class lu extends ac{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Zy(t){return ve(t.integerValue||t.doubleValue)}function WT(t){return Yp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n){this.field=e,this.transform=n}}function J2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof jo&&i instanceof jo||r instanceof zo&&i instanceof zo?Yi(r.elements,i.elements,ln):r instanceof lu&&i instanceof lu?ln(r.Te,i.Te):r instanceof Bo&&i instanceof Bo}(t.transform,e.transform)}class Z2{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function GT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new QT(t.key,on.none()):new ca(t.key,t.data,on.none());{const n=t.data,r=kt.empty();let i=new $e(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Bt(i.toArray()),on.none())}}function eb(t,e,n){t instanceof ca?function(i,s,o){const a=i.value.clone(),l=tv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=tv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(qT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof ca?function(s,o,a,l){if(!dl(s.precondition,o))return a;const u=s.value.clone(),c=nv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,a,l){if(!dl(s.precondition,o))return a;const u=nv(s.fieldTransforms,l,o),c=o.data;return c.setAll(qT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zT(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function ev(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Yi(r,i,(s,o)=>J2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends lc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends lc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tv(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Y2(o,a,n[i]))}return r}function nv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Q2(s,o,e))}return r}class QT extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nb extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$T();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>ev(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>ev(n,r))}}class em{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=function(){return K2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new em(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Q;function ob(t){switch(t){default:return B();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function YT(t){if(t===void 0)return Pn("GRPC error has no .code"),A.UNKNOWN;switch(t){case ye.OK:return A.OK;case ye.CANCELLED:return A.CANCELLED;case ye.UNKNOWN:return A.UNKNOWN;case ye.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case ye.INTERNAL:return A.INTERNAL;case ye.UNAVAILABLE:return A.UNAVAILABLE;case ye.UNAUTHENTICATED:return A.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case ye.NOT_FOUND:return A.NOT_FOUND;case ye.ALREADY_EXISTS:return A.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return A.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case ye.ABORTED:return A.ABORTED;case ye.OUT_OF_RANGE:return A.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return A.UNIMPLEMENTED;case ye.DATA_LOSS:return A.DATA_LOSS;default:return B()}}(Q=ye||(ye={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Ui([4294967295,4294967295],0);function rv(t){const e=ab().encode(t),n=new u2;return n.update(e),new Uint8Array(n.digest())}function iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ui([n,r],0),new Ui([i,s],0)]}class tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Ui.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Ui.fromNumber(r)));return i.compare(lb)===1&&(i=new Ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=rv(e),[r,i]=iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=rv(e),[r,i]=iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(j.min(),i,new de(X),kn(),W())}}class ha{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class XT{constructor(e,n){this.targetId=e,this.ge=n}}class JT{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sv{constructor(){this.pe=0,this.ye=av(),this.we=Je.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=W(),n=W(),r=W();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new ha(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=av()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class ub{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kn(),this.Ke=ov(),this.$e=new de(X)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(e){const n=e.targetId,r=e.ge.count,i=this.Ze(n);if(i){const s=i.target;if(Jd(s))if(r===0){const o=new L(s.path);this.Ge(n,o,Ge.newNoDocument(o,j.min()))}else se(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,u)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Jr(r).toUint8Array()}catch(l){if(l instanceof PT)return Qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new tm(o,i,s)}catch(l){return Qi(l instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&Jd(a.target)){const l=new L(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,Ge.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=W();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ze(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new uc(e,n,this.$e,this.Qe,r);return this.Qe=kn(),this.Ke=ov(),this.$e=new de(X),i}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const i=this.je(e);this.ot(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new sv,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new $e(X),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new sv),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function ov(){return new de(L.comparator)}function av(){return new de(L.comparator)}const cb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),db=(()=>({and:"AND",or:"OR"}))();class fb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ef(t,e){return t.useProto3Json||rc(e)?e:{value:e}}function uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pb(t,e){return uu(t,e.toTimestamp())}function an(t){return se(!!t),j.fromTimestamp(function(n){const r=dr(n);return new Ce(r.seconds,r.nanos)}(t))}function nm(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function e1(t){const e=ae.fromString(t);return se(i1(e)),e}function tf(t,e){return nm(t.databaseId,e.path)}function ph(t,e){const n=e1(e);if(n.get(1)!==t.databaseId.projectId)throw new O(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(t1(n))}function nf(t,e){return nm(t.databaseId,e)}function mb(t){const e=e1(t);return e.length===4?ae.emptyPath():t1(e)}function rf(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t1(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lv(t,e,n){return{name:tf(t,e),fields:n.value.mapValue.fields}}function gb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(se(c===void 0||typeof c=="string"),Je.fromBase64String(c||"")):(se(c===void 0||c instanceof Uint8Array),Je.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:YT(u.code);return new O(c,u.message||"")}(o);n=new JT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ph(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):j.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new fl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ph(t,r.document),s=r.readTime?an(r.readTime):j.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ph(t,r.document),s=r.removedTargetIds||[];n=new fl([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new sb(i,s),a=r.targetId;n=new XT(a,o)}}return n}function yb(t,e){let n;if(e instanceof ca)n={update:lv(t,e.key,e.value)};else if(e instanceof QT)n={delete:tf(t,e.key)};else if(e instanceof ui)n={update:lv(t,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof nb))return B();n={verify:tf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof lu)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function vb(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(j.min())&&(o=an(s)),new Z2(o,i.transformResults||[])}(n,e))):[]}function _b(t,e){return{documents:[nf(t,e.path)]}}function Eb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=nf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return r1(un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:pi(h.field),direction:Ib(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ef(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function wb(t){let e=mb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=n1(h);return d instanceof un&&DT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new au(mi(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,rc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,y=h.values||[];return new ou(y,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,y=h.values||[];return new ou(y,d)}(n.endAt)),U2(e,i,o,s,a,"F",l,u)}function Tb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return Se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return Se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return Se.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>n1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function Ib(t){return cb[t]}function Sb(t){return hb[t]}function Ab(t){return db[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return Ve.fromServerFormat(t.fieldPath)}function r1(t){return t instanceof Se?function(n){if(n.op==="=="){if(qy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(Gy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(Gy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:Sb(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>r1(i));return r.length===1?r[0]:{compositeFilter:{op:Ab(n.op),filters:r}}}(t):B()}function Cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Je.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.ct=e}}function Pb(t){const e=wb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this._n=new Nb}addToCollectionParentIndex(e,n){return this._n.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(hr.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class Nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Zi(0)}static Bn(){return new Zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ro(r.mutation,i,Bt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Us();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=kn();const o=no(),a=function(){return no()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ui)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ro(c.mutation,u,c.mutation.getFieldMask(),Ce.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Db(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new de((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=$T();c.forEach(d=>{if(!s.has(d)){const y=GT(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):F2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(Or());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:FT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,s).next(a=>S.forEach(a,l=>{const u=function(h,d){return new ic(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ge.newInvalidDocument(c)))});let a=Us();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&ro(c.mutation,u,Bt.empty(),Ce.now()),oc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Pb(i.bundledQuery),readTime:an(i.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.overlays=new de(L.comparator),this.hr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new de((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Or(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ib(n,r));let s=this.hr.get(n);s===void 0&&(s=W(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.Pr=new $e(ke.Ir),this.Tr=new $e(ke.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ke(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ke(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new L(new ae([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new L(new ae([])),r=new ke(n,e),i=new ke(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return L.comparator(e.key,n.key)||X(e.pr,n.pr)}static Er(e,n){return X(e.pr,n.pr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new $e(ke.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rb(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(X);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new ke(new L(s),0);let a=new $e(X);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ke(n,0),i=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.vr=e,this.docs=function(){return new de(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||w2(E2(c),r)<=0||(i.has(c.key)||oc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}Fr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ub(this)}getSize(e){return S.resolve(this.size)}}class Ub extends xb{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.persistence=e,this.Mr=new ps(n=>Xp(n),Jp),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Or=0,this.Nr=new rm,this.targetCount=0,this.Br=Zi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Zi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.qn(n),S.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Gp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Fb(this),this.indexManager=new kb,this.remoteDocumentCache=function(i){return new Vb(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Rb(n),this.$r=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Lb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Mb(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new Bb(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Bb extends I2{constructor(e){super(),this.currentSequenceNumber=e}}class im{constructor(e){this.persistence=e,this.zr=new rm,this.jr=null}static Hr(e){return new im(e)}get Jr(){if(this.jr)return this.jr;throw B()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const i=L.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new jb;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Cs()<=q.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Cs()<=q.DEBUG&&b("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Cs()<=q.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):S.resolve())}ji(e,n){if(Jy(n))return S.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zd(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Zd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return Jy(n)||i.isEqual(j.min())?S.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?S.resolve(null):(Cs()<=q.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.es(e,o,n,_2(i,-1)).next(a=>a))})}Zi(e,n){let r=new $e(VT(e));return n.forEach((i,s)=>{oc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Cs()<=q.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",fi(n)),this.zi.getDocumentsMatchingQuery(e,n,hr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new de(X),this.rs=new ps(s=>Xp(s),Jp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bb(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Hb(t,e,n,r){return new Kb(t,e,n,r)}async function s1(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Wb(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let y=S.resolve();return d.forEach(_=>{y=y.next(()=>c.getEntry(l,_)).next(E=>{const T=u.docVersions.get(_);se(T!==null),E.version.compareTo(T)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),c.addEntry(E)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function o1(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Gb(t,e){const n=z(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?y=y.withResumeToken(Je.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(E,T,g){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,y,c)&&a.push(n.Qr.updateTargetData(s,y))});let l=kn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(qb(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(j.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function qb(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Qb(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yb(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function sf(t,e,n){const r=z(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ua(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function uv(t,e,n){const r=z(t);let i=j.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=z(l),d=h.rs.get(c);return d!==void 0?S.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:W())).next(a=>(Xb(r,B2(e),a),{documents:a,hs:s})))}function Xb(t,e,n){let r=t.ss.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class cv{constructor(){this.activeTargetIds=G2()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this.no=new cv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function mh(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class nO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=mh(),l=this.bo(n,r);b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(b("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Qi("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=eO[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=mh();return new Promise((o,a)=>{const l=new l2;l.setWithCredentials(!0),l.listenOnce(o2.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fh.NO_ERROR:const c=l.getResponseJson();b(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case fh.TIMEOUT:b(Ke,`RPC '${e}' ${s} timed out`),a(new O(A.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const h=l.getStatus();if(b(Ke,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const y=d==null?void 0:d.error;if(y&&y.status&&y.message){const _=function(T){const g=T.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(y.status);a(new O(_,y.message))}else a(new O(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(A.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{b(Ke,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Ke,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=mh(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i2(),a=s2(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(Ke,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,y=!1;const _=new tO({lo:T=>{y?b(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(b(Ke,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),b(Ke,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},ho:()=>h.close()}),E=(T,g,p)=>{T.listen(g,f=>{try{p(f)}catch(v){setTimeout(()=>{throw v},0)}})};return E(h,$a.EventType.OPEN,()=>{y||b(Ke,`RPC '${e}' stream ${i} transport opened.`)}),E(h,$a.EventType.CLOSE,()=>{y||(y=!0,b(Ke,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),E(h,$a.EventType.ERROR,T=>{y||(y=!0,Qi(Ke,`RPC '${e}' stream ${i} transport errored:`,T),_.Vo(new O(A.UNAVAILABLE,"The operation could not be completed")))}),E(h,$a.EventType.MESSAGE,T=>{var g;if(!y){const p=T.data[0];se(!!p);const f=p,v=f.error||((g=f[0])===null||g===void 0?void 0:g.error);if(v){b(Ke,`RPC '${e}' stream ${i} received error:`,v);const w=v.status;let I=function(M){const V=ye[M];if(V!==void 0)return YT(V)}(w),R=v.message;I===void 0&&(I=A.INTERNAL,R="Unknown error status: "+w+" with message "+v.message),y=!0,_.Vo(new O(I,R)),h.close()}else b(Ke,`RPC '${e}' stream ${i} received:`,p),_.mo(p)}}),E(a,a2.STAT_EVENT,T=>{T.stat===jy.PROXY?b(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===jy.NOPROXY&&b(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function gh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){return new fb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new a1(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new O(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rO extends l1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=gb(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?an(o.readTime):j.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=rf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Jd(l)?{documents:_b(s,l)}:{query:Eb(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ZT(s,o.resumeToken);const u=ef(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=uu(s,o.snapshotVersion.toTimestamp());const u=ef(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Tb(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=rf(this.serializer),n.removeTarget=e,this.t_(n)}}class iO extends l1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=vb(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.T_(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=rf(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yb(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new O(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(A.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(A.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class oO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Pn(n),this.g_=!1):b("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{ci(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=z(l);u.v_.add(4),await da(u),u.x_.set("Unknown"),u.v_.delete(4),await hc(u)}(this))})}),this.x_=new oO(r,i)}}async function hc(t){if(ci(t))for(const e of t.F_)await e(!0)}async function da(t){for(const e of t.F_)await e(!1)}function u1(t,e){const n=z(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),lm(n)?am(n):ms(n).Jo()&&om(n,e))}function c1(t,e){const n=z(t),r=ms(n);n.C_.delete(e),r.Jo()&&h1(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ci(n)&&n.x_.set("Unknown"))}function om(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).c_(e)}function h1(t,e){t.O_.Ne(e),ms(t).l_(e)}function am(t){t.O_=new ub({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.x_.p_()}function lm(t){return ci(t)&&!ms(t).Ho()&&t.C_.size>0}function ci(t){return z(t).v_.size===0}function d1(t){t.O_=void 0}async function lO(t){t.C_.forEach((e,n)=>{om(t,e)})}async function uO(t,e){d1(t),lm(t)?(t.x_.S_(e),am(t)):t.x_.set("Unknown")}async function cO(t,e,n){if(t.x_.set("Online"),e instanceof JT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cu(t,r)}else if(e instanceof fl?t.O_.Ue(e):e instanceof XT?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(j.min()))try{const r=await o1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),h1(s,l);const h=new qn(c.target,l,u,c.sequenceNumber);om(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await cu(t,r)}}async function cu(t,e,n){if(!ua(e))throw e;t.v_.add(1),await da(t),t.x_.set("Offline"),n||(n=()=>o1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await hc(t)})}function f1(t,e){return e().catch(n=>cu(t,n,e))}async function dc(t){const e=z(t),n=fr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;hO(e);)try{const i=await Qb(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,dO(e,i)}catch(i){await cu(e,i)}p1(e)&&m1(e)}function hO(t){return ci(t)&&t.D_.length<10}function dO(t,e){t.D_.push(e);const n=fr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function p1(t){return ci(t)&&!fr(t).Ho()&&t.D_.length>0}function m1(t){fr(t).start()}async function fO(t){fr(t).d_()}async function pO(t){const e=fr(t);for(const n of t.D_)e.I_(n.mutations)}async function mO(t,e,n){const r=t.D_.shift(),i=em.from(r,e,n);await f1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dc(t)}async function gO(t,e){e&&fr(t).P_&&await async function(r,i){if(function(o){return ob(o)&&o!==A.ABORTED}(i.code)){const s=r.D_.shift();fr(r).Zo(),await f1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dc(r)}}(t,e),p1(t)&&m1(t)}async function dv(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.v_.add(3),await da(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await hc(n)}async function yO(t,e){const n=z(t);e?(n.v_.delete(2),await hc(n)):e||(n.v_.add(2),await da(n),n.x_.set("Unknown"))}function ms(t){return t.N_||(t.N_=function(n,r,i){const s=z(n);return s.R_(),new rO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:lO.bind(null,t),To:uO.bind(null,t),u_:cO.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),lm(t)?am(t):t.x_.set("Unknown")):(await t.N_.stop(),d1(t))})),t.N_}function fr(t){return t.B_||(t.B_=function(n,r,i){const s=z(n);return s.R_(),new iO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:fO.bind(null,t),To:gO.bind(null,t),E_:pO.bind(null,t),T_:mO.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await dc(t)):(await t.B_.stop(),t.D_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new um(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cm(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),ua(t))return new O(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.L_=new de(L.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):B():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new es(e,n,Fi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.q_=void 0,this.listeners=[]}}class _O{constructor(){this.queries=new ps(e=>MT(e),sc),this.onlineState="Unknown",this.Q_=new Set}}async function EO(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vO),i)try{s.q_=await n.onListen(r)}catch(o){const a=cm(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.K_(n.onlineState),s.q_&&e.U_(s.q_)&&hm(n)}async function wO(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TO(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&hm(n)}function IO(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function hm(t){t.Q_.forEach(e=>{e.next()})}class SO{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.key=e}}class y1{constructor(e){this.key=e}}class AO{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=W(),this.mutatedKeys=W(),this.aa=VT(e),this.ua=new Fi(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new fv,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=oc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),E=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let T=!1;d&&y?d.data.isEqual(y.data)?_!==E&&(r.track({type:3,doc:y}),T=!0):this.Pa(d,y)||(r.track({type:2,doc:y}),T=!0,(l&&this.aa(y,l)>0||u&&this.aa(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),T=!0):d&&!y&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(y?(o=o.add(y),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const s=e.ha.k_();s.sort((u,c)=>function(d,y){const _=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return _(d)-_(y)}(u.type,c.type)||this.aa(u.doc,c.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,s.length!==0||l?{snapshot:new es(this.query,e.ua,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new fv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=W(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new y1(r))}),this._a.forEach(r=>{e.has(r)||n.push(new g1(r))}),n}Aa(e){this.sa=e.hs,this._a=W();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return es.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class CO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RO{constructor(e){this.key=e,this.Va=!1}}class PO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new ps(a=>MT(a),sc),this.ga=new Map,this.pa=new Set,this.ya=new de(L.comparator),this.wa=new Map,this.Sa=new rm,this.ba={},this.Da=new Map,this.Ca=Zi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function kO(t,e){const n=FO(t);let r,i;const s=n.fa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await Yb(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await NO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&u1(n.remoteStore,o)}return i}async function NO(t,e,n,r,i){t.Fa=(h,d,y)=>async function(E,T,g,p){let f=T.view.la(g);f.Xi&&(f=await uv(E.localStore,T.query,!1).then(({documents:I})=>T.view.la(I,f)));const v=p&&p.targetChanges.get(T.targetId),w=T.view.applyChanges(f,E.isPrimaryClient,v);return mv(E,T.targetId,w.Ea),w.snapshot}(t,h,d,y);const s=await uv(t.localStore,e,!0),o=new AO(e,s.hs),a=o.la(s.documents),l=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);mv(t,n,u.Ea);const c=new CO(e,n,o);return t.fa.set(e,c),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),u.snapshot}async function xO(t,e){const n=z(t),r=n.fa.get(e),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!sc(s,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),c1(n.remoteStore,r.targetId),of(n,r.targetId)}).catch(la)):(of(n,r.targetId),await sf(n.localStore,r.targetId,!0))}async function DO(t,e,n){const r=$O(t);try{const i=await function(o,a){const l=z(o),u=Ce.now(),c=a.reduce((y,_)=>y.add(_.key),W());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=kn(),E=W();return l.os.getEntries(y,c).next(T=>{_=T,_.forEach((g,p)=>{p.isValidDocument()||(E=E.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,_)).next(T=>{h=T;const g=[];for(const p of a){const f=tb(p,h.get(p.key).overlayedDocument);f!=null&&g.push(new ui(p.key,f,kT(f.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,g,a)}).next(T=>{d=T;const g=T.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(y,T.batchId,g)})}).then(()=>({batchId:d.batchId,changes:FT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ba[o.currentUser.toKey()];u||(u=new de(X)),u=u.insert(a,l),o.ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await fa(r,i.changes),await dc(r.remoteStore)}catch(i){const s=cm(i,"Failed to persist write");n.reject(s)}}async function v1(t,e){const n=z(t);try{const r=await Gb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?se(o.Va):i.removedDocuments.size>0&&(se(o.Va),o.Va=!1))}),await fa(n,r,e)}catch(r){await la(r)}}function pv(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.K_(a)&&(u=!0)}),u&&hm(l)}(r.eventManager,e),i.length&&r.ma.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bO(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.wa.get(e),s=i&&i.key;if(s){let o=new de(L.comparator);o=o.insert(s,Ge.newNoDocument(s,j.min()));const a=W().add(s),l=new uc(j.min(),new Map,new de(X),o,a);await v1(r,l),r.ya=r.ya.remove(s),r.wa.delete(e),dm(r)}else await sf(r.localStore,e,!1).then(()=>of(r,e,n)).catch(la)}async function OO(t,e){const n=z(t),r=e.batch.batchId;try{const i=await Wb(n.localStore,e);E1(n,r,null),_1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,i)}catch(i){await la(i)}}async function LO(t,e,n){const r=z(t);try{const i=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(se(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);E1(r,e,n),_1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,i)}catch(i){await la(i)}}function _1(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function E1(t,e,n){const r=z(t);let i=r.ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ba[r.currentUser.toKey()]=i}}function of(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||w1(t,r)})}function w1(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(c1(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),dm(t))}function mv(t,e,n){for(const r of n)r instanceof g1?(t.Sa.addReference(r.key,e),MO(t,r)):r instanceof y1?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||w1(t,r.key)):B()}function MO(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(b("SyncEngine","New document in limbo: "+n),t.pa.add(r),dm(t))}function dm(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new L(ae.fromString(e)),r=t.Ca.next();t.wa.set(r,new RO(n)),t.ya=t.ya.insert(n,r),u1(t.remoteStore,new qn(sn(Zp(n.path)),r,"TargetPurposeLimboResolution",Gp.ae))}}async function fa(t,e,n){const r=z(t),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=sm.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ma.u_(i),await async function(l,u){const c=z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(u,d=>S.forEach(d.qi,y=>c.persistence.referenceDelegate.addReference(h,d.targetId,y)).next(()=>S.forEach(d.Qi,y=>c.persistence.referenceDelegate.removeReference(h,d.targetId,y)))))}catch(h){if(!ua(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const y=c.ns.get(d),_=y.snapshotVersion,E=y.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(d,E)}}}(r.localStore,s))}async function VO(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await s1(n.localStore,e);n.currentUser=e,function(s,o){s.Da.forEach(a=>{a.forEach(l=>{l.reject(new O(A.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.us)}}function UO(t,e){const n=z(t),r=n.wa.get(e);if(r&&r.Va)return W().add(r.key);{let i=W();const s=n.ga.get(e);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function FO(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=v1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bO.bind(null,e),e.ma.u_=TO.bind(null,e.eventManager),e.ma.Ma=IO.bind(null,e.eventManager),e}function $O(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LO.bind(null,e),e}class gv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Hb(this.persistence,new zb,e.initialUser,this.serializer)}createPersistence(e){return new $b(im.Hr,this.serializer)}createSharedClientState(e){return new Jb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VO.bind(null,this.syncEngine),await yO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _O}()}createDatastore(e){const n=cc(e.databaseInfo.databaseId),r=function(s){return new nO(s)}(e.databaseInfo);return function(s,o,a,l){return new sO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new aO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pv(this.syncEngine,n,0),function(){return hv.C()?new hv:new Zb}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new PO(i,s,o,a,l,u);return c&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=z(n);b("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await da(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=CT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await s1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>dv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>dv(e.remoteStore,s)),t._onlineComponents=e}function KO(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KO(n))throw n;Qi("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new gv)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await yh(t,new gv);return t._offlineComponents}async function T1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await yv(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await yv(t,new BO))),t._onlineComponents}function WO(t){return T1(t).then(e=>e.syncEngine)}async function GO(t){const e=await T1(t),n=e.eventManager;return n.onListen=kO.bind(null,e.syncEngine),n.onUnlisten=xO.bind(null,e.syncEngine),n}function qO(t,e,n={}){const r=new ar;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new jO({next:d=>{o.enqueueAndForget(()=>wO(s,h));const y=d.docs.has(a);!y&&d.fromCache?u.reject(new O(A.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&d.fromCache&&l&&l.source==="server"?u.reject(new O(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new SO(Zp(a.path),c,{includeMetadataChanges:!0,Y_:!0});return EO(s,h)}(await GO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t,e,n){if(!n)throw new O(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QO(t,e,n,r){if(e===!0&&r===!0)throw new O(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _v(t){if(!L.isDocumentKey(t))throw new O(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ev(t){if(L.isDocumentKey(t))throw new O(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fm(t);throw new O(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new c2;switch(r.type){case"firstParty":return new p2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(b("ComponentProvider","Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function YO(t,e,n,r={}){var i;const s=(t=ts(t,fc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=He.MOCK_USER;else{a=hE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new He(u)}t._authCredentials=new h2(new AT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pm(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class lr extends pm{constructor(e,n,r){super(e,n,Zp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new L(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function XO(t,e,...n){if(t=Re(t),S1("collection","path",e),t instanceof fc){const r=ae.fromString(e,...n);return Ev(r),new lr(t,null,r)}{if(!(t instanceof Et||t instanceof lr))throw new O(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Ev(r),new lr(t.firestore,null,r)}}function pa(t,e,...n){if(t=Re(t),arguments.length===1&&(e=CT.V()),S1("doc","path",e),t instanceof fc){const r=ae.fromString(e,...n);return _v(r),new Et(t,null,new L(r))}{if(!(t instanceof Et||t instanceof lr))throw new O(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return _v(r),new Et(t.firestore,t instanceof lr?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new a1(this,"async_queue_retry"),this.su=()=>{const n=gh();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new ar;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!ua(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const i=um.createAndSchedule(this,e,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&B()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class pc extends fc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new JO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||C1(this),this._firestoreClient.terminate()}}function ma(t,e){const n=typeof t=="object"?t:Lu(),r=typeof t=="string"?t:e||"(default)",i=yr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lE("firestore");s&&YO(i,...s)}return i}function A1(t){return t._firestoreClient||C1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function C1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new C2(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,I1(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(Je.fromBase64String(e))}catch(n){throw new O(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=/^__.*__$/;class eL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}function R1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class vm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Iu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Ru(e),i}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Iu(),i}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return hu(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(R1(this.Tu)&&ZO.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class tL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cc(e)}yu(e,n,r,i=!1){return new vm({Tu:e,methodName:n,pu:r,path:Ve.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function P1(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new tL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function k1(t,e,n,r,i,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,i);b1("Data must be an object, but it was:",o,r);const a=x1(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=nL(e,h,n);if(!o.contains(d))throw new O(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);iL(c,d)||c.push(d)}l=new Bt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new eL(new kt(a),l,u)}class _m extends gm{_toFieldTransform(e){return new X2(e.path,new Bo)}isEqual(e){return e instanceof _m}}function N1(t,e){if(D1(t=Re(t)))return b1("Unsupported field value:",e,t),x1(t,e);if(t instanceof gm)return function(r,i){if(!R1(i.Tu))throw i.fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=N1(a,i.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return q2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:uu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uu(i.serializer,s)}}if(r instanceof ym)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:ZT(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:nm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.fu(`Unsupported field value: ${fm(r)}`)}(t,e)}function x1(t,e){const n={};return RT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=N1(i,e.du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function D1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof ym||t instanceof ns||t instanceof Et||t instanceof gm)}function b1(t,e,n){if(!D1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fm(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function nL(t,e,n){if((e=Re(e))instanceof mm)return e._internalPath;if(typeof e=="string")return O1(t,e);throw hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const rL=new RegExp("[~\\*/\\[\\]]");function O1(t,e,n){if(e.search(rL)>=0)throw hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mm(...e.split("."))._internalPath}catch{throw hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(A.INVALID_ARGUMENT,a+t+l)}function iL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(M1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sL extends L1{data(){return super.data()}}function M1(t,e){return typeof e=="string"?O1(t,e):e instanceof mm?e._internalPath:e._delegate._internalPath}class oL{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ym(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=dr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);se(i1(r));const i=new Fo(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class U1 extends L1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(M1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lL extends U1{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){t=ts(t,Et);const e=ts(t.firestore,pc);return qO(A1(e),t._key).then(n=>dL(e,t,n))}class uL extends oL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function cL(t,e,n){t=ts(t,Et);const r=ts(t.firestore,pc),i=V1(t.converter,e,n);return F1(r,[k1(P1(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function hL(t,e){const n=ts(t.firestore,pc),r=pa(t),i=V1(t.converter,e);return F1(n,[k1(P1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function F1(t,e){return function(r,i){const s=new ar;return r.asyncQueue.enqueueAndForget(async()=>DO(await WO(r),i,s)),s.promise}(A1(t),e)}function dL(t,e,n){const r=n.docs.get(e._key),i=new uL(t);return new U1(t,i,e._key,r,new aL(n.hasPendingWrites,n.fromCache),e.converter)}function fL(){return new _m("serverTimestamp")}(function(e,n=!0){(function(i){ds=i})(si),Ht(new Ot("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new pc(new d2(r.getProvider("auth-internal")),new g2(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ft(zy,"4.3.0",e),ft(zy,"4.3.0","esm2017")})();const pL={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},mL=oi(pL),gL=ma(mL),yL=t=>{const e=pa(gL,"Users",t.state.user.uid);return(async()=>{try{const r=await Em(e);$("#t_role").text(Ls(r.data().role)),r.data().role==="teacher"&&$("#uploadLink").attr("style","display: inherit")}catch(r){console.log("Error reading document of collection Users: ",r)}})(),console.log(t.state.walletAddress),m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:"navbar",children:[m.jsx(Cr,{to:"/freeflow-edu/",className:({isActive:r})=>r?"link active":"link",children:"Home"}),m.jsx(Cr,{to:"/freeflow-edu/profile",className:({isActive:r})=>r?"link active":"link",children:"Profile"}),m.jsx(Cr,{to:"/freeflow-edu/course",className:({isActive:r})=>r?"link active":"link",children:"Course"}),m.jsx(Cr,{style:{display:"none"},to:"/freeflow-edu/upload",className:({isActive:r})=>r?"link active":"link",id:"uploadLink",children:"Upload"}),m.jsx(Cr,{to:"/freeflow-edu/sign-out",className:({isActive:r})=>r?"link active":"link",children:"Sign Out"}),m.jsxs(Wr,{to:"/freeflow-edu/profile",children:[m.jsx("img",{src:t.state.user.photoURL,alt:"Profile Img"}),m.jsx("p",{children:t.state.user.displayName}),m.jsx("p",{children:t.state.user.email}),m.jsx("p",{id:"t_role"})]}),t.renderNotConnectedContainer()]}),m.jsx(nE,{})]})},vL="https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",$1=t=>{const[e,n]=P.useState(0);return P.useEffect(()=>{(async()=>{(await fetch(vL)).json().then(s=>{n(s.solana.usd)})})()},[]),(e*t.sol).toFixed(6)};let _L=class extends P.Component{constructor(n){super(n);te(this,"handleKeyPress",n=>{n.key=="Enter"&&(console.log("enter"),this.bLogin())});te(this,"bLogin",()=>{if($("#t_email").val()!=""&&$("#t_password").val()!=""){const i=Ur();var n=$("#t_email").val(),r=$("#t_password").val();jN(i,n,r).then(s=>{const o=s.user;this.setState({user:o}),this.props.updateUserState(o),document.getElementById("c_rmb_me").checked&&(localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("displayName",o.displayName),localStorage.setItem("email",o.email))}).catch(s=>{const o=s.code,a=s.message;console.log({errorCode:o,errorMessage:a}),o=="auth/invalid-login-credentials"?alert("Wrong Email or Password."):o=="auth/invalid-email"?alert("Invalid Email."):alert(o)})}else alert("Please fill in all the information required.")});te(this,"signUpGoogle",()=>{const n=Ur(),r=new Rt;r.addScope("https://www.googleapis.com/auth/userinfo.email"),ww(n,r).then(i=>{Rt.credentialFromResult(i).accessToken;const o=i.user;i.user.email,this.setState({user:o}),this.props.updateUserState(o),document.getElementById("c_rmb_me").checked&&(localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("displayName",o.displayName),localStorage.setItem("email",o.email))}).catch(i=>{const s=i.code,o=i.message;console.log({errorCode:s,errorMessage:o})})});te(this,"guest",()=>{const n=Ur();VN(n).then(r=>{console.log(r.user);const i=r.user;cw(n.currentUser,{displayName:"Guest"}).then(s=>{console.log(s)}).catch(s=>{const o=s.code,a=s.message;console.log({errorCode:o,errorMessage:a})}),this.setState({user:i}),this.props.updateUserState(i),document.getElementById("c_rmb_me").checked&&(localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("displayName","Guest"),localStorage.setItem("email",i.email))}).catch(r=>{const i=r.code,s=r.message;console.log({errorCode:i,errorMessage:s})})});this.updateUserState=n.updateUserState,this.state=n.state,this.setState=this.setState.bind(this)}render(){return m.jsxs(m.Fragment,{children:[m.jsx("h1",{children:"Login"}),m.jsx("div",{children:m.jsx("img",{src:"",alt:"Login Thumbnail"})}),m.jsxs("div",{children:[m.jsxs("label",{children:[" Email:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"",id:"t_email"})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Password:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"password",name:"",id:"t_password"})]}),m.jsx("br",{}),m.jsxs("label",{children:[m.jsx("input",{type:"checkbox",name:"",id:"c_rmb_me"}),"Remember me"]}),m.jsx("br",{}),m.jsx("button",{onClick:this.bLogin,children:"Login"})]}),"Or login with",m.jsx("div",{children:m.jsx("button",{onClick:this.signUpGoogle,children:"G+"})}),m.jsx(Wr,{to:"register",children:"Haven't registered?"}),m.jsx("br",{}),m.jsx(Wr,{onClick:this.guest,children:"Login as Guest"})]})}};class Tv extends P.Component{constructor(n){super(n);te(this,"handleKeyPress",n=>{n.key=="Enter"&&(console.log("enter"),this.bRegister())});te(this,"bRegister",()=>{if($("#t_email").val()!=""&&$("#t_username").val()!=""&&$("#t_password").val()!=""&&$("#t_confirm_password").val()!=""&&$("#t_otp").val()!="")if($("#t_password").val()==$("#t_confirm_password").val())if(document.getElementById("c_privacy").checked){const i=Ur();var n=$("#t_email").val(),r=$("#t_password").val();BN(i,n,r).then(s=>{const o=s.user,a=$("#t_username").val();cw(i.currentUser,{displayName:a}).then(l=>{}).catch(l=>{const u=l.code,c=l.message;console.log({errorCode:u,errorMessage:c})}),this.setState({user:o}),this.props.updateUserState(o),document.getElementById("c_rmb_me").checked&&(localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("displayName",a),localStorage.setItem("email",o.email))}).catch(s=>{const o=s.code,a=s.message;console.log({errorCode:o,errorMessage:a}),s.code==="auth/email-already-in-use"?alert("Email is already in use.","warning"):s.code==="auth/weak-password"?alert("Weak password.","warning"):alert(s.code+": "+s.messagee,"danger")})}else alert("Please agree to the Privacy Policy, and Terms and Conditions of FreeFlow Edu app.");else alert("Password not match.");else alert("Please fill in all the information required.")});te(this,"signUpGoogle",()=>{const n=Ur(),r=new Rt;r.addScope("https://www.googleapis.com/auth/userinfo.email"),document.getElementById("c_privacy").checked?ww(n,r).then(i=>{Rt.credentialFromResult(i).accessToken;const o=i.user;i.user.email,this.setState({user:o}),this.props.updateUserState(o),document.getElementById("c_rmb_me").checked&&(localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("displayName",o.displayName),localStorage.setItem("email",o.email))}).catch(i=>{const s=i.code,o=i.message;console.log({errorCode:s,errorMessage:o})}):alert("Please agree to the Privacy Policy, and Terms and Conditions of FreeFlow Edu app.")});this.updateUserState=n.updateUserState,this.state=n.state,this.setState=this.setState.bind(this)}render(){return this.state.user?(console.log("loged in"),m.jsx(Ys,{to:"/freeflow-edu/"})):(console.log(this.state.user),m.jsxs(m.Fragment,{children:[m.jsx("h1",{children:"Register"}),m.jsx("div",{children:m.jsx("img",{src:"",alt:"Register Thumbnail"})}),m.jsxs("div",{children:[m.jsxs("label",{children:[" Email:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"",id:"t_email"})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Username:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"",id:"t_username"})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Password:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"password",name:"",id:"t_password"})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Confirm Password:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"password",name:"",id:"t_confirm_password"})]}),m.jsx("br",{}),m.jsx("br",{}),m.jsxs("label",{children:[m.jsx("input",{onKeyUp:this.handleKeyPress,type:"checkbox",name:"",id:"c_privacy"}),"I agree to the ",m.jsx("a",{href:"privacy_policy.html",target:"_blank",children:"Privacy Policy"}),", and ",m.jsx("a",{href:"terms_and_conditions.html",target:"_blank",children:"Terms and Conditions"})," of FreeFlow Edu app."]}),m.jsx("br",{}),m.jsxs("label",{children:[m.jsx("input",{type:"checkbox",name:"",id:"c_rmb_me"}),"Remember me"]}),m.jsx("br",{}),m.jsx("button",{onClick:this.bRegister,children:"Register"})]}),"Or sign up with",m.jsx("div",{children:m.jsx("button",{onClick:this.signUpGoogle,children:"G+"})}),m.jsx(Wr,{to:"../",children:"Already login?"})]}))}}/*! countries-list v3.0.6 by Annexare | MIT */var du={AD:{name:"Andorra",native:"Andorra",phone:[376],continent:"EU",capital:"Andorra la Vella",currency:["EUR"],languages:["ca"]},AE:{name:"United Arab Emirates",native:"دولة الإمارات العربية المتحدة",phone:[971],continent:"AS",capital:"Abu Dhabi",currency:["AED"],languages:["ar"]},AF:{name:"Afghanistan",native:"افغانستان",phone:[93],continent:"AS",capital:"Kabul",currency:["AFN"],languages:["ps","uz","tk"]},AG:{name:"Antigua and Barbuda",native:"Antigua and Barbuda",phone:[1268],continent:"NA",capital:"Saint John's",currency:["XCD"],languages:["en"]},AI:{name:"Anguilla",native:"Anguilla",phone:[1264],continent:"NA",capital:"The Valley",currency:["XCD"],languages:["en"]},AL:{name:"Albania",native:"Shqipëria",phone:[355],continent:"EU",capital:"Tirana",currency:["ALL"],languages:["sq"]},AM:{name:"Armenia",native:"Հայաստան",phone:[374],continent:"AS",capital:"Yerevan",currency:["AMD"],languages:["hy","ru"]},AO:{name:"Angola",native:"Angola",phone:[244],continent:"AF",capital:"Luanda",currency:["AOA"],languages:["pt"]},AQ:{name:"Antarctica",native:"Antarctica",phone:[672],continent:"AN",capital:"",currency:[],languages:[]},AR:{name:"Argentina",native:"Argentina",phone:[54],continent:"SA",capital:"Buenos Aires",currency:["ARS"],languages:["es","gn"]},AS:{name:"American Samoa",native:"American Samoa",phone:[1684],continent:"OC",capital:"Pago Pago",currency:["USD"],languages:["en","sm"]},AT:{name:"Austria",native:"Österreich",phone:[43],continent:"EU",capital:"Vienna",currency:["EUR"],languages:["de"]},AU:{name:"Australia",native:"Australia",phone:[61],continent:"OC",capital:"Canberra",currency:["AUD"],languages:["en"]},AW:{name:"Aruba",native:"Aruba",phone:[297],continent:"NA",capital:"Oranjestad",currency:["AWG"],languages:["nl","pa"]},AX:{name:"Aland",native:"Åland",phone:[358],continent:"EU",capital:"Mariehamn",currency:["EUR"],languages:["sv"]},AZ:{name:"Azerbaijan",native:"Azərbaycan",phone:[994],continent:"AS",continents:["AS","EU"],capital:"Baku",currency:["AZN"],languages:["az"]},BA:{name:"Bosnia and Herzegovina",native:"Bosna i Hercegovina",phone:[387],continent:"EU",capital:"Sarajevo",currency:["BAM"],languages:["bs","hr","sr"]},BB:{name:"Barbados",native:"Barbados",phone:[1246],continent:"NA",capital:"Bridgetown",currency:["BBD"],languages:["en"]},BD:{name:"Bangladesh",native:"Bangladesh",phone:[880],continent:"AS",capital:"Dhaka",currency:["BDT"],languages:["bn"]},BE:{name:"Belgium",native:"België",phone:[32],continent:"EU",capital:"Brussels",currency:["EUR"],languages:["nl","fr","de"]},BF:{name:"Burkina Faso",native:"Burkina Faso",phone:[226],continent:"AF",capital:"Ouagadougou",currency:["XOF"],languages:["fr","ff"]},BG:{name:"Bulgaria",native:"България",phone:[359],continent:"EU",capital:"Sofia",currency:["BGN"],languages:["bg"]},BH:{name:"Bahrain",native:"‏البحرين",phone:[973],continent:"AS",capital:"Manama",currency:["BHD"],languages:["ar"]},BI:{name:"Burundi",native:"Burundi",phone:[257],continent:"AF",capital:"Bujumbura",currency:["BIF"],languages:["fr","rn"]},BJ:{name:"Benin",native:"Bénin",phone:[229],continent:"AF",capital:"Porto-Novo",currency:["XOF"],languages:["fr"]},BL:{name:"Saint Barthelemy",native:"Saint-Barthélemy",phone:[590],continent:"NA",capital:"Gustavia",currency:["EUR"],languages:["fr"]},BM:{name:"Bermuda",native:"Bermuda",phone:[1441],continent:"NA",capital:"Hamilton",currency:["BMD"],languages:["en"]},BN:{name:"Brunei",native:"Negara Brunei Darussalam",phone:[673],continent:"AS",capital:"Bandar Seri Begawan",currency:["BND"],languages:["ms"]},BO:{name:"Bolivia",native:"Bolivia",phone:[591],continent:"SA",capital:"Sucre",currency:["BOB","BOV"],languages:["es","ay","qu"]},BQ:{name:"Bonaire",native:"Bonaire",phone:[5997],continent:"NA",capital:"Kralendijk",currency:["USD"],languages:["nl"]},BR:{name:"Brazil",native:"Brasil",phone:[55],continent:"SA",capital:"Brasília",currency:["BRL"],languages:["pt"]},BS:{name:"Bahamas",native:"Bahamas",phone:[1242],continent:"NA",capital:"Nassau",currency:["BSD"],languages:["en"]},BT:{name:"Bhutan",native:"ʼbrug-yul",phone:[975],continent:"AS",capital:"Thimphu",currency:["BTN","INR"],languages:["dz"]},BV:{name:"Bouvet Island",native:"Bouvetøya",phone:[47],continent:"AN",capital:"",currency:["NOK"],languages:["no","nb","nn"]},BW:{name:"Botswana",native:"Botswana",phone:[267],continent:"AF",capital:"Gaborone",currency:["BWP"],languages:["en","tn"]},BY:{name:"Belarus",native:"Белару́сь",phone:[375],continent:"EU",capital:"Minsk",currency:["BYN"],languages:["be","ru"]},BZ:{name:"Belize",native:"Belize",phone:[501],continent:"NA",capital:"Belmopan",currency:["BZD"],languages:["en","es"]},CA:{name:"Canada",native:"Canada",phone:[1],continent:"NA",capital:"Ottawa",currency:["CAD"],languages:["en","fr"]},CC:{name:"Cocos (Keeling) Islands",native:"Cocos (Keeling) Islands",phone:[61],continent:"AS",capital:"West Island",currency:["AUD"],languages:["en"]},CD:{name:"Democratic Republic of the Congo",native:"République démocratique du Congo",phone:[243],continent:"AF",capital:"Kinshasa",currency:["CDF"],languages:["fr","ln","kg","sw","lu"]},CF:{name:"Central African Republic",native:"Ködörösêse tî Bêafrîka",phone:[236],continent:"AF",capital:"Bangui",currency:["XAF"],languages:["fr","sg"]},CG:{name:"Republic of the Congo",native:"République du Congo",phone:[242],continent:"AF",capital:"Brazzaville",currency:["XAF"],languages:["fr","ln"]},CH:{name:"Switzerland",native:"Schweiz",phone:[41],continent:"EU",capital:"Bern",currency:["CHE","CHF","CHW"],languages:["de","fr","it"]},CI:{name:"Ivory Coast",native:"Côte d'Ivoire",phone:[225],continent:"AF",capital:"Yamoussoukro",currency:["XOF"],languages:["fr"]},CK:{name:"Cook Islands",native:"Cook Islands",phone:[682],continent:"OC",capital:"Avarua",currency:["NZD"],languages:["en"]},CL:{name:"Chile",native:"Chile",phone:[56],continent:"SA",capital:"Santiago",currency:["CLF","CLP"],languages:["es"]},CM:{name:"Cameroon",native:"Cameroon",phone:[237],continent:"AF",capital:"Yaoundé",currency:["XAF"],languages:["en","fr"]},CN:{name:"China",native:"中国",phone:[86],continent:"AS",capital:"Beijing",currency:["CNY"],languages:["zh"]},CO:{name:"Colombia",native:"Colombia",phone:[57],continent:"SA",capital:"Bogotá",currency:["COP"],languages:["es"]},CR:{name:"Costa Rica",native:"Costa Rica",phone:[506],continent:"NA",capital:"San José",currency:["CRC"],languages:["es"]},CU:{name:"Cuba",native:"Cuba",phone:[53],continent:"NA",capital:"Havana",currency:["CUC","CUP"],languages:["es"]},CV:{name:"Cape Verde",native:"Cabo Verde",phone:[238],continent:"AF",capital:"Praia",currency:["CVE"],languages:["pt"]},CW:{name:"Curacao",native:"Curaçao",phone:[5999],continent:"NA",capital:"Willemstad",currency:["ANG"],languages:["nl","pa","en"]},CX:{name:"Christmas Island",native:"Christmas Island",phone:[61],continent:"AS",capital:"Flying Fish Cove",currency:["AUD"],languages:["en"]},CY:{name:"Cyprus",native:"Κύπρος",phone:[357],continent:"EU",capital:"Nicosia",currency:["EUR"],languages:["el","tr","hy"]},CZ:{name:"Czech Republic",native:"Česká republika",phone:[420],continent:"EU",capital:"Prague",currency:["CZK"],languages:["cs"]},DE:{name:"Germany",native:"Deutschland",phone:[49],continent:"EU",capital:"Berlin",currency:["EUR"],languages:["de"]},DJ:{name:"Djibouti",native:"Djibouti",phone:[253],continent:"AF",capital:"Djibouti",currency:["DJF"],languages:["fr","ar"]},DK:{name:"Denmark",native:"Danmark",phone:[45],continent:"EU",continents:["EU","NA"],capital:"Copenhagen",currency:["DKK"],languages:["da"]},DM:{name:"Dominica",native:"Dominica",phone:[1767],continent:"NA",capital:"Roseau",currency:["XCD"],languages:["en"]},DO:{name:"Dominican Republic",native:"República Dominicana",phone:[1809,1829,1849],continent:"NA",capital:"Santo Domingo",currency:["DOP"],languages:["es"]},DZ:{name:"Algeria",native:"الجزائر",phone:[213],continent:"AF",capital:"Algiers",currency:["DZD"],languages:["ar"]},EC:{name:"Ecuador",native:"Ecuador",phone:[593],continent:"SA",capital:"Quito",currency:["USD"],languages:["es"]},EE:{name:"Estonia",native:"Eesti",phone:[372],continent:"EU",capital:"Tallinn",currency:["EUR"],languages:["et"]},EG:{name:"Egypt",native:"مصر‎",phone:[20],continent:"AF",continents:["AF","AS"],capital:"Cairo",currency:["EGP"],languages:["ar"]},EH:{name:"Western Sahara",native:"الصحراء الغربية",phone:[212],continent:"AF",capital:"El Aaiún",currency:["MAD","DZD","MRU"],languages:["es"]},ER:{name:"Eritrea",native:"ኤርትራ",phone:[291],continent:"AF",capital:"Asmara",currency:["ERN"],languages:["ti","ar","en"]},ES:{name:"Spain",native:"España",phone:[34],continent:"EU",capital:"Madrid",currency:["EUR"],languages:["es","eu","ca","gl","oc"]},ET:{name:"Ethiopia",native:"ኢትዮጵያ",phone:[251],continent:"AF",capital:"Addis Ababa",currency:["ETB"],languages:["am"]},FI:{name:"Finland",native:"Suomi",phone:[358],continent:"EU",capital:"Helsinki",currency:["EUR"],languages:["fi","sv"]},FJ:{name:"Fiji",native:"Fiji",phone:[679],continent:"OC",capital:"Suva",currency:["FJD"],languages:["en","fj","hi","ur"]},FK:{name:"Falkland Islands",native:"Falkland Islands",phone:[500],continent:"SA",capital:"Stanley",currency:["FKP"],languages:["en"]},FM:{name:"Micronesia",native:"Micronesia",phone:[691],continent:"OC",capital:"Palikir",currency:["USD"],languages:["en"]},FO:{name:"Faroe Islands",native:"Føroyar",phone:[298],continent:"EU",capital:"Tórshavn",currency:["DKK"],languages:["fo"]},FR:{name:"France",native:"France",phone:[33],continent:"EU",capital:"Paris",currency:["EUR"],languages:["fr"]},GA:{name:"Gabon",native:"Gabon",phone:[241],continent:"AF",capital:"Libreville",currency:["XAF"],languages:["fr"]},GB:{name:"United Kingdom",native:"United Kingdom",phone:[44],continent:"EU",capital:"London",currency:["GBP"],languages:["en"]},GD:{name:"Grenada",native:"Grenada",phone:[1473],continent:"NA",capital:"St. George's",currency:["XCD"],languages:["en"]},GE:{name:"Georgia",native:"საქართველო",phone:[995],continent:"AS",continents:["AS","EU"],capital:"Tbilisi",currency:["GEL"],languages:["ka"]},GF:{name:"French Guiana",native:"Guyane française",phone:[594],continent:"SA",capital:"Cayenne",currency:["EUR"],languages:["fr"]},GG:{name:"Guernsey",native:"Guernsey",phone:[44],continent:"EU",capital:"St. Peter Port",currency:["GBP"],languages:["en","fr"]},GH:{name:"Ghana",native:"Ghana",phone:[233],continent:"AF",capital:"Accra",currency:["GHS"],languages:["en"]},GI:{name:"Gibraltar",native:"Gibraltar",phone:[350],continent:"EU",capital:"Gibraltar",currency:["GIP"],languages:["en"]},GL:{name:"Greenland",native:"Kalaallit Nunaat",phone:[299],continent:"NA",capital:"Nuuk",currency:["DKK"],languages:["kl"]},GM:{name:"Gambia",native:"Gambia",phone:[220],continent:"AF",capital:"Banjul",currency:["GMD"],languages:["en"]},GN:{name:"Guinea",native:"Guinée",phone:[224],continent:"AF",capital:"Conakry",currency:["GNF"],languages:["fr","ff"]},GP:{name:"Guadeloupe",native:"Guadeloupe",phone:[590],continent:"NA",capital:"Basse-Terre",currency:["EUR"],languages:["fr"]},GQ:{name:"Equatorial Guinea",native:"Guinea Ecuatorial",phone:[240],continent:"AF",capital:"Malabo",currency:["XAF"],languages:["es","fr"]},GR:{name:"Greece",native:"Ελλάδα",phone:[30],continent:"EU",capital:"Athens",currency:["EUR"],languages:["el"]},GS:{name:"South Georgia and the South Sandwich Islands",native:"South Georgia",phone:[500],continent:"AN",capital:"King Edward Point",currency:["GBP"],languages:["en"]},GT:{name:"Guatemala",native:"Guatemala",phone:[502],continent:"NA",capital:"Guatemala City",currency:["GTQ"],languages:["es"]},GU:{name:"Guam",native:"Guam",phone:[1671],continent:"OC",capital:"Hagåtña",currency:["USD"],languages:["en","ch","es"]},GW:{name:"Guinea-Bissau",native:"Guiné-Bissau",phone:[245],continent:"AF",capital:"Bissau",currency:["XOF"],languages:["pt"]},GY:{name:"Guyana",native:"Guyana",phone:[592],continent:"SA",capital:"Georgetown",currency:["GYD"],languages:["en"]},HK:{name:"Hong Kong",native:"香港",phone:[852],continent:"AS",capital:"City of Victoria",currency:["HKD"],languages:["zh","en"]},HM:{name:"Heard Island and McDonald Islands",native:"Heard Island and McDonald Islands",phone:[61],continent:"AN",capital:"",currency:["AUD"],languages:["en"]},HN:{name:"Honduras",native:"Honduras",phone:[504],continent:"NA",capital:"Tegucigalpa",currency:["HNL"],languages:["es"]},HR:{name:"Croatia",native:"Hrvatska",phone:[385],continent:"EU",capital:"Zagreb",currency:["EUR"],languages:["hr"]},HT:{name:"Haiti",native:"Haïti",phone:[509],continent:"NA",capital:"Port-au-Prince",currency:["HTG","USD"],languages:["fr","ht"]},HU:{name:"Hungary",native:"Magyarország",phone:[36],continent:"EU",capital:"Budapest",currency:["HUF"],languages:["hu"]},ID:{name:"Indonesia",native:"Indonesia",phone:[62],continent:"AS",capital:"Jakarta",currency:["IDR"],languages:["id"]},IE:{name:"Ireland",native:"Éire",phone:[353],continent:"EU",capital:"Dublin",currency:["EUR"],languages:["ga","en"]},IL:{name:"Israel",native:"יִשְׂרָאֵל",phone:[972],continent:"AS",capital:"Jerusalem",currency:["ILS"],languages:["he","ar"]},IM:{name:"Isle of Man",native:"Isle of Man",phone:[44],continent:"EU",capital:"Douglas",currency:["GBP"],languages:["en","gv"]},IN:{name:"India",native:"भारत",phone:[91],continent:"AS",capital:"New Delhi",currency:["INR"],languages:["hi","en"]},IO:{name:"British Indian Ocean Territory",native:"British Indian Ocean Territory",phone:[246],continent:"AS",capital:"Diego Garcia",currency:["USD"],languages:["en"]},IQ:{name:"Iraq",native:"العراق",phone:[964],continent:"AS",capital:"Baghdad",currency:["IQD"],languages:["ar","ku"]},IR:{name:"Iran",native:"ایران",phone:[98],continent:"AS",capital:"Tehran",currency:["IRR"],languages:["fa"]},IS:{name:"Iceland",native:"Ísland",phone:[354],continent:"EU",capital:"Reykjavik",currency:["ISK"],languages:["is"]},IT:{name:"Italy",native:"Italia",phone:[39],continent:"EU",capital:"Rome",currency:["EUR"],languages:["it"]},JE:{name:"Jersey",native:"Jersey",phone:[44],continent:"EU",capital:"Saint Helier",currency:["GBP"],languages:["en","fr"]},JM:{name:"Jamaica",native:"Jamaica",phone:[1876],continent:"NA",capital:"Kingston",currency:["JMD"],languages:["en"]},JO:{name:"Jordan",native:"الأردن",phone:[962],continent:"AS",capital:"Amman",currency:["JOD"],languages:["ar"]},JP:{name:"Japan",native:"日本",phone:[81],continent:"AS",capital:"Tokyo",currency:["JPY"],languages:["ja"]},KE:{name:"Kenya",native:"Kenya",phone:[254],continent:"AF",capital:"Nairobi",currency:["KES"],languages:["en","sw"]},KG:{name:"Kyrgyzstan",native:"Кыргызстан",phone:[996],continent:"AS",capital:"Bishkek",currency:["KGS"],languages:["ky","ru"]},KH:{name:"Cambodia",native:"Kâmpŭchéa",phone:[855],continent:"AS",capital:"Phnom Penh",currency:["KHR"],languages:["km"]},KI:{name:"Kiribati",native:"Kiribati",phone:[686],continent:"OC",capital:"South Tarawa",currency:["AUD"],languages:["en"]},KM:{name:"Comoros",native:"Komori",phone:[269],continent:"AF",capital:"Moroni",currency:["KMF"],languages:["ar","fr"]},KN:{name:"Saint Kitts and Nevis",native:"Saint Kitts and Nevis",phone:[1869],continent:"NA",capital:"Basseterre",currency:["XCD"],languages:["en"]},KP:{name:"North Korea",native:"북한",phone:[850],continent:"AS",capital:"Pyongyang",currency:["KPW"],languages:["ko"]},KR:{name:"South Korea",native:"대한민국",phone:[82],continent:"AS",capital:"Seoul",currency:["KRW"],languages:["ko"]},KW:{name:"Kuwait",native:"الكويت",phone:[965],continent:"AS",capital:"Kuwait City",currency:["KWD"],languages:["ar"]},KY:{name:"Cayman Islands",native:"Cayman Islands",phone:[1345],continent:"NA",capital:"George Town",currency:["KYD"],languages:["en"]},KZ:{name:"Kazakhstan",native:"Қазақстан",phone:[76,77],continent:"AS",continents:["AS","EU"],capital:"Astana",currency:["KZT"],languages:["kk","ru"]},LA:{name:"Laos",native:"ສປປລາວ",phone:[856],continent:"AS",capital:"Vientiane",currency:["LAK"],languages:["lo"]},LB:{name:"Lebanon",native:"لبنان",phone:[961],continent:"AS",capital:"Beirut",currency:["LBP"],languages:["ar","fr"]},LC:{name:"Saint Lucia",native:"Saint Lucia",phone:[1758],continent:"NA",capital:"Castries",currency:["XCD"],languages:["en"]},LI:{name:"Liechtenstein",native:"Liechtenstein",phone:[423],continent:"EU",capital:"Vaduz",currency:["CHF"],languages:["de"]},LK:{name:"Sri Lanka",native:"śrī laṃkāva",phone:[94],continent:"AS",capital:"Colombo",currency:["LKR"],languages:["si","ta"]},LR:{name:"Liberia",native:"Liberia",phone:[231],continent:"AF",capital:"Monrovia",currency:["LRD"],languages:["en"]},LS:{name:"Lesotho",native:"Lesotho",phone:[266],continent:"AF",capital:"Maseru",currency:["LSL","ZAR"],languages:["en","st"]},LT:{name:"Lithuania",native:"Lietuva",phone:[370],continent:"EU",capital:"Vilnius",currency:["EUR"],languages:["lt"]},LU:{name:"Luxembourg",native:"Luxembourg",phone:[352],continent:"EU",capital:"Luxembourg",currency:["EUR"],languages:["fr","de","lb"]},LV:{name:"Latvia",native:"Latvija",phone:[371],continent:"EU",capital:"Riga",currency:["EUR"],languages:["lv"]},LY:{name:"Libya",native:"‏ليبيا",phone:[218],continent:"AF",capital:"Tripoli",currency:["LYD"],languages:["ar"]},MA:{name:"Morocco",native:"المغرب",phone:[212],continent:"AF",capital:"Rabat",currency:["MAD"],languages:["ar"]},MC:{name:"Monaco",native:"Monaco",phone:[377],continent:"EU",capital:"Monaco",currency:["EUR"],languages:["fr"]},MD:{name:"Moldova",native:"Moldova",phone:[373],continent:"EU",capital:"Chișinău",currency:["MDL"],languages:["ro"]},ME:{name:"Montenegro",native:"Црна Гора",phone:[382],continent:"EU",capital:"Podgorica",currency:["EUR"],languages:["sr","bs","sq","hr"]},MF:{name:"Saint Martin",native:"Saint-Martin",phone:[590],continent:"NA",capital:"Marigot",currency:["EUR"],languages:["en","fr","nl"]},MG:{name:"Madagascar",native:"Madagasikara",phone:[261],continent:"AF",capital:"Antananarivo",currency:["MGA"],languages:["fr","mg"]},MH:{name:"Marshall Islands",native:"M̧ajeļ",phone:[692],continent:"OC",capital:"Majuro",currency:["USD"],languages:["en","mh"]},MK:{name:"North Macedonia",native:"Северна Македонија",phone:[389],continent:"EU",capital:"Skopje",currency:["MKD"],languages:["mk"]},ML:{name:"Mali",native:"Mali",phone:[223],continent:"AF",capital:"Bamako",currency:["XOF"],languages:["fr"]},MM:{name:"Myanmar (Burma)",native:"မြန်မာ",phone:[95],continent:"AS",capital:"Naypyidaw",currency:["MMK"],languages:["my"]},MN:{name:"Mongolia",native:"Монгол улс",phone:[976],continent:"AS",capital:"Ulan Bator",currency:["MNT"],languages:["mn"]},MO:{name:"Macao",native:"澳門",phone:[853],continent:"AS",capital:"",currency:["MOP"],languages:["zh","pt"]},MP:{name:"Northern Mariana Islands",native:"Northern Mariana Islands",phone:[1670],continent:"OC",capital:"Saipan",currency:["USD"],languages:["en","ch"]},MQ:{name:"Martinique",native:"Martinique",phone:[596],continent:"NA",capital:"Fort-de-France",currency:["EUR"],languages:["fr"]},MR:{name:"Mauritania",native:"موريتانيا",phone:[222],continent:"AF",capital:"Nouakchott",currency:["MRU"],languages:["ar"]},MS:{name:"Montserrat",native:"Montserrat",phone:[1664],continent:"NA",capital:"Plymouth",currency:["XCD"],languages:["en"]},MT:{name:"Malta",native:"Malta",phone:[356],continent:"EU",capital:"Valletta",currency:["EUR"],languages:["mt","en"]},MU:{name:"Mauritius",native:"Maurice",phone:[230],continent:"AF",capital:"Port Louis",currency:["MUR"],languages:["en"]},MV:{name:"Maldives",native:"Maldives",phone:[960],continent:"AS",capital:"Malé",currency:["MVR"],languages:["dv"]},MW:{name:"Malawi",native:"Malawi",phone:[265],continent:"AF",capital:"Lilongwe",currency:["MWK"],languages:["en","ny"]},MX:{name:"Mexico",native:"México",phone:[52],continent:"NA",capital:"Mexico City",currency:["MXN"],languages:["es"]},MY:{name:"Malaysia",native:"Malaysia",phone:[60],continent:"AS",capital:"Kuala Lumpur",currency:["MYR"],languages:["ms"]},MZ:{name:"Mozambique",native:"Moçambique",phone:[258],continent:"AF",capital:"Maputo",currency:["MZN"],languages:["pt"]},NA:{name:"Namibia",native:"Namibia",phone:[264],continent:"AF",capital:"Windhoek",currency:["NAD","ZAR"],languages:["en","af"]},NC:{name:"New Caledonia",native:"Nouvelle-Calédonie",phone:[687],continent:"OC",capital:"Nouméa",currency:["XPF"],languages:["fr"]},NE:{name:"Niger",native:"Niger",phone:[227],continent:"AF",capital:"Niamey",currency:["XOF"],languages:["fr"]},NF:{name:"Norfolk Island",native:"Norfolk Island",phone:[672],continent:"OC",capital:"Kingston",currency:["AUD"],languages:["en"]},NG:{name:"Nigeria",native:"Nigeria",phone:[234],continent:"AF",capital:"Abuja",currency:["NGN"],languages:["en"]},NI:{name:"Nicaragua",native:"Nicaragua",phone:[505],continent:"NA",capital:"Managua",currency:["NIO"],languages:["es"]},NL:{name:"Netherlands",native:"Nederland",phone:[31],continent:"EU",capital:"Amsterdam",currency:["EUR"],languages:["nl"]},NO:{name:"Norway",native:"Norge",phone:[47],continent:"EU",capital:"Oslo",currency:["NOK"],languages:["no","nb","nn"]},NP:{name:"Nepal",native:"नेपाल",phone:[977],continent:"AS",capital:"Kathmandu",currency:["NPR"],languages:["ne"]},NR:{name:"Nauru",native:"Nauru",phone:[674],continent:"OC",capital:"Yaren",currency:["AUD"],languages:["en","na"]},NU:{name:"Niue",native:"Niuē",phone:[683],continent:"OC",capital:"Alofi",currency:["NZD"],languages:["en"]},NZ:{name:"New Zealand",native:"New Zealand",phone:[64],continent:"OC",capital:"Wellington",currency:["NZD"],languages:["en","mi"]},OM:{name:"Oman",native:"عمان",phone:[968],continent:"AS",capital:"Muscat",currency:["OMR"],languages:["ar"]},PA:{name:"Panama",native:"Panamá",phone:[507],continent:"NA",capital:"Panama City",currency:["PAB","USD"],languages:["es"]},PE:{name:"Peru",native:"Perú",phone:[51],continent:"SA",capital:"Lima",currency:["PEN"],languages:["es"]},PF:{name:"French Polynesia",native:"Polynésie française",phone:[689],continent:"OC",capital:"Papeetē",currency:["XPF"],languages:["fr"]},PG:{name:"Papua New Guinea",native:"Papua Niugini",phone:[675],continent:"OC",capital:"Port Moresby",currency:["PGK"],languages:["en"]},PH:{name:"Philippines",native:"Pilipinas",phone:[63],continent:"AS",capital:"Manila",currency:["PHP"],languages:["en"]},PK:{name:"Pakistan",native:"Pakistan",phone:[92],continent:"AS",capital:"Islamabad",currency:["PKR"],languages:["en","ur"]},PL:{name:"Poland",native:"Polska",phone:[48],continent:"EU",capital:"Warsaw",currency:["PLN"],languages:["pl"]},PM:{name:"Saint Pierre and Miquelon",native:"Saint-Pierre-et-Miquelon",phone:[508],continent:"NA",capital:"Saint-Pierre",currency:["EUR"],languages:["fr"]},PN:{name:"Pitcairn Islands",native:"Pitcairn Islands",phone:[64],continent:"OC",capital:"Adamstown",currency:["NZD"],languages:["en"]},PR:{name:"Puerto Rico",native:"Puerto Rico",phone:[1787,1939],continent:"NA",capital:"San Juan",currency:["USD"],languages:["es","en"]},PS:{name:"Palestine",native:"فلسطين",phone:[970],continent:"AS",capital:"Ramallah",currency:["ILS"],languages:["ar"]},PT:{name:"Portugal",native:"Portugal",phone:[351],continent:"EU",capital:"Lisbon",currency:["EUR"],languages:["pt"]},PW:{name:"Palau",native:"Palau",phone:[680],continent:"OC",capital:"Ngerulmud",currency:["USD"],languages:["en"]},PY:{name:"Paraguay",native:"Paraguay",phone:[595],continent:"SA",capital:"Asunción",currency:["PYG"],languages:["es","gn"]},QA:{name:"Qatar",native:"قطر",phone:[974],continent:"AS",capital:"Doha",currency:["QAR"],languages:["ar"]},RE:{name:"Reunion",native:"La Réunion",phone:[262],continent:"AF",capital:"Saint-Denis",currency:["EUR"],languages:["fr"]},RO:{name:"Romania",native:"România",phone:[40],continent:"EU",capital:"Bucharest",currency:["RON"],languages:["ro"]},RS:{name:"Serbia",native:"Србија",phone:[381],continent:"EU",capital:"Belgrade",currency:["RSD"],languages:["sr"]},RU:{name:"Russia",native:"Россия",phone:[7],continent:"AS",continents:["AS","EU"],capital:"Moscow",currency:["RUB"],languages:["ru"]},RW:{name:"Rwanda",native:"Rwanda",phone:[250],continent:"AF",capital:"Kigali",currency:["RWF"],languages:["rw","en","fr"]},SA:{name:"Saudi Arabia",native:"العربية السعودية",phone:[966],continent:"AS",capital:"Riyadh",currency:["SAR"],languages:["ar"]},SB:{name:"Solomon Islands",native:"Solomon Islands",phone:[677],continent:"OC",capital:"Honiara",currency:["SBD"],languages:["en"]},SC:{name:"Seychelles",native:"Seychelles",phone:[248],continent:"AF",capital:"Victoria",currency:["SCR"],languages:["fr","en"]},SD:{name:"Sudan",native:"السودان",phone:[249],continent:"AF",capital:"Khartoum",currency:["SDG"],languages:["ar","en"]},SE:{name:"Sweden",native:"Sverige",phone:[46],continent:"EU",capital:"Stockholm",currency:["SEK"],languages:["sv"]},SG:{name:"Singapore",native:"Singapore",phone:[65],continent:"AS",capital:"Singapore",currency:["SGD"],languages:["en","ms","ta","zh"]},SH:{name:"Saint Helena",native:"Saint Helena",phone:[290],continent:"AF",capital:"Jamestown",currency:["SHP"],languages:["en"]},SI:{name:"Slovenia",native:"Slovenija",phone:[386],continent:"EU",capital:"Ljubljana",currency:["EUR"],languages:["sl"]},SJ:{name:"Svalbard and Jan Mayen",native:"Svalbard og Jan Mayen",phone:[4779],continent:"EU",capital:"Longyearbyen",currency:["NOK"],languages:["no"]},SK:{name:"Slovakia",native:"Slovensko",phone:[421],continent:"EU",capital:"Bratislava",currency:["EUR"],languages:["sk"]},SL:{name:"Sierra Leone",native:"Sierra Leone",phone:[232],continent:"AF",capital:"Freetown",currency:["SLL"],languages:["en"]},SM:{name:"San Marino",native:"San Marino",phone:[378],continent:"EU",capital:"City of San Marino",currency:["EUR"],languages:["it"]},SN:{name:"Senegal",native:"Sénégal",phone:[221],continent:"AF",capital:"Dakar",currency:["XOF"],languages:["fr"]},SO:{name:"Somalia",native:"Soomaaliya",phone:[252],continent:"AF",capital:"Mogadishu",currency:["SOS"],languages:["so","ar"]},SR:{name:"Suriname",native:"Suriname",phone:[597],continent:"SA",capital:"Paramaribo",currency:["SRD"],languages:["nl"]},SS:{name:"South Sudan",native:"South Sudan",phone:[211],continent:"AF",capital:"Juba",currency:["SSP"],languages:["en"]},ST:{name:"Sao Tome and Principe",native:"São Tomé e Príncipe",phone:[239],continent:"AF",capital:"São Tomé",currency:["STN"],languages:["pt"]},SV:{name:"El Salvador",native:"El Salvador",phone:[503],continent:"NA",capital:"San Salvador",currency:["SVC","USD"],languages:["es"]},SX:{name:"Sint Maarten",native:"Sint Maarten",phone:[1721],continent:"NA",capital:"Philipsburg",currency:["ANG"],languages:["nl","en"]},SY:{name:"Syria",native:"سوريا",phone:[963],continent:"AS",capital:"Damascus",currency:["SYP"],languages:["ar"]},SZ:{name:"Eswatini",native:"Eswatini",phone:[268],continent:"AF",capital:"Lobamba",currency:["SZL"],languages:["en","ss"]},TC:{name:"Turks and Caicos Islands",native:"Turks and Caicos Islands",phone:[1649],continent:"NA",capital:"Cockburn Town",currency:["USD"],languages:["en"]},TD:{name:"Chad",native:"Tchad",phone:[235],continent:"AF",capital:"N'Djamena",currency:["XAF"],languages:["fr","ar"]},TF:{name:"French Southern Territories",native:"Territoire des Terres australes et antarctiques fr",phone:[262],continent:"AN",capital:"Port-aux-Français",currency:["EUR"],languages:["fr"]},TG:{name:"Togo",native:"Togo",phone:[228],continent:"AF",capital:"Lomé",currency:["XOF"],languages:["fr"]},TH:{name:"Thailand",native:"ประเทศไทย",phone:[66],continent:"AS",capital:"Bangkok",currency:["THB"],languages:["th"]},TJ:{name:"Tajikistan",native:"Тоҷикистон",phone:[992],continent:"AS",capital:"Dushanbe",currency:["TJS"],languages:["tg","ru"]},TK:{name:"Tokelau",native:"Tokelau",phone:[690],continent:"OC",capital:"Fakaofo",currency:["NZD"],languages:["en"]},TL:{name:"East Timor",native:"Timor-Leste",phone:[670],continent:"OC",capital:"Dili",currency:["USD"],languages:["pt"]},TM:{name:"Turkmenistan",native:"Türkmenistan",phone:[993],continent:"AS",capital:"Ashgabat",currency:["TMT"],languages:["tk","ru"]},TN:{name:"Tunisia",native:"تونس",phone:[216],continent:"AF",capital:"Tunis",currency:["TND"],languages:["ar"]},TO:{name:"Tonga",native:"Tonga",phone:[676],continent:"OC",capital:"Nuku'alofa",currency:["TOP"],languages:["en","to"]},TR:{name:"Turkey",native:"Türkiye",phone:[90],continent:"AS",continents:["AS","EU"],capital:"Ankara",currency:["TRY"],languages:["tr"]},TT:{name:"Trinidad and Tobago",native:"Trinidad and Tobago",phone:[1868],continent:"NA",capital:"Port of Spain",currency:["TTD"],languages:["en"]},TV:{name:"Tuvalu",native:"Tuvalu",phone:[688],continent:"OC",capital:"Funafuti",currency:["AUD"],languages:["en"]},TW:{name:"Taiwan",native:"臺灣",phone:[886],continent:"AS",capital:"Taipei",currency:["TWD"],languages:["zh"]},TZ:{name:"Tanzania",native:"Tanzania",phone:[255],continent:"AF",capital:"Dodoma",currency:["TZS"],languages:["sw","en"]},UA:{name:"Ukraine",native:"Україна",phone:[380],continent:"EU",capital:"Kyiv",currency:["UAH"],languages:["uk"]},UG:{name:"Uganda",native:"Uganda",phone:[256],continent:"AF",capital:"Kampala",currency:["UGX"],languages:["en","sw"]},UM:{name:"U.S. Minor Outlying Islands",native:"United States Minor Outlying Islands",phone:[1],continent:"OC",capital:"",currency:["USD"],languages:["en"]},US:{name:"United States",native:"United States",phone:[1],continent:"NA",capital:"Washington D.C.",currency:["USD","USN","USS"],languages:["en"]},UY:{name:"Uruguay",native:"Uruguay",phone:[598],continent:"SA",capital:"Montevideo",currency:["UYI","UYU"],languages:["es"]},UZ:{name:"Uzbekistan",native:"O'zbekiston",phone:[998],continent:"AS",capital:"Tashkent",currency:["UZS"],languages:["uz","ru"]},VA:{name:"Vatican City",native:"Vaticano",phone:[379],continent:"EU",capital:"Vatican City",currency:["EUR"],languages:["it","la"]},VC:{name:"Saint Vincent and the Grenadines",native:"Saint Vincent and the Grenadines",phone:[1784],continent:"NA",capital:"Kingstown",currency:["XCD"],languages:["en"]},VE:{name:"Venezuela",native:"Venezuela",phone:[58],continent:"SA",capital:"Caracas",currency:["VES"],languages:["es"]},VG:{name:"British Virgin Islands",native:"British Virgin Islands",phone:[1284],continent:"NA",capital:"Road Town",currency:["USD"],languages:["en"]},VI:{name:"U.S. Virgin Islands",native:"United States Virgin Islands",phone:[1340],continent:"NA",capital:"Charlotte Amalie",currency:["USD"],languages:["en"]},VN:{name:"Vietnam",native:"Việt Nam",phone:[84],continent:"AS",capital:"Hanoi",currency:["VND"],languages:["vi"]},VU:{name:"Vanuatu",native:"Vanuatu",phone:[678],continent:"OC",capital:"Port Vila",currency:["VUV"],languages:["bi","en","fr"]},WF:{name:"Wallis and Futuna",native:"Wallis et Futuna",phone:[681],continent:"OC",capital:"Mata-Utu",currency:["XPF"],languages:["fr"]},WS:{name:"Samoa",native:"Samoa",phone:[685],continent:"OC",capital:"Apia",currency:["WST"],languages:["sm","en"]},XK:{name:"Kosovo",native:"Republika e Kosovës",phone:[377,381,383,386],continent:"EU",capital:"Pristina",currency:["EUR"],languages:["sq","sr"]},YE:{name:"Yemen",native:"اليَمَن",phone:[967],continent:"AS",capital:"Sana'a",currency:["YER"],languages:["ar"]},YT:{name:"Mayotte",native:"Mayotte",phone:[262],continent:"AF",capital:"Mamoudzou",currency:["EUR"],languages:["fr"]},ZA:{name:"South Africa",native:"South Africa",phone:[27],continent:"AF",capital:"Pretoria",currency:["ZAR"],languages:["af","en","nr","st","ss","tn","ts","ve","xh","zu"]},ZM:{name:"Zambia",native:"Zambia",phone:[260],continent:"AF",capital:"Lusaka",currency:["ZMW"],languages:["en"]},ZW:{name:"Zimbabwe",native:"Zimbabwe",phone:[263],continent:"AF",capital:"Harare",currency:["USD","ZAR","BWP","GBP","AUD","CNY","INR","JPY"],languages:["en","sn","nd"]}},EL={AD:"AND",AE:"ARE",AF:"AFG",AG:"ATG",AI:"AIA",AL:"ALB",AM:"ARM",AO:"AGO",AQ:"ATA",AR:"ARG",AS:"ASM",AT:"AUT",AU:"AUS",AW:"ABW",AX:"ALA",AZ:"AZE",BA:"BIH",BB:"BRB",BD:"BGD",BE:"BEL",BF:"BFA",BG:"BGR",BH:"BHR",BI:"BDI",BJ:"BEN",BL:"BLM",BM:"BMU",BN:"BRN",BO:"BOL",BQ:"BES",BR:"BRA",BS:"BHS",BT:"BTN",BV:"BVT",BW:"BWA",BY:"BLR",BZ:"BLZ",CA:"CAN",CC:"CCK",CD:"COD",CF:"CAF",CG:"COG",CH:"CHE",CI:"CIV",CK:"COK",CL:"CHL",CM:"CMR",CN:"CHN",CO:"COL",CR:"CRI",CU:"CUB",CV:"CPV",CW:"CUW",CX:"CXR",CY:"CYP",CZ:"CZE",DE:"DEU",DJ:"DJI",DK:"DNK",DM:"DMA",DO:"DOM",DZ:"DZA",EC:"ECU",EE:"EST",EG:"EGY",EH:"ESH",ER:"ERI",ES:"ESP",ET:"ETH",FI:"FIN",FJ:"FJI",FK:"FLK",FM:"FSM",FO:"FRO",FR:"FRA",GA:"GAB",GB:"GBR",GD:"GRD",GE:"GEO",GF:"GUF",GG:"GGY",GH:"GHA",GI:"GIB",GL:"GRL",GM:"GMB",GN:"GIN",GP:"GLP",GQ:"GNQ",GR:"GRC",GS:"SGS",GT:"GTM",GU:"GUM",GW:"GNB",GY:"GUY",HK:"HKG",HM:"HMD",HN:"HND",HR:"HRV",HT:"HTI",HU:"HUN",ID:"IDN",IE:"IRL",IL:"ISR",IM:"IMN",IN:"IND",IO:"IOT",IQ:"IRQ",IR:"IRN",IS:"ISL",IT:"ITA",JE:"JEY",JM:"JAM",JO:"JOR",JP:"JPN",KE:"KEN",KG:"KGZ",KH:"KHM",KI:"KIR",KM:"COM",KN:"KNA",KP:"PRK",KR:"KOR",KW:"KWT",KY:"CYM",KZ:"KAZ",LA:"LAO",LB:"LBN",LC:"LCA",LI:"LIE",LK:"LKA",LR:"LBR",LS:"LSO",LT:"LTU",LU:"LUX",LV:"LVA",LY:"LBY",MA:"MAR",MC:"MCO",MD:"MDA",ME:"MNE",MF:"MAF",MG:"MDG",MH:"MHL",MK:"MKD",ML:"MLI",MM:"MMR",MN:"MNG",MO:"MAC",MP:"MNP",MQ:"MTQ",MR:"MRT",MS:"MSR",MT:"MLT",MU:"MUS",MV:"MDV",MW:"MWI",MX:"MEX",MY:"MYS",MZ:"MOZ",NA:"NAM",NC:"NCL",NE:"NER",NF:"NFK",NG:"NGA",NI:"NIC",NL:"NLD",NO:"NOR",NP:"NPL",NR:"NRU",NU:"NIU",NZ:"NZL",OM:"OMN",PA:"PAN",PE:"PER",PF:"PYF",PG:"PNG",PH:"PHL",PK:"PAK",PL:"POL",PM:"SPM",PN:"PCN",PR:"PRI",PS:"PSE",PT:"PRT",PW:"PLW",PY:"PRY",QA:"QAT",RE:"REU",RO:"ROU",RS:"SRB",RU:"RUS",RW:"RWA",SA:"SAU",SB:"SLB",SC:"SYC",SD:"SDN",SE:"SWE",SG:"SGP",SH:"SHN",SI:"SVN",SJ:"SJM",SK:"SVK",SL:"SLE",SM:"SMR",SN:"SEN",SO:"SOM",SR:"SUR",SS:"SSD",ST:"STP",SV:"SLV",SX:"SXM",SY:"SYR",SZ:"SWZ",TC:"TCA",TD:"TCD",TF:"ATF",TG:"TGO",TH:"THA",TJ:"TJK",TK:"TKL",TL:"TLS",TM:"TKM",TN:"TUN",TO:"TON",TR:"TUR",TT:"TTO",TV:"TUV",TW:"TWN",TZ:"TZA",UA:"UKR",UG:"UGA",UM:"UMI",US:"USA",UY:"URY",UZ:"UZB",VA:"VAT",VC:"VCT",VE:"VEN",VG:"VGB",VI:"VIR",VN:"VNM",VU:"VUT",WF:"WLF",WS:"WSM",XK:"XKX",YE:"YEM",YT:"MYT",ZA:"ZAF",ZM:"ZMB",ZW:"ZWE"},wL=t=>({...du[t],iso2:t,iso3:EL[t]}),TL=()=>Object.keys(du).map(t=>wL(t));TL();const IL={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},SL=oi(IL),AL=ma(SL);class CL extends P.Component{constructor(n){super(n);te(this,"handleKeyPress",n=>{n.key=="Enter"&&console.log("enter")});te(this,"updateState",(n,r)=>{this.setState({[n]:r,currentQuestion:this.state.currentQuestion+1})});te(this,"uploadData",async()=>{try{const n=await cL(pa(AL,"Users",this.state.user.uid),{role:this.state.role,recommendBy:this.state.recommendBy,eduLvl:this.state.eduLvl,country:this.state.country,displayName:this.state.user.displayName,email:this.state.user.email,photoURL:this.state.user.photoURL})}catch(n){console.log("Error adding document of first-time login user: ",n)}});console.log(n.state.user),this.state={user:n.state.user,currentQuestion:1,role:null,recommendBy:null,eduLvl:null,country:null};let r=["-- Please Select --"];for(let i in du)r.push(du[i].name);r.sort(),this.data=[{id:1,answering:"role",question:"I am a ...",options:["student","teacher","special needy / refugee / disabilities","public"]},{id:2,answering:"recommendBy",question:"Who recommend me to this platform?",options:["friends","family","school","social media","others"]},{id:3,answering:"eduLvl",question:"I am currently in ...",options:["primary school","secondary school","high school","undergraduate","postgraduate","workplace"]},{id:4,answering:"country",question:"I am from ...",options:r}]}render(){if(console.log(this.state),this.state.user)if(this.state.user.metadata.creationTime===this.state.user.metadata.lastSignInTime)console.log("first-time user");else return m.jsx(Ys,{to:"/freeflow-edu/"});else return m.jsx(Ys,{to:"/freeflow-edu/"});const n=Py(this.data)?[]:this.data.map((r,i)=>{const s=Py(r.options)?[]:r.options.map((o,a)=>r.options.length<10?m.jsx("button",{onClick:()=>this.updateState(r.answering,o),value:o,children:o},o):m.jsx("option",{value:o,children:o},o));return m.jsxs("div",{style:{display:r.id===this.state.currentQuestion?"inherit":"none"},children:[m.jsxs("h3",{children:["Question ",r.id,": ",r.question]}),r.options.length<10?s:m.jsx("select",{id:"s_country",onChange:()=>$("#s_country").val()!=="-- Please Select --"?this.updateState("country",$("#s_country").val()):alert("Please select your origin."),children:s})]},r.id)});return this.state.currentQuestion>4?(console.log("End of survey"),this.uploadData(),m.jsx(Ys,{to:"/freeflow-edu/"})):m.jsxs(m.Fragment,{children:[m.jsx("h1",{children:"First Time Login Q&A"}),n]})}}const RL={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},PL=oi(RL),kL=ma(PL),NL=t=>{const[e,n]=P.useState(t.state.user);P.useState(t.state.credential);const r=xu();if(e){const i=pa(kL,"Users",e.uid);(()=>{Em(i).then(o=>{console.log(o),o.exists()?console.log("registered"):e.metadata.creationTime===e.metadata.lastSignInTime?(console.log("first-time user"),r("/freeflow-edu/first-time-user")):console.log("registered")}).catch(o=>{console.log("Error getting document of collection Users: ",o)})})()}return m.jsx(m.Fragment,{children:m.jsx("h1",{className:"text-gray-300",children:"Home"})})},xL=({setUser:t})=>m.jsx("h1",{children:"Profile"}),vh=(()=>{const t={};let e=1;return{set(n,r,i){typeof n[r]>"u"&&(n[r]={key:r,id:e},e++),t[n[r].id]=i},get(n,r){if(!n||typeof n[r]>"u")return null;const i=n[r];return i.key===r?t[i.id]:null},delete(n,r){if(typeof n[r]>"u")return;const i=n[r];i.key===r&&(delete t[i.id],delete n[r])}}})(),Ka={setData(t,e,n){vh.set(t,e,n)},getData(t,e){return vh.get(t,e)},removeData(t,e){vh.delete(t,e)}},DL=1e6,bL=t=>t==null?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),OL=t=>{do t+=Math.floor(Math.random()*DL);while(document.getElementById(t));return t},B1=t=>{let e=t.getAttribute("data-te-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e},LL=t=>{const e=B1(t);return e&&document.querySelector(e)?e:null},j1=t=>{const e=B1(t);return e?document.querySelector(e):null},ML=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Iv=(t,e,n)=>{Object.keys(n).forEach(r=>{const i=n[r],s=e[r],o=s&&ML(s)?"element":bL(s);if(!new RegExp(i).test(o))throw new Error(`${t.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)})},wm=t=>{if(!t||t.getClientRects().length===0)return!1;if(t.style&&t.parentNode&&t.parentNode.style){const e=getComputedStyle(t),n=getComputedStyle(t.parentNode);return getComputedStyle(t).getPropertyValue("visibility")==="visible"||e.display!=="none"&&n.display!=="none"&&e.visibility!=="hidden"}return!1},Tm=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",z1=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-te-no-jquery")?t:null},_h=[],VL=t=>{document.readyState==="loading"?(_h.length||document.addEventListener("DOMContentLoaded",()=>{_h.forEach(e=>e())}),_h.push(t)):t()},cn=()=>document.documentElement.dir==="rtl",K1=t=>document.createElement(t),UL=/[^.]*(?=\..*)\.|.*/,FL=/\..*/,$L=/::\d+$/,Eh={};let Sv=1;const BL={mouseenter:"mouseover",mouseleave:"mouseout"},jL=/^(mouseenter|mouseleave)/i,H1=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function W1(t,e){return e&&`${e}::${Sv++}`||t.uidEvent||Sv++}function G1(t){const e=W1(t);return t.uidEvent=e,Eh[e]=Eh[e]||{},Eh[e]}function zL(t,e){return function n(r){return r.delegateTarget=t,n.oneOff&&st.off(t,r.type,e),e.apply(t,[r])}}function KL(t,e,n){return function r(i){const s=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;"")if(s[a]===o)return i.delegateTarget=o,r.oneOff&&st.off(t,i.type,n),n.apply(o,[i]);return null}}function q1(t,e,n=null){const r=Object.keys(t);for(let i=0,s=r.length;i<s;i++){const o=t[r[i]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function Q1(t,e,n){const r=typeof e=="string",i=r?n:e;let s=Y1(t);return H1.has(s)||(s=t),[r,i,s]}function Av(t,e,n,r,i){if(typeof e!="string"||!t)return;if(n||(n=r,r=null),jL.test(e)){const y=_=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return _.call(this,E)};r?r=y(r):n=y(n)}const[s,o,a]=Q1(e,n,r),l=G1(t),u=l[a]||(l[a]={}),c=q1(u,o,s?n:null);if(c){c.oneOff=c.oneOff&&i;return}const h=W1(o,e.replace(UL,"")),d=s?KL(t,n,r):zL(t,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,t.addEventListener(a,d,s)}function af(t,e,n,r,i){const s=q1(e[n],r,i);s&&(t.removeEventListener(n,s,!!i),delete e[n][s.uidEvent])}function HL(t,e,n,r){const i=e[n]||{};Object.keys(i).forEach(s=>{if(s.includes(r)){const o=i[s];af(t,e,n,o.originalHandler,o.delegationSelector)}})}function Y1(t){return t=t.replace(FL,""),BL[t]||t}const st={on(t,e,n,r){Av(t,e,n,r,!1)},one(t,e,n,r){Av(t,e,n,r,!0)},off(t,e,n,r){if(typeof e!="string"||!t)return;const[i,s,o]=Q1(e,n,r),a=o!==e,l=G1(t),u=e.startsWith(".");if(typeof s<"u"){if(!l||!l[o])return;af(t,l,o,s,i?n:null);return}u&&Object.keys(l).forEach(h=>{HL(t,l,h,e.slice(1))});const c=l[o]||{};Object.keys(c).forEach(h=>{const d=h.replace($L,"");if(!a||e.includes(d)){const y=c[h];af(t,l,o,y.originalHandler,y.delegationSelector)}})},trigger(t,e,n){if(typeof e!="string"||!t)return null;const r=z1(),i=Y1(e),s=e!==i,o=H1.has(i);let a,l=!0,u=!0,c=!1,h=null;return s&&r&&(a=r.Event(e,n),r(t).trigger(a),l=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,l,!0)):h=new CustomEvent(e,{bubbles:l,cancelable:!0}),typeof n<"u"&&Object.keys(n).forEach(d=>{Object.defineProperty(h,d,{get(){return n[d]}})}),c&&h.preventDefault(),u&&t.dispatchEvent(h),h.defaultPrevented&&typeof a<"u"&&a.preventDefault(),h}};function wh(t){return t==="true"?!0:t==="false"?!1:t===Number(t).toString()?Number(t):t===""||t==="null"?null:t}function Th(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const tt={setDataAttribute(t,e,n){t.setAttribute(`data-te-${Th(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-te-${Th(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(n=>n.startsWith("te")).forEach(n=>{if(n.startsWith("teClass"))return;let r=n.replace(/^te/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=wh(t.dataset[n])}),e},getDataClassAttributes(t){if(!t)return{};const e={...t.dataset};return Object.keys(e).filter(n=>n.startsWith("teClass")).forEach(n=>{let r=n.replace(/^teClass/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),e[r]=wh(e[n])}),e},getDataAttribute(t,e){return wh(t.getAttribute(`data-te-${Th(e)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position(t){return{top:t.offsetTop,left:t.offsetLeft}},style(t,e){Object.assign(t.style,e)},toggleClass(t,e){t&&Ih(e).forEach(n=>{t.classList.contains(n)?t.classList.remove(n):t.classList.add(n)})},addClass(t,e){Ih(e).forEach(n=>!t.classList.contains(n)&&t.classList.add(n))},addStyle(t,e){Object.keys(e).forEach(n=>{t.style[n]=e[n]})},removeClass(t,e){Ih(e).forEach(n=>t.classList.contains(n)&&t.classList.remove(n))},hasClass(t,e){return t.classList.contains(e)},maxOffset(t){const e=t.getBoundingClientRect();return{top:e.top+Math.max(document.body.scrollTop,document.documentElement.scrollTop,window.scrollY),left:e.left+Math.max(document.body.scrollLeft,document.documentElement.scrollLeft,window.scrollX)}}};function Ih(t){return typeof t=="string"?t.split(" "):Array.isArray(t)?t:!1}const WL=3,En={closest(t,e){return t.closest(e)},matches(t,e){return t.matches(e)},find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let r=t.parentNode;for(;r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==WL;)this.matches(r,e)&&n.push(r),r=r.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(this.matches(n,e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(", ");return this.find(e,t).filter(n=>!Tm(n)&&wm(n))}};cn();cn();cn();cn();cn();cn();cn(),cn();(()=>{var t={454:(r,i,s)=>{s.d(i,{Z:()=>l});var o=s(645),a=s.n(o)()(function(u){return u[1]});a.push([r.id,"INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",""]);const l=a},645:r=>{r.exports=function(i){var s=[];return s.toString=function(){return this.map(function(o){var a=i(o);return o[2]?"@media ".concat(o[2]," {").concat(a,"}"):a}).join("")},s.i=function(o,a,l){typeof o=="string"&&(o=[[null,o,""]]);var u={};if(l)for(var c=0;c<this.length;c++){var h=this[c][0];h!=null&&(u[h]=!0)}for(var d=0;d<o.length;d++){var y=[].concat(o[d]);l&&u[y[0]]||(a&&(y[2]?y[2]="".concat(a," and ").concat(y[2]):y[2]=a),s.push(y))}},s}},810:()=>{(function(){if(typeof window<"u")try{var r=new window.CustomEvent("test",{cancelable:!0});if(r.preventDefault(),r.defaultPrevented!==!0)throw new Error("Could not prevent default")}catch{var i=function(s,o){var a,l;return(o=o||{}).bubbles=!!o.bubbles,o.cancelable=!!o.cancelable,(a=document.createEvent("CustomEvent")).initCustomEvent(s,o.bubbles,o.cancelable,o.detail),l=a.preventDefault,a.preventDefault=function(){l.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch{this.defaultPrevented=!0}},a};i.prototype=window.Event.prototype,window.CustomEvent=i}})()},379:(r,i,s)=>{var o,a=function(){var f={};return function(v){if(f[v]===void 0){var w=document.querySelector(v);if(window.HTMLIFrameElement&&w instanceof window.HTMLIFrameElement)try{w=w.contentDocument.head}catch{w=null}f[v]=w}return f[v]}}(),l=[];function u(f){for(var v=-1,w=0;w<l.length;w++)if(l[w].identifier===f){v=w;break}return v}function c(f,v){for(var w={},I=[],R=0;R<f.length;R++){var k=f[R],M=v.base?k[0]+v.base:k[0],V=w[M]||0,Te="".concat(M," ").concat(V);w[M]=V+1;var hn=u(Te),bn={css:k[1],media:k[2],sourceMap:k[3]};hn!==-1?(l[hn].references++,l[hn].updater(bn)):l.push({identifier:Te,updater:p(bn,v),references:1}),I.push(Te)}return I}function h(f){var v=document.createElement("style"),w=f.attributes||{};if(w.nonce===void 0){var I=s.nc;I&&(w.nonce=I)}if(Object.keys(w).forEach(function(k){v.setAttribute(k,w[k])}),typeof f.insert=="function")f.insert(v);else{var R=a(f.insert||"head");if(!R)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");R.appendChild(v)}return v}var d,y=(d=[],function(f,v){return d[f]=v,d.filter(Boolean).join(`
`)});function _(f,v,w,I){var R=w?"":I.media?"@media ".concat(I.media," {").concat(I.css,"}"):I.css;if(f.styleSheet)f.styleSheet.cssText=y(v,R);else{var k=document.createTextNode(R),M=f.childNodes;M[v]&&f.removeChild(M[v]),M.length?f.insertBefore(k,M[v]):f.appendChild(k)}}function E(f,v,w){var I=w.css,R=w.media,k=w.sourceMap;if(R?f.setAttribute("media",R):f.removeAttribute("media"),k&&typeof btoa<"u"&&(I+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),f.styleSheet)f.styleSheet.cssText=I;else{for(;f.firstChild;)f.removeChild(f.firstChild);f.appendChild(document.createTextNode(I))}}var T=null,g=0;function p(f,v){var w,I,R;if(v.singleton){var k=g++;w=T||(T=h(v)),I=_.bind(null,w,k,!1),R=_.bind(null,w,k,!0)}else w=h(v),I=E.bind(null,w,v),R=function(){(function(M){if(M.parentNode===null)return!1;M.parentNode.removeChild(M)})(w)};return I(f),function(M){if(M){if(M.css===f.css&&M.media===f.media&&M.sourceMap===f.sourceMap)return;I(f=M)}else R()}}r.exports=function(f,v){(v=v||{}).singleton||typeof v.singleton=="boolean"||(v.singleton=(o===void 0&&(o=!!(window&&document&&document.all&&!window.atob)),o));var w=c(f=f||[],v);return function(I){if(I=I||[],Object.prototype.toString.call(I)==="[object Array]"){for(var R=0;R<w.length;R++){var k=u(w[R]);l[k].references--}for(var M=c(I,v),V=0;V<w.length;V++){var Te=u(w[V]);l[Te].references===0&&(l[Te].updater(),l.splice(Te,1))}w=M}}}}},e={};function n(r){var i=e[r];if(i!==void 0)return i.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=r=>{var i=r&&r.__esModule?()=>r.default:()=>r;return n.d(i,{a:i}),i},n.d=(r,i)=>{for(var s in i)n.o(i,s)&&!n.o(r,s)&&Object.defineProperty(r,s,{enumerable:!0,get:i[s]})},n.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),(()=>{var r=n(379),i=n.n(r),s=n(454);function o(l){if(!l.hasAttribute("autocompleted")){l.setAttribute("autocompleted","");var u=new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!0,detail:null});l.dispatchEvent(u)||(l.value="")}}function a(l){l.hasAttribute("autocompleted")&&(l.removeAttribute("autocompleted"),l.dispatchEvent(new window.CustomEvent("onautocomplete",{bubbles:!0,cancelable:!1,detail:null})))}i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,n(810),document.addEventListener("animationstart",function(l){l.animationName==="onautofillstart"?o(l.target):a(l.target)},!0),document.addEventListener("input",function(l){l.inputType!=="insertReplacementText"&&"data"in l?a(l.target):o(l.target)},!0)})()})();const Sh="ripple",Ha="te.ripple",GL="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",qL=["[data-te-ripple-init]"],Ah=[0,0,0],QL=[{name:"primary",gradientColor:"#3B71CA"},{name:"secondary",gradientColor:"#9FA6B2"},{name:"success",gradientColor:"#14A44D"},{name:"danger",gradientColor:"#DC4C64"},{name:"warning",gradientColor:"#E4A11B"},{name:"info",gradientColor:"#54B4D3"},{name:"light",gradientColor:"#fbfbfb"},{name:"dark",gradientColor:"#262626"}],Cv=.5,YL={rippleCentered:!1,rippleColor:"",rippleColorDark:"",rippleDuration:"500ms",rippleRadius:0,rippleUnbound:!1},XL={rippleCentered:"boolean",rippleColor:"string",rippleColorDark:"string",rippleDuration:"string",rippleRadius:"number",rippleUnbound:"boolean"},JL={ripple:"relative overflow-hidden inline-block align-bottom",rippleWave:"rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",unbound:"overflow-visible"},ZL={ripple:"string",rippleWave:"string",unbound:"string"};class Im{constructor(e,n,r){this._element=e,this._options=this._getConfig(n),this._classes=this._getClasses(r),this._element&&(Ka.setData(e,Ha,this),tt.addClass(this._element,this._classes.ripple)),this._clickHandler=this._createRipple.bind(this),this._rippleTimer=null,this._isMinWidthSet=!1,this._initialClasses=null,this.init()}static get NAME(){return Sh}init(){this._addClickEvent(this._element)}dispose(){Ka.removeData(this._element,Ha),st.off(this._element,"click",this._clickHandler),this._element=null,this._options=null}_autoInit(e){qL.forEach(n=>{En.closest(e.target,n)&&(this._element=En.closest(e.target,n))}),this._element.style.minWidth||(tt.style(this._element,{"min-width":getComputedStyle(this._element).width}),this._isMinWidthSet=!0),this._options=this._getConfig(),this._classes=this._getClasses(),this._initialClasses=[...this._element.classList],tt.addClass(this._element,this._classes.ripple),this._createRipple(e)}_addClickEvent(e){st.on(e,"mousedown",this._clickHandler)}_createRipple(e){this._element.className.indexOf(this._classes.ripple)<0&&tt.addClass(this._element,this._classes.ripple);const{layerX:n,layerY:r}=e,i=e.offsetX||n,s=e.offsetY||r,o=this._element.offsetHeight,a=this._element.offsetWidth,l=this._durationToMsNumber(this._options.rippleDuration),u={offsetX:this._options.rippleCentered?o/2:i,offsetY:this._options.rippleCentered?a/2:s,height:o,width:a},c=this._getDiameter(u),h=this._options.rippleRadius||c/2,d={delay:l*Cv,duration:l-l*Cv},y={left:this._options.rippleCentered?`${a/2-h}px`:`${i-h}px`,top:this._options.rippleCentered?`${o/2-h}px`:`${s-h}px`,height:`${this._options.rippleRadius*2||c}px`,width:`${this._options.rippleRadius*2||c}px`,transitionDelay:`0s, ${d.delay}ms`,transitionDuration:`${l}ms, ${d.duration}ms`},_=K1("div");this._createHTMLRipple({wrapper:this._element,ripple:_,styles:y}),this._removeHTMLRipple({ripple:_,duration:l})}_createHTMLRipple({wrapper:e,ripple:n,styles:r}){Object.keys(r).forEach(i=>n.style[i]=r[i]),tt.addClass(n,this._classes.rippleWave),n.setAttribute("data-te-ripple-ref",""),this._addColor(n,e),this._toggleUnbound(e),this._appendRipple(n,e)}_removeHTMLRipple({ripple:e,duration:n}){this._rippleTimer&&(clearTimeout(this._rippleTimer),this._rippleTimer=null),e&&setTimeout(()=>{e.classList.add("!opacity-0")},10),this._rippleTimer=setTimeout(()=>{if(e&&(e.remove(),this._element)){En.find("[data-te-ripple-ref]",this._element).forEach(i=>{i.remove()}),this._isMinWidthSet&&(tt.style(this._element,{"min-width":""}),this._isMinWidthSet=!1);const r=this._initialClasses?this._addedNewRippleClasses(this._classes.ripple,this._initialClasses):this._classes.ripple.split(" ");tt.removeClass(this._element,r)}},n)}_addedNewRippleClasses(e,n){return e.split(" ").filter(r=>n.findIndex(i=>r===i)===-1)}_durationToMsNumber(e){return Number(e.replace("ms","").replace("s","000"))}_getConfig(e={}){const n=tt.getDataAttributes(this._element);return e={...YL,...n,...e},Iv(Sh,e,XL),e}_getClasses(e={}){const n=tt.getDataClassAttributes(this._element);return e={...JL,...n,...e},Iv(Sh,e,ZL),e}_getDiameter({offsetX:e,offsetY:n,height:r,width:i}){const s=n<=r/2,o=e<=i/2,a=(d,y)=>Math.sqrt(d**2+y**2),l=n===r/2&&e===i/2,u={first:s===!0&&o===!1,second:s===!0&&o===!0,third:s===!1&&o===!0,fourth:s===!1&&o===!1},c={topLeft:a(e,n),topRight:a(i-e,n),bottomLeft:a(e,r-n),bottomRight:a(i-e,r-n)};let h=0;return l||u.fourth?h=c.topLeft:u.third?h=c.topRight:u.second?h=c.bottomRight:u.first&&(h=c.bottomLeft),h*2}_appendRipple(e,n){n.appendChild(e),setTimeout(()=>{tt.addClass(e,"opacity-0 scale-100")},50)}_toggleUnbound(e){this._options.rippleUnbound===!0?tt.addClass(e,this._classes.unbound):tt.removeClass(e,this._classes.unbound)}_addColor(e){let n=this._options.rippleColor||"rgb(0,0,0)";(localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(n=this._options.rippleColorDark||this._options.rippleColor);const r=QL.find(o=>o.name===n.toLowerCase()),i=r?this._colorToRGB(r.gradientColor).join(","):this._colorToRGB(n).join(","),s=GL.split("{{color}}").join(`${i}`);e.style.backgroundImage=`radial-gradient(circle, ${s})`}_colorToRGB(e){function n(s){return s.length<7&&(s=`#${s[1]}${s[1]}${s[2]}${s[2]}${s[3]}${s[3]}`),[parseInt(s.substr(1,2),16),parseInt(s.substr(3,2),16),parseInt(s.substr(5,2),16)]}function r(s){const o=document.body.appendChild(document.createElement("fictum")),a="rgb(1, 2, 3)";return o.style.color=a,o.style.color!==a||(o.style.color=s,o.style.color===a||o.style.color==="")?Ah:(s=getComputedStyle(o).color,document.body.removeChild(o),s)}function i(s){return s=s.match(/[.\d]+/g).map(o=>+Number(o)),s.length=3,s}return e.toLowerCase()==="transparent"?Ah:e[0]==="#"?n(e):(e.indexOf("rgb")===-1&&(e=r(e)),e.indexOf("rgb")===0?i(e):Ah)}static autoInitial(e){return function(n){e._autoInit(n)}}static jQueryInterface(e){return this.each(function(){return Ka.getData(this,Ha)?null:new Im(this,e)})}static getInstance(e){return Ka.getData(e,Ha)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}}cn();cn();OL("chips-input-");const Mn={plugins:{legend:{labels:{color:"rgb(102,102,102)"}}}},eM={line:{options:{...Mn,elements:{line:{backgroundColor:"rgba(59, 112, 202, 0.0)",borderColor:"rgb(59, 112, 202)",borderWidth:2,tension:0},point:{borderColor:"rgb(59, 112, 202)",backgroundColor:"rgb(59, 112, 202)"}},responsive:!0,legend:{display:!0},tooltips:{intersect:!1,mode:"index"},datasets:{borderColor:"red"},scales:{x:{stacked:!0,grid:{display:!1},ticks:{fontColor:"rgba(0,0,0, 0.5)"}},y:{stacked:!1,grid:{borderDash:[2],drawBorder:!1,zeroLineColor:"rgba(0,0,0,0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{fontColor:"rgba(0,0,0, 0.5)"}}}}},bar:{options:{...Mn,backgroundColor:"rgb(59, 112, 202)",borderWidth:0,responsive:!0,legend:{display:!0},tooltips:{intersect:!1,mode:"index"},scales:{x:{stacked:!0,grid:{display:!1},ticks:{fontColor:"rgba(0,0,0, 0.5)"}},y:{stacked:!0,grid:{borderDash:[2],drawBorder:!1,zeroLineColor:"rgba(0,0,0,0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{fontColor:"rgba(0,0,0, 0.5)"}}}}},pie:{options:{...Mn,elements:{arc:{backgroundColor:"rgb(59, 112, 202)"}},responsive:!0,legend:{display:!0}}},doughnut:{options:{...Mn,elements:{arc:{backgroundColor:"rgb(59, 112, 202)"}},responsive:!0,legend:{display:!0}}},polarArea:{options:{...Mn,elements:{arc:{backgroundColor:"rgba(59, 112, 202, 0.5)"}},responsive:!0,legend:{display:!0}}},radar:{options:{...Mn,elements:{line:{backgroundColor:"rgba(59, 112, 202, 0.5)",borderColor:"rgb(59, 112, 202)",borderWidth:2},point:{borderColor:"rgb(59, 112, 202)",backgroundColor:"rgb(59, 112, 202)"}},responsive:!0,legend:{display:!0}}},scatter:{options:{...Mn,elements:{line:{backgroundColor:"rgba(59, 112, 202, 0.5)",borderColor:"rgb(59, 112, 202)",borderWidth:2,tension:0},point:{borderColor:"rgb(59, 112, 202)",backgroundColor:"rgba(59, 112, 202, 0.5)"}},responsive:!0,legend:{display:!0},tooltips:{intersect:!1,mode:"index"},datasets:{borderColor:"red"},scales:{x:{stacked:!0,grid:{display:!1},ticks:{fontColor:"rgba(0,0,0, 0.5)"}},y:{stacked:!1,grid:{borderDash:[2],drawBorder:!1,zeroLineColor:"rgba(0,0,0,0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{fontColor:"rgba(0,0,0, 0.5)"}}}}},bubble:{options:{...Mn,elements:{point:{borderColor:"rgb(59, 112, 202)",backgroundColor:"rgba(59, 112, 202, 0.5)"}},responsive:!0,legend:{display:!0},scales:{x:{grid:{display:!1},ticks:{fontColor:"rgba(0,0,0, 0.5)"}},y:{grid:{borderDash:[2],drawBorder:!1,zeroLineColor:"rgba(0,0,0,0)",zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2]},ticks:{fontColor:"rgba(0,0,0, 0.5)"}}}}}};var mc=function(t){this.element=t,this.handlers={}},X1={isEmpty:{configurable:!0}};mc.prototype.bind=function(t,e){typeof this.handlers[t]>"u"&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)};mc.prototype.unbind=function(t,e){var n=this;this.handlers[t]=this.handlers[t].filter(function(r){return e&&r!==e?!0:(n.element.removeEventListener(t,r,!1),!1)})};mc.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)};X1.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(mc.prototype,X1);typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),typeof navigator<"u"&&navigator.msMaxTouchPoints,typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent);K1("div");const tM=t=>{VL(()=>{const e=z1();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}})},nM=(t,e)=>{st.on(document,`click.te.${t.NAME}`,e,function(n){n.preventDefault(),t.getOrCreateInstance(this).toggle()})},rM=(t,e)=>{st.on(document,`click.te.${t.NAME}.data-api`,e,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!Tm(this)&&t.getOrCreateInstance(this).show()})},iM=(t,e)=>{st.on(document,`click.te.${t.NAME}.data-api`,e,function(n){const r=j1(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Tm(this))return;st.one(r,t.EVENT_HIDDEN,()=>{wm(this)&&this.focus()});const i=En.findOne(t.OPEN_SELECTOR);i&&i!==r&&t.getInstance(i).hide(),t.getOrCreateInstance(r).toggle(this)})},sM=(t,e)=>{st.on(document,`click.te.${t.NAME}`,e,n=>{n.preventDefault();const r=n.target.closest(e);t.getOrCreateInstance(r).toggle()})},oM=(t,e)=>{st.on(document,`click.te.${t.NAME}`,e,function(n){const r=j1(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),st.one(r,t.EVENT_SHOW,s=>{s.defaultPrevented||st.one(r,t.EVENT_HIDDEN,()=>{wm(this)&&this.focus()})});const i=En.findOne(`[${t.OPEN_SELECTOR}="true"]`);i&&t.getInstance(i).hide(),t.getOrCreateInstance(r).toggle(this)})},aM=(t,e)=>{st.one(document,"mousedown",e,t.autoInitial(new t))},lM=(t,e)=>{st.on(document,`click.te.${t.NAME}.data-api`,e,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();const r=LL(this);En.find(r).forEach(i=>{t.getOrCreateInstance(i,{toggle:!1}).toggle()})})},uM=(t,e)=>{[].slice.call(document.querySelectorAll(e)).map(function(n){return new t(n)})},cM=(t,e)=>{[].slice.call(document.querySelectorAll(e)).map(function(n){return new t(n)})},hM=(t,e)=>{En.find(e).forEach(n=>{new t(n)}),st.on(document,`click.te.${t.NAME}.data-api`,`${e} img:not([data-te-lightbox-disabled])`,t.toggle())},dM=(t,e)=>{const n=s=>s[0]==="{"&&s[s.length-1]==="}"||s[0]==="["&&s[s.length-1]==="]",r=s=>typeof s!="string"?s:n(s)?JSON.parse(s.replace(/'/g,'"')):s,i=s=>{const o={};return Object.keys(s).forEach(a=>{if(a.match(/dataset.*/)){const l=a.slice(7,8).toLowerCase().concat(a.slice(8));o[l]=r(s[a])}}),o};En.find(e).forEach(s=>{if(tt.getDataAttribute(s,"chart")!=="bubble"&&tt.getDataAttribute(s,"chart")!=="scatter"){const o=tt.getDataAttributes(s),a={data:{datasets:[i(o)]}};return o.chart&&(a.type=o.chart),o.labels&&(a.data.labels=JSON.parse(o.labels.replace(/'/g,'"'))),new t(s,{...a,...eM[a.type]})}return null})};class fM{constructor(){this.inits=[]}get initialized(){return this.inits}isInited(e){return this.inits.includes(e)}add(e){this.isInited(e)||this.inits.push(e)}}const lf=new fM,$s={alert:{name:"Alert",selector:"[data-te-alert-init]",isToggler:!1},animation:{name:"Animate",selector:"[data-te-animation-init]",isToggler:!1},carousel:{name:"Carousel",selector:"[data-te-carousel-init]",isToggler:!1},chips:{name:"ChipsInput",selector:"[data-te-chips-input-init]",isToggler:!1},chip:{name:"Chip",selector:"[data-te-chip-init]",isToggler:!1,onInit:"init"},datepicker:{name:"Datepicker",selector:"[data-te-datepicker-init]",isToggler:!1},datetimepicker:{name:"Datetimepicker",selector:"[data-te-date-timepicker-init]",isToggler:!1},input:{name:"Input",selector:"[data-te-input-wrapper-init]",isToggler:!1},perfectScrollbar:{name:"PerfectScrollbar",selector:"[data-te-perfect-scrollbar-init]",isToggler:!1},rating:{name:"Rating",selector:"[data-te-rating-init]",isToggler:!1},scrollspy:{name:"ScrollSpy",selector:"[data-te-spy='scroll']",isToggler:!1},select:{name:"Select",selector:"[data-te-select-init]",isToggler:!1},sidenav:{name:"Sidenav",selector:"[data-te-sidenav-init]",isToggler:!1},stepper:{name:"Stepper",selector:"[data-te-stepper-init]",isToggler:!1},timepicker:{name:"Timepicker",selector:"[data-te-timepicker-init]",isToggler:!1},toast:{name:"Toast",selector:"[data-te-toast-init]",isToggler:!1},datatable:{name:"Datatable",selector:"[data-te-datatable-init]"},popconfirm:{name:"Popconfirm",selector:"[data-te-toggle='popconfirm']"},validation:{name:"Validation",selector:"[data-te-validation-init]"},smoothScroll:{name:"SmoothScroll",selector:"a[data-te-smooth-scroll-init]"},lazyLoad:{name:"LazyLoad",selector:"[data-te-lazy-load-init]"},clipboard:{name:"Clipboard",selector:"[data-te-clipboard-init]"},infiniteScroll:{name:"InfiniteScroll",selector:"[data-te-infinite-scroll-init]"},loadingManagement:{name:"LoadingManagement",selector:"[data-te-loading-management-init]"},sticky:{name:"Sticky",selector:"[data-te-sticky-init]"},chart:{name:"Chart",selector:"[data-te-chart]",isToggler:!1,advanced:dM},button:{name:"Button",selector:"[data-te-toggle='button']",isToggler:!0,callback:sM},collapse:{name:"Collapse",selector:"[data-te-collapse-init]",isToggler:!0,callback:lM},dropdown:{name:"Dropdown",selector:"[data-te-dropdown-toggle-ref]",isToggler:!0,callback:nM},modal:{name:"Modal",selector:"[data-te-toggle='modal']",isToggler:!0,callback:oM},ripple:{name:"Ripple",selector:"[data-te-ripple-init]",isToggler:!0,callback:aM},offcanvas:{name:"Offcanvas",selector:"[data-te-offcanvas-toggle]",isToggler:!0,callback:iM},tab:{name:"Tab",selector:"[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",isToggler:!0,callback:rM},tooltip:{name:"Tooltip",selector:"[data-te-toggle='tooltip']",isToggler:!1,callback:uM},popover:{name:"Popover",selector:"[data-te-toggle='popover']",isToggler:!0,callback:cM},lightbox:{name:"Lightbox",selector:"[data-te-lightbox-init]",isToggler:!0,callback:hM},touch:{name:"Touch",selector:"[data-te-touch-init]"}},pM=t=>$s[t.NAME]||null,mM=(t,e)=>{if(!t||!e.allowReinits&&lf.isInited(t.NAME))return;lf.add(t.NAME);const n=pM(t),r=(n==null?void 0:n.isToggler)||!1;if(tM(t),n!=null&&n.advanced){n==null||n.advanced(t,n==null?void 0:n.selector);return}if(r){n==null||n.callback(t,n==null?void 0:n.selector);return}En.find(n==null?void 0:n.selector).forEach(i=>{let s=t.getInstance(i);s||(s=new t(i),n!=null&&n.onInit&&s[n.onInit]())})},gM=(t,e)=>{t.forEach(n=>mM(n,e))},yM={allowReinits:!1,checkOtherImports:!1},vM=(t,e={})=>{e={...yM,...e};const n=Object.keys($s).map(r=>{if(document.querySelector($s[r].selector)){const i=t[$s[r].name];return!i&&!lf.isInited(r)&&e.checkOtherImports&&console.warn(`Please import ${$s[r].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`),i}});gM(n,e)},_M={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},EM=oi(_M),wM=ma(EM),TM=t=>{P.useEffect(()=>{vM({Ripple:Im})},[]);const[e,n]=P.useState(t.rate);P.useEffect(()=>{$("#card_price").text(e)},[$("#card_sol").text()]);const r=pa(wM,"Course",t.url);return(async()=>{const s=await Em(r);if(s.exists()){console.log(s.data()),$("#card_title").text(Ls(s.data().title)),$("#card_des").text(s.data().des),$("#card_sub").text(Ls(s.data().sub)),$("#card_lang").text(Ls(s.data().lang)),$("#card_level").text(Ls(s.data().eduLvl)),$("#card_sol").text(s.data().sol),$("#card_uploadTime").text(new Date(s.data().uploadTime.seconds*1e3).toLocaleString()),s.data().mode==="both"?$("#card_mode").text("Video and notes"):s.data().mode==="video"?$("#card_mode").text("Video"):$("#card_mode").text("Notes");const o=()=>{let a="";for(let l in s.data().tag)a+=`<span class="me-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-info-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none bg-secondary-600">${s.data().tag[l]}</span>`;$("#card_tag").html(a)};o(),$("#card_tag").html(o),getUser(uid).then(a=>{console.log(a)}).catch(a=>{console.log("Error fetching user data: ",a)})}else console.log("No such document for Course with link",t.url)})(),m.jsxs(m.Fragment,{children:[m.jsx("h1",{className:"mb-2",children:"Course"}),m.jsxs("p",{className:"mb-6 text-base text-neutral-500 dark:text-neutral-300",children:["ID: ",t.url]}),m.jsxs("div",{className:"flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-6xl md:flex-row",children:[m.jsx("img",{className:"h-96 w-full rounded-t-lg object-cover md:!rounded-none md:!rounded-l-lg h-auto",src:"https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg",alt:"Course thumbnail"}),m.jsxs("div",{className:"flex flex-col justify-start max-w-3xl p-6",children:[m.jsx("h5",{className:"mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50",id:"card_title"}),m.jsxs("p",{className:"mb-4 text-sm text-warning-600 dark:text-warning-400",children:["* ",m.jsx("span",{id:"card_mode"})," included."]}),m.jsx("p",{className:"mb-2 text-base text-neutral-600 dark:text-neutral-200",id:"card_des"}),m.jsx("div",{className:"mb-4 gap-4",id:"card_tag"}),m.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-xs mb-4",children:[m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Subject"})}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",id:"card_sub"}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Tutor"})}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",id:"card_tutor"}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Level"})}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",id:"card_level"}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Language"})}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",id:"card_lang"}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Price"})}),m.jsxs("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:[m.jsx("span",{id:"card_sol",children:"0.00"})," SOL / ",m.jsx("span",{id:"card_price",children:m.jsx($1,{sol:$("#card_sol").text()})}),' USD"']}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",children:m.jsx("b",{children:"Enrollment"})}),m.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-300",id:"card_enroll",children:"0"})]}),m.jsxs("p",{className:"text-xs text-neutral-500 dark:text-neutral-300 mb-4",children:["Uploaded on ",m.jsx("span",{id:"card_uploadTime"})]}),m.jsxs("div",{className:"w-full grid grid-cols-2 gap-2",children:[m.jsx("button",{type:"button",className:"inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"Enroll"}),m.jsx("button",{type:"button",className:"inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:"+ Add to Wishlist"})]})]})]})]})},IM=t=>e=>{const n=xu();return m.jsx(t,{...e,navigate:n})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebasestorage.googleapis.com",Z1="storageBucket",SM=2*60*1e3,AM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends Mt{constructor(e,n,r=0){super(Ch(e),`Firebase Storage: ${n} (${Ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function Ch(t){return"storage/"+t}function Sm(){const t="An unknown error occurred, please check the error payload for server response.";return new we(Ee.UNKNOWN,t)}function CM(t){return new we(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(Ee.UNAUTHENTICATED,t)}function PM(){return new we(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kM(t){return new we(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NM(){return new we(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xM(){return new we(Ee.CANCELED,"User canceled the upload/download.")}function DM(t){return new we(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function bM(t){return new we(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OM(){return new we(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Z1+"' property when initializing the app?")}function LM(){return new we(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MM(t){return new we(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function uf(t){return new we(Ee.INVALID_ARGUMENT,t)}function eI(){return new we(Ee.APP_DELETED,"The Firebase app was deleted.")}function VM(t){return new we(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function io(t,e){return new we(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Rs(t){throw new we(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(r.path==="")return r;throw bM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},E=n===J1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${E}/${i}/${T}`,"i"),f=[{regex:a,indices:l,postModify:s},{regex:y,indices:_,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<f.length;v++){const w=f[v],I=w.regex.exec(e);if(I){const R=I[w.indices.bucket];let k=I[w.indices.path];k||(k=""),r=new yt(R,k),w.postModify(r);break}}if(r==null)throw DM(e);return r}}class UM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(y,l())},T)}function d(){s&&clearTimeout(s)}function y(T,...g){if(u){d();return}if(T){d(),c.call(null,T,...g);return}if(l()||o){d(),c.call(null,T,...g);return}r<64&&(r*=2);let f;a===1?(a=2,f=0):f=(r+Math.random())*1e3,h(f)}let _=!1;function E(T){_||(_=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function $M(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(t){return t!==void 0}function jM(t){return typeof t=="object"&&!Array.isArray(t)}function tI(t){return typeof t=="string"||t instanceof String}function Rv(t){return Am()&&t instanceof Blob}function Am(){return typeof Blob<"u"&&!GC()}function Pv(t,e,n,r){if(r<e)throw uf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw uf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function KM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($r||($r={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$r.NO_ERROR,l=s.getStatus();if(!a||HM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===$r.ABORT;r(!1,new Wa(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Wa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());BM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Sm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?eI():xM();o(l)}else{const l=NM();o(l)}};this.canceled_?n(!1,new Wa(!1,null,!0)):this.backoffId_=FM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$M(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XM(t,e,n,r,i,s,o=!0){const a=KM(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return QM(u,e),GM(u,n),qM(u,s),YM(u,r),new WM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZM(...t){const e=JM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Am())return new Blob(t);throw new we(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function e4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){if(typeof atob>"u")throw MM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rh{constructor(e,n){this.data=e,this.contentType=n||null}}function n4(t,e){switch(t){case Zt.RAW:return new Rh(nI(e));case Zt.BASE64:case Zt.BASE64URL:return new Rh(rI(t,e));case Zt.DATA_URL:return new Rh(i4(e),s4(e))}throw Sm()}function nI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function r4(t){let e;try{e=decodeURIComponent(t)}catch{throw io(Zt.DATA_URL,"Malformed data URL.")}return nI(e)}function rI(t,e){switch(t){case Zt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw io(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw io(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=t4(e)}catch(i){throw i.message.includes("polyfill")?i:io(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class iI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw io(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=o4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function i4(t){const e=new iI(t);return e.base64?rI(Zt.BASE64,e.rest):r4(e.rest)}function s4(t){return new iI(t).contentType}function o4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){let r=0,i="";Rv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rv(this.data_)){const r=this.data_,i=e4(r,e,n);return i===null?null:new Kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Kn(r,!0)}}static getBlob(...e){if(Am()){const n=e.map(r=>r instanceof Kn?r.data_:r);return new Kn(ZM.apply(null,n))}else{const n=e.map(o=>tI(o)?n4(Zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t){let e;try{e=JSON.parse(t)}catch{return null}return jM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function u4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function sI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(t,e){return e}class Ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||c4}}let Ga=null;function h4(t){return!tI(t)||t.length<2?t:sI(t)}function d4(){if(Ga)return Ga;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(s,o){return h4(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,t.push(i),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),Ga=t,Ga}function f4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function p4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return f4(r,t),r}function m4(t,e,n){const r=a4(e);return r===null?null:p4(t,r,n)}function g4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class y4{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){if(!t)throw Sm()}function _4(t,e){function n(r,i){const s=m4(t,i,e);return v4(s!==null),s}return n}function E4(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=PM():i=RM():n.getStatus()===402?i=CM(t.bucket):n.getStatus()===403?i=kM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function w4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function T4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=w4(null,e)),r}function I4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let f="";for(let v=0;v<2;v++)f=f+Math.random().toString().slice(2);return f}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=T4(e,r,i),c=g4(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",y=Kn.getBlob(h,r,d);if(y===null)throw LM();const _={name:u.fullPath},E=zM(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,p=new y4(E,T,_4(t,n),g);return p.urlParams=_,p.headers=o,p.body=y.uploadData(),p.errorHandler=E4(e),p}class S4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class A4 extends S4{initXhr(){this.xhr_.responseType="text"}}function C4(){return new A4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ei(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sI(this._location.path)}get storage(){return this._service}get parent(){const e=l4(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VM(e)}}function R4(t,e,n){t._throwIfRoot("uploadBytes");const r=I4(t.storage,t._location,d4(),new Kn(e,!0),n);return t.storage.makeRequestWithTokens(r,C4).then(i=>({metadata:i,ref:t}))}function P4(t,e){const n=u4(t._location.path,e),r=new yt(t._location.bucket,n);return new ei(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t){return/^[A-Za-z]+:\/\//.test(t)}function N4(t,e){return new ei(t,e)}function oI(t,e){if(t instanceof Cm){const n=t;if(n._bucket==null)throw OM();const r=new ei(n,n._bucket);return e!=null?oI(r,e):r}else return e!==void 0?P4(t,e):t}function x4(t,e){if(e&&k4(e)){if(t instanceof Cm)return N4(t,e);throw uf("To use ref(service, url), the first argument must be a Storage instance.")}else return oI(t,e)}function kv(t,e){const n=e==null?void 0:e[Z1];return n==null?null:yt.makeFromBucketSpec(n,t)}function D4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:hE(i,t.app.options.projectId))}class Cm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=J1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SM,this._maxUploadRetryTime=AM,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=kv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=kv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ei(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UM(eI());{const o=XM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Nv="@firebase/storage",xv="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="storage";function Ps(t,e,n){return t=Re(t),R4(t,e,n)}function Ph(t,e){return t=Re(t),x4(t,e)}function b4(t=Lu(),e){t=Re(t);const r=yr(t,aI).getImmediate({identifier:e}),i=lE("storage");return i&&O4(r,...i),r}function O4(t,e,n,r={}){D4(t,e,n,r)}function L4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Cm(n,r,i,e,si)}function M4(){Ht(new Ot(aI,L4,"PUBLIC").setMultipleInstances(!0)),ft(Nv,xv,""),ft(Nv,xv,"esm2017")}M4();const V4={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},lI=oi(V4),U4=ma(lI),kh=b4(lI);class F4 extends P.Component{constructor(n){super(n);te(this,"select",n=>{$(".button_choice").attr("class","button_choice"),$(`#b_${n}`).attr("class","button_choice text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"),this.setState({choice:n}),n==="both"?($("#div_video").css("display","inherit"),$("#div_notes").css("display","inherit")):($(".div_upload").css("display","none"),$(`#div_${n}`).css("display","inherit"))});te(this,"handleKeyPress",n=>{n.preventDefault(),n.key=="Enter"&&this.uploadConfirm()});te(this,"handleTagKeyPress",n=>{n.key=="Enter"&&(this.setState({tag:this.state.tag.add($("#t_tag").val())}),$("#t_tag").val(""))});te(this,"removeTag",n=>{this.state.tag.delete(n),this.setState({tag:this.state.tag})});te(this,"changeSOL",()=>{this.setState({sol:$("#t_sol").val()})});te(this,"uploadConfirm",async()=>{const{navigate:n}=this.props;if($("#t_title").val()!==""&&$("#t_des").val()!==""&&$("#c_level").val()!==""&&$("#t_sub").val()!==""&&$("#t_lang").val()!==""&&$("#t_sol").val()!=="")if($("#div_tag").html()!=="")if(this.state.choice)if(this.state.thumbnailUpload&&(this.state.choice==="video"&&this.state.videoUpload||this.state.choice==="notes"&&this.state.notesUpload||this.state.choice==="both"&&this.state.videoUpload&&this.state.notesUpload)){if(confirm(`Make sure all information are correct. You cannot edit any part anymore after material is uploaded.

Do not reload the page before uploading process is not done.`)){$("#main").css("opacity",.5),$("#main").css("pointerEvents","none"),$("#main").attr("disabled",!0);const r=await hL(XO(U4,"Course"),{title:$("#t_title").val(),des:$("#t_des").val().split(`
`),eduLvl:$("#c_level").val(),sub:$("#t_sub").val(),lang:$("#t_lang").val(),sol:parseFloat($("#t_sol").val()),tag:[...this.state.tag],userUID:this.state.user.uid,mode:this.state.choice,uploadTime:fL(),view:0});console.log("Document written with ID: ",r.id);let i=Ph(kh,`${r.id}/thumbnail.jpg`);await Ps(i,this.state.thumbnailUpload).then(()=>{console.log("Uploaded thumbnail file!")});let s=Ph(kh,`${r.id}/video.mp4`),o=Ph(kh,`${r.id}/notes.pdf`);switch(this.state.choice){case"video":await Ps(s,this.state.videoUpload).then(()=>{console.log("Uploaded video file!")});break;case"notes":await Ps(o,this.state.notesUpload).then(()=>{console.log("Uploaded pdf file!")});break;case"both":await Ps(s,this.state.videoUpload).then(()=>{console.log("Uploaded video file!")}),await Ps(o,this.state.notesUpload).then(()=>{console.log("Uploaded pdf file!")});break}$("#main").css("opacity",1),$("#main").css("pointerEvents","inherit"),$("#main").attr("disabled",!1),await alert("Upload success!"),n("/freeflow-edu/")}}else alert("Please upload required image / video / notes.");else alert("Please select either to upload video / notes / both.");else alert("Please add some tags! ");else alert("Please fill in all information required.")});this.state={user:n.state.user,credential:n.state.credential,choice:null,tag:new Set,thumbnailUpload:null,videoUpload:null,notesUpload:null,sol:1}}render(){console.log(this.state);const n=this.state.tag.size===0?[]:[...this.state.tag].map((r,i)=>m.jsxs("span",{id:"tag_"+r,children:[r,m.jsx("button",{onClick:()=>this.removeTag(r),children:"x"})]},r));return m.jsxs("section",{id:"main",children:[m.jsx("h1",{children:"Upload"}),m.jsxs("div",{className:"div_general",children:[m.jsxs("label",{children:[" Course Title:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"t_tile",id:"t_title",placeholder:"Trigonometry",required:!0})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Course Description:",m.jsx("textarea",{name:"t_des",id:"t_des",placeholder:"Write something here...",required:!0})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Level:",m.jsxs("select",{name:"",id:"c_level",required:!0,children:[m.jsx("option",{value:"",children:"-- Please select --"}),m.jsx("option",{value:"primary",children:"Primary School"}),m.jsx("option",{value:"secondary",children:"Secondary School"}),m.jsx("option",{value:"undergraduate",children:"Undergraduate"}),m.jsx("option",{value:"postgraduate",children:"Postgraduate"}),m.jsx("option",{value:"workplace",children:"Workplace"})]})]}),m.jsxs("label",{children:[" Subject:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"t_sub",id:"t_sub",placeholder:"Mathematics",required:!0})]}),m.jsxs("label",{children:[" Language:",m.jsx("input",{onKeyUp:this.handleKeyPress,type:"text",name:"t_lang",id:"t_lang",placeholder:"English",required:!0})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Sell for $:",m.jsx("input",{onKeyUp:this.handleKeyPress,onChange:this.changeSOL,type:"number",name:"t_sol",id:"t_sol",placeholder:"0.00",required:!0})," Solana",m.jsx("br",{}),this.state.sol," SOL = ",m.jsx($1,{sol:this.state.sol})," USD"]}),m.jsx("br",{}),m.jsxs("label",{children:[" Tag:",m.jsx("input",{onKeyUp:this.handleTagKeyPress,type:"text",name:"t_tag",id:"t_tag",placeholder:"Write some keywords here..."})]}),m.jsx("div",{id:"div_tag",children:n}),m.jsx("br",{}),m.jsxs("label",{children:[" Author:",m.jsx("input",{type:"text",name:"t_author_uid",id:"t_author_uid",value:this.state.user.email,disabled:!0})]}),m.jsx("br",{}),m.jsxs("label",{children:[" Thumbnail:",m.jsx("input",{type:"file",onChange:r=>this.setState({thumbnailUpload:r.target.files[0]}),name:"vid",id:"f_thumbnail",accept:".jpg"})]})]}),m.jsx("br",{}),m.jsx("hr",{}),m.jsx("br",{}),m.jsxs("div",{children:[m.jsx("button",{className:"button_choice",id:"b_video",onClick:()=>this.select("video"),children:"Video"}),m.jsx("button",{className:"button_choice",id:"b_notes",onClick:()=>this.select("notes"),children:"Notes"}),m.jsx("button",{className:"button_choice",id:"b_both",onClick:()=>this.select("both"),children:"Both"})]}),m.jsxs("div",{id:"div_video",className:"div_upload",style:{display:"none"},children:[m.jsx("h1",{children:"Video"}),m.jsxs("label",{children:["Upload Video:",m.jsx("input",{type:"file",onChange:r=>this.setState({videoUpload:r.target.files[0]}),name:"vid",id:"f_video",accept:".mp4"})]}),m.jsx("br",{})]}),m.jsxs("div",{id:"div_notes",className:"div_upload",style:{display:"none"},children:[m.jsx("h1",{children:"Notes"}),m.jsxs("label",{children:["Upload Notes:",m.jsx("input",{type:"file",onChange:r=>this.setState({notesUpload:r.target.files[0]}),name:"vid",id:"f_notes",accept:".pdf"})]}),m.jsx("br",{})]}),m.jsx("br",{}),m.jsx("hr",{}),m.jsx("br",{}),m.jsx("button",{onClick:this.uploadConfirm,children:"Upload"})]})}}const $4=IM(F4);class Dv extends P.Component{constructor(n){super(n);te(this,"auth",Ur());te(this,"logout",()=>{WN(this.auth).then(n=>{this.setState({user:null}),this.props.updateUserState(null)}).catch(n=>{console.log(n)}),localStorage.clear()});this.updateUserState=n.updateUserState,this.state=n.state,this.setState=this.setState.bind(this)}render(){return console.log(this.state),this.state?m.jsxs(m.Fragment,{children:[m.jsx("h3",{children:"Are you sure you want to sign out? "}),m.jsx("p",{children:"This action is undone and you will be required to login again."}),m.jsx("button",{onClick:this.logout,children:"Sign out"}),m.jsx("br",{}),m.jsx(Wr,{to:"/freeflow-edu/",children:"Back Home"})]}):m.jsx(Ys,{to:"/freeflow-edu/"})}}const bv=({setUser:t})=>m.jsxs(m.Fragment,{children:[m.jsx("h1",{children:"404: Page Not Found"}),m.jsx("p",{children:"The specified file was not found on this website. Please check the URL for mistakes and try again."}),m.jsx(Wr,{to:"/freeflow-edu/",children:"Back Home"})]});const B4={apiKey:"AIzaSyAj-GUmYIXPUpAoFSAmQaiQ7to35EqqgvI",authDomain:"freeflow-edu.firebaseapp.com",projectId:"freeflow-edu",storageBucket:"freeflow-edu.appspot.com",messagingSenderId:"452838619706",appId:"1:452838619706:web:b09c97c4f716734f699303",measurementId:"G-VMWMHD4L2L"},j4=oi(B4);Bk(j4);class z4 extends P.Component{constructor(n){super(n);te(this,"auth",Ur());te(this,"updateUserState",n=>{this.setState({user:n}),console.log(this.state)});te(this,"checkIfWalletIsConnected",async()=>{var n;if((n=window==null?void 0:window.solana)!=null&&n.isPhantom){console.log("Phantom wallet found!");const r=await window.solana.connect({onlyIfTrusted:!0});return console.log("Connected with Public Key:",r.publicKey.toString()),this.setState({walletAddress:r.publicKey.toString()}),!0}else return console.log("Solana object not found! Get a Phantom Wallet 👻"),!1});te(this,"connectWallet",async()=>{const{solana:n}=window;if(n){const r=await n.connect().catch(()=>{alert("Fail to connect Wallet. Have you login to your Phantom wallet?")});console.log("Connected with Public Key:",r.publicKey.toString()),this.setState({walletAddress:r.publicKey.toString()})}else alert("You do not have a Phantom wallet. Please install it from your web browser extension store.")});te(this,"disconnectWallet",async()=>{solana&&(await solana.disconnect(),console.log("Disconnected with Public Key:",this.state.walletAddress),this.setState({walletAddress:null}))});te(this,"renderNotConnectedContainer",()=>m.jsxs("button",{className:"cta-button connect-wallet-button",onClick:this.state.walletAddress?this.disconnectWallet:this.connectWallet,children:[m.jsx("img",{src:"https://3632261023-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVOiF6Zqit57q_hxJYp%2Ficon%2FU7kNZ4ygz4QW1rUwOuTT%2FWhite%20Ghost_docs_nu.svg?alt=media&token=447b91f6-db6d-4791-902d-35d75c19c3d1",alt:"Phantom",width:"64px"}),this.state.walletAddress?"Disconnect from Wallet "+this.state.walletAddress:"Connect to Wallet"]}));this.state={user:JSON.parse(localStorage.getItem("user")),walletAddress:null}}componentDidMount(){this.state.user!==null&&JSON.parse(localStorage.getItem("user"))&&(console.log(JSON.parse(localStorage.getItem("user"))),this.setState({user:JSON.parse(localStorage.getItem("user"))})),this.checkIfWalletIsConnected()}render(){return console.log(this.state),this.state.user||JSON.parse(localStorage.getItem("user"))?(console.log(this.state.user),m.jsx(zg,{children:m.jsx(Bg,{children:m.jsxs(et,{exact:!0,path:"/freeflow-edu/",element:m.jsx(yL,{state:this.state,renderNotConnectedContainer:this.renderNotConnectedContainer}),children:[m.jsx(et,{index:!0,active:!0,element:m.jsx(NL,{state:this.state})}),m.jsx(et,{path:"profile",element:m.jsx(xL,{})}),m.jsx(et,{path:"sign-out",element:m.jsx(Dv,{state:this.state,updateUserState:this.updateUserState})}),m.jsx(et,{path:"register",element:m.jsx(Tv,{state:this.state,updateUserState:this.updateUserState})}),m.jsx(et,{path:"course",element:m.jsx(TM,{url:"SwCgPZXZQN32PHS7wfOI",state:this.state})}),m.jsx(et,{path:"upload",element:m.jsx($4,{state:this.state})}),m.jsx(et,{path:"first-time-user",element:m.jsx(CL,{state:this.state})}),m.jsx(et,{path:"*",element:m.jsx(bv,{})})]})})})):(console.log("Session has expired. Login again."),m.jsx(zg,{children:m.jsx(Bg,{children:m.jsxs(et,{exact:!0,path:"/freeflow-edu/",element:m.jsx(rD,{}),children:[m.jsx(et,{index:!0,active:!0,element:m.jsx(_L,{state:this.state,updateUserState:this.updateUserState})}),m.jsx(et,{path:"register",element:m.jsx(Tv,{state:this.state,updateUserState:this.updateUserState})}),m.jsx(et,{path:"sign-out",element:m.jsx(Dv,{})}),m.jsx(et,{path:"*",element:m.jsx(bv,{})})]})})}))}}Nh.createRoot(document.getElementById("root")).render(m.jsx(zv.StrictMode,{children:m.jsx(z4,{})}));
