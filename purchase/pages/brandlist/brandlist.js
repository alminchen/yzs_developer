// pages/brandlist/brandlist.js
var y = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandList: [{
        "wordindex": "A",
        "brand": "A",
        "brandimg": null
      },
      {
        "wordindex": "B",
        "brand": "B",
        "brandimg": null
      }, {
        "wordindex": "C",
        "brand": "C",
        "brandimg": null
      }, {
        "wordindex": "D",
        "brand": "D",
        "brandimg": null
      }, {
        "wordindex": "E",
        "brand": "E",
        "brandimg": null
      }, {
        "wordindex": "F",
        "brand": "F",
        "brandimg": null
      }, {
        "wordindex": "G",
        "brand": "G",
        "brandimg": null
      }, {
        "wordindex": "H",
        "brand": "H",
        "brandimg": null
      }, {
        "wordindex": "I",
        "brand": "I",
        "brandimg": null
      }, {
        "wordindex": "J",
        "brand": "J",
        "brandimg": null
      }, {
        "wordindex": "K",
        "brand": "K",
        "brandimg": null
      }, {
        "wordindex": "L",
        "brand": "L",
        "brandimg": null
      }, {
        "wordindex": "M",
        "brand": "M",
        "brandimg": null
      }, {
        "wordindex": "N",
        "brand": "N",
        "brandimg": null
      }, {
        "wordindex": "O",
        "brand": "O",
        "brandimg": null
      },
      {
        "wordindex": "P",
        "brand": "P",
        "brandimg": null
      },
      {
        "wordindex": "Q",
        "brand": "Q",
        "brandimg": null
      },
      {
        "wordindex": "R",
        "brand": "R",
        "brandimg": null
      },
      {
        "wordindex": "S",
        "brand": "S",
        "brandimg": null
      },
      {
        "wordindex": "T",
        "brand": "T",
        "brandimg": null
      },
      {
        "wordindex": "U",
        "brand": "U",
        "brandimg": null
      },
      {
        "wordindex": "V",
        "brand": "V",
        "brandimg": null
      },
      {
        "wordindex": "W",
        "brand": "W",
        "brandimg": null
      },
      {
        "wordindex": "X",
        "brand": "X",
        "brandimg": null
      }, {
        "wordindex": "Y",
        "brand": "Y",
        "brandimg": null
      }, {
        "wordindex": "Z",
        "brand": "Z",
        "brandimg": null
      },
    ],
    wordindex: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    toView: 'A',
    scrollTop: 1000,
    indexy: 0,
    indexShow: false,
    indexEnglish: ""
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
  choiceWordindex: function(event) {
    let wordindex = event.currentTarget.dataset.wordindex;
    this.setData({
      toView: wordindex,
    })
  },

  touchstart(e) {
    this.setData({
      toView: e.currentTarget.dataset.wordindex,
      indexy: e.touches[0].pageY,
      indexShow: true,
      indexEnglish: e.currentTarget.dataset.wordindex
    })
  },
  touchmove(e) {
    y = this.getArrIndex(e.currentTarget.dataset.wordindex);
    var indexY = e.touches[0].pageY;
    if (this.data.toView == this.getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)) return false;
    if (this.getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)) {
      this.setData({
        toView: this.getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y),
        indexEnglish: this.getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)
      })
    }
  },
  touchend(e) {
    this.setData({
      indexShow: false
    })
  },

  getArrIndex(english) {
    const worldLen = this.data.wordindex.length;
    const worldIndex = this.data.wordindex;
    for (let i = 0; i < worldLen; i++) {
      if (english == worldIndex[i]) {
        return i;
      }
    }
  },
  getArrEnglish(num, index) {
    const worldIndex = this.data.wordindex;
    let english = worldIndex[num + index];
    if (!(1 > (num + index) > 26)) {
      return english
    } else {
      return NULL
    }
  },
  click(e){
    console.log(e.currentTarget.dataset.idx)
  }
})