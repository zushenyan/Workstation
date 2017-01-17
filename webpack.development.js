const webpack           = require("webpack");
const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer      = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {
  js,
  url,
  file,
  json,
  extractCss
} = require("./webpack.loaders.js");

module.exports = {
  devtool: "eval",
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path:       path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename:   "[name].js"
  },
  module: {
    loaders: [js, json, url, file, extractCss]
  },
  resolve: {
    root:  path.resolve(__dirname),
    alias: {
      "src":         "src",
      "api":         "src/api",
      "components":  "src/components",
      "constants":   "src/constants",
      "routing":     "src/routing",
      "utils":       "src/utils",
      "stylesheets": "src/stylesheets",
      "actions":     "src/actions",
      "reducers":    "src/reducers",
      "containers":  "src/containers",
      "store":       "src/store",
      "sagas":       "src/sagas",

      "assets":      "src/assets",
      "images":      "src/assets/images",
      "fonts":       "src/assets/fonts",
      "audios":      "src/assets/audios",
      "videos":      "src/assets/videos",

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
