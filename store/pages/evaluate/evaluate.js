// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      {"text":"全部","num":3,"viewClass":"active"},
      { "text": "好评", "num": 2, "viewClass": "" },
      { "text": "中评", "num": 0, "viewClass": "" },
      { "text": "差评", "num": 1, "viewClass": "" },
    ],
    evaluateAll:[
      {
        "sort": "good",
        "imgUrl": "../../images/chatHead.png",
        "phone": "137****1265",
        "time": "2018.01.02",
        "star": "../../images/star-active.png",
        "evaluate1": [
          "包装精美", "物超所值", "品质保证", "物流很快"
        ],
        "evaluate2": "东西非常实惠，包装也很精美，非常喜欢，下次还会继续购买",
        "reply": "你好,你的满意是我们做大的幸运，感谢您的好评，祝你生活愉快"
      },
      {
        "sort": "good",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star-active.png",
        "evaluate1": [
          "包装精美", "物超所值"
        ]
      },
      {
        "sort": "bad",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star.png",
        "evaluate1": [
          "包装破损", "物流超慢"
        ]
      },
    ],
    evaluateGood: [
      {
        "sort": "good",
        "imgUrl": "../../images/chatHead.png",
        "phone": "137****1265",
        "time": "2018.01.02",
        "star": "../../images/star-active.png",
        "evaluate1": [
          "包装精美", "物超所值", "品质保证", "物流很快"
        ],
        "evaluate2": "东西非常实惠，包装也很精美，非常喜欢，下次还会继续购买",
        "reply": "你好,你的满意是我们做大的幸运，感谢您的好评，祝你生活愉快"
      },
      {
        "sort": "good",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star-active.png",
        "evaluate1": [
          "包装精美", "物超所值"
        ]
      }
    ],
    evaluateNormal:[],
    evaluateBad: [
      {
        "sort": "bad",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star.png",
        "evaluate1": [
          "包装破损", "物流超慢"
        ]
      },
    ],
    evaluate:[
      {
        "sort":"good",
        "imgUrl":"../../images/chatHead.png",
        "phone":"137****1265",
        "time":"2018.01.02",
        "star":"../../images/star-active.png",
        "evaluate1":[
          "包装精美","物超所值","品质保证","物流很快"
        ],
        "evaluate2":"东西非常实惠，包装也很精美，非常喜欢，下次还会继续购买",
        "reply":"你好,你的满意是我们做大的幸运，感谢您的好评，祝你生活愉快"
      },
      {
        "sort": "good",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star-active.png",
        "evaluate1": [
          "包装精美", "物超所值"
        ]
      },
      {
        "sort": "bad",
        "imgUrl": "../../images/chatHead.png",
        "phone": "130****2365",
        "time": "2018.01.01",
        "star": "../../images/star.png",
        "evaluate1": [
          "包装破损", "物流超慢"
        ]
      },
    ]
  },
  tabClick:function(e){
    var timestamp = new Date();
    console.log(timestamp.getFullYear())
    var nData=this.data.nav;
    var evaluateActive=null;
    nData.forEach((x)=>x.viewClass='');
    nData[e.currentTarget.dataset.index].viewClass='active';
    switch (e.currentTarget.dataset.index) {
      case 0:
        evaluateActive = this.data.evaluateAll
        break;
      case 1:
        evaluateActive = this.data.evaluateGood
        break;
      case 2:
        evaluateActive = this.data.evaluateNormal
        break;
      case 3:
        evaluateActive = this.data.evaluateBad
        break;
    }
    this.setData({
      nav:nData,
      evaluate: evaluateActive
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
    var Ndata=this.data.nav;
    var that=this;
    Ndata.forEach(function(x,index){
      if (x.viewClass=="active"){
        switch(index){
          case 0:
          that.setData({
            evaluate: that.data.evaluateAll
          });
          break;
          case 1:
            that.setData({
              evaluate: that.data.evaluateGood
            });
            break;
          case 2:
            that.setData({
              evaluate: that.data.evaluateNormal
            });
            break;
          case 3:
            that.setData({
              evaluate: that.data.evaluateBad
            });
            break;
        }
      }
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