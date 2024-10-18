const { error } = require('console');
const http = require('http');
const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('Hello this is my home page');
    }
    if(req.url === 'about'){
        res.end('Here is short history')
    } 
    res.end(`
    <h1>Oops! Something went wrong</h1>
    <p>Please try again</p>
    <a href="/">Click here</a>
    `);
    // console.log('New User log In in your browser');
})
server.listen(5000);
