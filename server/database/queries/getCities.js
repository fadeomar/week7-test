const connection = require("../config/connection");

const getCities = () => {
  const sql = `SELECT * FROM cities`;
  return connection.query(sql);
};

module.exports = getCities;
