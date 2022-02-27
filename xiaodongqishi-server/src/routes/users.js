const router = require('koa-router')()
const { register, login } = require('../controller/user')
const  { SuccessModel,ErrorModel } = require('../res-modul/index')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/register', async function (ctx,next){
  const { username, password } = ctx.request.body
  try {
    const newUser = await register(username, password)
    ctx.body = new SuccessModel(newUser)
  } catch (ex){
    console.error(ex)
    ctx.body = new ErrorModel(10001,`注册失败-${ex.message}`)
  }

})

router.post('/login', async function (ctx,next){
  const { username, password } = ctx.request.body
  const res = await login(username, password)
  if(res){
    //登录成功
    ctx.session.userInfo = { username }
    ctx.body = new SuccessModel(username)
  }else{
    //登录失败
    ctx.body = new ErrorModel(10002,'登录验证失败')
  }
} )

module.exports = router
