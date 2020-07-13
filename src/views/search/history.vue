<template>
    <div id="history">
        <h3>历史记录</h3>
        <van-icon name="delete" />
        <br/>
        <div id="search-btns">
             <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
            <van-button class="search-btn" color="#f0f2f5"   round size="mini">FUN</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "history"
    }
</script>

<style lang="stylus" scoped>
    #history
        margin 10px 0
    h3
        font-size 16px
        font-weight bold
        display inline-block
        margin 0
    .van-icon-delete
        float right
        margin-right 20px
    .search-btn
        color black !important
        font-weight bold
        padding 10px
        margin 3px
    #search-btns
        margin-top 7px
      
</style>