const webpack = require("webpack");
const config  = require("./webpack.common.js");
const {
  js,
  image,
  font,
  json,
  css
} = require("./webpack.loaders.js");

module.exports = Object.assign(config, {
  devtool: "#inline-source-map",
  output: Object.assign(config.output, {
    publicPath: "/dev-hot/",
    filename:   "[name].js"
  }),
  module: {
    loaders: [js, json, image, font, css]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    })
  ]
});
