webpackJsonp([43],{"5J2c":function(t,u,n){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var e=n("osQf"),a={name:"FooterEventComponent",props:{subjudulprops:{type:String,required:!0,default:"Sub Judul Footer Kosong"}},data:function(){return{dataCopyright:"Copyright @",subjudulCopyright:this.subjudulprops}},created:function(){},mounted:function(){var t=this;e.a.$on("gantiFooters",function(u){t.gantiJudulEventBus(u)})},methods:{gantiJudulEventBus:function(t){this.subjudulCopyright=t,this.dataCopyright=t+" Copyright @ "},gantiJudulHeader:function(){e.a.$emit("gantiHeaders",{data:"Musim belah durian",isTampilkan:!0})}},computed:{copyrightTanggal:function(){var t=new Date;return this.dataCopyright+" "+t.getFullYear()+" Kucing "+this.subjudulCopyright}}},o={render:function(){var t=this,u=t.$createElement,n=t._self._c||u;return n("div",[n("footer",[n("p",[t._v(t._s(t.copyrightTanggal))]),t._v(" "),n("p",[t._v("Pesan Props "+t._s(t.subjudulprops))])]),t._v(" "),n("button",{on:{click:function(u){t.gantiJudulHeader()}}},[t._v("Ganti Judul Header")])])},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("SXsH")},"data-v-b87aaaea",null);u.default=i.exports},SXsH:function(t,u){},osQf:function(t,u,n){"use strict";var e=n("7+uW");u.a=new e.a}});
//# sourceMappingURL=43.c24eed1489f5ee7d3dec.js.map