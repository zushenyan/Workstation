const webpack = require("webpack");
const config  = require("./webpack.common.js");
const {
  js,
  image,
  font,
  json,
  css
} = require("./webpack.loaders.js");

font.query = {
  name: "[name]-[hash:6].[ext]"
};

module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    publicPath: "./",
    filename:   "[name]-[hash:6].js"
  }),
  module: {
    loaders: [js, json, image, font, css]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]
});
