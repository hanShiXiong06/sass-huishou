import{E as Pe}from"./index-ee32f612.js";import{a as Ee,E as Te}from"./index-94a82d50.js";import{b as fe,d as le,o as ye,a as me,p as ze}from"./index-7e933ae4.js";import{G as Me,r as Z,o as pe,E as se,c as v,s as Ie,I as Fe,w as re,d as te,b as ve,R as Be,a4 as ce,e as L,f as Y,y as xe,x as Ve,g as Q,B as Re,u as t,n as K,j as q,_ as Ce,m as we,U as Xe,J as Ye,v as ie,H as ae,F as oe,z as ue,l as Ke}from"./base-04829be5.js";import{U as ne,I as ge,C as Ne}from"./event-9519ab40.js";import{E as Ae}from"./index-a2524300.js";import{d as he}from"./debounce-f064e94e.js";import{u as $e}from"./index-1d455165.js";import{u as Ue,a as We}from"./index-d7f4b4bb.js";import{t as Oe,d as Se}from"./error-78e43d3e.js";import{c as je}from"./index-30df2c14.js";const Le=Symbol("sliderContextKey"),He=fe({modelValue:{type:le([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:ye,inputSize:ye,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:le(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:le(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:Ee,default:"top"},marks:{type:le(Object)},validateEvent:{type:Boolean,default:!0}}),de=e=>me(e)||Me(e)&&e.every(me),Ge={[ne]:de,[ge]:de,[Ne]:de},_e=(e,l,u)=>{const n=Z();return pe(async()=>{e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue]):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue),je(window,"resize",u),await se(),u()}),{sliderWrapper:n}},Je=e=>v(()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort((u,n)=>u-n).filter(u=>u<=e.max&&u>=e.min).map(u=>({point:u,position:(u-e.min)*100/(e.max-e.min),mark:e.marks[u]})):[]),qe=(e,l,u)=>{const{form:n,formItem:s}=Ue(),c=Ie(),i=Z(),V=Z(),w={firstButton:i,secondButton:V},d=v(()=>e.disabled||(n==null?void 0:n.disabled)||!1),f=v(()=>Math.min(l.firstValue,l.secondValue)),o=v(()=>Math.max(l.firstValue,l.secondValue)),x=v(()=>e.range?`${100*(o.value-f.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),C=v(()=>e.range?`${100*(f.value-e.min)/(e.max-e.min)}%`:"0%"),P=v(()=>e.vertical?{height:e.height}:{}),T=v(()=>e.vertical?{height:x.value,bottom:C.value}:{width:x.value,left:C.value}),z=()=>{c.value&&(l.sliderSize=c.value[`client${e.vertical?"Height":"Width"}`])},p=m=>{const h=e.min+m*(e.max-e.min)/100;if(!e.range)return i;let E;return Math.abs(f.value-h)<Math.abs(o.value-h)?E=l.firstValue<l.secondValue?"firstButton":"secondButton":E=l.firstValue>l.secondValue?"firstButton":"secondButton",w[E]},S=m=>{const h=p(m);return h.value.setPosition(m),h},I=m=>{l.firstValue=m,g(e.range?[f.value,o.value]:m)},k=m=>{l.secondValue=m,e.range&&g([f.value,o.value])},g=m=>{u(ne,m),u(ge,m)},y=async()=>{await se(),u(Ne,e.range?[f.value,o.value]:e.modelValue)},j=m=>{var h,E,G,_,J,O;if(d.value||l.dragging)return;z();let X=0;if(e.vertical){const N=(G=(E=(h=m.touches)==null?void 0:h.item(0))==null?void 0:E.clientY)!=null?G:m.clientY;X=(c.value.getBoundingClientRect().bottom-N)/l.sliderSize*100}else{const N=(O=(J=(_=m.touches)==null?void 0:_.item(0))==null?void 0:J.clientX)!=null?O:m.clientX,M=c.value.getBoundingClientRect().left;X=(N-M)/l.sliderSize*100}if(!(X<0||X>100))return S(X)};return{elFormItem:s,slider:c,firstButton:i,secondButton:V,sliderDisabled:d,minValue:f,maxValue:o,runwayStyle:P,barStyle:T,resetSize:z,setPosition:S,emitChange:y,onSliderWrapperPrevent:m=>{var h,E;((h=w.firstButton.value)!=null&&h.dragging||(E=w.secondButton.value)!=null&&E.dragging)&&m.preventDefault()},onSliderClick:m=>{j(m)&&y()},onSliderDown:async m=>{const h=j(m);h&&(await se(),h.value.onButtonDown(m))},setFirstValue:I,setSecondValue:k}},{left:Qe,down:Ze,right:De,up:el,home:ll,end:tl,pageUp:nl,pageDown:al}=Ae,ol=(e,l,u)=>{const n=Z(),s=Z(!1),c=v(()=>l.value instanceof Function),i=v(()=>c.value&&l.value(e.modelValue)||e.modelValue),V=he(()=>{u.value&&(s.value=!0)},50),w=he(()=>{u.value&&(s.value=!1)},50);return{tooltip:n,tooltipVisible:s,formatValue:i,displayTooltip:V,hideTooltip:w}},rl=(e,l,u)=>{const{disabled:n,min:s,max:c,step:i,showTooltip:V,precision:w,sliderSize:d,formatTooltip:f,emitChange:o,resetSize:x,updateDragging:C}=Fe(Le),{tooltip:P,tooltipVisible:T,formatValue:z,displayTooltip:p,hideTooltip:S}=ol(e,f,V),I=Z(),k=v(()=>`${(e.modelValue-s.value)/(c.value-s.value)*100}%`),g=v(()=>e.vertical?{bottom:k.value}:{left:k.value}),y=()=>{l.hovering=!0,p()},j=()=>{l.hovering=!1,l.dragging||S()},H=a=>{n.value||(a.preventDefault(),X(a),window.addEventListener("mousemove",N),window.addEventListener("touchmove",N),window.addEventListener("mouseup",M),window.addEventListener("touchend",M),window.addEventListener("contextmenu",M),I.value.focus())},A=a=>{n.value||(l.newPosition=Number.parseFloat(k.value)+a/(c.value-s.value)*100,$(l.newPosition),o())},W=()=>{A(-i.value)},m=()=>{A(i.value)},h=()=>{A(-i.value*4)},E=()=>{A(i.value*4)},G=()=>{n.value||($(0),o())},_=()=>{n.value||($(100),o())},J=a=>{let b=!0;[Qe,Ze].includes(a.key)?W():[De,el].includes(a.key)?m():a.key===ll?G():a.key===tl?_():a.key===al?h():a.key===nl?E():b=!1,b&&a.preventDefault()},O=a=>{let b,F;return a.type.startsWith("touch")?(F=a.touches[0].clientY,b=a.touches[0].clientX):(F=a.clientY,b=a.clientX),{clientX:b,clientY:F}},X=a=>{l.dragging=!0,l.isClick=!0;const{clientX:b,clientY:F}=O(a);e.vertical?l.startY=F:l.startX=b,l.startPosition=Number.parseFloat(k.value),l.newPosition=l.startPosition},N=a=>{if(l.dragging){l.isClick=!1,p(),x();let b;const{clientX:F,clientY:U}=O(a);e.vertical?(l.currentY=U,b=(l.startY-l.currentY)/d.value*100):(l.currentX=F,b=(l.currentX-l.startX)/d.value*100),l.newPosition=l.startPosition+b,$(l.newPosition)}},M=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||S(),l.isClick||$(l.newPosition),o()},0),window.removeEventListener("mousemove",N),window.removeEventListener("touchmove",N),window.removeEventListener("mouseup",M),window.removeEventListener("touchend",M),window.removeEventListener("contextmenu",M))},$=async a=>{if(a===null||Number.isNaN(+a))return;a<0?a=0:a>100&&(a=100);const b=100/((c.value-s.value)/i.value);let U=Math.round(a/b)*b*(c.value-s.value)*.01+s.value;U=Number.parseFloat(U.toFixed(w.value)),U!==e.modelValue&&u(ne,U),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await se(),l.dragging&&p(),P.value.updatePopper()};return re(()=>l.dragging,a=>{C(a)}),{disabled:n,button:I,tooltip:P,tooltipVisible:T,showTooltip:V,wrapperStyle:g,formatValue:z,handleMouseEnter:y,handleMouseLeave:j,onButtonDown:H,onKeyDown:J,setPosition:$}},sl=(e,l,u,n)=>({stops:v(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const i=(e.max-e.min)/e.step,V=100*e.step/(e.max-e.min),w=Array.from({length:i-1}).map((d,f)=>(f+1)*V);return e.range?w.filter(d=>d<100*(u.value-e.min)/(e.max-e.min)||d>100*(n.value-e.min)/(e.max-e.min)):w.filter(d=>d>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:i=>e.vertical?{bottom:`${i}%`}:{left:`${i}%`}}),il=(e,l,u,n,s,c)=>{const i=d=>{s(ne,d),s(ge,d)},V=()=>e.range?![u.value,n.value].every((d,f)=>d===l.oldValue[f]):e.modelValue!==l.oldValue,w=()=>{var d,f;if(e.min>e.max){Oe("Slider","min should not be greater than max.");return}const o=e.modelValue;e.range&&Array.isArray(o)?o[1]<e.min?i([e.min,e.min]):o[0]>e.max?i([e.max,e.max]):o[0]<e.min?i([e.min,o[1]]):o[1]>e.max?i([o[0],e.max]):(l.firstValue=o[0],l.secondValue=o[1],V()&&(e.validateEvent&&((d=c==null?void 0:c.validate)==null||d.call(c,"change").catch(x=>Se())),l.oldValue=o.slice())):!e.range&&typeof o=="number"&&!Number.isNaN(o)&&(o<e.min?i(e.min):o>e.max?i(e.max):(l.firstValue=o,V()&&(e.validateEvent&&((f=c==null?void 0:c.validate)==null||f.call(c,"change").catch(x=>Se())),l.oldValue=o)))};w(),re(()=>l.dragging,d=>{d||w()}),re(()=>e.modelValue,(d,f)=>{l.dragging||Array.isArray(d)&&Array.isArray(f)&&d.every((o,x)=>o===f[x])&&l.firstValue===d[0]&&l.secondValue===d[1]||w()},{deep:!0}),re(()=>[e.min,e.max],()=>{w()})},ul=fe({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:Ee,default:"top"}}),dl={[ne]:e=>me(e)},ml=["tabindex"],cl=te({name:"ElSliderButton"}),fl=te({...cl,props:ul,emits:dl,setup(e,{expose:l,emit:u}){const n=e,s=ve("slider"),c=Be({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:n.modelValue}),{disabled:i,button:V,tooltip:w,showTooltip:d,tooltipVisible:f,wrapperStyle:o,formatValue:x,handleMouseEnter:C,handleMouseLeave:P,onButtonDown:T,onKeyDown:z,setPosition:p}=rl(n,c,u),{hovering:S,dragging:I}=ce(c);return l({onButtonDown:T,onKeyDown:z,setPosition:p,hovering:S,dragging:I}),(k,g)=>(L(),Y("div",{ref_key:"button",ref:V,class:K([t(s).e("button-wrapper"),{hover:t(S),dragging:t(I)}]),style:q(t(o)),tabindex:t(i)?-1:0,onMouseenter:g[0]||(g[0]=(...y)=>t(C)&&t(C)(...y)),onMouseleave:g[1]||(g[1]=(...y)=>t(P)&&t(P)(...y)),onMousedown:g[2]||(g[2]=(...y)=>t(T)&&t(T)(...y)),onTouchstart:g[3]||(g[3]=(...y)=>t(T)&&t(T)(...y)),onFocus:g[4]||(g[4]=(...y)=>t(C)&&t(C)(...y)),onBlur:g[5]||(g[5]=(...y)=>t(P)&&t(P)(...y)),onKeydown:g[6]||(g[6]=(...y)=>t(z)&&t(z)(...y))},[xe(t(Te),{ref_key:"tooltip",ref:w,visible:t(f),placement:k.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":k.tooltipClass,disabled:!t(d),persistent:""},{content:Ve(()=>[Q("span",null,Re(t(x)),1)]),default:Ve(()=>[Q("div",{class:K([t(s).e("button"),{hover:t(S),dragging:t(I)}])},null,2)]),_:1},8,["visible","placement","popper-class","disabled"])],46,ml))}});var ke=Ce(fl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const vl=fe({mark:{type:le([String,Object]),default:void 0}});var gl=te({name:"ElSliderMarker",props:vl,setup(e){const l=ve("slider"),u=v(()=>we(e.mark)?e.mark:e.mark.label),n=v(()=>we(e.mark)?void 0:e.mark.style);return()=>Xe("div",{class:l.e("marks-text"),style:n.value},u.value)}});const bl=["id","role","aria-label","aria-labelledby"],yl={key:1},Vl=te({name:"ElSlider"}),wl=te({...Vl,props:He,emits:Ge,setup(e,{expose:l,emit:u}){const n=e,s=ve("slider"),{t:c}=$e(),i=Be({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:V,slider:w,firstButton:d,secondButton:f,sliderDisabled:o,minValue:x,maxValue:C,runwayStyle:P,barStyle:T,resetSize:z,emitChange:p,onSliderWrapperPrevent:S,onSliderClick:I,onSliderDown:k,setFirstValue:g,setSecondValue:y}=qe(n,i,u),{stops:j,getStopStyle:H}=sl(n,i,x,C),{inputId:A,isLabeledByFormItem:W}=We(n,{formItemContext:V}),m=ze(),h=v(()=>n.inputSize||m.value),E=v(()=>n.label||c("el.slider.defaultLabel",{min:n.min,max:n.max})),G=v(()=>n.range?n.rangeStartLabel||c("el.slider.defaultRangeStartLabel"):E.value),_=v(()=>n.formatValueText?n.formatValueText(a.value):`${a.value}`),J=v(()=>n.rangeEndLabel||c("el.slider.defaultRangeEndLabel")),O=v(()=>n.formatValueText?n.formatValueText(b.value):`${b.value}`),X=v(()=>[s.b(),s.m(m.value),s.is("vertical",n.vertical),{[s.m("with-input")]:n.showInput}]),N=Je(n);il(n,i,x,C,u,V);const M=v(()=>{const r=[n.min,n.max,n.step].map(R=>{const D=`${R}`.split(".")[1];return D?D.length:0});return Math.max.apply(null,r)}),{sliderWrapper:$}=_e(n,i,z),{firstValue:a,secondValue:b,sliderSize:F}=ce(i),U=r=>{i.dragging=r};return Ye(Le,{...ce(n),sliderSize:F,disabled:o,precision:M,emitChange:p,resetSize:z,updateDragging:U}),l({onSliderClick:I}),(r,R)=>{var D,be;return L(),Y("div",{id:r.range?t(A):void 0,ref_key:"sliderWrapper",ref:$,class:K(t(X)),role:r.range?"group":void 0,"aria-label":r.range&&!t(W)?t(E):void 0,"aria-labelledby":r.range&&t(W)?(D=t(V))==null?void 0:D.labelId:void 0,onTouchstart:R[2]||(R[2]=(...B)=>t(S)&&t(S)(...B)),onTouchmove:R[3]||(R[3]=(...B)=>t(S)&&t(S)(...B))},[Q("div",{ref_key:"slider",ref:w,class:K([t(s).e("runway"),{"show-input":r.showInput&&!r.range},t(s).is("disabled",t(o))]),style:q(t(P)),onMousedown:R[0]||(R[0]=(...B)=>t(k)&&t(k)(...B)),onTouchstart:R[1]||(R[1]=(...B)=>t(k)&&t(k)(...B))},[Q("div",{class:K(t(s).e("bar")),style:q(t(T))},null,6),xe(ke,{id:r.range?void 0:t(A),ref_key:"firstButton",ref:d,"model-value":t(a),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":r.range||!t(W)?t(G):void 0,"aria-labelledby":!r.range&&t(W)?(be=t(V))==null?void 0:be.labelId:void 0,"aria-valuemin":r.min,"aria-valuemax":r.range?t(b):r.max,"aria-valuenow":t(a),"aria-valuetext":t(_),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(g)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),r.range?(L(),ie(ke,{key:0,ref_key:"secondButton",ref:f,"model-value":t(b),vertical:r.vertical,"tooltip-class":r.tooltipClass,placement:r.placement,role:"slider","aria-label":t(J),"aria-valuemin":t(a),"aria-valuemax":r.max,"aria-valuenow":t(b),"aria-valuetext":t(O),"aria-orientation":r.vertical?"vertical":"horizontal","aria-disabled":t(o),"onUpdate:modelValue":t(y)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):ae("v-if",!0),r.showStops?(L(),Y("div",yl,[(L(!0),Y(oe,null,ue(t(j),(B,ee)=>(L(),Y("div",{key:ee,class:K(t(s).e("stop")),style:q(t(H)(B))},null,6))),128))])):ae("v-if",!0),t(N).length>0?(L(),Y(oe,{key:2},[Q("div",null,[(L(!0),Y(oe,null,ue(t(N),(B,ee)=>(L(),Y("div",{key:ee,style:q(t(H)(B.position)),class:K([t(s).e("stop"),t(s).e("marks-stop")])},null,6))),128))]),Q("div",{class:K(t(s).e("marks"))},[(L(!0),Y(oe,null,ue(t(N),(B,ee)=>(L(),ie(t(gl),{key:ee,mark:B.mark,style:q(t(H)(B.position))},null,8,["mark","style"]))),128))],2)],64)):ae("v-if",!0)],38),r.showInput&&!r.range?(L(),ie(t(Pe),{key:0,ref:"input","model-value":t(a),class:K(t(s).e("input")),step:r.step,disabled:t(o),controls:r.showInputControls,min:r.min,max:r.max,debounce:r.debounce,size:t(h),"onUpdate:modelValue":t(g),onChange:t(p)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):ae("v-if",!0)],42,bl)}}});var hl=Ce(wl,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]]);const Ml=Ke(hl);export{Ml as E};
