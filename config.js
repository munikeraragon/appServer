/*
 * Module:
 *      Provides connection to database
 */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "MunikerSuper",
  password: "Password12345!$",
  database: "app_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
