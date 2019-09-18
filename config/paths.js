module.exports = {
<<<<<<< HEAD
    dist: {
        root: 'dist',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img'
    },
    src: {
        root: 'src',
<<<<<<< HEAD
<<<<<<< HEAD
        js: 'src/js/**/*.{m,}js',
        css: 'src/css/**/*.scss',
        img: 'src/img/**/*',
        data: 'src/{data,video}/*',
        rootFiles: 'src/{*,}.*',
        jsEntry: 'src/js/main.{m,}js',
=======
        js: 'src/**/*.js',
        css: 'src/**/*.scss',
        img: 'src/img/*',
        data: 'src/{data,video}/*',
        rootFiles: 'src/*.*',
        jsEntry: 'src/js/main.js',
>>>>>>> 7efd17fa3925e9de1cdca6a783dc38006b65ab8d
=======
        js: 'src/**/*.js',
        css: 'src/**/*.scss',
        img: 'src/img/*',
        rootFiles: 'src/*.*',
        jsEntry: 'src/js/main.js',
>>>>>>> parent of 2e9723c... :package: modules are .mjs now, use .browserslistrc, updaze dependencies
        cssEntry: 'src/css/main.scss',
    }
=======
    src: "src",
    srcImg: "src/img/**/*",
    srcJs: "src/js/*",
    srcLess: "src/less/*",
    srcMainJs: "src/js/main.js",
    copyFiles: ["src/{*,}.*", "src/video/*"],
    dist: "dist",
    distImg: "dist/img",
    distJs: "dist/js",
    distCss: "dist/css"
>>>>>>> parent of 353f448... :package: update dependencies, finish new structure
};
