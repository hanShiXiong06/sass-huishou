import{d as D,r as y,R as g,w as M,e as x,f as N,g as r,B as i,u as t,Q as j,v as B,x as l,y as o,A as h}from"./base-04829be5.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                */import{_ as O}from"./index-c1ab0e3c.js";/* empty css                 */import{t as e}from"./index-043d021e.js";import{g as $,a as I,e as K}from"./wechat-8bb0cbd0.js";import{E as Q}from"./index-30df2c14.js";import{u as W}from"./vue-router-fee568b2.js";import{a as V}from"./index-92283b18.js";import{E as F}from"./index-db9b8d96.js";import{a as L,E as G}from"./index-6bd50bb5.js";import{E as z}from"./index-88566e4e.js";import{E as H,b as J}from"./index-1cbf3455.js";import{E as X}from"./index-eb678249.js";import{v as Y}from"./directive-013f0a4e.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-f0796d29.js";/* empty css                   */import"./attachment-9a932beb.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                         */import"./index-bdd39755.js";import"./index-94a82d50.js";import"./index-7e933ae4.js";import"./index-a2524300.js";import"./index-de053f2e.js";import"./focus-trap-be36cfe9.js";import"./index-bf8db610.js";import"./index-e9e16697.js";import"./error-78e43d3e.js";import"./index-1d455165.js";import"./index-b1557f8a.js";import"./index-9a9de0a3.js";import"./scroll-e5463626.js";import"./vnode-85ccdc7f.js";import"./event-9519ab40.js";import"./index-4edf2cad.js";import"./index.vue_vue_type_script_setup_true_lang-df8a984f.js";/* empty css                */import"./sys-f9859bed.js";import"./index-faea7bd5.js";import"./storage-1a3ddb14.js";import"./index-236cb599.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d60f63e2.js";import"./aria-adfa05c5.js";import"./validator-6838b9a3.js";import"./index-760fce0d.js";import"./typescript-defaf979.js";import"./index-cbf0aee7.js";import"./index-c4af56cf.js";import"./index-ed22fe56.js";import"./debounce-f064e94e.js";import"./position-b298e95e.js";import"./index-91afef8c.js";import"./index-c3b3b83a.js";import"./index-d7f4b4bb.js";import"./isEqual-ba353d68.js";import"./_Uint8Array-99b916e9.js";import"./flatten-94587e2b.js";import"./index-1808e3f9.js";import"./index-02bf3820.js";import"./index-bf9de702.js";import"./strings-4ec3ae35.js";import"./index-b519934c.js";import"./common-111e3797.js";import"./common-2cf17469.js";import"./castArray-11aea762.js";import"./_initCloneObject-e5a1aa13.js";const Z={class:"main-container"},ee={class:"flex ml-[18px] justify-between items-center mt-[20px]"},te={class:"text-[20px]"},oe={class:"panel-title !text-sm"},ae={class:"form-tip"},le={class:"panel-title !text-sm"},re={class:"form-tip"},ie={class:"form-tip"},se={class:"panel-title !text-sm"},pe={class:"form-tip"},ne={class:"form-tip"},de={class:"form-tip"},me={class:"form-tip"},ce={class:"form-tip"},ue={class:"flex"},_e={class:"panel-title !text-sm"},fe={class:"form-tip"},he={class:"fixed-footer-wrap"},be={class:"fixed-footer"},Jt=D({__name:"config",setup(ge){const k=W().meta.title,u=y(!0),p=g({wechat_name:"",wechat_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt"}),v=y(),E=g({wechat_name:[{required:!0,message:e("wechatNamePlaceholder"),trigger:"blur"}],wechat_original:[{required:!0,message:e("wechatOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]});$().then(c=>{Object.assign(p,c.data),u.value=!1});const m=g({business_domain:"",js_secure_domain:"",serve_url:"",web_auth_domain:""});I().then(c=>{Object.assign(m,c.data),u.value=!1});const{copy:P,isSupported:S,copied:w}=Q(),_=c=>{if(!S.value){V({message:e("notSupportCopy"),type:"warning"});return}P(c)};M(w,()=>{w.value&&V({message:e("copySuccess"),type:"success"})});const C=async c=>{u.value||!c||await c.validate(async a=>{a&&(u.value=!0,K(p).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return(c,a)=>{const d=F,n=L,T=O,f=z,b=H,q=J,A=G,U=X,R=Y;return x(),N("div",Z,[r("div",ee,[r("span",te,i(t(k)),1)]),j((x(),B(A,{model:p,"label-width":"150px",ref_key:"formRef",ref:v,rules:E,class:"page-form"},{default:l(()=>[o(f,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[r("h3",oe,i(t(e)("wechatInfo")),1),o(n,{label:t(e)("wechatName"),prop:"wechat_name"},{default:l(()=>[o(d,{modelValue:p.wechat_name,"onUpdate:modelValue":a[0]||(a[0]=s=>p.wechat_name=s),placeholder:t(e)("wechatNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:t(e)("wechatOriginal"),prop:"wechat_original"},{default:l(()=>[o(d,{modelValue:p.wechat_original,"onUpdate:modelValue":a[1]||(a[1]=s=>p.wechat_original=s),placeholder:t(e)("wechatOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:t(e)("wechatQrcode"),prop:"qr_code"},{default:l(()=>[o(T,{modelValue:p.qr_code,"onUpdate:modelValue":a[2]||(a[2]=s=>p.qr_code=s)},null,8,["modelValue"]),r("div",ae,i(t(e)("wechatQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),o(f,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("h3",le,i(t(e)("wechatDevelopInfo")),1),o(n,{label:t(e)("wechatAppid"),prop:"app_id"},{default:l(()=>[o(d,{modelValue:p.app_id,"onUpdate:modelValue":a[3]||(a[3]=s=>p.app_id=s),placeholder:t(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",re,i(t(e)("wechatAppidTips")),1)]),_:1},8,["label"]),o(n,{label:t(e)("wechatAppsecret"),prop:"app_secret"},{default:l(()=>[o(d,{modelValue:p.app_secret,"onUpdate:modelValue":a[4]||(a[4]=s=>p.app_secret=s),placeholder:t(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),r("div",ie,i(t(e)("wechatAppsecretTips")),1)]),_:1},8,["label"])]),_:1}),o(f,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("h3",se,i(t(e)("theServerSetting")),1),o(n,{label:"URL"},{default:l(()=>[o(d,{"model-value":m.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[5]||(a[5]=s=>_(m.serve_url))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),o(n,{label:"Token",prop:"token"},{default:l(()=>[o(d,{modelValue:p.token,"onUpdate:modelValue":a[6]||(a[6]=s=>p.token=s),placeholder:t(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",pe,i(t(e)("tokenTips")),1)]),_:1}),o(n,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:l(()=>[o(d,{modelValue:p.encoding_aes_key,"onUpdate:modelValue":a[7]||(a[7]=s=>p.encoding_aes_key=s),placeholder:t(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),r("div",ne,i(t(e)("encodingAESKeyTips")),1)]),_:1}),o(n,{label:t(e)("encryptionType"),prop:"encryption_type"},{default:l(()=>[o(q,{modelValue:p.encryption_type,"onUpdate:modelValue":a[8]||(a[8]=s=>p.encryption_type=s)},{default:l(()=>[o(b,{label:"not_encrypt"},{default:l(()=>[h(i(t(e)("cleartextMode")),1)]),_:1}),o(b,{label:"compatible"},{default:l(()=>[h(i(t(e)("compatibleMode")),1)]),_:1}),o(b,{label:"safe"},{default:l(()=>[h(i(t(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),r("div",de,i(t(e)("cleartextModeTips")),1),r("div",me,i(t(e)("compatibleModeTips")),1),r("div",ce,i(t(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),o(f,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[r("div",ue,[r("h3",_e,i(t(e)("functionSetting")),1)]),o(n,{label:""},{default:l(()=>[r("div",fe,i(t(e)("functionSettingTips")),1)]),_:1}),o(n,{label:t(e)("businessDomain")},{default:l(()=>[o(d,{"model-value":m.business_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[9]||(a[9]=s=>_(m.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),o(n,{label:t(e)("jsSecureDomain")},{default:l(()=>[o(d,{"model-value":m.js_secure_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[10]||(a[10]=s=>_(m.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),o(n,{label:t(e)("webAuthDomain")},{default:l(()=>[o(d,{"model-value":m.web_auth_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:a[11]||(a[11]=s=>_(m.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[R,u.value]]),r("div",he,[r("div",be,[o(U,{type:"primary",loading:u.value,onClick:a[12]||(a[12]=s=>C(v.value))},{default:l(()=>[h(i(t(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{Jt as default};