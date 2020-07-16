<template>
    <div id="single_song">
       <div class="single" v-for="(song,index) in songs" :key="index+'s'">
       <h4 class="title">{{song.name}}</h4>
        <span><img src="@/assets/sq.png" class="sq"></span>   <p class="artist">{{song.artists[0].name}}</p><span class="album">-{{song.album.name}}</span>
      <div class="right_options">
       <img src="@/assets/mv.png" class="mv">
          <van-icon name="ellipsis" class="options" size="20px" />
      </div>
       </div>

    </div>
</template>

<script>
    import {getsearchResult_song} from '@/api/search.js'
    export default {
        name: "single_song",
        data(){
            return{
                songs:''
            }
        },
        watch:{
            '$route':function(){
                this.getsearchResult()
            }
        },
     
        created() {
               this.getsearchResult();

            },
        methods:{
           getsearchResult(){
               getsearchResult_song(this.$route.query.key,1).then((val)=>{
                   console.log(val)
                   this.songs=val.data.result.songs;
               })
           }
        }

    }
</script>

<style  lang="stylus" scoped>
    .single
        padding 4px
    #single_song
        margin-left 20px
    .title
        font-weight 500
        margin 0
        font-size 14px
        margin-top 10px
        max-width 250px
    .artist
        margin 0
        font-size 10px
        display inline-block
    .album
        font-size 10px
        margin-left 4px
    .sq
        width 25px
    .right_options
        float right
        position relative
        bottom 10px
        margin-right 20px
        img
            width 25px
    .options
        transform rotate(90deg)
        color #bebebe

</style>