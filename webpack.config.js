var webpack = require('webpack');
var path = require('path');

var node_modules_dir = path.join(__dirname, 'node_modules');
var src_dir = path.join(__dirname, 'src');

var config = {
  devtool: 'eval-cheap-module-source-map',

  entry: {
    app : [
      'webpack-hot-middleware/client',
      './src/index'
    ],
    globalStyle : [
      'webpack-hot-middleware/client',
      './src/styles/style.scss'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  externals : {
    react : 'var React',
    'react-dom' : 'var ReactDOM',
    'react-router' : 'var ReactRouter',
    'radium' : 'var Radium'
  },

  // resolve : {
  //   alias : {
  //     'react-router/lib' : path.join(node_modules_dir, 'react/lib'),
  //     'react-router/lib' : path.join(node_modules_dir, 'react-router/lib'),
  //     'react' : path.join(node_modules_dir, 'react/dist/react-with-addons.min.js'),
  //     'react-dom' : path.join(node_modules_dir, 'react/dist/react-dom.min.js'),
  //     'react-router' : path.join(node_modules_dir, 'react-router/umd/ReactRouter.min.js'),
  //     'radium' : path.join(node_modules_dir, 'radium/dist/radium.min.js')
  //   }
  // },

  module: {
    // noParse : [
    //   '^react$',
    //   '^react-dom$',
    //   '^react-router$',
    //   '^radium$'
    // ],
    loaders: [{
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: src_dir
      },

      {
        test: /\.css?$/,
        loaders: ['style/url', 'file'],
        include: [src_dir, path.join(node_modules_dir, 'todomvc-app-css')]
      },
    
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!autoprefixer!sass?sourceMap',
        include: src_dir
      }
    ]
  }

};



module.exports = config;