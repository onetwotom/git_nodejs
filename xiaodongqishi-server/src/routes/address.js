/**
 * @description address router
 */

 const router = require('koa-router')()
 const  { SuccessModel,ErrorModel } = require('../res-modul/index')
 const loginCheck = require('../middleware/loginCheck')
 const { createAddress,getAddressList,getOneAddress,updateAddress } = require('../controller/address')

 router.prefix('/api/user/address')

 router.post('/', loginCheck , async function(ctx,next){
     const userInfo = ctx.session.userInfo
     const username = userInfo.username
     const data = ctx.request.body

     try{
        const newAddress = await createAddress(username,data)
        ctx.body = new SuccessModel(newAddress)
     }catch(ex){
        ctx.body = new ErrorModel(10004,'创建收货地址失败')
     }

 })

 router.get('/', loginCheck , async function(ctx,next){
    const userInfo = ctx.session.userInfo
    const username = userInfo.username
    try{
      const addressList = await getAddressList(username)
      ctx.body = new SuccessModel(addressList )
    }catch(ex){
      ctx.body = new ErrorModel(10005,'获取收货地址失败')
    }
 } )

 router.get('/:id', loginCheck , async function (ctx,next){
    const id = ctx.params.id
    const oneAddress = await getOneAddress(id)
    ctx.body = new SuccessModel(oneAddress) 
 } )

 router.patch('/:id',loginCheck, async function (ctx,next){
   const data = ctx.request.body
   const id = ctx.params.id
   const userInfo = ctx.session.userInfo
   const username = userInfo.username
   const newAddress = await updateAddress(id,username,data)
   ctx.body = new SuccessModel(newAddress)
 } )

 module.exports = router