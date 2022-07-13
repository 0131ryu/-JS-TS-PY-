const indexDao = require("../dao/indexDao");

exports.dummy = function (req, res) {
  return res.send("it works Controller");
};

exports.postLogic = function (req, res) {
  const { name } = req.body;
  console.log(name);
  return res.send(name);
};

exports.getUsers = async function (req, res) {
  //로직
  const token = req.headers["x-access-token"];
  console.log(token);
  // const [userRows] = await indexDao.getUserRows();
  // return res.send(userRows);
};
