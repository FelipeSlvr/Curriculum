import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // Project site on GitHub Pages: felipeslvr.github.io/curriculum
  // IMPORTANT: Path is case-sensitive on GitHub Pages; match your repo name exactly.
  base: "/Curriculum/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
