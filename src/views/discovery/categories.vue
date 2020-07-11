<template>
  <div id="categories">
    <div class="horizontal-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item" id="everyday">
            <span class="day">{{today}}</span>
            <img src="@/assets/everydayrecommend.png" />
            <p>每日推荐</p>
          </div>
          <div class="scroll-item">
            <img src="@/assets/songlist.png" />
            <p>歌单</p>
          </div>
          <div class="scroll-item">
            <img src="@/assets/ranking.png" />
            <p>排行榜</p>
          </div>
          <div class="scroll-item">
            <img src="@/assets/radio.png" />
            <p>电台</p>
          </div>
          <div class="scroll-item">
            <img src="@/assets/live.png" />
            <p>直播</p>
          </div>
          <div class="scroll-item">
            <img src="@/assets/huoqian.png" />
            <p>火前留名</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      today: ""
    };
  },
  mounted() {
    new BScroll(this.$refs.scroll, {
      scrollX: true,
      eventPassthrough:'vertical'
    });
  },
  created() {
    let a = new Date();
    this.today = a.getDate();
  }
};
</script>

<style lang="stylus" scoped>
#categories img {
  height: 50px;
  padding: 6px;
}

.horizontal-container {
  margin-left: 20px;

  .scroll-wrapper {
    width: 100%;
    overflow: hidden;

    .scroll-content {
      width: 400px;
      display: inline-block;
      white-space: nowrap;
    }

    .scroll-item {
      height: 70px;
      line-height: 10px;
      font-size: 24px;
      display: inline-block;
      text-align: center;
    }

    p {
      margin: 0;
      font-size: 12px;
      font-weight: 360;
    }
  }
}

#everyday {
  position: relative;
}

.day {
  position: absolute;
  top: 30px;
  left: 22px;
  font-size: 17px;
  color: red;
  font-weight: 500;
}
</style>