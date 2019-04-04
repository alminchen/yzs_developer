<template>
  <div class="mscroll-wrap">
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div class="nav">
        <span :class="getActiveCls(1)" @click="changeTab(1)">全部</span>
        <span :class="getActiveCls(2)" @click="changeTab(2)">奶粉</span>
        <span :class="getActiveCls(3)" @click="changeTab(3)">图书</span>
      </div>
      <div class="data-list" id="dataList">
        <ul class="data-lisyul">
          <li class="data-list-li" v-for="(item, index) in dataList" :key="index">{{item.Title}}</li>
        </ul>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  components: {
    MescrollVue
  },
  data() {
    return {
      pdType: 1,
      mescroll: null,
      mescrollDown: {
        // autoShowLoading: true,
        // callback: function(mescroll) {
        //   mescroll.resetUpScroll();
        // },
        htmlContent:
          '<img class="downwarp-slogan" src="./static/mscrollImg/mescroll-load.gif">'
        // inOffset: function(mescroll) {
        //   if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = "下拉刷新";
        //   if (mescroll.downProgressDom)
        //     mescroll.downProgressDom.classList.remove("mescroll-rotate");
        // },
        // outOffset: function(mescroll) {
        //   if (mescroll.downTipDom) mescroll.downTipDom.innerHTML = "释放更新";
        // }
      },
      mescrollUp: {
        isBoth: true, //上
        callback: this.upCallback,
        page: {
          num: 0, // 页码。如果页码是从0开始的，这边要写-1，因为加载的时候都是++num;不是num++;
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          warpId: "dataList",
          src: "./static/mscrollImg/mescroll-totop.png",
          offset: 600
        },
        htmlNodata: '<p class="upwarp-nodata">无更多数据</p>',
        empty: {
          warpId: "dataList",
          tip: "无更多数据"
        },
        lazyLoad: {
          use: true // 是否开启懒加载,默认false
        }
      },
      dataList: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    getActiveCls(type) {
      return this.pdType == type ? "active" : "";
    },
    changeTab(type) {
      if (this.pdType !== type) {
        this.pdType = type;
        this.dataList = [];
        this.mescroll.resetUpScroll(); // 刷新列表数据
      }
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback(page, mescroll) {
      this.getListDataFromNet(
        this.pdType,
        page.num,
        page.size,
        arr => {
          if (page.num == 1) this.dataList = [];
          this.dataList = this.dataList.concat(arr);
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        },
        () => {
          mescroll.endErr();
        }
      );
    },
    getListDataFromNet(
      pdType,
      pageNum,
      pageSize,
      successCallback,
      errorCallback
    ) {
      this.axios
        .get(
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
          {
            params: {
              SysNo: pdType,
              key: "",
              currentPage: pageNum,
              pageSize: pageSize
            }
          }
        )
        .then(res => {
          setTimeout(() => {
            successCallback(res.data.Data.Content);
          }, 1000);
        })
        .catch(e => {
          errorCallback && errorCallback();
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='less' scoped>
.nav {
  width: 100%;
  height: 0.88rem;
  background: blue;
  display: flex;
  justify-items: center;
  align-items: center;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 21;
  span {
    flex: 1;
    text-align: center;
    &.active {
      color: red;
    }
  }
}
.mescroll {
  position: fixed;
  top: 0.88rem;
  bottom: 54px;
  height: auto;
}
.data-list-li {
  height: 100px;
}
</style>
<style>
.data-list .mescroll-totop {
  bottom: 100px;
}
.mescroll-downwarp .downwarp-slogan {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
</style>
