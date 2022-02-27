/**
 * 商品的数据
 */

const Product = require('../../models/Product')

!(async () => {
    // await Product.create({
    //     shopId: '61937d77bf623496c07f0888',
    //     name: '葡萄',
    //     imgUrl: '/images/product/grape.jpg',
    //     sales: 100,
    //     price: 33,
    //     oldPrice: 36,
    //     tabs: ['all','seckill','fruit']
    // })
    // await Product.create({
    //     shopId: '61937d77bf623496c07f0888',
    //     name: '苹果',
    //     imgUrl: '/images/product/apple.jpeg',
    //     sales: 200,
    //     price: 25,
    //     oldPrice: 27,
    //     tabs:['all','seckill','fruit']
    // })
    // await Product.create({
    //     shopId: '61937d77bf623496c07f0888',
    //     name: '桃子',
    //     imgUrl: '/images/product/peach.jpg',
    //     sales:50,
    //     price:16,
    //     oldPrice: 19,
    //     tabs: ['all','seckill','fruit']
    // })
    // await Product.create({
    //     shopId:'61937d77bf623496c07f088b',
    //     name: '西瓜',
    //     imgUrl: '/images/product/watermelon.jpg',
    //     sales: 180,
    //     price: 13,
    //     oldPrice: 15
    // })
    const list = await Product.find({
        shopId: '61937d77bf623496c07f0888',
        tabs: {
            $in: 'seckill'
    }}) //[{},{}]
    console.log(list)
})()