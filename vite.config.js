import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import wabt from 'wabt';

import ViteWabt from './src/index.js';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      fileName: 'index',
      name: 'vite-plugin-wabt',
    },
    rollupOptions: {
      external: ['wabt'],
      output: {globals: {wabt: 'wabt'}},
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [
    new ViteWabt(await wabt())
  ],
  test: {
    projects: [
      {
        extends: './vite.config.js',
        test: {
          include: [
            'src/**/*.test.js',
          ],
          name: 'test',
        },
      },
    ],
  },
});
