import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Loading from "../views/Loading.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Loading",
    component: Loading,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
