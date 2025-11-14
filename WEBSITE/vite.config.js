import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// Load .env file into process.env
dotenv.config()

// Read from process.env (works in Node)
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://water-purifier-backend.onrender.com'

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
