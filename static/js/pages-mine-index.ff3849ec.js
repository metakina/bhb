(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-index"],{"0079":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uPopup:a("37d7").default,"u-Input":a("1b0c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"myTeam"},[n("v-uni-view",{staticClass:"section"},[n("v-uni-view",{staticClass:"user-info"},[n("v-uni-view",{staticClass:"actevr-item"},[n("img",{staticClass:"left-user",attrs:{src:a("ac3d"),alt:""}}),n("v-uni-view",{staticClass:"right-user"},[n("v-uni-view",{staticClass:"address"},[e._v(e._s(e.getCaption(e.usreaddress)))]),Number(e.level)>0&&0==Number(e.levelPower)?n("v-uni-view",{staticClass:"lave-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.activate.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"nolavel"},[e._v("LV"+e._s(e.level))]),n("v-uni-view",{staticClass:"piont"},[e._v(e._s(e.$t("home.H66"))+">")])],1):n("v-uni-view",{staticClass:"lave-item"},[n("v-uni-view",{staticClass:"lavel"},[e._v("LV"+e._s(e.level))])],1)],1)],1),Number(e.level)>=0&&Number(e.levelPower)>=0?n("v-uni-view",{staticClass:"upgrade",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upgrade.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"upgrade-btn"},[e._v(e._s(e.$t("home.H67")))])],1):n("v-uni-view",{staticClass:"no-upgrade"},[n("v-uni-view",{staticClass:"upgrade-btn"},[e._v(e._s(e.$t("home.H67")))])],1)],1),n("v-uni-view",{staticClass:"header-info"},[n("v-uni-view",{staticClass:"count-card"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-view",{staticClass:"row-left"},[n("img",{attrs:{src:a("a8db"),alt:""}}),n("v-uni-view",[e._v("USDT")])],1),n("v-uni-view",{staticClass:"row-right"},[n("v-uni-view",{staticClass:"usdt"},[e._v(e._s(e.usdtBannce))]),n("v-uni-view",[e._v(e._s(e.$t("home.H117")))])],1)],1)],1),n("v-uni-view",{staticClass:"count-card"},[n("v-uni-view",{staticClass:"row-info"},[n("v-uni-view",{staticClass:"row-left"},[n("img",{attrs:{src:a("d512"),alt:""}}),n("v-uni-view",[e._v("BHB")])],1),n("v-uni-view",{staticClass:"row-right"},[n("v-uni-view",{staticClass:"bhb"},[e._v(e._s(e.bhbBannce))]),n("v-uni-view",[e._v(e._s(e.$t("home.H117"))),n("span",{staticClass:"tran",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toNan("/pages/mine/transferaccounts/transferaccounts")}}},[e._v(e._s(e.$t("home.H70"))+">")])])],1)],1)],1)],1),n("v-uni-view",{staticClass:"account-info"},[n("v-uni-view",{staticClass:"account-item bor"},[n("v-uni-view",{staticClass:"account-label"},[e._v(e._s(e.lpPower))]),n("v-uni-view",{staticClass:"account-value"},[e._v(e._s(e.$t("home.H71")))])],1),n("v-uni-view",{staticClass:"account-item bor"},[n("v-uni-view",{staticClass:"account-label bhb"},[e._v(e._s(e.levelPower))]),n("v-uni-view",{staticClass:"account-value bhb"},[e._v(e._s(e.$t("home.H72")))])],1),n("v-uni-view",{staticClass:"account-item"},[n("v-uni-view",{staticClass:"account-label"},[e._v(e._s(e.canBuyUSDTAmount))]),n("v-uni-view",{staticClass:"account-value"},[e._v(e._s(e.$t("home.H73")))])],1),n("v-uni-view",{staticClass:"account-item"},[n("v-uni-view",{staticClass:"account-label"},[e._v(e._s(e.canExchangeAmount))]),n("v-uni-view",{staticClass:"account-value"},[e._v(e._s(e.$t("home.H74")))])],1)],1),n("v-uni-view",{staticClass:"lps-card"},[n("v-uni-view",{staticClass:"lps-header"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("home.H75"))+"(BHB)")])],1),n("v-uni-view",{staticClass:"lps-value"},[e._v(e._s(e.totalLPReward))]),n("v-uni-view",{staticClass:"lps-header"},[n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.$t("home.H75"))+"(USDT)")])],1),n("v-uni-view",{staticClass:"lps-value"},[e._v(e._s(e.totalLevelReward))]),n("v-uni-view",{staticClass:"footer-tips",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toUrl("/pages/mine/drawRecord")}}},[n("v-uni-view",{staticClass:"bhb"},[e._v(e._s(e.$t("home.H78"))+">")])],1)],1),n("v-uni-view",{staticClass:"pull-down-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.claim()}}},[e._v(e._s(e.$t("home.H79")))])],1),n("u-popup",{attrs:{show:e.show,round:10},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.show=!1}}},[n("v-uni-view",{staticClass:"computing-power"},[n("v-uni-view",{staticClass:"row-items bor"},[n("v-uni-view",[e._v(e._s(e.$t("home.H80")))]),n("v-uni-view",[e._v("291285")])],1),n("v-uni-view",{staticClass:"row-items"},[n("v-uni-view",[e._v(e._s(e.$t("home.H81")))]),n("v-uni-view",[e._v("291285")])],1)],1)],1),n("u-popup",{attrs:{show:e.showpopup,mode:"center",round:20}},[n("v-uni-view",{staticClass:"code-input"},[n("v-uni-view",{staticClass:"tips"},[e._v(e._s(e.$t("home.H118")))]),n("u--input",{attrs:{placeholder:e.$t("home.H98"),placeholderStyle:"color:#5D5D5D",border:"none",clearable:!0},model:{value:e.Recommenderaddres,callback:function(t){e.Recommenderaddres=t},expression:"Recommenderaddres"}}),n("v-uni-view",{staticClass:"recomBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toUpgrade.apply(void 0,arguments)}}},[e._v(e._s(e.$t("home.H119")))])],1)],1)],1)},o=[]},1712:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.code-input[data-v-727eb1ea]{width:280px;background:#0d0d0d;border:1px solid #00bcd4;border-radius:20px;padding:40px 20px 20px}.code-input .tips[data-v-727eb1ea]{text-align:center;font-size:20px;margin-bottom:20px}.code-input .u-input[data-v-727eb1ea]{padding:0 8px;text-align:right;height:%?80?%;background:#1b1b1b}.code-input .recomBtn[data-v-727eb1ea]{width:100px;background:#00bcd4;text-align:center;height:42px;line-height:42px;border-radius:8px;font-size:16px;margin:30px auto 0}.myTeam .section[data-v-727eb1ea]{padding:16px 16px 80px}.myTeam .section .user-info[data-v-727eb1ea]{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}.myTeam .section .user-info .actevr-item[data-v-727eb1ea]{display:flex;align-items:center}.myTeam .section .user-info .actevr-item .left-user[data-v-727eb1ea]{width:50px;height:50px;object-fit:cover}.myTeam .section .user-info .actevr-item .right-user[data-v-727eb1ea]{margin-left:6px}.myTeam .section .user-info .actevr-item .right-user .address[data-v-727eb1ea]{font-size:16px;color:#fff;margin-bottom:5px}.myTeam .section .user-info .actevr-item .right-user .lave-item[data-v-727eb1ea]{display:flex;align-items:center}.myTeam .section .user-info .actevr-item .right-user .lave-item .lavel[data-v-727eb1ea]{font-size:13px;font-weight:700;background:#ff6d02;padding:3px 6px;color:#fff;border-radius:4px 12px 4px 12px;margin-right:4px}.myTeam .section .user-info .actevr-item .right-user .lave-item .nolavel[data-v-727eb1ea]{font-size:13px;font-weight:700;background:#585858;padding:3px 8px;color:#fff;border-radius:4px 12px 4px 12px;margin-right:4px}.myTeam .section .user-info .actevr-item .right-user .lave-item .piont[data-v-727eb1ea]{color:#09f0ff;font-size:13px}.myTeam .section .user-info .upgrade[data-v-727eb1ea]{min-width:74px;height:33px;background:#09f0ff;border-radius:16px}.myTeam .section .user-info .upgrade .upgrade-btn[data-v-727eb1ea]{min-width:73px;height:29px;line-height:29px;text-align:center;border-radius:16px;margin:0 auto 1px;color:#09f0ff;border:1px solid #09f0ff;background:#1f1f1f}.myTeam .section .user-info .no-upgrade[data-v-727eb1ea]{width:74px;height:33px;background:#585858;border-radius:16px}.myTeam .section .user-info .no-upgrade .upgrade-btn[data-v-727eb1ea]{width:73px;height:29px;line-height:29px;text-align:center;border-radius:16px;margin:0 auto 1px;color:#585858;border:1px solid #585858;background:#1f1f1f}.myTeam .section .usdt[data-v-727eb1ea]{color:#1ba27a!important}.myTeam .section .bhb[data-v-727eb1ea]{color:#09f0ff!important}.myTeam .section .tran[data-v-727eb1ea]{margin-left:6px;font-size:13px!important;color:#36a4ac!important}.myTeam .section .header-info .count-card[data-v-727eb1ea]{padding:19px 14px;background:#1b1b1b;border-radius:10px;border:1px solid #424242;margin-bottom:16px}.myTeam .section .header-info .count-card .row-info[data-v-727eb1ea]{display:flex;justify-content:space-between}.myTeam .section .header-info .count-card .row-info .row-left[data-v-727eb1ea]{display:flex;align-items:center}.myTeam .section .header-info .count-card .row-info .row-left img[data-v-727eb1ea]{width:42px;height:42px}.myTeam .section .header-info .count-card .row-info .row-left uni-view[data-v-727eb1ea]{margin-left:10px;font-size:16px;font-weight:700}.myTeam .section .header-info .count-card .row-info .row-right[data-v-727eb1ea] :nth-child(1){font-size:16px;font-weight:700}.myTeam .section .header-info .count-card .row-info .row-right[data-v-727eb1ea] :nth-child(2){margin-top:6px;color:#aaa;font-size:13px}.myTeam .section .account-info[data-v-727eb1ea]{margin-top:16px;padding:14px;background:#1b1b1b;border-radius:7px;border:1px solid #424242;display:grid;grid-template-columns:50% 50%}.myTeam .section .account-info .bor[data-v-727eb1ea]{border-bottom:1px solid #424242;margin-bottom:10px;padding-bottom:15px}.myTeam .section .account-info .account-item .account-label[data-v-727eb1ea]{font-size:13px;font-weight:500}.myTeam .section .account-info .account-item .account-value[data-v-727eb1ea]{color:#aaa;margin-top:10px;font-size:13px;font-weight:500}.myTeam .section .lps-card[data-v-727eb1ea]{margin:16px 0 45px;padding:16px 14px;background:#1b1b1b;border-radius:7px;border:1px solid #424242\r\n  /* 置灰按钮 */}.myTeam .section .lps-card .lps-header[data-v-727eb1ea]{display:flex;align-items:center;justify-content:space-between}.myTeam .section .lps-card .lps-header .title[data-v-727eb1ea]{font-size:13px;color:#aaa}.myTeam .section .lps-card .lps-value[data-v-727eb1ea]{font-size:20px;font-weight:700;margin:13px 0 10px}.myTeam .section .lps-card .lps-footer[data-v-727eb1ea]{display:flex;align-items:center;justify-content:space-between}.myTeam .section .lps-card .lps-footer .left-for[data-v-727eb1ea]{display:flex}.myTeam .section .lps-card .lps-footer .left-for uni-view[data-v-727eb1ea]{color:#aaa;font-size:12px;margin-right:5px}.myTeam .section .lps-card .lps-footer .right-for[data-v-727eb1ea]{font-size:13px;font-weight:400;color:#09f0ff}.myTeam .section .lps-card .footer-tips[data-v-727eb1ea]{margin-top:10px;text-align:center}.myTeam .section .lps-card .draw[data-v-727eb1ea]{width:74px;height:33px;background:#ff6d02;border-radius:16px}.myTeam .section .lps-card .draw .draw-btn[data-v-727eb1ea]{width:73px;height:29px;line-height:29px;text-align:center;border-radius:16px;margin:0 auto 1px;color:#ff6d02;border:1px solid #ff6d02;background:#1f1f1f}.myTeam .section .lps-card .no-draw[data-v-727eb1ea]{width:74px;height:33px;background:#585858;border-radius:16px}.myTeam .section .lps-card .no-draw .draw-btn[data-v-727eb1ea]{width:73px;height:29px;line-height:29px;text-align:center;border-radius:16px;margin:0 auto 1px;color:#585858;border:1px solid #585858;background:#1f1f1f}.myTeam .section .pull-down-btn[data-v-727eb1ea]{width:343px;height:50px;line-height:50px;border-radius:32px;background:#09f0ff;font-size:16px;font-weight:400;text-align:center;color:#1f1f1f}.myTeam .computing-power[data-v-727eb1ea]{height:196px;background:#1f1f1f;border-radius:10px 10px 0 0;padding:16px}.myTeam .computing-power .bor[data-v-727eb1ea]{border-bottom:1px solid #868484}.myTeam .computing-power .row-items[data-v-727eb1ea]{padding:20px}.myTeam .computing-power .row-items uni-view[data-v-727eb1ea]{text-align:center}.myTeam .computing-power .row-items[data-v-727eb1ea] :nth-child(1){color:#aaa;font-size:13px}.myTeam .computing-power .row-items[data-v-727eb1ea] :nth-child(2){margin-top:10px;font-size:22px}',""]),e.exports=t},"1c10":function(e,t,a){"use strict";var n=a("93cb"),i=a.n(n);i.a},2446:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uIcon:a("4913").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"nav-bar"},[a("u-icon",{attrs:{name:"arrow-left",color:"#ffffff",size:"20"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.list.title))]),a("v-uni-view",{})],1)},o=[]},"3df4":function(e,t,a){"use strict";a.r(t);var n=a("ae0d"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"3edc":function(e,t,a){"use strict";var n=a("9a6f"),i=a.n(n);i.a},"67ae":function(e,t,a){"use strict";a.r(t);var n=a("8500"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"731b":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav-bar[data-v-21b60cae]{padding:0 16px;display:flex;justify-content:space-between;align-items:center;height:60px}.nav-bar .backIcon[data-v-21b60cae]{width:16px;height:12px;object-fit:cover}.nav-bar .title[data-v-21b60cae]{margin-left:17px;font-size:16px;font-weight:400}',""]),e.exports=t},"794b":function(e,t,a){"use strict";a.r(t);var n=a("2446"),i=a("3df4");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("3edc");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"21b60cae",null,!1,n["a"],void 0);t["default"]=s.exports},8500:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("c7eb")),o=n(a("1da1")),r=n(a("794b")),s=(n(a("0e40")),a("08dd")),c={components:{NavHeader:r.default},data:function(){return{showpopup:!1,Recommenderaddres:"",usreaddress:"",userLV:"1",show:!1,leader:"",bhbBannce:"",usdtBannce:"",USDTLimit:"",canBuyUSDTAmount:"",canExchangeAmount:"",childCount:"",claimedHDReward:"",claimedUSDTReward:"",isSignIn:"",level:"",levelPower:"",lpPower:"",redirectCounts:"",redirectlevels:"",redirects:"",teamHDReward:"",teamUSDTReward:"",totalLPReward:"",totalLevelReward:""}},mounted:function(){this.usreaddress=uni.getStorageSync("account")||"",this.init(),this.initTab()},computed:{},onShow:function(){this.init(),this.initTab()},methods:{toNan:function(e){uni.navigateTo({url:e})},init:function(){var e=uni.getStorageSync("account")?uni.getStorageSync("account"):"";console.log("Token-----",e),""!=e&&(this.getUserInfo(),this.getUsers(),this.getUsdtpric(),this.getbhbpric())},getUserInfo:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.prev=1,t.next=4,s.BlackConterObj.methods.queryUser(a).call();case 4:n=t.sent,n&&(console.log("用户信息数据查询成功--",n),e.USDTLimit=n.USDTLimit,e.canBuyUSDTAmount=(n.canBuyUSDTAmount/1e18).toFixed(2),e.canExchangeAmount=(n.canExchangeAmount/1e18).toFixed(2),e.childCount=n.childCount,e.claimedHDReward=(n.claimedHDReward/1e18).toFixed(0),e.claimedUSDTReward=(n.claimedUSDTReward/1e18).toFixed(0),e.isSignIn=n.isSignIn,e.level=n.level,e.levelPower=(n.levelPower/1e18).toFixed(2),e.lpPower=(n.lpPower/1e18).toFixed(2),e.redirectCounts=n.redirectCounts,e.redirectlevels=n.redirectlevels,e.redirects=n.redirects,e.teamHDReward=n.teamHDReward,e.teamUSDTReward=n.teamUSDTReward,e.totalLPReward=(n.totalLPReward/1e18).toFixed(2),e.totalLevelReward=(n.totalLevelReward/1e18).toFixed(2)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log("用户信息查询失败-----",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getUsers:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.prev=1,t.next=4,s.BlackConterObj.methods.getUsers(a).call();case 4:n=t.sent,n&&(console.log("注册时间和直推人地址，推荐人地址查询成功--",n),e.leader=n.leader,console.log("推荐人地址",e.leader)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log("注册时间和直推人地址，推荐人地址失败-----",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getUsdtpric:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",""!=a){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,s.USDT_contracts.methods.balanceOf(a).call();case 6:n=t.sent,console.log("usdt余额查询成功--",n),e.usdtBannce=n?(n/1e18).toFixed(2):"",t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),console.log("查询失败-----",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))()},getbhbpric:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",""!=a){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,s.BH_contracts.methods.balanceOf(a).call();case 6:n=t.sent,console.log("bhb余额查询成功--",n),e.bhbBannce=n?(n/1e18).toFixed(2):"",t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),console.log("查询失败-----",t.t0);case 14:case"end":return t.stop()}}),t,null,[[3,11]])})))()},upgrade:function(){this.getapprove("升级")},activate:function(){this.getapprove("激活")},claim:function(){this.getapprove("领取")},drawclaim:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.totalLPReward<=0)){t.next=2;break}return t.abrupt("return",uni.showToast({icon:"none",title:"没有可领取分红"}));case 2:return t.prev=2,uni.showLoading({title:e.$t("home.H108"),mask:!0}),a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.next=7,s.BlackConterObj.methods.claimHD().send({from:a});case 7:n=t.sent,n?(uni.showToast({icon:"none",title:e.$t("home.H109")}),e.init()):uni.hideLoading(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),uni.hideLoading();case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},drawclaim2:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.totalLevelReward<=0)){t.next=2;break}return t.abrupt("return",uni.showToast({icon:"none",title:"没有可领取分红"}));case 2:return t.prev=2,uni.showLoading({title:e.$t("home.H108"),mask:!0}),a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.next=7,s.BlackConterObj.methods.claimUSDT().send({from:a});case 7:n=t.sent,n?(uni.showToast({icon:"none",title:e.$t("home.H109")}),e.init()):uni.hideLoading(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),uni.hideLoading();case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},getapprove:function(e){var t=this;return(0,o.default)((0,i.default)().mark((function a(){var n,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=uni.getStorageSync("account")?uni.getStorageSync("account"):"",console.log("parmas----",n),""!=n){a.next=5;break}return uni.showToast({icon:"none",title:t.$t("home.H12")}),a.abrupt("return");case 5:if(uni.showLoading({title:t.$t("home.H114"),mask:!0}),"领取"!=e){a.next=10;break}t.toClaim(),a.next=22;break;case 10:return a.prev=10,a.next=13,s.USDT_contracts.methods.increaseAllowance(s.BlackHole,"10000000000000000000000000").send({from:n});case 13:o=a.sent,o&&(uni.hideLoading(),"升级"==e&&(""==t.leader||"0x0000000000000000000000000000000000000000"==t.leader?(t.Recommenderaddres=uni.getStorageSync("codevalue")?uni.getStorageSync("codevalue"):"",console.log(t.Recommenderaddres,"this.Recommenderaddres"),t.showpopup=!0):t.toUpgrade()),"激活"==e&&(console.log("授权成功-去激活点亮---",o),t.toaAtivate())),a.next=22;break;case 17:a.prev=17,a.t0=a["catch"](10),uni.hideLoading(),console.log("授权失败-----",a.t0),uni.showToast({icon:"none",title:t.$t("home.H116")});case 22:case"end":return a.stop()}}),a,null,[[10,17]])})))()},toUpgrade:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n,o;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:e.$t("home.H102"),mask:!0}),a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",n="",n=""==e.leader||"0x0000000000000000000000000000000000000000"==e.leader?e.Recommenderaddres:e.leader,console.log("传的推荐人",n),t.prev=5,t.next=8,s.BlackConterObj.methods.upgrade(n).send({from:a});case 8:o=t.sent,o&&(uni.hideLoading(),e.showpopup=!1,console.log("升级成功---",o),uni.showToast({icon:"none",title:e.$t("home.H103")}),e.init()),t.next=18;break;case 12:t.prev=12,t.t0=t["catch"](5),uni.hideLoading(),e.showpopup=!1,console.log("升级失败-----",t.t0),uni.showToast({icon:"none",title:e.$t("home.H104")});case 18:case"end":return t.stop()}}),t,null,[[5,12]])})))()},toaAtivate:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n,o;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:e.$t("home.H105"),mask:!0}),a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",n="",n=""==e.leader||"0x0000000000000000000000000000000000000000"==e.leader?uni.getStorageSync("codevalue")?uni.getStorageSync("codevalue"):"":e.leader,console.log("传的推荐人",n),t.prev=5,t.next=8,s.BlackConterObj.methods.activate(n).send({from:a});case 8:o=t.sent,o&&(uni.hideLoading(),console.log("激活点亮成功---",o),uni.showToast({icon:"none",title:e.$t("home.H106")}),e.init()),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](5),uni.hideLoading(),console.log("激活点亮失败-----",t.t0),uni.showToast({icon:"none",title:e.$t("home.H107")});case 17:case"end":return t.stop()}}),t,null,[[5,12]])})))()},toClaim:function(){var e=this;return(0,o.default)((0,i.default)().mark((function t(){var a,n;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.totalLevelReward||0!=e.totalLPReward){t.next=2;break}return t.abrupt("return",uni.showToast({icon:"none",title:"你没有可领取分红"}));case 2:return uni.showLoading({title:e.$t("home.H108"),mask:!0}),a=uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.prev=4,t.next=7,s.BlackConterObj.methods.claim().send({from:a});case 7:n=t.sent,n&&(uni.hideLoading(),console.log("领取成功---",n),uni.showToast({icon:"none",title:e.$t("home.H109")}),e.init()),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](4),uni.hideLoading(),console.log("领取失败-----",t.t0),uni.showToast({icon:"none",title:e.$t("home.H110")});case 16:case"end":return t.stop()}}),t,null,[[4,11]])})))()},toUrl:function(e){uni.navigateTo({url:e})},initTab:function(){uni.setTabBarItem({index:0,text:this.$t("home.H6")}),uni.setTabBarItem({index:1,text:this.$t("home.H7")}),uni.setTabBarItem({index:2,text:this.$t("home.H8")}),uni.setTabBarItem({index:3,text:this.$t("home.H9")}),uni.setTabBarItem({index:4,text:this.$t("home.H10")})}}};t.default=c},"93cb":function(e,t,a){var n=a("1712");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("1f4e0665",n,!0,{sourceMap:!1,shadowMode:!1})},"9a6f":function(e,t,a){var n=a("731b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("15bb55d8",n,!0,{sourceMap:!1,shadowMode:!1})},a8db:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABGRJREFUWEfNmV9sU3UUx7/ntrtdN1aIbIytFYEtgQQfNMyAicYQkhnji4mCKDiNiXEafND4sLYxqZoxEk3USGAPRmO3RJxDwchC1GQGE52RkS6dhE2gjrXg6BC2zvX//ZnfHWW9tLf33sJq70P78Dt/Pvf8/pzzO5dQzOPxCI718QcgCNsYY5sB2gCgAYzVyOaIIgAuA2yMiIYhSYPBC5bf4fFIRt2REQVHn9suxbCXwPYAcBjRBRBkoF6hEgeCOztDenV1Ado/d64E0bsAXgRg0WtcRS4O4FMw9lbo+a6rWrY0ARt73U+TxA4AqNUyZnB8mgm099Kezi8L6akDDnrM9snExwDaDTo2Kt4dult8Dds8qXyKeQEdfa9bWdz6FRgeN+qtKHnCcbJEdwR3fhC9VT8XkEcumDhaMrgMEeF4yCE+cWskcwDtXtehEkyrWqC7Q237XskeVADe2BCHi5qmO6TEBNqVvXFuAt44Ss4uwW41ij4NxjZmjqBFQK/rIABFeLMtB5/rNOoor3z7yS/w3cSolq1DobZ9r8pJif/wDMFi7HyhQ7jEgHGqpCaecWTARq+7i8A6Cr1WiQHBQPsvtXU6CR6PYF+fmNDKraUG5Lk7dEG8hxxe5xYGGtJaFNVmMa+I1VwB3w6XYsw5dAxfB3x55WPpFNJMX1FDYFvJ0evuYBLr0gJUG68yV2D8GY9i+I1fjqDv/OliTd7UI4GcZPe6+gE8acSaKJhQX2XDCtGK2spq9Gx/QaF+cPQkTkyewUwiinB0DrPJmBHzi7KEfg7oB3CvmoVlFRa01K2Rt3s8nZb/o+kkpqIRXI/Pg4HljeDRwAiWi1asstbAJlZCIIKJCKJgxvjMFVycu6YHepTsPe4wGMsppXiUOu5vlUG8478hmkrmNWh0ivkLPtTQjGebW7Df9z0mIv+ogxJN8wjy+OcUoZtr1+DYYy/jnVMD+GxsCEkpfUcAuRE+I588shvfBEbw9vBAoUjGVQG5VqtjI9o3PYxmWx1+nQpgZDqIP2fDmJy7hqn5iLzGJDBVB1VmUZ7ixqrlaLLVYtNdDXiwfh1EkxmHzw2j+8zPiKfzloEZm3HVKc72utJSLb81d9Bkq4N92QqsttbIa4w/sXQSKUmSYc1kgsVkQoVgwr+pBK5EI7g8P4PA7FWcvT6F0+FJnJsN61l//PIlT3HBTaJlaWv9WvS3vqQQe9/3Iz70D2qpao8T+cne4+KV81Pa0vkltqxaiyOPKgHf8/2Aj/w/FWtSeczc7kG9lIDyQa031amFY0kBearTWyz8D4ALxQJ3rKfcKjXgYrmls2AtMaCyYOXO7Rolf4kBlSW/DLjQfzF8aVqCTZL/0iSvxYU+jKFrJ0+Db963XRHgb//yY+DiH0Wdg6rXzoy1sr64y5Dl3vrgjOXdPMrMdTm337JXd6PXtYsA3icsswZmFmVZt4Czo1m2TfScAy37M4TEWgBsANFqxWcIxv4GMEYCnbqdzxD/AVHwHA6SQ9cxAAAAAElFTkSuQmCC"},ac3d:function(e,t,a){e.exports=a.p+"static/img/newLogo.6605a399.png"},ae0d:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{list:{type:Object}},data:function(){return{}},methods:{}};t.default=n},b6c3:function(e,t,a){"use strict";a.r(t);var n=a("0079"),i=a("67ae");for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("1c10");var r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"727eb1ea",null,!1,n["a"],void 0);t["default"]=s.exports},d512:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABYJJREFUWEfNmXuIVFUcxz+/O7Pt3NndmVk1y6xEkyzTNcgwjAjLiFJCslAoCiukQrMITAV7Q0JgqZWJ5R8S9FArK+kPJaGQjXyQKdFDoSDNat2dO+vuGfdxf+29c2d2dt117rUHe/675/we3/v7nd/jnCOcy1C17BzXqjBDXK4BJiCMAuoCca0ovwM/qsV+UXabFHsRcaOqkygMdruOpoNFKPciXByFF+U3hHc4j9dMUo6F5Q0HMKfDbZcXEB5AqQ4rfEA64TTKJmOxkpScrCSrIkDb0fko64ARlYRFXG8ixiJTJ++fjW9wgKrxhMM6gYcjKo5ErvBmPs1iRLoGYhwYoKpt59iCMiuStnMlFnaYFHcjYvqLOBOgatzO8fH/Bq6IqAByTn9LngEwkdX1/7VbBzO07+6MPFK+3geg3arz6Oa9c/VUCL59KqxBWSBw04D0MeaXB04vwEIq+eFfj1bhTxW2i/KWScs3SUdvU9iBMliANhmLK4opqERkZ/UNoI95Q1gEhEaEbXSyRy1OxOO0uRZVHm97F3nS0lySo1prOxwGxlSQvd5k5FGPxgfoV4hOjkZMwkdUWZivl92hfsTT4+halMUV6b1kXsVlXsUpAMzqS8Cyioy9EfeZ6eIehksuLI99UqcT4yvACsmzymRkueAV/iy/hq2tArva08xCpKOoqC6nI7pd5rowVYRahF9MHc+UaH7W6sRIDogyMSQ4vNptMowR29FpKF+HZPzDWEwiJU0+vaokHFYAKwSSRRkKG/MZWVj8Trbo8yrMRtiM8kpIXd4GvE4SOV0mLp6LKw61WJhPycaS4qxuUljQh1E4blJMRMTx5s9r1skxi8auONd31spB29FPUWZXVOb9v8VysbO6FZhbkUFoNs2MZqzkPdpEiy4QYdMZfMqdpl4+Cixs2Q6NKI2mXh735mpa9GrX4sBZ0ky5yK2SyOohgUkVAcIHJiPziq61HY4A4/rxbTMZuas4Zzv6BMpqhDUmXQDoDTur3wGTK+lUOOxZ0NtPwysSCyvzaXnRd1urXhnr5vt+PC1WnIlttXLCt3BWx/Z4xvv5GqDZpBmJSHewFq6cCk1ekOTD5D8RFrWn5XVfwSmdKV3sLAco8FB7Rt4u2587FWYWv7vjNHTUyqHAgk/1iFlVySgIp0MDRHnS1MvqwIKTYt34yoLxhcnIzcWPgfanxrgxXydf+gAdXYLyaliAf6EhumVlramXJcEerLJzHPf4FNoVGk5n5Ki3VnNKL3A99yvDygG4ML5Ik3D0OVGeDgGwKUqQ7DcZmVoWAF5X8lhPyV1qMvJyWQBsAUqB4s8LR01axpcsnNUdArdXBOjt4QhpRmMWDafqxCv2JAs5sMGkmVbc/MmczlGXQoopG6rcn6+XzYH1axIOJwRqQwDcGilR43W9aZmdyOkNouzqcpnWWS/fBorTds537UV9wIl35uhtQkupJwS6QqKOVuo8sUsVHrTgw/aMeGXOH4mcbhCXUnkDsj290rMmLWuKNMk2HaWdHATOD4GvUOqiNguB4J9MmilIoaqwT6sS41lqwTgV2hT25rv5hGGFchdYuNp2+ByYEQpcsVnwiCO1W4KrFjOKKSOUspOaSsbZptqbF0PwBe1WxIZVLTbkUxLurKwqyVbuUNc/+F8SAlSBpH/DGlgxTMt/zLhc1d91iSyjqMYVrwHroAplDMJ0gfuAy0MD6yXs2/L78yEOTWIxpz0l26sdvVWUuQK3AJdG6JLDYB340ORbsXAP8+6AUoQ9wR3NcmBKGE3nRDPosbOYLobywT1IB0P76iMAOYQvj3oT6xC+fivb3UP3ArM8BIfyFXA5zqF7id4/ofV9hpiqMEGEC8ufIVT9ns97htj3T54h/gbRSnYN/HDzzgAAAABJRU5ErkJggg=="}}]);