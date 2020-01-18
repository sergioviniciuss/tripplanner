module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["url-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3000
  }
};
