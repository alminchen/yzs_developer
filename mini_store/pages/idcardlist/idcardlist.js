// pages/idcardlist/idcardlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight:0,
    bottomHeight:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    let qSearch = wx.createSelectorQuery();
    qSearch.select('.addNew').boundingClientRect()
    qSearch.exec(function (res) {
      if (res[0] === null) return;
      that.setData({
        bottomHeight: res[0].height
      });
      wx.getSystemInfo({
        success: (res) => {
          that.setData({
            leftHeight: (res.windowHeight - that.data.bottomHeight)
          });
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goAddIdcard:function(e){
    wx.navigateTo({
      url: '/pages/addidcard/addidcard',
    })
  }
})