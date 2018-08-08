Page({
  /**
   * 页面的初始数据
   */
  data: {
    cartGoods: [
      { "goodsTID": "t001001", "imgUrl": "../../images/vegetables1.jpg", "text": "菜椒 400g/份", "num": "10", "buyNum": 1, "price": 7.60, "addNmuActive": "addNmuActive", "reduceNmuActive": "", "select": "", "delLi":""},
      { "goodsTID": "t001002", "imgUrl": "../../images/fruits1.jpg", "text": "金桔 500g/份", "num": "6", "buyNum": 1, "price": 10.70, "addNmuActive": "addNmuActive", "reduceNmuActive": "", "select": "", "delLi": ""},
      { "goodsTID": "t001003", "imgUrl": "../../images/vegetables2.jpg", "text": "长扁豆角 500g/份", "num": 10, "buyNum": 1, "price": 11.40, "addNmuActive": "addNmuActive", "reduceNmuActive": "", "select": "", "delLi": "" },
      { "goodsTID": "t001004", "imgUrl": "../../images/fruits2.jpg", "text": "丑八怪 4粒", "num": "6", "buyNum": 1, "price": 24.80, "addNmuActive": "addNmuActive", "reduceNmuActive": "", "select": "", "delLi": "" }
    ],
    "cartIsEmpty": true,
    "cartBoxTopBtn": "编辑",
    "goodsTails": true,
    "selectAll": "",
    "delNum": 0,
    "payNum":0,
    "activeIndex":[],
    "totalMoney":0
  },
  // 返回首页事件
  navIndex: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 编辑和完成转换事件
  typeChange: function () {
    if (this.data.cartBoxTopBtn == "编辑") {
      this.setData({
        "cartBoxTopBtn": "完成",
        "goodsTails": false
      })
    } else {
      this.setData({
        "cartBoxTopBtn": "编辑",
        "goodsTails": true
      })
    }
    var cData = this.data.cartGoods;
    var cDataMoney = 0;
    for (let i = 0; i < cData.length; i++) {
      if (cData[i].select == "selected") {
        cDataMoney += cData[i].buyNum * cData[i].price;
      } 
    }
    this.setData({
      totalMoney: cDataMoney
    })
  },
 
  // 选框全部勾选事件
  selectAll: function () {
    var cData = this.data.cartGoods;
    var cDataMoney=this.data.totalMoney;
    var activeInde = this.data.activeIndex;
    if (this.data.selectAll == '') {
      cDataMoney=0;
      for (let i = 0; i < cData.length; i++) {
        cData[i].select = 'selected'
        activeInde[i]=i;
        cDataMoney += cData[i].buyNum * cData[i].price;
      };

      this.setData({
        selectAll: "selectAllAcitve",
        cartGoods: cData,
        delNum: cData.length,
        payNum: cData.length,
        activeInde: activeInde,
        totalMoney: cDataMoney
      })
    } else {
      for (let i = 0; i < cData.length; i++) {
        cData[i].select = ''
      };
      this.setData({
        selectAll: "",
        cartGoods: cData,
        delNum: 0,
        payNum: 0,
        activeIndex: [],
        totalMoney:0
      })
    }
  },
  // 勾选选框事件
  selected: function (e) {
    var cData = this.data.cartGoods;
    var cDataMoney = this.data.totalMoney;
    var delNumd = parseInt(this.data.delNum);
    var goodsIndex = e.currentTarget.dataset.index;
    var activeInde = [];
    if (cData[goodsIndex].select == "") {
      cData[goodsIndex].select = "selected";
      delNumd += 1;
      activeInde.push(goodsIndex);
      var j = 0;
      for (let i = 0; i < cData.length; i++) {
        if (cData[i].select != "") {
          activeInde[j] = i;
          j++;
        }
      };
      cDataMoney += cData[goodsIndex].buyNum *cData[goodsIndex].price;
      cDataMoney=Math.round(cDataMoney*100)/100;
    } else {
      cData[goodsIndex].select = ""
      delNumd -= 1;
      var j=0;
      for (let i = 0; i < cData.length; i++) {
        if (cData[i].select!=""){
          activeInde[j]=i;
          j++;
        }
      };
      cDataMoney -= cData[goodsIndex].buyNum * cData[goodsIndex].price;
      cDataMoney =Math.round(cDataMoney * 100) / 100;
    }
    this.setData({
      cartGoods: cData,
      delNum: delNumd,
      payNum: delNumd,
      activeIndex: activeInde,
      totalMoney: cDataMoney
    })
  },
  // 数量减事件
  reduceNum: function (e) {
    var goodsIndex = e.currentTarget.dataset.index;
    var cData = this.data.cartGoods;
    if (this.data.cartGoods[goodsIndex].buyNum > 1) {
      cData[goodsIndex].buyNum = parseInt(cData[goodsIndex].buyNum) - 1;
      cData[goodsIndex].addNmuActive = "addNmuActive";
      this.setData({
        cartGoods: cData
      })
    } else {
      cData[goodsIndex].reduceNmuActive = "";
      this.setData({
        cartGoods: cData
      })
    };

  },
  // 数量加事件
  addNum: function (e) {
    var goodsIndex = e.currentTarget.dataset.index;
    var cData = this.data.cartGoods;
    if (this.data.cartGoods[goodsIndex].buyNum < this.data.cartGoods[goodsIndex].num) {
      cData[goodsIndex].buyNum = parseInt(cData[goodsIndex].buyNum) + 1;
      cData[goodsIndex].reduceNmuActive = "reduceNmuActive";
      this.setData({
        cartGoods: cData
      })
    } else {
      cData[goodsIndex].addNmuActive = "";
      this.setData({
        cartGoods: cData
      })
    };
  },
  // 删除货物事件
  delGoods:function(e){
    var goodsIndex = e.currentTarget.dataset.index;
    var cData = this.data.cartGoods;
    var delNumm = parseInt(this.data.delNum);
    var that =this;
    wx.showModal({
      title: '提示',
      content: '确定要删除这件商品吗？',
      success: function (res) {
        if (res.confirm) {
          if (cData[goodsIndex].select != "") {
            delNumm -= 1;
          }
          cData.splice(goodsIndex,1);
          that.setData({
            "cartGoods": cData,
            "delNum": delNumm,
            "payNum": delNumm
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 总删除事件
  delAllGoods:function(){
    var cData = this.data.cartGoods;
    var activeInde = this.data.activeIndex;
    var that = this;
    if (activeInde.length > 0) {
      wx.showModal({
        title: '提示',
        content: '确定要删除这' + this.data.delNum +'件商品吗？',
        success: function (res) {
          if (res.confirm) {
            for (let i=0;i<activeInde.length;i++){
              delete cData[activeInde[i]];
            }
            for (let i = cData.length - 1; i >=0 ; i--) {
              if (cData[i]==undefined){
                cData.splice(i, 1);
              }
            }
            that.setData({
              cartGoods: cData,
              delNum: 0,
              payNum: 0
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.showToast({
        title: '请至少勾选一件商品',
        icon: 'none'
      })
    }
  },
  // 结算事件
  buyAllGoods:function(){
    var cData = this.data.cartGoods;
    var activeInde = this.data.activeIndex;
    var that = this;
    var payData=[];
    var unPayMoney=this.data.totalMoney;
    if (activeInde.length>0){
      wx.showToast({
        title: '成功',
        icon: 'success',
        success: function (res) {
          for (let i = 0; i < activeInde.length; i++) {
            payData.unshift(cData[activeInde[i]]);
            delete cData[activeInde[i]];
          }
          for (let i = cData.length - 1; i >= 0; i--) {
            if (cData[i] == undefined) {
              cData.splice(i, 1);
            }
          }
          that.setData({
            cartGoods: cData,
            "delNum": 0,
            payNum:0,
            totalMoney: 0
          })
          // 跳转到支付页面
          wx.setStorage({
            key: 'unPay',
            data: payData,
            success:function(){
              wx.setStorage({
                key: 'unPayMoney',
                data: unPayMoney,
                success:function(){
                  wx.navigateTo({
                    url: '../pay/pay',
                  })
                }
              })
            }
          })
        }
      })
    }else{
      wx.showToast({
        title: '请至少勾选一件商品',
        icon: 'none'
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      "cartIsEmpty": false
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
    if (this.data.cartIsEmpty) {
      this.setData({
        "cartIsEmpty": false
      })
    }
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