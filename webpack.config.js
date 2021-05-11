const development = process.argv.includes('--dev');

const TerserPlugin = require('terser-webpack-plugin');

const mode = development ? 'development' : 'production';
const devtool = development ? 'source-map' : false;

module.exports = {
  mode,
  devtool,
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'buble-loader',
      options: {
        transforms: {
          asyncAwait: false
        }
      }
    }, {
      test: /\.html$/,
      type: 'asset/source'
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  output: {
    filename: 'page.js'
  }
};
