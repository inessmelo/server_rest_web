const { defineConfig } = require('Cypress')

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    
  },
})