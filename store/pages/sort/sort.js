// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortLi1:[
      "推荐商品","水果蔬菜", "肉蛋水产", "粮油散货", "熟食速食","牛奶冰品", "名酒饮料", "休闲小食", "母婴天地", "美容洗护", "纸品家凊","家居日用"
    ],
    sortLi2:[
      { 
        "li2": [
          { "nameText": "热卖TOP", "bordeActive": "bordeActive","sortId":"00001"}, 
          { "nameText": "什么值得买", "bordeActive": "", "sortId": "00002"}, 
        ],
        "li2Active": true
       },
      { 
        "li2": [
          { "nameText": "新鲜水果", "bordeActive": "bordeActive", "sortId": "00003" },
          { "nameText": "蔬菜豆菇", "bordeActive": "", "sortId": "00004" },
        ],
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "肉/禽/蛋", "bordeActive": "bordeActive", "sortId": "00005" },
          { "nameText": "海鲜/水产", "bordeActive": "", "sortId": "00006" },
        ],
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "厨房调味", "bordeActive": "bordeActive", "sortId": "00007" },
          { "nameText": "量贩散货", "bordeActive": "", "sortId": "00008" },
          { "nameText": "粮油干货", "bordeActive": "", "sortId": "00009" },
        ],
        "x": false
        },
      { 
        "li2": [
          { "nameText": "方便速食", "bordeActive": "bordeActive", "sortId": "00010" },
          { "nameText": "面点熟食", "bordeActive": "", "sortId": "00011" },
          { "nameText": "现制/酱卤", "bordeActive": "", "sortId": "00012" },
        ],
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "牛奶/豆奶", "bordeActive": "bordeActive", "sortId": "00013" },
          { "nameText": "酸奶/乳酸", "bordeActive": "", "sortId": "00014" },
          { "nameText": "冰品/奶酪", "bordeActive": "", "sortId": "00015" },
        ],
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "饮料/水", "bordeActive": "bordeActive", "sortId": "00016" },
          { "nameText": "中外名酒", "bordeActive": "", "sortId": "00017" },
          { "nameText": "冲调/保健", "bordeActive": "", "sortId": "00018" },
        ],
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "饼干糕点", "bordeActive": "bordeActive", "sortId": "00019" },
          { "nameText": "糖果巧克力", "bordeActive": "", "sortId": "00020" },
          { "nameText": "闲趣零食", "bordeActive": "", "sortId": "00021" },
          { "nameText": "坚果炒货", "bordeActive": "", "sortId": "00022" },
        ], 
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "奶粉", "bordeActive": "bordeActive", "sortId": "00023" },
          { "nameText": "辅食", "bordeActive": "", "sortId": "00024" },
          { "nameText": "尿裤/尿垫", "bordeActive": "", "sortId": "00025" },
          { "nameText": "湿巾/纸巾", "bordeActive": "", "sortId": "00026" },
          { "nameText": "洗护/哺喂", "bordeActive": "", "sortId": "00027" },
          { "nameText": "玩具/车床", "bordeActive": "", "sortId": "00028" },
        ],  
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "个人洗护", "bordeActive": "bordeActive", "sortId": "00029" },
          { "nameText": "美容护肤", "bordeActive": "", "sortId": "00030" },
          { "nameText": "口腔护理", "bordeActive": "", "sortId": "00031" },
          { "nameText": "男士护理", "bordeActive": "", "sortId": "00032" },
          { "nameText": "女士护理", "bordeActive": "", "sortId": "00033" },
          { "nameText": "精致彩妆", "bordeActive": "", "sortId": "00034" },
        ],  
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "纸品湿巾", "bordeActive": "bordeActive", "sortId": "00035" },
          { "nameText": "衣物洗涤", "bordeActive": "", "sortId": "00036" },
          { "nameText": "家居/厨卫", "bordeActive": "", "sortId": "00037" },
          { "nameText": "清洁工具", "bordeActive": "", "sortId": "00038" },
          { "nameText": "驱蚊除味", "bordeActive": "", "sortId": "00039" },
        ],  
        "li2Active": false
        },
      { 
        "li2": [
          { "nameText": "厨房用具", "bordeActive": "bordeActive", "sortId": "00040" },
          { "nameText": "餐具/水具", "bordeActive": "", "sortId": "00041" },
          { "nameText": "一次性商品", "bordeActive": "", "sortId": "00042" },
          { "nameText": "家居家纺", "bordeActive": "", "sortId": "00043" },
          { "nameText": "户外/办公", "bordeActive": "", "sortId": "00044" },
          { "nameText": "宠物商品", "bordeActive": "", "sortId": "00045" },
          { "nameText": "家用电器", "bordeActive": "", "sortId": "00046" },
        ],  
        "li2Active": false
        }
    ],
    goodsLi: [
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
      { "goodsImgUrl": "../../images/no-picture.jpg", "text": "泰国龙眼500g/份", "price": 8.88, "oldPrice": 12.9 },
    ],
    goods:[
      {
        "sortId": "00001",
        "goodsLi": [
          { "goodsImgUrl": "../../images/hotsale1.jpg", "text": "光明UHT纯牛奶 250ml", "price": 0.01, "oldPrice": "¥2.65" },
          { "goodsImgUrl": "../../images/hotsale2.jpg", "text": "蒙牛利乐包纯牛奶 250ml (新老包装)", "price": 1.99, "oldPrice": "¥2.80" },
          { "goodsImgUrl": "../../images/hotsale3.jpg", "text": "砂糖橘 500g", "price": 8.90, "oldPrice": "" },
          { "goodsImgUrl": "../../images/hotsale4.jpg", "text": "七度空间纯棉超薄日用卫生巾245mm 无香 10片", "price": 8.90, "oldPrice": "¥12.9" },
          { "goodsImgUrl": "../../images/hotsale5.jpg", "text": "甜玉米（根）", "price": 1.90, "oldPrice": "¥2.90" },
          { "goodsImgUrl": "../../images/fruits9.jpg", "text": "泰国龙眼 500g/份", "price": 8.80, "oldPrice": "¥12.90" },
          { "goodsImgUrl": "../../images/hotsale7.jpg", "text": "清风原木金装软抽纸3层*130抽 6包", "price": 14.80, "oldPrice": "¥20.90" },
          { "goodsImgUrl": "../../images/hotsale8.jpg", "text": "宁杭村草鸡蛋10枚装", "price": 9.98, "oldPrice": "¥13.80" },
        ]
      },
      {
        "sortId": "00002",
        "goodsLi": [
          { "goodsImgUrl": "../../images/fruits7.jpg", "text": "水晶梨 4粒", "price": "11.9", "oldPrice": "¥8.50" },
        ]
      },
      {
        "sortId": "00003",
        "goodsLi": [
          { "goodsImgUrl": "../../images/fruits1.jpg", "text": "金桔 500g/份", "price": "10.90", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits2.jpg", "text": "丑八怪 4粒", "price": "24.80", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits3.jpg", "text": "山东精品富士80# 4粒", "price": "19.80", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits4.jpg", "text": "特小凤西西瓜 1.5kg/个", "price": "28.9", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits5.jpg", "text": "白蜜瓜 1kg", "price": "17.90", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits6.jpg", "text": "花牛苹果 700g/份", "price": "12.90", "oldPrice": "" },
          { "goodsImgUrl": "../../images/fruits7.jpg", "text": "水晶梨 4粒", "price": "11.9", "oldPrice": "¥8.50" },
          { "goodsImgUrl": "../../images/fruits8.jpg", "text": "进口柠檬 1粒", "price": "4.30", "oldPrice": "¥4.90" },
          { "goodsImgUrl": "../../images/fruits9.jpg", "text": "泰国龙眼 500g/份", "price": "8.80", "oldPrice": "¥12.90" },
        ]
      },
      {
        "sortId": "00004",
        "goodsLi": [
          { "goodsImgUrl": "../../images/vegetables1.jpg", "text": "菜椒 400g/份", "price": "7.60", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables2.jpg", "text": "长扁豆 500g/份长扁豆 500g/份长扁豆 500g/份", "price": "11.9", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables3.jpg", "text": "杏鲍菇 2粒", "price": "7.80", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables4.jpg", "text": "莴笋 1根", "price": "8.60", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables5.jpg", "text": "甜薯 1kg/份", "price": "7.80", "oldPrice": "" }
        ]
      },
      {
        "sortId": "00005",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "宁杭村草鸡蛋10枚装", "price": 9.98, "oldPrice": "¥13.8" },
        ]
      },
      {
        "sortId": "00006",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "蒜蓉粉丝扇贝 200g", "price": 5.90, "oldPrice": "¥6.90" },
        ]
      },
      {
        "sortId": "00007",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "五丰优选长粒香 5kg", "price": 29.90, "oldPrice": "¥48.90" },
        ]
      },
      {
        "sortId": "00008",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "厨邦陈醋王 420ml", "price": 5.90, "oldPrice": "¥7.20" },
        ]
      },
      {
        "sortId": "00009",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "散装大农垦珍珠米（散称）1kg", "price": 4.50, "oldPrice": "¥5.70" },
        ]
      },
      {
        "sortId": "00010",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "康师傅经典红烧牛肉面100g*5", "price": 10.50, "oldPrice": "¥12.60" },
        ]
      },
      {
        "sortId": "00011",
        "goodsLi": [
          { "goodsImgUrl": "../../images/no-picture.jpg", "text": "湾仔码头手工水饺 三鲜 720g", "price": 14.90, "oldPrice": "¥22.90" },
        ]
      },
    ],
    "activity": "../../images/activity.jpg"
  },
  // 跳转到搜索页面
  navSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  sortLi1Click: function (e) {
    let cData = this.data.sortLi2;
    let gData = this.data.goods;
    let glData = this.data.goodsLi;
    let goodsActive = null;
    let sortid=null;
    cData.forEach((x)=>x.li2Active=false);
    cData[e.currentTarget.dataset.index].li2Active=true;
    cData[e.currentTarget.dataset.index].li2.forEach((x) => { if (x.bordeActive == "bordeActive") sortid = x.sortId});
    gData.forEach((x) => { if (x.sortId == sortid) goodsActive = x.goodsLi})
    this.setData({
      sortLi2: cData,
      goodsLi: goodsActive
    })
  },
  sortLi2Click:function(e){
    let cData = this.data.sortLi2;
    let gData = this.data.goods;
    let goodsActive=null;
    cData[e.currentTarget.dataset.indexaaa].li2.forEach((x) => x.bordeActive = "");
    cData[e.currentTarget.dataset.indexaaa].li2[e.currentTarget.dataset.indexbbb].bordeActive ="bordeActive";
    gData.forEach((x) => { if (x.sortId == cData[e.currentTarget.dataset.indexaaa].li2[e.currentTarget.dataset.indexbbb].sortId) goodsActive = x.goodsLi})
    this.setData({
      sortLi2: cData,
      goodsLi: goodsActive
    })
  },
  navDetails: function (e) {
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
    let cData = this.data.sortLi2;
    let gData = this.data.goods;
    let glData = this.data.goodsLi;
    let goodsActive = null;
    let sortid1 = null;
    let sortid2 = null;
    cData.forEach((x, index) => { if (x.li2Active) sortid1=index});
    cData[sortid1].li2.forEach((x, index) => { if (x.bordeActive == "bordeActive") sortid2 = x.sortId});
    gData.forEach((x) => { if (x.sortId == sortid2) goodsActive = x.goodsLi })
    this.setData({
      goodsLi: goodsActive
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