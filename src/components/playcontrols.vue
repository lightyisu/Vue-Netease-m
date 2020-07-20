<template>
    <div id="playcontrols" :class="{hidden:hidden}">
      <div id="control-panel" style="position: relative">
            <img :src="pic_url" id="album_img">
          <div id="left-content">
          <h4>{{description.name}}</h4>
            <br/>
            <p>{{description.artist}}</p>
          </div>

            <div id="control-right">
                <img :src="control_icon" id="play" @click="toggle">

            </div>

      </div>
    </div>
</template>

<script>
    import bus from '@/utils/eventbus.js'
    import {album_id4pic} from '@/api/search.js'
    let audio=new Audio();
    export default {
        name: "playcontrols",
        data(){
          return{
                description:'',
                pic_url:'',
                hidden:true,
                control_icon:require('@/assets/pause.png')
          }
        },
        created() {

            bus.$on('song_url',(val)=>{
                audio.src=val
                audio.play();
                this.hidden=false;

            })
            bus.$on('detail_description',(val)=>{

                this.description=val;
                album_id4pic(val.album_id).then((val)=>{
                    console.log(val)
                   this.pic_url=val.data.album.picUrl;
                })
            })
        },
        methods:{
            toggle(){
              if (audio.paused){
                  audio.play();
                  this.control_icon=require('@/assets/pause.png')}

              else{
              audio.pause();
                      this.control_icon=require('@/assets/playcontrols.png')}


            }
        }
    }
</script>

<style lang="stylus" scoped>
    .hidden
        display none
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
        position: absolute;
        right 5%
        padding 14px
        display inline-block
        img
            margin 0


</style>
