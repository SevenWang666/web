(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45417ab5"],{"52d5":function(e,t,s){},5459:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-style"},[s("au-input",{staticClass:"input-style",attrs:{placeholder:e.user_name.placeholder,type:e.user_name.type,maxlength:e.user_name.maxlength,readonly:e.user_name.readonly,disabled:e.user_name.disabled,autofocus:e.user_name.autofocus,autocomplete:e.user_name.autocomplete,eye:e.user_name.eye},model:{value:e.user_name.value,callback:function(t){e.$set(e.user_name,"value",t)},expression:"user_name.value"}}),s("au-input",{staticClass:"input-style",attrs:{placeholder:e.user_password.placeholder,type:e.user_password.type,maxlength:e.user_password.maxlength,readonly:e.user_password.readonly,disabled:e.user_password.disabled,autofocus:e.user_password.autofocus,autocomplete:e.user_password.autocomplete,eye:e.user_password.eye},model:{value:e.user_password.value,callback:function(t){e.$set(e.user_password,"value",t)},expression:"user_password.value"}}),s("Button",{staticClass:"margin-10",on:{click:function(t){return e.getHttp()}}},[e._v("hec4Dev login")]),s("Button",{staticClass:"margin-10",on:{click:function(t){return e.getData()}}},[e._v("hec4Dev application")]),s("Button",{staticClass:"margin-10",on:{click:function(t){return e.testMock()}}},[e._v("mock")]),s("div",[e._v(e._s(e.successResult))]),s("ul",e._l(e.arrayList,function(t){return s("li",{key:t.application_desc,staticClass:"li-style"},[e._v("\n      "+e._s(t.application_desc)+"\n    ")])}),0)],1)},r=[],n=(s("96cf"),s("3b8d")),u=s("c82f"),o=s("6d36"),c={data:function(){return{arrayList:[],successResult:"",user_name:{value:"admin",placeholder:"用户名",type:"text",readonly:!1,maxlength:100,disabled:!1,autofocus:!0,autocomplete:!0,eye:{open:!1,reverse:!1}},user_password:{value:"Hec123",placeholder:"密码",type:"password",readonly:!1,maxlength:100,disabled:!1,autofocus:!1,autocomplete:!0,eye:{open:!0,reverse:!1}}}},methods:{testMock:function(){this.$post({url:"/getData",a:"1"}).then(function(e){console.log(e)})},testHttp:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$post({url:"/hssp4dev/modules/app/sys/app_login.svc",para:{user_name:this.user_name.value,user_password:this.user_password.value,user_language:"ZHS"}});case 3:t=e.sent,this.successResult=t.record[0],e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.info(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),getHttp:function(){var e=this;this.$post({url:"/hssp4dev/modules/app/sys/app_login.svc",para:{user_name:this.user_name.value,user_password:this.user_password.value,user_language:"ZHS"}}).then(function(t){e.successResult=t.record[0]},function(e){console.log(e)})},getData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$post({url:"/hssp4dev/autocrud/app.APP2000.app_top_appli_query/query",para:{data_type:"top_application_query",action:"query",pagenum:1,pagesize:1e3,fechall:"false"}});case 3:t=e.sent,this.arrayList=t.record,console.info(t),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.info(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.$post({url:"/headData"})},components:{Button:u["a"],auInput:o["a"]}},l=c,p=(s("dd65"),s("2877")),i=Object(p["a"])(l,a,r,!1,null,"e001acb0",null);t["default"]=i.exports},dd65:function(e,t,s){"use strict";var a=s("52d5"),r=s.n(a);r.a}}]);