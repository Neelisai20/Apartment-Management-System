import{s as j,h as ne,n as w,r as Z,o as oe}from"../chunks/scheduler.Dgi1yRhy.js";import{S as F,i as H,e as v,s as I,c as k,a as T,k as q,g as N,d as b,l as m,r as S,b as z,m as c,x as Q,q as P,y as ae,n as R,o as U,p as V,f as L,j as re,t as M,h as ie,A as ee,B as te,C as le,D as se}from"../chunks/index.i9izywSM.js";import{e as W,u as ce,d as ue}from"../chunks/each.CvcTpb99.js";import{e as fe}from"../chunks/global.DC77a2-V.js";function _e(r){let e,t,l,s,o,n="All",a,u="tenant id",i,_="Payment status",h,$="Date",x,g,C="Search",y,d;return{c(){e=v("div"),t=v("input"),l=I(),s=v("select"),o=v("option"),o.textContent=n,a=v("option"),a.textContent=u,i=v("option"),i.textContent=_,h=v("option"),h.textContent=$,x=I(),g=v("button"),g.textContent=C,this.h()},l(f){e=k(f,"DIV",{class:!0});var p=T(e);t=k(p,"INPUT",{type:!0,placeholder:!0,class:!0}),l=q(p),s=k(p,"SELECT",{id:!0,class:!0});var E=T(s);o=k(E,"OPTION",{class:!0,"data-svelte-h":!0}),N(o)!=="svelte-1xs8eny"&&(o.textContent=n),a=k(E,"OPTION",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-16ffs2d"&&(a.textContent=u),i=k(E,"OPTION",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-1yz68f3"&&(i.textContent=_),h=k(E,"OPTION",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-e4v5e7"&&(h.textContent=$),E.forEach(b),x=q(p),g=k(p,"BUTTON",{class:!0,"data-svelte-h":!0}),N(g)!=="svelte-1w1tdxi"&&(g.textContent=C),p.forEach(b),this.h()},h(){m(t,"type","text"),m(t,"placeholder","Search..."),m(t,"class","svelte-1ql0h6l"),o.__value="user",S(o,o.__value),m(o,"class","svelte-1ql0h6l"),a.__value="employee",S(a,a.__value),m(a,"class","svelte-1ql0h6l"),i.__value="owner",S(i,i.__value),m(i,"class","svelte-1ql0h6l"),h.__value="admin",S(h,h.__value),m(h,"class","svelte-1ql0h6l"),m(s,"id","type"),m(s,"class","svelte-1ql0h6l"),r[1]===void 0&&ne(()=>r[4].call(s)),m(g,"class","svelte-1ql0h6l"),m(e,"class","search-bar svelte-1ql0h6l")},m(f,p){z(f,e,p),c(e,t),S(t,r[0]),c(e,l),c(e,s),c(s,o),c(s,a),c(s,i),c(s,h),Q(s,r[1],!0),c(e,x),c(e,g),y||(d=[P(t,"input",r[3]),P(t,"input",r[2]),P(s,"change",r[4]),P(g,"click",r[2])],y=!0)},p(f,[p]){p&1&&t.value!==f[0]&&S(t,f[0]),p&2&&Q(s,f[1])},i:w,o:w,d(f){f&&b(e),y=!1,Z(d)}}}function he(r,e,t){let l="",s="";function o(){console.log("Search term:",l)}function n(){l=this.value,t(0,l)}function a(){s=ae(this),t(1,s)}return[l,s,o,n,a]}class pe extends F{constructor(e){super(),H(this,e,he,_e,j,{})}}function X(r,e,t){const l=r.slice();return l[3]=e[t],l}function de(r){let e,t="No complaints available.";return{c(){e=v("p"),e.textContent=t,this.h()},l(l){e=k(l,"P",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-198t74u"&&(e.textContent=t),this.h()},h(){m(e,"class","svelte-4ixiz")},m(l,s){z(l,e,s)},p:w,d(l){l&&b(e)}}}function me(r){let e,t=[],l=new Map,s=W(r[0]);const o=n=>n[3]._id;for(let n=0;n<s.length;n+=1){let a=X(r,s,n),u=o(a);l.set(u,t[n]=Y(u,a))}return{c(){e=v("ul");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=k(n,"UL",{class:!0});var a=T(e);for(let u=0;u<t.length;u+=1)t[u].l(a);a.forEach(b),this.h()},h(){m(e,"class","svelte-4ixiz")},m(n,a){z(n,e,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null)},p(n,a){a&3&&(s=W(n[0]),t=ce(t,a,o,1,n,s,l,e,ue,Y,null,X))},d(n){n&&b(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function Y(r,e){let t,l,s,o=e[3].name+"",n,a,u,i=e[3].complaint+"",_,h,$,x=e[3].description+"",g,C,y,d="Mark as Done",f,p,E;function A(){return e[2](e[3])}return{key:r,first:null,c(){t=v("li"),l=v("div"),s=v("h3"),n=R(o),a=I(),u=v("p"),_=R(i),h=I(),$=v("p"),g=R(x),C=I(),y=v("button"),y.textContent=d,f=I(),this.h()},l(B){t=k(B,"LI",{class:!0});var O=T(t);l=k(O,"DIV",{});var D=T(l);s=k(D,"H3",{class:!0});var G=T(s);n=U(G,o),G.forEach(b),a=q(D),u=k(D,"P",{class:!0});var J=T(u);_=U(J,i),J.forEach(b),h=q(D),$=k(D,"P",{class:!0});var K=T($);g=U(K,x),K.forEach(b),D.forEach(b),C=q(O),y=k(O,"BUTTON",{class:!0,"data-svelte-h":!0}),N(y)!=="svelte-1ocndk7"&&(y.textContent=d),f=q(O),O.forEach(b),this.h()},h(){m(s,"class","svelte-4ixiz"),m(u,"class","svelte-4ixiz"),m($,"class","svelte-4ixiz"),m(y,"class","mark-as-done-button svelte-4ixiz"),m(t,"class","svelte-4ixiz"),this.first=t},m(B,O){z(B,t,O),c(t,l),c(l,s),c(s,n),c(l,a),c(l,u),c(u,_),c(l,h),c(l,$),c($,g),c(t,C),c(t,y),c(t,f),p||(E=P(y,"click",A),p=!0)},p(B,O){e=B,O&1&&o!==(o=e[3].name+"")&&V(n,o),O&1&&i!==(i=e[3].complaint+"")&&V(_,i),O&1&&x!==(x=e[3].description+"")&&V(g,x)},d(B){B&&b(t),p=!1,E()}}}function ve(r){let e;function t(o,n){return o[0].length>0?me:de}let l=t(r),s=l(r);return{c(){e=v("div"),s.c()},l(o){e=k(o,"DIV",{});var n=T(e);s.l(n),n.forEach(b)},m(o,n){z(o,e,n),s.m(e,null)},p(o,[n]){l===(l=t(o))&&s?s.p(o,n):(s.d(1),s=l(o),s&&(s.c(),s.m(e,null)))},i:w,o:w,d(o){o&&b(e),s.d()}}}function ke(r,e,t){let{complaints:l=[]}=e;function s(n){t(0,l=l.filter(a=>a._id!==n))}const o=n=>s(n._id);return r.$$set=n=>{"complaints"in n&&t(0,l=n.complaints)},[l,s,o]}class be extends F{constructor(e){super(),H(this,e,ke,ve,j,{complaints:0})}}function ge(r){let e,t;return e=new be({props:{complaints:r[3]}}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,s){le(e,l,s),t=!0},p(l,s){const o={};s&8&&(o.complaints=l[3]),e.$set(o)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){se(e,l)}}}function Ce(r){let e,t;return e=new pe({}),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,s){le(e,l,s),t=!0},p:w,i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){se(e,l)}}}function ye(r){let e,t,l,s,o,n,a,u,i,_,h,$,x;const g=[Ce,ge],C=[];function y(d,f){return d[2]?0:1}return i=y(r),_=C[i]=g[i](r),{c(){e=v("div"),t=v("div"),l=v("button"),s=R(r[0]),o=I(),n=v("button"),a=R(r[1]),u=I(),_.c(),this.h()},l(d){e=k(d,"DIV",{});var f=T(e);t=k(f,"DIV",{class:!0});var p=T(t);l=k(p,"BUTTON",{class:!0});var E=T(l);s=U(E,r[0]),E.forEach(b),o=q(p),n=k(p,"BUTTON",{class:!0});var A=T(n);a=U(A,r[1]),A.forEach(b),p.forEach(b),u=q(f),_.l(f),f.forEach(b),this.h()},h(){m(l,"class","custom-button rental-button svelte-1kyihox"),m(n,"class","custom-button complaints-button svelte-1kyihox"),m(t,"class","button-container svelte-1kyihox")},m(d,f){z(d,e,f),c(e,t),c(t,l),c(l,s),c(t,o),c(t,n),c(n,a),c(e,u),C[i].m(e,null),h=!0,$||(x=[P(l,"click",r[4]),P(n,"click",r[5])],$=!0)},p(d,[f]){(!h||f&1)&&V(s,d[0]),(!h||f&2)&&V(a,d[1]);let p=i;i=y(d),i===p?C[i].p(d,f):(ie(),L(C[p],1,1,()=>{C[p]=null}),re(),_=C[i],_?_.p(d,f):(_=C[i]=g[i](d),_.c()),M(_,1),_.m(e,null))},i(d){h||(M(_),h=!0)},o(d){L(_),h=!1},d(d){d&&b(e),C[i].d(),$=!1,Z(x)}}}function $e(r,e,t){let l="Rental Records",s="Complaints",o=!1,n=[];function a(){t(2,o=!0)}async function u(){try{const _=await fetch(`http://localhost:3000/api/complaints/getComplaints?block_no=${fe}`),h=await _.json();console.log("Response from server:",h),_.ok?(t(3,n=h.response[0].complaints),console.log("Complaints data:",n)):console.error("Failed to fetch complaints:",h.message)}catch(_){console.error("Error fetching complaints:",_.message)}}oe(()=>{i()});function i(){t(0,l="Rental Records"),t(1,s="Complaints"),t(2,o=!1)}return[l,s,o,n,a,u]}class Ie extends F{constructor(e){super(),H(this,e,$e,ye,j,{})}}export{Ie as component};
