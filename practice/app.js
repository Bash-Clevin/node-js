// const http = require('http')

// const server = http.createServer((req, res) => {
//     const url = req.url

//     if(url === '/') {
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write('<body></body>')
//         res.write('</html>')
//         res.end
//     }
// })

// server.listen(3500)

const { people, appNames } = require("./modules");
// console.log(people[3], appNames[2]);
const os = require("os");
console.log(os);
