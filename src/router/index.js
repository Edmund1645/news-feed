import { createRouter, createWebHistory } from "vue-router";

import HomePage from "views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/post/new",
      component: () => import("views/posts/NewPost.vue"),
    },
    {
      path: "/post/:id",
      component: () => import("views/posts/PostDetails.vue"),
    },
    {
      path: "/post/:id/edit",
      component: () => import("views/posts/EditPost.vue"),
    },
    {
      path: "/explore",
      component: () => import("views/ExplorePage.vue"),
    },
    {
      path: "/profile",
      component: () => import("views/ProfilePage.vue"),
    },
  ],
});

export default router;
