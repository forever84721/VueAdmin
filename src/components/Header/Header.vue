<template>
  <div class="HeaderCotainer">
    <i class="el-icon-s-fold ExpandIcon" :class="{'Rotate180':!IsExpand}" @click="ExpandClick"></i>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import MenuItemModel from '@/Models/MenuItemModel';
@Component
export default class Header extends Vue {
  @Prop() private expand!: boolean;
  created() {}
  get IsExpand() {
    return this.expand;
  }
  @Emit('ExpandClickEvent')
  ExpandClick() {}
}
</script>
<style scoped lang="scss">
.HeaderCotainer {
  background-color: aquamarine;
  min-height: 80px;
  width: 100%;
}
.ExpandIcon {
  font-size: 30px;
  cursor: pointer;
  transition: 0.5s;
}
.Rotate180 {
  transform: rotate3d(0, 0, 1, -180deg);
}
</style>