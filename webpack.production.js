const webpack           = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config            = require("./webpack.common.js");
const {
  js,
  image,
  file,
  json,
  extractCss
} = require("./webpack.loaders.js");

image.query = Object.assign(image.query, {
  name: "[name]-[hash:6].[ext]"
});

file.query = Object.assign(file.query, {
  name: "[name]-[hash:6].[ext]"
});

module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    publicPath: "./",
    filename:   "[name]-[chunkhash:6].js"
  }),
  module: {
    loaders: [js, json, image, file, extractCss]
  },
  plugins: config.plugins.concat([
    // misc optimization
    new ExtractTextPlugin("[name]-[chunkhash:6].css"),

    // general optmization
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
        warnings:     false,
        drop_console: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["manifest", "vendor"],
      minChunks: ({resource}) => /node_modules/.test(resource)
    })
  ])
});
