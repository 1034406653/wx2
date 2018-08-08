// pages/rail/rail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rail:[
      {
        "name":"GT360S+77435",
        "distance":"200",
        "address":"浙江省杭州市西湖区古荡街道益乐新村南二区23号楼浙江省杭州市西湖区古荡街道益乐新村南二区23号楼",
        "out":{
          "color":"#26b6eb",
          "active":true
        },
        "enter":{
          "color": "#eeeeee",
          "active": false
        },
        "className":"activeRail",
        "active":true
      },
      {
        "name": "GT360S+77435",
        "distance": "200",
        "address": "浙江省杭州市西湖区古荡街道益乐新村南二区23号楼浙江省杭州市西湖区古荡街道益乐新村南二区23号楼",
        "out": {
          "color": "#eeeeee",
          "active": false
        },
        "enter": {
          "color": "#eeeeee",
          "active": false
        },
        "className": "",
        "active": false
      }
    ],
    showDel:false,
  },
  onOut:function(e){
    var index = e.currentTarget.dataset.index;
    var rData=this.data.rail;
    if (rData[index].out.active){
      rData[index].out.active = false;
      rData[index].out.color = "#eeeeee";
    }else{
      rData[index].out.active = true;
      rData[index].out.color = "#26b6eb";
    }
    if (rData[index].out.active || rData[index].enter.active) {
      rData[index].active = true;
      rData[index].className = "activeRail";
    } else {
      rData[index].active = false;
      rData[index].className = "";
    }
    this.setData({
      rail: rData
    })
  },
  onEnter: function (e) {
    var index = e.currentTarget.dataset.index;
    var rData = this.data.rail;
    if (rData[index].enter.active) {
      rData[index].enter.active = false;
      rData[index].enter.color = "#eeeeee";
    } else {
      rData[index].enter.active = true;
      rData[index].enter.color = "#26b6eb";
    }
    if (rData[index].out.active || rData[index].enter.active) {
      rData[index].active = true;
      rData[index].className = "activeRail";
    } else {
      rData[index].active = false;
      rData[index].className = "";
    }
    this.setData({
      rail: rData
    })
  },
  navSetRail:function(){
    wx.navigateTo({
      url: '../setRail/setRail',
    })
  },
  delBoxActive:function(){
    this.setData({
      showDel:true
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