// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:"",
    searchBtn:["卫生巾","红枣","护垫","卫生棉","面条","七度空间","巧克力","牙刷"],
    nav:[
      { "text":"推荐",  "navActive":"active"},
      { "text": "热销", "navActive": "" },
      { "text": "价格", "navActive": "", "upDown":"../../images/up-down.png"},
    ],
    historySearch: [],
    selectBox:false,
    focus:true,
    brandBtn:[
      { "brandText": "全部", "clickActive": "active" },
      { "brandText": "苏菲", "clickActive": "" },
      { "brandText": "护舒宝", "clickActive": "" },
      { "brandText": "七度空间", "clickActive": "" },
      { "brandText": "高洁丝", "clickActive": "" },
      { "brandText": "怡丽", "clickActive": "" },
      { "brandText": "花王", "clickActive": "" },
      { "brandText": "ABC", "clickActive": "" },
    ],
    goodsLi:[
      { "goodsImgUrl": "../../images/search1.jpg", "text": "苏菲弹力贴身日用卫生巾15片", "price": 18.9, "oldPrice": "","num":22 },
      { "goodsImgUrl": "../../images/search2.jpg", "text": "苏菲弹力丝薄日用卫生巾230mm 无香 10片", "price": 9.40, "oldPrice": "¥20.90", "num": 0},
      { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80", "num": 22},
      { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90", "num": 22},
      { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "", "num": 22},
      { "goodsImgUrl": "../../images/search6.jpg", "text": "新素肌感棉柔丝薄日用护翼卫生巾240mm 10片", "price": 11.5, "oldPrice": "", "num": 22},
      { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "", "num": 22},
      { "goodsImgUrl": "../../images/search8.jpg", "text": "ABC茶树极薄日用卫生巾240mm 有香 8片", "price": 10.5, "oldPrice": "", "num": 22}
    ],
    allGooods:[
      {
        "brandText": "推荐",
        "goodsLi":[
          { "goodsImgUrl":"../../images/search1.jpg","text":"苏菲弹力贴身日用卫生巾15片","price":18.9,"oldPrice":""},
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" },
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search6.jpg", "text": "新素肌感棉柔丝薄日用护翼卫生巾240mm 10片", "price": 11.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search8.jpg", "text": "ABC茶树极薄日用卫生巾240mm 有香 8片", "price": 10.5, "oldPrice": "" }
        ]
      },
      {
        "brandText": "全部",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search1.jpg", "text": "苏菲弹力贴身日用卫生巾15片", "price": 18.9, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" },
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search6.jpg", "text": "新素肌感棉柔丝薄日用护翼卫生巾240mm 10片", "price": 11.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search8.jpg", "text": "ABC茶树极薄日用卫生巾240mm 有香 8片", "price": 10.5, "oldPrice": "" }
        ]
      },
      {
        "brandText": "热销",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
          { "goodsImgUrl": "../../images/search1.jpg", "text": "苏菲弹力贴身日用卫生巾15片", "price": 18.9, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
          
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" }
        ]
      },
      {
        "brandText": "价格升",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" },
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
          { "goodsImgUrl": "../../images/search1.jpg", "text": "苏菲弹力贴身日用卫生巾15片", "price": 18.9, "oldPrice": "" },
          
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
        ]
      },
      {
        "brandText": "价格降",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search1.jpg", "text": "苏菲弹力贴身日用卫生巾15片", "price": 18.9, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" },
        ]
      },
      {
        "brandText": "护舒宝",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search3.jpg", "text": "护舒宝纯净日用卫生巾240mm 无香 10片", "price": 12.80, "oldPrice": "¥15.80" },
        ]
      },
      {
        "brandText": "七度空间",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 7.9, "oldPrice": "¥8.90" },
        ]
      },
      {
        "brandText": "苏菲",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search2.jpg", "text": "苏菲弹力丝薄日用卫生巾230mm 无香 10片", "price": 9.40, "oldPrice": "¥20.90" },
        ]
      },
      {
        "brandText": "高洁丝",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search5.jpg", "text": "高洁丝迷你护翼日用卫生巾190mm 无香 18片", "price": 9.5, "oldPrice": "" },
        ]
      },
      {
        "brandText": "怡丽",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search6.jpg", "text": "新素肌感棉柔丝薄日用护翼卫生巾240mm 10片", "price": 11.5, "oldPrice": "" },
        ]
      },
      {
        "brandText": "花王",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search7.jpg", "text": "花王瞬吸超薄夜用卫生巾350mm 无香 13片 新老包装随机", "price": 45.00, "oldPrice": "" },
        ]
      },
      {
        "brandText": "ABC",
        "goodsLi": [
          { "goodsImgUrl": "../../images/search8.jpg", "text": "ABC茶树极薄日用卫生巾240mm 有香 8片", "price": 10.5, "oldPrice": "" }
        ]
      },
    ]
  },

  // 清空输入框
  clearValue:function(){
    this.setData({
      inputText: ""
    })
  },
  valueChange:function(e){
    this.setData({
      inputText: e.detail.value
    })
  },
  // 输入框搜索
  inputSearch:function(){
    if (this.data.inputText!=""){
      let cData = this.data.historySearch
      let searchText = this.data.inputText;
      cData.unshift(searchText);
      cData.forEach((x, index) => { if (x == searchText && index != 0) cData.splice(index, 1) });
      if (cData.length > 7) {
        cData.splice(cData.length - 1, 1)
      }
      this.setData({
        inputText: searchText,
        historySearch: cData,
        selectBox: true,
      })
    }
  },
  // 热门搜索点击
  hotSearchBtn:function(e){
    let cData = this.data.historySearch
    let searchText = this.data.searchBtn[e.currentTarget.dataset.index];
    cData.unshift(searchText);
    cData.forEach((x, index) => { if (x == searchText && index != 0) cData.splice(index,1)});
    if (cData.length>7){
      cData.splice(cData.length-1, 1)
    }
    this.setData({
      inputText: searchText,
      historySearch: cData,
      selectBox: true,
    })
  },
  historyBtn:function(e){
    let cData = this.data.historySearch
    let searchText = this.data.historySearch[e.currentTarget.dataset.index];
    cData.unshift(searchText);
    cData.forEach((x, index) => { if (x == searchText && index != 0) cData.splice(index, 1) });
    if (cData.length > 7) {
      cData.splice(cData.length - 1, 1)
    }
    this.setData({
      inputText: searchText,
      historySearch: cData,
      selectBox: true,
    })
  },
  // 删除本条搜索记录
  delHistory:function(e){
    let cData = this.data.historySearch;
    cData.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      historySearch: cData
    })
  },
  // 清空搜索记录
  clearHistory:function(){
    this.setData({
      historySearch: []
    })
  },

  // 筛选页面
  // 跳转到输入框页面
  navCart:function(){
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  // 导航栏筛选
  navRecommendClick: function (e) {
    let upDown = "../../images/up-down.png"
    let cData = this.data.nav;
    let gData = this.data.goodsLi;
    let allData = this.data.allGooods;
    cData.forEach(function (x, index) {
      x.navActive = ''
    })
    allData.forEach((x) => { if (x.brandText == '推荐') gData = x.goodsLi })
    cData[2].upDown = upDown
    cData[0].navActive = "active";
    this.setData({
      nav: cData,
      goodsLi: gData
    })
  },
  navHotClick: function (e) {
    let upDown = "../../images/up-down.png"
    let cData = this.data.nav;
    let gData = this.data.goodsLi;
    let allData = this.data.allGooods;
    let dataBrandBtn = this.data.brandBtn;
    cData.forEach(function (x, index) {
      x.navActive = ''
    })
    if (dataBrandBtn[0].clickActive=="active"){
      allData.forEach((x) => { if (x.brandText == '热销') gData = x.goodsLi })
    }
    cData[2].upDown = upDown
    cData[1].navActive = "active";
    this.setData({
      nav: cData,
      goodsLi: gData
    })
  },
  navPriceClick:function(){
    let up="../../images/up.png";
    let down = "../../images/down.png"
    let cData = this.data.nav;
    let gData = this.data.goodsLi;
    let allData = this.data.allGooods;
    let dataBrandBtn = this.data.brandBtn;
    cData.forEach(function (x, index) {
      x.navActive = ''
    })
    cData[2].navActive = "active";
    if (cData[2].upDown != up){
      cData[2].upDown =up;
      if (dataBrandBtn[0].clickActive == "active") {
        allData.forEach((x) => { if (x.brandText == '价格升') gData = x.goodsLi })
      }
    }else{
      cData[2].upDown = down;
      if (dataBrandBtn[0].clickActive == "active") {
        allData.forEach((x) => { if (x.brandText == '价格降') gData = x.goodsLi })
      }
    }
    this.setData({
      nav: cData,
      goodsLi: gData
    })
  },
  // 品牌筛选
  brandClick:function(e){
    let dataBrandBtn = this.data.brandBtn;
    let dataAllGoods = this.data.allGooods;
    let gData = this.data.goodsLi;
    dataBrandBtn.forEach(function(x,index){
      if (e.currentTarget.dataset.index == index){
        x.clickActive="active"
      }else{
        x.clickActive = ""
      }
    })
    dataAllGoods.forEach(function (x, index){
      if (e.currentTarget.dataset.text == x.brandText) {
        gData = x.goodsLi
      }
    })
    this.setData({
      brandBtn: dataBrandBtn,
      goodsLi: gData
    })
  },
  // 点击商品跳转到详情页面
  navDetails:function(e){
    let goodsdetails = this.data.goodsLi[e.currentTarget.dataset.index];
    wx.setStorage({
      key: 'goodsDetails',
      data: goodsdetails,
      success: function () {
        wx.navigateTo({
          url: '../details/details',
        })
      }
    })
  },

  // 输入框获取焦点时
  inputFocus:function(){
    this.setData({
      selectBox: false,
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
    var that=this;
    wx.getStorage({
      key: 'historySearch',
      success: function(res) {
        that.setData({
          historySearch: res.data
        })
      },
    })
  },

  /**
  * 生命周期函数--监听页面隐藏
  */
  navigateBack: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that=this;
    wx.setStorage({
      key: 'historySearch',
      data: that.data.historySearch
    })
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