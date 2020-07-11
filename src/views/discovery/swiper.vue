<template>
 <div id="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :lazy-render="true">
        <van-swipe-item v-for="(item,index) in swiperItems" :key="index">
          <img :src="item.imageUrl+'?param=810y300'" />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import { getBanner } from "@/api/discoveryApi.js";
export default {
    data(){
        return{
            swiperItems: "",
        }
    },
    
  created() {
   
    getBanner()
      .then(res => {
     
        this.swiperItems = res.data.banners;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="stylus" scoped>
#swiper img {
  width: 100%;
}

.van-swipe {
  width: 100%;
}

</style>