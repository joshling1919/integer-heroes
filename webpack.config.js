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
            { test: /bower_components\/EaselJS\/.*\.js$/,
              loader: ['imports?this=>window!exports?window.createjs', 'babel'],
              exclude: /(node_modules|bower_components)/,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    },

    plugins: [
        // This will tell Webpack how to find the main file of bower modules
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        )
    ],

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ["", ".js" ]
    }
};
