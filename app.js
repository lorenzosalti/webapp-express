const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

// routers import
const moviesRouter = require('./routers/movies.js');

// middlewares import
const genericError = require('./middlewares/genericError.js');
const notFound = require('./middlewares/notFound.js');


console.log(process.env)
// cors
app.use(cors({
  origin: process.env.FE_APP
}));


// static assets middleware
app.use(express.static('public'));

// body parsing middleware
app.use(express.json());


// homepage
app.get('/', (req, res) => {
  res.send('Webapp homepage');
});

// movies router
app.use('/movies', moviesRouter);



// use 500
app.use(genericError);
// use 404
app.use(notFound);


// server listen
app.listen(port, () => {
  console.log('Webapp server listening at port ' + port);
});