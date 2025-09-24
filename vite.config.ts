import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Memory-Card/",
  server: {
    port: 5000,
    open: true,
  },
})
