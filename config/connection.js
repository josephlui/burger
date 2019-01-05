var mysql = require("mysql");
require('dotenv').config();

var connection = {};

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.dbhost,
        port: process.env.dbport,
        user: process.env.dbuser,
        password: process.env.dbpassword,
        database: process.env.database,
      });

}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
