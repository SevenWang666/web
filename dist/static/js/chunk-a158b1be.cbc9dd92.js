(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a158b1be"],{dc31:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o});var a={id:"relRequestHeadDs",queryUrl:"/app/exp/report-line/reportRefReqHeader",autoCreate:!1,autoQuery:!1},o={id:"relRequestLineDs",queryUrl:"/app/exp/requisition-line/expReportFromReqQuery",autoCreate:!1,autoQuery:!1}},e5d9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("au-view",{ref:"view",attrs:{options:e.options,bindTarget:e.bindTarget,fuzzy_query:e.fuzzy_query,queryKey:"doc_parameter"}},[r("div",{attrs:{slot:"center"},slot:"center"},[e._v("请选择需要关联的申请单")]),r("div",{attrs:{slot:"noScroll"},slot:"noScroll"},[r("au-search",{attrs:{placeholder:"搜索"},model:{value:e.fuzzy_query,callback:function(t){e.fuzzy_query=t},expression:"fuzzy_query"}})],1),r("au-data-scope",{attrs:{bindTarget:e.bindTarget}},[r("au-rows",{scopedSlots:e._u([{key:"default",fn:function(t){t.record;var a=t.data;return[r("div",{staticClass:"border-top-1px",on:{click:function(t){return e.goRequestLine(a)}}},[r("rel-request",{attrs:{data:a}})],1)]}}])})],1)],1)],1)},o=[],n=r("dc31"),u=r("ee16"),i={data:function(){return{headInfo:this.$store.getters.headInfo,fuzzy_query:"",options:{pullDownRefresh:!0,pullUpLoad:!0,scrollbar:{fade:!0,interactive:!1}},bindTarget:"",ds:""}},methods:{goRequestLine:function(e){this.$router.push({path:"/rel-line",query:{expRequisitionHeaderId:e.expRequisitionHeaderId}})}},created:function(){this.ds=this.$createDs(n["a"],this);var e={moExpReportTypeId:this.headInfo.moExpReportTypeId,expRequisitionHeaderId:this.headInfo.expRequisitionHeaderId};this.bindTarget=this.ds.getId(),this.ds.query(e)},components:{relRequest:u["a"]}},s=i,d=r("2877"),c=Object(d["a"])(s,a,o,!1,null,"688c72c5",null);t["default"]=c.exports}}]);