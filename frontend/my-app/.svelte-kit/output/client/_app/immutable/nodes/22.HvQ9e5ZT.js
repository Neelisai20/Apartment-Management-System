import{s as F,r as G}from"../chunks/scheduler.Dgi1yRhy.js";import{S as H,i as J,e as p,s as R,c as v,a as x,g as S,k as U,d as $,l as b,z as q,b as K,m,q as z,f as h,j as L,t as g,h as M,A as T,B as D,C as E,D as P}from"../chunks/index.i9izywSM.js";import{component as A}from"./23.ChvVrZFk.js";import{component as Q}from"./24.sm7Rqlpo.js";function W(a){let t,n;return t=new A({}),{c(){T(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){E(t,e,s),n=!0},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function X(a){let t,n;return t=new Q({}),{c(){T(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){E(t,e,s),n=!0},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Y(a){let t,n;return t=new A({}),{c(){T(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,s){E(t,e,s),n=!0},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function Z(a){let t,n,e,s,w="Inbox",C,i,V="Requests",y,u,o,l,_,I,B;const j=[Y,X,W],f=[];function N(r,c){return r[0]==="inbox"?0:r[0]==="requests"?1:2}return o=N(a),l=f[o]=j[o](a),{c(){t=p("div"),n=p("div"),e=p("div"),s=p("button"),s.textContent=w,C=R(),i=p("button"),i.textContent=V,y=R(),u=p("div"),l.c(),this.h()},l(r){t=v(r,"DIV",{class:!0});var c=x(t);n=v(c,"DIV",{class:!0});var d=x(n);e=v(d,"DIV",{});var k=x(e);s=v(k,"BUTTON",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-1p5epjh"&&(s.textContent=w),C=U(k),i=v(k,"BUTTON",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-awbye9"&&(i.textContent=V),k.forEach($),d.forEach($),y=U(c),u=v(c,"DIV",{class:!0});var O=x(u);l.l(O),O.forEach($),c.forEach($),this.h()},h(){b(s,"class","top-buttons svelte-1u6lwwh"),q(s,"active",a[0]==="inbox"),b(i,"class","top-buttons svelte-1u6lwwh"),q(i,"active",a[0]==="requests"),b(n,"class","buttons svelte-1u6lwwh"),b(u,"class","body-container svelte-1u6lwwh"),b(t,"class","main-container svelte-1u6lwwh")},m(r,c){K(r,t,c),m(t,n),m(n,e),m(e,s),m(e,C),m(e,i),m(t,y),m(t,u),f[o].m(u,null),_=!0,I||(B=[z(s,"click",a[1]),z(i,"click",a[2])],I=!0)},p(r,[c]){(!_||c&1)&&q(s,"active",r[0]==="inbox"),(!_||c&1)&&q(i,"active",r[0]==="requests");let d=o;o=N(r),o!==d&&(M(),h(f[d],1,1,()=>{f[d]=null}),L(),l=f[o],l||(l=f[o]=j[o](r),l.c()),g(l,1),l.m(u,null))},i(r){_||(g(l),_=!0)},o(r){h(l),_=!1},d(r){r&&$(t),f[o].d(),I=!1,G(B)}}}function ee(a,t,n){let e=null;function s(){n(0,e="inbox")}function w(){n(0,e="requests")}return[e,s,w]}class ae extends H{constructor(t){super(),J(this,t,ee,Z,F,{})}}export{ae as component};