<template>
  <div>
    <div v-for="menu in menuItems" :key="menu.Id">
      <div
        class="MenuItem"
        :style="'padding-left:'+depth*10+'px'"
        @click="menu.ShowChildren=!menu.ShowChildren"
      >
        <span>{{menu.Name}}</span>
        <i
          v-if="menu.Children.length"
          class="el-icon-arrow-down ts1"
          :class="{'Rotate180':menu.ShowChildren}"
        ></i>
      </div>
      <div v-if="menu.Children.length">
        <el-collapse-transition>
          <MenuItem v-if="menu.ShowChildren" :menuItems="menu.Children" :depth="depth+1"></MenuItem>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItemModel from '@/Models/MenuItemModel';
@Component
export default class MenuItem extends Vue {
  @Prop() private menuItems!: MenuItemModel[];
  @Prop() private depth!: number;
}
</script>
<style scoped lang="scss">
.el-scrollbar {
  max-height: calc(100vh + 17px);
}
.MenuItem {
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  justify-content: space-between;
  // justify-content: center;
}
.MenuItem:hover {
  background: rgba(131, 182, 65, 0.8);
}
.ts1 {
  transition: 1s;
}
.Rotate180 {
  transform: rotate3d(1, 0, 0, 180deg);
}
</style>
