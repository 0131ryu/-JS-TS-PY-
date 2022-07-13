const mysql = require("mysql2/promise");

exports.pool = mysql.createPool({
  host: "www.seongong.site",
  user: "dummy",
  port: "3306",
  password: "12341234",
  database: "KakaotalkDB",
});
