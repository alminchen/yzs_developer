//index.js
//获取应用实例
const app = getApp()
let http = require("../../utils/util.js")
const url = "https://api.budejie.com/api/api_open.php?a=list&c=data&type=29"

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    page: 1,
    loadingHide: false,
    hideFooter: true,
    jokeList: [],
    jokeMaxTime:0
  },
  onLoad: function () {
    let that = this;
    http.request(url,this.data.page,0,function(data){
      that.setData({
        jokeList:that.data.jokeList.concat(data.list),
        loadingHide:true,
        jokeMaxTime:data.info.maxtime
      })
    },function(err){
      this.setData({
        loadingHide:true
      })
    })
  },
  loadMore:function(){
    var that = this;
    this.setData({
      hideFooter:!that.data.hideFooter
    })
    http.request(url,++that.data.page,that.data.jokeMaxTime,function(data){
      that.setData({
        jokeList:that.data.jokeList.concat(data.list),
        hideFooter:!that.data.hideFooter,
        jokeMaxTime: data.info.maxtime
      })
    },function(err){
      that.setData({
        hideFooter: !that.data.hideFooter
      })
    })
  },
  onShareAppMessage:function(e){
    return {
      path:'/pages/index/index?id=1'
    }
  }
})
