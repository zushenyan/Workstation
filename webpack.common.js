const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer      = require("autoprefixer");
const path              = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist")
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
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    }),
  ],

  // loaders' settings
  postcss: [
    autoprefixer()
  ]
};
