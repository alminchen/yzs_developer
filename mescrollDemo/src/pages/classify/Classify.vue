<!--  -->
<template>
  <div class="g-flexview" v-cloak>
    <!-- <minenav title="分类" link="index" ></minenav> -->
    <header class="m-tabber">
      <div class="m-center">
        <div class="nav-ipt">
          <span class="seacrh-pic"></span>
          <input type="text" class="seacrh-ipt" placeholder="搜索您想要的商品或者品牌">
        </div>
      </div>
    </header>
    <div class="g-scrollview">
      <div class="left-item" ref="leftItem">
        <div class="left-inner" ref="leftInner">
          <ul class="item-ul">
            <li
              class="classify-li"
              v-for="(item, index) in 20"
              :key="index"
              :class="index == activeIndex?'active':''"
              @click.stop="getRightList(index)"
            >奶粉{{index}}</li>
          </ul>
        </div>
      </div>
      <div class="right-item">2</div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav/nav";
import * as action from "@/store/action";
export default {
  name: "classify",
  data() {
    return {
      activeIndex: 0,
      oneHei: 0
    };
  },
  computed: {
    // transform(){
    //   return `transform(translateY(''))`
    // }
  },
  components: {
    minenav: Nav
  },
  mounted() {
    this.oneHei = this.$refs.leftItem.querySelectorAll(
      ".classify-li"
    )[0].clientHeight;
    this.$store.commit(action.TITLE, 'Login');
  },
  methods: {
    getRightList(index) {
      this.activeIndex = index;
      if (index <= 6) {
        var top = 0;
      } else {
        var top = this.oneHei * (index - 5);
        // if (top > this.oneHei * 5) {
        //   var top = this.oneHei * 5;
        // }
      }
      console.log(top);
      this.$refs.leftInner.style.transform = "translateY(-" + top + "px)";
    },
    scrollTop(index) {}
  }
};
</script>
<style lang="less" scoped>
.g-flexview {
  width: 100%;
  height: 100%;
  padding-bottom: 54px;
}
.m-tabber {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  .m-center {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  .nav-ipt {
    width: 100%;
    padding: 0 0.3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
  .seacrh-pic {
    width: 0.3rem;
    height: 0.26rem;
    background-position: -0.18rem -0.34rem;
    position: absolute;
    left: 0.5rem;
    display: inline-block;
    background-image: url("../../assets/images/bg.png");
    background-repeat: no-repeat;
    background-size: 7.5rem;
  }
  .seacrh-ipt {
    width: 100%;
    height: 0.64rem;
    padding: 0 0 0 0.55rem;
    font-size: 0.28rem;
    outline: none;
    border: none;
    background: rgb(248, 248, 248);
    border-radius: 5px;
    &::placeholder {
      font-size: 12px;
      color: #999;
    }
  }
}
.g-scrollview {
  width: 100%;
  height: 100%;
  padding: 0.88rem 0 0 0;
  background: rebeccapurple;
  display: flex;
  .left-item {
    width: 1.8rem;
    text-align: center;
    background: rgb(248, 248, 248);
    // overflow-y: auto;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    z-index: 213121;
  }
  .classify-li {
    height: 0.96rem;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.28rem;
    color: rgb(88, 87, 87);
    position: relative;
    &.active {
      background: #fff;
      color: rgb(1, 1, 1);
      &::after {
        content: "";
        display: inline-block;
        width: 0.06rem;
        height: 100%;
        background: rgb(245, 23, 74);
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  .right-item {
    flex: 1;
    padding-top: 0.14rem;
    margin: 0 0.2rem;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}
.left-inner {
  width: 100%;
  transition: all 1s;
}
</style>
