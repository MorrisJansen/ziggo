module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ziggo/'  // Vervang dit met de naam van je GitHub-repository
    : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
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
