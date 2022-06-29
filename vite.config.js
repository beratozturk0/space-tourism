const {
  resolve
} = require('path')
const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'destination/index.html'),
        crew: resolve(__dirname, 'crew/index.html'),
        technology: resolve(__dirname, 'technology/index.html'),
      }
    }
  }
})