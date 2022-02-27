const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const addressRouter = require('./routes/address')
const shopRouter = require('./routes/shop')
const orderRouter = require('./routes/order')

// error handler
onerror(app)
//能通过不同的域名携带cook
app.use(cors({
  origin:'http://localhost:8080',
  credentials: true
}))

//通过任何跟目录都通过cook访问session，而且时间是一天，cook的过期时间
//只有服务端才能修改cook，登录成功后设置cook
//设置session，就能创造cookie
app.keys = ['sdkkk~6^&ADfr']
app.use(session({
  cookie:{
    path:'/',
    httpOnly:true,
    maxAge:24*60*60*1000
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addressRouter.routes(), addressRouter.allowedMethods())
app.use(shopRouter.routes(), shopRouter.allowedMethods())
app.use(orderRouter.routes(), orderRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
