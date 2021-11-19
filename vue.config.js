module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'this is a title',
    },
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://121.5.23.189',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}
