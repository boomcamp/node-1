const express = require('express');
const port = 3000;
const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});