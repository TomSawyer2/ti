// @ts-check
'use strict';

const { EsbuildPlugin } = require('esbuild-loader');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/** @type {import('webpack').Configuration} */
const config = {
  target: 'node',
  externalsPresets: { node: true }, // <-- here
  externals: [nodeExternals()], // <-- and here
  entry: './src/index.ts',
  output: {
    // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  devtool: false,
  resolve: {
    // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: ['.ts', '.js'],
  },
  // plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es6',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'es6', // override `tsconfig.json` so that TypeScript emits native JavaScript modules.
        },
      },
    ],
  },
};

module.exports = config;
