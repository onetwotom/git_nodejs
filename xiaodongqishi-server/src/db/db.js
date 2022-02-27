/**
 * @description mongoose 连接数据库
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'jddb'

// mongoose.set('useCreateIndex', true)
// mongoose.set('useFindAndModify',false)

mongoose.connect(`${url}/${dbName}`,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error',err => {
    console.error('mongoose connect error', err)
})

// db.once('open',() =>{
//     console.log('mongoose连接成功')
// })

module.exports = mongoose