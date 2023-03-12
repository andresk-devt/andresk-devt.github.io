module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/andresk-devt.github.io/'
    : '/',
  transpileDependencies: true,

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
}
