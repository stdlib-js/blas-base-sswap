// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";var t=3;function n(r,e,n,s,i,d,f){var o,a,u,m,l;if(r<=0)return i;if(a=s,u=f,1===n&&1===d){if((m=r%t)>0)for(l=0;l<m;l++)o=e[a],e[a]=i[u],i[u]=o,a+=n,u+=d;if(r<t)return i;for(l=m;l<r;l+=t)o=e[a],e[a]=i[u],i[u]=o,o=e[a+1],e[a+1]=i[u+1],i[u+1]=o,o=e[a+2],e[a+2]=i[u+2],i[u+2]=o,a+=t,u+=t;return i}for(l=0;l<r;l++)o=e[a],e[a]=i[u],i[u]=o,a+=n,u+=d;return i}function s(r,t,s,i,d){return r<=0?i:n(r,t,s,e(r,s),i,d,e(r,d))}r(s,"ndarray",n);export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
