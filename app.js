const express = require('express');
const app = express();
const port = 3000;




// homepage
app.get('/', (req, res) => {
  res.send('Webapp homepage');
});


// server listen
app.listen(port, () => {
  console.log('Webapp server listening at port ' + port);
});