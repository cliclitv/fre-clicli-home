const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: process.env.NODE_ENV === 'vue' ? './vue/index.js' : './fre/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, 'fre/component'),
      public: path.resolve(__dirname, 'fre/public'),
      api: path.resolve(__dirname, 'fre/api'),
      widget: path.resolve(__dirname, 'fre/widget')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './fre/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!CNAME']
    }),

    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  devServer: {
    headers: {'Access-Control-Allow-Origin': '*'},
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true
  }
}