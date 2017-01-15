const webpack           = require("webpack");
const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer      = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {
  js,
  image,
  file,
  json,
  extractCss
} = require("./webpack.loaders.js");

module.exports = {
  devtool: "#inline-source-map",
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path:       path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename:   "[name].js"
  },
  module: {
    loaders: [js, json, image, file, extractCss]
  },
  resolve: {
    root:  path.resolve(__dirname),
    alias: {
      "src":         "src",
      "components":  "src/components",
      "constants":   "src/constants",
      "routing":     "src/routing",
      "utils":       "src/utils",
      "stylesheets": "src/stylesheets",
      "assets":      "src/assets",
      "images":      "src/assets/images",
      "fonts":       "src/assets/fonts",

      "tests":       "tests",
      "config":      "config",
      "mock-data":   "mock-data",
    },
    extensions: ["", ".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    })
  ],

  // loaders' settings
  postcss: [
    autoprefixer()
  ]
};
