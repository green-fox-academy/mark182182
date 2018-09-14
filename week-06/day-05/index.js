const express = require('express');
const app = express();
const PORT = 3000;

const images = [
  { name: 'Cat one', link: 'https://bit.ly/2xiWOGC' },
];

app.use('/assets', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('images', {
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});