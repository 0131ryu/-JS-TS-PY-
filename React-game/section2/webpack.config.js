const path = require("path");

module.exports = {
  name: "wordreply-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    //입력
    app: ["./client"], //WordRelay도 같이 불러옴
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    //출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
