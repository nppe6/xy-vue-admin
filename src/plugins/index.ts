import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from 'lodash'


export function setupPlugins(app:App){
  setupTailwindcss()
  autoRegisterComponent(app)
}

// 原则上来说 就是拿到文件路径名 然后提取出文件名 通过文件名 去进行遍历注册组件 这样就达到了自动注册的目的
export function autoRegisterComponent(app: App){
  const component = import.meta.glob('@/components/form/*.vue',{ eager: true, import: 'default'})
  Object.keys(component).forEach((key)=>{
    const name = key.split('/').pop()?.split('.')[0] as string
    
    app.component(_.camelCase(name),component[key] || {})
  })
}