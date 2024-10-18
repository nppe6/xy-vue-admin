import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to, from) => {
      let token = store.get('token')?.token
      // to 里面会匹配到 当前路由和子路由
      console.log(to.meta)
      // 对当前的路由进行登录验证
      if (this.isAuthCheck(to, token) === false) return {  name: 'login' }
    })
  }

  private isAuthCheck(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
