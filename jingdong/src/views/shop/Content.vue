<template>
 <div class="content">
    <div class="category">
        <div :class="{'category__item': true, 'category__item--active': currentTab === item.tab }"
        v-for="(item,index) in categories "
        :key="index"
        @click="() => handleTabClick(item.tab)"
        >{{item.name}}</div>
    </div>
    <div class="product">
        <div class="product__item"
        v-for="(item,index) in list"
        :key="index"
        >
            <img :src="item.imgUrl" class="product__item__img" >
            <div class="product__item__d etail">
                <h4 class="product__item__title">{{item.name}}</h4>
                <p class="product__item__sales">月售 {{item.sales}} 件</p>
                <p class="product__item__price">
                    <span class="product__item__yen">&yen;</span><span class="product__true__price">{{item.price}}</span>
                    <span class="product__false__price">&yen;{{item.oldPrice}}</span>
                </p>
            </div>
            <div class="product__item__number">
                <span
                @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }"
                class="product__number__minus">-</span>
                {{getProductCartCount(shopId, item._id)}}
                <span class="product__number__plus"
                @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }"
                >+</span>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
// category__item--active
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'
import { useCommonCartEffect } from '../../effects/catEffects'
const categories = [{ name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

const useCurrentListEffecct = (currentTab, changeCartItemInfo, changeShopName) => {
  const route = useRoute()
  const shopId = route.params.id
  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    if (result?.data?.errno === 0) {
      content.list = result.data.data
    }
  }
  watchEffect(() => { getContentData() })
  const { list } = toRefs(content)
  const getLocalStorage = async () => {
    const p = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value
    })
    const pp = p.data.data
    for (let i = 0; i < pp.length; i++) {
      changeCartItemInfo(shopId, pp[i]._id, pp[i], 0)
      changeShopName(shopId)
    }
  }
  return { list, getLocalStorage }
}

const useCartEffect = () => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }
  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }
  const getProductCartCount = (shopId, productId) => {
    return cartList._object.cartList?.[shopId]?.productList?.[productId]?.count || 0
  }
  return { cartList, changeCartItem, getProductCartCount, changeCartItemInfo, changeShopName }
}

export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { changeCartItem, cartList, getProductCartCount, changeCartItemInfo, changeShopName } = useCartEffect()
    const { list, getLocalStorage } = useCurrentListEffecct(currentTab, changeCartItemInfo, changeShopName)
    getLocalStorage()
    return {
      changeCartItemInfo,
      changeShopName,
      list,
      categories,
      handleTabClick,
      currentTab,
      shopId,
      cartList,
      changeCartItem,
      getProductCartCount
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixins.scss';
.content{
  display: flex;
  position:absolute;
  top: 1.54rem;
  bottom: .5rem;
  left: 0;
  right: 0;
  .category{
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    margin-right: .16rem;
    background: #F5F5F5;
    &__item{
        font-size: .14rem;
        color: #333333;
        text-align: center;
        line-height: .4rem;
        height: .4rem;
        &--active{
            background: #FFFFFF;
        }
    }
  }
  .product{
    flex: 1;
    overflow-y: scroll;
  }
  .product__item{
    overflow: hidden;
    position: relative;
    display: flex;
    border-bottom: .01rem solid #F1F1F1;
    padding-bottom: .12rem;
    &__img{
        width: .68rem;
        height: .68rem;
        margin-right: .16rem;
    }
    &__title{
        @include ellipsis;
        line-height: .2rem;
        font-size: .14rem;
        color: #333333;
        font-weight: none;
        margin: 0 auto .09rem 0 ;
    }
    &__sales{
        font-size: .12rem;
        color: #333333;
        line-height: .16rem;
        margin: 0 auto .06rem 0;
    }
    &__price{
        height: .2rem;
        line-height: .2rem;
        margin-top: 0;
        margin-bottom: 0;
        .product__item__yen{
            font-size: .1rem;
            color: #E93B3B;
        }
        .product__true__price{
            margin-right: .12rem;
            font-size: .14rem;
            color: #E93B3B;
        }
        .product__false__price{
            font-size: .11rem;
            color: #999999;
            text-decoration: line-through;
        }
    }
  }
}
.product__item__number{
    font-size: .12rem;
    line-height: .16rem;
    right: .18rem;
    bottom: .1rem;
    position: absolute;
    .product__number__minus{
        box-sizing: border-box;
        margin-right: .08rem;
        text-align: center;
        line-height: .14rem;
        font-size: .2rem;
        display: inline-block;
        border-radius: 50%;
        width: .2rem;
        height: .2rem;
        border: .01rem solid #666666;
    }
    .product__number__plus{
        box-sizing: border-box;
        line-height: .14rem;
        font-size: .2rem;
        background: #0091FF;
        color: #fff;
        margin-left: .08rem;
        text-align: center;
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border-radius: 50%;
        border: .01rem solid #666666;
    }
}
</style>
