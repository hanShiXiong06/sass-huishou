import{d as c,c as _,e as f,v as g,x as l,h as x,y,u as p,i as V,A as v,B as h,C as S}from"./base-04829be5.js";/* empty css                    *//* empty css                 */import{t as r}from"./index-043d021e.js";import{g as k,a as w}from"./storage-1a3ddb14.js";import{a as E}from"./index-92283b18.js";import{E as B}from"./index-db9b8d96.js";import{a as C}from"./index-760fce0d.js";const D=c({__name:"index",props:{modelValue:{type:String,default:""},api:{type:String,default:"sys/document/document"}},emits:["update:modelValue"],setup(d,{emit:u}){const s=d,a=_({get(){return s.modelValue},set(e){u("update:modelValue",e)}}),t={action:`/adminapi//${s.api}`,showFileList:!1,headers:{},accept:".doc,.docx,.xml,.txt,.pem,.zip,.rar,.7z,.crt",onSuccess:(e,o)=>{a.value=e.data.url,E({message:r("upload.success"),type:"success"})}};return t.headers.token=k(),t.headers["site-id"]=w.get("siteId")||0,(e,o)=>{const n=B,i=C;return f(),g(i,S(t,{class:"w-full upload-file"}),{default:l(()=>[x(e.$slots,"default",{},()=>[y(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=m=>V(a)?a.value=m:null),class:"w-full",readonly:!0},{append:l(()=>[v(h(p(r)("upload.root")),1)]),_:1},8,["modelValue"])])]),_:3},16)}}});export{D as _};
