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
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/posts', function (req, res) {
  req.headers.accept = 'application/json';
  conn.query(`SELECT * from posts`, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', function (req, res) {
  req.headers.accept = 'application/json';
  const title = req.body.title;
  const url = req.body.url;
  const username = req.body.username;
  conn.query(`INSERT INTO posts (title, url, owner) VALUES('${title}','${url}', '${username}')`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    else {
      console.log(`Inserted ${req.body.title}`);
      conn.query(`SELECT * from posts WHERE title = '${title}' ORDER BY id DESC LIMIT 1`, function (err, rows) {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        res.status(200).json(rows);
      });
    }
  });
});

/* app.put('/posts/:id/upvote', function (req, res) {
  const postId = req.param.id;
  const vote = req.body.vote;
  req.headers.accept = 'application/json';
  conn.query(`UPDATE posts SET vote = ${vote + 1} WHERE id = ${postId}`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    else {
      console.log(`Upvote on id ${postId}`);
    }
    res.json({ rows });
  });
}); */

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});