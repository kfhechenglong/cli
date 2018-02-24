//app.js

const api = require('./utils/api.js');
// 引入微信接口模块
const wechat = require('./utils/wechat.js');
const baidumap = require('./utils/baidumap.js');
App({
  api : api,
  wechat: wechat,
  getMap:baidumap,

  data:{
    currentCity:'中国',
    name:'电影'
  },

  onLaunch: function () {
    // 获取定位
    wechat.getLocation()
    .then((res)=>{
      // 获取纬
      let getLatitude = res.latitude;
      // 获取纬度
      let getLongitude = res.longitude;
      // console.log(res)
      return baidumap.getCityName(getLatitude, getLongitude );
    }).then( (name) => {
        this.data.currentCity = name.replace('市', '');
        console.log('currentCity : ' + this.data.currentCity);
    }).catch((err) => {
        this.data.currentCity = '北京';
        console.error(err);
    });

    
  },
  globalData: {
  }
})