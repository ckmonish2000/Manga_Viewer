import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000
  },
  resolve:{
    alias:{
      "@components":path.resolve(__dirname,"./src/components"),
      "@api":path.resolve(__dirname,"./src/API"),
      "@state":path.resolve(__dirname,"./src/state_management"),
      "@models":path.resolve(__dirname,"./src/models"),
    }
  }
})
