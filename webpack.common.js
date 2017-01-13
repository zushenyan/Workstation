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
      "src":        "src",
      "components": "src/components",
      "constants":  "src/constants",
      "utils":      "src/utils",

      "tests":       "tests",
      "images":      "images",
      "fonts":       "fonts",
      "stylesheets": "stylesheets",
      "mock-data":   "mock-data",
    },
    extensions: ["", ".js", ".jsx", ".json"]
  },
  postcss: [
    autoprefixer()
  ]
};
