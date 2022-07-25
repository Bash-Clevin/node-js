const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'files', 'outp.txt'), 'Hello there', (err) => {
    if (err) throw err;  
    console.log('Write complete')  
})

process.on('uncaughtException', err => {
    console.error(`${err}`)
    process.exit(1)
})
