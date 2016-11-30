const webpack = require("webpack");
const config  = require("./webpack.config.js");

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    }
  }),

  new webpack.optimize.DedupePlugin()
]);

module.exports = config;
