const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'site.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    })
  ]
};
