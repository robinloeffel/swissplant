const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const open = require('open');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const eslint = require('gulp-eslint');

const webpackConfig = require('./config/webpack');
const paths = require('./config/paths');

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

gulp.task('js:transpile', ['js:lint'], () => {
    return gulp.src(paths.srcMainJs)
        .pipe(plumber())
        .pipe(named())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(paths.distJs))
        .pipe(connect.reload());
});

gulp.task('js:lint', () => {
    return gulp.src(paths.srcJs)
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
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
    gulp.watch(paths.srcJs, ['js:transpile']);
    gulp.watch(paths.srcImg, ['img']);
    gulp.watch(paths.copyFiles, ['copy']);
});

gulp.task('default', callback => {
    runSequence('clean', 'build', 'watch', 'server', 'open', callback);
});

gulp.task('build', callback => {
    runSequence(['less', 'js:transpile', 'img', 'copy'], callback);
});
