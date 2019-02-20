<!--App.vue-->
<template>
 <div class="app-container">
    <!--1:顶部导航栏-->
    <header-box ></header-box>
    
    <!--2:router-view-->
    <router-view></router-view>
    <!--3:tabbar-->
   <foot-box></foot-box>
 </div>
</template>
<script>
import header from './components/header.vue'
import foot from './components/foot.vue'
export default {

  components:{
      "header-box":header,
      "foot-box":foot
   },
   	data(){return {
		
	}},
	
}
</script>
<style>
.app-container{
  margin:10px 1.5rem;
}

</style>
