import { Layout, Index  } from "@/views/dashboard";

export default {
  path: "/dashboard",
  component: Layout,
  children: [
    { path: "", redirect: "/dashboard/index" },
    { path: "index", component: Index },
    // { path: "index2", component: LayoutAuthenticated },
    // { path: "index3", component: LayoutGuest },
    // { path: "register", component: Register },
  ],
};
