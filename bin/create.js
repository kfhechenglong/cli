const path = require('path');
const fs = require('fs-extra');

module.exports = async function (name, options) {
    console.log(">>> create.js", name, options)

    const cwd = process.cwd();
    const targetPath = path.join(cwd, name);
    // 判断目标是否存在
    if (fs.existsSync(targetPath)) {
        // 是否强制创建目录
        if (options.force) {
            // 移除旧目录
            await fs.remove(targetPath)
        } else {
            // 是否要覆盖目录
        }
    } else {
        // 目录不存在
    }
}