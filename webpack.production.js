const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config            = require("./webpack.common.js");
const {
  js,
  image,
  font,
  json,
  extractCss
} = require("./webpack.loaders.js");

image.query = Object.assign(image.query, {
  name: "[name]-[hash:6].[ext]"
});

font.query = Object.assign(font.query, {
  name: "[name]-[hash:6].[ext]"
});

module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    publicPath: "./",
    filename:   "[name]-[hash:6].js"
  }),
  module: {
    loaders: [js, json, image, font, extractCss]
  },
  plugins: [
    // misc optimization
    new HtmlWebpackPlugin({
      template: "template.ejs"
    }),
    new ExtractTextPlugin("[name]-[hash:6].css"),

    // general optmization
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons"
    })
  ]
});
