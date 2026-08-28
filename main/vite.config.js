import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000, // 개발 서버 포트 고정
    open: true, // npm run dev 시 브라우저 자동 실행
  },
  build: {
    outDir: 'dist', // 빌드 결과물 저장 폴더명
  },
})
