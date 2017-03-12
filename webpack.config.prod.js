var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'public/index.js',
    publicPath: '',
    pathinfo: true,
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
  ],
}
