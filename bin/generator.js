
// import ora from 'ora';
const ora = require('ora');
const { getTemplateList, getTagsList } = require('./http.js')
const inquirer = require('inquirer')
 
//  加载动画loading

async function wrapLoading (fn, mes, ...args) {
    const spinner = ora(mes || 'Loading');
    spinner.start();

    try {
        const res = await fn(...args)
        // 修改loading状态
        spinner.succeed();
        return res;
    } catch (err) {
        // 加载失败状态
        spinner.fail('Request failed, refetch...')
    }
};
 class Generator {
    constructor (dirName, targetDirPath) {
        //  名称
        this.dirName = dirName;
        //  创建的位置
        this.targetDirPath = targetDirPath;
    }
    // 获取用户选择的模板
    async getTemplate() {
        const temList = await wrapLoading(getTemplateList, 'waiting fetch template')
        if (!temList) return false;
        
        // 过滤模板名称
        const temp = temList.map(item => item.name);
        // 用户选择模板名称
        const { repo } = await inquirer.prompt({
            name: 'repo',
            type: 'list',
            choices: temp,
            message: 'Please choose a template to create project'
        })
        return repo;
    }
    // 选择版本
    async getTag(repo) {
        const tags = await wrapLoading(getTagsList, 'waiting fetch tag', repo);
        if (!tags) return;
        const tagsList = tags.map(item => item.name);
        const { tag } = await inquirer.prompt({
            name: 'tag',
            type: 'list',
            choices: tagsList,
            message: 'Please choose a tag to create project'
        })
        
        return tag
    }

    async create () {
        // 关键代码, 创建目录的逻辑
        const repo = await this.getTemplate();

        const tag = await this.getTag(repo);
        console.log('你选择的模板为' + repo, ', tag=' + tag);
    }
 }

module.exports = Generator;