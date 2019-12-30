const express = require('express');
const getProducts = require('./getProducts');

const app = express();

const PORT = 3000;

app.get('/api/products', getProducts);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});