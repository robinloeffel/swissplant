var gulp = require('gulp'),
    del = require('del'),
    stylish = require('jshint-stylish'),
    runSequence = require('run-sequence'),
    mergeStream = require('merge-stream'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate');

var src = 'src/',
    srcImg = src + 'img/*',
    srcJs = src + 'js/*',
    srcLess = src + 'less/*',
    srcVideo = src + 'video/*',
    srcHtml = src + '*.html',
    dist = 'dist/',
    distImg = dist + 'img/',
    distJs = dist + 'js/',
    distCss = dist + 'css/',
    distVideo = dist + 'video/';

gulp.task('clean', function () {
    return del(dist);
});

gulp.task('server', function () {
    return connect.server({
        port: 3000,
        livereload: true,
        root: dist
    });
});

gulp.task('less', function () {
    return gulp.src(srcLess)
        .pipe(plumber())
        .pipe(changed(distCss, {
            extension: '.css'
        }))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(distCss))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(distCss))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    var regularJs = gulp.src([srcJs, '!src/js/angular.js'])
        .pipe(plumber())
        .pipe(changed(distJs))
        .pipe(gulp.dest(distJs))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(distJs));

    var angularJs = gulp.src('src/js/angular.js')
        .pipe(plumber())
        .pipe(changed(distJs))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(distJs))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(distJs))
        .pipe(connect.reload());

    return mergeStream(regularJs, angularJs);
});

gulp.task('jshint', function () {
    return gulp.src([srcJs, 'gulpfile.js'])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('img', function () {
    return gulp.src(srcImg)
        .pipe(plumber())
        .pipe(changed(distImg))
        .pipe(imagemin({
            optimizationLevel: 6,
            progressive: true,
            multipass: true
        }))
        .pipe(gulp.dest(distImg))
        .pipe(connect.reload());
});

gulp.task('video', function () {
    return gulp.src(srcVideo)
        .pipe(changed(distVideo))
        .pipe(plumber())
        .pipe(gulp.dest(distVideo))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src(srcHtml)
        .pipe(changed(dist))
        .pipe(plumber())
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(srcLess, ['less']);
    gulp.watch(srcJs, ['js', 'jshint']);
    gulp.watch(srcImg, ['img']);
    gulp.watch(srcVideo, ['video']);
    gulp.watch(srcHtml, ['html']);
});

gulp.task('default', function (callback) {
    runSequence('clean', ['less', 'js', 'jshint', 'img', 'video', 'html'], 'watch', 'server', callback);
});
