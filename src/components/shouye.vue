<template>
<div class="animated bounceInRight">
	<div class="swiper-container" v-swipertab>
	  <div class="swiper-wrapper">
	    <div class="swiper-slide"><img src="http://localhost:3333/7.png"></div>
	    <div class="swiper-slide"><img src="http://localhost:3333/8.png"></div>
	    <div class="swiper-slide"><img src="http://localhost:3333/9.png"></div>
	  </div>
	  <div class="swiper-pagination"></div>
	</div>
	<a v-for="i in msg" class="a" v-link="{name:'detail1',params: {'id':i.tit,'pwd':i.gaga,'sr':i.hehe}}">
		<dl class="dl">
			<dt>
				<img v-bind:src='i.src'>
				<dd>{{ i.tit }}</dd>	
			</dt>
		</dl>
	</a>

</div>
</template>

<script>
export default {
	data () {
    return {
    	msg:[
    		{ src: 'http://localhost:3333/7.png',tit:'重庆雾都','haha':"http://localhost:3333/m1.mp4","hehe":'1',"gaga":"7"},
      		{ src: 'http://localhost:3333/8.png',tit:'泰山日出','haha':"http://localhost:3333/m2.mp4","hehe":'2',"gaga":"8"},
      		{ src: 'http://localhost:3333/9.png',tit:'武汉大桥','haha':"http://localhost:3333/m3.mp4","hehe":'3',"gaga":"9"},
      		{ src: 'http://localhost:3333/10.png',tit:'东方明珠','haha':"http://localhost:3333/m4.mp4","hehe":'4',"gaga":"10"},
      		{ src: 'http://localhost:3333/11.png',tit:'巴特建筑','haha':"http://localhost:3333/m5.mp4","hehe":'5',"gaga":"11"},
      		{ src: 'http://localhost:3333/12.png',tit:'埃菲尔铁塔','haha':"http://localhost:3333/m6.mp4","hehe":'6',"gaga":"12"}
    	]
    }
  }

}
</script>

<style scoped lang="scss">
	@import "../../node_modules/swiper/dist/css/swiper.min.css";
	.swiper-container,.swiper-wrapper{
		height: 200px;
	}
	.swiper-slide{
		height: 200px;
		img{
			width: 100%;
			height: 200px;
		}
	}
	.a{
		display: inline-block;
		width: 46%;
		margin:15px 2%;
	}
	.dl{
		width: 100%;
		height: 200px;
		display: inline-block;
		position: relative;
		
		img{
			width: 100%;
			height: 200px;
		}
		dd{
			position: absolute;
			width: 100%;
			height: 25px;
			background: rgba(0,0,0,0.5);
			left: 0;
			bottom: 0;
			color: #fff;
			text-align: center;
			line-height: 25px;
		}
	}
	.animated {
	  -webkit-animation-duration: 1s;
	  animation-duration: 1s;
	  -webkit-animation-fill-mode: both;
	  animation-fill-mode: both;
	}
	@-webkit-keyframes bounceInRight {
  from, 60%, 75%, 90%, 100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, 100% {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  100% {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
</style>