import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router'

// 获取文件路径
const layouts = import.meta.glob('@/layouts/*.vue', {
  eager: true,
  import: 'default'
})

const views = import.meta.glob('@/views/**/*.vue', {
  eager: true,
  import: 'default'
})

// 提取顶级路由 layouts 文件目录下路由
function getRouter() {
  const layoutRouter = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    // console.log(file,model);
    const route = getRouterModel(file, module)
    route.children = getChildrenRouter(route)
    layoutRouter.push(route)
  })

  return layoutRouter
}

// 提取子路由
function getChildrenRouter(layoutRouter: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file,module])=>{
    // console.log(file,module);
    if(file.includes(`/src/views/${layoutRouter.name as string}`)){
      const route = getRouterModel(file,module)
      
      routes.push(route)
    }
    
  })
  return routes
}

// 实际提取路由函数方法
function getRouterModel(file: string, module: any) {
  const name = file.replace(/.+src\/layouts\/|.+views\/|.vue/gi, '')
  // console.log(name)
  const route = {
    path: `/${name}`,
    name: name.replace('/', '-'),
    component: module
  } as RouteRecordRaw

  return Object.assign(route,module?.route)
}

const router = env.VITE_ROUTER_AUTOLOAD ? getRouter() : [] as RouteRecordRaw[]
export default router
