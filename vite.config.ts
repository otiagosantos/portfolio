import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://otiagosantos.github.io/portfolio/",
  plugins: [react()],
  build: {
    outDir: 'build'
  }
})
