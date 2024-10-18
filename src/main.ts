import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupPlugins } from './plugins'
import '@/assets/style/global.scss'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)

  setupPlugins(app)
  // 这一步是等待路由全部挂载完毕 再执行 挂载命令
  await router.isReady()
  app.mount('#app')
}

bootstrap()