const path = require("path");

const root   = path.resolve(__dirname, "..");
const src    = path.resolve(root, "src");
const assets = path.resolve(src, "assets");

module.exports = {
  "src":         src,
  "api":         path.resolve(src, "api"),
  "components":  path.resolve(src, "components"),
  "constants":   path.resolve(src, "constants"),
  "routing":     path.resolve(src, "routing"),
  "utils":       path.resolve(src, "utils"),
  "stylesheets": path.resolve(src, "stylesheets"),
  "actions":     path.resolve(src, "actions"),
  "reducers":    path.resolve(src, "reducers"),
  "containers":  path.resolve(src, "containers"),
  "store":       path.resolve(src, "store"),
  "sagas":       path.resolve(src, "sagas"),

  "assets":      assets,
  "images":      path.resolve(assets, "images"),
  "fonts":       path.resolve(assets, "fonts"),
  "audios":      path.resolve(assets, "audios"),
  "videos":      path.resolve(assets, "videos"),

  "root":        root,
  "dist":        path.resolve(root, "dist"),
  "tests":       path.resolve(root, "tests"),
  "config":      path.resolve(root, "config"),
  "mock-data":   path.resolve(root, "mock-data"),
};
