const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config            = require("./webpack.development.js");
const serverConfig      = require("./config/server-config");
const {
  js,
  font,
  image,
  audio,
  video,
  css
} = require("./webpack.loaders.js");

config.entry.app.unshift(
  `webpack-dev-server/client?${serverConfig.devServerAddress}`,
  "webpack/hot/dev-server"
);

module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    // for resolving css/sass-loader with source map breaks url-loader
    // https://github.com/webpack/css-loader/issues/232
    publicPath: `${serverConfig.devServerAddress}/`
  }),
  module: {
    loaders: [js, image, audio, video, font, css]
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
    new HtmlWebpackPlugin({
      template: "./src/index.ejs"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
