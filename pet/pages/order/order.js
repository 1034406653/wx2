// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      { "text": "监护号码", "className": "active" },
      { "text": "设备回拨", "className": "" },
      { "text": "立即定位", "className": "" },
      { "text": "定位频率", "className": "" },
      { "text": "远程关机", "className": "" },
      { "text": "低电报警", "className": "" },
    ],
    // 监护号码
    custody: [
      { "text": "监护号码1", "inputValue": "" },
      { "text": "监护号码2", "inputValue": "" },
      { "text": "监护号码3", "inputValue": "" },
    ],
    // 设备回拨
    equipmentCall:"",
    // 定位频率
    HzIndex:0,
    Hz: ["每10秒钟", "每1分钟", "每10分钟", "每30分钟", "每60分钟"],
    // 低电报警
    energyIndex: 0,
    energy: ["当电量低于5% 时报警", "当电量低于10% 时报警", "当电量低于15% 时报警", "当电量低于20% 时报警"],
    informIndex:0,
    inform:["仅平台通知","短信通知","短信和平台通知"]
  },
  tabChange:function(e){
    var index = e.currentTarget.dataset.index;
    var nData=this.data.nav;
    nData.forEach(function(x,i){
      nData[i].className = ""
    })
    switch (index) {
      case 0:
        nData[0].className = "active";
        break;
      case 1:
        nData[1].className = "active";
        break;
      case 2:
        nData[2].className = "active";
        break;
      case 3:
        nData[3].className = "active";
        break;
      case 4:
        nData[4].className = "active";
        break;
      case 5:
        nData[5].className = "active";
        break;
      default:
        console.log("出错了！")
    }
    this.setData({
      nav:nData
    })
  },
  // 定位频率选择
  bindHzChange: function (e) {
    this.setData({
      HzIndex: e.detail.value
    })
  },
  bindEnergyChange:function(e){
    this.setData({
     energyIndex: e.detail.value
    })
  },
  bindInformChange: function (e) {
    this.setData({
      informIndex: e.detail.value
    })
  },
  // 发送指令
  order0:function(){
    wx.showToast({
      icon:"none",
      title: '指令发送成功！',
    })
  },
  order1: function () {
    wx.showToast({
      icon: "none",
      title: '指令发送成功！',
    })
  },
  order2: function () {
    wx.showToast({
      icon: "none",
      title: '指令发送成功！',
    })
  },
  order3: function () {
    wx.showToast({
      icon: "none",
      title: '指令发送成功！',
    })
  },
  order4: function () {
    wx.showToast({
      icon: "none",
      title: '指令发送成功！',
    })
  },
  order5: function () {
    wx.showToast({
      icon: "none",
      title: '指令发送成功！',
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