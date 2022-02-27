<template>
  <div class="docker">
    <div
    v-for="(item,index) in dockerList"
    :class="{'docker__item': true,'docker__item--active': index ===currentIndex }"
    class="docker__item"
    :key="item.icon"
    >
      <router-link :to='item.to'>
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe8b9;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe60c;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe645;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe602;', text: '我的', to: { name: 'Me' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../style/mixins.scss';
.docker{
  color:$content-fontcolor;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #f1f1f1;
  &__item--active a{
    color: #1FA4FC !important ;
  }
  &__item{
  flex: 1;
  text-align: center;
  a {
    color: $content-fontcolor;
    text-decoration: none;
  }
    .iconfont{
    font-size: .18rem;
    margin: 0.07rem 0 .02rem 0;
    }

  }

  &__title{
  font-size: .1rem;
  }
}
</style>
