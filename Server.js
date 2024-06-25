const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises

const fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'Files','Welcome.txt'),'utf-8')
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'Files','Learn.txt'),'Keep Learning')
        console.log('Write Complete');
        await fsPromises.appendFile(path.join(__dirname,'Files','Learn.txt'),'All the best')
        console.log('Append Complete');
        await fsPromises.rename(path.join(__dirname,'Files','Learn.txt'),path.join(__dirname,'Files','Learning.txt'))
        console.log('Rename Complete');
        await fsPromises.unlink(path.join(__dirname,'Files','Learning.txt'))
        console.log('Deleted');
    }
    catch (err){
        console.error(err)
    }
}
fileOps()

// fs.readFile(path.join(__dirname,'Files','Welcome.txt'),'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data);
   
// })
// fs.writeFile(path.join(__dirname,'Files','Learn.txt'),'Keep Learning',(err)=>{
//     if(err) throw err
//     console.log('Write Complete');
//     fs.appendFile(path.join(__dirname,'Files','Learn.txt'),' All the best',err =>{
//         if(err) throw err
//         console.log('Append Complete');
//     fs.rename(path.join(__dirname,'Files','Learn.txt'),path.join(__dirname,'Files','Learning.txt'),err=>{
//         if(err) throw err
//         console.log('Rename Complete');
//     })
//     })
// })
process.on('uncaughtException',err=>{
    console.log(`There was an error:${err}`);
    process.exit()
})