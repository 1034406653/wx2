// pages/setRail/setRail.js
var QQMapWX = require('../../qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    scale:17,
    longitude: 120.16586,
    latitude: 30.31655,
    markers:[
      {
        iconPath: "../../images/rail-center.png",
        id: 0,
        width: 20,
        height: 20,
        longitude: 120.16586,
        latitude: 30.31655,
      }
    ],
    circles: [{
      longitude: 120.16586,
      latitude: 30.31655,
      color: "#6cc9e6",
      fillColor: "#26b6eb33",
      radius: 500,
      strokeWidth: 1
    }],
    adress:"",
    railName:"家",
    railDistance:500,
    showNameInput: false,
    rail:{
      "out":{
        color:"#26b6eb",
        active: true
      },
      "enter": {
        color: "#26b6eb",
        active: true
      }
    },
  },
   // 地址搜索
  bindAdressChange:function(e){
    this.setData({
      adress: e.detail.value
    })
  },
  searchAdress:function(){
    var addressValue=this.data.adress;
    var that=this;
    var cData = this.data.circles;
    var mData = this.data.markers;
    // 引入SDK核心类
    var qqSearch = new QQMapWX({
      key: 'EJBBZ-7ZICJ-ALKFE-KH4MJ-ENKEV-PZBKZ' // 必填
    });
    // 调用接口
    qqSearch.geocoder({
      address: addressValue,
      success: function (res) {
        cData[0].longitude = res.result.location.lng;
        cData[0].latitude = res.result.location.lat;
        mData[0].longitude = res.result.location.lng;
        mData[0].latitude = res.result.location.lat;
        that.setData({
          longitude: res.result.location.lng,
          latitude: res.result.location.lat,
          circles: cData,
          markers: mData,
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '地址不够详细',
          icon:"none"
        });
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  // 更改围栏名字
  changeRailName: function () {
    this.setData({
      showNameInput:true
    })
  },
  bindRailName:function(e){
    this.setData({
      railName: e.detail.value
    })
  },
  onNameConfirm:function(){
    this.setData({
      showNameInput: false
    })
  },
  // 更改围栏范围
  changeRailDistance: function () {
    this.setData({
      showDistanceInput: true
    })
  },
  bindRailDistance: function (e) {
    this.setData({
      railDistance: e.detail.value
    })
  },
  onDistanceConfirm: function () {
    var distance = this.data.railDistance;
    var Cdata = this.data.circles;
    var scaleNum = this.data.scale;
    if (distance > 1000) {
      distance = 1000;
      wx.showToast({
        title: '最大为1000米',
        icon: 'none',
        duration: 2000
      })
    } else if (distance < 100) {
      distance = 100;
      wx.showToast({
        title: '最小为100米',
        icon: 'none',
        duration: 2000
      })
    }
    if (distance<=160)
      scaleNum=19
    else if (distance <= 300)
      scaleNum = 18
    else if (distance <= 700)
      scaleNum = 17
    else
      scaleNum = 16
    Cdata[0].radius = parseInt(distance);
    this.setData({
      railDistance: distance,
      showDistanceInput: false,
      circles: Cdata,
      scale: scaleNum
    })
  },
  // 设置警报
  onOut:function(){
    var rData=this.data.rail;
    if (rData.out.active){
      rData.out.active = false;
      rData.out.color = "#cccccc"
    }else{
      rData.out.active = true;
      rData.out.color = "#24b4f0"
    }
    this.setData({
      rail:rData
    })
  },
  onEnter: function () {
    var rData = this.data.rail;
    if (rData.enter.active) {
      rData.enter.active = false;
      rData.enter.color = "#cccccc"
    } else {
      rData.enter.active = true;
      rData.enter.color = "#24b4f0"
    }
    this.setData({
      rail: rData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('map');
    var that=this;
    var mData=this.data.markers;
    var cData = this.data.circles;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        mData[0].latitude = res.latitude;
        mData[0].longitude = res.longitude;
        cData[0].latitude = res.latitude;
        cData[0].longitude = res.longitude;
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: mData,
          circles: cData
        })
      }
    })
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