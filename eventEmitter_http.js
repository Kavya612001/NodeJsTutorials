// Event Emitter Http Module 

const http = require('http');

// const sever = http.createServer((req, res) => {
//     res.end('Welcome')
// });

// using EventEmitter API
const server = http.createServer();
// emits request event
// subscribe to it / listens to it / respond to it
server.on('request', (req, res) => {
    res.end('welcome');
})

server.listen(5000);

