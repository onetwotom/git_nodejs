<template>
        <div class="top">
            <div class="top__header">
                <div
                @click="handleBackClick"
                class="iconfont top__header__back">&#xe7e0;</div>
                确认订单
            </div>
            <div class="top__receiver">
                <div class="top__receiver__title">收货地址</div>
                <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
                <div class="top__receiver__info">
                    <span class="top__receiver__info__name">瑶妹&nbsp;&nbsp; (先生)</span>
                    &nbsp;&nbsp;&nbsp;
                    <span class="top__receiver__info__name">18911024266</span>
                </div>
                <div class="iconfont  top__receiver__enter">&#xe7e0;</div>
            </div>
        </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const handleBackClick = () => { router.back() }
    return { handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
.top {
    height: 1.96rem;
    background-size: 100% 1.59rem;
    background-image:linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    background-repeat: no-repeat;
    &__header{
        text-align: center;
        padding-top: .4rem;
        line-height: .22rem;
        font-size: .16rem;
        color: #fff;
        position: relative;
        &__back{
            position: absolute;
            left: .18rem;
        }
    }
    &__receiver{
        position: relative;
        padding: .16rem;
        box-sizing: border-box;
        background: #fff;
        width: 3.39rem;
        height: 1.11rem;
        margin: .22rem auto 0 auto;
        border-radius: .04rem;
        &__title{
            font-weight: bold;
            color: #333;
            font-size: .16rem;
            line-height: .22rem;
            margin-bottom: .14rem;
        }
        &__address{
            line-height: .2rem;
            font-size: .14rem;
            color: #333;
            margin-bottom: .06rem;
        }
        &__info{
            font-size: .12rem;
            color: #666;
        }
        &__enter{
            position: absolute;
            top: 50%;
            margin-top: -.08rem;
            right: .16rem;
            transform: rotate(180deg);
        }
    }
}
</style>
