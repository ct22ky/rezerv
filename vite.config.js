/** @format */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rezerv/", // <-- Оставляем, если нужно
  server: {
    host: true, // <-- Дает доступ извне (нужно для Ngrok)
    port: 5173, // <-- Убедись, что используешь правильный порт
    strictPort: true, // <-- Устанавливает фиксированный порт
    cors: true, // <-- Включает CORS (если нужны API-запросы)
  },
});
