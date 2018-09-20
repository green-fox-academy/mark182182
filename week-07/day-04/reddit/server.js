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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/posts', function (req, res) {
  conn.query(`SELECT * from posts WHERE id BETWEEN 25 AND 74`, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});