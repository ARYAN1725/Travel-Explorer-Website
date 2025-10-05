import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // 👈 ensures correct path resolution in production
  optimizeDeps: {
    include: ['react-router-dom']
  },
  build: {
    outDir: 'dist', // 👈 make sure build output goes to /dist
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  server: {
    port: 5173,  // optional, for local dev consistency
  }
})
