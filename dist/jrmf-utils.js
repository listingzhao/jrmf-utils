!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.jrmfUtils=n():t.jrmfUtils=n()}("undefined"!=typeof self?self:this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=22)}([function(t,n,e){var r=e(13),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n,e){function r(t,n){var e=i(t,n);return o(e)?e:void 0}var o=e(38),i=e(44);t.exports=r},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(28),i=e(29),c=e(30),a=e(31),u=e(32);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=c,r.prototype.has=a,r.prototype.set=u,t.exports=r},function(t,n,e){function r(t,n){for(var e=t.length;e--;)if(o(t[e][0],n))return e;return-1}var o=e(11);t.exports=r},function(t,n,e){function r(t){return null==t?void 0===t?u:a:s&&s in Object(t)?i(t):c(t)}var o=e(9),i=e(40),c=e(41),a="[object Null]",u="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},function(t,n,e){var r=e(1),o=r(Object,"create");t.exports=o},function(t,n,e){function r(t,n){var e=t.__data__;return o(n)?e["string"==typeof n?"string":"hash"]:e.map}var o=e(53);t.exports=r},function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},function(t,n,e){var r=e(1),o=e(0),i=r(o,"Map");t.exports=i},function(t,n,e){var r=e(0),o=r.Symbol;t.exports=o},function(t,n){var e=Array.isArray;t.exports=e},function(t,n){function e(t,n){return t===n||t!==t&&n!==n}t.exports=e},function(t,n,e){function r(t){if(!i(t))return!1;var n=o(t);return n==a||n==u||n==c||n==s}var o=e(4),i=e(14),c="[object AsyncFunction]",a="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]";t.exports=r},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(n,e(39))},function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},function(t,n){function e(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=e},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(45),i=e(52),c=e(54),a=e(55),u=e(56);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=c,r.prototype.has=a,r.prototype.set=u,t.exports=r},function(t,n,e){function r(t,n,e,r,s,f){var p=e&a,l=t.length,v=n.length;if(l!=v&&!(p&&v>l))return!1;var d=f.get(t);if(d&&f.get(n))return d==n;var h=-1,y=!0,b=e&u?new o:void 0;for(f.set(t,n),f.set(n,t);++h<l;){var _=t[h],x=n[h];if(r)var j=p?r(x,_,h,n,t,f):r(_,x,h,t,n,f);if(void 0!==j){if(j)continue;y=!1;break}if(b){if(!i(n,function(t,n){if(!c(b,n)&&(_===t||s(_,t,e,r,f)))return b.push(n)})){y=!1;break}}else if(_!==x&&!s(_,x,e,r,f)){y=!1;break}}return f.delete(t),f.delete(n),y}var o=e(57),i=e(60),c=e(61),a=1,u=2;t.exports=r},function(t,n,e){(function(t){var r=e(0),o=e(78),i="object"==typeof n&&n&&!n.nodeType&&n,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=c&&c.exports===i,u=a?r.Buffer:void 0,s=u?u.isBuffer:void 0,f=s||o;t.exports=f}).call(n,e(19)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(80),o=e(81),i=e(82),c=i&&i.isTypedArray,a=c?o(c):r;t.exports=a},function(t,n){function e(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=e},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(23),o=e(93),i=e(94),c=e(95),a=e(96),u=e(97),s=e(98),f=e(99);e.d(n,"isEqual",function(){return r.a}),e.d(n,"mBrowser",function(){return o.a}),e.d(n,"isBankno",function(){return i.a}),e.d(n,"isCardNo",function(){return c.a}),e.d(n,"isEmail",function(){return a.a}),e.d(n,"isPhone",function(){return u.a}),e.d(n,"mScroll",function(){return s.default}),e.d(n,"Spinner",function(){return f.a})},function(t,n,e){"use strict";function r(t,n){return i()(t,n)}n.a=r;var o=e(24),i=e.n(o)},function(t,n,e){function r(t,n){return o(t,n)}var o=e(25);t.exports=r},function(t,n,e){function r(t,n,e,c,a){return t===n||(null==t||null==n||!i(t)&&!i(n)?t!==t&&n!==n:o(t,n,e,c,r,a))}var o=e(26),i=e(7);t.exports=r},function(t,n,e){function r(t,n,e,r,y,_){var x=s(t),j=s(n),g=x?d:u(t),w=j?d:u(n);g=g==v?h:g,w=w==v?h:w;var m=g==h,O=w==h,A=g==w;if(A&&f(t)){if(!f(n))return!1;x=!0,m=!1}if(A&&!m)return _||(_=new o),x||p(t)?i(t,n,e,r,y,_):c(t,n,g,e,r,y,_);if(!(e&l)){var M=m&&b.call(t,"__wrapped__"),P=O&&b.call(n,"__wrapped__");if(M||P){var z=M?t.value():t,S=P?n.value():n;return _||(_=new o),y(z,S,e,r,_)}}return!!A&&(_||(_=new o),a(t,n,e,r,y,_))}var o=e(27),i=e(17),c=e(62),a=e(66),u=e(88),s=e(10),f=e(18),p=e(20),l=1,v="[object Arguments]",d="[object Array]",h="[object Object]",y=Object.prototype,b=y.hasOwnProperty;t.exports=r},function(t,n,e){function r(t){var n=this.__data__=new o(t);this.size=n.size}var o=e(2),i=e(33),c=e(34),a=e(35),u=e(36),s=e(37);r.prototype.clear=i,r.prototype.delete=c,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r},function(t,n){function e(){this.__data__=[],this.size=0}t.exports=e},function(t,n,e){function r(t){var n=this.__data__,e=o(n,t);return!(e<0)&&(e==n.length-1?n.pop():c.call(n,e,1),--this.size,!0)}var o=e(3),i=Array.prototype,c=i.splice;t.exports=r},function(t,n,e){function r(t){var n=this.__data__,e=o(n,t);return e<0?void 0:n[e][1]}var o=e(3);t.exports=r},function(t,n,e){function r(t){return o(this.__data__,t)>-1}var o=e(3);t.exports=r},function(t,n,e){function r(t,n){var e=this.__data__,r=o(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}var o=e(3);t.exports=r},function(t,n,e){function r(){this.__data__=new o,this.size=0}var o=e(2);t.exports=r},function(t,n){function e(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e}t.exports=e},function(t,n){function e(t){return this.__data__.get(t)}t.exports=e},function(t,n){function e(t){return this.__data__.has(t)}t.exports=e},function(t,n,e){function r(t,n){var e=this.__data__;if(e instanceof o){var r=e.__data__;if(!i||r.length<a-1)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new c(r)}return e.set(t,n),this.size=e.size,this}var o=e(2),i=e(8),c=e(16),a=200;t.exports=r},function(t,n,e){function r(t){return!(!c(t)||i(t))&&(o(t)?d:s).test(a(t))}var o=e(12),i=e(42),c=e(14),a=e(15),u=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,f=Function.prototype,p=Object.prototype,l=f.toString,v=p.hasOwnProperty,d=RegExp("^"+l.call(v).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){function r(t){var n=c.call(t,u),e=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(n?t[u]=e:delete t[u]),o}var o=e(9),i=Object.prototype,c=i.hasOwnProperty,a=i.toString,u=o?o.toStringTag:void 0;t.exports=r},function(t,n){function e(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=e},function(t,n,e){function r(t){return!!i&&i in t}var o=e(43),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,n,e){var r=e(0),o=r["__core-js_shared__"];t.exports=o},function(t,n){function e(t,n){return null==t?void 0:t[n]}t.exports=e},function(t,n,e){function r(){this.size=0,this.__data__={hash:new o,map:new(c||i),string:new o}}var o=e(46),i=e(2),c=e(8);t.exports=r},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}var o=e(47),i=e(48),c=e(49),a=e(50),u=e(51);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=c,r.prototype.has=a,r.prototype.set=u,t.exports=r},function(t,n,e){function r(){this.__data__=o?o(null):{},this.size=0}var o=e(5);t.exports=r},function(t,n){function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}t.exports=e},function(t,n,e){function r(t){var n=this.__data__;if(o){var e=n[t];return e===i?void 0:e}return a.call(n,t)?n[t]:void 0}var o=e(5),i="__lodash_hash_undefined__",c=Object.prototype,a=c.hasOwnProperty;t.exports=r},function(t,n,e){function r(t){var n=this.__data__;return o?void 0!==n[t]:c.call(n,t)}var o=e(5),i=Object.prototype,c=i.hasOwnProperty;t.exports=r},function(t,n,e){function r(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=o&&void 0===n?i:n,this}var o=e(5),i="__lodash_hash_undefined__";t.exports=r},function(t,n,e){function r(t){var n=o(this,t).delete(t);return this.size-=n?1:0,n}var o=e(6);t.exports=r},function(t,n){function e(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}t.exports=e},function(t,n,e){function r(t){return o(this,t).get(t)}var o=e(6);t.exports=r},function(t,n,e){function r(t){return o(this,t).has(t)}var o=e(6);t.exports=r},function(t,n,e){function r(t,n){var e=o(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}var o=e(6);t.exports=r},function(t,n,e){function r(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new o;++n<e;)this.add(t[n])}var o=e(16),i=e(58),c=e(59);r.prototype.add=r.prototype.push=i,r.prototype.has=c,t.exports=r},function(t,n){function e(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=e},function(t,n){function e(t){return this.__data__.has(t)}t.exports=e},function(t,n){function e(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}t.exports=e},function(t,n){function e(t,n){return t.has(n)}t.exports=e},function(t,n,e){function r(t,n,e,r,o,m,A){switch(e){case w:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case g:return!(t.byteLength!=n.byteLength||!m(new i(t),new i(n)));case l:case v:case y:return c(+t,+n);case d:return t.name==n.name&&t.message==n.message;case b:case x:return t==n+"";case h:var M=u;case _:var P=r&f;if(M||(M=s),t.size!=n.size&&!P)return!1;var z=A.get(t);if(z)return z==n;r|=p,A.set(t,n);var S=a(M(t),M(n),r,o,m,A);return A.delete(t),S;case j:if(O)return O.call(t)==O.call(n)}return!1}var o=e(9),i=e(63),c=e(11),a=e(17),u=e(64),s=e(65),f=1,p=2,l="[object Boolean]",v="[object Date]",d="[object Error]",h="[object Map]",y="[object Number]",b="[object RegExp]",_="[object Set]",x="[object String]",j="[object Symbol]",g="[object ArrayBuffer]",w="[object DataView]",m=o?o.prototype:void 0,O=m?m.valueOf:void 0;t.exports=r},function(t,n,e){var r=e(0),o=r.Uint8Array;t.exports=o},function(t,n){function e(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}t.exports=e},function(t,n){function e(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}t.exports=e},function(t,n,e){function r(t,n,e,r,c,u){var s=e&i,f=o(t),p=f.length;if(p!=o(n).length&&!s)return!1;for(var l=p;l--;){var v=f[l];if(!(s?v in n:a.call(n,v)))return!1}var d=u.get(t);if(d&&u.get(n))return d==n;var h=!0;u.set(t,n),u.set(n,t);for(var y=s;++l<p;){v=f[l];var b=t[v],_=n[v];if(r)var x=s?r(_,b,v,n,t,u):r(b,_,v,t,n,u);if(!(void 0===x?b===_||c(b,_,e,r,u):x)){h=!1;break}y||(y="constructor"==v)}if(h&&!y){var j=t.constructor,g=n.constructor;j!=g&&"constructor"in t&&"constructor"in n&&!("function"==typeof j&&j instanceof j&&"function"==typeof g&&g instanceof g)&&(h=!1)}return u.delete(t),u.delete(n),h}var o=e(67),i=1,c=Object.prototype,a=c.hasOwnProperty;t.exports=r},function(t,n,e){function r(t){return o(t,c,i)}var o=e(68),i=e(70),c=e(73);t.exports=r},function(t,n,e){function r(t,n,e){var r=n(t);return i(t)?r:o(r,e(t))}var o=e(69),i=e(10);t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}t.exports=e},function(t,n,e){var r=e(71),o=e(72),i=Object.prototype,c=i.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(n){return c.call(t,n)}))}:o;t.exports=u},function(t,n){function e(t,n){for(var e=-1,r=null==t?0:t.length,o=0,i=[];++e<r;){var c=t[e];n(c,e,t)&&(i[o++]=c)}return i}t.exports=e},function(t,n){function e(){return[]}t.exports=e},function(t,n,e){function r(t){return c(t)?o(t):i(t)}var o=e(74),i=e(83),c=e(87);t.exports=r},function(t,n,e){function r(t,n){var e=c(t),r=!e&&i(t),f=!e&&!r&&a(t),l=!e&&!r&&!f&&s(t),v=e||r||f||l,d=v?o(t.length,String):[],h=d.length;for(var y in t)!n&&!p.call(t,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,h))||d.push(y);return d}var o=e(75),i=e(76),c=e(10),a=e(18),u=e(79),s=e(20),f=Object.prototype,p=f.hasOwnProperty;t.exports=r},function(t,n){function e(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}t.exports=e},function(t,n,e){var r=e(77),o=e(7),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},function(t,n,e){function r(t){return i(t)&&o(t)==c}var o=e(4),i=e(7),c="[object Arguments]";t.exports=r},function(t,n){function e(){return!1}t.exports=e},function(t,n){function e(t,n){return!!(n=null==n?r:n)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<n}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=e},function(t,n,e){function r(t){return c(t)&&i(t.length)&&!!a[o(t)]}var o=e(4),i=e(21),c=e(7),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=r},function(t,n){function e(t){return function(n){return t(n)}}t.exports=e},function(t,n,e){(function(t){var r=e(13),o="object"==typeof n&&n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===o,a=c&&r.process,u=function(){try{return a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(n,e(19)(t))},function(t,n,e){function r(t){if(!o(t))return i(t);var n=[];for(var e in Object(t))a.call(t,e)&&"constructor"!=e&&n.push(e);return n}var o=e(84),i=e(85),c=Object.prototype,a=c.hasOwnProperty;t.exports=r},function(t,n){function e(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||r)}var r=Object.prototype;t.exports=e},function(t,n,e){var r=e(86),o=r(Object.keys,Object);t.exports=o},function(t,n){function e(t,n){return function(e){return t(n(e))}}t.exports=e},function(t,n,e){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=e(12),i=e(21);t.exports=r},function(t,n,e){var r=e(89),o=e(8),i=e(90),c=e(91),a=e(92),u=e(4),s=e(15),f=s(r),p=s(o),l=s(i),v=s(c),d=s(a),h=u;(r&&"[object DataView]"!=h(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=h(new o)||i&&"[object Promise]"!=h(i.resolve())||c&&"[object Set]"!=h(new c)||a&&"[object WeakMap]"!=h(new a))&&(h=function(t){var n=u(t),e="[object Object]"==n?t.constructor:void 0,r=e?s(e):"";if(r)switch(r){case f:return"[object DataView]";case p:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case d:return"[object WeakMap]"}return n}),t.exports=h},function(t,n,e){var r=e(1),o=e(0),i=r(o,"DataView");t.exports=i},function(t,n,e){var r=e(1),o=e(0),i=r(o,"Promise");t.exports=i},function(t,n,e){var r=e(1),o=e(0),i=r(o,"Set");t.exports=i},function(t,n,e){var r=e(1),o=e(0),i=r(o,"WeakMap");t.exports=i},function(t,n,e){"use strict";var r={versions:function(){var t=navigator.userAgent;return{webKit:t.indexOf("AppleWebKit")>-1,wechat:/MicroMessenger/i.test(t),android:t.indexOf("Android")>-1||t.indexOf("Linux")>-1,ios:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t)}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()};n.a=r},function(t,n,e){"use strict";function r(t){return/^\d{16,19}$/.test(t)}n.a=r},function(t,n,e){"use strict";function r(t){return/^(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)$/.test(t)}n.a=r},function(t,n,e){"use strict";function r(t){return/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)}n.a=r},function(t,n,e){"use strict";function r(t){return/^1((3[0-9])|(4[57])|([58][012356789]))\d{8}$/g.test(t)}n.a=r},function(t,n,e){"use strict"},function(t,n,e){"use strict";var r=e(100);n.a=r.a},function(t,n,e){"use strict";function r(t,n,e,i){var c,a,s,f=document.createElement(u[t]||t);for(c in n)if("[object Array]"===Object.prototype.toString.call(n[c]))for(a=0;a<n[c].length;a++)if(n[c][a]&&n[c][a].fn)for(s=0;s<n[c][a].t;s++)r(c,n[c][a].fn(s,i),f,i);else r(c,n[c][a],f,i);else o(f,c,n[c]);e.appendChild(f)}function o(t,n,e){t.setAttribute(u[n]||n,e)}function i(t,n){var e=t.split(";"),r=e.slice(n),o=e.slice(0,e.length-r.length);return e=r.concat(o).reverse(),e.join(";")+";"+e[0]}function c(t,n){return(t/=n/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var a=e(101),u=(e.n(a),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),s={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},f={sw:4,lc:"round",line:[{fn:function(t,n){return{y1:"ios"===n?17:12,y2:"ios"===n?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},p={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:f,"ios-small":f,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:i("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:i(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[s]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:i(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:i("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:i("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:i("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:i("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[s]}]}},l={android:function(t){function n(){if(!e.stop){var t=c(Date.now()-r,650),f=1,p=0,l=188-58*t,v=182-182*t;i%2&&(f=-1,p=-64,l=128- -58*t,v=182*t);var d=[0,-101,-90,-11,-180,79,-270,-191][i];o(s,"da",Math.max(Math.min(l,188),128)),o(s,"os",Math.max(Math.min(v,182),0)),o(s,"t","scale("+f+",1) translate("+p+",0) rotate("+d+",32,32)"),a+=4.1,a>359&&(a=0),o(u,"t","rotate("+a+",32,32)"),t>=1&&(i++,i>7&&(i=0),r=Date.now()),requestAnimationFrame(n)}}var e=this;this.stop=!1;var r,i=0,a=0,u=t.querySelector("g"),s=t.querySelector("circle");return function(){return r=Date.now(),n(),e}}};n.a=function(t,n){var e,o;e=n;var i=document.createElement("div");return r("svg",{viewBox:"0 0 64 64",g:[p[e]]},i,e),t.innerHTML=i.innerHTML,function(){l[e]&&(o=l[e](t)())}(),t}},function(t,n){for(var e=0,r=["webkit","moz"],o=0;o<r.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[r[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[o]+"CancelAnimationFrame"]||window[r[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var r=(new Date).getTime(),o=Math.max(0,16-(r-e)),i=window.setTimeout(function(){t(r+o)},o);return e=r+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}])});