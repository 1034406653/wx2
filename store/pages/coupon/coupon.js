// pages/coupon/coupon.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    popupShow:false,
    couponMoneyOff: [
      {
        "couponType": "couponDiscount", "restrict": "满99元减", "num": 50, "countDown": 10, "title": "满减券", "text": "部分商品可用", "time": "2018.03.26-2018.03.30"
      },
      {
        "couponType": "couponDiscount", "restrict": "满89元减", "num": 20, "countDown": 10, "title": "满减券", "text": "部分商品可用", "time": "2018.03.26-2018.03.30"
      },
    ],
    couponDiscount: [
      {
        "couponType": "couponDiscount", "restrict": "无使用限额", "num": 7, "countDown": 10, "title": "折扣券", "text": "部分商品可用", "time": "2018.03.26-2018.03.30"
      },
      {
        "couponType": "couponDiscount", "restrict": "无使用限额", "num": 7, "countDown": 10, "title": "折扣券", "text": "部分商品可用", "time": "2018.03.26-2018.03.30"
      },
    ],
    couponAllCan:[
      {
        "couponType": "couponAllCan", "num": 6, "countDown": 10, "title": "立减券", "text": "全场商品通用", "time": "2018.03.26-2018.03.30"
      },
      {
        "couponType": "couponAllCan", "num": 6, "countDown": 1, "title": "立减券", "text": "全场商品通用", "time": "2018.03.26-2018.03.30"
      },
    ]
  },
  showRule:function(){
    this.setData({
      popupShow: true
    })
  },
  popupHide:function(){
    this.setData({
      popupShow: false
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