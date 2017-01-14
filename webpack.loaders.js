const ExtractTextPlugin = require("extract-text-webpack-plugin");

const js = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  "babel-loader",
  query:   {}
};

const image = {
  test:   /\.(jpeg|jpg|png|gif|svg)$/,
  loader: "url-loader",
  query:  {
    limit: 10000
  }
};

const file = {
  test:   /\.(woff|woff2|ttf|eot)$/,
  loader: "file-loader",
  query:  {}
};

const json = {
  test:   /\.json$/,
  loader: "json-loader",
  query:  {}
};

/*
  for development
*/
const css = {
  test:    /\.(scss|sass)$/,
  loaders: [
    "style-loader",
    "css-loader?modules&localIdentName=[name]-[local]-[hash:6]&sourceMap",
    "postcss-loader",
    "sass-loader?sourceMap"
  ]
};

/*
  for production
*/
const extractCss = {
  test:    /\.(scss|sass)$/,
  loader: ExtractTextPlugin.extract("style", "css?modules&localIdentName=[name]-[local]-[hash:6]!postcss!sass")
};

module.exports = {
  js,
  image,
  file,
  json,
  css,
  extractCss
};
