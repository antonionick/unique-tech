const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const ImageWebpackLoader = require("image-webpack-loader");

const fs = require('fs');

module.exports = {
  entry: {
    unique_tech: "./dev/webpack.work.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: "file-loader",
        options: {
          name: "[name].html",
        }
      },
      {
        test: /.(woff(2)?|ttf|otf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/",
        }
      },
      {
        test: /\.(png|jp(e?)g)/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "imgs/",
            }
          },

          {
            loader: 'image-webpack-loader',
            options: {},
          }
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    overlay: true,
    publicPath: "/dist/",
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};