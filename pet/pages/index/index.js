//index.js
//获取应用实例
var QQMapWX = require('../../qqmap-wx-jssdk.min.js');
var qqmapsdk;
const app = getApp()
Page({
  data: {
    latitude: 30.281219,
    longitude: 120.181168,
    mask:false,
    bootomView: false,
    leftView:false,
    haveEquipment:true,
    scale: 16,
    controls: [
      {
        id: 1,
        iconPath: '../../images/contral.png',
        position: {
          left: 8,
          top: 496,
          width: 50,
          height: 50
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '../../images/zoomIn.png',
        position: {
          left: 304,
          top: 407,
          width: 45,
          height: 49
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: '../../images/zoomOut.png',
        position: {
          left: 304,
          top: 456,
          width: 45,
          height: 52
        },
        clickable: true
      },
      {
        id: 4,
        iconPath: '../../images/setEquipment.png',
        position: {
          left: 10,
          top: 30,
          width: 45,
          height: 45
        },
        clickable: true
      },
    ],
    markers: [
      {
        iconPath: "../../images/markers.png",
        id: 0,
        latitude: 30.283,
        longitude: 120.18117,
        width: 40,
        height: 40,
        title: "小黄1号",
        callout: {
          content: "我是小黄一号",
          color: "#ffffff",
          fontSize: 14,
          padding: 8,
          display: "ALWAYS",
          bgColor: "#e86c5e",
          borderRadius: 14
      }
    },
      {
        iconPath: "../../images/markers.png",
        id: 1,
        latitude: 30.285,
        longitude: 120.18817,
        width: 40,
        height: 40,
        title: "小黄2号",
        callout: {
          content: "我是小黄二号",
          color: "#ffffff",
          fontSize: 14,
          padding: 8,
          display: "ALWAYS",
          bgColor: "#e86c5e",
          borderRadius: 14
        }
      },
    ],
    equipment:{
      index: 0,
      equipmentId: "GT360S+77435",
      equipmentNet: "在线",
      equipmentLocation: "WiFy定位",
      equipmentEnergy: "20%",
      time: "2018-03-26 21:20:00",
      adress: "浙江省杭州市下城区白石巷356号"
    },
    equipments:[
      {
        index: 0,
        equipmentId: "GT360S+00001",
        equipmentNet: "在线",
        equipmentLocation: "WiFy定位",
        equipmentEnergy: "20%",
        time: "2019-03-26 21:20:00",
        adress: "浙江省杭州市下城区白石巷356号"
      },
      {
        index: 1,
        equipmentId: "GT360S+00002",
        equipmentNet: "不在线",
        equipmentLocation: "WiFy定位",
        equipmentEnergy: "70%",
        time: "2019-03-26 21:20:00",
        adress: "浙江省杭州市下城区白石巷356号"
      }
    ]
    
     
  },
  // 滑动地图
  regionchange(e) {

  },
  // 点击标注
  markertap(e) {
    var that=this;
    var eData = this.data.equipment;
    eData = this.data.equipments[e.markerId];
    var lat = this.data.markers[e.markerId].latitude;
    var lon = this.data.markers[e.markerId].longitude;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lon
      },
      success: function (res) {
        eData.adress=res.result.address
      },
      fail: function (res) {
      },
      complete: function (res) {
        that.setData({
          equipment: eData,
          bootomView: true,
        })
      }
    })
    
  },
  closeBottom:function(){
    this.setData({
      bootomView: false,
    })
  },
  // 点击气泡
  callouttap(e) {
    var that = this;
    var eData = this.data.equipment;
    eData = this.data.equipments[e.markerId];
    var lat = this.data.markers[e.markerId].latitude;
    var lon = this.data.markers[e.markerId].longitude;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lon
      },
      success: function (res) {
        eData.adress = res.result.address
      },
      fail: function (res) {
      },
      complete: function (res) {
        that.setData({
          equipment: eData,
          bootomView: true,
        })
      }
    })
   
  },
  // 点击组件
  controltap(e) {
    switch (e.controlId) {
      case 1:
        this.setData({
          scale: 16
        })
        this.mapCtx.moveToLocation();
        break;
      case 2:
        if (this.data.scale < 20) {
          this.setData({
            scale: this.data.scale + 1
          })
        }
        break;
      case 3:
        if (this.data.scale > 5) {
          this.setData({
            scale: this.data.scale - 1
          })
        }
        break;
      case 4:
        this.setData({
          leftView: true,
          mask:true
        })
        break;
      default:
        break;
    }
  },
  // 设备详情
  navEquipmentDetails:function(){
    wx.navigateTo({
      url: '../equipmentDetails/equipmentDetails',
    })
  },
  // 添加设备
  navAddEuipment:function(){
    wx.navigateTo({
      url: '../addEquipment/addEquipment',
    })
  },
  maskHide:function(){
    this.setData({
      leftView: false,
      mask: false,
    })
  },
  // 电子名片
  navCard:function(){
    wx.navigateTo({
      url: '../card/card',
    })
  },
  // 围栏
  navRail:function(){
    wx.navigateTo({
      url: '../rail/rail',
    })
  },
  navTrack:function(){
    wx.navigateTo({
      url: '../track/track',
    })
  },
  // 指令
  navOrder:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
// 查看设备列表
  navEquipmentList:function(){
    wx.navigateTo({
      url: '../equipmentList/equipmentList',
    })
  },
  //事件处理函数
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: 'EJBBZ-7ZICJ-ALKFE-KH4MJ-ENKEV-PZBKZ'
    });
    this.mapCtx = wx.createMapContext('myMap');
    var that = this;
    var mData = this.data.markers;
    var cData = this.data.controls;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        mData[0].latitude = res.latitude;
        mData[0].longitude = res.longitude;
        wx.getSystemInfo({
          success: function (res) {
            cData[0].position.top = res.windowHeight - 80;
            cData[1].position.left = res.windowWidth - 56;
            cData[1].position.top = res.windowHeight - 128;
            cData[2].position.left = res.windowWidth - 56;
            cData[2].position.top = res.windowHeight - 80;
          }
        })
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: mData,
          controls: cData
        })
      }
    })
  },
  onShow:function(){
    
  },
  onReady: function (e) {
    
  },
})
