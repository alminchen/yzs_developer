<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <yd-tabbar :fixed=true v-if="$route.meta.fhide">
      <yd-tabbar-item title="首页" link="#">
        <yd-icon name="home" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.3rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="图片" link="#">
        <img slot="icon" style="height: 25px;" src="http://static.ydcss.com/ydui/img/logo.png">
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { TabBar, TabBarItem } from "vue-ydui/dist/lib.rem/tabbar";
import { Icons } from "vue-ydui/dist/lib.rem/icons";
Vue.component(TabBar.name, TabBar);
Vue.component(TabBarItem.name, TabBarItem);

/* 使用px：import {Icons} from 'vue-ydui/dist/lib.px/icons'; */

Vue.component(Icons.name, Icons);
export default {
  name: "app"
};
</script>

<style lang="less">
body,
html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
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
  input,button{
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
.f20{
  font-size:20px;
}
.fbold{
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
  font-family: 'Microsoft Yahei';
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
.center{
  display: flex;
  justify-content: space-between;
  align-items: center;

}

</style>
