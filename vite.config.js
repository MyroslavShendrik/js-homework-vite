import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/hw-js-vite/',
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./**/*.html', {
        ignore: ['**/node_modules/**', '**/test/**', '**/dist/**']
      }),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/*.html'])],
});
