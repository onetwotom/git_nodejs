<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
        <div class="wrapper__input">
            <input
            autocomplete="new-password"
            v-model="username"
            placeholder="请输入用户名" class="wrapper__input__content" type="text"/>
        </div>
        <div class="wrapper__input">
            <input
            autocomplete="new-password"
            v-model="password"
             placeholder="请输入密码" class="wrapper__input__content" type="password"/>
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登陆</div>
        <div class="wrapper__login-link">
            <span @click="handleRegister" class="wrapper__login__text">立即注册</span>
            <span class="wrapper__login__span">|</span>
            <span class="wrapper__login__text">忘记密码</span>
        </div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
// import axios from 'axios'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (data.username === '' || data.password === '') { return }
      if (result?.data?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登陆失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegister = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegister }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegister } = useRegisterEffect()
    return { username, password, handleLogin, handleRegister, show, toastMessage }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    padding: 0 .4rem;
    transform: translateY(-50%);
    &__img{
        display: block;
        width: .66rem;
        height: .66rem;
        margin: 0 auto .4rem auto;
    }
    &__input{
        padding: 0 .16rem;
        height: .48rem;
        background: #F9F9F9;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        margin-bottom: .16rem;
        &__content{
            font-size: .16rem;
            color: rgba(0,0,0,.5);
            width: 100%;
            line-height: .48rem;
            border-style: none;
            outline-style: none;
            background: none;
        }
    }
    &__login-button{
        color:#fff;
        margin:.32rem 0 .16rem 0;
        font-size: .16rem;
        line-height: .48rem;
        text-align: center;
        width: 100%;
        height: .48rem;
        background: #0091FF;
    }
    &__login-link{
        text-align: center;
    }
    &__login__span{
        font-size:.14rem;
        color:rgba(0,0,0,0.5);
        margin: 0 .12rem;
    }
    &__login__text{
        font-size:.14rem;
        color:rgba(0,0,0,0.5);
    }
}
</style>
