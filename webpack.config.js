// 參考這邊
// https://ithelp.ithome.com.tw/articles/10215128

const path = require("path");
module.exports = {
  entry: "./codeMirror/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./"),
  },
};
