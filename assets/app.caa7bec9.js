import{d as p,I as s,Z as i,u,h as c,l,$ as d,a0 as f,a1 as m,a2 as h,a3 as A,a4 as g,a5 as P,a6 as v,a7 as C,a8 as y,a9 as _,aa as b,ab as E,ac as R}from"./chunks/framework.1bd30c58.js";import{t as w}from"./chunks/theme.85adbb66.js";function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,enhanceApp(t){a.enhanceApp&&a.enhanceApp(t),e.enhanceApp&&e.enhanceApp(t)}}}return e}const n=r(w),D=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=T(),a=S();a.provide(A,e);const t=g(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",C),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:y}),{app:a,router:e,data:t}}function S(){return _(D)}function T(){let e=s,a;return b(t=>{let o=E(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),R(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
