(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,e,n){"use strict";n.r(e);n(39);var a,s=n(4),r=n.n(s),o=(n(81),{components:{},data:function(){return{randomNumber:0,message:""}},methods:{getRandom:(a=r()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("http://localhost:5000/api/random");case 2:e=t.sent,this.randomNumber=e.data.randomNumber;case 4:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),clear:function(){this.message=""},submit:function(){this.$router.push("search?"+this.message)}}}),i=n(19),c=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("div",{staticClass:"text-xs-center"}),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Welcome to the Vuetify + Nuxt.js template")]),t._v(" "),n("v-card-text",[n("div",[n("p",[t._v("ランダムな数字だよ（FlaskのAPIから非同期で取得してるよ）: "+t._s(t.randomNumber))]),t._v(" "),n("v-btn",{attrs:{loading:t.loading,disabled:t.loading,color:"secondary"},on:{click:t.getRandom},nativeOn:{click:function(e){t.loader="loading"}}},[t._v("\n        ランダムナンバー取得\n        ")])],1),t._v(" "),n("form",[n("v-textarea",{attrs:{outline:"",name:"input-7-4",label:"テキストエリア"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("v-btn",{attrs:{type:"submit"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.submit()}}},[t._v("submit")]),t._v(" "),n("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/inspire"}},[t._v("Continue")])],1)],1)],1)],1)},[],!1,null,null,null);c.options.__file="index.vue";e.default=c.exports}}]);