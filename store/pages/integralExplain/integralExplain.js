// pages/integralExplain/integralExplain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      { "text": "会员等级", "className": "" },
      { "text": "成长值", "className": "" },
      { "text": "积分", "className": "active" }
    ]
  },
  tabChange:function(e){
    var index=e.target.dataset.index;
    var nData=this.data.nav;
    nData.forEach(function(x,i){
      if(index==i)
        nData[i].className = 'active';
      else
        nData[i].className='';
    })
    this.setData({
      nav: nData
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