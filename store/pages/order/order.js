// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nav: [
      { "text": "全部", "tabClass": "active" },
      { "text": "待支付", "tabClass": "" },
      { "text": "待发货", "tabClass": "" },
      { "text": "待收货", "tabClass": "" },
      { "text": "待评价", "tabClass": "" },
    ],
    sortActive:[],
    all: [
      {
        orderId: "E201803050010001",
        orderState: "已关闭",
        totalPrice: 2.02,
        goodsLi: [
          {
            imgUrl: "../../images/hotsale1.jpg",
            text: "光明UHT纯牛奶 250ml",
            price: 0.01,
            oldPrice: "¥2.65",
            num: 2
          },
          {
            imgUrl: "../../images/hotsale2.jpg",
            text: "蒙牛利乐包纯牛奶 250ml (新老包装)",
            price: 1.00,
            oldPrice: "",
            num: 2
          }
        ]
      },
      {
        orderId: "E201803050010002",
        orderState: "已关闭",
        totalPrice: 2.02,
        goodsLi: [
          {
            imgUrl: "../../images/hotsale1.jpg",
            text: "光明UHT纯牛奶 250ml",
            price: 0.01,
            oldPrice: "¥2.65",
            num: 2
          },
          {
            imgUrl: "../../images/hotsale2.jpg",
            text: "蒙牛利乐包纯牛奶 250ml (新老包装)",
            price: 1.00,
            oldPrice: "",
            num: 2
          }
        ]
      },
      {
        orderId: "E201803050010002",
        orderState: "待支付",
        totalPrice: 2.02,
        goodsLi: [
          {
            imgUrl: "../../images/hotsale1.jpg",
            text: "光明UHT纯牛奶 250ml",
            price: 0.01,
            oldPrice: "¥2.65",
            num: 2
          },
          {
            imgUrl: "../../images/hotsale2.jpg",
            text: "蒙牛利乐包纯牛奶 250ml (新老包装)",
            price: 1.99,
            num: 2
          }
        ]
      },
      {
        orderId: "E201803050010003",
        orderState: "待支付",
        totalPrice: 6.00,
        goodsLi: [
          {
            imgUrl: "../../images/no-picture.jpg",
            text: "泰国龙眼500g/份",
            price: 1.99,
            oldPrice: 12.9,
            num: 2
          },
          {
            imgUrl: "../../images/hotsale3.jpg",
            text: "砂糖橘 500g",
            price: 1.01,
            num: 2
          }
        ]
      }
    ],
    pay: [
      {
        orderId: "E201803050010002",
        orderState: "待支付",
        totalPrice: 2.02,
        goodsLi: [
          {
            imgUrl: "../../images/hotsale1.jpg",
            text: "光明UHT纯牛奶 250ml",
            price: 0.01,
            oldPrice: "¥2.65",
            num: 2
          },
          {
            imgUrl: "../../images/hotsale2.jpg",
            text: "蒙牛利乐包纯牛奶 250ml (新老包装)",
            price: 1.99,
            num: 2
          }
        ]
      },
      {
        orderId: "E201803050010003",
        orderState: "待支付",
        totalPrice: 6.00,
        goodsLi: [
          {
            imgUrl: "../../images/no-picture.jpg",
            text: "泰国龙眼500g/份",
            price: 1.99,
            oldPrice: 12.9,
            num: 2
          },
          {
            imgUrl: "../../images/hotsale3.jpg",
            text: "砂糖橘 500g",
            price: 1.01,
            num: 2
          }
        ]
      }
    ],
    send: [
      {
        orderId: "E201803050030001",
        orderState: "待发货",
        goodsLi: [
          {
            imgUrl: "../../images/no-picture.jpg",
            text: "泰国龙眼500g/份",
            price: 1.99,
            oldPrice: 12.9,
            num: 2
          },
          {
            imgUrl: "../../images/hotsale3.jpg",
            text: "砂糖橘 500g",
            price: 1.01,
            num: 2
          }
        ],
        totalPrice: 6.00
      }
    ],
    receipt: [],
    evaluate: [{
      orderId: "E201803050010002",
      orderState: "待评价",
      totalPrice: 2.02,
      goodsLi: [
        {
          imgUrl: "../../images/hotsale1.jpg",
          text: "光明UHT纯牛奶 250ml",
          price: 0.01,
          oldPrice: "¥2.65",
          num: 2
        },
        {
          imgUrl: "../../images/hotsale2.jpg",
          text: "蒙牛利乐包纯牛奶 250ml (新老包装)",
          price: 1.99,
          num: 2
        }
      ]
    },
    {
      orderId: "E201803050010003",
      orderState: "待评价",
      totalPrice: 6.00,
      goodsLi: [
        {
          imgUrl: "../../images/no-picture.jpg",
          text: "泰国龙眼500g/份",
          price: 1.99,
          oldPrice: 12.9,
          num: 2
        },
        {
          imgUrl: "../../images/hotsale3.jpg",
          text: "砂糖橘 500g",
          price: 1.01,
          num: 2
        }
      ]
    }]
  },
  tabClick: function (e) {
    var nData = this.data.nav;
    var sData = this.data.sortActive;
    nData.forEach(function (x,index) {
      if (index == e.currentTarget.dataset.index) {
        x.tabClass = 'active'
      } else {
        x.tabClass = ''
      }
    })
    var that=this;
    switch (e.currentTarget.dataset.index){
      case 0:
        sData = this.data.all;
        break;
      case 1:
        sData=this.data.pay;
        break;
      case 2:
        sData=that.data.send;
        break;
      case 3:
        sData=that.data.receipt;
        break;
      case 4:
        sData=that.data.evaluate;
        break;
    }
    this.setData({
      nav: nData,
      sortActive: sData
    })
  },
  navPay: function () {
    wx: wx.navigateTo({
      url: '../pay/pay'
    })
  },
  navWriteEvaluate:function(){
    wx: wx.navigateTo({
      url: '../writeEvaluate/writeEvaluate'
    })
  },
  navOrderDetalis:function(){
    wx.navigateTo({
      url: '../orderdetails/orderdetails',
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
    var that = this;
    var nData = this.data.nav;
    var sData = this.data.sortActive;
    wx.getStorage({
      key: 'centerNavOrder',
      success: function (res) {
        nData.forEach((x) => x.tabClass = '');
        if (res.data == "all") {
          nData[0].tabClass = 'active';
          sData=that.data.all;
        } else if (res.data == "pay") {
          nData[1].tabClass = 'active';
          sData = that.data.pay;
        } else if (res.data == "receipt") {
          nData[2].tabClass = 'active';
          sData = that.data.receipt;
        } else if (res.data == "send") {
          nData[3].tabClass = 'active';
          sData = that.data.send;
        } else {
          nData[4].tabClass = 'active';
          sData = that.data.evaluate;
        };
        that.setData({
          nav: nData,
          sortActive: sData
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