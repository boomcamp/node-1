const express = require('express');

const app = express();
const getProducts = require('./getProducts');
const PORT = 3000;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProducts);
app.listen(PORT, (err) => {
	if (err) return console.error(err);
	console.log(`Server is running on PORT: ${PORT}`);
});
