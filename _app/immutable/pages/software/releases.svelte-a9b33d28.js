import{S as te,i as le,s as se,e as p,t as P,k as I,c as $,a as w,h as j,d as u,m as R,b,g as h,_ as g,j as z,w as q,l as B,x as H,y as S,q as k,o as A,B as N,a1 as ae,$ as U,f as re,a4 as W,a0 as oe,a5 as ie,E as F,n as ne,p as fe,C as ue,z as ce,A as _e}from"../../chunks/index-f4bc5dab.js";/* empty css                                                           */import{T as he,a as me}from"../../chunks/TabPane-79d05d1d.js";import{b as pe}from"../../chunks/paths-396f020f.js";import{S as $e}from"../../chunks/SvelteMarkdown-e860d6ff.js";import{R as be,C as Q}from"../../chunks/Row-29e0025b.js";import"../../chunks/index-d30ae72a.js";import"../../chunks/utils-f9eb197c.js";import"../../chunks/NavItem-10d38098.js";function Y(o,e,s){const t=o.slice();return t[7]=e[s],t}function ge(o){let e,s,t,l,r,a=o[2].login+"",n,i;return{c(){e=p("h3"),s=p("img"),l=I(),r=p("a"),n=P(a),this.h()},l(_){e=$(_,"H3",{});var c=w(e);s=$(c,"IMG",{src:!0,style:!0}),l=R(c),r=$(c,"A",{href:!0});var E=w(r);n=j(E,a),E.forEach(u),c.forEach(u),this.h()},h(){U(s.src,t=o[2].avatar_url)||b(s,"src",t),re(s,"width","20px"),b(r,"href",i=o[2].html_url)},m(_,c){h(_,e,c),g(e,s),g(e,l),g(e,r),g(r,n)},p(_,c){c&4&&!U(s.src,t=_[2].avatar_url)&&b(s,"src",t),c&4&&a!==(a=_[2].login+"")&&z(n,a),c&4&&i!==(i=_[2].html_url)&&b(r,"href",i)},d(_){_&&u(e)}}}function de(o){let e,s,t,l,r;return{c(){e=p("a"),s=p("img"),l=I(),r=P(o[3]),this.h()},l(a){e=$(a,"A",{href:!0,target:!0});var n=w(e);s=$(n,"IMG",{src:!0,alt:!0}),l=R(n),r=j(n,o[3]),n.forEach(u),this.h()},h(){U(s.src,t=pe+"/icons/label_black_24dp.svg")||b(s,"src",t),b(s,"alt","label"),b(e,"href",o[4]),b(e,"target","_blank")},m(a,n){h(a,e,n),g(e,s),g(e,l),g(e,r)},p(a,n){n&8&&z(r,a[3]),n&16&&b(e,"href",a[4])},d(a){a&&u(e)}}}function ve(o){let e,s;return{c(){e=p("div"),s=P(o[5]),this.h()},l(t){e=$(t,"DIV",{class:!0});var l=w(e);s=j(l,o[5]),l.forEach(u),this.h()},h(){b(e,"class","text-end")},m(t,l){h(t,e,l),g(e,s)},p(t,l){l&32&&z(s,t[5])},d(t){t&&u(e)}}}function ke(o){let e,s,t,l,r,a;return e=new Q({props:{xs:"4",$$slots:{default:[ge]},$$scope:{ctx:o}}}),t=new Q({props:{xs:"2",$$slots:{default:[de]},$$scope:{ctx:o}}}),r=new Q({props:{xs:"6",$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){q(e.$$.fragment),s=I(),q(t.$$.fragment),l=I(),q(r.$$.fragment)},l(n){H(e.$$.fragment,n),s=R(n),H(t.$$.fragment,n),l=R(n),H(r.$$.fragment,n)},m(n,i){S(e,n,i),h(n,s,i),S(t,n,i),h(n,l,i),S(r,n,i),a=!0},p(n,i){const _={};i&1028&&(_.$$scope={dirty:i,ctx:n}),e.$set(_);const c={};i&1048&&(c.$$scope={dirty:i,ctx:n}),t.$set(c);const E={};i&1056&&(E.$$scope={dirty:i,ctx:n}),r.$set(E)},i(n){a||(k(e.$$.fragment,n),k(t.$$.fragment,n),k(r.$$.fragment,n),a=!0)},o(n){A(e.$$.fragment,n),A(t.$$.fragment,n),A(r.$$.fragment,n),a=!1},d(n){N(e,n),n&&u(s),N(t,n),n&&u(l),N(r,n)}}}function Z(o){let e,s,t,l=o[7].name+"",r,a,n;return{c(){e=p("div"),s=p("h3"),t=p("a"),r=P(l),n=I(),this.h()},l(i){e=$(i,"DIV",{});var _=w(e);s=$(_,"H3",{});var c=w(s);t=$(c,"A",{href:!0});var E=w(t);r=j(E,l),E.forEach(u),c.forEach(u),n=R(_),_.forEach(u),this.h()},h(){b(t,"href",a=o[7].browser_download_url)},m(i,_){h(i,e,_),g(e,s),g(s,t),g(t,r),g(e,n)},p(i,_){_&64&&l!==(l=i[7].name+"")&&z(r,l),_&64&&a!==(a=i[7].browser_download_url)&&b(t,"href",a)},d(i){i&&u(e)}}}function we(o){let e,s,t,l,r,a,n,i,_,c,E,J,K,D,O,L,M,T;r=new be({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),c=new $e({props:{source:o[1]}});let V=o[6],d=[];for(let f=0;f<V.length;f+=1)d[f]=Z(Y(o,V,f));return{c(){e=p("h1"),s=p("a"),t=P(o[0]),l=I(),q(r.$$.fragment),a=I(),n=p("hr"),i=I(),_=p("p"),q(c.$$.fragment),E=I(),J=p("hr"),K=I(),D=p("h2"),O=P("Assets"),L=I();for(let f=0;f<d.length;f+=1)d[f].c();M=B(),this.h()},l(f){e=$(f,"H1",{});var m=w(e);s=$(m,"A",{href:!0,target:!0});var C=w(s);t=j(C,o[0]),C.forEach(u),m.forEach(u),l=R(f),H(r.$$.fragment,f),a=R(f),n=$(f,"HR",{}),i=R(f),_=$(f,"P",{});var X=w(_);H(c.$$.fragment,X),X.forEach(u),E=R(f),J=$(f,"HR",{}),K=R(f),D=$(f,"H2",{class:!0});var v=w(D);O=j(v,"Assets"),v.forEach(u),L=R(f);for(let G=0;G<d.length;G+=1)d[G].l(f);M=B(),this.h()},h(){b(s,"href",o[4]),b(s,"target","_blank"),b(D,"class","svelte-1w5i5q1")},m(f,m){h(f,e,m),g(e,s),g(s,t),h(f,l,m),S(r,f,m),h(f,a,m),h(f,n,m),h(f,i,m),h(f,_,m),S(c,_,null),h(f,E,m),h(f,J,m),h(f,K,m),h(f,D,m),g(D,O),h(f,L,m);for(let C=0;C<d.length;C+=1)d[C].m(f,m);h(f,M,m),T=!0},p(f,[m]){(!T||m&1)&&z(t,f[0]),(!T||m&16)&&b(s,"href",f[4]);const C={};m&1084&&(C.$$scope={dirty:m,ctx:f}),r.$set(C);const X={};if(m&2&&(X.source=f[1]),c.$set(X),m&64){V=f[6];let v;for(v=0;v<V.length;v+=1){const G=Y(f,V,v);d[v]?d[v].p(G,m):(d[v]=Z(G),d[v].c(),d[v].m(M.parentNode,M))}for(;v<d.length;v+=1)d[v].d(1);d.length=V.length}},i(f){T||(k(r.$$.fragment,f),k(c.$$.fragment,f),T=!0)},o(f){A(r.$$.fragment,f),A(c.$$.fragment,f),T=!1},d(f){f&&u(e),f&&u(l),N(r,f),f&&u(a),f&&u(n),f&&u(i),f&&u(_),N(c),f&&u(E),f&&u(J),f&&u(K),f&&u(D),f&&u(L),ae(d,f),f&&u(M)}}}function Ee(o,e,s){let{name:t}=e,{body:l}=e,{author:r}=e,{tag_name:a}=e,{html_url:n}=e,{published_at:i}=e,{assets:_}=e;return o.$$set=c=>{"name"in c&&s(0,t=c.name),"body"in c&&s(1,l=c.body),"author"in c&&s(2,r=c.author),"tag_name"in c&&s(3,a=c.tag_name),"html_url"in c&&s(4,n=c.html_url),"published_at"in c&&s(5,i=c.published_at),"assets"in c&&s(6,_=c.assets)},[t,l,r,a,n,i,_]}class Ie extends te{constructor(e){super(),le(this,e,Ee,we,se,{name:0,body:1,author:2,tag_name:3,html_url:4,published_at:5,assets:6})}}function y(o,e,s){const t=o.slice();return t[4]=e[s],t}function Re(o){let e,s=o[7].message+"",t;return{c(){e=p("p"),t=P(s),this.h()},l(l){e=$(l,"P",{style:!0});var r=w(e);t=j(r,s),r.forEach(u),this.h()},h(){re(e,"color","red")},m(l,r){h(l,e,r),g(e,t)},p(l,r){r&1&&s!==(s=l[7].message+"")&&z(t,s)},i:F,o:F,d(l){l&&u(e)}}}function Ae(o){let e,s,t;return s=new he({props:{vertical:!0,pills:!0,$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){e=p("div"),q(s.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0});var r=w(e);H(s.$$.fragment,r),r.forEach(u),this.h()},h(){b(e,"class","content")},m(l,r){h(l,e,r),S(s,e,null),t=!0},p(l,r){const a={};r&257&&(a.$$scope={dirty:r,ctx:l}),s.$set(a)},i(l){t||(k(s.$$.fragment,l),t=!0)},o(l){A(s.$$.fragment,l),t=!1},d(l){l&&u(e),N(s)}}}function x(o){let e,s,t=o[3],l=[];for(let a=0;a<t.length;a+=1)l[a]=ee(y(o,t,a));const r=a=>A(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=B()},l(a){for(let n=0;n<l.length;n+=1)l[n].l(a);e=B()},m(a,n){for(let i=0;i<l.length;i+=1)l[i].m(a,n);h(a,e,n),s=!0},p(a,n){if(n&1){t=a[3];let i;for(i=0;i<t.length;i+=1){const _=y(a,t,i);l[i]?(l[i].p(_,n),k(l[i],1)):(l[i]=ee(_),l[i].c(),k(l[i],1),l[i].m(e.parentNode,e))}for(ne(),i=t.length;i<l.length;i+=1)r(i);fe()}},i(a){if(!s){for(let n=0;n<t.length;n+=1)k(l[n]);s=!0}},o(a){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)A(l[n]);s=!1},d(a){ae(l,a),a&&u(e)}}}function Ce(o){let e,s,t;const l=[o[4]];let r={};for(let a=0;a<l.length;a+=1)r=ue(r,l[a]);return e=new Ie({props:r}),{c(){q(e.$$.fragment),s=I()},l(a){H(e.$$.fragment,a),s=R(a)},m(a,n){S(e,a,n),h(a,s,n),t=!0},p(a,n){const i=n&1?ce(l,[_e(a[4])]):{};e.$set(i)},i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){A(e.$$.fragment,a),t=!1},d(a){N(e,a),a&&u(s)}}}function ee(o){let e,s;return e=new me({props:{tabId:o[4].id,tab:o[4].tag_name,$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,l){S(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.tabId=t[4].id),l&1&&(r.tab=t[4].tag_name),l&257&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){A(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function qe(o){let e,s,t=o[3]&&x(o);return{c(){t&&t.c(),e=B()},l(l){t&&t.l(l),e=B()},m(l,r){t&&t.m(l,r),h(l,e,r),s=!0},p(l,r){l[3]?t?(t.p(l,r),r&1&&k(t,1)):(t=x(l),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(ne(),A(t,1,1,()=>{t=null}),fe())},i(l){s||(k(t),s=!0)},o(l){A(t),s=!1},d(l){t&&t.d(l),l&&u(e)}}}function He(o){let e,s;return{c(){e=p("p"),s=P("...waiting")},l(t){e=$(t,"P",{});var l=w(e);s=j(l,"...waiting"),l.forEach(u)},m(t,l){h(t,e,l),g(e,s)},p:F,i:F,o:F,d(t){t&&u(e)}}}function Se(o){let e,s,t,l,r={ctx:o,current:null,token:null,hasCatch:!0,pending:He,then:Ae,catch:Re,value:3,error:7,blocks:[,,,]};return W(t=o[0],r),{c(){e=I(),s=B(),r.block.c(),this.h()},l(a){oe('[data-svelte="svelte-1cnrxsu"]',document.head).forEach(u),e=R(a),s=B(),r.block.l(a),this.h()},h(){document.title="Releases"},m(a,n){h(a,e,n),h(a,s,n),r.block.m(a,r.anchor=n),r.mount=()=>s.parentNode,r.anchor=s,l=!0},p(a,[n]){o=a,r.ctx=o,n&1&&t!==(t=o[0])&&W(t,r)||ie(r,o,n)},i(a){l||(k(r.block),l=!0)},o(a){for(let n=0;n<3;n+=1){const i=r.blocks[n];A(i)}l=!1},d(a){a&&u(e),a&&u(s),r.block.d(a),r.token=null,r=null}}}async function Xe(){const e=await fetch("https://api.github.com/repos/BEXIS2/Core/releases");return console.log("load releases"),{status:e.status,props:{bexis2releases:e.ok&&await e.json()}}}function Ne(o,e,s){let{bexis2releases:t=""}=e,{selected:l=t[0]}=e;return o.$$set=r=>{"bexis2releases"in r&&s(0,t=r.bexis2releases),"selected"in r&&s(1,l=r.selected)},[t,l]}class Fe extends te{constructor(e){super(),le(this,e,Ne,Se,se,{bexis2releases:0,selected:1})}}export{Fe as default,Xe as load};
