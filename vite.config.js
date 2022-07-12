import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://carl115.github.io/deporst-api/',
  plugins: [react()]
})
