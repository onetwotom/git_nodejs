/**
 * 
 * @description 商店数据操作
 */

const Shop = require('../../models/Shop')

!(async () => {
    // await Shop.create({
    //     name: '沃尔玛',
    //     imgUrl: '/images/shop/wmt.jpeg',
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: 'VIP尊享满89元减4元运费券'
    // })
    // await Shop.create({
    //     name: '山姆会员商店',
    //     imgUrl:'/images/shop/sam.jpeg',
    //     sales: 2000,
    //     expressLimit: 0,
    //     expressPrice: 5,
    //     slogan: 'VIP尊享满89元减4元运费劵',
    //     slogan: '联合利华洗护满10减5'
    // })
    const shopList = await Shop.find().sort({_id: -1})
    console.log(shopList)
})()