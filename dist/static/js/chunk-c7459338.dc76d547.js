(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c7459338"],{"88fb":function(t,e,o){"use strict";var s=o("a570");o.n(s).a},a570:function(t,e,o){},c647:function(t,e,o){"use strict";o.r(e),o("c5f6");var s={ds:[{id:"workflow_progress_query",queryUrl:"/app/exp/document-history/query",autoCreate:!0,autoQuery:!1}],props:{document_type:{type:String,default:""},document_id:{type:Number,default:0}},data:function(){return{data:[{operation_name:"新建",operation_time:"2019-09-16 14:01:37",current_flag:"Y",employee_name:"管理员-ADMIN",operation_code:"GENERATE"}]}},created:function(){var t=this.$getDs("workflow_progress_query"),e={documentType:this.document_type,documentId:this.document_id};t.query(e)},methods:{getValue:function(t){t&&this.record.get()}}},n=(o("88fb"),o("2877")),r=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("au-view",{staticClass:"background-bills"},[o("div",{attrs:{slot:"center"},slot:"center"},[t._v("进度详情")]),o("div",{staticClass:"view-container common-margin-size common-border-radius"},[o("au-data-scope",{attrs:{bindTarget:"workflow_progress_query"}},[o("au-rows",{scopedSlots:t._u([{key:"default",fn:function(e){var s=e.record,n=(e.data,e.index),r=e.length;return[o("div",{staticClass:"view-item",class:{"dot-style":0===n,"line-border-none":n===r-1}},[o("div",{staticClass:" process-desc-style"},[o("div",{staticClass:"row font-14"},[o("div",{staticClass:"col-50 font-w-600 color-333 "},[t._v("\n                  "+t._s(s.get("operation"))+"\n                ")]),o("div",{staticClass:"col-50 text-align-right minorTop-style"},[t._v("\n                  "+t._s(s.get("operationTime")?s.get("operationTime"):s.get("noteName"))+"\n                ")])]),o("div",{staticClass:"font-common"},[t._v("\n                "+t._s(s.get("operater"))+"\n              ")]),o("div",{staticClass:"desc-style"},[t._v("\n                "+t._s(s.get("description"))+"\n              ")])])])]}}])})],1)],1)])},[],!1,null,"921754ec",null);e.default=r.exports}}]);