const merge        = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const loaders      = require("./webpack.loaders.js");
const plugins      = require("./webpack.plugins.js");

module.exports = merge(
  commonConfig,
  {
    devtool: "inline-source-map",
    module: {
      loaders: [
        loaders.js,
        loaders.image,
        loaders.audio,
        loaders.video,
        loaders.font,
        loaders.extractCss
      ]
    },
    plugins: [
      plugins.loaderOptions,
      plugins.environmentVariables,
      plugins.extractText,
      plugins.htmlWebpack
    ]
  }
);
