const http = require("http")
const url = require("url")

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true)
    if(parsedUrl.pathname === '/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`<p>Home Page</p>`)
        res.end()
    }
    else if(parsedUrl.pathname === '/about'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`<p>About us</p>`)
        res.end()
    }
    else if(parsedUrl.pathname === '/contact'){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(`<p>Contact us</p>`)
        res.end()
    }
    else {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write(`<p>Page Not Found</p>`)
        res.end()
    }
   
})

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})

