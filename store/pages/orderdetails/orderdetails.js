// pages/orderdetails/orderdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:"交易成功",
    brand:"华联超市",
    courier:"丁当当",
    time:"2017-12-22 22:10:00",
    peopleName:"林梦梦",
    phonePhone:"176026599865",
    adress:"浙江省 杭州市 西湖区 文新街道 文一西路 305号 骆家庄东苑 21号楼 202室",
    orderli:[
      { imgUrl: "../../images/hotsale1.jpg", text: "光明UHT纯牛奶 250ml", price:"1.00",num:"3"},
      { imgUrl: "../../images/hotsale2.jpg", text: "蒙牛利乐包纯牛奶 250ml (新老包装)", price: "2.00", num: "3" }
    ],
    totalPrice:"9.00"
  },
  navServerType:function(){
    wx.navigateTo({
      url: '../serverType/serverType',
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