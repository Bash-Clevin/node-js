const path = require('path')

console.log(path.sep)

const filepath = path.join('/content', 'sub-folder', 'test.txt')

const base = path.basename(filepath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)