// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e},p=r()?l:c;function _(e,r,t,o,n){var i,a,u,f,l,c;if(e<=0)return o;if(1===t&&1===n){if((f=e%3)>0)for(l=0;l<f;l++)i=r[l],r[l]=o[l],o[l]=i;if(e<3)return o;for(l=f;l<e;l+=3)i=r[l],r[l]=o[l],o[l]=i,i=r[c=l+1],r[c]=o[c],o[c]=i,i=r[c+=1],r[c]=o[c],o[c]=i;return o}for(a=t<0?(1-e)*t:0,u=n<0?(1-e)*n:0,l=0;l<e;l++)i=r[a],r[a]=o[u],o[u]=i,a+=t,u+=n;return o}return p(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n,i,a){var u,f,l,c,p;if(e<=0)return n;if(f=o,l=a,1===t&&1===i){if((c=e%3)>0)for(p=0;p<c;p++)u=r[f],r[f]=n[l],n[l]=u,f+=t,l+=i;if(e<3)return n;for(p=c;p<e;p+=3)u=r[f],r[f]=n[l],n[l]=u,u=r[f+1],r[f+1]=n[l+1],n[l+1]=u,u=r[f+2],r[f+2]=n[l+2],n[l+2]=u,f+=3,l+=3;return n}for(p=0;p<e;p++)u=r[f],r[f]=n[l],n[l]=u,f+=t,l+=i;return n}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sswap=r();
//# sourceMappingURL=index.js.map
