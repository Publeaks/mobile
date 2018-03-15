const webpack = require('webpack');
const path = require('path');

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
        test: /\.(html|css|rive|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
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
