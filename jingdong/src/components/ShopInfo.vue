<template>
    <div class="shop">
        <img class="shop__img" :src="item.imgUrl" />
        <div
        :class="{'shop__content':true, 'shop__content--bordered':hideBorder}"
        >
            <div class="shop__content__title">{{item.name}}</div>
            <div class="shop__content__tags">
                <span class="shop__content__tag"
                >月售:{{item.sales}}</span>
                <span class="shop__content__tag"
                >起送:{{item.expressLimit}}</span>
                <span class="shop__content__tag"
                >基础运费:{{item.expressPrice}}</span>
            </div>
            <div class="shop__content__highlight">{{item.slogan}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>
<style lang="scss" scoped>
.shop{
  margin-bottom: .12rem;
  display: flex;
  .shop__img{
  width: .56rem;
  height: .56rem;
  margin-right: .16rem;
  }
  .shop__content{
    &--bordered{
    border-bottom: 0.01rem solid #F1F1F1;
    }
  }
  .shop__content__title{
    font-size: .16rem;
    line-height: .22rem;
    color: #333333;
    margin-bottom: 0.08rem;
  }
  .shop__content__tags{
     margin-bottom: 0.08rem;
  }
  .shop__content__tag{
    margin-right: 0.16rem;
    font-size: .13rem;
    line-height: .18rem;
    color: #333333;
  }
  .shop__content__highlight{
    font-size: .13rem;
    line-height: .18rem;
    color: #E93B3B;
    margin-bottom: .12rem;
  }
}
</style>
