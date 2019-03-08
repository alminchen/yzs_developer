// pages/mYorder/mYorder.js
const util = require("../../utils/util.js");
const types = ["1", "2", "3", "4", "5"];
const GLOBAL = {
  ALL: "1",
  WAITPAY: "2",
  WAITSEND: "3",
  WAITIN: "4",
  COMPLETE: '5'
};
let page = 1;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: "0",
    topTabItems: ["全部", "待付款", "待发货", "待收货", "已完成"],
    currentTopItem: 0,
    tabW: 0,
    slideOffset: 0,
    allList: [],
    payList: [],
    sendList: [],
    inList: [],
    completeList: [],
    scrollTop: 0,
    searchShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)

    const idx = options.id;
    if (idx !== undefined) {
      const offsetW = idx * this.data.tabW;
      this.setData({
        currentTopItem: idx,
      });
    }
    this.refshNewData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          swiperHeight: (res.windowHeight - 120)
        });
      }
    })
    let qSearch = wx.createSelectorQuery();
    qSearch.select('.tab-item').boundingClientRect()
    qSearch.exec(function(res) {
      that.setData({
        tabW: res[0].width,
        slideOffset: that.data.currentTopItem * res[0].width
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  switchTab: function(e) {
    page = 1;
    const offsetW = e.currentTarget.offsetLeft;
    const current = e.currentTarget.dataset.idx;
    if (current == this.data.currentTopItem) return false;
    this.setData({
      currentTopItem: current,
      slideOffset: offsetW,
      // scrollTop: 0,
      searchShow: true
    });
    if (this.needUpdateNewDataAfterSwiper()) {
      this.refshNewData();
    }
  },
  bindChange: function(e) {
    page = 1;
    const that = this;
    const current = e.detail.current;
    const offsetW = current * that.data.tabW;
    if (current == this.data.currentTopItem) return false;
    that.setData({
      currentTopItem: current,
      slideOffset: offsetW,
      // scrollTop: 0,
      searchShow: true
    });
    if (this.needUpdateNewDataAfterSwiper()) {
      this.refshNewData();
    }
  },
  refshNewData: function() {
    util.showLoading();
    const self = this;
    // https://app.shunyingglobal.cn/B2CApp/Common.svc/GetOneSharingGood?SysNo=1&key=&currentPage=1&pageSize=10
    let parameters = 'SysNo=' + types[this.data.currentTopItem] + '&key=&currentPage=' + page + '&pageSize=10';
    util.request(parameters, function(res) {

      self.setNewDataWait(res.data.Data.Content, self);
      setTimeout(() => {
        util.hideToast();
        wx.stopPullDownRefresh();
      }, 1000)
    })
  },
  setNewDataWait: function(res, target) {
    switch (types[this.data.currentTopItem]) {
      case GLOBAL.ALL:
        target.setData({
          allList: res
        });
        break;
      case GLOBAL.WAITPAY:
        target.setData({
          payList: res
        });
        break;
      case GLOBAL.WAITSEND:
        target.setData({
          sendList: res
        });
        break;
      case GLOBAL.WAITIN:
        target.setData({
          inList: res
        });
        break;
      case GLOBAL.COMPLETE:
        target.setData({
          completeList: res
        });
        break;
      default:
        break;
    }
  },
  needUpdateNewDataAfterSwiper: function() {
    switch (types[this.data.currentTopItem]) {
      case GLOBAL.ALL:
        return this.data.allList.length > 0 ? false : true;
        break;
      case GLOBAL.WAITPAY:
        return this.data.payList.length > 0 ? false : true;
        break;
      case GLOBAL.WAITSEND:
        return this.data.sendList.length > 0 ? false : true;
        break;
      case GLOBAL.WAITIN:
        return this.data.inList.length > 0 ? false : true;
        break;
      case GLOBAL.COMPLETE:
        return this.data.completeList.length > 0 ? false : true;
        break;
      default:
        break;
    }
  },
  loadMoreData: function() {
    util.showLoading();
    const self = this;
    let parameters = parameters = 'SysNo=' + types[this.data.currentTopItem] + '&key=&currentPage=' + (page + 1) + '&pageSize=10';
    util.request(parameters, (res) => {
      if (res.data.Data.Content.length == 0) {
        util.hideToast();
        wx.stopPullDownRefresh();
        return false;
      }
      page += 1;
      self.setMoreDataWait(res.data.Data.Content, self);
      setTimeout(() => {
        util.hideToast();
        wx.stopPullDownRefresh();
      }, 1000)
    })
  },
  setMoreDataWait: function(res, target) {
    switch (types[this.data.currentTopItem]) {
      case GLOBAL.ALL:
        target.setData({
          allList: target.data.allList.concat(res)
        });
        break;
      case GLOBAL.WAITPAY:
        target.setData({
          payList: target.data.payList.concat(res)
        });
        break;
      case GLOBAL.WAITSEND:
        target.setData({
          sendList: target.data.sendList.concat(res)
        });
        break;
      case GLOBAL.WAITIN:
        target.setData({
          inList: target.data.sendList.concat(res)
        });
        break;
      case GLOBAL.COMPLETE:
        target.setData({
          completeList: target.data.completeList.concat(res)
        });
        break;
      default:
        break;
    }
  },
  scrollTest: function(e) {
    let scrollTop = e.detail.scrollTop;
    if (scrollTop > this.data.swiperHeight) {
      this.setData({
        searchShow: false
      })
    } else {
      this.setData({
        searchShow: true
      })
    }
  }
})