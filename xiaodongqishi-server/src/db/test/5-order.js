/**
 * @description 订单数据
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async() => {
    const requestBody = {
        addressId: '619348a43bce719100576bff',
        shopId: '61937d77bf623496c07f0888',
        shopName: '沃尔玛',
        isCanceled: false,
        products: [{
            id: '619383247ed529953ffe6c27',
            num: 3
        },{
            id: '619383247ed529953ffe6c2a',
            num: 5
        }]
    }

    const address = await Address.findById(requestBody.addressId)
    const pIds = requestBody.products.map( p => p.id ) //['商品1 id','商品2 id']

    const productList = await Product.find({
        shopId: requestBody.shopId,
        _id: {
            $in: pIds
        }
    })  //[{},{}]
    const productListWidthSales = productList.map(p => {
        const id = p._id.toString()
        const filterProducts = requestBody.products.filter(item => item.id === id)
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
                tabs: [String]
            },
            orderSales: filterProducts[0].num
        }
    } )
console.log(productListWidthSales)
    await Order.create({
        username: 'zhangsan',
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: requestBody.isCanceled,
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

})() 