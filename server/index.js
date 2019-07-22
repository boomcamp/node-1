const express = require('express');
const products = require('../products.json');

const app = express();

const getProducts = require('getProducts.js');

const port = 3001;

app.get('/', getProducts)


app.listen(port, () => {
	console.log(`[+] Server listening on port: ${port}`);
});

