<template>
  <div class="wreap">
      <div class="head">
        <span
        @click="handBack"
         class="iconfont ">&#xe7e0;</span>
        <span class="head__text">新建收货地址</span>
        <span
        @click="creatAddress"
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
            placeholder="双越"
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
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
const useGetAddressList = () => {
  const date = reactive({
    city: '',
    department: '',
    houseNumber: '',
    name: '',
    phone: ''
  })
  const creatAddress = async () => {
    try {
      const result = await post('/api/user/address', {
        city: date.city,
        department: date.department,
        houseNumber: date.houseNumber,
        name: date.name,
        phone: date.phone
      })
      console.log(result)
    } catch (e) {
      console.log('新建地址请求失败')
    }
  }
  const { city, department, houseNumber, name, phone } = toRefs(date)
  return { creatAddress, city, department, houseNumber, name, phone }
}

const useTransform = () => {
  const router = useRouter()
  const handBack = () => {
    router.back()
  }

  return { handBack }
}
export default {
  name: 'manageAddress',
  setup () {
    const { creatAddress, city, department, houseNumber, name, phone } = useGetAddressList()
    const { handBack } = useTransform()
    return { handBack, creatAddress, city, department, houseNumber, name, phone }
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
