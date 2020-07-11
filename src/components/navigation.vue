<template>
  <div id="navigation">
   <van-icon name='ellipsis' size="30px" class="left-nav"></van-icon>
   <van-icon name="search" size="27px" class="search"></van-icon>
    <van-tabs v-model="active" animated swipeable lazy-render :border=false >
         
      <van-tab v-for="(item,index) in navigation" :title="item.name" :key="index"
       :title-style="tStyle(index)" :to='item.path'
      ></van-tab>
     
    </van-tabs>
    
 
  </div>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return {
      active:1,
      navigation:[{name:'我的',path:'/home'},{name:'发现',path:'/discovery'},
                  {name:'云村',path:'/community'},{name:'视频',path:'/video'}]
    }
  },
 methods:{
   tStyle(index){
      if(index==this.active){
      return {color:'black',fontSize:'23px'}
      }
      else{
        return {color:'#bebebe',fontSize:'15px'}
      }
  
      
   }
 }
};
</script>

<style lang="stylus" scoped>

/deep/ .van-tabs
          width 60%
          margin 0 auto
        
          
/deep/ .van-tab__text--ellipsis
          font-weight 650
/deep/ .van-tabs__line
          display none
.left-nav
  padding 10px
  float left
.search
  float right 
  padding 13px
.actived
  font-size 30px
</style>