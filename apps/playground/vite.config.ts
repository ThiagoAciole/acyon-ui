import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Aponta para o source da lib local para hot reload durante dev
      '@aciole/labs': path.resolve(__dirname, '../../packages/labs/src/index.ts'),
      '/src/icons': path.resolve(__dirname, '../../packages/labs/src/icons'),
    },
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..']
    }
  },
})
