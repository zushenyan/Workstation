const merge        = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const {
  js,
  font,
  audio,
  video,
  image,
  extractCss
} = require("./webpack.loaders.js");
const {
  loaderOptions,
  environmentFlags,
  extractText,
  htmlWebpack,
  uglifyJs,
  commonsChunkVendor,
  commonsChunkManifest,
  bundleAnalyzerPlugin,
  offlinePlugin
} = require("./webpack.plugins.js");

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
        js,
        font,
        image,
        audio,
        video,
        extractCss
      ]
    },
    plugins: [
      loaderOptions,
      environmentFlags,
      extractText,
      htmlWebpack,
      uglifyJs,
      commonsChunkVendor,
      commonsChunkManifest,
      bundleAnalyzerPlugin,
      offlinePlugin
    ]
  }
);
