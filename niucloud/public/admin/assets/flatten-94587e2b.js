import{a as l,b as r}from"./_Uint8Array-99b916e9.js";import{aW as b,aR as h}from"./base-04829be5.js";var e=b?b.isConcatSpreadable:void 0;function x(n){return h(n)||l(n)||!!(e&&n&&n[e])}function m(n,f,o,s,a){var t=-1,g=n.length;for(o||(o=x),a||(a=[]);++t<g;){var i=n[t];f>0&&o(i)?f>1?m(i,f-1,o,s,a):r(a,i):s||(a[a.length]=i)}return a}function S(n){var f=n==null?0:n.length;return f?m(n,1):[]}export{m as b,S as f};
