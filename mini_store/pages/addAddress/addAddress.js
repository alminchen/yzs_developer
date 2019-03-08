const util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftHeight: 0
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
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          leftHeight: (res.windowHeight - 20)
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
  selectArea(e) {
    console.log(e.detail)
    this.setData({
      address: e.detail
    })
  },
  savePersonInfo: function(e) {
    const value = e.detail.value;
    const telRule = /^1[3|4|5|7|8]\d{9}$/;
    const nameRule = /^[\u2E80-\u9FFF]+$/;
    if (value.name == "") {
      util.showFail("名字不能为空");
    } else if (!nameRule.test(value.name)) {
      util.showFail("请输入中文名称")
    } else if (value.telphone == "") {
      util.showFail("手机号码不能为空")
    } else if (!telRule.test(value.telphone)) {
      util.showFail('手机号码格式不正确')
    } else if (value.area == "") {
      util.showFail("地址不能为空")
    } else if (value.detail == "") {
      util.showFail("详细地址不能为空")
    } else {
      // util.postRequest(value,function(res){
      //   if (res.statusCode==400){

      //   }
      // })
      util.showSuccess("添加成功");
      wx.navigateBack({
        delta: 1,
        success: function() {
          var page = getCurrentPages().pop();
          page.onLoad();
        }
      })
    }
  }
})