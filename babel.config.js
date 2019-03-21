module.exports = {
    presets: [
        ['@babel/preset-env', {
            useBuiltIns: 'usage',
            modules: false,
            corejs: 'core-js@3'
        }]
    ],
    ignore: [ 'node_modules' ]
};
