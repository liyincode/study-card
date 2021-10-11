// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径代理
  resolve: {
    alias: [
      { find: '/@', replacement: `${pathResolve('src')}/` },
    ]
  }
})
