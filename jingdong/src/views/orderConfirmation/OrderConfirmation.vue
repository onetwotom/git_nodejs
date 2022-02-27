<template>
    <div class="wrapper">
        <TopArea/>
        <ProductList />
        <Order/>
    </div>
</template>

<script>
import Order from './Order.vue'
import TopArea from './TopArea.vue'
import ProductList from './ProductList.vue'
export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order }
}
</script>

<style lang="scss"  scoped>
@import '../../style/mixins.scss';
.wrapper{
    overflow-y: scroll;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #eee;
}

</style>
