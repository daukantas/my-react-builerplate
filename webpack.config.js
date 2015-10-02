var webpack = require('webpack');
var path = require('path');
var StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

var node_modules_dir = path.join(__dirname, 'node_modules');
var src_dir = path.join(__dirname, 'src');


// var deps = Object.keys(require('./package.json').dependencies);

var config = {
  // devtool: 'sourcemap',

  entry: {
    app : [
      'webpack-hot-middleware/client',
      './src/index'
    ],
    // vendor : ['react', 'redux-devtools', 'radium']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[name].js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', function (module, count) {
    //     // include all modules not in 'appPath' folder in the vendor bundle
    //     // console.log((module.resource && module.resource.indexOf(src_dir) === -1), module.resource);
        

    //     console.log(module);

    //     //   return true;
    //     // }

    //     if (!module.resource)
    //       return false;

        
    //     if (module.resource.indexOf(src_dir) !== -1)
    //       return false;

    //     // console.log(path.relative(node_modules_dir, module.resource));

    //     return false;
    // }),
    // new StatsWriterPlugin({ filename: 'stats.json' })
  ],

  // resolve: {
  //   alias: {
  //     // 'history/lib' : path.join(node_modules_dir, 'history/lib')
  //   },
  // },

  externals : {
    react : 'var React',
    'react-dom' : 'var ReactDOM',
    'react-router' : 'var ReactRouter',
    'radium' : 'var Radium'
  },
  // [
    // function (context, request, callback) {
    //   // if (request.indexOf('/') === -1) {
    //   //   //console.log(context, request);
    //   //   return callback(null, 'var ' + request);
    //   // }
    //   console.log(context);
    //   if (['react', 'redux-devtools', 'radium'].indexOf(request) !== -1) {
    //     console.log(request);
    //     return callback(null, 'var ' + request);
    //   }


    //   callback();
    // }
  //],

  module: {
    noParse : [],
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
        // loaders: [ 'style/url', 'file?name=[hash:6].[name].css', 'css?sourceMap', 'sass?sourceMap' ],
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: src_dir
      }
    ]
  }

};



module.exports = config;