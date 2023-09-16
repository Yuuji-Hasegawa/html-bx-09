import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: 'src',
  build: {
    emptyOutDir: false,
    outDir: '../dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
      output: {
        entryFileNames: `js/app.js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp|avif| )$/.test(assetInfo.name)) {
            return 'img/[name].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'css/style.css';
          }
          return '[name].[ext]';
        },
      },
    },
    minify: "terser",
		terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
