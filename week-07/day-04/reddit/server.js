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
  getRows(req, res);
});

app.post('/posts', function (req, res) {
  req.headers.accept = 'application/json';
  const title = req.body.title;
  const url = req.body.url;

  conn.query(`INSERT INTO posts (title, url) VALUES('${title}','${url}')`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    else {
      console.log(`Inserted ${req.body.title}`);
      getRows(req, res, `WHERE title = '${title}' ORDER BY id DESC LIMIT 1`);
    }
  });
});

app.put('/posts/:id/upvote', function (req, res) {
  req.headers.accept = 'application/json';
  voteChange(req, res, '+');
});

app.put('/posts/:id/downvote', function (req, res) {
  req.headers.accept = 'application/json';
  voteChange(req, res, '-');
});

app.delete('/posts/:id', function (req, res) {
  const postId = req.params.id;
  
  conn.query(`DELETE FROM posts WHERE id = ${postId}`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    else {
      res.send(`Post with ${postId} deleted.`);
    }
  });
});

app.put('/posts/:id', function (req, res) {
  const postId = req.params.id;
  const title = req.body.title;
  const url = req.body.url;

  conn.query(`UPDATE posts SET title = '${title}', url = '${url}' WHERE id = ${postId}`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
  });
  getRows(req, res, `WHERE id = ${postId}`);
});

function voteChange(req, res, operation) {
  const postId = req.params.id;

  conn.query(`UPDATE posts SET score = score ${operation}1 WHERE id = ${postId}`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
  });
  getRows(req, res, `WHERE id = ${postId}`);
}

function getRows(req, res, queryParameter) {
  conn.query(`SELECT * from posts ${queryParameter}`, function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json(rows);
  });
}

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});