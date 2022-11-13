import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home-pages.vue";
import About from "@/views/About-pages.vue";
import Taqem from "@/views/Taqem-pages.vue";
import dashboard from "@/views/dashboard-pages.vue";
import accountRoutes from "./account.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "about", component: About },
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
