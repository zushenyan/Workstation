const webpack           = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config            = require("./webpack.development.js");
const {
  js,
  image,
  audio,
  video,
  font,
  json,
  extractCss
} = require("./webpack.loaders.js");

module.exports = Object.assign(config, {
  devtool: "",
  output: Object.assign(config.output, {
    filename:   "[name]-[chunkhash:6].js"
  }),
  module: Object.assign(config.module, {
    loaders: [js, json, image, audio, video, font, extractCss]
  }),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("[name]-[chunkhash:6].css"),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
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
      // the first one is manifest js file for webpack runtime code.
      // the second one is the actual common vendor code for sharing among all entries.
      // https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab#.f1u14l20q
      names: ["manifest", "vendor"],
      minChunks: ({resource}) => /node_modules/.test(resource)
    })
  ]
});
