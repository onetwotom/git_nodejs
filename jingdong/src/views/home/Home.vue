<template>
  <div class="wraper">
    <Static-part/>
    <Nearby/>
  </div>
  <Docker :currentIndex='0'  />
</template>
<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker.vue'
export default {
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.wraper{
  overflow-y:auto ;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 .18rem;
  color:$content-fontcolor;
}
</style>
