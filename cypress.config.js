const { defineConfig } = require("cypress");
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "http://localhost:4173";

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: baseUrl,
  },
  component: {
    specPattern: "cypress/component/**/*.{cy,spec}.{js,ts,jsx,tsx}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
