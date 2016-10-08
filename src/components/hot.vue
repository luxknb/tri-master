<template>
	<div class="animated bounceInRight wrap">
		 <ul v-tab>
          <li v-for="list in items" ><a v-link="{name:'subhot',params: {'id':list.id}}">{{ list.message }}</a></li>
          <p class="line"></p>  
     </ul>

     <router-view></router-view>
	</div>
</template>

<script>
	 export default {
        data () {
          return {
            items: [
              { message: '精选',id:'0' },
              { message: '美食',id:'1' },
              { message: '电影',id:'2' },
              { message: '外卖',id:'3' },
              { message: '娱乐',id:'4' }
            ]
            
              
          }
        }
    }
</script>

<style scoped lang="scss">
	.wrap{
		width:100%;
		height: 100%;
		overflow: hidden; 
	}
	ul{
    width: 100%;
    height: 50px;
    li{
      width: 20%;
      display: inline-block;
      text-align: center;
      line-height: 40px;
      a{
        color: #000;
      }
      &:nth-of-type(1){
        a{
           color: red;
        }
      }
    }
    
  }
  .line{
    width: 20%;
    height: 2px;
    background: red;
  }
  .content{
    width: 100%;
    height: 100%;
    display: none;
    &:nth-of-type(1){
        display:inline-block;
    };
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