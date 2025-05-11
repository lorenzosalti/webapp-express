const express = require('express');
const app = express();
const port = 3000;

// middlewares import
const genericError = require('./middlewares/genericError.js');
const notFound = require('./middlewares/notFound.js');


// homepage
app.get('/', (req, res) => {
  res.send('Webapp homepage');
});



// middleware for handling errors
app.use(genericError);
app.use(notFound);


// server listen
app.listen(port, () => {
  console.log('Webapp server listening at port ' + port);
});