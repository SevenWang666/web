(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ffbcea6","chunk-2d0d7474"],{"0fda":function(e,l,t){"use strict";t.r(l);var n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("au-view",{ref:"view",staticClass:"expkeyboard",attrs:{bottomSize:e.bottomSize}},[t("div",{attrs:{slot:"center"},slot:"center"},[e._v("费用类型选择")]),t("div",{ref:"expContent",staticClass:"ion-content"},e._l(e.data,function(l,n){return t("div",{key:n,staticClass:"pos-item"},[t("div",{staticClass:"parent-desc"},[e._v(e._s(l.description))]),e._l(l.items,function(n,o){return t("div",{key:o},[t("div",{staticClass:"col exp-style"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectItem,expression:"selectItem"}],staticClass:"radio-style",attrs:{type:"radio"},domProps:{value:n.moExpenseItemId,checked:e._q(e.selectItem,n.moExpenseItemId)},on:{click:function(t){return e.selectChild(l,n,t)},change:function(l){e.selectItem=n.moExpenseItemId}}}),t("div",{ref:"childItem",refInFor:!0,staticClass:"radio-content"},[t("span",[e._v(e._s(n.description))]),t("au-svg-icon",{staticClass:"dot-border icon-pos radio-icon",attrs:{svgName:"selected"}})],1)])])})],2)}),0)]),t("keyboard",{ref:"keyboard",attrs:{fullScreen:e.fullScreen},on:{confirm:e.getResult,cancel:e.cancel}},[t("div",{staticClass:"row currency-desc",staticStyle:{background:"#65799B",color:"white"}},[t("div",{staticClass:"col col-30"},[e._v("住宿-出国")]),t("div",{staticClass:"col col-70 text-align-right"},[t("span",[e._v("\n          CNY\n        ")]),t("span",[e._v("\n          (人民币)\n        ")])])])])],1)},o=[],d=t("75aa"),u=t("6f83"),s=t("39a6"),m={mixins:[s["a"]],data:function(){return{data:"",selectItem:2064,selected:"",keyboard:"",scroll:"",bottomSize:0,firstFlag:!0,fullScreen:!1}},methods:{selectChild:function(e,l,t){var n=this.scroll.getScrollPosition(),o=n.y;console.log(t.target.getBoundingClientRect());var d=t.target.getBoundingClientRect().bottom,u=window.innerHeight,s=305;if(u-d<s){var m=s-(u-d);console.log("clientX:".concat(d,"---height:").concat(m));var r=m+-o;console.log("需要滚动的高度::"+r),this.scroll.scrollTo.call(this.scroll,0,-r,1e3)}this.keyboard.show()},cancel:function(){this.scroll.refresh()},getResult:function(e){}},created:function(){this.data=d["default"].rows},mounted:function(){var e=this;this.keyboard=this.$refs.keyboard,this.scroll=this.$refs.view.scroll,this.$refs.expContent.addEventListener("touchmove",function(l){e.firstFlag&&(e.keyboard.hide(),e.firstFlag=!1)}),this.$refs.expContent.addEventListener("touchend",function(l){e.firstFlag=!0})},components:{Keyboard:u["q"]}},r=m,c=(t("b3ce"),t("2877")),i=Object(c["a"])(r,n,o,!1,null,"1415ed92",null);l["default"]=i.exports},"75aa":function(e,l,t){"use strict";t.r(l),l["default"]={status:null,rows:[{moExpenseTypeCode:"GY_01",moExpenseTypeId:1006234,requestId:-1,description:"差旅费用3423",items:[{moExpenseItemId:2064234,moExpenseItemCode:"GY_01",description:"差旅住宿费"},{moExpenseItemId:2064223,moExpenseItemCode:"GY_01",description:"差旅住宿费"},{moExpenseItemId:2062345,moExpenseItemCode:"GY_01",description:"差旅住宿费"},{moExpenseItemId:2063535,moExpenseItemCode:"GY_01",description:"差旅住宿费"}]},{moExpenseTypeCode:"GY_01",moExpenseTypeId:10062,requestId:-1,description:"差旅费用",items:[{moExpenseItemId:2064,moExpenseItemCode:"GY_01",description:"差旅住宿费"},{moExpenseItemId:2065,magOrgId:null,moExpenseItemCode:"GY_02",description:"差旅交通费",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2066,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2067,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2068,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2069,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2070,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:2071,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null}],programId:-1},{moExpenseTypeCode:"GY_02",moExpenseTypeId:10063,requestId:-1,description:"专项费用",items:[{moExpenseItemId:23067,magOrgId:null,moExpenseItemCode:"GY_04",description:"培训费",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:23068,magOrgId:null,moExpenseItemCode:"GY_05",description:"商务交流费",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:33067,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null},{moExpenseItemId:33367,magOrgId:null,moExpenseItemCode:"GY_03",description:"差旅其他",currencyCode:null,standardPrice:null,moReqItemId:null,budgetItemId:null,enabledFlag:null,moReqItemDesc:null,moReqItemCode:null,budgetItemDesc:null,budgetItemCode:null,tip:null,objectVersionNumber:null}],programId:-1}],success:!0,total:2}},b3ce:function(e,l,t){"use strict";var n=t("b766"),o=t.n(n);o.a},b766:function(e,l,t){}}]);