//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    // banner轮播图
    bannerImgUrls: [
      'http://image.360kad.com/group2/M00/37/C6/CgAgFFp8-IuAJir5AADvgjcRBuM690.jpg',
      'http://image.360kad.com/group2/M00/37/2E/CgAgFFp5AQOALOjCAAFYqsglN9s090.jpg',
      'http://image.360kad.com/group2/M00/37/C7/CgAgFFp8-zuAKY7BAAG7Mh26QoI210.jpg', 
      'http://image.360kad.com/group2/M00/37/A5/CgAgFFp7u5mABEnYAAEWRlNoXck512.jpg',     
      'http://image.360kad.com/group2/M00/37/2E/CgAgFVp5Ai2AfXX0AAFWJa2qmoo858.jpg'
    ],
    indicatorDots: true,
    indicatorColor: "rgba(0, 0, 0, .3)",
    indicatorActiveColor: "#fff",
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // nav导航栏
    nav:[
      {"imgUrl":"../../images/index-nav1.jpg","text":"早晚市"},
      { "imgUrl": "../../images/index-nav2.jpg", "text": "进店必买" },
      { "imgUrl": "../../images/index-nav3.jpg", "text": "海外直采" },
      { "imgUrl": "../../images/index-nav4.jpg", "text": "领券中心" },
      { "imgUrl": "../../images/index-nav5.jpg", "text": "自由购" },
      { "imgUrl": "../../images/index-nav6.jpg", "text": "常购清单" },
      { "imgUrl": "../../images/index-nav7.jpg", "text": "每周推荐" },
      { "imgUrl": "../../images/index-nav8.jpg", "text": "母婴天地" },
      { "imgUrl": "../../images/index-nav9.jpg", "text": "量贩购" },
      { "imgUrl": "../../images/index-nav10.jpg", "text": "会员专享" },
    ],
    // 商品列表
    sortLi: [
      { 
        "sortImgUrl":"../../images/index-sortTitle1.jpg",
        goodsLi: [
          {"goodsImgUrl":"../../images/vegetables1.jpg","text":"菜椒 400g/份","price":"7.60","oldPrice":""},
          { "goodsImgUrl": "../../images/vegetables2.jpg", "text": "长扁豆 500g/份长扁豆 500g/份长扁豆 500g/份", "price": "11.9", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables3.jpg", "text": "杏鲍菇 2粒", "price": "7.80", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables4.jpg", "text": "莴笋 1根", "price": "8.60", "oldPrice": "" },
          { "goodsImgUrl": "../../images/vegetables5.jpg", "text": "甜薯 1kg/份", "price": "7.80", "oldPrice": "" }
          ]
        },
      {
         "sortImgUrl": "../../images/index-sortTitle2.jpg" ,
         goodsLi: [
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
         }
    ],
  },
  navSearch:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  addCart:function(){
    wx.showModal({
      content: '已添加，我在购物车等你呦',
      showCancel: false
    })
  },
  
  navDetails:function(e){
    let goodsdetails =this.data.sortLi[e.currentTarget.dataset.sort].goodsLi[e.currentTarget.dataset.li];
    wx.setStorage({
      key: 'goodsDetails',
      data: goodsdetails,
      success:function(){
        wx.navigateTo({
          url: '../details/details',
        })
      }
    })
  }
})
