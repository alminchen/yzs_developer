// pages/picture/picture.js
var app = getApp()
const url = 'https://api.budejie.com/api/api_open.php?a=list&c=data&type=10'
const http = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideFooter:true,
    picList:[],
    page:1,
    loadingHide:false,
    picMaxTime:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    http.request(url,this.data.page,0,function(data){
      that.setData({
        picList:that.data.picList.concat(data.list),
        loadingHide: true,
        // picMaxTime: data.info.maxtime
      })
    },function(){
      this.setData({
        loadingHide: true
      })
    })
  },

  loadMore: function () {
    // var that = this;
    // this.setData({
    //   hideFooter: !that.data.hideFooter
    // })
    // http.request(url, ++that.data.page,0, function (data) {
    //   console.log(data)
    //   that.setData({
    //     picList: that.data.picList.concat(data.list),
    //     hideFooter: !that.data.hideFooter,
    //     // picMaxTime: data.info.maxtime
    //   })
    // }, function (err) {
    //   that.setData({
    //     hideFooter: !that.data.hideFooter
    //   })
    // })
  },
  preview(e) {
    var urls = []
    urls.push(e.target.dataset.url)
    wx.previewImage({
      urls: urls // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})