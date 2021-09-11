const gulp = require('gulp');
const del = require('del');
const open = require('open');
const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const sass = require('@rbnlffl/gulp-sass');
const imagemin = require('gulp-imagemin');
const rezzy = require('gulp-rezzy');
const webp = require('gulp-webp');
const postcss = require('gulp-postcss');
const stylelint = require('stylelint');
const env = require('postcss-preset-env');
const cssnano = require('cssnano');
const rollup = require('@rbnlffl/gulp-rollup');
const eslint = require('@rbnlffl/rollup-plugin-eslint');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const development = process.argv.includes('--dev');

gulp.task('clean', () => del('dist'));
gulp.task('open', () => open('http://localhost:8080'));

gulp.task('serve', done => {
  connect.server({
    livereload: true,
    root: 'dist',
    host: '0.0.0.0'
  });
  done();
});

gulp.task('sass', () => gulp.src([
    'src/css/swissplant.scss',
    'src/css/ie.scss'
  ], {
    sourcemaps: development
  })
  .pipe(plumber())
  .pipe(postcss([
    stylelint()
  ]))
  .pipe(sass())
  .pipe(postcss([
    env(),
    !development && cssnano()
  ].filter(plugin => plugin)))
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

gulp.task('js', () => gulp.src('src/js/swissplant.js')
.pipe(plumber())
.pipe(rollup({
  plugins: [
    eslint(),
    nodeResolve(),
    commonjs(),
    !development && terser()
  ].filter(plugin => plugin)
}, {
  format: 'iife'
}))
.pipe(gulp.dest('dist/js'))
.pipe(connect.reload()));

gulp.task('watch:sass', done => {
  gulp.watch('src/css/**/*', gulp.parallel('sass'));
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
gulp.task('build', gulp.parallel('sass', 'js', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:sass', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
