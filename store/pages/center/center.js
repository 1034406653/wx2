// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    payNum:2,
    sendNum:0,
    receiptNum:0,
    doneNum:0,
    ifPay:true,
    ifSend:false,
    ifReceipe:false,
    ifDone:false,
    money:"0.00",
    memberIntegral:30,
    memberCard:"0.00",
    coupon:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  allNavOrder:function(){
    wx.setStorage({
      key: "centerNavOrder",
      data: "all",
      success:function(){
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  payNavOrder: function () {
    wx.setStorage({
      key: "centerNavOrder",
      data: "pay",
      success: function () {
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  sendNavOrder: function () {
    wx.setStorage({
      key: "centerNavOrder",
      data: "send",
      success: function () {
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  receiptNavOrder: function () {
    wx.setStorage({
      key: "centerNavOrder",
      data: "receipt",
      success: function () {
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  doneNavOrder: function () {
    wx.setStorage({
      key: "centerNavOrder",
      data: "done",
      success: function () {
        wx.navigateTo({
          url: '../order/order'
        })
      }
    })
  },
  navCoupon:function(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
  },
  navCard:function(){
    wx.navigateTo({
      url:'../card/card'
    })
  },
  navIntegral:function(){
    wx.navigateTo({
      url: '../integral/integral'
    })
  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: {
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          }
        })
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 待付款
    if (parseInt(this.data.payNum)>0){
      this.setData({
        ifPay:true
      })
    }
    // 待发货
    if (parseInt(this.data.sendNum) > 0) {
      this.setData({
        ifSend: true
      })
    }
    // 待收货
    if (parseInt(this.data.receiptNum) > 0) {
      this.setData({
        ifReceipt: true
      })
    }
    // 已完成
    if (parseInt(this.data.doneNum) > 0) {
      this.setData({
        ifDone: true
      })
    }
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