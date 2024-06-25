
const http = require("http")

const server=http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type',"text/html")
    res.end(`<p>Hello World!!!!</p>`)
})

server.listen(3000,()=>{
    console.log("server is successfully running on http://localhost:3000");
})