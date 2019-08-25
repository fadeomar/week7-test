const { Pool } = require("pg");
require("env2")("config.env");
let dbUrl = "";
if (process.env.NODE_ENV === "production") dbUrl = process.env.DATABASE_URL;
else dbUrl = process.env.DB_URL;
const opt = {
  connectionString: dbUrl,
  ssl: true
};

module.exports = new Pool(opt);
