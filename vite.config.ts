import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/reportes-Aws/', // Reemplaza con el nombre exacto de tu repositorio
})