import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home-pages.vue";

import About from "@/views/About-pages.vue";
// import Logins from '@/views/account/login.vue';
import accountRoutes from "./account.routes.js";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "about", component: About },
  { ...accountRoutes },
  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: () => import("@/views/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
