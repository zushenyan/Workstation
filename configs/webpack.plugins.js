const webpack           = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path              = require("path");
const { root }          = require("./webpack.paths.js");

const loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: root
  }
});

const environmentFlags = new webpack.DefinePlugin({
  "process.env": {
    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false
  },
  compress: {
    warnings:     false,
    drop_console: true
  }
});

// how to seperate 3rd-party lib code from our code
// https://github.com/webpack/webpack/issues/1315
// https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab#.t08fegesc
const commonsChunkVendor = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor.js",
  minChunks: ({resource}) => /node_modules/.test(resource)
});

const commonsChunkManifest = new webpack.optimize.CommonsChunkPlugin({
  name: "manifest.js"
});

const extractText = (() => {
  const config = {
    filename:  "[name].css",
    allChunks: true
  };
  if(process.env.NODE_ENV === "production"){
    config.filename = "[name]-[chunkhash:6].css";
  }
  return new ExtractTextPlugin(config);
})();

const htmlWebpack = new HtmlWebpackPlugin({
  template: path.resolve(root, "src/index.ejs")
});

const hotModuleReplacement   = new webpack.HotModuleReplacementPlugin();
const noEmitOnErrors         = new webpack.NoEmitOnErrorsPlugin();

module.exports = {
  loaderOptions,
  environmentFlags,
  uglifyJs,
  commonsChunkVendor,
  commonsChunkManifest,
  extractText,
  htmlWebpack,
  hotModuleReplacement,
  noEmitOnErrors
};
