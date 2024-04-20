/* eslint-disable sonarjs/no-duplicate-string */

import rollup from "@rbnlffl/gulp-rollup";
import sass from "@rbnlffl/gulp-sass";
import eslint from "@rbnlffl/rollup-plugin-eslint";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import cssnano from "cssnano";
import { deleteAsync } from "del";
import gulp from "gulp";
import connect from "gulp-connect";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import rename from "gulp-rename";
import rezzy from "gulp-rezzy";
import svgSprite from "gulp-svg-sprite";
import webp from "imagemin-webp";
import process from "node:process";
import open from "open";
import env from "postcss-preset-env";
import stylelint from "stylelint";

const development = process.argv.includes("--dev");

gulp.task("clean", () => deleteAsync("public"));

gulp.task("serve", done => {
  connect.server({
    livereload: true,
    root: "public"
  }, async() => {
    await open("http://localhost:8080");
    done();
  });
});

gulp.task("scss", () => gulp.src("src/scss/index.scss", {
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
  ].filter(Boolean)))
  .pipe(rename("style.css"))
  .pipe(gulp.dest("public/css", {
    sourcemaps: "."
  }))
  .pipe(connect.reload()));

gulp.task("img:meta", () => gulp.src("src/img/{apple,favicon,og,poster}*")
  .pipe(plumber())
  .pipe(imagemin())
  .pipe(gulp.dest("public/img")));

gulp.task("img:employees", () => gulp.src("src/img/mitarbeiter/*")
  .pipe(plumber())
  .pipe(imagemin([
    webp({
      preset: "photo",
      method: 6
    })
  ]))
  .pipe(rename({
    extname: ".webp"
  }))
  .pipe(gulp.dest("public/img/mitarbeiter")));

gulp.task("img:bgs", () => gulp.src([
  "src/img/*",
  "!src/img/{apple,favicon,og,poster,sprite}*"
])
  .pipe(plumber())
  .pipe(rezzy([{
    width: 1600,
    suffix: "-1600w"
  }, {
    width: 1200,
    suffix: "-1200w"
  }, {
    width: 800,
    suffix: "-800w"
  }, {
    width: 400,
    suffix: "-400w"
  }]))
  .pipe(imagemin([
    webp({
      preset: "photo",
      method: 6
    })
  ]))
  .pipe(rename({
    extname: ".webp"
  }))
  .pipe(gulp.dest("public/img")));

gulp.task("sprite", () => gulp.src([
  "./src/icons/*.svg",
  "./node_modules/feather-icons/dist/icons/chevrons-down.svg",
  "./node_modules/feather-icons/dist/icons/menu.svg",
  "./node_modules/feather-icons/dist/icons/x.svg"
])
  .pipe(plumber())
  .pipe(imagemin())
  .pipe(svgSprite({
    mode: {
      symbol: true
    }
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("public/img")));

gulp.task("files", () => gulp.src([
  "src/{*,}.*",
  "src/data/*"
], {
  base: "src"
})
  .pipe(gulp.dest("public"))
  .pipe(connect.reload()));

gulp.task("ts", () => gulp.src("src/ts/index.ts", {
  sourcemaps: development
})
  .pipe(plumber())
  .pipe(rollup({
    plugins: [
      eslint(),
      nodeResolve(),
      commonjs(),
      typescript()
    ]
  }, {
    ...!development && {
      plugins: [
        terser({
          format: {
            comments: false
          }
        })
      ]
    }
  }))
  .pipe(rename("script.js"))
  .pipe(gulp.dest("public/js", {
    sourcemaps: "."
  }))
  .pipe(connect.reload()));

gulp.task("font", () => gulp.src("node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")
  .pipe(plumber())
  .pipe(rename({
    basename: "inter"
  }))
  .pipe(gulp.dest("public/font")));

gulp.task("watch:scss", done => {
  gulp.watch("src/scss/**/*", gulp.parallel("scss"));
  done();
});

gulp.task("watch:ts", done => {
  gulp.watch("src/ts/**/*", gulp.parallel("ts"));
  done();
});

gulp.task("watch:img", done => {
  gulp.watch("src/img/**/*", gulp.parallel("img"));
  done();
});

gulp.task("watch:sprite", done => {
  gulp.watch("src/icons/**/*", gulp.parallel("sprite"));
  done();
});

gulp.task("watch:files", done => {
  gulp.watch([
    "src/{*,}.*",
    "src/data/*"
  ], gulp.parallel("files"));
  done();
});

gulp.task("img", gulp.parallel("img:meta", "img:employees", "img:bgs"));
gulp.task("build", gulp.series("clean", gulp.parallel("scss", "ts", "img", "sprite", "files"), "font"));
gulp.task("watch", gulp.parallel("watch:scss", "watch:ts", "watch:img", "watch:sprite", "watch:files"));
gulp.task("default", gulp.series("build", "watch", "serve"));
