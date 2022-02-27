/**
 * 登录验证的中间件
 */
const { ErrorModel } = require('../res-modul/index')

module.exports = async (ctx,next) => {
    const session = ctx.session
    if(session && session.userInfo){
        await next()
        return
    }
    ctx.body = new ErrorModel(session,`1003登录失败`)
}