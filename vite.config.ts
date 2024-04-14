import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        cssMinify: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Extracting component names from the file path
                    const match = RegExp(/src\/components\/([^/]+)\//).exec(id);
                    if (match) {
                        return `components/${match[1]}`;
                    }
                },
            },
        },
    },
    base: "/portfolio/",
});
