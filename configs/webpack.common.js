const path     = require("path");
const { root } = require("./webpack.paths.js");

module.exports = {
  entry: {
    app: ["babel-polyfill", path.resolve(root, "src/index.js")]
  },
  output: {
    path:       path.resolve(root, "dist"),
    publicPath: "./",
    filename:   "[name].js",
    chunkFilename: "[name].js"
  },
  resolve: {
    modules: [
      root,
      "node_modules"
    ],
    alias: {
      "src":         path.resolve(root, "src"),
      "api":         path.resolve(root, "src/api"),
      "components":  path.resolve(root, "src/components"),
      "constants":   path.resolve(root, "src/constants"),
      "routing":     path.resolve(root, "src/routing"),
      "utils":       path.resolve(root, "src/utils"),
      "stylesheets": path.resolve(root, "src/stylesheets"),
      "actions":     path.resolve(root, "src/actions"),
      "reducers":    path.resolve(root, "src/reducers"),
      "containers":  path.resolve(root, "src/containers"),
      "store":       path.resolve(root, "src/store"),
      "sagas":       path.resolve(root, "src/sagas"),

      "assets":      path.resolve(root, "src/assets"),
      "images":      path.resolve(root, "src/assets/images"),
      "fonts":       path.resolve(root, "src/assets/fonts"),
      "audios":      path.resolve(root, "src/assets/audios"),
      "videos":      path.resolve(root, "src/assets/videos"),

      "tests":       path.resolve(root, "tests"),
      "config":      path.resolve(root, "config"),
      "mock-data":   path.resolve(root, "mock-data"),
    },
    extensions: [".js", ".jsx", ".json"]
  }
};
