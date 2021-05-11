const gulp = require('gulp');
const del = require('del');
const open = require('open');
const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const rezzy = require('gulp-rezzy');
const webp = require('gulp-webp');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const cssnano = require('cssnano');
const stylelint = require('stylelint');
const presetEnv = require('postcss-preset-env');
const ws = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');

const production = !process.argv.includes('--dev');


gulp.task('clean', () => del('dist'));
gulp.task('open', () => open('http://localhost:8080'));

gulp.task('serve', done => {
  connect.server({
    livereload: true,
    root: 'dist'
  });
  done();
});

gulp.task('less', () => gulp.src('src/less/page.less', {
    sourcemaps: !production
  })
  .pipe(plumber())
  .pipe(postcss([
    stylelint(),
    reporter({
      clearMessages: true
    })
  ]))
  .pipe(less())
  .pipe(postcss([
    presetEnv(),
    production && cssnano()
  ].filter(p => p)))
  .pipe(gulp.dest('dist/css', {
    sourcemaps: '.'
  }))
  .pipe(connect.reload()));

gulp.task('img:meta', () => gulp.src('src/img/{apple,favicon,og,poster}*')
  .pipe(plumber())
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img')));

gulp.task('img:employees', () => gulp.src('src/img/mitarbeiter/*')
  .pipe(plumber())
  .pipe(rezzy([{
    suffix: '-480w'
  }, {
    width: 300,
    suffix: '-300w'
  }]))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img/mitarbeiter'))
  .pipe(webp({
    preset: 'photo',
    method: 6
  }))
  .pipe(gulp.dest('dist/img/mitarbeiter')));

gulp.task('img:bgs', () => gulp.src([
    'src/img/*',
    '!src/img/{apple,favicon,og,poster,sprite}*'
  ])
  .pipe(plumber())
  .pipe(rezzy([{
    width: 1600,
    suffix: '-1600w'
  }, {
    width: 1200,
    suffix: '-1200w'
  }, {
    width: 800,
    suffix: '-800w'
  }, {
    width: 400,
    suffix: '-400w'
  }]))
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
  .pipe(webp({
    preset: 'photo',
    method: 6
  }))
  .pipe(gulp.dest('dist/img')));

gulp.task('files', () => gulp.src([
    'src/{*,}.*',
    'src/data/*',
    'src/img/sprite.svg'
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload()));

gulp.task('js', () => gulp.src('src/js/main.js')
.pipe(plumber())
.pipe(ws(webpackConfig, webpack))
.pipe(gulp.dest('dist/js'))
.pipe(connect.reload()));

gulp.task('watch:less', done => {
  gulp.watch('src/less/**/*', gulp.parallel('less'));
  done();
});

gulp.task('watch:js', done => {
  gulp.watch('src/js/**/*', gulp.parallel('js'));
  done();
});

gulp.task('watch:img', done => {
  gulp.watch('src/img/**/*', gulp.parallel('img'));
  done();
});

gulp.task('watch:files', done => {
  gulp.watch([
    'src/{*,}.*',
    'src/data/*',
    'src/img/sprite.svg'
  ], gulp.parallel('files'));
  done();
});

gulp.task('img', gulp.parallel('img:meta', 'img:employees', 'img:bgs'));
gulp.task('build', gulp.parallel('less', 'js', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:less', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
