<!--  -->
<template>
  <div class="indexSwiper-wrapper">
    <swiper style="height: 4rem;width:100%" ref="bannerSwiper" :options="bannerOption">
      <swiper-slide style="width: 100%;height: 100%;">
        <img style="width: 100%;height: 100%;" src="../../assets/images/banner.png">
      </swiper-slide>
      <swiper-slide style="width: 100%;height: 100%;">
        <img style="width: 100%;height: 100%;" src="../../assets/images/banner1.png">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    swiper,
    swiperSlide
  },
  data() {
    //这里存放数据

    return {
      bannerOption: {
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false, //当切换到最后一个slide时是否自动停止切换，false：不停止；true:停止
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
          reverseDirection: false, //开启反向自动轮播。
          waitForTransition: true //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable:true
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        slidesPerView: "auto",
        centeredSlides: true
      },
      banners: [
        {
          src: "../../assets/images/banner.png"
        },
        {
          src: "../../assets/images/banner1.png"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>