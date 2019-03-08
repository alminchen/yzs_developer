// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTopItem: 0,
    slideOffset: 0,
    tabW: 0,
    navScrollLeft: 0,
    windowHeight: 0,
    pixelRatio: 0,
    windowWidth: 0,
    arrowWid: 0,
    swiperHeight: 0,
    qSearchHeight: 0,
    navHeight: 0,
    maskShow: false,
    navList: [{
      name: "全部商品"
    }, {
      name: "全部商品1"
    }, {
      name: "全部商品2"
    }, {
      name: "全部商品3"
    }, {
      name: "全部商品4"
    }, {
      name: "全部商品5"
    }, {
      name: "全部商品6"
    }, {
      name: "全部商品7"
    }, {
      name: "全部商品8"
    }, {
      name: "全部商品9"
    }]
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
    const that = this;
    let qArrow = wx.createSelectorQuery();
    qArrow.select('.arrow').boundingClientRect();
    qArrow.exec((res) => {
      if (res[0] === null) return;
      that.setData({
        arrowWid: res[0].width
      });
      let qSearch = wx.createSelectorQuery();
      qSearch.select('.input').boundingClientRect();
      qSearch.exec((res) => {
        if (res[0] === null) return;
        that.setData({
          qSearchHeight: res[0].height
        })
        let qNav = wx.createSelectorQuery();
        qNav.select('.nav-wrap').boundingClientRect();
        qNav.exec((res) => {
          if (res[0] === null) return;
          that.setData({
            navHeight: res[0].height
          })
          wx.getSystemInfo({
            success: (res) => {
              this.setData({
                pixelRatio: res.pixelRatio,
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth - (that.data.arrowWid / 4),
                swiperHeight: res.windowHeight - that.data.qSearchHeight - that.data.navHeight - 10
              })
            },
          })
        })
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
  switchNav(e) {
    var cur = e.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTopItem == cur) {
      return false;
    } else {
      this.setData({
        currentTopItem: cur
      })
    }
    if (!!this.data.maskShow) {
      this.setData({
        maskShow: !this.data.maskShow
      })
    }
  },
  switchTab(e) {
    var cur = e.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTopItem: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },

  tabMaskShowHhide(e) {
    this.setData({
      maskShow: !this.data.maskShow
    })
  },
  hideMask(e) {
    this.setData({
      maskShow: false
    })
  }
})