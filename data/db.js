const mysql = require('mysql2');

// connection to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

// db error handling
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});


module.exports = connection;