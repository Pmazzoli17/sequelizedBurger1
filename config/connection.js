// Require mysql
var mysql = require('mysql');
var connection;

// Set up our connection information
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  port: 3306,
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'burgers_db'
	});
};

// Connect to the database
connection.connect(function(err){
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});

// Export connection for the ORM to use 
// connection.connect();
module.exports = connection;
