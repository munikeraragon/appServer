/*
 * Module:
 *      Provides connection to database
 */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "superUser",
  password: "Haahaa1234$",
  database: "App_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
