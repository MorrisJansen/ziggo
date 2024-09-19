module.exports = {
  publicPath: '/ziggo/',
  outputDir: 'dist',
  // assetsDir: 'assets',
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:8080',
  },

  configureWebpack: {
    optimization: {
      minimize: false
    }
  }
};