const gulp = require('gulp'),
    del = require('del'),
    stylish = require('jshint-stylish'),
    runSequence = require('run-sequence'),
    open = require('open'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate'),
    paths = require('./paths.json');

gulp.task('clean', () => del(paths.dist));

gulp.task('open', () => open('http://localhost:8080'));

gulp.task('server', () => connect.server({port: 8080, livereload: true, root: paths.dist}));

gulp.task('less', () => {
    return gulp.src(paths.srcLess)
        .pipe(plumber())
        .pipe(changed(paths.distCss, {
            extension: '.css'
        }))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.distCss))
        .pipe(connect.reload());
});

gulp.task('js', ['jshint'], () => {
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(paths.distJs))
        .pipe(connect.reload());
});

gulp.task('jshint', () => {
    return gulp.src(['src/**/*.js', './*.js'])
        .pipe(plumber())
        .pipe(jshint({
            esversion: 6,
            jquery: true
        }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('img', () => {
    return gulp.src(paths.srcImg)
        .pipe(plumber())
        .pipe(changed(paths.distImg))
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 7
            }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest(paths.distImg))
        .pipe(connect.reload());
});

gulp.task('copy', () => {
    return gulp.src(paths.copyFiles, {
            base: 'src'
        })
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());

});

gulp.task('watch', () => {
    gulp.watch(paths.srcLess, ['less']);
    gulp.watch(paths.srcJs, ['js']);
    gulp.watch(paths.srcImg, ['img']);
    gulp.watch(paths.copyFiles, ['copy']);
});

gulp.task('default', (callback) => {
    runSequence('clean', 'build', 'watch', 'server', 'open', callback);
});

gulp.task('build', (callback) => {
    runSequence(['less', 'js', 'img', 'copy'], callback);
});
