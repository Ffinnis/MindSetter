import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map/:id",
    name: "Map",
    component: () => import("../views/Map.vue"),
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import("../views/Maps.vue"),
  },
  {
    path: "/create",
    name: "CreateMap",
    component: () => import("../views/CreateMap"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
