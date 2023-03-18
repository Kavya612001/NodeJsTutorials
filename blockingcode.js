const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url ===  '/') {
        res.end('Home page')
        return;
    } 
    if(req.url ===  '/about') {
        // blocking code
        for(let i = 0; i< 1000; i++) {
            for(let j = 0; j< 1000; j++) {
                console.log(i, j);
            }
        }
        res.end('about page');
        return;
    } 
    res.end('End page');
});

server.listen(5000, () => {
    console.log('server is listening on port 5000');
});