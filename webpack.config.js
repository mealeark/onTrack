const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const publicDIR = path.join(__dirname, 'public');
const buildDIR = path.join(__dirname, 'public/build');

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(buildDIR),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.scss$/,
      //   loader: combineLoaders([
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       query: {
      //         modules: true,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]),
      // },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: publicDIR,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: process.env.PORT || 8080, // Defaults to 8080
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      '^/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
  },
  plugins: [
    new ExtractTextPlugin('style.scss'),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],
};