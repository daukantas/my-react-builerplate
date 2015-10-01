var webpack = require('webpack');
var path = require('path');

var node_modules_dir = path.join(__dirname, 'node_modules');
var src_dir = path.join(__dirname, 'src');

var deps = [].concat(
  Object.keys(require('./package.json').dependencies),
  ['redbox-react', 'redux-devtools']
)


var config = {
  devtool: '#cheap-module-source-map',

  entry: {
    app : [
      'webpack-hot-middleware/client',
      './src/index'
    ],
    vendor : deps
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],

  resolve: {
    alias: {}
  },

  module: {
    
    loaders: [{
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: src_dir
      }, 

      {
        test: /\.css?$/,
        loaders: ['style', 'css'],
        include: [src_dir, path.join(node_modules_dir, 'todomvc-app-css')]
      },
    
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ],
        include: src_dir
      }
    ]
  }

};

module.exports = config;