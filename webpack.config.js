const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'web',
  mode : 'development',
  entry: './assets/js/init.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './assets/css/', to: 'css/' },
      { from: './assets/img/', to: 'img/' },
      { from: './assets/html/', to: '' },
      { from: './assets/rivescript/', to: 'brain/' }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.ProvidePlugin({
      Popper: 'popper.js'
    }),
    new webpack.ProvidePlugin({
      RiveScript: 'rivescript'
    })
  ],
  node: {
    fs: 'empty'
  }
};
