import{c0 as oe,b$ as z,bE as wt,b9 as xe,bx as re,c1 as xt,b7 as tt,bv as St,c2 as Se,c3 as ae,bR as Tt,c4 as O,a9 as V,bf as Ct,s as v,N as Et,c5 as It,r as k,ab as Be,p as At,bH as _t,M as ue,L as Fe,aa as jt,aA as ce,a as at,ax as Pt,a$ as $t,q as Re,ai as pe,c6 as kt,c7 as zt,c8 as Ot,aH as Vt,aj as de,ak as P,b as Mt,b0 as Nt,a0 as Bt,a1 as Ft,o as y,e as S,k as g,F as fe,y as m,u as n,x as J,j as $,c as C,w as H,A as Q,E as D,ay as ve,f as Rt,aP as Lt,al as Ht,aS as Dt,t as ee,z as Kt,B as Wt,aY as Le,C as Ut}from"./entry.76039fcc.js";import{b as Gt,c as Yt,a as qt,u as Xt}from"./use-form-item.d43e320b.js";import{i as Zt,d as He}from"./index.e898cd67.js";var Jt=oe(z,"WeakMap");const be=Jt;var Qt=9007199254740991;function ot(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Qt}function ea(e){return e!=null&&ot(e.length)&&!wt(e)}var ta=Object.prototype;function aa(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ta;return e===t}function oa(e,r){for(var t=-1,o=Array(e);++t<e;)o[t]=r(t);return o}var ra="[object Arguments]";function De(e){return xe(e)&&re(e)==ra}var rt=Object.prototype,na=rt.hasOwnProperty,sa=rt.propertyIsEnumerable,ia=De(function(){return arguments}())?De:function(e){return xe(e)&&na.call(e,"callee")&&!sa.call(e,"callee")};const la=ia;function ua(){return!1}var nt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ke=nt&&typeof module=="object"&&module&&!module.nodeType&&module,ca=Ke&&Ke.exports===nt,We=ca?z.Buffer:void 0,pa=We?We.isBuffer:void 0,da=pa||ua;const fa=da;var va="[object Arguments]",ya="[object Array]",ba="[object Boolean]",ga="[object Date]",ha="[object Error]",ma="[object Function]",wa="[object Map]",xa="[object Number]",Sa="[object Object]",Ta="[object RegExp]",Ca="[object Set]",Ea="[object String]",Ia="[object WeakMap]",Aa="[object ArrayBuffer]",_a="[object DataView]",ja="[object Float32Array]",Pa="[object Float64Array]",$a="[object Int8Array]",ka="[object Int16Array]",za="[object Int32Array]",Oa="[object Uint8Array]",Va="[object Uint8ClampedArray]",Ma="[object Uint16Array]",Na="[object Uint32Array]",p={};p[ja]=p[Pa]=p[$a]=p[ka]=p[za]=p[Oa]=p[Va]=p[Ma]=p[Na]=!0;p[va]=p[ya]=p[Aa]=p[ba]=p[_a]=p[ga]=p[ha]=p[ma]=p[wa]=p[xa]=p[Sa]=p[Ta]=p[Ca]=p[Ea]=p[Ia]=!1;function Ba(e){return xe(e)&&ot(e.length)&&!!p[re(e)]}function Fa(e){return function(r){return e(r)}}var st=typeof exports=="object"&&exports&&!exports.nodeType&&exports,K=st&&typeof module=="object"&&module&&!module.nodeType&&module,Ra=K&&K.exports===st,ye=Ra&&xt.process,La=function(){try{var e=K&&K.require&&K.require("util").types;return e||ye&&ye.binding&&ye.binding("util")}catch{}}();const Ue=La;var Ge=Ue&&Ue.isTypedArray,Ha=Ge?Fa(Ge):Ba;const Da=Ha;var Ka=Object.prototype,Wa=Ka.hasOwnProperty;function Ua(e,r){var t=tt(e),o=!t&&la(e),s=!t&&!o&&fa(e),i=!t&&!o&&!s&&Da(e),u=t||o||s||i,h=u?oa(e.length,String):[],f=h.length;for(var d in e)(r||Wa.call(e,d))&&!(u&&(d=="length"||s&&(d=="offset"||d=="parent")||i&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||St(d,f)))&&h.push(d);return h}function Ga(e,r){return function(t){return e(r(t))}}var Ya=Ga(Object.keys,Object);const qa=Ya;var Xa=Object.prototype,Za=Xa.hasOwnProperty;function Ja(e){if(!aa(e))return qa(e);var r=[];for(var t in Object(e))Za.call(e,t)&&t!="constructor"&&r.push(t);return r}function Qa(e){return ea(e)?Ua(e):Ja(e)}function eo(e,r){for(var t=-1,o=r.length,s=e.length;++t<o;)e[s+t]=r[t];return e}function to(){this.__data__=new Se,this.size=0}function ao(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function oo(e){return this.__data__.get(e)}function ro(e){return this.__data__.has(e)}var no=200;function so(e,r){var t=this.__data__;if(t instanceof Se){var o=t.__data__;if(!ae||o.length<no-1)return o.push([e,r]),this.size=++t.size,this;t=this.__data__=new Tt(o)}return t.set(e,r),this.size=t.size,this}function W(e){var r=this.__data__=new Se(e);this.size=r.size}W.prototype.clear=to;W.prototype.delete=ao;W.prototype.get=oo;W.prototype.has=ro;W.prototype.set=so;function io(e,r){for(var t=-1,o=e==null?0:e.length,s=0,i=[];++t<o;){var u=e[t];r(u,t,e)&&(i[s++]=u)}return i}function lo(){return[]}var uo=Object.prototype,co=uo.propertyIsEnumerable,Ye=Object.getOwnPropertySymbols,po=Ye?function(e){return e==null?[]:(e=Object(e),io(Ye(e),function(r){return co.call(e,r)}))}:lo;const fo=po;function vo(e,r,t){var o=r(e);return tt(e)?o:eo(o,t(e))}function Go(e){return vo(e,Qa,fo)}var yo=oe(z,"DataView");const ge=yo;var bo=oe(z,"Promise");const he=bo;var go=oe(z,"Set");const me=go;var qe="[object Map]",ho="[object Object]",Xe="[object Promise]",Ze="[object Set]",Je="[object WeakMap]",Qe="[object DataView]",mo=O(ge),wo=O(ae),xo=O(he),So=O(me),To=O(be),A=re;(ge&&A(new ge(new ArrayBuffer(1)))!=Qe||ae&&A(new ae)!=qe||he&&A(he.resolve())!=Xe||me&&A(new me)!=Ze||be&&A(new be)!=Je)&&(A=function(e){var r=re(e),t=r==ho?e.constructor:void 0,o=t?O(t):"";if(o)switch(o){case mo:return Qe;case wo:return qe;case xo:return Xe;case So:return Ze;case To:return Je}return r});const Yo=A;var Co=z.Uint8Array;const qo=Co,Eo=(e,r)=>{if(!V)return!1;const t={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(r)],o=Ct(e,t);return["scroll","auto","overlay"].some(s=>o.includes(s))},Xo=(e,r)=>{if(!V)return;let t=e;for(;t;){if([window,document,document.documentElement].includes(t))return window;if(Eo(t,r))return t;t=t.parentNode}return t};let te;const Zo=e=>{var r;if(!V)return 0;if(te!==void 0)return te;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const o=t.offsetWidth;t.style.overflow="scroll";const s=document.createElement("div");s.style.width="100%",t.appendChild(s);const i=s.offsetWidth;return(r=t.parentNode)==null||r.removeChild(t),te=o-i,te};function Jo(e,r){if(!V)return;if(!r){e.scrollTop=0;return}const t=[];let o=r.offsetParent;for(;o!==null&&e!==o&&e.contains(o);)t.push(o),o=o.offsetParent;const s=r.offsetTop+t.reduce((f,d)=>f+d.offsetTop,0),i=s+r.offsetHeight,u=e.scrollTop,h=u+e.clientHeight;s<u?e.scrollTop=s:i>h&&(e.scrollTop=i-e.clientHeight)}const we="update:modelValue",Qo="change",Io=()=>V&&/firefox/i.test(window.navigator.userAgent),Ao=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),_o=["class","style"],jo=/^on[A-Z]/,Po=(e={})=>{const{excludeListeners:r=!1,excludeKeys:t}=e,o=v(()=>((t==null?void 0:t.value)||[]).concat(_o)),s=Et();return s?v(()=>{var i;return It(Object.entries((i=s.proxy)==null?void 0:i.$attrs).filter(([u])=>!o.value.includes(u)&&!(r&&jo.test(u))))}):v(()=>({}))};function $o(e){const r=k();function t(){if(e.value==null)return;const{selectionStart:s,selectionEnd:i,value:u}=e.value;if(s==null||i==null)return;const h=u.slice(0,Math.max(0,s)),f=u.slice(Math.max(0,i));r.value={selectionStart:s,selectionEnd:i,value:u,beforeTxt:h,afterTxt:f}}function o(){if(e.value==null||r.value==null)return;const{value:s}=e.value,{beforeTxt:i,afterTxt:u,selectionStart:h}=r.value;if(i==null||u==null||h==null)return;let f=s.length;if(s.endsWith(u))f=s.length-u.length;else if(s.startsWith(i))f=i.length;else{const d=i[h-1],E=s.indexOf(d,h-1);E!==-1&&(f=E+1)}e.value.setSelectionRange(f,f)}return[t,o]}let w;const ko=`
  height:0 !important;
  visibility:hidden !important;
  ${Io()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,zo=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Oo(e){const r=window.getComputedStyle(e),t=r.getPropertyValue("box-sizing"),o=Number.parseFloat(r.getPropertyValue("padding-bottom"))+Number.parseFloat(r.getPropertyValue("padding-top")),s=Number.parseFloat(r.getPropertyValue("border-bottom-width"))+Number.parseFloat(r.getPropertyValue("border-top-width"));return{contextStyle:zo.map(u=>`${u}:${r.getPropertyValue(u)}`).join(";"),paddingSize:o,borderSize:s,boxSizing:t}}function et(e,r=1,t){var o;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:s,borderSize:i,boxSizing:u,contextStyle:h}=Oo(e);w.setAttribute("style",`${h};${ko}`),w.value=e.value||e.placeholder||"";let f=w.scrollHeight;const d={};u==="border-box"?f=f+i:u==="content-box"&&(f=f-s),w.value="";const E=w.scrollHeight-s;if(Be(r)){let b=E*r;u==="border-box"&&(b=b+s+i),f=Math.max(b,f),d.minHeight=`${b}px`}if(Be(t)){let b=E*t;u==="border-box"&&(b=b+s+i),f=Math.min(b,f)}return d.height=`${f}px`,(o=w.parentNode)==null||o.removeChild(w),w=void 0,d}const Vo=At({id:{type:String,default:void 0},size:_t,disabled:Boolean,modelValue:{type:ue([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ue([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Fe},prefixIcon:{type:Fe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ue([Object,Array,String]),default:()=>jt({})}}),Mo={[we]:e=>ce(e),input:e=>ce(e),change:e=>ce(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},No=["role"],Bo=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Fo=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Ro=at({name:"ElInput",inheritAttrs:!1}),Lo=at({...Ro,props:Vo,emits:Mo,setup(e,{expose:r,emit:t}){const o=e,s=Pt(),i=$t(),u=v(()=>{const a={};return o.containerRole==="combobox"&&(a["aria-haspopup"]=s["aria-haspopup"],a["aria-owns"]=s["aria-owns"],a["aria-expanded"]=s["aria-expanded"]),a}),h=v(()=>[o.type==="textarea"?Ce.b():l.b(),l.m(it.value),l.is("disabled",_.value),l.is("exceed",ct.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||o.prefixIcon,[l.m("suffix")]:i.suffix||o.suffixIcon||o.clearable||o.showPassword,[l.bm("suffix","password-clear")]:q.value&&se.value},s.class]),f=v(()=>[l.e("wrapper"),l.is("focus",M.value)]),d=Po({excludeKeys:v(()=>Object.keys(u.value))}),{form:E,formItem:b}=Gt(),{inputId:Te}=Yt(o,{formItemContext:b}),it=qt(),_=Xt(),l=Re("input"),Ce=Re("textarea"),U=pe(),T=pe(),M=k(!1),ne=k(!1),N=k(!1),G=k(!1),Ee=k(),Y=pe(o.inputStyle),B=v(()=>U.value||T.value),Ie=v(()=>{var a;return(a=E==null?void 0:E.statusIcon)!=null?a:!1}),F=v(()=>(b==null?void 0:b.validateState)||""),Ae=v(()=>F.value&&kt[F.value]),lt=v(()=>G.value?zt:Ot),ut=v(()=>[s.style,o.inputStyle]),_e=v(()=>[o.inputStyle,Y.value,{resize:o.resize}]),I=v(()=>Zt(o.modelValue)?"":String(o.modelValue)),q=v(()=>o.clearable&&!_.value&&!o.readonly&&!!I.value&&(M.value||ne.value)),se=v(()=>o.showPassword&&!_.value&&!o.readonly&&!!I.value&&(!!I.value||M.value)),j=v(()=>o.showWordLimit&&!!d.value.maxlength&&(o.type==="text"||o.type==="textarea")&&!_.value&&!o.readonly&&!o.showPassword),ie=v(()=>I.value.length),ct=v(()=>!!j.value&&ie.value>Number(d.value.maxlength)),pt=v(()=>!!i.suffix||!!o.suffixIcon||q.value||o.showPassword||j.value||!!F.value&&Ie.value),[dt,ft]=$o(U);Vt(T,a=>{if(vt(),!j.value||o.resize!=="both")return;const c=a[0],{width:x}=c.contentRect;Ee.value={right:`calc(100% - ${x+15+6}px)`}});const R=()=>{const{type:a,autosize:c}=o;if(!(!V||a!=="textarea"||!T.value))if(c){const x=Le(c)?c.minRows:void 0,Z=Le(c)?c.maxRows:void 0,Ne=et(T.value,x,Z);Y.value={overflowY:"hidden",...Ne},P(()=>{T.value.offsetHeight,Y.value=Ne})}else Y.value={minHeight:et(T.value).minHeight}},vt=(a=>{let c=!1;return()=>{var x;if(c||!o.autosize)return;((x=T.value)==null?void 0:x.offsetParent)===null||(a(),c=!0)}})(R),L=()=>{const a=B.value;!a||a.value===I.value||(a.value=I.value)},le=async a=>{dt();let{value:c}=a.target;if(o.formatter&&(c=o.parser?o.parser(c):c,c=o.formatter(c)),!N.value){if(c===I.value){L();return}t(we,c),t("input",c),await P(),L(),ft()}},je=a=>{t("change",a.target.value)},Pe=a=>{t("compositionstart",a),N.value=!0},$e=a=>{var c;t("compositionupdate",a);const x=(c=a.target)==null?void 0:c.value,Z=x[x.length-1]||"";N.value=!Ao(Z)},ke=a=>{t("compositionend",a),N.value&&(N.value=!1,le(a))},yt=()=>{G.value=!G.value,X()},X=async()=>{var a;await P(),(a=B.value)==null||a.focus()},bt=()=>{var a;return(a=B.value)==null?void 0:a.blur()},ze=a=>{M.value=!0,t("focus",a)},Oe=a=>{var c;M.value=!1,t("blur",a),o.validateEvent&&((c=b==null?void 0:b.validate)==null||c.call(b,"blur").catch(x=>He()))},gt=a=>{ne.value=!1,t("mouseleave",a)},ht=a=>{ne.value=!0,t("mouseenter",a)},Ve=a=>{t("keydown",a)},mt=()=>{var a;(a=B.value)==null||a.select()},Me=()=>{t(we,""),t("change",""),t("clear"),t("input","")};return de(()=>o.modelValue,()=>{var a;P(()=>R()),o.validateEvent&&((a=b==null?void 0:b.validate)==null||a.call(b,"change").catch(c=>He()))}),de(I,()=>L()),de(()=>o.type,async()=>{await P(),L(),R()}),Mt(()=>{!o.formatter&&o.parser,L(),P(R)}),r({input:U,textarea:T,ref:B,textareaStyle:_e,autosize:Nt(o,"autosize"),focus:X,blur:bt,select:mt,clear:Me,resizeTextarea:R}),(a,c)=>Bt((y(),S("div",ve(n(u),{class:n(h),style:n(ut),role:a.containerRole,onMouseenter:ht,onMouseleave:gt}),[g(" input "),a.type!=="textarea"?(y(),S(fe,{key:0},[g(" prepend slot "),a.$slots.prepend?(y(),S("div",{key:0,class:m(n(l).be("group","prepend"))},[J(a.$slots,"prepend")],2)):g("v-if",!0),$("div",{class:m(n(f))},[g(" prefix slot "),a.$slots.prefix||a.prefixIcon?(y(),S("span",{key:0,class:m(n(l).e("prefix"))},[$("span",{class:m(n(l).e("prefix-inner")),onClick:X},[J(a.$slots,"prefix"),a.prefixIcon?(y(),C(n(D),{key:0,class:m(n(l).e("icon"))},{default:H(()=>[(y(),C(Q(a.prefixIcon)))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0),$("input",ve({id:n(Te),ref_key:"input",ref:U,class:n(l).e("inner")},n(d),{type:a.showPassword?G.value?"text":"password":a.type,disabled:n(_),formatter:a.formatter,parser:a.parser,readonly:a.readonly,autocomplete:a.autocomplete,tabindex:a.tabindex,"aria-label":a.label,placeholder:a.placeholder,style:a.inputStyle,form:o.form,onCompositionstart:Pe,onCompositionupdate:$e,onCompositionend:ke,onInput:le,onFocus:ze,onBlur:Oe,onChange:je,onKeydown:Ve}),null,16,Bo),g(" suffix slot "),n(pt)?(y(),S("span",{key:1,class:m(n(l).e("suffix"))},[$("span",{class:m(n(l).e("suffix-inner")),onClick:X},[!n(q)||!n(se)||!n(j)?(y(),S(fe,{key:0},[J(a.$slots,"suffix"),a.suffixIcon?(y(),C(n(D),{key:0,class:m(n(l).e("icon"))},{default:H(()=>[(y(),C(Q(a.suffixIcon)))]),_:1},8,["class"])):g("v-if",!0)],64)):g("v-if",!0),n(q)?(y(),C(n(D),{key:1,class:m([n(l).e("icon"),n(l).e("clear")]),onMousedown:Ht(n(Dt),["prevent"]),onClick:Me},{default:H(()=>[Rt(n(Lt))]),_:1},8,["class","onMousedown"])):g("v-if",!0),n(se)?(y(),C(n(D),{key:2,class:m([n(l).e("icon"),n(l).e("password")]),onClick:yt},{default:H(()=>[(y(),C(Q(n(lt))))]),_:1},8,["class"])):g("v-if",!0),n(j)?(y(),S("span",{key:3,class:m(n(l).e("count"))},[$("span",{class:m(n(l).e("count-inner"))},ee(n(ie))+" / "+ee(n(d).maxlength),3)],2)):g("v-if",!0),n(F)&&n(Ae)&&n(Ie)?(y(),C(n(D),{key:4,class:m([n(l).e("icon"),n(l).e("validateIcon"),n(l).is("loading",n(F)==="validating")])},{default:H(()=>[(y(),C(Q(n(Ae))))]),_:1},8,["class"])):g("v-if",!0)],2)],2)):g("v-if",!0)],2),g(" append slot "),a.$slots.append?(y(),S("div",{key:1,class:m(n(l).be("group","append"))},[J(a.$slots,"append")],2)):g("v-if",!0)],64)):(y(),S(fe,{key:1},[g(" textarea "),$("textarea",ve({id:n(Te),ref_key:"textarea",ref:T,class:n(Ce).e("inner")},n(d),{tabindex:a.tabindex,disabled:n(_),readonly:a.readonly,autocomplete:a.autocomplete,style:n(_e),"aria-label":a.label,placeholder:a.placeholder,form:o.form,onCompositionstart:Pe,onCompositionupdate:$e,onCompositionend:ke,onInput:le,onFocus:ze,onBlur:Oe,onChange:je,onKeydown:Ve}),null,16,Fo),n(j)?(y(),S("span",{key:0,style:Kt(Ee.value),class:m(n(l).e("count"))},ee(n(ie))+" / "+ee(n(d).maxlength),7)):g("v-if",!0)],64))],16,No)),[[Ft,a.type!=="hidden"]])}});var Ho=Wt(Lo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const er=Ut(Ho);export{Qo as C,er as E,W as S,we as U,fo as a,eo as b,vo as c,Yo as d,Fa as e,Go as f,Xo as g,Zo as h,fa as i,ea as j,Qa as k,la as l,ot as m,Ue as n,Da as o,qo as p,Jo as q,Ao as r,lo as s,aa as t,Po as u,Ua as v,Ga as w};
