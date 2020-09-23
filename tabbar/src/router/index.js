import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../components/Home.vue")
    },
    {
      path: "/store",
      component: () => import("../components/Store")
    },
    {
      path: "/profile",
      component: () => import("../components/Profile")
    }
  ]
});
