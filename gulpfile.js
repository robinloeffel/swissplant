const gulp = require('gulp');
const del = require('del');
const open = require('open');
const connect = require('gulp-connect');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const prod = !process.argv.includes('--dev');


gulp.task('clean', () => del('dist'));
gulp.task('open', () => open('http://localhost:8080'));

gulp.task('serve', done => {
  connect.server({
    livereload: true,
    root: 'dist'
  });
  done();
});

gulp.task('less', () => {
  return gulp.src('src/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      ...(prod ? [
        autoprefixer(),
        cssnano()
      ] : [])
    ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 7
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
});

gulp.task('files', () => {
  return gulp.src([
    'src/{*,}.*',
    'src/video/**/*'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('rollup', async () => {
  const { rollup } = require('rollup');
  const babel = require('rollup-plugin-babel');
  const resolve = require('rollup-plugin-node-resolve');
  const commonjs = require('rollup-plugin-commonjs');
  const { terser } = require('rollup-plugin-terser');
  const { eslint } = require('rollup-plugin-eslint');

  const bundle = await rollup({
    input: 'src/js/main.js',
    plugins: [
      eslint(),
      resolve(),
      commonjs(),
      json(),
      prod && babel(),
      prod && terser()
    ]
  });

  await bundle.write({
    sourcemap: !prod,
    file: 'dist/js/swissplant.js',
    format: 'iife'
  });
});


gulp.task('watch:less', done => {
  gulp.watch('src/less/**/*', gulp.parallel('less'));
  done();
});

gulp.task('watch:js', done => {
  gulp.watch('src/js/**/*', gulp.parallel('rollup'));
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

gulp.task('build', gulp.parallel('less', 'rollup', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:less', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
