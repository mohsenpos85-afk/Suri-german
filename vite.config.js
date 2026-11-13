import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Route the app's JSX runtime through a wrapper that renders emoji as line icons.
// Files inside src/emoji/ import the real runtime.
const emojiRuntime = () => {
  const shim = (n) => fileURLToPath(new URL(`./src/emoji/${n}.js`, import.meta.url))
  const inShim = (id) => !!id && id.replace(/\\/g, '/').includes('/src/emoji/')
  return {
    name: 'suri-emoji-runtime',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source !== 'react/jsx-runtime' && source !== 'react/jsx-dev-runtime') return null
      if (inShim(importer)) return null
      return shim(source === 'react/jsx-runtime' ? 'jsx-runtime' : 'jsx-dev-runtime')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [emojiRuntime(), react()],
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
      clientFiles: ['./src/App.jsx', './src/data/journey.js'],
    },
  },
})
