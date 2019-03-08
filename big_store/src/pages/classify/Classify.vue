<!--  -->
<template>
  <div class="wrapper">
    <yd-navbar slot="navbar" title="NavBar">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="inner">
      <div class="classify-box">
        <div class="left-tab">
          <ul>
            <li class="left-li in">1</li>
          </ul>
        </div>
        <div class="right-list">22222</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classify",
  data() {
    return {};
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrapper .inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.inner .classify-box {
  width: 100%;
  height: 100%;
  display: flex;
}
.classify-box .left-tab {
  width: 1.8rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f8f8f8;
}
.left-tab li.left-li {
  width: 100%;
  height: 0.96rem;
  background: #f8f8f8;
  line-height: 0.96rem;
  text-align: center;
  position: relative;
  color: #585757;
  font-size: 0.28rem;
}
.left-tab li.left-li {
  color: #010101;
  background: #ffffff;
}
.left-tab .left-li.in::after {
  content: "";
  width: 0.08rem;
  height: 100%;
  background: #f5174a;
  position: absolute;
  left: 0;
  top: 0;
}

.classify-box .right-list {
  flex: 1;
  padding: 0 0.2rem;
  overflow: hidden;
}
</style>