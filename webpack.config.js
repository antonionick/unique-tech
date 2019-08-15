const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
      }
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