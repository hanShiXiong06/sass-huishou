import{b as h,r as w,R as B,a4 as I,U as f,x as N,Q as S,y as V,E as _,m as A,q as T,i as E,ac as P}from"./base-04829be5.js";import{i as O,v as R,T as j}from"./index-30df2c14.js";import{ak as b,i as q,av as m,aj as C}from"./index-7e933ae4.js";import{u as Z}from"./index-a2524300.js";function z(t){let e;const l=h("loading"),o=w(!1),s=B({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(n){s.text=n}function c(){const n=s.parent;if(!n.vLoadingAddClassList){let u=n.getAttribute("loading-number");u=Number.parseInt(u)-1,u?n.setAttribute("loading-number",u.toString()):(b(n,l.bm("parent","relative")),n.removeAttribute("loading-number")),b(n,l.bm("parent","hidden"))}d(),v.unmount()}function d(){var n,u;(u=(n=r.$el)==null?void 0:n.parentNode)==null||u.removeChild(r.$el)}function p(){var n;t.beforeClose&&!t.beforeClose()||(o.value=!0,clearTimeout(e),e=window.setTimeout(i,400),s.visible=!1,(n=t.closed)==null||n.call(t))}function i(){if(!o.value)return;const n=s.parent;o.value=!1,n.vLoadingAddClassList=void 0,c()}const v=O({name:"ElLoading",setup(){return()=>{const n=s.spinner||s.svg,u=f("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"0 0 50 50",...n?{innerHTML:n}:{}},[f("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),$=s.text?f("p",{class:l.b("text")},[s.text]):void 0;return f(j,{name:l.b("fade"),onAfterLeave:i},{default:N(()=>[S(V("div",{style:{backgroundColor:s.background||""},class:[l.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[f("div",{class:l.b("spinner")},[u,$])]),[[R,s.visible]])])})}}}),r=v.mount(document.createElement("div"));return{...I(s),setText:a,removeElLoadingChild:d,close:p,handleAfterLeave:i,vm:r,get $el(){return r.$el}}}let g;const D=function(t={}){if(!q)return;const e=F(t);if(e.fullscreen&&g)return g;const l=z({...e,closed:()=>{var s;(s=e.closed)==null||s.call(e),e.fullscreen&&(g=void 0)}});H(e,e.parent,l),L(e,e.parent,l),e.parent.vLoadingAddClassList=()=>L(e,e.parent,l);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(g=l),l},F=t=>{var e,l,o,s;let a;return A(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(o=t.lock)!=null?o:!1,customClass:t.customClass||"",visible:(s=t.visible)!=null?s:!0,target:a}},H=async(t,e,l)=>{const{nextZIndex:o}=Z(),s={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),s.zIndex=o();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await _();for(const a of["top","left"]){const c=a==="top"?"scrollTop":"scrollLeft";s[a]=`${t.target.getBoundingClientRect()[a]+document.body[c]+document.documentElement[c]-Number.parseInt(m(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])s[a]=`${t.target.getBoundingClientRect()[a]}px`}else l.originalPosition.value=m(e,"position");for(const[a,c]of Object.entries(s))l.$el.style[a]=c},L=(t,e,l)=>{const o=h("loading");["absolute","fixed","sticky"].includes(l.originalPosition.value)?b(e,o.bm("parent","relative")):C(e,o.bm("parent","relative")),t.fullscreen&&t.lock?C(e,o.bm("parent","hidden")):b(e,o.bm("parent","hidden"))},x=Symbol("ElLoading"),k=(t,e)=>{var l,o,s,a;const c=e.instance,d=r=>T(e.value)?e.value[r]:void 0,p=r=>{const n=A(r)&&(c==null?void 0:c[r])||r;return n&&w(n)},i=r=>p(d(r)||t.getAttribute(`element-loading-${P(r)}`)),y=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,v={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:y,target:(o=d("target"))!=null?o:y?void 0:t,body:(s=d("body"))!=null?s:e.modifiers.body,lock:(a=d("lock"))!=null?a:e.modifiers.lock};t[x]={options:v,instance:D(v)}},K=(t,e)=>{for(const l of Object.keys(e))E(e[l])&&(e[l].value=t[l])},G={mounted(t,e){e.value&&k(t,e)},updated(t,e){const l=t[x];e.oldValue!==e.value&&(e.value&&!e.oldValue?k(t,e):e.value&&e.oldValue?T(e.value)&&K(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[x])==null||e.instance.close()}};export{D as L,G as v};
