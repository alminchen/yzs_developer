//myCenter.js
//获取应用实例
const app = getApp()

Page({
  data: {
    statusColor: false,
    allsel: false, //全选  
    selarr: [], //选择的货物          
    selectShow: true,
    swiperHeight: 0,
    bottomHeight: 0,
    topHeight: 0,
    navHeight: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    currentTab: 0,
    navScrollLeft: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [{
        text: '全部商品'
      },
      {
        text: '正版奶粉'
      },
      {
        text: '营养保健'
      },
      {
        text: '美妆个护'
      },
      {
        text: '母婴产品'
      },
      {
        text: '母婴产品'
      }

    ],
    listData: [{
      id: '1',
      status: '已启用',


    }, {
      id: '2',
      status: '未启用',
    }, {
      id: '3',
      status: '已启用',
    }, {
      id: '4',
      status: '未启用',
    }],

  },
  allEdit: function() {
    var that = this;
    that.setData({
      selectShow: false,
      swiperHeight: that.data.swiperHeight + 15,
    });
  },
  //点击单个选择按钮  
  checkTap: function(e) {
    let Index = e.currentTarget.dataset.index;
    let shopcar = this.data.listData;
    let selarr = this.data.selarr;
    shopcar[Index].check = !shopcar[Index].check || false;
    if (shopcar[Index].check) {
      selarr.push(shopcar[Index]);
    } else {
      this.setData({
        statusColor: false
      });
      for (let i = 0, len = selarr.length; i < len; i++) {
        if (shopcar[Index].id == selarr[i].id) {
          selarr.splice(i, 1);
          break;
        }
      }
    }
    console.log(shopcar[Index].check, this.data.statusColor);
    this.setData({
      listData: shopcar,
      selarr: selarr,
    });
    if (selarr.length === 0) {
      this.setData({
        statusColor: false
      });
    } else {
      this.setData({
        statusColor: true
      });
    }

    this.judgmentAll(); //每次按钮点击后都判断是否满足全选的条件  
  },
  //点击移除商品  
  deleteshopTap: function() {
    var that = this;
    var allsel = this.data.allsel,
      shopcar = this.data.listData,
      selarr = this.data.selarr;
    wx.showModal({
      content: '删除后商品不存在，确定要删除商品吗？',
      success(res) {
        if (res.confirm) {
          if (allsel) {
            shopcar = [];
            that.setData({
              allsel: false
            });
          } else {
            console.log(selarr);
            for (var i = 0, len = selarr.length; i < len; i++) { //将选中的商品从购物车移除        
              console.log(selarr[i].id);
              for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
                console.log(shopcar[j].id);
                if (selarr[i].id == shopcar[j].id) {
                  shopcar.splice(j, 1);
                }
              }
            }
          }
          that.setData({
            selarr: [],
            statusColor: false,
            listData: shopcar,
            selectShow: true,
            swiperHeight: that.data.swiperHeight - 15,
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  //禁用  
  forbidden: function() {
    var that = this;
    var allsel = this.data.allsel,
      shopcar = this.data.listData,
      selarr = this.data.selarr;
    wx.showModal({
      content: '禁用后客户将无法看到该商品确认要禁用吗？',
      success(res) {
        if (res.confirm) {
          for (var i = 0, len = selarr.length; i < len; i++) { //将选中的商品从购物车移除        
            console.log(selarr[i].id);
            for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
              console.log(shopcar[j].id);
              if (selarr[i].id == shopcar[j].id) {
                shopcar[j].check = false
                shopcar[j].status = "未启用"
              }
            }
          }

          that.setData({
            allsel: false,
            listData: shopcar,
            selarr: null,
            statusColor: false,
            selectShow: true,
            swiperHeight: that.data.swiperHeight - 15,
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  //启用  
  using: function() {
    var that = this;
    var allsel = this.data.allsel,
      shopcar = this.data.listData,
      selarr = this.data.selarr;
    for (var i = 0, len = selarr.length; i < len; i++) { //将选中的商品从购物车移除        
      console.log(selarr[i].id);
      for (var lens = shopcar.length - 1, j = lens; j >= 0; j--) {
        console.log(shopcar[j].id);
        if (selarr[i].id == shopcar[j].id) {
          shopcar[j].check = false
          shopcar[j].status = "已启用"
        }
      }
    }
    that.setData({
      allsel:false,
      selarr: [],
      statusColor: false,
      listData: shopcar,
      selectShow: true,
      swiperHeight: that.data.swiperHeight - 15,
    });
    console.log(this.data.selarr)
  },
  //点击全选  
  allcheckTap: function() {
    let shopcar = this.data.listData;
    let allsel = !this.data.allsel; //点击全选后allsel变化
    for (let i = 0, len = shopcar.length; i < len; i++) {
      shopcar[i].check = allsel; //所有商品的选中状态和allsel值一样
    }
    this.data.selarr = allsel ? shopcar : []; //如果选中状态为true那么所有商品为选中状态，将物品加入选中变量，否则为空    
    this.setData({
      allsel: allsel,
      listData: shopcar,
      selarr: this.data.selarr
    });
    if (allsel) {
      this.setData({
        statusColor: true
      });
    } else {
      this.setData({
        statusColor: false
      });
    }

  },


  //判断是否为全选  
  judgmentAll: function() {
    let shopcar = this.data.listData,
      shoplen = shopcar.length,
      lenIndex = 0; //选中的物品的个数    
    for (let i = 0; i < shoplen; i++) { //计算购物车选中的商品的个数    
      shopcar[i].check && lenIndex++;
    }
    this.setData({
      allsel: lenIndex == shoplen //如果购物车选中的个数和购物车里货物的总数相同，则为全选，反之为未全选    
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    let bSearch = wx.createSelectorQuery();
    bSearch.select('.edit-box').boundingClientRect()
    bSearch.exec(function(res) {
      if (res[0] === null) {} else {
        that.setData({
          bottomHeight: res[0].height
        });
      }
      let qSearch = wx.createSelectorQuery();
      qSearch.select('.search').boundingClientRect()
      qSearch.exec(function(res) {
        if (res[0] === null) {} else {
          that.setData({
            topHeight: res[0].height
          });
        }
        let navSearch = wx.createSelectorQuery();
        navSearch.select('.nav').boundingClientRect()
        navSearch.exec(function(res) {
          if (res[0] === null) {} else {
            that.setData({
              navHeight: res[0].height
            });
          }
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