const express = require('express');
const products = require('../products.json');

const app = express();

const getProducts = require('./getProducts.js');
const getProduct = require('./getProduct.js');

const port = 3001;

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(port, () => {
	console.log(`[+] Server listening on port: ${port}`);
});

