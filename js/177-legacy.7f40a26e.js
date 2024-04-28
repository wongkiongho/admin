"use strict";(self["webpackChunkvue_black_dashboard"]=self["webpackChunkvue_black_dashboard"]||[]).push([[177],{2201:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card"},[e._m(0),t("div",{staticClass:"card-body"},[t("div",{staticClass:"input-container"},[t("div",{staticClass:"input-group row"},[t("label",{staticClass:"label",attrs:{for:"appName"}},[e._v("App Name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appName,expression:"appName"}],attrs:{type:"text",id:"appName",required:""},domProps:{value:e.appName},on:{input:function(t){t.target.composing||(e.appName=t.target.value)}}})]),t("div",{staticClass:"input-group row"},[t("label",{staticClass:"label",attrs:{for:"appPackageName"}},[e._v("App Package Name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appPackageName,expression:"appPackageName"}],attrs:{type:"text",id:"appPackageName",required:""},domProps:{value:e.appPackageName},on:{input:function(t){t.target.composing||(e.appPackageName=t.target.value)}}}),t("label",{staticClass:"ml-2",staticStyle:{"font-size":"15px"}},[e._v(".android.app")])]),t("div",{staticClass:"input-group row"},[t("label",{staticClass:"label",attrs:{for:"appType"}},[e._v("App Type:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appType,expression:"appType"}],attrs:{type:"text",id:"appType",required:""},domProps:{value:e.appType},on:{input:function(t){t.target.composing||(e.appType=t.target.value)}}})]),t("div",{staticClass:"input-group row"},[t("label",{staticClass:"label",attrs:{for:"location"}},[e._v("Location:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.location,expression:"location"}],attrs:{type:"text",id:"location",required:""},domProps:{value:e.location},on:{input:function(t){t.target.composing||(e.location=t.target.value)}}})]),t("div",{staticClass:"input-group row"},[t("label",{staticClass:"label",attrs:{for:"appStoreRanking"}},[e._v("App Store Ranking:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.appStoreRanking,expression:"appStoreRanking"}],attrs:{type:"number",id:"appStoreRanking",required:""},domProps:{value:e.appStoreRanking},on:{input:function(t){t.target.composing||(e.appStoreRanking=t.target.value)}}})])]),t("div",{staticClass:"file-upload"},[t("input",{attrs:{type:"file",multiple:""},on:{change:e.onFileChange}})]),t("div",{staticClass:"d-flex button-container"},[t("button",{staticClass:"mr-3",on:{click:e.saveToLocalStorage}},[e._v("Save to Local Storage")]),t("button",{staticClass:"mr-3",on:{click:e.restoreFromLocalStorage}},[e._v("Restore from Local Storage")]),t("button",{attrs:{disabled:0===e.files.length||!e.appName},on:{click:e.downloadFileNames}},[e._v(" Download File Information ")])])])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"title"},[e._v("App Information")])])}],i=r(1114),o=(r(8706),r(3418),r(2010),r(3110),r(9432),r(6099),r(9449),r(7764),r(8156),r(3500),r(2953),r(3296),r(7208),r(8408),r(4603),r(7566),r(8721),{data:function(){return{files:[],appName:"",appPackageName:"",appType:"",location:"",appStoreRanking:""}},mounted:function(){this.restoreFromLocalStorage()},computed:{fullAppPackageName:function(){return this.appPackageName.endsWith(".android.app")?this.appPackageName:"".concat(this.appPackageName,".android.app")}},methods:(0,i.A)((0,i.A)((0,i.A)((0,i.A)({onFileChange:function(e){this.files=Array.from(e.target.files)}},"onFileChange",(function(e){this.files=Array.from(e.target.files)})),"downloadFileNames",(function(){var e=this.fullAppPackageName?"".concat(this.fullAppPackageName,".txt"):"app_info.txt",t="1. App Information:\n";t+="   - App Name: ".concat(this.appName,"\n"),t+="   - App Package Name: ".concat(this.fullAppPackageName,"\n"),t+="   - App Type: ".concat(this.appType||"N/A","\n"),t+="   - Location: ".concat(this.location||"N/A","\n"),t+="   - App Store Ranking: ".concat(this.appStoreRanking||"N/A","\n\n"),t+="2. Testing Notes:\n",this.files.forEach((function(e,r){t+="   - Screenshot ".concat(String(r+1).padStart(2,"0"),": ").concat(e.name,"\n")}));var r=new Blob([t],{type:"text/plain"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=e,n.click(),URL.revokeObjectURL(n.href)})),"saveToLocalStorage",(function(){var e={appName:this.appName,appPackageName:this.fullAppPackageName,appType:this.appType,location:this.location,appStoreRanking:this.appStoreRanking};localStorage.setItem("appInfo",JSON.stringify(e))})),"restoreFromLocalStorage",(function(){var e=localStorage.getItem("appInfo");if(e){var t=JSON.parse(e);this.appName=t.appName||"",this.appPackageName=t.appPackageName||"",this.appType=t.appType||"",this.location=t.location||"",this.appStoreRanking=t.appStoreRanking||""}}))}),s=o,u=r(1656),c=(0,u.A)(s,n,a,!1,null,"95bf77c2",null),l=c.exports},7916:function(e,t,r){var n=r(6080),a=r(9565),i=r(8981),o=r(6319),s=r(4209),u=r(3517),c=r(6198),l=r(4659),h=r(81),f=r(851),p=Array;e.exports=function(e){var t=i(e),r=u(this),g=arguments.length,v=g>1?arguments[1]:void 0,d=void 0!==v;d&&(v=n(v,g>2?arguments[2]:void 0));var m,y,b,w,S,k,P=f(t),R=0;if(!P||this===p&&s(P))for(m=c(t),y=r?new this(m):p(m);m>R;R++)k=d?v(t[R],R):t[R],l(y,R,k);else for(y=r?new this:[],w=h(t,P),S=w.next;!(b=a(S,w)).done;R++)k=d?o(w,v,[b.value,R],!0):b.value,l(y,R,k);return y.length=R,y}},4488:function(e,t,r){var n=r(7680),a=Math.floor,i=function(e,t){var r=e.length;if(r<8){var o,s,u=1;while(u<r){s=u,o=e[u];while(s&&t(e[s-1],o)>0)e[s]=e[--s];s!==u++&&(e[s]=o)}}else{var c=a(r/2),l=i(n(e,0,c),t),h=i(n(e,c),t),f=l.length,p=h.length,g=0,v=0;while(g<f||v<p)e[g+v]=g<f&&v<p?t(l[g],h[v])<=0?l[g++]:h[v++]:g<f?l[g++]:h[v++]}return e};e.exports=i},6319:function(e,t,r){var n=r(8551),a=r(9539);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(o){a(e,"throw",o)}}},6279:function(e,t,r){var n=r(6840);e.exports=function(e,t,r){for(var a in t)n(e,a,t[a],r);return e}},6933:function(e,t,r){var n=r(9504),a=r(4376),i=r(4901),o=r(4576),s=r(655),u=n([].push);e.exports=function(e){if(i(e))return e;if(a(e)){for(var t=e.length,r=[],n=0;n<t;n++){var c=e[n];"string"==typeof c?u(r,c):"number"!=typeof c&&"Number"!==o(c)&&"String"!==o(c)||u(r,s(c))}var l=r.length,h=!0;return function(e,t){if(h)return h=!1,t;if(a(this))return t;for(var n=0;n<l;n++)if(r[n]===e)return t}}}},298:function(e,t,r){var n=r(4576),a=r(5397),i=r(8480).f,o=r(7680),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return i(e)}catch(t){return o(s)}};e.exports.f=function(e){return s&&"Window"===n(e)?u(e):i(a(e))}},3063:function(e,t,r){var n=r(9392);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},533:function(e,t,r){var n=r(9504),a=r(8014),i=r(655),o=r(2333),s=r(7750),u=n(o),c=n("".slice),l=Math.ceil,h=function(e){return function(t,r,n){var o,h,f=i(s(t)),p=a(r),g=f.length,v=void 0===n?" ":i(n);return p<=g||""===v?f:(o=p-g,h=u(v,l(o/v.length)),h.length>o&&(h=c(h,0,o)),e?f+h:h+f)}};e.exports={start:h(!1),end:h(!0)}},6098:function(e,t,r){var n=r(9504),a=2147483647,i=36,o=1,s=26,u=38,c=700,l=72,h=128,f="-",p=/[^\0-\u007E]/,g=/[.\u3002\uFF0E\uFF61]/g,v="Overflow: input needs wider integers to process",d=i-o,m=RangeError,y=n(g.exec),b=Math.floor,w=String.fromCharCode,S=n("".charCodeAt),k=n([].join),P=n([].push),R=n("".replace),U=n("".split),L=n("".toLowerCase),N=function(e){var t=[],r=0,n=e.length;while(r<n){var a=S(e,r++);if(a>=55296&&a<=56319&&r<n){var i=S(e,r++);56320===(64512&i)?P(t,((1023&a)<<10)+(1023&i)+65536):(P(t,a),r--)}else P(t,a)}return t},A=function(e){return e+22+75*(e<26)},x=function(e,t,r){var n=0;e=r?b(e/c):e>>1,e+=b(e/t);while(e>d*s>>1)e=b(e/d),n+=i;return b(n+(d+1)*e/(e+u))},C=function(e){var t=[];e=N(e);var r,n,u=e.length,c=h,p=0,g=l;for(r=0;r<e.length;r++)n=e[r],n<128&&P(t,w(n));var d=t.length,y=d;d&&P(t,f);while(y<u){var S=a;for(r=0;r<e.length;r++)n=e[r],n>=c&&n<S&&(S=n);var R=y+1;if(S-c>b((a-p)/R))throw new m(v);for(p+=(S-c)*R,c=S,r=0;r<e.length;r++){if(n=e[r],n<c&&++p>a)throw new m(v);if(n===c){var U=p,L=i;while(1){var C=L<=g?o:L>=g+s?s:L-g;if(U<C)break;var O=U-C,q=i-C;P(t,w(A(C+O%q))),U=b(O/q),L+=i}P(t,w(A(U))),g=x(p,R,y===d),p=0,y++}}p++,c++}return k(t,"")};e.exports=function(e){var t,r,n=[],a=U(R(L(e),g,"."),".");for(t=0;t<a.length;t++)r=a[t],P(n,y(p,r)?"xn--"+C(r):r);return k(n,".")}},2333:function(e,t,r){var n=r(1291),a=r(655),i=r(7750),o=RangeError;e.exports=function(e){var t=a(i(this)),r="",s=n(e);if(s<0||s===1/0)throw new o("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},8242:function(e,t,r){var n=r(9565),a=r(7751),i=r(8227),o=r(6840);e.exports=function(){var e=a("Symbol"),t=e&&e.prototype,r=t&&t.valueOf,s=i("toPrimitive");t&&!t[s]&&o(t,s,(function(e){return n(r,this)}),{arity:1})}},1296:function(e,t,r){var n=r(4495);e.exports=n&&!!Symbol["for"]&&!!Symbol.keyFor},7416:function(e,t,r){var n=r(9039),a=r(8227),i=r(3724),o=r(6395),s=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=new URLSearchParams("a=1&a=2&b=3"),n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),r["delete"]("a",2),r["delete"]("b",void 0),o&&(!e.toJSON||!r.has("a",1)||r.has("a",2)||!r.has("a",void 0)||r.has("b"))||!t.size&&(o||!i)||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},5749:function(e,t,r){var n=r(9167),a=r(9297),i=r(1951),o=r(4913).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});a(t,e)||o(t,e,{value:i.f(e)})}},1951:function(e,t,r){var n=r(8227);t.f=n},3418:function(e,t,r){var n=r(6518),a=r(7916),i=r(4428),o=!i((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:o},{from:a})},3110:function(e,t,r){var n=r(6518),a=r(7751),i=r(8745),o=r(9565),s=r(9504),u=r(9039),c=r(4901),l=r(757),h=r(7680),f=r(6933),p=r(4495),g=String,v=a("JSON","stringify"),d=s(/./.exec),m=s("".charAt),y=s("".charCodeAt),b=s("".replace),w=s(1..toString),S=/[\uD800-\uDFFF]/g,k=/^[\uD800-\uDBFF]$/,P=/^[\uDC00-\uDFFF]$/,R=!p||u((function(){var e=a("Symbol")("stringify detection");return"[null]"!==v([e])||"{}"!==v({a:e})||"{}"!==v(Object(e))})),U=u((function(){return'"\\udf06\\ud834"'!==v("\udf06\ud834")||'"\\udead"'!==v("\udead")})),L=function(e,t){var r=h(arguments),n=f(t);if(c(n)||void 0!==e&&!l(e))return r[1]=function(e,t){if(c(n)&&(t=o(n,this,g(e),t)),!l(t))return t},i(v,null,r)},N=function(e,t,r){var n=m(r,t-1),a=m(r,t+1);return d(k,e)&&!d(P,a)||d(P,e)&&!d(k,n)?"\\u"+w(y(e,0),16):e};v&&n({target:"JSON",stat:!0,arity:3,forced:R||U},{stringify:function(e,t,r){var n=h(arguments),a=i(R?L:v,null,n);return U&&"string"==typeof a?b(a,S,N):a}})},9773:function(e,t,r){var n=r(6518),a=r(4495),i=r(9039),o=r(3717),s=r(8981),u=!a||i((function(){o.f(1)}));n({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(e){var t=o.f;return t?t(s(e)):[]}})},9432:function(e,t,r){var n=r(6518),a=r(8981),i=r(1072),o=r(9039),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(e){return i(a(e))}})},8156:function(e,t,r){var n=r(6518),a=r(533).start,i=r(3063);n({target:"String",proto:!0,forced:i},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},6761:function(e,t,r){var n=r(6518),a=r(4475),i=r(9565),o=r(9504),s=r(6395),u=r(3724),c=r(4495),l=r(9039),h=r(9297),f=r(1625),p=r(8551),g=r(5397),v=r(6969),d=r(655),m=r(6980),y=r(2360),b=r(1072),w=r(8480),S=r(298),k=r(3717),P=r(7347),R=r(4913),U=r(6801),L=r(8773),N=r(6840),A=r(2106),x=r(5745),C=r(6119),O=r(421),q=r(3392),F=r(8227),H=r(1951),B=r(5749),j=r(8242),T=r(687),E=r(1181),_=r(9213).forEach,z=C("hidden"),I="Symbol",D="prototype",$=E.set,J=E.getterFor(I),M=Object[D],Q=a.Symbol,W=Q&&Q[D],G=a.RangeError,V=a.TypeError,K=a.QObject,X=P.f,Y=R.f,Z=S.f,ee=L.f,te=o([].push),re=x("symbols"),ne=x("op-symbols"),ae=x("wks"),ie=!K||!K[D]||!K[D].findChild,oe=function(e,t,r){var n=X(M,t);n&&delete M[t],Y(e,t,r),n&&e!==M&&Y(M,t,n)},se=u&&l((function(){return 7!==y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?oe:Y,ue=function(e,t){var r=re[e]=y(W);return $(r,{type:I,tag:e,description:t}),u||(r.description=t),r},ce=function(e,t,r){e===M&&ce(ne,t,r),p(e);var n=v(t);return p(r),h(re,n)?(r.enumerable?(h(e,z)&&e[z][n]&&(e[z][n]=!1),r=y(r,{enumerable:m(0,!1)})):(h(e,z)||Y(e,z,m(1,y(null))),e[z][n]=!0),se(e,n,r)):Y(e,n,r)},le=function(e,t){p(e);var r=g(t),n=b(r).concat(ve(r));return _(n,(function(t){u&&!i(fe,r,t)||ce(e,t,r[t])})),e},he=function(e,t){return void 0===t?y(e):le(y(e),t)},fe=function(e){var t=v(e),r=i(ee,this,t);return!(this===M&&h(re,t)&&!h(ne,t))&&(!(r||!h(this,t)||!h(re,t)||h(this,z)&&this[z][t])||r)},pe=function(e,t){var r=g(e),n=v(t);if(r!==M||!h(re,n)||h(ne,n)){var a=X(r,n);return!a||!h(re,n)||h(r,z)&&r[z][n]||(a.enumerable=!0),a}},ge=function(e){var t=Z(g(e)),r=[];return _(t,(function(e){h(re,e)||h(O,e)||te(r,e)})),r},ve=function(e){var t=e===M,r=Z(t?ne:g(e)),n=[];return _(r,(function(e){!h(re,e)||t&&!h(M,e)||te(n,re[e])})),n};c||(Q=function(){if(f(W,this))throw new V("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?d(arguments[0]):void 0,t=q(e),r=function(e){var n=void 0===this?a:this;n===M&&i(r,ne,e),h(n,z)&&h(n[z],t)&&(n[z][t]=!1);var o=m(1,e);try{se(n,t,o)}catch(s){if(!(s instanceof G))throw s;oe(n,t,o)}};return u&&ie&&se(M,t,{configurable:!0,set:r}),ue(t,e)},W=Q[D],N(W,"toString",(function(){return J(this).tag})),N(Q,"withoutSetter",(function(e){return ue(q(e),e)})),L.f=fe,R.f=ce,U.f=le,P.f=pe,w.f=S.f=ge,k.f=ve,H.f=function(e){return ue(F(e),e)},u&&(A(W,"description",{configurable:!0,get:function(){return J(this).description}}),s||N(M,"propertyIsEnumerable",fe,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),_(b(ae),(function(e){B(e)})),n({target:I,stat:!0,forced:!c},{useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!u},{create:he,defineProperty:ce,defineProperties:le,getOwnPropertyDescriptor:pe}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ge}),j(),T(Q,I),O[z]=!0},9463:function(e,t,r){var n=r(6518),a=r(3724),i=r(4475),o=r(9504),s=r(9297),u=r(4901),c=r(1625),l=r(655),h=r(2106),f=r(7740),p=i.Symbol,g=p&&p.prototype;if(a&&u(p)&&(!("description"in g)||void 0!==p().description)){var v={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=c(g,this)?new p(e):void 0===e?p():p(e);return""===e&&(v[t]=!0),t};f(d,p),d.prototype=g,g.constructor=d;var m="Symbol(description detection)"===String(p("description detection")),y=o(g.valueOf),b=o(g.toString),w=/^Symbol\((.*)\)[^)]+$/,S=o("".replace),k=o("".slice);h(g,"description",{configurable:!0,get:function(){var e=y(this);if(s(v,e))return"";var t=b(e),r=m?k(t,7,-1):S(t,w,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:d})}},1510:function(e,t,r){var n=r(6518),a=r(7751),i=r(9297),o=r(655),s=r(5745),u=r(1296),c=s("string-to-symbol-registry"),l=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{for:function(e){var t=o(e);if(i(c,t))return c[t];var r=a("Symbol")(t);return c[t]=r,l[r]=t,r}})},2675:function(e,t,r){r(6761),r(1510),r(7812),r(3110),r(9773)},7812:function(e,t,r){var n=r(6518),a=r(9297),i=r(757),o=r(6823),s=r(5745),u=r(1296),c=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{keyFor:function(e){if(!i(e))throw new TypeError(o(e)+" is not a symbol");if(a(c,e))return c[e]}})},8406:function(e,t,r){r(3792);var n=r(6518),a=r(4475),i=r(3389),o=r(9565),s=r(9504),u=r(3724),c=r(7416),l=r(6840),h=r(2106),f=r(6279),p=r(687),g=r(3994),v=r(1181),d=r(679),m=r(4901),y=r(9297),b=r(6080),w=r(6955),S=r(8551),k=r(34),P=r(655),R=r(2360),U=r(6980),L=r(81),N=r(851),A=r(2529),x=r(2812),C=r(8227),O=r(4488),q=C("iterator"),F="URLSearchParams",H=F+"Iterator",B=v.set,j=v.getterFor(F),T=v.getterFor(H),E=i("fetch"),_=i("Request"),z=i("Headers"),I=_&&_.prototype,D=z&&z.prototype,$=a.RegExp,J=a.TypeError,M=a.decodeURIComponent,Q=a.encodeURIComponent,W=s("".charAt),G=s([].join),V=s([].push),K=s("".replace),X=s([].shift),Y=s([].splice),Z=s("".split),ee=s("".slice),te=/\+/g,re=Array(4),ne=function(e){return re[e-1]||(re[e-1]=$("((?:%[\\da-f]{2}){"+e+"})","gi"))},ae=function(e){try{return M(e)}catch(t){return e}},ie=function(e){var t=K(e,te," "),r=4;try{return M(t)}catch(n){while(r)t=K(t,ne(r--),ae);return t}},oe=/[!'()~]|%20/g,se={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ue=function(e){return se[e]},ce=function(e){return K(Q(e),oe,ue)},le=g((function(e,t){B(this,{type:H,target:j(e).entries,index:0,kind:t})}),F,(function(){var e=T(this),t=e.target,r=e.index++;if(!t||r>=t.length)return e.target=void 0,A(void 0,!0);var n=t[r];switch(e.kind){case"keys":return A(n.key,!1);case"values":return A(n.value,!1)}return A([n.key,n.value],!1)}),!0),he=function(e){this.entries=[],this.url=null,void 0!==e&&(k(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===W(e,0)?ee(e,1):e:P(e)))};he.prototype={type:F,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,r,n,a,i,s,u,c=this.entries,l=N(e);if(l){t=L(e,l),r=t.next;while(!(n=o(r,t)).done){if(a=L(S(n.value)),i=a.next,(s=o(i,a)).done||(u=o(i,a)).done||!o(i,a).done)throw new J("Expected sequence with length 2");V(c,{key:P(s.value),value:P(u.value)})}}else for(var h in e)y(e,h)&&V(c,{key:h,value:P(e[h])})},parseQuery:function(e){if(e){var t,r,n=this.entries,a=Z(e,"&"),i=0;while(i<a.length)t=a[i++],t.length&&(r=Z(t,"="),V(n,{key:ie(X(r)),value:ie(G(r,"="))}))}},serialize:function(){var e,t=this.entries,r=[],n=0;while(n<t.length)e=t[n++],V(r,ce(e.key)+"="+ce(e.value));return G(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var fe=function(){d(this,pe);var e=arguments.length>0?arguments[0]:void 0,t=B(this,new he(e));u||(this.size=t.entries.length)},pe=fe.prototype;if(f(pe,{append:function(e,t){var r=j(this);x(arguments.length,2),V(r.entries,{key:P(e),value:P(t)}),u||this.length++,r.updateURL()},delete:function(e){var t=j(this),r=x(arguments.length,1),n=t.entries,a=P(e),i=r<2?void 0:arguments[1],o=void 0===i?i:P(i),s=0;while(s<n.length){var c=n[s];if(c.key!==a||void 0!==o&&c.value!==o)s++;else if(Y(n,s,1),void 0!==o)break}u||(this.size=n.length),t.updateURL()},get:function(e){var t=j(this).entries;x(arguments.length,1);for(var r=P(e),n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){var t=j(this).entries;x(arguments.length,1);for(var r=P(e),n=[],a=0;a<t.length;a++)t[a].key===r&&V(n,t[a].value);return n},has:function(e){var t=j(this).entries,r=x(arguments.length,1),n=P(e),a=r<2?void 0:arguments[1],i=void 0===a?a:P(a),o=0;while(o<t.length){var s=t[o++];if(s.key===n&&(void 0===i||s.value===i))return!0}return!1},set:function(e,t){var r=j(this);x(arguments.length,1);for(var n,a=r.entries,i=!1,o=P(e),s=P(t),c=0;c<a.length;c++)n=a[c],n.key===o&&(i?Y(a,c--,1):(i=!0,n.value=s));i||V(a,{key:o,value:s}),u||(this.size=a.length),r.updateURL()},sort:function(){var e=j(this);O(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,r=j(this).entries,n=b(e,arguments.length>1?arguments[1]:void 0),a=0;while(a<r.length)t=r[a++],n(t.value,t.key,this)},keys:function(){return new le(this,"keys")},values:function(){return new le(this,"values")},entries:function(){return new le(this,"entries")}},{enumerable:!0}),l(pe,q,pe.entries,{name:"entries"}),l(pe,"toString",(function(){return j(this).serialize()}),{enumerable:!0}),u&&h(pe,"size",{get:function(){return j(this).entries.length},configurable:!0,enumerable:!0}),p(fe,F),n({global:!0,constructor:!0,forced:!c},{URLSearchParams:fe}),!c&&m(z)){var ge=s(D.has),ve=s(D.set),de=function(e){if(k(e)){var t,r=e.body;if(w(r)===F)return t=e.headers?new z(e.headers):new z,ge(t,"content-type")||ve(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),R(e,{body:U(0,P(r)),headers:U(0,t)})}return e};if(m(E)&&n({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(e){return E(e,arguments.length>1?de(arguments[1]):{})}}),m(_)){var me=function(e){return d(this,I),new _(e,arguments.length>1?de(arguments[1]):{})};I.constructor=me,me.prototype=I,n({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:me})}}e.exports={URLSearchParams:fe,getState:j}},4603:function(e,t,r){var n=r(6840),a=r(9504),i=r(655),o=r(2812),s=URLSearchParams,u=s.prototype,c=a(u.append),l=a(u["delete"]),h=a(u.forEach),f=a([].push),p=new s("a=1&a=2&b=3");p["delete"]("a",1),p["delete"]("b",void 0),p+""!=="a=2"&&n(u,"delete",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return l(this,e);var n=[];h(this,(function(e,t){f(n,{key:t,value:e})})),o(t,1);var a,s=i(e),u=i(r),p=0,g=0,v=!1,d=n.length;while(p<d)a=n[p++],v||a.key===s?(v=!0,l(this,a.key)):g++;while(g<d)a=n[g++],a.key===s&&a.value===u||c(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,r){var n=r(6840),a=r(9504),i=r(655),o=r(2812),s=URLSearchParams,u=s.prototype,c=a(u.getAll),l=a(u.has),h=new s("a=1");!h.has("a",2)&&h.has("a",void 0)||n(u,"has",(function(e){var t=arguments.length,r=t<2?void 0:arguments[1];if(t&&void 0===r)return l(this,e);var n=c(this,e);o(t,1);var a=i(r),s=0;while(s<n.length)if(n[s++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},8408:function(e,t,r){r(8406)},8721:function(e,t,r){var n=r(3724),a=r(9504),i=r(2106),o=URLSearchParams.prototype,s=a(o.forEach);n&&!("size"in o)&&i(o,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})},5806:function(e,t,r){r(7764);var n,a=r(6518),i=r(3724),o=r(7416),s=r(4475),u=r(6080),c=r(9504),l=r(6840),h=r(2106),f=r(679),p=r(9297),g=r(4213),v=r(7916),d=r(7680),m=r(8183).codeAt,y=r(6098),b=r(655),w=r(687),S=r(2812),k=r(8406),P=r(1181),R=P.set,U=P.getterFor("URL"),L=k.URLSearchParams,N=k.getState,A=s.URL,x=s.TypeError,C=s.parseInt,O=Math.floor,q=Math.pow,F=c("".charAt),H=c(/./.exec),B=c([].join),j=c(1..toString),T=c([].pop),E=c([].push),_=c("".replace),z=c([].shift),I=c("".split),D=c("".slice),$=c("".toLowerCase),J=c([].unshift),M="Invalid authority",Q="Invalid scheme",W="Invalid host",G="Invalid port",V=/[a-z]/i,K=/[\d+-.a-z]/i,X=/\d/,Y=/^0x/i,Z=/^[0-7]+$/,ee=/^\d+$/,te=/^[\da-f]+$/i,re=/[\0\t\n\r #%/:<>?@[\\\]^|]/,ne=/[\0\t\n\r #/:<>?@[\\\]^|]/,ae=/^[\u0000-\u0020]+/,ie=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,oe=/[\t\n\r]/g,se=function(e){var t,r,n,a,i,o,s,u=I(e,".");if(u.length&&""===u[u.length-1]&&u.length--,t=u.length,t>4)return e;for(r=[],n=0;n<t;n++){if(a=u[n],""===a)return e;if(i=10,a.length>1&&"0"===F(a,0)&&(i=H(Y,a)?16:8,a=D(a,8===i?1:2)),""===a)o=0;else{if(!H(10===i?ee:8===i?Z:te,a))return e;o=C(a,i)}E(r,o)}for(n=0;n<t;n++)if(o=r[n],n===t-1){if(o>=q(256,5-t))return null}else if(o>255)return null;for(s=T(r),n=0;n<r.length;n++)s+=r[n]*q(256,3-n);return s},ue=function(e){var t,r,n,a,i,o,s,u=[0,0,0,0,0,0,0,0],c=0,l=null,h=0,f=function(){return F(e,h)};if(":"===f()){if(":"!==F(e,1))return;h+=2,c++,l=c}while(f()){if(8===c)return;if(":"!==f()){t=r=0;while(r<4&&H(te,f()))t=16*t+C(f(),16),h++,r++;if("."===f()){if(0===r)return;if(h-=r,c>6)return;n=0;while(f()){if(a=null,n>0){if(!("."===f()&&n<4))return;h++}if(!H(X,f()))return;while(H(X,f())){if(i=C(f(),10),null===a)a=i;else{if(0===a)return;a=10*a+i}if(a>255)return;h++}u[c]=256*u[c]+a,n++,2!==n&&4!==n||c++}if(4!==n)return;break}if(":"===f()){if(h++,!f())return}else if(f())return;u[c++]=t}else{if(null!==l)return;h++,c++,l=c}}if(null!==l){o=c-l,c=7;while(0!==c&&o>0)s=u[c],u[c--]=u[l+o-1],u[l+--o]=s}else if(8!==c)return;return u},ce=function(e){for(var t=null,r=1,n=null,a=0,i=0;i<8;i++)0!==e[i]?(a>r&&(t=n,r=a),n=null,a=0):(null===n&&(n=i),++a);return a>r&&(t=n,r=a),t},le=function(e){var t,r,n,a;if("number"==typeof e){for(t=[],r=0;r<4;r++)J(t,e%256),e=O(e/256);return B(t,".")}if("object"==typeof e){for(t="",n=ce(e),r=0;r<8;r++)a&&0===e[r]||(a&&(a=!1),n===r?(t+=r?":":"::",a=!0):(t+=j(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},he={},fe=g({},he,{" ":1,'"':1,"<":1,">":1,"`":1}),pe=g({},fe,{"#":1,"?":1,"{":1,"}":1}),ge=g({},pe,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),ve=function(e,t){var r=m(e,0);return r>32&&r<127&&!p(t,e)?e:encodeURIComponent(e)},de={ftp:21,file:null,http:80,https:443,ws:80,wss:443},me=function(e,t){var r;return 2===e.length&&H(V,F(e,0))&&(":"===(r=F(e,1))||!t&&"|"===r)},ye=function(e){var t;return e.length>1&&me(D(e,0,2))&&(2===e.length||"/"===(t=F(e,2))||"\\"===t||"?"===t||"#"===t)},be=function(e){return"."===e||"%2e"===$(e)},we=function(e){return e=$(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},Se={},ke={},Pe={},Re={},Ue={},Le={},Ne={},Ae={},xe={},Ce={},Oe={},qe={},Fe={},He={},Be={},je={},Te={},Ee={},_e={},ze={},Ie={},De=function(e,t,r){var n,a,i,o=b(e);if(t){if(a=this.parse(o),a)throw new x(a);this.searchParams=null}else{if(void 0!==r&&(n=new De(r,!0)),a=this.parse(o,null,n),a)throw new x(a);i=N(new L),i.bindURL(this),this.searchParams=i}};De.prototype={type:"URL",parse:function(e,t,r){var a,i,o,s,u=this,c=t||Se,l=0,h="",f=!1,g=!1,m=!1;e=b(e),t||(u.scheme="",u.username="",u.password="",u.host=null,u.port=null,u.path=[],u.query=null,u.fragment=null,u.cannotBeABaseURL=!1,e=_(e,ae,""),e=_(e,ie,"$1")),e=_(e,oe,""),a=v(e);while(l<=a.length){switch(i=a[l],c){case Se:if(!i||!H(V,i)){if(t)return Q;c=Pe;continue}h+=$(i),c=ke;break;case ke:if(i&&(H(K,i)||"+"===i||"-"===i||"."===i))h+=$(i);else{if(":"!==i){if(t)return Q;h="",c=Pe,l=0;continue}if(t&&(u.isSpecial()!==p(de,h)||"file"===h&&(u.includesCredentials()||null!==u.port)||"file"===u.scheme&&!u.host))return;if(u.scheme=h,t)return void(u.isSpecial()&&de[u.scheme]===u.port&&(u.port=null));h="","file"===u.scheme?c=He:u.isSpecial()&&r&&r.scheme===u.scheme?c=Re:u.isSpecial()?c=Ae:"/"===a[l+1]?(c=Ue,l++):(u.cannotBeABaseURL=!0,E(u.path,""),c=_e)}break;case Pe:if(!r||r.cannotBeABaseURL&&"#"!==i)return Q;if(r.cannotBeABaseURL&&"#"===i){u.scheme=r.scheme,u.path=d(r.path),u.query=r.query,u.fragment="",u.cannotBeABaseURL=!0,c=Ie;break}c="file"===r.scheme?He:Le;continue;case Re:if("/"!==i||"/"!==a[l+1]){c=Le;continue}c=xe,l++;break;case Ue:if("/"===i){c=Ce;break}c=Ee;continue;case Le:if(u.scheme=r.scheme,i===n)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query=r.query;else if("/"===i||"\\"===i&&u.isSpecial())c=Ne;else if("?"===i)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query="",c=ze;else{if("#"!==i){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.path.length--,c=Ee;continue}u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query=r.query,u.fragment="",c=Ie}break;case Ne:if(!u.isSpecial()||"/"!==i&&"\\"!==i){if("/"!==i){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,c=Ee;continue}c=Ce}else c=xe;break;case Ae:if(c=xe,"/"!==i||"/"!==F(h,l+1))continue;l++;break;case xe:if("/"!==i&&"\\"!==i){c=Ce;continue}break;case Ce:if("@"===i){f&&(h="%40"+h),f=!0,o=v(h);for(var y=0;y<o.length;y++){var w=o[y];if(":"!==w||m){var S=ve(w,ge);m?u.password+=S:u.username+=S}else m=!0}h=""}else if(i===n||"/"===i||"?"===i||"#"===i||"\\"===i&&u.isSpecial()){if(f&&""===h)return M;l-=v(h).length+1,h="",c=Oe}else h+=i;break;case Oe:case qe:if(t&&"file"===u.scheme){c=je;continue}if(":"!==i||g){if(i===n||"/"===i||"?"===i||"#"===i||"\\"===i&&u.isSpecial()){if(u.isSpecial()&&""===h)return W;if(t&&""===h&&(u.includesCredentials()||null!==u.port))return;if(s=u.parseHost(h),s)return s;if(h="",c=Te,t)return;continue}"["===i?g=!0:"]"===i&&(g=!1),h+=i}else{if(""===h)return W;if(s=u.parseHost(h),s)return s;if(h="",c=Fe,t===qe)return}break;case Fe:if(!H(X,i)){if(i===n||"/"===i||"?"===i||"#"===i||"\\"===i&&u.isSpecial()||t){if(""!==h){var k=C(h,10);if(k>65535)return G;u.port=u.isSpecial()&&k===de[u.scheme]?null:k,h=""}if(t)return;c=Te;continue}return G}h+=i;break;case He:if(u.scheme="file","/"===i||"\\"===i)c=Be;else{if(!r||"file"!==r.scheme){c=Ee;continue}switch(i){case n:u.host=r.host,u.path=d(r.path),u.query=r.query;break;case"?":u.host=r.host,u.path=d(r.path),u.query="",c=ze;break;case"#":u.host=r.host,u.path=d(r.path),u.query=r.query,u.fragment="",c=Ie;break;default:ye(B(d(a,l),""))||(u.host=r.host,u.path=d(r.path),u.shortenPath()),c=Ee;continue}}break;case Be:if("/"===i||"\\"===i){c=je;break}r&&"file"===r.scheme&&!ye(B(d(a,l),""))&&(me(r.path[0],!0)?E(u.path,r.path[0]):u.host=r.host),c=Ee;continue;case je:if(i===n||"/"===i||"\\"===i||"?"===i||"#"===i){if(!t&&me(h))c=Ee;else if(""===h){if(u.host="",t)return;c=Te}else{if(s=u.parseHost(h),s)return s;if("localhost"===u.host&&(u.host=""),t)return;h="",c=Te}continue}h+=i;break;case Te:if(u.isSpecial()){if(c=Ee,"/"!==i&&"\\"!==i)continue}else if(t||"?"!==i)if(t||"#"!==i){if(i!==n&&(c=Ee,"/"!==i))continue}else u.fragment="",c=Ie;else u.query="",c=ze;break;case Ee:if(i===n||"/"===i||"\\"===i&&u.isSpecial()||!t&&("?"===i||"#"===i)){if(we(h)?(u.shortenPath(),"/"===i||"\\"===i&&u.isSpecial()||E(u.path,"")):be(h)?"/"===i||"\\"===i&&u.isSpecial()||E(u.path,""):("file"===u.scheme&&!u.path.length&&me(h)&&(u.host&&(u.host=""),h=F(h,0)+":"),E(u.path,h)),h="","file"===u.scheme&&(i===n||"?"===i||"#"===i))while(u.path.length>1&&""===u.path[0])z(u.path);"?"===i?(u.query="",c=ze):"#"===i&&(u.fragment="",c=Ie)}else h+=ve(i,pe);break;case _e:"?"===i?(u.query="",c=ze):"#"===i?(u.fragment="",c=Ie):i!==n&&(u.path[0]+=ve(i,he));break;case ze:t||"#"!==i?i!==n&&("'"===i&&u.isSpecial()?u.query+="%27":u.query+="#"===i?"%23":ve(i,he)):(u.fragment="",c=Ie);break;case Ie:i!==n&&(u.fragment+=ve(i,fe));break}l++}},parseHost:function(e){var t,r,n;if("["===F(e,0)){if("]"!==F(e,e.length-1))return W;if(t=ue(D(e,1,-1)),!t)return W;this.host=t}else if(this.isSpecial()){if(e=y(e),H(re,e))return W;if(t=se(e),null===t)return W;this.host=t}else{if(H(ne,e))return W;for(t="",r=v(e),n=0;n<r.length;n++)t+=ve(r[n],he);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},includesCredentials:function(){return""!==this.username||""!==this.password},isSpecial:function(){return p(de,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"===this.scheme&&1===t&&me(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,n=e.password,a=e.host,i=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":";return null!==a?(c+="//",e.includesCredentials()&&(c+=r+(n?":"+n:"")+"@"),c+=le(a),null!==i&&(c+=":"+i)):"file"===t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+B(o,"/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},setHref:function(e){var t=this.parse(e);if(t)throw new x(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"===e)try{return new $e(e.path[0]).origin}catch(r){return"null"}return"file"!==e&&this.isSpecial()?e+"://"+le(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(b(e)+":",Se)},getUsername:function(){return this.username},setUsername:function(e){var t=v(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=ve(t[r],ge)}},getPassword:function(){return this.password},setPassword:function(e){var t=v(b(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=ve(t[r],ge)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?le(e):le(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,Oe)},getHostname:function(){var e=this.host;return null===e?"":le(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,qe)},getPort:function(){var e=this.port;return null===e?"":b(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=b(e),""===e?this.port=null:this.parse(e,Fe))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+B(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Te))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=b(e),""===e?this.query=null:("?"===F(e,0)&&(e=D(e,1)),this.query="",this.parse(e,ze)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=b(e),""!==e?("#"===F(e,0)&&(e=D(e,1)),this.fragment="",this.parse(e,Ie)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var $e=function(e){var t=f(this,Je),r=S(arguments.length,1)>1?arguments[1]:void 0,n=R(t,new De(e,!1,r));i||(t.href=n.serialize(),t.origin=n.getOrigin(),t.protocol=n.getProtocol(),t.username=n.getUsername(),t.password=n.getPassword(),t.host=n.getHost(),t.hostname=n.getHostname(),t.port=n.getPort(),t.pathname=n.getPathname(),t.search=n.getSearch(),t.searchParams=n.getSearchParams(),t.hash=n.getHash())},Je=$e.prototype,Me=function(e,t){return{get:function(){return U(this)[e]()},set:t&&function(e){return U(this)[t](e)},configurable:!0,enumerable:!0}};if(i&&(h(Je,"href",Me("serialize","setHref")),h(Je,"origin",Me("getOrigin")),h(Je,"protocol",Me("getProtocol","setProtocol")),h(Je,"username",Me("getUsername","setUsername")),h(Je,"password",Me("getPassword","setPassword")),h(Je,"host",Me("getHost","setHost")),h(Je,"hostname",Me("getHostname","setHostname")),h(Je,"port",Me("getPort","setPort")),h(Je,"pathname",Me("getPathname","setPathname")),h(Je,"search",Me("getSearch","setSearch")),h(Je,"searchParams",Me("getSearchParams")),h(Je,"hash",Me("getHash","setHash"))),l(Je,"toJSON",(function(){return U(this).serialize()}),{enumerable:!0}),l(Je,"toString",(function(){return U(this).serialize()}),{enumerable:!0}),A){var Qe=A.createObjectURL,We=A.revokeObjectURL;Qe&&l($e,"createObjectURL",u(Qe,A)),We&&l($e,"revokeObjectURL",u(We,A))}w($e,"URL"),a({global:!0,constructor:!0,forced:!o,sham:!i},{URL:$e})},3296:function(e,t,r){r(5806)},7208:function(e,t,r){var n=r(6518),a=r(9565);n({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return a(URL.prototype.toString,this)}})}}]);
//# sourceMappingURL=177-legacy.7f40a26e.js.map