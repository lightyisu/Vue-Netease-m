<template>
  <div id="discovery">
    <swiper></swiper>
    <categories></categories>
    <cleartop class="content" :title="title1"></cleartop>
    <personalized class="content"></personalized>
    <cleartop class="content" :title="title2"></cleartop>
    <personalizedsong class="content"></personalizedsong>
    <cleartop class="content" :title="title3"></cleartop>
    <hotop class="content"></hotop>
    <div id="forlook"></div>

  </div>
</template>

<script>

import swiper from './discovery/swiper.vue'
import categories from './discovery/categories.vue'
import personalized from './discovery/personalizedlist.vue'
import cleartop from './discovery/cleartop.vue'
import personalizedsong from './discovery/personalizedsong'
import hotop from './discovery/hottop.vue'
export default {
  data(){
    return{
      title1:'你的歌单精选站',
      title2:'给你推荐的新音乐',
      title3:'热歌风向标'
    }
  },
  components:{
    categories,
    swiper,
    cleartop,
    personalized,
    personalizedsong,
    hotop
  },

};
</script>
<style lang="stylus" scoped>
.content
  margin-left 20px
#forlook
  height 200px

</style>