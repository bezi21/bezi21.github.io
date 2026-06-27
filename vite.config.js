import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bezi2121.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})