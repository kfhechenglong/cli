//logs.js
const app = getApp();

Page({
  data: {
    moves: [],
    loading:true
  },
  /*
  生命周期函数，监听页面加载
  */ 
  onLoad: function (e) {
    console.log(e)
    // 获取请求数据
      app.api.find('coming_soon', 1, 3)
  },
  onReady (){
    // 初始渲染函数
  },
  onShow(e){
    console.dir(e)
  }
})
