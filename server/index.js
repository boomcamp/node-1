const express = require('express');
const products = require('../products.json');

const PORT = 3000;
const app = express();

const  getProducts  = require('./getProducts');
const  getProduct  = require('./getProduct');


app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(PORT, (err) => {
    if(err){
        console.log(err)
    }
  console.log(`Im Running at port ${PORT}`);
});
