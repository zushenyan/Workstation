const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.js = {
  test:    /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader:  "babel-loader",
  query:   {}
};

exports.video = {
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

exports.image = {
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

exports.font = {
  test:   /\.(woff|woff2|ttf|eot)$/,
  loader: "file-loader",
  query:  {
    name: "[name]-[hash:6].[ext]"
  }
};

exports.audio = {
  test:   /\.(mp4|webm)$/,
  loader: "file-loader",
  query:  {
    name: "[name]-[hash:6].[ext]"
  }
};

exports.css = {
  test:    /\.(css|scss|sass)$/,
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

exports.extractCss = {
  test:    /\.(css|scss|sass)$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [
      {
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]-[local]-[hash:6]"
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  })
};
