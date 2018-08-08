// pages/applyFor/applyFor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "../../images/hotsale1.jpg",
    orderText: "光明UHT纯牛奶 250ml",
    applyType:"apply1",
    // 仅退款
    apply1: {
      "applyType": "apply1",
      "title1": "货物状态",
      "array1": ['请选择', '未收到货', '已收到货'],
      "index1": 0,
      "title2": "退款原因",
      "array2": [],
      "index2": 0,
      "list2":[
        {
          "array2": [],
        },
        {  
          "array2": ['请选择', '不想要/不喜欢', '空包裹', "未按约定时间发货", "快递/物流一直未送到", "货物破损已拒签"],
        },
        {
          "array2": ['请选择', '性能问题', '做工瑕疵问题', "材质与商品描述不符"],
        }
      ]
    },
    // 退货退款
    apply2: {
      "applyType": "apply2",
      "title": "退款原因",
      "array": ['请选择', '拍错/多拍/不喜欢', '商品成分描述不符', '质量问题',"生产日期/保质期描述不符","三无产品","图片/产地/批号/规格等描述不符"],
      "index": 0,
    },
    // 换货
    apply3: {
      "applyType": "apply3",
      "title": "换货原因",
      "array": ['请选择', '拍错/多拍/不喜欢', '商品成分描述不符', '质量问题', "生产日期/保质期描述不符", "三无产品", "图片/产地/批号/规格等描述不符"],
      "index": 0,
    },
    addPhoto: [],
    anonymity: {
      anonymityActive: false,
      iconColor: "#bababa"
    },
  },
  bindPickerChange: function (e) {
    var a1Data = this.data.apply1;
    a1Data.index1 = e.detail.value;
    a1Data.array2 = a1Data.list2[e.detail.value].array2;
    a1Data.index2 = 0;
    this.setData({
      apply1: a1Data
    })
  },
  bindPickerChange2: function (e){
    var a1Data = this.data.apply1;
    a1Data.index2 = e.detail.value
    this.setData({
      apply1: a1Data
    })
  },
  bindPickerChange3:function(e){
    var a1Data = this.data.apply2;
    a1Data.index = e.detail.value
    this.setData({
      apply2: a1Data
    })
  },
  bindPickerChange4: function (e) {
    var a1Data = this.data.apply3;
    a1Data.index = e.detail.value
    this.setData({
      apply3: a1Data
    })
  },
  addPhoto: function () {
    var that = this;
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
  previewPhoto: function (e) {
    var aData = this.data.addPhoto;
    wx.previewImage({
      current: aData[e.currentTarget.dataset.index], // 当前显示图片的http链接
      urls: aData // 需要预览的图片http链接列表
    })
  },
  clearPhoto: function (e) {
    var aData = this.data.addPhoto;
    aData.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      addPhoto: aData
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var applytype="apply1";
    var titleText="申请退款"
    wx.getStorage({
      key: 'applyType',
      success: function(res) {
        if (res.data==1){
          applytype = "apply2"
        }else if (res.data == 2){
          applytype = "apply3"
          titleText = "申请"
        }else{
        }
        wx.setNavigationBarTitle({
          title: titleText,
        })  
        that.setData({
          applyType: applytype,
        })
      },
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