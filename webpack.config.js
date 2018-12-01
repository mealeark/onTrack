const path = require('path');
const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: publicDIR
  }
};