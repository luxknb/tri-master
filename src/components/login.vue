<template>
	<div class="wrap">
		<div class="form">
			<p>
				<label>用户名:</label><input name="username" type="text" placeholder="请填入用户名" v-model="info.username">
			</p>
			<p>
				<label>密码:</label><input name="password" type="password" placeholder="请填入密码" v-model="info.password">
			</p>
			<button v-on:click="go_sub()">登录</button>
			<button>注册</button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
	   return {
	     info:{"username":"","password":""}
	  }
	},
	methods:{
		go_sub:function() {
			var that = this;
			console.log()
			this.$http.jsonp("http://localhost:3333/list").then(function(e) {
				if(e.data.username == that.info.username && e.data.password == that.info.password){
					alert('登录成功')
					that.$router.go('/index/shouye')
				}else{
					alert('登录失败')
				}
			})
		}
	}

}
</script>


<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
		background:url(../../src/assets/background.png);
		background-size:100% 100%; 
	}
	.form{
		width: 100%;
		display: inline-block;
		float: left;
		padding-left: 5%;
		margin-top: 40px;
		p{
			width: 100%;
			height: 35px;
			margin-top: 30px;
			label{
				width: 20%;
				display: inline-block;
			}
			input{
				height: 35px;
				outline: none;
				border: none;
				width:70%; 
				padding-left: 15px;
			}
		}
		button{
			width: 90%;
			height: 50px;
			border: none;
			margin-top: 20px;
			color: #fff;
			background: pink;
			font-size: 25px;
			border-radius: 8px;
		}
	}
</style>