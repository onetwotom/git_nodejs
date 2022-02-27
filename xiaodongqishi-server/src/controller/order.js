/**
 * @description
 */

const Order = require('../models/Order')
const Address = require('../models/Address')
const Product = require('../models/Product')

async function createOrder(username,data){
    const address = await Address.findById(data.addressId)
    const pIds = data.products.map( p => p.id )
    const productList = await Product.find({
        shopId: data.shopId,
        _id: {
            $in: pIds
        }
    })  //[{},{}]
    const productListWidthSales = productList.map(p => {
        const id = p._id.toString()
        const filterProducts = data.products.filter(item => item.id === id)
        if (filterProducts.length === 0){
            throw Error('未找到匹配的销量数据')
        }
        return {
            product: {
                shopId:p.shopId,
                name: p.name,
                imgUrl: p.imgUrl,
                sales: p.sales,
                price: p.price,
                oldPrice: p.oldPrice,
                tabs: p.tabs
            },
            orderSales: filterProducts[0].num  //返回的是一个对象
        }
    } )

    const newOrder = await Order.create({
            username,
            shopId: data.shopId,
            shopName: data.shopName,
            isCanceled: data.isCanceled,
            address:{
                username:address.username,
                city: address.city,
                department: address.department,
                houseNumber: address.houseNumber,
                name: address.name,
                phone: address.phone, 
            },
            products: productListWidthSales
    })
    return newOrder
}
// 获取订单列表
async function getOrderList(username) {
    console.log('username', username)
    const list = await Order.find({ username }).sort({ _id: -1 })
    console.log('list', list)
    return list
}

module.exports = {
    createOrder,
    getOrderList
}