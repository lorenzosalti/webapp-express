const connection = require('../data/db');

// index
function index(req, res) {

  const { search } = req.query;

  const queryParams = [];

  // sql query
  let sql = `
    SELECT movies.*, ROUND(AVG(reviews.vote), 2) AS average_vote
    FROM movies
    LEFT JOIN reviews
    ON movies.id = reviews.movie_id`;

  if (search) {
    queryParams.push(`%${search}%`, `%${search}%`, `%${search}%`);

    sql += ` WHERE title LIKE ? OR director LIKE ? OR abstract LIKE ?`;
  }

  sql += ` GROUP BY movies.id`;

  // connection to db
  connection.query(sql, queryParams, (err, results) => {

    if (err) return res.status(500).json({ error: 'Database query failed' });

    res.json(results.map(movie => (
      {
        ...movie,
        image: process.env.PUBLIC_PATH + movie.image
      }
    )));

  });

};


// show
function show(req, res) {

  // movie id from request
  const movieId = req.params.id;

  // sql movie query
  const sql = `
    SELECT movies.*, ROUND(AVG(reviews.vote), 2) AS average_vote
    FROM movies
    LEFT JOIN reviews
    ON movies.id = reviews.movie_id
    WHERE movies.id = ?`;

  connection.query(sql, [movieId], (err, results) => {

    // db or query fail
    if (err) return res.status(500).json({ error: 'Database query failed' });

    // movie not found
    if (results.length === 0) return res.status(404).json({ error: 'Movie not found' });

    const movie = results[0];

    // sql reviews query
    const sql = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(sql, [movieId], (err, results) => {

      // db or query fail
      if (err) console.log(err);

      // create reviews key in movie
      movie.reviews = results;

      movie.image = process.env.PUBLIC_PATH + movie.image;

      res.json(movie);

    });

  });

};




module.exports = { index, show }