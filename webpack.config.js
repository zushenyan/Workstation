const autoprefixer = require("autoprefixer");
const path         = require("path");
const {
  babel,
  url,
  font,
  style,
  css,
  postcss,
  sass
} = require("./webpack.loaders.js");

module.exports = {
  devtool: "#inline-source-map",
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path:       path.resolve(__dirname, "./assets"),
    publicPath: "/temp/",
    filename:   "bundle.js"
  },
  plugins: [],
  module: {
    loaders: [babel, url, style, css, postcss, sass, font]
  },
  postcss: [
    autoprefixer()
  ]
};
