const webpack              = require("webpack");
const HtmlWebpackPlugin    = require("html-webpack-plugin");
const ExtractTextPlugin    = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const OfflinePlugin        = require("offline-plugin");
const paths                = require("./webpack.paths.js");

exports.loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: paths.root
  }
});

exports.environmentFlags = new webpack.DefinePlugin({
  "process.env": {
    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }
});

exports.uglifyJs = new webpack.optimize.UglifyJsPlugin({
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
exports.commonsChunkVendor = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor.js",
  minChunks: ({resource}) => /node_modules/.test(resource)
});

exports.commonsChunkManifest = new webpack.optimize.CommonsChunkPlugin({
  name: "manifest.js"
});

exports.extractText = (() => {
  const config = {
    filename:  "[name].css",
    allChunks: true
  };
  if(process.env.NODE_ENV === "production"){
    config.filename = "[name]-[chunkhash:6].css";
  }
  return new ExtractTextPlugin(config);
})();

exports.htmlWebpack = new HtmlWebpackPlugin({
  template: `${paths.src}/index.ejs`
});

exports.hotModuleReplacement = new webpack.HotModuleReplacementPlugin();
exports.noEmitOnErrors       = new webpack.NoEmitOnErrorsPlugin();
exports.bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
exports.offlinePlugin        = new OfflinePlugin();
