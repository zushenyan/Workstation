const merge             = require("webpack-merge");
const serverConfig      = require("./server-config.js");
const commonConfig      = require("./webpack.common.js");
const {
  js,
  font,
  audio,
  video,
  image,
  css
} = require("./webpack.loaders.js");
const {
  loaderOptions,
  environmentFlags,
  htmlWebpack,
  hotModuleReplacement,
  noEmitOnErrors
} = require("./webpack.plugins.js");

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
        js,
        image,
        audio,
        video,
        font,
        css
      ]
    },
    plugins: [
      loaderOptions,
      environmentFlags,
      htmlWebpack,
      hotModuleReplacement,
      noEmitOnErrors
    ]
  }
);
