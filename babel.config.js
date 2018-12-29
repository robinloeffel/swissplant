module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: 'last 2 versions',
                ie: 11
            },
            useBuiltIns: 'usage',
            modules: false,
            debug: true
        }]
    ],
    ignore: [ 'node_modules' ]
};
