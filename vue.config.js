const PrerenderSpaPlugin = require("prerender-spa-plugin");
var path = require('path');

module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Freshnhot";
              return args;
          });
  },
  devServer: {
    proxy: 'https://api.freshnhot.kz/'
  },
  configureWebpack: config => {
      if (process.env.NODE_ENV !== 'production') return

      return {
          plugins: [
              new PrerenderSpaPlugin(
                  // Absolute path to compiled SPA
                  path.resolve(__dirname, 'dist'),
                  // List of routes to prerender
                  [ '/', '/about'],
              ),
          ]
      }
  }
}