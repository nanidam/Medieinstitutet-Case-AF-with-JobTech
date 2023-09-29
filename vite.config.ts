import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["@digi/arbetsformedlingen"],
  },
  base: '/case-af-jobtech/',
  plugins: [react()],
})
