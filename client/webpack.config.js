const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/pages/home/index.js",
    products: "./src/pages/products/products.js",
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "[name].bundle.js",
  // },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: [path.join(__dirname, "src/templates/partials")],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/home/home.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/products/products.hbs",
      filename: "products.html",
      chunks: ["products"],
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    // client: {
    //   overlay: false,
    // },
    port: 3000,
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  resolve: {
    alias: {
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
};
