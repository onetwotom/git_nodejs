/**
 * @description
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')

async function getShop(){
   const hotShop = await Shop.find().sort({_id:-1 })
   return hotShop
}

async function getOneShop(id){
    const oneShop = await Shop.findById(id)
    return oneShop
} 

async function getProductList(shopId, tab='all'){
    const productList = await Product.find({
        shopId,
        tabs: {
            $in: tab
        }
    }).sort({ _id:-1 })
    return productList
}

module.exports = { getShop, getOneShop, getProductList }