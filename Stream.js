const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'Files','BigFile.txt'),'utf-8')
const ws = fs.createWriteStream(path.join(__dirname,'Files','NewBigFile.txt'))

// rs.pipe(ws)
rs.on('data',(dataChunk)=>{
    ws.write(dataChunk)
})