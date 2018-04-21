const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'eval',
  entry: process.env.NODE_ENV === 'development'? [
    'webpack-dev-server/client?',
    './src/client'
  ]:['./src/client'],
  output: {
    path: path.join(__dirname),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
		publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.mov', '.ttf', '.eot', '.woff', '.woff2']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader'
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg|mov|ttf|eot|woff2?)$/,
      use: [{
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/client/index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'src/asset/static/**/*',
      to: '[name].[ext]'
    }]),
    new webpack.DefinePlugin({
      'PREFIX': JSON.stringify(process.env.PREFIX? process.env.PREFIX : '!')
    })
  ]
}
