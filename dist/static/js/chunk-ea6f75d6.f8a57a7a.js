(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ea6f75d6"],{"0d68":function(t,e,s){"use strict";s.r(e),s("a481"),s("ac4d"),s("8a81"),s("ac6a"),s("6762"),s("2fdb"),s("96cf");var a,i,c=s("3b8d"),l={created:(i=Object(c.a)(regeneratorRuntime.mark(function t(){var e,s,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.employeeId,s=this.$route.query.accEntityId,t.next=5,this.$post({url:"/app/expense-pool/appExpPoolRefVatQuery",para:{employeeId:e,accEntityId:s,page:1,zSize:10}});case 5:a=t.sent,this.datas=a.rows;case 7:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),data:function(){return{hasHeader:!0,hasFooter:!1,patchFlag:!0,bottomSize:0,fuzzy_query:"",datas:[],allSelected:!1,buttons:[{class:"button-relate",text:this.$t("COMMON.RELATE"),callback:this.relate}],selectIds:[]}},methods:{batchApprove:function(){this.selectIds.length=0,this.allSelected&&(this.allSelected=!1),this.patchFlag=!this.patchFlag,this.patchFlag?(this.bottomSize=0,this.hasFooter=!1):(this.bottomSize=50,this.hasFooter=!0)},clickCard:function(t){if(this.hasFooter){this.allSelected&&(this.allSelected=!1);var e=this.selectIds.indexOf(t);-1==e?this.selectIds.push(t):this.selectIds.splice(e,1),this.selectIds.length==this.datas.length&&(this.allSelected=!0)}else this.selectIds.push(t),this.relate()},checkSelect:function(t){return this.selectIds.includes(t)},selectAll:function(){if(this.allSelected=!this.allSelected,this.selectIds.length=0,this.allSelected){var t=!0,e=!1,s=void 0;try{for(var a,i=this.datas[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var c=a.value.invoiceId;this.selectIds.push(c)}}catch(t){e=!0,s=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw s}}}},relate:(a=Object(c.a)(regeneratorRuntime.mark(function t(){var e,s,a,i,c,l,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=this.$route.query.poolId,s=[],a=!0,i=!1,c=void 0,t.prev=6,l=this.selectIds[Symbol.iterator]();!(a=(r=l.next()).done);a=!0)n=r.value,s.push({poolId:parseInt(e),invoiceId:n,status:"insert"});t.next=14;break;case 10:t.prev=10,t.t0=t.catch(6),i=!0,c=t.t0;case 14:t.prev=14,t.prev=15,a||null==l.return||l.return();case 17:if(t.prev=17,!i){t.next=20;break}throw c;case 20:return t.finish(17);case 21:return t.finish(14);case 22:return t.next=24,this.$post({url:"/app/expense-pool/expensePoolRefVatSubmit",para:{lines:s}});case 24:t.sent,this.$router.replace({name:"expense_bill_operator",query:{pool_id:this.$route.query.poolId}});case 27:case"end":return t.stop()}},t,this,[[6,10,14,22],[15,,17,21]])})),function(){return a.apply(this,arguments)})}},r=(s("cb34"),s("2877")),n=Object(r.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("au-view",{ref:"view",staticClass:"view-container",attrs:{hasHeader:t.hasHeader,bottomSize:t.bottomSize,hasFooter:t.hasFooter}},[s("div",{attrs:{slot:"center"},slot:"center"},[t._v("请选择需要关联的发票")]),s("div",{attrs:{slot:"right"},slot:"right"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.datas.length,expression:"datas.length != 0"}],on:{click:t.batchApprove}},[t._v("\n      "+t._s(t.patchFlag?t.$t("EX_BI_LIST.BATCHRELATE"):t.$t("APP_LIST.CANCEL"))+"\n    ")])]),s("div",{staticClass:"wrapper"},[0==t.datas.length?s("div",{staticClass:"err"},[t._v("\n      数据为空！\n    ")]):t._e(),t._l(t.datas,function(e,a){return s("div",{key:a,staticClass:"out",on:{click:function(s){return t.clickCard(e.invoiceId)}}},[t.hasFooter?s("div",{staticClass:"cir"},[s("i",{staticClass:"select-all-icon iconfont",class:{"hec-icon-batch-approval-selected":t.checkSelect(e.invoiceId),"hec-icon-batch-approval-unselected":!t.checkSelect(e.invoiceId)}})]):t._e(),s("div",{staticClass:"card"},[s("div",{staticClass:"info-1"},[s("div",{staticClass:"time"},[t._v(t._s(e.invoiceDate))]),s("div",{staticClass:"invoice-code"},[t._v("NO."+t._s(e.invoiceCode))])]),s("div",{staticClass:"type-name"},[t._v(t._s(e.invoiceTypeName))]),s("div",{staticClass:"invoice-num"},[t._v("发票代码："+t._s(e.invoiceNumber))]),s("div",{staticClass:"purchaser"},[t._v("收款方："+t._s(e.purchaserName))]),s("div",{staticClass:"auth-name"},[t._v("销售方："+t._s(e.name))]),s("div",{staticClass:"info-2"},[s("div",{staticClass:"auth-state"},[t._v(t._s(e.authenticationStatusName))]),s("div",{staticClass:"amount"},[t._v("￥"+t._s(e.amount))])])])])})],2),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"select-container"},[s("au-footer-bar",{attrs:{buttons:t.buttons}},[s("i",{staticClass:"select-all-icon iconfont",class:{"hec-icon-batch-approval-selected":t.allSelected,"hec-icon-batch-approval-unselected":!t.allSelected},on:{click:t.selectAll}}),s("div",{staticClass:"select-all-desc"},[t._v(t._s(t.$t("COMMON.SELECTALL")))])])],1)])])},[],!1,null,"0df50af2",null);e.default=n.exports},cb34:function(t,e,s){"use strict";var a=s("ffbd");s.n(a).a},ffbd:function(t,e,s){}}]);