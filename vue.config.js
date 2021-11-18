module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'this is a title',
    },
  },

  devServer: {
    proxy: {
      '/file': {
        target: 'http://121.5.23.189:8010',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/file': '/file',
        },
      },
    },
  },
}
