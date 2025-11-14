import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_BASE_URL = process.env.VITE_API_BASE_URL || 'https://water-purifier-backend.onrender.com'

export default defineConfig({
    plugins: [react()],
    define: {
        __API_BASE_URL__: JSON.stringify(API_BASE_URL), // Optional helper for logging/debugging
    },
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
