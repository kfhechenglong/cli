#! /usr/bin/env node
import { program } from 'commander'
import packageInfo from './../package.json'
const chalk = require('chalk')
const figlet = require('figlet')
program
.command('create <my-app>')
.description('create a new project')
.option('-f, --force', 'overwrite target directory if it exist')
.action((name, options) => {
    // 打印执行结果
    console.log('name', name, 'options', options);
    require('../bin/create.js')(name, options)
})

// 配置config命令

program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>')
    .option('-d, --delete <path>', 'delete option from config')
    .action((value, options) => {
        console.log('config', value, options)
    })

// 配置ui 命令
program
    .command('ui')
    .description(' start add open roc-cli ui')
    .option('-p, --port <port>', 'Port used for the UI Server')
    .action((option) => {
        console.log('ui', option)
    })

program
    .on('--help', () => {
        console.log('\r\n' + figlet.textSync('laohe', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }))
        console.log(`\r\nRun ${chalk.cyan(`he <command> --help`)} for detailed usage of give command\r\n`);
    })

program
.version(`v${packageInfo.version}`)
.usage('<command> [option]')
program.parse(program.argv);