<template>
  <div id="hottop">
    <div class="wrapper">
      <div class="scroll-content">
        <div class="wrap-card" v-for="(card,index) in cardlist" :key="index+'card'"
        >
        <div class="backgroundimg" :style="{background:'url('+card.songs[0].al.picUrl+'?param=350y250'+')'}"></div>
          <h3>
            <img src="@/assets/biaosheng.png" class="font-icon" />
            {{card.name}}
            <van-icon name="arrow" />
          </h3>
          <div class="content">
            <div class="singlesong" v-for="(song,index) in card.songs" :key="index">
              <img :src="song.al.picUrl+'?param=50y50'" class="album" />
              <p class="index">{{index+1}}</p>
              <p class="index name">
                {{song.al.name | capitalize}}
                <span class="artist">-{{song.ar[0].name}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { getTopList } from "@/api/discoveryApi.js";
import { getSongListDetails } from "@/api/discoveryApi.js";
export default {
  name: "hottop",
  data() {
    return {
      cardlist: []
    };
  },
  mounted() {
    new BScroll(".wrapper", {
      scrollX: true,
      eventPassthrough:'vertical'
    });
  },
  created() {
    getSongListDetails("19723756").then(val => {

      let obj = {};
      obj.name = val.data.playlist.name;
      obj.songs = val.data.playlist.tracks.slice(0, 3);
      this.cardlist.push(obj);
    });
    getSongListDetails("3779629").then(val => {

      let obj = {};
      obj.name = val.data.playlist.name;
      obj.songs = val.data.playlist.tracks.slice(0, 3);
      this.cardlist.push(obj);
    });
    getSongListDetails("3778678").then(val => {

      let obj = {};
      obj.name = val.data.playlist.name;
      obj.songs = val.data.playlist.tracks.slice(0, 3);
      this.cardlist.push(obj);
    });
    
  },
  filters:{
    //对字数进行限制 防止过度溢出
    capitalize(value){
        if(value.length>10){
          return value.slice(0,10)+'...'
        }
        else
          return value

    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  overflow: hidden;
}

.scroll-content {
  width: 1100px;
}

.wrap-card {
  width: 350px;
  display: inline-block;
  margin-right: 10px;
  height: 250px;
  box-sizing border-box
  border-radius: 5px;
  position relative
  vertical-align top
}

h3 {
  margin: 0;
  margin-left: 6px;
  padding: 7px;
  color: #ffffff;
  font-weight: 650;
  letter-spacing: 3px;
}

h3, i {
  top: 3px;
}

.font-icon {
  width: 30px;
  position: relative;
  top: 5px;
}

.album {
  margin-left: 20px;
  margin-top: 7px;
  border-radius: 12px;
}

.index {
  display: inline-block;
  vertical-align: top;
  padding: 3px;
  margin-left: 5px;
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
}

.artist {
  font-size: 13px;
  margin-left: 10px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.7;
}

.name {
  margin-left: 4px;
  max-width 200px;
  font-size 15px
}
.backgroundimg
  width 100%
  height 100%
  position absolute
  z-index -999
  filter  blur(1px)
  border-radius 10px
</style>