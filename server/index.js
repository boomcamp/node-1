const express = require('express');

const app = express();

const PORT = 3000;
const products = require('../products.json');

app.get('/api/products', (req, res) => {
	res.send(products);
});

app.listen(PORT, (err) => {
	if (err) return console.error(err);
	console.log(`Server is running on PORT: ${PORT}`);
});
