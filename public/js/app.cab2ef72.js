(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e9a0cf3b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),a=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"06a1":function(e,t,n){},"3d04":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("8a03"),a=n.n(o),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background-general",attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("034f"),n("2877")),u={},l=Object(c["a"])(u,i,s,!1,null,null,null);l.options.__file="App.vue";var f=l.exports,p=n("0284"),d=n.n(p),v=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"background-body"},[n("Header"),e._m(0),n("Minecraftbox"),n("Footer")],1)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-full"},[n("div",{staticClass:"background-creeper"},[n("div",{staticClass:"creeper-face"},[n("div",{staticClass:"creeper-main-1"},[n("div",{staticClass:"creeper-mouth-1"}),n("div",{staticClass:"creeper-mouth-2"}),n("div",{staticClass:"creeper-eye-left"}),n("div",{staticClass:"creeper-eye-right"})])])])])])])}],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mine_peru"},[n("img",{attrs:{src:"img/logos/mine-peru.svg",alt:""}}),n("div",{staticClass:"line-separator"})])}],_={name:"Header",props:{msg:String}},y=_,w=(n("879a"),Object(c["a"])(y,g,h,!1,null,"3fdf8d2a",null));w.options.__file="Header.vue";var x=w.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("h4",[e._v("Powered by "),n("span",{staticClass:"span"},[e._v("serverghost")])]),n("p",[e._v("2017 - 2020")])])}],O={name:"Footer",props:{msg:String}},E=O,k=(n("6410"),Object(c["a"])(E,j,C,!1,null,"2471bad3",null));k.options.__file="Footer.vue";var M=k.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"minecraftbox"},[r("h4",[e._v("Noticias, tutoriales, descargas de Minecraft en "),r("a",{attrs:{href:"https://minecraftbox.io"}},[e._v("Minecraftbox")])]),r("img",{attrs:{src:n("e49e"),alt:"Minecraftbox"}})])}],P={name:"minecraftbox",props:{msg:String}},A=P,F=(n("feb9"),Object(c["a"])(A,S,$,!1,null,"1f22c3cd",null));F.options.__file="Minecraftbox.vue";var H=F.exports,T={name:"home",components:{Header:x,Footer:M,Minecraftbox:H}},N=T,q=(n("6170"),Object(c["a"])(N,m,b,!1,null,"411aa4de",null));q.options.__file="Home.vue";var J=q.exports;r["default"].use(v["a"]),r["default"].use(d.a,{id:"UA-46797998-1",Home:J});var B=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),L=n("2f62");r["default"].use(L["a"]);var U=new L["a"].Store({state:{},mutations:{},actions:{}}),z=n("9483");Object(z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("5abe");r["default"].config.productionTip=!1,r["default"].use(a.a),new r["default"]({router:B,store:U,render:function(e){return e(f)}}).$mount("#app")},6170:function(e,t,n){"use strict";var r=n("7a77"),o=n.n(r);o.a},6410:function(e,t,n){"use strict";var r=n("06a1"),o=n.n(r);o.a},"64a9":function(e,t,n){},"7a77":function(e,t,n){},"879a":function(e,t,n){"use strict";var r=n("ffbe"),o=n.n(r);o.a},e49e:function(e,t,n){e.exports=n.p+"img/minecraftbox-logo-2px-png-1.0b7f7c38.png"},feb9:function(e,t,n){"use strict";var r=n("3d04"),o=n.n(r);o.a},ffbe:function(e,t,n){}});
//# sourceMappingURL=app.cab2ef72.js.map