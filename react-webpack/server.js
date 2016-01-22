var path = require("path");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");

var PORT = 8080;

config.entry.push("webpack-dev-server/client?http://localhost:" + PORT, "webpack/hot/only-dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
	hot: true,
	quiet: false,
	noInfo: false,
	publicPath: config.output.publicPath,
	stats: { colors: true }
});

server.listen(PORT, function(){
	console.log("listening on " + PORT + "...");
});
