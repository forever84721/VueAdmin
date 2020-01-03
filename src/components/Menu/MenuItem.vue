<template>
  <ul class="MenuItemul">
    <li class="MenuItemli" v-for="menu in menuItems" :key="menu.Id">
      <!-- ----- -->
      <div
        class="MenuItem ts1"
        :style="'padding-left:' + depth * 10 + 'px'"
        @click="menu.ShowChildren = !menu.ShowChildren"
        :class="{ MenuItemShrink: !IsExpand }"
      >
        <div>
          <i class="el-icon-s-cooperation"></i>

          <transition name="fade-in">
            <span class="ts" v-if="IsExpand">{{ menu.Name }}</span>
          </transition>
        </div>

        <!-- <transition name="fade-in"> -->
        <i
          v-if="menu.Children.length && IsExpand"
          class="el-icon-arrow-down ExpandButton ts1"
          :class="{ Rotate180: menu.ShowChildren }"
        ></i>
        <!-- </transition> -->
      </div>
      <!-- ----- -->
      <div class="ChildrenExpand" v-if="menu.Children.length && IsExpand">
        <el-collapse-transition>
          <MenuItem
            v-if="menu.ShowChildren"
            :menuItems="menu.Children"
            :expand="IsExpand"
            :depth="depth + 1"
          ></MenuItem>
        </el-collapse-transition>
      </div>
      <!-- ----- -->
      <div class="Children" v-if="menu.Children.length && !IsExpand">
        <transition name="fade-in">
          <div class="dropdown-content">
            11111111122222222222333333333333
            <!-- <MenuItem
              v-if="menu.ShowChildren"
              :menuItems="menu.Children"
              :expand="IsExpand"
              :depth="depth+1"
            ></MenuItem>-->
          </div>
        </transition>
      </div>
      <!-- ----- -->
    </li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItemModel from '@/Models/MenuItemModel';
@Component
export default class MenuItem extends Vue {
  @Prop() private menuItems!: MenuItemModel[];
  @Prop() private depth!: number;
  @Prop() private expand!: boolean;
  public created() {}
  get IsExpand() {
    return this.expand;
  }
}
</script>
<style scoped lang="scss">
.el-scrollbar {
  max-height: calc(100vh + 17px);
}
.MenuItemul {
  display: block;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
.MenuItem {
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  justify-content: space-between;
  // justify-content: center;
}
.MenuItem:hover {
  background: rgba(131, 182, 65, 0.8);
}
.MenuItemShrink {
  justify-content: center;
}
.MenuItemShrink:hover {
  background: rgba(131, 182, 65, 0.8);
}
.Children {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  min-height: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  top: -60px;
  left: 30px;
}
.MenuItemli:hover .dropdown-content {
  display: block;
}

.ts1 {
  transition: 1s;
}
.Rotate180 {
  transform: rotate3d(1, 0, 0, 180deg);
}
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  // max-width: 0;
  // width: 0;
  // padding-top: 0;
  // padding-bottom: 0;
}
.fade-in-enter-active {
  transition: all 1s;
}
.fade-in-leave-active {
  transition: all 0s;
}
.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
  // max-width: 60px;
  // width: 60px;
}
</style>
