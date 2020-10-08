const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-souce-map",
  entry: "./src/type.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  // devServer: {
  //   open: 'Google Chrome'
  // }
};
