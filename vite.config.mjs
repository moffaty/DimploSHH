import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const pageData = {
  '/views/index.html': {
    title: 'Main Page',
  },
  '/views/test1.html': {
    title: 'Sub Page',
  },
};

export default defineConfig({
  root: './',
  build: {
    outDir: 'views/public',
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'layers'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
