const webpack          = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config           = require("./webpack.development.js");

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
config.plugins.push( new webpack.HotModuleReplacementPlugin() );

const compiler = webpack(config);
const server   = new WebpackDevServer(compiler, {
  hot:        true,
  publicPath: config.output.publicPath,
  stats:      {
    colors:   true,
    progress: true
  }
});

server.listen(8080);
