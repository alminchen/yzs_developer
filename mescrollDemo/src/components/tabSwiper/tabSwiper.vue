<template>
  <div class="list-wrapper list-wrapper-hook" ref="listWrapper">
    <div class="list-perch">
      <div class="top-tip">
        <span class="refresh-hook" ref="topTip">下拉刷新</span>
      </div>
      <div class="listperch-ul">
        <ul class="list-content list-content-hook" ref="listContent">
          <li class="list-item" v-for="(item, index) in list" :key="index">
            <router-link to>
              <div class="today-pic">
                <img src="../../assets/images/good.png" alt>
              </div>
              <div class="tocay-country">
                <img src="../../assets/images/country.png" alt class="country-pic">
                <span class="country-text">德国</span>
              </div>
              <div class="today-title">
                <span class="label-span">热销</span>【澳洲直邮】澳洲A2Plati 白金版婴幼儿奶粉100g
                <!-- <span class="label-title">【澳洲直邮】澳洲A2Plati 白金版婴幼儿奶粉100g</span> -->
              </div>
              <div class="today-range">￥280.00-360.00</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bottom-tip">
        <span class="loading-hook" ref="bottomTip">查看更多</span>
      </div>
    </div>
    <div class="alert alert-hook" ref="alert">刷新成功</div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  components: {},
  data() {
    return {
      list: ["1", "2", "3", "4", "5"],
      loadFlag: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    initScrll() {
      let scroll = new BScroll(this.$refs.listWrapper, { probeType: 1 });
      scroll.on("scroll", position => {
        if (position.y > 30) {
          this.$refs.topTip.innerText = "释放立即刷新";
        }
      });
      scroll.on("touchEnd", position => {
        if (position.y > 30) {
          setTimeout(() => {
            this.$refs.topTip.innerText = "释放立即刷新";
            this.refreshAlert("刷新成功");
            scroll.refresh();
          }, 1000);
        } else if (position.y < scroll.maxScrollY) {
          this.$refs.bottomTip.innerText = "加载中...";
          setTimeout(() => {
            this.$refs.bottomTip.innerText = "查看更多";
            if (!this.loadFlag) {
              this.reloadData();
            }
            scroll.refresh();
          }, 1000);
        }
      });
    },
    reloadData() {
      // for (var i = 0; i < this.list.length; i++) {
      //   this.list.push(i);
      //   setTimeout(() => {
      //     this.loadFlag = true;
      //   }, 4000);
      //   console.log(i);
      // }
      var aa=["11","22","33"]
      this.list = this.list.concat(aa)
    },
    refreshAlert(text) {
      text = text || "操作成功";
      this.$refs.alert.innerText = text;
      this.$refs.alert.style.display = "block";
      setTimeout(() => {
        this.$refs.alert.style.display = "none";
      }, 1000);
    }
  },
  created() {},
  mounted() {
    this.initScrll();
  }
};
</script>
<style lang='less' scoped>

img {
  width: 100%;
  display: inline-block;
}
.list-wrapper {
  width: 100%;
  // background: #ccc;
  height: 100%;
  overflow: hidden;
  padding-bottom: 54px;
}
.list-wrapper .list-content {
  // background: #fff;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
}
.list-item {
  // flex: 1;
  width: 49.3%;
  min-width: 49.3%;
  max-width: 49.3%;
  background: #fff;
  margin-bottom: 0.1rem;
  overflow: hidden;
  &:nth-of-type(odd) {
    margin-right: 0.1rem;
  }
  .today-pic {
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    margin-bottom: 0.2rem;
  }
  .tocay-country {
    height: 0.36rem;
    overflow: hidden;
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 0 0.14rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    margin-bottom: 0.1rem;
  }
  .country-pic {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: bottom;
  }
  .country-text {
    font-size: 0.26rem;
    color: #e98a3b;
    margin-left: 0.1rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .today-title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #0c0202;
    font-size: 0.28rem;
    word-break: break-all;
    padding: 0 0.1rem;
    min-height: 0.74rem;
    max-height: 0.74rem;
    margin-bottom: 0.12rem;
  }
  .label-span {
    display: inline-block;
  }
  .today-range {
    margin: 0.26rem 0 0.28rem 0rem;
    font-size: 0.24rem;
    color: #f5174a;
    padding: 0 0.1rem;
  }
}

.listperch-ul {
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.top-tip {
  position: absolute;
  top: -40px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #555;
}

.bottom-tip {
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #777;
  background: #f2f2f2;
}

/* 全局提示信息 */
.alert {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  background: rgba(7, 17, 27, 0.7);
}
</style>