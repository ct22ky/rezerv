/** @format */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Поддержка HMR через Ngrok
    },
    allowedHosts: [
      'bccf-109-87-190-0.ngrok-free.app', // Замени на свой Ngrok-домен
    ],
  },
});