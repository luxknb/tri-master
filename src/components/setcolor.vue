<template>
<div class="animated bounceInRight wrap">
	<header class="header">
		<p>我的背景</p>
		<a v-link="{path:'/index/set'}"></a>
	</header>
	<main class="main" v-bind:tit="$route.params.pwd">
		<video height="200px" v-bind:poster="'http://localhost:3333/'+$route.params.pwd+'.png'" controls>
			<source v-bind:src='"http://localhost:3333/m"+$route.params.sr+".mp4"'></source>
		</video>
		<div class="talkabout">
			<div id="contDiv">
				
			</div>
			<p class="inp"><input placeholder="说点什么吧" id="pinglun"><button @click = "talkabout" v-talk="{'time':'assd'}">发表</button><p>
		</div>
	</main>
</div> 
	
</template>

<script>

	export default {
		data(){
			return {
				talk:'',
				cont:''
			}
			console.log(this);
		},
		methods:{
			talkabout:function() {
				/*var contDiv = document.getElementById('contDiv')
				var newp = document.createElement("p")
				newp.innerHTML = this.talk
				contDiv.appendChild(newp)*/
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
	}
	.header{
		width: 100%;
		height: 48px;
		background: #f00;
		position: relative;
		p{
			text-align: center;
			line-height: 48px;
			color: #fff;
		}
		a{
			position: absolute;
			left: 10px;
			top: 15px;
			width: 9px;
			height: 15px;
			background:url(../assets/back.png) no-repeat;
			background-size: 100% 100%;
		}
	}
	.main{
		width: 100%;
		height: 100%;
		margin-top: -10px;
		display:-webkit-flex;
		-webkit-flex-direction:column;
		video{
			width: 100%;
			height: 300px;
		}
		.talkabout{
			-webkit-flex:1;
			position: relative;
			overflow: hidden;
			background: url(../assets/bj1.jpg);
			background-size:100% 100%; 
		}
		.inp{
			position: absolute;
			left: 0;
			bottom: 50px;
			width: 100%;
			input{
				width: 60%;
				height: 30px;
				border: 1px solid #ccc;
				margin-left: 10%;
				padding-left: 15px;
				outline: none;
			}
			button{
				width: 20%;
				height: 30px;
			}
		}
		#contDiv{
			p{
				line-height: 30px;
			}
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