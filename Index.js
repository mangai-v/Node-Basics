// const {format} = require('date-fns')
// console.log(format(new Date(),'ddMMyyyy---------tHH:mm:ss'));

// const {v4 :uuid } = require('uuid')
// console.log(uuid());
const logEvents = require('./LogEvents')

const EventEmitter = require('events')
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter()
myEmitter.on('log',(msg)=>{
    logEvents(msg)
})
myEmitter.emit('log','Log event emitted')
