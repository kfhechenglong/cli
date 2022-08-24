// 通过axios获取模板

const axios = require('axios');

axios.interceptors.response.use(res => {
    return res.data;
})

// 获取模板
async function getTemplateList() {
    // 假设远程仓库有多个模版,此处暂时写死一个
    return ['vue3-teleplate']
};

// 获取模板版本

async function getTagsList(templateName) {
    return axios.get(`https://api.github.com/repos/kfhechenglong/${templateName}/tags`)
}

module.exports = {
    getTemplateList,
    getTagsList
}