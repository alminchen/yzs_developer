var interval = null //倒计时函数
Page({
  /**
   * 页面的初始数据
   */
  data: {
    zyArray: ['母婴', '酒水', '服装'],
    gsdArray: ['日本', '韩国', '美国'],
    time: '获取验证码', //倒计时 
    currentTime: 61,
    disabled: false,
    uploadedImages: [],
    imgBoolean: true,
    idCardIn:"",
    idCardIn1: "",
    idCardIn2: "",
    idCardIn3: "",
  },
  index:"",
  selectArea(e) {
    console.log(e.detail)
    this.setData({
      address: e.detail
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  chooseImage: function (e) {
    var that = this;
    // 选择图片
    console.log(e)
    var srcIndex = e.currentTarget.dataset.src;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths[0]
        that.getPic(srcIndex, tempFilePaths)
      }
    })
  },

  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })

      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode() {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
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
 
  // 提交表单
   formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  getPic(id,imgSrc){
    console.log(typeof id)
    switch(id){
      case "0":
        this.setData({
          idCardIn:imgSrc
        })
        break;
      case "1":
        this.setData({
          idCardIn1: imgSrc
        })
        break;
      case "2":
        this.setData({
          idCardIn2: imgSrc
        })
        break;
      case "3":
        this.setData({
          idCardIn3: imgSrc
        })
        break;
      default:
          break;
    }
  }


})