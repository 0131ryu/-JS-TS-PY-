const { pool } = require("../../database");

exports.getUserRows = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "SELECT * FROM Users;";
      const [row] = await connection.query(selectUserQuery);
      return row; //추가해야 함
    } catch (error) {
      console.error(`#### getUserRows Query error ######`);
      return false;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(`#### getUserRows DB error ######`);
    return false;
  }
};
