const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './vue/index.js',
  output: {
    path: path.resolve(__dirname, 'docs/vue'),
    filename: '[name].[hash].js',
    publicPath: process.env.NODE_ENV === 'production' ? 'https://www.clicli.me/vue' : '/'
  },
  resolve: {
    alias: {
      component: path.resolve(__dirname, 'vue/component'),
      public: path.resolve(__dirname, 'vue/public'),
      api: path.resolve(__dirname, 'vue/api'),
      widget: path.resolve(__dirname, 'vue/widget')
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
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './vue/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*/**', '!CNAME']
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    })
  ],
  devServer: {
    headers: {'Access-Control-Allow-Origin': '*'},
    contentBase: path.join(__dirname, 'docs/vue'),
    compress: true,
    port: 7070,
    historyApiFallback: true,
    hot: true
  }
}