<template>
  <div id="app">
    <div id="nav">
      <top-bar></top-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
export default {
  components: {
    "top-bar": TopBar
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
