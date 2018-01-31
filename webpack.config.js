const webpack = require('webpack');
const merge = require('webpack-merge');

let config = {
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            targets: {
                                browsers: 'last 2 versions',
                                ie: 11
                            },
                            modules: false,
                            debug: true,
                            useBuiltIns: 'entry'
                        }],
                        'angular'
                    ]
                }
            }]
        }]
    }
};

if (!process.argv.includes('--dev')) {
    config = merge(config, {
        devtool: false,
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    });
}

module.exports = config;
