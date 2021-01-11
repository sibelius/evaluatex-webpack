const path = require("path");

const webpackConfig = require("webpack");

const WebpackNodeExternals = require("webpack-node-externals");
const ReloadServerPlugin = require("reload-server-webpack-plugin");

const cwd = process.cwd();

const filename = "server.js";

module.exports = {
  entry: {
    server: ["./src/index.ts"],
  },
  output: {
    path: path.resolve("build"),
    filename,
    library: 'index',
    libraryTarget: 'commonjs2',
  },
  target: "node",
  node: {
    __dirname: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".mjs"],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: "babel-loader?cacheDirectory",
        },
        exclude: [/node_modules/],
      },
    ],
  },
};
