<template>
        <div class="order">
            <div class="order__price">实付金额 ￥{{calculations.price}}</div>
            <div class="order__btn"
            @click="() =>  handleSubmitClick(true)"
            >提交订单</div>
        </div>
        <div
        @click="() =>  handleSubmitClick(false)"
        class="mask" v-show="showConfirm">
            <div class="mask__content"
            @click.stop
            >
              <h3 class="mask__content__title">确认要离开收银台？</h3>
              <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
              <div class="mask__content__btns">
                <div
                @click="() => handleConfirmOrder(true)"
                class="mask__content__btn">取消订单</div>
                <div
                @click="() => handleConfirmOrder(false)"
                class="mask__content__btn mask__content__btn--active">确认支付</div>
              </div>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
import { useCommonCartEffect } from '../../effects/catEffects'
import { useRoute, useRouter } from 'vue-router'
import { post } from '../../utils/request'
import { useStore } from 'vuex'

const useMakeOrderEffect = (shopId, shopName, productList) => {
  const router = useRouter()
  const store = useStore()
  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: product._id, num: product.count })
    }
    try {
      const result = await post('/api/order', {
        addressId: '619348a43bce719100576bff',
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      if (result?.data.errno === 0) {
        router.push({ name: 'OrderList' })
        store.commit('clearCartData', { shopId })
      }
    } catch (e) {
      //  提示下单失败
    }
  }
  return { handleConfirmOrder }
}

const useShowMaskEffect = () => {
  const showConfirm = ref(false)

  const handleSubmitClick = (status) => {
    showConfirm.value = status
  }
  return { showConfirm, handleSubmitClick }
}

export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations, shopName, productList, cartList } = useCommonCartEffect(shopId)
    const { showConfirm, handleSubmitClick } = useShowMaskEffect()
    const { handleConfirmOrder } = useMakeOrderEffect(shopId, shopName, productList)
    return { cartList, handleSubmitClick, showConfirm, calculations, handleConfirmOrder }
  }
}
</script>

<style lang="scss" scoped>
.order{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    line-height: .5rem;
    height: .5rem;
    background: #fff;
    display: flex;
    &__price{
        margin-left: .24rem;
        flex: 1;
        font-weight: bold;
        font-size: .16rem;
        color: #333333;
    }
    &__btn{
        font-size: .14rem;
        text-align: center;
        width: .98rem;
        background: #4FB0F9;
        color: #fff;
    }
}
.mask{
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.50);
    &__content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3rem;
        height: 1.56rem;
        background: #fff;
        border-radius: .04rem;
        &__title{
            margin: .24rem auto .08rem auto;
            font-size: .18rem;
            color: #333;
            text-align: center;
        }
        &__desc{
             text-align: center;
            margin: 0 auto .24rem auto;
            color: #666;
            font-size: .14rem;
        }
        &__btns{
            margin-left: .47rem;
            display: flex;
        }
        &__btn{
            margin: 0 .12rem 0 .12rem;
            color: #4FB0F9;
            border: 1px solid #4FB0F9;
            width: .8rem;
            text-align: center;
            line-height: .32rem;
            height: .32rem;
            border-radius: .16rem;
            &--active{
                background: #4FB0F9;
                color: #fff;
            }
        }
    }
}
</style>
