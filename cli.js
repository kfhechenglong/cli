#! /usr/bin/env node
// console.log("my-cli.js")
// const inquirer = require('inquirer');
// const path = require('path');
// const fs = require('fs');
// const ejs = require('ejs');
import ora from 'ora';
import chalk from 'chalk'
import { program } from 'commander';
// const chalk = require('chalk');
const message = 'Loading...';
// const ora = require('ora');
const spinner = ora(message);
spinner.start()
setTimeout(() => {
    spinner.color = 'red';
    spinner.text = 'Loading start';
    setTimeout(() => {
        spinner.stop();
        spinner.succeed('Loading succeed')
        spinner.fail('Loading fail')
        spinner.warn('Loading warn')
        spinner.info('Loading info')
    })
}, 2000)
program.version('0.1.0')
.command('create <name>')
.description('test')
.action(name => {
    console.log('project name is ' + chalk.bold(name))
    console.log('project name is ' + chalk.green(name))
    console.log('project name is ' + chalk.underline(name))
})

program.parse()

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: 'your name',
//         default: 'my-cli'
//     }
// ]).then((ans) => {
//     // 获取目录
//     const templateUrl = path.join(__dirname, 'template');
//     // 获取目录文件
//     const cwdUrl = process.cwd();
//     fs.readdir(templateUrl, (err, files) => {
//         if (err) throw err;
//         // 遍历本地模板文件
//         files.forEach(file => {
//             console.log(file)
//             ejs.renderFile(path.join(templateUrl, file), ans).then((res) => {
//                 fs.writeFileSync(path.join(cwdUrl, file), res)
//             })
//         })
//     })
// })