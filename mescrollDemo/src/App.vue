<template>
  <div id="app" v-cloak>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style lang="less">
@import url("./assets/css/reset.css");
[v-cloak] {
  display: none;
}
body,
html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  // visibility: hidden;
}
/*#app {*/
/*height: 100%;*/
/*}*/
input,
button {
  outline: none;
  border: none;
}

/* 颜色 */

.main-color {
  color: #f5174a;
}

.main-bg {
  background-color: #f5174a;
}

.param-gray {
  color: #999;
}

.param-black {
  color: #424144;
}

.param-yellow {
  color: #ff6618;
}

/* 字体 */

.f12 {
  font-size: 12px;
}

.f14 {
  font-size: 14px;
}

.f16 {
  font-size: 16px;
}
.f20 {
  font-size: 20px;
}
.fbold {
  font-weight: bold;
}

/*文字省略*/

.ellip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*文字换行*/

.newLine {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 分割线 */

.space {
  width: 100%;
  height: 20/100rem;
  background-color: #f8f8f8;
}

/* 订单二级标题 */

.title-bar {
  padding: 40/100rem 0 40/100rem 30/100rem;
  font-size: 14px;
  letter-spacing: 2/100rem;
  color: #222;
}

::-webkit-scrollbar {
  display: none;
}

page {
  font-family: "Microsoft Yahei";
  font-size: 28/100rem;
  color: #666;
}

/*自定义向下箭头*/

.btn-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-arrow::after {
  display: block;
  content: "";
  width: 18/100rem;
  height: 18/100rem;
  border-top: 2/100rem solid #999;
  border-right: 2/100rem solid #999;
  transform: rotate(135deg);
  margin-left: 10/100rem;
  margin-bottom: 8/100rem;
}

/* 定位实现右边1px边框 */

.bdr {
  position: relative;
}

.bdr::after {
  /* 2.1.通过伪元素绘制一像素的右边框 */
  content: "";
  width: 1px;
  height: 100%;
  background-color: #ebebeb;
  /* 2.2.定位，不占位置 */
  position: absolute;
  right: 0;
  top: 0;
}

/* 左右居中对齐 */
.center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  // position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
