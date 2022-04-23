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
        target: 'https://jtrslar.com/',
        // target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}
