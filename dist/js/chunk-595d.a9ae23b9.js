(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595d"],{"17f7":function(t,e,a){"use strict";var s=a("6971"),n=a.n(s);n.a},"3b63":function(t,e,a){"use strict";var s=a("8db6"),n=a.n(s);n.a},"3da1":function(t,e,a){},"4d1c":function(t,e,a){"use strict";var s=a("cd04"),n=a.n(s);n.a},5281:function(t,e,a){"use strict";var s=a("f338"),n=a.n(s);n.a},6971:function(t,e,a){},"72df":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer"},[a("tap",{attrs:{tap1:"我的邀请",tap2:"员工排行"}},[a("newest",{attrs:{slot:"tap1"},slot:"tap1"}),a("range",{attrs:{slot:"tap2"},slot:"tap2"})],1),a("bottom")],1)},n=[],i=a("cc36"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},[a("div",{staticClass:"statistics"},[a("p",{staticClass:"title item-1 statistics-item"},[t._v("邀请客户数")]),a("p",{staticClass:"item-2 statistics-item"},[a("span",[t._v("本周："+t._s(t.weekCount))]),a("span",[t._v("当月："+t._s(t.monthCount))])]),a("div",{staticClass:"item-3 statistics-item"},[a("p",{staticClass:"sub-title"},[t._v("今日邀请")]),a("p",{staticClass:"num"},[t._v(t._s(t.todayCount))])])]),a("p",{staticClass:"title"},[t._v("最新邀请客户")]),a("ul",{staticClass:"list"},t._l(t.list,function(e,s){return a("li",{key:s,staticClass:"list-item"},[a("p",{staticClass:"list-item-left"},[t._v(t._s(e.client_name))]),a("p",{staticClass:"list-item-ritht"},[a("span",{staticClass:"name"},[t._v(t._s(e.contact_name))]),a("span",{staticClass:"date"},[t._v(t._s(e.register_date))])])])})),t.showLoadBottm?a("load-bottom"):t._e(),t.nodata?a("load-bottom",{attrs:{content:"你还未邀请到客户"}}):t._e()],1)},r=[];function c(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){return c(t)||l(t)||u()}a("cadf"),a("551c"),a("097d");var p=a("751a");function f(){return Object(p["a"])({url:"/api/zntk/v1/staff/invite-statistics",method:"get"})}function h(){return Object(p["a"])({url:"/api/zntk/v1/staff/invite-rank-statistics",method:"get"})}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Object(p["a"])({url:"/api/zntk/v1/staff/invite",method:"get",params:{page:t,pageSize:e}})}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Object(p["a"])({url:"/api/zntk/v1/staff/invite-rank",method:"get",params:{page:t,pageSize:e}})}var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticClass:"tip"},[t._v(t._s(t.content))])])},_=[],C={name:"loadbottom",props:{content:{type:String,default:function(){return"没有更多了..."}}},mounted:function(){}},A=C,b=(a("7922"),a("2877")),x=Object(b["a"])(A,v,_,!1,null,"1c504082",null);x.options.__file="LoadBottom.vue";var w=x.exports,k={components:{LoadBottom:w},mounted:function(){var t=this;f().then(function(e){"T"===e.status&&(t.todayCount=e.data.todayCount,t.weekCount=e.data.weekCount,t.monthCount=e.data.monthCount)})},methods:{getData:function(){var t=this;this.page>this.last_page||m(this.page,this.pageSize).then(function(e){"T"===e.status&&(t.list=d(t.list).concat(d(e.data)),t.last_page=e.pagination.last_page,t.page++)})},loadMore:function(){this.getData()}},data:function(){return{list:[],page:1,pageSize:12,last_page:1,todayCount:0,weekCount:0,monthCount:0}},computed:{showLoadBottm:function(){return this.page>this.last_page&&0!=this.last_page},nodata:function(){return 0==this.last_page}}},S=k,y=(a("3b63"),Object(b["a"])(S,o,r,!1,null,"3d16a332",null));y.options.__file="newest.vue";var I=y.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},[s("div",{staticClass:"statistics"},[s("p",{staticClass:"title item-1 statistics-item"},[t._v("邀请客户数")]),s("p",{staticClass:"item-2 statistics-item"},[s("span",[t._v("本周："+t._s(t.weekCount))]),s("span",[t._v("当月："+t._s(t.monthCount))])]),s("div",{staticClass:"item-3 statistics-item"},[s("p",{staticClass:"sub-title"},[t._v("今日邀请")]),s("p",{staticClass:"num"},[t._v(t._s(t.todayCount))])])]),s("p",{staticClass:"title"},[t._v("员工月邀请排行")]),s("ul",{staticClass:"list"},t._l(t.list,function(e,n){return s("li",{key:n,staticClass:"list-item"},[s("p",{staticClass:"list-item-left"},[0==n?s("img",{staticClass:"icon",attrs:{src:a("d1a3"),alt:""}}):t._e(),0!=n?s("span",{class:{num1:1==n||2==n,num2:n>2}},[t._v(t._s(n+1))]):t._e(),s("span",{staticClass:"name"},[t._v(t._s(e.staff_name))])]),s("p",{staticClass:"list-item-ritht"},[s("span",{staticClass:"total"},[t._v(t._s(e.inviteCount))])])])})),t.showLoadBottm?s("load-bottom"):t._e(),t.nodata?s("load-bottom",{attrs:{content:"暂无内容"}}):t._e()],1)},L=[],B={components:{LoadBottom:w},mounted:function(){var t=this;h().then(function(e){"T"===e.status&&(t.todayCount=e.data.todayCount,t.weekCount=e.data.weekCount,t.monthCount=e.data.monthCount)})},methods:{getData:function(){var t=this;this.page>this.last_page||g(this.page,this.pageSize).then(function(e){"T"===e.status&&(t.list=d(t.list).concat(d(e.data)),t.last_page=e.pagination.last_page,t.page++)})},loadMore:function(){this.getData()}},data:function(){return{list:[],page:1,pageSize:12,last_page:1,todayCount:0,weekCount:0,monthCount:0}},computed:{showLoadBottm:function(){return this.page>this.last_page&&0!=this.last_page},nodata:function(){return 0==this.last_page}}},j=B,Y=(a("17f7"),Object(b["a"])(j,O,L,!1,null,"3092d483",null));Y.options.__file="range.vue";var E=Y.exports,X=a("bf34"),z={components:{Tap:i["a"],newest:I,range:E,Bottom:X["a"]}},G=z,T=Object(b["a"])(G,s,n,!1,null,null,null);T.options.__file="customer.vue";e["default"]=T.exports},"751a":function(t,e,a){"use strict";a("96cf");var s=a("3040"),n=(a("cadf"),a("551c"),a("097d"),a("db49")),i=a("bc3a"),o=a.n(i),r=a("a18c"),c=a("76a0"),l=(a("56d7"),a("7155")),u=o.a.create({baseURL:"".concat(n["a"]),timeout:6e4});u.interceptors.request.use(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(sessionStorage.getItem("expires")&&sessionStorage.getItem("expires")-(new Date).getTime()/1e3<300)){t.next=8;break}return t.next=3,Object(l["b"])(e);case 3:return e=t.sent,c["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),t.abrupt("return",e);case 8:return sessionStorage.getItem("access_token")&&(e.headers["Authorization"]="Bearer "+sessionStorage.getItem("access_token")),c["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),t.abrupt("return",e);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),function(t){c["Indicator"].close(),Promise.reject(t)}),u.interceptors.response.use(function(t){var e=t.data;return c["Indicator"].close(),e},function(t){if(t.response){if(401==t.response.status){c["Indicator"].close();var e=t.response.data.error.message;if(e.startWith("qywx_application_expried"))return void r["a"].push("/expire");if(e.startWith("qywx_application_not_enable"))return void r["a"].push("/expire");if(e.startWith("invalid_credentials"))return sessionStorage.clear(),void r["a"].push("/login");if(e.startWith("access_denied"))return void Object(l["b"])();r["a"].push("/noauth")}c["Indicator"].close()}else c["Indicator"].close();return Promise.resolve(t.response.data)}),e["a"]=u},7922:function(t,e,a){"use strict";var s=a("3da1"),n=a.n(s);n.a},"8db6":function(t,e,a){},bf34:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},t._l(t.taps,function(e){return a("div",{key:e.name,staticClass:"bottom-item",on:{click:function(a){t.handleClick(e.url)}}},[t._v(t._s(e.name))])}))},n=[],i=(a("cadf"),a("551c"),a("097d"),{data:function(){return{taps:[{name:"邀请客户",url:"/invite"},{name:"获客统计",url:"/customer"}]}},methods:{handleClick:function(t){this.$router.push(t)}},mounted:function(){}}),o=i,r=(a("5281"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"74f34760",null);c.options.__file="Bottom.vue";e["a"]=c.exports},cc36:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tap",on:{touchstart:t.start,touchend:t.end}},[a("div",{staticClass:"tap-head"},[a("div",{staticClass:"tap-item",class:{active:1===t.index},on:{click:function(e){t.handleClick(1)}}},[a("span",[t._v(t._s(t.tap1))]),a("span",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index === 1"}],staticClass:"line"})]),a("div",{staticClass:"tap-item",class:{active:2===t.index},on:{click:function(e){t.handleClick(2)}}},[a("span",[t._v(t._s(t.tap2))]),a("span",{directives:[{name:"show",rawName:"v-show",value:2===t.index,expression:"index === 2"}],staticClass:"line"})])]),t._t("default"),1===t.index?t._t("tap1"):t._e(),2===t.index?t._t("tap2"):t._e()],2)},n=[],i=(a("c5f6"),a("cadf"),a("551c"),a("097d"),{name:"tap",props:{tap_index:{type:Number},tap1:{type:String,required:!0},tap2:{type:String,required:!0},isRefresh:{type:Boolean,default:function(){return!1}}},data:function(){return{index:1,pageX:0,pageY:0,pageXend:0,pageYend:0}},beforeMount:function(){if(sessionStorage.removeItem("refresh"),this.tap_index)this.index=this.tap_index;else{var t=sessionStorage.getItem("tap_index");t&&(this.index=Number(t))}},mounted:function(){},methods:{setStorage:function(){sessionStorage.setItem("tap_index",this.index)},handleClick:function(t){this.index=t,this.setStorage()},start:function(t){this.pageX=t.touches[0].pageX,this.pageY=t.touches[0].pageY},slide:function(){Math.abs(this.pageX-this.pageXend)>30&&(this.pageX>this.pageXend?this.index>1&&(this.index=this.index-1,this.setStorage()):this.index<2&&(this.index=this.index+1,this.setStorage()))},refresh:function(){this.isRefresh&&this.pageY-this.pageYend>150&&(sessionStorage.setItem("refresh","true"),this.$router.go(0))},end:function(t){this.pageXend=t.changedTouches[0].pageX,this.pageYend=t.changedTouches[0].pageY,this.slide(),this.refresh()}}}),o=i,r=(a("4d1c"),a("2877")),c=Object(r["a"])(o,s,n,!1,null,"137f280d",null);c.options.__file="Tap.vue";e["a"]=c.exports},cd04:function(t,e,a){},d1a3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAyMDE4LjguOVFm2hUAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAABuElEQVRYhdWXPW7CQBBGn6P0UEWigpwAJB8gnGTxBSLRuMY95V4gykl8AQQpUgfSRErFCZgUGLLGXrPGy9/X2N6dnX3+LI/HATcmEcldP3hNrlUkcRj5zPnoMxmQZMc3Xwm9OShaRUAX6Pp00ecjHlvOG8kLoGg1BPrGUF/icOgjty8HE8ex2moMmLn3UjL14sNFHw5GJ845KWiyWLTqAV+5we/Pw7DnYDpbnpRfpLGDiacYq/aAotVCtBq4LszcGzmEjiQOe85543AgcbgoAAJtYC5aJY65ItdNXWMlDhNgnrEAecAd9eSYm6JVm3rFeCxx2LZNGq5NDlhKAWFbdKvcHAOtGoAtLDdkuGYW+lLAtGS9zc1TPmW5NSWumdqz2Bw0lXMzawrquLdTa9dEWFwztWfJ1UHRasm2I7HpA3gCOtaIYh009QP8VoABrILprAfbOnjYDy6OAFYldlGHqpv7Z9jrsFDbHvMlVQmYXo7DqtS8uC8Hg9f3NbC6KE5eq2A6W5sDZc3CNV0s7H2XgOn5Oawq7H1/Dl7xRSm8IGD/J7mGi6V73i1gCmzOhlLUhtv4itWTiPAHhb+bnI5Tgl0AAAAASUVORK5CYII="},f338:function(t,e,a){}}]);
//# sourceMappingURL=chunk-595d.a9ae23b9.js.map