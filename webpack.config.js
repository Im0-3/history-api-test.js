var webpack = require('webpack');

module.exports = {
  watchDelay: 500,
  output: {
    filename: '[name].js',
    sourceMapFilename: 'map/[file].map',
    publicPath: '/js/'
  },
  devtool: '#source-map',
  resolve: {
    modulesDirectories: ['bower_components','node_modules'],
    alias: {
      bower: 'bower_components'
    }
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  },
  extensions: ["", "coffee"],
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    })
  ]
};
