var path = require('path')

var notifier = require('node-notifier')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'public/index.js',
    publicPath: '/',
    pathinfo: true,
    // path: path.resolve(__dirname, '/')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: [{
        loader: 'file-loader',
        query: {
          name: 'public/images/[name].[hash:8].[ext]'
        },
      }],
        
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new FlowBabelWebpackPlugin(),
  ],
}
