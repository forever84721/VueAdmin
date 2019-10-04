<template>
  <div class="SidebarCcontainerExpand">
    <el-scrollbar
      wrap-class="el-scrollbar-wrap"
      wrap-style
      view-style="font-weight: bold;"
      view-class="view-box"
      :native="false"
    >
      <MenuItem :menuItems="testMenu" :depth="1" :expand="gatExpand"></MenuItem>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItemModel from '@/Models/MenuItemModel';
import MenuItem from './MenuItem.vue';
@Component({
  components: {
    MenuItem
  }
})
export default class Menu extends Vue {
  @Prop() private expand!: boolean;
  created() {
    console.log(this.expand);
  }
  private testMenu: MenuItemModel[] = [
    { Id: 0, Name: 'Home', Children: [], ShowChildren: false },
    {
      Id: 1,
      Name: 'Menu-1',
      Children: [
        {
          Id: 101,
          Name: 'Menu-101',
          Children: [
            {
              Id: 1012,
              Name: 'Menu-1012',
              Children: [
                {
                  Id: 10122,
                  Name: 'Menu-10122',
                  Children: [],
                  ShowChildren: false
                },

                {
                  Id: 10123,
                  Name: 'Menu-10123',
                  Children: [],
                  ShowChildren: false
                }
              ],
              ShowChildren: false
            }
          ],
          ShowChildren: false
        },
        {
          Id: 201,
          Name: 'Menu-201',
          Children: [
            {
              Id: 2012,
              Name: 'Menu-2012',
              Children: [
                {
                  Id: 20122,
                  Name: 'Menu-20122',
                  Children: [],
                  ShowChildren: false
                }
              ],
              ShowChildren: false
            }
          ],
          ShowChildren: false
        }
      ],
      ShowChildren: false
    },
    { Id: 2, Name: 'Menu-2', Children: [], ShowChildren: false },
    { Id: 3, Name: 'Menu-3', Children: [], ShowChildren: false },
    { Id: 4, Name: 'Menu-4', Children: [], ShowChildren: false },
    { Id: 5, Name: 'Menu-5', Children: [], ShowChildren: false },
    { Id: 6, Name: 'Menu-6', Children: [], ShowChildren: false },
    { Id: 7, Name: 'Menu-7', Children: [], ShowChildren: false },
    { Id: 8, Name: 'Menu-8', Children: [], ShowChildren: false },
    { Id: 9, Name: 'Menu-9', Children: [], ShowChildren: false },
    { Id: 10, Name: 'Menu-10', Children: [], ShowChildren: false },
    { Id: 11, Name: 'Menu-11', Children: [], ShowChildren: false },
    { Id: 12, Name: 'Menu-12', Children: [], ShowChildren: false },
    { Id: 13, Name: 'Menu-13', Children: [], ShowChildren: false },
    { Id: 14, Name: 'Menu-14', Children: [], ShowChildren: false },
    { Id: 15, Name: 'Menu-15', Children: [], ShowChildren: false },
    { Id: 16, Name: 'Menu-16', Children: [], ShowChildren: false },
    { Id: 17, Name: 'Menu-17', Children: [], ShowChildren: false },
    { Id: 18, Name: 'Menu-18', Children: [], ShowChildren: false },
    { Id: 19, Name: 'Menu-19', Children: [], ShowChildren: false },
    { Id: 20, Name: 'Menu-20', Children: [], ShowChildren: false },
    { Id: 21, Name: 'Menu-21', Children: [], ShowChildren: false },
    { Id: 22, Name: 'Menu-22', Children: [], ShowChildren: false },
    { Id: 23, Name: 'Menu-23', Children: [], ShowChildren: false },
    { Id: 24, Name: 'Menu-24', Children: [], ShowChildren: false },
    { Id: 25, Name: 'Menu-25', Children: [], ShowChildren: false },
    { Id: 26, Name: 'Menu-26', Children: [], ShowChildren: false },
    { Id: 27, Name: 'Menu-27', Children: [], ShowChildren: false },
    { Id: 28, Name: 'Menu-28', Children: [], ShowChildren: false },
    { Id: 29, Name: 'Menu-29', Children: [], ShowChildren: false },
    { Id: 30, Name: 'Menu-30', Children: [], ShowChildren: false }
  ];
  get gatExpand() {
    return this.expand;
  }
}
</script>
<style scoped lang="scss">
.SidebarCcontainerExpand {
  height: 100vh;
  width: 200px;
  transition: 0.3s;
}
.SidebarCcontainer {
}
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
  // justify-content: center;
}
.MenuItem:hover {
  background: rgba(131, 182, 65, 0.8);
}
</style>
<style lang="scss">
.el-scrollbar-wrap {
  max-height: calc(100vh + 17px);
}
</style>