const path = require('path');

module.exports = {
  entry: {
    'timeline-smt': path.resolve(__dirname, 'assets/js/packs/timeline-smt.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'web/js'),
    filename: '[name].js',
  },
};
