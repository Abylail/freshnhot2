module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Frechnhot";
              return args;
          })
  },
  devServer: {
    proxy: 'https://api.freshnhot.kz/'
}
}