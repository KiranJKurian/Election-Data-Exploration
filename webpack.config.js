var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './assets/js/app.js',
  output: { path: __dirname + '/assets/js/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"],
        }
      }
    ]
  },
  externals: {
    fs: '{}',
    tls: '{}',
    net: '{}',
    console: '{}',
  },
  watch: true,
};
