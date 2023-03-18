console.log('Stream example');

var http = require('http');
const fs = require('fs');
const { pid } = require('process');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);

    // we send data in chunks
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000);