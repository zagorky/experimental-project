import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vitest/config';
import config from './vite.config';
import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';

export default mergeConfig(
  config,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './vitest.setupTests.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json-summary'],
        reportsDirectory: './coverage',
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['node_modules/**'],
        all: true,
      },
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  }),
);
