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
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
    ]
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
  ],
}

 // {
 //      test: /\.scss$/,
 //      use: [{ loader: "style-loader" }, { loader: "css-loader" }, 
 //            { loader: "sass-loader",
 //          options: {
 //              includePaths: ["absolute/path/a", "absolute/path/b"]
 //          }
 //      }]