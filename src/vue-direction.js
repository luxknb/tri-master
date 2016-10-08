import Vue from 'vue'  //引入vue
import swiper from 'swiper' //引入swiper
import $ from 'jquery' //引入jquery
var time = null;

Vue.directive("swipertab",{ //自定义指令名称
	bind(){
		var that = this
		setTimeout(function() {
			var myswiper = new swiper(that.el,{
				direction: 'horizontal',//方向 
	    		loop: true,//循环
	    		pagination: $(that.el).find(".swiper-pagination"),
	    		autoplay: 5000,//时间
	    		//pagination : '.swiper-pagination', //开启分页器
	    		//paginationType : 'progress',   //分页器样式
	    		effect : 'flip' //切换的样式
    		})
		})
	}
})

Vue.directive("tab",{
	bind(){
		$(this.el).on("click","li",function() {
			$(this).find("a").css("color","red").parent().siblings().find("a").css("color","#000")
			$(".content").eq($(this).index()).css({"display":"inline-block"}).siblings(".content").css("display","none")
			$(".line").animate({"marginLeft":$(this).index()*20+"%"})
		})
	}
})

Vue.directive("talk",{
	bind(){
		var y = 0,z=0;
		$(this.el).on("click",function() {
			var contDiv = document.getElementById('contDiv')
				var newp = document.createElement("p")
				var arr = "游客01212"
				newp.innerHTML =arr+":"+ $("#pinglun").val()
				newp.style.lineHeight = 30+"px"
				newp.style.paddingLeft = 15+"px"
				contDiv.appendChild(newp)
				$("#pinglun").val("")
				y++
		})
		time = setInterval(function() {
			var contDiv = document.getElementById('contDiv')
			var newp = document.createElement("p")
			var arr = ["张三","李四","王五","马六","周七"]
			var randomnum = ~~(Math.random()*5)
			var arr1 = ["233333333333","这地方我去过真的","杀马特，你们的皇帝回来了","我要打十个","蒙多~想去哪就去哪"]
			newp.innerHTML =arr[randomnum] +":"+ arr1[randomnum];
			newp.style.lineHeight = 30+"px"
			newp.style.paddingLeft = 15+"px"
			contDiv.appendChild(newp)
			y++;
			if (y>3) {
				$("#contDiv").animate({"marginTop":(y-3)*(-30)+"px"},200)
			}
			
		},1000)
	},
	unbind: function () {
    	clearInterval(time)	
    }

})

