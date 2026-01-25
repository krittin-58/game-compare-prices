const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json']
    }
  },
  chainWebpack: config => {
    // Make TypeScript checker less strict to allow Vue 2.7 type compatibility issues
    config.plugin('fork-ts-checker').tap(args => {
      args[0].typescript = args[0].typescript || {}
      args[0].typescript.diagnosticOptions = {
        semantic: true,
        syntactic: false
      }
      args[0].typescript.configOverwrite = {
        skipLibCheck: true,
        skipDefaultLibCheck: true
      }
      return args
    })
  }
})