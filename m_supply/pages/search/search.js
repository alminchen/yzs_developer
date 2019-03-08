//myCenter.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperHeight: 0,
    scrollViewheight: 0,
    bottomHeight: 0,
    topHeight: 0,
    navHeight: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hisArray: ["正版奶粉", "港版美赞臣", "婴幼儿奶粉", "婴幼儿奶粉", "婴幼儿奶粉"],
    navScrollLeft: 0
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    let bSearch = wx.createSelectorQuery();
    bSearch.select('.edit').boundingClientRect()
    bSearch.exec(function(res) {
      if (res[0] === null) return;
      that.setData({
        bottomHeight: res[0].height
      });
      let qSearch = wx.createSelectorQuery();
      qSearch.select('.search').boundingClientRect()
      qSearch.exec(function(res) {
        if (res[0] === null) {} else {;
          that.setData({
            topHeight: res[0].height
          });
        }
        let navSearch = wx.createSelectorQuery();
        navSearch.select('.nav').boundingClientRect()
        navSearch.exec(function(res) {
          if (res[0] === null) return;
          that.setData({
            navHeight: res[0].height
          });
          wx.getSystemInfo({
            success: (res) => {
              console.log(res.windowHeight, that.data.bottomHeight, that.data.topHeight, that.data.navHeight)

              that.setData({
                swiperHeight: (res.windowHeight - that.data.bottomHeight - that.data.topHeight - that.data.navHeight - 20)
              });
            }
          })
        })
      })

    })

  },
  deleteHis:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success(res) {
        if (res.confirm) {
          that.setData({
            hisArray:[]
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //事件处理函数
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
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