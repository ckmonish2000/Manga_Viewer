// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var __vite_injected_original_dirname = "D:\\work\\Playaround\\manga";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 3e3
  },
  resolve: {
    alias: {
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@api": path.resolve(__vite_injected_original_dirname, "./src/API"),
      "@state": path.resolve(__vite_injected_original_dirname, "./src/state_management"),
      "@models": path.resolve(__vite_injected_original_dirname, "./src/models")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrXFxcXFBsYXlhcm91bmRcXFxcbWFuZ2FcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtcXFxcUGxheWFyb3VuZFxcXFxtYW5nYVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29yay9QbGF5YXJvdW5kL21hbmdhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjp7XG4gICAgcG9ydDozMDAwXG4gIH0sXG4gIHJlc29sdmU6e1xuICAgIGFsaWFzOntcbiAgICAgIFwiQGNvbXBvbmVudHNcIjpwYXRoLnJlc29sdmUoX19kaXJuYW1lLFwiLi9zcmMvY29tcG9uZW50c1wiKSxcbiAgICAgIFwiQGFwaVwiOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCIuL3NyYy9BUElcIiksXG4gICAgICBcIkBzdGF0ZVwiOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsXCIuL3NyYy9zdGF0ZV9tYW5hZ2VtZW50XCIpLFxuICAgICAgXCJAbW9kZWxzXCI6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4vc3JjL21vZGVsc1wiKSxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtRLFNBQVMsb0JBQW9CO0FBQy9SLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQU87QUFBQSxJQUNMLE1BQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFRO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixlQUFjLEtBQUssUUFBUSxrQ0FBVSxrQkFBa0I7QUFBQSxNQUN2RCxRQUFPLEtBQUssUUFBUSxrQ0FBVSxXQUFXO0FBQUEsTUFDekMsVUFBUyxLQUFLLFFBQVEsa0NBQVUsd0JBQXdCO0FBQUEsTUFDeEQsV0FBVSxLQUFLLFFBQVEsa0NBQVUsY0FBYztBQUFBLElBQ2pEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==