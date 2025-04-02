import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: 'localhost', // Explicitly set the host
  //   port: 5173,       // Default Vite port (can be changed if needed)
  //   hmr: {
  //     host: 'localhost',
  //     port: 5173,     // WebSocket port for HMR
  //     protocol: 'ws', // Use WebSocket (default for local dev)
  //   },
  // }
})
