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

      // 表示已经登录了不能访问登录页从哪来回哪去
      if(this.isGuestCheck(to,token) === false) return from
    })
  }

  // 是否需要登录验证token的
  private isAuthCheck(route: RouteLocationNormalized, token: any) {
    // 这个判断式表达的就是 如果没有设置 或是设置的位false 则不需要验证返回true
    // 如果 设置了 并且设置位 true 那就要检查是否含有token 
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }

  // 登录以后含有token 进行登录页访问限制
  private isGuestCheck(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
