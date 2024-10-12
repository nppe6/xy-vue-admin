import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from 'lodash'


export function setupPlugins(app:App){
  setupTailwindcss()
  autoRegisterComponent(app)
}

export function autoRegisterComponent(app: App){
  const component = import.meta.glob('@/components/form/*.vue',{ eager: true, import: 'default'})
  Object.keys(component).forEach((key)=>{
    const name = key.split('/').pop()?.split('.')[0] as string
    
    app.component(_.camelCase(name),component[key] || {})
  })
}