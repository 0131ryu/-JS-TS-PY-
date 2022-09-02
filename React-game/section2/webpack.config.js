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
  output: {
    //출력
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
