import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import layoutRouters from './autoload'
import Guard from './guard'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[...routes,...layoutRouters]
})

export function setupRouter(app: App) {
  Guard(router)
  app.use(router)
}

export default router
