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


gulp.task('clean', () => del('dist'));

gulp.task('open', () => open('http://localhost:8080'));

gulp.task('serve', done => {
    connect.server({
        port: 8080,
        livereload: true,
        root: 'dist'
    });
    done();
});

gulp.task('less', () => {
    return gulp.src(paths.srcLess)
        .pipe(plumber())
        .pipe(changed(paths.distCss, {
            extension: '.css'
        }))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11']
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.distCss))
        .pipe(connect.reload());
});

gulp.task('js:transpile', () => {
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

gulp.task('files', () => {
    return gulp.src(paths.copyFiles, {
            base: 'src'
        })
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});


gulp.task('watch:less', done => {
    gulp.watch('src/less/**/*', gulp.parallel('less'));
    done();
});

gulp.task('watch:js', done => {
    gulp.watch('src/js/**/*', gulp.parallel('js:lint', 'js:transpile'));
    done();
});

gulp.task('watch:img', done => {
    gulp.watch('src/img/**/*', gulp.parallel('img'));
    done();
});

gulp.task('watch:files', done => {
    gulp.watch('src/{*,}.*', gulp.parallel('files'));
    done();
});

gulp.task('build', gulp.parallel('less', 'js:transpile', 'js:lint', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:less', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
