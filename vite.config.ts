import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  base: '/apps/vite-shadcn-starter',
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-ts-files-as-tsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.ts$/ }, async (args) => ({
              loader: 'tsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
      loader: {
        '.ts': 'tsx',
      },
    },
  },
}));
