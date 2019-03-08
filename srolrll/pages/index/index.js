// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight: "0",
    dataList: [{
      "li": "1"
    }],
    scrollTop: "0",
    active: 0,
    contentActive: "",
    containerH: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          leftHeight: (res.windowHeight)
        });
      }
    });
    let query = wx.createSelectorQuery().in(this);
    let heightArr = [];
    let s = 0;
    query.selectAll('.right-inner').boundingClientRect((rect) => {
      rect.forEach((res) => {
        s += res.height;
        heightArr.push(s)
      })
      this.setData({
        heightArr: heightArr
      })
    });
    query.select('.right').boundingClientRect((rect) => {
      this.setData({
        containerH: rect.height
      })
    }).exec()
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
  catchTouchMove: function(res) {
    return false
  },
  getDataList(e) {
    let index = e.currentTarget.dataset.idx;
    let cur = e.currentTarget.dataset.cur;
    // 请求数据
    this.setData({
      active: index,
      contentActive: cur
    })
  },
  onSroll(e) {
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr;
    if (scrollTop >= scrollArr[scrollArr.length - 1] - this.data.containerH) return; // 判断数组里边的最后一个数据跟scrollTop做对比，一旦scrollTop 大于当前数据，则不会继续往下执行
    for (let i = 0, len = scrollArr.length; i < len; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        // 当前scrollTop小于数组第一位数据时，该标记点为第一个
        this.setData({
          active: 0
        })
      } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
        // 判断数组中每一个数据的值
        this.setData({
          active: i
        })
      }
    }
  }
})