"use strict";

const gulp = require("gulp");
const scss = require("gulp-sass");
const merge = require("merge-stream");

gulp.task("init", function () {
  var bs = gulp
    .src("./node_modules/bootstrap/scss/**/*.scss")
    .pipe(gulp.dest("./scss/bootstrap"));

  var bsVar = gulp
    .src("./node_modules/bootstrap/scss/_variables.scss")
    .pipe(gulp.dest("./scss"));

  var bsJS = gulp
    .src("./node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest("./js"));

  var popper = gulp
    .src("./node_modules/@popperjs/core/dist/cjs/popper.js")
    .pipe(gulp.dest("./js"));

  var jquery = gulp
  .src('./node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./js'));

  return merge(bs, bsVar, bsJS, popper, jquery);
});

gulp.task("style", function () {
  return gulp
    .src("./scss/**/*.scss", { sourcemaps: true })
    .pipe(scss().on("error", scss.logError))
    .pipe(gulp.dest("./css", { sourcemaps: "." }));
});

gulp.task("default", function () {
  gulp.watch("./scss/**/*.scss", gulp.parallel("style"));
});
