import{d as x,r as g,R,c as B,e as h,v as y,x as s,g as F,y as r,i as w,A as c,B as f,u as a,Q as q}from"./base-04829be5.js";/* empty css                   *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                 */import{t}from"./index-043d021e.js";import{b as A,g as C}from"./notice-4a980f20.js";import{E as K,b as N}from"./index-1cbf3455.js";import{a as j,E as O}from"./index-6bd50bb5.js";import{E as G}from"./index-db9b8d96.js";import{E as L}from"./index-eb678249.js";import{E as Q}from"./index-b1557f8a.js";import{v as T}from"./directive-013f0a4e.js";const $={class:"dialog-footer"},de=x({__name:"sms-tencent",emits:["complete"],setup(z,{expose:S,emit:E}){let i=g(!1);const d=g(!0),b={sms_type:"",sign:"",access_key:"",secret_key:"",is_use:""},l=R({...b}),v=g(),D=B(()=>({sign:[{required:!0,message:t("tencentSignPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:t("tencentAppIdPlaceholder"),trigger:"blur"}],secret_id:[{required:!0,message:t("tencentSecretIdPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:t("tencentSecretKeyPlaceholder"),trigger:"blur"}]})),I=async u=>{d.value||!u||await u.validate(async e=>{e&&(d.value=!0,A(l).then(_=>{d.value=!1,i.value=!1,E("complete")}).catch(_=>{d.value=!1}))})};return S({showDialog:i,setFormData:async(u=null)=>{if(d.value=!0,Object.assign(l,b),u){const e=await(await C(u.sms_type)).data;Object.keys(l).forEach(n=>{e[n]!=null&&(l[n]=e[n]),e.params[n]!=null&&(l[n]=e.params[n].value)})}d.value=!1}}),(u,e)=>{const n=K,_=N,m=j,p=G,P=O,V=L,U=Q,k=T;return h(),y(U,{modelValue:a(i),"onUpdate:modelValue":e[7]||(e[7]=o=>w(i)?i.value=o:i=o),title:a(t)("tencentSms"),width:"580px","destroy-on-close":!0},{footer:s(()=>[F("span",$,[r(V,{onClick:e[5]||(e[5]=o=>w(i)?i.value=!1:i=!1)},{default:s(()=>[c(f(a(t)("cancel")),1)]),_:1}),r(V,{type:"primary",loading:d.value,onClick:e[6]||(e[6]=o=>I(v.value))},{default:s(()=>[c(f(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[q((h(),y(P,{model:l,"label-width":"140px",ref_key:"formRef",ref:v,rules:a(D),class:"page-form"},{default:s(()=>[r(m,{label:a(t)("isUse")},{default:s(()=>[r(_,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=o=>l.is_use=o)},{default:s(()=>[r(n,{label:1},{default:s(()=>[c(f(a(t)("startUsing")),1)]),_:1}),r(n,{label:0},{default:s(()=>[c(f(a(t)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(m,{label:a(t)("tencentSign"),prop:"sign"},{default:s(()=>[r(p,{modelValue:l.sign,"onUpdate:modelValue":e[1]||(e[1]=o=>l.sign=o),placeholder:a(t)("tencentSignPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:a(t)("tencentAppId"),prop:"app_id"},{default:s(()=>[r(p,{modelValue:l.app_id,"onUpdate:modelValue":e[2]||(e[2]=o=>l.app_id=o),placeholder:a(t)("tencentAppIdPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:a(t)("tencentSecretId"),prop:"secret_id"},{default:s(()=>[r(p,{modelValue:l.secret_id,"onUpdate:modelValue":e[3]||(e[3]=o=>l.secret_id=o),placeholder:a(t)("tencentSecretIdPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:a(t)("tencentSecretKey"),prop:"secret_key"},{default:s(()=>[r(p,{modelValue:l.secret_key,"onUpdate:modelValue":e[4]||(e[4]=o=>l.secret_key=o),placeholder:a(t)("tencentSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[k,d.value]])]),_:1},8,["modelValue","title"])}}});export{de as _};
