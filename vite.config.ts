import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    // alias:{
    //   '@components': path.resolve(__dirname, './src/ui/components'),
    //   '@api': path.resolve(__dirname, './src/api'),
    //   '@pages': path.resolve(__dirname, './src/ui/pages'),
    //   '@utils': path.resolve(__dirname, './src/utils'),
    // }
    alias:[
      { find: '@components', replacement: path.resolve(__dirname,'./src/ui/components') },
      { find: '@api', replacement: path.resolve(__dirname,'./src/api') },
      { find: '@pages', replacement: path.resolve(__dirname,'./src/ui/pages') },
      { find: '@utils', replacement: path.resolve(__dirname,'./src/utils') },
    ]
    
  },
  define: {
    'process.env': {}, // Define a fallback for `process.env`
  },
  plugins: [react(),tsconfigPaths()],
})
