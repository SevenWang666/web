(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-719d159a"],{"1ee9":function(t,e,n){"use strict";var s=n("7717");n.n(s).a},7717:function(t,e,n){},"889f":function(t,e,n){"use strict";n.r(e),n("c5f6");var s={id:"prepaymentUnWriteDs",queryUrl:"/app/exp/report-pmt-schedule/queryPrepaymentUnWrite",autoCreate:!1,autoQuery:!1},o=n("7c30"),r={ds:[s],data:function(){return{fuzzy_query:"",amount:"",writeOffAmount:0,unWriteOffAmount:0,dueAmount:1,headInfo:this.$store.getters.headInfo,ds:"",buttons:[{class:"button-reset",text:"保存",callback:this.save},{class:"button-agree",text:"修改核销计划",callback:this.update}]}},computed:{progressWidth:function(){var t=Number(this.writeOffAmount)/Number(this.dueAmount);return 100*t+"%"}},methods:{save:function(){var t=this,e=this.ds.getAllRecordData(),n={key:e=e.filter(function(e){return e.cshWriteOffAmount&&(e.documentId=t.headInfo.expReportHeaderId,e.documentLineId=t.$route.params.paymentScheduleLineId),!!e.cshWriteOffAmount})};this.$post({url:"/app/exp/report-pmt-schedule/writePrePayment",para:n}).then(function(e){t.$router.back()},function(t){})},filterMoney:function(t){return o.default.action(t)},update:function(){this.query()},queryAmount:function(){var t=this;this.$post({url:"/app/exp/report-pmt-schedule/queryPrepaymentAmount",para:{paymentScheduleLineId:this.$route.params.paymentScheduleLineId}}).then(function(e){if(e.rows){var n=e.rows[0];t.writeOffAmount=n.writeOffAmount,t.unWriteOffAmount=n.unWriteOffAmount,t.dueAmount=n.dueAmount}},function(t){})},query:function(){var t={paymentScheduleLineId:this.$route.params.paymentScheduleLineId,dateFrom:this.$route.params.scheduleStartDate,dateTo:this.$route.params.scheduleDueDate};this.ds.query(t)},openkeyboard:function(t){this.$createKeyboard({value:0,onConfirm:function(e){t.set("cshWriteOffAmount",parseFloat(e))}}).show()}},created:function(){this.ds=this.$getDs(s.id),this.query(),this.queryAmount()}},a=(n("1ee9"),n("2877")),i=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("au-view",{staticClass:"view-container background-bills",attrs:{hasFooter:""}},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("借款核销")]),n("div",{staticClass:"margin-bottom-line",attrs:{slot:"noScroll"},slot:"noScroll"},[n("au-search",{attrs:{placeholder:"搜索"},model:{value:t.fuzzy_query,callback:function(e){t.fuzzy_query=e},expression:"fuzzy_query"}}),n("div",{staticClass:"white-color margin-top-10 padding-lr-14"},[n("div",{staticClass:"row ver-font-s"},[n("div",{staticClass:"col col-50"},[t._v("\n            已核销的金额:"+t._s(t._f("money")(t.writeOffAmount))+"\n          ")]),n("div",{staticClass:"col col-50 text-align-right"},[t._v("\n            收款总金额:"+t._s(t._f("money")(t.dueAmount))+"\n          ")])]),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-fill",style:{width:t.progressWidth}})]),n("div",{staticClass:"font-style-v text-align-right"},[t._v("\n          可核销金额:\n          "),n("span",[t._v(t._s(t._f("money")(t.unWriteOffAmount)))])])])],1),n("au-data-scope",{staticClass:"common-margin-size",attrs:{bindTarget:t.ds.id}},[n("au-rows",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.record,o=e.data;return[n("div",{staticClass:"white-color padding-lr-14 margin-bottom-line"},[n("div",{staticClass:"row font-style-b padding-t"},[n("div",{staticClass:"col col-30"},[t._v(t._s(o.sourceDocNumber))]),n("div",{staticClass:"col col-70 text-align-right"},[t._v("\n                行号: "+t._s(o.lineNumber)+"\n              ")])]),n("div",{},[t._v("\n              "+t._s(o.sourceDocTypeName)+"-"+t._s(o.employeeName)+"\n            ")]),n("div",{staticClass:"font-size-13 color-666 "},[t._v("\n              借款金额："+t._s(o.currencyCode)+" "+t._s(t._f("money")(o.amount))+"\n            ")]),n("div",{staticClass:"border-bottom-1px font-size-13 color-999 padding-b"},[t._v("\n              "+t._s(o.description?o.description:"暂无备注")+"\n            ")]),n("div",{staticClass:"input-height",on:{click:function(e){return t.openkeyboard(s)}}},[t._v("\n              核销金额:\n              "),0==o.cshWriteOffAmount||o.cshWriteOffAmount?n("span",[t._v("\n                "+t._s(t.filterMoney(o.cshWriteOffAmount))+"\n              ")]):n("span",{staticClass:"color-gray"},[t._v("\n                "+t._s("请输入")+"\n                "),n("i",{staticClass:"iconfont hec-icon-edit"})])])])]}}])})],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("au-footer-bar",{attrs:{buttons:t.buttons}})],1)],1)],1)},[],!1,null,"392464d8",null);e.default=i.exports}}]);