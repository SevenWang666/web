(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d0291b38"],{"042d":function(e,t,s){"use strict";s.r(t),s("96cf");var n,i=s("3b8d"),o=s("6f83"),r={mixins:[s("39a6").a],data:function(){return{data:"",selectItem:2064,selected:"",keyboard:"",scroll:"",bottomSize:0,firstFlag:!0,description:"",refId:0,businessTypeName:""}},methods:{selectChild:function(e,t){this.refId=e.refId,this.businessTypeName=e.businessTypeName,this.description=e.businessTypeCode;var s=this.scroll.getScrollPosition().y,n=t.target.getBoundingClientRect().bottom,i=window.innerHeight;if(i-n<305){var o=305-(i-n)-s;this.scroll.scrollTo.call(this.scroll,0,-o,0)}this.keyboard.show()},cancel:function(){this.scroll.refresh()},getResult:function(e){sessionStorage.setItem("expenseAmount",e),sessionStorage.setItem("busRefId",this.refId),sessionStorage.setItem("businessTypeName",this.businessTypeName),this.$router.go(-1)}},created:(n=Object(i.a)(regeneratorRuntime.mark(function e(){var t,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.$route.query.typeId,e.next=4,this.$post({url:"/app/lov/LOV_EXP_POOL_REF_BUS_TYPE",para:{moExpPoolTypeId:t,page:1,zSize:10}});case 4:s=e.sent,this.data=s.rows;case 7:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),mounted:function(){var e=this;this.keyboard=this.$refs.keyboard,this.scroll=this.$refs.view.scroll,this.$refs.expContent.addEventListener("touchmove",function(t){e.firstFlag&&(e.keyboard.hide(),e.firstFlag=!1)}),this.$refs.expContent.addEventListener("touchend",function(t){e.firstFlag=!0})},components:{Keyboard:o.q}},a=(s("b7ce"),s("2877")),c=Object(a.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("au-view",{ref:"view",staticClass:"expkeyboard",attrs:{bottomSize:e.bottomSize}},[s("div",{attrs:{slot:"center"},slot:"center"},[e._v("费用类型选择")]),s("div",{ref:"expContent",staticClass:"ion-content"},e._l(e.data,function(t,n){return s("div",{key:n,on:{click:function(s){return e.selectChild(t,s)}}},[s("div",{staticClass:"col exp-style"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectItem,expression:"selectItem"}],staticClass:"radio-style",attrs:{type:"radio"},domProps:{value:t.refId,checked:e._q(e.selectItem,t.refId)},on:{change:function(s){e.selectItem=t.refId}}}),s("div",{ref:"childItem",refInFor:!0,staticClass:"radio-content"},[s("span",[e._v(e._s(t.businessTypeName))]),s("au-svg-icon",{staticClass:"dot-border icon-pos radio-icon",attrs:{svgName:"selected"}})],1)])])}),0)]),s("keyboard",{ref:"keyboard",on:{confirm:e.getResult,cancel:e.cancel}},[s("div",{staticClass:"row currency-desc",staticStyle:{background:"#65799B",color:"white"}},[s("div",{staticClass:"col col-30"},[e._v(e._s(e.description))]),s("div",{staticClass:"col col-70 text-align-right"},[s("span",[e._v("\n          CNY\n        ")]),s("span",[e._v("\n          (人民币)\n        ")])])])])],1)},[],!1,null,"3ded687c",null);t.default=c.exports},2758:function(e,t,s){},b7ce:function(e,t,s){"use strict";var n=s("2758");s.n(n).a}}]);