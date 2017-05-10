//1. Make gulpfile
//2. npm i all dependencies
//3. check all folder paths used in gulpfile
//4. Update index.html
//5. Run gulp watch

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
    //babel-preset-es2015


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('build-css', function(){
    return gulp.src('public/styles/*')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/dist'));
})

gulp.task('clean', function (cb) {
    del([
        'public/dist'
    ], cb);
});

gulp.task('build-js', function() {
  return gulp.src('public/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
    //   .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('build', [ 'build-css', 'build-js'], function() {
    return gulp.src('public/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./public/index.html', './public/styles/*.*css', './public/js/**/*.js'],['build']);
});
