<template>
        <div class="products">
            <div class="products__title">{{shopName}}</div>
                <div class="products__list">
                    <template
                    v-for="item in productList"
                    :key="item._id"
                    >
                    <div class="product__item"
                    v-if="item.count > 0 "
                    >
                        <img :src="item.imgUrl" class="product__item__img" >
                        <div class="product__item__detail">
                            <h4 class="product__item__title">{{item.name}}</h4>
                            <p class="product__item__price">
                                <span class="product__single__price"><span class="product__item__yen">&yen;</span>{{ item.price }}x{{ item.count }}</span>
                                <span class="product__total__price"><span >&yen;</span>{{ (item.price* item.count).toFixed(2) }}</span>
                            </p>
                        </div>
                    </div>
                    </template>
                </div>
        </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/catEffects'
import { useRoute } from 'vue-router'
export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { cartList, productList, shopName, calculations } = useCommonCartEffect(shopId)
    return { productList, cartList, shopName, calculations }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
.products{
    overflow-y: scroll;
    margin: .16rem .18rem .55rem .18rem;
    background: #fff;
    &__title{
        font-weight: bold;
        font-size: .16rem;
        color:#333;
        margin: .16rem auto 0 0.16rem;
    }
    &__list{
        overflow-y: scroll;
    }
}
.product__item{
    overflow: hidden;
    position: relative;
    display: flex;
    border-bottom: .01rem solid #F1F1F1;
    padding: .16rem;
    &__img{
        width: .46rem;
        height: .46rem;
        margin-right: .16rem;
    }
    &__detail{
        flex: 1;
    }
    &__title{
        @include ellipsis;
        line-height: .2rem;
        font-size: .14rem;
        color: #333333;
        font-weight: none;
        margin: 0 auto .09rem 0 ;
    }
    &__price{
        display: flex;
        height: .2rem;
        line-height: .2rem;
        margin-top: 0;
        margin-bottom: 0;
        .product__item__yen{
            font-size: .1rem;
            color: #E93B3B;
        }
        .product__single__price{
            font-size: .14rem;
            color: #E93B3B;
        }
        .product__total__price{
            flex: 1;
            text-align: right;
            color: #000;
            font-size: .14rem;
        }
    }
}
</style>
