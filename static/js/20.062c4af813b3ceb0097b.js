webpackJsonp([20],{gCUi:function(e,i){},lSN4:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={name:"CustomDirectivesComponent",data:function(){return{pesan:"Hello World"}},methods:{olahDataBindings:function(e){console.log(e)}},computed:{},directives:{warnatitles:{bind:function(e){e.style.color="#"+Math.random().toString(16).slice(2,8)},inserted:function(){}},nilaidirektive:{bind:function(e,i){e.innerHTML="namabinding: "+i.name+" \n\n          nilai binding: "+i.value+" \n\n          nilai ekspresi: "+i.expression+"\n          nilai argumen: "+i.arg}}}},a={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h1",[this._v("Custom Directives")]),this._v(" "),i("p",{directives:[{name:"warnatitles",rawName:"v-warnatitles"}]},[this._v("Sampel Judul yang Berubah Warna Karena Direktives")]),this._v(" "),i("p",{directives:[{name:"nilaidirektive",rawName:"v-nilaidirektive:hellodata",value:this.pesan,expression:"pesan",arg:"hellodata"}]},[this._v("Nilai Direktives : ")])])},staticRenderFns:[]};var r=n("VU/8")(t,a,!1,function(e){n("gCUi")},"data-v-8bd106f4",null);i.default=r.exports}});
//# sourceMappingURL=20.062c4af813b3ceb0097b.js.map