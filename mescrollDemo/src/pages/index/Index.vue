<template>
  <div class="index-wrap">
    <div class="seacrh-wrap">
      <div class="seacrh-ipt">
        <div class="seacrh-inner">
          <span class="search-pic"></span>
          <input type="text" class="seacrh-input" placeholder="搜索您想要的商品或品牌">
        </div>
      </div>
      <indexswiper></indexswiper>
    </div>
    <div class="index-typelist">
      <ul class="typelist-ul">
        <li class="typelist-li" v-for="(item, index) in 10" :key="index">
          <router-link to="/">
            <img src="../../assets/images/xfl.png" alt>
            <span>正版奶粉</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="news-scrollbox">
      <span class="news-pic"></span>
      <div class="newscrollbox">
        <ul class="newsscroll" id="newsscroll" :class="amimate?'anim':''">
          <li class="scroll-li" v-for="(item, index) in items" :key="index">
            <span class="scroll-type">{{item.name}}</span>
            <span class="scroll-text">{{item.name}}日本花王婴儿拉拉裤特价促销日本花王婴儿拉拉裤特价促销</span>
          </li>
        </ul>
      </div>
      <router-link to class="more">更多</router-link>
    </div>
    <div class="active-types">
      <div class="active-head">
        <h3 class="active-head-tit">限时秒杀</h3>
        <div class="count-time">
          <ol class="count-ol">
            <li class="count-time-li">22</li>
            <li class="count-time-li">:</li>
            <li class="count-time-li">22</li>
            <li class="count-time-li">:</li>
            <li class="count-time-li">22</li>
          </ol>
        </div>
      </div>
      <div class="actives-list">
        <ul class="actives-list-ul">
          <li class="actives-list-li" v-for="(item, index) in 3" :key="index">
            <router-link to>
              <div class="actives-list-inner">
                <div class="actives-list-pic">
                  <img src="../../assets/images/good.png" alt>
                </div>
                <div class="actives-list-text">
                  <div class="actives-list-tag-country">
                    <span class="country">
                      <img src="../../assets/images/country.png" alt>
                    </span>
                    <span class="tag">澳洲</span>
                  </div>
                  <div class="actives-list-title">【保税】新西兰爱他美Aptamil婴幼儿奶粉1段(0-6个月)</div>
                  <div class="new-price-old-pride">
                    <span class="new-price">￥200.00起</span>
                    <del class="old-price">￥100.00</del>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="see-all">
          <router-link to class="bgColr">
            <span class="see-more">查看更多</span>
            <span class="see-icon"></span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="edge"></div>
    <div class="today-box">
      <div class="tabsWrapper">
        <div class="tabs-inner">
          <div class="tab-wrap">
            <div class="tab-content">
              <div class="scrollable" ref="tabDiv">
                <span
                  class="tabs-item"
                  :class="tabIndex == 0?'active':''"
                  @click.stop="tabClick(0)"
                >栏目1</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 1?'active':''"
                  @click.stop="tabClick(1)"
                >栏目2</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 2?'active':''"
                  @click.stop="tabClick(2)"
                >栏目3</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 3?'active':''"
                  @click.stop="tabClick(3)"
                >栏目4</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 4?'active':''"
                  @click.stop="tabClick(4)"
                >栏目5</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 5?'active':''"
                  @click.stop="tabClick(5)"
                >栏目6</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 6?'active':''"
                  @click.stop="tabClick(6)"
                >栏目7</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 7?'active':''"
                  @click.stop="tabClick(7)"
                >栏目8</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 8?'active':''"
                  @click.stop="tabClick(8)"
                >栏目9</span>
                <span
                  class="tabs-item"
                  :class="tabIndex == 9?'active':''"
                  @click.stop="tabClick(9)"
                >栏目10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="today-content">
        <!-- <swiper
          style="height: 100%;"
          :options="swiperOption"
          ref="mySwiper"
          @slideChange="slideChange"
        >
          <swiper-slide style="height:100%;">
            <tablist></tablist>
          </swiper-slide>
          <swiper-slide>2</swiper-slide>
          <swiper-slide>3</swiper-slide>
          <swiper-slide>4</swiper-slide>
          <swiper-slide>5</swiper-slide>
          <swiper-slide>6</swiper-slide>
          <swiper-slide>7</swiper-slide>
          <swiper-slide>8</swiper-slide>
          <swiper-slide>9</swiper-slide>
          <swiper-slide>10</swiper-slide>
        </swiper>-->
        <tablist :typeNo="tabIndex" ref="childs"></tablist>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import indexSwiper from "@/components/indexSwiper/IndexSwiper";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import tabsSwiper from "@/components/tabSwiper/tabSwiper";
import protogenesis from "@/pages/loadMore/ScrollMore";
export default {
  name: "index",
  data() {
    return {
      // 新闻滚动判断
      amimate: false,
      // 新闻列表数据
      items: [{ name: "马云" }, { name: "雷军" }, { name: "王勤" }],
      // swiper 初始化
      swiperOption: {
        allowSlideNext: true,
        allowSlidePrev: false,
        touchAngle: 40,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
      // 点击切换的tabs
      tabIndex: 0,
      // 默认第一个tabs的宽度
      oneTabWid: 0
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: {
    indexswiper: indexSwiper,
    swiper,
    swiperSlide,
    tablist: protogenesis
    // tablist: tabsSwiper
  },
  created() {},
  mounted() {
    setInterval(this.newsScroll, 3000);
    const TabWid = this.$refs.tabDiv.clientWidth;
    this.oneTabWid = Math.floor(TabWid / 5);
  },
  methods: {
    newsScroll() {
      this.amimate = true;
      setTimeout(() => {
        this.items.push(this.items[0]);
        this.items.shift();
        this.amimate = false;
      }, 1000);
    },
    slideChange() {
      this.tabIndex = this.swiper.activeIndex;
      if (this.tabIndex < 4) {
        this.$refs.tabDiv.scrollLeft = 0;
      } else {
        this.$refs.tabDiv.scrollLeft = (this.tabIndex - 2) * this.oneTabWid;
      }
      this.swiper.allowSlidePrev = this.tabIndex != 0;
      this.swiper.allowSlideNext =
        this.tabIndex != this.$refs.mySwiper.$children.length;
    },
    tabClick(newIndex) {
      //点击tab
      this.tabIndex = newIndex;
      // this.swiper.slideTo(newIndex, 1000, false);
      if (this.tabIndex < 4) {
        this.$refs.tabDiv.scrollLeft = 0;
      } else {
        this.$refs.tabDiv.scrollLeft = (this.tabIndex - 2) * this.oneTabWid;
      }
      this.$refs.childs.clearLsit();
      this.$refs.childs.onRefresh(function() {});
    }
  }
};
</script>
<style lang="less" scoped>
.index-wrap {
  width: 100%;
  // height: 100%;
  // overflow: hidden;
  background: #fff;
  padding-bottom: 53px;
  // overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  // overflow-x: hidden;
}
.seacrh-wrap {
  width: 100%;
  position: relative;
  .seacrh-ipt {
    width: 100%;
    padding: 0 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
    height: 0.88rem;
    z-index: 21;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
  }
  .seacrh-inner {
    width: 100%;
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }
  .seacrh-input {
    width: 100%;
    height: 0.64rem;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 0.1rem;
    padding-left: 0.6rem;
    font-size: 0.26rem;
  }
  .search-pic {
    display: inline-block;
    width: 0.26rem;
    height: 0.26rem;
    background: url("../../assets/images/search_03.png") no-repeat top center;
    background-size: 100% 100%;
    position: absolute;
    left: 0.2rem;
  }
}
.index-typelist {
  width: 100%;
  // background: #fff;
  padding-bottom: 0.3rem;
  .typelist-ul {
    flex-wrap: wrap;
    padding-top: 0.3rem;
    // margin-top: 0.3rem;
    justify-content: space-around;
    display: flex;
  }
  .typelist-li {
    width: 20%;
    min-width: 20%;
    max-width: 20%;
    text-align: center;
    margin-bottom: 0.1rem;
  }
  img {
    width: 1.06rem;
    height: 1.06rem;
    display: inline-block;
  }
  span {
    display: block;
    width: 100%;
  }
}
.news-scrollbox {
  width: 100%;
  padding: 0 0.2rem;
  height: 0.88rem;
  // background: #fff;
  display: flex;
  // justify-content: center;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  .news-pic {
    display: inline-block;
    width: 1.18rem;
    height: 0.28rem;
    background-image: url("../../assets/images/bg.png");
    background-position: -0.18rem -1.56rem;
    background-size: 7.5rem;
    margin-right: 0.1rem;
  }
  .newscrollbox {
    flex: 2;
    font-size: 0.22rem;
    margin-right: 0.2rem;
    overflow: hidden;
  }
  .newsscroll {
    display: block;
    // transition: all .5s;
  }
  .scroll-li {
    font-size: 0.26rem;
    display: flex;
    justify-items: center;
    align-items: center;
    height: 0.88rem;
    // margin-top: 0;
  }
  .scroll-type {
    flex: 1;
    color: #f5174a;
    text-align: center;
    overflow: hidden;
  }
  .scroll-text {
    flex: 4;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .anim {
    transition: all 1s;
    margin-top: -1.76rem;
  }
}
.active-types {
  width: 100%;
  padding-top: 0.4rem;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  // overflow: hidden;
  // background: #fff;
  .active-head {
    margin: 0 0.28rem;
    // width: 100%;
    height: 0.98rem;
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 0.26rem;
      position: absolute;
      left: 0;
      bottom: -0.26rem;
      background: url("../../assets/images/active.png") no-repeat top center;
      background-size: 100% 100%;
    }
  }
  .active-head-tit {
    flex: 3;
    text-align: left;
    margin-right: 0.5rem;
    font-size: 0.3rem;
    color: #333333;
    font-weight: bold;
  }
  .count-time {
    flex: 1;
    text-align: right;
  }
  .count-ol {
    display: flex;
  }
  .count-time-li {
    flex: 1;
    text-align: center;
    margin: 0 0.04rem;
    font-size: 0.26rem;
    display: inline-block;
  }
  li.count-time-li:nth-child(odd) {
    padding: 0 0.08rem;
    height: 0.38rem;
    border-radius: 0.03rem;
    background-color: #333333;
    color: #fff;
    font-size: 0.26rem;
    line-height: 0.38rem;
    text-align: center;
  }
  .actives-list {
    width: 100%;
    margin-top: 0.46rem;
  }
  .actives-list-li {
    margin: 0.2rem;
    border: 0.01rem solid #ececec;
    border-radius: 0.1rem;
    box-sizing: border-box;
  }
  .actives-list-inner {
    width: 100%;
    display: flex;
    padding: 0.2rem;
  }
  .actives-list-pic {
    width: 2.4rem;
    height: 2.4rem;
    overflow: hidden;
    margin-right: 0.2rem;
  }
  .actives-list-tag-country {
    width: 100%;
    margin: 0.58rem 0 0 0;
    font-size: 0;
  }
  .country {
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
    vertical-align: top;
  }
  .tag {
    display: inline-block;
    color: #fff;
    width: 0.76rem;
    height: 0.3rem;
    background-color: #e98a3b;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.22rem;
    border-radius: 0.02rem;
    margin: 0 0 0.17rem 0.1rem;
  }
  .actives-list-text {
    flex: 1;
  }
  .actives-list-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    color: #0c0202;
    font-size: 0.28rem;
    margin-bottom: 0.2rem;
  }
  .new-price {
    color: #f5174a;
    font-size: 0.32rem;
    display: inline-block;
  }
  .old-price {
    display: inline-block;
    color: #999999;
    font-size: 0.24rem;
    margin-left: 0.12rem;
    padding-top: 0.08rem;
  }
  .see-all {
    width: 100%;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding: 0.32rem 0.45rem;
    font-size: 0.26rem;
    color: #fff;
  }
  .bgColr {
    background-color: #333333;
    padding: 0.1rem 0.3rem;
  }
  .see-more {
    transform: scale(0.9);
  }
  .see-icon {
    display: inline-block;
    width: 0.12rem;
    height: 0.22rem;
    background-image: url("../../assets/images/index_more.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 0.1rem;
  }
}
.edge {
  width: 100%;
  height: 0.2rem;
  background-color: #f8f8f8;
}
.tabsWrapper {
  width: 100%;
  overflow: hidden;
  transition: all 1s;
  .tabs-inner {
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .tab-wrap {
    position: relative;
    padding-top: 44px;
  }
  .tab-content {
    height: 44px;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    position: absolute;
  }
  .scrollable {
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    // padding-bottom: 17px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    display: flex;
    background-color: #fff;
    height: 44px;
    position: relative;
  }
  .tabs-item {
    flex: 0 0 20%;
    -webkit-box-flex: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        #e5e5e5,
        #e5e5e5,
        rgba(229, 229, 229, 0)
      )
      bottom left no-repeat;
    background-size: 100% 1px;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
  }
  .active {
    color: red;
  }
}
.today-content {
  background: #f8f8f8;
  // position: absolute;
  // left: 0;
  // top: 44px;
  // right: 0;
  // bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.today-box {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1231231;
}
</style>

