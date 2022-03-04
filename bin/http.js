// 通过axios获取模板

const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
})

// 获取模板
async function getTemplateList() {
    return axios.get('https://api.github.com/orgs/zhurong-cli/repos')
};

// 获取模板版本

async function getTagsList(templateName) {
    return axios.get(`https://api.github.com/repos/zhurong-cli/${templateName}/tags`)
}

module.exports = {
    getTemplateList,
    getTagsList
}