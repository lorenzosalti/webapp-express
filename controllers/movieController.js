const connection = require('../data/db');

// index
function index(req, res) {

  // sql query
  const sql = 'SELECT * FROM movies';

  // connection to db
  connection.query(sql, (err, results) => {

    if (err) return res.status(500).json({ error: 'Database query failed' });

    res.json(results);

  });

};


// show
function show(req, res) {

  res.json('Movie Detail');

};




module.exports = { index, show }