const webpack          = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config           = require("./webpack.development.js");

const compiler = webpack(config);
const server   = new WebpackDevServer(compiler, {
  hot:        true,
  publicPath: config.output.publicPath,
  stats:      {
    colors:   true,
    progress: true,
    chunks:   false
  }
});

server.listen(8080);
