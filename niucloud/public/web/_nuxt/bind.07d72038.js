import{E as x}from"./el-input.7ce10b6a.js";import{E as B,a as R}from"./el-overlay.bad5c6f6.js";import{u as q,t as I,_ as P}from"./test.a5d69daa.js";import{E as S}from"./el-button.7716f9a0.js";import{a as D,W as F,s as h,r as f,D as N,X as U,o as j,e as L,j as u,t as v,u as n,V as t,f as a,w as i,h as M,Y as T,Z as $}from"./entry.76039fcc.js";import{u as z}from"./useLogin.3372441e.js";import{_ as W}from"./_plugin-vue_export-helper.c27b6911.js";import"./use-form-item.d43e320b.js";import"./index.e898cd67.js";import"./index.d919d3b5.js";import"./_initCloneObject.5512217e.js";import"./vnode.8537769f.js";import"./throttle.5f59e8d0.js";import"./debounce.269f4e90.js";const X={class:"w-full h-full bg-page flex items-center justify-center"},Y={class:"flex bg-white"},Z={class:"bg-white w-[380px] p-[30px]"},A={class:"flex items-end mb-[30px] mt-[15px]"},G={class:"mr-[20px] text-base cursor-pointer leading-none font-bold"},H=D({__name:"bind",setup(J){const _=F(),y=h(()=>_.info),r=f(!1),l=N({mobile:"",mobile_code:"",mobile_key:"",openid:U("openId").value}),k=h(()=>({mobile:[{type:"string",required:!0,message:t("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,o,m){return I.mobile(o)},message:t("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:t("codePlaceholder"),trigger:["blur","change"]}})),c=f(),V=async()=>{var e;await((e=c.value)==null?void 0:e.validate(async(o,m)=>{if(o){if(r.value)return;r.value=!0,(y.value?T:$)(l).then(p=>{_.setToken(p.data.token),z().handleLoginBack()}).catch(()=>{r.value=!1,b.refresh()})}}))},b=q(l);b.refresh();const g=f(null),w=async()=>{var e;await((e=c.value)==null?void 0:e.validateField("mobile",async(o,m)=>{var s;o&&((s=g.value)==null||s.send())}))};return(e,o)=>{const m=x,s=B,p=P,C=S,E=R;return j(),L("div",X,[u("div",Y,[u("div",Z,[u("div",A,[u("div",G,v(("t"in e?e.t:n(t))("mobileBind")),1)]),a(E,{model:l,ref_key:"formRef",ref:c,rules:n(k),"validate-on-rule-change":!1},{default:i(()=>[u("div",null,[a(s,{prop:"mobile"},{default:i(()=>[a(m,{modelValue:l.mobile,"onUpdate:modelValue":o[0]||(o[0]=d=>l.mobile=d),placeholder:("t"in e?e.t:n(t))("mobilePlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1}),a(s,{prop:"mobile_code"},{default:i(()=>[a(m,{modelValue:l.mobile_code,"onUpdate:modelValue":o[2]||(o[2]=d=>l.mobile_code=d),placeholder:("t"in e?e.t:n(t))("codePlaceholder")},{suffix:i(()=>[a(p,{mobile:l.mobile,type:"login",modelValue:l.mobile_key,"onUpdate:modelValue":o[1]||(o[1]=d=>l.mobile_key=d),onClick:w,ref_key:"smsCodeRef",ref:g},null,8,["mobile","modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1})]),a(s,null,{default:i(()=>[a(C,{type:"primary",class:"mt-[20px] w-full",size:"large",onClick:V,loading:r.value},{default:i(()=>[M(v(r.value?("t"in e?e.t:n(t))("binding"):("t"in e?e.t:n(t))("bind")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])])}}});const ue=W(H,[["__scopeId","data-v-a4cb60b2"]]);export{ue as default};
