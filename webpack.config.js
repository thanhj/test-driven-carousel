// webpack.config.js

module.exports = {
  mode: 'development', //'production'
  entry: {
    casousel: './src/Carousel.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};
