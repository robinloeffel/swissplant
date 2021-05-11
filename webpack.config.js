const development = process.argv.includes('--dev');

const TerserPlugin = require('terser-webpack-plugin');

const mode = development ? 'development' : 'production';
const devtool = development ? 'source-map' : false;

module.exports = {
  mode,
  devtool,
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
    filename: 'swissplant.js'
  }
};
