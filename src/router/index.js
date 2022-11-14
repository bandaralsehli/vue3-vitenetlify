import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-pages.vue";
import About from "@/views/About-pages.vue";
import Endtageam from "@/views/endtageam-pages.vue";
import Taqem from "@/views/Taqem-pages.vue";
import accountRoutes from "./account.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
const routes = [
  // { path: "/", name: "home", component: Home },
  { path: "/", redirect: "/taqem" },
  { path: "/about", name: "about", component: About },
  { path: "/endtaqem", name: "endtaqem", component: Endtageam },
  { path: "/taqem", name: "taqem", component: Taqem },
  { ...accountRoutes },
  { ...dashboardRoutes },
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
