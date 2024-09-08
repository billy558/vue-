import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "home",
        component: () => import("../views/home/home.vue"),
      },

      {
        path: "article",
        component: () => import("../views/article/index.vue"),
      },
      {
        path: "father",
        component: () => import("../views/father/father.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/my",
    component: () => import("../views/my/index.vue"),
  },
  {
    path: "/regisn",
    component: () => import("../views/regisn/index.vue"),
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
