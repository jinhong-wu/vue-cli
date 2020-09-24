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
      component: () => import("../views/home/Home.vue")
    },
    {
      path: "/store",
      component: () => import("../views/store/Store.vue")
    },
    {
      path: "/profile",
      component: () => import("../views/profile/Profile.vue")
    }
  ],
  mode: "history"
});
