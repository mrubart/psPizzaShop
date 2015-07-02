/**
 * Created by mrubart on 6/30/2015.
 */
var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("default", function(){
  return gulp.src("./public/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});