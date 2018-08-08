// pages/track/track.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 30.281219,
    longitude: 120.181168,
    scale: 16,
    controls: [
      {
        id: 1,
        iconPath: '../../images/contral.png',
        position: {
          left: 6,
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
          left: 300,
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
          left: 300,
          top: 456,
          width: 45,
          height: 52
        },
        clickable: true
      }
    ],
    polyline: [
      {
        points: [{
          longitude: 120.181168,
          latitude: 30.281219
        }, {
            longitude: 120.181168,
            latitude: 30.283219
          }, {
            longitude: 120.181168,
            latitude: 30.283219
        }, {
          longitude: 120.183168,
          latitude: 30.283219
          }, {
            longitude: 120.181168,
            latitude: 30.286519
          }],
        color: "#6aebcf",
        width: 2,
        dottedLine: false,
        arrowLine:true,
        
      }
    ],
    dateStart: '2016-09-01',
    timeStart: '12:01',
    dateEnd: '2016-09-01',
    timeEnd: '12:01',
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
      default:
        break;
    }
  },
  // 
  includePoints:function(){
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        longitude: 120.181168,
        latitude: 30.281219
      }, {
        longitude: 120.181168,
        latitude: 30.283219
      }, {
        longitude: 120.181168,
        latitude: 30.283219
      }, {
        longitude: 120.183168,
        latitude: 30.283219
      }, {
        longitude: 120.181168,
        latitude: 30.286519
      }],
    })
  },
  // 日期选择器
  bindDateStartChange: function (e) {
    this.setData({
      dateStart: e.detail.value
    })
  },
  bindDateEndChange: function (e) {
    this.setData({
      dateEnd: e.detail.value
    })
  },
  // 时间选择器
  bindTimeStartChange: function (e) {
    this.setData({
      timeStart: e.detail.value
    })
  },
  bindTimeEndChange: function (e) {
    this.setData({
      timeEnd: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('myMap')
    var that = this;
    var cData = this.data.controls;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        wx.getSystemInfo({
          success: function (res) {
            cData[0].position.top = res.windowHeight - 240;
            cData[1].position.left = res.windowWidth - 56;
            cData[1].position.top = res.windowHeight - 288;
            cData[2].position.left = res.windowWidth - 56;
            cData[2].position.top = res.windowHeight - 240;
          }
        })
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          controls: cData
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