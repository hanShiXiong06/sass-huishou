import{d as A,r as T,c as H,e as c,f as r,Q as h,u as e,g as t,B as x,y as n,x as p,F as b,z as y,n as w,h as B}from"./base-04829be5.js";/* empty css                  *//* empty css                        *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-eeb1c1a8.js";import{_ as I}from"./index-c1ab0e3c.js";/* empty css                     */import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-df8a984f.js";import{v as z}from"./index-30df2c14.js";import{t as d}from"./index-043d021e.js";import{u as D}from"./diy-9ea654fa.js";import{f as S}from"./storage-1a3ddb14.js";import{a as G,E as L}from"./index-6bd50bb5.js";import{E as O}from"./index-cc473227.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const j={class:"content-wrap rubik-cube"},M={class:"edit-attr-item-wrap"},P={class:"mb-[10px]"},Q={class:"selected-template-list"},q=["onClick"],J={class:"edit-attr-item-wrap"},K={class:"mb-[10px]"},X={class:"layout"},Y={class:"have-preview-image"},Z=["src"],ee={class:"style-wrap"},se={class:"edit-attr-item-wrap"},ae={class:"mb-[10px]"},oe=A({__name:"edit-rubik-cube",setup(te,{expose:V}){const s=D();s.editComponent.ignore=[],s.editComponent.verify=m=>{var a={code:!0,message:""};return s.value[m].list.forEach(i=>{if(i.imageUrl==="")return a.code=!1,a.message=d("imageUrlTip"),a}),a};const _=T([{name:"1行2个",src:"iconyihangliangge",className:"row1-of2",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1行3个",src:"iconyihangsange",className:"row1-of3",dimensionScale:[{desc:"宽度33.33%",size:"200px * 200px",name:"图一"},{desc:"宽度33.33%",size:"200px * 200px",name:"图二"},{desc:"宽度33.33%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：130px"},{name:"1行4个",src:"iconyihangsige",className:"row1-of4",dimensionScale:[{desc:"宽度25%",size:"200px * 200px",name:"图一"},{desc:"宽度25%",size:"200px * 200px",name:"图二"},{desc:"宽度25%",size:"200px * 200px",name:"图三"},{desc:"宽度25%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：100px"},{name:"2左2右",src:"iconmofang-liangzuoliangyou",className:"row2-lt-of2-rt",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50%",size:"200px * 200px",name:"图三"},{desc:"宽度50%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1左2右",src:"iconmofang-yizuoliangyou",className:"row1-lt-of2-rt",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，宽度最小建议为：200px，右侧两张图片高度一致，左侧图片高度为右侧两张图片高度之和（例：左侧图片尺寸：200px * 300px，右侧两张图片尺寸：200px * 150px）"},{name:"1上2下",src:"iconmofang-yishangliangxia",className:"row1-tp-of2-bm",dimensionScale:[{desc:"宽度100% * 高度50%",size:"400px * 200px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，上方一张图片的宽度为下方两张图片宽度之和，下放两张图片尺寸一致，高度可根据实际需求自行确定（例：上方图片尺寸：400px * 150px，下方两张图片尺寸：200px * 150px）"},{name:"1左3右",src:"iconxuanzemoban-yizuosanyou",className:"row1-lt-of1-tp-of2-bm",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图三"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，左右两侧内容宽高相同，右侧上下区域高度各占50%，右侧内容下半部分两张图片的宽度相同，各占右侧内容宽度的50%（例：左侧图片尺寸：200px * 400px，右侧上半部分图片尺寸：200px * 200px，右侧下半部分两张图片尺寸：100px * 200px）"}]),g=H(()=>{var m;return _.value.forEach(a=>{a.className==s.editComponent.mode&&(m=a)}),m}),k=m=>{for(var a=0;a<_.value.length;a++)if(a==m){s.editComponent.mode=_.value[a].className;var i=_.value[a].dimensionScale.length;if(i>s.editComponent.list.length)for(var l=0;l<i;l++)l+1>s.editComponent.list.length&&s.editComponent.list.push({imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}});else if(i!=s.editComponent.list.length)for(var l=0;l<s.editComponent.list.length;l++)l+1>i&&(s.editComponent.list.splice(l,1),l=0)}},U=m=>{N(!0)},N=(m=!1)=>{s.editComponent.list.forEach((a,i)=>{let l=new Image;l.src=S(a.imageUrl),l.onload=async()=>{a.imgWidth=l.width,a.imgHeight=l.height,console.log("handleHeight",a)}})};return V({}),(m,a)=>{const i=G,l=$,v=L,E=I,R=F,C=O;return c(),r(b,null,[h(t("div",j,[t("div",M,[t("h3",P,x(e(d)("selectStyle")),1),n(v,{"label-width":"80px",class:"px-[10px]"},{default:p(()=>[n(i,{label:e(d)("template")},{default:p(()=>[t("span",null,x(e(g).name),1)]),_:1},8,["label"]),t("ul",Q,[(c(!0),r(b,null,y(_.value,(o,u)=>(c(),r("li",{class:w([o.className==e(s).editComponent.mode?"selected":""]),onClick:f=>k(u)},[n(l,{name:"iconfont-"+o.src,size:"16px"},null,8,["name"])],10,q))),256))])]),_:1})]),t("div",J,[t("h3",K,x(e(d)("魔方布局")),1),n(v,{"label-width":"80px",class:"px-[10px]"},{default:p(()=>[t("ul",X,[(c(!0),r(b,null,y(e(g).dimensionScale,(o,u)=>(c(),r("li",{class:w([e(g).className])},[h(t("div",Y,[t("img",{src:e(S)(e(s).editComponent.list[u].imageUrl)},null,8,Z)],512),[[z,e(s).editComponent.list[u].imageUrl]]),h(t("div",{class:w(["empty",[e(g).className]])},[t("p",null,x(o.name),1),t("p",null,x(o.desc),1)],2),[[z,!e(s).editComponent.list[u].imageUrl]])],2))),256))]),(c(!0),r(b,null,y(e(s).editComponent.list,(o,u)=>(c(),r("div",{key:o.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[n(i,{label:e(d)("image")},{default:p(()=>[n(E,{modelValue:o.imageUrl,"onUpdate:modelValue":f=>o.imageUrl=f,limit:1,onChange:U},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),n(i,{label:e(d)("link")},{default:p(()=>[n(R,{modelValue:o.link,"onUpdate:modelValue":f=>o.link=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))]),_:1})])],512),[[z,e(s).editTab=="content"]]),h(t("div",ee,[t("div",se,[t("h3",ae,x(e(d)("rubikCubeStyle")),1),n(v,{"label-width":"80px",class:"px-[10px]"},{default:p(()=>[n(i,{label:e(d)("imageGap")},{default:p(()=>[n(C,{modelValue:e(s).editComponent.imageGap,"onUpdate:modelValue":a[0]||(a[0]=o=>e(s).editComponent.imageGap=o),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:30},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(d)("topRounded")},{default:p(()=>[n(C,{modelValue:e(s).editComponent.topElementRounded,"onUpdate:modelValue":a[1]||(a[1]=o=>e(s).editComponent.topElementRounded=o),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(d)("bottomRounded")},{default:p(()=>[n(C,{modelValue:e(s).editComponent.bottomElementRounded,"onUpdate:modelValue":a[2]||(a[2]=o=>e(s).editComponent.bottomElementRounded=o),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),B(m.$slots,"style",{},void 0,!0)],512),[[z,e(s).editTab=="style"]])],64)}}});const le=W(oe,[["__scopeId","data-v-48b1a1bf"]]),ye=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{ye as _};
