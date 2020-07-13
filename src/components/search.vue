<template>
  <div id="search">
     <search-input></search-input>
      <div id="content">
      <history></history>
          <search-hot></search-hot>
      </div>
  </div>
</template>

<script>
import searchInput from '@/views/search/input.vue'
import history  from "@/views/search/history";
import searchHot from "@/views/search/search-hot.vue"
export default {
    name:'search'
    ,components:{
      searchInput,
        history,
        searchHot
    }
}
</script>

<style lang="stylus" scoped>
    #content
        margin-left 20px
</style>