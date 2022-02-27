<template>
  <div class="wrapper">
    <div class="search">
      <div
      @click="handleBack"
       class="iconfont search--back">&#xe7e0;</div>
      <div class="search__content">
        <span class="iconfont search--icon">&#xe65c;</span>
        <input class="search__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo
    :item='item'
    :hideBorder=false
    v-show="item.imgUrl"
    />
    <Content :shopName="item.name" />
    <Cart/>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
import Content from '../shop/Content.vue'
import Cart from '../shop/Cart.vue'
const useGetItemData = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.data?.errno === 0 && result?.data) {
      data.item = result.data.data
    }
  }
  const { item } = toRefs(data)
  return { getItemData, item }
}
const useHandleBack = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return { handleBack }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { getItemData, item } = useGetItemData()
    const { handleBack } = useHandleBack()
    getItemData()
    return { item, handleBack }
  }
}
</script>
<style lang="scss" scoped>
.search{
  display: flex;
  margin: 0 .18rem .16rem .185rem;
  &--back{
    color: #B6B6B6;
    line-height: .32rem;
    font-size: .28rem;
    margin-right: .162rem;
  }
  &--icon{
    line-height: .32rem;
    font-size: .18rem;
    margin-right: .12rem;
  }
  &__content{
    display: flex;
    height: .32rem;
    flex:1;
    background: #F5F5F5;
    border-radius: .16rem;
  }
  &__input{
    flex: 1;
    border-radius: .16rem;
    font-size: .14rem;
    background: #F5F5F5;
    outline-style: none;
    border-style: none;
  }
}
</style>
