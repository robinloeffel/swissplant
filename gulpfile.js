const gulp = require('gulp');
const open = require('open');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const eslint = require('gulp-eslint');

const pathsConfig = require('./paths.config');
const webpackConfig = require('./webpack.config');


gulp.task('clean', () => del(pathsConfig.dist.root));

gulp.task('browser', () => open('http://localhost:8080'));

gulp.task('serve', done => {
    connect.server({
        port: 8080,
        livereload: true,
        root: pathsConfig.dist.root
    });
    done();
});

gulp.task('css', () => {
    return gulp.src(pathsConfig.src.cssEntry)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(pathsConfig.dist.css));
});

gulp.task('js:lint', () => {
    return gulp.src(pathsConfig.src.js)
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
});

gulp.task('js:transpile', () => {
    return gulp.src(pathsConfig.src.jsEntry)
        .pipe(plumber())
        .pipe(named())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(pathsConfig.dist.js))
        .pipe(connect.reload());
});

gulp.task('img', () => {
    return gulp.src(pathsConfig.src.img)
        .pipe(plumber())
        .pipe(changed(pathsConfig.dist.img))
        .pipe(imagemin([
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 7
            }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest(pathsConfig.dist.img))
        .pipe(connect.reload());
});


gulp.task('copy', () => {
    return gulp.src([
            pathsConfig.src.rootFiles,
            pathsConfig.src.data
        ], {
            base: pathsConfig.src.root
        })
        .pipe(changed(pathsConfig.dist.root))
        .pipe(plumber())
        .pipe(gulp.dest(pathsConfig.dist.root))
        .pipe(connect.reload());
});


gulp.task('watch:img', done => {
    gulp.watch(pathsConfig.src.img, gulp.parallel('img'));
    done();
});

gulp.task('watch:js', done => {
    gulp.watch(pathsConfig.src.js, gulp.parallel('js'));
    done();
});

gulp.task('watch:css', done => {
    gulp.watch(pathsConfig.src.css, gulp.parallel('css'));
    done();
});

gulp.task('watch:root', done => {
    gulp.watch([ pathsConfig.src.rootFiles, pathsConfig.src.data ], gulp.parallel('copy'));
    done();
});


gulp.task('js', gulp.parallel('js:lint', 'js:transpile'));
gulp.task('watch', gulp.parallel('watch:img', 'watch:js', 'watch:css', 'watch:root'));
gulp.task('build', gulp.parallel('js', 'css', 'img', 'copy'));
gulp.task('default', gulp.series('clean', 'build', 'serve', 'browser', 'watch'));
