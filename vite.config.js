// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径代理
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
})
