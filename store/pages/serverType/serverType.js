// pages/serverType/serverType.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  imgUrl:"../../images/hotsale1.jpg",
    orderText:"光明UHT纯牛奶 250ml",
    serverType:[
      { "iconUrl":"../../images/icon-refund1.png","text1":"仅退款","text2":"未收到货（包含未签收），或卖家协商同意前提下"},
      { "iconUrl": "../../images/icon-refund2.png", "text1": "退货退款", "text2":"已收到货，需要退还已收到的货物"},
      { "iconUrl": "../../images/icon-change.png", "text1": "换货款", "text2":"商品存在质量问题，联系卖家协商换货"}
    ]
  },
  navApplyFor:function(e){
    var index=e.currentTarget.dataset.index;
    wx.setStorage({
      key: 'applyType',
      data: index,
      success:function(){
        wx.navigateTo({
          url: '../applyFor/applyFor',
        });
      }
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