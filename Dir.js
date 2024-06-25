const fs = require('fs')
if(fs.existsSync('./New')){
    fs.rmdir('./New',err=>{
        if(err) throw err
        console.log('Directory Removed');
    })
}
else if(!fs.existsSync('./New')){
    fs.mkdir('./New',err=>{
        if(err) throw err
        console.log('Directory Created');
    })
}
process.on('uncaughtException',err=>{
    console.log(`There was an err:${err}`);
    process.exit(1)
})