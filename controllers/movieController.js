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

  // movie id from request
  const movieId = req.params.id;

  // sql query
  const sql = 'SELECT * FROM movies WHERE id = ?';

  // connection to db
  connection.query(sql, [movieId], (err, results) => {

    // db or query fail
    if (err) return res.status(500).json({ error: 'Database query failed' });

    // movie not found
    if (results.length === 0) return res.status(404).json({ error: 'Movie not found' });

    // successful
    res.json(results[0]);
  });

};




module.exports = { index, show }