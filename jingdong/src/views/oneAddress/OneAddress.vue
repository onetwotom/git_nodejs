<template>
 <div class="wreap">
      <div class="head">
        <span
        @click="handBack"
         class="iconfont ">&#xe7e0;</span>
        <span class="head__text">更新收货地址</span>
        <span
        @click="updateAddress"
        class="head__address">保存</span>
      </div>
      <div class="body__bar">
        <div class="body__item">
            <span>所在城市:</span>
            <input
            class="body__item__text"
            v-model="city"
            placeholder="北京市"
             type="text">
        </div>
        <div class="body__item">
            <span>小区/大厦/学校:</span>
            <input
            v-model="department"
            class="body__item__text"
            placeholder="西二旗小区"
             type="text">
        </div>
        <div class="body__item">
            <span>楼号-门牌号:</span>
            <input
            v-model="houseNumber"
            class="body__item__text"
            placeholder="10号楼1单元"
             type="text">
        </div>
        <div class="body__item">
            <span>收货人:</span>
            <input
            v-model="name"
            class="body__item__text"
            placeholder='双月'
             type="text">
        </div>
        <div class="body__item">
            <span>联系电话:</span>
            <input
            v-model="phone"
            class="body__item__text"
            placeholder="1555666"
             type="text">
        </div>
      </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, patch } from '../../utils/request'
const useGetOneAddress = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const formDate = reactive({
    city: '',
    department: '',
    houseNumber: '',
    name: '',
    phone: ''
  })
  const getOneAddress = async () => {
    const result = await get(`api/user/address/${route.params.id}`)
    if (result?.data?.errno === 0 && result?.data) {
      data.item = result.data.data
      const { city, department, houseNumber, name, phone } = result.data.data
      formDate.city = city
      formDate.department = department
      formDate.houseNumber = houseNumber
      formDate.name = name
      formDate.phone = phone
    }
  }
  const updateAddress = async () => {
    const res = await patch(`api/user/address/${route.params.id}`, {
    //   city: formDate.city,
    //   department: formDate.department,
    //   houseNumber: formDate.houseNumber,
    //   name: formDate.name,
    //   phone: formDate.phone
      data: formDate
    })
    console.log(res)
  }
  const { city, department, houseNumber, name, phone } = toRefs(formDate)
  const { item } = toRefs(data)
  return { item, updateAddress, getOneAddress, city, department, houseNumber, name, phone }
}
const useTransform = () => {
  const router = useRouter()
  const handBack = () => {
    router.back()
  }

  return { handBack }
}
export default {
  name: 'OneAddress',
  setup () {
    const { item, updateAddress, getOneAddress, city, department, houseNumber, name, phone } = useGetOneAddress()
    getOneAddress()
    const { handBack } = useTransform()
    return { handBack, item, updateAddress, city, department, houseNumber, name, phone }
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
.body__bar{
  padding: 0 .2rem;
  line-height: .4rem;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);

}
.body__item{
  height: .4rem;
  border-bottom: .01rem solid #F1F1F1;
    &__text{
      border-style: none;
      outline-style: none;
      margin-left: .2rem;
    }
}

</style>
