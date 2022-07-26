const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'starter.txt'), '\nNice to meet you')
        await fsPromises.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'starter2.txt'))        
    } catch (err) {
        console.error(`${err}`)
    }
}

fileOps()

/* 
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
 */