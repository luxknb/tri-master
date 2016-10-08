<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/index'

export default {
  components: {
    Hello
  }
}
</script>

<style>
*{
	padding:0;
	margin:0;
	-webkit-box-sizing:border-box;
	-webkit-text-size-adjust:none;
}
ul,li,ol{
	list-style:none;
}
a,button,input,select{
	-webkit-tap-highlight-color:rgba(0,0,0,0);
	text-decoration:none;
	
}
body,html,#app{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
