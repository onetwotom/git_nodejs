<template>
    <div class="position">
      <span class="iconfont position__iconfont">&#xe619;</span>
      <span class="position__content">北京理工大学国防科技园2号楼10层</span>
      <span class="iconfont position__notice">&#xe6d3;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe65c;</span>
      <input type="text" class="search__input" placeholder="山姆会员商店优惠商品">
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
    <div class="icons">
      <div class="icons__item"
      v-for="item in staticList"
      :key="item.id"
      >
        <img class="icons__img" :src="item.imgUrl" />
        <p class="icons__desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const staticList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/banner.jpg',
      desc: '超市便利'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      desc: '菜市场'
    }, {
      id: 3,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      desc: '水果店'
    }, {
      id: 4,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      desc: '鲜花绿植'
    }, {
      id: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      desc: '医药健康'
    }, {
      id: 6,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      desc: '家居时尚'
    }, {
      id: 7,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      desc: '烘焙蛋糕'
    }, {
      id: 8,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      desc: '签到'
    }, {
      id: 9,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      desc: '大牌免运'
    }, {
      id: 10,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      desc: '红包套餐'
    }]
    return { staticList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position{
    @include ellipsis;
    position: relative;
    padding-right: .24rem;
    margin: 16px 0;
    font-size: .16rem;
    line-height: .22rem;
    .position__content{
      margin-left: 0.097rem;
    }
    .position__iconfont{
      font-size: .16rem;
    }
    .position__notice{
      position: absolute;
      right: 0;
      font-size: .16rem;
    }
}
.banner{
  margin-top: 0.12rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  margin-top: .16rem;
  display: flex;
  flex-wrap: wrap;
  &__item{
    width: 20%;
    text-align: center;
  }
  &__img{
    width: .4rem;
    height: .4rem;
    margin-bottom: 0.06rem;
  }
  &__desc{
    margin-bottom: 0.16rem;
    margin-top: 0;
  }
}
.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background: #F1F1F1;
}
.search{
  padding-left: .16rem;
  display: flex;
  line-height: .32rem;
  height: .32rem;
  background: #F5F5F5;
  border-radius: .16rem;
  &__input{
    border-radius: .16rem;
    line-height: .32rem;
    height: .32rem;
    margin-left: 0.12rem;
    background: #F5F5F5;
    flex: 1;
    font-size: .14rem;
    outline-style: none;
    border-style: none;
    display: inline-block;
  }
}
</style>
