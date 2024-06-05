import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
    build: {
        rollupOptions: {
            external: [
                'C:/Users/YASH MEHTA/Desktop/Ecommerce website/frontend/src/App.css',
            ],
        },
    },
};