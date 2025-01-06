import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1536,
    env: {
      mobileViewportWidthBreakpoint: 1280,
    },
  },
});
