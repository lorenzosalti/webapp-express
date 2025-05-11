const express = require('express');
const app = express();
const port = 3000;

// middlewares import
const genericError = require('./middlewares/genericError.js');
const notFound = require('./middlewares/notFound.js');

// static assets middleware
app.use(express.static('public'));

// body parsing middleware
app.use(express.json());


// homepage
app.get('/', (req, res) => {
  res.send('Webapp homepage');
});



// use 500
app.use(genericError);
// use 404
app.use(notFound);


// server listen
app.listen(port, () => {
  console.log('Webapp server listening at port ' + port);
});