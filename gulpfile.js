var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var nunjucks = require('gulp-nunjucks');
var browserSync = require('browser-sync').create();
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var named = require('vinyl-named');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('css', function () {
    gulp.src('src/css/**/*.css')
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 3 iOS versions', 'ie 9-11']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('scss', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 iOS versions', 'ie 9-11']
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});


gulp.task('js', function () {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(named())
        .pipe(webpackStream(config, webpack))
        .pipe(gulp.dest('build/js'));
});

gulp.task('templates', function () {
    gulp.src('src/templates/*.html')
        .pipe(plumber())
        .pipe(nunjucks.compile({path: 'src/templates'}))
        .pipe(gulp.dest('build'));
});

gulp.task('serve', function () {
   browserSync.init({
       server: {
           baseDir: './build'
       },
       files: './build/**/*',
       reloadDebounce: 500
   })
});

gulp.task('watch',function () {
    gulp.watch('src/js/**/*',['js']);
    gulp.watch('src/scss/**/*',['scss']);
    gulp.watch('src/css/**/*',['css']);
    gulp.watch('src/templates/**/*',['templates']);
});


gulp.task('default', ['css','scss','js', 'templates']);
gulp.task('dev', ['default', 'serve', 'watch']);


