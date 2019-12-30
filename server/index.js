const express = require('express');
// const products = require('../products.json');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});