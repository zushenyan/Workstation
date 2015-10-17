"use strict";
// config
var config = require("./config");

// dependences
var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require("gulp-sass");
var maps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var minifyHtml = require("gulp-minify-html");
var rename = require("gulp-rename");
var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var babelify = require("babelify");
var browserSync = require("browser-sync").create();
var runSequence = require("run-sequence");
var mergeStream = require("merge-stream");
var del = require("del");

function errorHandler(err){
	gutil.log(err.toString());
	gutil.beep();
	this.emit("end");
}

function copyFiles(){
	gulp.src(config.path.src.js.file.cmp)
	.pipe(gulp.dest(config.path.dist.js.dir));

	gulp.src(config.path.src.css.file.cmp)
	.pipe(gulp.dest(config.path.dist.css.dir));

	gulp.src(config.path.src.html.file.cmp)
	.pipe(gulp.dest(config.path.dist.html.dir));

	gulp.src(config.path.src.lib.file.all)
	.pipe(gulp.dest(config.path.dist.lib.dir));
}

function compile(watch, options){
	var opts = {
		cache: {},
		packageCache: {},
		standalone: config.app.appname,
		debug: config.env.debug // produce source map by enabling debug = true
	};
	var bundler = browserify(options.src + "/" + options.filename + options.ext, opts);
	bundler.transform(options.transform);
	function bundle(){
		var stream = bundler
			.bundle()
			.on("error", errorHandler)
			.pipe(source(options.filename + options.ext))
			.pipe(buffer())
			.pipe(maps.init({loadMaps: true}))
			.pipe(maps.write("."))
		if(watch){
			stream.pipe(gulp.dest(options.dest));
			browserSync.reload();
		}
		else{
			return stream.pipe(gulp.dest(options.dest));
		}
	}
	if(watch){
		bundler = watchify(bundler);
		bundler.on("update", bundle);
		bundler.on("log", gutil.log.bind(gutil));
	}
	return bundle();
}

gulp.task("clean", function(){
	return del([
		config.path.src.js.cmpdir,
		config.path.src.css.cmpdir,
		config.path.src.html.cmpdir,
		config.path.dist.dir
	]);
});

gulp.task("compileCss", function(){
	var tasks = config.env.cssEntry.map(function(filename){
		return gulp.src(config.path.src.css.srcdir + "/" + filename + ".scss")
			.pipe(rename(filename + ".css"))
			.pipe(maps.init())
			.pipe(sass().on("error", errorHandler))
			.pipe(maps.write("."))
			.pipe(gulp.dest(config.path.src.css.cmpdir));
	});
	return mergeStream(tasks);
});

gulp.task("compileJs", function(){
	var tasks = config.env.jsEntry.map(function(filename){
		var options = {
			src: config.path.src.js.srcdir,
			dest: config.path.src.js.cmpdir,
			filename: filename,
			ext: ".js",
			transform: babelify
		};
		return compile(false, options);
	});
	return mergeStream(tasks);
});

gulp.task("watchJs", function(){
	config.env.jsEntry.map(function(filename){
		var options = {
			src: config.path.src.js.srcdir,
			dest: config.path.src.js.cmpdir,
			filename: filename,
			ext: ".js",
			transform: babelify
		};
		return compile(true, options);
	});
})

gulp.task("minifyCss", ["compileCss"], function(){
	var tasks = config.env.cssEntry.map(function(filename){
		return gulp.src(config.path.src.css.cmpdir + "/" + filename + ".css")
			.pipe(minifyCss())
			.pipe(rename(filename + ".min.css"))
			.pipe(gulp.dest(config.path.src.css.cmpdir));
	});
	return mergeStream(tasks);
});

gulp.task("minifyJs", ["compileJs"], function(){
	var tasks = config.env.jsEntry.map(function(filename){
		return gulp.src(config.path.src.js.cmpdir + "/" + filename + ".js")
			.pipe(uglify())
			.pipe(rename(filename + ".min.js"))
			.pipe(gulp.dest(config.path.src.js.cmpdir));
	});
	return mergeStream(tasks);
});

gulp.task("minifyHtml", function(){
	var opts = {
		empty: true,
		cdata: true,
		comments: false,
		conditionals: true,
		spare: false,
		quotes: false,
		loose: false
	};

	return gulp.src(config.path.src.html.file.src)
		.pipe(minifyHtml(opts))
		.pipe(gulp.dest(config.path.src.html.cmpdir));
});

gulp.task("watch", ["clean"], function(){
	browserSync.init({
		server: {
			baseDir: config.env.server.basedir
		}
	});
	runSequence(["watchJs", "compileCss"]);
	gulp.watch(config.path.src.css.file.src, ["compileCss"]).on("change", browserSync.reload);
	gulp.watch(config.path.src.html.file.src).on("change", browserSync.reload);
	gulp.watch(config.path.src.test.file.all, browserSync.reload);
});

gulp.task("dev", ["clean"], function(cb){
	runSequence(["minifyJs", "minifyCss", "minifyHtml"], cb);
});

gulp.task("build", ["dev"], copyFiles);
