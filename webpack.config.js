var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'main': ['./js/index.js']
  },
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'docs')
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015','stage-0']
        }
      },
      {
        test: /\.(css|sass)?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    })
  ]
};
