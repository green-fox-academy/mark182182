const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mySQL = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

const conn = mySQL.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'hello',
  database: 'reddit',
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log(`Connection to Db established`);
});

app.get('/hello', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
console.log(`Server is up on ${PORT}`);
});