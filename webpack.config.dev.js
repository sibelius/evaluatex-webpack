const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const WebpackNodeExternals = require('webpack-node-externals');
const ReloadServerPlugin = require('./webpack/ReloadServerPlugin');
const webpackCommonConfig = require('./webpack.config');

const cwd = process.cwd();

const filename = 'server.js';

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  watch: true,
  externals: [
    WebpackNodeExternals({
      allowlist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [
    new ReloadServerPlugin({
      script: path.resolve('build', filename),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
