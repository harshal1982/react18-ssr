const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const clientcommonconfig = require('./webpack.client.common');
const servercommonconfig = require('./webpack.server.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const clientConfig = merge(clientcommonconfig, {
  mode: 'development',
  target: 'web',
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
	
  },

  
  plugins: [
    new ProgressBarPlugin(),
	new CopyWebpackPlugin({
        patterns: [
          {from: "src/images", to: "images/"}
        ],
      }),
    new webpack.DefinePlugin({
      HTTP_DEFAULT_TIMEOUT: 5000,
    }),
  ],
});

const serverConfig =  merge(servercommonconfig, {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    
  },
  externals: [nodeExternals()],  
  plugins: [
    new ProgressBarPlugin(),
	
    new NodePolyfillPlugin(),
    new NodemonPlugin({
      watch: path.resolve('../build'),
      ext: 'js,json',
      filename: 'server.js',
      verbose: true,
      env: {
        NODE_ENV: 'development',
      },
    }),
    new webpack.DefinePlugin({
      HTTP_DEFAULT_TIMEOUT: 5000,
    }),
  ],
});

module.exports = [clientConfig, serverConfig];
