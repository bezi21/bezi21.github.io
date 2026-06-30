import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bezi2121.github.io/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})