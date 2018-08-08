// pages/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integralNum: 25,
    integraList: [
      { "text": "柏源超市小程序签到", "time": "2018-03-26 13:23:58", "num": 5 },
      { "text": "柏源超市小程序购物", "time": "2018-03-26 13:23:58", "num": 10 },
      { "text": "柏源超市小程序签到", "time": "2018-03-25 13:23:58", "num": 5 },
      { "text": "柏源超市小程序签到", "time": "2018-03-24 13:23:58", "num": 5 },
    ]
  },
  navIntegralExplain:function(){
    wx.navigateTo({
      url: '../integralExplain/integralExplain',
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

  }
})