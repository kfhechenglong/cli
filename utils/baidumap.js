"use strict";
// 获取百度地图接口数据
const URI = 'https://api.map.baidu.com';
const fetch = require('./header.js');

// 根据获取的地理位置，获取当前的城市
const getCityName = (latitude, longitude) => {
  // const latitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 39.90403;
  // const longitude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 116.407526;
  const params = {
    location: latitude + ',' + longitude,
    output:'json',
    ak: 'B61195334f65b9e4d02ae75d24fa2c53'
  };
  return fetch(URI, 'geocoder/v2/',params).then((res) =>{
    return res.data.result.addressComponent.city;
  })
};

module.exports = {
  getCityName
};