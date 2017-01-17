const ExtractTextPlugin = require("extract-text-webpack-plugin");

const js = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  "babel-loader",
  query:   {}
};

const video = {
  test:   /\.(mp3|ogg)$/,
  loader: "url-loader",
  query:  {
    limit: 10000,
    name: "[name]-[hash:6].[ext]"
  }
};

const image = {
  test: /.(jpeg|jpg|png|gif|svg)$/,
  loaders: [
    "url-loader?limit=10000&name=[name]-[hash:6].[ext]",
    "image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: '65-90', speed: 4}, mozjpeg: {quality: 65}}"
  ]
};

const font = {
  test:   /\.(woff|woff2|ttf|eot)$/,
  loader: "file-loader",
  query:  {
    name: "[name]-[hash:6].[ext]"
  }
};

const audio = {
  test:   /\.(mp4|webm)$/,
  loader: "file-loader",
  query:  {
    name: "[name]-[hash:6].[ext]"
  }
};

const json = {
  test:   /\.json$/,
  loader: "json-loader",
  query:  {}
};

const css = {
  test:    /\.(scss|sass)$/,
  loaders: [
    "style-loader",
    "css-loader?modules&localIdentName=[name]-[local]-[hash:6]&sourceMap",
    "postcss-loader",
    "sass-loader?sourceMap"
  ]
};

const extractCss = {
  test:    /\.(scss|sass)$/,
  loader: ExtractTextPlugin.extract("style", "css?modules&localIdentName=[name]-[local]-[hash:6]!postcss!sass")
};

module.exports = {
  js,
  video,
  image,
  font,
  audio,
  json,
  css,
  extractCss
};
