"use strict";(self["webpackChunkvue_black_dashboard"]=self["webpackChunkvue_black_dashboard"]||[]).push([[504],{6743:function(e,t,n){n.d(t,{Am:function(){return R},FA:function(){return O},I9:function(){return D},Ku:function(){return W},T9:function(){return m},Uj:function(){return c},XA:function(){return v},ZQ:function(){return y},bD:function(){return x},cY:function(){return g},dM:function(){return S},eX:function(){return T},g:function(){return E},hp:function(){return L},jZ:function(){return _},lT:function(){return I},lV:function(){return w},p9:function(){return H},sr:function(){return b},tD:function(){return $},u:function(){return u},zW:function(){return k}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],a=e[n++],s=e[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,a=o?e[i+1]:0,s=i+2<e.length,c=s?e[i+2]:0,u=t>>2,l=(3&t)<<4|a>>4;let h=(15&a)<<2|c>>6,d=63&c;s||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==u||null==h)throw new a;const d=t<<2|s>>4;if(r.push(d),64!==u){const e=s<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return s(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"en",BASE_URL:"/dashboard/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */
/**
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
 */
function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function S(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */const C="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?A(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`,s=new E(r,a,n);return s}}function A(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
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
 */function x(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(N(n)&&N(o)){if(!x(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function R(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function D(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function L(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function $(e,t){const n=new M(e,t);return n.subscribe.bind(n)}class M{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=F),void 0===r.error&&(r.error=F),void 0===r.complete&&(r.complete=F);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function F(){}
/**
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
 */
/**
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
 */
const U=1e3,V=2,B=144e5,z=.5;function H(e,t=U,n=V){const r=t*Math.pow(n,e),i=Math.round(z*r*(Math.random()-.5)*2);return Math.min(B,r+i)}
/**
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
 */
/**
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
 */
function W(e){return e&&e._delegate?e._delegate:e}},1656:function(e,t,n){function r(e,t,n,r,i,o,a,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{A:function(){return r}})},3723:function(e,t,n){n.d(t,{k:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var o=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return a(o,e)}))):(s(e,o,n),navigator.serviceWorker.ready.then((function(e){o("ready",e)})).catch((function(e){return a(o,e)})))}))}function a(e,t){navigator.onLine||e("offline"),e("error",t)}function s(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return a(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):s(e,t,n)})).catch((function(e){return a(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return a(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},4765:function(e,t){
/*!
 * vue-i18n v8.28.2 
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
var n=["compactDisplay","currency","currencyDisplay","currencySign","localeMatcher","notation","numberingSystem","signDisplay","style","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"],r=["dateStyle","timeStyle","calendar","localeMatcher","hour12","hourCycle","timeZone","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function i(e,t){"undefined"!==typeof console&&(console.warn("[vue-i18n] "+e),t&&console.warn(t.stack))}function o(e,t){"undefined"!==typeof console&&(console.error("[vue-i18n] "+e),t&&console.error(t.stack))}var a=Array.isArray;function s(e){return null!==e&&"object"===typeof e}function c(e){return"boolean"===typeof e}function u(e){return"string"===typeof e}var l=Object.prototype.toString,h="[object Object]";function d(e){return l.call(e)===h}function f(e){return null===e||void 0===e}function p(e){return"function"===typeof e}function m(){var e=[],t=arguments.length;while(t--)e[t]=arguments[t];var n=null,r=null;return 1===e.length?s(e[0])||a(e[0])?r=e[0]:"string"===typeof e[0]&&(n=e[0]):2===e.length&&("string"===typeof e[0]&&(n=e[0]),(s(e[1])||a(e[1]))&&(r=e[1])),{locale:n,params:r}}function v(e){return JSON.parse(JSON.stringify(e))}function g(e,t){if(e.delete(t))return e}function y(e){var t=[];return e.forEach((function(e){return t.push(e)})),t}function _(e,t){return!!~e.indexOf(t)}var b=Object.prototype.hasOwnProperty;function w(e,t){return b.call(e,t)}function I(e){for(var t=arguments,n=Object(e),r=1;r<arguments.length;r++){var i=t[r];if(void 0!==i&&null!==i){var o=void 0;for(o in i)w(i,o)&&(s(i[o])?n[o]=I(n[o],i[o]):n[o]=i[o])}}return n}function k(e,t){if(e===t)return!0;var n=s(e),r=s(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=a(e),o=a(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return k(e,t[n])}));if(i||o)return!1;var c=Object.keys(e),u=Object.keys(t);return c.length===u.length&&c.every((function(n){return k(e[n],t[n])}))}catch(l){return!1}}function T(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function S(e){return null!=e&&Object.keys(e).forEach((function(t){"string"==typeof e[t]&&(e[t]=T(e[t]))})),e}function C(e){e.prototype.hasOwnProperty("$i18n")||Object.defineProperty(e.prototype,"$i18n",{get:function(){return this._i18n}}),e.prototype.$t=function(e){var t=[],n=arguments.length-1;while(n-- >0)t[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[e,r.locale,r._getMessages(),this].concat(t))},e.prototype.$tc=function(e,t){var n=[],r=arguments.length-2;while(r-- >0)n[r]=arguments[r+2];var i=this.$i18n;return i._tc.apply(i,[e,i.locale,i._getMessages(),this,t].concat(n))},e.prototype.$te=function(e,t){var n=this.$i18n;return n._te(e,n.locale,n._getMessages(),t)},e.prototype.$d=function(e){var t,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(t=this.$i18n).d.apply(t,[e].concat(n))},e.prototype.$n=function(e){var t,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(t=this.$i18n).n.apply(t,[e].concat(n))}}function E(e){function t(){this!==this.$root&&this.$options.__INTLIFY_META__&&this.$el&&this.$el.setAttribute("data-intlify",this.$options.__INTLIFY_META__)}return void 0===e&&(e=!1),e?{mounted:t}:{beforeCreate:function(){var e=this.$options;if(e.i18n=e.i18n||(e.__i18nBridge||e.__i18n?{}:null),e.i18n)if(e.i18n instanceof Se){if(e.__i18nBridge||e.__i18n)try{var t=e.i18n&&e.i18n.messages?e.i18n.messages:{},n=e.__i18nBridge||e.__i18n;n.forEach((function(e){t=I(t,JSON.parse(e))})),Object.keys(t).forEach((function(n){e.i18n.mergeLocaleMessage(n,t[n])}))}catch(c){0}this._i18n=e.i18n,this._i18nWatcher=this._i18n.watchI18nData()}else if(d(e.i18n)){var r=this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Se?this.$root.$i18n:null;if(r&&(e.i18n.root=this.$root,e.i18n.formatter=r.formatter,e.i18n.fallbackLocale=r.fallbackLocale,e.i18n.formatFallbackMessages=r.formatFallbackMessages,e.i18n.silentTranslationWarn=r.silentTranslationWarn,e.i18n.silentFallbackWarn=r.silentFallbackWarn,e.i18n.pluralizationRules=r.pluralizationRules,e.i18n.preserveDirectiveContent=r.preserveDirectiveContent),e.__i18nBridge||e.__i18n)try{var i=e.i18n&&e.i18n.messages?e.i18n.messages:{},o=e.__i18nBridge||e.__i18n;o.forEach((function(e){i=I(i,JSON.parse(e))})),e.i18n.messages=i}catch(c){0}var a=e.i18n,s=a.sharedMessages;s&&d(s)&&(e.i18n.messages=I(e.i18n.messages,s)),this._i18n=new Se(e.i18n),this._i18nWatcher=this._i18n.watchI18nData(),(void 0===e.i18n.sync||e.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale()),r&&r.onComponentInstanceCreated(this._i18n)}else 0;else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Se?this._i18n=this.$root.$i18n:e.parent&&e.parent.$i18n&&e.parent.$i18n instanceof Se&&(this._i18n=e.parent.$i18n)},beforeMount:function(){var e=this.$options;e.i18n=e.i18n||(e.__i18nBridge||e.__i18n?{}:null),e.i18n?(e.i18n instanceof Se||d(e.i18n))&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0):(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof Se||e.parent&&e.parent.$i18n&&e.parent.$i18n instanceof Se)&&(this._i18n.subscribeDataChanging(this),this._subscribing=!0)},mounted:t,beforeDestroy:function(){if(this._i18n){var e=this;this.$nextTick((function(){e._subscribing&&(e._i18n.unsubscribeDataChanging(e),delete e._subscribing),e._i18nWatcher&&(e._i18nWatcher(),e._i18n.destroyVM(),delete e._i18nWatcher),e._localeWatcher&&(e._localeWatcher(),delete e._localeWatcher)}))}}}}var O={name:"i18n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(e,t){var n=t.data,r=t.parent,i=t.props,o=t.slots,a=r.$i18n;if(a){var s=i.path,c=i.locale,u=i.places,l=o(),h=a.i(s,c,A(l)||u?P(l.default,u):l),d=i.tag&&!0!==i.tag||!1===i.tag?i.tag:"span";return d?e(d,n,h):h}}};function A(e){var t;for(t in e)if("default"!==t)return!1;return Boolean(t)}function P(e,t){var n=t?x(t):{};if(!e)return n;e=e.filter((function(e){return e.tag||""!==e.text.trim()}));var r=e.every(D);return e.reduce(r?N:R,n)}function x(e){return Array.isArray(e)?e.reduce(R,{}):Object.assign({},e)}function N(e,t){return t.data&&t.data.attrs&&t.data.attrs.place&&(e[t.data.attrs.place]=t),e}function R(e,t,n){return e[n]=t,e}function D(e){return Boolean(e.data&&e.data.attrs&&e.data.attrs.place)}var L,$={name:"i18n-n",functional:!0,props:{tag:{type:[String,Boolean,Object],default:"span"},value:{type:Number,required:!0},format:{type:[String,Object]},locale:{type:String}},render:function(e,t){var r=t.props,i=t.parent,o=t.data,a=i.$i18n;if(!a)return null;var c=null,l=null;u(r.format)?c=r.format:s(r.format)&&(r.format.key&&(c=r.format.key),l=Object.keys(r.format).reduce((function(e,t){var i;return _(n,t)?Object.assign({},e,(i={},i[t]=r.format[t],i)):e}),null));var h=r.locale||a.locale,d=a._ntp(r.value,h,c,l),f=d.map((function(e,t){var n,r=o.scopedSlots&&o.scopedSlots[e.type];return r?r((n={},n[e.type]=e.value,n.index=t,n.parts=d,n)):e.value})),p=r.tag&&!0!==r.tag||!1===r.tag?r.tag:"span";return p?e(p,{attrs:o.attrs,class:o["class"],staticClass:o.staticClass},f):f}};function M(e,t,n){U(e,n)&&B(e,t,n)}function j(e,t,n,r){if(U(e,n)){var i=n.context.$i18n;V(e,n)&&k(t.value,t.oldValue)&&k(e._localeMessage,i.getLocaleMessage(i.locale))||B(e,t,n)}}function F(e,t,n,r){var o=n.context;if(o){var a=n.context.$i18n||{};t.modifiers.preserve||a.preserveDirectiveContent||(e.textContent=""),e._vt=void 0,delete e["_vt"],e._locale=void 0,delete e["_locale"],e._localeMessage=void 0,delete e["_localeMessage"]}else i("Vue instance does not exists in VNode context")}function U(e,t){var n=t.context;return n?!!n.$i18n||(i("VueI18n instance does not exists in Vue instance"),!1):(i("Vue instance does not exists in VNode context"),!1)}function V(e,t){var n=t.context;return e._locale===n.$i18n.locale}function B(e,t,n){var r,o,a=t.value,s=z(a),c=s.path,u=s.locale,l=s.args,h=s.choice;if(c||u||l)if(c){var d=n.context;e._vt=e.textContent=null!=h?(r=d.$i18n).tc.apply(r,[c,h].concat(H(u,l))):(o=d.$i18n).t.apply(o,[c].concat(H(u,l))),e._locale=d.$i18n.locale,e._localeMessage=d.$i18n.getLocaleMessage(d.$i18n.locale)}else i("`path` is required in v-t directive");else i("value type not supported")}function z(e){var t,n,r,i;return u(e)?t=e:d(e)&&(t=e.path,n=e.locale,r=e.args,i=e.choice),{path:t,locale:n,args:r,choice:i}}function H(e,t){var n=[];return e&&n.push(e),t&&(Array.isArray(t)||d(t))&&n.push(t),n}function W(e,t){void 0===t&&(t={bridge:!1}),W.installed=!0,L=e;L.version&&Number(L.version.split(".")[0]);C(L),L.mixin(E(t.bridge)),L.directive("t",{bind:M,update:j,unbind:F}),L.component(O.name,O),L.component($.name,$);var n=L.config.optionMergeStrategies;n.i18n=function(e,t){return void 0===t?e:t}}var q=function(){this._caches=Object.create(null)};q.prototype.interpolate=function(e,t){if(!t)return[e];var n=this._caches[e];return n||(n=X(e),this._caches[e]=n),J(n,t)};var K=/^(?:\d)+/,G=/^(?:\w)+/;function X(e){var t=[],n=0,r="";while(n<e.length){var i=e[n++];if("{"===i){r&&t.push({type:"text",value:r}),r="";var o="";i=e[n++];while(void 0!==i&&"}"!==i)o+=i,i=e[n++];var a="}"===i,s=K.test(o)?"list":a&&G.test(o)?"named":"unknown";t.push({value:o,type:s})}else"%"===i?"{"!==e[n]&&(r+=i):r+=i}return r&&t.push({type:"text",value:r}),t}function J(e,t){var n=[],r=0,i=Array.isArray(t)?"list":s(t)?"named":"unknown";if("unknown"===i)return n;while(r<e.length){var o=e[r];switch(o.type){case"text":n.push(o.value);break;case"list":n.push(t[parseInt(o.value,10)]);break;case"named":"named"===i&&n.push(t[o.value]);break;case"unknown":0;break}r++}return n}var Y=0,Z=1,Q=2,ee=3,te=0,ne=1,re=2,ie=3,oe=4,ae=5,se=6,ce=7,ue=8,le=[];le[te]={ws:[te],ident:[ie,Y],"[":[oe],eof:[ce]},le[ne]={ws:[ne],".":[re],"[":[oe],eof:[ce]},le[re]={ws:[re],ident:[ie,Y],0:[ie,Y],number:[ie,Y]},le[ie]={ident:[ie,Y],0:[ie,Y],number:[ie,Y],ws:[ne,Z],".":[re,Z],"[":[oe,Z],eof:[ce,Z]},le[oe]={"'":[ae,Y],'"':[se,Y],"[":[oe,Q],"]":[ne,ee],eof:ue,else:[oe,Y]},le[ae]={"'":[oe,Y],eof:ue,else:[ae,Y]},le[se]={'"':[oe,Y],eof:ue,else:[se,Y]};var he=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function de(e){return he.test(e)}function fe(e){var t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function pe(e){if(void 0===e||null===e)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"ident";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function me(e){var t=e.trim();return("0"!==e.charAt(0)||!isNaN(e))&&(de(t)?fe(t):"*"+t)}function ve(e){var t,n,r,i,o,a,s,c=[],u=-1,l=te,h=0,d=[];function f(){var t=e[u+1];if(l===ae&&"'"===t||l===se&&'"'===t)return u++,r="\\"+t,d[Y](),!0}d[Z]=function(){void 0!==n&&(c.push(n),n=void 0)},d[Y]=function(){void 0===n?n=r:n+=r},d[Q]=function(){d[Y](),h++},d[ee]=function(){if(h>0)h--,l=oe,d[Y]();else{if(h=0,void 0===n)return!1;if(n=me(n),!1===n)return!1;d[Z]()}};while(null!==l)if(u++,t=e[u],"\\"!==t||!f()){if(i=pe(t),s=le[l],o=s[i]||s["else"]||ue,o===ue)return;if(l=o[0],a=d[o[1]],a&&(r=o[2],r=void 0===r?t:r,!1===a()))return;if(l===ce)return c}}var ge=function(){this._cache=Object.create(null)};ge.prototype.parsePath=function(e){var t=this._cache[e];return t||(t=ve(e),t&&(this._cache[e]=t)),t||[]},ge.prototype.getPathValue=function(e,t){if(!s(e))return null;var n=this.parsePath(t);if(0===n.length)return null;var r=n.length,i=e,o=0;while(o<r){var a=i[n[o]];if(void 0===a||null===a)return null;i=a,o++}return i};var ye,_e=/<\/?[\w\s="/.':;#-\/]+>/,be=/(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g,we=/^@(?:\.([a-zA-Z]+))?:/,Ie=/[()]/g,ke={upper:function(e){return e.toLocaleUpperCase()},lower:function(e){return e.toLocaleLowerCase()},capitalize:function(e){return""+e.charAt(0).toLocaleUpperCase()+e.substr(1)}},Te=new q,Se=function(e){var t=this;void 0===e&&(e={}),!L&&"undefined"!==typeof window&&window.Vue&&W(window.Vue);var n=e.locale||"en-US",r=!1!==e.fallbackLocale&&(e.fallbackLocale||"en-US"),i=e.messages||{},o=e.dateTimeFormats||e.datetimeFormats||{},a=e.numberFormats||{};this._vm=null,this._formatter=e.formatter||Te,this._modifiers=e.modifiers||{},this._missing=e.missing||null,this._root=e.root||null,this._sync=void 0===e.sync||!!e.sync,this._fallbackRoot=void 0===e.fallbackRoot||!!e.fallbackRoot,this._fallbackRootWithEmptyString=void 0===e.fallbackRootWithEmptyString||!!e.fallbackRootWithEmptyString,this._formatFallbackMessages=void 0!==e.formatFallbackMessages&&!!e.formatFallbackMessages,this._silentTranslationWarn=void 0!==e.silentTranslationWarn&&e.silentTranslationWarn,this._silentFallbackWarn=void 0!==e.silentFallbackWarn&&!!e.silentFallbackWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new ge,this._dataListeners=new Set,this._componentInstanceCreatedListener=e.componentInstanceCreatedListener||null,this._preserveDirectiveContent=void 0!==e.preserveDirectiveContent&&!!e.preserveDirectiveContent,this.pluralizationRules=e.pluralizationRules||{},this._warnHtmlInMessage=e.warnHtmlInMessage||"off",this._postTranslation=e.postTranslation||null,this._escapeParameterHtml=e.escapeParameterHtml||!1,"__VUE_I18N_BRIDGE__"in e&&(this.__VUE_I18N_BRIDGE__=e.__VUE_I18N_BRIDGE__),this.getChoiceIndex=function(e,n){var r=Object.getPrototypeOf(t);if(r&&r.getChoiceIndex){var i=r.getChoiceIndex;return i.call(t,e,n)}var o=function(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0};return t.locale in t.pluralizationRules?t.pluralizationRules[t.locale].apply(t,[e,n]):o(e,n)},this._exist=function(e,n){return!(!e||!n)&&(!f(t._path.getPathValue(e,n))||!!e[n])},"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||Object.keys(i).forEach((function(e){t._checkLocaleMessage(e,t._warnHtmlInMessage,i[e])})),this._initVM({locale:n,fallbackLocale:r,messages:i,dateTimeFormats:o,numberFormats:a})},Ce={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},availableLocales:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},formatFallbackMessages:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0},silentFallbackWarn:{configurable:!0},preserveDirectiveContent:{configurable:!0},warnHtmlInMessage:{configurable:!0},postTranslation:{configurable:!0},sync:{configurable:!0}};Se.prototype._checkLocaleMessage=function(e,t,n){var r=[],s=function(e,t,n,r){if(d(n))Object.keys(n).forEach((function(i){var o=n[i];d(o)?(r.push(i),r.push("."),s(e,t,o,r),r.pop(),r.pop()):(r.push(i),s(e,t,o,r),r.pop())}));else if(a(n))n.forEach((function(n,i){d(n)?(r.push("["+i+"]"),r.push("."),s(e,t,n,r),r.pop(),r.pop()):(r.push("["+i+"]"),s(e,t,n,r),r.pop())}));else if(u(n)){var c=_e.test(n);if(c){var l="Detected HTML in message '"+n+"' of keypath '"+r.join("")+"' at '"+t+"'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";"warn"===e?i(l):"error"===e&&o(l)}}};s(t,e,n,r)},Se.prototype._initVM=function(e){var t=L.config.silent;L.config.silent=!0,this._vm=new L({data:e,__VUE18N__INSTANCE__:!0}),L.config.silent=t},Se.prototype.destroyVM=function(){this._vm.$destroy()},Se.prototype.subscribeDataChanging=function(e){this._dataListeners.add(e)},Se.prototype.unsubscribeDataChanging=function(e){g(this._dataListeners,e)},Se.prototype.watchI18nData=function(){var e=this;return this._vm.$watch("$data",(function(){var t=y(e._dataListeners),n=t.length;while(n--)L.nextTick((function(){t[n]&&t[n].$forceUpdate()}))}),{deep:!0})},Se.prototype.watchLocale=function(e){if(e){if(!this.__VUE_I18N_BRIDGE__)return null;var t=this,n=this._vm;return this.vm.$watch("locale",(function(r){n.$set(n,"locale",r),t.__VUE_I18N_BRIDGE__&&e&&(e.locale.value=r),n.$forceUpdate()}),{immediate:!0})}if(!this._sync||!this._root)return null;var r=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){r.$set(r,"locale",e),r.$forceUpdate()}),{immediate:!0})},Se.prototype.onComponentInstanceCreated=function(e){this._componentInstanceCreatedListener&&this._componentInstanceCreatedListener(e,this)},Ce.vm.get=function(){return this._vm},Ce.messages.get=function(){return v(this._getMessages())},Ce.dateTimeFormats.get=function(){return v(this._getDateTimeFormats())},Ce.numberFormats.get=function(){return v(this._getNumberFormats())},Ce.availableLocales.get=function(){return Object.keys(this.messages).sort()},Ce.locale.get=function(){return this._vm.locale},Ce.locale.set=function(e){this._vm.$set(this._vm,"locale",e)},Ce.fallbackLocale.get=function(){return this._vm.fallbackLocale},Ce.fallbackLocale.set=function(e){this._localeChainCache={},this._vm.$set(this._vm,"fallbackLocale",e)},Ce.formatFallbackMessages.get=function(){return this._formatFallbackMessages},Ce.formatFallbackMessages.set=function(e){this._formatFallbackMessages=e},Ce.missing.get=function(){return this._missing},Ce.missing.set=function(e){this._missing=e},Ce.formatter.get=function(){return this._formatter},Ce.formatter.set=function(e){this._formatter=e},Ce.silentTranslationWarn.get=function(){return this._silentTranslationWarn},Ce.silentTranslationWarn.set=function(e){this._silentTranslationWarn=e},Ce.silentFallbackWarn.get=function(){return this._silentFallbackWarn},Ce.silentFallbackWarn.set=function(e){this._silentFallbackWarn=e},Ce.preserveDirectiveContent.get=function(){return this._preserveDirectiveContent},Ce.preserveDirectiveContent.set=function(e){this._preserveDirectiveContent=e},Ce.warnHtmlInMessage.get=function(){return this._warnHtmlInMessage},Ce.warnHtmlInMessage.set=function(e){var t=this,n=this._warnHtmlInMessage;if(this._warnHtmlInMessage=e,n!==e&&("warn"===e||"error"===e)){var r=this._getMessages();Object.keys(r).forEach((function(e){t._checkLocaleMessage(e,t._warnHtmlInMessage,r[e])}))}},Ce.postTranslation.get=function(){return this._postTranslation},Ce.postTranslation.set=function(e){this._postTranslation=e},Ce.sync.get=function(){return this._sync},Ce.sync.set=function(e){this._sync=e},Se.prototype._getMessages=function(){return this._vm.messages},Se.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},Se.prototype._getNumberFormats=function(){return this._vm.numberFormats},Se.prototype._warnDefault=function(e,t,n,r,i,o){if(!f(n))return n;if(this._missing){var a=this._missing.apply(null,[e,t,r,i]);if(u(a))return a}else 0;if(this._formatFallbackMessages){var s=m.apply(void 0,i);return this._render(t,o,s.params,t)}return t},Se.prototype._isFallbackRoot=function(e){return(this._fallbackRootWithEmptyString?!e:f(e))&&!f(this._root)&&this._fallbackRoot},Se.prototype._isSilentFallbackWarn=function(e){return this._silentFallbackWarn instanceof RegExp?this._silentFallbackWarn.test(e):this._silentFallbackWarn},Se.prototype._isSilentFallback=function(e,t){return this._isSilentFallbackWarn(t)&&(this._isFallbackRoot()||e!==this.fallbackLocale)},Se.prototype._isSilentTranslationWarn=function(e){return this._silentTranslationWarn instanceof RegExp?this._silentTranslationWarn.test(e):this._silentTranslationWarn},Se.prototype._interpolate=function(e,t,n,r,i,o,s){if(!t)return null;var c,l=this._path.getPathValue(t,n);if(a(l)||d(l))return l;if(f(l)){if(!d(t))return null;if(c=t[n],!u(c)&&!p(c))return null}else{if(!u(l)&&!p(l))return null;c=l}return u(c)&&(c.indexOf("@:")>=0||c.indexOf("@.")>=0)&&(c=this._link(e,t,c,r,"raw",o,s)),this._render(c,i,o,n)},Se.prototype._link=function(e,t,n,r,i,o,s){var c=n,u=c.match(be);for(var l in u)if(u.hasOwnProperty(l)){var h=u[l],d=h.match(we),f=d[0],p=d[1],m=h.replace(f,"").replace(Ie,"");if(_(s,m))return c;s.push(m);var v=this._interpolate(e,t,m,r,"raw"===i?"string":i,"raw"===i?void 0:o,s);if(this._isFallbackRoot(v)){if(!this._root)throw Error("unexpected error");var g=this._root.$i18n;v=g._translate(g._getMessages(),g.locale,g.fallbackLocale,m,r,i,o)}v=this._warnDefault(e,m,v,r,a(o)?o:[o],i),this._modifiers.hasOwnProperty(p)?v=this._modifiers[p](v):ke.hasOwnProperty(p)&&(v=ke[p](v)),s.pop(),c=v?c.replace(h,v):c}return c},Se.prototype._createMessageContext=function(e,t,n,r){var i=this,o=a(e)?e:[],c=s(e)?e:{},u=function(e){return o[e]},l=function(e){return c[e]},h=this._getMessages(),d=this.locale;return{list:u,named:l,values:e,formatter:t,path:n,messages:h,locale:d,linked:function(e){return i._interpolate(d,h[d]||{},e,null,r,void 0,[e])}}},Se.prototype._render=function(e,t,n,r){if(p(e))return e(this._createMessageContext(n,this._formatter||Te,r,t));var i=this._formatter.interpolate(e,n,r);return i||(i=Te.interpolate(e,n,r)),"string"!==t||u(i)?i:i.join("")},Se.prototype._appendItemToChain=function(e,t,n){var r=!1;return _(e,t)||(r=!0,t&&(r="!"!==t[t.length-1],t=t.replace(/!/g,""),e.push(t),n&&n[t]&&(r=n[t]))),r},Se.prototype._appendLocaleToChain=function(e,t,n){var r,i=t.split("-");do{var o=i.join("-");r=this._appendItemToChain(e,o,n),i.splice(-1,1)}while(i.length&&!0===r);return r},Se.prototype._appendBlockToChain=function(e,t,n){for(var r=!0,i=0;i<t.length&&c(r);i++){var o=t[i];u(o)&&(r=this._appendLocaleToChain(e,o,n))}return r},Se.prototype._getLocaleChain=function(e,t){if(""===e)return[];this._localeChainCache||(this._localeChainCache={});var n=this._localeChainCache[e];if(!n){t||(t=this.fallbackLocale),n=[];var r,i=[e];while(a(i))i=this._appendBlockToChain(n,i,t);r=a(t)?t:s(t)?t["default"]?t["default"]:null:t,i=u(r)?[r]:r,i&&this._appendBlockToChain(n,i,null),this._localeChainCache[e]=n}return n},Se.prototype._translate=function(e,t,n,r,i,o,a){for(var s,c=this._getLocaleChain(t,n),u=0;u<c.length;u++){var l=c[u];if(s=this._interpolate(l,e[l],r,i,o,a,[r]),!f(s))return s}return null},Se.prototype._t=function(e,t,n,r){var i,o=[],a=arguments.length-4;while(a-- >0)o[a]=arguments[a+4];if(!e)return"";var s=m.apply(void 0,o);this._escapeParameterHtml&&(s.params=S(s.params));var c=s.locale||t,u=this._translate(n,c,this.fallbackLocale,e,r,"string",s.params);if(this._isFallbackRoot(u)){if(!this._root)throw Error("unexpected error");return(i=this._root).$t.apply(i,[e].concat(o))}return u=this._warnDefault(c,e,u,r,o,"string"),this._postTranslation&&null!==u&&void 0!==u&&(u=this._postTranslation(u,e)),u},Se.prototype.t=function(e){var t,n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];return(t=this)._t.apply(t,[e,this.locale,this._getMessages(),null].concat(n))},Se.prototype._i=function(e,t,n,r,i){var o=this._translate(n,t,this.fallbackLocale,e,r,"raw",i);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(e,t,i)}return this._warnDefault(t,e,o,r,[i],"raw")},Se.prototype.i=function(e,t,n){return e?(u(t)||(t=this.locale),this._i(e,t,this._getMessages(),null,n)):""},Se.prototype._tc=function(e,t,n,r,i){var o,a=[],s=arguments.length-5;while(s-- >0)a[s]=arguments[s+5];if(!e)return"";void 0===i&&(i=1);var c={count:i,n:i},u=m.apply(void 0,a);return u.params=Object.assign(c,u.params),a=null===u.locale?[u.params]:[u.locale,u.params],this.fetchChoice((o=this)._t.apply(o,[e,t,n,r].concat(a)),i)},Se.prototype.fetchChoice=function(e,t){if(!e||!u(e))return null;var n=e.split("|");return t=this.getChoiceIndex(t,n.length),n[t]?n[t].trim():e},Se.prototype.tc=function(e,t){var n,r=[],i=arguments.length-2;while(i-- >0)r[i]=arguments[i+2];return(n=this)._tc.apply(n,[e,this.locale,this._getMessages(),null,t].concat(r))},Se.prototype._te=function(e,t,n){var r=[],i=arguments.length-3;while(i-- >0)r[i]=arguments[i+3];var o=m.apply(void 0,r).locale||t;return this._exist(n[o],e)},Se.prototype.te=function(e,t){return this._te(e,this.locale,this._getMessages(),t)},Se.prototype.getLocaleMessage=function(e){return v(this._vm.messages[e]||{})},Se.prototype.setLocaleMessage=function(e,t){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(e,this._warnHtmlInMessage,t),this._vm.$set(this._vm.messages,e,t)},Se.prototype.mergeLocaleMessage=function(e,t){"warn"!==this._warnHtmlInMessage&&"error"!==this._warnHtmlInMessage||this._checkLocaleMessage(e,this._warnHtmlInMessage,t),this._vm.$set(this._vm.messages,e,I("undefined"!==typeof this._vm.messages[e]&&Object.keys(this._vm.messages[e]).length?Object.assign({},this._vm.messages[e]):{},t))},Se.prototype.getDateTimeFormat=function(e){return v(this._vm.dateTimeFormats[e]||{})},Se.prototype.setDateTimeFormat=function(e,t){this._vm.$set(this._vm.dateTimeFormats,e,t),this._clearDateTimeFormat(e,t)},Se.prototype.mergeDateTimeFormat=function(e,t){this._vm.$set(this._vm.dateTimeFormats,e,I(this._vm.dateTimeFormats[e]||{},t)),this._clearDateTimeFormat(e,t)},Se.prototype._clearDateTimeFormat=function(e,t){for(var n in t){var r=e+"__"+n;this._dateTimeFormatters.hasOwnProperty(r)&&delete this._dateTimeFormatters[r]}},Se.prototype._localizeDateTime=function(e,t,n,r,i,o){for(var a=t,s=r[a],c=this._getLocaleChain(t,n),u=0;u<c.length;u++){var l=c[u];if(s=r[l],a=l,!f(s)&&!f(s[i]))break}if(f(s)||f(s[i]))return null;var h,d=s[i];if(o)h=new Intl.DateTimeFormat(a,Object.assign({},d,o));else{var p=a+"__"+i;h=this._dateTimeFormatters[p],h||(h=this._dateTimeFormatters[p]=new Intl.DateTimeFormat(a,d))}return h.format(e)},Se.prototype._d=function(e,t,n,r){if(!n){var i=r?new Intl.DateTimeFormat(t,r):new Intl.DateTimeFormat(t);return i.format(e)}var o=this._localizeDateTime(e,t,this.fallbackLocale,this._getDateTimeFormats(),n,r);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(e,n,t)}return o||""},Se.prototype.d=function(e){var t=[],n=arguments.length-1;while(n-- >0)t[n]=arguments[n+1];var i=this.locale,o=null,a=null;return 1===t.length?(u(t[0])?o=t[0]:s(t[0])&&(t[0].locale&&(i=t[0].locale),t[0].key&&(o=t[0].key)),a=Object.keys(t[0]).reduce((function(e,n){var i;return _(r,n)?Object.assign({},e,(i={},i[n]=t[0][n],i)):e}),null)):2===t.length&&(u(t[0])&&(o=t[0]),u(t[1])&&(i=t[1])),this._d(e,i,o,a)},Se.prototype.getNumberFormat=function(e){return v(this._vm.numberFormats[e]||{})},Se.prototype.setNumberFormat=function(e,t){this._vm.$set(this._vm.numberFormats,e,t),this._clearNumberFormat(e,t)},Se.prototype.mergeNumberFormat=function(e,t){this._vm.$set(this._vm.numberFormats,e,I(this._vm.numberFormats[e]||{},t)),this._clearNumberFormat(e,t)},Se.prototype._clearNumberFormat=function(e,t){for(var n in t){var r=e+"__"+n;this._numberFormatters.hasOwnProperty(r)&&delete this._numberFormatters[r]}},Se.prototype._getNumberFormatter=function(e,t,n,r,i,o){for(var a=t,s=r[a],c=this._getLocaleChain(t,n),u=0;u<c.length;u++){var l=c[u];if(s=r[l],a=l,!f(s)&&!f(s[i]))break}if(f(s)||f(s[i]))return null;var h,d=s[i];if(o)h=new Intl.NumberFormat(a,Object.assign({},d,o));else{var p=a+"__"+i;h=this._numberFormatters[p],h||(h=this._numberFormatters[p]=new Intl.NumberFormat(a,d))}return h},Se.prototype._n=function(e,t,n,r){if(!Se.availabilities.numberFormat)return"";if(!n){var i=r?new Intl.NumberFormat(t,r):new Intl.NumberFormat(t);return i.format(e)}var o=this._getNumberFormatter(e,t,this.fallbackLocale,this._getNumberFormats(),n,r),a=o&&o.format(e);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(e,Object.assign({},{key:n,locale:t},r))}return a||""},Se.prototype.n=function(e){var t=[],r=arguments.length-1;while(r-- >0)t[r]=arguments[r+1];var i=this.locale,o=null,a=null;return 1===t.length?u(t[0])?o=t[0]:s(t[0])&&(t[0].locale&&(i=t[0].locale),t[0].key&&(o=t[0].key),a=Object.keys(t[0]).reduce((function(e,r){var i;return _(n,r)?Object.assign({},e,(i={},i[r]=t[0][r],i)):e}),null)):2===t.length&&(u(t[0])&&(o=t[0]),u(t[1])&&(i=t[1])),this._n(e,i,o,a)},Se.prototype._ntp=function(e,t,n,r){if(!Se.availabilities.numberFormat)return[];if(!n){var i=r?new Intl.NumberFormat(t,r):new Intl.NumberFormat(t);return i.formatToParts(e)}var o=this._getNumberFormatter(e,t,this.fallbackLocale,this._getNumberFormats(),n,r),a=o&&o.formatToParts(e);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n._ntp(e,t,n,r)}return a||[]},Object.defineProperties(Se.prototype,Ce),Object.defineProperty(Se,"availabilities",{get:function(){if(!ye){var e="undefined"!==typeof Intl;ye={dateTimeFormat:e&&"undefined"!==typeof Intl.DateTimeFormat,numberFormat:e&&"undefined"!==typeof Intl.NumberFormat}}return ye}}),Se.install=W,Se.version="8.28.2",t.A=Se},9959:function(e,t,n){var r="undefined"!==typeof window,i=r&&navigator.connection,o=r&&(!i||-1===(i.effectiveType||"").indexOf("2g")&&!i.saveData),a=r&&window.IntersectionObserver,s={};function c(e){if(r){var t=document.createElement("link");return t.relList&&t.relList.supports&&t.relList.supports(e)}}function u(e){return new Promise((function(t,n){var r=document.createElement("link");r.rel="prefetch",r.href=e,r.addEventListener("load",t),r.addEventListener("error",n),document.head.appendChild(r)}))}function l(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,r.withCredentials=!0),r.addEventListener("load",(function(){200===r.status?t():n()})),r.send()}))}function h(e){return self.fetch?fetch(e,{credentials:"include"}):l(e)}var d=c("prefetch")?u:l;function f(e,t){if(o&&!s[e])return(t?h:d)(e).then((function(){s[e]=!0}))}function p(e,t){void 0===t&&(t={});var n=t.componentName;void 0===n&&(n="RouterLink");var i=t.prefetch;void 0===i&&(i=!0);var s=a&&new window.IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target._linkPrefetch()}))})),c=r&&window.requestIdleCallback||function(e,t){var n=t.timeout;void 0===n&&(n=1);var r=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})}),n)},u=e.component("RouterLink")||e.component("router-link");var l={name:n,extends:u,props:{prefetch:{type:Boolean,default:i},prefetchFiles:{type:Array},timeout:{type:Number,default:2e3}},mounted:function(){this.prefetch&&s&&o&&c(this.observe,{timeout:this.timeout})},beforeDestroy:function(){this.unobserve()},methods:{observe:function(){s.observe(this.$el),this.$el._linkPrefetch=this.linkPrefetch,this._linkObserved=!0},unobserve:function(){this._linkObserved&&s.unobserve(this.$el)},getComponents:function(){return this.$router.getMatchedComponents(this.to).filter((function(e){return"function"===typeof e&&void 0===e.cid}))},linkPrefetch:function(){var e=this.$router.resolve(this.to),t=e.route;if(!t.meta.__prefetched){if(t.meta.__prefetched=!0,!1!==t.meta.prefetch)for(var n=this.getComponents(),r=0,i=n;r<i.length;r+=1){var o=i[r];this.$emit("prefetch",this.to),o()}"function"===typeof t.meta.prefetch&&t.meta.prefetch(t);var a=(this.prefetchFiles||[]).concat(t.meta.prefetchFiles||[]);if(a.length>0)for(var s=0,c=a;s<c.length;s+=1){var u=c[s];f(u)}this.unobserve()}}}};e.component(l.name,l)}t.Ay=p},173:function(e,t,n){function r(e,t){for(var n in t)e[n]=t[n];return e}n.d(t,{Ay:function(){return It}});var i=/[!'()*]/g,o=function(e){return"%"+e.charCodeAt(0).toString(16)},a=/%2C/g,s=function(e){return encodeURIComponent(e).replace(i,o).replace(a,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var r,i=n||h;try{r=i(e||"")}catch(s){r={}}for(var o in t){var a=t[o];r[o]=Array.isArray(a)?a.map(l):l(a)}return r}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=c(n.shift()),i=n.length>0?c(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return s(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(s(t)):r.push(s(t)+"="+s(e)))})),r.join("&")}return s(t)+"="+s(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,r){var i=r&&r.options.stringifyQuery,o=t.query||{};try{o=m(o)}catch(s){}var a={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:o,params:t.params||{},fullPath:y(t,i),matched:e?g(e):[]};return n&&(a.redirectedFrom=y(n,i)),Object.freeze(a)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var v=p(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var o=t||d;return(n||"/")+o(r)+i}function _(e,t,n){return t===v?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&b(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&b(e.query,t.query)&&b(e.params,t.params))))}function b(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var o=e[n],a=r[i];if(a!==n)return!1;var s=t[n];return null==o||null==s?o===s:"object"===typeof o&&"object"===typeof s?b(o,s):String(o)===String(s)}))}function w(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function k(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],o=n.enteredCbs[r];if(i&&o){delete n.enteredCbs[r];for(var a=0;a<o.length;a++)i._isBeingDestroyed||o[a](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,i=t.children,o=t.parent,a=t.data;a.routerView=!0;var s=o.$createElement,c=n.name,u=o.$route,l=o._routerViewCache||(o._routerViewCache={}),h=0,d=!1;while(o&&o._routerRoot!==o){var f=o.$vnode?o.$vnode.data:{};f.routerView&&h++,f.keepAlive&&o._directInactive&&o._inactive&&(d=!0),o=o.$parent}if(a.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&S(m,a,p.route,p.configProps),s(m,a,i)):s()}var v=u.matched[h],g=v&&v.components[c];if(!v||!g)return l[c]=null,s();l[c]={component:g},a.registerRouteInstance=function(e,t){var n=v.instances[c];(t&&n!==e||!t&&n===e)&&(v.instances[c]=t)},(a.hook||(a.hook={})).prepatch=function(e,t){v.instances[c]=t.componentInstance},a.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==v.instances[c]&&(v.instances[c]=e.componentInstance),k(u)};var y=v.props&&v.props[c];return y&&(r(l[c],{route:u,configProps:y}),S(g,a,u,y)),s(g,a,i)}};function S(e,t,n,i){var o=t.props=C(n,i);if(o){o=t.props=r({},o);var a=t.attrs=t.attrs||{};for(var s in o)e.props&&s in e.props||(a[s]=o[s],delete o[s])}}function C(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function E(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var o=e.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];".."===s?i.pop():"."!==s&&i.push(s)}return""!==i[0]&&i.unshift(""),i.join("/")}function O(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var P=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},x=J,N=M,R=j,D=V,L=X,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,o=0,a="",s=t&&t.delimiter||"/";while(null!=(n=$.exec(e))){var c=n[0],u=n[1],l=n.index;if(a+=e.slice(o,l),o=l+c.length,u)a+=u[1];else{var h=e[o],d=n[2],f=n[3],p=n[4],m=n[5],v=n[6],g=n[7];a&&(r.push(a),a="");var y=null!=d&&null!=h&&h!==d,_="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||s,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:w,optional:b,repeat:_,partial:y,asterisk:!!g,pattern:I?z(I):g?".*":"[^"+B(w)+"]+?"})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function j(e,t){return V(M(e,t),t)}function F(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function V(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",W(t)));return function(t,r){for(var i="",o=t||{},a=r||{},s=a.pretty?F:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=o[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(P(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=s(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):s(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function H(e,t){return e.keys=t,e}function W(e){return e&&e.sensitive?"":"i"}function q(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(J(e[i],t,n).source);var o=new RegExp("(?:"+r.join("|")+")",W(n));return H(o,t)}function G(e,t,n){return X(M(e,n),t,n)}function X(e,t,n){P(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,o="",a=0;a<e.length;a++){var s=e[a];if("string"===typeof s)o+=B(s);else{var c=B(s.prefix),u="(?:"+s.pattern+")";t.push(s),s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}var l=B(n.delimiter||"/"),h=o.slice(-l.length)===l;return r||(o=(h?o.slice(0,-l.length):o)+"(?:"+l+"(?=$))?"),o+=i?"$":r&&h?"":"(?="+l+"|$)",H(new RegExp("^"+o,W(n)),t)}function J(e,t,n){return P(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?q(e,t):P(e)?K(e,t,n):G(e,t,n)}x.parse=N,x.compile=R,x.tokensToFunction=D,x.tokensToRegExp=L;var Y=Object.create(null);function Z(e,t,n){t=t||{};try{var r=Y[e]||(Y[e]=x.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function Q(e,t,n,i){var o="string"===typeof e?{path:e}:e;if(o._normalized)return o;if(o.name){o=r({},e);var a=o.params;return a&&"object"===typeof a&&(o.params=r({},a)),o}if(!o.path&&o.params&&t){o=r({},o),o._normalized=!0;var s=r(r({},t.params),o.params);if(t.name)o.name=t.name,o.params=s;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;o.path=Z(c,s,"path "+t.path)}else 0;return o}var l=O(o.path||""),h=t&&t.path||"/",d=l.path?E(l.path,h,n||o.append):h,f=u(l.query,o.query,i&&i.options.parseQuery),p=o.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],re=function(){},ie={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,i=this.$route,o=n.resolve(this.to,i,this.append),a=o.location,s=o.route,c=o.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,v=null==this.exactActiveClass?f:this.exactActiveClass,g=s.redirectedFrom?p(null,Q(s.redirectedFrom),null,n):s;u[v]=_(i,g,this.exactPath),u[m]=this.exact||this.exactPath?u[v]:w(i,g);var y=u[v]?this.ariaCurrentValue:null,b=function(e){oe(e)&&(t.replace?n.replace(a,re):n.push(a,re))},I={click:oe};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=b})):I[this.event]=b;var k={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:s,navigate:b,isActive:u[m],isExactActive:u[v]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)k.on=I,k.attrs={href:c,"aria-current":y};else{var S=ae(this.$slots.default);if(S){S.isStatic=!1;var C=S.data=r({},S.data);for(var E in C.on=C.on||{},C.on){var O=C.on[E];E in I&&(C.on[E]=Array.isArray(O)?O:[O])}for(var A in I)A in C.on?C.on[A].push(I[A]):C.on[A]=b;var P=S.data.attrs=r({},S.data.attrs);P.href=c,P["aria-current"]=y}else k.on=I}return e(this.tag,k,this.$slots.default)}};function oe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ae(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=ae(t.children)))return t}}function se(e){if(!se.installed||ee!==e){se.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",T),e.component("RouterLink",ie);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ce="undefined"!==typeof window;function ue(e,t,n,r,i){var o=t||[],a=n||Object.create(null),s=r||Object.create(null);e.forEach((function(e){le(o,a,s,e,i)}));for(var c=0,u=o.length;c<u;c++)"*"===o[c]&&(o.push(o.splice(c,1)[0]),u--,c--);return{pathList:o,pathMap:a,nameMap:s}}function le(e,t,n,r,i,o){var a=r.path,s=r.name;var c=r.pathToRegexpOptions||{},u=de(a,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:he(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:i,matchAs:o,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=o?A(o+"/"+r.path):void 0;le(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};le(e,t,n,p,i,l.path||"/")}s&&(n[s]||(n[s]=l))}function he(e,t){var n=x(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),r=n.pathList,i=n.pathMap,o=n.nameMap;function a(e){ue(e,r,i,o)}function s(e,t){var n="object"!==typeof e?o[e]:void 0;ue([t||e],r,i,o,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,o,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,a){var s=Q(e,n,!1,t),c=s.name;if(c){var u=o[c];if(!u)return d(null,s);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof s.params&&(s.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in s.params)&&l.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=Z(u.path,s.params,'named route "'+c+'"'),d(u,s,a)}if(s.path){s.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(pe(m.regex,s.path,s.params))return d(m,s,a)}}return d(null,s)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(p(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var a=i,s=a.name,c=a.path,l=n.query,h=n.hash,f=n.params;if(l=a.hasOwnProperty("query")?a.query:l,h=a.hasOwnProperty("hash")?a.hash:h,f=a.hasOwnProperty("params")?a.params:f,s){o[s];return u({_normalized:!0,name:s,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),v=Z(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:v,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=Z(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var o=i.matched,a=o[o.length-1];return t.params=i.params,d(a,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,r,t)}return{match:u,addRoute:s,getRoutes:c,addRoutes:a}}function pe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,o=r.length;i<o;++i){var a=e.keys[i-1];a&&(n[a.name||"pathMatch"]="string"===typeof r[i]?c(r[i]):r[i])}return!0}function me(e,t){return E(e,t.parent?t.parent.path:"/",!0)}var ve=ce&&window.performance&&window.performance.now?window.performance:Date;function ge(){return ve.now().toFixed(3)}var ye=ge();function _e(){return ye}function be(e){return ye=e}var we=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=r({},window.history.state);return n.key=_e(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Se),function(){window.removeEventListener("popstate",Se)}}function ke(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var o=Ce(),a=i.call(e,t,n,r?o:null);a&&("function"===typeof a.then?a.then((function(e){Re(e,o)})).catch((function(e){0})):Re(a,o))}))}}function Te(){var e=_e();e&&(we[e]={x:window.pageXOffset,y:window.pageYOffset})}function Se(e){Te(),e.state&&e.state.key&&be(e.state.key)}function Ce(){var e=_e();if(e)return we[e]}function Ee(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Oe(e){return xe(e.x)||xe(e.y)}function Ae(e){return{x:xe(e.x)?e.x:window.pageXOffset,y:xe(e.y)?e.y:window.pageYOffset}}function Pe(e){return{x:xe(e.x)?e.x:0,y:xe(e.y)?e.y:0}}function xe(e){return"number"===typeof e}var Ne=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Ne.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=Pe(i),t=Ee(r,i)}else Oe(e)&&(t=Ae(e))}else n&&Oe(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var De=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Le(e,t){Te();var n=window.history;try{if(t){var i=r({},n.state);i.key=_e(),n.replaceState(i,"",e)}else n.pushState({key:be(ge())},"",e)}catch(o){window.location[t?"replace":"assign"](e)}}function $e(e){Le(e,!0)}var Me={redirected:2,aborted:4,cancelled:8,duplicated:16};function je(e,t){return Be(e,t,Me.redirected,'Redirected when going from "'+e.fullPath+'" to "'+He(t)+'" via a navigation guard.')}function Fe(e,t){var n=Be(e,t,Me.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Ue(e,t){return Be(e,t,Me.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ve(e,t){return Be(e,t,Me.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function Be(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var ze=["params","query","hash"];function He(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function We(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function qe(e,t){return We(e)&&e._isRouter&&(null==t||e.type===t)}function Ke(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}function Ge(e){return function(t,n,r){var i=!1,o=0,a=null;Xe(e,(function(e,t,n,s){if("function"===typeof e&&void 0===e.cid){i=!0,o++;var c,u=Qe((function(t){Ze(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[s]=t,o--,o<=0&&r()})),l=Qe((function(e){var t="Failed to resolve async component "+s+": "+e;a||(a=We(e)?e:new Error(t),r(a))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Xe(e,t){return Je(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Je(e){return Array.prototype.concat.apply([],e)}var Ye="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ze(e){return e.__esModule||Ye&&"Module"===e[Symbol.toStringTag]}function Qe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function rt(e,t,n,r){var i=Xe(e,(function(e,r,i,o){var a=it(e,t);if(a)return Array.isArray(a)?a.map((function(e){return n(e,r,i,o)})):n(a,r,i,o)}));return Je(r?i.reverse():i)}function it(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function ot(e){return rt(e,"beforeRouteLeave",st,!0)}function at(e){return rt(e,"beforeRouteUpdate",st)}function st(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return rt(e,"beforeRouteEnter",(function(e,t,n,r){return ut(e,n,r)}))}function ut(e,t,n){return function(r,i,o){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),o(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(a){throw this.errorCbs.forEach((function(e){e(a)})),a}var o=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,o)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(qe(e,Me.redirected)&&o===v||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var o=function(e){!qe(e)&&We(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},a=e.matched.length-1,s=i.matched.length-1;if(_(e,i)&&a===s&&e.matched[a]===i.matched[s])return this.ensureURL(),e.hash&&ke(this.router,i,e,!1),o(Fe(i,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(ot(l),this.router.beforeHooks,at(u),h.map((function(e){return e.beforeEnter})),Ge(h)),f=function(t,n){if(r.pending!==e)return o(Ue(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),o(Ve(i,e))):We(t)?(r.ensureURL(!0),o(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(o(je(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(a){o(a)}};Ke(d,f,(function(){var n=ct(h),a=n.concat(r.router.resolveHooks);Ke(a,f,(function(){if(r.pending!==e)return o(Ue(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){k(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=v,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var n=e.current,i=ht(e.base);e.current===v&&i===e._startLocation||e.transitionTo(i,(function(e){r&&ke(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){Le(A(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){$e(A(r.base+e.fullPath)),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Le(t):$e(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(A(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,r){e.call(this,t,n),r&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=De&&n;r&&this.listeners.push(Ie());var i=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){r&&ke(e.router,n,t,!0),De||yt(n.fullPath)}))},o=De?"popstate":"hashchange";window.addEventListener(o,i),this.listeners.push((function(){window.removeEventListener(o,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,o=i.current;this.transitionTo(e,(function(e){yt(e.fullPath),ke(r.router,e,o,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?gt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function vt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){De?Le(vt(e)):window.location.hash=e}function yt(e){De?$e(vt(e)):window.location.replace(vt(e))}var _t=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){qe(e,Me.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),bt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!De&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new _t(this,e.base);break;default:0}},wt={currentRoute:{configurable:!0}};bt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},wt.currentRoute.get=function(){return this.history&&this.history.current},bt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var r=function(e){var r=n.current,i=t.options.scrollBehavior,o=De&&i;o&&"fullPath"in e&&ke(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},bt.prototype.beforeEach=function(e){return kt(this.beforeHooks,e)},bt.prototype.beforeResolve=function(e){return kt(this.resolveHooks,e)},bt.prototype.afterEach=function(e){return kt(this.afterHooks,e)},bt.prototype.onReady=function(e,t){this.history.onReady(e,t)},bt.prototype.onError=function(e){this.history.onError(e)},bt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},bt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},bt.prototype.go=function(e){this.history.go(e)},bt.prototype.back=function(){this.go(-1)},bt.prototype.forward=function(){this.go(1)},bt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},bt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=Q(e,t,n,this),i=this.match(r,t),o=i.redirectedFrom||i.fullPath,a=this.history.base,s=Tt(a,o,this.mode);return{location:r,route:i,href:s,normalizedTo:r,resolved:i}},bt.prototype.getRoutes=function(){return this.matcher.getRoutes()},bt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},bt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(bt.prototype,wt);var It=bt;function kt(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tt(e,t,n){var r="hash"===n?"#"+t:t;return e?A(e+"/"+r):r}bt.install=se,bt.version="3.6.5",bt.isNavigationFailure=qe,bt.NavigationFailureType=Me,bt.START_LOCATION=v,ce&&window.Vue&&window.Vue.use(bt)},8313:function(e,t,n){n.d(t,{AV:function(){return i},ZQ:function(){return c},jS:function(){return l}});
/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
var r={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(e){var t=this.duration.enter?this.duration.enter:this.duration;e.style.animationDuration=t+"ms";var n=this.delay.enter?this.delay.enter:this.delay;e.style.animationDelay=n+"ms",this.setStyles(e)},cleanUpStyles:function(e){var t=this;Object.keys(this.styles).forEach((function(n){var r=t.styles[n];r&&(e.style[n]="")})),e.style.animationDuration="",e.style.animationDelay=""},beforeLeave:function(e){var t=this.duration.leave?this.duration.leave:this.duration;e.style.animationDuration=t+"ms";var n=this.delay.leave?this.delay.leave:this.delay;e.style.animationDelay=n+"ms",this.setStyles(e)},leave:function(e){this.setAbsolutePosition(e)},setStyles:function(e){var t=this;this.setTransformOrigin(e),Object.keys(this.styles).forEach((function(n){var r=t.styles[n];r&&(e.style[n]=r)}))},setAbsolutePosition:function(e){return this.group&&(e.style.position="absolute"),this},setTransformOrigin:function(e){return this.origin&&(e.style.transformOrigin=this.origin),this}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[r]};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[r]};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[r]};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[r],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .collapse-move { transition: transform .3s ease-in-out; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"move-class":"collapse-move"},on:{"before-enter":e.beforeEnter,"after-enter":e.afterEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},"component",e.$attrs,!1),e.$listeners),[e._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[r],methods:{transitionStyle:function(e){void 0===e&&(e=300);var t=e/1e3,n=t+"s height ease-in-out, "+t+"s padding-top ease-in-out, "+t+"s padding-bottom ease-in-out";return n},beforeEnter:function(e){var t=this.duration.enter?this.duration.enter:this.duration;e.style.transition=this.transitionStyle(t),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0,this.setStyles(e)},enter:function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter:function(e){e.style.transition="",e.style.height="",e.style.overflow=e.dataset.oldOverflow},beforeLeave:function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden",this.setStyles(e)},leave:function(e){var t=this.duration.leave?this.duration.leave:this.duration;0!==e.scrollHeight&&(e.style.transition=this.transitionStyle(t),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0),this.setAbsolutePosition(e)},afterLeave:function(e){e.style.transition="",e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[r],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[r],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[r],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[r],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}})();var f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.componentType,e._g(e._b({tag:"component",attrs:{tag:e.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",e.$attrs,!1),e.hooks),[e._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[r],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},p={};function m(e,t){t&&t.components?t.components.forEach((function(t){return e.component(t.name,p[t.name])})):Object.keys(p).forEach((function(t){e.component(t,p[t])}))}p[i.name]=i,p[o.name]=o,p[a.name]=a,p[s.name]=s,p[c.name]=c,p[u.name]=u,p[l.name]=l,p[h.name]=h,p[d.name]=d,p[f.name]=f,"undefined"!==typeof window&&window.Vue&&window.Vue.use({install:m})},5471:function(e,t,n){n.d(t,{Ay:function(){return Jr}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var r=Object.freeze({}),i=Array.isArray;function o(e){return void 0===e||null===e}function a(e){return void 0!==e&&null!==e}function s(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function v(e){return a(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function g(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function y(e){var t=parseFloat(e);return isNaN(t)?e:t}function _(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}_("slot,component",!0);var b=_("key,ref,slot,slot-scope,is");function w(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var r=e.indexOf(t);if(r>-1)return e.splice(r,1)}}var I=Object.prototype.hasOwnProperty;function k(e,t){return I.call(e,t)}function T(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var S=/-(\w)/g,C=T((function(e){return e.replace(S,(function(e,t){return t?t.toUpperCase():""}))})),E=T((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),O=/\B([A-Z])/g,A=T((function(e){return e.replace(O,"-$1").toLowerCase()}));function P(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function x(e,t){return e.bind(t)}var N=Function.prototype.bind?x:P;function R(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function L(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function $(e,t,n){}var M=function(e,t,n){return!1},j=function(e){return e};function F(e,t){if(e===t)return!0;var n=h(e),r=h(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function U(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function V(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function B(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",H=["component","directive","filter"],W=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:$,parsePlatformTagName:j,mustUseProp:M,async:!0,_lifecycleHooks:W},K=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function X(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var J=new RegExp("[^".concat(K.source,".$_\\d]"));function Y(e){if(!J.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Z="__proto__"in{},Q="undefined"!==typeof window,ee=Q&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var ie=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var oe,ae=ee&&ee.match(/firefox\/(\d+)/),se={}.watch,ce=!1;if(Q)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Ya){}var le=function(){return void 0===oe&&(oe=!Q&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),oe},he=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ve(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ge=function(){function e(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ye=function(e){void 0===e&&(e="");var t=new ge;return t.text=e,t.isComment=!0,t};function _e(e){return new ge(void 0,void 0,void 0,String(e))}function be(e){var t=new ge(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var we=0,Ie=[],ke=function(){for(var e=0;e<Ie.length;e++){var t=Ie[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ie.length=0},Te=function(){function e(){this._pending=!1,this.id=we++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ie.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,r=t.length;n<r;n++){var i=t[n];0,i.update()}},e}();Te.target=null;var Se=[];function Ce(e){Se.push(e),Te.target=e}function Ee(){Se.pop(),Te.target=Se[Se.length-1]}var Oe=Array.prototype,Ae=Object.create(Oe),Pe=["push","pop","shift","unshift","splice","sort","reverse"];Pe.forEach((function(e){var t=Oe[e];X(Ae,e,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&a.observeArray(i),a.dep.notify(),o}))}));var xe=Object.getOwnPropertyNames(Ae),Ne={},Re=!0;function De(e){Re=e}var Le={notify:$,depend:$,addSub:$,removeSub:$},$e=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Le:new Te,this.vmCount=0,X(e,"__ob__",this),i(e)){if(!n)if(Z)e.__proto__=Ae;else for(var r=0,o=xe.length;r<o;r++){var a=xe[r];X(e,a,Ae[a])}t||this.observeArray(e)}else{var s=Object.keys(e);for(r=0;r<s.length;r++){a=s[r];je(e,a,Ne,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Me(e[t],!1,this.mock)},e}();function Me(e,t,n){return e&&k(e,"__ob__")&&e.__ob__ instanceof $e?e.__ob__:!Re||!n&&le()||!i(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||We(e)||e instanceof ge?void 0:new $e(e,t,n)}function je(e,t,n,r,o,a){var s=new Te,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Ne&&2!==arguments.length||(n=e[t]);var h=!o&&Me(n,!1,a);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Te.target&&(s.depend(),h&&(h.dep.depend(),i(t)&&Ve(t))),We(t)&&!o?t.value:t},set:function(t){var r=u?u.call(e):n;if(B(r,t)){if(l)l.call(e,t);else{if(u)return;if(!o&&We(r)&&!We(t))return void(r.value=t);n=t}h=!o&&Me(t,!1,a),s.notify()}}}),s}}function Fe(e,t,n){if(!He(e)){var r=e.__ob__;return i(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),r&&!r.shallow&&r.mock&&Me(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(e[t]=n,n)}}function Ue(e,t){if(i(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||He(e)||k(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ve(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),i(t)&&Ve(t)}function Be(e){return ze(e,!0),X(e,"__v_isShallow",!0),e}function ze(e,t){if(!He(e)){Me(e,t,le());0}}function He(e){return!(!e||!e.__v_isReadonly)}function We(e){return!(!e||!0!==e.__v_isRef)}function qe(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(We(e))return e.value;var r=e&&e.__ob__;return r&&r.dep.depend(),e},set:function(e){var r=t[n];We(r)&&!We(e)?r.value=e:t[n]=e}})}var Ke="watcher";"".concat(Ke," callback"),"".concat(Ke," getter"),"".concat(Ke," cleanup");var Ge;var Xe=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ge;try{return Ge=this,e()}finally{Ge=t}}else 0},e.prototype.on=function(){Ge=this},e.prototype.off=function(){Ge=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Je(e,t){void 0===t&&(t=Ge),t&&t.active&&t.effects.push(e)}function Ye(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Ze=T((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function Qe(e,t){function n(){var e=n.fns;if(!i(e))return Xt(e,null,arguments,t,"v-on handler");for(var r=e.slice(),o=0;o<r.length;o++)Xt(r[o],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,r,i,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Ze(c),o(u)||(o(l)?(o(u.fns)&&(u=e[c]=Qe(u,a)),s(h.once)&&(u=e[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)o(e[c])&&(h=Ze(c),r(h.name,t[c],h.capture))}function tt(e,t,n){var r;e instanceof ge&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function c(){n.apply(this,arguments),w(r.fns,c)}o(i)?r=Qe([c]):a(i.fns)&&s(i.merged)?(r=i,r.fns.push(c)):r=Qe([i,c]),r.merged=!0,e[t]=r}function nt(e,t,n){var r=t.options.props;if(!o(r)){var i={},s=e.attrs,c=e.props;if(a(s)||a(c))for(var u in r){var l=A(u);rt(i,c,u,l,!0)||rt(i,s,u,l,!1)}return i}}function rt(e,t,n,r,i){if(a(t)){if(k(t,n))return e[n]=t[n],i||delete t[n],!0;if(k(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function it(e){for(var t=0;t<e.length;t++)if(i(e[t]))return Array.prototype.concat.apply([],e);return e}function ot(e){return u(e)?[_e(e)]:i(e)?st(e):void 0}function at(e){return a(e)&&a(e.text)&&c(e.isComment)}function st(e,t){var n,r,c,l,h=[];for(n=0;n<e.length;n++)r=e[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=st(r,"".concat(t||"","_").concat(n)),at(r[0])&&at(l)&&(h[c]=_e(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?at(l)?h[c]=_e(l.text+r):""!==r&&h.push(_e(r)):at(r)&&at(l)?h[c]=_e(l.text+r.text):(s(e._isVList)&&a(r.tag)&&o(r.key)&&a(t)&&(r.key="__vlist".concat(t,"_").concat(n,"__")),h.push(r)));return h}function ct(e,t){var n,r,o,s,c=null;if(i(e)||"string"===typeof e)for(c=new Array(e.length),n=0,r=e.length;n<r;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(o=Object.keys(e),c=new Array(o.length),n=0,r=o.length;n<r;n++)s=o[n],c[n]=t(e[s],s,n);return a(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=D(D({},r),n)),i=o(n)||(l(t)?t():t)):i=this.$slots[e]||(l(t)?t():t);var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function lt(e){return kr(this.$options,"filters",e,!0)||j}function ht(e,t){return i(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,r,i){var o=q.keyCodes[t]||n;return i&&r&&!q.keyCodes[t]?ht(i,r):o?ht(o,e):r?A(r)!==t:void 0===e}function ft(e,t,n,r,o){if(n)if(h(n)){i(n)&&(n=L(n));var a=void 0,s=function(i){if("class"===i||"style"===i||b(i))a=e;else{var s=e.attrs&&e.attrs.type;a=r||q.mustUseProp(t,s,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=C(i),u=A(i);if(!(c in a)&&!(u in a)&&(a[i]=n[i],o)){var l=e.on||(e.on={});l["update:".concat(i)]=function(e){n[i]=e}}};for(var c in n)s(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),vt(r,"__static__".concat(e),!1)),r}function mt(e,t,n){return vt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function vt(e,t,n){if(i(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&gt(e[r],"".concat(t,"_").concat(r),n);else gt(e,t,n)}function gt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function yt(e,t){if(t)if(f(t)){var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function _t(e,t,n,r){t=t||{$stable:!n};for(var o=0;o<e.length;o++){var a=e[o];i(a)?_t(a,t,n):a&&(a.proxy&&(a.fn.proxy=!0),t[a.key]=a.fn)}return r&&(t.$key=r),t}function bt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function wt(e,t){return"string"===typeof e?t+e:e}function It(e){e._o=mt,e._n=y,e._s=g,e._l=ct,e._t=ut,e._q=F,e._i=U,e._m=pt,e._f=lt,e._k=dt,e._b=ft,e._v=_e,e._e=ye,e._u=_t,e._g=yt,e._d=bt,e._p=wt}function kt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Tt)&&delete n[u];return n}function Tt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function St(e){return e.isComment&&e.asyncFactory}function Ct(e,t,n,i){var o,a=Object.keys(n).length>0,s=t?!!t.$stable:!a,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&i&&i!==r&&c===i.$key&&!a&&!i.$hasNormal)return i;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Et(e,n,u,t[u]))}else o={};for(var l in n)l in o||(o[l]=Ot(n,l));return t&&Object.isExtensible(t)&&(t._normalized=o),X(o,"$stable",s),X(o,"$key",c),X(o,"$hasNormal",a),o}function Et(e,t,n,r){var o=function(){var t=me;ve(e);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:ot(n);var o=n&&n[0];return ve(t),n&&(!o||1===n.length&&o.isComment&&!St(o))?void 0:n};return r.proxy&&Object.defineProperty(t,n,{get:o,enumerable:!0,configurable:!0}),o}function Ot(e,t){return function(){return e[t]}}function At(e){var t=e.$options,n=t.setup;if(n){var r=e._setupContext=Pt(e);ve(e),Ce();var i=Xt(n,null,[e._props||Be({}),r],e,"setup");if(Ee(),ve(),l(i))t.render=i;else if(h(i))if(e._setupState=i,i.__sfc){var o=e._setupProxy={};for(var a in i)"__sfc"!==a&&qe(o,i,a)}else for(var a in i)G(a)||qe(e,i,a);else 0}}function Pt(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};X(t,"_v_attr_proxy",!0),xt(t,e.$attrs,r,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};xt(t,e.$listeners,r,e,"$listeners")}return e._listenersProxy},get slots(){return Rt(e)},emit:N(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return qe(e,t,n)}))}}}function xt(e,t,n,r,i){var o=!1;for(var a in t)a in e?t[a]!==n[a]&&(o=!0):(o=!0,Nt(e,a,r,i));for(var a in e)a in t||(o=!0,delete e[a]);return o}function Nt(e,t,n,r){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[r][t]}})}function Rt(e){return e._slotsProxy||Dt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Dt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Lt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=kt(t._renderChildren,i),e.$scopedSlots=n?Ct(e.$parent,n.data.scopedSlots,e.$slots):r,e._c=function(t,n,r,i){return Ht(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ht(e,t,n,r,i,!0)};var o=n&&n.data;je(e,"$attrs",o&&o.attrs||r,null,!0),je(e,"$listeners",t._parentListeners||r,null,!0)}var $t=null;function Mt(e){It(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,o=n._parentVnode;o&&t._isMounted&&(t.$scopedSlots=Ct(t.$parent,o.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Dt(t._slotsProxy,t.$scopedSlots)),t.$vnode=o;try{ve(t),$t=t,e=r.call(t._renderProxy,t.$createElement)}catch(Ya){Gt(Ya,t,"render"),e=t._vnode}finally{$t=null,ve()}return i(e)&&1===e.length&&(e=e[0]),e instanceof ge||(e=ye()),e.parent=o,e}}function jt(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Ft(e,t,n,r,i){var o=ye();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function Ut(e,t){if(s(e.error)&&a(e.errorComp))return e.errorComp;if(a(e.resolved))return e.resolved;var n=$t;if(n&&a(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),s(e.loading)&&a(e.loadingComp))return e.loadingComp;if(n&&!a(e.owners)){var r=e.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var l=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=V((function(n){e.resolved=jt(n,t),i?r.length=0:l(!0)})),f=V((function(t){a(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(v(p)?o(e.resolved)&&p.then(d,f):v(p.component)&&(p.component.then(d,f),a(p.error)&&(e.errorComp=jt(p.error,t)),a(p.loading)&&(e.loadingComp=jt(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,o(e.resolved)&&o(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),a(p.timeout)&&(u=setTimeout((function(){u=null,o(e.resolved)&&f(null)}),p.timeout)))),i=!1,e.loading?e.loadingComp:e.resolved}}function Vt(e){if(i(e))for(var t=0;t<e.length;t++){var n=e[t];if(a(n)&&(a(n.componentOptions)||St(n)))return n}}var Bt=1,zt=2;function Ht(e,t,n,r,o,a){return(i(n)||u(n))&&(o=r,r=n,n=void 0),s(a)&&(o=zt),Wt(e,t,n,r,o)}function Wt(e,t,n,r,o){if(a(n)&&a(n.__ob__))return ye();if(a(n)&&a(n.is)&&(t=n.is),!t)return ye();var s,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===zt?r=ot(r):o===Bt&&(r=it(r)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||q.getTagNamespace(t),s=q.isReservedTag(t)?new ge(q.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!a(u=kr(e.$options,"components",t))?new ge(t,n,r,void 0,void 0,e):ar(u,n,e,r,t)}else s=ar(t,n,e,r);return i(s)?s:a(s)?(a(c)&&qt(s,c),a(n)&&Kt(n),s):ye()}function qt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),a(e.children))for(var r=0,i=e.children.length;r<i;r++){var c=e.children[r];a(c.tag)&&(o(c.ns)||s(n)&&"svg"!==c.tag)&&qt(c,t,n)}}function Kt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Gt(e,t,n){Ce();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,e,t,n);if(a)return}catch(Ya){Jt(Ya,r,"errorCaptured hook")}}}Jt(e,t,n)}finally{Ee()}}function Xt(e,t,n,r,i){var o;try{o=n?e.apply(t,n):e.call(t),o&&!o._isVue&&v(o)&&!o._handled&&(o.catch((function(e){return Gt(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ya){Gt(Ya,r,i)}return o}function Jt(e,t,n){if(q.errorHandler)try{return q.errorHandler.call(null,e,t,n)}catch(Ya){Ya!==e&&Yt(Ya,null,"config.errorHandler")}Yt(e,t,n)}function Yt(e,t,n){if(!Q||"undefined"===typeof console)throw e;console.error(e)}var Zt,Qt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Zt=function(){rn.then(nn),ie&&setTimeout($)},Qt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Zt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,an=new MutationObserver(nn),sn=document.createTextNode(String(on));an.observe(sn,{characterData:!0}),Zt=function(){on=(on+1)%2,sn.data=String(on)},Qt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Ya){Gt(Ya,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Zt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=me),n)return ln(n,e,t)}}function ln(e,t,n){var r=e.$options;r[t]=mr(r[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,r,o=i(e);if(!(!o&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ge)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(o){n=e.length;while(n--)pn(e[n],t)}else if(We(e))pn(e.value,t);else{r=Object.keys(e),n=r.length;while(n--)pn(e[r[n]],t)}}}var mn,vn=0,gn=function(){function e(e,t,n,r,i){Je(this,Ge&&!Ge._vm?Ge:e?e._scope:void 0),(this.vm=e)&&i&&(e._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++vn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=Y(t),this.getter||(this.getter=$)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;Ce(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Ya){if(!this.user)throw Ya;Gt(Ya,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),Ee(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&w(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&In(e,t)}function _n(e,t){mn.$on(e,t)}function bn(e,t){mn.$off(e,t)}function wn(e,t){var n=mn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function In(e,t,n){mn=e,et(t,n||{},_n,bn,wn,e),mn=void 0}function kn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(i(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(e)){for(var r=0,o=e.length;r<o;r++)n.$off(e[r],t);return n}var a,s=n._events[e];if(!s)return n;if(!t)return n._events[e]=null,n;var c=s.length;while(c--)if(a=s[c],a===t||a.fn===t){s.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(e,'"'),o=0,a=n.length;o<a;o++)Xt(n[o],t,r,t,i)}return t}}var Tn=null;function Sn(e){var t=Tn;return Tn=e,function(){Tn=t}}function Cn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function En(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Sn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var a=n;while(a&&a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode)a.$parent.$el=a.$el,a=a.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||w(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function On(e,t,n){var r;e.$el=t,e.$options.render||(e.$options.render=ye),Rn(e,"beforeMount"),r=function(){e._update(e._render(),n)};var i={before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}};new gn(e,r,$,i,!0),n=!1;var o=e._preWatchers;if(o)for(var a=0;a<o.length;a++)o[a].run();return null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function An(e,t,n,i,o){var a=i.data.scopedSlots,s=e.$scopedSlots,c=!!(a&&!a.$stable||s!==r&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),u=!!(o||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=o;var h=i.data.attrs||r;e._attrsProxy&&xt(e._attrsProxy,h,l.data&&l.data.attrs||r,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||r;var d=e.$options._parentListeners;if(e._listenersProxy&&xt(e._listenersProxy,n,d||r,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,In(e,n,d),t&&e.$options.props){De(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var v=p[m],g=e.$options.props;f[v]=Tr(v,g,t,e)}De(!0),e.$options.propsData=t}u&&(e.$slots=kt(o,i.context),e.$forceUpdate())}function Pn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function xn(e,t){if(t){if(e._directInactive=!1,Pn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)xn(e.$children[n]);Rn(e,"activated")}}function Nn(e,t){if((!t||(e._directInactive=!0,!Pn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t,n,r){void 0===r&&(r=!0),Ce();var i=me;r&&ve(e);var o=e.$options[t],a="".concat(t," hook");if(o)for(var s=0,c=o.length;s<c;s++)Xt(o[s],e,n||null,e,a);e._hasHookEvent&&e.$emit("hook:"+t),r&&ve(i),Ee()}var Dn=[],Ln=[],$n={},Mn=!1,jn=!1,Fn=0;function Un(){Fn=Dn.length=Ln.length=0,$n={},Mn=jn=!1}var Vn=0,Bn=Date.now;if(Q&&!te){var zn=window.performance;zn&&"function"===typeof zn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return zn.now()})}var Hn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Wn(){var e,t;for(Vn=Bn(),jn=!0,Dn.sort(Hn),Fn=0;Fn<Dn.length;Fn++)e=Dn[Fn],e.before&&e.before(),t=e.id,$n[t]=null,e.run();var n=Ln.slice(),r=Dn.slice();Un(),Gn(n),qn(r),ke(),he&&q.devtools&&he.emit("flush")}function qn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function Kn(e){e._inactive=!1,Ln.push(e)}function Gn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,xn(e[t],!0)}function Xn(e){var t=e.id;if(null==$n[t]&&(e!==Te.target||!e.noRecurse)){if($n[t]=!0,jn){var n=Dn.length-1;while(n>Fn&&Dn[n].id>e.id)n--;Dn.splice(n+1,0,e)}else Dn.push(e);Mn||(Mn=!0,cn(Wn))}}function Jn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var r=Ye(e),i=pe?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var a=i[o];Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))}}}function Yn(e){var t=Zn(e.$options.inject,e);t&&(De(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),De(!0))}function Zn(e,t){if(e){for(var n=Object.create(null),r=pe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var a=e[o].from;if(a in t._provided)n[o]=t._provided[a];else if("default"in e[o]){var s=e[o].default;n[o]=l(s)?s.call(t):s}else 0}}return n}}function Qn(e,t,n,o,a){var c,u=this,l=a.options;k(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=s(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||r,this.injections=Zn(l.inject,o),this.slots=function(){return u.$slots||Ct(o,e.scopedSlots,u.$slots=kt(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ct(o,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ct(o,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,r){var a=Ht(c,e,t,n,r,d);return a&&!i(a)&&(a.fnScopeId=l._scopeId,a.fnContext=o),a}:this._c=function(e,t,n,r){return Ht(c,e,t,n,r,d)}}function er(e,t,n,o,s){var c=e.options,u={},l=c.props;if(a(l))for(var h in l)u[h]=Tr(h,l,t||r);else a(n.attrs)&&nr(u,n.attrs),a(n.props)&&nr(u,n.props);var d=new Qn(n,u,s,o,e),f=c.render.call(null,d._c,d);if(f instanceof ge)return tr(f,n,d.parent,c,d);if(i(f)){for(var p=ot(f)||[],m=new Array(p.length),v=0;v<p.length;v++)m[v]=tr(p[v],n,d.parent,c,d);return m}}function tr(e,t,n,r,i){var o=be(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function nr(e,t){for(var n in t)e[C(n)]=t[n]}function rr(e){return e.name||e.__name||e._componentTag}It(Qn.prototype);var ir={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ir.prepatch(n,n)}else{var r=e.componentInstance=sr(e,Tn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;An(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Kn(n):xn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Nn(t,!0):t.$destroy())}},or=Object.keys(ir);function ar(e,t,n,r,i){if(!o(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(o(e.cid)&&(u=e,e=Ut(u,c),void 0===e))return Ft(u,t,n,r,i);t=t||{},Gr(e),a(t.model)&&lr(e.options,t);var l=nt(t,e,i);if(s(e.options.functional))return er(e,l,t,n,r);var d=t.on;if(t.on=t.nativeOn,s(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}cr(t);var p=rr(e.options)||i,m=new ge("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:i,children:r},u);return m}}}function sr(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return a(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function cr(e){for(var t=e.hook||(e.hook={}),n=0;n<or.length;n++){var r=or[n],i=t[r],o=ir[r];i===o||i&&i._merged||(t[r]=i?ur(o,i):o)}}function ur(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function lr(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var o=t.on||(t.on={}),s=o[r],c=t.model.callback;a(s)?(i(s)?-1===s.indexOf(c):s!==c)&&(o[r]=[c].concat(s)):o[r]=c}var hr=$,dr=q.optionMergeStrategies;function fr(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var r,i,o,a=pe?Reflect.ownKeys(t):Object.keys(t),s=0;s<a.length;s++)r=a[s],"__ob__"!==r&&(i=e[r],o=t[r],n&&k(e,r)?i!==o&&f(i)&&f(o)&&fr(i,o):Fe(e,r,o));return e}function pr(e,t,n){return n?function(){var r=l(t)?t.call(n,n):t,i=l(e)?e.call(n,n):e;return r?fr(r,i):i}:t?e?function(){return fr(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function mr(e,t){var n=t?e?e.concat(t):i(t)?t:[t]:e;return n?vr(n):n}function vr(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function gr(e,t,n,r){var i=Object.create(e||null);return t?D(i,t):i}dr.data=function(e,t,n){return n?pr(e,t,n):t&&"function"!==typeof t?e:pr(e,t)},W.forEach((function(e){dr[e]=mr})),H.forEach((function(e){dr[e+"s"]=gr})),dr.watch=function(e,t,n,r){if(e===se&&(e=void 0),t===se&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var o={};for(var a in D(o,e),t){var s=o[a],c=t[a];s&&!i(s)&&(s=[s]),o[a]=s?s.concat(c):i(c)?c:[c]}return o},dr.props=dr.methods=dr.inject=dr.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i},dr.provide=function(e,t){return e?function(){var n=Object.create(null);return fr(n,l(e)?e.call(this):e),t&&fr(n,l(t)?t.call(this):t,!1),n}:t};var yr=function(e,t){return void 0===t?e:t};function _r(e,t){var n=e.props;if(n){var r,o,a,s={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(a=C(o),s[a]={type:null})}else if(f(n))for(var c in n)o=n[c],a=C(c),s[a]=f(o)?o:{type:o};else 0;e.props=s}}function br(e,t){var n=e.inject;if(n){var r=e.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var a in n){var s=n[a];r[a]=f(s)?D({from:a},s):{from:s}}else 0}}function wr(e){var t=e.directives;if(t)for(var n in t){var r=t[n];l(r)&&(t[n]={bind:r,update:r})}}function Ir(e,t,n){if(l(t)&&(t=t.options),_r(t,n),br(t,n),wr(t),!t._base&&(t.extends&&(e=Ir(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ir(e,t.mixins[r],n);var o,a={};for(o in e)s(o);for(o in t)k(e,o)||s(o);function s(r){var i=dr[r]||yr;a[r]=i(e[r],t[r],n,r)}return a}function kr(e,t,n,r){if("string"===typeof n){var i=e[t];if(k(i,n))return i[n];var o=C(n);if(k(i,o))return i[o];var a=E(o);if(k(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Tr(e,t,n,r){var i=t[e],o=!k(n,e),a=n[e],s=Ar(Boolean,i.type);if(s>-1)if(o&&!k(i,"default"))a=!1;else if(""===a||a===A(e)){var c=Ar(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=Sr(r,i,e);var u=Re;De(!0),Me(a),De(u)}return a}function Sr(e,t,n){if(k(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(r)&&"Function"!==Er(t.type)?r.call(e):r}}var Cr=/^\s*function (\w+)/;function Er(e){var t=e&&e.toString().match(Cr);return t?t[1]:""}function Or(e,t){return Er(e)===Er(t)}function Ar(e,t){if(!i(t))return Or(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Or(t[n],e))return n;return-1}var Pr={enumerable:!0,configurable:!0,get:$,set:$};function xr(e,t,n){Pr.get=function(){return this[t][n]},Pr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Pr)}function Nr(e){var t=e.$options;if(t.props&&Rr(e,t.props),At(e),t.methods&&Vr(e,t.methods),t.data)Dr(e);else{var n=Me(e._data={});n&&n.vmCount++}t.computed&&Mr(e,t.computed),t.watch&&t.watch!==se&&Br(e,t.watch)}function Rr(e,t){var n=e.$options.propsData||{},r=e._props=Be({}),i=e.$options._propKeys=[],o=!e.$parent;o||De(!1);var a=function(o){i.push(o);var a=Tr(o,t,n,e);je(r,o,a),o in e||xr(e,"_props",o)};for(var s in t)a(s);De(!0)}function Dr(e){var t=e.$options.data;t=e._data=l(t)?Lr(t,e):t||{},f(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var o=n[i];0,r&&k(r,o)||G(o)||xr(e,"_data",o)}var a=Me(t);a&&a.vmCount++}function Lr(e,t){Ce();try{return e.call(t,t)}catch(Ya){return Gt(Ya,t,"data()"),{}}finally{Ee()}}var $r={lazy:!0};function Mr(e,t){var n=e._computedWatchers=Object.create(null),r=le();for(var i in t){var o=t[i],a=l(o)?o:o.get;0,r||(n[i]=new gn(e,a||$,$,$r)),i in e||jr(e,i,o)}}function jr(e,t,n){var r=!le();l(n)?(Pr.get=r?Fr(t):Ur(n),Pr.set=$):(Pr.get=n.get?r&&!1!==n.cache?Fr(t):Ur(n.get):$,Pr.set=n.set||$),Object.defineProperty(e,t,Pr)}function Fr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Te.target&&t.depend(),t.value}}function Ur(e){return function(){return e.call(this,this)}}function Vr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?$:N(t[n],e)}function Br(e,t){for(var n in t){var r=t[n];if(i(r))for(var o=0;o<r.length;o++)zr(e,n,r[o]);else zr(e,n,r)}}function zr(e,t,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function Hr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Fe,e.prototype.$delete=Ue,e.prototype.$watch=function(e,t,n){var r=this;if(f(t))return zr(r,e,t,n);n=n||{},n.user=!0;var i=new gn(r,e,t,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');Ce(),Xt(t,r,[i.value],r,o),Ee()}return function(){i.teardown()}}}var Wr=0;function qr(e){e.prototype._init=function(e){var t=this;t._uid=Wr++,t._isVue=!0,t.__v_skip=!0,t._scope=new Xe(!0),t._scope._vm=!0,e&&e._isComponent?Kr(t,e):t.$options=Ir(Gr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Cn(t),yn(t),Lt(t),Rn(t,"beforeCreate",void 0,!1),Yn(t),Nr(t),Jn(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Kr(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Gr(e){var t=e.options;if(e.super){var n=Gr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Xr(e);i&&D(e.extendOptions,i),t=e.options=Ir(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Xr(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function Jr(e){this._init(e)}function Yr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Zr(e){e.mixin=function(e){return this.options=Ir(this.options,e),this}}function Qr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=rr(e)||rr(n.options);var a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Ir(n.options,e),a["super"]=n,a.options.props&&ei(a),a.options.computed&&ti(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,H.forEach((function(e){a[e]=n[e]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=D({},a.options),i[r]=a,a}}function ei(e){var t=e.options.props;for(var n in t)xr(e.prototype,"_props",n)}function ti(e){var t=e.options.computed;for(var n in t)jr(e.prototype,n,t[n])}function ni(e){H.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ri(e){return e&&(rr(e.Ctor.options)||e.tag)}function ii(e,t){return i(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function oi(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=a.name;s&&!t(s)&&ai(n,o,r,i)}}}function ai(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,w(n,t)}qr(Jr),Hr(Jr),kn(Jr),En(Jr),Mt(Jr);var si=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:si,exclude:si,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var o=r.tag,a=r.componentInstance,s=r.componentOptions;t[i]={name:ri(s),tag:o,componentInstance:a},n.push(i),this.max&&n.length>parseInt(this.max)&&ai(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)ai(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){oi(e,(function(e){return ii(t,e)}))})),this.$watch("exclude",(function(t){oi(e,(function(e){return!ii(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Vt(e),n=t&&t.componentOptions;if(n){var r=ri(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!ii(o,r))||a&&r&&ii(a,r))return t;var s=this,c=s.cache,u=s.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ui={KeepAlive:ci};function li(e){var t={get:function(){return q}};Object.defineProperty(e,"config",t),e.util={warn:hr,extend:D,mergeOptions:Ir,defineReactive:je},e.set=Fe,e.delete=Ue,e.nextTick=cn,e.observable=function(e){return Me(e),e},e.options=Object.create(null),H.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,D(e.options.components,ui),Yr(e),Zr(e),Qr(e),ni(e)}li(Jr),Object.defineProperty(Jr.prototype,"$isServer",{get:le}),Object.defineProperty(Jr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Jr,"FunctionalRenderContext",{value:Qn}),Jr.version=hn;var hi=_("style,class"),di=_("input,textarea,option,select,progress"),fi=function(e,t,n){return"value"===n&&di(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pi=_("contenteditable,draggable,spellcheck"),mi=_("events,caret,typing,plaintext-only"),vi=function(e,t){return wi(t)||"false"===t?"false":"contenteditable"===e&&mi(t)?t:"true"},gi=_("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",_i=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},bi=function(e){return _i(e)?e.slice(6,e.length):""},wi=function(e){return null==e||!1===e};function Ii(e){var t=e.data,n=e,r=e;while(a(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=ki(r.data,t));while(a(n=n.parent))n&&n.data&&(t=ki(t,n.data));return Ti(t.staticClass,t.class)}function ki(e,t){return{staticClass:Si(e.staticClass,t.staticClass),class:a(e.class)?[e.class,t.class]:t.class}}function Ti(e,t){return a(e)||a(t)?Si(e,Ci(t)):""}function Si(e,t){return e?t?e+" "+t:e:t||""}function Ci(e){return Array.isArray(e)?Ei(e):h(e)?Oi(e):"string"===typeof e?e:""}function Ei(e){for(var t,n="",r=0,i=e.length;r<i;r++)a(t=Ci(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Oi(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ai={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Pi=_("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),xi=_("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ni=function(e){return Pi(e)||xi(e)};function Ri(e){return xi(e)?"svg":"math"===e?"math":void 0}var Di=Object.create(null);function Li(e){if(!Q)return!0;if(Ni(e))return!1;if(e=e.toLowerCase(),null!=Di[e])return Di[e];var t=document.createElement(e);return e.indexOf("-")>-1?Di[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Di[e]=/HTMLUnknownElement/.test(t.toString())}var $i=_("text,number,password,search,email,tel,url");function Mi(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function ji(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Fi(e,t){return document.createElementNS(Ai[e],t)}function Ui(e){return document.createTextNode(e)}function Vi(e){return document.createComment(e)}function Bi(e,t,n){e.insertBefore(t,n)}function zi(e,t){e.removeChild(t)}function Hi(e,t){e.appendChild(t)}function Wi(e){return e.parentNode}function qi(e){return e.nextSibling}function Ki(e){return e.tagName}function Gi(e,t){e.textContent=t}function Xi(e,t){e.setAttribute(t,"")}var Ji=Object.freeze({__proto__:null,createElement:ji,createElementNS:Fi,createTextNode:Ui,createComment:Vi,insertBefore:Bi,removeChild:zi,appendChild:Hi,parentNode:Wi,nextSibling:qi,tagName:Ki,setTextContent:Gi,setStyleScope:Xi}),Yi={create:function(e,t){Zi(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Zi(e,!0),Zi(t))},destroy:function(e){Zi(e,!0)}};function Zi(e,t){var n=e.data.ref;if(a(n)){var r=e.context,o=e.componentInstance||e.elm,s=t?null:o,c=t?void 0:o;if(l(n))Xt(n,r,[s],r,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=We(n),f=r.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?i(p)&&w(p,o):i(p)?p.includes(o)||p.push(o):h?(f[n]=[o],Qi(r,n,f[n])):n.value=[o]}else if(h){if(t&&f[n]!==o)return;f[n]=c,Qi(r,n,s)}else if(d){if(t&&n.value!==o)return;n.value=s}else 0}}}function Qi(e,t,n){var r=e._setupState;r&&k(r,t)&&(We(r[t])?r[t].value=n:r[t]=n)}var eo=new ge("",{},[]),to=["create","activate","update","remove","destroy"];function no(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&a(e.data)===a(t.data)&&ro(e,t)||s(e.isAsyncPlaceholder)&&o(t.asyncFactory.error))}function ro(e,t){if("input"!==e.tag)return!0;var n,r=a(n=e.data)&&a(n=n.attrs)&&n.type,i=a(n=t.data)&&a(n=n.attrs)&&n.type;return r===i||$i(r)&&$i(i)}function io(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,a(i)&&(o[i]=r);return o}function oo(e){var t,n,r={},c=e.modules,l=e.nodeOps;for(t=0;t<to.length;++t)for(r[to[t]]=[],n=0;n<c.length;++n)a(c[n][to[t]])&&r[to[t]].push(c[n][to[t]]);function h(e){return new ge(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);a(t)&&l.removeChild(t,e)}function p(e,t,n,r,i,o,c){if(a(e.elm)&&a(o)&&(e=o[c]=be(e)),e.isRootInsert=!i,!m(e,t,n,r)){var u=e.data,h=e.children,d=e.tag;a(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),k(e),b(e,h,t),a(u)&&I(e,t),y(n,e.elm,r)):s(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,r)):(e.elm=l.createTextNode(e.text),y(n,e.elm,r))}}function m(e,t,n,r){var i=e.data;if(a(i)){var o=a(e.componentInstance)&&i.keepAlive;if(a(i=i.hook)&&a(i=i.init)&&i(e,!1),a(e.componentInstance))return v(e,t),y(n,e.elm,r),s(o)&&g(e,t,n,r),!0}}function v(e,t){a(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,w(e)?(I(e,t),k(e)):(Zi(e),t.push(e))}function g(e,t,n,i){var o,s=e;while(s.componentInstance)if(s=s.componentInstance._vnode,a(o=s.data)&&a(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](eo,s);t.push(s);break}y(n,e.elm,i)}function y(e,t,n){a(e)&&(a(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function b(e,t,n){if(i(t)){0;for(var r=0;r<t.length;++r)p(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function w(e){while(e.componentInstance)e=e.componentInstance._vnode;return a(e.tag)}function I(e,n){for(var i=0;i<r.create.length;++i)r.create[i](eo,e);t=e.data.hook,a(t)&&(a(t.create)&&t.create(eo,e),a(t.insert)&&n.push(e))}function k(e){var t;if(a(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)a(t=n.context)&&a(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}a(t=Tn)&&t!==e.context&&t!==e.fnContext&&a(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function T(e,t,n,r,i,o){for(;r<=i;++r)p(n[r],o,e,t,!1,n,r)}function S(e){var t,n,i=e.data;if(a(i))for(a(t=i.hook)&&a(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(a(t=e.children))for(n=0;n<e.children.length;++n)S(e.children[n])}function C(e,t,n){for(;t<=n;++t){var r=e[t];a(r)&&(a(r.tag)?(E(r),S(r)):f(r.elm))}}function E(e,t){if(a(t)||a(e.data)){var n,i=r.remove.length+1;for(a(t)?t.listeners+=i:t=d(e.elm,i),a(n=e.componentInstance)&&a(n=n._vnode)&&a(n.data)&&E(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);a(n=e.data.hook)&&a(n=n.remove)?n(e,t):t()}else f(e.elm)}function O(e,t,n,r,i){var s,c,u,h,d=0,f=0,m=t.length-1,v=t[0],g=t[m],y=n.length-1,_=n[0],b=n[y],w=!i;while(d<=m&&f<=y)o(v)?v=t[++d]:o(g)?g=t[--m]:no(v,_)?(P(v,_,r,n,f),v=t[++d],_=n[++f]):no(g,b)?(P(g,b,r,n,y),g=t[--m],b=n[--y]):no(v,b)?(P(v,b,r,n,y),w&&l.insertBefore(e,v.elm,l.nextSibling(g.elm)),v=t[++d],b=n[--y]):no(g,_)?(P(g,_,r,n,f),w&&l.insertBefore(e,g.elm,v.elm),g=t[--m],_=n[++f]):(o(s)&&(s=io(t,d,m)),c=a(_.key)?s[_.key]:A(_,t,d,m),o(c)?p(_,r,e,v.elm,!1,n,f):(u=t[c],no(u,_)?(P(u,_,r,n,f),t[c]=void 0,w&&l.insertBefore(e,u.elm,v.elm)):p(_,r,e,v.elm,!1,n,f)),_=n[++f]);d>m?(h=o(n[y+1])?null:n[y+1].elm,T(e,h,n,f,y,r)):f>y&&C(t,d,m)}function A(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(a(o)&&no(e,o))return i}}function P(e,t,n,i,c,u){if(e!==t){a(t.elm)&&a(i)&&(t=i[c]=be(t));var h=t.elm=e.elm;if(s(e.isAsyncPlaceholder))a(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(s(t.isStatic)&&s(e.isStatic)&&t.key===e.key&&(s(t.isCloned)||s(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;a(f)&&a(d=f.hook)&&a(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(a(f)&&w(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);a(d=f.hook)&&a(d=d.update)&&d(e,t)}o(t.text)?a(p)&&a(m)?p!==m&&O(h,p,m,n,u):a(m)?(a(e.text)&&l.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):a(p)?C(p,0,p.length-1):a(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),a(f)&&a(d=f.hook)&&a(d=d.postpatch)&&d(e,t)}}}function x(e,t,n){if(s(n)&&a(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var N=_("attrs,class,staticClass,staticStyle,key");function R(e,t,n,r){var i,o=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,s(t.isComment)&&a(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(a(c)&&(a(i=c.hook)&&a(i=i.init)&&i(t,!0),a(i=t.componentInstance)))return v(t,n),!0;if(a(o)){if(a(u))if(e.hasChildNodes())if(a(i=c)&&a(i=i.domProps)&&a(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(t,u,n);if(a(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,I(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,i){if(!o(t)){var c=!1,u=[];if(o(e))c=!0,p(t,u);else{var d=a(e.nodeType);if(!d&&no(e,t))P(e,t,u,null,null,i);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),s(n)&&R(e,t,u))return x(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),a(t.parent)){var v=t.parent,g=w(t);while(v){for(var y=0;y<r.destroy.length;++y)r.destroy[y](v);if(v.elm=t.elm,g){for(var _=0;_<r.create.length;++_)r.create[_](eo,v);var b=v.data.hook.insert;if(b.merged)for(var I=1;I<b.fns.length;I++)b.fns[I]()}else Zi(v);v=v.parent}}a(m)?C([e],0,0):a(e.tag)&&S(e)}}return x(t,u,c),t.elm}a(e)&&S(e)}}var ao={create:so,update:so,destroy:function(e){so(e,eo)}};function so(e,t){(e.data.directives||t.data.directives)&&co(e,t)}function co(e,t){var n,r,i,o=e===eo,a=t===eo,s=lo(e.data.directives,e.context),c=lo(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fo(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(fo(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)fo(u[n],"inserted",t,e)};o?tt(t,"insert",h):h()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)fo(l[n],"componentUpdated",t,e)})),!o)for(n in s)c[n]||fo(s[n],"unbind",e,e,a)}var uo=Object.create(null);function lo(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++){if(r=e[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,t._setupState&&t._setupState.__sfc){var o=r.def||kr(t,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||kr(t.$options,"directives",r.name,!0)}return i}function ho(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function fo(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(Ya){Gt(Ya,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var po=[Yi,ao];function mo(e,t){var n=t.componentOptions;if((!a(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(e.data.attrs)||!o(t.data.attrs))){var r,i,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(r in(a(h.__ob__)||s(h._v_attr_proxy))&&(h=t.data.attrs=D({},h)),h)i=h[r],c=l[r],c!==i&&vo(u,r,i,t.data.pre);for(r in(te||re)&&h.value!==l.value&&vo(u,"value",h.value),l)o(h[r])&&(_i(r)?u.removeAttributeNS(yi,bi(r)):pi(r)||u.removeAttribute(r))}}function vo(e,t,n,r){r||e.tagName.indexOf("-")>-1?go(e,t,n):gi(t)?wi(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pi(t)?e.setAttribute(t,vi(t,n)):_i(t)?wi(n)?e.removeAttributeNS(yi,bi(t)):e.setAttributeNS(yi,t,n):go(e,t,n)}function go(e,t,n){if(wi(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var yo={create:mo,update:mo};function _o(e,t){var n=t.elm,r=t.data,i=e.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var s=Ii(t),c=n._transitionClasses;a(c)&&(s=Si(s,Ci(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var bo,wo={create:_o,update:_o},Io="__r",ko="__c";function To(e){if(a(e[Io])){var t=te?"change":"input";e[t]=[].concat(e[Io],e[t]||[]),delete e[Io]}a(e[ko])&&(e.change=[].concat(e[ko],e.change||[]),delete e[ko])}function So(e,t,n){var r=bo;return function i(){var o=t.apply(null,arguments);null!==o&&Oo(e,i,n,r)}}var Co=Qt&&!(ae&&Number(ae[1])<=53);function Eo(e,t,n,r){if(Co){var i=Vn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}bo.addEventListener(e,t,ce?{capture:n,passive:r}:n)}function Oo(e,t,n,r){(r||bo).removeEventListener(e,t._wrapper||t,n)}function Ao(e,t){if(!o(e.data.on)||!o(t.data.on)){var n=t.data.on||{},r=e.data.on||{};bo=t.elm||e.elm,To(n),et(n,r,Eo,Oo,So,t.context),bo=void 0}}var Po,xo={create:Ao,update:Ao,destroy:function(e){return Ao(e,eo)}};function No(e,t){if(!o(e.data.domProps)||!o(t.data.domProps)){var n,r,i=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(a(u.__ob__)||s(u._v_attr_proxy))&&(u=t.data.domProps=D({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Ro(i,l)&&(i.value=l)}else if("innerHTML"===n&&xi(i.tagName)&&o(i.innerHTML)){Po=Po||document.createElement("div"),Po.innerHTML="<svg>".concat(r,"</svg>");var h=Po.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ya){}}}}function Ro(e,t){return!e.composing&&("OPTION"===e.tagName||Do(e,t)||Lo(e,t))}function Do(e,t){var n=!0;try{n=document.activeElement!==e}catch(Ya){}return n&&e.value!==t}function Lo(e,t){var n=e.value,r=e._vModifiers;if(a(r)){if(r.number)return y(n)!==y(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var $o={create:No,update:No},Mo=T((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function jo(e){var t=Fo(e.style);return e.staticStyle?D(e.staticStyle,t):t}function Fo(e){return Array.isArray(e)?L(e):"string"===typeof e?Mo(e):e}function Uo(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=jo(i.data))&&D(r,n)}(n=jo(e.data))&&D(r,n);var o=e;while(o=o.parent)o.data&&(n=jo(o.data))&&D(r,n);return r}var Vo,Bo=/^--/,zo=/\s*!important$/,Ho=function(e,t,n){if(Bo.test(t))e.style.setProperty(t,n);else if(zo.test(n))e.style.setProperty(A(t),n.replace(zo,""),"important");else{var r=qo(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Wo=["Webkit","Moz","ms"],qo=T((function(e){if(Vo=Vo||document.createElement("div").style,e=C(e),"filter"!==e&&e in Vo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Wo.length;n++){var r=Wo[n]+t;if(r in Vo)return r}}));function Ko(e,t){var n=t.data,r=e.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,s,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=Fo(t.data.style)||{};t.data.normalizedStyle=a(d.__ob__)?D({},d):d;var f=Uo(t,!0);for(s in h)o(f[s])&&Ho(c,s,"");for(s in f)i=f[s],i!==h[s]&&Ho(c,s,null==i?"":i)}}var Go={create:Ko,update:Ko},Xo=/\s+/;function Jo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Xo).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Yo(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Xo).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Zo(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&D(t,Qo(e.name||"v")),D(t,e),t}return"string"===typeof e?Qo(e):void 0}}var Qo=T((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),ea=Q&&!ne,ta="transition",na="animation",ra="transition",ia="transitionend",oa="animation",aa="animationend";ea&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ra="WebkitTransition",ia="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(oa="WebkitAnimation",aa="webkitAnimationEnd"));var sa=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ca(e){sa((function(){sa(e)}))}function ua(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Jo(e,t))}function la(e,t){e._transitionClasses&&w(e._transitionClasses,t),Yo(e,t)}function ha(e,t,n){var r=fa(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ta?ia:aa,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout((function(){c<a&&u()}),o+1),e.addEventListener(s,l)}var da=/\b(transform|all)(,|$)/;function fa(e,t){var n,r=window.getComputedStyle(e),i=(r[ra+"Delay"]||"").split(", "),o=(r[ra+"Duration"]||"").split(", "),a=pa(i,o),s=(r[oa+"Delay"]||"").split(", "),c=(r[oa+"Duration"]||"").split(", "),u=pa(s,c),l=0,h=0;t===ta?a>0&&(n=ta,l=a,h=o.length):t===na?u>0&&(n=na,l=u,h=c.length):(l=Math.max(a,u),n=l>0?a>u?ta:na:null,h=n?n===ta?o.length:c.length:0);var d=n===ta&&da.test(r[ra+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function pa(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return ma(t)+ma(e[n])})))}function ma(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function va(e,t){var n=e.elm;a(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Zo(e.data.transition);if(!o(r)&&!a(n._enterCb)&&1===n.nodeType){var i=r.css,s=r.type,c=r.enterClass,u=r.enterToClass,d=r.enterActiveClass,f=r.appearClass,p=r.appearToClass,m=r.appearActiveClass,v=r.beforeEnter,g=r.enter,_=r.afterEnter,b=r.enterCancelled,w=r.beforeAppear,I=r.appear,k=r.afterAppear,T=r.appearCancelled,S=r.duration,C=Tn,E=Tn.$vnode;while(E&&E.parent)C=E.context,E=E.parent;var O=!C._isMounted||!e.isRootInsert;if(!O||I||""===I){var A=O&&f?f:c,P=O&&m?m:d,x=O&&p?p:u,N=O&&w||v,R=O&&l(I)?I:g,D=O&&k||_,L=O&&T||b,$=y(h(S)?S.enter:S);0;var M=!1!==i&&!ne,j=_a(R),F=n._enterCb=V((function(){M&&(la(n,x),la(n,P)),F.cancelled?(M&&la(n,A),L&&L(n)):D&&D(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,F)})),N&&N(n),M&&(ua(n,A),ua(n,P),ca((function(){la(n,A),F.cancelled||(ua(n,x),j||(ya($)?setTimeout(F,$):ha(n,s,F)))}))),e.data.show&&(t&&t(),R&&R(n,F)),M||j||F()}}}function ga(e,t){var n=e.elm;a(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Zo(e.data.transition);if(o(r)||1!==n.nodeType)return t();if(!a(n._leaveCb)){var i=r.css,s=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,g=r.duration,_=!1!==i&&!ne,b=_a(f),w=y(h(g)?g.leave:g);0;var I=n._leaveCb=V((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),_&&(la(n,u),la(n,l)),I.cancelled?(_&&la(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(k):k()}function k(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),_&&(ua(n,c),ua(n,l),ca((function(){la(n,c),I.cancelled||(ua(n,u),b||(ya(w)?setTimeout(I,w):ha(n,s,I)))}))),f&&f(n,I),_||b||I())}}function ya(e){return"number"===typeof e&&!isNaN(e)}function _a(e){if(o(e))return!1;var t=e.fns;return a(t)?_a(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function ba(e,t){!0!==t.data.show&&va(t)}var wa=Q?{create:ba,activate:ba,remove:function(e,t){!0!==e.data.show?ga(e,t):t()}}:{},Ia=[yo,wo,xo,$o,Go,wa],ka=Ia.concat(po),Ta=oo({nodeOps:Ji,modules:ka});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Na(e,"input")}));var Sa={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?tt(n,"postpatch",(function(){Sa.componentUpdated(e,t,n)})):Ca(e,t,n.context),e._vOptions=[].map.call(e.options,Aa)):("textarea"===n.tag||$i(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Pa),e.addEventListener("compositionend",xa),e.addEventListener("change",xa),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ca(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Aa);if(i.some((function(e,t){return!F(e,r[t])}))){var o=e.multiple?t.value.some((function(e){return Oa(e,i)})):t.value!==t.oldValue&&Oa(t.value,i);o&&Na(e,"change")}}}};function Ca(e,t,n){Ea(e,t,n),(te||re)&&setTimeout((function(){Ea(e,t,n)}),0)}function Ea(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=U(r,Aa(a))>-1,a.selected!==o&&(a.selected=o);else if(F(Aa(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Oa(e,t){return t.every((function(t){return!F(t,e)}))}function Aa(e){return"_value"in e?e._value:e.value}function Pa(e){e.target.composing=!0}function xa(e){e.target.composing&&(e.target.composing=!1,Na(e.target,"input"))}function Na(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ra(e){return!e.componentInstance||e.data&&e.data.transition?e:Ra(e.componentInstance._vnode)}var Da={bind:function(e,t,n){var r=t.value;n=Ra(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,va(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=Ra(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?va(n,(function(){e.style.display=e.__vOriginalDisplay})):ga(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},La={model:Sa,show:Da},$a={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ma(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ma(Vt(t.children)):e}function ja(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var r in i)t[C(r)]=i[r];return t}function Fa(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Ua(e){while(e=e.parent)if(e.data.transition)return!0}function Va(e,t){return t.key===e.key&&t.tag===e.tag}var Ba=function(e){return e.tag||St(e)},za=function(e){return"show"===e.name},Ha={name:"transition",props:$a,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(Ba),n.length)){0;var r=this.mode;0;var i=n[0];if(Ua(this.$vnode))return i;var o=Ma(i);if(!o)return i;if(this._leaving)return Fa(e,i);var a="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?a+"comment":a+o.tag:u(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s=(o.data||(o.data={})).transition=ja(this),c=this._vnode,l=Ma(c);if(o.data.directives&&o.data.directives.some(za)&&(o.data.show=!0),l&&l.data&&!Va(o,l)&&!St(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},s);if("out-in"===r)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Fa(e,i);if("in-out"===r){if(St(o))return c;var d,f=function(){d()};tt(s,"afterEnter",f),tt(s,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return i}}},Wa=D({tag:String,moveClass:String},$a);delete Wa.mode;var qa={props:Wa,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Sn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ja(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){var u=[],l=[];for(s=0;s<r.length;s++){c=r[s];c.data.transition=a,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Ka),e.forEach(Ga),e.forEach(Xa),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;ua(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(ia,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(ia,e),n._moveCb=null,la(n,t))})}})))},methods:{hasMove:function(e,t){if(!ea)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Yo(n,e)})),Jo(n,t),n.style.display="none",this.$el.appendChild(n);var r=fa(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function Ka(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ga(e){e.data.newPos=e.elm.getBoundingClientRect()}function Xa(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Ja={Transition:Ha,TransitionGroup:qa};Jr.config.mustUseProp=fi,Jr.config.isReservedTag=Ni,Jr.config.isReservedAttr=hi,Jr.config.getTagNamespace=Ri,Jr.config.isUnknownElement=Li,D(Jr.options.directives,La),D(Jr.options.components,Ja),Jr.prototype.__patch__=Q?Ta:$,Jr.prototype.$mount=function(e,t){return e=e&&Q?Mi(e):void 0,On(this,e,t)},Q&&setTimeout((function(){q.devtools&&he&&he.emit("init",Jr)}),0)},9306:function(e,t,n){var r=n(4901),i=n(6823),o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not a function")}},8551:function(e,t,n){var r=n(34),i=String,o=TypeError;e.exports=function(e){if(r(e))return e;throw new o(i(e)+" is not an object")}},9617:function(e,t,n){var r=n(5397),i=n(5610),o=n(6198),a=function(e){return function(t,n,a){var s=r(t),c=o(s);if(0===c)return!e&&-1;var u,l=i(a,c);if(e&&n!==n){while(c>l)if(u=s[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),o=TypeError,a=Object.getOwnPropertyDescriptor,s=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(i(e)&&!a(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4576:function(e,t,n){var r=n(9504),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},7740:function(e,t,n){var r=n(9297),i=n(5031),o=n(7347),a=n(4913);e.exports=function(e,t,n){for(var s=i(t),c=a.f,u=o.f,l=0;l<s.length;l++){var h=s[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},6699:function(e,t,n){var r=n(3724),i=n(4913),o=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6840:function(e,t,n){var r=n(4901),i=n(4913),o=n(283),a=n(9433);e.exports=function(e,t,n,s){s||(s={});var c=s.enumerable,u=void 0!==s.name?s.name:t;if(r(n)&&o(n,u,s),s.global)c?e[t]=n:a(t,n);else{try{s.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(e,t,n){var r=n(4475),i=n(34),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,i,o=n(4475),a=n(9392),s=o.process,c=o.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6518:function(e,t,n){var r=n(4475),i=n(7347).f,o=n(6699),a=n(6840),s=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||s(m,{}):r[m]&&r[m].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:m+(g?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),a(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),o=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,s=i(o,"name"),c=s&&"something"===function(){}.name,u=s&&(!r||r&&a(o,"name").configurable);e.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},9504:function(e,t,n){var r=n(616),i=Function.prototype,o=i.call,a=r&&i.bind.bind(o,o);e.exports=r?a:function(e){return function(){return o.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),i=n(4901),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),o=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),o=n(4576),a=Object,s=r("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?s(e,""):a(e)}:a},3706:function(e,t,n){var r=n(9504),i=n(4901),o=n(7629),a=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return a(e)}),e.exports=o.inspectSource},1181:function(e,t,n){var r,i,o,a=n(8622),s=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",m=s.TypeError,v=s.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new m("Incompatible receiver, "+e+" required");return n}};if(a||h.state){var _=h.state||(h.state=new v);_.get=_.get,_.has=_.has,_.set=_.set,r=function(e,t){if(_.has(e))throw new m(p);return t.facade=e,_.set(e,t),t},i=function(e){return _.get(e)||{}},o=function(e){return _.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},o=function(e){return l(e,b)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:y}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),o=/#|\.prototype\./,a=function(e,t){var n=c[s(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},s=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";e.exports=a},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),o=n(1625),a=n(7040),s=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,s(e))}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),o=n(4901),a=n(9297),s=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=r("".slice),v=r("".replace),g=r([].join),y=s&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+v(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!a(e,"name")||c&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&a(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return a(r,"source")||(r.source=g(_,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return o(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},4913:function(e,t,n){var r=n(3724),i=n(5917),o=n(8686),a=n(8551),s=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?o?function(e,t,n){if(a(e),t=s(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=s(t),a(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),o=n(8773),a=n(6980),s=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=s(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return a(!i(o.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),o=n(5397),a=n(9617).indexOf,s=n(421),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(s,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~a(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},4270:function(e,t,n){var r=n(9565),i=n(4901),o=n(34),a=TypeError;e.exports=function(e,t){var n,s;if("string"===t&&i(n=e.toString)&&!o(s=r(n,e)))return s;if(i(n=e.valueOf)&&!o(s=r(n,e)))return s;if("string"!==t&&i(n=e.toString)&&!o(s=r(n,e)))return s;throw new a("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),o=n(8480),a=n(3717),s=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(s(e)),n=a.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},6119:function(e,t,n){var r=n(5745),i=n(3392),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4475),o=n(9433),a="__core-js_shared__",s=e.exports=i[a]||o(a,{});(s.versions||(s.versions=[])).push({version:"3.37.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},4495:function(e,t,n){var r=n(7388),i=n(9039),o=n(4475),a=o.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),o=n(757),a=n(5966),s=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var n,c=a(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||o(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,o=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++i+o,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(e,t,n){var r=n(4475),i=n(4901),o=r.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},8227:function(e,t,n){var r=n(4475),i=n(5745),o=n(9297),a=n(3392),s=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||a;e.exports=function(e){return o(l,e)||(l[e]=s&&o(u,e)?u[e]:h("Symbol."+e)),l[e]}},4114:function(e,t,n){var r=n(6518),i=n(8981),o=n(6198),a=n(4527),s=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=o(t),r=arguments.length;s(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return a(t,n),n}})},8461:function(e,t,n){n.d(t,{KO:function(){return Z},MF:function(){return X},Sx:function(){return Y},Wp:function(){return J},j6:function(){return H},om:function(){return z},xZ:function(){return W}});var r=n(5125),i=n(3424),o=n(6743),a=n(4297);
/**
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
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const u="@firebase/app",l="0.10.1",h=new i.Vy("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",m="@firebase/app-check-compat",v="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",I="@firebase/functions-compat",k="@firebase/installations",T="@firebase/installations-compat",S="@firebase/messaging",C="@firebase/messaging-compat",E="@firebase/performance",O="@firebase/performance-compat",A="@firebase/remote-config",P="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",R="@firebase/firestore",D="@firebase/firestore-compat",L="firebase",$="10.11.0",M="[DEFAULT]",j={[u]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[v]:"fire-app-check",[m]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[I]:"fire-fn-compat",[k]:"fire-iid",[T]:"fire-iid-compat",[S]:"fire-fcm",[C]:"fire-fcm-compat",[E]:"fire-perf",[O]:"fire-perf-compat",[A]:"fire-rc",[P]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[R]:"fire-fst",[D]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,U=new Map,V=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function z(e){const t=e.name;if(V.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of F.values())B(n,e);for(const n of U.values())B(n,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function W(e){return void 0!==e.settings}
/**
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
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},K=new o.FA("app","Firebase",q);
/**
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
 */
class G{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
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
 */
/**
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
 */
const X=$;function J(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!==typeof a||!a)throw K.create("bad-app-name",{appName:String(a)});if(n||(n=(0,o.T9)()),!n)throw K.create("no-options");const s=F.get(a);if(s){if((0,o.bD)(n,s.options)&&(0,o.bD)(i,s.config))return s;throw K.create("duplicate-app",{appName:a})}const c=new r.h1(a);for(const r of V.values())c.addComponent(r);const u=new G(n,i,c);return F.set(a,u),u}function Y(e=M){const t=F.get(e);if(!t&&e===M&&(0,o.T9)())return J();if(!t)throw K.create("no-app",{appName:e});return t}function Z(e,t,n){var i;let o=null!==(i=j[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}z(new r.uA(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
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
 */
const Q="firebase-heartbeat-database",ee=1,te="firebase-heartbeat-store";let ne=null;function re(){return ne||(ne=(0,a.P2)(Q,ee,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(te)}catch(n){console.warn(n)}}}}).catch((e=>{throw K.create("idb-open",{originalErrorMessage:e.message})}))),ne}async function ie(e){try{const t=await re(),n=t.transaction(te),r=await n.objectStore(te).get(ae(e));return await n.done,r}catch(t){if(t instanceof o.g)h.warn(t.message);else{const e=K.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});h.warn(e.message)}}}async function oe(e,t){try{const n=await re(),r=n.transaction(te,"readwrite"),i=r.objectStore(te);await i.put(t,ae(e)),await r.done}catch(n){if(n instanceof o.g)h.warn(n.message);else{const e=K.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(e.message)}}}function ae(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const se=1024,ce=2592e6;class ue{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new de(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=le();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ce})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=le(),{heartbeatsToSend:n,unsentEntries:r}=he(this._heartbeatsCache.heartbeats),i=(0,o.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function le(){const e=new Date;return e.toISOString().substring(0,10)}function he(e,t=se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),fe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class de{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.zW)()&&(0,o.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function fe(e){return(0,o.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function pe(e){z(new r.uA("platform-logger",(e=>new s(e)),"PRIVATE")),z(new r.uA("heartbeat",(e=>new ue(e)),"PRIVATE")),Z(u,l,e),Z(u,l,"esm2017"),Z("fire-js","")}pe("")},5125:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(6743);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3424:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7922:function(e,t,n){n.d(t,{P5:function(){return bt}});var r=n(8461),i=n(3424),o=n(6743),a=n(5125),s=n(4297);const c="@firebase/installations",u="0.6.6",l=1e4,h=`w:${u}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,m="installations",v="Installations",g={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new o.FA(m,v,g);function _(e){return e instanceof o.g&&e.code.includes("request-failed")}
/**
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
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function w(e){return{token:e.token,requestStatus:2,expiresIn:C(e.expiresIn),creationTime:Date.now()}}async function I(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function k({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(e,{refreshToken:t}){const n=k(e);return n.append("Authorization",E(t)),n}async function S(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C(e){return Number(e.replace("s","000"))}function E(e){return`${d} ${e}`}
/**
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
 */async function O({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=k(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={fid:n,authVersion:d,appId:e.appId,sdkVersion:h},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await S((()=>fetch(r,s)));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:w(e.authToken)};return t}throw await I("Create Installation",c)}
/**
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
 */function A(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */function P(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const x=/^[cdef][\w-]{21}$/,N="";function R(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=D(e);return x.test(n)?n:N}catch(e){return N}}function D(e){const t=P(e);return t.substr(0,22)}
/**
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
 */function L(e){return`${e.appName}!${e.appId}`}
/**
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
 */const $=new Map;function M(e,t){const n=L(e);j(n,t),F(n,t)}function j(e,t){const n=$.get(e);if(n)for(const r of n)r(t)}function F(e,t){const n=V();n&&n.postMessage({key:e,fid:t}),B()}let U=null;function V(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=e=>{j(e.data.key,e.data.fid)}),U}function B(){0===$.size&&U&&(U.close(),U=null)}
/**
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
 */const z="firebase-installations-database",H=1,W="firebase-installations-store";let q=null;function K(){return q||(q=(0,s.P2)(z,H,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(W)}}})),q}async function G(e,t){const n=L(e),r=await K(),i=r.transaction(W,"readwrite"),o=i.objectStore(W),a=await o.get(n);return await o.put(t,n),await i.done,a&&a.fid===t.fid||M(e,t.fid),t}async function X(e){const t=L(e),n=await K(),r=n.transaction(W,"readwrite");await r.objectStore(W).delete(t),await r.done}async function J(e,t){const n=L(e),r=await K(),i=r.transaction(W,"readwrite"),o=i.objectStore(W),a=await o.get(n),s=t(a);return void 0===s?await o.delete(n):await o.put(s,n),await i.done,!s||a&&a.fid===s.fid||M(e,s.fid),s}
/**
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
 */async function Y(e){let t;const n=await J(e.appConfig,(n=>{const r=Z(n),i=Q(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===N?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Z(e){const t=e||{fid:R(),registrationStatus:0};return re(t)}function Q(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await O(e,t);return G(e.appConfig,n)}catch(n){throw _(n)&&409===n.customData.serverCode?await X(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await A(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Y(e);return n||t}return t}function ne(e){return J(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+l<Date.now()}
/**
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
 */async function oe({appConfig:e,heartbeatServiceProvider:t},n){const r=ae(e,n),i=T(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const a={installation:{sdkVersion:h,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},c=await S((()=>fetch(r,s)));if(c.ok){const e=await c.json(),t=w(e);return t}throw await I("Generate Auth Token",c)}function ae(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
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
 */async function se(e,t=!1){let n;const r=await J(e.appConfig,(r=>{if(!he(r))throw y.create("not-registered");const i=r.authToken;if(!t&&de(i))return r;if(1===i.requestStatus)return n=ce(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=le(e,t),t}})),i=n?await n:r.authToken;return i}async function ce(e,t){let n=await ue(e.appConfig);while(1===n.authToken.requestStatus)await A(100),n=await ue(e.appConfig);const r=n.authToken;return 0===r.requestStatus?se(e,t):r}function ue(e){return J(e,(e=>{if(!he(e))throw y.create("not-registered");const t=e.authToken;return me(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function le(e,t){try{const n=await oe(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(n){if(!_(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await X(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function me(e){return 1===e.requestStatus&&e.requestTime+l<Date.now()}
/**
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
 */async function ve(e){const t=e,{installationEntry:n,registrationPromise:r}=await Y(t);return r?r.catch(console.error):se(t).catch(console.error),n.fid}
/**
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
 */async function ge(e,t=!1){const n=e;await ye(n);const r=await se(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Y(e);t&&await t}
/**
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
 */
/**
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
 */
function _e(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return y.create("missing-app-config-values",{valueName:e})}
/**
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
 */const we="installations",Ie="installations-internal",ke=e=>{const t=e.getProvider("app").getImmediate(),n=_e(t),i=(0,r.j6)(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.j6)(t,we).getImmediate(),i={getId:()=>ve(n),getToken:e=>ge(n,e)};return i};function Se(){(0,r.om)(new a.uA(we,ke,"PUBLIC")),(0,r.om)(new a.uA(Ie,Te,"PRIVATE"))}Se(),(0,r.KO)(c,u),(0,r.KO)(c,u,"esm2017");
/**
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
 */
const Ce="analytics",Ee="firebase_id",Oe="origin",Ae=6e4,Pe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xe="https://www.googletagmanager.com/gtag/js",Ne=new i.Vy("@firebase/analytics"),Re={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},De=new o.FA("analytics","Analytics",Re);
/**
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
 */
function Le(e){if(!e.startsWith(xe)){const t=De.create("invalid-gtag-resource",{gtagURL:e});return Ne.warn(t.message),""}return e}function $e(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Me(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function je(e,t){const n=Me("firebase-js-sdk-policy",{createScriptURL:Le}),r=document.createElement("script"),i=`${xe}?l=${e}&id=${t}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Fe(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ue(e,t,n,r,i,o){const a=r[i];try{if(a)await t[a];else{const e=await $e(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(s){Ne.error(s)}e("config",i,o)}async function Ve(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await $e(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ne.error(o)}}function Be(e,t,n,r){async function i(i,...o){try{if("event"===i){const[r,i]=o;await Ve(e,t,n,r,i)}else if("config"===i){const[i,a]=o;await Ue(e,t,n,r,i,a)}else if("consent"===i){const[t]=o;e("consent","update",t)}else if("get"===i){const[t,n,r]=o;e("get",t,n,r)}else if("set"===i){const[t]=o;e("set",t)}else e(i,...o)}catch(a){Ne.error(a)}}return i}function ze(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=Be(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function He(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xe)&&n.src.includes(e))return n;return null}
/**
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
 */const We=30,qe=1e3;class Ke{constructor(e={},t=qe){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ge=new Ke;function Xe(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Je(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Xe(r)},o=Pe.replace("{app-id}",n),a=await fetch(o,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(s){}throw De.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}async function Ye(e,t=Ge,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw De.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw De.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new tt;return setTimeout((async()=>{s.abort()}),void 0!==n?n:Ae),Ze({appId:r,apiKey:i,measurementId:o},a,s,t)}async function Ze(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ge){var a;const{appId:s,measurementId:c}=e;try{await Qe(r,t)}catch(u){if(c)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===u||void 0===u?void 0:u.message}]`),{appId:s,measurementId:c};throw u}try{const t=await Je(e);return i.deleteThrottleMetadata(s),t}catch(u){const t=u;if(!et(t)){if(i.deleteThrottleMetadata(s),c)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:s,measurementId:c};throw u}const l=503===Number(null===(a=null===t||void 0===t?void 0:t.customData)||void 0===a?void 0:a.httpStatus)?(0,o.p9)(n,i.intervalMillis,We):(0,o.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,h),Ne.debug(`Calling attemptFetch again in ${l} millis`),Ze(e,h,r,i)}}function Qe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(De.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function et(e){if(!(e instanceof o.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
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
 */let nt,rt;async function it(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function ot(e){rt=e}function at(e){nt=e}
/**
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
 */async function st(){if(!(0,o.zW)())return Ne.warn(De.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,o.eX)()}catch(e){return Ne.warn(De.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ct(e,t,n,r,i,o,a){var s;const c=Ye(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ne.error(e))),t.push(c);const u=st().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([c,u]);He(o)||je(o,l.measurementId),rt&&(i("consent","default",rt),ot(void 0)),i("js",new Date);const d=null!==(s=null===a||void 0===a?void 0:a.config)&&void 0!==s?s:{};return d[Oe]="firebase",d.update=!0,null!=h&&(d[Ee]=h),i("config",l.measurementId,d),nt&&(i("set",nt),at(void 0)),l.measurementId}
/**
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
 */class ut{constructor(e){this.app=e}_delete(){return delete lt[this.app.options.appId],Promise.resolve()}}let lt={},ht=[];const dt={};let ft,pt,mt="dataLayer",vt="gtag",gt=!1;function yt(){const e=[];if((0,o.sr)()&&e.push("This is a browser extension environment."),(0,o.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=De.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function _t(e,t,n){yt();const r=e.options.appId;if(!r)throw De.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw De.create("no-api-key");Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=lt[r])throw De.create("already-exists",{id:r});if(!gt){Fe(mt);const{wrappedGtag:e,gtagCore:t}=ze(lt,ht,dt,mt,vt);pt=e,ft=t,gt=!0}lt[r]=ct(e,ht,dt,t,ft,mt,n);const i=new ut(e);return i}function bt(e=(0,r.Sx)()){e=(0,o.Ku)(e);const t=(0,r.j6)(e,Ce);return t.isInitialized()?t.getImmediate():wt(e)}function wt(e,t={}){const n=(0,r.j6)(e,Ce);if(n.isInitialized()){const e=n.getImmediate();if((0,o.bD)(t,n.getOptions()))return e;throw De.create("already-initialized")}const i=n.initialize({options:t});return i}function It(e,t,n,r){e=(0,o.Ku)(e),it(pt,lt[e.app.options.appId],t,n,r).catch((e=>Ne.error(e)))}const kt="@firebase/analytics",Tt="0.10.2";function St(){function e(e){try{const t=e.getProvider(Ce).getImmediate();return{logEvent:(e,n,r)=>It(t,e,n,r)}}catch(t){throw De.create("interop-component-reg-failed",{reason:t})}}(0,r.om)(new a.uA(Ce,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return _t(n,r,t)}),"PUBLIC")),(0,r.om)(new a.uA("analytics-internal",e,"PRIVATE")),(0,r.KO)(kt,Tt),(0,r.KO)(kt,Tt,"esm2017")}St()},223:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(8461),i="firebase",o="10.11.0";
/**
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
 */
/**
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
 */
(0,r.KO)(i,o,"app")},1157:function(e,t,n){n.d(t,{Pj:function(){return At},MN:function(){return Ot},hK:function(){return Pt}});var r=n(8461),i=n(6743),o=n(3424);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var s=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new o.Vy("@firebase/auth");function d(e,...t){h.logLevel<=o.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=o.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
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
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function v(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),o=new i.FA("auth","Firebase",r);return o.create(t,{appName:e.name})}function g(e){return v(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function _(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||b(t)}
/**
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
 */function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},x=new E(3e4,6e4);
/**
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
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,r,o={}){return D(e,o,(async()=>{let o={},a={};r&&("GET"===t?a=r:o={body:JSON.stringify(r)});const s=(0,i.Am)(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()($(e,e.config.apiHost,n,s),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),t);try{const t=new j(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw F(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw F(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw v(e,s,a);p(e,s)}}catch(o){if(o instanceof i.g)throw o;p(e,"network-request-failed",{message:String(o)})}}async function L(e,t,n,r,i={}){const o=await R(e,t,n,r,i);return"mfaPendingCredential"in o&&p(e,"multi-factor-auth-required",{_serverResponse:o}),o}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),x.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */function U(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
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
 */async function B(e,t){return R(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
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
 */async function z(e,t){return R(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return R(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function q(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),o=G(r);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a="object"===typeof o.firebase?o.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:o,token:r,authTime:W(K(o.auth_time)),issuedAtTime:W(K(o.iat)),expirationTime:W(K(o.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function K(e){return 1e3*Number(e)}function G(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",null===o||void 0===o?void 0:o.toString()),null}}function X(e){const t=G(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function J(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,H(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?re(o.providerUserInfo):[],s=ne(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function ie(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:o}=e.config,a=$(e,r,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(a,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oe(e,t){return R(e,"POST","/v2/accounts:revokeToken",N(e,t))}
/**
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
 */class ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(0!==e.length,"internal-error");const t=X(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new ae;return n&&(_("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ae,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
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
 */function se(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return te(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(g(this.auth));const e=await this.getIdToken();return await J(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:I,stsTokenManager:k}=t;_(y&&k,e,"internal-error");const T=ae.fromJSON(this.name,k);_("string"===typeof y,e,"internal-error"),se(l,e.name),se(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(m,e.name),se(v,e.name),se(g,e.name);const S=new ce({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:v,lastLoginAt:g});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ae;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];_(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),a=new ae;a.updateFromIdToken(n);const s=new ce({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Q(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(s,c),s}}
/**
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
 */const ue=new Map;function le(e){w(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
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
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(de);const o=fe(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(o);if(t){const n=ce._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(c){}const s=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(o)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
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
 */function me(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(we(t))return"Blackberry";if(Ie(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ge(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.ZQ)()){return/crios\//i.test(e)}function _e(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function we(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ie(e=(0,i.ZQ)()){return/webos/i.test(e)}function ke(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(){return(0,i.lT)()&&10===document.documentMode}function Se(e=(0,i.ZQ)()){return ke(e)||be(e)||Ie(e)||we(e)||/windows phone/i.test(e)||_e(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=me((0,i.ZQ)());break;case"Worker":n=`${me((0,i.ZQ)())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${o}`}
/**
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
 */class Oe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
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
 */async function Ae(e,t={}){return R(e,"GET","/v2/passwordPolicy",N(e,t))}
/**
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
 */const Pe=6;class xe{constructor(e){var t,n,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:Pe,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,o,a;const s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class Ne{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Oe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await H(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null===a||void 0===a?void 0:a.user)||(i=a.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(a)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(g(this));const t=e?(0,i.Ku)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(g(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(g(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ae(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await oe(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then((()=>{o||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{o=!0,i()}}{const n=e.addObserver(t);return()=>{o=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Re(e){return(0,i.Ku)(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $e(e){Le=e}function Me(e){return Le.loadJS(e)}function je(){return Le.recaptchaEnterpriseScript}function Fe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ue="recaptcha-enterprise",Ve="NO_RECAPTCHA";class Be{constructor(e){this.type=Ue,this.auth=Re(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new V(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;U(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Ve)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&U(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=je();0!==t.length&&(t+=n),Me(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ze(e,t,n,r=!1){const i=new Be(e);let o;try{o=await i.verify(n)}catch(s){o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function He(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */
class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
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
 */async function Ke(e,t){return R(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */
async function Ge(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}async function Xe(e,t){return R(e,"POST","/v1/accounts:sendOobCode",N(e,t))}async function Je(e,t){return Xe(e,t)}
/**
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
 */
async function Ye(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function Ze(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
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
 */class Qe extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,t,"signInWithPassword",Ge);case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,n,"signUpPassword",Ke);case"emailLink":return Ze(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function et(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
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
 */const tt="http://localhost";class nt extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new nt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return et(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,et(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,et(e,t)}buildRequest(){const e={requestUri:tt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
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
 */async function rt(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function it(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function ot(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const at={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),at)}
/**
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
 */class ct extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ct({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ct({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return it(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ot(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ct({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function ut(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],o=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return o||r||n||t||e}class ht{constructor(e){var t,n,r,o,a,s;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ut(null!==(r=c["mode"])&&void 0!==r?r:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=lt(e);try{return new ht(t)}catch(n){return null}}}
/**
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
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ht.parseLink(t);return _(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class ft{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class pt extends ft{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class mt extends pt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
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
 */
class vt extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vt.credential(t,n)}catch(r){return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com",vt.PROVIDER_ID="google.com";
/**
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
 */
class gt extends pt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
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
 */
class yt extends pt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return yt.credential(t,n)}catch(r){return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com",yt.PROVIDER_ID="twitter.com";
/**
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
 */
class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),o=bt(n),a=new _t({user:i,providerId:o,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new _t({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class wt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new wt(e,t,n,r)}}function It(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */async function kt(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",r)}
/**
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
 */
async function Tt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(g(i));const o="reauthenticate";try{const r=await J(e,It(i,o,t,e),n);_(r.idToken,i,"internal-error");const a=G(r.idToken);_(a,i,"internal-error");const{sub:s}=a;return _(e.uid===s,i,"user-mismatch"),_t._forOperation(e,o,r)}catch(a){throw"auth/user-not-found"===(null===a||void 0===a?void 0:a.code)&&p(i,"user-mismatch"),a}}
/**
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
 */async function St(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(g(e));const i="signIn",o=await It(e,i,t),a=await _t._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(a.user),a}async function Ct(e,t){return St(Re(e),t)}
/**
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
 */
function Et(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */
/**
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
 */
async function Ot(e,t,n){const r=Re(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(e,t){_(t.handleCodeInApp,r,"argument-error"),t&&Et(r,e,t)}o(i,n),await He(r,i,"getOobCode",Je)}function At(e,t){const n=ht.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Pt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(g(e));const o=(0,i.Ku)(e),a=dt.credentialWithLink(t,n||I());return _(a._tenantId===(o.tenantId||null),o,"tenant-id-mismatch"),Ct(o,a)}
/**
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
 */
/**
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
 */
function xt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Nt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function Rt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Dt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Lt="__sak";
/**
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
 */class $t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lt,"1"),this.storage.removeItem(Lt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function Mt(){const e=(0,i.ZQ)();return ge(e)||ke(e)}const jt=1e3,Ft=10;class Ut extends $t{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mt()&&Ce(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Te()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ft):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),jt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ut.type="LOCAL";
/**
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
 */
class Vt extends $t{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vt.type="SESSION";
/**
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
 */
function Bt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class zt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new zt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map((async e=>e(t.origin,i))),s=await Bt(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Ht(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */zt.receivers=[];class Wt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise(((a,s)=>{const c=Ht("",20);r.port1.start();const u=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}}
/**
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
 */function qt(){return window}
/**
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
 */
function Kt(){return"undefined"!==typeof qt()["WorkerGlobalScope"]&&"function"===typeof qt()["importScripts"]}async function Gt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Jt(){return Kt()?self:null}
/**
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
 */const Yt="firebaseLocalStorageDb",Zt=1,Qt="firebaseLocalStorage",en="fbase_key";class tn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function nn(e,t){return e.transaction([Qt],t?"readwrite":"readonly").objectStore(Qt)}function rn(){const e=indexedDB.deleteDatabase(Yt);return new tn(e).toPromise()}function on(){const e=indexedDB.open(Yt,Zt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Qt,{keyPath:en})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Qt)?t(n):(n.close(),await rn(),t(await on()))}))}))}async function an(e,t,n){const r=nn(e,!0).put({[en]:t,value:n});return new tn(r).toPromise()}async function sn(e,t){const n=nn(e,!1).get(t),r=await new tn(n).toPromise();return void 0===r?null:r.value}function cn(e,t){const n=nn(e,!0).delete(t);return new tn(n).toPromise()}const un=800,ln=3;class hn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await on()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>ln)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zt._getInstance(Jt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gt(),!this.activeServiceWorker)return;this.sender=new Wt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await on();return await an(e,Lt,"1"),await cn(e,Lt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>an(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>sn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>cn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=nn(e,!1).getAll();return new tn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),un)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}hn.type="LOCAL";
/**
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
 */
function dn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function fn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function pn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
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
 */
/**
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
 */
Fe("rcb"),new E(3e4,6e4);
/**
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
 */
const mn="recaptcha";async function vn(e,t,n){var r;const i=await n.verify();try{let o;if(_("string"===typeof i,e,"argument-error"),_(n.type===mn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");const n=await xt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");const a=await dn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await rt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class gn{constructor(e){this.providerId=gn.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return vn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return ct._fromVerification(e,t)}static credentialFromResult(e){const t=e;return gn.credentialFromTaggedObject(t)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ct._fromTokenResponse(t,n):null}}gn.PROVIDER_ID="phone",gn.PHONE_SIGN_IN_METHOD="phone";
/**
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
 */
class yn extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _n(e){return St(e.auth,new yn(e),e.bypassAuthState)}function bn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Tt(n,new yn(e),e.bypassAuthState)}async function wn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),kt(n,new yn(e),e.bypassAuthState)}
/**
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
 */class In{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _n;case"linkViaPopup":case"linkViaRedirect":return wn;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const kn=new E(2e3,1e4);class Tn extends In{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,kn.get())};e()}}Tn.currentPopupAction=null;
/**
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
 */
new Map;
/**
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
 */
new E(3e4,6e4);
/**
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
 */
new E(5e3,15e3),new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
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
 */
encodeURIComponent("fac");class Sn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Cn extends Sn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Cn(e)}_finalizeEnroll(e,t,n){return Nt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class En{constructor(){}static assertion(e){return Cn._fromCredential(e)}}En.FACTOR_ID="phone";class On{static assertionForEnrollment(e,t){return An._fromSecret(e,t)}static assertionForSignIn(e,t){return An._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;_("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Rt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Pn._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}On.FACTOR_ID="totp";class An extends Sn{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new An(t,void 0,e)}static _fromEnrollmentId(e,t){return new An(t,e)}async _finalizeEnroll(e,t,n){return _("undefined"!==typeof this.secret,e,"argument-error"),Dt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){_(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return pn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Pn{constructor(e,t,n,r,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Pn(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(xn(e)||xn(t))&&(r=!0),r&&(xn(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),xn(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function xn(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Nn="@firebase/auth",Rn="1.7.1";
/**
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
 */
class Dn{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Ln(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $n(e){(0,r.om)(new s.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:s}=r.options;_(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},u=new Ne(r,i,o,c);return We(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new s.uA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Dn(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Nn,Rn,Ln(e)),(0,r.KO)(Nn,Rn,"esm2017")}
/**
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
 */const Mn=300;(0,i.XA)("authIdTokenMaxAge");function jn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}$e({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",jn().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),$n("Browser")},4297:function(e,t,n){n.d(t,{P2:function(){return w}});const r=(e,t)=>t.some((t=>e instanceof t));let i,o;function a(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,l=new WeakMap,h=new WeakMap,d=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(_(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),d.set(t,e),t}function p(e){if(u.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));u.set(e,t)}let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){m=e(m)}function g(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?s().includes(e)?function(...t){return e.apply(b(this),t),_(c.get(this))}:function(...t){return _(e.apply(b(this),t))}:function(t,...n){const r=e.call(b(this),t,...n);return l.set(r,t.sort?t.sort():[t]),_(r)}}function y(e){return"function"===typeof e?g(e):(e instanceof IDBTransaction&&p(e),r(e,a())?new Proxy(e,m):e)}function _(e){if(e instanceof IDBRequest)return f(e);if(h.has(e))return h.get(e);const t=y(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const b=e=>d.get(e);function w(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=_(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(_(a.result),e.oldVersion,e.newVersion,_(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],T=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return T.set(t,o),o}v((e=>({...e,get:(t,n,r)=>S(t,n)||e.get(t,n,r),has:(t,n)=>!!S(t,n)||e.has(t,n)})))}}]);
//# sourceMappingURL=chunk-vendors.20ac85e0.js.map