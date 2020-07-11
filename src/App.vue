<template>
  <div id="app">
    <navigation class="navigation"></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
export default {
  name: "App",
  components: {
    navigation
  }
};
</script>

<style lang="stylus" >
.navigation 
  margin-top 3px


</style>



