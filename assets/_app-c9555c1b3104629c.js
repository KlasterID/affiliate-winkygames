(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(e,t,r){"use strict";r.d(t,{BH:function(){return S},L:function(){return l},LL:function(){return k},Pz:function(){return E},ZR:function(){return T},aH:function(){return I},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return x},ne:function(){return D},pd:function(){return N},q4:function(){return _},ru:function(){return d},tV:function(){return u},uI:function(){return h},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let o=t[s],a=r[s];if(C(o)&&C(a)){if(!e(o,a))return!1}else if(o!==a)return!1}for(let l of i)if(!n.includes(l))return!1;return!0}},w1:function(){return p},xO:function(){return R},xb:function(){return O},z$:function(){return c},zd:function(){return P}});var n=r(3454);/**
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
 */let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},s=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let o=e[r++],a=e[r++],l=e[r++],u=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&l)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{let c=e[r++],h=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&h)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;l||(f=64,o||(d=64)),n.push(r[c],r[h],r[d],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let s=r[e.charAt(i++)],o=i<e.length,a=o?r[e.charAt(i)]:0;++i;let l=i<e.length,u=l?r[e.charAt(i)]:64;++i;let c=i<e.length,h=c?r[e.charAt(i)]:64;if(++i,null==s||null==a||null==u||null==h)throw Error();let d=s<<2|a>>4;if(n.push(d),64!==u){let f=a<<4&240|u>>2;if(n.push(f),64!==h){let p=u<<6&192|h;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){let t=i(e);return o.encodeByteArray(t,!0)},l=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function d(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){let e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){try{return"object"==typeof indexedDB}catch(e){return!1}}function m(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}})}/**
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
 */let v=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,y=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let r=e&&u(e[1]);return r&&JSON.parse(r)},w=()=>{try{return v()||y()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_=e=>{var t,r;return null===(r=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},I=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},E=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};/**
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
 */class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class T extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(A,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new T(n,o,r);return a}}let A=/\{\$([^}]+)}/g;function O(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e){return null!==e&&"object"==typeof e}/**
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
 */function R(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function P(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function N(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function D(e,t){let r=new L(e,t);return r.subscribe.bind(r)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=M),void 0===n.error&&(n.error=M),void 0===n.complete&&(n.complete=M);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}/**
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
 */function x(e){return e&&e._delegate?e._delegate:e}},4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&e.push(o)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3847)}])},7832:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(5816);/**
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
 */(0,n.KN)("firebase","9.15.0","app");var i=r(7908);let s=(0,n.ZF)({apiKey:"AIzaSyBgEizY8V4YGqA1VjNM8m4IcaJuX4vy9mw",authDomain:"klaster-indonesia.firebaseapp.com",projectId:"klaster-indonesia",storageBucket:"klaster-indonesia.appspot.com",messagingSenderId:"252780915485",appId:"1:252780915485:web:4ebeeaad8d07e818ef4ff4"}),o=(0,i.v0)(s)},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,i=r(2648).Z,s=r(1598).Z,o=r(7273).Z,a=s(r(7294)),l=i(r(3121)),u=r(2675),c=r(139),h=r(8730);r(7238);var d=i(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,i,s,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,l=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let v=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:i,widthInt:s,qualityInt:l,className:u,imgStyle:c,blurStyle:h,isLazy:d,fill:f,placeholder:p,loading:g,srcString:v,config:y,unoptimized:b,loader:w,onLoadRef:_,onLoadingCompleteRef:I,setBlurComplete:E,setShowAltText:S,onLoad:T,onError:k}=e,A=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},A,r,{width:s,height:i,decoding:"async","data-nimg":f?"fill":"1",className:u,loading:g,style:n({},c,h),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,v,p,_,I,E,b))},[v,p,_,I,E,k,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,p,_,I,E,b)},onError:e=>{S(!0),"blur"===p&&E(!0),k&&k(e)}})))}),y=a.forwardRef((e,t)=>{let r,i;var s,{src:m,sizes:y,unoptimized:b=!1,priority:w=!1,loading:_,className:I,quality:E,width:S,height:T,fill:k,style:A,onLoad:O,onLoadingComplete:C,placeholder:R="empty",blurDataURL:P,layout:N,objectFit:D,objectPosition:L,lazyBoundary:M,lazyRoot:x}=e,U=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let j=a.useContext(h.ImageConfigContext),B=a.useMemo(()=>{let e=f||j||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[j]),F=U,z=F.loader||d.default;delete F.loader;let V="__next_img_default"in z;if(V){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let H=z;z=e=>{let{config:t}=e,r=o(e,["config"]);return H(r)}}if(N){"fill"===N&&(k=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];W&&(A=n({},A,W));let $={responsive:"100vw",fill:"100vw"}[N];$&&!y&&(y=$)}let q="",G=g(S),K=g(T);if("object"==typeof(s=m)&&(p(s)||void 0!==s.src)){let J=p(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(r=J.blurWidth,i=J.blurHeight,P=P||J.blurDataURL,q=J.src,!k){if(G||K){if(G&&!K){let Z=G/J.width;K=Math.round(J.height*Z)}else if(!G&&K){let X=K/J.height;G=Math.round(J.width*X)}}else G=J.width,K=J.height}}let Y=!w&&("lazy"===_||void 0===_);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,Y=!1),B.unoptimized&&(b=!0),V&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[Q,ee]=a.useState(!1),[et,er]=a.useState(!1),en=g(E),ei=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:L}:{},et?{}:{color:"transparent"},A),es="blur"===R&&P&&!Q?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(u.getImageBlurSvg({widthInt:G,heightInt:K,blurWidth:r,blurHeight:i,blurDataURL:P}),'")')}:{},eo=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:o,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let s=/(^|\s)(1?\d?\d)vw/g,o=[];for(let a;a=s.exec(r);a)o.push(parseInt(a[2]));if(o.length){let l=.01*Math.min(...o);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let u=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:u,kind:"x"}}(t,i,o),c=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,n)=>"".concat(a({config:t,src:r,quality:s,width:e})," ").concat("w"===u?e:n+1).concat(u)).join(", "),src:a({config:t,src:r,quality:s,width:l[c]})}}({config:B,src:m,unoptimized:b,width:G,quality:en,sizes:y,loader:z}),ea=m,el={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:F.crossOrigin},eu=a.useRef(O);a.useEffect(()=>{eu.current=O},[O]);let ec=a.useRef(C);a.useEffect(()=>{ec.current=C},[C]);let eh=n({isLazy:Y,imgAttributes:eo,heightInt:K,widthInt:G,qualityInt:en,className:I,imgStyle:ei,blurStyle:es,loading:_,config:B,fill:k,unoptimized:b,placeholder:R,loader:z,srcString:ea,onLoadRef:eu,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:er},F);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},eh,{ref:t})),w?a.default.createElement(l.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},el))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,i=r(7273).Z,s=n(r(7294)),o=r(1003),a=r(7795),l=r(4465),u=r(2692),c=r(8245),h=r(9246),d=r(227),f=r(3468);let p=new Set;function g(e,t,r,n){if(o.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,s=t+"%"+r+"%"+i;if(p.has(s))return;p.add(s)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=s.default.forwardRef(function(e,t){let r,n;let{href:a,as:p,children:v,prefetch:y,passHref:b,replace:w,shallow:_,scroll:I,locale:E,onClick:S,onMouseEnter:T,onTouchStart:k,legacyBehavior:A=!1}=e,O=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,A&&("string"==typeof r||"number"==typeof r)&&(r=s.default.createElement("a",null,r));let C=!1!==y,R=s.default.useContext(u.RouterContext),P=s.default.useContext(c.AppRouterContext),N=null!=R?R:P,D=!R,{href:L,as:M}=s.default.useMemo(()=>{if(!R){let e=m(a);return{href:e,as:p?m(p):e}}let[t,r]=o.resolveHref(R,a,!0);return{href:t,as:p?o.resolveHref(R,p):r||t}},[R,a,p]),x=s.default.useRef(L),U=s.default.useRef(M);A&&(n=s.default.Children.only(r));let j=A?n&&"object"==typeof n&&n.ref:t,[B,F,z]=h.useIntersection({rootMargin:"200px"}),V=s.default.useCallback(e=>{(U.current!==M||x.current!==L)&&(z(),U.current=M,x.current=L),B(e),j&&("function"==typeof j?j(e):"object"==typeof j&&(j.current=e))},[M,j,L,z,B]);s.default.useEffect(()=>{N&&F&&C&&g(N,L,M,{locale:E})},[M,L,F,E,C,null==R?void 0:R.locale,N]);let H={ref:V,onClick(e){A||"function"!=typeof S||S(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,n,i,a,l,u,c,h){let{nodeName:d}=e.currentTarget,f="A"===d.toUpperCase();if(f&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!h})};c?s.default.startTransition(p):p()}(e,N,L,M,w,_,I,E,D,C)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),N&&(C||!D)&&g(N,L,M,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){A||"function"!=typeof k||k(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),N&&(C||!D)&&g(N,L,M,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!A||b||"a"===n.type&&!("href"in n.props)){let W=void 0!==E?E:null==R?void 0:R.locale,$=(null==R?void 0:R.isLocaleDomain)&&d.getDomainLocale(M,W,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);H.href=$||f.addBasePath(l.addLocale(M,W,null==R?void 0:R.defaultLocale))}return A?s.default.cloneElement(n,H):s.default.createElement("a",Object.assign({},O,H),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!s,[c,h]=n.useState(!1),[d,f]=n.useState(null);n.useEffect(()=>{if(s){if(!u&&!c&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:s,elements:i},a.push(r),o.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(n);let t=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&h(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let n=i.requestIdleCallback(()=>h(!0));return()=>i.cancelIdleCallback(n)}},[d,u,r,t,c]);let p=n.useCallback(()=>{h(!1)},[]);return[f,c,p]};var n=r(7294),i=r(4686);let s="function"==typeof IntersectionObserver,o=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s}=e,o=n||t,a=i||r,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3847:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(5893);r(435),r(4744);var i=r(7294),s=r(1163),o=r(4865),a=r.n(o),l=r(1664),u=r.n(l),c=r(4184),h=r.n(c),d=r(84),f=r(6248),p=r(5675),g=r.n(p),m=r(4298),v=r.n(m),y=r(5819),b=r(7832),w=r(5246);function _(e){let{Component:t,pageProps:r}=e,o=(0,s.useRouter)(),[l,c,p]=(0,w.Z)(e=>[e.accessToken,e.setAccessToken,e.setPhoneNumber],f.Z);i.useEffect(()=>{var e,t,r,n,i;(null===(e=o.query)||void 0===e?void 0:null===(t=e.aff)||void 0===t?void 0:t.length)&&((0,y.Z)("affiliate",JSON.parse(JSON.stringify(null!==(i=((null==o?void 0:null===(r=o.query)||void 0===r?void 0:null===(n=r.aff)||void 0===n?void 0:n.toString())||"").replace(/^0/gm,"+62").replace(/^62/gm,"+62").replace(/[^0-9+]/gm,""))&&void 0!==i?i:"")),365),o.replace(o.asPath.split("?")[0],void 0,{shallow:!0}));try{b.I.onAuthStateChanged(async e=>{if(e){p(e.phoneNumber||"");let t=await e.getIdToken();c(t)}else p(""),c("")})}catch(s){console.log(s),p(""),c(""),b.I.signOut()}},[]);let[m,_]=(0,d.Z)(e=>[e.getSelectedItem(),e.getSelectedPaymentMethod(0)],f.Z);return i.useEffect(()=>{let e=e=>{console.log("Loading: ".concat(e)),a().start()},t=()=>{a().done()};return o.events.on("routeChangeStart",e),o.events.on("routeChangeComplete",t),o.events.on("routeChangeError",t),()=>{o.events.off("routeChangeStart",e),o.events.off("routeChangeComplete",t),o.events.off("routeChangeError",t)}},[o]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-KNMQD45V74"}),(0,n.jsx)(v(),{id:"google-analytics",strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          \n          gtag('config', 'G-KNMQD45V74');\n        "}),(0,n.jsxs)("div",{className:h()("app-container m-auto bg-white min-h-screen",(null==m?void 0:m.code)&&(null==_?void 0:_.id)?"pb-28":"pb-12"),children:[(0,n.jsx)("div",{className:"min-h-screen",children:(0,n.jsx)(t,{...r})}),(0,n.jsx)("div",{className:"fixed bottom-0 left-0 right-0 z-10",children:(0,n.jsx)("div",{className:"app-container m-auto px-5 py-3 border-t bg-[#e6eee1]",children:(0,n.jsxs)("div",{className:"flex items-center justify-around",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)(u(),{href:"/",children:[(0,n.jsx)("div",{className:"block relative aspect-square h-4 m-auto",children:(0,n.jsx)(g(),{src:"/static/ui/home.png",alt:"Halaman Awal Klaster Games",fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"text-2xs",children:"Beranda"})]})}),(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)(u(),{href:"/transactions",children:[(0,n.jsx)("div",{className:"block relative aspect-square h-4 m-auto",children:(0,n.jsx)(g(),{src:"/static/ui/bill.png",alt:"Halaman Transaksi Klaster Games",fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"text-2xs",children:"Transaksi"})]})}),(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)(u(),{href:"/deposit",children:[(0,n.jsx)("div",{className:"block relative aspect-square h-4 m-auto",children:(0,n.jsx)(g(),{src:"/static/ui/wallet.png",alt:"Halaman Deposit Klaster Games",fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"text-2xs",children:(null==l?void 0:l.length)?"Deposit":"Login"})]})}),(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsxs)(u(),{href:"/informations",children:[(0,n.jsx)("div",{className:"block relative aspect-square h-4 m-auto",children:(0,n.jsx)(g(),{src:"/static/ui/info.png",alt:"Halaman Informasi Klaster Games",fill:!0,style:{objectFit:"contain"}})}),(0,n.jsx)("div",{className:"text-2xs",children:"Informasi"})]})})]})})})]})]})}},5246:function(e,t,r){"use strict";var n=r(4529);let i=(0,n.ZP)((e,t)=>({accessToken:null,phoneNumber:null,setAccessToken:t=>e(()=>({accessToken:t})),setPhoneNumber:t=>e(()=>({phoneNumber:t}))}));t.Z=i},84:function(e,t,r){"use strict";var n=r(4529),i=r(8126);let s=(0,n.ZP)((e,t)=>({items:[],selectedItemCode:"",userData:{},userWhatsApp:"",selectedPaymentMethodId:0,voucherCode:"",discountAmount:0,setItems:t=>e(()=>({items:t})),setUserData:t=>e(()=>({userData:t})),setSelectedItemCode:t=>e(()=>({selectedItemCode:t})),setUserWhatsApp:t=>e(()=>({userWhatsApp:t})),setSelectedPaymentMethodId:t=>e(()=>({selectedPaymentMethodId:t})),setVoucherCode:t=>e(()=>({voucherCode:t})),setDiscountAmount:t=>e(()=>({discountAmount:t})),getSelectedItem(){let{items:e,selectedItemCode:r}=t();return e.find(e=>e.code===r)},getUserDataString(){let{userData:e}=t();return Object.values(e).join(" - ")},isAllUserDataFilled(){let{userData:e}=t();return Object.values(e).length>0&&Object.values(e).every(e=>e.length>0)},getSelectedPaymentMethod(e){var r,n;let{getSelectedItem:s,selectedPaymentMethodId:o,discountAmount:a}=t();return(0,i.Z)(e?(null===(r=s())||void 0===r?void 0:r.priceWithMarginVIP)||0:(null===(n=s())||void 0===n?void 0:n.priceWithMarginBasic)||0,a).find(e=>e.id===o)}}));t.Z=s},8126:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});let n=[{id:1,type:"direct",provider:"midtrans",channel:"ewallet",method:"qris",isAutoProcess:!0,logo:"/static/logos/qris-logo.svg",name:"Scan QRIS",description:"Bayar dengan DANA, OVO, GoPay, ShopeePay, LinkAja, Mobile Banking dan aplikasi lain yang mendukung pembayaran QRIS",feePercentage:2,feeFixed:0,minAmount:1,maxAmount:1e7,isActive:!0,isDisabled:!1},{id:2,type:"snap",provider:"midtrans",channel:"ewallet",method:"gopay",isAutoProcess:!0,logo:"/static/logos/gopay-logo.svg",name:"GoPay / GoPayLater",description:"Bayar dengan GoPay dan GoPayLater",feePercentage:3,feeFixed:0,minAmount:1,maxAmount:2e7,isActive:!0,isDisabled:!1},{id:3,type:"snap",provider:"midtrans",channel:"virtual_account",method:"bni_va",isAutoProcess:!0,logo:"/static/logos/bni-logo.svg",name:"BNI VA",description:"Bayar dengan Virtual Account BNI",feePercentage:0,feeFixed:4500,minAmount:1e4,maxAmount:5e7,isActive:!0,isDisabled:!1},{id:4,type:"snap",provider:"midtrans",channel:"virtual_account",method:"bri_va",isAutoProcess:!0,logo:"/static/logos/bri-logo.svg",name:"BRI VA",description:"Bayar dengan Virtual Account BRI",feePercentage:0,feeFixed:4500,minAmount:1e4,maxAmount:2e10,isActive:!0,isDisabled:!1},{id:5,type:"snap",provider:"midtrans",channel:"virtual_account",method:"echannel",isAutoProcess:!0,logo:"/static/logos/mandiri-logo.svg",name:"Mandiri VA",description:"Bayar dengan Virtual Account Bank Mandiri",feePercentage:0,feeFixed:4500,minAmount:1e4,maxAmount:999999999,isActive:!0,isDisabled:!1},{id:6,type:"snap",provider:"midtrans",channel:"virtual_account",method:"permata_va",isAutoProcess:!0,logo:"/static/logos/permata-logo.png",name:"Permata VA",description:"Bayar dengan Virtual Account Bank Permata",feePercentage:0,feeFixed:4500,minAmount:1e4,maxAmount:999999999,isActive:!0,isDisabled:!1},{id:9,type:"direct",provider:"klastergames",channel:"deposit",method:"deposit",isAutoProcess:!0,logo:"/static/logos/wallet.png",name:"Deposit",description:"Bayar menggunakan Deposit Klaster Games",feePercentage:0,feeFixed:0,minAmount:1,isActive:!0,isDisabled:!1},{id:10,type:"snap",provider:"unipayment",channel:"crypto",method:"usdt",isAutoProcess:!0,logo:"/static/logos/tether-logo.png",name:"USDT (BSC / BEP-20)",description:"Network BSC / BEP-20 - Blockchain Fee (Gas Fee) Is Not Included",feePercentage:2.5,feeFixed:8e3,minAmount:1,isActive:!0,isDisabled:!1,currency:"USDT"}],i={USDT:15500};function s(e,t){let r=n.map(r=>{var n,s,o,a,l,u;let c={...r},h=(null!==(n=c.feeFixed)&&void 0!==n?n:0)+(null!==(s=c.feeFixed)&&void 0!==s?s:0)*.11+e*((null!==(o=c.feePercentage)&&void 0!==o?o:0)/100+(null!==(a=c.feePercentage)&&void 0!==a?a:0)/100*.11)/(1-((null!==(l=c.feePercentage)&&void 0!==l?l:0)/100+(null!==(u=c.feePercentage)&&void 0!==u?u:0)/100*.11)),d=h=10*Math.ceil(Math.ceil(h)/10);return d=Math.max(0,10*Math.ceil(Math.ceil(d)/10)),c.paymentDiscountAmount=(t||0)>=e?e-1:t||0,c.currency&&"IDR"!==c.currency&&(c.paymentDiscountAmountCurrency=Math.ceil(c.paymentDiscountAmount/i[c.currency]*100)/100),c.paymentFee=h,c.fee=d,c.currency&&"IDR"!==c.currency&&(c.feeCurrency=Math.ceil(c.fee/i[c.currency]*100)/100),c.price=e-c.paymentDiscountAmount,c.price=c.price<=1?1:c.price,c.price+=d,c.currency&&"IDR"!==c.currency&&(c.priceCurrency=Math.ceil(c.price/i[c.currency]*100)/100),(c.minAmount||0)>0&&c.price<(c.minAmount||0)&&(c.isDisabled=!0),(c.maxAmount||0)>0&&c.price>(c.maxAmount||0)&&(c.isDisabled=!0),c});return r.sort((e,t)=>((null==e?void 0:e.price)||0)-((null==t?void 0:t.price)||0)).sort((e,t)=>Number(e.isDisabled||!1)-Number(t.isDisabled||!1)).sort((e,t)=>Number(t.isActive||!1)-Number(e.isActive||!1))}},5819:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1876).Buffer;function i(e,t,r){let i=new Date;i.setTime(i.getTime()+864e5*r);let s="expires="+i.toUTCString();document.cookie=e+"="+n.from(t).toString("base64")+";"+s+";path=/"}},1876:function(e){!function(){var t={675:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,s=l(e),o=s[0],a=s[1],u=new i((o+a)*3/4-a),c=0,h=a>0?o-4:o;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[c++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,s=[],o=0,a=n-i;o<a;o+=16383)s.push(function(e,t,n){for(var i,s=[],o=t;o<n;o+=3)s.push(r[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}(e,o,o+16383>a?a:o+16383));return 1===i?s.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&s.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),s.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,a=s.length;o<a;++o)r[o]=s[o],n[s.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},72:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=r(675),i=r(783),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,a.prototype),t}function a(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!a.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|f(e,t),n=o(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return h(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(C(e,ArrayBuffer)||e&&C(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(C(e,SharedArrayBuffer)||e&&C(e.buffer,SharedArrayBuffer)))return function(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),a.prototype),n}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return a.from(n,t,r);var i=function(e){if(a.isBuffer(e)){var t,r=0|d(e.length),n=o(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return a.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return u(e),o(e<0?0:0|d(e))}function h(e){for(var t=e.length<0?0:0|d(e.length),r=o(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function f(e,t){if(a.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||C(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return T(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return A(e).length;default:if(i)return n?-1:T(e).length;t=(""+t).toLowerCase(),i=!0}}function p(e,t,r){var i,s,o=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=R[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return i=t,s=r,0===i&&s===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(i,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(o)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),o=!0}}function g(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function m(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){var s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var c=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===c?0:s-c)){if(-1===c&&(c=s),s-c+1===l)return c*o}else -1!==c&&(s-=s-c),c=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){for(var h=!0,d=0;d<l;d++)if(u(e,s+d)!==u(t,d)){h=!1;break}if(h)return s}return -1}function y(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,o,a,l,u=e[i],c=null,h=u>239?4:u>223?3:u>191?2:1;if(i+h<=r)switch(h){case 1:u<128&&(c=u);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&u)<<6|63&s)>127&&(c=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&u)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(c=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&u)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(c=l)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function w(e,t,r,n,i,s){if(!a.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function _(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function I(e,t,r,n,s){return t=+t,r>>>=0,s||_(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function E(e,t,r,n,s){return t=+t,r>>>=0,s||_(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.Buffer=a,t.SlowBuffer=function(e){return+e!=e&&(e=0),a.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,a.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(r){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(e,t,r){return(u(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},a.allocUnsafe=function(e){return c(e)},a.allocUnsafeSlow=function(e){return c(e)},a.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==a.prototype},a.compare=function(e,t){if(C(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),C(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(e)||!a.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=a.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(C(s,Uint8Array)&&(s=a.from(s)),!a.isBuffer(s))throw TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},a.byteLength=f,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},a.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):p.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(e){if(!a.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},s&&(a.prototype[s]=a.prototype.inspect),a.prototype.compare=function(e,t,r,n,i){if(C(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,o=r-t,l=Math.min(s,o),u=this.slice(n,i),c=e.slice(t,r),h=0;h<l;++h)if(u[h]!==c[h]){s=u[h],o=c[h];break}return s<o?-1:o<s?1:0},a.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return m(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return m(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,u,c,h,d,f,p,g,m=this.length-t;if((void 0===r||r>m)&&(r=m),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var v=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(t.substr(2*o,2),16);if(a!=a)break;e[r+o]=a}return o}(this,e,t,r);case"utf8":case"utf-8":return l=t,u=r,O(T(e,this.length-l),this,l,u);case"ascii":return c=t,h=r,O(k(e),this,c,h);case"latin1":case"binary":return i=this,s=e,o=t,a=r,O(k(s),i,o,a);case"base64":return d=t,f=r,O(A(e),this,d,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p=t,g=r,O(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-p),this,p,g);default:if(v)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),v=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,a.prototype),n},a.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},a.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},a.prototype.readInt8=function(e,t){return(e>>>=0,t||b(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},a.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),i.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),i.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;w(this,e,t,r,i,0)}var s=1,o=0;for(this[t]=255&e;++o<r&&(s*=256);)this[t+o]=e/s&255;return t+r},a.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;w(this,e,t,r,i,0)}var s=r-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+r},a.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,1,255,0),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);w(this,e,t,r,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<r&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);w(this,e,t,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||w(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},a.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return E(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return E(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(!a.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,n);else if(this===e&&r<t&&t<n)for(var s=i-1;s>=0;--s)e[s+t]=this[s+r];else Uint8Array.prototype.set.call(e,this.subarray(r,n),t);return i},a.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var o=a.isBuffer(e)?e:a.from(e,n),l=o.length;if(0===l)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%l]}return this};var S=/[^+/0-9A-Za-z-_]/g;function T(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function k(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function A(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(S,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function O(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function C(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var R=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}()},783:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-c)-1,f>>=-c,c+=a;c>0;s=256*s+e[t+h],h+=d,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=n;c>0;o=256*o+e[t+h],h+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:(f?-1:1)*(1/0);o+=Math.pow(2,n),s-=u}return(f?-1:1)*o*Math.pow(2,s-n)},t.write=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+f]=255&o,f+=p,o/=256,u-=8);e[r+f-p]|=128*g}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(72);e.exports=i}()},4744:function(){},435:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var l=[],u=!1,c=-1;function h(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,n),o=!1}finally{o&&delete r[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)},4298:function(e,t,r){e.exports=r(3573)},4865:function(e,t,r){var n,i;void 0!==(n="function"==typeof(i=function(){var e,t,r,n={};n.version="0.2.0";var i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,r){return e<t?t:e>r?r:e}n.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(i[t]=r);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=s(e,i.minimum,1),n.status=1===e?null:e;var r=n.render(!t),l=r.querySelector(i.barSelector),u=i.speed,c=i.easing;return r.offsetWidth,o(function(t){var s,o;""===i.positionUsing&&(i.positionUsing=n.getPositioningCSS()),a(l,(s=e,(o="translate3d"===i.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===i.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+u+"ms "+c,o)),1===e?(a(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){a(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},u)},u)):setTimeout(t,u)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},i.trickleSpeed)};return i.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=i.template;var r,s,o=t.querySelector(i.barSelector),l=e?"-100":(-1+(n.status||0))*100,c=document.querySelector(i.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),!i.showSpinner&&(s=t.querySelector(i.spinnerSelector))&&d(s),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(i.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var o=(r=[],function(e){r.push(e),1==r.length&&function e(){var t=r.shift();t&&t(e)}()}),a=function(){var e=["Webkit","O","Moz","ms"],t={};function r(r,n,i){var s;n=t[s=(s=n).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var r=document.body.style;if(t in r)return t;for(var n,i=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((n=e[i]+s)in r)return n;return t}(s)),r.style[n]=i}return function(e,t){var n,i,s=arguments;if(2==s.length)for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&r(e,n,i);else r(e,s[1],s[2])}}();function l(e,t){return("string"==typeof e?e:h(e)).indexOf(" "+t+" ")>=0}function u(e,t){var r=h(e);l(r,t)||(e.className=(r+t).substring(1))}function c(e,t){var r,n=h(e);l(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function h(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?i.call(t,r,t,e):i)&&(e.exports=n)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=n.useState,o=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(n){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=s({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},6742:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),i=r(1688),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,a=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var h=a(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=u(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(o=e,a=r)}var o,a,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]);var f=o(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=f},[f]),c(f),f}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(6742)},5816:function(e,t,r){"use strict";let n,i;r.d(t,{Jn:function(){return L},qX:function(){return P},Xd:function(){return R},Mq:function(){return x},ZF:function(){return M},KN:function(){return U}});var s,o=r(8463),a=r(3333),l=r(4444);let u=(e,t)=>t.some(t=>e instanceof t),c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(v(this),e),m(c.get(this))}:function(...e){return m(t.apply(v(this),e))}:function(e,...r){let n=t.call(v(this),e,...r);return d.set(n,e.sort?e.sort():[e]),m(n)}:(t instanceof IDBTransaction&&function(e){if(h.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});h.set(e,t)}(t),u(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,g):t;return r!==e&&(f.set(e,r),p.set(r,e)),r}let v=e=>p.get(e),y=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function _(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||y.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return w.set(t,s),s}g={...s=g,get:(e,t,r)=>_(e,t)||s.get(e,t,r),has:(e,t)=>!!_(e,t)||s.has(e,t)};/**
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
 */class I{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let E="@firebase/app",S="0.9.0",T=new a.Yd("@firebase/app"),k="[DEFAULT]",A={[E]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},O=new Map,C=new Map;function R(e){let t=e.name;if(C.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(C.set(t,e),O.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function P(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let N=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class D{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}/**
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
 */let L="9.15.0";function M(e,t={}){let r=e;if("object"!=typeof t){let n=t;t={name:n}}let i=Object.assign({name:k,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw N.create("bad-app-name",{appName:String(s)});if(r||(r=(0,l.aH)()),!r)throw N.create("no-options");let a=O.get(s);if(a){if((0,l.vZ)(r,a.options)&&(0,l.vZ)(i,a.config))return a;throw N.create("duplicate-app",{appName:s})}let u=new o.H0(s);for(let c of C.values())u.addComponent(c);let h=new D(r,i,u);return O.set(s,h),h}function x(e=k){let t=O.get(e);if(!t&&e===k)return M();if(!t)throw N.create("no-app",{appName:e});return t}function U(e,t,r){var n;let i=null!==(n=A[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),T.warn(l.join(" "));return}R(new o.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let j="firebase-heartbeat-store",B=null;function F(){return B||(B=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=m(o);return n&&o.addEventListener("upgradeneeded",e=>{n(m(o.result),e.oldVersion,e.newVersion,m(o.transaction))}),r&&o.addEventListener("blocked",()=>r()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(j)}}).catch(e=>{throw N.create("idb-open",{originalErrorMessage:e.message})})),B}async function z(e){try{let t=await F();return t.transaction(j).objectStore(j).get(H(e))}catch(n){if(n instanceof l.ZR)T.warn(n.message);else{let r=N.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});T.warn(r.message)}}}async function V(e,t){try{let r=await F(),n=r.transaction(j,"readwrite"),i=n.objectStore(j);return await i.put(t,H(e)),n.done}catch(o){if(o instanceof l.ZR)T.warn(o.message);else{let s=N.create("idb-set",{originalErrorMessage:null==o?void 0:o.message});T.warn(s.message)}}}function H(e){return`${e.name}!${e.options.appId}`}class W{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new q(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=$();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=$(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let s=r.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),G(r)>t){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),G(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function $(){let e=new Date;return e.toISOString().substring(0,10)}class q{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await z(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return V(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function G(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}R(new o.wA("platform-logger",e=>new I(e),"PRIVATE")),R(new o.wA("heartbeat",e=>new W(e),"PRIVATE")),U(E,S,""),U(E,S,"esm2017"),U("fire-js","")},8463:function(e,t,r){"use strict";r.d(t,{H0:function(){return a},wA:function(){return i}});var n=r(4444);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let s="[DEFAULT]";/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new n.BH;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(s){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch(a){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,s]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(i);r===o&&s.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,r){"use strict";var n,i;r.d(t,{Yd:function(){return c},in:function(){return n}});/**
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
 */let s=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},a=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}},7908:function(e,t,r){"use strict";r.d(t,{RO:function(){return tg},lI:function(){return tf},v0:function(){return t1},sB:function(){return e$}});var n,i=r(4444),s=r(5816),o=r(3333);function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}var l=r(8463);function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let c=new i.LL("auth","Firebase",u()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o.in.ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}/**
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
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function g(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return c.create(e,...t)}function m(e,t,...r){if(!e)throw g(t,...r)}function v(e){let t="INTERNAL ASSERTION FAILED: "+e;throw d(t),Error(t)}/**
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
 */let y=new Map;function b(e){e instanceof Function||v("Expected a class definition");let t=y.get(e);return t?(t instanceof e||v("Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}/**
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
 */function w(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
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
 */class E{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||v("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(_()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function S(e,t){e.emulator||v("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class T{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */let k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},A=new E(3e4,6e4);function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,r,n,s={}){return R(e,s,async()=>{let s={},o={};n&&("GET"===t?o=n:s={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(N(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function R(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},k),t);try{let s=new D(e),o=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();let a=await o.json();if("needConfirmation"in a)throw L(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{let l=o.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw L(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===c)throw L(e,"email-already-in-use",a);if("USER_DISABLED"===c)throw L(e,"user-disabled",a);let d=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw function(e,t,r){let n=Object.assign(Object.assign({},u()),{[t]:r}),s=new i.LL("auth","Firebase",n);return s.create(t,{appName:e.name})}(e,d,h);f(e,d)}}catch(p){if(p instanceof i.ZR)throw p;f(e,"network-request-failed")}}async function P(e,t,r,n,i={}){let s=await C(e,t,r,n,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function N(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?S(e.config,i):`${e.config.apiScheme}://${i}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),A.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function L(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=p(e,t,n);return i.customData._tokenResponse=r,i}/**
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
 */async function M(e,t){return C(e,"POST","/v1/accounts:delete",t)}async function x(e,t){return C(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function U(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(r){}}async function j(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=F(n);m(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:U(B(s.auth_time)),issuedAtTime:U(B(s.iat)),expirationTime:U(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function B(e){return 1e3*Number(e)}function F(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return d("JWT malformed, contained fewer than 3 sections"),null;try{let s=(0,i.tV)(r);if(!s)return d("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(o){return d("Caught error parsing JWT payload as JSON",null==o?void 0:o.toString()),null}}/**
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
 */async function z(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}/**
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
 */class V{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}{this.errorBackoff=3e4;let n=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=n-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class H{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function W(e){var t;let r=e.auth,n=await e.getIdToken(),i=await z(e,x(r,{idToken:n}));m(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=a(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}async function $(e){let t=(0,i.m9)(e);await W(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
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
 */async function q(e,t){let r=await R(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=N(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class G{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(void 0!==e.idToken,"internal-error"),m(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=F(e);return m(t,"internal-error"),m(void 0!==t.exp,"internal-error"),m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await q(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new G;return r&&(m("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(m("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(m("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new G,this.toJSON())}_performRefresh(){return v("not implemented")}}/**
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
 */function K(e,t){m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class J{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await z(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j(this,e)}reload(){return $(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new J(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await W(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await z(this,M(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:E}=t;m(b&&E,e,"internal-error");let S=G.fromJSON(this.name,E);m("string"==typeof b,e,"internal-error"),K(c,e.name),K(h,e.name),m("boolean"==typeof w,e,"internal-error"),m("boolean"==typeof _,e,"internal-error"),K(d,e.name),K(f,e.name),K(p,e.name),K(g,e.name),K(v,e.name),K(y,e.name);let T=new J({uid:b,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:v,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new G;n.updateFromServerResponse(t);let i=new J({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await W(i),i}}/**
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
 */class Z{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */function X(e,t,r){return`firebase:${e}:${t}:${r}`}Z.type="NONE";class Y{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=X(this.userKey,n.apiKey,i),this.fullPersistenceKey=X("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?J._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Y(b(Z),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||b(Z),s=X(r,e.config.apiKey,e.name),o=null;for(let a of t)try{let l=await a._get(s);if(l){let u=J._fromJSON(e,l);a!==i&&(o=u),i=a;break}}catch(c){}let h=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&h.length&&(i=h[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new Y(i,e,r)}}/**
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
 */function Q(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(en(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(es(t))return"Blackberry";if(eo(t))return"Webos";if(et(t))return"Safari";if((t.includes("chrome/")||er(t))&&!t.includes("edge/"))return"Chrome";if(ei(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function ee(e=(0,i.z$)()){return/firefox\//i.test(e)}function et(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function er(e=(0,i.z$)()){return/crios\//i.test(e)}function en(e=(0,i.z$)()){return/iemobile/i.test(e)}function ei(e=(0,i.z$)()){return/android/i.test(e)}function es(e=(0,i.z$)()){return/blackberry/i.test(e)}function eo(e=(0,i.z$)()){return/webos/i.test(e)}function ea(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function el(e=(0,i.z$)()){return ea(e)||ei(e)||eo(e)||es(e)||/windows phone/i.test(e)||en(e)}/**
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
 */function eu(e,t=[]){let r;switch(e){case"Browser":r=Q((0,i.z$)());break;case"Worker":r=`${Q((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
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
 */class ec{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let i=e(t);r(i)}catch(s){n(s)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(s){for(let n of(t.reverse(),t))try{n()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==s?void 0:s.message})}}}/**
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
 */class eh{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new ec(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=b(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await W(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(b(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&b(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[b(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(m(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ed(e){return(0,i.m9)(e)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ep(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function eg(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
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
 */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}async function ev(e,t){return C(e,"POST","/v1/accounts:update",t)}/**
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
 */async function ey(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}/**
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
 */async function eb(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function ew(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}/**
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
 */class e_ extends em{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new e_(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new e_(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ey(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eb(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ev(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ew(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function eI(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}class eE extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new eE(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=a(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new eE(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return eI(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,eI(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,eI(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}/**
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
 */async function eS(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function eT(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function ek(e,t){let r=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(r.temporaryProof)throw L(e,"account-exists-with-different-credential",r);return r}let eA={USER_NOT_FOUND:"user-not-found"};async function eO(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,r),eA)}/**
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
 */class eC extends em{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new eC({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new eC({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return eT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ek(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return eO(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new eC({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class eR{constructor(e){var t,r,n,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
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
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);m(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id,s=n?(0,i.zd)((0,i.pd)(n)).link:null;return s||n||r||t||e}(e);try{return new eR(t)}catch(r){return null}}}/**
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
 */class eP{constructor(){this.providerId=eP.PROVIDER_ID}static credential(e,t){return e_._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=eR.parseLink(t);return m(r,"argument-error"),e_._fromEmailAndCode(e,r.code,r.tenantId)}}eP.PROVIDER_ID="password",eP.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eP.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eN{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eD extends eN{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class eL extends eD{constructor(){super("facebook.com")}static credential(e){return eE._fromParams({providerId:eL.PROVIDER_ID,signInMethod:eL.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return eL.credentialFromTaggedObject(e)}static credentialFromError(e){return eL.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return eL.credential(e.oauthAccessToken)}catch(t){return null}}}eL.FACEBOOK_SIGN_IN_METHOD="facebook.com",eL.PROVIDER_ID="facebook.com";/**
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
 */class eM extends eD{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return eE._fromParams({providerId:eM.PROVIDER_ID,signInMethod:eM.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return eM.credentialFromTaggedObject(e)}static credentialFromError(e){return eM.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return eM.credential(t,r)}catch(n){return null}}}eM.GOOGLE_SIGN_IN_METHOD="google.com",eM.PROVIDER_ID="google.com";/**
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
 */class ex extends eD{constructor(){super("github.com")}static credential(e){return eE._fromParams({providerId:ex.PROVIDER_ID,signInMethod:ex.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ex.credentialFromTaggedObject(e)}static credentialFromError(e){return ex.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ex.credential(e.oauthAccessToken)}catch(t){return null}}}ex.GITHUB_SIGN_IN_METHOD="github.com",ex.PROVIDER_ID="github.com";/**
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
 */class eU extends eD{constructor(){super("twitter.com")}static credential(e,t){return eE._fromParams({providerId:eU.PROVIDER_ID,signInMethod:eU.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eU.credentialFromTaggedObject(e)}static credentialFromError(e){return eU.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return eU.credential(t,r)}catch(n){return null}}}eU.TWITTER_SIGN_IN_METHOD="twitter.com",eU.PROVIDER_ID="twitter.com";/**
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
 */class ej{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await J._fromIdTokenResponse(e,r,n),s=eB(r),o=new ej({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=eB(r);return new ej({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function eB(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class eF extends i.ZR{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,eF.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new eF(e,t,r,n)}}function ez(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw eF._fromErrorAndOperation(e,r,t,n);throw r})}async function eV(e,t,r=!1){let n=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return ej._forOperation(e,"link",n)}/**
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
 */async function eH(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let s=await z(e,ez(n,i,t,e),r);m(s.idToken,n,"internal-error");let o=F(s.idToken);m(o,n,"internal-error");let{sub:a}=o;return m(e.uid===a,n,"user-mismatch"),ej._forOperation(e,i,s)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&f(n,"user-mismatch"),l}}/**
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
 */async function eW(e,t,r=!1){let n="signIn",i=await ez(e,n,t),s=await ej._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function e$(e,t){return eW(ed(e),t)}new WeakMap;let eq="__sak";/**
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
 */class eG{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(eq,"1"),this.storage.removeItem(eq),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class eK extends eG{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */function(){let e=(0,i.z$)();return et(e)||ea(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let s=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);(0,i.w1)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eK.type="LOCAL";/**
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
 */class eJ extends eG{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eJ.type="SESSION";/**
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
 */class eZ{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new eZ(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(r){return{fulfilled:!1,reason:r}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */function eX(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}eZ.receivers=[];/**
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
 */class eY{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=eX("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function eQ(){return window}/**
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
 */function e0(){return void 0!==eQ().WorkerGlobalScope&&"function"==typeof eQ().importScripts}async function e1(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
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
 */let e2="firebaseLocalStorageDb",e4="firebaseLocalStorage",e6="fbase_key";class e3{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function e8(e,t){return e.transaction([e4],t?"readwrite":"readonly").objectStore(e4)}function e5(){let e=indexedDB.open(e2,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(e4,{keyPath:e6})}catch(n){r(n)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(e4)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(e2);return new e3(e).toPromise()}(),t(await e5()))})})}async function e9(e,t,r){let n=e8(e,!0).put({[e6]:t,value:r});return new e3(n).toPromise()}async function e7(e,t){let r=e8(e,!1).get(t),n=await new e3(r).toPromise();return void 0===n?null:n.value}function te(e,t){let r=e8(e,!0).delete(t);return new e3(r).toPromise()}class tt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await e5()),this.db}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eZ._getInstance(e0()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await e1(),!this.activeServiceWorker)return;this.sender=new eY(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(r){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await e5();return await e9(e,eq,"1"),await te(e,eq),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>e9(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>e7(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>te(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=e8(e,!1).getAll();return new e3(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
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
 */async function tr(e){return(await C(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}function tn(e){return new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=p("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)})}function ti(e){return`__${e}${Math.floor(1e6*Math.random())}`}tt.type="LOCAL";class ts{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let r=this.counter;return this._widgets.set(r,new to(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;let r=e||1e12;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class to{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;m(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<50;n++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
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
 */let ta=ti("rcb"),tl=new E(3e4,6e4);class tu{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=eQ().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(m(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t))?Promise.resolve(eQ().grecaptcha):new Promise((r,n)=>{let s=eQ().setTimeout(()=>{n(p(e,"network-request-failed"))},tl.get());eQ()[ta]=()=>{eQ().clearTimeout(s),delete eQ()[ta];let i=eQ().grecaptcha;if(!i){n(p(e,"internal-error"));return}let o=i.render;i.render=(e,t)=>{let r=o(e,t);return this.counter++,r},this.hostLanguage=t,r(i)};let o=`https://www.google.com/recaptcha/api.js??${(0,i.xO)({onload:ta,render:"explicit",hl:t})}`;tn(o).catch(()=>{clearTimeout(s),n(p(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=eQ().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class tc{async load(e){return new ts(e)}clearedOneInstance(){}}/**
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
 */let th="recaptcha",td={theme:"light",type:"image"};class tf{constructor(e,t=Object.assign({},td),r){this.parameters=t,this.type=th,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ed(r),this.isInvisible="invisible"===this.parameters.size,m("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof e?document.getElementById(e):e;m(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tc:new tu,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(r=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),r(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){m(!this.parameters.sitekey,this.auth,"argument-error"),m(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),m("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let r=eQ()[e];"function"==typeof r&&r(t)}}}assertNotDestroyed(){m(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;m(_()&&!e0(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await tr(this.auth);m(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return m(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}async function tp(e,t,r){var n,i,s;let o=await r.verify();try{let a;if(m("string"==typeof o,e,"argument-error"),m(r.type===th,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){m("enroll"===l.type,e,"internal-error");let u=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,i)));return u.phoneSessionInfo.sessionInfo}{m("signin"===l.type,e,"internal-error");let c=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;m(c,e,"missing-multi-factor-info");let h=await (s={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:o}},C(e,"POST","/v2/accounts/mfaSignIn:start",O(e,s)));return h.phoneResponseInfo.sessionInfo}}{let{sessionInfo:d}=await eS(e,{phoneNumber:a.phoneNumber,recaptchaToken:o});return d}}finally{r._reset()}}/**
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
 */class tg{constructor(e){this.providerId=tg.PROVIDER_ID,this.auth=ed(e)}verifyPhoneNumber(e,t){return tp(this.auth,e,(0,i.m9)(t))}static credential(e,t){return eC._fromVerification(e,t)}static credentialFromResult(e){return tg.credentialFromTaggedObject(e)}static credentialFromError(e){return tg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?eC._fromTokenResponse(t,r):null}}tg.PROVIDER_ID="phone",tg.PHONE_SIGN_IN_METHOD="phone";/**
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
 */class tm extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eI(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eI(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eI(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tv(e){return eW(e.auth,new tm(e),e.bypassAuthState)}function ty(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),eH(r,new tm(e),e.bypassAuthState)}async function tb(e){let{auth:t,user:r}=e;return m(r,t,"internal-error"),eV(r,new tm(e),e.bypassAuthState)}/**
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
 */class tw{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tv;case"linkViaPopup":case"linkViaRedirect":return tb;case"reauthViaPopup":case"reauthViaRedirect":return ty;default:f(this.auth,"internal-error")}}resolve(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||v("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */let t_=new E(2e3,1e4);class tI extends tw{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,tI.currentPopupAction&&tI.currentPopupAction.cancel(),tI.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||v("Popup operations only handle one event");let e=eX();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tI.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,t_.get())};e()}}tI.currentPopupAction=null;let tE=new Map;class tS extends tw{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=tE.get(this.auth._key());if(!e){try{let t=await tT(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tE.set(this.auth._key(),e)}return this.bypassAuthState||tE.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tT(e,t){let r=X("pendingRedirect",t.config.apiKey,t.name),n=b(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function tk(e,t){tE.set(e._key(),t)}async function tA(e,t,r=!1){let n=ed(e),i=t?b(t):(m(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new tS(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class tO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tR(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!tR(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tC(e))}saveEventToCache(e){this.cachedEventUids.add(tC(e)),this.lastProcessedEventTime=Date.now()}}function tC(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function tR({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
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
 */async function tP(e,t={}){return C(e,"GET","/v1/projects",t)}/**
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
 */let tN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tD=/^https?/;async function tL(e){if(e.config.emulator)return;let{authorizedDomains:t}=await tP(e);for(let r of t)try{if(function(e){let t=w(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!tD.test(r))return!1;if(tN.test(e))return n===e;let s=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+s+"|"+s+")$","i");return o.test(n)}(r))return}catch(n){}f(e,"unauthorized-domain")}/**
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
 */let tM=new E(3e4,6e4);function tx(){let e=eQ().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}let tU=null,tj=new E(5e3,15e3),tB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function tz(e){let t=await (tU=tU||new Promise((t,r)=>{var n,i,s;function o(){tx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tx(),r(p(e,"network-request-failed"))},timeout:tM.get()})}if(null===(i=null===(n=eQ().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=eQ().gapi)||void 0===s?void 0:s.load)o();else{let a=ti("iframefcb");return eQ()[a]=()=>{gapi.load?o():r(p(e,"network-request-failed"))},tn(`https://apis.google.com/js/api.js?onload=${a}`).catch(e=>r(e))}}).catch(e=>{throw tU=null,e})),r=eQ().gapi;return m(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;m(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?S(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=tF.get(e.config.apiHost);o&&(n.eid=o);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,i.xO)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tB,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=p(e,"network-request-failed"),s=eQ().setTimeout(()=>{n(i)},tj.get());function o(){eQ().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
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
 */let tV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tH{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tW(e,t,r,n,o,a){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.Jn,eventId:o};if(t instanceof eN)for(let[u,c]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[u]=c;if(t instanceof eD){let h=t.getScopes().filter(e=>""!==e);h.length>0&&(l.scopes=h.join(","))}e.tenantId&&(l.tid=e.tenantId);let d=l;for(let f of Object.keys(d))void 0===d[f]&&delete d[f];return`${function({config:e}){return e.emulator?S(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(d).slice(1)}`}/**
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
 */let t$="webStorageSupport",tq=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eJ,this._completeRedirectFn=tA,this._overrideRedirectResult=tk}async _openPopup(e,t,r,n){var s;(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||v("_initialize() not called before _openPopup()");let o=tW(e,t,r,w(),n);return function(e,t,r,n=500,s=600){let o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},tV),{width:n.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();r&&(l=er(c)?"_blank":r),ee(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,i.z$)()){var t;return ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new tH(null);let d=window.open(t||"",l,h);m(d,e,"popup-blocked");try{d.focus()}catch(f){}return new tH(d)}(e,o,eX())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=tW(e,t,r,w(),n),eQ().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:n}=this.eventManagers[t];return r?Promise.resolve(r):(n||v("If manager is not set, promise should be"),n)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await tz(e),r=new tO(e);return t.register("authEvent",t=>{m(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(t$,{type:t$},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[t$];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return el()||et()||ea()}};class tG{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class tK extends tG{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tK(e)}_finalizeEnroll(e,t,r){return C(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return C(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var tJ="@firebase/auth",tZ="0.21.0";/**
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
 */class tX{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let tY=(0,i.Pz)("authIdTokenMaxAge")||300,tQ=null,t0=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>tY)return;let i=null==r?void 0:r.token;tQ!==i&&(tQ=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function t1(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
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
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let n=r.getImmediate(),o=r.getOptions();if((0,i.vZ)(o,null!=t?t:{}))return n;f(n,"already-initialized")}let a=r.initialize({options:t});return a}(e,{popupRedirectResolver:tq,persistence:[tt,eK,eJ]}),n=(0,i.Pz)("authTokenSyncURL");if(n){var o,a;let l=t0(n);o=()=>l(r.currentUser),(0,i.m9)(r).beforeAuthStateChanged(l,o),a=e=>l(e),(0,i.m9)(r).onIdTokenChanged(a,void 0,void 0)}let u=(0,i.q4)("auth");return u&&function(e,t,r){let n=ed(e);m(n._canInitEmulator,n,"emulator-config-failed"),m(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=ep(t),{host:o,port:a}=function(e){let t=ep(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let s=i[1];return{host:s,port:eg(n.substr(s.length+1))}}{let[o,a]=n.split(":");return{host:o,port:eg(a)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${u}`),r}n="Browser",(0,s.Xd)(new l.wA("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((e,r)=>{m(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),m(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eu(n)},a=new eh(e,r,i);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(b);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s.Xd)(new l.wA("auth-internal",e=>{let t=ed(e.getProvider("auth").getImmediate());return new tX(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tJ,tZ,/**
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
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(n)),(0,s.KN)(tJ,tZ,"esm2017")},4529:function(e,t,r){"use strict";r.d(t,{ZP:function(){return u}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let s=t;t=(null!=n?n:"object"!=typeof i)?i:Object.assign({},t,i),r.forEach(e=>e(t,s))}},i=()=>t,s=e=>(r.add(e),()=>r.delete(e)),o=()=>r.clear(),a={setState:n,getState:i,subscribe:s,destroy:o};return t=e(n,i,a),a},i=e=>e?n(e):n;var s=r(7294),o=r(2798);let{useSyncExternalStoreWithSelector:a}=o,l=e=>{let t="function"==typeof e?i(e):e,r=(e,r)=>(function(e,t=e.getState,r){let n=a(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,s.useDebugValue)(n),n})(t,e,r);return Object.assign(r,t),r},u=e=>e?l(e):l},6248:function(e,t,r){"use strict";function n(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let i of e)if(!t.has(i))return!1;return!0}let s=Object.keys(e);if(s.length!==Object.keys(t).length)return!1;for(let o=0;o<s.length;o++)if(!Object.prototype.hasOwnProperty.call(t,s[o])||!Object.is(e[s[o]],t[s[o]]))return!1;return!0}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);