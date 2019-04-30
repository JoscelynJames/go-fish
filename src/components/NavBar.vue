<template>
  <div id="nav">
      <router-link to="/">Tanks</router-link> |
      <router-link to="/Treatments">Treatments</router-link> |
      <router-link to="/about">About</router-link> 
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('nav-bar', {
  renderer: () => {},
});
</script>

<style lang="scss">
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
