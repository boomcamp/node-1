const express = require('express');
const PORT = 3000;
const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});