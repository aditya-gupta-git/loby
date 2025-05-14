import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  resolve: {
    alias: {
      '@data': '/src/Data', 
    },
  },
  plugins: [
    tailwindcss(),
  ],
})