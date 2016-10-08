<template>
<div class="wrap">
	<div v-for="item in items[$route.params.id]">
		<img v-bind:src="item.src1">
		<img v-bind:src="item.src2">
	</div>
</div>
</template>

<script>
	export default {
        data () {
          return {
            items: [
              { subhot1: {src1:'http://localhost:3333/subhot1.png',src2:'http://localhost:3333/subhot2.png'}},
              { subhot2: {src1:'http://localhost:3333/subhot2.png',src2:'http://localhost:3333/subhot1.png'}},
              { subhot3: {src1:'http://localhost:3333/subhot1.png',src2:'http://localhost:3333/subhot2.png'}},
              { subhot4: {src1:'http://localhost:3333/subhot2.png',src2:'http://localhost:3333/subhot1.png'}},
              { subhot5: {src1:'http://localhost:3333/subhot1.png',src2:'http://localhost:3333/subhot2.png'}}
            ]
            
              
          }
        }
    }
</script>

<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
		div{
			width: 100%;
			img{
				width: 100%;
				height: auto;
			}
		}
	}
</style>