const express = require('express');
const app = express();
const port = 3000;







// server listen
app.listen(port, () => {
  console.log('Server in ascolto alla porta ' + port);
});