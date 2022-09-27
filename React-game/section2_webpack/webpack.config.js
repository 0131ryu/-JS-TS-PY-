const path = require("path");

module.exports = {
  //이름
  name: "word-relay-setting",
  mode: "development", //실서비스는 production
  devtool: "eval", //빠르게
  //입력
  entry: {
    //client.jsx에서 WordRelay 불러옴
    app: "./client",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //babel 설치 후
  module: {
    //여러 개 규칙 적용
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  //출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
