const { odd, even } = require("./var"); //중복 제거를 위해 모듈화
const checkNumber = require("./func");

function checkStringOddOrEven(str) {
  if (str.legnth % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkStringOddOrEven;
