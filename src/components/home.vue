<template>
  <div id="home">
     <navigation class="navigation"></navigation>
      <router-view></router-view>
  </div>
</template>

<script>
import navigation from './navigation.vue'
export default {
    name:'home',
    components:{
        navigation
    }
}
</script>

<style lang="stylus" scoped>
.navigation 
  margin-top 3px
</style>