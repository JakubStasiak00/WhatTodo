(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Sc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Cc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?mm(s):Cc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Le(t))return t;if(_e(t))return t}}const dm=/;(?![^(]*\))/g,pm=/:([^]+)/,gm=/\/\*.*?\*\//gs;function mm(t){const e={};return t.replace(gm,"").split(dm).forEach(n=>{if(n){const s=n.split(pm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ur(t){let e="";if(Le(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ur(t[n]);s&&(e+=s+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vm=Sc(ym);function hf(t){return!!t||t===""}const hr=t=>Le(t)?t:t==null?"":W(t)||_e(t)&&(t.toString===gf||!X(t.toString))?JSON.stringify(t,ff,2):String(t),ff=(t,e)=>e&&e.__v_isRef?ff(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:df(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!W(e)&&!mf(e)?String(e):e,ve={},ls=[],Ct=()=>{},wm=()=>!1,_m=/^on[^a-z]/,lo=t=>_m.test(t),Ac=t=>t.startsWith("onUpdate:"),Ye=Object.assign,kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Em=Object.prototype.hasOwnProperty,ae=(t,e)=>Em.call(t,e),W=Array.isArray,us=t=>uo(t)==="[object Map]",df=t=>uo(t)==="[object Set]",X=t=>typeof t=="function",Le=t=>typeof t=="string",Rc=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",pf=t=>_e(t)&&X(t.then)&&X(t.catch),gf=Object.prototype.toString,uo=t=>gf.call(t),Im=t=>uo(t).slice(8,-1),mf=t=>uo(t)==="[object Object]",Dc=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tm=/-(\w)/g,Vt=ho(t=>t.replace(Tm,(e,n)=>n?n.toUpperCase():"")),bm=/\B([A-Z])/g,Ns=ho(t=>t.replace(bm,"-$1").toLowerCase()),fo=ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zo=ho(t=>t?`on${fo(t)}`:""),fr=(t,e)=>!Object.is(t,e),vi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ra=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xl;const Sm=()=>Xl||(Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ft;class yf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function vf(t){return new yf(t)}function Cm(t,e=ft){e&&e.active&&e.effects.push(t)}function wf(){return ft}function Am(t){ft&&ft.cleanups.push(t)}const Oc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_f=t=>(t.w&wn)>0,Ef=t=>(t.n&wn)>0,km=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wn},Rm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_f(r)&&!Ef(r)?r.delete(t):e[n++]=r,r.w&=~wn,r.n&=~wn}e.length=n}},Li=new WeakMap;let Ks=0,wn=1;const Da=30;let Tt;const Un=Symbol(""),Oa=Symbol("");class Nc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cm(this,s)}run(){if(!this.active)return this.fn();let e=Tt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,pn=!0,wn=1<<++Ks,Ks<=Da?km(this):Zl(this),this.fn()}finally{Ks<=Da&&Rm(this),wn=1<<--Ks,Tt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(Zl(this),this.onStop&&this.onStop(),this.active=!1)}}function Zl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const If=[];function Ps(){If.push(pn),pn=!1}function xs(){const t=If.pop();pn=t===void 0?!0:t}function lt(t,e,n){if(pn&&Tt){let s=Li.get(t);s||Li.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Oc()),Tf(r)}}function Tf(t,e){let n=!1;Ks<=Da?Ef(t)||(t.n|=wn,n=!_f(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function Gt(t,e,n,s,r,i){const o=Li.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Dc(n)&&a.push(o.get("length")):(a.push(o.get(Un)),us(t)&&a.push(o.get(Oa)));break;case"delete":W(t)||(a.push(o.get(Un)),us(t)&&a.push(o.get(Oa)));break;case"set":us(t)&&a.push(o.get(Un));break}if(a.length===1)a[0]&&Na(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Na(Oc(c))}}function Na(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&eu(s);for(const s of n)s.computed||eu(s)}function eu(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Dm(t,e){var n;return(n=Li.get(t))===null||n===void 0?void 0:n.get(e)}const Om=Sc("__proto__,__v_isRef,__isVue"),bf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rc)),Nm=Pc(),Pm=Pc(!1,!0),xm=Pc(!0),tu=Lm();function Lm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)lt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ps();const s=re(this)[e].apply(this,n);return xs(),s}}),t}function Mm(t){const e=re(this);return lt(e,"has",t),e.hasOwnProperty(t)}function Pc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Xm:Rf:e?kf:Af).get(s))return s;const o=W(s);if(!t){if(o&&ae(tu,r))return Reflect.get(tu,r,i);if(r==="hasOwnProperty")return Mm}const a=Reflect.get(s,r,i);return(Rc(r)?bf.has(r):Om(r))||(t||lt(s,"get",r),e)?a:Se(a)?o&&Dc(r)?a:a.value:_e(a)?t?Df(a):Ls(a):a}}const Fm=Sf(),Um=Sf(!0);function Sf(t=!1){return function(n,s,r,i){let o=n[s];if(ws(o)&&Se(o)&&!Se(r))return!1;if(!t&&(!Mi(r)&&!ws(r)&&(o=re(o),r=re(r)),!W(n)&&Se(o)&&!Se(r)))return o.value=r,!0;const a=W(n)&&Dc(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===re(i)&&(a?fr(r,o)&&Gt(n,"set",s,r):Gt(n,"add",s,r)),c}}function Vm(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Gt(t,"delete",e,void 0),s}function $m(t,e){const n=Reflect.has(t,e);return(!Rc(e)||!bf.has(e))&&lt(t,"has",e),n}function Bm(t){return lt(t,"iterate",W(t)?"length":Un),Reflect.ownKeys(t)}const Cf={get:Nm,set:Fm,deleteProperty:Vm,has:$m,ownKeys:Bm},jm={get:xm,set(t,e){return!0},deleteProperty(t,e){return!0}},Hm=Ye({},Cf,{get:Pm,set:Um}),xc=t=>t,po=t=>Reflect.getPrototypeOf(t);function ni(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&lt(r,"get",e),lt(r,"get",i));const{has:o}=po(r),a=s?xc:n?Fc:dr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function si(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&lt(s,"has",t),lt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ri(t,e=!1){return t=t.__v_raw,!e&&lt(re(t),"iterate",Un),Reflect.get(t,"size",t)}function nu(t){t=re(t);const e=re(this);return po(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function su(t,e){e=re(e);const n=re(this),{has:s,get:r}=po(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?fr(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function ru(t){const e=re(this),{has:n,get:s}=po(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Gt(e,"delete",t,void 0),i}function iu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function ii(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?xc:t?Fc:dr;return!t&&lt(a,"iterate",Un),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function oi(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?xc:e?Fc:dr;return!e&&lt(i,"iterate",c?Oa:Un),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function qm(){const t={get(i){return ni(this,i)},get size(){return ri(this)},has:si,add:nu,set:su,delete:ru,clear:iu,forEach:ii(!1,!1)},e={get(i){return ni(this,i,!1,!0)},get size(){return ri(this)},has:si,add:nu,set:su,delete:ru,clear:iu,forEach:ii(!1,!0)},n={get(i){return ni(this,i,!0)},get size(){return ri(this,!0)},has(i){return si.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:ii(!0,!1)},s={get(i){return ni(this,i,!0,!0)},get size(){return ri(this,!0)},has(i){return si.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=oi(i,!1,!1),n[i]=oi(i,!0,!1),e[i]=oi(i,!1,!0),s[i]=oi(i,!0,!0)}),[t,n,e,s]}const[Km,zm,Wm,Gm]=qm();function Lc(t,e){const n=e?t?Gm:Wm:t?zm:Km;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const Qm={get:Lc(!1,!1)},Ym={get:Lc(!1,!0)},Jm={get:Lc(!0,!1)},Af=new WeakMap,kf=new WeakMap,Rf=new WeakMap,Xm=new WeakMap;function Zm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ey(t){return t.__v_skip||!Object.isExtensible(t)?0:Zm(Im(t))}function Ls(t){return ws(t)?t:Mc(t,!1,Cf,Qm,Af)}function ty(t){return Mc(t,!1,Hm,Ym,kf)}function Df(t){return Mc(t,!0,jm,Jm,Rf)}function Mc(t,e,n,s,r){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=ey(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Wt(t){return ws(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function ws(t){return!!(t&&t.__v_isReadonly)}function Mi(t){return!!(t&&t.__v_isShallow)}function Of(t){return Wt(t)||ws(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function _s(t){return xi(t,"__v_skip",!0),t}const dr=t=>_e(t)?Ls(t):t,Fc=t=>_e(t)?Df(t):t;function Nf(t){pn&&Tt&&(t=re(t),Tf(t.dep||(t.dep=Oc())))}function Pf(t,e){t=re(t);const n=t.dep;n&&Na(n)}function Se(t){return!!(t&&t.__v_isRef===!0)}function wt(t){return xf(t,!1)}function ny(t){return xf(t,!0)}function xf(t,e){return Se(t)?t:new sy(t,e)}class sy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:dr(e)}get value(){return Nf(this),this._value}set value(e){const n=this.__v_isShallow||Mi(e)||ws(e);e=n?e:re(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:dr(e),Pf(this))}}function tt(t){return Se(t)?t.value:t}const ry={get:(t,e,n)=>tt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Lf(t){return Wt(t)?t:new Proxy(t,ry)}function iy(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=Mf(t,n);return e}class oy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dm(re(this._object),this._key)}}function Mf(t,e,n){const s=t[e];return Se(s)?s:new oy(t,e,n)}var Ff;class ay{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ff]=!1,this._dirty=!0,this.effect=new Nc(e,()=>{this._dirty||(this._dirty=!0,Pf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return Nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ff="__v_isReadonly";function cy(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=Ct):(s=t.get,r=t.set),new ay(s,r,i||!r,n)}function gn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){go(i,e,n)}return r}function vt(t,e,n,s){if(X(t)){const i=gn(t,e,n,s);return i&&pf(i)&&i.catch(o=>{go(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(vt(t[i],e,n,s));return r}function go(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){gn(c,null,10,[t,o,a]);return}}ly(t,n,r,s)}function ly(t,e,n,s=!0){console.error(t)}let pr=!1,Pa=!1;const We=[];let xt=0;const hs=[];let Ht=null,On=0;const Uf=Promise.resolve();let Uc=null;function Vc(t){const e=Uc||Uf;return t?e.then(this?t.bind(this):t):e}function uy(t){let e=xt+1,n=We.length;for(;e<n;){const s=e+n>>>1;gr(We[s])<t?e=s+1:n=s}return e}function $c(t){(!We.length||!We.includes(t,pr&&t.allowRecurse?xt+1:xt))&&(t.id==null?We.push(t):We.splice(uy(t.id),0,t),Vf())}function Vf(){!pr&&!Pa&&(Pa=!0,Uc=Uf.then(Bf))}function hy(t){const e=We.indexOf(t);e>xt&&We.splice(e,1)}function fy(t){W(t)?hs.push(...t):(!Ht||!Ht.includes(t,t.allowRecurse?On+1:On))&&hs.push(t),Vf()}function ou(t,e=pr?xt+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function $f(t){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,Ht){Ht.push(...e);return}for(Ht=e,Ht.sort((n,s)=>gr(n)-gr(s)),On=0;On<Ht.length;On++)Ht[On]();Ht=null,On=0}}const gr=t=>t.id==null?1/0:t.id,dy=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Bf(t){Pa=!1,pr=!0,We.sort(dy);const e=Ct;try{for(xt=0;xt<We.length;xt++){const n=We[xt];n&&n.active!==!1&&gn(n,null,14)}}finally{xt=0,We.length=0,$f(),pr=!1,Uc=null,(We.length||hs.length)&&Bf()}}function py(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ve;d&&(r=n.map(g=>Le(g)?g.trim():g)),h&&(r=n.map(Ra))}let a,c=s[a=Zo(e)]||s[a=Zo(Vt(e))];!c&&i&&(c=s[a=Zo(Ns(e))]),c&&vt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(l,t,6,r)}}function jf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=jf(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(_e(t)&&s.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Ye(o,i),_e(t)&&s.set(t,o),o)}function mo(t,e){return!t||!lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Ns(e))||ae(t,e))}let gt=null,Hf=null;function Fi(t){const e=gt;return gt=t,Hf=t&&t.type.__scopeId||null,e}function gy(t,e=gt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&mu(-1);const i=Fi(e);let o;try{o=t(...r)}finally{Fi(i),s._d&&mu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ea(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:w}=t;let k,A;const L=Fi(t);try{if(n.shapeFlag&4){const K=r||s;k=Pt(u.call(K,K,h,i,g,d,v)),A=c}else{const K=e;k=Pt(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),A=e.props?c:my(c)}}catch(K){er.length=0,go(K,t,1),k=at(kt)}let O=k;if(A&&w!==!1){const K=Object.keys(A),{shapeFlag:G}=O;K.length&&G&7&&(o&&K.some(Ac)&&(A=yy(A,o)),O=_n(O,A))}return n.dirs&&(O=_n(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),k=O,Fi(L),k}const my=t=>{let e;for(const n in t)(n==="class"||n==="style"||lo(n))&&((e||(e={}))[n]=t[n]);return e},yy=(t,e)=>{const n={};for(const s in t)(!Ac(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?au(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!mo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?au(s,o,l):!0:!!o;return!1}function au(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!mo(n,i))return!0}return!1}function wy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _y=t=>t.__isSuspense;function Ey(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):fy(t)}function wi(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Ae||gt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const ai={};function Xs(t,e,n){return qf(t,e,n)}function qf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){const a=wf()===(Ae==null?void 0:Ae.scope)?Ae:null;let c,l=!1,u=!1;if(Se(t)?(c=()=>t.value,l=Mi(t)):Wt(t)?(c=()=>t,s=!0):W(t)?(u=!0,l=t.some(O=>Wt(O)||Mi(O)),c=()=>t.map(O=>{if(Se(O))return O.value;if(Wt(O))return xn(O);if(X(O))return gn(O,a,2)})):X(t)?e?c=()=>gn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),vt(t,a,3,[d])}:c=Ct,e&&s){const O=c;c=()=>xn(O())}let h,d=O=>{h=A.onStop=()=>{gn(O,a,4)}},g;if(yr)if(d=Ct,e?n&&vt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const O=vv();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Ct;let v=u?new Array(t.length).fill(ai):ai;const w=()=>{if(A.active)if(e){const O=A.run();(s||l||(u?O.some((K,G)=>fr(K,v[G])):fr(O,v)))&&(h&&h(),vt(e,a,3,[O,v===ai?void 0:u&&v[0]===ai?[]:v,d]),v=O)}else A.run()};w.allowRecurse=!!e;let k;r==="sync"?k=w:r==="post"?k=()=>rt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),k=()=>$c(w));const A=new Nc(c,k);e?n?w():v=A.run():r==="post"?rt(A.run.bind(A),a&&a.suspense):A.run();const L=()=>{A.stop(),a&&a.scope&&kc(a.scope.effects,A)};return g&&g.push(L),L}function Iy(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?Kf(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Ae;Es(this);const a=qf(r,i.bind(s),n);return o?Es(o):Vn(),a}function Kf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function xn(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))xn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)xn(t[n],e);else if(df(t)||us(t))t.forEach(n=>{xn(n,e)});else if(mf(t))for(const n in t)xn(t[n],e);return t}function Ty(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bc(()=>{t.isMounted=!0}),Yf(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],by={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=ud(),s=Ty();let r;return()=>{const i=e.default&&Wf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==kt){o=w;break}}const a=re(t),{mode:c}=a;if(s.isLeaving)return ta(o);const l=cu(o);if(!l)return ta(o);const u=xa(l,a,s,n);La(l,u);const h=n.subTree,d=h&&cu(h);let g=!1;const{getTransitionKey:v}=l.type;if(v){const w=v();r===void 0?r=w:w!==r&&(r=w,g=!0)}if(d&&d.type!==kt&&(!Nn(l,d)||g)){const w=xa(d,a,s,n);if(La(d,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ta(o);c==="in-out"&&l.type!==kt&&(w.delayLeave=(k,A,L)=>{const O=zf(s,d);O[String(d.key)]=d,k._leaveCb=()=>{A(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},Sy=by;function zf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function xa(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:w,onAppear:k,onAfterAppear:A,onAppearCancelled:L}=e,O=String(t.key),K=zf(n,t),G=(N,te)=>{N&&vt(N,s,9,te)},he=(N,te)=>{const se=te[1];G(N,te),W(N)?N.every(Ie=>Ie.length<=1)&&se():N.length<=1&&se()},Y={mode:i,persisted:o,beforeEnter(N){let te=a;if(!n.isMounted)if(r)te=w||a;else return;N._leaveCb&&N._leaveCb(!0);const se=K[O];se&&Nn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),G(te,[N])},enter(N){let te=c,se=l,Ie=u;if(!n.isMounted)if(r)te=k||c,se=A||l,Ie=L||u;else return;let Me=!1;const ut=N._enterCb=Ze=>{Me||(Me=!0,Ze?G(Ie,[N]):G(se,[N]),Y.delayedLeave&&Y.delayedLeave(),N._enterCb=void 0)};te?he(te,[N,ut]):ut()},leave(N,te){const se=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return te();G(h,[N]);let Ie=!1;const Me=N._leaveCb=ut=>{Ie||(Ie=!0,te(),ut?G(v,[N]):G(g,[N]),N._leaveCb=void 0,K[se]===t&&delete K[se])};K[se]=t,d?he(d,[N,Me]):Me()},clone(N){return xa(N,e,n,s)}};return Y}function ta(t){if(yo(t))return t=_n(t),t.children=null,t}function cu(t){return yo(t)?t.children?t.children[0]:void 0:t}function La(t,e){t.shapeFlag&6&&t.component?La(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===it?(o.patchFlag&128&&r++,s=s.concat(Wf(o.children,e,a))):(e||o.type!==kt)&&s.push(a!=null?_n(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Gf(t){return X(t)?{setup:t,name:t.name}:t}const _i=t=>!!t.type.__asyncLoader,yo=t=>t.type.__isKeepAlive;function Cy(t,e){Qf(t,"a",e)}function Ay(t,e){Qf(t,"da",e)}function Qf(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(vo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)yo(r.parent.vnode)&&ky(s,e,n,r),r=r.parent}}function ky(t,e,n,s){const r=vo(e,t,s,!0);Jf(()=>{kc(s[e],r)},n)}function vo(t,e,n=Ae,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ps(),Es(n);const a=vt(e,n,t,o);return Vn(),xs(),a});return s?r.unshift(i):r.push(i),i}}const Zt=t=>(e,n=Ae)=>(!yr||t==="sp")&&vo(t,(...s)=>e(...s),n),Ry=Zt("bm"),Bc=Zt("m"),Dy=Zt("bu"),Oy=Zt("u"),Yf=Zt("bum"),Jf=Zt("um"),Ny=Zt("sp"),Py=Zt("rtg"),xy=Zt("rtc");function Ly(t,e=Ae){vo("ec",t,e)}function Ui(t,e){const n=gt;if(n===null)return t;const s=Eo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&xn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function An(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ps(),vt(c,n,8,[t.el,a,t,e]),xs())}}const Xf="components";function My(t,e){return Uy(Xf,t,!0,e)||t}const Fy=Symbol();function Uy(t,e,n=!0,s=!1){const r=gt||Ae;if(r){const i=r.type;if(t===Xf){const a=gv(i,!1);if(a&&(a===e||a===Vt(e)||a===fo(Vt(e))))return i}const o=lu(r[t]||i[t],e)||lu(r.appContext[t],e);return!o&&s?i:o}}function lu(t,e){return t&&(t[e]||t[Vt(e)]||t[fo(Vt(e))])}function Vy(t,e,n,s){let r;const i=n&&n[s];if(W(t)||Le(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ma=t=>t?hd(t)?Eo(t)||t.proxy:Ma(t.parent):null,Zs=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ma(t.parent),$root:t=>Ma(t.root),$emit:t=>t.emit,$options:t=>jc(t),$forceUpdate:t=>t.f||(t.f=()=>$c(t.update)),$nextTick:t=>t.n||(t.n=Vc.bind(t.proxy)),$watch:t=>Iy.bind(t)}),na=(t,e)=>t!==ve&&!t.__isScriptSetup&&ae(t,e),$y={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(na(s,e))return o[e]=1,s[e];if(r!==ve&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==ve&&ae(n,e))return o[e]=4,n[e];Fa&&(o[e]=0)}}const u=Zs[e];let h,d;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return na(r,e)?(r[e]=n,!0):s!==ve&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ae(t,o)||na(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(Zs,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fa=!0;function By(t){const e=jc(t),n=t.proxy,s=t.ctx;Fa=!1,e.beforeCreate&&uu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:w,deactivated:k,beforeDestroy:A,beforeUnmount:L,destroyed:O,unmounted:K,render:G,renderTracked:he,renderTriggered:Y,errorCaptured:N,serverPrefetch:te,expose:se,inheritAttrs:Ie,components:Me,directives:ut,filters:Ze}=e;if(l&&jy(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const pe=o[me];X(pe)&&(s[me]=pe.bind(n))}if(r){const me=r.call(n,n);_e(me)&&(t.data=Ls(me))}if(Fa=!0,i)for(const me in i){const pe=i[me],_t=X(pe)?pe.bind(n,n):X(pe.get)?pe.get.bind(n,n):Ct,Cn=!X(pe)&&X(pe.set)?pe.set.bind(n):Ct,Et=pt({get:_t,set:Cn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Et.value,set:st=>Et.value=st})}if(a)for(const me in a)Zf(a[me],s,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(pe=>{wi(pe,me[pe])})}u&&uu(u,t,"c");function ke(me,pe){W(pe)?pe.forEach(_t=>me(_t.bind(n))):pe&&me(pe.bind(n))}if(ke(Ry,h),ke(Bc,d),ke(Dy,g),ke(Oy,v),ke(Cy,w),ke(Ay,k),ke(Ly,N),ke(xy,he),ke(Py,Y),ke(Yf,L),ke(Jf,K),ke(Ny,te),W(se))if(se.length){const me=t.exposed||(t.exposed={});se.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:_t=>n[pe]=_t})})}else t.exposed||(t.exposed={});G&&t.render===Ct&&(t.render=G),Ie!=null&&(t.inheritAttrs=Ie),Me&&(t.components=Me),ut&&(t.directives=ut)}function jy(t,e,n=Ct,s=!1){W(t)&&(t=Ua(t));for(const r in t){const i=t[r];let o;_e(i)?"default"in i?o=At(i.from||r,i.default,!0):o=At(i.from||r):o=At(i),Se(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function uu(t,e,n){vt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zf(t,e,n,s){const r=s.includes(".")?Kf(n,s):()=>n[s];if(Le(t)){const i=e[t];X(i)&&Xs(r,i)}else if(X(t))Xs(r,t.bind(n));else if(_e(t))if(W(t))t.forEach(i=>Zf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&Xs(r,i,t)}}function jc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Vi(c,l,o,!0)),Vi(c,e,o)),_e(e)&&i.set(e,c),c}function Vi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vi(t,i,n,!0),r&&r.forEach(o=>Vi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Hy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hy={data:hu,props:Rn,emits:Rn,methods:Rn,computed:Rn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Rn,directives:Rn,watch:Ky,provide:hu,inject:qy};function hu(t,e){return e?t?function(){return Ye(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function qy(t,e){return Rn(Ua(t),Ua(e))}function Ua(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Rn(t,e){return t?Ye(Ye(Object.create(null),t),e):e}function Ky(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function zy(t,e,n,s=!1){const r={},i={};xi(i,_o,1),t.propsDefaults=Object.create(null),ed(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ty(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Wy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(mo(t.emitsOptions,d))continue;const g=e[d];if(c)if(ae(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=Vt(d);r[v]=Va(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{ed(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Ns(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Va(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&Gt(t,"set","$attrs")}function ed(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(yi(c))continue;const l=e[c];let u;r&&ae(r,u=Vt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:mo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=re(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Va(r,c,h,l[h],t,!ae(l,h))}}return o}function Va(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Es(r),s=l[n]=c.call(null,e),Vn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ns(n))&&(s=!0))}return s}function td(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,g]=td(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return _e(t)&&s.set(t,ls),ls;if(W(i))for(let u=0;u<i.length;u++){const h=Vt(i[u]);fu(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Vt(u);if(fu(h)){const d=i[u],g=o[h]=W(d)||X(d)?{type:d}:Object.assign({},d);if(g){const v=gu(Boolean,g.type),w=gu(String,g.type);g[0]=v>-1,g[1]=w<0||v<w,(v>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return _e(t)&&s.set(t,l),l}function fu(t){return t[0]!=="$"}function du(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pu(t,e){return du(t)===du(e)}function gu(t,e){return W(e)?e.findIndex(n=>pu(n,t)):X(e)&&pu(e,t)?0:-1}const nd=t=>t[0]==="_"||t==="$stable",Hc=t=>W(t)?t.map(Pt):[Pt(t)],Gy=(t,e,n)=>{if(e._n)return e;const s=gy((...r)=>Hc(e(...r)),n);return s._c=!1,s},sd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(nd(r))continue;const i=t[r];if(X(i))e[r]=Gy(r,i,s);else if(i!=null){const o=Hc(i);e[r]=()=>o}}},rd=(t,e)=>{const n=Hc(e);t.slots.default=()=>n},Qy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),xi(e,"_",n)):sd(e,t.slots={})}else t.slots={},e&&rd(t,e);xi(t.slots,_o,1)},Yy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(r,e),!n&&a===1&&delete r._):(i=!e.$stable,sd(e,r)),o=e}else e&&(rd(t,e),o={default:1});if(i)for(const a in r)!nd(a)&&!(a in o)&&delete r[a]};function id(){return{app:null,config:{isNativeTag:wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Xy(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!_e(r)&&(r=null);const i=id(),o=new Set;let a=!1;const c=i.app={_uid:Jy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:wv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=at(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Eo(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function $a(t,e,n,s,r=!1){if(W(t)){t.forEach((d,g)=>$a(d,e&&(W(e)?e[g]:e),n,s,r));return}if(_i(s)&&!r)return;const i=s.shapeFlag&4?Eo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Se(l)&&(l.value=null)),X(c))gn(c,a,12,[o,u]);else{const d=Le(c),g=Se(c);if(d||g){const v=()=>{if(t.f){const w=d?ae(h,c)?h[c]:u[c]:c.value;r?W(w)&&kc(w,i):W(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,rt(v,n)):v()}}}const rt=Ey;function Zy(t){return ev(t)}function ev(t,e){const n=Sm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ct,insertStaticContent:v}=t,w=(f,p,m,y=null,E=null,S=null,P=!1,b=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!Nn(f,p)&&(y=R(f),st(f,E,S,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:I,ref:$,shapeFlag:M}=p;switch(I){case wo:k(f,p,m,y);break;case kt:A(f,p,m,y);break;case sa:f==null&&L(p,m,y,P);break;case it:Me(f,p,m,y,E,S,P,b,C);break;default:M&1?G(f,p,m,y,E,S,P,b,C):M&6?ut(f,p,m,y,E,S,P,b,C):(M&64||M&128)&&I.process(f,p,m,y,E,S,P,b,C,oe)}$!=null&&E&&$a($,f&&f.ref,S,p||f,!p)},k=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const E=p.el=f.el;p.children!==f.children&&l(E,p.children)}},A=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},L=(f,p,m,y)=>{[f.el,f.anchor]=v(f.children,p,m,y,f.el,f.anchor)},O=({el:f,anchor:p},m,y)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,y),f=E;s(p,m,y)},K=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},G=(f,p,m,y,E,S,P,b,C)=>{P=P||p.type==="svg",f==null?he(p,m,y,E,S,P,b,C):te(f,p,E,S,P,b,C)},he=(f,p,m,y,E,S,P,b)=>{let C,I;const{type:$,props:M,shapeFlag:B,transition:Q,dirs:ne}=f;if(C=f.el=o(f.type,S,M&&M.is,M),B&8?u(C,f.children):B&16&&N(f.children,C,null,y,E,S&&$!=="foreignObject",P,b),ne&&An(f,null,y,"created"),Y(C,f,f.scopeId,P,y),M){for(const ge in M)ge!=="value"&&!yi(ge)&&i(C,ge,null,M[ge],S,f.children,y,E,x);"value"in M&&i(C,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Nt(I,y,f)}ne&&An(f,null,y,"beforeMount");const ye=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;ye&&Q.beforeEnter(C),s(C,p,m),((I=M&&M.onVnodeMounted)||ye||ne)&&rt(()=>{I&&Nt(I,y,f),ye&&Q.enter(C),ne&&An(f,null,y,"mounted")},E)},Y=(f,p,m,y,E)=>{if(m&&g(f,m),y)for(let S=0;S<y.length;S++)g(f,y[S]);if(E){let S=E.subTree;if(p===S){const P=E.vnode;Y(f,P,P.scopeId,P.slotScopeIds,E.parent)}}},N=(f,p,m,y,E,S,P,b,C=0)=>{for(let I=C;I<f.length;I++){const $=f[I]=b?an(f[I]):Pt(f[I]);w(null,$,p,m,y,E,S,P,b)}},te=(f,p,m,y,E,S,P)=>{const b=p.el=f.el;let{patchFlag:C,dynamicChildren:I,dirs:$}=p;C|=f.patchFlag&16;const M=f.props||ve,B=p.props||ve;let Q;m&&kn(m,!1),(Q=B.onVnodeBeforeUpdate)&&Nt(Q,m,p,f),$&&An(p,f,m,"beforeUpdate"),m&&kn(m,!0);const ne=E&&p.type!=="foreignObject";if(I?se(f.dynamicChildren,I,b,m,y,ne,S):P||pe(f,p,b,null,m,y,ne,S,!1),C>0){if(C&16)Ie(b,p,M,B,m,y,E);else if(C&2&&M.class!==B.class&&i(b,"class",null,B.class,E),C&4&&i(b,"style",M.style,B.style,E),C&8){const ye=p.dynamicProps;for(let ge=0;ge<ye.length;ge++){const Re=ye[ge],It=M[Re],Zn=B[Re];(Zn!==It||Re==="value")&&i(b,Re,It,Zn,E,f.children,m,y,x)}}C&1&&f.children!==p.children&&u(b,p.children)}else!P&&I==null&&Ie(b,p,M,B,m,y,E);((Q=B.onVnodeUpdated)||$)&&rt(()=>{Q&&Nt(Q,m,p,f),$&&An(p,f,m,"updated")},y)},se=(f,p,m,y,E,S,P)=>{for(let b=0;b<p.length;b++){const C=f[b],I=p[b],$=C.el&&(C.type===it||!Nn(C,I)||C.shapeFlag&70)?h(C.el):m;w(C,I,$,null,y,E,S,P,!0)}},Ie=(f,p,m,y,E,S,P)=>{if(m!==y){if(m!==ve)for(const b in m)!yi(b)&&!(b in y)&&i(f,b,m[b],null,P,p.children,E,S,x);for(const b in y){if(yi(b))continue;const C=y[b],I=m[b];C!==I&&b!=="value"&&i(f,b,I,C,P,p.children,E,S,x)}"value"in y&&i(f,"value",m.value,y.value)}},Me=(f,p,m,y,E,S,P,b,C)=>{const I=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:Q}=p;Q&&(b=b?b.concat(Q):Q),f==null?(s(I,m,y),s($,m,y),N(p.children,m,$,E,S,P,b,C)):M>0&&M&64&&B&&f.dynamicChildren?(se(f.dynamicChildren,B,m,E,S,P,b),(p.key!=null||E&&p===E.subTree)&&od(f,p,!0)):pe(f,p,m,$,E,S,P,b,C)},ut=(f,p,m,y,E,S,P,b,C)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?E.ctx.activate(p,m,y,P,C):Ze(p,m,y,E,S,P,C):Fe(f,p,C)},Ze=(f,p,m,y,E,S,P)=>{const b=f.component=uv(f,y,E);if(yo(f)&&(b.ctx.renderer=oe),hv(b),b.asyncDep){if(E&&E.registerDep(b,ke),!f.el){const C=b.subTree=at(kt);A(null,C,p,m)}return}ke(b,f,p,m,E,S,P)},Fe=(f,p,m)=>{const y=p.component=f.component;if(vy(f,p,m))if(y.asyncDep&&!y.asyncResolved){me(y,p,m);return}else y.next=p,hy(y.update),y.update();else p.el=f.el,y.vnode=p},ke=(f,p,m,y,E,S,P)=>{const b=()=>{if(f.isMounted){let{next:$,bu:M,u:B,parent:Q,vnode:ne}=f,ye=$,ge;kn(f,!1),$?($.el=ne.el,me(f,$,P)):$=ne,M&&vi(M),(ge=$.props&&$.props.onVnodeBeforeUpdate)&&Nt(ge,Q,$,ne),kn(f,!0);const Re=ea(f),It=f.subTree;f.subTree=Re,w(It,Re,h(It.el),R(It),f,E,S),$.el=Re.el,ye===null&&wy(f,Re.el),B&&rt(B,E),(ge=$.props&&$.props.onVnodeUpdated)&&rt(()=>Nt(ge,Q,$,ne),E)}else{let $;const{el:M,props:B}=p,{bm:Q,m:ne,parent:ye}=f,ge=_i(p);if(kn(f,!1),Q&&vi(Q),!ge&&($=B&&B.onVnodeBeforeMount)&&Nt($,ye,p),kn(f,!0),M&&ee){const Re=()=>{f.subTree=ea(f),ee(M,f.subTree,f,E,null)};ge?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Re()):Re()}else{const Re=f.subTree=ea(f);w(null,Re,m,y,f,E,S),p.el=Re.el}if(ne&&rt(ne,E),!ge&&($=B&&B.onVnodeMounted)){const Re=p;rt(()=>Nt($,ye,Re),E)}(p.shapeFlag&256||ye&&_i(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&rt(f.a,E),f.isMounted=!0,p=m=y=null}},C=f.effect=new Nc(b,()=>$c(I),f.scope),I=f.update=()=>C.run();I.id=f.uid,kn(f,!0),I()},me=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Wy(f,p.props,y,m),Yy(f,p.children,m),Ps(),ou(),xs()},pe=(f,p,m,y,E,S,P,b,C=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,M=p.children,{patchFlag:B,shapeFlag:Q}=p;if(B>0){if(B&128){Cn(I,M,m,y,E,S,P,b,C);return}else if(B&256){_t(I,M,m,y,E,S,P,b,C);return}}Q&8?($&16&&x(I,E,S),M!==I&&u(m,M)):$&16?Q&16?Cn(I,M,m,y,E,S,P,b,C):x(I,E,S,!0):($&8&&u(m,""),Q&16&&N(M,m,y,E,S,P,b,C))},_t=(f,p,m,y,E,S,P,b,C)=>{f=f||ls,p=p||ls;const I=f.length,$=p.length,M=Math.min(I,$);let B;for(B=0;B<M;B++){const Q=p[B]=C?an(p[B]):Pt(p[B]);w(f[B],Q,m,null,E,S,P,b,C)}I>$?x(f,E,S,!0,!1,M):N(p,m,y,E,S,P,b,C,M)},Cn=(f,p,m,y,E,S,P,b,C)=>{let I=0;const $=p.length;let M=f.length-1,B=$-1;for(;I<=M&&I<=B;){const Q=f[I],ne=p[I]=C?an(p[I]):Pt(p[I]);if(Nn(Q,ne))w(Q,ne,m,null,E,S,P,b,C);else break;I++}for(;I<=M&&I<=B;){const Q=f[M],ne=p[B]=C?an(p[B]):Pt(p[B]);if(Nn(Q,ne))w(Q,ne,m,null,E,S,P,b,C);else break;M--,B--}if(I>M){if(I<=B){const Q=B+1,ne=Q<$?p[Q].el:y;for(;I<=B;)w(null,p[I]=C?an(p[I]):Pt(p[I]),m,ne,E,S,P,b,C),I++}}else if(I>B)for(;I<=M;)st(f[I],E,S,!0),I++;else{const Q=I,ne=I,ye=new Map;for(I=ne;I<=B;I++){const ht=p[I]=C?an(p[I]):Pt(p[I]);ht.key!=null&&ye.set(ht.key,I)}let ge,Re=0;const It=B-ne+1;let Zn=!1,Ql=0;const js=new Array(It);for(I=0;I<It;I++)js[I]=0;for(I=Q;I<=M;I++){const ht=f[I];if(Re>=It){st(ht,E,S,!0);continue}let Ot;if(ht.key!=null)Ot=ye.get(ht.key);else for(ge=ne;ge<=B;ge++)if(js[ge-ne]===0&&Nn(ht,p[ge])){Ot=ge;break}Ot===void 0?st(ht,E,S,!0):(js[Ot-ne]=I+1,Ot>=Ql?Ql=Ot:Zn=!0,w(ht,p[Ot],m,null,E,S,P,b,C),Re++)}const Yl=Zn?tv(js):ls;for(ge=Yl.length-1,I=It-1;I>=0;I--){const ht=ne+I,Ot=p[ht],Jl=ht+1<$?p[ht+1].el:y;js[I]===0?w(null,Ot,m,Jl,E,S,P,b,C):Zn&&(ge<0||I!==Yl[ge]?Et(Ot,m,Jl,2):ge--)}}},Et=(f,p,m,y,E=null)=>{const{el:S,type:P,transition:b,children:C,shapeFlag:I}=f;if(I&6){Et(f.component.subTree,p,m,y);return}if(I&128){f.suspense.move(p,m,y);return}if(I&64){P.move(f,p,m,oe);return}if(P===it){s(S,p,m);for(let M=0;M<C.length;M++)Et(C[M],p,m,y);s(f.anchor,p,m);return}if(P===sa){O(f,p,m);return}if(y!==2&&I&1&&b)if(y===0)b.beforeEnter(S),s(S,p,m),rt(()=>b.enter(S),E);else{const{leave:M,delayLeave:B,afterLeave:Q}=b,ne=()=>s(S,p,m),ye=()=>{M(S,()=>{ne(),Q&&Q()})};B?B(S,ne,ye):ye()}else s(S,p,m)},st=(f,p,m,y=!1,E=!1)=>{const{type:S,props:P,ref:b,children:C,dynamicChildren:I,shapeFlag:$,patchFlag:M,dirs:B}=f;if(b!=null&&$a(b,null,m,f,!0),$&256){p.ctx.deactivate(f);return}const Q=$&1&&B,ne=!_i(f);let ye;if(ne&&(ye=P&&P.onVnodeBeforeUnmount)&&Nt(ye,p,f),$&6)_(f.component,m,y);else{if($&128){f.suspense.unmount(m,y);return}Q&&An(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,E,oe,y):I&&(S!==it||M>0&&M&64)?x(I,p,m,!1,!0):(S===it&&M&384||!E&&$&16)&&x(C,p,m),y&&Xn(f)}(ne&&(ye=P&&P.onVnodeUnmounted)||Q)&&rt(()=>{ye&&Nt(ye,p,f),Q&&An(f,null,p,"unmounted")},m)},Xn=f=>{const{type:p,el:m,anchor:y,transition:E}=f;if(p===it){ti(m,y);return}if(p===sa){K(f);return}const S=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:b}=E,C=()=>P(m,S);b?b(f.el,S,C):C()}else S()},ti=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},_=(f,p,m)=>{const{bum:y,scope:E,update:S,subTree:P,um:b}=f;y&&vi(y),E.stop(),S&&(S.active=!1,st(P,f,p,m)),b&&rt(b,p),rt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(f,p,m,y=!1,E=!1,S=0)=>{for(let P=S;P<f.length;P++)st(f[P],p,m,y,E)},R=f=>f.shapeFlag&6?R(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),V=(f,p,m)=>{f==null?p._vnode&&st(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,m),ou(),$f(),p._vnode=f},oe={p:w,um:st,m:Et,r:Xn,mt:Ze,mc:N,pc:pe,pbc:se,n:R,o:t};let Ee,ee;return e&&([Ee,ee]=e(oe)),{render:V,hydrate:Ee,createApp:Xy(V,Ee)}}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function od(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||od(o,a)),a.type===wo&&(a.el=o.el)}}function tv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nv=t=>t.__isTeleport,it=Symbol(void 0),wo=Symbol(void 0),kt=Symbol(void 0),sa=Symbol(void 0),er=[];let St=null;function dt(t=!1){er.push(St=t?null:[])}function sv(){er.pop(),St=er[er.length-1]||null}let mr=1;function mu(t){mr+=t}function ad(t){return t.dynamicChildren=mr>0?St||ls:null,sv(),mr>0&&St&&St.push(t),t}function bt(t,e,n,s,r,i){return ad(be(t,e,n,s,r,i,!0))}function cd(t,e,n,s,r){return ad(at(t,e,n,s,r,!0))}function Ba(t){return t?t.__v_isVNode===!0:!1}function Nn(t,e){return t.type===e.type&&t.key===e.key}const _o="__vInternal",ld=({key:t})=>t??null,Ei=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Se(t)||X(t)?{i:gt,r:t,k:e,f:!!n}:t:null;function be(t,e=null,n=null,s=0,r=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ld(e),ref:e&&Ei(e),scopeId:Hf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gt};return a?(qc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),mr>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const at=rv;function rv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Fy)&&(t=kt),Ba(t)){const a=_n(t,e,!0);return n&&qc(a,n),mr>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(mv(t)&&(t=t.__vccOpts),e){e=iv(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=ur(a)),_e(c)&&(Of(c)&&!W(c)&&(c=Ye({},c)),e.style=Cc(c))}const o=Le(t)?1:_y(t)?128:nv(t)?64:_e(t)?4:X(t)?2:0;return be(t,e,n,s,r,o,i,!0)}function iv(t){return t?Of(t)||_o in t?Ye({},t):t:null}function _n(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?av(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ld(a),ref:e&&e.ref?n&&r?W(r)?r.concat(Ei(e)):[r,Ei(e)]:Ei(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ov(t=" ",e=0){return at(wo,null,t,e)}function os(t="",e=!1){return e?(dt(),cd(kt,null,t)):at(kt,null,t)}function Pt(t){return t==null||typeof t=="boolean"?at(kt):W(t)?at(it,null,t.slice()):typeof t=="object"?an(t):at(wo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_n(t)}function qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(_o in e)?e._ctx=gt:r===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),s&64?(n=16,e=[ov(e)]):n=8);t.children=e,t.shapeFlag|=n}function av(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ur([e.class,s.class]));else if(r==="style")e.style=Cc([e.style,s.style]);else if(lo(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Nt(t,e,n,s=null){vt(t,e,7,[n,s])}const cv=id();let lv=0;function uv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||cv,i={uid:lv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:td(s,r),emitsOptions:jf(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=py.bind(null,i),t.ce&&t.ce(i),i}let Ae=null;const ud=()=>Ae||gt,Es=t=>{Ae=t,t.scope.on()},Vn=()=>{Ae&&Ae.scope.off(),Ae=null};function hd(t){return t.vnode.shapeFlag&4}let yr=!1;function hv(t,e=!1){yr=e;const{props:n,children:s}=t.vnode,r=hd(t);zy(t,n,r,e),Qy(t,s);const i=r?fv(t,e):void 0;return yr=!1,i}function fv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_s(new Proxy(t.ctx,$y));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?pv(t):null;Es(t),Ps();const i=gn(s,t,0,[t.props,r]);if(xs(),Vn(),pf(i)){if(i.then(Vn,Vn),e)return i.then(o=>{yu(t,o,e)}).catch(o=>{go(o,t,0)});t.asyncDep=i}else yu(t,i,e)}else fd(t,e)}function yu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Lf(e)),fd(t,n)}let vu;function fd(t,e,n){const s=t.type;if(!t.render){if(!e&&vu&&!s.render){const r=s.template||jc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);s.render=vu(r,l)}}t.render=s.render||Ct}Es(t),Ps(),By(t),xs(),Vn()}function dv(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function pv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=dv(t))},slots:t.slots,emit:t.emit,expose:e}}function Eo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lf(_s(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}}))}function gv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function mv(t){return X(t)&&"__vccOpts"in t}const pt=(t,e)=>cy(t,e,yr);function dd(t,e,n){const s=arguments.length;return s===2?_e(e)&&!W(e)?Ba(e)?at(t,null,[e]):at(t,e):at(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ba(n)&&(n=[n]),at(t,e,n))}const yv=Symbol(""),vv=()=>At(yv),wv="3.2.47",_v="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,wu=Pn&&Pn.createElement("template"),Ev={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Pn.createElementNS(_v,t):Pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wu.innerHTML=s?`<svg>${t}</svg>`:t;const a=wu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Iv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Tv(t,e,n){const s=t.style,r=Le(n);if(n&&!r){if(e&&!Le(e))for(const i in e)n[i]==null&&ja(s,i,"");for(const i in n)ja(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const _u=/\s*!important$/;function ja(t,e,n){if(W(n))n.forEach(s=>ja(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bv(t,e);_u.test(n)?t.setProperty(Ns(s),n.replace(_u,""),"important"):t[s]=n}}const Eu=["Webkit","Moz","ms"],ra={};function bv(t,e){const n=ra[e];if(n)return n;let s=Vt(e);if(s!=="filter"&&s in t)return ra[e]=s;s=fo(s);for(let r=0;r<Eu.length;r++){const i=Eu[r]+s;if(i in t)return ra[e]=i}return e}const Iu="http://www.w3.org/1999/xlink";function Sv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Iu,e.slice(6,e.length)):t.setAttributeNS(Iu,e,n);else{const i=vm(e);n==null||i&&!hf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ns(t,e,n,s){t.addEventListener(e,n,s)}function Av(t,e,n,s){t.removeEventListener(e,n,s)}function kv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Rv(e);if(s){const l=i[e]=Nv(s,r);ns(t,a,l,c)}else o&&(Av(t,a,o,c),i[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function Rv(t){let e;if(Tu.test(t)){e={};let s;for(;s=t.match(Tu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ns(t.slice(2)),e]}let ia=0;const Dv=Promise.resolve(),Ov=()=>ia||(Dv.then(()=>ia=0),ia=Date.now());function Nv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(Pv(s,n.value),e,5,[s])};return n.value=t,n.attached=Ov(),n}function Pv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const bu=/^on[a-z]/,xv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Iv(t,s,r):e==="style"?Tv(t,n,s):lo(e)?Ac(e)||kv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lv(t,e,s,r))?Cv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sv(t,e,s,r))};function Lv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&bu.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bu.test(e)&&Le(n)?!1:e in t}const Mv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Sy.props;const Su=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>vi(e,n):e};function Fv(t){t.target.composing=!0}function Cu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $i={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Su(r);const i=s||r.props&&r.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ra(a)),t._assign(a)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",Fv),ns(t,"compositionend",Cu),ns(t,"change",Cu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Su(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ra(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Uv=["ctrl","shift","alt","meta"],Vv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Uv.some(n=>t[`${n}Key`]&&!e.includes(n))},pd=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Vv[e[r]];if(i&&i(n,e))return}return t(n,...s)},$v=Ye({patchProp:xv},Ev);let Au;function Bv(){return Au||(Au=Zy($v))}const jv=(...t)=>{const e=Bv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Hv(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Hv(t){return Le(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof window<"u";function qv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function oa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Rt(r)?r.map(t):t(r)}return n}const tr=()=>{},Rt=Array.isArray,Kv=/\/$/,zv=t=>t.replace(Kv,"");function aa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Yv(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Wv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ku(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Gv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Is(e.matched[s],n.matched[r])&&gd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qv(t[n],e[n]))return!1;return!0}function Qv(t,e){return Rt(t)?Ru(t,e):Rt(e)?Ru(e,t):t===e}function Ru(t,e){return Rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Yv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var vr;(function(t){t.pop="pop",t.push="push"})(vr||(vr={}));var nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nr||(nr={}));function Jv(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zv(t)}const Xv=/^[^#]+#/;function Zv(t,e){return t.replace(Xv,"#")+e}function ew(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Io=()=>({left:window.pageXOffset,top:window.pageYOffset});function tw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=ew(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Du(t,e){return(history.state?history.state.position-e:-1)+t}const Ha=new Map;function nw(t,e){Ha.set(t,e)}function sw(t){const e=Ha.get(t);return Ha.delete(t),e}let rw=()=>location.protocol+"//"+location.host;function md(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ku(c,"")}return ku(n,t)+s+r}function iw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=md(t,location),v=n.value,w=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}k=w?d.position-w.position:0}else s(g);r.forEach(A=>{A(n.value,v,{delta:k,type:vr.pop,direction:k?k>0?nr.forward:nr.back:nr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:Io()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Ou(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Io():null}}function ow(t){const{history:e,location:n}=window,s={value:md(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,Ou(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=fe({},r.value,e.state,{forward:c,scroll:Io()});i(u.current,u,!0);const h=fe({},Ou(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function aw(t){t=Jv(t);const e=ow(t),n=iw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=fe({location:"",base:t,go:s,createHref:Zv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function cw(t){return typeof t=="string"||t&&typeof t=="object"}function yd(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vd=Symbol("");var Nu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nu||(Nu={}));function Ts(t,e){return fe(new Error,{type:t,[vd]:!0},e)}function jt(t,e){return t instanceof Error&&vd in t&&(e==null||!!(t.type&e))}const Pu="[^/]+?",lw={sensitive:!1,strict:!1,start:!0,end:!0},uw=/[.+*?^${}()[\]/\\]/g;function hw(t,e){const n=fe({},lw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(uw,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:w,optional:k,regexp:A}=d;i.push({name:v,repeatable:w,optional:k});const L=A||Pu;if(L!==Pu){g+=10;try{new RegExp(`(${L})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${v}" (${L}): `+K.message)}}let O=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(O=k&&l.length<2?`(?:/${O})`:"/"+O),k&&(O+="?"),r+=O,g+=20,k&&(g+=-8),w&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:w,optional:k}=g,A=v in l?l[v]:"";if(Rt(A)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const L=Rt(A)?A.join("/"):A;if(!L)if(k)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=L}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function fw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function dw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=fw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(xu(s))return 1;if(xu(r))return-1}return r.length-s.length}function xu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pw={type:0,value:""},gw=/[a-zA-Z0-9_]/;function mw(t){if(!t)return[[]];if(t==="/")return[[pw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:gw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function yw(t,e,n){const s=hw(mw(t.path),n),r=fe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function vw(t,e){const n=[],s=new Map;e=Fu({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,v=ww(u);v.aliasOf=d&&d.record;const w=Fu(e,u),k=[v];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of O)k.push(fe({},v,{components:d?d.record.components:v.components,path:K,aliasOf:d?d.record:v}))}let A,L;for(const O of k){const{path:K}=O;if(h&&K[0]!=="/"){const G=h.record.path,he=G[G.length-1]==="/"?"":"/";O.path=h.record.path+(K&&he+K)}if(A=yw(O,h,w),d?d.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),g&&u.name&&!Mu(A)&&o(u.name)),v.children){const G=v.children;for(let he=0;he<G.length;he++)i(G[he],A,d&&d.children[he])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return L?()=>{o(L)}:tr}function o(u){if(yd(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&dw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!wd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Mu(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},v,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ts(1,{location:u});w=d.record.name,g=fe(Lu(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Lu(u.params,d.keys.map(L=>L.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(L=>L.re.test(v)),d&&(g=d.parse(v),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw Ts(1,{location:u,currentLocation:h});w=d.record.name,g=fe({},h.params,u.params),v=d.stringify(g)}const k=[];let A=d;for(;A;)k.unshift(A.record),A=A.parent;return{name:w,path:v,params:g,matched:k,meta:Ew(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Lu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ww(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_w(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _w(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Mu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ew(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Fu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function wd(t,e){return e.children.some(n=>n===t||wd(t,n))}const _d=/#/g,Iw=/&/g,Tw=/\//g,bw=/=/g,Sw=/\?/g,Ed=/\+/g,Cw=/%5B/g,Aw=/%5D/g,Id=/%5E/g,kw=/%60/g,Td=/%7B/g,Rw=/%7C/g,bd=/%7D/g,Dw=/%20/g;function Kc(t){return encodeURI(""+t).replace(Rw,"|").replace(Cw,"[").replace(Aw,"]")}function Ow(t){return Kc(t).replace(Td,"{").replace(bd,"}").replace(Id,"^")}function qa(t){return Kc(t).replace(Ed,"%2B").replace(Dw,"+").replace(_d,"%23").replace(Iw,"%26").replace(kw,"`").replace(Td,"{").replace(bd,"}").replace(Id,"^")}function Nw(t){return qa(t).replace(bw,"%3D")}function Pw(t){return Kc(t).replace(_d,"%23").replace(Sw,"%3F")}function xw(t){return t==null?"":Pw(t).replace(Tw,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ed," "),o=i.indexOf("="),a=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(a in e){let l=e[a];Rt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Uu(t){let e="";for(let n in t){const s=t[n];if(n=Nw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(s)?s.map(i=>i&&qa(i)):[s&&qa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Rt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Fw=Symbol(""),Vu=Symbol(""),To=Symbol(""),Sd=Symbol(""),Ka=Symbol("");function Hs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ts(4,{from:n,to:e})):h instanceof Error?a(h):cw(h)?a(Ts(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ca(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Uw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(cn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=qv(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cn(d,n,s,i,o)()}))}}return r}function Uw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $u(t){const e=At(To),n=At(Sd),s=pt(()=>e.resolve(tt(t.to))),r=pt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Is.bind(null,u));if(d>-1)return d;const g=Bu(c[l-2]);return l>1&&Bu(u)===g&&h[h.length-1].path!==g?h.findIndex(Is.bind(null,c[l-2])):d}),i=pt(()=>r.value>-1&&jw(n.params,s.value.params)),o=pt(()=>r.value>-1&&r.value===n.matched.length-1&&gd(n.params,s.value.params));function a(c={}){return Bw(c)?e[tt(t.replace)?"replace":"push"](tt(t.to)).catch(tr):Promise.resolve()}return{route:s,href:pt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Vw=Gf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$u,setup(t,{slots:e}){const n=Ls($u(t)),{options:s}=At(To),r=pt(()=>({[ju(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ju(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),$w=Vw;function Bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Rt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Bu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ju=(t,e,n)=>t??e??n,Hw=Gf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(Ka),r=pt(()=>t.route||s.value),i=At(Vu,0),o=pt(()=>{let l=tt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=pt(()=>r.value.matched[o.value]);wi(Vu,pt(()=>o.value+1)),wi(Fw,a),wi(Ka,r);const c=wt();return Xs(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Is(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Hu(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=dd(d,fe({},v,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Hu(n.default,{Component:k,route:l})||k}}});function Hu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qw=Hw;function Kw(t){const e=vw(t.routes,t),n=t.parseQuery||Lw,s=t.stringifyQuery||Uu,r=t.history,i=Hs(),o=Hs(),a=Hs(),c=ny(sn);let l=sn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oa.bind(null,_=>""+_),h=oa.bind(null,xw),d=oa.bind(null,Bi);function g(_,x){let R,V;return yd(_)?(R=e.getRecordMatcher(_),V=x):V=_,e.addRoute(V,R)}function v(_){const x=e.getRecordMatcher(_);x&&e.removeRoute(x)}function w(){return e.getRoutes().map(_=>_.record)}function k(_){return!!e.getRecordMatcher(_)}function A(_,x){if(x=fe({},x||c.value),typeof _=="string"){const f=aa(n,_,x.path),p=e.resolve({path:f.path},x),m=r.createHref(f.fullPath);return fe(f,p,{params:d(p.params),hash:Bi(f.hash),redirectedFrom:void 0,href:m})}let R;if("path"in _)R=fe({},_,{path:aa(n,_.path,x.path).path});else{const f=fe({},_.params);for(const p in f)f[p]==null&&delete f[p];R=fe({},_,{params:h(_.params)}),x.params=h(x.params)}const V=e.resolve(R,x),oe=_.hash||"";V.params=u(d(V.params));const Ee=Wv(s,fe({},_,{hash:Ow(oe),path:V.path})),ee=r.createHref(Ee);return fe({fullPath:Ee,hash:oe,query:s===Uu?Mw(_.query):_.query||{}},V,{redirectedFrom:void 0,href:ee})}function L(_){return typeof _=="string"?aa(n,_,c.value.path):fe({},_)}function O(_,x){if(l!==_)return Ts(8,{from:x,to:_})}function K(_){return Y(_)}function G(_){return K(fe(L(_),{replace:!0}))}function he(_){const x=_.matched[_.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let V=typeof R=="function"?R(_):R;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=L(V):{path:V},V.params={}),fe({query:_.query,hash:_.hash,params:"path"in V?{}:_.params},V)}}function Y(_,x){const R=l=A(_),V=c.value,oe=_.state,Ee=_.force,ee=_.replace===!0,f=he(R);if(f)return Y(fe(L(f),{state:typeof f=="object"?fe({},oe,f.state):oe,force:Ee,replace:ee}),x||R);const p=R;p.redirectedFrom=x;let m;return!Ee&&Gv(s,V,R)&&(m=Ts(16,{to:p,from:V}),Cn(V,V,!0,!1)),(m?Promise.resolve(m):te(p,V)).catch(y=>jt(y)?jt(y,2)?y:_t(y):me(y,p,V)).then(y=>{if(y){if(jt(y,2))return Y(fe({replace:ee},L(y.to),{state:typeof y.to=="object"?fe({},oe,y.to.state):oe,force:Ee}),x||p)}else y=Ie(p,V,!0,ee,oe);return se(p,V,y),y})}function N(_,x){const R=O(_,x);return R?Promise.reject(R):Promise.resolve()}function te(_,x){let R;const[V,oe,Ee]=zw(_,x);R=ca(V.reverse(),"beforeRouteLeave",_,x);for(const f of V)f.leaveGuards.forEach(p=>{R.push(cn(p,_,x))});const ee=N.bind(null,_,x);return R.push(ee),es(R).then(()=>{R=[];for(const f of i.list())R.push(cn(f,_,x));return R.push(ee),es(R)}).then(()=>{R=ca(oe,"beforeRouteUpdate",_,x);for(const f of oe)f.updateGuards.forEach(p=>{R.push(cn(p,_,x))});return R.push(ee),es(R)}).then(()=>{R=[];for(const f of _.matched)if(f.beforeEnter&&!x.matched.includes(f))if(Rt(f.beforeEnter))for(const p of f.beforeEnter)R.push(cn(p,_,x));else R.push(cn(f.beforeEnter,_,x));return R.push(ee),es(R)}).then(()=>(_.matched.forEach(f=>f.enterCallbacks={}),R=ca(Ee,"beforeRouteEnter",_,x),R.push(ee),es(R))).then(()=>{R=[];for(const f of o.list())R.push(cn(f,_,x));return R.push(ee),es(R)}).catch(f=>jt(f,8)?f:Promise.reject(f))}function se(_,x,R){for(const V of a.list())V(_,x,R)}function Ie(_,x,R,V,oe){const Ee=O(_,x);if(Ee)return Ee;const ee=x===sn,f=ss?history.state:{};R&&(V||ee?r.replace(_.fullPath,fe({scroll:ee&&f&&f.scroll},oe)):r.push(_.fullPath,oe)),c.value=_,Cn(_,x,R,ee),_t()}let Me;function ut(){Me||(Me=r.listen((_,x,R)=>{if(!ti.listening)return;const V=A(_),oe=he(V);if(oe){Y(fe(oe,{replace:!0}),V).catch(tr);return}l=V;const Ee=c.value;ss&&nw(Du(Ee.fullPath,R.delta),Io()),te(V,Ee).catch(ee=>jt(ee,12)?ee:jt(ee,2)?(Y(ee.to,V).then(f=>{jt(f,20)&&!R.delta&&R.type===vr.pop&&r.go(-1,!1)}).catch(tr),Promise.reject()):(R.delta&&r.go(-R.delta,!1),me(ee,V,Ee))).then(ee=>{ee=ee||Ie(V,Ee,!1),ee&&(R.delta&&!jt(ee,8)?r.go(-R.delta,!1):R.type===vr.pop&&jt(ee,20)&&r.go(-1,!1)),se(V,Ee,ee)}).catch(tr)}))}let Ze=Hs(),Fe=Hs(),ke;function me(_,x,R){_t(_);const V=Fe.list();return V.length?V.forEach(oe=>oe(_,x,R)):console.error(_),Promise.reject(_)}function pe(){return ke&&c.value!==sn?Promise.resolve():new Promise((_,x)=>{Ze.add([_,x])})}function _t(_){return ke||(ke=!_,ut(),Ze.list().forEach(([x,R])=>_?R(_):x()),Ze.reset()),_}function Cn(_,x,R,V){const{scrollBehavior:oe}=t;if(!ss||!oe)return Promise.resolve();const Ee=!R&&sw(Du(_.fullPath,0))||(V||!R)&&history.state&&history.state.scroll||null;return Vc().then(()=>oe(_,x,Ee)).then(ee=>ee&&tw(ee)).catch(ee=>me(ee,_,x))}const Et=_=>r.go(_);let st;const Xn=new Set,ti={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:k,getRoutes:w,resolve:A,options:t,push:K,replace:G,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Fe.add,isReady:pe,install(_){const x=this;_.component("RouterLink",$w),_.component("RouterView",qw),_.config.globalProperties.$router=x,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>tt(c)}),ss&&!st&&c.value===sn&&(st=!0,K(r.location).catch(oe=>{}));const R={};for(const oe in sn)R[oe]=pt(()=>c.value[oe]);_.provide(To,x),_.provide(Sd,Ls(R)),_.provide(Ka,c);const V=_.unmount;Xn.add(_),_.unmount=function(){Xn.delete(_),Xn.size<1&&(l=sn,Me&&Me(),Me=null,c.value=sn,st=!1,ke=!1),V()}}};return ti}function es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function zw(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Is(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Is(l,c))||r.push(c))}return[n,s,r]}function zc(){return At(To)}var Ww=!1;/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Cd;const bo=t=>Cd=t,Ad=Symbol();function za(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var sr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(sr||(sr={}));function Gw(){const t=vf(!0),e=t.run(()=>wt({}));let n=[],s=[];const r=_s({install(i){bo(r),r._a=i,i.provide(Ad,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Ww?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const kd=()=>{};function qu(t,e,n,s=kd){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&wf()&&Am(r),r}function ts(t,...e){t.slice().forEach(n=>{n(...e)})}function Wa(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];za(r)&&za(s)&&t.hasOwnProperty(n)&&!Se(s)&&!Wt(s)?t[n]=Wa(r,s):t[n]=s}return t}const Qw=Symbol();function Yw(t){return!za(t)||!t.hasOwnProperty(Qw)}const{assign:on}=Object;function Jw(t){return!!(Se(t)&&t.effect)}function Xw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=iy(n.state.value[t]);return on(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=_s(pt(()=>{bo(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Rd(t,l,e,n,s,!0),c}function Rd(t,e,n={},s,r,i){let o;const a=on({actions:{}},n),c={deep:!0};let l,u,h=_s([]),d=_s([]),g;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),wt({});let w;function k(Y){let N;l=u=!1,typeof Y=="function"?(Y(s.state.value[t]),N={type:sr.patchFunction,storeId:t,events:g}):(Wa(s.state.value[t],Y),N={type:sr.patchObject,payload:Y,storeId:t,events:g});const te=w=Symbol();Vc().then(()=>{w===te&&(l=!0)}),u=!0,ts(h,N,s.state.value[t])}const A=i?function(){const{state:N}=n,te=N?N():{};this.$patch(se=>{on(se,te)})}:kd;function L(){o.stop(),h=[],d=[],s._s.delete(t)}function O(Y,N){return function(){bo(s);const te=Array.from(arguments),se=[],Ie=[];function Me(Fe){se.push(Fe)}function ut(Fe){Ie.push(Fe)}ts(d,{args:te,name:Y,store:G,after:Me,onError:ut});let Ze;try{Ze=N.apply(this&&this.$id===t?this:G,te)}catch(Fe){throw ts(Ie,Fe),Fe}return Ze instanceof Promise?Ze.then(Fe=>(ts(se,Fe),Fe)).catch(Fe=>(ts(Ie,Fe),Promise.reject(Fe))):(ts(se,Ze),Ze)}}const K={_p:s,$id:t,$onAction:qu.bind(null,d),$patch:k,$reset:A,$subscribe(Y,N={}){const te=qu(h,Y,N.detached,()=>se()),se=o.run(()=>Xs(()=>s.state.value[t],Ie=>{(N.flush==="sync"?u:l)&&Y({storeId:t,type:sr.direct,events:g},Ie)},on({},c,N)));return te},$dispose:L},G=Ls(K);s._s.set(t,G);const he=s._e.run(()=>(o=vf(),o.run(()=>e())));for(const Y in he){const N=he[Y];if(Se(N)&&!Jw(N)||Wt(N))i||(v&&Yw(N)&&(Se(N)?N.value=v[Y]:Wa(N,v[Y])),s.state.value[t][Y]=N);else if(typeof N=="function"){const te=O(Y,N);he[Y]=te,a.actions[Y]=N}}return on(G,he),on(re(G),he),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:Y=>{k(N=>{on(N,Y)})}}),s._p.forEach(Y=>{on(G,o.run(()=>Y({store:G,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(G.$state,v),l=!0,u=!0,G}function Zw(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=ud();return a=a||l&&At(Ad,null),a&&bo(a),a=Cd,a._s.has(s)||(i?Rd(s,e,r,a):Xw(s,r,a)),a._s.get(s)}return o.$id=s,o}function Wc(t){{t=re(t);const e={};for(const n in t){const s=t[n];(Se(s)||Wt(s))&&(e[n]=Mf(t,n))}return e}}const Gc=Zw("userStore",{state:()=>({username:"",uid:""})});const Dd=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},e_={class:"header"},t_={class:"nav"},n_={class:"nav__list"},s_={key:0,class:"nav__item"},r_={key:1,class:"nav__item"},i_={key:2,class:"nav__item"},o_={key:3,class:"nav__item"},a_={class:"main"},c_={__name:"App",setup(t){const e=Gc(),{username:n}=Wc(e);return(s,r)=>{const i=My("RouterView");return dt(),bt(it,null,[be("header",e_,[be("h1",{onClick:r[0]||(r[0]=(...o)=>s.isLog&&s.isLog(...o)),class:"header__logo"},"What Todo ?"),be("nav",t_,[be("ul",n_,[tt(n)?(dt(),bt("li",s_,hr(tt(n)),1)):os("",!0),tt(n)?(dt(),bt("li",r_," Logout ")):os("",!0),tt(n)?os("",!0):(dt(),bt("li",i_," Login ")),tt(n)?os("",!0):(dt(),bt("li",o_," Register "))])])]),be("main",a_,[at(i)])],64)}}},l_=Dd(c_,[["__scopeId","data-v-db1a97b3"]]);/**
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
 */const Od=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},u_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Od(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):u_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new h_;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f_=function(t){const e=Od(t);return Nd.encodeByteArray(e,!0)},ji=function(t){return f_(t).replace(/\./g,"")},Pd=function(t){try{return Nd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function d_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p_=()=>d_().__FIREBASE_DEFAULTS__,g_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},m_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pd(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return p_()||g_()||m_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xd=t=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},y_=t=>{const e=xd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},v_=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},Ld=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class w_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function __(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ji(JSON.stringify(n)),ji(JSON.stringify(o)),a].join(".")}/**
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
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function I_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b_(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S_(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const A_="FirebaseError";class en extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=A_,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?k_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new en(r,a,s)}}function k_(t,e){return t.replace(R_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const R_=/\{\$([^}]+)}/g;function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ku(i)&&Ku(o)){if(!Hi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ku(t){return t!==null&&typeof t=="object"}/**
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
 */function Pr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function O_(t,e){const n=new N_(t,e);return n.subscribe.bind(n)}class N_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");P_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=la),r.error===void 0&&(r.error=la),r.complete===void 0&&(r.complete=la);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}/**
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
 */function tn(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class x_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new w_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(M_(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:L_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L_(t){return t===Dn?void 0:t}function M_(t){return t.instantiationMode==="EAGER"}/**
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
 */class F_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const U_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},V_=ue.INFO,$_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},B_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=V_,this._logHandler=B_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const j_=(t,e)=>e.some(n=>t instanceof n);let zu,Wu;function H_(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q_(){return Wu||(Wu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Md=new WeakMap,Ga=new WeakMap,Fd=new WeakMap,ua=new WeakMap,Jc=new WeakMap;function K_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Md.set(n,t)}).catch(()=>{}),Jc.set(e,t),e}function z_(t){if(Ga.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ga.set(t,e)}let Qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W_(t){Qa=t(Qa)}function G_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ha(this),e,...n);return Fd.set(s,e.sort?e.sort():[e]),mn(s)}:q_().includes(t)?function(...e){return t.apply(ha(this),e),mn(Md.get(this))}:function(...e){return mn(t.apply(ha(this),e))}}function Q_(t){return typeof t=="function"?G_(t):(t instanceof IDBTransaction&&z_(t),j_(t,H_())?new Proxy(t,Qa):t)}function mn(t){if(t instanceof IDBRequest)return K_(t);if(ua.has(t))return ua.get(t);const e=Q_(t);return e!==t&&(ua.set(t,e),Jc.set(e,t)),e}const ha=t=>Jc.get(t);function Y_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=mn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(mn(o.result),c.oldVersion,c.newVersion,mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const J_=["get","getKey","getAll","getAllKeys","count"],X_=["put","add","delete","clear"],fa=new Map;function Gu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=X_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||J_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return fa.set(e,i),i}W_(t=>({...t,get:(e,n,s)=>Gu(e,n)||t.get(e,n,s),has:(e,n)=>!!Gu(e,n)||t.has(e,n)}));/**
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
 */class Z_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function eE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ya="@firebase/app",Qu="0.9.7";/**
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
 */const Kn=new Yc("@firebase/app"),tE="@firebase/app-compat",nE="@firebase/analytics-compat",sE="@firebase/analytics",rE="@firebase/app-check-compat",iE="@firebase/app-check",oE="@firebase/auth",aE="@firebase/auth-compat",cE="@firebase/database",lE="@firebase/database-compat",uE="@firebase/functions",hE="@firebase/functions-compat",fE="@firebase/installations",dE="@firebase/installations-compat",pE="@firebase/messaging",gE="@firebase/messaging-compat",mE="@firebase/performance",yE="@firebase/performance-compat",vE="@firebase/remote-config",wE="@firebase/remote-config-compat",_E="@firebase/storage",EE="@firebase/storage-compat",IE="@firebase/firestore",TE="@firebase/firestore-compat",bE="firebase",SE="9.19.1";/**
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
 */const Ja="[DEFAULT]",CE={[Ya]:"fire-core",[tE]:"fire-core-compat",[sE]:"fire-analytics",[nE]:"fire-analytics-compat",[iE]:"fire-app-check",[rE]:"fire-app-check-compat",[oE]:"fire-auth",[aE]:"fire-auth-compat",[cE]:"fire-rtdb",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[hE]:"fire-fn-compat",[fE]:"fire-iid",[dE]:"fire-iid-compat",[pE]:"fire-fcm",[gE]:"fire-fcm-compat",[mE]:"fire-perf",[yE]:"fire-perf-compat",[vE]:"fire-rc",[wE]:"fire-rc-compat",[_E]:"fire-gcs",[EE]:"fire-gcs-compat",[IE]:"fire-fst",[TE]:"fire-fst-compat","fire-js":"fire-js",[bE]:"fire-js-all"};/**
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
 */const qi=new Map,Xa=new Map;function AE(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(Xa.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Xa.set(e,t);for(const n of qi.values())AE(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const kE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yn=new Nr("app","Firebase",kE);/**
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
 */class RE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=SE;function Ud(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw yn.create("bad-app-name",{appName:String(r)});if(n||(n=v_()),!n)throw yn.create("no-options");const i=qi.get(r);if(i){if(Hi(n,i.options)&&Hi(s,i.config))return i;throw yn.create("duplicate-app",{appName:r})}const o=new F_(r);for(const c of Xa.values())o.addComponent(c);const a=new RE(n,s,o);return qi.set(r,a),a}function Vd(t=Ja){const e=qi.get(t);if(!e&&t===Ja)return Ud();if(!e)throw yn.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let r=(s=CE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}bs(new qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const DE="firebase-heartbeat-database",OE=1,wr="firebase-heartbeat-store";let da=null;function $d(){return da||(da=Y_(DE,OE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wr)}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),da}async function NE(t){try{return(await $d()).transaction(wr).objectStore(wr).get(Bd(t))}catch(e){if(e instanceof en)Kn.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Yu(t,e){try{const s=(await $d()).transaction(wr,"readwrite");return await s.objectStore(wr).put(e,Bd(t)),s.done}catch(n){if(n instanceof en)Kn.warn(n.message);else{const s=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(s.message)}}}function Bd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const PE=1024,xE=30*24*60*60*1e3;class LE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ju();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=xE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ju(),{heartbeatsToSend:n,unsentEntries:s}=ME(this._heartbeatsCache.heartbeats),r=ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ju(){return new Date().toISOString().substring(0,10)}function ME(t,e=PE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xu(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class FE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S_()?C_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xu(t){return ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UE(t){bs(new qn("platform-logger",e=>new Z_(e),"PRIVATE")),bs(new qn("heartbeat",e=>new LE(e),"PRIVATE")),vn(Ya,Qu,t),vn(Ya,Qu,"esm2017"),vn("fire-js","")}UE("");var VE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Zc=Zc||{},z=VE||self;function Ki(){}function So(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Lr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $E(t){return Object.prototype.hasOwnProperty.call(t,pa)&&t[pa]||(t[pa]=++BE)}var pa="closure_uid_"+(1e9*Math.random()>>>0),BE=0;function jE(t,e,n){return t.call.apply(t.bind,arguments)}function HE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=jE:Ge=HE,Ge.apply(null,arguments)}function ci(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function bn(){this.s=this.s,this.o=this.o}var qE=0;bn.prototype.s=!1;bn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qE!=0)&&$E(this)};bn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function el(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zu(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(So(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var KE=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",Ki,e),z.removeEventListener("test",Ki,e)}catch{}return t}();function zi(t){return/^[\s\xa0]*$/.test(t)}var eh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ga(t,e){return t<e?-1:t>e?1:0}function Co(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return Co().indexOf(t)!=-1}function tl(t){return tl[" "](t),t}tl[" "]=Ki;function zE(t){var e=QE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WE=Lt("Opera"),Ss=Lt("Trident")||Lt("MSIE"),Hd=Lt("Edge"),Za=Hd||Ss,qd=Lt("Gecko")&&!(Co().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),GE=Co().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Kd(){var t=z.document;return t?t.documentMode:void 0}var Wi;e:{var ma="",ya=function(){var t=Co();if(qd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hd)return/Edge\/([\d\.]+)/.exec(t);if(Ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GE)return/WebKit\/(\S+)/.exec(t);if(WE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ya&&(ma=ya?ya[1]:""),Ss){var va=Kd();if(va!=null&&va>parseFloat(ma)){Wi=String(va);break e}}Wi=ma}var QE={};function YE(){return zE(function(){let t=0;const e=eh(String(Wi)).split("."),n=eh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ga(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ga(r[2].length==0,i[2].length==0)||ga(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ec;if(z.document&&Ss){var th=Kd();ec=th||parseInt(Wi,10)||void 0}else ec=void 0;var JE=ec;function _r(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qd){e:{try{tl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_r.X.h.call(this)}}He(_r,Qe);var XE={2:"touch",3:"pen",4:"mouse"};_r.prototype.h=function(){_r.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mr="closure_listenable_"+(1e6*Math.random()|0),ZE=0;function e0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++ZE,this.ba=this.ea=!1}function Ao(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function nl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zd(t){const e={};for(const n in t)e[n]=t[n];return e}const nh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<nh.length;i++)n=nh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ko(t){this.src=t,this.g={},this.h=0}ko.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=nc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new e0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function tc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=jd(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ao(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var sl="closure_lm_"+(1e6*Math.random()|0),wa={};function Gd(t,e,n,s,r){if(s&&s.once)return Yd(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gd(t,e[i],n,s,r);return null}return n=ol(n),t&&t[Mr]?t.N(e,n,Lr(s)?!!s.capture:!!s,r):Qd(t,e,n,!1,s,r)}function Qd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Lr(r)?!!r.capture:!!r,a=il(t);if(a||(t[sl]=a=new ko(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=t0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)KE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Xd(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function t0(){function t(n){return e.call(t.src,t.listener,n)}const e=n0;return t}function Yd(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Yd(t,e[i],n,s,r);return null}return n=ol(n),t&&t[Mr]?t.O(e,n,Lr(s)?!!s.capture:!!s,r):Qd(t,e,n,!0,s,r)}function Jd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Jd(t,e[i],n,s,r);else s=Lr(s)?!!s.capture:!!s,n=ol(n),t&&t[Mr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=nc(i,n,s,r),-1<n&&(Ao(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=il(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nc(e,n,s,r)),(n=-1<t?e[t]:null)&&rl(n))}function rl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Mr])tc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Xd(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=il(e))?(tc(n,t),n.h==0&&(n.src=null,e[sl]=null)):Ao(t)}}}function Xd(t){return t in wa?wa[t]:wa[t]="on"+t}function n0(t,e){if(t.ba)t=!0;else{e=new _r(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&rl(t),t=n.call(s,e)}return t}function il(t){return t=t[sl],t instanceof ko?t:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function ol(t){return typeof t=="function"?t:(t[_a]||(t[_a]=function(e){return t.handleEvent(e)}),t[_a])}function Ve(){bn.call(this),this.i=new ko(this),this.P=this,this.I=null}He(Ve,bn);Ve.prototype[Mr]=!0;Ve.prototype.removeEventListener=function(t,e,n,s){Jd(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var r=e;e=new Qe(s,t),Wd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=li(o,s,!0,e)&&r}if(o=e.g=t,r=li(o,s,!0,e)&&r,r=li(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=li(o,s,!1,e)&&r}Ve.prototype.M=function(){if(Ve.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ao(n[s]);delete t.g[e],t.h--}}this.I=null};Ve.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function li(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&tc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var al=z.JSON.stringify;function s0(){var t=tp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class r0{constructor(){this.h=this.g=null}add(e,n){const s=Zd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new i0,t=>t.reset());class i0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function o0(t){z.setTimeout(()=>{throw t},0)}function ep(t,e){sc||a0(),rc||(sc(),rc=!0),tp.add(t,e)}var sc;function a0(){var t=z.Promise.resolve(void 0);sc=function(){t.then(c0)}}var rc=!1,tp=new r0;function c0(){for(var t;t=s0();){try{t.h.call(t.g)}catch(n){o0(n)}var e=Zd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}rc=!1}function Ro(t,e){Ve.call(this),this.h=t||1,this.g=e||z,this.j=Ge(this.lb,this),this.l=Date.now()}He(Ro,Ve);F=Ro.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Be(this,"tick"),this.ca&&(cl(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cl(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}F.M=function(){Ro.X.M.call(this),cl(this),delete this.g};function ll(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function np(t){t.g=ll(()=>{t.g=null,t.i&&(t.i=!1,np(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class l0 extends bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:np(this)}M(){super.M(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(t){bn.call(this),this.h=t,this.g={}}He(Er,bn);var sh=[];function sp(t,e,n,s){Array.isArray(n)||(n&&(sh[0]=n.toString()),n=sh);for(var r=0;r<n.length;r++){var i=Gd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rp(t){nl(t.g,function(e,n){this.g.hasOwnProperty(n)&&rl(e)},t),t.g={}}Er.prototype.M=function(){Er.X.M.call(this),rp(this)};Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Do(){this.g=!0}Do.prototype.Aa=function(){this.g=!1};function u0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function h0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function as(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+d0(t,n)+(s?" "+s:"")})}function f0(t,e){t.info(function(){return"TIMEOUT: "+e})}Do.prototype.info=function(){};function d0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return al(n)}catch{return e}}var Yn={},rh=null;function Oo(){return rh=rh||new Ve}Yn.Pa="serverreachability";function ip(t){Qe.call(this,Yn.Pa,t)}He(ip,Qe);function Ir(t){const e=Oo();Be(e,new ip(e))}Yn.STAT_EVENT="statevent";function op(t,e){Qe.call(this,Yn.STAT_EVENT,t),this.stat=e}He(op,Qe);function nt(t){const e=Oo();Be(e,new op(e,t))}Yn.Qa="timingevent";function ap(t,e){Qe.call(this,Yn.Qa,t),this.size=e}He(ap,Qe);function Fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var No={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ul(){}ul.prototype.h=null;function ih(t){return t.h||(t.h=t.i())}function lp(){}var Ur={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function hl(){Qe.call(this,"d")}He(hl,Qe);function fl(){Qe.call(this,"c")}He(fl,Qe);var ic;function Po(){}He(Po,ul);Po.prototype.g=function(){return new XMLHttpRequest};Po.prototype.i=function(){return{}};ic=new Po;function Vr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Er(this),this.O=p0,t=Za?125:void 0,this.T=new Ro(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new up}function up(){this.i=null,this.g="",this.h=!1}var p0=45e3,oc={},Gi={};F=Vr.prototype;F.setTimeout=function(t){this.O=t};function ac(t,e,n){t.K=1,t.v=Lo(Qt(e)),t.s=n,t.P=!0,hp(t,null)}function hp(t,e){t.F=Date.now(),$r(t),t.A=Qt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),wp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new up,t.g=$p(t.l,n?e:null,!t.s),0<t.N&&(t.L=new l0(Ge(t.La,t,t.g),t.N)),sp(t.S,t.g,"readystatechange",t.ib),e=t.H?zd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ir(),u0(t.j,t.u,t.A,t.m,t.U,t.s)}F.ib=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.La(t)};F.La=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Za||this.g&&(this.h.h||this.g.fa()||lh(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ir(3):Ir(2)),xo(this);var n=this.g.aa();this.Y=n;t:if(fp(this)){var s=lh(this.g);t="";var r=s.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),rr(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,h0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zi(a)){var l=a;break t}}l=null}if(n=l)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,cc(this,n);else{this.i=!1,this.o=3,nt(12),Ln(this),rr(this);break e}}this.P?(dp(this,u,o),Za&&this.i&&u==3&&(sp(this.S,this.T,"tick",this.hb),this.T.start())):(as(this.j,this.m,o,null),cc(this,o)),u==4&&Ln(this),this.i&&!this.I&&(u==4?Mp(this.l,this):(this.i=!1,$r(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Ln(this),rr(this)}}}catch{}finally{}};function fp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function dp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=g0(t,n),r==Gi){e==4&&(t.o=4,nt(14),s=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(r==oc){t.o=4,nt(15),as(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else as(t.j,t.m,r,null),cc(t,r);fp(t)&&r!=Gi&&r!=oc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),wl(e),e.K=!0,nt(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),Ln(t),rr(t))}F.hb=function(){if(this.g){var t=qt(this.g),e=this.g.fa();this.C<e.length&&(xo(this),dp(this,t,e),this.i&&t!=4&&$r(this))}};function g0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Gi:(n=Number(e.substring(n,s)),isNaN(n)?oc:(s+=1,s+n>e.length?Gi:(e=e.substr(s,n),t.C=s+n,e)))}F.cancel=function(){this.I=!0,Ln(this)};function $r(t){t.V=Date.now()+t.O,pp(t,t.O)}function pp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fr(Ge(t.gb,t),e)}function xo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}F.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(f0(this.j,this.A),this.K!=2&&(Ir(),nt(17)),Ln(this),this.o=2,rr(this)):pp(this,this.V-t)};function rr(t){t.l.G==0||t.I||Mp(t.l,t)}function Ln(t){xo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,cl(t.T),rp(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function cc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||lc(n.h,t))){if(!t.J&&lc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ji(n),Uo(n);else break e;vl(n),nt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Fr(Ge(n.cb,n),6e3));if(1>=Ip(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Mn(n,11)}else if((t.J||n.g==t)&&Ji(n),!zi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(dl(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,we(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vp(s,s.H?s.ka:null,s.V),o.J){Tp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(xo(a),$r(a)),s.g=o}else xp(s);0<n.i.length&&Vo(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):yl(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ir(4)}catch{}}function m0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(So(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function y0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(So(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(So(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=y0(t),s=m0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var mp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function v0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $n(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $n){this.h=e!==void 0?e:t.h,Qi(this,t.j),this.s=t.s,this.g=t.g,Yi(this,t.m),this.l=t.l,e=t.i;var n=new Tr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),oh(this,n),this.o=t.o}else t&&(n=String(t).match(mp))?(this.h=!!e,Qi(this,n[1]||"",!0),this.s=Gs(n[2]||""),this.g=Gs(n[3]||"",!0),Yi(this,n[4]),this.l=Gs(n[5]||"",!0),oh(this,n[6]||"",!0),this.o=Gs(n[7]||"")):(this.h=!!e,this.i=new Tr(null,this.h))}$n.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qs(e,ah,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qs(e,ah,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qs(n,n.charAt(0)=="/"?E0:_0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qs(n,T0)),t.join("")};function Qt(t){return new $n(t)}function Qi(t,e,n){t.j=n?Gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function oh(t,e,n){e instanceof Tr?(t.i=e,b0(t.i,t.h)):(n||(e=Qs(e,I0)),t.i=new Tr(e,t.h))}function we(t,e,n){t.i.set(e,n)}function Lo(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,w0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function w0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ah=/[#\/\?@]/g,_0=/[#\?:]/g,E0=/[#\?]/g,I0=/[#\?@]/g,T0=/#/g;function Tr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sn(t){t.g||(t.g=new Map,t.h=0,t.i&&v0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=Tr.prototype;F.add=function(t,e){Sn(this),this.i=null,t=Ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yp(t,e){Sn(t),e=Ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vp(t,e){return Sn(t),e=Ms(t,e),t.g.has(e)}F.forEach=function(t,e){Sn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};F.oa=function(){Sn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};F.W=function(t){Sn(this);let e=[];if(typeof t=="string")vp(this,t)&&(e=e.concat(this.g.get(Ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Sn(this),this.i=null,t=Ms(this,t),vp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function wp(t,e,n){yp(t,e),0<n.length&&(t.i=null,t.g.set(Ms(t,e),el(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function b0(t,e){e&&!t.j&&(Sn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yp(this,s),wp(this,r,n))},t)),t.j=e}var S0=class{constructor(e,n){this.h=e,this.g=n}};function _p(t){this.l=t||C0,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ga&&z.g.Ga()&&z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var C0=10;function Ep(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ip(t){return t.h?1:t.g?t.g.size:0}function lc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dl(t,e){t.g?t.g.add(e):t.h=e}function Tp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_p.prototype.cancel=function(){if(this.i=bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return el(t.i)}function pl(){}pl.prototype.stringify=function(t){return z.JSON.stringify(t,void 0)};pl.prototype.parse=function(t){return z.JSON.parse(t,void 0)};function A0(){this.g=new pl}function k0(t,e,n){const s=n||"";try{gp(t,function(r,i){let o=r;Lr(r)&&(o=al(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function R0(t,e){const n=new Do;if(z.Image){const s=new Image;s.onload=ci(ui,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ci(ui,n,s,"TestLoadImage: error",!1,e),s.onabort=ci(ui,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ci(ui,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ui(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Br(t){this.l=t.ac||null,this.j=t.jb||!1}He(Br,ul);Br.prototype.g=function(){return new Mo(this.l,this.j)};Br.prototype.i=function(t){return function(){return t}}({});function Mo(t,e){Ve.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Mo,Ve);var gl=0;F=Mo.prototype;F.open=function(t,e){if(this.readyState!=gl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,br(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=gl};F.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}F.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jr(this):br(this),this.readyState==3&&Sp(this)}};F.Va=function(t){this.g&&(this.response=this.responseText=t,jr(this))};F.Ua=function(t){this.g&&(this.response=t,jr(this))};F.ga=function(){this.g&&jr(this)};function jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,br(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function br(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var D0=z.JSON.parse;function Ce(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Cp,this.K=this.L=!1}He(Ce,Ve);var Cp="",O0=/^https?$/i,N0=["POST","PUT"];F=Ce.prototype;F.Ka=function(t){this.L=t};F.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ic.g(),this.C=this.u?ih(this.u):ih(ic),this.g.onreadystatechange=Ge(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ch(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=jd(N0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rp(this),0<this.B&&((this.K=P0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.qa,this)):this.A=ll(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ch(this,i)}};function P0(t){return Ss&&YE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.qa=function(){typeof Zc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function ch(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ap(t),Fo(t)}function Ap(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Fo(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fo(this,!0)),Ce.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?kp(this):this.fb())};F.fb=function(){kp(this)};function kp(t){if(t.h&&typeof Zc<"u"&&(!t.C[1]||qt(t)!=4||t.aa()!=2)){if(t.v&&qt(t)==4)ll(t.Ha,0,t);else if(Be(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(mp)[1]||null;if(!r&&z.self&&z.self.location){var i=z.self.location.protocol;r=i.substr(0,i.length-1)}s=!O0.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ap(t)}}finally{Fo(t)}}}}function Fo(t,e){if(t.g){Rp(t);const n=t.g,s=t.C[0]?Ki:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function Rp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}F.aa=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),D0(e)}};function lh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Cp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dp(t){let e="";return nl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ml(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Op(t){this.Ca=0,this.i=[],this.j=new Do,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qs("baseRetryDelayMs",5e3,t),this.bb=qs("retryDelaySeedMs",1e4,t),this.$a=qs("forwardChannelMaxRetries",2,t),this.ta=qs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new _p(t&&t.concurrentRequestLimit),this.Fa=new A0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=Op.prototype;F.ma=8;F.G=1;function yl(t){if(Np(t),t.G==3){var e=t.U++,n=Qt(t.F);we(n,"SID",t.I),we(n,"RID",e),we(n,"TYPE","terminate"),Hr(t,n),e=new Vr(t,t.j,e,void 0),e.K=2,e.v=Lo(Qt(n)),n=!1,z.navigator&&z.navigator.sendBeacon&&(n=z.navigator.sendBeacon(e.v.toString(),"")),!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=$p(e.l,null),e.g.da(e.v)),e.F=Date.now(),$r(e)}Up(t)}function Uo(t){t.g&&(wl(t),t.g.cancel(),t.g=null)}function Np(t){Uo(t),t.u&&(z.clearTimeout(t.u),t.u=null),Ji(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Vo(t){Ep(t.h)||t.m||(t.m=!0,ep(t.Ja,t),t.C=0)}function x0(t,e){return Ip(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Fr(Ge(t.Ja,t,e),Fp(t,t.C)),t.C++,!0)}F.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Vr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=zd(i),Wd(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pp(this,r,e),n=Qt(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),Hr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Dp(i)))+"&"+e:this.o&&ml(n,this.o,i)),dl(this.h,r),this.Ya&&we(n,"TYPE","init"),this.O?(we(n,"$req",e),we(n,"SID","null"),r.Z=!0,ac(r,n,null)):ac(r,n,e),this.G=2}}else this.G==3&&(t?uh(this,t):this.i.length==0||Ep(this.h)||uh(this))};function uh(t,e){var n;e?n=e.m:n=t.U++;const s=Qt(t.F);we(s,"SID",t.I),we(s,"RID",n),we(s,"AID",t.T),Hr(t,s),t.o&&t.s&&ml(s,t.o,t.s),n=new Vr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Pp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dl(t.h,n),ac(n,s,e)}function Hr(t,e){t.ia&&nl(t.ia,function(n,s){we(e,s,n)}),t.l&&gp({},function(n,s){we(e,s,n)})}function Pp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Ge(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{k0(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function xp(t){t.g||t.u||(t.Z=1,ep(t.Ia,t),t.A=0)}function vl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Fr(Ge(t.Ia,t),Fp(t,t.A)),t.A++,!0)}F.Ia=function(){if(this.u=null,Lp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Fr(Ge(this.eb,this),t)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),Uo(this),Lp(this))};function wl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Lp(t){t.g=new Vr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qt(t.sa);we(e,"RID","rpc"),we(e,"SID",t.I),we(e,"CI",t.L?"0":"1"),we(e,"AID",t.T),we(e,"TYPE","xmlhttp"),Hr(t,e),t.o&&t.s&&ml(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Lo(Qt(e)),n.s=null,n.P=!0,hp(n,t)}F.cb=function(){this.v!=null&&(this.v=null,Uo(this),vl(this),nt(19))};function Ji(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Mp(t,e){var n=null;if(t.g==e){Ji(t),wl(t),t.g=null;var s=2}else if(lc(t.h,e))n=e.D,Tp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Oo(),Be(s,new ap(s,n)),Vo(t)}else xp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&x0(t,e)||s==2&&vl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Mn(t,5);break;case 4:Mn(t,10);break;case 3:Mn(t,6);break;default:Mn(t,2)}}}function Fp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Mn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Ge(t.kb,t);n||(n=new $n("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Qi(n,"https"),Lo(n)),R0(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),Up(t),Np(t)}F.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Up(t){if(t.G=0,t.la=[],t.l){const e=bp(t.h);(e.length!=0||t.i.length!=0)&&(Zu(t.la,e),Zu(t.la,t.i),t.h.i.length=0,el(t.i),t.i.length=0),t.l.ua()}}function Vp(t,e,n){var s=n instanceof $n?Qt(n):new $n(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Yi(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new $n(null,void 0);s&&Qi(i,s),e&&(i.g=e),r&&Yi(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&we(s,n,e),we(s,"VER",t.ma),Hr(t,s),s}function $p(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Br({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function Bp(){}F=Bp.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function Xi(){if(Ss&&!(10<=Number(JE)))throw Error("Environmental error: no available transport.")}Xi.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ve.call(this),this.g=new Op(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Fs(this)}He(mt,Ve);mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vp(t,null,t.V),Vo(t)};mt.prototype.close=function(){yl(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=al(t),t=n);e.i.push(new S0(e.ab++,t)),e.G==3&&Vo(e)};mt.prototype.M=function(){this.g.l=null,delete this.j,yl(this.g),delete this.g,mt.X.M.call(this)};function jp(t){hl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(jp,hl);function Hp(){fl.call(this),this.status=1}He(Hp,fl);function Fs(t){this.g=t}He(Fs,Bp);Fs.prototype.xa=function(){Be(this.g,"a")};Fs.prototype.wa=function(t){Be(this.g,new jp(t))};Fs.prototype.va=function(t){Be(this.g,new Hp)};Fs.prototype.ua=function(){Be(this.g,"b")};Xi.prototype.createWebChannel=Xi.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;No.NO_ERROR=0;No.TIMEOUT=8;No.HTTP_ERROR=6;cp.COMPLETE="complete";lp.EventType=Ur;Ur.OPEN="a";Ur.CLOSE="b";Ur.ERROR="c";Ur.MESSAGE="d";Ve.prototype.listen=Ve.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var L0=function(){return new Xi},M0=function(){return Oo()},Ea=No,F0=cp,U0=Yn,hh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},V0=Br,hi=lp,$0=Ce;const fh="@firebase/firestore";/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let Us="9.19.0";/**
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
 */const zn=new Yc("@firebase/firestore");function dh(){return zn.logLevel}function U(t,...e){if(zn.logLevel<=ue.DEBUG){const n=e.map(_l);zn.debug(`Firestore (${Us}): ${t}`,...n)}}function Yt(t,...e){if(zn.logLevel<=ue.ERROR){const n=e.map(_l);zn.error(`Firestore (${Us}): ${t}`,...n)}}function Zi(t,...e){if(zn.logLevel<=ue.WARN){const n=e.map(_l);zn.warn(`Firestore (${Us}): ${t}`,...n)}}function _l(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw Yt(e),new Error(e)}function Pe(t,e){t||Z()}function le(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class j0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class H0{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new qp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new Ke(e)}}class q0{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class K0{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new q0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W0{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new z0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function G0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Q0{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=G0(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Cs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ct(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ct(0,0))}static max(){return new J(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Sr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Sr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Sr{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Sr{construct(e,n,s){return new ot(e,n,s)}static isValidIdentifier(e){return Y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function J0(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new ct(n+1,0):new ct(n,s));return new En(r,j.empty(),e)}function X0(t){return new En(t.readTime,t.key,-1)}class En{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new En(J.min(),j.empty(),-1)}static max(){return new En(J.max(),j.empty(),-1)}}function Z0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const eI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function El(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==eI)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Il.ct=-1;function $o(t){return t==null}function uc(t){return t===0&&1/t==-1/0}/**
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
 */function ph(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??$e.RED,this.left=r??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new $e(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,s,r){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gh(this.data.getIterator())}getIteratorFrom(e){return new gh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xe(this.comparator);return n.data=e,n}}class gh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new dn([])}unionWith(e){let n=new xe(ot.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class sI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new sI("Invalid base64 string: "+r):r}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const rI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=rI.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function As(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function Kp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zp(t){const e=t.mapValue.fields.__previous_value__;return Kp(e)?zp(e):e}function Cr(t){const e=In(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class iI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kp(t)?4:oI(t)?9007199254740991:10:Z()}function $t(t,e){if(t===e)return!0;const n=Wn(t);if(n!==Wn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Cr(t).isEqual(Cr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=In(s.timestampValue),o=In(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return As(s.bytesValue).isEqual(As(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Oe(s.geoPointValue.latitude)===Oe(r.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Oe(s.integerValue)===Oe(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Oe(s.doubleValue),o=Oe(r.doubleValue);return i===o?uc(i)===uc(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Cs(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(ph(i)!==ph(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!$t(i[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function kr(t,e){return(t.values||[]).find(n=>$t(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=Wn(t),s=Wn(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Oe(r.integerValue||r.doubleValue),a=Oe(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return mh(t.timestampValue,e.timestampValue);case 4:return mh(Cr(t),Cr(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(r,i){const o=As(r),a=As(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=de(o[c],a[c]);if(l!==0)return l}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=de(Oe(r.latitude),Oe(i.latitude));return o!==0?o:de(Oe(r.longitude),Oe(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ks(o[c],a[c]);if(l)return l}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===di.mapValue&&i===di.mapValue)return 0;if(r===di.mapValue)return 1;if(i===di.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=de(a[u],l[u]);if(h!==0)return h;const d=ks(o[a[u]],c[l[u]]);if(d!==0)return d}return de(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Z()}}function mh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=In(t),s=In(e),r=de(n.seconds,s.seconds);return r!==0?r:de(n.nanos,s.nanos)}function Rs(t){return hc(t)}function hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=In(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?As(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=hc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${hc(s.fields[a])}`;return i+"}"}(t.mapValue):Z();var e,n}function fc(t){return!!t&&"integerValue"in t}function Tl(t){return!!t&&"arrayValue"in t}function yh(t){return!!t&&"nullValue"in t}function vh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ia(t){return!!t&&"mapValue"in t}function ir(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bo(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ir(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ir(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(n)}setAll(e){let n=ot.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ir(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ia(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Bo(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Mt(ir(this.value))}}/**
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
 */class ze{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,J.min(),J.min(),J.min(),Mt.empty(),0)}static newFoundDocument(e,n,s,r){return new ze(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new ze(e,2,n,J.min(),J.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,J.min(),J.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eo{constructor(e,n){this.position=e,this.inclusive=n}}function wh(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function _h(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class or{constructor(e,n="asc"){this.field=e,this.dir=n}}function aI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Wp{}class Ne extends Wp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new lI(e,n,s):n==="array-contains"?new fI(e,s):n==="in"?new dI(e,s):n==="not-in"?new pI(e,s):n==="array-contains-any"?new gI(e,s):new Ne(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new uI(e,s):new hI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ks(n,this.value)):n!==null&&Wn(this.value)===Wn(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends Wp{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Bt(e,n)}matches(e){return Gp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Gp(t){return t.op==="and"}function Qp(t){return cI(t)&&Gp(t)}function cI(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function dc(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(Qp(t))return t.filters.map(e=>dc(e)).join(",");{const e=t.filters.map(n=>dc(n)).join(",");return`${t.op}(${e})`}}function Yp(t,e){return t instanceof Ne?function(n,s){return s instanceof Ne&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(t,e):t instanceof Bt?function(n,s){return s instanceof Bt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Yp(i,s.filters[o]),!0):!1}(t,e):void Z()}function Jp(t){return t instanceof Ne?function(e){return`${e.field.canonicalString()} ${e.op} ${Rs(e.value)}`}(t):t instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Jp).join(" ,")+"}"}(t):"Filter"}class lI extends Ne{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class uI extends Ne{constructor(e,n){super(e,"in",n),this.keys=Xp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hI extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=Xp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class fI extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tl(n)&&kr(n.arrayValue,this.value)}}class dI extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kr(this.value.arrayValue,n)}}class pI extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kr(this.value.arrayValue,n)}}class gI extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>kr(this.value.arrayValue,s))}}/**
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
 */class mI{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Eh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new mI(t,e,n,s,r,i,o)}function bl(t){const e=le(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>dc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),$o(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rs(s)).join(",")),e.ft=n}return e.ft}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Yp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_h(t.startAt,e.startAt)&&_h(t.endAt,e.endAt)}function pc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class jo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function yI(t,e,n,s,r,i,o,a){return new jo(t,e,n,s,r,i,o,a)}function Cl(t){return new jo(t)}function Ih(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _I(t){return t.collectionGroup!==null}function ds(t){const e=le(t);if(e.dt===null){e.dt=[];const n=wI(e),s=vI(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new or(n)),e.dt.push(new or(ot.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new or(ot.keyField(),i))}}}return e.dt}function Jt(t){const e=le(t);if(!e.wt)if(e.limitType==="F")e.wt=Eh(e.path,e.collectionGroup,ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ds(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new or(i.field,o))}const s=e.endAt?new eo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eo(e.startAt.position,e.startAt.inclusive):null;e.wt=Eh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function gc(t,e,n){return new jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ho(t,e){return Sl(Jt(t),Jt(e))&&t.limitType===e.limitType}function Zp(t){return`${bl(Jt(t))}|lt:${t.limitType}`}function mc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Jp(s)).join(", ")}]`),$o(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Rs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Rs(s)).join(",")),`Target(${n})`}(Jt(t))}; limitType=${t.limitType})`}function qo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ds(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=wh(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ds(n),s)||n.endAt&&!function(r,i,o){const a=wh(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ds(n),s))}(t,e)}function EI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eg(t){return(e,n)=>{let s=!1;for(const r of ds(t)){const i=II(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function II(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ks(a,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Bo(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return nI(this.inner)}size(){return this.innerSize}}/**
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
 */const TI=new je(j.comparator);function Tn(){return TI}const tg=new je(j.comparator);function Ys(...t){let e=tg;for(const n of t)e=e.insert(n.key,n);return e}function bI(t){let e=tg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fn(){return ar()}function ng(){return ar()}function ar(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const SI=new xe(j.comparator);function ce(...t){let e=SI;for(const n of t)e=e.add(n);return e}const CI=new xe(de);function sg(){return CI}/**
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
 */function AI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function kI(t){return{integerValue:""+t}}/**
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
 */class Ko{constructor(){this._=void 0}}function RI(t,e,n){return t instanceof yc?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof to?rg(t,e):t instanceof no?ig(t,e):function(s,r){const i=OI(s,r),o=Th(i)+Th(s._t);return fc(i)&&fc(s._t)?kI(o):AI(s.serializer,o)}(t,e)}function DI(t,e,n){return t instanceof to?rg(t,e):t instanceof no?ig(t,e):n}function OI(t,e){return t instanceof vc?fc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class yc extends Ko{}class to extends Ko{constructor(e){super(),this.elements=e}}function rg(t,e){const n=og(e);for(const s of t.elements)n.some(r=>$t(r,s))||n.push(s);return{arrayValue:{values:n}}}class no extends Ko{constructor(e){super(),this.elements=e}}function ig(t,e){let n=og(e);for(const s of t.elements)n=n.filter(r=>!$t(r,s));return{arrayValue:{values:n}}}class vc extends Ko{constructor(e,n){super(),this.serializer=e,this._t=n}}function Th(t){return Oe(t.integerValue||t.doubleValue)}function og(t){return Tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof to&&s instanceof to||n instanceof no&&s instanceof no?Cs(n.elements,s.elements,$t):n instanceof vc&&s instanceof vc?$t(n._t,s._t):n instanceof yc&&s instanceof yc}(t.transform,e.transform)}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ii(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Al{}function ag(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xI(t.key,Bn.none()):new kl(t.key,t.data,Bn.none());{const n=t.data,s=Mt.empty();let r=new xe(ot.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new zo(t.key,s,new dn(r.toArray()),Bn.none())}}function PI(t,e,n){t instanceof kl?function(s,r,i){const o=s.value.clone(),a=Sh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zo?function(s,r,i){if(!Ii(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Sh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(cg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function cr(t,e,n,s){return t instanceof kl?function(r,i,o,a){if(!Ii(r.precondition,i))return o;const c=r.value.clone(),l=Ch(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof zo?function(r,i,o,a){if(!Ii(r.precondition,i))return o;const c=Ch(r.fieldTransforms,a,i),l=i.data;return l.setAll(cg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Ii(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function bh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Cs(n,s,(r,i)=>NI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class kl extends Al{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zo extends Al{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Sh(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,DI(o,a,n[r]))}return s}function Ch(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,RI(i,o,e))}return s}class xI extends Al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&PI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=cr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=cr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ng();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=ag(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Cs(this.mutations,e.mutations,(n,s)=>bh(n,s))&&Cs(this.baseMutations,e.baseMutations,(n,s)=>bh(n,s))}}/**
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
 */class MI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FI{constructor(e){this.count=e}}/**
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
 */var De,ie;function lg(t){if(t===void 0)return Yt("GRPC error has no .code"),D.UNKNOWN;switch(t){case De.OK:return D.OK;case De.CANCELLED:return D.CANCELLED;case De.UNKNOWN:return D.UNKNOWN;case De.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case De.INTERNAL:return D.INTERNAL;case De.UNAVAILABLE:return D.UNAVAILABLE;case De.UNAUTHENTICATED:return D.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case De.NOT_FOUND:return D.NOT_FOUND;case De.ALREADY_EXISTS:return D.ALREADY_EXISTS;case De.PERMISSION_DENIED:return D.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case De.ABORTED:return D.ABORTED;case De.OUT_OF_RANGE:return D.OUT_OF_RANGE;case De.UNIMPLEMENTED:return D.UNIMPLEMENTED;case De.DATA_LOSS:return D.DATA_LOSS;default:return Z()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Rl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pi}static getOrCreateInstance(){return pi===null&&(pi=new Rl),pi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let pi=null;/**
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
 */class Wo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Kr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Wo(J.min(),r,sg(),Tn(),ce())}}class Kr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Kr(s,n,ce(),ce(),ce())}}/**
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
 */class Ti{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class ug{constructor(e,n){this.targetId=e,this.Et=n}}class hg{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ah{constructor(){this.At=0,this.Rt=Rh(),this.vt=Xe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ce(),n=ce(),s=ce();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Z()}}),new Kr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=Rh()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class UI{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Tn(),this.qt=kh(),this.Ut=new xe(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(e){var n;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(pc(o))if(r===0){const a=new j(o.path);this.Qt(s,a,ze.newNoDocument(a,J.min()))}else Pe(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Rl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&pc(a.target)){const c=new j(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ze.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Wo(e,n,this.Ut,this.Lt,s);return this.Lt=Tn(),this.qt=kh(),this.Ut=new xe(de),r}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Ah,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new xe(de),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ah),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function kh(){return new je(j.comparator)}function Rh(){return new je(j.comparator)}/**
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
 */const VI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$I=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),BI=(()=>({and:"AND",or:"OR"}))();class jI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function HI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ps(t){return Pe(!!t),J.fromTimestamp(function(e){const n=In(e);return new ct(n.seconds,n.nanos)}(t))}function KI(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fg(t){const e=Te.fromString(t);return Pe(mg(e)),e}function Ta(t,e){const n=fg(e);if(n.get(1)!==t.databaseId.projectId)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(dg(n))}function wc(t,e){return KI(t.databaseId,e)}function zI(t){const e=fg(t);return e.length===4?Te.emptyPath():dg(e)}function Dh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dg(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Pe(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?D.UNKNOWN:lg(c.code);return new q(l,c.message||"")}(o);n=new hg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ta(t,s.document.name),i=ps(s.document.updateTime),o=s.document.createTime?ps(s.document.createTime):J.min(),a=new Mt({mapValue:{fields:s.document.fields}}),c=ze.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ti(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ta(t,s.document),i=s.readTime?ps(s.readTime):J.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ti([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ta(t,s.document),i=s.removedTargetIds||[];n=new Ti([],i,r,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new FI(r),o=s.targetId;n=new ug(o,i)}}return n}function GI(t,e){return{documents:[wc(t,e.path)]}}function QI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=wc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return gg(Bt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:rs(u.field),direction:XI(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.useProto3Json||$o(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function YI(t){let e=zI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=pg(u);return h instanceof Bt&&Qp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new or(is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,$o(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new eo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new eo(d,h)}(n.endAt)),yI(e,r,o,i,a,"F",c,l)}function JI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=is(e.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=is(e.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=is(e.unaryFilter.field);return Ne.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=is(e.unaryFilter.field);return Ne.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(e){return Ne.create(is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(n=>pg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(e.compositeFilter.op))}(t):Z()}function XI(t){return VI[t]}function ZI(t){return $I[t]}function eT(t){return BI[t]}function rs(t){return{fieldPath:t.canonicalString()}}function is(t){return ot.fromServerFormat(t.fieldPath)}function gg(t){return t instanceof Ne?function(e){if(e.op==="=="){if(vh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NAN"}};if(yh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NAN"}};if(yh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(e.field),op:ZI(e.op),value:e.value}}}(t):t instanceof Bt?function(e){const n=e.getFilters().map(s=>gg(s));return n.length===1?n[0]:{compositeFilter:{op:eT(e.op),filters:n}}}(t):Z()}function mg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class jn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tT{constructor(e){this.se=e}}function nT(t){const e=YI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
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
 */class sT{constructor(){this.He=new rT}addToCollectionParentIndex(e,n){return this.He.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(En.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class rT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new xe(Te.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new xe(Te.comparator)).toArray()}}/**
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
 */class Ds{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ds(0)}static bn(){return new Ds(-1)}}/**
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
 */class iT{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&cr(s.mutation,r,dn.empty(),ct.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ys();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Tn();const o=ar(),a=ar();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof zo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),cr(u.mutation,l,u.mutation.getFieldMask(),ct.now())):o.set(l.key,dn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new oT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ar();let r=new je((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||dn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ce()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ng();u.forEach(d=>{if(!i.has(d)){const g=ag(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_I(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Fn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:bI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Ys();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ys();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new jo(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,ze.newInvalidDocument(l)))});let o=Ys();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&cr(l.mutation,c,dn.empty(),ct.now()),qo(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class cT{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ps(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:nT(s.bundledQuery),readTime:ps(s.readTime)}}(n)),T.resolve()}}/**
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
 */class lT{constructor(){this.overlays=new je(j.comparator),this.ts=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.re(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Fn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new je((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Fn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}re(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new MI(n,s));let i=this.ts.get(n);i===void 0&&(i=ce(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
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
 */class Dl{constructor(){this.es=new xe(Ue.ns),this.ss=new xe(Ue.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Ue(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new Te([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new Te([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=ce();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||de(e.ds,n.ds)}static rs(e,n){return de(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
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
 */class uT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new xe(Ue.ns)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new xe(de);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),T.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new j(i),0);let a=new xe(de);return this._s.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ds)),!0)},o),T.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return T.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Ue(n,0),r=this._s.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hT{constructor(e){this.Ts=e,this.docs=new je(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=Tn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Tn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Z0(X0(u),s)<=0||(r.has(u.key)||qo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Z()}Es(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fT(this)}getSize(e){return T.resolve(this.size)}}class fT extends iT{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class dT{constructor(e){this.persistence=e,this.As=new Vs(n=>bl(n),Sl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Dl,this.targetCount=0,this.bs=Ds.vn()}forEachTarget(e,n){return this.As.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),T.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Sn(n),T.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.vs.containsKey(n))}}/**
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
 */class pT{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Il(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new dT(this),this.indexManager=new sT,this.remoteDocumentCache=function(s){return new hT(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new tT(n),this.xs=new cT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new uT(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new gT(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,n){return T.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class gT extends tI{constructor(e){super(),this.currentSequenceNumber=e}}class Ol{constructor(e){this.persistence=e,this.$s=new Dl,this.Ms=null}static Fs(e){return new Ol(e)}get Bs(){if(this.Ms)return this.Ms;throw Z()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),T.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Bs,s=>{const r=j.fromPath(s);return this.Ls(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return T.or([()=>T.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Nl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=r}static Di(e,n){let s=ce(),r=ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Nl(e,n.fromCache,s,r)}}/**
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
 */class mT{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ni(e,n).next(i=>i||this.ki(e,n,r,s)).next(i=>i||this.Oi(e,n))}Ni(e,n){if(Ih(n))return T.resolve(null);let s=Jt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=gc(n,null,"F"),s=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ce(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,gc(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,s,r){return Ih(n)||r.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(e,n):(dh()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mc(n)),this.Fi(e,o,n,J0(r,-1)))})}$i(e,n){let s=new xe(eg(e));return n.forEach((r,i)=>{qo(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,n){return dh()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",mc(n)),this.xi.getDocumentsMatchingQuery(e,n,En.min())}Fi(e,n,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class yT{constructor(e,n,s,r){this.persistence=e,this.Bi=n,this.serializer=r,this.Li=new je(de),this.qi=new Vs(i=>bl(i),Sl),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aT(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function vT(t,e,n,s){return new yT(t,e,n,s)}async function yg(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ce();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function vg(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function wT(t,e){const n=le(t),s=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(v,w,k){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,u)&&a.push(n.Ds.updateTargetData(i,g))});let c=Tn(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(_T(i,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!s.isEqual(J.min())){const u=n.Ds.getLastRemoteSnapshotVersion(i).next(h=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Li=r,i))}function _T(t,e,n){let s=ce(),r=ce();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:r}})}function ET(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ds.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Ds.allocateTargetId(s).next(o=>(r=new jn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function _c(t,e,n){const s=le(t),r=s.Li.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function Oh(t,e,n){const s=le(t);let r=J.min(),i=ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=le(a),h=u.qi.get(l);return h!==void 0?T.resolve(u.Li.get(h)):u.Ds.getTargetData(c,l)}(s,o,Jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:ce())).next(a=>(IT(s,EI(e),a),{documents:a,Wi:i})))}function IT(t,e,n){let s=t.Ui.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ui.set(e,s)}class Nh{constructor(){this.activeTargetIds=sg()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TT{constructor(){this.Br=new Nh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Nh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bT{qr(e){}shutdown(){}}/**
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
 */class Ph{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gi=null;function ba(){return gi===null?gi=268435456+Math.round(2147483648*Math.random()):gi++,"0x"+gi.toString(16)}/**
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
 */const ST={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class CT{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const qe="WebChannelConnection";class AT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,r,i){const o=ba(),a=this.ao(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.ho(c,r,i),this.lo(e,a,c,s).then(l=>(U("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zi("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}fo(e,n,s,r,i,o){return this.co(e,n,s,r,i)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,n){const s=ST[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,r){const i=ba();return new Promise((o,a)=>{const c=new $0;c.setWithCredentials(!0),c.listenOnce(F0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ea.NO_ERROR:const u=c.getResponseJson();U(qe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ea.TIMEOUT:U(qe,`RPC '${e}' ${i} timed out`),a(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ea.HTTP_ERROR:const h=c.getStatus();if(U(qe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(k)>=0?k:D.UNKNOWN}(g.status);a(new q(v,g.message))}else a(new q(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new q(D.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{U(qe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);U(qe,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}wo(e,n,s){const r=ba(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L0(),a=M0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new V0({})),this.ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");U(qe,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new CT({Wr:w=>{d?U(qe,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(h||(U(qe,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),U(qe,`RPC '${e}' stream ${r} sending:`,w),u.send(w))},Hr:()=>u.close()}),v=(w,k,A)=>{w.listen(k,L=>{try{A(L)}catch(O){setTimeout(()=>{throw O},0)}})};return v(u,hi.EventType.OPEN,()=>{d||U(qe,`RPC '${e}' stream ${r} transport opened.`)}),v(u,hi.EventType.CLOSE,()=>{d||(d=!0,U(qe,`RPC '${e}' stream ${r} transport closed`),g.so())}),v(u,hi.EventType.ERROR,w=>{d||(d=!0,Zi(qe,`RPC '${e}' stream ${r} transport errored:`,w),g.so(new q(D.UNAVAILABLE,"The operation could not be completed")))}),v(u,hi.EventType.MESSAGE,w=>{var k;if(!d){const A=w.data[0];Pe(!!A);const L=A,O=L.error||((k=L[0])===null||k===void 0?void 0:k.error);if(O){U(qe,`RPC '${e}' stream ${r} received error:`,O);const K=O.status;let G=function(Y){const N=De[Y];if(N!==void 0)return lg(N)}(K),he=O.message;G===void 0&&(G=D.INTERNAL,he="Unknown error status: "+K+" with message "+O.message),d=!0,g.so(new q(G,he)),u.close()}else U(qe,`RPC '${e}' stream ${r} received:`,A),g.io(A)}}),v(a,U0.STAT_EVENT,w=>{w.stat===hh.PROXY?U(qe,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===hh.NOPROXY&&U(qe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}function Sa(){return typeof document<"u"?document:null}/**
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
 */function wg(t){return new jI(t,!0)}/**
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
 */class _g{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class kT{constructor(e,n,s,r,i,o,a,c){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new _g(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Yt(n.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{e(()=>{const r=new q(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RT extends kT{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=WI(this.serializer,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?ps(i.readTime):J.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Dh(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=pc(a)?{documents:GI(r,a)}:{query:QI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qI(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=HI(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=JI(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Dh(this.serializer),n.removeTarget=e,this.Fo(n)}}/**
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
 */class DT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(D.UNKNOWN,r.toString())})}fo(e,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(D.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class OT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Yt(n),this.ru=!1):U("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class NT{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{Wr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=le(a);c.du.add(4),await zr(c),c.mu.set("Unknown"),c.du.delete(4),await Go(c)}(this))})}),this.mu=new OT(s,r)}}async function Go(t){if(Wr(t))for(const e of t.wu)await e(!0)}async function zr(t){for(const e of t.wu)await e(!1)}function Eg(t,e){const n=le(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ll(n)?xl(n):$s(n).No()&&Pl(n,e))}function Ig(t,e){const n=le(t),s=$s(n);n.fu.delete(e),s.No()&&Tg(n,e),n.fu.size===0&&(s.No()?s.$o():Wr(n)&&n.mu.set("Unknown"))}function Pl(t,e){t.gu.Ot(e.targetId),$s(t).jo(e)}function Tg(t,e){t.gu.Ot(e),$s(t).Wo(e)}function xl(t){t.gu=new UI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),$s(t).start(),t.mu.ou()}function Ll(t){return Wr(t)&&!$s(t).xo()&&t.fu.size>0}function Wr(t){return le(t).du.size===0}function bg(t){t.gu=void 0}async function PT(t){t.fu.forEach((e,n)=>{Pl(t,e)})}async function xT(t,e){bg(t),Ll(t)?(t.mu.au(e),xl(t)):t.mu.set("Unknown")}async function LT(t,e,n){if(t.mu.set("Online"),e instanceof hg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xh(t,s)}else if(e instanceof Ti?t.gu.Kt(e):e instanceof ug?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const s=await vg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.fu.get(c);l&&r.fu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.fu.get(a);if(!c)return;r.fu.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),Tg(r,a);const l=new jn(c.target,a,1,c.sequenceNumber);Pl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await xh(t,s)}}async function xh(t,e,n){if(!qr(e))throw e;t.du.add(1),await zr(t),t.mu.set("Offline"),n||(n=()=>vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Go(t)})}async function Lh(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Wr(n);n.du.add(3),await zr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Go(n)}async function MT(t,e){const n=le(t);e?(n.du.delete(2),await Go(n)):e||(n.du.add(2),await zr(n),n.mu.set("Unknown"))}function $s(t){return t.yu||(t.yu=function(e,n,s){const r=le(e);return r.nu(),new RT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{Jr:PT.bind(null,t),Zr:xT.bind(null,t),zo:LT.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ll(t)?xl(t):t.mu.set("Unknown")):(await t.yu.stop(),bg(t))})),t.yu}/**
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
 */class Ml{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ml(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(t,e){if(Yt("AsyncQueue",`${e}: ${t}`),qr(t))return new q(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Ys(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Mh{constructor(){this.Iu=new je(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):Z():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Os{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Os(e,n,gs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class FT{constructor(){this.Eu=void 0,this.listeners=[]}}class UT{constructor(){this.queries=new Vs(e=>Zp(e),Ho),this.onlineState="Unknown",this.Au=new Set}}async function VT(t,e){const n=le(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new FT),r)try{i.Eu=await n.onListen(s)}catch(o){const a=Sg(o,`Initialization of query '${mc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Ru(n.onlineState),i.Eu&&e.vu(i.Eu)&&Fl(n)}async function $T(t,e){const n=le(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function BT(t,e){const n=le(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&Fl(n)}function jT(t,e,n){const s=le(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Fl(t){t.Au.forEach(e=>{e.next()})}class HT{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Os(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class Cg{constructor(e){this.key=e}}class Ag{constructor(e){this.key=e}}class qT{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ce(),this.mutatedKeys=ce(),this.Ku=eg(e),this.Gu=new gs(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Mh,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=qo(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?v!==w&&(s.track({type:3,doc:g}),k=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Ku(g,c)>0||l&&this.Ku(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||l)&&(a=!0)),k&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((l,u)=>function(h,d){const g=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return g(h)-g(d)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Os(this.query,e.Gu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Mh,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ce(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Ag(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new Cg(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ce();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Os.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class KT{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class zT{constructor(e){this.key=e,this.ec=!1}}class WT{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Vs(a=>Zp(a),Ho),this.ic=new Map,this.rc=new Set,this.oc=new je(j.comparator),this.uc=new Map,this.cc=new Dl,this.ac={},this.hc=new Map,this.lc=Ds.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function GT(t,e){const n=tb(t);let s,r;const i=n.sc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await ET(n.localStore,Jt(e));n.isPrimaryClient&&Eg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await QT(n,e,s,a==="current",o.resumeToken)}return r}async function QT(t,e,n,s,r){t.dc=(h,d,g)=>async function(v,w,k,A){let L=w.view.zu(k);L.Mi&&(L=await Oh(v.localStore,w.query,!1).then(({documents:G})=>w.view.zu(G,L)));const O=A&&A.targetChanges.get(w.targetId),K=w.view.applyChanges(L,v.isPrimaryClient,O);return Uh(v,w.targetId,K.Yu),K.snapshot}(t,h,d,g);const i=await Oh(t.localStore,e,!0),o=new qT(e,i.Wi),a=o.zu(i.documents),c=Kr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Uh(t,n,l.Yu);const u=new KT(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function YT(t,e){const n=le(t),s=n.sc.get(e),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Ho(i,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _c(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ig(n.remoteStore,s.targetId),Ec(n,s.targetId)}).catch(El)):(Ec(n,s.targetId),await _c(n.localStore,s.targetId,!0))}async function kg(t,e){const n=le(t);try{const s=await wT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?Pe(o.ec):r.removedDocuments.size>0&&(Pe(o.ec),o.ec=!1))}),await Dg(n,s,e)}catch(s){await El(s)}}function Fh(t,e,n){const s=le(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=le(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Ru(o)&&(c=!0)}),c&&Fl(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function JT(t,e,n){const s=le(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new je(j.comparator);o=o.insert(i,ze.newNoDocument(i,J.min()));const a=ce().add(i),c=new Wo(J.min(),new Map,new xe(de),o,a);await kg(s,c),s.oc=s.oc.remove(i),s.uc.delete(e),Ul(s)}else await _c(s.localStore,e,!1).then(()=>Ec(s,e,n)).catch(El)}function Ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Rg(t,s)})}function Rg(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ig(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Ul(t))}function Uh(t,e,n){for(const s of n)s instanceof Cg?(t.cc.addReference(s.key,e),XT(t,s)):s instanceof Ag?(U("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Rg(t,s.key)):Z()}function XT(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.rc.add(s),Ul(t))}function Ul(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(Te.fromString(e)),s=t.lc.next();t.uc.set(s,new zT(n)),t.oc=t.oc.insert(n,s),Eg(t.remoteStore,new jn(Jt(Cl(n.path)),s,2,Il.ct))}}async function Dg(t,e,n){const s=le(t),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Nl.Di(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,c){const l=le(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Vi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Si,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!qr(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Li.get(h),g=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(g);l.Li=l.Li.insert(h,v)}}}(s.localStore,i))}async function ZT(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await yg(n.localStore,e);n.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(D.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dg(n,s.Qi)}}function eb(t,e){const n=le(t),s=n.uc.get(e);if(s&&s.ec)return ce().add(s.key);{let r=ce();const i=n.ic.get(e);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function tb(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JT.bind(null,e),e.nc.zo=BT.bind(null,e.eventManager),e.nc.wc=jT.bind(null,e.eventManager),e}class Vh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wg(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vT(this.persistence,new mT,e.initialUser,this.serializer)}createPersistence(e){return new pT(Ol.Fs,this.serializer)}createSharedClientState(e){return new TT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZT.bind(null,this.syncEngine),await MT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new UT}createDatastore(e){const n=wg(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new AT(r));var r;return function(i,o,a,c){return new DT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Fh(this.syncEngine,a,0),o=Ph.D()?new Ph:new bT,new NT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new WT(s,r,i,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=le(e);U("RemoteStore","RemoteStore shutting down."),n.du.add(5),await zr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class sb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=Q0.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sg(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ca(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await yg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $h(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ob(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Lh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Lh(e.remoteStore,i)),t._onlineComponents=e}function ib(t){return t.name==="FirebaseError"?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ob(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ca(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ib(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await Ca(t,new Vh)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Ca(t,new Vh);return t._offlineComponents}async function ab(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await $h(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await $h(t,new nb))),t._onlineComponents}async function Bh(t){const e=await ab(t),n=e.eventManager;return n.onListen=GT.bind(null,e.syncEngine),n.onUnlisten=YT.bind(null,e.syncEngine),n}/**
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
 */const jh=new Map;/**
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
 */function cb(t,e,n){if(!n)throw new q(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lb(t,e,n,s){if(e===!0&&s===!0)throw new q(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hh(t){if(j.isDocumentKey(t))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ub(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ub(t);throw new q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Vl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new B0;switch(n.type){case"firstParty":return new K0(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jh.get(e);n&&(U("ComponentProvider","Removing Datastore"),jh.delete(e),n.terminate())}(this),Promise.resolve()}}function hb(t,e,n,s={}){var r;const i=(t=bi(t,Vl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=__(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new j0(new qp(o,a))}}/**
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
 */class Jn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Jn(this.firestore,e,this._key)}}class Qo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qo(this.firestore,e,this._query)}}class ms extends Qo{constructor(e,n,s){super(e,n,Cl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Jn(this.firestore,null,new j(e))}withConverter(e){return new ms(this.firestore,e,this._path)}}function fb(t,e,...n){if(t=tn(t),cb("collection","path",e),t instanceof Vl){const s=Te.fromString(e,...n);return Hh(s),new ms(t,null,s)}{if(!(t instanceof Jn||t instanceof ms))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return Hh(s),new ms(t.firestore,null,s)}}/**
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
 */class db{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new _g(this,"async_queue_retry"),this.qc=()=>{const n=Sa();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Sa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new fs;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!qr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const r=Ml.createAndSchedule(this,e,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&Z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Kh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ic extends Vl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new db,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Og(this),this._firestoreClient.terminate()}}function pb(t,e){const n=typeof t=="object"?t:Vd(),s=typeof t=="string"?t:e||"(default)",r=Xc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=y_("firestore");i&&hb(r,...i)}return r}function gb(t){return t._firestoreClient||Og(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Og(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new iI(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new rb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(Xe.fromBase64String(e))}catch(n){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ng{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mb{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}const yb=new RegExp("[~\\*/\\[\\]]");function vb(t,e,n){if(e.search(yb)>=0)throw zh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ng(...e.split("."))._internalPath}catch{throw zh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zh(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(D.INVALID_ARGUMENT,a+t+c)}/**
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
 */class Pg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Jn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wb extends Pg{data(){return super.data()}}function xg(t,e){return typeof e=="string"?vb(t,e):e instanceof Ng?e._internalPath:e._delegate._internalPath}/**
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
 */function _b(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eb{convertValue(e,n="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(As(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const s={};return Bo(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new mb(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=zp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const n=In(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);Pe(mg(s));const r=new Ar(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||Yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lg extends Pg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(xg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Si extends Lg{data(e={}){return super.data(e)}}class Ib{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Js(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Si(this._firestore,this._userDataWriter,s.key,s,new Js(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Si(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Js(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Si(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Js(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:Tb(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class Mg extends Eb{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Jn(this.firestore,null,n)}}function bb(t,...e){var n,s,r;t=tn(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Kh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Kh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof Jn)l=bi(t.firestore,Ic),u=Cl(t._key.path),c={next:h=>{e[o]&&e[o](Sb(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=bi(t,Qo);l=bi(h.firestore,Ic),u=h._query;const d=new Mg(l);c={next:g=>{e[o]&&e[o](new Ib(l,d,h,g))},error:e[o+1],complete:e[o+2]},_b(t._query)}return function(h,d,g,v){const w=new sb(v),k=new HT(d,w,g);return h.asyncQueue.enqueueAndForget(async()=>VT(await Bh(h),k)),()=>{w.yc(),h.asyncQueue.enqueueAndForget(async()=>$T(await Bh(h),k))}}(gb(l),u,a,c)}function Sb(t,e,n){const s=n.docs.get(e._key),r=new Mg(t);return new Lg(t,r,e._key,s,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Us=n})(xr),bs(new qn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ic(new H0(n.getProvider("auth-internal")),new W0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),vn(fh,"3.10.0",t),vn(fh,"3.10.0","esm2017")})();var Cb="firebase",Ab="9.19.1";/**
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
 */vn(Cb,Ab,"app");function $l(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Fg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kb=Fg,Ug=new Nr("auth","Firebase",Fg());/**
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
 */const Wh=new Yc("@firebase/auth");function Ci(t,...e){Wh.logLevel<=ue.ERROR&&Wh.error(`Auth (${xr}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw Bl(t,...e)}function Ft(t,...e){return Bl(t,...e)}function Rb(t,e,n){const s=Object.assign(Object.assign({},kb()),{[e]:n});return new Nr("auth","Firebase",s).create(e,{appName:t.name})}function Bl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ug.create(t,...e)}function H(t,e,...n){if(!t)throw Bl(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ci(e),new Error(e)}function Xt(t,e){t||Kt(e)}/**
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
 */const Gh=new Map;function zt(t){Xt(t instanceof Function,"Expected a class definition");let e=Gh.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gh.set(t,e),e)}/**
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
 */function Db(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Hi(i,e??{}))return r;Dt(r,"already-initialized")}return n.initialize({options:e})}function Ob(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nb(){return Qh()==="http:"||Qh()==="https:"}function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Pb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nb()||I_()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=E_()||T_()}get(){return Pb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Vg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Mb=new Gr(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,s,r={}){return $g(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Pr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vg.fetch()(Bg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $g(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Lb),e);try{const r=new Fb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rb(t,u,l);Dt(t,u)}}catch(r){if(r instanceof en)throw r;Dt(t,"network-request-failed",{message:String(r)})}}async function Jr(t,e,n,s,r={}){const i=await Yr(t,e,n,s,r);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bg(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jl(t.config,r):`${t.config.apiScheme}://${r}`}class Fb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),Mb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ft(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Ub(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function Vb(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $b(t,e=!1){const n=tn(t),s=await n.getIdToken(e),r=Hl(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:lr(Aa(r.auth_time)),issuedAtTime:lr(Aa(r.iat)),expirationTime:lr(Aa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function Hl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pd(n);return r?JSON.parse(r):(Ci("Failed to decode base64 JWT payload"),null)}catch(r){return Ci("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Bb(t){const e=Hl(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof en&&jb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Hb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ro(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Rr(t,Vb(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zb(i.providerUserInfo):[],a=Kb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qb(t){const e=tn(t);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zb(t){return t.map(e=>{var{providerId:n}=e,s=$l(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Wb(t,e){const n=await $g(t,{},async()=>{const s=Pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Bg(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Wb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Dr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function rn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=$l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $b(this,e)}reload(){return qb(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ro(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rr(this,Ub(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:K,isAnonymous:G,providerData:he,stsTokenManager:Y}=n;H(O&&Y,e,"internal-error");const N=Dr.fromJSON(this.name,Y);H(typeof O=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof G=="boolean",e,"internal-error"),rn(g,e.name),rn(v,e.name),rn(w,e.name),rn(k,e.name),rn(A,e.name),rn(L,e.name);const te=new Hn({uid:O,auth:e,email:d,emailVerified:K,displayName:h,isAnonymous:G,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:N,createdAt:A,lastLoginAt:L});return he&&Array.isArray(he)&&(te.providerData=he.map(se=>Object.assign({},se))),k&&(te._redirectEventId=k),te}static async _fromIdTokenResponse(e,n,s=!1){const r=new Dr;r.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ro(i),i}}/**
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
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const Yh=Hg;/**
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
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ai(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ai("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(zt(Yh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||zt(Yh);const o=Ai(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Hn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ys(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ys(i,e,s))}}/**
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
 */function Jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gg(e))return"Blackberry";if(Qg(e))return"Webos";if(ql(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qg(t=Je()){return/firefox\//i.test(t)}function ql(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=Je()){return/crios\//i.test(t)}function zg(t=Je()){return/iemobile/i.test(t)}function Wg(t=Je()){return/android/i.test(t)}function Gg(t=Je()){return/blackberry/i.test(t)}function Qg(t=Je()){return/webos/i.test(t)}function Yo(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gb(t=Je()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qb(){return b_()&&document.documentMode===10}function Yg(t=Je()){return Yo(t)||Wg(t)||Qg(t)||Gg(t)||/windows phone/i.test(t)||zg(t)}function Yb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jg(t,e=[]){let n;switch(t){case"Browser":n=Jh(Je());break;case"Worker":n=`${Jh(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${s}`}/**
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
 */class Jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class Xb{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new Jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ug,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xr(t){return tn(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=O_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Zb(t,e,n){const s=Xr(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Xg(e),{host:o,port:a}=eS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||tS()}function Xg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eS(t){const e=Xg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Zh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Zh(o)}}}function Zh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function nS(t,e){return Yr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function sS(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
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
 */async function rS(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function iS(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
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
 */class Or extends Kl{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Or(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Or(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return sS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rS(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iS(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vs(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
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
 */const oS="http://localhost";class Gn extends Kl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=$l(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Gn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vs(e,n)}buildRequest(){const e={requestUri:oS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pr(n)}return e}}/**
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
 */function aS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cS(t){const e=zs(Ws(t)).link,n=e?zs(Ws(e)).deep_link_id:null,s=zs(Ws(t)).deep_link_id;return(s?zs(Ws(s)).link:null)||s||n||e||t}class zl{constructor(e){var n,s,r,i,o,a;const c=zs(Ws(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=aS((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cS(e);try{return new zl(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return Or._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zl.parseLink(n);return H(s,"argument-error"),Or._fromEmailAndCode(e,s.code,s.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zr extends Zg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ln extends Zr{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class un extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return un.credential(n,s)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class hn extends Zr{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends Zr{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */async function lS(t,e){return Jr(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
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
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Hn._fromIdTokenResponse(e,s,r),o=ef(s);return new Qn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ef(s);return new Qn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class io extends en{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new io(e,n,s,r)}}function em(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(t,i,e,s):i})}async function uS(t,e,n=!1){const s=await Rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",s)}/**
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
 */async function hS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Rr(t,em(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Hl(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),Qn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),i}}/**
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
 */async function tm(t,e,n=!1){const s="signIn",r=await em(t,s,e),i=await Qn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function fS(t,e){return tm(Xr(t),e)}async function dS(t,e,n){const s=Xr(t),r=await lS(s,{returnSecureToken:!0,email:e,password:n}),i=await Qn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function pS(t,e,n){return fS(tn(t),Bs.credential(e,n))}function gS(t,e,n,s){return tn(t).onIdTokenChanged(e,n,s)}function mS(t,e,n){return tn(t).beforeAuthStateChanged(e,n)}const oo="__sak";/**
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
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yS(){const t=Je();return ql(t)||Yo(t)}const vS=1e3,wS=10;class sm extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yS()&&Yb(),this.fallbackToPolling=Yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Qb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sm.type="LOCAL";const _S=sm;/**
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
 */class rm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rm.type="SESSION";const im=rm;/**
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
 */function ES(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ES(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
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
 */function Wl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Wl("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function TS(t){Ut().location.href=t}/**
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
 */function om(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function bS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CS(){return om()?self:null}/**
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
 */const am="firebaseLocalStorageDb",AS=1,ao="firebaseLocalStorage",cm="fbase_key";class ei{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function kS(){const t=indexedDB.deleteDatabase(am);return new ei(t).toPromise()}function bc(){const t=indexedDB.open(am,AS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ao,{keyPath:cm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ao)?e(s):(s.close(),await kS(),e(await bc()))})})}async function tf(t,e,n){const s=Xo(t,!0).put({[cm]:e,value:n});return new ei(s).toPromise()}async function RS(t,e){const n=Xo(t,!1).get(e),s=await new ei(n).toPromise();return s===void 0?null:s.value}function nf(t,e){const n=Xo(t,!0).delete(e);return new ei(n).toPromise()}const DS=800,OS=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>OS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return om()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(CS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bS(),!this.activeServiceWorker)return;this.sender=new IS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await tf(e,oo,"1"),await nf(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>RS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xo(r,!1).getAll();return new ei(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const NS=lm;/**
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
 */function PS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ft("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",PS().appendChild(s)})}function LS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gr(3e4,6e4);/**
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
 */function MS(t,e){return e?zt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gl extends Kl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FS(t){return tm(t.auth,new Gl(t),t.bypassAuthState)}function US(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),hS(n,new Gl(t),t.bypassAuthState)}async function VS(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),uS(n,new Gl(t),t.bypassAuthState)}/**
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
 */class um{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FS;case"linkViaPopup":case"linkViaRedirect":return VS;case"reauthViaPopup":case"reauthViaRedirect":return US;default:Dt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $S=new Gr(2e3,1e4);class cs extends um{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Wl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$S.get())};e()}}cs.currentPopupAction=null;/**
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
 */const BS="pendingRedirect",ki=new Map;class jS extends um{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ki.get(this.auth._key());if(!e){try{const s=await HS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ki.set(this.auth._key(),e)}return this.bypassAuthState||ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HS(t,e){const n=zS(e),s=KS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function qS(t,e){ki.set(t._key(),e)}function KS(t){return zt(t._redirectPersistence)}function zS(t){return Ai(BS,t.config.apiKey,t.name)}async function WS(t,e,n=!1){const s=Xr(t),r=MS(s,e),o=await new jS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const GS=10*60*1e3;class QS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!hm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GS&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
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
 */async function JS(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
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
 */const XS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZS=/^https?/;async function eC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JS(t);for(const n of e)try{if(tC(n))return}catch{}Dt(t,"unauthorized-domain")}function tC(t){const e=Tc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ZS.test(n))return!1;if(XS.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const nC=new Gr(3e4,6e4);function rf(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sC(t){return new Promise((e,n)=>{var s,r,i;function o(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(Ft(t,"network-request-failed"))},timeout:nC.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=LS("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},xS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ri=null,e})}let Ri=null;function rC(t){return Ri=Ri||sC(t),Ri}/**
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
 */const iC=new Gr(5e3,15e3),oC="__/auth/iframe",aC="emulator/auth/iframe",cC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uC(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,aC):`https://${t.config.authDomain}/${oC}`,s={apiKey:e.apiKey,appName:t.name,v:xr},r=lC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Pr(s).slice(1)}`}async function hC(t){const e=await rC(t),n=Ut().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:uC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},iC.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dC=500,pC=600,gC="_blank",mC="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yC(t,e,n,s=dC,r=pC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fC),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Je().toLowerCase();n&&(a=Kg(l)?gC:n),qg(l)&&(e=e||mC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(Gb(l)&&a!=="_self")return vC(e||"",a),new of(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new of(h)}function vC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const wC="__/auth/handler",_C="emulator/auth/handler";function af(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:xr,eventId:r};if(e instanceof Zg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",D_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Zr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${EC(t)}?${Pr(a).slice(1)}`}function EC({config:t}){return t.emulator?jl(t,_C):`https://${t.authDomain}/${wC}`}/**
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
 */const ka="webStorageSupport";class IC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=im,this._completeRedirectFn=WS,this._overrideRedirectResult=qS}async _openPopup(e,n,s,r){var i;Xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=af(e,n,s,Tc(),r);return yC(e,o,Wl())}async _openRedirect(e,n,s,r){return await this._originValidation(e),TS(af(e,n,s,Tc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Xt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hC(e),s=new QS(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ka,{type:ka},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ka];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yg()||ql()||Yo()}}const TC=IC;var cf="@firebase/auth",lf="0.22.0";/**
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
 */class bC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CC(t){bs(new qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(t)},u=new Xb(a,c,l);return Ob(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new qn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(s=>new bC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(cf,lf,SC(t)),vn(cf,lf,"esm2017")}/**
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
 */const AC=5*60,kC=Ld("authIdTokenMaxAge")||AC;let uf=null;const RC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kC)return;const r=n==null?void 0:n.token;uf!==r&&(uf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function DC(t=Vd()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Db(t,{popupRedirectResolver:TC,persistence:[NS,_S,im]}),s=Ld("authTokenSyncURL");if(s){const i=RC(s);mS(n,i,()=>i(n.currentUser)),gS(n,o=>i(o))}const r=xd("auth");return r&&Zb(n,`http://${r}`),n}CC("Browser");const OC={apiKey:"AIzaSyCL6T2dfzayLNleEcceFIHU2OaXDGn74QA",authDomain:"what-todo-32ecc.firebaseapp.com",projectId:"what-todo-32ecc",storageBucket:"what-todo-32ecc.appspot.com",messagingSenderId:"782848182938",appId:"1:782848182938:web:ec8b241cf3cc9b201ead23"},fm=Ud(OC),NC=pb(fm),co=DC(fm);const PC={class:"todo"},xC={class:"todo__task"},LC={__name:"Task",props:{taskData:Object},setup(t){return console.log(t.taskData),(n,s)=>(dt(),bt("div",PC,[be("i",{class:ur(["material-icons todo__fav",{favorite:t.taskData.isFav}]),onClick:s[0]||(s[0]=r=>t.taskData.isFav=!t.taskData.isFav)},"favorite",2),be("span",xC,hr(t.taskData.task),1),be("span",{class:ur(["todo__priority",t.taskData.importance])},hr(t.taskData.importance),3)]))}},MC=Dd(LC,[["__scopeId","data-v-d10c269f"]]),FC={__name:"ViewHome",setup(t){const e=Gc(),n=zc(),{username:s,uid:r}=Wc(e),i=wt([]);return s.value||n.push("/login"),Bc(async()=>{if(!s.value)n.push("/login");else{console.log(s,r);const o=fb(NC,r.value);bb(o,a=>{i.value=[],a.forEach(c=>{i.value.push({id:c.id,task:c.data().task,isFav:c.data().isFav,dueTo:c.data().dueTo,importance:c.data().importance})})})}}),(o,a)=>(dt(!0),bt(it,null,Vy(i.value,c=>(dt(),cd(MC,{key:c.id,taskData:c},null,8,["taskData"]))),128))}},Di=wt(null),Oi=wt(!1),UC=async(t,e)=>{Di.value=null,Oi.value=!0;try{if(!await pS(co,t,e))throw new Error("login failed, try again later");Di.value=null,Oi.value=!1}catch(n){console.log(n.message),Di.value=n.message,Oi.value=!1}},VC=()=>({error:Di,isPending:Oi,loginUser:UC}),$C=["onSubmit"],BC=be("label",{for:"email"},"Email",-1),jC=be("label",{for:"password"},"Password",-1),HC=be("button",null," Login ",-1),qC={key:0},KC={__name:"ViewLogin",setup(t){const e=wt(null),n=wt(null),{loginUser:s,error:r}=VC(),i=zc(),o=Gc(),{username:a,uid:c}=Wc(o),l=async()=>{await s(e.value,n.value),r.value||(a.value=co.currentUser.email,c.value=co.currentUser.uid,i.push("/"))};return(u,h)=>(dt(),bt(it,null,[be("form",{action:"",name:"login",class:"login",onSubmit:pd(l,["prevent"])},[BC,Ui(be("input",{type:"email",name:"email",id:"email",required:"","onUpdate:modelValue":h[0]||(h[0]=d=>e.value=d)},null,512),[[$i,e.value]]),jC,Ui(be("input",{type:"password",name:"password",id:"password",required:"","onUpdate:modelValue":h[1]||(h[1]=d=>n.value=d)},null,512),[[$i,n.value]]),HC],40,$C),tt(r)?(dt(),bt("div",qC,hr(tt(r)),1)):os("",!0)],64))}},Ni=wt(null),Pi=wt(!1),zC=async(t,e)=>{Ni.value=null,Pi.value=!0;try{if(!await dS(co,t,e))throw new Error("signup failed, try again later");Ni.value=null,Pi.value=!1}catch(n){console.log(n.message),Ni.value=n.message,Pi.value=!1}},WC=()=>({error:Ni,isPending:Pi,createUser:zC}),GC=["onSubmit"],QC=be("label",{for:"email"},"Email",-1),YC=be("label",{for:"password"},"Password",-1),JC=be("button",null," Register ",-1),XC={key:0},ZC={__name:"ViewRegister",setup(t){const e=wt(null),n=wt(null),{createUser:s,error:r}=WC(),i=zc(),o=async()=>{await s(e.value,n.value),r.value||i.push("/")};return(a,c)=>(dt(),bt(it,null,[be("form",{action:"",name:"register",class:"register",onSubmit:pd(o,["prevent"])},[QC,Ui(be("input",{type:"email",name:"email",id:"email",required:"","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[$i,e.value]]),YC,Ui(be("input",{type:"password",name:"password",id:"password",required:"","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[$i,n.value]]),JC],40,GC),tt(r)?(dt(),bt("div",XC,hr(tt(r)),1)):os("",!0)],64))}};const eA=[{path:"/",component:FC},{path:"/login",component:KC},{path:"/register",component:ZC}],tA=Kw({history:aw(),routes:eA});jv(l_).use(tA).use(Gw()).mount("#app");
