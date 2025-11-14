import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite automatically loads .env files — no need for dotenv
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://water-purifier-backend.onrender.com";

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 5050,
        strictPort: true,
        proxy: {
            '/api': {
                target: API_BASE_URL,
                changeOrigin: true,
            },
            '/upload': {
                target: API_BASE_URL,
                changeOrigin: true,
            },
        },
    },
})
