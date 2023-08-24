import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
        input: {
            about: './about.html',
            main: './index.html',
        }
    }
  }
})