import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Keep the original file structure
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
