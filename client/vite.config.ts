import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'ESNext',
  },
  plugins: [react()],
  server: {
    open: true,
    port: 8000,
  },
})
