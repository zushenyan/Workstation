const autoprefixer = require("autoprefixer");
const path         = require("path");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist")
  },
  resolve: {
    root:  path.resolve(__dirname),
    alias: {
      "src":         "src",
      "components":  "src/components",
      "constants":   "src/constants",
      "utils":       "src/utils",
      "stylesheets": "src/stylesheets",
      "assets":      "src/assets",
      "images":      "src/assets/images",
      "fonts":       "src/assets/fonts",

      "tests":       "tests",
      "mock-data":   "mock-data",
    },
    extensions: ["", ".js", ".jsx", ".json"]
  },
  postcss: [
    autoprefixer()
  ]
};
