# Workstation
Frontend working environment.

## Gulp and Browserify
Use Gulp and Browserify for handling frontend working scenarios. Compatible with static site building or SPA.

### Usage
set up your own entries in `config.js`.

* `gulp build` - output production.
* `gulp dev` - output development.
* `gulp watch` - set up a browserSync server and watch all `js`, `css`, `html` files change.
* `gulp copyMisc` - copy `lib` and `media` to `dist`.
* `gulp minifyHtml` - minify all html files and output to `dist`.
* `gulp minifyCss` - minify all css files and output to `dist`.
* `gulp minifyJs` - minify all js files and output to `dist`.
* `gulp compileCss` - compile sass files and output to `dist`. Produce source map.
* `gulp compileJs` - compile all js files and output to `dist`. Produce source map.
* `gulp watchJs` - separate it out because of `watchify`.
* `gulp clean` - delete all files in `dict`.

### To-Be-Improved List

* Code is a mess.
* Adding new files to `media` or `lib` while watching doesn't automatically build itself.
* No image minifying.
* No image inlining.
* No code obfuscation.

## Gulp and Webpack
Use Webpack instead of Browserify to reduce the pain of writing lots of unnecessary codes.

### Usage
set up your own entries in `env.js`.

* `gulp build` - output production.
* `gulp dev` - output development.
* `gulp watch` - set up a browserSync server and watch all `js`, `css`, `html`, `lib` and `media` files change.
* `gulp copyLib` - copy `lib` to `dist`.
* `gulp copyMedia` - copy `media` to `dist`.
* `gulp devHtml` - simply copy all html files to `dist`.
* `gulp devCss` - compile sass files and inline images and output to `dist`. Produce source map.
* `gulp devJs` - compile all js files and output to `dist`. Produce source map.
* `gulp buildJs` - `devJs` and minify.
* `gulp buildCss` - `devCss` and minify.
* `gulp buildHtml` - `devHtml` and minify.

### To-Be-Improved List

* support [bourbon](http://bourbon.io/)
* support [esLint](http://eslint.org/).
* No image minifying.
* No image inlining for html.
* Redundant js files in `dist/css` are annoying(which are produced by Webpack when processing css).

## React-Webpack
It supports ES2015, React hot-module-reloading, node-bourbon, images(include svg) and fonts, plus auto inlining.

### Usage
Change whatever you want in `server.js` or `webpack.config.js`.

* `npm run build` - output to `/assets` directory for production.
* `npm start` - listen and watch on `http://localhost:8080` by default. It will automatically serve `index.html`. This command is same to `node server`.
