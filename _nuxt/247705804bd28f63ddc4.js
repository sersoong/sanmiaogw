(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("36be8f9d",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";var l=n(251);n.n(l).a},253:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".title_text[data-v-f292bc50]{font-size:13px}.subtitle_text[data-v-f292bc50],.title_text[data-v-f292bc50]{color:#333;cursor:pointer;text-decoration:none;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.subtitle_text[data-v-f292bc50]{font-size:12px}",""])},254:function(t,e,n){"use strict";n(27);var l={props:{contentPageTitle:{type:Object,default:function(){}}},mounted:function(){var t=this.$store.$router.history.current.path.split("/")[1],e=this.$store.$router.history.current.path.split("/")[2];for(var n in""!==t&&void 0!==e&&(this.clearalleffect(),this.contentPageTitle&&(this.contentPageTitle[e].isclicked=!0)),this.$store.state.navtitle.navtitles)if(t===n)return;this.$store.commit("navtitle/clearAllGif")},methods:{titleEnter:function(t){this.contentPageTitle[t].ishover=!0},titleLeave:function(t){this.contentPageTitle[t].ishover=!1},subtitleEnter:function(t){t.ishover=!0},subtitleLeave:function(t){t.ishover=!1},clicktitle:function(t){this.clearalleffect(),this.contentPageTitle[t].isclicked=!0},clearalleffect:function(){for(var t in this.contentPageTitle)this.contentPageTitle[t].isclicked=!1}}},o=(n(252),n(16)),c=n(30),r=n.n(c),f=n(243),v=n(244),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticStyle:{width:"700px"},attrs:{"mb-5":"",row:"","justify-center":"","align-start":"","text-xs-center":""}},t._l(t.contentPageTitle,function(title,e){return n("v-flex",{key:e,attrs:{xs4:""}},[n("v-layout",{attrs:{column:"","align-center":"","text-xs-left":""}},[n("nuxt-link",{staticClass:"title_text",attrs:{to:title.link}},[n("v-flex",{staticStyle:{width:"150px",display:"block"},attrs:{"mb-2":""},on:{click:function(n){return t.clicktitle(e)},mouseenter:function(n){return t.titleEnter(e)},mouseleave:function(n){return t.titleLeave(e)}}},[n("span",[t._v("\n                    "+t._s(title.ishover||title.isclicked?title.cntitle:title.entitle)+"\n                ")])])],1),t._v(" "),n("v-layout",{attrs:{column:"","align-start":""}},[t._l(title.subtitle,function(e,i){return[n("nuxt-link",{key:i,staticClass:"subtitle_text",attrs:{to:e.link}},[n("v-flex",{staticStyle:{"margin-top":"2px",width:"150px",display:"block",cursor:"pointer"},on:{mouseenter:function(n){return t.subtitleEnter(e)},mouseleave:function(n){return t.subtitleLeave(e)}}},[n("span",[t._v("\n                                "+t._s(e.ishover||e.isclicked?e.cntitle:e.entitle)+"\n                            ")])])],1)]})],2)],1)],1)}),1)},[],!1,null,"f292bc50",null);e.a=component.exports;r()(component,{VFlex:f.a,VLayout:v.a})},268:function(t,e,n){var content=n(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("33b6b845",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";var l=n(268);n.n(l).a},337:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".character{font-size:12px;line-height:30px;font-family:mircosoft yahei}",""])},439:function(t,e,n){"use strict";n.r(e);var l={components:{ContentTitle:n(254).a},data:function(){return{contentPageTitle:{activities:{entitle:"ACTIVITIES",cntitle:"活动",link:"/info/activities",ishover:!1,isclicked:!0},newstore:{entitle:"NEW STORE OPENING",cntitle:"新店开业",link:"/info/newstore",ishover:!1,isclicked:!1}}}}},o=(n(336),n(16)),c=n(30),r=n.n(c),f=n(243),v=n(244),component=Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("ContentTitle",{attrs:{"content-page-title":this.contentPageTitle}})],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("nuxt-child")],1)],1)},[],!1,null,null,null);e.default=component.exports;r()(component,{VFlex:f.a,VLayout:v.a})}}]);