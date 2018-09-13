const express = require('express');
const app = express();
const PORT = 3000;
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('todos', {
    todo1: todos[0],
    todo2: todos[1],
    todo3: todos[2],
  });
});

app.listen(PORT);