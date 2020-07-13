<template>
  <div id="searchInput">
      <div id="top-search">
          <van-icon name="arrow-left" size="23px" @click="tohome"/>
          <input type="search" id="search" placeholder="FUN-fromise_9" @keyup.enter="toresult">
      </div>
  </div>
</template>

<script>
export default {
        name:'searchInput',
        methods:{
            tohome(){
                this.$router.go(-1);
            },
            toresult(){
                this.$router.push('/result')
            }

        }

}
</script>

<style lang="stylus" scoped>
    #top-search
        padding 15px
    #search
        margin-left 20px
        width 70%
        padding 2px
        border none
        border-bottom 1px solid lightgray
        &:focus
            border-color gray
    .van-icon-arrow-left
        top 5px

</style>