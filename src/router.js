import Vue from 'vue';
import Router from 'vue-router';
import TanksFrame from './views/TanksFrame.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tanks',
      // component: TanksFrame,
    },
    {
      path: '/tanks',
      name: 'tanks',
      component: TanksFrame,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
});
