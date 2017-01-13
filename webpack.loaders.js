const js = {
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

const image = {
  test: /\.(jpeg|jpg|png|gif|svg)$/,
  loader: "url-loader",
  query: {
    limit: 10000
  }
};

const font = {
  test: /\.(woff|woff2|ttf|eot)$/,
  loader: "file-loader"
};

const json = {
  test: /\.json$/,
  loader: "json-loader"
};

const css = {
  test: /\.(scss|sass)$/,
  loaders: [
    "style-loader",
    "css-loader?modules",
    "postcss-loader",
    "sass-loader"
  ]
};

module.exports = {
  js,
  image,
  font,
  json,
  css
};
