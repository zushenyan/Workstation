const path  = require("path");
const paths = require("./webpack.paths.js");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(paths.src, "index.js")]
  },
  output: {
    path:          paths.dist,
    publicPath:    "./",
    filename:      "[name].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    modules: [
      paths.root,
      "node_modules"
    ],
    alias: paths,
    extensions: [".js", ".jsx", ".json", "scss", "css"]
  }
};
