import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from './mock'

export function setupPlugins(isBuild: boolean,env: ViteEnv){
  const plugins: Plugin[] = [vue()]

  plugins.push(setupMockPlugin(isBuild))
  return plugins
}