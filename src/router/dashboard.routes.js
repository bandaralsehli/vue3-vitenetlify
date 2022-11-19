import { Layout, Index ,QR } from "@/views/dashboard";

export default {
  path: "/dashboard",
  name: "dashboard",
  component: Layout,
  children: [
    { path: "", redirect: "/dashboard/index" },
    { path: "index", component: Index },
    { path: "qr", component: QR },
    // { path: "index2", component: LayoutAuthenticated },
    // { path: "index3", component: LayoutGuest },
    // { path: "register", component: Register },
  ],
};
