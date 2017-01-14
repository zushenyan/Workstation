const webpack      = require("webpack");
const serverConfig = require("./config/server-config");
const config       = require("./webpack.common.js");
const {
  js,
  image,
  file,
  json,
  css
} = require("./webpack.loaders.js");

config.entry.app.unshift(
  `webpack-dev-server/client?${serverConfig.devServerAddress}`,
  "webpack/hot/dev-server"
);

image.query = Object.assign(image.query, {
  name: "[name].[ext]"
});

file.query = Object.assign(file.query, {
  name: "[name].[ext]"
});

module.exports = Object.assign(config, {
  devtool: "#inline-source-map",
  output: Object.assign(config.output, {
    // for resolving css/sass-loader with source map breaks url-loader
    // https://github.com/webpack/css-loader/issues/232
    publicPath: `${serverConfig.devServerAddress}/`,
    filename:   "[name].js"
  }),
  module: {
    loaders: [js, json, image, file, css]
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
