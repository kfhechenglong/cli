const URL = 'https://douban.uieee.com/v2/movie';
// 请求头部
const fetch = require('./header');

const fectApi = (type,params) => {
  return fetch(URL,type,params);
};

//分页抓取数据

const find  = (type, page = 1, count = 20, search = '') => {
    const params = {
        "start" : (page - 1) * count,
        "count" : count,
        "city" : getApp().data.currentCity,
    };
    return fectApi(type , search ? Object.assign(params,{q:search}) : params)
      .then(res => res.data);
};

//抓取单个数据
const findOne = (id) => {
    return fectApi('subject/' + id)
        .then(res => res.data);
};

//导出公共模块
module.exports = {find , findOne};