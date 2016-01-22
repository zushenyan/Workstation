var path = require("path");
var bourbon = require("node-bourbon").includePaths; // comment this line out if you don't use bourbon.

var babel = {
	test: /\.jsx?$/,
	loader: "babel-loader",
	exclude: /node_modules/,
	query: {
		plugins: ["transform-runtime"]
	}
};

var sass = {
	test: /\.(scss|sass)$/,
	// loaders: ["style-loader", "css-loader", "sass-loader"], // if you don't use bourbon, uncomment this line.
	loader: "style!css!sass?includePaths[]=" + bourbon
};

var file = {
	test: /\.(jpg|png|gif|svg)$/,
	loader: "url-loader",
	query: {
		limit: 10000
	}
};

var font = {
	test: /\.(woffs|woff2|ttf|eot)$/,
	loader: "file-loader"
};

module.exports = {
	debug: true,
	devtool: "inline-source-map",
	entry: [
		path.join(__dirname, "/src/index.js")
	],
	output: {
		path: path.join(__dirname, "/assets"),
		publicPath: "http://localhost:8080/assets/",
		filename: "bundle.js",
	},
	plugins: [],
	module: {
		loaders: [babel, sass, file, font]
	}
};
