import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/OpenFAIRDataAI/',
  // esbuild jsx transform is required by vitest; Vite build uses oxc instead
  esbuild: mode === 'test' ? { jsx: 'automatic' } : {},
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
}))
