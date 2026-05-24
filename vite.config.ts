import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      remotes: {
        // The key matches the 'name' in your header config, and the URL matches port 4321
        headerMFE: "http://localhost:4321/assets/remoteEntry.js",
        footerMFE: "http://localhost:4322/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: { target: "esnext" },
  server: { port: 5173 },
});
