import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/utils'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias
//   }
// })

// command 表示当前Vite执行的命令 mode 是一个字符串，表示当前Vite的运行模式
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == 'build' // 当前执行的 命令是什么
  const root = process.cwd() // 当前项目文件路径
  const env = parseEnv(loadEnv(mode,root))
  

  return {
    plugins: [vue()],
    resolve: {
      alias
    }
  }
}
