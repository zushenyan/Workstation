// app
var app = {
	version: "0.1.3",
	appname: "gulp-test",
};

app.name = app.appname + "-" + app.version;

// env
var env = {
	debug: true,
	server: {
		basedir: "./src"
	},
	jsEntry: ["Main", "Main2"],
	cssEntry: ["Main", "Main2"]
};

// variables
var srcDirName = {
	js: "src_js",
	css: "src_css",
	html: "src_html"
};

var cmpDirName = {
	js: "js",
	css: "css",
	html: "html"
};

// path
var path = {};

path.src = {
	dir: "./src",
};

// path:src:dir
path.src.js = {
	srcdir: path.src.dir + "/" + srcDirName.js,
	cmpdir: path.src.dir + "/" + cmpDirName.js
};

path.src.css = {
	srcdir: path.src.dir + "/" + srcDirName.css,
	cmpdir: path.src.dir + "/" + cmpDirName.css
};

path.src.html = {
	srcdir: path.src.dir + "/" + srcDirName.html,
	cmpdir: path.src.dir + "/" + cmpDirName.html
};

path.src.lib = {
	dir: path.src.dir + "/lib"
};

path.src.test = {
	dir: path.src.dir + "/test"
};

// path:src:dir:file
path.src.js.file = {
	src: path.src.js.srcdir + "/**/*",
	cmp: path.src.js.cmpdir + "/**/*"
};

path.src.css.file = {
	src: path.src.css.srcdir + "/**/*",
	cmp: path.src.css.cmpdir + "/**/*"
};

path.src.html.file = {
	src: path.src.html.srcdir + "/**/*",
	cmp: path.src.html.cmpdir + "/**/*"
};

path.src.lib.file = {
	all: path.src.lib.dir + "/**/*"
};
path.src.test.file = {
	all: path.src.test.dir + "/**/*"
};

// path:dist
path.dist = {
	dir: "./dist"
};

path.dist.js = {
	dir: path.dist.dir + "/js"
};

path.dist.css = {
	dir: path.dist.dir + "/css"
};

path.dist.html = {
	dir: path.dist.dir + "/html"
};

path.dist.lib = {
	dir: path.dist.dir + "/lib"
};

// exports
var config = {
	app: app,
	env: env,
	path: path
};

module.exports = config;
