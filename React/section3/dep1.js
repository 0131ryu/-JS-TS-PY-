const dep2 = require("./dep2");
console.log("require dep2", dep2);

module.exports = () => {
  console.group("dep2", dep2);
};
