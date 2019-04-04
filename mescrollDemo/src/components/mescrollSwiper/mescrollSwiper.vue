<template>
  <div class="mescroll-swiper">
    <mescroll-vue ref="mescroll" @init="mescrollInit" :down="mescrollDown" :up="mescrollUp">
      <div class="scrollx mscroll-touch-x">
        <div id="scrollContent" class="scrollx-content" ref="scrollContent">
          <ul id="nav" class="nav">
            <li
              :class="index == curNavIndex?'active':''"
              v-for="(item, index) in typeNavList"
              :key="index"
              ref="itemLi"
              @click="changePage(index,item.SysNo)"
            >{{item.Type}}</li>
          </ul>
        </div>
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
      curNavIndex: 0,
      mescroll: null,
      pdType: null,
      typeNavList: [],
      dataList: [],
      mescrollDown: {
        htmlContent:
          '<img class="downwarp-slogan" src="./static/mscrollImg/mescroll-load.gif">'
      },
      mescrollUp: {
        callback: this.upCallback,
        page: {
          num: 0,
          size: 10
        },
        noMoreSize: 5,
        toTop: {
          wrapId: "dataList",
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
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    getTypeList() {
      this.axios
        .get(
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
          {
            params: {
              SysNo: 0,
              key: "",
              currentPage: 1,
              pageSize: 10
            }
          }
        )
        .then(res => {
          this.typeNavList = res.data.Data.Type;
          this.pdType = this.typeNavList[0].SysNo;
        });
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    changePage(i, type) {
      if (this.curNavIndex != i) {
        this.pdType = type;
        this.curNavIndex = i;
        let scrollxContent = this.$refs.scrollContent;
        let itemLi = this.$refs.itemLi[i];
        const star = scrollxContent.scrollLeft;
        var end =
          itemLi.offsetLeft +
          itemLi.clientWidth / 2 -
          document.body.clientWidth / 2; //居中
        this.mescroll.getStep(star, end, (step, timer) => {
          scrollxContent.scrollLeft = step;
          console.log(step)
        },200);
        this.dataList = [];
        this.mescroll.resetUpScroll(); // 刷新列表数据
      }
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
          //   console.log(res);
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
  mounted() {
    this.getTypeList();
  }
};
</script>
<style lang='less' scoped>
.scrollx {
  width: 100%;
  height: 0.9rem;
  background: #f8f8f8;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  .scrollx-content {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .nav {
    // padding: 0 0.16rem 0 0.1rem;
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    white-space: nowrap;
  }
  li {
    // margin-bottom: 0.3rem;
    // display: inline-block;
    height: 100%;
    flex: 1;
    // min-width: 20%;
    // max-width: 20%;
    margin: 0 10px;
    padding: 0 5px;
    text-align: center;
    position: relative;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0.04rem;
      background: #ff6990;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: all 0.5s;
    }
    &.active {
      color: #ff6990;
    }
    &.active::after {
      width: 100%;
    }
  }
}
.mescroll {
  position: fixed;
  top: 0.88rem;
}
.data-list li {
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