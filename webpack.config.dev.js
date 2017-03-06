var path = require('path');

var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
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
        }
    ]
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
  ],
}
