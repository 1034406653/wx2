// pages/equipmentDetails/equipmentDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    portrait:"../../images/portrait.png",
    equipmentName:"GT360S+77435",
    equipmentType: "GT360S",
    equipmentIMEI: "54656313265",
    equipmentSIM: "12325346",
    equipmentEnergy: "50%",
    equipmentState: "WLAN 在线",
    equipmentTime: "2018-03-15 22:22:22",
    equipmentAddress: "浙江省杭州市西湖区古荡街道益乐新村南2区58号",
    modal:{
      showModal: false,
      modalTitle:"",
      modalValue:"",
      modalName:""
    },
  },
  // 弹框
  showDialogBtn: function (e) {
    var mData = this.data.modal;
    mData.showModal = true;
    mData.modalTitle = e.currentTarget.dataset.titlevalue;
    mData.modalValue = e.currentTarget.dataset.textvalue;
    mData.modalName = e.currentTarget.dataset.namevalue;
    this.setData({
      modal: mData
    });
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    var mData=this.data.modal;
    mData.showModal=false;
    this.setData({
      modal: mData
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    var _key = this.data.modal.modalName;
    var temData = {};
    temData[_key] = this.data.modal.modalValue;
    this.setData(temData)
    this.hideModal();
  },
  inputChange:function(e){
    var mData = this.data.modal;
    mData.modalValue = e.detail.value;
    this.setData({
      modal: mData
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changePortrait:function(){
    var that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          portrait: res.tempFilePaths
        })
      }
    })
  },
  delEquipment:function(){
    wx.showModal({
      content: '您确定要解绑该设备吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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