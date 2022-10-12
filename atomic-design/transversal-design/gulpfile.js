var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var run = require('gulp-run');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var version= require('./package.json');

function style_min(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('transversal_design_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets/min'))
}

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series(style_min));
});