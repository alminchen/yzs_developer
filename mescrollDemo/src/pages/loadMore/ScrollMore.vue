<template>
  <div class="load-wrapper">
    <v-scroll :on-infinite="onInfinite" :on-refresh="onRefresh">
      <ul>
        <li style="height:100px;" v-for="(item,index) in currentlist" :key="index">{{item.Title}}</li>
      </ul>
    </v-scroll>
  </div>
</template>

<script>
import Scroll from "@/components/scrollPage/PullToRefresh";
// import axios from "axios";
export default {
  props: {
    typeNo: { type: Number, default: 1 }
  },
  components: {
    "v-scroll": Scroll
  },
  data() {
    return {
      currentlist: [],
      SysNo: 1,
      page: 1,
      pageSize: 10,
      msg: "",
      loadMoreFlag: false
    };
  },
  computed: {},
  watch: {
    typeNo(val) {
      this.SysNo = Number(val) + 1;
    }
  },
  methods: {
    clearLsit(){
      this.currentlist = [];
    },
    onRefresh(done) {
      this.onRefreshPort(done);
    },
    onRefreshPort(done) {
      this.axios({
        method: "GET",
        url:
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
        params: {
          SysNo: this.SysNo,
          key: this.msg,
          currentPage: 1,
          pageSize: this.pageSize
        }
      }).then(res => {
        // console.log(res);
        const time = Math.floor(Math.random() * 500 + 500);
        setTimeout(() => {
          this.currentlist = res.data.Data.Content;
          this.page = 1;
          done();
        }, time);
      });
    },
    onInfinite(done) {
      this.onInfinitePort(done);
    },
    onInfinitePort(done) {
      // this.page = 2;
      this.axios({
        method: "GET",
        url:
          "https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood",
        params: {
          SysNo: this.SysNo,
          key: this.msg,
          currentPage: ++this.page,
          pageSize: this.pageSize
        }
      }).then(res => {
        // done();
        if (res.data.Data.Content.length !== 0) {
          const time = Math.floor(Math.random() * 500 + 500);
          // console.log(time);
          setTimeout(() => {
            this.currentlist = this.currentlist.concat(res.data.Data.Content);
            done();
          }, time);
        }
      });
    }
  },
  created() {},
  mounted() {
    this.onRefresh(function() {});
  }
};
</script>
<style lang='less' scoped>
.load-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 600px;
}
</style>