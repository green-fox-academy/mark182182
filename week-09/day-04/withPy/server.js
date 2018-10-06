'use strict';

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mySQL = require('mysql'),
  path = require('path'),
  PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('assets'));

const conn = mySQL.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'hello',
  database: 'AlopexOrientationExam',
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log(`Connection to Db established`);
});

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/attractions', (req, res) => {
  conn.query(`SELECT * FROM attractions`, (err, attractions) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(attractions);
  });
});

app.post('/add', (req, res) => {
  const { att_id, name, city, price, latitude, longitude, category, duration, recommendedAge } = req.body;

  if (att_id === 'undefined') {
    conn.query(`INSERT INTO attractions (attr_name, city, category, price, latitude, longitude, recommended_age, duration) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, [name, city, category, price, latitude, longitude, recommendedAge, duration], (err, attractions) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      conn.query(`SELECT * FROM attractions ORDER BY id DESC LIMIT 1`, [name, city, category, price, latitude, longitude, recommendedAge, duration], (err, newId) => {
        if (err) {
          console.log(err.toString());
          res.status(500).send('Database error');
          return;
        }
        res.json({
          status: 'ok',
          id: newId[0].id
        });
      });
    });
  }
  else {
    conn.query(`UPDATE attractions SET attr_name = ?, city = ?, category = ?, price = ?, latitude = ?, longitude = ?, recommended_age = ?, duration = ? WHERE id = ?`, [name, city, category, price, latitude, longitude, recommendedAge, duration, att_id,], (err) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.json({
        status: 'ok',
        id: att_id
      });
    });
  }
});

app.get('/budget', (req, res) => {
  getBudgetAttraction(req, res);
});

const server = app.listen(PORT,
  console.log(`Server is up on port ${PORT}`));

function getBudgetAttraction(req, res) {
  conn.query(`SELECT * FROM attractions WHERE category = ? ORDER BY price ASC LIMIT 1;
  SELECT * FROM attractions WHERE category = ? ORDER BY price ASC LIMIT 1;
  SELECT * FROM attractions WHERE category = ? ORDER BY price ASC LIMIT 1;`, ['restaurant', 'park', 'museum'], (err, budgetAttraction) => {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.status(200).json(budgetAttraction);
    });
}

module.exports = { conn, server, app };