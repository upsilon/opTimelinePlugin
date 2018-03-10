const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'timeline-smt': path.resolve(__dirname, 'assets/js/packs/timeline-smt.js'),
  },
  plugins: [
    // moment.js に含まれるロケールファイルを無視 (必要なロケールだけ明示的にimportする)
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'web/js'),
    filename: '[name].js',
  },
};
