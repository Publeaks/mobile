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
        test: /\.(html|css|rive)$/,
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
  node: {
    fs: 'empty'
  }
};
