(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30422011"],{"356e":function(t,e,n){},"99db":function(t,e,n){"use strict";n.r(e);var i={success:!0,result:{rows:[{description:"审批模块",fun:[{id:1,title:"审批中心",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6318",parentId:0,router:"/approve"}]},{description:"发票自助模块",fun:[{id:10,title:"发票验证",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6317",parentId:1,router:"invoice-checking"},{id:9,title:"发票采集",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6316",parentId:1,router:"/invoice-list"}]},{description:"费用模块",fun:[{id:4,title:"我的申请",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6321",parentId:1,router:"/apply-list"},{id:7,title:"费用池",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6319",parentId:1,router:"/expense_bill_list"},{id:3,title:"报销单",type:"fun",src:"http://hec.hand-china.com:9090/hssp4dev/atm_download.svc?attachment_id=6320",parentId:1,router:"/expense-list"}]}]}},a={name:"all-applications",data:function(){return{data:i.result.rows,fuzzy_query:""}},computed:{},methods:{jump:function(t){"invoice-checking"==t?this.QRCode():this.$router.push({path:t}),this.$router.push({path:t})}},created:function(){}},s=(n("b0fc"),n("2877")),c=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("au-view",{ref:"view",attrs:{fuzzy_query:t.fuzzy_query,queryKey:"query_condition"}},[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("全部应用")]),n("div",{staticClass:"margin-bottom-10",attrs:{slot:"noScroll"},slot:"noScroll"},[n("au-search",{attrs:{placeholder:"搜索"},model:{value:t.fuzzy_query,callback:function(e){t.fuzzy_query=e},expression:"fuzzy_query"}})],1),t._l(t.data,function(e,i){return n("div",{key:i},[n("div",{staticClass:"line-container"},[n("div",{staticClass:"title line-height-50"},[t._v("\n          "+t._s(e.description)+"\n        ")]),t._l(e.fun,function(e,i){return n("div",{key:i,staticClass:"one-mode",on:{click:function(n){return t.jump(e.router)}}},[n("div",{staticClass:"img-container",staticStyle:{width:"45px",height:"45px"}},[n("img",{attrs:{src:e.src,width:"45px",alt:""}})]),n("span",{staticClass:"line-height-50"},[t._v(t._s(e.title))])])})],2)])}),n("div",{attrs:{slot:"no-data"},slot:"no-data"})],2)],1)},[],!1,null,"da7dfb20",null);e.default=c.exports},b0fc:function(t,e,n){"use strict";var i=n("356e");n.n(i).a}}]);