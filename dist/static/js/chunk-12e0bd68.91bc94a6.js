(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-12e0bd68"],{2351:function(e,t,o){},"2da2":function(e,t,o){"use strict";var n=o("2351");o.n(n).a},f2e0:function(e,t,o){"use strict";o.r(t),o("ac6a"),o("c5f6");var n=o("75fc"),r=[{id:"agreeDs",queryUrl:"",submitUrl:"/app/wfl/todo/approve",autoCreate:!0,autoQuery:!1,fields:[{name:"commentText",prompt:"审批意见",placeholder:"请填写审批意见",required:!0,readonly:!1,key:"commentText",editor_type:"Textarea",length:""}]},{id:"refuseDs",queryUrl:"",submitUrl:"/app/wfl/todo/approve",autoCreate:!0,autoQuery:!1,fields:[{name:"commentText",prompt:"审批意见",placeholder:"请填写审批意见",required:!0,readonly:!1,key:"commentText",editor_type:"Textarea",length:""}]},{id:"signDs",queryUrl:"",submitUrl:"/app/wfl/todo/addApprover",autoCreate:!0,autoQuery:!1,fields:[{name:"value",prompt:"加签节点",placeholder:"请选择",required:!0,readonly:!1,editor_type:"ComboBox",key:"value",queryDs:"wfl_add_approver_priority_query",display_field:"meaning",mapping:[{from:"value",to:"value"},{from:"meaning",to:"meaning"}]},{name:"employeeName",prompt:"加签员工",placeholder:"请选择",required:!0,key:"userId",readonly:!1,editor_type:"Lov",length:"",mapping:[{from:"employeeName",to:"employeeName"},{from:"userId",to:"userId"}],lovConfig:{id:"wfl_users_lov",queryUrl:"/app/exp/employee/getEmployeeAndCompany",autoQuery:!1},others:{componentName:"au-card-b",queryKey:"query_condition",mapping:[{key:"employeeName",position:"headLeft"},{key:"employeeCode",position:"headRight"},{key:"unitDesc",position:"contentA"},{key:"positionDesc",position:"footerA"}]},lovCode:"",lovCodeUrl:""},{name:"commentText",prompt:"审批意见",placeholder:"请填写审批意见",required:!0,key:"commentText",readonly:!1,editor_type:"Textarea",length:""}]},{id:"transformDs",queryUrl:"",submitUrl:"/app/wfl/todo/deliver",autoCreate:!0,autoQuery:!1,fields:[{name:"employeeName",prompt:"转交员工",placeholder:"请选择",required:!0,key:"userId",readonly:!1,editor_type:"Lov",length:"",mapping:[{from:"employeeName",to:"employeeName"},{from:"userId",to:"userId"}],lovConfig:{id:"wfl_users_lov",queryUrl:"/app/exp/employee/getEmployeeAndCompany",autoQuery:!1},others:{componentName:"au-card-b",queryKey:"query_condition",mapping:[{key:"employeeName",position:"headLeft"},{key:"employeeCode",position:"headRight"},{key:"unitDesc",position:"contentA"},{key:"positionDesc",position:"footerA"}]},lovCode:"",lovCodeUrl:""},{name:"commentText",prompt:"审批意见",placeholder:"请填写审批意见",required:!0,key:"commentText",readonly:!1,editor_type:"Textarea",length:""}]}],i={ds:[].concat(Object(n.a)(r),[{id:"app_pages_infor",queryUrl:"/app/page/getInfo",autoCreate:!1,autoQuery:!1},{id:"wfl_add_approver_priority_query",queryUrl:"/app/code/WFL_ADD_APPROVER_ORDER ",autoCreate:!1,autoQuery:!1}]),name:"approve_detail",components:{},directives:{},filters:{},props:{instanceId:{type:[String,Number],default:function(){return""}},insRecipientId:{type:[String,Number],default:""}},data:function(){return{picker:"",selectValue:"",hasFooter:!0,inputValue:"",buttons:[{class:"button-refuse",text:this.$t("COMMON.REJECT"),callback:this.refuse},{class:"button-agree",text:this.$t("COMMON.AGREE"),callback:this.agree}],priorityDs:{}}},watch:{inputValue:function(e,t){}},computed:{recordsData:function(){return this.ds?this.ds.getAllRecordData():""},todoObj:function(){var e={};return this.recordsData[0]&&("N"===this.recordsData[0].todo_flag?(e.title=this.$t("APP_LIST.PROCESSED"),e.flag=!1):(e.title=this.$t("APP_LIST.PROCESSING"),e.flag=!0)),e},getTypeData:function(){return this.priorityDs?this.priorityDs.getAllRecordData():""},transferRecord:function(){var e=this.getTypeData.slice();return e instanceof Array&&e.forEach(function(e){e.valuer=e.value,e.text=e.meaning}),[e]}},methods:{agree:function(){var e=this;this.$createDialogDs({type:"prompt",title:"同意",id:"agreeDs",onConfirm:function(){var t=e.$getDs("agreeDs"),o={approveList:[{instanceId:e.instanceId,insRecipientId:e.insRecipientId,_status:"update",action:"AGREE",commentText:t.getCurrentRecord().get("commentText")}]};t.submit(o).then(function(t){e.$router.go(-1)},function(e){})},onCancel:function(){}}).show()},refuse:function(){var e=this;this.$createDialogDs({type:"prompt",title:"拒绝",id:"refuseDs",onConfirm:function(){var t=e.$getDs("refuseDs"),o={approveList:[{instanceId:e.instanceId,insRecipientId:e.insRecipientId,_status:"update",action:"REFUSE",commentText:t.getCurrentRecord().get("commentText")}]};t.submit(o).then(function(t){e.$router.go(-1)},function(e){})},onCancel:function(){e.inputValue=""}}).show()},pickerType:function(){this.$createPicker({title:"加签节点",data:this.transferRecord,onSelect:function(){},onCancel:function(){}}).show()},transform:function(){var e=this;this.$createDialogDs({type:"prompt",title:"转交",id:"transformDs",onConfirm:function(){var t=e.$getDs("transformDs"),o=t.getCurrentRecord(),n={instanceId:e.instanceId,insRecipientId:e.insRecipientId,status:"DELIVER",commentText:o.get("commentText"),targetUserId:o.get("userId")};t.submit(n).then(function(t){e.$router.go(-1)},function(e){})},onCancel:function(){}}).show()},sign:function(){var e=this;this.$createDialogDs({type:"prompt",title:"加签",id:"signDs",onConfirm:function(){var t=e.$getDs("signDs"),o=t.getCurrentRecord(),n={instanceId:e.instanceId,insRecipientId:e.insRecipientId,commentText:o.get("commentText"),order:"BEFORE",addApprovers:[{userId:o.get("userId")}]};t.submit(n).then(function(t){e.$router.go(-1)},function(e){})},onCancel:function(){e.inputValue=""}}).show()},moreAction:function(){var e=this;this.PopupBall?this.PopupBall.changeShow():(this.PopupBall=this.$createPopupBall({balls:[{text:"转交",icon:"hec-icon-sign",click:function(){e.transform()}},{text:"加签",icon:"hec-icon-turn",click:function(){e.sign()}}]}),this.PopupBall.changeShow())}},created:function(){this.ds=this.$getDs("app_pages_infor"),this.priorityDs=this.$getDs("wfl_add_approver_priority_query"),this.ds.query({instanceId:this.instanceId}),this.priorityDs.query({instanceId:this.instanceId})},mounted:function(){},activated:function(){}},a=(o("2da2"),o("2877")),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("au-view",{staticClass:"view-container",attrs:{hasFooter:e.todoObj.flag}},[o("div",{attrs:{slot:"center"},slot:"center"},[e._v(e._s(e.todoObj.title))]),o("div",[o("au-document",{attrs:{records:e.recordsData}})],1),e.todoObj.flag?o("div",{attrs:{slot:"footer"},slot:"footer"},[o("au-footer-bar",{attrs:{buttons:e.buttons}},[o("div",{staticClass:"font-common text-align-center color-1469 width-100 scale-dots",on:{click:e.moreAction}},[e._v("\n        ● ● ●\n      ")])])],1):e._e()])},[],!1,null,"274e156c",null);t.default=s.exports}}]);