<template>
  <div class="HeaderCotainer">
    <div class="flex-r ac">
      <i
        class="el-icon-s-fold ExpandIcon"
        :class="{ Rotate180: !IsExpand }"
        @click="ExpandClick"
      ></i>
      <span>123</span>
    </div>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import MenuItemModel from '@/Models/MenuItemModel';
@Component
export default class Header extends Vue {
  @Prop() private expand!: boolean;
  public created() {}
  get IsExpand() {
    return this.expand;
  }
  @Emit('ExpandClickEvent')
  private ExpandClick() {}
}
</script>
<style scoped lang="scss">
.HeaderCotainer {
  background-color: aquamarine;
  padding: 5px;
  min-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ExpandIcon {
  font-size: 40px;
  cursor: pointer;
  transition: 0.5s;
}
.Rotate180 {
  transform: rotate3d(0, 0, 1, -180deg);
}
</style>
