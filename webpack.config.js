const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].js',
    publicPath: process.env.NODE_ENV === 'development' ? '/' : 'https://www.clicli.me'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src/component'),
      public: path.resolve(__dirname, 'src/public'),
      api: path.resolve(__dirname, 'src/api'),
      widget: path.resolve(__dirname, 'src/widget')
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
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api/*': {
        pathRewrite: { '^/api': '' },
        target: 'https://api.clicli.us'
      }
    }
  }
}
