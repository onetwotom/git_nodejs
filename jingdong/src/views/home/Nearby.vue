<template>
    <div class="nearby">
      <h3 class="nearby__title">附近店铺</h3>
      <router-link
      v-for="item in nearList"
      :key="item._id"
      :to="`/shop/${item._id}`"
      >
      <Shop-info
        :item="item"
      />
      </router-link>
    </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
const useGetNearbyList = () => {
  const nearList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.data?.errno === 0 && result?.data?.data?.length) {
      nearList.value = result.data.data
    }
  }
  return { nearList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup () {
    const { nearList, getNearbyList } = useGetNearbyList()
    getNearbyList()
    return { nearList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.nearby{
  a{
    text-decoration: none;
  }
}
.nearby__title{
  font-size: .18rem;
  line-height: .25rem;
  margin: .16rem 0 .14rem 0;

}
</style>
