// src/app/providers/router.ts
import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/pages"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

// Implement authentication logic
// router.beforeEach((to, from, next) => {
// })

export { router }
