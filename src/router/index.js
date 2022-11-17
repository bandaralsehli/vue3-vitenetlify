import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home-pages.vue";
import About from "@/views/pages/About-pages.vue";
import Endtageam from "@/views/pages/endtageam-pages.vue";
import alltageam from "@/views/pages/Alltaqem-pages.vue";
import Taqem from "@/views/pages/Taqem-pages.vue";
import accountRoutes from "./account.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
const routes = [
  // { path: "/", name: "home", component: Home },
  { path: "/", redirect: "/taqem" },
  { path: "/about", name: "about", component: About },
  { path: "/endtaqem", name: "endtaqem", component: Endtageam },
  { path: "/all", name: "endtaqem", component: alltageam },
  { path: "/taqem", name: "taqem", component: Taqem },
  { ...accountRoutes },
  { ...dashboardRoutes },
  {
    path: "/:pathMatch(.*)*",
    name: "not found",
    component: () => import("@/views/pages/notFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});
export default router;
