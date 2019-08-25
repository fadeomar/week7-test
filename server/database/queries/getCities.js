const connection = require("../config/connection");

const getCities = () => {
  const sql = `SELECT * FROM city`;
  return connection.query(sql);
};

module.exports = getCities;
