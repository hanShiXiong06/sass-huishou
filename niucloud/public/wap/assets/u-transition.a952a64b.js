import{y as t,z as e,A as i,h as s,i as n,w as a,C as o,F as r,n as l,m as u,t as d}from"./index-15eacd31.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const c={props:{show:{type:Boolean,default:t.transition.show},mode:{type:String,default:t.transition.mode},duration:{type:[String,Number],default:t.transition.duration},timingFunction:{type:String,default:t.transition.timingFunction}}},m=t=>({enter:`u-${t}-enter u-${t}-enter-active`,"enter-to":`u-${t}-enter-to u-${t}-enter-active`,leave:`u-${t}-leave u-${t}-leave-active`,"leave-to":`u-${t}-leave-to u-${t}-leave-active`});const v=h({name:"u-transition",data:()=>({inited:!1,viewStyle:{},status:"",transitionEnded:!1,display:!1,classes:""}),computed:{mergeStyle(){const{viewStyle:t,customStyle:e}=this;return{transitionDuration:`${this.duration}ms`,transitionTimingFunction:this.timingFunction,...uni.$u.addStyle(e),...t}}},mixins:[e,i,{methods:{clickHandler(){this.$emit("click")},vueEnter(){const t=m(this.mode);this.status="enter",this.$emit("beforeEnter"),this.inited=!0,this.display=!0,this.classes=t.enter,this.$nextTick((async()=>{await uni.$u.sleep(20),this.$emit("enter"),this.transitionEnded=!1,this.$emit("afterEnter"),this.classes=t["enter-to"]}))},vueLeave(){if(!this.display)return;const t=m(this.mode);this.status="leave",this.$emit("beforeLeave"),this.classes=t.leave,this.$nextTick((()=>{this.transitionEnded=!1,this.$emit("leave"),setTimeout(this.onTransitionEnd,this.duration),this.classes=t["leave-to"]}))},onTransitionEnd(){this.transitionEnded||(this.transitionEnded=!0,this.$emit("leave"===this.status?"afterLeave":"afterEnter"),!this.show&&this.display&&(this.display=!1,this.inited=!1))}}},c],watch:{show:{handler(t){t?this.vueEnter():this.vueLeave()},immediate:!0}}},[["render",function(t,e,i,h,c,m){const v=d;return c.inited?(s(),n(v,{key:0,class:r(["u-transition",c.classes]),ref:"u-transition",onClick:t.clickHandler,style:l([m.mergeStyle]),onTouchmove:t.noop},{default:a((()=>[o(t.$slots,"default",{},void 0,!0)])),_:3},8,["onClick","class","style","onTouchmove"])):u("",!0)}],["__scopeId","data-v-159cf890"]]);export{v as _};
