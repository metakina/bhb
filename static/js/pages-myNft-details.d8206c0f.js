(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myNft-details"],{"1cc1":function(e,t,n){"use strict";n.r(t);var a=n("e7c4"),r=n("4e97");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("e5ee");var o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"bffcface",null,!1,a["a"],void 0);t["default"]=s.exports},"239f":function(e,t,n){var a=n("e094");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("5e293c6c",a,!0,{sourceMap:!1,shadowMode:!1})},3346:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("c7eb")),i=a(n("1da1")),o=a(n("794b")),s=(n("e53b"),n("08dd")),c={components:{NavHeader:o.default},data:function(){return{nav:{title:""},usreaddress:"",list:[{from:"0x4***j88s",to:"0x4***j88s",time:"2022/12/24 14:52:14"},{from:"0x4***j88s",to:"0x4***j88s",time:"2022/12/24 14:52:14"},{from:"0x4***j88s",to:"0x4***j88s",time:"2022/12/24 14:52:14"},{from:"0x4***j88s",to:"0x4***j88s",time:"2022/12/24 14:52:14"}],boxItem:{}}},onLoad:function(e){null!=e.obj&&(this.boxItem=JSON.parse(decodeURIComponent(e.obj)),console.log("传过来的----",this.boxItem))},mounted:function(){this.usreaddress=uni.getStorageSync("account")||"",this.getTransferRecords()},computed:{},methods:{toBuy:function(){var e=this;return(0,i.default)((0,r.default)().mark((function t(){var n,a,i;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,uni.showLoading({title:e.$t("home.H114"),mask:!0}),n=uni.getStorageSync("account")?uni.getStorageSync("account"):"",console.log(n,"parmas"),t.next=6,s.USDT_contracts.methods.increaseAllowance(s.BHNFTController,"10000000000000000000000000").send({from:n});case 6:if(a=t.sent,!a.status){t.next=15;break}return uni.hideLoading(),uni.showLoading({title:"购买中,请稍等！",mask:!0}),t.next=12,s.BHNFTConOBJ.methods.buyNft(e.boxItem.tokenId).send({from:n});case 12:i=t.sent,uni.hideLoading(),i&&(e.show=!1,uni.showToast({icon:"none",title:"购买成功！"}),uni.navigateTo({url:"/pages/myNft/index"}));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),uni.hideLoading();case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))()},getTransferRecords:function(){var e=this;return(0,i.default)((0,r.default)().mark((function t(){var n;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.getStorageSync("account")?uni.getStorageSync("account"):"",t.next=3,s.BHNFTOBJ.methods.getTransferRecords(e.boxItem.tokenId).call();case 3:n=t.sent,console.log(n),e.list=n;case 6:case"end":return t.stop()}}),t)})))()}}};t.default=c},"3df4":function(e,t,n){"use strict";n.r(t);var a=n("ae0d"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"4e97":function(e,t,n){"use strict";n.r(t);var a=n("3346"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},5481:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("8a79"),n("2ca0"),n("b64b");var r=a(n("53ca")),i=a(n("c7eb")),o=a(n("1da1")),s=a(n("d4ec")),c=a(n("bee2")),u=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,s.default)(this,e),this.config={},this.config.baseUrl=n.baseUrl?n.baseUrl:"",this.config.dataType=n.dataType?n.dataType:"json",this.config.responseType=n.responseType?n.responseType:"text",this.config.header=n.header?n.header:{},this.config.timeout=n.timeout?n.timeout:1e3,this.reqInterceptors=null,this.resInterceptors=null,this.interceptors={request:function(e){t.reqInterceptors=e},response:function(e){t.resInterceptors=e}}}return(0,c.default)(e,[{key:"get",value:function(){var e=(0,o.default)((0,i.default)().mark((function e(t){var n,a=arguments;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",this._request("GET",t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=(0,o.default)((0,i.default)().mark((function e(t){var n,a=arguments;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",this._request("POST",t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=(0,o.default)((0,i.default)().mark((function e(t){var n,a=arguments;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",this._request("PUT",t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=(0,o.default)((0,i.default)().mark((function e(t){var n,a=arguments;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",this._request("DELETE",t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=this._deepCopy(this._merge(this.config,e))}},{key:"getConfig",value:function(){return this.config}},{key:"_request",value:function(e,t,n){var a=this,r=this._deepCopy(this._merge(this.config,n)),s={};if(this.reqInterceptors&&"function"===typeof this.reqInterceptors){var c=this.reqInterceptors(r);if("[object Promise]"===Object.prototype.toString.call(c))return c;s=this._deepCopy(c)}else s=this._deepCopy(r);var u=this._formatUrl(s.baseUrl,t);return new Promise((function(t,n){uni.request({url:u,method:e,data:s.data?s.data:{},header:s.header,dataType:s.dataType,responseType:s.responseType,complete:function(e){return(0,o.default)((0,i.default)().mark((function r(){var o,s,c;return(0,i.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=e,!a.resInterceptors||"function"!==typeof a.resInterceptors){r.next=22;break}if(s=a.resInterceptors(o),s){r.next=8;break}return n("返回值已被您拦截！"),r.abrupt("return");case 8:if("[object Promise]"!==Object.prototype.toString.call(s)){r.next=21;break}return r.prev=9,r.next=12,s;case 12:c=r.sent,t(c),r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](9),n(r.t0);case 19:r.next=22;break;case 21:o=s;case 22:t(o);case 23:case"end":return r.stop()}}),r,null,[[9,16]])})))()}})}))}},{key:"_formatUrl",value:function(e,t){if(!e)return t;var n="",a=e.endsWith("/"),r=t.startsWith("/");return n=a&&r?e+t.substring(1):a||r?e+t:e+"/"+t,n}},{key:"_merge",value:function(e,t){var n=this._deepCopy(e);if(!t||!Object.keys(t).length)return n;for(var a in t)if("header"!==a)n[a]=t[a];else if("[object Object]"===Object.prototype.toString.call(t[a]))for(var r in t[a])n[a][r]=t[a][r];return n}},{key:"_deepCopy",value:function(e){var t=Array.isArray(e)?[]:{};for(var n in e)e.hasOwnProperty(n)&&("object"===(0,r.default)(e[n])?t[n]=this._deepCopy(e[n]):t[n]=e[n]);return t}}]),e}(),f=new u;t.default=f},"54ae":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="uuid_key",r={setHotWords:function(e){uni.setStorageSync("hotWords",e)},getHotWords:function(){return uni.getStorageSync("hotWords")},getFaceLogin:function(){return uni.getStorageSync("face_login")},setFaceLogin:function(e){uni.setStorageSync("face_login",e)},getFingerLogin:function(){return uni.getStorageSync("finger_login")},setFingerLogin:function(e){uni.setStorageSync("finger_login",e)},setUserInfo:function(e){uni.setStorageSync("user_info_obj",e)},getUserInfo:function(){return uni.getStorageSync("user_info_obj")},setUuid:function(e){uni.setStorageSync(a,e)},getUuid:function(){return uni.getStorageSync(a)},setHasLogin:function(e){uni.setStorageSync("has_login_key",e)},getHasLogin:function(){return uni.getStorageSync("has_login_key")},removeUuid:function(){uni.removeStorageSync(a)},setAccessToken:function(e){uni.setStorageSync("access_token_key",e)},getAccessToken:function(){return uni.getStorageSync("access_token_key")},setCartBackbtn:function(e){uni.setStorageSync("cart_backbtn",e)},removeAccessToken:function(){uni.removeStorageSync("access_token_key")},setRefreshToken:function(e){uni.setStorageSync("refresh_token_key",e)},getRefreshToken:function(){return uni.getStorageSync("refresh_token_key")},removeRefreshToken:function(){uni.removeStorageSync("refresh_token_key")},setAfterSaleData:function(e){uni.setStorageSync("aftersale_data",e)},getAfterSaleData:function(){return uni.getStorageSync("aftersale_data")},removeAfterSaleData:function(){uni.removeStorageSync("aftersale_data")}};t.default=r},"59d7":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.url=void 0;t.url="https://api.peaceplan.link"},"794b":function(e,t,n){"use strict";n.r(t);var a=n("cbee"),r=n("3df4");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("fb34");var o=n("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"3a225786",null,!1,a["a"],void 0);t["default"]=s.exports},"7f35":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("5481"));a(n("54ae")),n("e53b");r.default.setConfig({});r.default.interceptors.request((function(e){uni.getStorageSync("token"),uni.getStorageSync("userId");return e.header={"Content-Type":"application/json","x-access-token":"coinranking080aa3f3ae85e5f43d84adf3621e3a51b30de47c3add85ad"},e})),r.default.interceptors.response((function(e){return console.log(e),"10001"!=e.data.code&&"Header :token is null"!=e.data.errorMessage||(uni.showToast({title:"Login expired, please log in again",icon:"none",success:function(e){setTimeout((function(){uni.navigateTo({url:"/pages/index/index"})}),2e3)}}),uni.clearStorage(),uni.clearStorageSync()),e.data}));var i=r.default;t.default=i},"9a02":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav-bar[data-v-3a225786]{padding:0 16px;display:flex;align-items:center;height:60px}.nav-bar .backIcon[data-v-3a225786]{width:16px;height:12px;object-fit:cover}.nav-bar .title[data-v-3a225786]{margin-left:17px;font-size:16px;font-weight:400}',""]),e.exports=t},ae0d:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{list:{type:Object}},data:function(){return{}},methods:{}};t.default=a},cbee:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uIcon:n("4913").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"nav-bar"},[n("u-icon",{attrs:{name:"arrow-left",color:"#ffffff",size:"20"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"title"},[e._v(e._s(e.list.title))]),n("v-uni-view",{})],1)},i=[]},d7ad:function(e,t,n){var a=n("9a02");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("467007d8",a,!0,{sourceMap:!1,shadowMode:!1})},e094:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.boxDetails .section[data-v-bffcface]{padding:0 16px 120px}.boxDetails .section .header-info .coverImg[data-v-bffcface]{width:342px;height:342px;border-radius:11px;border:1px solid #424242}.boxDetails .section .header-info .coverImg .boxImg[data-v-bffcface]{width:315px;height:315px;border:1px solid #424242;margin:13px 0 0 13px}.boxDetails .section .header-info .title[data-v-bffcface]{text-align:center;margin-top:16px}.boxDetails .section .header-info .title span[data-v-bffcface]{font-size:32px;color:#7ef7fa}.boxDetails .section .header-info .limit[data-v-bffcface]{background:#023033;width:-webkit-fit-content;width:fit-content;border-radius:3px;padding:5px 7px;display:flex;align-items:center;justify-content:center;margin:10px auto}.boxDetails .section .header-info .limit uni-view[data-v-bffcface]{font-size:12px;font-weight:400;color:#09f0ff}.boxDetails .section .header-info .boxId[data-v-bffcface]{text-align:center}.boxDetails .section .interests-info[data-v-bffcface]{border-radius:11px;border:1px solid #424242;background:#1b1b1b;padding:14px 16px;margin:13px 0 16px}.boxDetails .section .interests-info[data-v-bffcface] :nth-child(1){font-size:17px;font-weight:500}.boxDetails .section .interests-info[data-v-bffcface] :nth-child(2){margin:17px 0 0;font-size:13px;font-weight:400}.boxDetails .section .market-info[data-v-bffcface]{padding:28px 0 40px;border-radius:11px;border:1px solid #424242;background:#1b1b1b;padding:14px 16px}.boxDetails .section .market-info .label[data-v-bffcface]{font-size:17px;font-weight:500}.boxDetails .section .market-info .market-list .row-item[data-v-bffcface]{display:grid;grid-template-columns:28% 28% 41%;justify-content:space-between;align-items:center}.boxDetails .section .market-info .market-list .row-item[data-v-bffcface] :nth-child(2){text-align:center}.boxDetails .section .market-info .market-list .row-item[data-v-bffcface] :nth-child(3){text-align:right}.boxDetails .section .market-info .market-list .row-item uni-view[data-v-bffcface]{font-size:12px;font-weight:400}.boxDetails .section .market-info .market-list .market-header[data-v-bffcface]{margin:13px 0 9px}.boxDetails .section .market-info .market-list .market-header uni-view[data-v-bffcface]{color:#d6d8d8}.boxDetails .section .market-info .market-list .line[data-v-bffcface]{padding:11px 0 9px;border-top:1px solid #3b3c3d}.boxDetails .section .footer-btn[data-v-bffcface]{width:375px;height:96px;background:#1f1f1f;position:fixed;bottom:0;left:0;right:0}.boxDetails .section .footer-btn uni-view[data-v-bffcface]{margin:23px auto 0;width:343px;height:50px;line-height:50px;text-align:center;border-radius:25px;font-size:16px;color:#1f1f1f;background:#09f0ff}.boxDetails .section .footer-btn-dobule[data-v-bffcface]{padding:15px 0 0;width:375px;height:96px;background:#1f1f1f;position:fixed;bottom:0;left:0;right:0;display:flex;justify-content:space-around}.boxDetails .section .footer-btn-dobule .upgrade[data-v-bffcface]{min-width:166px;height:47px;background:#09f0ff;border-radius:18px}.boxDetails .section .footer-btn-dobule .upgrade .upgrade-btn[data-v-bffcface]{min-width:165px;height:43px;line-height:43px;text-align:center;border-radius:18px;margin:0 auto 1px;color:#09f0ff;border:1px solid #09f0ff;background:#1f1f1f;font-size:18px}',""]),e.exports=t},e53b:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.userteams=t.userproperty=t.userchilds=t.pledgeList=t.pledgeData=t.metaLogin=t.getreferrer=t.getRandomNum=void 0;var r=a(n("7f35")),i=(a(n("904b")),n("59d7"));t.getRandomNum=function(e){return r.default.get("https://api.coinranking.com/v2/coins",{data:e})};t.getreferrer=function(e){return r.default.get("".concat(i.url,"/member/member/getreferrer"),{data:e})};t.metaLogin=function(e){return r.default.post("".concat(i.url,"/v1/user/metamasklogin"),{data:e})};t.userchilds=function(e){return r.default.post("".concat(i.url,"/v1/user/childs"),{data:e})};t.userteams=function(e){return r.default.post("".concat(i.url,"/v1/user/teams"),{data:e})};t.userproperty=function(e){return r.default.post("".concat(i.url,"/v1/user/property"),{data:e})};t.pledgeList=function(e){return r.default.post("".concat(i.url,"/v1/user/pledgeList"),{data:e})};t.pledgeData=function(e){return r.default.post("".concat(i.url,"/v1/user/pledgeData"),{data:e})}},e5ee:function(e,t,n){"use strict";var a=n("239f"),r=n.n(a);r.a},e7c4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"boxDetails"},[n("nav-header",{attrs:{list:e.nav}}),n("v-uni-view",{staticClass:"section"},[n("v-uni-view",{staticClass:"header-info"},[n("v-uni-view",{staticClass:"coverImg"},[n("img",{staticClass:"boxImg",attrs:{src:"/static/home/SX"+e.boxItem.zodiac+".png",alt:""}})]),n("v-uni-view",{staticClass:"title"},[n("span",[e._v("生肖")]),n("span",[e._v("-")]),1==e.boxItem.zodiac?n("span",[e._v("鼠")]):e._e(),2==e.boxItem.zodiac?n("span",[e._v("牛")]):e._e(),3==e.boxItem.zodiac?n("span",[e._v("虎")]):e._e(),4==e.boxItem.zodiac?n("span",[e._v("兔")]):e._e(),5==e.boxItem.zodiac?n("span",[e._v("龙")]):e._e(),6==e.boxItem.zodiac?n("span",[e._v("蛇")]):e._e(),7==e.boxItem.zodiac?n("span",[e._v("马")]):e._e(),8==e.boxItem.zodiac?n("span",[e._v("羊")]):e._e(),9==e.boxItem.zodiac?n("span",[e._v("猴")]):e._e(),11==e.boxItem.zodiac?n("span",[e._v("狗")]):e._e(),12==e.boxItem.zodiac?n("span",[e._v("猪")]):e._e(),13==e.boxItem.zodiac?n("span",[e._v("月神")]):e._e(),14==e.boxItem.zodiac?n("span",[e._v("太阳神")]):e._e(),15==e.boxItem.zodiac?n("span",[e._v("宇宙神")]):e._e(),16==e.boxItem.zodiac?n("span",[e._v("创世神")]):e._e()]),n("v-uni-view",{staticClass:"boxId"},[n("span",[e._v("ID：")]),n("span",[e._v(e._s(e.boxItem.tokenId))])])],1),n("v-uni-view",{staticClass:"interests-info"},[n("v-uni-view",[e._v("NFT权益")]),n("v-uni-view",[e._v("黑洞联盟 是由全球区块链极客团体联合业内精英共同发起的 DAO社区，\n        无项目方、只有社区自治。参与者秉承上帮下助，共同致富理念，结合WEB3.0的技术")])],1),n("v-uni-view",{staticClass:"market-info"},[n("v-uni-view",{staticClass:"label"},[e._v("流转记录")]),n("v-uni-view",{staticClass:"market-list"},[n("v-uni-view",{staticClass:"market-header row-item"},[n("v-uni-view",[e._v("from")]),n("v-uni-view",[e._v("to")]),n("v-uni-view",[e._v("时间")])],1),e._l(e.list,(function(t,a){return n("v-uni-view",{key:a,staticClass:"market-body row-item line"},[n("v-uni-view",[e._v(e._s(e.getCaption(t.from)))]),n("v-uni-view",[e._v(e._s(e.getCaption(t.to)))]),n("v-uni-view",[e._v(e._s(e.getNowDate2(1e3*t.transferTime)))])],1)}))],2)],1),n("v-uni-view",{staticClass:"footer-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toBuy()}}},[n("v-uni-view",[e._v("立即购买")])],1)],1)],1)},r=[]},fb34:function(e,t,n){"use strict";var a=n("d7ad"),r=n.n(a);r.a}}]);