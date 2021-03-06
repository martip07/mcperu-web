import Vue from "vue";
import VueAnalytics from "vue-analytics";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
Vue.use(VueAnalytics, {
  id: "UA-46797998-1",
  Home
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
