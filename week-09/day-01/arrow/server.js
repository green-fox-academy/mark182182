const express = require('express');
const app = express();
const PORT = 3000;

app.get('/yondu', (req, res) => {
  const distance = req.query.distance;
  const time = req.query.time;
  res.status(200).json({ distance: distance, time: time, speed: distance / time });
});

const server = app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});

module.exports = { app, server };