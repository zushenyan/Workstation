const merge        = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const loaders      = require("./webpack.loaders.js");
const plugins      = require("./webpack.plugins.js");

module.exports = merge(
  commonConfig,
  {
    devtool: "",
    output: {
      filename:      "[name]-[chunkhash:6].js",
      chunkFilename: "[name]-[chunkhash:6].js"
    },
    module: {
      loaders: [
        loaders.js,
        loaders.font,
        loaders.image,
        loaders.audio,
        loaders.video,
        loaders.extractCss
      ]
    },
    plugins: [
      plugins.loaderOptions,
      plugins.environmentFlags,
      plugins.extractText,
      plugins.htmlWebpack,
      plugins.uglifyJs,
      plugins.commonsChunkVendor,
      plugins.commonsChunkManifest,
      plugins.bundleAnalyzerPlugin,
      plugins.offlinePlugin
    ]
  }
);
