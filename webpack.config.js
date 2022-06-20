const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // Punto de entrada
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Modulos que definen las reglas de optimización mediante loaders
  module: {
    rules: [
      // Optimización de JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Optimización de Html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // Optimización CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },

  // Plugins para indicar las salidas
  plugins: [
    // Html
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    // Dotenv
    new Dotenv(),
    // Css
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
  // Servidor de salida de la App
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    devMiddleware: {
      index: 'index.html',
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
};
