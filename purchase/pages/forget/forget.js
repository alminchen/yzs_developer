// pages/forget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    verifyCode: "",
    count: null,
    time: null
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
  phoneIpt(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  codeIpt(e) {
    this.setData({
      verifyCode: e.detail.value
    })
  },
  getCode() {
    let TIME_COUNT = 60;
    if (!this.data.time) {
      this.data.count = TIME_COUNT;
      this.data.time = setInterval(() => {
        this.setData({
          count: this.data.count
        })
        if (this.data.count > 0 && this.data.count <= TIME_COUNT) {
          this.data.count--
        } else {
          clearInterval(this.data.time);
          this.data.time = null;
        }
      }, 1000)
    }
  },
  formSubmitForget(e) {
    const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!phoneReg.test(e.detail.value.phone)) {
      return false;
    } else {
      wx.navigateTo({
        url: '/pages/setpwd/setpwd',
      })
    }
  }
})