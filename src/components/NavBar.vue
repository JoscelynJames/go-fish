<template>
  <div id="nav">
    <md-toolbar class="md-accent md-dense">
        <router-link to="/">
          <md-icon>home</md-icon>
        </router-link>

        <router-link to="/tanks">
          <md-icon class="tank">call_to_action</md-icon>
        </router-link>

        <router-link to="/treatments">
          <md-icon>colorize</md-icon>
        </router-link>

        <router-link to="/login">
          <md-icon>person</md-icon>
        </router-link>
    </md-toolbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { MdToolbar, MdIcon } from 'vue-material/dist/components';

Vue.use(MdToolbar);
Vue.use(MdIcon);

export default Vue.component('nav-bar', {
  renderer: () => {},
  components: {},
});
</script>

<style lang="scss">
.md-toolbar {
  display: flex;
  justify-content: space-around;

  a {
    font-size: 20px;
    color: white;
    text-decoration: none;
  }

  .tank {
    transform: rotate(180deg);
  }
}
</style>
