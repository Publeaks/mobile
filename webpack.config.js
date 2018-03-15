module.exports = {
  entry: './assets/js/init.js',
  target: 'web',
  output: {
    filename: 'bundle.js'
  },
  mode : 'development',
  node: {
    fs: 'empty'
  }
};
