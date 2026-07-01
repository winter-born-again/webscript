import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 👇 添加这部分配置
  server: {
    port: 5173,
    strictPort: true,  // 强制使用固定端口
    watch: {
      // 忽略 Tauri 编译目录，避免 EBUSY 错误
      ignored: [
        '**/src-tauri/target/**',  // Rust 编译产物
        '**/src-tauri/**/*.dll',   // Windows 动态链接库
        '**/src-tauri/**/*.rlib',  // Rust 库文件
        '**/src-tauri/**/*.exe'    // 编译的可执行文件
      ]
    }
  },
  base: './',  // 确保生产环境资源路径正确
})
