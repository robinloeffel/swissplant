var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    paths = {
        img: 'img/',
        css: 'css/',
        js: 'js/',
        dist: 'dist/'
    };

gulp.task('default', function () {
    gulp.watch(paths.img + '**/*', ['images']);
});

gulp.task('images', function () {
    gulp.src(paths.img + '**/*')
        .pipe(changed(paths.dist + 'img/'))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist + 'img/'));
});
