/* eslint-env node */

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
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');
const presetEnv = require('postcss-preset-env');

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
  return gulp.src('src/less/style.less',{
        sourcemaps: !prod
    })
    .pipe(plumber())
    .pipe(postcss([
      stylelint()
    ]))
    .pipe(less())
    .pipe(postcss([
      prod && presetEnv(),
      prod && autoprefixer(),
      prod && cssnano(),
      reporter({
        clearReportedMessages: true
      })
    ].filter(plugin => plugin)))
    .pipe(gulp.dest('dist/css', {
        sourcemaps: '.'
    }))
    .pipe(connect.reload());
});

gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.mozjpeg(),
      imagemin.optipng({
        optimizationLevel: 7
      })
    ], {
      verbose: !prod
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(connect.reload());
});

gulp.task('files', () => {
  return gulp.src([
      'src/{*,}.*',
      'src/font/**/*'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('rollup', async () => {
  const { rollup } = require('rollup');
  const babel = require('rollup-plugin-babel');
  const resolve = require('@rollup/plugin-node-resolve');
  const commonjs = require('@rollup/plugin-commonjs');
  const { terser } = require('rollup-plugin-terser');
  const { eslint } = require('rollup-plugin-eslint');

  const bundle = await rollup({
    input: 'src/js/main.js',
    plugins: [
      eslint(),
      resolve(),
      commonjs(),
      prod && babel(),
      prod && terser()
    ].filter(plugin => plugin)
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
  gulp.watch([
      'src/{*,}.*',
      'src/font/**/*'
    ], gulp.parallel('files'));
  done();
});

gulp.task('build', gulp.parallel('less', 'rollup', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:less', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
