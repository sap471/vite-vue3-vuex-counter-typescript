import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "../store";

const state = useStore().state;

import NotFound from "../components/NotFound.vue";
import Dashboard from "../pages/Dashboard.vue";

const About = () => import("../pages/About.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    { path: "/", name: "dashboard", component: Dashboard },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;
