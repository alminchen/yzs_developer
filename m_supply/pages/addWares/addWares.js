Page({

  data: {
    SwiperShow:false,
    addstatus: false,
    adjustStatus: '上调',
    addNum: '',
    formatArr: [{
        id: 1,
        sku: '',
        num: '',
        price: '',  
        sell: '',
        uploadSrc: ""
      }
     
    ],
    switchChecked: true,
    imgUrls: [
     
    ],
    allEditHide: false,
    current: 0,

    uploadShow: true,
    selarr: [],
    priceModal: true
  },

 // 添加商品图片
  addSwiper:function(){
    var that= this;
    let formatArr = that.data.formatArr;
    let imgUrls = that.data.imgUrls;
    wx.chooseImage({
      count: 5, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        imgUrls = tempFilePaths;
        that.setData({
          current: 0,
          imgUrls: imgUrls,
          SwiperShow: true
        })
      },
        
    })
  
    console.log(imgUrls)
  },




  //  关闭调价弹窗
  offModal: function() {
    this.setData({
      priceModal: true,
      allEditHide: false
    })
  },
  //获取调价输入框的值
  addNumInput: function(e) {
    this.setData({
      addNum: e.detail.value

    })
    console.log(e.detail.value)
  },

  //获取调价选项
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      addstatus: !this.data.addstatus,
      adjustStatus: e.detail.value
    })
  },
  // 调整价格操作
  addPrice: function() {
    let formatArr = this.data.formatArr;
    let selarr = this.data.selarr;
    let addNum = this.data.addNum;
    let adjustStatus = this.data.adjustStatus;
    for (var i = 0; i < selarr.length; i++) {
      if (adjustStatus === "上调") {
        selarr[i].price = Number(addNum) + selarr[i].price;
        console.log(formatArr.hasOwnProperty(selarr[i].id))

      } else {
        selarr[i].price = selarr[i].price - Number(addNum);
      }
    }
    var arrayOfSquares = selarr.map(item => {
      return formatArr.map(val => {
        if (item.id == val.id) {
          val.price = item.price;
          return val

        }
        return val

      })
    });
    console.log(arrayOfSquares)
    this.setData({
      selarr: selarr,
      priceModal: true,
      allEditHide: false,
      addstatus: !this.data.addstatus,
      formatArr: arrayOfSquares[0]
    })
    console.log(selarr)
  },

  // 调整价格弹窗
  adjust: function() {
    this.setData({
      priceModal: false
    });
  },
 //编辑
  editBtn(e){
    this.setData({
      detailShow: false,
    })
  },
  
  //点击单个选择按钮  
  checkTap: function(e) {
    let Index = e.currentTarget.dataset.index;
    let formatArr = this.data.formatArr;
    let selarr = this.data.selarr;

    formatArr[Index].check = !formatArr[Index].check || false;
    if (formatArr[Index].check) {
      selarr.push(formatArr[Index]);

    } else {
      for (let i = 0, len = selarr.length; i < len; i++) {

        if (formatArr[Index].id == selarr[i].id) {
          selarr.splice(i, 1);
        }
      }

    }
    console.log(Index)
    if (selarr.length != 0) {
      if (selarr.length > (formatArr.length - 1)) {
        wx.showToast({
          title: '必须保留一个数据',
          mask: true,
          icon: "none",
          duration: 2000
        })
        formatArr[Index].check = false;
        selarr.splice(selarr.indexOf(formatArr[Index]), 1)
      }
    }
    this.setData({
      formatArr: formatArr,
      selarr: selarr,
    });
    console.log(formatArr);
  },

  //点击移除商品  
  deleteshopTap: function() {
    var that = this;
    var formatArr = this.data.formatArr,
      selarr = this.data.selarr;
    wx.showModal({
      cancelColor: "#999999",
      confirmColor: "#4b89fc",
      content: '删除后规格不存在，确定要删除规格吗？',
      success(res) {
        if (res.confirm) {
          for (var i = 0, len = selarr.length; i < len; i++) {
            console.log(selarr[i].id);
            for (var lens = formatArr.length - 1, j = lens; j >= 0; j--) {
              console.log(formatArr[j].id);
              if (selarr[i].id == formatArr[j].id) {
                formatArr.splice(j, 1);
              }
            }
          }

          that.setData({
            allEditHide: !that.data.allEditHide,
            selarr: [],
            formatArr: formatArr,
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 批量操作
  allEdit: function() {
    let formatArr = this.data.formatArr;
    formatArr[0].status = false;
    this.setData({
      formatArr: formatArr,
      allEditHide: true
    })
  },

  // 删除图片
  deleteImg(e){
    var srcId = e.currentTarget.dataset.cur;
    let formatArr = this.data.formatArr;
    wx.showModal({
      cancelColor: "#999999",
      confirmColor: "#4b89fc",
      content: '确定要删除规格图片吗？',
      success:res=>{
        if (res.confirm) {

          var val = formatArr.findIndex((n) => {
            return n.id == srcId
          })
          formatArr[val].uploadSrc = '';
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log(val)
          this.setData({
            formatArr: formatArr
          })
        }
      }
    })
    
  },
  /***增加规格 */
  addTemp: function(e) {
    var temp = this.data.formatArr;
    var addId = this.data.formatArr.length + 1;
    temp.push({
      id: addId,
      sku: '',
      num: '',
      price: '',
      sell: '',
      uploadSrc: ''
    });
    this.setData({
      formatArr: temp
    })
    console.log(this.data.formatArr);
  },

  switchChange(e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },

  swiperChange: function(e) {
    if (e.detail.source == 'touch') {
      this.setData({
        current: e.detail.current
      })
    }
  },


  // 上传sku图片
  chooseImage: function(e) {
    var that = this;
    // 选择图片
    console.log(e)
    var srcIndex = e.currentTarget.dataset.src;
    var srcId = e.currentTarget.dataset.cur;
    let formatArr = this.data.formatArr;
    console.log(srcId)
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        var tempFilePaths = res.tempFilePaths[0];

        var val = formatArr.findIndex((n) => {
          return n.id == srcId
        })
        formatArr[val].uploadSrc = tempFilePaths;
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(val)
        that.setData({
          formatArr: formatArr
        })
      }
    })
  },
  //禁用
  statusFunc: function() {
    wx.showModal({
      cancelColor: "#999999",
      confirmColor: "#4b89fc",
      content: '禁用后客户将无法看到该商品确认要禁用吗？',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../wares/wares'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  //删除商品
  deleteBtn: function() {
    wx.showModal({
      cancelColor: "#999999",
      confirmColor: "#4b89fc",
      content: '删除后商品不存在，确定要删除商品吗？',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../wares/wares'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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

  }



})