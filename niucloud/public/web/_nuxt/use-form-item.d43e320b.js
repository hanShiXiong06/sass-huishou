import{f as c,a as f}from"./index.e898cd67.js";import{N as z,s as t,r as d,cg as b,O as v,u as m,b as y,aj as F,b0 as h,aJ as w}from"./entry.76039fcc.js";import{u as _}from"./index.d919d3b5.js";const I=u=>{const o=z();return t(()=>{var s,l;return(l=(s=o==null?void 0:o.proxy)==null?void 0:s.$props)==null?void 0:l[u]})},S=(u,o={})=>{const s=d(void 0),l=o.prop?s:I("size"),e=o.global?s:b(),a=o.form?{size:void 0}:v(c,void 0),n=o.formItem?{size:void 0}:v(f,void 0);return t(()=>l.value||m(u)||(n==null?void 0:n.size)||(a==null?void 0:a.size)||e.value||"")},U=u=>{const o=I("disabled"),s=v(c,void 0);return t(()=>o.value||m(u)||(s==null?void 0:s.disabled)||!1)},B=()=>{const u=v(c,void 0),o=v(f,void 0);return{form:u,formItem:o}},D=(u,{formItemContext:o,disableIdGeneration:s,disableIdManagement:l})=>{s||(s=d(!1)),l||(l=d(!1));const e=d();let a;const n=t(()=>{var i;return!!(!u.label&&o&&o.inputIds&&((i=o.inputIds)==null?void 0:i.length)<=1)});return y(()=>{a=F([h(u,"id"),s],([i,p])=>{const r=i??(p?void 0:_().value);r!==e.value&&(o!=null&&o.removeInputId&&(e.value&&o.removeInputId(e.value),!(l!=null&&l.value)&&!p&&r&&o.addInputId(r)),e.value=r)},{immediate:!0})}),w(()=>{a&&a(),o!=null&&o.removeInputId&&e.value&&o.removeInputId(e.value)}),{isLabeledByFormItem:n,inputId:e}};export{S as a,B as b,D as c,U as u};
