import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      '4b33f9bc12a5.ngrok-free.app',
      '.ngrok-free.app'
    ]
  }
})
