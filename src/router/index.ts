import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/AccesibilityResponsiveTableView.vue"),
    },
    {
      path: "/scrollTable",
      name: "scrollTable",
      component: () => import("../views/ScrollTableView.vue"),
    },
  ],
});

export default router;
