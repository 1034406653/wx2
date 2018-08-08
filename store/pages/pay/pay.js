// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown: {
      "second": 0,
      "minute": 0,
      "hour": 0
    },
    adress:true,
    array: ['门店一', '门店二', '门店三', '门店四'],
    index: 0,
    adres:{
      "peopleName": "豆豆",
      "phone": "13785968551",
      "region": ['广东省', '广州市', '海珠区'],
      "detailAdress": "古荡街道益乐新村29号楼210",
    },
    adressActive:"active",
    adress2Active: "",
    orders:[
      { "imgUrl": "../../images/hotsale1.jpg", "text": "光明UHT纯牛奶 250ml", "price": 0.01,"buyNum":1},
      { "imgUrl": "../../images/hotsale2.jpg", "text": "蒙牛利乐包纯牛奶 250ml (新老包装)", "price": 1.00, "buyNum": 3 }
    ],
    totalMoney:3.1,
  },
  selectAddress:function(){
    this.setData({
      adress: true,
      adressActive: "active",
      adress2Active: ""
    })
  },
  selectAddress2: function () {
    this.setData({
      adress: false,
      adressActive: "",
      adress2Active: "active"
    })
  },
  navSelectAdress:function(){
    wx.chooseAddress({
      success: function (res) {
        wx.setStorage({
          key: 'adress',
          data: {
            "peopleName": res.userName,
            "phone": res.telNumber,
            "region": [res.provinceName, res.cityName, res.countyName],
            "detailAdress": res.detailInfo,
          },
          success: function(res) {},
        })
      }
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    leftTimer(this)
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
    var that=this;
    // 地址
    wx.getStorage({
      key: 'adress',
      success: function(res) {
        that.setData({
          adres: res.data
        })
      },
    })
    // 订单列表
    wx.getStorage({
      key: 'unPay',
      success: function(res) {
        that.setData({
          orders: res.data,
        })
      },
    })
    // 总价
    wx.getStorage({
      key: 'unPayMoney',
      success: function (res) {
        that.setData({
          totalMoney: res.data,
        })
      },
    })
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
// 倒计时
function leftTimer(that) {
  var leftTime = (new Date(2018, 3, 7, 15, 59, 0)) - (new Date()); //计算剩余的毫秒数 
  var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
  var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
  days = checkTime(days);
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  if (leftTime < 0) {
    that.setData({
      countdown: {
        "second": "00",
        "minute": "00",
        "hour": "00"
      },
    });
  } else {
    that.setData({
      countdown: {
        "second": seconds,
        "minute": minutes,
        "hour": hours
      },
    });
  }
  var time = setTimeout(function () {
    leftTimer(that);
  }, 1000)
};
function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};