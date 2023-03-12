// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/Backlog",
    name: "Backlog",
    component: () => import("@/views/Backlog/Backlog.vue"),
  },
  {
    path: "/EditProject/:id",
    name: "EditProject",
    props: true,
    component: () => import("@/views/Backlog/EditProject.vue"),
  },
  {
    path: "/PiOverview",
    name: "PiOverview",
    component: () => import("@/views/PIPlan/PiOverview.vue"),
  },
  {
    path: "/EditPi/:id",
    name: "EditPi",
    props: true,
    component: () => import("@/views/PIPlan/EditPi.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
