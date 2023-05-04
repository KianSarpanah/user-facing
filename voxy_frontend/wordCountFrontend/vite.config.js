import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true },
  server: {
    port: 3000,
  },
  base: process.env.NODE_ENV === "production" ? "/static/" : "/",
  root: "./src",
  plugins: [reactRefresh()],
});