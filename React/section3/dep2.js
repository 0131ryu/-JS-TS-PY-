const dep1 = require("./dep1");
console.log("require dep1", dep1);

module.exports = () => {
  console.group("dep1", dep1);
};
