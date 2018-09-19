const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'bookstore',
	password: 'hello',
});

conn.connect((err) => {
	if (err) {
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', function (req, res) {
	conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author ON book_mast.aut_id = author.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN publisher ON book_mast.pub_id = publisher.pub_id;', function (err, rows) {
		if (err) {
			console.log(err.toString());
			res.status(500).send('Database error');
			return;
		}
		res.json(rows);
	});
});

app.listen(PORT, () => {
	console.log(`App is up and running on port ${PORT}`);
});