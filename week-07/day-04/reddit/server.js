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
  multipleStatements: true,
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

app.get('/submit', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'submit.html'));
});

app.get('/modify', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'modify.html'));
});

app.get('/create', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, 'create.html'));
});

app.get('/posts', function (req, res) {
  req.headers["content-type"] = "application/json";
  getRows(req, res);
});

app.post('/create', function (req, res) {
  const owner = req.body.owner;
  const password = req.body.password;

  conn.query(`INSERT INTO users (owner, password) VALUES('${owner}', SHA1('${password}'))`, function (err) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    else {
      console.log(`Inserted ${owner}`);
      getUserId(req, res);
    }
  });
});

app.post('/posts', function (req, res) {
  req.headers["content-type"] = "application/json";
  const title = req.body.title;
  const url = req.body.url;
  const username = req.body.username;

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
  req.headers["content-type"] = "application/json";
  voteChange(req, res, '+');
});

app.put('/posts/:id/downvote', function (req, res) {
  req.headers["content-type"] = "application/json";
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
    console.log(`Post with id ${postId} deleted.`);
    reCreateids(req, res);
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

function reCreateids(req, res) {
  conn.query(`SET @num := 0;
  UPDATE posts SET id = @num := (@num+1);
  ALTER TABLE posts AUTO_INCREMENT =1;`, function (err) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
    });
}

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

function getUserId(req, res) {
  const username = req.body.owner;
  conn.query(`SELECT owner_id FROM users WHERE owner = '${username}'`, function (err, username) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json({ username });
  });
}