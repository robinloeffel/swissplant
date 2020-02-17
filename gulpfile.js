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
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');
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
      presetEnv(),
      prod && autoprefixer(),
      prod && cssnano()
    ].filter(p => p)))
    .pipe(gulp.dest('dist/css', {
        sourcemaps: '.'
    }))
    .pipe(connect.reload());
});

gulp.task('img:meta', () => {
  return gulp.src('src/img/{apple,favicon,og,poster}*')
    .pipe(plumber())
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('img:workers', () => {
  return gulp.src('src/img/mitarbeiter/*')
    .pipe(plumber())
    .pipe(rezzy([{
      suffix: '-480w'
    }, {
      width: 300,
      suffix: '-300w'
    }]))
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest('dist/img/mitarbeiter'))
    .pipe(webp({
      preset: 'photo',
      method: 6
    }))
    .pipe(gulp.dest('dist/img/mitarbeiter'));
});

gulp.task('img:bgs', () => {
  return gulp.src([
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
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(webp({
      preset: 'photo',
      method: 6
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('files', () => {
  return gulp.src([
      'src/{*,}.*',
      'src/font/**/*',
      'src/img/sprite.svg'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('rollup', async () => {
  const { rollup } = require('rollup');
  const buble = require('@rollup/plugin-buble');
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
      prod && buble(),
      prod && terser({
        output: {
          comments: false
        }
      })
    ].filter(p => p)
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
      'src/font/**/*',
      'src/img/sprite.svg'
    ], gulp.parallel('files'));
  done();
});

gulp.task('img', gulp.parallel('img:meta', 'img:workers', 'img:bgs'));
gulp.task('build', gulp.parallel('less', 'rollup', 'img', 'files'));
gulp.task('watch', gulp.parallel('watch:less', 'watch:js', 'watch:img', 'watch:files'));
gulp.task('default', gulp.series('clean', 'build', 'watch', 'serve', 'open'));
