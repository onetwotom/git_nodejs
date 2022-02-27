const router = require('koa-router')()
const { SuccessModel,ErrorModel  } = require('../res-modul/index')
const { getShop, getOneShop,getProductList } = require('../controller/shop')


router.prefix('/api/shop')

router.get('/hot-list' , async function(ctx,next){
        const hotShop = await getShop()
        ctx.body = new SuccessModel(hotShop)
})

router.get('/:id', async function(ctx,next){
    const id = ctx.params.id
    const oneShop = await getOneShop(id)
    ctx.body = new SuccessModel(oneShop)
} )

router.get('/:id/products', async function (ctx,next){
    const shopId = ctx.params.id
    const tab = ctx.query.tab || 'all'
    const productList = await  getProductList(shopId,tab)
    ctx.body = new SuccessModel( productList)
})

module.exports = router