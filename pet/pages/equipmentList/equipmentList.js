// pages/equipmentList/equipmentList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipmentList:[
      {
        "portrait":"../../images/portrait.png",
        "id":"GT360S+771",
        "net":"在线",
        "location":"WiFy定位",
        "selected":true,
        "btnColor":"#26b6eb"
      },
      {
        "portrait": "../../images/portrait.png",
        "id": "GT360S+772",
        "net": "在线",
        "location": "WiFy定位",
        "selected": false,
        "btnColor": "#cccccc"
      },
      {
        "portrait": "../../images/portrait.png",
        "id": "GT360S+773",
        "net": "在线",
        "location": "WiFy定位",
        "selected": false,
        "btnColor": "#cccccc"
      },
      {
        "portrait": "../../images/portrait.png",
        "id": "GT360S+774",
        "net": "在线",
        "location": "WiFy定位",
        "selected": false,
        "btnColor": "#cccccc"
      }
    ]
  },
  // 切换设备
  selectEquipment:function(e){
    var eData = this.data.equipmentList;
    eData.forEach(function(x,index){
      if (index == e.currentTarget.dataset.index){
        eData[index].selected=true;
        eData[index].btnColor = "#26b6eb";
      }else{
        eData[index].selected = false;
        eData[index].btnColor = "#cccccc";
      }
    })
    this.setData({
      equipmentList: eData
    })
  },
  // 添加设备
  navAddEuipment: function () {
    wx.navigateTo({
      url: '../addEquipment/addEquipment',
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