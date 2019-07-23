const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')
const app = express();
const port = 3001;

app.get('/api/products', getProducts)
app.get('/api/product/:id',getProduct)
//app.get('/api/product/:price',getProducts)

app.listen(port, ()=> { console.log(`Listening now on PORT: ${port}`); });
