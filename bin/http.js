// 通过axios获取模板

const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
})

// 获取模板
async function getTempleteList() {
    return axios.get('api')
};

// 获取模板版本

async function getTagsList(templateName) {
    return axios.get(`api${templateName}/tags`)
}

module.exports = {
    getTempleteList,
    getTagsList
}