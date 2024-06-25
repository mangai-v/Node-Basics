const http = require("http")
const url = require("url")


const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true)
    if(parsedUrl.pathname === '/'){
        res.setHeader(200,{"Content-Type":"text/html"})
        res.write('<p>Home Page</p>')
        res.end()
    }
})

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})