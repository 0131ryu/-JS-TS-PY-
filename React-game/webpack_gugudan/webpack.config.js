const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval",
  //입력
  entry: {
    app: "./client",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    //여러 개 규칙 적용
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  //출력
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
