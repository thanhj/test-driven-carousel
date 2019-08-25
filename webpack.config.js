// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development', //'production'
  entry: {
    casousel: './src/Carousel.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Carousel Example',
      chunks: ['example'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
