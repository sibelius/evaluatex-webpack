const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: 4,
    })],
  },
});
