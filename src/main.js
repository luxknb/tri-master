import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router" //路由插件
import VueResource from "vue-resource" //数据的渲染

import configRouter from "./config-router.js" //路由集合的js
import directive from "./vue-direction.js"  //自定义指令集合的js
import vuxUi from "./vux-ui.js"  //vux集合的js


Vue.use(VueRouter)  //挂载路由
Vue.use(vuxUi) //挂载vux
Vue.use(VueResource) //挂载resource 可以应用$http

var router = new VueRouter(); //新建路由
configRouter(router) //传过去router对象


router.start(App,"app")  //开启路由
router.redirect({ //默认页面
	"/":"/login",
	"*":"/error"
})

