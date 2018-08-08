// pages/writeEvaluate/writeEvaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodImg:"../../images/vegetables1.jpg",
    evaluateSelect:[
      { "imgUrl":"../../images/evaluate-goodActive-icon.png","text":"好评", "viewClass":"active"},
      { "imgUrl": "../../images/evaluate-bad-icon.png", "text": "中评", "viewClass": ""},
      { "imgUrl": "../../images/evaluate-bad-icon.png", "text": "差评", "viewClass": "../../images/star.png"},
    ],
    addPhoto:[],
    anonymity:{
      anonymityActive:false,
      iconColor:"#bababa"
    },
    stardescribe:{
      starIndex: 5,
      imgUrl: [
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        ]
    },
    starexpressage: {
      starIndex: 5,
      imgUrl: [
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
      ]
    },
    starserve: {
      starIndex: 5,
      imgUrl: [
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
        "../../images/star-active.png",
      ]
    },
  },
  selectEvaluate:function(e){
    var eData = this.data.evaluateSelect;
    var indexActive = e.currentTarget.dataset.index;
    if (indexActive==0){
      eData.forEach(function(x,index){
        if(index==0){
          x.imgUrl = '../../images/evaluate-goodActive-icon.png';
          x.viewClass = 'active';
        }else{
          x.imgUrl = '../../images/evaluate-bad-icon.png';
          x.viewClass = '';
        }
      })
    }else{
      eData.forEach(function (x, index) {
        if (index == 0) {
          x.imgUrl = '../../images/evaluate-good-icon.png';
          x.viewClass = '';
        } else if (index == indexActive){
          x.imgUrl = '../../images/evaluate-badActive-icon.png';
          x.viewClass = 'active';
        }else{
          x.imgUrl = '../../images/evaluate-bad-icon.png';
          x.viewClass = '';
        }
      })
    }
    this.setData({
      evaluateSelect:eData
    })
  },
  addPhoto:function(){
    var that=this;
    wx.chooseImage({
      count: 3, // 默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          addPhoto: res.tempFilePaths
        })
      }
    })
  },
  previewPhoto:function(e){
    var aData = this.data.addPhoto;
    wx.previewImage({
      current: aData[e.currentTarget.dataset.index], // 当前显示图片的http链接
      urls: aData // 需要预览的图片http链接列表
    })
  },
  clearPhoto:function(e){
    var aData = this.data.addPhoto;
    aData.splice(e.currentTarget.dataset.index,1);
    this.setData({
      addPhoto: aData
    })
  },
  stardescribeClick:function(e){
    var sData = this.data.stardescribe;
    sData.starIndex = e.currentTarget.dataset.index;
    sData.imgUrl.forEach(function(x,index){
      if (index <= e.currentTarget.dataset.index){
        sData.imgUrl[index] = '../../images/star-active.png'
      }else{
        sData.imgUrl[index] = '../../images/star.png'
      }
    })
    this.setData({
      stardescribe: sData
    })
  },
  starexpressageClick: function (e) {                         
    var sData = this.data.starexpressage;
    sData.starIndex = e.currentTarget.dataset.index;
    sData.imgUrl.forEach(function (x, index) {
      if (index <= e.currentTarget.dataset.index) {
        sData.imgUrl[index] = '../../images/star-active.png'
      } else {
        sData.imgUrl[index] = '../../images/star.png'
      }
    })
    this.setData({
      starexpressage: sData
    })
  },
  starserveClick: function (e) {
    var sData = this.data.starserve;
    sData.starIndex = e.currentTarget.dataset.index;
    sData.imgUrl.forEach(function (x, index) {
      if (index <= e.currentTarget.dataset.index) {
        sData.imgUrl[index] = '../../images/star-active.png'
      } else {
        sData.imgUrl[index] = '../../images/star.png'
      }
    })
    this.setData({
      starserve: sData
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