const { odd, even } = require("./var");
console.time("zerocho");
function checkOddEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}
console.timeEnd("zerocho");
module.exports = checkOddEven;
