/**
 * @description 地址
 */

const Address = require('../../models/Address')

!(async() => {
    // await Address.create({
    //    username: 'zhangsan',
    //    city: '北京市',
    //    department: 'xxx小区',
    //    houseNumber: '门牌号1',
    //    name: '张三',
    //    phone: '18677778887'
    // })
    // await Address.create({
    //     username: 'zhangsan',
    //     city: '北京市',
    //     department: 'yyy小区',
    //     houseNumber: '门牌号2',
    //     name: '张三',
    //     phone: '186324523423'
    //  })
    // const addressList = await Address.find({ username:'zhangsan' }).sort({ updatedAt: -1 })
    // console.log(addressList)
    // const id ='619348a43bce719100576bff'
    // const address = await Address.findById(id)
    // console.log(address)
    const id = '619348a43bce719100576bff'
    const newData = {
        username: 'zhangsan',
        city: '北京',
        department: 'yyy小区A',
        houseNumber: '门牌号2A',
        name: '张三',
        phone: '18632451111'
    }
    const address = await Address.findOneAndUpdate(
        { _id: id, username: 'zhangsan' },
        newData,
        {
            new: true
        }
    )
    console.log(address)
})()