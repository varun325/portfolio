import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

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
                    const match = /src\/components\/(.*)/.exec(id);
                    if (match) {
                        // If file is inside the components directory
                        let chunkName = match[1];
                        // Remove file extensions
                        chunkName = chunkName.replace(/\.(jsx?|tsx?|js?|ts?)$/, "");
                        return `components/${chunkName}`;
                    }
                },
            },
        },
    },
    base: "/portfolio/",
});
