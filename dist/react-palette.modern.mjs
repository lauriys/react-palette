import e from"node-vibrant";import t from"lodash.camelcase";import r from"lodash.invoke";import{jsx as a,Fragment as o}from"react/jsx-runtime";import n from"react";function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}async function l(a){const o=await e.from(a).getPalette();return Object.keys(o).reduce((e,a)=>c({},e,{[t(a)]:r(o,[a,"getHex"])}),{})}const s={loading:!0,data:{},error:void 0};function i(e,t){switch(t.type){case"getPalette":return s;case"resolvePalette":return c({},e,{data:t.payload,loading:!1});case"rejectPalette":return c({},e,{error:t.payload,loading:!1})}}function u(e){const[t,r]=n.useReducer(i,s);return n.useEffect(()=>{let t=!0;return!t||r({type:"getPalette"}),l(e).then(e=>{!t||r({type:"resolvePalette",payload:e})}).catch(e=>{!t||r({type:"rejectPalette",payload:e})}),()=>{t=!1}},[e]),t}const d=({src:e,children:t})=>{const r=u(e);return a(o,{children:t(r)})};export{d as Palette,d as default,l as getPalette,u as usePalette};
//# sourceMappingURL=react-palette.modern.mjs.map
