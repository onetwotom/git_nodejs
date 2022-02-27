<template>
  <div class="wreap">
      <div class="head">
        <span
        @click="handBack"
         class="iconfont ">&#xe7e0;</span>
        <span class="head__text">管理收货地址</span>
        <span
        @click="newAddress "
        class="head__address">新建</span>
      </div>
      <div class="body">
        <div
          v-for="item in addressList"
          :key="item._id"
          class="body__item">
          <div>
            <span>{{item.name}}</span>
            <span class="body__item__phone">{{item.phone}}</span>
          </div>
          <div>
            <span>{{item.city}}{{item.department}}{{item.houseNumber}}</span>
            <router-link
            :to="`/oneAddress/${item._id}`"
            >
            <span class="iconfont body__item__back ">&#xe7e0;</span>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
const useGetAddressList = () => {
  const addressList = ref([])
  const getAddressList = async () => {
    const result = await get('/api/user/address')
    addressList.value = result.data.data
  }
  return { addressList, getAddressList }
}

const useTransform = () => {
  const router = useRouter()
  const handBack = () => {
    router.back()
  }
  const newAddress = () => {
    router.push({ name: 'CreateAddress' })
  }
  return { handBack, newAddress }
}
export default {
  name: 'manageAddress',
  setup () {
    const { addressList, getAddressList } = useGetAddressList()
    getAddressList()
    const { handBack, newAddress } = useTransform()
    return { addressList, handBack, newAddress }
  }
}
</script>
<style lang="scss" scoped>
.wreap{
  padding: 0 .2rem;
}
.head{
  margin-bottom: .3rem;
  background: #fff;
  height: .4rem;
  line-height: .4rem;
  box-sizing: border-box;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
  display: flex;
  &__text{
    text-align: center;
    flex: 1;
  }
}
.body{
  line-height: .18rem;
  padding: .15rem  .2rem  0  .2rem ;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
  &__item{
    position: relative;
    padding-bottom: .2rem;
    &__phone{
      margin-left: .8rem;
    }
    &__back{
      color: #000;
      right: 0;
      position: absolute;
      transform: rotate(180deg);
    }
  }
}

</style>
