const merge             = require("webpack-merge");
const commonConfig      = require("./webpack.common.js");
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
  htmlWebpack
} = require("./webpack.plugins.js");

module.exports = merge(
  commonConfig,
  {
    devtool: "inline-source-map",
    module: {
      loaders: [
        js,
        image,
        audio,
        video,
        font,
        extractCss
      ]
    },
    plugins: [
      loaderOptions,
      environmentFlags,
      extractText,
      htmlWebpack
    ]
  }
);
