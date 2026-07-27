import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules') && !id.includes('src/data/')) return;
          // Split heavy per-level content data into their own cacheable chunks
          if (id.includes('src/data/lessons')) return 'data-lessons';
          if (id.includes('src/data/grammar')) return 'data-grammar';
          if (id.includes('src/data/verbs')) return 'data-verbs';
          if (id.includes('src/data/flashcards')) return 'data-flashcards';
          if (id.includes('src/data/lidData')) return 'data-lid';
          if (id.includes('src/data/ubung')) return 'data-ubung';
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@supabase')) return 'vendor-supabase';
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    strictPort: false,
    proxy: {
      '/api/anthropic': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
      },
    },
    warmup: {
      clientFiles: ['./src/App.jsx', './src/storiesData.js'],
    },
  },
})
