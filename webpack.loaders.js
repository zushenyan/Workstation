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

const sass = {
  test: /\.(scss|sass)$/,
  loader: "style!css!sass"
};

const font = {
  test: /\.(woffs|woff2|ttf|eot)$/,
  loader: "file-loader"
};

module.exports = {
  babel,
  url,
  sass,
  font
};
