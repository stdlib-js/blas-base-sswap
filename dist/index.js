"use strict";var c=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var m=c(function(G,j){
var f=3;function d(u,r,v,o,e,n,p){var t,a,i,q,s;if(u<=0)return e;if(a=o,i=p,v===1&&n===1){if(q=u%f,q>0)for(s=0;s<q;s++)t=r[a],r[a]=e[i],e[i]=t,a+=v,i+=n;if(u<f)return e;for(s=q;s<u;s+=f)t=r[a],r[a]=e[i],e[i]=t,t=r[a+1],r[a+1]=e[i+1],e[i+1]=t,t=r[a+2],r[a+2]=e[i+2],e[i+2]=t,a+=f,i+=f;return e}for(s=0;s<u;s++)t=r[a],r[a]=e[i],e[i]=t,a+=v,i+=n;return e}j.exports=d
});var _=c(function(H,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(u,r,v,o,e){var n,p;return u<=0?o:(n=l(u,v),p=l(u,e),g(u,r,v,n,o,e,p))}R.exports=h
});var O=c(function(I,M){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),z=m();k(E,"ndarray",z);M.exports=E
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=O(),w,b=B(A(__dirname,"./native.js"));C(b)?w=D:w=b;module.exports=w;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
