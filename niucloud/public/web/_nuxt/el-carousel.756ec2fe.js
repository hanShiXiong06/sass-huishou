import{ai as re,aG as ke,p as le,ab as _e,N as ie,r as N,s as O,u as e,aj as D,b as ue,aH as Ne,aI as Ee,v as Se,aA as Me,a as J,q as ce,o as $,e as L,j as K,c as te,w as U,a0 as G,y as B,al as j,f as W,E as ae,an as Te,a1 as q,as as se,k as R,i as Ae,x as ve,z as fe,F as $e,G as Be,t as Le,B as de,O as Oe,D as Pe,aJ as He,aK as Ve,C as ze,Q as De}from"./entry.76039fcc.js";import{f as je}from"./vnode.8537769f.js";import{t as oe}from"./throttle.5f59e8d0.js";const Re=(r,I,l)=>je(r.subTree).filter(c=>{var t;return ke(c)&&((t=c.type)==null?void 0:t.name)===I&&!!c.component}).map(c=>c.component.uid).map(c=>l[c]).filter(c=>!!c),Fe=(r,I)=>{const l={},s=re([]);return{children:s,addChild:t=>{l[t.uid]=t,s.value=Re(r,I,l)},removeChild:t=>{delete l[t],s.value=s.value.filter(p=>p.uid!==t)}}},Ke=le({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),Ue={change:(r,I)=>[r,I].every(_e)},me=Symbol("carouselContextKey"),ne=300,We=(r,I,l)=>{const{children:s,addChild:g,removeChild:c}=Fe(ie(),"ElCarouselItem"),t=N(-1),p=N(null),y=N(!1),h=N(),b=O(()=>r.arrow!=="never"&&!e(k)),E=O(()=>s.value.some(a=>a.props.label.toString().length>0)),C=O(()=>r.type==="card"),k=O(()=>r.direction==="vertical"),S=oe(a=>{o(a)},ne,{trailing:!0}),_=oe(a=>{P(a)},ne);function w(){p.value&&(clearInterval(p.value),p.value=null)}function M(){r.interval<=0||!r.autoplay||p.value||(p.value=setInterval(()=>H(),r.interval))}const H=()=>{t.value<s.value.length-1?t.value=t.value+1:r.loop&&(t.value=0)};function o(a){if(Me(a)){const V=s.value.filter(F=>F.props.name===a);V.length>0&&(a=s.value.indexOf(V[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const m=s.value.length,A=t.value;a<0?t.value=r.loop?m-1:0:a>=m?t.value=r.loop?0:m-1:t.value=a,A===t.value&&i(A),Y()}function i(a){s.value.forEach((m,A)=>{m.translateItem(A,t.value,a)})}function n(a,m){var A,V,F,Z;const z=e(s),x=z.length;if(x===0||!a.states.inStage)return!1;const Ce=m+1,ye=m-1,ee=x-1,Ie=z[ee].states.active,ge=z[0].states.active,we=(V=(A=z[Ce])==null?void 0:A.states)==null?void 0:V.active,be=(Z=(F=z[ye])==null?void 0:F.states)==null?void 0:Z.active;return m===ee&&ge||we?"left":m===0&&Ie||be?"right":!1}function f(){y.value=!0,r.pauseOnHover&&w()}function T(){y.value=!1,M()}function v(a){e(k)||s.value.forEach((m,A)=>{a===n(m,A)&&(m.states.hover=!0)})}function u(){e(k)||s.value.forEach(a=>{a.states.hover=!1})}function d(a){t.value=a}function P(a){r.trigger==="hover"&&a!==t.value&&(t.value=a)}function Q(){o(t.value-1)}function he(){o(t.value+1)}function Y(){w(),M()}D(()=>t.value,(a,m)=>{i(m),m>-1&&I("change",a,m)}),D(()=>r.autoplay,a=>{a?M():w()}),D(()=>r.loop,()=>{o(t.value)}),D(()=>r.interval,()=>{Y()}),D(()=>s.value,()=>{s.value.length>0&&o(r.initialIndex)});const X=re();return ue(()=>{X.value=Ne(h.value,()=>{i()}),M()}),Ee(()=>{w(),h.value&&X.value&&X.value.stop()}),Se(me,{root:h,isCardType:C,isVertical:k,items:s,loop:r.loop,addItem:g,removeItem:c,setActiveItem:o}),{root:h,activeIndex:t,arrowDisplay:b,hasLabel:E,hover:y,isCardType:C,items:s,handleButtonEnter:v,handleButtonLeave:u,handleIndicatorClick:d,handleMouseEnter:f,handleMouseLeave:T,setActiveItem:o,prev:Q,next:he,throttledArrowClick:S,throttledIndicatorHover:_}},Ge=["onMouseenter","onClick"],qe={key:0},Je="ElCarousel",Qe=J({name:Je}),Xe=J({...Qe,props:Ke,emits:Ue,setup(r,{expose:I,emit:l}){const s=r,{root:g,activeIndex:c,arrowDisplay:t,hasLabel:p,hover:y,isCardType:h,items:b,handleButtonEnter:E,handleButtonLeave:C,handleIndicatorClick:k,handleMouseEnter:S,handleMouseLeave:_,setActiveItem:w,prev:M,next:H,throttledArrowClick:o,throttledIndicatorHover:i}=We(s,l),n=ce("carousel"),f=O(()=>{const v=[n.b(),n.m(s.direction)];return e(h)&&v.push(n.m("card")),v}),T=O(()=>{const v=[n.e("indicators"),n.em("indicators",s.direction)];return e(p)&&v.push(n.em("indicators","labels")),(s.indicatorPosition==="outside"||e(h))&&v.push(n.em("indicators","outside")),v});return I({setActiveItem:w,prev:M,next:H}),(v,u)=>($(),L("div",{ref_key:"root",ref:g,class:B(e(f)),onMouseenter:u[6]||(u[6]=j((...d)=>e(S)&&e(S)(...d),["stop"])),onMouseleave:u[7]||(u[7]=j((...d)=>e(_)&&e(_)(...d),["stop"]))},[K("div",{class:B(e(n).e("container")),style:fe({height:v.height})},[e(t)?($(),te(se,{key:0,name:"carousel-arrow-left",persisted:""},{default:U(()=>[G(K("button",{type:"button",class:B([e(n).e("arrow"),e(n).em("arrow","left")]),onMouseenter:u[0]||(u[0]=d=>e(E)("left")),onMouseleave:u[1]||(u[1]=(...d)=>e(C)&&e(C)(...d)),onClick:u[2]||(u[2]=j(d=>e(o)(e(c)-1),["stop"]))},[W(e(ae),null,{default:U(()=>[W(e(Te))]),_:1})],34),[[q,(v.arrow==="always"||e(y))&&(s.loop||e(c)>0)]])]),_:1})):R("v-if",!0),e(t)?($(),te(se,{key:1,name:"carousel-arrow-right",persisted:""},{default:U(()=>[G(K("button",{type:"button",class:B([e(n).e("arrow"),e(n).em("arrow","right")]),onMouseenter:u[3]||(u[3]=d=>e(E)("right")),onMouseleave:u[4]||(u[4]=(...d)=>e(C)&&e(C)(...d)),onClick:u[5]||(u[5]=j(d=>e(o)(e(c)+1),["stop"]))},[W(e(ae),null,{default:U(()=>[W(e(Ae))]),_:1})],34),[[q,(v.arrow==="always"||e(y))&&(s.loop||e(c)<e(b).length-1)]])]),_:1})):R("v-if",!0),ve(v.$slots,"default")],6),v.indicatorPosition!=="none"?($(),L("ul",{key:0,class:B(e(T))},[($(!0),L($e,null,Be(e(b),(d,P)=>($(),L("li",{key:P,class:B([e(n).e("indicator"),e(n).em("indicator",v.direction),e(n).is("active",P===e(c))]),onMouseenter:Q=>e(i)(P),onClick:j(Q=>e(k)(P),["stop"])},[K("button",{class:B(e(n).e("button"))},[e(p)?($(),L("span",qe,Le(d.props.label),1)):R("v-if",!0)],2)],42,Ge))),128))],2)):R("v-if",!0)],34))}});var Ye=de(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const Ze=le({name:{type:String,default:""},label:{type:[String,Number],default:""}}),xe=(r,I)=>{const l=Oe(me),s=ie(),g=.83,c=N(!1),t=N(0),p=N(1),y=N(!1),h=N(!1),b=N(!1),E=N(!1),{isCardType:C,isVertical:k}=l;function S(o,i,n){const f=n-1,T=i-1,v=i+1,u=n/2;return i===0&&o===f?-1:i===f&&o===0?n:o<T&&i-o>=u?n+1:o>v&&o-i>=u?-2:o}function _(o,i){var n;const f=((n=l.root.value)==null?void 0:n.offsetWidth)||0;return b.value?f*((2-g)*(o-i)+1)/4:o<i?-(1+g)*f/4:(3+g)*f/4}function w(o,i,n){const f=l.root.value;return f?((n?f.offsetHeight:f.offsetWidth)||0)*(o-i):0}const M=(o,i,n)=>{var f;const T=e(C),v=(f=l.items.value.length)!=null?f:Number.NaN,u=o===i;!T&&!Ve(n)&&(E.value=u||o===n),!u&&v>2&&l.loop&&(o=S(o,i,v));const d=e(k);y.value=u,T?(b.value=Math.round(Math.abs(o-i))<=1,t.value=_(o,i),p.value=e(y)?1:g):t.value=w(o,i,d),h.value=!0};function H(){if(l&&e(C)){const o=l.items.value.findIndex(({uid:i})=>i===s.uid);l.setActiveItem(o)}}return ue(()=>{l.addItem({props:r,states:Pe({hover:c,translate:t,scale:p,active:y,ready:h,inStage:b,animating:E}),uid:s.uid,translateItem:M})}),He(()=>{l.removeItem(s.uid)}),{active:y,animating:E,hover:c,inStage:b,isVertical:k,translate:t,isCardType:C,scale:p,ready:h,handleItemClick:H}},et=J({name:"ElCarouselItem"}),tt=J({...et,props:Ze,setup(r){const I=r,l=ce("carousel"),{active:s,animating:g,hover:c,inStage:t,isVertical:p,translate:y,isCardType:h,scale:b,ready:E,handleItemClick:C}=xe(I),k=O(()=>{const _=`${`translate${e(p)?"Y":"X"}`}(${e(y)}px)`,w=`scale(${e(b)})`;return{transform:[_,w].join(" ")}});return(S,_)=>G(($(),L("div",{class:B([e(l).e("item"),e(l).is("active",e(s)),e(l).is("in-stage",e(t)),e(l).is("hover",e(c)),e(l).is("animating",e(g)),{[e(l).em("item","card")]:e(h)}]),style:fe(e(k)),onClick:_[0]||(_[0]=(...w)=>e(C)&&e(C)(...w))},[e(h)?G(($(),L("div",{key:0,class:B(e(l).e("mask"))},null,2)),[[q,!e(s)]]):R("v-if",!0),ve(S.$slots,"default")],6)),[[q,e(E)]])}});var pe=de(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const nt=ze(Ye,{CarouselItem:pe}),rt=De(pe);export{rt as E,nt as a};
