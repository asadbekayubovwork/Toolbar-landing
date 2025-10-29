import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PIndex.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PAboutUs.vue"),
  },
  {
    path: "/developers",
    name: "Developers",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PDevelopers.vue"),
  },
  {
    path: "/products/agents",
    name: "Agents",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./products/PAgents.vue"),
  },
  {
    path: "/products/models",
    name: "Models",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./products/PModels.vue"),
  },
  {
    path: "/contact-us",
    name: "Contact",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PContact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      layout: "EmptyLayout",
    },
    component: () => import("./PError.vue"),
  },
  {
    path: "/blogs",
    name: "Blog",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PBlogs.vue"),
  },
  // {
  //   path: "/blog/:id",
  //   name: "BlogPost",
  //   meta: {
  //     layout: "DefaultLayout",
  //   },
  //   component: () => import("./PBlogsPost.vue"),
  // },
  {
    path: "/pricing",
    name: "Pricing",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("./PPricing.vue"),
  },
]

export { routes }
