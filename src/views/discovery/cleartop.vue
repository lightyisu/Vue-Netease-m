<template>
  <div id="cleartop">
      <h1>{{title}}</h1>
      <van-button plain type="primary" class="more" round  size="mini" color="gray">查看更多</van-button>
  </div>
</template>

<script>
export default {
    name:'cleartop',
    props:['title']
}
</script>

<style lang="stylus" scoped>
#cleartop
    margin-top 15px
h1  
    font-size 18px
    font-weight 500
    display inline-block
.more
    display inline-block
    float right 
    margin-right 20px
    margin-top 15px
</style>