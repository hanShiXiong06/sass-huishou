import{d as Q,r as x,R as q,V as J,e as n,f,y as t,x as s,g as m,B as i,u as a,A as d,F as L,z as T,v as g,Q as K,H as X}from"./base-04829be5.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                *//* empty css                     *//* empty css                       *//* empty css                  */import{_ as Z}from"./site_logo-f276251b.js";import{f as ee}from"./storage-1a3ddb14.js";import{t as o}from"./index-043d021e.js";import{n as te,t as ae,v as oe,w as le,x as re}from"./site-be3599ef.js";import{u as se,b as ie}from"./vue-router-fee568b2.js";import{_ as ne}from"./edit-site.vue_vue_type_script_setup_true_lang-d46aafad.js";/* empty css                   */import{a as pe}from"./index-92283b18.js";import{E as me}from"./index-eb678249.js";import{E as de}from"./index-db9b8d96.js";import{a as ue,E as ce}from"./index-6bd50bb5.js";import{a as _e,E as fe}from"./index-02bf3820.js";import{E as ge}from"./index-0515f627.js";import{E as he}from"./index-88566e4e.js";import{E as ve}from"./index-7e933ae4.js";import{E as be}from"./index-7037df89.js";import{a as xe,E as ye}from"./index-ed9a1afd.js";import{E as ke}from"./index-bf9de702.js";import{E as Ee}from"./index-1808e3f9.js";import{v as we}from"./directive-013f0a4e.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-30df2c14.js";import"./common-111e3797.js";import"./common-2cf17469.js";import"./index-faea7bd5.js";import"./index-236cb599.js";/* empty css                   */import"./index-b1557f8a.js";import"./index-9a9de0a3.js";import"./error-78e43d3e.js";import"./scroll-e5463626.js";import"./vnode-85ccdc7f.js";import"./index-1d455165.js";import"./focus-trap-be36cfe9.js";import"./index-a2524300.js";import"./event-9519ab40.js";import"./index-de053f2e.js";import"./index-4edf2cad.js";import"./typescript-defaf979.js";import"./index-d7f4b4bb.js";import"./castArray-11aea762.js";import"./_Uint8Array-99b916e9.js";import"./_initCloneObject-e5a1aa13.js";import"./index-94a82d50.js";import"./index-e9e16697.js";import"./strings-4ec3ae35.js";import"./isEqual-ba353d68.js";import"./debounce-f064e94e.js";import"./index-b519934c.js";import"./validator-6838b9a3.js";import"./flatten-94587e2b.js";import"./index-9d53c87f.js";import"./index-c3b3b83a.js";import"./_isIterateeCall-f0970b1f.js";const Pe={class:"main-container"},Ve={class:"flex justify-between items-center"},De={class:"text-[20px]"},Se={class:"flex items-center"},Le={class:"text-base"},Te={class:"mt-[20px]"},Ie={class:"flex items-center"},Fe=["src"],ze={key:1,class:"w-[50px] h-[50px] mr-[10px]",src:Z,alt:""},Ue={class:"flex flex flex-col"},Ye={key:0},$e={key:1},Ne={class:"mt-[16px] flex justify-end"},Be=Q({__name:"list",setup(Me){const I=se().meta.title,E=location.origin+"/site/login",w=x([]),C=x([]),l=q({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keywords:"",group_id:"",status:"",create_time:[],expire_time:[]}});(async()=>{w.value=await(await te({})).data})(),(async()=>{C.value=await(await ae()).data})();const P=x(),F=p=>{p&&(p.resetFields(),u())},u=(p=1)=>{l.loading=!0,l.page=p,oe({page:l.page,limit:l.limit,...l.searchParam}).then(r=>{l.loading=!1,l.data=r.data.data,l.total=r.data.total}).catch(()=>{l.loading=!1})};u();const z=ie(),y=x(null),U=p=>{y.value.setFormData(),y.value.showDialog=!0},Y=p=>{z.push("/admin/site/info?id="+p.site_id)},$=p=>{pe({message:o("siteUrlDevelopMessage"),grouping:!0,type:"success"})},N=()=>{window.open(E)},B=(p,r)=>{p==1&&le({site_id:r}).then(c=>{u()}),p==3&&re({site_id:r}).then(c=>{u()})};return(p,r)=>{const c=me,M=de,h=ue,v=_e,V=fe,D=ge,H=ce,S=he,R=J("Warning"),j=ve,A=be,_=xe,k=ke,G=ye,W=Ee,O=we;return n(),f("div",Pe,[t(S,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[m("div",Ve,[m("span",De,i(a(I)),1),t(c,{type:"primary",class:"w-[100px]",onClick:U},{default:s(()=>[d(i(a(o)("addSite")),1)]),_:1})]),t(S,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[t(H,{inline:!0,model:l.searchParam,ref_key:"searchFormRef",ref:P},{default:s(()=>[t(h,{label:a(o)("siteName"),prop:"keywords"},{default:s(()=>[t(M,{modelValue:l.searchParam.keywords,"onUpdate:modelValue":r[0]||(r[0]=e=>l.searchParam.keywords=e),placeholder:a(o)("siteNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(h,{label:a(o)("groupId"),prop:"group_id"},{default:s(()=>[t(V,{modelValue:l.searchParam.group_id,"onUpdate:modelValue":r[1]||(r[1]=e=>l.searchParam.group_id=e),clearable:"",placeholder:a(o)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[t(v,{label:a(o)("selectPlaceholder"),value:""},null,8,["label"]),(n(!0),f(L,null,T(w.value,e=>(n(),g(v,{label:e.group_name,value:e.group_id},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(h,{label:a(o)("status"),prop:"status"},{default:s(()=>[t(V,{modelValue:l.searchParam.status,"onUpdate:modelValue":r[2]||(r[2]=e=>l.searchParam.status=e),clearable:"",placeholder:a(o)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[t(v,{label:a(o)("selectPlaceholder"),value:""},null,8,["label"]),(n(!0),f(L,null,T(C.value,(e,b)=>(n(),g(v,{label:e,value:b},null,8,["label","value"]))),256))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(h,{label:a(o)("createTime"),prop:"create_time"},{default:s(()=>[t(D,{modelValue:l.searchParam.create_time,"onUpdate:modelValue":r[3]||(r[3]=e=>l.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(o)("startDate"),"end-placeholder":a(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(h,{label:a(o)("expireTime"),prop:"expire_time"},{default:s(()=>[t(D,{modelValue:l.searchParam.expire_time,"onUpdate:modelValue":r[4]||(r[4]=e=>l.searchParam.expire_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(o)("startDate"),"end-placeholder":a(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(h,null,{default:s(()=>[t(c,{type:"primary",onClick:r[5]||(r[5]=e=>u())},{default:s(()=>[d(i(a(o)("search")),1)]),_:1}),t(c,{onClick:r[6]||(r[6]=e=>F(P.value))},{default:s(()=>[d(i(a(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(A,{class:"warm-prompt",type:"info"},{default:s(()=>[m("div",Se,[t(j,{class:"mr-2",size:"18"},{default:s(()=>[t(R)]),_:1}),m("p",Le,[d(i(a(o)("operationTip"))+" ",1),m("span",{class:"cursor-pointer",onClick:N},i(E))])])]),_:1}),m("div",Te,[K((n(),g(G,{data:l.data,size:"large"},{empty:s(()=>[m("span",null,i(l.loading?"":a(o)("emptyData")),1)]),default:s(()=>[t(_,{prop:"site_id",label:a(o)("siteId"),"min-width":"80","show-overflow-tooltip":!0},null,8,["label"]),t(_,{label:a(o)("siteInfo"),"min-width":"180",align:"left"},{default:s(({row:e})=>[m("div",Ie,[e.logo?(n(),f("img",{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:a(ee)(e.logo),alt:""},null,8,Fe)):(n(),f("img",ze)),m("div",Ue,[m("span",null,i(e.site_name||""),1)])])]),_:1},8,["label"]),t(_,{prop:"group_name",label:a(o)("groupId"),"min-width":"80","show-overflow-tooltip":!0},null,8,["label"]),t(_,{label:a(o)("status"),"min-width":"80",align:"center"},{default:s(({row:e})=>[e.status==1?(n(),g(k,{key:0,class:"ml-2",type:"success"},{default:s(()=>[d(i(e.status_name),1)]),_:2},1024)):e.status==3?(n(),g(k,{key:1,class:"ml-2",type:"error"},{default:s(()=>[d(i(e.status_name),1)]),_:2},1024)):(n(),g(k,{key:2,class:"ml-2",type:"error"},{default:s(()=>[d(i(e.status_name),1)]),_:2},1024))]),_:1},8,["label"]),t(_,{prop:"create_time",label:a(o)("createTime"),"min-width":"140","show-overflow-tooltip":!0},null,8,["label"]),t(_,{prop:"expire_time",label:a(o)("expireTime"),"min-width":"140","show-overflow-tooltip":!0},{default:s(({row:e})=>[e.expire_time==0?(n(),f("div",Ye,"永久")):(n(),f("div",$e,i(e.expire_time),1))]),_:1},8,["label"]),t(_,{label:a(o)("operation"),fixed:"right",width:"200"},{default:s(({row:e})=>[t(c,{type:"primary",link:"",onClick:b=>$(e)},{default:s(()=>[d(i(a(o)("url")),1)]),_:2},1032,["onClick"]),t(c,{type:"primary",link:"",onClick:b=>Y(e)},{default:s(()=>[d(i(a(o)("info")),1)]),_:2},1032,["onClick"]),e.status==1||e.status==3?(n(),g(c,{key:0,type:"primary",link:"",onClick:b=>B(e.status,e.site_id)},{default:s(()=>[d(i(e.status==1?a(o)("closeTxt"):a(o)("openTxt")),1)]),_:2},1032,["onClick"])):X("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[O,l.loading]]),m("div",Ne,[t(W,{"current-page":l.page,"onUpdate:currentPage":r[7]||(r[7]=e=>l.page=e),"page-size":l.limit,"onUpdate:pageSize":r[8]||(r[8]=e=>l.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:r[9]||(r[9]=e=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1}),t(ne,{ref_key:"addSiteDialog",ref:y,onComplete:r[10]||(r[10]=e=>u())},null,512)])}}});const na=Ce(Be,[["__scopeId","data-v-b69bf594"]]);export{na as default};