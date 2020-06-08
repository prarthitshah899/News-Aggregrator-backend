const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "shah_electronicsv2",
  password: "bunnydon123"
});

module.exports = pool.promise();
