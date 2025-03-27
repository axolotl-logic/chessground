import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: 'tests/setup.ts',
    coverage: {
      reportsDirectory: './coverage',
      provider: 'istanbul',
    },
  },
});
