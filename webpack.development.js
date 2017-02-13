const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path              = require("path");
const {
  js,
  font,
  audio,
  video,
  image,
  extractCss
} = require("./webpack.loaders.js");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path:       path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename:   "[name].js",
    chunkFilename: "[name].js"
  },
  module: {
    loaders: [js, image, audio, video, font, extractCss]
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      "node_modules"
    ],
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
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new ExtractTextPlugin({
      filename:  "[name].css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    })
  ]
};
