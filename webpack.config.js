const merge = require('webpack-merge');
const webpack = require('webpack');

let config = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions', 'not ie < 11', 'not ie_mob < 11']
                                },
                                modules: false
                            }
                        ],
                        'angular'
                    ]

                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js']
    }
};

if (!process.argv.includes('--dev')) {
    config = merge(config, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    keep_fnames: true
                },
                output: {
                    comments: false
                }
            }),

            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        ]
    });
}

module.exports = config;
