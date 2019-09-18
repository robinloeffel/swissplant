const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = process.argv.includes('--dev');
const stats = process.argv.includes('--stats');

let config = {
    output: {
        filename: '[name].js'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: 'last 2 versions',
                                ie: 11
                            },
                            useBuiltIns: 'usage',
                            modules: false
                        }]
                    ],
                    ignore: ['node_modules']
                }
            }]
        }]
    }
};

if (!dev) {
    config = merge(config, {
        devtool: false,
        mode: 'production'
    });
}

if (stats) {
    config = merge(config, {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static'
            })
        ]
    });
}

module.exports = config;
