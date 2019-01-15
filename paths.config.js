module.exports = {
    dist: {
        root: 'dist',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img'
    },
    src: {
        root: 'src',
        js: 'src/js/**/*.{m,}js',
        css: 'src/css/**/*.scss',
        img: 'src/img/**/*',
        data: 'src/{data,video}/*',
        rootFiles: 'src/{*,}.*',
        jsEntry: 'src/js/main.{m,}js',
        cssEntry: 'src/css/main.scss',
    }
};
