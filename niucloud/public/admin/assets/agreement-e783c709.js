import{d as w,R as y,e as c,f as x,y as o,x as a,g as n,B as l,u as t,Q as E,v as k,A as d}from"./base-04829be5.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  */import{t as i}from"./index-043d021e.js";import{I as B}from"./sys-f9859bed.js";import{u as C,b as N}from"./vue-router-fee568b2.js";import{a as T,E as A}from"./index-ed9a1afd.js";import{E as D}from"./index-eb678249.js";import{E as L}from"./index-88566e4e.js";import{v as R}from"./directive-013f0a4e.js";import"./common-111e3797.js";import"./common-2cf17469.js";import"./index-faea7bd5.js";import"./storage-1a3ddb14.js";import"./index-7e933ae4.js";import"./index-30df2c14.js";import"./index-236cb599.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-92283b18.js";import"./typescript-defaf979.js";import"./index-a2524300.js";import"./index-e9e16697.js";import"./error-78e43d3e.js";import"./index-94a82d50.js";import"./index-de053f2e.js";import"./focus-trap-be36cfe9.js";import"./_Uint8Array-99b916e9.js";import"./_initCloneObject-e5a1aa13.js";import"./index-c3b3b83a.js";import"./event-9519ab40.js";import"./index-d7f4b4bb.js";import"./isEqual-ba353d68.js";import"./flatten-94587e2b.js";import"./_isIterateeCall-f0970b1f.js";import"./debounce-f064e94e.js";import"./index-b519934c.js";import"./index-1d455165.js";import"./index-4edf2cad.js";const V={class:"main-container"},j={class:"flex justify-between items-center"},$={class:"text-[20px]"},z={class:"mt-[20px]"},Rt=w({__name:"agreement",setup(I){const _=C().meta.title;let e=y({loading:!0,data:[]});(()=>{e.loading=!0,e.data=[],B().then(r=>{Object.keys(r.data).forEach(s=>e.data.push(r.data[s])),e.loading=!1}).catch(()=>{e.loading=!1})})();const u=N(),f=r=>{u.push(`/setting/agreement/edit?key=${r.agreement_key}`)};return(r,s)=>{const m=T,g=D,h=A,b=L,v=R;return c(),x("div",V,[o(b,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[n("div",j,[n("span",$,l(t(_)),1)]),n("div",z,[E((c(),k(h,{data:t(e).data,size:"large"},{empty:a(()=>[n("span",null,l(t(e).loading?"":t(i)("emptyData")),1)]),default:a(()=>[o(m,{prop:"type_name",label:t(i)("typeName"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),o(m,{prop:"title",label:t(i)("title"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),o(m,{label:t(i)("updateTime"),"min-width":"180",align:"center"},{default:a(({row:p})=>[d(l(p.update_time||""),1)]),_:1},8,["label"]),o(m,{label:t(i)("operation"),fixed:"right",width:"100"},{default:a(({row:p})=>[o(g,{type:"primary",link:"",onClick:S=>f(p)},{default:a(()=>[d(l(t(i)("config")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[v,t(e).loading]])])]),_:1})])}}});export{Rt as default};
