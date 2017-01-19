const ExtractTextPlugin = require("extract-text-webpack-plugin");

const js = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  "babel-loader",
  query:   {}
};

const video = {
  test:   /\.(mp3|ogg)$/,
  loaders: [
    {
      loader: "url-loader",
      query: {
        limit: 10000,
        name:  "[name]-[hash:6].[ext]"
      }
    }
  ]
};

const image = {
  test: /.(jpeg|jpg|png|gif|svg)$/,
  loaders: [
    {
      loader: "url-loader",
      query: {
        limit: 10000,
        name:  "[name]-[hash:6].[ext]"
      }
    },
    {
      loader: "image-webpack-loader",
      query: {
        optimizationLevel: 7,
        interlaced:        false,
        pngquant:          {
          quality: "65-90",
          speed:   4
        }
      }
    }
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

const css = {
  test:    /\.(scss|sass)$/,
  loaders: [
    "style-loader",
    {
      loader: "css-loader",
      query: {
        modules:        true,
        sourceMap:      true,
        localIdentName: "[name]-[local]-[hash:6]",
      }
    },
    "postcss-loader",
    {
      loader: "sass-loader",
      query: {
        sourceMap: true
      }
    }
  ]
};

const extractCss = {
  test:    /\.(scss|sass)$/,
  loader: ExtractTextPlugin.extract({
    fallbackLoader: "style-loader",
    loader:         "css-loader?modules&localIdentName=[name]-[local]-[hash:6]!postcss-loader!sass-loader"
  })
};

module.exports = {
  js,
  video,
  image,
  font,
  audio,
  css,
  extractCss
};
