<template>
<div class="wrap">
	<header class="header">
   		<p>{{title}}</p>
   </header>
   <main class="main">
   		<router-view></router-view>
   </main>
   <footer class="footer" v-bind:style="styleObject">
   	<a v-bind:class="{'class-a':isA}" v-on:click="change('热门')" v-link="{path:'/index/hot/subhot/0'}"></a>
   	<a v-bind:class="{'class-b':isB}" v-on:click="change('首页')" v-link="{path:'/index/shouye'}"></a>
   	<a v-bind:class="{'class-c':isC}" v-on:click="change('设置')" v-link="{path:'/index/set'}"></a>
   </footer>
</div>
   
</template>

<script>

export default {
  methods:{
  	change(tit){
  		this.title = tit;
  		if (tit=="首页") {
  			this.isB = true
  			this.isA = false
  			this.isC = false
  		}else if(tit=="热门"){
  			this.isB = false
  			this.isA = true
  			this.isC = false
  		}else{
  			this.isB = false
  			this.isA = false
  			this.isC = true
  		}
  	}
  },
  data () {
    return {
      msg: 'Hello Vue!',
	  isA:false,
	  isB:true,
	  isC:false,
	  styleObject:{
	  	background: "#f00"
	  },
	  title:"首页"
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scss格式需要 sass-loader 和 node-sass 插件 -->
<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
		display:-webkit-flex;
		-webkit-flex-direction:column;
	}
	.header{
		width: 100%;
		height: 48px;
		background: #f00;
		p{
			text-align: center;
			font-size: 20px;
			line-height: 48px;
			color: #fff;
		}
	}
	.main{
		width:100%;
		height:100%;
		-webkit-flex:1;
		overflow-y:scroll; 
	}
	.footer{
		width: 100%;
		height: 48px;
		a{
			float: left;
			width: 33.3%;
			height: 48px;
		}
		a:nth-of-type(1){
			background:url(../assets/2.png) no-repeat center center;
			background-size: 25px 27px;
		}
		a:nth-of-type(2){
			background:url(../assets/4.png) no-repeat center center;
			background-size: 25px 27px;
		}
		a:nth-of-type(3){
			background:url(../assets/6.png) no-repeat center center;
			background-size: 25px 27px;
		}
		a.class-a{
			background:url(../assets/1.png) no-repeat center center;
			background-size: 25px 27px;
		}
		a.class-b{
			background:url(../assets/3.png) no-repeat center center;
			background-size: 25px 27px;
		}
		a.class-c{
			background:url(../assets/5.png) no-repeat center center;
			background-size: 25px 27px;
		}
	}
</style>
