<template>
  <div id="personalizedsong">
    <div class="scroll-wrap">
      <div class="scroll-content">
        <div class="content-card" v-for="(card,index) in lists" :key="index">
          <ul>
            <li v-for="singlesong in card" :key="singlesong.id">
              <div class="single-song">
                <img :src="singlesong.picUrl+'?param=160y160'" />
                <p>
                  {{singlesong.name}}
                  <span class="artist">- {{singlesong.song.artists[0].name}}</span>
                </p>
                <img src="@/assets/playicon.png" class="playicon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import { getPersonalizedSongs } from "@/api/discoveryApi.js";
export default {
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    new BScroll(".scroll-wrap", {
      scrollX: true,
      eventPassthrough:"vertical"
     
    });
  },
  created() {
    getPersonalizedSongs().then(val => {
   
      this.lists.push(val.data.result.slice(0, 3));
      this.lists.push(val.data.result.slice(3, 6));
      this.lists.push(val.data.result.slice(6, 9));
    });
  }
};
</script>

<style lang="stylus" scoped>
.scroll-wrap {
  width: 100%;
  overflow: hidden;
}

.scroll-content {
  width: 1200px;
}

.content-card {
  display: inline-block;
}

li {
  width: 100%;
  margin: 4px;
}

img {
  display: inline-block;
  width: 65px;
  border-radius: 5px;
}

p {
  margin-left: 10px;
  width 200px
  vertical-align: top;
  display: inline-block;
}

.artist {
  margin-left: 7px;
  color: gray;
  font-size: 15px;
}

.playicon {
  width: 30px;
  display: inline-block;
  vertical-align: top;
  float: right;
  margin-top: 10px;
  margin-right: 30px;
}
</style>