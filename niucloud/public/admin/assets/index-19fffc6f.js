import{d as K,R as L,r as V,w as M,e as c,f as g,g as s,F as C,z as I,n as N,B as m,Q as w,u as n,y as i,x as p,A as f,H as R,v as U}from"./base-04829be5.js";/* empty css                   *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import{v as y}from"./index-30df2c14.js";import{t as r}from"./index-043d021e.js";import{f as W,a as X}from"./storage-1a3ddb14.js";import{b as Y}from"./vue-router-fee568b2.js";import{b as Z,c as ee,d as te}from"./diy-7cd4083a.js";import{a as $}from"./index-92283b18.js";import{E as le}from"./index-db9b8d96.js";import{E as ae}from"./index-eb678249.js";import{a as oe,E as se}from"./index-6bd50bb5.js";import{a as ie,E as re}from"./index-02bf3820.js";import{E as pe}from"./index-b1557f8a.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-7e933ae4.js";import"./common-111e3797.js";import"./common-2cf17469.js";import"./index-faea7bd5.js";import"./index-236cb599.js";import"./typescript-defaf979.js";import"./index-a2524300.js";import"./event-9519ab40.js";import"./index-d7f4b4bb.js";import"./index-de053f2e.js";import"./error-78e43d3e.js";import"./index-4edf2cad.js";import"./castArray-11aea762.js";import"./_Uint8Array-99b916e9.js";import"./_initCloneObject-e5a1aa13.js";import"./index-94a82d50.js";import"./focus-trap-be36cfe9.js";import"./index-e9e16697.js";import"./index-bf9de702.js";import"./strings-4ec3ae35.js";import"./index-1d455165.js";import"./scroll-e5463626.js";import"./isEqual-ba353d68.js";import"./debounce-f064e94e.js";import"./index-b519934c.js";import"./validator-6838b9a3.js";import"./index-9a9de0a3.js";import"./vnode-85ccdc7f.js";const me={class:"flex flex-wrap"},de={class:"absolute top-[46px] left-[50%] translate-x-[-50%] text-[14px] truncate w-[130px] text-center"},ue={class:"w-[282px] h-[493px] mx-auto"},ce=["src","onLoad"],fe={class:"w-[282px] h-[493px] mx-auto bg-body pt-[20px] px-[20px]"},_e={class:"font-bold text-xl mb-[40px]"},ve={class:"mb-[20px] flex flex-col"},xe={class:"mb-[10px]"},ge={class:"overflow-hidden w-[282px] h-[493px] mx-auto"},we=["src"],ye={class:"text-[12px] text-[#999] mt-[10px] mx-auto truncate text-center w-[250px]"},be={class:"item-btn-box absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col flex-wrap"},he={class:"text-primary px-[5px]"},De={class:"mt-[10px]"},Pe={class:"dialog-footer"},Ve=K({__name:"index",setup(Ce){const l=L({}),b=V(!1),E=Y(),u=V("template"),h=V(""),a=L({type:"",mode:"",template:"",id:""}),B=()=>{a.type="",a.mode="",a.template="",a.id="",Z({}).then(t=>{for(let e in t.data)l[e]=t.data[e];for(let e in l)l[e].use_template.url&&(l[e].loadingIframe=!1,l[e].loadingDev=!1,l[e].isDisabledPop=!1,l[e].timeFrame=0,h.value=l[e].domain_url.wap_domain,l[e].wapUrl=l[e].domain_url.wap_url,F(e))})};B();const S=t=>{if(l[t].use_template.wapPreview){var e=new Date().getTime(),d=e-l[t].timeFrame;d<1e3?(l[t].loadingDev=!0,l[t].isDisabledPop=!0,l[t].loadingIframe=!1):(l[t].loadingDev=!1,l[t].isDisabledPop=!1,l[t].loadingIframe=!0)}},q=()=>{if(h.value.trim().length==0){$({type:"warning",message:`${r("wapDomainPlaceholder")}`});return}let t=h.value+"/wap";X.set({key:"wap_domain",data:t});for(let e in l)l[e].use_template.url&&(l[e].wapUrl=t,F(e));setTimeout(()=>{for(let e in l)l[e].use_template.url&&(l[e].loadingIframe=!0,l[e].loadingDev=!1,l[e].isDisabledPop=!1)},100*3)},F=t=>{l[t].use_template.wapPreview=l[t].wapUrl+l[t].use_template.url},z=(t,e)=>{b.value=!0,u.value=e.use_template.hope,a.type=t,a.mode=e.use_template.mode,u.value=="template"?a.template=e.use_template.template:u.value=="diy"&&(a.id=e.use_template.id)},A=t=>{let e={back:"/diy/index"};t.id?e.id=t.id:t.name&&(e.name=t.name);let d=E.resolve({path:"/decorate/edit",query:e});window.open(d.href)},O=t=>{let e={};t.id?e.id=t.id:t.name&&(e.name=t.name);let d=E.resolve({path:"/decorate/preview",query:e});window.open(d.href)},j=t=>{let e=E.resolve({path:"/site/diy/list"});window.open(e.href)},H=()=>{ee({type:a.type}).then(t=>{let e=!0;for(let d=0;d<t.data.length;d++)if(a.id==t.data[d].id){e=!1;break}e&&(a.id=""),l[a.type].my_page={},Object.assign(l[a.type].my_page,t.data)})};M(()=>u.value,(t,e)=>{t=="template"?a.id="":t=="diy"&&(a.mode="diy",a.template="")}),M(()=>a.template,(t,e)=>{t&&(a.mode=l[a.type].template[t].mode)});const k=V(!1),Q=()=>{if(u.value=="template"){if(a.template==""){$({type:"warning",message:`${r("placeholderTemplate")}`});return}}else if(u.value=="diy"&&a.id==""){$({type:"warning",message:`${r("placeholderMyPage")}`});return}k.value||(k.value=!0,te({...a}).then(t=>{k.value=!1,b.value=!1,B()}))};return(t,e)=>{const d=le,_=ae,D=oe,P=ie,T=re,G=se,J=pe;return c(),g(C,null,[s("div",me,[(c(!0),g(C,null,I(l,(o,v)=>(c(),g("div",{class:N(["page-item relative bg-no-repeat ml-[20px] mr-[40px] mt-[20px] bg-[#f7f7f7] w-[300px] pt-[80px] pb-[20px]",{"cursor-pointer":!o.isDisabledPop}]),key:v},[s("p",de,m(o.use_template.title),1),w(s("div",ue,[w(s("iframe",{class:"w-[282px] h-[493px] mx-auto",src:o.use_template.wapPreview,frameborder:"0",onLoad:x=>S(v)},null,40,ce),[[y,o.loadingIframe]]),w(s("div",fe,[s("div",_e,m(n(r)("developTitle")),1),s("div",ve,[s("text",xe,m(n(r)("wapDomain")),1),i(d,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=x=>h.value=x),placeholder:n(r)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),i(_,{type:"primary",onClick:e[1]||(e[1]=x=>q())},{default:p(()=>[f(m(n(r)("confirm")),1)]),_:1})],512),[[y,o.loadingDev]])],512),[[y,o.use_template.url]]),w(s("div",ge,[o.use_template.cover?(c(),g("img",{key:0,class:"max-w-full",src:n(W)(o.use_template.cover)},null,8,we)):R("",!0)],512),[[y,!o.use_template.wapPreview]]),s("p",ye,m(o.use_template.desc),1),s("div",{class:N(["item-hide absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 text-center",{disabled:o.isDisabledPop}])},[s("div",be,[i(_,{onClick:x=>z(v,o)},{default:p(()=>[f("切换")]),_:2},1032,["onClick"]),i(_,{onClick:x=>A(o.use_template)},{default:p(()=>[f("装修")]),_:2},1032,["onClick"]),i(_,{onClick:x=>O(o.use_template)},{default:p(()=>[f("预览")]),_:2},1032,["onClick"])])],2)],2))),128))]),i(J,{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=o=>b.value=o),title:n(r)("changeTemplate"),width:"400px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:p(()=>[s("span",Pe,[i(_,{onClick:e[5]||(e[5]=o=>b.value=!1)},{default:p(()=>[f(m(n(r)("cancel")),1)]),_:1}),i(_,{type:"primary",onClick:Q},{default:p(()=>[f(m(n(r)("confirm")),1)]),_:1})])]),default:p(()=>[a.type?(c(),U(G,{key:0,model:t.form,"label-width":"0px"},{default:p(()=>[i(D,{label:""},{default:p(()=>[s("div",null,[f(m(n(r)("hopeBeforeTip")),1),s("span",he,m(l[a.type].title),1),f(m(n(r)("hopeAfterTip")),1)])]),_:1}),i(D,{label:""},{default:p(()=>[i(T,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=o=>u.value=o),class:"w-full"},{default:p(()=>[i(P,{label:n(r)("changeTemplateTip")+" "+l[a.type].title+" "+n(r)("template"),value:"template"},null,8,["label"]),i(P,{label:n(r)("changeMyPageTip")+" "+l[a.type].title,value:"diy"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),w(i(D,{label:""},{default:p(()=>[i(T,{modelValue:a.template,"onUpdate:modelValue":e[3]||(e[3]=o=>a.template=o),class:"w-full"},{default:p(()=>[(c(!0),g(C,null,I(l[a.type].template,(o,v)=>(c(),U(P,{label:o.title,value:v},null,8,["label","value"]))),256))]),_:1},8,["modelValue"])]),_:1},512),[[y,u.value=="template"]]),w(i(D,{label:""},{default:p(()=>[i(T,{modelValue:a.id,"onUpdate:modelValue":e[4]||(e[4]=o=>a.id=o),class:"w-full"},{default:p(()=>[(c(!0),g(C,null,I(l[a.type].my_page,(o,v)=>(c(),U(P,{label:o.title,value:o.id},null,8,["label","value"]))),256))]),_:1},8,["modelValue"]),s("div",De,[s("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:j},m(n(r)("createPage")),1),s("span",{class:"cursor-pointer text-primary",onClick:H},m(n(r)("refreshPage")),1)])]),_:1},512),[[y,u.value=="diy"]])]),_:1},8,["model"])):R("",!0)]),_:1},8,["modelValue","title"])],64)}}});const Dt=ne(Ve,[["__scopeId","data-v-066d9006"]]);export{Dt as default};