(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-64facd82"],{"343e":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=[{id:"formDs",queryUrl:"/vueDev/getData",autoCreate:!1,autoQuery:!0,fields:[{name:"unit_name",key:"unit_name",prompt:"部门",required:!0,readonly:!1,editor_type:"Combox",queryDs:"comboxone",display_field:"unit_name",mapping:[{from:"unit_name",to:"unit_name"},{from:"unit_id",to:"unit_id"}]},{name:"unit_name",key:"unit_name",prompt:"部门",required:!0,readonly:!1,editor_type:"Combox",queryDs:"comboxone",display_field:"unit_name",mapping:[{from:"unit_name",to:"unit_name"},{from:"unit_id",to:"unit_id"}]},{name:"position_name",key:"position_name",prompt:"职位",required:!0,readonly:!1,editor_type:"Combox",display_field:"position_name",queryDs:"comboxone",mapping:[{from:"position_id",to:"position_id"},{from:"position_name",to:"position_name"}]},{name:"requisition_date",key:"requisition_date",prompt:"申请日期",required:!0,readonly:!1,editor_type:"Date",length:""},{name:"arrivate_date",key:"arrivate_date",prompt:"到达时间段",required:!0,readonly:!1,editor_type:"Date",length:""},{name:"description",key:"description",prompt:"备注",required:!0,readonly:!1,editor_type:"Textarea",length:""}]},{id:"comboxone",queryUrl:"/vueDev/getUnitName",autoCreate:!1,bindTarget:"formDs",pageSize:30,autoQuery:!1,relevance_ds:["comboxtwo"]},{id:"comboxtwo",queryUrl:"/vueDev/getPositionName",autoCreate:!1,bindTarget:"formDs",pageSize:30,autoQuery:!1}]},7758:function(e,t,n){},a1e2:function(e,t,n){"use strict";var i=n("7758");n.n(i).a},fd50:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{list1:[{value:2013,name:"a",text:1},{value:2014,name:"b",text:2},{value:2015,name:"c",text:3},{value:2016,name:"d",text:4},{value:2017,name:"e",text:5},{value:2018,name:"f",text:6}],value1:2017,formDs:{}}},computed:{record:function(){var e=this.formDs.getCurrentRecord();return e},fieldObj:function(){var e;return this.record&&(e=this.record.getField("unit_name")),e},fieldObjTwo:function(){var e;return this.record&&(e=this.record.getField("position_name")),e},fieldbjTwo:function(){var e;return this.record&&(e=this.record.getField("position_name")),e},requisition_date:function(){var e;return this.record&&(e=this.record.getField("requisition_date")),e}},ds:n("343e").a,methods:{selectChange:function(e){},cancel:function(){},showCascadePicker:function(){this.cascadePicker.show()},selectHandle:function(e,t,n){},cancelHandle:function(){},selectHandleDate:function(e,t,n){},cancelHandleDate:function(){}},mounted:function(){},created:function(){this.formDs=this.$dsManager.getDs("formDs")}},a=(n("a1e2"),n("2877")),o=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("au-data-scope",{attrs:{bindTarget:"originds"}},[n("au-select",{attrs:{fieldName:e.fieldObj},on:{change:e.selectChange,cancel:e.cancel}},[n("div",{staticClass:"padding：0 10px"},[e._v("\n        自定义样式--------"+e._s(e.record?e.record.get("unit_name"):null)+"--请点击\n      ")])]),n("au-select",{attrs:{fieldName:e.fieldObj},on:{change:e.selectChange,cancel:e.cancel}}),n("au-select",{attrs:{fieldName:e.fieldObjTwo},on:{change:e.selectChange,cancel:e.cancel}})],1),n("div",{staticClass:"margin-10"},[n("div",[e._v("部门: "+e._s(e.record?e.record.get("unit_name"):null))]),n("div",[e._v("部门id: "+e._s(e.record?e.record.get("unit_id"):null))]),n("div",[e._v("职位id: "+e._s(e.record?e.record.get("position_id"):null))]),n("div",[e._v("职位: "+e._s(e.record?e.record.get("position_name"):null))])]),n("div",{staticClass:"select"},[n("cube-select",{attrs:{selectDs:"",placeholder:"cube ui 调用",options:e.list1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1)},[],!1,null,"2edfd150",null);t.default=o.exports}}]);