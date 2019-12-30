//require express
const express = require('express');
const app = express();

//declare port
const PORT = 3001;

//require getProducts
const getProducts = require('./getProducts.js');

//require getProduct
const getProduct = require('./getProduct.js')

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);

app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
});

