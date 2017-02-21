const merge        = require("webpack-merge");
const serverConfig = require("./server-config.js");
const commonConfig = require("./webpack.common.js");
const loaders      = require("./webpack.loaders.js");
const plugins      = require("./webpack.plugins.js");

commonConfig.entry.app.unshift(
  `webpack-dev-server/client?${serverConfig.devServerAddress}`,
  "webpack/hot/only-dev-server"
);

module.exports = merge(
  commonConfig,
  {
    output: {
      // for resolving css/sass-loader with source map breaks url-loader
      // https://github.com/webpack/css-loader/issues/232
      publicPath: `${serverConfig.devServerAddress}/`
    },
    module: {
      loaders: [
        loaders.js,
        loaders.image,
        loaders.audio,
        loaders.video,
        loaders.font,
        loaders.css
      ]
    },
    plugins: [
      plugins.loaderOptions,
      plugins.environmentVariables,
      plugins.htmlWebpack,
      plugins.hotModuleReplacement,
      plugins.noEmitOnErrors
    ]
  }
);
