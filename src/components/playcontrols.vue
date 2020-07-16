<template>
    <div id="playcontrols">
      <div id="control">
            <img src="http://p1.music.126.net/eLk9bD4luKCfpXGCJ90jJA==/109951165126018950.jpg?param=160y160" id="album_img">
          <div id="left-content">
          <h4>Feel Special</h4>
            <br/>
            <p>Twice</p>
          </div>

            <div id="control-right">
                <img src="@/assets/playcontrols.png" id="play">

            </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "playcontrols"
    }
</script>

<style lang="stylus" scoped>
#control

    height 60px
    width 100%
    border-top 0.2px solid #bebebe
    background-color white

    #album_img
        width 40px
        border-radius 20px
        margin 10px
        float  left
    h4
        display inline-block
        margin 10px 0 3px 0
        font-weight 500
    p
        margin 0
        font-size 13px
        color gray
        display inline-block
    #play
        width 30px
        display inline-block
        margin-left 160px
        margin-bottom 4px
    #left-content
        display inline-block

    #control-right
        display inline-block
</style>