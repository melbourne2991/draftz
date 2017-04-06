const express = require('express');
const app = express();
const port = 3040;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/notes', (req, res) => {
  res.json({
    id: Math.random().toString().split('.')[1]
  });
});

app.listen(port, () => {
  console.log(`Stub server listening on ${port}`);
});
