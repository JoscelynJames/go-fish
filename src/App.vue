<template>
  <div id="app">

    <link rel="stylesheet"
          href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">

    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import 'vue-material/dist/vue-material.min.css';

export default {
  components: {
    'nav-bar': NavBar,
  },
};
</script>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(teal, 200), // The primary color of your application
  accent: md-get-palette-color(lightblue, 900), // The accent or secondary color
  theme: light // This can be dark or light
));

@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  margin: 0px;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
};

.row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
