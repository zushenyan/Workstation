const webpack = require("webpack");
const config  = require("./webpack.common.js");
const {
  js,
  image,
  font,
  json,
  css
} = require("./webpack.loaders.js");

config.entry.app.unshift(
  "webpack-dev-server/client?http://localhost:8080/",
  "webpack/hot/dev-server"
);

module.exports = Object.assign(config, {
  devtool: "#inline-source-map",
  output: Object.assign(config.output, {
    // publicPath: "/dev-hot/",
    publicPath: "/",
    filename:   "[name].js"
  }),
  module: {
    loaders: [js, json, image, font, css]
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
});
