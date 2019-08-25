const connection = require("../config/connection");
const addCity = (name, city) => {
  const sql = {
    text: `INSERT INTO city (name, city_name) VALUES ($1,$2)`,
    values: [name, city]
  };
  return connection.query(sql);
};

module.exports = addCity;
