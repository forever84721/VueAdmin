<template>
  <div id="app">
    <Menu :expand="IsExpand"></Menu>
    <div class="right">
      <Header
        :expand="IsExpand"
        @ExpandClickEvent="IsExpand = !IsExpand"
      ></Header>
      <router-view />
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from './components/Menu/Menu.vue';
import Header from './components/Header/Header.vue';
@Component({
  components: {
    Menu,
    Header
  }
})
export default class App extends Vue {
  private IsExpand = true;
}
</script>
<style lang="scss">
body {
  margin: 0;
}
*,
:after,
:before {
  box-sizing: border-box;
}
#app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.right {
  // display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(197, 96, 96);
}
.flex-c {
  display: flex;
  flex-direction: column;
}
.flex-r {
  display: flex;
  flex-direction: row;
}
.ac {
  align-items: center;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
