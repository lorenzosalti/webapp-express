

// index
function index(req, res) {

  res.json('Movies Index');

};


// show
function show(req, res) {

  res.json('Movie Detail');

};




module.exports = { index, show }