import Swiper from "vux/dist/components/swiper";
import Swiperitem from "vux/dist/components/swiper-item";
import Tab from "vux/dist/components/tab";
import Tabitem from "vux/dist/components/tab-item";
//import Tabitem from "vux/dist/components/tab-item";
const Ui = {
	install(Vue){
		Vue.component("swiper",Swiper)
		Vue.component("tab",Tab)
		Vue.component("tab-item",Tabitem)
		Vue.component("swiper-item",Swiperitem)
	}
}
module.exports = Ui;