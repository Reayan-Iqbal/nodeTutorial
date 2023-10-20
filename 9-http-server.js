const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Welcome to our home page\n');    //The res.write() method in Node.js is used to write data to the HTTP response stream.
        res.end("Good Bye")   // this is used to end an HTTP response the text inside is optional
    }
    if(req.url === '/about'){
        res.end("<h1>About</h1>")
    }
    else{
        res.end("<h1>oops</h1><p>Page Not Found</p><a href='/'>Back Home</a>")
    }
})

server.listen(5000)