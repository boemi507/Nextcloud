(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("[data-v-395262ee] .empty-content__icon span{background-size:64px;width:64px;height:64px}.activity__actions[data-v-395262ee]{display:flex;flex-direction:column;width:100%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
/*! third party licenses: js/vendor.LICENSE.txt */
import{n as r,c,a as l,b as u}from"./NcCheckboxRadioSwitch-PlgK1zWr-PaizJQr3.mjs";import{d as f,r as v,o as p,g as d,f as g,t as o}from"./index-DymaRpHW.mjs";import{A as y,e as m,a as h,f as _}from"./Activity-XWwZnDDc.mjs";import{g as A,a as I,b}from"./api-NR0xL2kP.mjs";import{l as S}from"./logger-YHHKXmsa.mjs";import{l as w}from"./activity-sidebar.mjs";import"./function-apply-T5nGdPJm.mjs";const x=f({__name:"ActivitySidebarPlugin",props:{plugin:null,fileInfo:null},emits:["reload-activities"],setup(t,{emit:i}){const a=t,n=v();return p(()=>{var s;return a.plugin.mount(n.value,{context:(s=d())==null?void 0:s.proxy,fileInfo:a.fileInfo,reload:()=>i("reload-activities")})}),g(()=>a.plugin.unmount()),{__sfc:!0,props:a,emit:i,attachTarget:n}}});var N=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{ref:"attachTarget"})},P=[],C=r(x,N,P,!1,null,null,null,null);const k=C.exports,E={name:"ActivityTab",components:{Activity:y,NcEmptyContent:m,NcIconSvgWrapper:h,NcLoadingIcon:c,ActivitySidebarPlugin:k},data(){return{error:"",loading:!0,fileInfo:null,activities:[],lightningBoltSVG:w,sidebarPlugins:[]}},mounted(){this.sidebarPlugins=A()},methods:{async update(t){this.fileInfo=t,this.resetState(),await this.getActivities()},async getActivities(){try{this.loading=!0;const t=await this.processActivities(await this.loadRealActivities()),i=await I({fileInfo:this.fileInfo});this.activities=[...t,...i].sort((a,n)=>n.timestamp-a.timestamp)}catch(t){this.error=o("activity","Unable to load the activity list"),console.error("Error loading the activity list",t)}finally{this.loading=!1}},resetState(){this.loading=!0,this.error="",this.activities=[]},async loadRealActivities(){try{const{data:t}=await l.get(u("apps/activity/api/v2/activity/filter"),{params:{format:"json",object_type:"files",object_id:this.fileInfo.id}});return t.ocs.data}catch(t){if(t.response!==void 0&&t.response.status===304)return[];throw e}},processActivities(t){t=t.map(a=>new _(a)),S.debug("Processed ".concat(t.length," activity(ies)"),{activities:t,fileInfo:this.fileInfo});const i=b();return t.filter(a=>!i||i.every(n=>n(a)))},t:o}};var j=function(){var t=this,i=t._self._c;return i("div",{class:{"icon-loading":t.loading}},[t.error?i("NcEmptyContent",{attrs:{name:t.error},scopedSlots:t._u([{key:"icon",fn:function(){return[i("NcIconSvgWrapper",{attrs:{svg:t.lightningBoltSVG}})]},proxy:!0}],null,!1,63559581)}):[t.sidebarPlugins.length>0?i("div",{staticClass:"activity__actions"},t._l(t.sidebarPlugins,function(a,n){return i("ActivitySidebarPlugin",{key:n,attrs:{plugin:a,"file-info":t.fileInfo},on:{"reload-activities":function(s){return t.getActivities()}}})}),1):t._e(),t.loading?i("NcEmptyContent",{attrs:{name:t.t("activity","Loading activities")},scopedSlots:t._u([{key:"icon",fn:function(){return[i("NcLoadingIcon")]},proxy:!0}],null,!1,3085876643)}):t.activities.length===0?i("NcEmptyContent",{attrs:{name:t.t("activity","No activity yet")},scopedSlots:t._u([{key:"icon",fn:function(){return[i("span",{staticClass:"icon-activity"})]},proxy:!0}])}):i("ul",t._l(t.activities,function(a){return i("Activity",{key:a.id,attrs:{activity:a,"show-previews":!1},on:{reload:function(n){return t.getActivities()}}})}),1)]],2)},L=[],T=r(E,j,L,!1,null,"395262ee",null,null);const U=T.exports;export{U as default};
