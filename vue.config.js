const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/andresk-devt.github.io/'
  : '/',
  outputDir: 'dist',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  }
})
