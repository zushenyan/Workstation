const babel = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

const url = {
  test: /\.(jpg|png|gif|svg)$/,
  loader: "url-loader",
  query: {
    limit: 10000
  }
};

const font = {
  test: /\.(woffs|woff2|ttf|eot)$/,
  loader: "file-loader"
};

const json = {
  test: /\.json$/,
  loader: "json-loader"
};

const style = {
  test: /\.(scss|sass)$/,
  loader: "style-loader"
};

const css = {
  test: /\.(scss|sass)$/,
  loader: "css-loader"
};

const postcss = {
  test: /\.(scss|sass)$/,
  loader: "postcss-loader"
};

const sass = {
  test: /\.(scss|sass)$/,
  loader: "sass-loader"
};

module.exports = {
  babel,
  url,
  font,
  json,
  style,
  css,
  postcss,
  sass
};
