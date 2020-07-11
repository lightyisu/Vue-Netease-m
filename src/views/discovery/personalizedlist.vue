<template>
  <div id="personalized">
    <div class="horizontal-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" v-for="(list,index) in lists" :key="index">
            <img :src="list.picUrl+'?param=250y250'" />
            <p>{{list.name}}</p>
            <img class="playcount playicon" src="../../assets/play.png">
            <span class="playcount">{{list.playCount}}</span>
          </div>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import  {getPersonalized}  from '@/api/discoveryApi.js';
export default {
  name: "personalized",
  data(){
      return{
          lists:''
      }
  },
  mounted() {
    this.bs = new BScroll(this.$refs.scroll, {
      scrollX: true,
      eventPassthrough:"vertical"
    });
  },
  created(){
        getPersonalized().then(val=>{
            
            this.lists=val.data.result;
        })
  }
};
</script>
<style lang="stylus" scoped>
.scroll-item, img {
  width: 100px;
  margin-right: 20px;
  
}

.horizontal-container {
  .scroll-wrapper {
    width: 100%;
    margin: 10px auto;
    border-radius: 5px;
    overflow: hidden;

    .scroll-content {
      width 700px
      white-space nowrap
      display: inline-block;
    }

    .scroll-item {
     position relative;
      vertical-align top;
      height: 170px;
      
      font-size: 24px;
      display: inline-block;
     
    }

    p {
      margin: 0;
      font-size: 12px;
      font-weight: 360;
      white-space normal
    }
  }
}
.playcount
    width 16px
    position absolute
    top 0
    right 0
.playicon
    margin-right 40px
.scroll-item span 
    color white
    font-size 10px
    right 20px
    top 4px

</style>