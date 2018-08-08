// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moneyBox:[
      { "text": "100.00元", "viewClass":"money" },
      { "text": "200.00元", "viewClass": "" },
      { "text": "300.00元", "viewClass": "" },
      { "text": "500.00元", "viewClass": "" },
      { "text": "1，000.00元", "viewClass": "" }
    ]
  },
  moneyActive:function(e){
    var mData=this.data.moneyBox;
    mData.forEach(function(x,index){
      if (index == e.currentTarget.dataset.index)
        mData[index].viewClass = "money"
        else
        mData[index].viewClass = ""
    })
    this.setData({
      moneyBox: mData
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