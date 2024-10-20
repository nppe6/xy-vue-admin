import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from './mock'
import { setupElement } from './elementui'

export function setupPlugins(isBuild: boolean,env: ViteEnv){
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugin(isBuild))
  plugins.push(setupElement())
  return plugins
}