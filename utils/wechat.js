"use strict";

// 获取地理定位
const getLocation = (type) => {
  return new Promise((resolve,reject) => {
    wx.getLocation({
      type: type,
      success: resolve,
      fail:reject
    })
  })
}
// 保存本地数据
const setStorage = (key,data) => {
  return new Promise((resolve,reject) => {
    wx.setStorage({
      key: key,
      data: data,
      success: resolve,
      fail: reject,
    });
  });
};
// 获取本地storage
const getStorage = (key) => {
  return new Promise((resolve,reject) => {
    wx.getStorage({
      key: key,
      success: function(res) {
        resolve(res);
      },
      fail:function(e){
        reject(e)
      }
    });
  });
};

module.exports = {
  getLocation,
  setStorage,
  getStorage
};