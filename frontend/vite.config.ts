import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves at /<repo-name>/, so the build sets VITE_BASE. Dev uses "/".
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: { port: Number(process.env.PORT) || 5173, proxy: { "/api": "http://127.0.0.1:8000" } },
});
