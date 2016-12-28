const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'public'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
          ],
        },
      },
      {
        test: /\.sass$/,
        exclude: /(node_modules|bower_components)/,
        loader: ['style', 'css', 'sass'],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './public/styles')],
  },
  output: {
    path: __dirname + '/public/',
    filename: 'index.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
}
