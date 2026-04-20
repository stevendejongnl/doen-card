import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/doen-card.ts',
      name: 'DoenCard',
      fileName: 'doen-card',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
    },
    target: 'es2020',
  },
});
