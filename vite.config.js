import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-mentor-time-tracking-dashboard/',
  plugins: [react()],
});
