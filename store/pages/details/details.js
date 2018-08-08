Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsDetails:
    { 
        "goodsImgUrl": "../../images/fruits9.jpg", 
        "text": "泰国龙眼 500g/份", 
        "price": "8.80",
        "old":"¥12.90",
        "num":"1000",
    },
    "evaluateNum": "3",
    star:[
      "../../images/star-active.png",
       "../../images/star-active.png",
      "../../images/star-active.png",
      "../../images/star-active.png",
      "../../images/star-active.png"
    ]
  },
  navEvaluate:function(){
    wx.navigateTo({
      url: '../evaluate/evaluate',
    })
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  toCart: function () {
    wx.switchTab({
      url: '../cart/cart'
    })
  },
  addCart: function () {
    wx.showModal({
      content: '已添加，我在购物车等你呦',
      showCancel: false
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
    let that = this;
    wx.getStorage({
      key: 'goodsDetails',
      success: function(res) {
        that.setData({
          goodsDetails:res.data
        })
      },
    })
  },

  onHide: function () {
    
    // var that=this;
    // wx.setStorage({
    //   key: 'historySearch',
    //   data: "aaa"
    // })
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