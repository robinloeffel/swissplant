var gulp = require('gulp'),
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

gulp.task('clean', function() {
    return del(paths.dist);
});

gulp.task('server', function() {
    return connect.server({
        port: 8080,
        livereload: true,
        root: paths.dist
    });
});

gulp.task('open', function() {
    return open('http://localhost:8080');
});

gulp.task('less', function() {
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

gulp.task('js', function() {
    var regular = gulp.src([paths.srcJs, '!src/js/angular.js'])
        .pipe(plumber())
        .pipe(changed(paths.distJs))
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs));

    var angular = gulp.src('src/js/angular.js')
        .pipe(plumber())
        .pipe(changed(paths.distJs))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs))
        .pipe(connect.reload());

    return mergeStream(regular, angular);
});

gulp.task('vendor', function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.distJs));
});

gulp.task('jshint', function() {
    return gulp.src([paths.srcJs, 'gulpfile.js'])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('img', function() {
    return gulp.src(paths.srcImg)
        .pipe(plumber())
        .pipe(changed(paths.distImg))
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true,
            multipass: true
        }))
        .pipe(gulp.dest(paths.distImg))
        .pipe(connect.reload());
});

gulp.task('video', function() {
    return gulp.src(paths.srcVideo)
        .pipe(changed(paths.distVideo))
        .pipe(plumber())
        .pipe(gulp.dest(paths.distVideo))
        .pipe(connect.reload());
});

gulp.task('html', function() {
    return gulp.src(paths.srcHtml)
        .pipe(changed(paths.dist))
        .pipe(plumber())
        .pipe(gulp.dest(paths.dist))
        .pipe(connect.reload());
});

gulp.task('json', function() {
    return gulp.src(paths.srcJson)
        .pipe(changed(paths.distJson))
        .pipe(plumber())
        .pipe(gulp.dest(paths.distJson))
        .pipe(connect.reload());
});

gulp.task('misc', function() {
    return gulp.src(paths.srcMisc)
        .pipe(plumber())
        .pipe(changed(paths.dist))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch(paths.srcLess, ['less']);
    gulp.watch(paths.srcJs, ['js', 'jshint']);
    gulp.watch(paths.srcImg, ['img']);
    gulp.watch(paths.srcVideo, ['video']);
    gulp.watch(paths.srcHtml, ['html']);
    gulp.watch(paths.srcMisc, ['misc']);
});

gulp.task('default', function(callback) {
    runSequence('clean', 'build', 'watch', 'server', 'open', callback);
});

gulp.task('build', function(callback) {
    runSequence(['vendor', 'less', 'js', 'img', 'video', 'html', 'misc', 'json'], 'jshint', callback);
});
