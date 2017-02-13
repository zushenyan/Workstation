const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config            = require("./webpack.development.js");
const {
  js,
  font,
  image,
  audio,
  video,
  extractCss
} = require("./webpack.loaders.js");

module.exports = Object.assign(config, {
  devtool: "",
  output: Object.assign(config.output, {
    filename:   "[name]-[chunkhash:6].js",
    chunkFilename: "[name]-[chunkhash:6].js"
  }),
  module: Object.assign(config.module, {
    loaders: [js, font, image, audio, video, extractCss]
  }),
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new ExtractTextPlugin({
      filename:  "[name]-[chunkhash:6].css",
      allChunks: true
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
    // how to seperate 3rd-party lib code from our code
    // https://github.com/webpack/webpack/issues/1315
    // https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab#.t08fegesc
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor.js",
      minChunks: ({resource}) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest.js"
    })
  ]
});
