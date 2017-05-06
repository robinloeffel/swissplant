const gulp = require('gulp'),
    del = require('del'),
    stylish = require('jshint-stylish'),
    runSequence = require('run-sequence'),
    mergeStream = require('merge-stream'),
    open = require('open'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate'),
    paths = require('./paths.json');

gulp.task('clean', () => {
    return del(paths.dist);
});

gulp.task('server', () => {
    return connect.server({
        port: 8080,
        livereload: true,
        root: paths.dist
    });
});

gulp.task('open', () => {
    return open('http://localhost:8080');
});

gulp.task('less', () => {
    return gulp.src(paths.srcLess)
        .pipe(plumber())
        .pipe(changed(paths.distCss, {
            extension: '.css'
        }))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.distCss))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    const regular = gulp.src('src/js/{script,map}.js')
        .pipe(plumber())
        .pipe(changed(paths.distJs))
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs));

    const angular = gulp.src('src/js/angular.js')
        .pipe(plumber())
        .pipe(changed(paths.distJs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs))
        .pipe(connect.reload());

    return mergeStream(regular, angular);
});

gulp.task('vendor', () => {
    return gulp.src(paths.srcVendor)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs));
});

gulp.task('jshint', () => {
    return gulp.src([paths.srcJs, 'gulpfile.js'])
        .pipe(plumber())
        .pipe(jshint({
            esversion: 6
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

gulp.task('video', () => {
    return gulp.src(paths.srcVideo)
        .pipe(changed(paths.distVideo))
        .pipe(plumber())
        .pipe(gulp.dest(paths.distVideo))
        .pipe(connect.reload());
});

gulp.task('html', () => {
    return gulp.src(paths.srcHtml)
        .pipe(changed(paths.dist))
        .pipe(plumber())
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('json', () => {
    return gulp.src(paths.srcJson)
        .pipe(changed(paths.distJson))
        .pipe(plumber())
        .pipe(gulp.dest(paths.distJson))
        .pipe(connect.reload());
});

gulp.task('misc', () => {
    return gulp.src(paths.srcMisc)
        .pipe(plumber())
        .pipe(changed(paths.dist))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', () => {
    gulp.watch(paths.srcLess, ['less']);
    gulp.watch(paths.srcJs, ['js', 'jshint']);
    gulp.watch(paths.srcImg, ['img']);
    gulp.watch(paths.srcVideo, ['video']);
    gulp.watch(paths.srcHtml, ['html']);
    gulp.watch(paths.srcMisc, ['misc']);
    gulp.watch(paths.srcJson, ['json']);
});

gulp.task('default', (callback) => {
    runSequence('clean', 'build', 'watch', 'server', 'open', callback);
});

gulp.task('build', (callback) => {
    runSequence(['vendor', 'less', 'js', 'img', 'video', 'html', 'misc', 'json'], 'jshint', callback);
});
