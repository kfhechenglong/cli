#! /usr/bin/env node
// console.log("my-cli.js")
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'your name',
        default: 'my-cli'
    }
]).then((ans) => {
    // 获取目录
    const templateUrl = path.join(__dirname, 'template');
    // 获取目录文件
    const cwdUrl = process.cwd();
    fs.readdir(templateUrl, (err, files) => {
        if (err) throw err;
        // 遍历本地模板文件
        files.forEach(file => {
            console.log(file)
            ejs.renderFile(path.join(templateUrl, file), ans).then((res) => {
                fs.writeFileSync(path.join(cwdUrl, file), res)
            })
        })
    })
})