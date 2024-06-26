import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const musicName = 'Bee Music';
const musicGenre = 'Synth Wave';

const albums =
  [
    {
      "id": "1",
      "image": "public/img/portfolio/album1.jpg",
      "title": "Threads",
      "date": "2024"
    },
    {
      "id": "2",
      "image": "public/img/portfolio/album2.jpg",
      "title": "Explore",
      "date": "2016"
    },
    {
      "id": "3",
      "image": "public/img/portfolio/album3.jpg",
      "title": "Finish",
      "date": "2020"
    }
  ]

const pageData = {
  '/views/index.html': {
    title: 'Main Page',
    currentPage: 'main',
    musicName,
    musicGenre,
    albums,
  },
  '/views/test1.html': {
    title: 'Sub Page',
    currentPage: 'about',
  },
};

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
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
