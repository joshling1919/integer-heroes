var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./lib/main.js",
  output: {
    path: "./lib",
    publicPath: "/lib/",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
  module: {
        loaders: [
            { test: [/\.jsx?$/, /\.js?$/],
              loader: 'babel',
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ["", ".js" ]
    }
};
