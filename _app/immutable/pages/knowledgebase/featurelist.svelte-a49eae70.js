import{S as m,i as u,s as d,a as f,l as _,w as h,a0 as p,h as i,c as v,m as w,n as $,x as y,b as l,y as S,f as g,t as k,B as x}from"../../chunks/index-6ade26a0.js";import{S as E}from"../../chunks/SvelteMarkdown-5ed5c8ed.js";function b(o){let e,a,s,n;return s=new E({props:{source:o[0]}}),{c(){e=f(),a=_("div"),h(s.$$.fragment),this.h()},l(t){p('[data-svelte="svelte-l7aw16"]',document.head).forEach(i),e=v(t),a=w(t,"DIV",{});var c=$(a);y(s.$$.fragment,c),c.forEach(i),this.h()},h(){document.title="Feature List"},m(t,r){l(t,e,r),l(t,a,r),S(s,a,null),n=!0},p(t,[r]){const c={};r&1&&(c.source=t[0]),s.$set(c)},i(t){n||(g(s.$$.fragment,t),n=!0)},o(t){k(s.$$.fragment,t),n=!1},d(t){t&&i(e),t&&i(a),x(s)}}}async function F(){const e=await fetch("https://raw.githubusercontent.com/BEXIS2/Documents/master/System/system%20functionalities.md");return{status:e.status,props:{doc:e.ok&&await e.text()}}}function q(o,e,a){let{doc:s=""}=e;return o.$$set=n=>{"doc"in n&&a(0,s=n.doc)},[s]}class I extends m{constructor(e){super(),u(this,e,q,b,d,{doc:0})}}export{I as default,F as load};
