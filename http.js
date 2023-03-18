const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if(req.url === '/about')  {
        res.end('This is about our company');
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we cant seem to find the page you are looking for</p>
        <a href="/">Back to home</a>
    `);
})

server.listen(5000);