import { createRouter, createWebHistory } from "vue-router";

import AppHomePage from "./pages/AppHomePage.vue";
import ProjectDetailPage from "./pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),

  linkActiveClass: "active",
  linkExactActiveClass: "",
  routes: [
    {
      path: "/",
      name: "Home",
      component: AppHomePage,
    },

    {
      path: "/project/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
});
export { router };
