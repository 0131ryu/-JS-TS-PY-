const mysql = require("mysql2/promise");
const { databaseSecret } = require("../js/secret");

exports.pool = mysql.createPool(databaseSecret);
