// pages/classifyList/classifyList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight: "0",
    tabIdx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          leftHeight: (res.windowHeight - 110)
        });
      }
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
  loadMoreData() {
    const self = this;
    console.log(12)
  },
  setNewDataWait(e) {
    console.log(e)
  },
  tabChange(e) {
    const idx = e.currentTarget.dataset.idx;
    this.setData({
      tabIdx: idx
    })
  }
})