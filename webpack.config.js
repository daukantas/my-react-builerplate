var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, 

      {
        test: /\.css?$/,
        loaders: ['style', 'css?sourceMap'],
        include: path.join(__dirname)
      },
    
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ],
        include: path.join(__dirname)
      }

        // {
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        //     include: path.join(__dirname)
        // }

    ]
  }
};
