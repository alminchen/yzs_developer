// pages/address/address.js
var app = getApp();
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight: 0,
    bottomHeight:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.util.showLoading("请稍后",1000)
    console.log()
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
  editAddress:function(e){
    const id = e.currentTarget.dataset.idx;
    wx.navigateTo({
      url: '/pages/editAddress/editAddress?id='+id,
    })
  },
  delAddress:function(e){
    const idx = e.currentTarget.dataset.idx;
    const self = this;
    util.alertViewWithCancel("确定删除吗？","",function(){
      util.postRequest({id:idx},function(res){
        if (res.statusCode == 400){
          util.showSuccess("已删除");
          self.onLoad();
        }
      })
    })
  },
  addAddress:function(){
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
    })
  }
})