module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ziggo/' : '/',
  configureWebpack: {
    optimization: {
      minimize: false
    }
  }};
