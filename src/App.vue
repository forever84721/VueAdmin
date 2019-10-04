<template>
  <div id="app">
    <div class="sidebar-container">
      <Menu></Menu>
    </div>
    <div class="right"></div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from './components/Menu/Menu.vue';
@Component({
  components: {
    Menu
  }
})
export default class App extends Vue {}
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
}
.sidebar-container {
  height: 100vh;
  width: 200px;
}
.right {
  width: 100%;
  height: 100%;
  background-color: rgb(197, 96, 96);
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
