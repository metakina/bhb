(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myNft-index"],{"12b1":function(t,e,a){"use strict";a.r(e);var n=a("2656"),i=a("28ba");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("eb57");var r=a("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"6e5583aa",null,!1,n["a"],void 0);e["default"]=o.exports},"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2656:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={topnavi:a("c7e7").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"myTeam"},[n("v-uni-view",{staticClass:"topavi"},[n("topnavi")],1),n("v-uni-view",{staticClass:"section"},[n("img",{staticClass:"boxBanner",attrs:{src:a("c1fd"),alt:""}}),n("v-uni-view",{staticClass:"header-info"},[n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("home.H61")))]),n("v-uni-view",{staticClass:"subTitle"},[t._v(t._s(t.$t("home.H62")))]),n("v-uni-view",{staticClass:"openBtn"},[t._v("100BHB "+t._s(t.$t("home.H63")))])],1),n("v-uni-view",{staticClass:"market-info"},[n("v-uni-view",{staticClass:"typeTitle"},[t._v(t._s(t.$t("home.H64")))]),n("v-uni-view",{staticClass:"market-list"},t._l(t.list,(function(e,a){return n("v-uni-view",{key:a,staticClass:"box-card"},[n("v-uni-view",{staticClass:"coverImg"},[n("img",{staticClass:"boxImg",attrs:{src:"/static/home/rab.png",alt:""}})]),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"box-btn"},[n("v-uni-view",{staticClass:"num"},[t._v("100"),n("v-uni-text",[t._v("usdt")])],1),n("v-uni-view",{staticClass:"btn"},[t._v(t._s(t.$t("home.H65")))])],1)],1)})),1)],1)],1)],1)},s=[]},"28ba":function(t,e,a){"use strict";a.r(e);var n=a("3286"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},3286:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a("e53b");var n={components:{},data:function(){return{Keystart:0,Seach:"",Hasnext:1,usreaddress:"",list:[{Address:"0xBAD7...E116",Pledge:"12",name:"生肖-兔",num:"54.000.000"},{Address:"0xBAD7...E116",Pledge:"12",name:"生肖-虎",num:"54.000.000"},{Address:"0xBAD7...E116",Pledge:"12",name:"生肖-兔",num:"54.000.000"},{Address:"0xBAD7...E116",Pledge:"12",name:"生肖-虎",num:"54.000.000"}]}},mounted:function(){this.usreaddress=uni.getStorageSync("account")||""},computed:{},onShow:function(){this.initTab()},methods:{toUrl:function(t){uni.navigateTo({url:t})},initTab:function(){uni.setTabBarItem({index:0,text:this.$t("home.H6")}),uni.setTabBarItem({index:1,text:this.$t("home.H7")}),uni.setTabBarItem({index:2,text:this.$t("home.H8")}),uni.setTabBarItem({index:3,text:this.$t("home.H9")}),uni.setTabBarItem({index:4,text:this.$t("home.H10")})}}};e.default=n},ac4d:function(t,e,a){t.exports=a.p+"static/img/boxBg.f59ce724.png"},c1fd:function(t,e,a){t.exports=a.p+"static/img/boxBanner.27c91213.png"},e73d:function(t,e,a){var n=a("fd68");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3eea1444",n,!0,{sourceMap:!1,shadowMode:!1})},eb57:function(t,e,a){"use strict";var n=a("e73d"),i=a.n(n);i.a},fd68:function(t,e,a){var n=a("24fb"),i=a("1de5"),s=a("ac4d");e=n(!1);var r=i(s);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myTeam .section[data-v-6e5583aa]{padding:16px 0 0}.myTeam .section .boxBanner[data-v-6e5583aa]{width:239px;height:283px;margin:40px auto 30px;display:block}.myTeam .section .header-info[data-v-6e5583aa]{height:363px;background-image:url('+r+");background-size:100% 100%;padding:31px 16px 0}.myTeam .section .header-info uni-view[data-v-6e5583aa]{text-align:center}.myTeam .section .header-info .line[data-v-6e5583aa]{width:32px;height:8px;background:#09f0ff;border-radius:4px;margin:0 auto}.myTeam .section .header-info .title[data-v-6e5583aa]{margin:24px 0 16px;font-size:30px;font-family:PangMenZhengDao;color:#09f0ff}.myTeam .section .header-info .subTitle[data-v-6e5583aa]{font-size:16px;font-family:PingFangSC,PingFang SC;font-weight:400;color:#fff;line-height:24px}.myTeam .section .header-info .openBtn[data-v-6e5583aa]{margin-top:25px;width:343px;height:50px;line-height:50px;border-radius:25px;text-align:center;background:#09f0ff;font-size:16px;font-weight:400;color:#1f1f1f}.myTeam .section .market-info[data-v-6e5583aa]{margin:13px 0 0;padding:28px 16px 40px;position:relative;top:-140px}.myTeam .section .market-info .typeTitle[data-v-6e5583aa]{font-size:20px;font-weight:800;color:#fff;text-align:center;margin-bottom:24px}.myTeam .section .market-info .market-list[data-v-6e5583aa]{display:grid;grid-template-columns:165.5px 165.5px;grid-column-gap:12px;grid-row-gap:12px;width:100%}.myTeam .section .market-info .market-list .box-card[data-v-6e5583aa]{background:#1f1f1f;border-radius:10px;border:1px solid #424242;padding:10px}.myTeam .section .market-info .market-list .box-card .coverImg[data-v-6e5583aa]{width:145px;height:145px}.myTeam .section .market-info .market-list .box-card .coverImg img[data-v-6e5583aa]{width:100%;height:100%;border-radius:10px}.myTeam .section .market-info .market-list .box-card .name[data-v-6e5583aa]{font-size:15px;font-weight:500;color:#f1feff;margin:8px 0 10px}.myTeam .section .market-info .market-list .box-card .box-btn[data-v-6e5583aa]{display:flex;align-items:center;justify-content:space-between;height:34px;line-height:34px;background:#09f0ff;padding-right:11px;border-radius:18px}.myTeam .section .market-info .market-list .box-card .box-btn .num[data-v-6e5583aa]{width:93px;height:30px;line-height:30px;background:#1f1f1f;border-radius:20px 0 0 20px;border:2px solid #09f0ff;text-align:center}.myTeam .section .market-info .market-list .box-card .box-btn .num uni-view[data-v-6e5583aa]{font-size:11px;font-weight:500;color:#f1feff}.myTeam .section .market-info .market-list .box-card .box-btn .num uni-text[data-v-6e5583aa]{font-size:11px!important}.myTeam .section .market-info .market-list .box-card .box-btn .btn[data-v-6e5583aa]{font-size:14px;font-weight:500;color:#424242}",""]),t.exports=e}}]);