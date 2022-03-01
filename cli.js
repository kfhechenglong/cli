#! /usr/bin/env node
// console.log("my-cli.js")
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'your name',
        default: 'my-cli'
    }
]).then((ans) => {
    console.log(ans)
})