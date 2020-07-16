<template>
  <div id="app">
    
    <router-view></router-view>
    <playcontrols id="control"></playcontrols>
  </div>
</template>

<script>
import playcontrols from "./components/playcontrols";
export default {
  name: "App",
  components: {
   playcontrols
  }
};
</script>

<style lang="stylus" >
#control
    position  fixed
    bottom 0


</style>



