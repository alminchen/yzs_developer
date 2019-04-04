<!--  -->
<template>
  <div class="tabber">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tabber-bottom">
      <router-link to="/index" class="tabber-item">
        <div class="tabber-icon icon-index"></div>
        <div class="tabber-label">首页</div>
      </router-link>
      <router-link to="/classify" class="tabber-item">
        <div class="tabber-icon icon-classify"></div>
        <div class="tabber-label">分类</div>
      </router-link>
      <router-link to="/shopcar" class="tabber-item">
        <div class="tabber-icon icon-shopcar"></div>
        <div class="tabber-label">进货车</div>
      </router-link>
      <router-link to="/mine" class="tabber-item">
        <div class="tabber-icon icon-mycenter"></div>
        <div class="tabber-label">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  activated() {}
};
</script>
<style lang='less' scoped>
.tabber {
  width: 100%;
  height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  -webkit-transition: visibility 0.38s, -webkit-transform ease-in-out 0.38s;
  transition: visibility 0.38s, -webkit-transform ease-in-out 0.38s;
  transition: transform ease-in-out 0.38s, visibility 0.38s;
  transition: transform ease-in-out 0.38s, visibility 0.38s,
    -webkit-transform ease-in-out 0.38s;
}
.tabber-bottom {
  display: flex;
  position: fixed;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #f7f7fa;
  z-index: 1231321231;
  .tabber-item {
    display: block;
    flex: 1;
    text-align: center;
    padding: 10px 0 0;
    font-size: 0;
    color: #999999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .tabber-label {
    width: 100%;
    text-align: center;
    color: #999999;
    font-size: 10px;
    line-height: 1.8;
  }
  .tabber-icon {
    display: inline-block;
    width: 0.41rem;
    height: 0.41rem;
    // display: block;
    background-image: url("../../assets/images/bg.png");
    background-repeat: no-repeat;
    // background-position: -0.18rem -3.25rem;
    background-position: -0.16rem -3.75rem;
    background-size: 7.5rem;
    margin-bottom: 0.08rem;
  }
  .icon-classify {
    width: 0.33rem;
    height: 0.41rem;
    background-position: -0.18rem -4.78rem;
    background-size: 7.5rem;
  }
  .icon-shopcar {
    background-position: -0.18rem -5.78rem;
    background-size: 7.5rem;
  }
  .icon-mycenter {
    background-position: -0.18rem -6.78rem;
    background-size: 7.5rem;
  }
}
.router-link-active {
  .tabber-label {
    color: #f5174a;
  }
  .icon-index {
    background-position: -0.18rem -3.25rem;
    background-size: 7.5rem;
  }
  .icon-classify {
    background-position: -0.18rem -4.27rem;
    background-size: 7.5rem;
  }
  .icon-shopcar {
    background-position: -0.18rem -5.32rem;
    background-size: 7.5rem;
  }
  .icon-mycenter {
    background-position: -0.18rem -6.27rem;
    background-size: 7.5rem;
  }
}
</style>