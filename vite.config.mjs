import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
  '/views/index.html': {
    title: 'Main Page',
    currentPage: 'main',
  },
  '/views/test1.html': {
    title: 'Sub Page',
    currentPage: 'about',
  },
};

export default defineConfig({
  root: './', 
  build: {
    outDir: 'views/public',
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'views', 'layers'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
  server: {
    watch: {
      open: true, // Open the browser on server start
      // Enable watching for file changes
      enabled: true,
      // Ignore certain files or patterns
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
});
