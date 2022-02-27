/**
 * @description 用户数据操作
 */

const User = require('../../models/User')

!(async() => {
    // await User.create({
    //     username: 'zhangsan',
    //     password: '123'
    // })
    // await User.create({
    //     username: '1869999888',
    //     password: '123'
    // })
    const zhangsan =  await User.findOne({
        username: 'zhangsan',
        password: '123'
    })
})()