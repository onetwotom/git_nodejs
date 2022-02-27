<template>
    <div class="head">
        <div class="head__blank">
        </div>
        <div class="head__info">
            <img class="head__info__img"  src="http://www.dell-lee.com/imgs/vue3/user.png" >
            <p class="head__info__name">shuangyue1</p>
            <p class="head__info__id">ID</p>
        </div>
    </div>
    <div @click="enterAddress" class="address">
        <span class="iconfont address__icon">&#xe619;</span>
        <span >我的地址</span>
        <span class="iconfont  address__back">&#xe7e0;</span>
    </div>
    <div @click="quitLog" class="exitLog">退出登陆</div>
    <Docker :currentIndex='3'  />
</template>
<script>
import Docker from '../../components/Docker.vue'
import { useRouter } from 'vue-router'
const enterAddressEffect = () => {
  const router = useRouter()
  const enterAddress = () => {
    router.push({ name: 'ManageAddress' })
  }
  return { enterAddress }
}
const quitLogEffect = () => {
  const router = useRouter()
  const quitLog = () => {
    localStorage.isLogin = !localStorage.isLogin
    router.push({ name: 'Login' })
  }
  return { quitLog }
}

export default {
  name: 'Me',
  components: { Docker },
  setup () {
    const { quitLog } = quitLogEffect()
    const { enterAddress } = enterAddressEffect()
    return { quitLog, enterAddress }
  }
}
</script>
<style lang="scss" scoped>
.head{
    position: relative;
    box-sizing: border-box;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    width: 100%;
    height: 1.8rem;
    padding:  .7rem .2rem .1rem .2rem;
    &__blank{
        box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
        border-radius: .08rem;
        width: 3.35rem;
        height: 1rem;
        background: #FFFFFF;
    }
    &__info{
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        &__img{
            margin: 0 auto 0 auto;
            display: block;
            width: .66rem;
            height: .66rem;
        }
        &__name{
            margin-top: .05rem;
            text-align: center;
        }
        &__id{
            text-align: center;
        }
    }
}
.address{
    position: relative;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
    border-radius: 8px;
    width: 3.35rem;
    height: .45rem;
    line-height: .45rem;
    margin: 0.2rem auto 0.2rem auto;
    &__icon{
        justify-content: bottom;
        margin: 0 .1rem 0 .15rem;
    }
    &__back{
        position: absolute;
        transform: rotate(180deg);
        right: 0;
        margin-right: .15rem;
    }
}
.exitLog{
    color: #fff;
    background: #1FA4FC;
    box-sizing: border-box;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
    border-radius: 8px;
    width: 3.35rem;
    height: .30rem;
    text-align: center;
    line-height: .30rem;
    margin: 0.2rem auto 0.2rem auto;
}
</style>
