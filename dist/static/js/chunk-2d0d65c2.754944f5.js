(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d65c2"],{"71e7":function(t,e,o){"use strict";o.r(e);var i={data:function(){return{alldata:[{pic:o("44e9"),text:this.$t("IN_GA_LIST.PAPERINVOICE"),desc:[this.$t("IN_GA_LIST.SECIAL"),this.$t("IN_GA_LIST.COMMON")]},{pic:o("2f2d"),text:this.$t("IN_GA_LIST.ELECTRONICINVOICE")},{pic:o("9501"),text:this.$t("IN_GA_LIST.OTHERINVOICE")}],alldataEletric:[{pic:o("d9ab"),text:this.$t("IN_GA_LIST.QRCODEGATHERING")},{pic:o("7f0d"),text:this.$t("IN_GA_LIST.FROMWECHATCARDS"),desc:[this.$t("IN_GA_LIST.ONLYSINGLE")]}]}},methods:{showPopFormBottom:function(){var t=this,e=this.$createPopupFromBottom({alldata:this.alldata,onConfirm:function(o){e.remove(),"其他发票采集"==o.text||"Other Invoice"==o.text?t.$router.push({name:"invoice-information"}):"电子票采集"==o.text||"Electronic Invoice"==o.text?t.$createPopupFromBottom({alldata:t.alldataEletric,onConfirm:function(t){"二维码采集"==t.text||t.text}}).show():"纸质票采集"!=o.text&&"Paper Invoice"!=o.text||t.$createActionSheet({active:0,data:[{content:"拍照"},{content:"从相册中选择"}],onSelect:function(t){}}).show()}}).show()}}},n=o("2877"),c=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("au-button",{on:{click:this.showPopFormBottom}},[this._v("Menus")])],1)},[],!1,null,"72843500",null);e.default=c.exports}}]);